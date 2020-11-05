// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from 'kessel/core'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * The returned parser may fail fatally even if the unsuccessful
 * contained parser fails non-fatally. This will happen if any previous
 * parser succeeded and consumed input. Essentially, if the returned
 * parser consumes anything and then fails, it will fail fatally.
 *
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */
export const sequence = ps => makeParser(state => {
  const results = []
  const index = state.index
  let nextState = state

  for (const p of ps) {
    nextState = p(nextState)

    if (nextState.status !== Status.Ok) {
      return nextState.index === index ? error(nextState) : fatal(nextState)
    }
    if (nextState.result !== null) results.push(nextState.result)
  }
  return ok(nextState, results)
})

/**
 * Creates a parser that executes a block of code in the form of a
 * generator function. Inside that function, parsers that are `yield`ed
 * will be executed and will evaluate to their results (which can then
 * be assigned to variables, etc.). If any of these parsers fail,
 * `block` will also fail with that failure. This failure will be fatal
 * if any input was consumed.
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause undefined behavior.
 *
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; yielding anything else will cause incorrect behavior
 *     depending on what exactly is yielded.
 * @returns {Parser} A parser that executes the generator function,
 *     applies parsers as they are yielded, and results (if all parsers
 *     succeed) in the return value of the generator.
 */
export const block = genFn => makeParser(state => {
  const gen = genFn()
  const index = state.index
  let nextValue
  let nextState = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(nextState, value)

    nextState = value(nextState)
    if (nextState.status !== Status.Ok) {
      return nextState.index === index ? error(nextState) : fatal(nextState)
    }
    nextValue = nextState.result
  }
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful results into an array and providing
 * that as its own result. The returned parser only fails if the
 * supplied parser consumes input when it fails. Otherwise, it succeeds
 * even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many = p => makeParser(state => {
  const results = []
  let nextState = state

  while (true) {
    nextState = p(nextState)
    if (nextState.status === Status.Fatal) return nextState
    if (nextState.status === Status.Error) break
    results.push(nextState.result)
    if (nextState.index >= nextState.view.byteLength) break
  }
  return ok(nextState, results)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful results into an array and providing
 * that as its own result. The contained parser must succeed at least
 * once, or the returned parser will fail. Otherwise, the returned
 * parser only fails if the supplied parser consumes input when it
 * fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many1 = p => makeParser(state => {
  let nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState

  const results = [nextState.result]
  while (true) {
    nextState = p(nextState)
    if (nextState.status === Status.Fatal) return nextState
    if (nextState.status === Status.Error) break
    results.push(nextState.result)
    if (nextState.index >= nextState.view.byteLength) break
  }
  return ok(nextState, results)
})
