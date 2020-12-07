// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertChar,
  assertFunction,
  assertString,
  assertStringOrArray,
  ordCharFormatter,
  ordFnFormatter,
  ordStrFormatter,
} from 'kessel/assert'
import { fail, ok, Parser, Status } from 'kessel/core'
import { expected } from 'kessel/error'
import { expecteds } from 'kessel/messages'
import { nextChar, twin } from 'kessel/util'

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
const CharParser = fn => Parser(ctx => {
  const { index, view } = ctx
  if (index >= view.byteLength) return fail(ctx)

  const { width, next } = nextChar(index, view)
  return fn(next) ? ok(ctx, next, index + width) : fail(ctx)
})

/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */
export const char = c => Parser(ctx => {
  ASSERT && assertChar('char', c)

  const [cprep, [cpctx, cpres]] = twin(CharParser(ch => c === ch)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.char(c))
})

/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`. This differs from `char` in that the
 * comparison done by this parser is case-insensitive.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */
export const charI = c => Parser(ctx => {
  ASSERT && assertChar('charI', c)

  const [cprep, [cpctx, cpres]] = twin(CharParser(
    ch => c.toLowerCase() === ch.toLowerCase(),
  )(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.charI(c))
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
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */
export const satisfy = fn => Parser(ctx => {
  ASSERT && assertFunction('satisfy', fn)
  return CharParser(fn)(ctx)
})

/**
 * A parser that reads a single character and passes it to the provided
 * function. If the function returns `true`, this parser succeeds with
 * that character as the result. If the function returns `false`, this
 * parser fails and consumes no input and signals an error with the
 * provided message.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @param {string} message The error message to use if the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */
export const satisfyM = (fn, message) => Parser(ctx => {
  ASSERT && assertFunction('satisfyM', fn, ordFnFormatter('1st'))
  ASSERT && assertString('satisfyM', message, ordStrFormatter('2nd'))

  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expected(message))
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
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */
export const range = (s, e) => Parser(ctx => {
  ASSERT && assertChar('range', s, ordCharFormatter('1st'))
  ASSERT && assertChar('range', e, ordCharFormatter('2nd'))

  const fn = c => c >= s && c <= e
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.range(s, e))
})

/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */
export const any = Parser(ctx => {
  const { index, view } = ctx
  if (index >= view.byteLength) return fail(ctx, expecteds.any)

  const { width, next } = nextChar(index, view)
  return ok(ctx, next, index + width)
})

/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 */
export const eof = Parser(ctx => {
  const { index, view } = ctx
  return index >= view.byteLength ? ok(ctx, null) : fail(ctx, expecteds.eof)
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
export const anyOf = cs => Parser(ctx => {
  ASSERT && assertStringOrArray('anyOf', cs)

  const { index, view } = ctx
  const { width, next } = nextChar(index, view)
  const arr = [...cs]

  return arr.includes(next)
    ? ok(ctx, next, index + width)
    : fail(ctx, expecteds.anyOf(arr))
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
export const noneOf = cs => Parser(ctx => {
  ASSERT && assertStringOrArray('noneOf', cs)

  const { index, view } = ctx
  const { width, next } = nextChar(index, view)
  const arr = [...cs]

  return arr.includes(next)
    ? fail(ctx, expecteds.noneOf(arr))
    : ok(ctx, next, index + width)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 */
export const digit = Parser(ctx => {
  const fn = c => c >= '0' && c <= '9'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.digit)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */
export const hex = Parser(ctx => {
  const fn = c => c >= '0' && c <= '9'
    || c >= 'a' && c <= 'f'
    || c >= 'A' && c <= 'F'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.hex)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */
export const octal = Parser(ctx => {
  const fn = c => c >= '0' && c <= '7'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.octal)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 */
export const letter = Parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.letter)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 */
export const alpha = Parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z'
    || c >= 'A' && c <= 'Z'
    || c >= '0' && c <= '9'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.alpha)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 */
export const upper = Parser(ctx => {
  const fn = c => c >= 'A' && c <= 'Z'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.upper)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 */
export const lower = Parser(ctx => {
  const fn = c => c >= 'a' && c <= 'z'
  const [cprep, [cpctx, cpres]] = twin(CharParser(fn)(ctx))
  return cpres.status === Ok ? cprep : fail(cpctx, expecteds.lower)
})
