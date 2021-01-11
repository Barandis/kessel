// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argFnFormatter,
  argNumFormatter,
  argParFormatter,
  argStrFormatter,
  assertArray,
  assertFunction,
  assertNumber,
  assertParser,
  assertString,
  formatter,
} from 'kessel/assert'
import { okReply, parser, Status } from 'kessel/core'
import { merge } from 'kessel/error'
import { dup, ferror, replyFn } from 'kessel/util'

const { Ok, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser which will execute `p` and return `p`'s results joined
 * together into a single string. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array of
 *     strings.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns a single
 *     string made from joining the elements of the array of strings
 *     returned by `p`.
 */
export const join = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('join', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('join', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('join', v, formatter('argument to return an array'))

  return okReply(pctx, v.join(''))
})

/**
 * A parser which will execute `p` and return its result with all
 * internal arrays flattened into a single-level array. This requires
 * that `p` return an array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns a
 *     single-level array made by flattening the elements of the array
 *     returned by `p`.
 */
export const flat = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('flat', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('flat', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('flat', v, formatter('argument to return an array'))

  return okReply(pctx, v.flat(Infinity))
})

/**
 * A parser that executes `p` but, on success, returns `x` instead.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */
export const value = (p, x, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('value', p, argParFormatter(1, true))
  ASSERT && hasM && assertString('value', m, argStrFormatter(3, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }
  return okReply(pctx, x)
})

/**
 * A parser that returns the `n`th element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */
export const nth = (p, n, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('nth', p, argParFormatter(1, true))
  ASSERT && assertNumber('nth', n, argNumFormatter(2, true))
  ASSERT && hasM && assertString('nth', m, argStrFormatter(3, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray(
    'nth', v, formatter('first argument to return an array'),
  )

  return okReply(pctx, v[n])
})

/**
 * A parser that returns the first element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */
export const first = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('first', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('first', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('first', v, formatter('argument to return an array'))

  return okReply(pctx, v[0])
})

/**
 * A parser that returns the second element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */
export const second = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('second', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('second', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('second', v, formatter('argument to return an array'))

  return okReply(pctx, v[1])
})

/**
 * A parser that returns the third element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */
export const third = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('third', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('third', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('third', v, formatter('argument to return an array'))

  return okReply(pctx, v[2])
})

/**
 * A parser that returns the fourth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */
export const fourth = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('fourth', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('fourth', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('fourth', v, formatter('argument to return an array'))

  return okReply(pctx, v[3])
})

/**
 * A parser that returns the fifth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */
export const fifth = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('fifth', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('fifth', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const v = pres.value
  ASSERT && assertArray('fifth', v, formatter('argument to return an array'))

  return okReply(pctx, v[4])
})

/**
 * A parser that applies the supplied parser and passes its result to
 * the provided function. The return value of that function becomes the
 * result.
 *
 * This is the `fmap` operation from Haskell's `Functor` class. It's
 * used as a basis for lifting functions into a Parser context.
 *
 * @param {Parser} p The parser to apply.
 * @param {function(*):*} fn A mapping function that is passed the
 *     result of `p` and whose return value will be the result of the
 *     created parser.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */
export const map = (p, fn, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('map', p, argParFormatter(1, true))
  ASSERT && assertFunction('map', fn, argFnFormatter(2, true))
  ASSERT && hasM && assertString('map', m, argStrFormatter(3, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }
  return okReply(pctx, fn(pres.value))
})

/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * This is the same operation as `<*>` from Haskell's `Applicative`
 * class.
 *
 * @param {Parser} p A parser whose result will be passed to the
 *     function returned by `q`.
 * @param {Parser} q A parser which provides a function.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */
export const apply = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('apply', p, argParFormatter(1, true))
  ASSERT && assertParser('apply', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('apply', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const [qctx, qres] = q(pctx)
  if (qres.status !== Ok) {
    const fn = replyFn(qres.status === Fatal || qctx.index !== index)
    return fn(qctx, ferror(m, merge(pres.errors, qres.errors)))
  }

  const fn = qres.value
  ASSERT && assertFunction(
    'apply', fn, formatter('second argument to return a function'),
  )
  return okReply(qctx, fn(pres.value))
})

/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
 *
 * This parser will fail fatally if the function-provided parser fails
 * after the other parser consumes input, even if that failure is
 * non-fatal.
 *
 * This is the same operation as the `Monad` class's `bind` operation
 * (generally written `>>=` in Haskell).
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */
export const chain = (p, fn, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('chain', p, argParFormatter(1, true))
  ASSERT && assertFunction('chain', fn, argFnFormatter(2, true))
  ASSERT && hasM && assertString('chain', m, argStrFormatter(3, true))

  const index = ctx.index

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, ferror(m, pres.errors))
  }

  const q = fn(pres.value)
  ASSERT && assertParser(
    'chain', q, formatter('second argument to return a parser'),
  )

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status !== Ok) {
    const fn = replyFn(qres.status === Fatal || qctx.index !== index)
    return fn(qctx, ferror(m, merge(pres.errors, qres.errors)))
  }
  return qrep
})
