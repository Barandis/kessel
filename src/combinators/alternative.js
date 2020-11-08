// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from 'kessel/core'
import { makeExpected } from 'kessel/error'
import { dup, range } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that implements alternatives. Each of the supplied
 * parsers is applied one at a time, in order. When the first parser
 * succeeds, or the first parser fails while consuming input, execution
 * is stopped and the state from that last parser is passed through. The
 * same happens if all parsers are applied without any of them
 * succeeding.
 *
 * On failure, all of the `Expected` errors from any of the contained
 * parsers will be merged into this parser's errors.
 *
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */
export const alt = ps => makeParser(state => {
  const errors = []

  for (const p of ps) {
    const [tuple, [next, result]] = dup(p(state))

    if (result.status === Status.Ok) return tuple
    errors.push(...result.errors)
    if (result.status === Status.Fatal) return fatal(next, errors)
  }
  return error(state, errors)
})

/**
 * Creates a parser that implements alternatives, but with a failure
 * message included. The parsers are tried one at a time as with `alt`,
 * but if they all fail (or if any fail fatally), the last argument is
 * used as the expected message rather than constructing it out of the
 * expected messages of each failed parser.
 *
 * `altL(ps, message)` is an optimized version of `label(alt(ps),
 * message)`.
 *
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @param {string} message The message for the `Expected` error that
 *     will result from the parser failing.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */
export const altL = (ps, message) => makeParser(state => {
  for (const p of ps) {
    const [tuple, [next, result]] = dup(p(state))

    if (result.status === Status.Ok) return tuple
    if (result.status === Status.Fatal) {
      return fatal(next, [makeExpected(message)])
    }
  }
  return error(state, [makeExpected(message)])
})

/**
 * Creates a parser that applies the supplied parser, succeeding whether
 * it fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally. It's used to
 * implement skipping over some optional text.
 *
 * @param {Parser} p The parser for optional content to be applied and
 *     then have its result ignored.
 * @return {Parser} A parser that succeeds with no result unless its
 *     contained parser fails fatally. This parser consumes text only
 *     if its contained parser succeeds.
 */
export const optional = p => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status === Status.Fatal) return tuple
  return ok(next, null)
})

/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied value
 * `x`. This parser only fails if its contained parser fails fatally.
 *
 * `orElse(p, x)` is an optimized implementation of `alt([p,
 * constant(x)])`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */
export const orElse = (p, x) => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Error) return tuple
  return ok(next, x)
})

/**
 * Creates a parser that transforms a fatal failure into a non-fatal
 * failure. It applies the supplied parser; if that parser fails
 * fatally, the state is set back to what it was *before* that parser is
 * applied and the fatal failure is returned as a non-fatal failure. If
 * the parser has any other result, it is passed through without
 * modification.
 *
 * This parser allows the user to cause a non-backtracking parser to
 * backtrack upon failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */
export const back = p => makeParser(state => {
  const index = state.index
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Fatal) return tuple
  return error(next, result.errors, index)
})

/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * If one of the parsers fails non-fatally, the entire parser will also
 * fail non-fatally, reverting the state to what it was before the first
 * parser was applied, even if previous parsers have consumed input. A
 * fatal error from one of the contained parsers will still result in an
 * overall fatal error.
 *
 * Note that `seqB(ps)` is not the same as `back(seq(ps))`, as the
 * former will fail fatally if one of `ps` fails fatally, while the
 * latter will fail non-fatally in that case.
 *
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */
export const seqB = ps => makeParser(state => {
  const values = []
  const index = state.index
  let next = state

  for (const p of ps) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) return error(next, result.errors, index)
    if (result.value !== null) values.push(result.value)
  }
  return ok(next, values)
})

/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
 *
 * If the second parser (the one provided by `fn`) fails non-fatally,
 * the entire parser will also fail non-fatally, reverting the state to
 * what it was before the first parser was applied, even if the first
 * parser consumed input. A fatal error from either parser will still
 * result in an overall fatal error.
 *
 * Note that `chainB(p, fn)` is not the same as `back(chain(p, fn))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
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
export const chainB = (p, fn) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(fn(result1.value)(next1))
  if (result2.status !== Status.Error) return tuple2
  return error(next2, result2.errors, index)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `leftB(p1, p2)` is not the same as `back(left(p1, p2))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */
export const leftB = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(p2(next1))
  if (result2.status === Status.Fatal) return tuple2
  if (result2.status === Status.Error) {
    return error(next2, result2.errors, index)
  }
  return ok(next2, result1.value)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `rightB(p1, p2)` is not the same as `back(right(p1, p2))`,
 * as the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */
export const rightB = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(p2(next1))
  if (result2.status !== Status.Error) return tuple2
  return error(next2, result2.errors, index)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `bothB(p1, p2)` is not the same as `back(both(p1, p2))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */
export const bothB = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(p2(next1))
  if (result2.status === Status.Fatal) return tuple2
  if (result2.status === Status.Ok) {
    return ok(next2, [result1.value, result2.value])
  }
  return error(next2, result2.errors, index)
})

/**
 * Creates a parser that applies the supplied parser `n` times,
 * collecting the successful results into an array. If any application
 * fails, the overall parser will fail; if that failure is fatal, the
 * overall failure will also be fatal.
 *
 * The parser will fail non-fatally if the underlying error was
 * non-fatal, even if input was consumed (backtracking will happen in
 * this case).
 *
 * @param {Parser} p A parser to apply multiple times.
 * @param {number} n The number of times to apply the parser.
 * @returns {Parser} A parser that applies `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const countB = (p, n) => makeParser(state => {
  const index = state.index
  const values = []
  let next = state

  for (const _ of range(n)) {
    const [tuple, [nextState, result]] = dup(p(next))
    next = nextState
    if (result.status === Status.Fatal) return tuple
    if (result.status === Status.Error) return error(next, result.errors, index)
    values.push(result.value)
  }
  return ok(next, values)
})

