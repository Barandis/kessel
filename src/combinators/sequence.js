// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, Parser, ParserStatus } from 'kessel/core'

// Implements a sequence. Each parser is executed in order until either
// they all succeed or the first one fails. In the former case, all
// results are merged into an array that becomes the `sequence` parser's
// result.
export const sequence = (...ps) => Parser(state => {
  const results = []
  const index = state.index
  let nextState = state

  for (const p of ps) {
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
  const gen = genFn()
  const index = state.index
  let nextValue
  let nextState = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(nextState, value)

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