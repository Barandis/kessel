// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from 'kessel/core'
import { ErrorType, makeExpected, overwrite } from 'kessel/error'

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
export const choice = ps => makeParser(state => {
  let nextState = state
  let expecteds = []

  for (const p of ps) {
    nextState = p({ ...nextState, errors: [] })

    if (nextState.status === Status.Ok) return nextState
    expecteds = [
      ...expecteds,
      ...nextState.errors.filter(error => error.type === ErrorType.Expected),
    ]

    if (nextState.status === Status.Fatal) {
      return fatal(nextState, overwrite(nextState.errors, ...expecteds))
    }
  }
  return error(nextState, overwrite(nextState.errors, ...expecteds))
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
export const choiceL = (ps, message) => makeParser(state => {
  let nextState = state

  for (const p of ps) {
    nextState = p(nextState)

    if (nextState.status === Status.Ok) return nextState
    if (nextState.status === Status.Fatal) {
      return fatal(
        nextState, overwrite(nextState.errors, makeExpected(message)),
      )
    }
  }
  return error(nextState, overwrite(nextState.errors, makeExpected(message)))
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
  const nextState = p(state)
  if (nextState.status === Status.Fatal) return nextState
  return ok(nextState, null)
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
  const nextState = p(state)
  if (nextState.status !== Status.Error) return nextState
  return ok(nextState, x)
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
export const attempt = p => makeParser(state => {
  const index = state.index
  const nextState = p(state)
  if (nextState.status !== Status.Fatal) return nextState
  return error(nextState, undefined, index)
})
