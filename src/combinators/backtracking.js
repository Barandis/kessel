// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argFnFormatter,
  argParFormatter,
  argStrFormatter,
  assertFunction,
  assertGenFunction,
  assertNumber,
  assertParser,
  assertParsers,
  assertString,
  formatter,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { failReply, fatalReply, okReply, parser, Status } from 'kessel/core'
import { compound, ErrorType, expected, merge, nested } from 'kessel/error'
import {
  back,
  combined,
  dup,
  nonback,
  ordinal,
  range,
  replyFn,
  stringify,
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
    return failReply(pctx, back(m, pctx, pres.errors), index)
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
export const seqB = (...args) => {
  const ps = args.slice()
  const m = typeof ps[ps.length - 1] === 'string' ? ps.pop() : null

  return parser(ctx => {
    ASSERT && ps.forEach((p, i) =>
      assertParser('seqB', p, argParFormatter(i + 1, args.length > 1)))

    const values = []
    const index = ctx.index
    let context = ctx
    let errors = []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status === Fatal) {
        return fatalReply(pctx, nonback(m, pres.errors))
      }
      if (pres.status === Fail) {
        const err = combined(pctx.index !== index, m, pctx, errors)
        return failReply(pctx, err, index)
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
export const chainB = (p, fn, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('chainB', p, argParFormatter(1, true))
  ASSERT && assertFunction('chainB', fn, argFnFormatter(2, true))
  ASSERT && hasM && assertString('chainB', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, nonback(m, pres.errors))
  }

  const q = fn(pres.value)
  ASSERT && assertParser(
    'chainB', q, formatter('second argument to return a parser'),
  )

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status === Ok) return qrep

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, nonback(m, errors))
  const err = combined(qctx.index !== index, m, qctx, errors)
  return failReply(qctx, err, index)
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
 * @returns {Parser} A parser that executes `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */
export const applyB = (p, q) => parser(ctx => {
  ASSERT && assertParser('applyB', p, ordParFormatter('1st'))
  ASSERT && assertParser('applyB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = dup(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, errors)
  if (qres.status === Fail) {
    const err = index === qctx.index ? errors : nested(qctx, errors)
    return failReply(qctx, err, index)
  }

  const fn = qres.value
  ASSERT && assertFunction(
    'applyB', fn, formatter('2nd argument to return a function'),
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
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the first.
 */
export const leftB = (p, q) => parser(ctx => {
  ASSERT && assertParser('leftB', p, ordParFormatter('1st'))
  ASSERT && assertParser('leftB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = dup(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  if (qres.status === Ok) return okReply(qctx, pres.value)

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, errors)

  const err = index === qctx.index ? errors : nested(qctx, errors)
  return failReply(qctx, err, index)
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
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the second.
 */
export const rightB = (p, q) => parser(ctx => {
  ASSERT && assertParser('rightB', p, ordParFormatter('1st'))
  ASSERT && assertParser('rightB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = dup(p(ctx))
  if (pres.status !== Ok) return prep

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status === Ok) return qrep

  const errors = merge(pres.errors, qres.errors)
  if (qres.status === Fatal) return fatalReply(qctx, errors)

  const err = index === qctx.index ? errors : nested(qctx, errors)
  return failReply(qctx, err, index)
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
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const repeatB = (p, n) => parser(ctx => {
  ASSERT && assertParser('repeatB', p, ordParFormatter('1st'))
  ASSERT && assertNumber('repeatB', n, ordNumFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [prep, [pctx, pres]] = dup(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      const err = index === context.index
        ? pres.errors
        : nested(context, pres.errors)
      return failReply(context, err, index)
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
 * If `p` fails non-fatally before `end` succeeds, this parser will
 * backtrack to the point where `p` was executed the first time and will
 * fail non-fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will execute `end` and then `p` zero
 *     or more times until `end` succeeds.
 */
export const manyTillB = (p, end) => parser(ctx => {
  ASSERT && assertParser('manyTillB', p, ordParFormatter('1st'))
  ASSERT && assertParser('manyTillB', end, ordParFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [endrep, [endctx, endres]] = dup(end(context))
    context = endctx
    if (endres.status === Fatal) return endrep
    if (endres.status === Ok) break

    const [prep, [pctx, pres]] = dup(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      const err = index === pctx.index
        ? merge(pres.errors, endres.errors)
        : nested(pctx, merge(pres.errors, endres.errors))
      return failReply(pctx, err, index)
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
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; otherwise an error is thrown.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */
export const blockB = genFn => parser(ctx => {
  ASSERT && assertGenFunction('blockB', genFn)

  const gen = genFn()
  const index = ctx.index
  let errors = []
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return okReply(context, value)

    ASSERT && assertParser('blockB', value, v => `expected ${
      ordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [pctx, pres] = value(context)
    context = pctx
    errors = pres.errors?.length ? merge(errors, pres.errors) : []

    if (pres.status === Fatal) return fatalReply(context, errors)
    if (pres.status === Fail) {
      const err = index === context.index ? errors : nested(context, errors)
      return failReply(context, err, index)
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
export const pipeB = (...args) => {
  const ps = args.slice()
  const fn = ps.pop()

  return parser(ctx => {
    ASSERT && assertParsers('pipeB', ps)
    ASSERT && assertFunction(
      'pipeB', fn, ordFnFormatter(ordinal(ps.length + 1)),
    )

    const index = ctx.index
    const values = []
    let context = ctx
    let errors = []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status === Fatal) return fatalReply(context, errors)
      if (pres.status === Fail) {
        const err = index === context.index ? errors : nested(context, errors)
        return failReply(context, err, index)
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
 * `pre` was executed and fail non-fatally.
 *
 * @param {Parser} pre The first parser to execute.
 * @param {Parser} post The last parser to execute.
 * @param {Parser} p The second parser to execute and whose result
 *     becomes the result of the new parser.
 * @returns {Parser} A parser which executes `pre`, `p`, and `post` in
 *     order and then returns the result of `p`.
 */
export const betweenB = (pre, post, p) => parser(ctx => {
  ASSERT && assertParser('betweenB', pre, ordParFormatter('1st'))
  ASSERT && assertParser('betweenB', post, ordParFormatter('2nd'))
  ASSERT && assertParser('betweenB', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [prerep, [prectx, preres]] = dup(pre(ctx))
  if (preres.status !== Ok) return prerep

  const [pctx, pres] = p(prectx)
  let errors = pres.errors?.length ? merge(preres.errors, pres.errors) : []
  if (pres.status === Fatal) return fatalReply(pctx, errors)
  if (pres.status === Fail) {
    const err = index === pctx.index ? errors : nested(pctx, errors)
    return failReply(pctx, err, index)
  }

  const [postctx, postres] = post(pctx)
  if (postres.status === Fatal) {
    return fatalReply(postctx, merge(errors, postres.errors))
  }
  if (postres.status === Fail) {
    errors = merge(errors, postres.errors)
    const err = index === postctx.index ? errors : nested(postctx, errors)
    return failReply(postctx, err, index)
  }
  return okReply(postctx, pres.value)
})
