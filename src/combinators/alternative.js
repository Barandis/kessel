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
 * A parser that executes parsers one at a time until one succeeds, one
 * fails fatally, or all fail. On failure (fatal or otherwise), error
 * messages from all parsers that had failed are merged into `choice`'s
 * error messages.
 *
 * @param {...Parser} ps The parsers to execute, one at a time, until
 *     one succeeds, one fails fatally, or all fail.
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
 * A parser that executes the supplied parser, succeeding whether
 * it fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally.
 *
 * @param {Parser} p The parser for optional content to be executed and
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
 * A parser that succeeds either with the supplied parser's successful
 * result or else (if that parser fails) the supplied default value `x`.
 * This parser only fails if its contained parser fails fatally.
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
 * A parser that executes the supplied parser without consuming input.
 * Success or failure are still returned, though fatal failure is
 * converted to non-fatal due to the fact that no input is consumed.
 *
 * @param {Parser} p The parser to be executed.
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
 * A parser that fails if the provided parser succeeds but does not
 * consume input. If the parser succeeds any other way or fails, this
 * parser transparently passes that result along.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notEmptyL` should be used instead.
 *
 * @param {Parser} p The parser to execute.
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
 * A parser that fails if the provided parser succeeds but does not
 * consume input. If the parser succeeds any other way or fails, this
 * parser transparently passes that result along.
 *
 * If this parser fails, it will use `msg` as an expected error message.
 *
 * @param {Parser} p The parser to execute.
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
 * A parser that succeeds if the supplied parser succeeds, but which
 * does not consume input. If `p` does not succeed, this parser fails
 * non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `followedByL` should be used instead.
 *
 * @param {Parser} p The parser to execute.
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
 * A parser that succeeds if the supplied parser succeeds, but which
 * does not consume input. If `p` does not succeed, this parser fails
 * non-fatally.
 *
 * If this parser fails, it will use `msg` as an expected error message.
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
 * A parser that succeeds if the supplied parser fails, but which does
 * not consume input. If `p` succeeds, this parser fails non-fatally.
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
 * A parser that succeeds if the supplied parser fails, but which does
 * not consume input. If `p` succeeds, this parser fails non-fatally.
 *
 * If this parser fails, it will use `msg` as an expected error message.
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
