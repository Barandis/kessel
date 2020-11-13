// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, ok, makeParser, Status } from 'kessel/core'
import { expected } from 'kessel/error'
import { dup } from 'kessel/util'

const { Ok } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that applies the supplied parser. If that parser
 * succeeds, its result becomes the result of the returned parser.
 * Either way, no input is consumed. This is used to determine whether
 * the next character(s) satisfy the parser without actually consuming
 * the input to find out.
 *
 * As a side effect, any fatal parse error will be transformed into a
 * non-fatal one, since no input is being consumed.
 *
 * @param {Parser} p The parser to be applied.
 * @returns {Parser} A parser that applies `p` and succeeds or fails
 *     with it, but which consumes no input either way.
 */
export const lookAhead = p => makeParser(state => {
  const index = state.index
  const [next, result] = p(state)
  return result.status === Ok ? ok(next, result.value, index)
    : error(next, result.errors, index)
})

/**
 * Creates a parser that fails if the provided parser succeeds but does
 * not consume input. If the parser succeeds any other way or fails,
 * this parser transparently passes that result along.
 *
 * This effect is useful for turning a parser into one which must match
 * at least once. For instance, one could implement `many1(p)` with
 * `notEmpty(many(p))`.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notEmptyL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */
export const notEmpty = p => makeParser(state => {
  const index = state.index
  const [reply, [next, result]] = dup(p(state))
  return result.status !== Ok || next.index !== index ? reply : error(next)
})

/**
 * Creates a parser that fails if the provided parser succeeds but does
 * not consume input. If the parser succeeds any other way or fails,
 * this parser transparently passes that result along.
 *
 * This effect is useful for turning a parser into one which must match
 * at least once. For instance, one could implement `many1(p)` with
 * `notEmpty(many(p))`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` succeeds
 *     without consuming input.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */
export const notEmptyL = (p, msg) => makeParser(state => {
  const index = state.index
  const [reply, [next, result]] = dup(p(state))
  return result.status !== Ok || next.index !== index ? reply
    : error(next, expected(msg))
})

/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser state. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `followedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */
export const followedBy = p => makeParser(state => {
  const index = state.index
  const [next, result] = p(state)
  return result.status === Ok ? ok(next, null, index)
    : error(next, undefined, index)
})

/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser state. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */
export const followedByL = (p, msg) => makeParser(state => {
  const index = state.index
  const [next, result] = p(state)
  return result.status === Ok ? ok(next, null, index)
    : error(next, expected(msg), index)
})

/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser state. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notFollowedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser state, whether or not `p`
 *     succeeds.
 */
export const notFollowedBy = p => makeParser(state => {
  const index = state.index
  const [next, result] = p(state)
  return result.status === Ok ? error(next, undefined, index)
    : ok(next, null, index)
})

/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser state. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p`
 *    succeeds.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */
export const notFollowedByL = (p, msg) => makeParser(state => {
  const index = state.index
  const [next, result] = p(state)
  return result.status === Ok ? error(next, expected(msg), index)
    : ok(next, null, index)
})
