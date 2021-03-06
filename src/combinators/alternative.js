// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argParFormatter,
  argStrFormatter,
  assertParser,
  assertString,
} from 'kessel/assert'
import { failReply, fatalReply, okReply, parser, Status } from 'kessel/core'
import { expected, merge } from 'kessel/error'
import { dup, ferror, nerror, replyFn } from 'kessel/util'

const { Ok, Fail, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that executes parsers one at a time until one succeeds, one
 * fails fatally, or all fail. On failure (fatal or otherwise), error
 * messages from all parsers that had failed are merged into `alt`'s
 * error messages.
 *
 * @param {...Parser|string} args The parsers to execute, one at a time,
 *     until one succeeds, one fails fatally, or all fail. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message in place of the collected expected error messages
 *     of the constituent parsers.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */
export function alt(...args) {
  const ps = args.slice()
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null

  ps.forEach((p, i) => assertParser('alt', p, argParFormatter(i + 1, true)))

  return parser(ctx => {
    const hasM = m != null

    let errors = hasM ? expected(m) : []

    for (const p of ps) {
      const [prep, [pctx, pres]] = dup(p(ctx))
      if (pres.status === Ok) return prep

      if (!hasM) errors = merge(errors, pres.errors)
      if (pres.status === Fatal) return fatalReply(pctx, errors)
    }
    return failReply(ctx, errors)
  })
}

/**
 * A parser that executes the supplied parser, succeeding whether it
 * fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally.
 *
 * @param {Parser} p The parser for optional content to be executed and
 *     then have its result ignored.
 * @param {string} [m] The expected error message to use if `p` fails.
 * @return {Parser} A parser that succeeds with no result unless its
 *     contained parser fails fatally. This parser consumes text only if
 *     its contained parser succeeds.
 */
export function opt(p, m) {
  const hasM = m != null

  assertParser('opt', p, argParFormatter(1, hasM))
  if (hasM) assertString('opt', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [prep, [pctx, pres]] = dup(p(ctx))
    if (pres.status === Ok) return prep
    const errors = ferror(m, pres.errors)
    if (pres.status === Fatal) return fatalReply(pctx, errors)

    // If the optional parser fails, we add the error message even
    // though the end result of `opt` is success. This lets sequencing
    // parsers add the opt parser's expected to error messages if a
    // later parser in the sequence fails.
    const reply = okReply(pctx, null)
    reply[1].errors = errors
    return reply
  })
}

/**
 * A parser that succeeds either with the supplied parser's successful
 * result or else (if that parser fails) the supplied default value `x`.
 * This parser only fails if its contained parser fails fatally.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */
export function def(p, x, m) {
  assertParser('def', p, argParFormatter(1, true))
  if (m != null) assertString('def', m, argStrFormatter(3, true))

  return parser(ctx => {
    const [prep, [pctx, pres]] = dup(p(ctx))
    if (pres.status === Ok) return prep
    if (pres.status === Fail) return okReply(pctx, x)
    return fatalReply(pctx, ferror(m, pres.errors))
  })
}

/**
 * A parser that executes the supplied parser without consuming input.
 * Success or failure are still returned, though fatal failure is
 * converted to non-fatal due to the fact that no input is consumed.
 *
 * If the consituent parser fails fatally, a nested error message will
 * be created to track the actual error cause before this parser
 * automatically backtracks.
 *
 * @param {Parser} p The parser to be executed.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies `p` and succeeds or fails
 *     with it, but which consumes no input either way.
 */
export function peek(p, m) {
  const hasM = m != null

  assertParser('peek', p, argParFormatter(1, hasM))
  if (hasM) assertString('peek', m, argStrFormatter(2, true))

  return parser(ctx => {
    const index = ctx.index
    const [pctx, pres] = p(ctx)
    if (pres.status === Ok) return okReply(pctx, pres.value, index)
    if (pres.status === Fail) {
      return failReply(pctx, ferror(m, pres.errors), index)
    }
    // This parser implements automatic backtracking, so if its parser
    // fails fatally, it has to track that through a nested error
    return failReply(pctx, nerror(m, pctx, pres.errors), index)
  })
}

/**
 * A parser that succeeds if the provided parser succeeds but does not
 * consume input. If the parser succeeds any other way or fails, this
 * parser transparently passes that result along.
 *
 * This parser, by default, produces no error message on failure if that
 * failure was caused by a success with input consumed. An error message
 * can be specified by passing the expected message in as the optional
 * second parameter.
 *
 * @param {Parser} p The parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which fails if `p` passes but consumes
 *     input, or otherwise passes the result through.
 */
export function empty(p, m) {
  const hasM = m != null

  assertParser('empty', p, argParFormatter(1, hasM))
  if (hasM) assertString('empty', m, argStrFormatter(2, true))

  return parser(ctx => {
    const index = ctx.index
    const [pctx, pres] = p(ctx)
    if (pres.status === Ok && pctx.index === index) return okReply(pctx, null)
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  })
}

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
export function not(p, m) {
  const hasM = m != null

  assertParser('not', p, argParFormatter(1, hasM))
  if (hasM) assertString('not', m, argStrFormatter(2, true))

  return parser(ctx => {
    const index = ctx.index
    const [pctx, pres] = p(ctx)
    return pres.status === Ok
      ? failReply(pctx, ferror(m, undefined), index)
      : okReply(pctx, null, index)
  })
}
