// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argCharFormatter,
  argFnFormatter,
  argStrFormatter,
  assertChar,
  assertFunction,
  assertString,
  assertStringOrArray,
} from 'kessel/assert'
import { failReply, okReply, parser, Status } from 'kessel/core'
import { expecteds } from 'kessel/messages'
import { dup, ferror, nextChar } from 'kessel/util'

const { Ok } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that reads a single character, feeds it to a function, and
 * succeeds or fails based on the return value.
 *
 * There isn't anything here that couldn't be written with
 * `StringParser` instead, but when working with single characters there
 * are certain assumptions that can be made (such as the number of
 * characters that have to be read from the input view) that allow it to
 * be a little more efficient.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */
const charParser = fn => parser(ctx => {
  const { index, view } = ctx
  if (index >= view.byteLength) return failReply(ctx)

  const { width, next } = nextChar(index, view)
  return fn(next) ? okReply(ctx, next, index + width) : failReply(ctx)
})

/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */
export const char = (c, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertChar('char', c, argCharFormatter(1, hasM))
  ASSERT && hasM && assertString('char', m, argStrFormatter(2, true))

  const [crep, [cctx, cres]] = dup(charParser(ch => c === ch)(ctx))
  return cres.status === Ok
    ? crep
    : failReply(cctx, ferror(m, expecteds.char(c)))
})

/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`. This differs from `char` in that the
 * comparison done by this parser is case-insensitive.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */
export const charI = (c, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertChar('charI', c, argCharFormatter(1, hasM))
  ASSERT && hasM && assertString('charI', m, argStrFormatter(2, true))

  const [crep, [cctx, cres]] = dup(charParser(
    ch => c.toLowerCase() === ch.toLowerCase(),
  )(ctx))
  return cres.status === Ok
    ? crep
    : failReply(cctx, ferror(m, expecteds.charI(c)))
})

/**
 * A parser that reads a single character and passes it to the provided
 * function. If the function returns `true`, this parser succeeds with
 * that character as the result. If the function returns `false`, this
 * parser fails and consumes no input.
 *
 * This parser cannot determine the cause for an error since it's not
 * feasible to have it analyze the function to see what it expects to
 * match, so no error message is provided on failure. Use
 * `label(satisfy(fn), msg)` or the equivalent `satisfyL(fn, msg)` to
 * add an appropriate error message.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */
export const satisfy = (fn, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertFunction('satisfy', fn, argFnFormatter(1, hasM))
  ASSERT && hasM && assertString('satisfy', m, argStrFormatter(2, true))

  const [crep, [cctx, cres]] = dup(charParser(fn)(ctx))
  if (cres.status === Ok) return crep
  return failReply(cctx, ferror(m, cres.errors))
})

/**
 * A parser that reads a single character and determines whether it is
 * between (according to code points) characters `s` and `e`
 * (inclusive). If it is, the read character is the successful result,
 * and if it is not, the parser fails without consuming input.
 *
 * `s` and `e` are expected to be single characters. An error will be
 * thrown if they are not.
 *
 * @param {string} s The character that defines the start of the range
 *     of characters to match. It is included in that range.
 * @param {string} e The character that defines the end of the range of
 *     characters to match. It is included in that range.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */
export const range = (s, e, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertChar('range', s, argCharFormatter(1, true))
  ASSERT && assertChar('range', e, argCharFormatter(2, true))
  ASSERT && hasM && assertString('range', m, argStrFormatter(3, true))

  const fn = c => c >= s && c <= e
  const [crep, [cctx, cres]] = dup(charParser(fn)(ctx))
  return cres.status === Ok
    ? crep
    : failReply(cctx, ferror(m, expecteds.range(s, e)))
})

/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches any character.
 */
export const any = m => parser(ctx => {
  const hasM = m != null

  ASSERT && hasM && assertString('any', m, argStrFormatter(1))

  const { index, view } = ctx
  if (index >= view.byteLength) {
    return failReply(ctx, ferror(m, expecteds.any))
  }

  const { width, next } = nextChar(index, view)
  return okReply(ctx, next, index + width)
})

/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches the end of input.
 */
export const eof = m => parser(ctx => {
  const hasM = m != null

  ASSERT && hasM && assertString('eof', m, argStrFormatter(1))

  const { index, view } = ctx
  return index >= view.byteLength
    ? okReply(ctx, null)
    : failReply(ctx, ferror(m, expecteds.eof))
})

/**
 * A parser that reads a character and compares it against each of the
 * characters in `cs`, which is either an array of characters or a
 * string. If the read character is among those characters, the parser
 * will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to be a member for
 *     the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is one
 *     of the characters in `chars`.
 */
export const anyOf = cs => parser(ctx => {
  ASSERT && assertStringOrArray('anyOf', cs)

  const { index, view } = ctx
  const { width, next } = nextChar(index, view)
  const arr = [...cs]

  return arr.includes(next)
    ? okReply(ctx, next, index + width)
    : failReply(ctx, expecteds.anyOf(arr))
})

/**
 * A parser that reads a character and compares it against each of the
 * characters in `cs`, which is either an array of characters or a
 * string. If the read character is *not* among those characters, the
 * parser will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to not be a member
 *     for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */
export const noneOf = cs => parser(ctx => {
  ASSERT && assertStringOrArray('noneOf', cs)

  const { index, view } = ctx
  const { width, next } = nextChar(index, view)
  const arr = [...cs]

  return arr.includes(next)
    ? failReply(ctx, expecteds.noneOf(arr))
    : okReply(ctx, next, index + width)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 *
 * @type {Parser}
 */
export const digit = parser(ctx => {
  const fn = c => c >= '0' && c <= '9'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.digit)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 *
 * @type {Parser}
 */
export const hex = parser(ctx => {
  const fn = c => c >= '0' && c <= '9'
    || c >= 'a' && c <= 'f'
    || c >= 'A' && c <= 'F'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.hex)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 *
 * @type {Parser}
 */
export const octal = parser(ctx => {
  const fn = c => c >= '0' && c <= '7'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.octal)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 *
 * @type {Parser}
 */
export const letter = parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.letter)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 *
 * @type {Parser}
 */
export const alpha = parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z'
    || c >= 'A' && c <= 'Z'
    || c >= '0' && c <= '9'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.alpha)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 *
 * @type {Parser}
 */
export const upper = parser(ctx => {
  const fn = c => c >= 'A' && c <= 'Z'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.upper)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 *
 * @type {Parser}
 */
export const lower = parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z'
  const [cprep, [cpctx, cpres]] = dup(charParser(fn)(ctx))
  return cpres.status === Ok ? cprep : failReply(cpctx, expecteds.lower)
})
