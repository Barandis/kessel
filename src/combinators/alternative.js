// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argParFormatter,
  argStrFormatter,
  assertParser,
  assertParsers,
  assertString,
  ordParFormatter,
} from 'kessel/assert'
import { fail, fatal, ok, parser, Status } from 'kessel/core'
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
export const choice = (...ps) => parser(ctx => {
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
export const opt = p => parser(ctx => {
  ASSERT && assertParser('opt', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Fail) return prep

  // If the optional parser fails, we add the error message even though
  // the end result of `opt` is success. This lets sequencing parsers
  // add the opt parser's expected to error messages if a later parser
  // in the sequence fails.
  const reply = ok(pctx, null)
  reply[1].errors = pres.errors
  return reply
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
export const orValue = (p, x) => parser(ctx => {
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
export const lookAhead = p => parser(ctx => {
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
 * This parser, by default, produces no error messages on failure. An
 * error message can be specified by passing the expected message in as
 * the optional second parameter.
 *
 * @param {Parser} p The parser to execute.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */
export const notEmpty = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('notEmpty', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('notEmpty', m, argStrFormatter(2, hasM))

  const index = ctx.index
  const msg = hasM ? expected(m) : undefined
  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status !== Ok || pctx.index !== index ? prep : fail(pctx, msg)
})

/**
 * A parser that succeeds if the supplied parser succeeds, but which
 * does not consume input. If `p` does not succeed, this parser fails
 * non-fatally.
 *
 * This parser, by default, produces no error messages on failure. An
 * error message can be specified by passing the expected message in as
 * the optional second parameter.
 *
 * @param {Parser} p The parser to execute.
 * @param {string} [m] The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */
export const followedBy = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('followedBy', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('followedBy', m, argStrFormatter(2, hasM))

  const index = ctx.index
  const msg = hasM ? expected(m) : undefined
  const [pctx, pres] = p(ctx)
  return pres.status === Ok ? ok(pctx, null, index) : fail(pctx, msg, index)
})

/**
 * A parser that succeeds if the supplied parser fails, but which does
 * not consume input. If `p` succeeds, this parser fails non-fatally.
 *
 * This parser, by default, produces no error messages on failure. An
 * error message can be specified by passing the expected message in as
 * the optional second parameter.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} [m] The expected error message to use if `p`
 *     succeeds.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser context, whether or not `p`
 *     succeeds.
 */
export const notFollowedBy = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('notFollowedBy', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('notFollowedBy', m, argStrFormatter(2, hasM))

  const index = ctx.index
  const msg = hasM ? expected(m) : undefined
  const [pctx, pres] = p(ctx)
  return pres.status === Ok ? fail(pctx, msg, index) : ok(pctx, null, index)
})
