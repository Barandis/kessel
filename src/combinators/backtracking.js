// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argFnFormatter,
  argGenFormatter,
  argNumFormatter,
  argParFormatter,
  argStrFormatter,
  assertFunction,
  assertGenFunction,
  assertNumber,
  assertParser,
  assertString,
  formatter,
} from 'kessel/assert'
import { failReply, fatalReply, okReply, parser, Status } from 'kessel/core'
import { compound, ErrorType, expected, merge } from 'kessel/error'
import {
  berror,
  dup,
  ferror,
  nerror,
  range,
  replyFn,
  stringify,
  wordinal,
} from 'kessel/util'

const { Ok, Fail, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one.
 *
 * This is one of the few ways to cause a contained parser to backtrack
 * after a fatal failure (`peek` also does that as a side effect, etc.).
 * All of the `B` backtracking parsers backtrack only if the fatal
 * failure was caused by a contained parser's non-fatal failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @param {string} [m] The expected error message to use if the parser
 *     fails. If the parser backtracks, this instead becomes the text of
 *     the generated compound error message.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */
export const attempt = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('attempt', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('attempt', m, argStrFormatter(2, true))

  const index = ctx.index

  const [prep, [pctx, pres]] = dup(p(ctx))
  if (pres.status === Ok) return prep
  if (pres.status === Fatal || pctx.index !== index) {
    return failReply(pctx, nerror(m, pctx, pres.errors), index)
  }
  if (hasM) {
    if (pres.errors.length === 1 && pres.errors[0].type === ErrorType.Nested) {
      const { ctx, errors } = pres.errors[0]
      return failReply(pctx, compound(m, ctx, errors), index)
    }
    return failReply(pctx, expected(m), index)
  }
  return failReply(pctx, pres.errors, index)
})

/**
 * A parser that implements a sequence. Each supplied parser is executed
 * in order until either they all succeed or the first one fails. In the
 * former case, all results are merged into an array that becomes the
 * returned parser's result.
 *
 * If one of the parsers fails non-fatally after all of the earlier
 * parsers succeeded, this parser will backtrack to the point where the
 * very first parser was executed and will fail non-fatally.
 *
 * @param {...Parser|string} ps The parsers to be executed. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message (or compound error message, in the case of
 *     backtracking happening) in place of the collected expected error
 *     messages of the constituent parsers.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */
export const bseq = (...args) => {
  const ps = args.slice()
  const m = typeof ps[ps.length - 1] === 'string' ? ps.pop() : null

  return parser(ctx => {
    ASSERT && ps.forEach((p, i) =>
      assertParser('bseq', p, argParFormatter(i + 1, args.length > 1)))

    const values = []
    const index = ctx.index
    let context = ctx
    let errors = []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status === Fatal) {
        return fatalReply(pctx, ferror(m, pres.errors))
      }
      if (pres.status === Fail) {
        const error = berror(pctx.index !== index, m, pctx, errors)
        return failReply(pctx, error, index)
      }
      values.push(pres.value)
    }
    return okReply(context, values)
  })
}

/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
 *
 * If the parser returned by `fn` fails non-fatally after `p` succeeds,
 * this parser will backtrack to the point where `p` was executed and
 * will fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which will execute `p`, pass the result to
 *     the supplied function, and use that function's return value as a
 *     second parser to execute.
 */
export const bchain = (p, fn, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bchain', p, argParFormatter(1, true))
  ASSERT && assertFunction('bchain', fn, argFnFormatter(2, true))
  ASSERT && hasM && assertString('bchain', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const q = fn(pres.value)
  ASSERT && assertParser(
    'bchain', q, formatter('second argument to return a parser'),
  )

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status === Ok) return qrep

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, ferror(m, errors))
  const error = berror(qctx.index !== index, m, qctx, errors)
  return failReply(qctx, error, index)
})

/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p A parser whose result will be passed to the
 *     function returned by `q`.
 * @param {Parser} q A parser which provides a function.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */
export const bapply = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bapply', p, argParFormatter(1, true))
  ASSERT && assertParser('bapply', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('bapply', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const [qctx, qres] = q(pctx)
  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, ferror(m, errors))
  if (qres.status === Fail) {
    const error = berror(qctx.index !== index, m, qctx, errors)
    return failReply(qctx, error, index)
  }

  const fn = qres.value
  ASSERT && assertFunction(
    'bapply', fn, formatter('second argument to return a function'),
  )
  return okReply(qctx, fn(pres.value))
})

/**
 * A parser that will apply the parsers `p` and `q` in order and then
 * return the result of `p`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the first.
 */
export const bleft = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bleft', p, argParFormatter(1, true))
  ASSERT && assertParser('bleft', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('bleft', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const [qctx, qres] = q(pctx)
  if (qres.status === Ok) return okReply(qctx, pres.value)

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, ferror(m, errors))

  const error = berror(qctx.index !== index, m, qctx, errors)
  return failReply(qctx, error, index)
})

/**
 * A parser that will apply the parsers `p` and `q` in order and then
 * return the result of `q`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the second.
 */
export const bright = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bright', p, argParFormatter(1, true))
  ASSERT && assertParser('bright', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('bright', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status === Ok) return qrep

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, ferror(m, errors))

  const error = berror(qctx.index !== index, m, qctx, errors)
  return failReply(qctx, error, index)
})

/**
 * A parser that executes the supplied parser `n` times, collecting the
 * successful results into an array.
 *
 * If `p` fails after initially succeeding once or more, this parser
 * will backtrack to the point where `p` was executed the first time and
 * will fail non-fatally.
 *
 * @param {Parser} p A parser to execute multiple times.
 * @param {number} n The number of times to execute the parser.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const bcount = (p, n, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bcount', p, argParFormatter(1, true))
  ASSERT && assertNumber('bcount', n, argNumFormatter(2, true))
  ASSERT && hasM && assertString('bcount', m, argStrFormatter(3, true))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) return fatalReply(pctx, ferror(m, pres.errors))
    if (pres.status === Fail) {
      const error = berror(pctx.index !== index, m, pctx, pres.errors)
      return failReply(pctx, error, index)
    }
    values.push(pres.value)
  }
  return okReply(context, values)
})

/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails non-fatally before `e` succeeds, this parser will
 * backtrack to the point where `p` was executed the first time and will
 * fail non-fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} e The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which will execute `e` and then `p` zero
 *     or more times until `e` succeeds.
 */
export const buntil = (p, e, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('buntil', p, argParFormatter(1, true))
  ASSERT && assertParser('buntil', e, argParFormatter(2, true))
  ASSERT && hasM && assertString('buntil', m, argStrFormatter(3, true))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [ectx, eres] = e(context)
    context = ectx
    if (eres.status === Fatal) return fatalReply(ectx, ferror(m, eres.errors))
    if (eres.status === Ok) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) return fatalReply(pctx, ferror(m, pres.errors))
    if (pres.status === Fail) {
      const error = berror(
        pctx.index !== index, m, pctx, merge(pres.errors, eres.errors),
      )
      return failReply(pctx, error, index)
    }
    values.push(pres.value)
  }
  return okReply(context, values)
})

/**
 * A parser that executes a block of code in the form of a generator
 * function. Inside that function, parsers that are `yield`ed will be
 * executed and will evaluate to their results (which can then be
 * assigned to variables, etc.).
 *
 * If any of the yielded parsers fail,  this parser will backtrack to
 * the point where the first parser was executed and will fail
 * non-fatally.
 *
 * @param {function():*} g A generator function that takes no arguments
 *     and returns whatever should be used as the returned parser's
 *     result. This generator function can `yield` only `Parser`s;
 *     otherwise an error is thrown.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */
export const bblock = (g, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertGenFunction('bblock', g, argGenFormatter(1, hasM))
  ASSERT && hasM && assertString('bblock', m, argStrFormatter(2, true))

  const gen = g()
  const index = ctx.index
  let errors = []
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return okReply(context, value)

    ASSERT && assertParser('bblock', value, v => `expected ${
      wordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [pctx, pres] = value(context)
    context = pctx
    errors = pres.errors?.length ? merge(errors, pres.errors) : []

    if (pres.status === Fatal) return fatalReply(pctx, ferror(m, errors))
    if (pres.status === Fail) {
      const error = berror(pctx.index !== index, m, pctx, errors)
      return failReply(pctx, error, index)
    }
    nextValue = pres.value
    i++
  }
})

/**
 * A parser that executes its parsers in sequence and passes those
 * results to a function of the same arity as the number of parsers to
 * execute. The return value of that function becomes this parser's
 * result.
 *
 * If one of the parsers fails non-fatally after all of the earlier
 * parsers succeeded, this parser will backtrack to the point where the
 * very first parser was executed and will fail non-fatally.
 *
 * @param {...(Parser|function(...*):*)} args An array of parsers to be
 *     executed one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of this parser. A single function
 *     must be present and it must be the last parameter; all other
 *     parameters must be parsers.
 * @returns {Parser} A parser that will execute its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const bpipe = (...args) => {
  const ps = args.slice()
  const m = typeof ps[ps.length - 1] === 'string' ? ps.pop() : null
  const fn = ps.pop()

  return parser(ctx => {
    ASSERT && ps.forEach((p, i) => assertParser(
      'bpipe', p, argParFormatter(i + 1, true),
    ))
    ASSERT && assertFunction('bpipe', fn, argFnFormatter(ps.length + 1, true))

    const index = ctx.index
    const values = []
    let context = ctx
    let errors = []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status === Fatal) return fatalReply(pctx, ferror(m, errors))
      if (pres.status === Fail) {
        const error = berror(pctx.index !== index, m, pctx, errors)
        return failReply(pctx, error, index)
      }
      values.push(pres.value)
    }
    return okReply(context, fn(...values))
  })
}

/**
 * A parser which executes its pre, content, and post parsers in order
 * and results in the result of its content parser.
 *
 * If any parser fails non-fatally, this parser will backtrack to where
 * `s` was executed and fail non-fatally.
 *
 * @param {Parser} s The first parser to execute.
 * @param {Parser} e The last parser to execute.
 * @param {Parser} p The second parser to execute and whose result
 *     becomes the result of the new parser.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which executes `s`, `p`, and `e` in
 *     order and then returns the result of `p`.
 */
export const bbetween = (s, e, p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('bbetween', s, argParFormatter(1, true))
  ASSERT && assertParser('bbetween', e, argParFormatter(2, true))
  ASSERT && assertParser('bbetween', p, argParFormatter(3, true))
  ASSERT && hasM && assertString('bbetween', m, argStrFormatter(4, true))

  const index = ctx.index

  const [sctx, sres] = s(ctx)
  if (sres.status !== Ok) {
    const fn = replyFn(sres.status === Fatal)
    return fn(sctx, ferror(m, sres.errors))
  }

  const [pctx, pres] = p(sctx)
  const errors = pres.errors?.length ? merge(sres.errors, pres.errors) : []
  if (pres.status === Fatal) return fatalReply(pctx, ferror(m, errors))
  if (pres.status === Fail) {
    const error = berror(pctx.index !== index, m, pctx, errors)
    return failReply(pctx, error, index)
  }

  const [ectx, eres] = e(pctx)
  if (eres.status === Fatal) {
    return fatalReply(ectx, ferror(m, merge(errors, eres.errors)))
  }
  if (eres.status === Fail) {
    const error = berror(
      ectx.index !== index, m, ectx, merge(errors, eres.errors),
    )
    return failReply(ectx, error, index)
  }
  return okReply(ectx, pres.value)
})
