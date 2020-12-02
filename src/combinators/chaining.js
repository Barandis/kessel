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
import { dup, ordinal } from 'kessel/util'

const { Ok } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that chains the result after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that result.
 *
 * If the initial parser fails, that failure is instead returned. If the
 * second parser (the return value of `fn`) fails and `p` consumed
 * input, the failure is fatal.
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

  const [reply1, [context1, result1]] = dup(p(ctx))
  if (result1.status !== Ok) return reply1

  const p2 = fn(result1.value)
  ASSERT && assertParser(
    'chain', p2, formatter('the 2nd argument to return a parser'),
  )

  const [reply2, [context2, result2]] = dup(p2(context1))
  return result2.status === Ok ? reply2
    : maybeFatal(context2.index !== index, context2, result2.errors)
})

/**
 * Creates a parser that applies the supplied parser and passes its
 * result to the provided function. The return value of that function
 * becomes the result of the created parser.
 *
 * If the contained parser fails, that failure is propagated out as the
 * failure of the returned parser.
 *
 * `map(p, fn)` is an optimized implementation of `chain(p, x =>
 * always(fn(x)))`. This also makes it a more efficient version of
 * `pipe([p], fn)` (a single-parser `pipe`).
 *
 * @param {Parser} p The parser to apply to the input.
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

  const [reply, [context, result]] = dup(p(ctx))
  return result.status === Ok ? ok(context, fn(result.value)) : reply
})

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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('join', v, formatter('argument to return an array'))

  return ok(context, v.join(''))
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

  const [reply, [context, result]] = dup(p(ctx))
  return result.status === Ok ? ok(context, null) : reply
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

  const [tuple, [context, result]] = dup(p(ctx))
  return result.status === Ok ? ok(context, x) : tuple
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `left(p1, p2)` is an optimized implementation of `chain(p1, x =>
 * value(p2, x))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */
export const left = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('left', p1, ordParFormatter('1st'))
  ASSERT && assertParser('left', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = dup(p1(ctx))
  if (result1.status !== Ok) return reply1

  const [context2, result2] = p2(context1)
  return result2.status === Ok ? ok(context2, result1.value)
    : maybeFatal(context2.index !== index, context2, result2.errors)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `right(p1, p2)` is an optimized implementation of `chain(p1, () =>
 * p2)`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */
export const right = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('right', p1, ordParFormatter('1st'))
  ASSERT && assertParser('right', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = dup(p1(ctx))
  if (result1.status !== Status.Ok) return reply1

  const [reply2, [context2, result2]] = dup(p2(context1))
  return result2.status === Ok ? reply2
    : maybeFatal(context2.index !== index, context2, result2.errors)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail, and the failure will
 * be fatal if any input had been consumed by either parser.
 *
 * `both(p1, p2)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => always([a, b])))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */
export const both = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('both', p1, ordParFormatter('1st'))
  ASSERT && assertParser('both', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = dup(p1(ctx))
  if (result1.status !== Ok) return reply1

  const [context2, result2] = p2(context1)
  return result2.status === Ok ? ok(context2, [result1.value, result2.value])
    : maybeFatal(context2.index !== index, context2, result2.errors)
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
 * `pipe(p1, p2, fn)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => always(fn(a, b))))`, `pipe(p1, p2, p3, fn)` is an
 * optimized implementation of `chain(p1, a => chain(p2, b => chain(p3,
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
    const [next, result] = p(context)
    context = next

    if (result.status !== Ok) {
      return maybeFatal(context.index !== index, context, result.errors)
    }
    values.push(result.value)
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

  const [reply1, [context1, result1]] = dup(pre(ctx))
  if (result1.status !== Ok) return reply1

  const [context2, result2] = p(context1)
  if (result2.status !== Ok) {
    return maybeFatal(context2.index !== index, context2, result2.errors)
  }

  const [context3, result3] = post(context2)
  return result3.status === Ok ? ok(context3, result2.value)
    : maybeFatal(context3.index !== index, context3, result3.errors)
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('nth', v, formatter('1st argument to return an array'))

  return ok(context, v[n])
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('first', v, formatter('argument to return an array'))

  return ok(context, v[0])
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('second', v, formatter('argument to return an array'))

  return ok(context, v[1])
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('third', v, formatter('argument to return an array'))

  return ok(context, v[2])
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('fourth', v, formatter('argument to return an array'))

  return ok(context, v[3])
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

  const [reply, [context, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const v = result.value
  ASSERT && assertArray('fifth', v, formatter('argument to return an array'))

  return ok(context, v[4])
})
