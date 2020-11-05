// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, makeParser, ok, Status } from 'kessel/core'
import { makeExpected, makeUnexpected, overwrite } from 'kessel/error'
import { quote, stringToView, viewToString } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that attempts to match a particular string from the
 * current position in the text. A string of characters equal in length
 * to `str` is read from input and passed to `fn`; if `fn` returns
 * `true`, then the parser succeeds.
 *
 * This parser always fails if there are not as many characters left in
 * the input as are in `str`. It will always pass if `str` is an empty
 * string.
 *
 * @param {string} str The string being compared to the next characters
 *     of input. Note that the only purposes of this string in this
 *     function is a) to determine if the parser succeeds automatically
 *     because this string is empty, or b) to determine how many
 *     characters are read from input. It is not used in the comparison
 *     function.
 * @param {function(string): boolean} fn A function to which the read
 *     string is passed. If this function returns `true`, the parser
 *     succeeds.
 * @returns {Parser} A parser that succeeds if the read string passes
 *     the predicate function.
 */
const StringParser = (str, fn) => makeParser(state => {
  if (str.length === 0) return ok(state, '')

  const { index, view } = state
  if (index >= view.byteLength) {
    return error(
      state,
      overwrite(state.errors, makeExpected(quote(str)), makeUnexpected('EOF')),
    )
  }

  const bytes = stringToView(str).byteLength
  const width = bytes > view.byteLength - index
    ? view.byteLength - index
    : bytes
  const actual = viewToString(index, width, view)

  return fn(actual)
    ? ok(state, actual, index + width)
    : error(state, overwrite(
      state.errors,
      makeExpected(quote(str)),
      makeUnexpected(quote(actual)),
    ))
})

/**
 * Creates a parser that reads a string from the current location in the
 * input and matches it against its supplied string. The string match
 * must be exact (it is case-sensitive), and all UTF-8 characters are
 * recognized properly.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */
export const string = str => makeParser(state => StringParser(
  str, c => c === str,
)(state))

/**
 * Creates a parser that reads a string from the current location in the
 * input and matches it against its supplied string. This match is *not*
 * case-sensitive. However, there is a limitation based on the
 * JavaScript understanding of pairs of upper- and lowercase letters. It
 * cannot be assumed that 3- and 4-byte characters will recognize case-
 * insensitive counterparts.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */
export const stringi = str => makeParser(state => StringParser(
  str, c => c.toLowerCase() === str.toLowerCase(),
)(state))

/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 */
export const all = makeParser(state => {
  const { index, view } = state
  const width = view.byteLength - index
  return ok(state, viewToString(index, width, view), index + width)
})

/**
 * A parser that reads two characters and succeeds with those two
 * characters if they are a carriage return and a line feed, in that
 * order. Does not consume input on a failure, even if the first
 * character does match `\r`.
 */
export const crlf = makeParser(state => {
  const nextState = StringParser('\r\n', c => c === '\r\n')(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected('a CR+LF')))
})
