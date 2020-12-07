// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertFunction,
  assertParser,
  formatter,
  ordFnFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { maybeFatal, ok, Parser, Status } from 'kessel/core'
import { merge } from 'kessel/error'
import { twin } from 'kessel/util'

const { Ok, Fail, Fatal } = Status

// ====================================================================
// Both Applicative and Monad

/**
 * A parser which always succeeds with the supplied value.
 *
 * This serves as a primitive for both monads and applicatives. In
 * Haskell terms, this function represents both `pure` in the
 * `Applicative` class and `return` in the `Monad` class.
 *
 * In other words, it lifts an arbitrary value into a Parser context,
 * turning it into a parser that returns that value.
 *
 * @param {*} x The value will result when this parser is applied.
 * @returns {Parser} A parser that always succeeds with `value`.
 */
export const always = x => Parser(ctx => ok(ctx, x))

// ====================================================================
// Applicative

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
export const map = (p, fn) => Parser(ctx => {
  ASSERT && assertParser('map', p, ordParFormatter('1st'))
  ASSERT && assertFunction('map', fn, ordFnFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, fn(pres.value)) : prep
})

/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
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
export const apply = (p, q) => Parser(ctx => {
  ASSERT && assertParser('apply', p, ordParFormatter('1st'))
  ASSERT && assertParser('apply', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  if (qres.status !== Ok) {
    return maybeFatal(qctx.index !== index, qctx, qres.errors)
  }

  const fn = qres.value
  ASSERT && assertFunction(
    'apply', fn, formatter('2nd argument to return a function'),
  )
  return ok(qctx, fn(pres.value))
})

// ====================================================================
// Monad

/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
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
export const chain = (p, fn) => Parser(ctx => {
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
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
})

// ====================================================================
// Alternative

/**
 * A parser that always succeeds with no result.
 *
 * This represents the `empty` operation from Haskell's `Alternative`
 * class.
 * @type {Parser}
 */
export const empty = Parser(ctx => ok(ctx))

/**
 * A parser that first applies `p` and, if that fails, applies `q`. The
 * result is the result of whatever parser succeeds. If both fail,
 * `orElse` also fails, and if either fail fatally, `orElse` fails
 * fatally.
 *
 * This is the same operation as `<|>` in Haskell's `Alternative` class.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies the first parser and then if
 *     necessary the second parser, returning the result of the first to
 *     succeed.
 */
export const orElse = (p, q) => Parser(ctx => {
  ASSERT && assertParser('orElse', p, ordParFormatter('1st'))
  ASSERT && assertParser('orElse', q, ordParFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Fail) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  return qres.status === Ok
    ? qrep
    : maybeFatal(qres.status === Fatal, qctx, merge(pres.errors, qres.errors))
})

// ====================================================================
// Derivative primitives

/**
 * A parser that applies the parsers `p` and `q` in sequence and then
 * return the result of both in a 2-element array. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * This is the most primitive sequencing parser. It can be regarded as
 * an optimized implementation of either, in the monadic and applicative
 * styles respectively:
 *
 * ```
 * chain(p, a => chain(q, b => always([a, b])))
 * apply(p, apply(q, always(b => a => [a, b])))
 * ```
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */
export const andThen = (p, q) => Parser(ctx => {
  ASSERT && assertParser('andThen', p, ordParFormatter('1st'))
  ASSERT && assertParser('andThen', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  return qres.status === Ok
    ? ok(qctx, [pres.value, qres.value])
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
})
