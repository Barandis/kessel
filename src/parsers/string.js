// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { assertNumber, assertString } from 'kessel/assert'
import { fail, ok, parser, Status } from 'kessel/core'
import { expecteds } from 'kessel/messages'
import { charLength, nextChars, twin, viewToString } from 'kessel/util'

const { Ok } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that attempts to match a particular string from the current
 * position in the text. A string of characters equal in length to
 * `length` is read from input and passed to `fn`; if `fn` returns
 * `true`, then the parser succeeds.
 *
 * This parser always fails if there are less than `length` characters
 * left in the input. It will always pass if `length` is 0.
 *
 * @param {number} length The number of characters that the parser
 *     should read.
 * @param {function(string): boolean} fn A function to which the read
 *     string is passed. If this function returns `true`, the parser
 *     succeeds.
 * @returns {Parser} A parser that succeeds if the read string passes
 *     the predicate function.
 */
const stringParser = (length, fn) => parser(ctx => {
  if (length < 1) return ok(ctx, '')

  const { index, view } = ctx
  if (index >= view.byteLength) return fail(ctx)

  const { width, next } = nextChars(index, view, length)
  return charLength(next) !== length || !fn(next)
    ? fail(ctx)
    : ok(ctx, next, index + width)
})

/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. The string match must be
 * exact (it is case-sensitive), and all UTF-8 characters are recognized
 * properly.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */
export const string = str => parser(ctx => {
  ASSERT && assertString('string', str)

  const [sprep, [spctx, spres]] = twin(stringParser(
    charLength(str), chars => str === chars,
  )(ctx))
  return spres.status === Ok ? sprep : fail(spctx, expecteds.string(str))
})

/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. This match is *not*
 * case-sensitive.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */
export const stringI = str => parser(ctx => {
  ASSERT && assertString('stringI', str)

  const [sprep, [spctx, spres]] = twin(stringParser(
    charLength(str), chars => str.toLowerCase() === chars.toLowerCase(),
  )(ctx))
  return spres.status === Ok ? sprep : fail(spctx, expecteds.stringI(str))
})

/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 *
 * @type {Parser}
 */
export const all = parser(ctx => {
  const { index, view } = ctx
  const width = view.byteLength - index
  return ok(ctx, viewToString(index, width, view), index + width)
})

/**
 * A parser that reads a certain number of characters, using them (as a
 * string) as its result. The parser will fail if there are not that
 * many characters left to read.
 *
 * @param {number} n The number of characters to read.
 * @returns {Parser} A parser that reads that many characters and joins
 *     them into a string for its result.
 */
export const anyString = n => parser(ctx => {
  ASSERT && assertNumber('anyString', n)

  const [sprep, [spctx, spres]] = twin(stringParser(n, () => true)(ctx))
  return spres.status === Ok ? sprep : fail(spctx, expecteds.anyString(n))
})
