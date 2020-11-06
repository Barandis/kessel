// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, makeParser, ok, Status } from 'kessel/core'
import { makeExpected, makeUnexpected } from 'kessel/error'
import { commaSeparate, dup, nextChar, quote } from 'kessel/util'

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
const CharParser = fn => makeParser(state => {
  const { index, view } = state

  if (index >= view.byteLength) {
    return error(state, [makeUnexpected('EOF')])
  }

  const { width, next } = nextChar(index, view)

  if (fn(next)) {
    return ok(state, next, index + width)
  }
  return error(state, [makeUnexpected(quote(next))])
})

/**
 * Creates a parser that reads a single character from input and
 * succeeds if that character is `c`. Upon failure, this parser does not
 * consume input.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     always fail.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */
export const char = c => makeParser(state => {
  const [tuple, [next, result]] = dup(CharParser(next => c === next)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected(quote(c))])
})

/**
 * Creates a parser that reads a single character from input and
 * succeeds if that character is `c`. This differs from `char` in that
 * the comparison done by this parser is case-insensitive. Upon failure,
 * this parser does not consume input.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     always fail.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */
export const chari = c => makeParser(state => {
  const [tuple, [next, result]] = dup(CharParser(
    read => c.toLowerCase() === read.toLowerCase(),
  )(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected(quote(c))])
})

/**
 * Creates a parser that reads a single character and passes it to the
 * provided function. If the function returns `true`, this parser
 * succeeds with that character as the result. If the function returns
 * `false`, this parser fails and consumes no input.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */
export const satisfy = fn => makeParser(state => {
  const name = fn.name.length ? fn.name : '<anonymous>'
  const message = `a character that satisfies function "${name}"`

  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected(message)])
})

/**
 * Creates a parser that reads a single character and determines whether
 * it is between the provided start and end characters (inclusive). If
 * it is, the read character is the successful result, and if it is not,
 * the parser fails without consuming input.
 *
 * `start` and `end` are expected to be single characters. If they are
 * not, the full strings are compared against the next character, which
 * may cause unexpected behavior.
 *
 * "Between" is defined according to code points. This is fine in most
 * cases, but it can get weird with higher code points. For example,
 * there is no `h` in the set of mathematical lowercase italic symbols.
 * The `h` would instead be the Planck's Constant character, which is in
 * a completely different part of the Unicode spectrum and therefore is
 * not "between" `a` and `z`. Take care with non-ascii characters.
 *
 * @param {string} start The character that defines the start of the
 *     range of characters to match. It is included in that range.
 * @param {string} end The character that defines the end of the range
 *     of characters to match. It is included in that range.
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */
export const range = (start, end) => makeParser(state => {
  const fn = c => c >= start && c <= end
  const message = `a character between "${start}" and "${end}"`

  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected(message)])
})

/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */
export const any = makeParser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return error(state, [makeExpected('any character'), makeUnexpected('EOF')])
  }
  const { width, next } = nextChar(index, view)
  return ok(state, next, index + width)
})

/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 */
export const eof = makeParser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return ok(state, null)
  }
  const { _, next } = nextChar(index, view)
  return error(state, [makeExpected('EOF'), makeUnexpected(quote(next))])
})

/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is among those characters, the parser
 * will succeed.
 *
 * @param {(string|string[])} chars The characters, either in an array
 *     or a string, in which the next input character has to be a
 *     member for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is
 *     one of the characters in `chars`.
 */
export const anyOf = chars => makeParser(state => {
  const { index, view } = state
  const { width, next } = nextChar(index, view)
  const arr = [...chars]

  if (arr.includes(next)) return ok(state, next, index + width)
  const message = 'any of ' + commaSeparate(arr.map(c => `"${c}"`))
  return error(state, [makeExpected(message), makeUnexpected(quote(next))])
})

/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is *not* among those characters, the
 * parser will succeed.
 *
 * @param {(string|string[])} chars The characters, either in an array
 *     or a string, in which the next input character has to not be a
 *     member for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */
export const noneOf = chars => makeParser(state => {
  const { index, view } = state
  const { width, next } = nextChar(index, view)
  const arr = [...chars]

  if (arr.includes(next)) {
    const message = 'none of ' + commaSeparate(arr.map(c => `"${c}"`))
    return error(state, [makeExpected(message), makeUnexpected(quote(next))])
  }
  return ok(state, next, index + width)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */
export const digit = makeParser(state => {
  const fn = c => c >= '0' && c <= '9'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('a digit')])
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */
export const hex = makeParser(state => {
  const fn = c => c >= '0' && c <= '9'
    || c >= 'a' && c <= 'f'
    || c >= 'A' && c <= 'F'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('a hex digit')])
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */
export const octal = makeParser(state => {
  const fn = c => c >= '0' && c <= '7'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('an octal digit')])
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */
export const letter = makeParser(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('a letter')])
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */
export const alpha = makeParser(state => {
  const fn = c => c >= 'a' && c <= 'z'
    || c >= 'A' && c <= 'Z'
    || c >= '0' && c <= '9'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(
    next, [...result.errors, makeExpected('an alphanumeric character')],
  )
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */
export const upper = makeParser(state => {
  const fn = c => c >= 'A' && c <= 'Z'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('an uppercase letter')])
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */
export const lower = makeParser(state => {
  const fn = c => c >= 'a' && c <= 'z'
  const [tuple, [next, result]] = dup(CharParser(fn)(state))
  if (result.status === Status.Ok) return tuple
  return error(next, [...result.errors, makeExpected('a lowercase letter')])
})
