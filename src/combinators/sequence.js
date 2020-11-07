// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from 'kessel/core'
import { dup } from 'kessel/util'

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
export const seq = ps => makeParser(state => {
  const values = []
  const index = state.index
  let next = state

  for (const p of ps) {
    const [nextState, result] = p(next)
    next = nextState

    if (result.status !== Status.Ok) {
      return next.index === index
        ? error(next, result.errors)
        : fatal(next, result.errors)
    }
    if (result.value !== null) values.push(result.value)
  }
  return ok(next, values)
})

/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * The returned parser will not fail fatally. If it consumes input
 * before or during a failure, backtracking will be done and the state
 * will be left as it was before the sequence begain. In this way, this
 * is a slightly optimized version of `attempt(seq(ps))` (hence the
 * postfixed 'A').
 *
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */
export const seqA = ps => makeParser(state => {
  const values = []
  const index = state.index
  let next = state

  for (const p of ps) {
    const [nextState, result] = p(next)
    next = nextState

    if (result.status !== Status.Ok) return error(next, result.errors, index)
    if (result.value !== null) values.push(result.value)
  }
  return ok(next, values)
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
  let next = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(next, value)

    const [nextState, result] = value(next)
    next = nextState

    if (result.status !== Status.Ok) {
      return next.index === index
        ? error(next, result.errors)
        : fatal(next, result.errors)
    }
    nextValue = result.value
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
  const values = []
  let next = state

  while (true) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) break
    values.push(result.value)
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, values)
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
  const [tuple, [nextState, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple

  let next = nextState
  const values = [result.value]

  while (true) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) break
    values.push(result.value)
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, values)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The returned parser only
 * fails if the supplied parser consumes input when it fails. Otherwise,
 * it succeeds even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany = p => makeParser(state => {
  let next = state

  while (true) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) break
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, null)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The contained parser must
 * succeed at least once, or the returned parser will fail. Otherwise,
 * the returned parser only fails if the supplied parser consumes input
 * when it fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany1 = p => makeParser(state => {
  const [tuple, [nextState, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple

  let next = nextState

  while (true) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) break
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, null)
})
