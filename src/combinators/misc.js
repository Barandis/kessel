// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertArray,
  assertNumber,
  assertParser,
  formatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { ok, Parser, Status } from 'kessel/core'
import { twin } from 'kessel/util'

const { Ok } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser which applies the supplied parser. That parser is
 * expected to result in an array of strings, and if it succeeds, that
 * result's elements are joined together into a single string. This is
 * useful because JavaScript does not share the characteristic of some
 * functional languages where a string is the same as a list of
 * characters. JavaScript needs explicit conversion between the two, so
 * this parser will turn an array of characters into a string.
 *
 * If the supplied parser fails, the created parser will also fail with
 * the same error type.
 *
 * `join(p)` is an optimized implementation of `chain(p, x =>
 * always(x.join('')))` or `apply(p, always(x => x.join('')))`.
 *
 * If the supplied parser does not result in an array, an exception will
 * be thrown because an attempt will be made to call `join` on the
 * result. If it results in an array of something other than strings,
 * those elements will be coerced into strings and then joined.
 *
 * @param {Parser} p A parser that is expected to result in an array of
 *     strings.
 * @returns {Parser} A parser that applies its contained parser and
 *     results in a single string made from joining the elements of the
 *     array of strings.
 */
export const join = p => Parser(ctx => {
  ASSERT && assertParser('join', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('join', v, formatter('argument to return an array'))

  return ok(pctx, v.join(''))
})

/**
 * Creates a parser that will run the supplied parser but, on success,
 * result in the supplied value instead.
 *
 * `value(p, x)` is an optimized implemenation of `chain(p, () =>
 * always(x))`.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */
export const value = (p, x) => Parser(ctx => {
  ASSERT && assertParser('value', p, ordParFormatter('1st'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, x) : prep
})

/**
 * Returns the nth element of the result of a parser that produces an
 * array. If the parser fails, that failure will be passed through.
 *
 * `nth(p, n)` is an optimized implementation of `chain(p, x =>
 * always(x[n]))`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */
export const nth = (p, n) => Parser(ctx => {
  ASSERT && assertParser('nth', p, ordParFormatter('1st'))
  ASSERT && assertNumber('nth', n, ordNumFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('nth', v, formatter('1st argument to return an array'))

  return ok(pctx, v[n])
})

/**
 * Returns the first element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `first(p)` is an optimized implementation of `chain(p, x =>
 * always(x[0]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */
export const first = p => Parser(ctx => {
  ASSERT && assertParser('first', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('first', v, formatter('argument to return an array'))

  return ok(pctx, v[0])
})

/**
 * Returns the second element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `second(p)` is an optimized implementation of `chain(p, x =>
 * always(x[1]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */
export const second = p => Parser(ctx => {
  ASSERT && assertParser('second', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('second', v, formatter('argument to return an array'))

  return ok(pctx, v[1])
})

/**
 * Returns the third element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `third(p)` is an optimized implementation of `chain(p, x =>
 * always(x[2]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */
export const third = p => Parser(ctx => {
  ASSERT && assertParser('third', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('third', v, formatter('argument to return an array'))

  return ok(pctx, v[2])
})

/**
 * Returns the fourth element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `fourth(p)` is an optimized implementation of `chain(p, x =>
 * always(x[3]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */
export const fourth = p => Parser(ctx => {
  ASSERT && assertParser('fourth', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('fourth', v, formatter('argument to return an array'))

  return ok(pctx, v[3])
})

/**
 * Returns the fifth element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `fifth(p)` is an optimized implementation of `chain(p, x =>
 * always(x[4]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */
export const fifth = p => Parser(ctx => {
  ASSERT && assertParser('fifth', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const v = pres.value
  ASSERT && assertArray('fifth', v, formatter('argument to return an array'))

  return ok(pctx, v[4])
})
