// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertParser,
  assertString,
  ordParFormatter,
  ordStrFormatter,
} from 'kessel/assert'
import { fail, ok, Parser, Status } from 'kessel/core'
import { expected } from 'kessel/error'
import { twin } from 'kessel/util'

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
export const lookAhead = p => Parser(ctx => {
  ASSERT && assertParser('lookAhead', p)

  const index = ctx.index
  const [pctx, pres] = p(ctx)
  return pres.status === Ok ? ok(pctx, pres.value, index)
    : fail(pctx, pres.errors, index)
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
export const notEmpty = p => Parser(ctx => {
  ASSERT && assertParser('notEmpty', p)

  const index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status !== Ok || pctx.index !== index ? prep : fail(pctx)
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
 * `notEmptyM(p, msg)` is an optimized implementation of
 * `label(notEmpty(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` succeeds
 *     without consuming input.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */
export const notEmptyM = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('notEmptyM', p, ordParFormatter('1st'))
  ASSERT && assertString('notEmptyM', msg, ordStrFormatter('2nd'))

  const index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status !== Ok || pctx.index !== index
    ? prep
    : fail(pctx, expected(msg))
})

/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser context. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `followedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */
export const followedBy = p => Parser(ctx => {
  ASSERT && assertParser('followedBy', p)

  const index = ctx.index
  const [pctx, pres] = p(ctx)
  return pres.status === Ok ? ok(pctx, null, index)
    : fail(pctx, undefined, index)
})

/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser context. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * `followedByM(p, msg)` is an optimized implementation of
 * `label(followedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */
export const followedByM = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('followedByM', p, ordParFormatter('1st'))
  ASSERT && assertString('followedByM', msg, ordStrFormatter('2nd'))

  const index = ctx.index
  const [pctx, pres] = p(ctx)
  return pres.status === Ok
    ? ok(pctx, null, index)
    : fail(pctx, expected(msg), index)
})

/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser context. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notFollowedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser context, whether or not `p`
 *     succeeds.
 */
export const notFollowedBy = p => Parser(ctx => {
  ASSERT && assertParser('notFollowedBy', p)

  const index = ctx.index
  const [pctx, pres] = p(ctx)
  return pres.status === Ok
    ? fail(pctx, undefined, index)
    : ok(pctx, null, index)
})

/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser context. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * `notFollowedByM(p, msg)` is an optimized implementation of
 * `label(notFollowedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p`
 *    succeeds.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */
export const notFollowedByM = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('notFollowedByM', p, ordParFormatter('1st'))
  ASSERT && assertString('notFollowedByM', msg, ordStrFormatter('2nd'))

  const index = ctx.index
  const [pctx, pres] = p(ctx)
  return pres.status === Ok
    ? fail(pctx, expected(msg), index)
    : ok(pctx, null, index)
})
