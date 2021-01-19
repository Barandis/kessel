// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argStrFormatter,
  argStrRegFormatter,
  assertString,
  assertStringOrRegExp,
} from 'kessel/assert'
import { failReply, okReply, parser, Status } from 'kessel/core'
import { expecteds } from 'kessel/messages'
import { dup, ferror, stringToView, viewToString } from 'kessel/util'

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
 * A parser that takes a regular expression object and matches it as far
 * as it can against the input at its current position.
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
function regexParser(re) {
  return parser(ctx => {
    const { index, view } = ctx
    const rest = viewToString(index, view.byteLength - index, view)

    const match = rest.match(re)
    return match
      ? okReply(ctx, match[0], index + stringToView(match[0]).byteLength)
      : failReply(ctx)
  })
}

/**
 * A parser that attempts to match the supplied regular expression to
 * the input text at the current location. If there is a match, any
 * matching text is returned as a successful result. No text is consumed
 * upon failure.
 *
 * A string can be passed to this parser. If one is, it is converted
 * into a regular expression without flags.
 *
 * If a start anchor (^) is not included, one will be added. If the `g`
 * flag is included, it'll functionally be ignored as only the first
 * match will be considered anyway. These two rules ensure that the
 * match is only attempted at the beginning of the current text.
 *
 * @param {(string|RegExp)} r The regular expression to match against
 *     the input text. If this is a string, it will be converted into a
 *     regular expression with no flags.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */
export function regex(r, m) {
  const hasM = m != null

  assertStringOrRegExp('regex', r, argStrRegFormatter(1, hasM))
  if (hasM) assertString('regex', m, argStrFormatter(2, true))

  return parser(ctx => {
  // First, convert to a regular expression if it's a string
    let regex = typeof r === 'string' ? new RegExp(r) : r

    // Next, make sure the regular expression starts with a ^ anchor
    const { source, flags } = regex
    const reanchor = source[0] !== '^'
    if (reanchor) {
      const newSource = '^' + source
      regex = new RegExp(newSource, flags)
    }

    const [rrep, [rctx, rres]] = dup(regexParser(regex)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.regex(regex)))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     letter.
 */
export function uletter(m) {
  if (m != null) assertString('uletter', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reLetter)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.uletter))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     alphanumeric character.
 */
export function ualpha(m) {
  if (m != null) assertString('ualpha', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reAlpha)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.ualpha))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     uppercase letter.
 */
export function uupper(m) {
  if (m != null) assertString('uupper', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reUpper)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.uupper))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     lowercase letter.
 */
export function ulower(m) {
  if (m != null) assertString('ulower', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reLower)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.ulower))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     ASCII whitespace character.
 */
export function space(m) {
  if (m != null) assertString('space', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reSpace)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.space))
  })
}

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     Unicode whitespace character.
 */
export function uspace(m) {
  if (m != null) assertString('uspace', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reUspace)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.uspace))
  })
}

/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 *
 * @returns {Parser} A parser that always succeeds and skips over any
 *     number of ASCII whitespace characters.
 */
export function spaces() {
  return parser(ctx => {
    const [rctx, _] = regexParser(reSpaces)(ctx)
    return okReply(rctx, null)
  })
}

/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 *
 * @returns {Parser} A parser that always succeeds and skips over any
 *     number of Unicode whitespace characters.
 */
export function uspaces() {
  return parser(ctx => {
    const [rctx, _] = regexParser(reUspaces)(ctx)
    return okReply(rctx, null)
  })
}

/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that skips one or more ASCII whitespace
 *     characters.
 */
export function spaces1(m) {
  if (m != null) assertString('spaces1', m, argStrFormatter())

  return parser(ctx => {
    const [rctx, rres] = regexParser(reSpaces1)(ctx)
    return rres.status === Ok
      ? okReply(rctx, null)
      : failReply(rctx, ferror(m, expecteds.spaces1))
  })
}

/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that skips one or more Unicode whitespace
 *     characters.
 */
export function uspaces1(m) {
  if (m != null) assertString('uspaces1', m, argStrFormatter())

  return parser(ctx => {
    const [rctx, rres] = regexParser(reUspaces1)(ctx)
    return rres.status === Ok
      ? okReply(rctx, null)
      : failReply(rctx, ferror(m, expecteds.uspaces1))
  })
}

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
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     ASCII newline.
 */
export function newline(m) {
  if (m != null) assertString('newline', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reNewline)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.newline))
  })
}

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
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     Unicode newline.
 */
export function unewline(m) {
  if (m != null) assertString('unewline', m, argStrFormatter())

  return parser(ctx => {
    const [rrep, [rctx, rres]] = dup(regexParser(reUnewline)(ctx))
    return rres.status === Ok
      ? rrep
      : failReply(rctx, ferror(m, expecteds.unewline))
  })
}
