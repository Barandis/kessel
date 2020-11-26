// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { assertStringOrRegExp } from 'kessel/assert'
import { error, makeParser, ok, Status } from 'kessel/core'
import { expecteds } from 'kessel/messages'
import { dup, stringToView, viewToString } from 'kessel/util'

const { Ok } = Status

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
 * @param {RegExp} re The regular expression used to match against the
 *     input text starting at its current position.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */
const RegexParser = re => makeParser(state => {
  const { index, view } = state
  const rest = viewToString(index, view.byteLength - index, view)

  const match = rest.match(re)
  return match
    ? ok(state, match[0], index + stringToView(match[0]).byteLength)
    : error(state)
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
export const regex = re => makeParser(state => {
  /* istanbul ignore else */
  if (ASSERT) assertStringOrRegExp('regex', re)

  // First, convert to a regular expression if it's a string
  let regex = typeof re === 'string' ? new RegExp(re) : re

  // Next, make sure the regular expression starts with a ^ anchor
  const { source, flags } = regex
  const reanchor = source[0] !== '^'
  if (reanchor) {
    const newSource = '^' + source
    regex = new RegExp(newSource, flags)
  }

  const [reply, [next, result]] = dup(RegexParser(regex)(state))
  return result.status === Ok ? reply : error(next, expecteds.regex(regex))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */
export const letterU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reLetter)(state))
  return result.status === Ok ? reply : error(next, expecteds.letterU)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */
export const alphaU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reAlpha)(state))
  return result.status === Ok ? reply : error(next, expecteds.alphaU)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */
export const upperU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reUpper)(state))
  return result.status === Ok ? reply : error(next, expecteds.upperU)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */
export const lowerU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reLower)(state))
  return result.status === Ok ? reply : error(next, expecteds.lowerU)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */
export const space = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reSpace)(state))
  return result.status === Ok ? reply : error(next, expecteds.space)
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 */
export const spaceU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reUspace)(state))
  return result.status === Ok ? reply : error(next, expecteds.spaceU)
})

/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */
export const spaces = makeParser(state => {
  const [next, _] = RegexParser(reSpaces)(state)
  return ok(next, null)
})

/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */
export const spacesU = makeParser(state => {
  const [next, _] = RegexParser(reUspaces)(state)
  return ok(next, null)
})

/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */
export const spaces1 = makeParser(state => {
  const [next, result] = RegexParser(reSpaces1)(state)
  return result.status === Ok ? ok(next, null) : error(next, expecteds.spaces1)
})

/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */
export const spaces1U = makeParser(state => {
  const [next, result] = RegexParser(reUspaces1)(state)
  return result.status === Ok ? ok(next, null) : error(next, expecteds.spaces1U)
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
  const [reply, [next, result]] = dup(RegexParser(reNewline)(state))
  return result.status === Ok ? reply : error(next, expecteds.newline)
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
export const newlineU = makeParser(state => {
  const [reply, [next, result]] = dup(RegexParser(reUnewline)(state))
  return result.status === Ok ? reply : error(next, expecteds.newlineU)
})
