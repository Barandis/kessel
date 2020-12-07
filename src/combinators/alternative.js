// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertParser,
  assertParsers,
  assertString,
  ordParFormatter,
  ordStrFormatter,
} from 'kessel/assert'
import { fail, fatal, ok, Parser, Status } from 'kessel/core'
import { expected, merge } from 'kessel/error'
import { twin } from 'kessel/util'

const { Ok, Fail, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that implements alternatives. Each of the supplied
 * parsers is applied one at a time, in order. When the first parser
 * succeeds, or the first parser fails while consuming input, execution
 * is stopped and the context from that last parser is passed through.
 * The same happens if all parsers are applied without any of them
 * succeeding.
 *
 * On failure, all of the `Expected` errors from any of the contained
 * parsers will be merged into this parser's errors.
 *
 * @param {...Parser} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */
export const choice = (...ps) => Parser(ctx => {
  ASSERT && assertParsers('choice', ps)

  let errors = []

  for (const p of ps) {
    const [prep, [pctx, pres]] = twin(p(ctx))
    if (pres.status === Ok) return prep

    errors = merge(errors, pres.errors)
    if (pres.status === Fatal) return fatal(pctx, errors)
  }
  return fail(ctx, errors)
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
export const optional = p => Parser(ctx => {
  ASSERT && assertParser('optional', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status !== Fail ? prep : ok(pctx, null)
})

/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied default
 * value `x`. This parser only fails if its contained parser fails
 * fatally.
 *
 * `orValue(p, x)` is an optimized implementation of `orElse(p,
 * always(x))`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */
export const orValue = (p, x) => Parser(ctx => {
  ASSERT && assertParser('orValue', p, ordParFormatter('1st'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status !== Fail ? prep : ok(pctx, x)
})

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
