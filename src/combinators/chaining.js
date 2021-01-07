// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argParFormatter,
  argStrFormatter,
  assertArray,
  assertFunction,
  assertNumber,
  assertParser,
  assertString,
  formatter,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { maybeFatal, ok, parser, Status } from 'kessel/core'
import { expected, merge } from 'kessel/error'
import { twin } from 'kessel/util'

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
    return maybeFatal(
      pres.status === Fatal, pctx, hasM ? expected(m) : pres.errors,
    )
  }

  const v = pres.value
  ASSERT && assertArray('join', v, formatter('argument to return an array'))

  return ok(pctx, v.join(''))
})

/**
 * A parser which will execute `p` and return its results minus any
 * `null` or `undefined` results. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @returns {Parser} A parser that executes `p` and returns its results
 *     minus any `null` or `undefined` results.
 */
export const compact = p => parser(ctx => {
  ASSERT && assertParser('compact', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('compact', v, formatter('argument to return an array'))

  return ok(pctx, v.filter(x => x != null))
})

/**
 * A parser that executes `p` but, on success, returns `x` instead.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */
export const value = (p, x) => parser(ctx => {
  ASSERT && assertParser('value', p, ordParFormatter('1st'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, x) : prep
})

/**
 * A parser that returns the `n`th element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */
export const nth = (p, n) => parser(ctx => {
  ASSERT && assertParser('nth', p, ordParFormatter('1st'))
  ASSERT && assertNumber('nth', n, ordNumFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('nth', v, formatter('1st argument to return an array'))

  return ok(pctx, v[n])
})

/**
 * A parser that returns the first element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */
export const first = p => parser(ctx => {
  ASSERT && assertParser('first', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('first', v, formatter('argument to return an array'))

  return ok(pctx, v[0])
})

/**
 * A parser that returns the second element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */
export const second = p => parser(ctx => {
  ASSERT && assertParser('second', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('second', v, formatter('argument to return an array'))

  return ok(pctx, v[1])
})

/**
 * A parser that returns the third element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */
export const third = p => parser(ctx => {
  ASSERT && assertParser('third', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('third', v, formatter('argument to return an array'))

  return ok(pctx, v[2])
})

/**
 * A parser that returns the fourth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */
export const fourth = p => parser(ctx => {
  ASSERT && assertParser('fourth', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('fourth', v, formatter('argument to return an array'))

  return ok(pctx, v[3])
})

/**
 * A parser that returns the fifth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */
export const fifth = p => parser(ctx => {
  ASSERT && assertParser('fifth', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('fifth', v, formatter('argument to return an array'))

  return ok(pctx, v[4])
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
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */
export const map = (p, fn) => parser(ctx => {
  ASSERT && assertParser('map', p, ordParFormatter('1st'))
  ASSERT && assertFunction('map', fn, ordFnFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, fn(pres.value)) : prep
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
 * @returns {Parser} A parser that applies `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */
export const apply = (p, q) => parser(ctx => {
  ASSERT && assertParser('apply', p, ordParFormatter('1st'))
  ASSERT && assertParser('apply', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  if (qres.status !== Ok) {
    return maybeFatal(
      qctx.index !== index, qctx, merge(pres.errors, qres.errors),
    )
  }

  const fn = qres.value
  ASSERT && assertFunction(
    'apply', fn, formatter('2nd argument to return a function'),
  )
  return ok(qctx, fn(pres.value))
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
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */
export const chain = (p, fn) => parser(ctx => {
  ASSERT && assertParser('chain', p, ordParFormatter('1st'))
  ASSERT && assertFunction('chain', fn, ordFnFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const q = fn(pres.value)
  ASSERT && assertParser(
    'chain', q, formatter('the 2nd argument to return a parser'),
  )

  const [qrep, [qctx, qres]] = twin(q(pctx))
  return qres.status === Ok
    ? qrep
    : maybeFatal(qctx.index !== index, qctx, merge(pres.errors, qres.errors))
})
