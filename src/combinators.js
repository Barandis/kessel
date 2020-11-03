// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, Parser, ParserStatus } from './core'
import { ErrorType, expected, overwrite } from './error'
import { assertGeneratorFunction, assertParser, assertString } from './util'

// Executes the supplied parser. If the parser succeeds, `label` simply
// passes the result through; but if it fails, `label` replaces its
// expected with the supplied string. Useful for providing clearer error
// messages from composed parsers.
export const label = (p, str) => Parser(state => {
  assertParser(p, 'label')
  assertString(str, 'label')

  const nextState = p(state)
  if (nextState.status === ParserStatus.Error) {
    return error(nextState, overwrite(nextState.errors, expected(str)))
  }
  if (nextState.status === ParserStatus.Fatal) {
    return fatal(nextState, overwrite(nextState.errors, expected(str)))
  }
  return nextState
})

// Executes the supplied parser. If the parser succeeds or fails
// regularly, the state is simply passed through. If it fails fatally,
// the index is reset to what it was before the parser was executed and
// the failure is changed to non-fatal. This implements voluntary
// backtracking.
export const attempt = p => Parser(state => {
  assertParser(p, 'attempt')

  const index = state.index
  const nextState = p(state)
  if (nextState.status !== ParserStatus.Fatal) return nextState
  return error(nextState, undefined, index)
})

// Executes the supplied parser. If it succeeds, its result becomes the
// result of `lookAhead`. Either way, no input is consumed.
//
// As a side effect, any fatal parse error will be transformed into a
// non-fatal one, since no input is being consumed.
export const lookAhead = p => Parser(state => {
  assertParser(p, 'lookAhead')

  const index = state.index
  const nextState = p(state)
  return nextState.status === ParserStatus.Ok
    ? ok(nextState, undefined, index)
    : error(nextState, undefined, index)
})

// Implements alternatives. Each parser is executed one at a time, in
// order. When the first parser succeeds, or the first parser fails
// while consuming input, execution is stopped and the state from that
// last parser is passed through. The same happens if all parsers are
// executed without any of them succeeding.
//
// On failure, all of the expected error messages from any of the
// contained parsers will be included.
export const choice = (...ps) => Parser(state => {
  let nextState = state
  let expecteds = []

  for (const p of ps) {
    assertParser(p, 'choice')

    nextState = p({ ...nextState, errors: [] })

    if (nextState.status === ParserStatus.Ok) return nextState

    expecteds = [
      ...expecteds,
      ...nextState.errors.filter(error => error.type === ErrorType.Expected),
    ]

    if (nextState.status === ParserStatus.Fatal) {
      return fatal(nextState, overwrite(nextState.errors, ...expecteds))
    }
  }

  return error(nextState, overwrite(nextState.errors, ...expecteds))
})

// Implements a sequence. Each parser is executed in order until either
// they all succeed or the first one fails. In the former case, all
// results are merged into an array that becomes the `sequence` parser's
// result.
export const sequence = (...ps) => Parser(state => {
  const results = []
  const index = state.index
  let nextState = state

  for (const p of ps) {
    assertParser(p, 'seq')

    nextState = p(nextState)

    if (nextState.status !== ParserStatus.Ok) {
      return nextState.index === index ? error(nextState) : fatal(nextState)
    }
    if (nextState.result !== null) results.push(nextState.result)
  }

  return ok(nextState, results)
})

// Executes a block of code in the form of a generator function. Inside
// that function, parsers that are `yield`ed will be executed and will
// evaluate to their results (which can then be assigned to variables,
// etc.). If any of these parsers fail, `block` will also fail with that
// failure. This failure will be fatal if any input was consumed.
//
// If all parsers in the block succeed, `block` will succeed with the
// value that the generator function returned.
//
// Only parsers may be yielded in a block. Yielding anything else will
// throw an exception.
export const block = genFn => Parser(state => {
  assertGeneratorFunction(genFn, 'block')

  const gen = genFn()
  const index = state.index
  let nextValue
  let nextState = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(nextState, value)

    assertParser(value, 'block')
    nextState = value(nextState)
    if (nextState.status !== ParserStatus.Ok) {
      return nextState.index === index ? error(nextState) : fatal(nextState)
    }
    nextValue = nextState.result
  }
})

// Executes a parser until it fails, collecting all of the results into
// an array and providing that as its own result. This parser only fails
// if its contained parser consumes input when it fails. Otherwise, it
// succeeds even if the contained parser doesn't succeed even once.
export const many = p => Parser(state => {
  assertParser(p, 'many')

  const results = []
  let nextState = state

  while (true) {
    nextState = p(nextState)
    if (nextState.status === ParserStatus.Fatal) return nextState
    if (nextState.status === ParserStatus.Error) break
    results.push(nextState.result)
    if (nextState.index >= nextState.view.byteLength) break
  }
  return ok(nextState, results)
})

// Executes a parser until it fails, collecting all of the results into
// an array and providing that as its own result. This parser will fail
// if its contained parser does not succeed once. It will also fail
// (fatally) if its contained parser consumes input when and if it
// fails.
export const many1 = p => Parser(state => {
  assertParser(p, 'many1')

  let nextState = p(state)
  if (nextState.status !== ParserStatus.Ok) return nextState

  const results = [nextState.result]
  while (true) {
    nextState = p(nextState)
    if (nextState.status === ParserStatus.Fatal) return nextState
    if (nextState.status === ParserStatus.Error) break
    results.push(nextState.result)
    if (nextState.index >= nextState.view.byteLength) break
  }
  return ok(nextState, results)
})
