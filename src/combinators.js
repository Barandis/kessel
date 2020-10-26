// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { failure, Parser, success } from './core'
import { assertParser } from './util'

// Executes the supplied parser. If the parser succeeds, `desc` simply
// passes the result through; but if it fails, `desc` replaces its
// expected with the supplied string. Useful for providing clearer
// error messages from composed parsers.
export const desc = (p, str) => Parser(state => {
  assertParser(p, 'desc')

  const nextState = p(state)
  if (!nextState.success) {
    return failure(nextState, { expected: [str] })
  }
  return nextState
})

// Executes the supplied parser. If the parser succeeds, `back` simply
// passes the result through. If it fails, `back` passes the failure
// through as well, but it resets its index to what it was before the
// parser was executed. This functionally backtracks the supplied parser
// to where it started if it fails.
export const back = p => Parser(state => {
  assertParser(p, 'back')

  const index = state.index
  const nextState = p(state)
  if (nextState.success) return nextState
  return failure(nextState, { index })
})

// Implements alternatives. Each parser is executed one at a time, in
// order. When the first parser succeeds, or the first parser fails
// while consuming input, execution is stopped and the state from that
// last parser is passed through. The same happens if all parsers are
// executed without any of them succeeding.
//
// On failure, the state object's `expected` property is set to all of
// the expecteds from each failed parser merged into a single array.
export const alt = (...ps) => Parser(state => {
  const index = state.index
  let nextState = state
  let expecteds = []

  for (const p of ps) {
    assertParser(p, 'alt')

    nextState = p({ ...nextState, expected: [] })

    if (nextState.success) return nextState
    expecteds = [...expecteds, ...nextState.expected]
    if (nextState.index !== index) break
  }

  return failure(nextState, { expected: expecteds })
})

// Implements a sequence. Each parser is executed in order until either
// they all succeed or the first one fails. In the former case, all
// results are merged into an array that becomes the `seq` parser's
// result.
export const seq = (...ps) => Parser(state => {
  const results = []
  let nextState = state

  for (const p of ps) {
    assertParser(p, 'seq')

    nextState = p(nextState)

    if (!nextState.success) return nextState
    if (nextState.result !== null) results.push(nextState.result)
  }

  return success(nextState, { result: results })
})

// Executes a block of code in the form of a generator function. Inside
// that function, parsers that are `yield`ed will be executed and will
// evaluate to their results (which can then be assigned to variables,
// etc.). If any of these parsers fail, `block` will also fail with that
// failure.
//
// If all parsers in the block succeed, `block` will succeed with the
// value that the generator function returned.
//
// Only parsers may be yielded in a block. Yielding anything else will
// throw an exception.
export const block = genFn => Parser(state => {
  const gen = genFn()
  let nextValue
  let nextState = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return success(nextState, { result: value })

    assertParser(value, 'block')
    nextState = value(nextState)
    if (!nextState.success) return nextState
    nextValue = nextState.result
  }
})
