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
 * A parser which will execute `p` and return `p`'s results joined
 * together into a single string. This requires that `p` returns an
 * array of strings; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array of
 *     strings.
 * @returns {Parser} A parser that executes `p` and returns a single
 *     string made from joining the elements of the array of strings
 *     returned by `p`.
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
 * A parser that executes `p` but, on success, returns `x` instead.
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
 * A parser that returns the `n`th element of array-producing parser
 * `p`.
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
 * A parser that returns the first element of array-producing parser
 * `p`.
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
 * A parser that returns the second element of array-producing parser
 * `p`.
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
 * A parser that returns the third element of array-producing parser
 * `p`.
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
 * A parser that returns the fourth element of array-producing parser
 * `p`.
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
 * A parser that returns the fifth element of array-producing parser
 * `p`.
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
