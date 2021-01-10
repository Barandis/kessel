// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argNumFormatter,
  argStrFormatter,
  assertNumber,
  assertString,
} from 'kessel/assert'
import { failReply, okReply, parser, Status } from 'kessel/core'
import { expecteds } from 'kessel/messages'
import { charLength, dup, ferror, nextChars, viewToString } from 'kessel/util'

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
  if (length < 1) return okReply(ctx, '')

  const { index, view } = ctx
  if (index >= view.byteLength) return failReply(ctx)

  const { width, next } = nextChars(index, view, length)
  return charLength(next) !== length || !fn(next)
    ? failReply(ctx)
    : okReply(ctx, next, index + width)
})

/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. The string match must be
 * exact (it is case-sensitive), and all UTF-8 characters are recognized
 * properly.
 *
 * If `s` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} s The string to compare against the next characters
 *     of the input.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */
export const str = (s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertString('str', s, argStrFormatter(1, hasM))
  ASSERT && hasM && assertString('str', m, argStrFormatter(2, true))

  const [srep, [sctx, sres]] = dup(stringParser(
    charLength(s), chars => s === chars,
  )(ctx))
  return sres.status === Ok
    ? srep
    : failReply(sctx, ferror(m, expecteds.str(s)))
})

/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. This match is *not*
 * case-sensitive.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} s The string to compare against the next characters
 *     of the input.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */
export const strI = (s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertString('strI', s, argStrFormatter(1, hasM))
  ASSERT && hasM && assertString('strI', m, argStrFormatter(2, true))

  const [srep, [sctx, sres]] = dup(stringParser(
    charLength(s), chars => s.toLowerCase() === chars.toLowerCase(),
  )(ctx))
  return sres.status === Ok
    ? srep
    : failReply(sctx, ferror(m, expecteds.strI(s)))
})

/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 *
 * @returns {Parser} A parser that will always succeed and returns the
 *     remainder of the input.
 */
export const all = () => parser(ctx => {
  const { index, view } = ctx
  const width = view.byteLength - index
  return okReply(ctx, viewToString(index, width, view), index + width)
})

/**
 * A parser that reads a certain number of characters, using them (as a
 * string) as its result. The parser will fail if there are not that
 * many characters left to read.
 *
 * @param {number} n The number of characters to read.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that reads that many characters and joins
 *     them into a string for its result.
 */
export const anystr = (n, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertNumber('anystr', n, argNumFormatter(1, hasM))
  ASSERT && hasM && assertString('anystr', m, argStrFormatter(2, true))

  const [srep, [sctx, sres]] = dup(stringParser(n, () => true)(ctx))
  return sres.status === Ok
    ? srep
    : failReply(sctx, ferror(m, expecteds.anystr(n)))
})
