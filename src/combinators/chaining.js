// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { makeParser, maybeFatal, ok, Status } from 'kessel/core'
import { dup } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
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
export const chain = (p, fn) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(fn(result1.value)(next1))
  if (result2.status === Status.Ok) return tuple2
  return maybeFatal(next2.index !== index, next2, result2.errors)
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
 * constant(fn(x)))`. This also makes it a more efficient version of
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
export const map = (p, fn) => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple
  return ok(next, fn(result.value))
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
 * the same state.
 *
 * `join(p)` is an optimized implementation of `chain(p, x =>
 * constant(x.join('')))`.
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
export const join = p => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple
  return ok(next, result.value.join(''))
})

/**
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * `skip(p)` is an optimized implementation of `chain(p, () =>
 * constant(null))`,
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */
export const skip = p => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple
  return ok(next, null)
})

/**
 * Creates a parser that will run the supplied parser but, on success,
 * result in the supplied value instead.
 *
 * `value(p, x)` is an optimized implemenation of `chain(p, () =>
 * constant(x))`.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */
export const value = (p, x) => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status !== Status.Ok) return tuple
  return ok(next, x)
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
export const left = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [next2, result2] = p2(next1)
  if (result2.status !== Status.Ok) {
    return maybeFatal(next2.index !== index, next2, result2.errors)
  }
  return ok(next2, result1.value)
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
export const right = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [tuple2, [next2, result2]] = dup(p2(next1))
  if (result2.status === Status.Ok) return tuple2

  return maybeFatal(next2.index !== index, next2, result2.errors)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail, and the failure will
 * be fatal if any input had been consumed by either parser.
 *
 * `both(p1, p2)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => constant([a, b])))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */
export const both = (p1, p2) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(p1(state))
  if (result1.status !== Status.Ok) return tuple1

  const [next2, result2] = p2(next1)
  if (result2.status === Status.Ok) {
    return ok(next2, [result1.value, result2.value])
  }
  return maybeFatal(next2.index !== index, next2, result2.errors)
})

/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `seq`, `null` parser results are *not* discarded.
 * This ensures that the same number of arguments are passed to `fn` no
 * matter the results from the parsers.
 *
 * `pipe([p1, p2], fn)` is an optimized implementation of `chain(p1, a
 * => chain(p2, b => constant(fn(a, b))))`, `pipe([p1, p2, p3], fn)` is
 * an optimized implementation of `chain(p1, a => chain(p2, b =>
 * chain(p3, c => constant(fn(a, b, c)))))`, and so on.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {Parser[]} ps An array of parsers to be applied one at a time,
 *     in order.
 * @param {function(...*):*} fn A function which will receive as
 *     parameters the results of each parser. Its return value will
 *     become the result of the created parser.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipe = (ps, fn) => makeParser(state => {
  const index = state.index
  const values = []
  let next = state

  for (const p of ps) {
    const [nextState, result] = p(next)
    next = nextState

    if (result.status !== Status.Ok) {
      return maybeFatal(next.index !== index, next, result.errors)
    }
    values.push(result.value)
  }
  return ok(next, fn(...values))
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
export const between = (pre, post, p) => makeParser(state => {
  const index = state.index

  const [tuple1, [next1, result1]] = dup(pre(state))
  if (result1.status !== Status.Ok) return tuple1

  const [next2, result2] = p(next1)
  if (result2.status !== Status.Ok) {
    return maybeFatal(next2.index !== index, next2, result2.errors)
  }

  const [next3, result3] = post(next2)
  if (result3.status === Status.Ok) return ok(next3, result2.value)
  return maybeFatal(next3.index !== index, next3, result3.errors)
})
