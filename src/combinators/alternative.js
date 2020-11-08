// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from 'kessel/core'
import { makeExpected } from 'kessel/error'
import { dup } from 'kessel/util'

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
 * message included. The parsers are tried one at a time as with
 * `choice`, but if they all fail (or if any fail fatally), the last
 * argument is used as the expected message rather than constructing it
 * out of the expected messages of each failed parser.
 *
 * This is an optimized version of `label(choice(ps), message)`.
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
 * This is an optimized implementation of `choice([p, constant(x)])`.
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
