// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertFunction,
  assertGeneratorFunction,
  assertNumber,
  assertParser,
  assertParsers,
  assertString,
  formatter,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
  ordStrFormatter,
} from 'kessel/assert'
import { fail, ok, Parser, Status } from 'kessel/core'
import { compound, ErrorType, expected, merge, nested } from 'kessel/error'
import { ordinal, range, stringify, twin } from 'kessel/util'

const { Ok, Fail, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

function pass(ctx, result, errors) {
  return [{ ...ctx }, { ...result, errors }]
}

/**
 * A parser that passes through the result of its embedded parser,
 * except that it will change that parser's expected error message to
 * the one provided.
 *
 * @param {Parser} p The parser to be executed.
 * @param {string} msg The new expected error message if `p` fails.
 * @returns {Parser} A parser that executes `p` and passes its results
 *     through except for changing its expected error message upon
 *     failure.
 */
export const label = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('label', p, ordParFormatter('1st'))
  ASSERT && assertString('label', msg, ordStrFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Fail ? pass(pctx, pres, expected(msg)) : prep
})

/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one.
 *
 * This is the only way (along with the similar `attemptM`) to cause a
 * contained parser to backtrack after a fatal failure. All of the `B`
 * backtracking parsers backtrack only if the fatal failure was caused
 * by a contained parser's non-fatal failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */
export const attempt = p => Parser(ctx => {
  ASSERT && assertParser('attempt', p)

  const index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Ok) return prep

  const err = index === pctx.index ? pres.errors : nested(pctx, pres.errors)
  return fail(pctx, err, index)
})

/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one. The error message
 * is then replaced with the supplied one.
 *
 * If the contained parser fails non-fatally, this acts just like
 * `label` and simply replaces the expected error message. If that
 * parser fails fatally however, this parser will backtrack to the point
 * where that parser was executed and will use the supplied error
 * message as a header to a nested error message detailing the
 * backtracking.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be an
 *     `Expected` error if no input was consumed, or a `Compound` error
 *     if it was.
 * @returns {Parser} A parser that applies `p` and changes the error as
 *     appropriate if `p` fails.
 */
export const attemptM = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('attemptM', p, ordParFormatter('1st'))
  ASSERT && assertString('attemptM', msg, ordStrFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Ok) return prep
  if (pres.status === Fail) {
    if (pres.errors.length === 1 && pres.errors[0].type === ErrorType.Nested) {
      const { ctx, errors } = pres.errors[0]
      return pass(pctx, pres, compound(msg, ctx, errors))
    }
    return pass(pctx, pres, expected(msg))
  }
  return fail(ctx, compound(msg, pctx, pres.errors))
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
 * @param {...Parser} ps The parsers to be executed.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */
export const sequenceB = (...ps) => Parser(ctx => {
  ASSERT && assertParsers('sequenceB', ps)

  const values = []
  const index = ctx.index
  let context = ctx

  for (const p of ps) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      const err = index === context.index
        ? pres.errors
        : nested(context, pres.errors)
      return fail(context, err, index)
    }
    if (pres.value !== null) values.push(pres.value)
  }
  return ok(context, values)
})

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
 * @returns {Parser} A parser which will execute `p`, pass the result to
 *     the supplied function, and use that function's return value as a
 *     second parser to execute.
 */
export const chainB = (p, fn) => Parser(ctx => {
  ASSERT && assertParser('chainB', p, ordParFormatter('1st'))
  ASSERT && assertFunction('chainB', fn, ordFnFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const q = fn(pres.value)
  ASSERT && assertParser(
    'chainB', q, formatter('the 2nd argument to return a parser'),
  )

  const [qrep, [qctx, qres]] = twin(q(pctx))
  if (qres.status !== Fail) return qrep

  const err = index === qctx.index ? qres.errors : nested(qctx, qres.errors)
  return fail(qctx, err, index)
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
export const applyB = (p, q) => Parser(ctx => {
  ASSERT && assertParser('applyB', p, ordParFormatter('1st'))
  ASSERT && assertParser('applyB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  if (qres.status === Fatal) return qrep
  if (qres.status === Fail) return fail(qctx, qres.errors, index)

  const fn = qres.value
  ASSERT && assertFunction(
    'applyB', fn, formatter('2nd argument to return a function'),
  )
  return ok(qctx, fn(pres.value))
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
export const leftB = (p, q) => Parser(ctx => {
  ASSERT && assertParser('leftB', p, ordParFormatter('1st'))
  ASSERT && assertParser('leftB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  if (qres.status === Fatal) return qrep
  if (qres.status === Ok) return ok(qctx, pres.value)

  const err = index === qctx.index ? qres.errors : nested(qctx, qres.errors)
  return fail(qctx, err, index)
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
export const rightB = (p, q) => Parser(ctx => {
  ASSERT && assertParser('rightB', p, ordParFormatter('1st'))
  ASSERT && assertParser('rightB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Status.Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  if (qres.status !== Fail) return qrep

  const err = index === qctx.index ? qres.errors : nested(qctx, qres.errors)
  return fail(qctx, err, index)
})

/**
 * A parser that will execute the parsers `p` and `q` in sequence and
 * then return the result of both in an array.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was executed and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @returns {Parser} A parser that executes both `p` and `q` and returns
 *     the results of both parsers in an array.
 */
export const andThenB = (p, q) => Parser(ctx => {
  ASSERT && assertParser('andThenB', p, ordParFormatter('1st'))
  ASSERT && assertParser('andThenB', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  if (qres.status === Fatal) return qrep
  if (qres.status === Ok) return ok(qctx, [pres.value, qres.value])

  const err = index === qctx.index ? qres.errors : nested(qctx, qres.errors)
  return fail(qctx, err, index)
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
export const repeatB = (p, n) => Parser(ctx => {
  ASSERT && assertParser('repeatB', p, ordParFormatter('1st'))
  ASSERT && assertNumber('repeatB', n, ordNumFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      const err = index === context.index
        ? pres.errors
        : nested(context, pres.errors)
      return fail(context, err, index)
    }
    values.push(pres.value)
  }
  return ok(context, values)
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
export const manyTillB = (p, end) => Parser(ctx => {
  ASSERT && assertParser('manyTillB', p, ordParFormatter('1st'))
  ASSERT && assertParser('manyTillB', end, ordParFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [endrep, [endctx, endres]] = twin(end(context))
    context = endctx
    if (endres.status === Fatal) return endrep
    if (endres.status === Ok) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      const err = index === pctx.index
        ? merge(pres.errors, endres.errors)
        : nested(pctx, merge(pres.errors, endres.errors))
      return fail(pctx, err, index)
    }
    values.push(pres.value)
  }
  return ok(context, values)
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
export const blockB = genFn => Parser(ctx => {
  ASSERT && assertGeneratorFunction('blockB', genFn)

  const gen = genFn()
  const index = ctx.index
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(context, value)

    ASSERT && assertParser('blockB', value, v => `expected ${
      ordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [prep, [pctx, pres]] = twin(value(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) return fail(pctx, pres.errors, index)
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
 * @param {...(Parser|function(...*):*)} ps An array of parsers to be
 *     executed one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of this parser. A single function
 *     must be present and it must be the last parameter; all other
 *     parameters must be parsers.
 * @returns {Parser} A parser that will execute its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipeB = (...ps) => Parser(ctx => {
  const fn = ps.pop()

  ASSERT && assertParsers('pipeB', ps)
  ASSERT && assertFunction('pipeB', fn, ordFnFormatter(ordinal(ps.length + 1)))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const p of ps) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) return fail(context, pres.errors, index)
    values.push(pres.value)
  }
  return ok(context, fn(...values))
})

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
export const betweenB = (pre, post, p) => Parser(ctx => {
  ASSERT && assertParser('betweenB', pre, ordParFormatter('1st'))
  ASSERT && assertParser('betweenB', post, ordParFormatter('2nd'))
  ASSERT && assertParser('betweenB', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [prerep, [prectx, preres]] = twin(pre(ctx))
  if (preres.status !== Ok) return prerep

  const [prep, [pctx, pres]] = twin(p(prectx))
  if (pres.status === Fatal) return prep
  if (pres.status === Fail) return fail(pctx, pres.errors, index)

  const [postrep, [postctx, postres]] = twin(post(pctx))
  if (postres.status === Fatal) return postrep
  if (postres.status === Fail) return fail(postctx, postres.errors, index)
  return ok(postctx, pres.value)
})
