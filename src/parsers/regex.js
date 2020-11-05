// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, makeParser, ok, Status } from 'kessel/core'
import { makeExpected, makeUnexpected, overwrite } from 'kessel/error'
import { charLength, quote, stringToView, viewToString } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

// All of the regular expressions used in the derived regex parsers.
// These are here to create and compile them once, upon initial load, to
// speed parsing later.

/** Matches every Unicode letter character. */
const reLetter = /^\p{Alphabetic}/u
/** Matches every Unicode letter or number character. */
const reAlpha = /^(?:\p{Alphabetic}|\p{N})/u
/** Matches every Unicode uppercase or titlecase character. */
const reUpper = /^(?:\p{Uppercase}|\p{Lt})/u
/** Matches every Unicode lowercase character. */
const reLower = /^\p{Lowercase}/u
/** Matches a single conventional whitespace character. */
const reSpace = /^(?:\r\n|[\r\n\t ])/
/** Matches a single Unicode whitespace character. */
const reUspace = /^(?:\r\n|\p{White_Space})/u
/** Matches zero or more conventional whitespace characters. */
const reSpaces = /^[\r\n\t ]*/
/** Matches zero or more Unicode whitespace characters. */
const reUspaces = /^\p{White_Space}*/u
/** Matches one or more conventional whitespace characters. */
const reSpaces1 = /^[\r\n\t ]+/
/** Matches one or more Unicode whitespace characters. */
const reUspaces1 = /^\p{White_Space}+/u
/** Matches any conventional newline (\r, \n, or \r\n). */
const reNewline = /^(?:\r\n|\r|\n)/
/** Matches every Unicode newline character, plus \r\n. */
const reUnewline = /^(?:\r\n|[\r\n\u0085\u2028\u2029])/u

/**
 * Creates a parser that takes a regular expression object and matches
 * it as far as it can against the input at its current position.
 *
 * It is assumed that the regex begins with a `^` . The `g` flag is
 * ignored in that only the first match is processed and returned. This
 * ensures that the match is only against the text directly at the
 * current pointer location.
 *
 * `length` is the length of the returned `actual` state property upon
 * failure. If it's not provided, the length will be the same as the
 * length of the regular expression's source.
 *
 * @param {RegExp} re The regular expression used to match against the
 *     input text starting at its current position.
 * @param {number} [length] The length of the resulting `Unexpected`
 *     error message if the parser fails. If this is not present, that
 *     message will be as long as the string representation of the
 *     regular expression, just as a guess.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */
const RegexParser = (re, length = null) => makeParser(state => {
  const { index, view } = state
  const rest = viewToString(index, view.byteLength - index, view)

  const match = rest.match(re)
  if (match) {
    return ok(state, match[0], index + stringToView(match[0]).byteLength)
  }

  let len = length ?? charLength(re.source) - 1 // to ignore anchor
  if (len > view.byteLength - index) {
    len = view.byteLength - index
  }
  const actual = len === 0 ? 'EOF' : quote([...rest].slice(0, len).join(''))

  return error(state, overwrite(
    state.errors,
    makeExpected(`a string matching ${re}`),
    makeUnexpected(actual),
  ))
})

/**
 * Creates a parser that attempts to match the supplied regular
 * expression to the input text at the current location. If there is a
 * match, any matching text is returned as a successful result. No text
 * is consumed upon failure.
 *
 * A string can be passed to this parser. If one is, it is converted
 * into a regular expression without flags.
 *
 * If a start anchor (^) is not included, one will be added. If the `g`
 * flag is included, it'll functionally be ignored as only the first
 * match will be considered anyway. These two rules ensure that the
 * match is only attempted at the beginning of the current text.
 *
 * @param {(string|RegExp)} re The regular expression to match against
 *     the input text. If this is a string, it will be converted into
 *     a regular expression with no flags.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */
export const regex = re => {
  // First, convert to a regular expression if it's a string
  let regex = typeof re === 'string' ? new RegExp(re) : re

  // Next, make sure the regular expression starts with a ^ anchor
  const { source, flags } = regex
  const reanchor = source[0] !== '^'
  if (reanchor) {
    const newSource = '^' + source
    regex = new RegExp(newSource, flags)
  }

  return RegexParser(regex)
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */
export const uletter = makeParser(state => {
  const nextState = RegexParser(reLetter, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected('a letter')))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */
export const ualpha = makeParser(state => {
  const nextState = RegexParser(reAlpha, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    makeExpected('an alphanumeric'),
  ))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */
export const uupper = makeParser(state => {
  const nextState = RegexParser(reUpper, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    makeExpected('an uppercase letter'),
  ))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */
export const ulower = makeParser(state => {
  const nextState = RegexParser(reLower, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    makeExpected('a lowercase letter'),
  ))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */
export const space = makeParser(state => {
  const nextState = RegexParser(reSpace, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('whitespace')),
  )
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 */
export const uspace = makeParser(state => {
  const nextState = RegexParser(reUspace, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('whitespace')),
  )
})

/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */
export const spaces = makeParser(state => {
  const nextState = RegexParser(reSpaces, 1)(state)
  return ok(nextState, null)
})

/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */
export const uspaces = makeParser(state => {
  const nextState = RegexParser(reUspaces, 1)(state)
  return ok(nextState, null)
})

/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */
export const spaces1 = makeParser(state => {
  const nextState = RegexParser(reSpaces1, 1)(state)
  if (nextState.status === Status.Ok) return ok(nextState, null)
  return error(
    nextState, overwrite(nextState.errors, makeExpected('whitespace')),
  )
})

/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */
export const uspaces1 = makeParser(state => {
  const nextState = RegexParser(reUspaces1, 1)(state)
  if (nextState.status === Status.Ok) return ok(nextState, null)
  return error(
    nextState, overwrite(nextState.errors, makeExpected('whitespace')),
  )
})

/**
 * A parser that reads a character and succeeds if the next character is
 * a newline. If that newline is a carriage return, it will also read
 * the next character and include it in the result if it is a line feed.
 * Newlines this parser recognizes are any of the following
 * characters/combinations:
 *
 * * `LF` (line feed, `U+000A` or `\n`)
 * * `CR` (carriage return, `U+000D` or `\r`)
 * * `CR+LF` (`CR` followed by `LF`, `\r\n`)
 *
 * No characters will be consumed on failure, even in the case of
 * `\r\n`.
 */
export const newline = makeParser(state => {
  const nextState = RegexParser(reNewline, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('a newline')),
  )
})

/**
 * A parser that reads a character and succeeds if the next character is
 * a newline. If that newline is a carriage return, it will also read
 * the next character and include it in the result if it is a line feed.
 * Newlines in Unicode are any of the following characters/combinations:
 *
 * * `LF` (line feed, `U+000A` or `\n`)
 * * `CR` (carriage return, `U+000D` or `\r`)
 * * `CR+LF` (`CR` followed by `LF`, `\r\n`)
 * * `NEL` (next line, `U+0085`)
 * * `LS` (line separator, `U+2028`)
 * * `PS` (paragraph separator, `U+2029`)
 *
 * This does not include the characters `\f` or `\v`, which while being
 * vertical separators, aren't really newlines in the traditional sense.
 *
 * No characters will be consumed on failure, even in the case of
 * `\r\n`.
 */
export const unewline = makeParser(state => {
  const nextState = RegexParser(reUnewline, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('a newline')),
  )
})
