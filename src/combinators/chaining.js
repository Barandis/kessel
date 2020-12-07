// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertArray,
  assertFunction,
  assertNumber,
  assertParser,
  assertParsers,
  formatter,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { maybeFatal, ok, Parser, Status } from 'kessel/core'
import { ordinal, twin } from 'kessel/util'

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
 * always(x.join('')))`.
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
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * `skip(p)` is an optimized implementation of `chain(p, () =>
 * always(null))`,
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */
export const skip = p => Parser(ctx => {
  ASSERT && assertParser('skip', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, null) : prep
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
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `p`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `left(p, q)` is an optimized implementation of `chain(p, x =>
 * value(q, x))`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */
export const left = (p, q) => Parser(ctx => {
  ASSERT && assertParser('left', p, ordParFormatter('1st'))
  ASSERT && assertParser('left', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  return qres.status === Ok ? ok(qctx, pres.value)
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
})

/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `q`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `right(p, q)` is an optimized implementation of `chain(p, () =>
 * q)`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */
export const right = (p, q) => Parser(ctx => {
  ASSERT && assertParser('right', p, ordParFormatter('1st'))
  ASSERT && assertParser('right', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Status.Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  return qres.status === Ok ? qrep
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
})

/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * `pipe(p, q, fn)` is an optimized implementation of `chain(p, a =>
 * chain(q, b => always(fn(a, b))))`, `pipe(p, q, r, fn)` is an
 * optimized implementation of `chain(p, a => chain(q, b => chain(r,
 * c => always(fn(a, b, c)))))`, and so on.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {...(Parser|function(...*):*)} ps An array of parsers to be
 *     applied one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of the created parser. A single
 *     function must be present and it must be the last parameter; all
 *     other parameters must be parsers.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipe = (...ps) => Parser(ctx => {
  const fn = ps.pop()

  ASSERT && assertParsers('pipe', ps)
  ASSERT && assertFunction('pipe', fn, ordFnFormatter(ordinal(ps.length + 1)))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const p of ps) {
    const [pctx, pres] = p(context)
    context = pctx

    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, pres.errors)
    }
    values.push(pres.value)
  }
  return ok(context, fn(...values))
})

/**
 * Creates a parser which applies its before, content, and after parsers
 * in order and results in the result of its content parser.
 *
 * Note that the content parser `p` is applied before the after parser
 * `pafter`. This means that the content parser will have an opportunity
 * to patch the "after" content before the after parser does, so take
 * care that the parsers do not overlap in what they match.
 *
 * `between(pre, post, p)` is an optimized implementation of
 * `left(right(pre, p), post)`.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */
export const between = (pre, post, p) => Parser(ctx => {
  ASSERT && assertParser('between', pre, ordParFormatter('1st'))
  ASSERT && assertParser('between', post, ordParFormatter('2nd'))
  ASSERT && assertParser('between', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [prerep, [prectx, preres]] = twin(pre(ctx))
  if (preres.status !== Ok) return prerep

  const [pctx, pres] = p(prectx)
  if (pres.status !== Ok) {
    return maybeFatal(pctx.index !== index, pctx, pres.errors)
  }

  const [postctx, postres] = post(pctx)
  return postres.status === Ok ? ok(postctx, pres.value)
    : maybeFatal(postctx.index !== index, postctx, postres.errors)
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
