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
export function join(p, m) {
  const hasM = m != null

  assertParser('join', p, argParFormatter(1, hasM))
  if (hasM) assertString('join', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('join', v, formatter('argument to return an array'))

    return okReply(pctx, v.join(''))
  })
}

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
export function flat(p, m) {
  const hasM = m != null

  assertParser('flat', p, argParFormatter(1, hasM))
  if (hasM) assertString('flat', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('flat', v, formatter('argument to return an array'))

    return okReply(pctx, v.flat(Infinity))
  })
}

/**
 * Creates a parser that will execute `p` and return `p`'s result with
 * all `null` or `undefined` elements removed. This requires that `p`
 * returns an array, and an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns the array
 *     that `p` returns with `null` and `undefined` values stripped.
 */
export function clean(p, m) {
  const hasM = m != null

  assertParser('clean', p, argParFormatter(1, hasM))
  if (hasM) assertString('clean', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('clean', v, formatter('argument to return an array'))

    return okReply(pctx, v.filter(x => x != null))
  })
}

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
export function value(p, x, m) {
  assertParser('value', p, argParFormatter(1, true))
  if (m != null) assertString('value', m, argStrFormatter(3, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }
    return okReply(pctx, x)
  })
}

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
export function nth(p, n, m) {
  assertParser('nth', p, argParFormatter(1, true))
  assertNumber('nth', n, argNumFormatter(2, true))
  if (m != null) assertString('nth', m, argStrFormatter(3, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('nth', v, formatter('first argument to return an array'))

    return okReply(pctx, v[n])
  })
}

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
export function first(p, m) {
  const hasM = m != null

  assertParser('first', p, argParFormatter(1, hasM))
  if (hasM) assertString('first', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('first', v, formatter('argument to return an array'))

    return okReply(pctx, v[0])
  })
}

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
export function second(p, m) {
  const hasM = m != null

  assertParser('second', p, argParFormatter(1, hasM))
  if (hasM) assertString('second', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('second', v, formatter('argument to return an array'))

    return okReply(pctx, v[1])
  })
}

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
export function third(p, m) {
  const hasM = m != null

  assertParser('third', p, argParFormatter(1, hasM))
  if (hasM) assertString('third', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('third', v, formatter('argument to return an array'))

    return okReply(pctx, v[2])
  })
}

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
export function fourth(p, m) {
  const hasM = m != null

  assertParser('fourth', p, argParFormatter(1, hasM))
  if (hasM) assertString('fourth', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('fourth', v, formatter('argument to return an array'))

    return okReply(pctx, v[3])
  })
}

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
export function fifth(p, m) {
  const hasM = m != null

  assertParser('fifth', p, argParFormatter(1, hasM))
  if (hasM) assertString('fifth', m, argStrFormatter(2, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const v = pres.value
    assertArray('fifth', v, formatter('argument to return an array'))

    return okReply(pctx, v[4])
  })
}

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
export function map(p, fn, m) {
  assertParser('map', p, argParFormatter(1, true))
  assertFunction('map', fn, argFnFormatter(2, true))
  if (m != null) assertString('map', m, argStrFormatter(3, true))

  return parser(ctx => {
    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }
    return okReply(pctx, fn(pres.value))
  })
}

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
export function apply(p, q, m) {
  assertParser('apply', p, argParFormatter(1, true))
  assertParser('apply', q, argParFormatter(2, true))
  if (m != null) assertString('apply', m, argStrFormatter(3, true))

  return parser(ctx => {
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
    assertFunction(
      'apply', fn, formatter('second argument to return a function'),
    )
    return okReply(qctx, fn(pres.value))
  })
}

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
export function chain(p, fn, m) {
  assertParser('chain', p, argParFormatter(1, true))
  assertFunction('chain', fn, argFnFormatter(2, true))
  if (m != null) assertString('chain', m, argStrFormatter(3, true))

  return parser(ctx => {
    const index = ctx.index

    const [pctx, pres] = p(ctx)
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal)
      return fn(pctx, ferror(m, pres.errors))
    }

    const q = fn(pres.value)
    assertParser('chain', q, formatter('second argument to return a parser'))

    const [qrep, [qctx, qres]] = dup(q(pctx))
    if (qres.status !== Ok) {
      const fn = replyFn(qres.status === Fatal || qctx.index !== index)
      return fn(qctx, ferror(m, merge(pres.errors, qres.errors)))
    }
    return qrep
  })
}
