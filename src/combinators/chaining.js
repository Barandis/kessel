// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { makeParser, ok, Status } from 'kessel/core'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
 *
 * If the initial parser fails, that failure is instead returned.
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */
export const chain = (p, fn) => makeParser(state => {
  const nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState
  return fn(nextState.result)(nextState)
})

/**
 * Creates a parser that applies the supplied parser and passes its
 * result to the provided function. The return value of that function
 * becomes the result of the created parser.
 *
 * If the contained parser fails, that failure is propagated out as the
 * failure of the returned parser.
 *
 * @param {Parser} p The parser to apply to the input.
 * @param {function(*):*} fn A mapping function that is passed the
 *     result of `p` and whose return value will be the result of the
 *     created parser.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */
export const map = (p, fn) => makeParser(state => {
  const nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState
  return ok(nextState, fn(nextState.result))
})

/**
 * Creates a parser which applies the supplied parser. That parser is
 * expected to result in an array of strings, and if it succeeds, that
 * result's elements are joined together into a single string.
 *
 * If the supplied parser fails, the created parser will also fail with
 * the same state.
 *
 * This is a slightly optimized version of `map(p, x => x.join(''))`. It
 * is useful because JavaScript strings are not lists of characters as
 * they are in some languages, so if a `many` parser (for instance)
 * results in an array of single-character strings, a separate mechanism
 * is necessary to turn them into a single string. This parser provides
 * that mechanism.
 *
 * If the supplied parser does not result in an array, an exception will
 * be thrown because an attempt will be made to call `join` on the
 * result. If it results in an array of something other than strings,
 * those elements will be coerced into strings and then joined.
 *
 * @param {Parser} p A parser that is expected to result in an array of
 *     strings.
 * @returns {Parser} A parser that applies its contained parser and
 *     results in a single string made from joining the elements of the
 *     array of strings.
 */
export const join = p => makeParser(state => {
  const nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState
  return ok(nextState, nextState.result.join(''))
})

/**
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */
export const skip = p => makeParser(state => {
  const nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState
  return ok(nextState, null)
})
