// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, makeParser, Status } from './core'
import { makeExpected, makeGeneric, overwrite, makeUnexpected } from './error'
import {
  charLength,
  commaSeparate,
  nextChar,
  quote,
  stringToView,
  viewToString,
} from './util'

/**
 * @typedef {import('./core').Parser} Parser
 */

// All of the regular expressions used in the derived regex parsers.
// These are here to create and compile them once, upon initial load, to
// speed parsing later.

/**
 * Matches every Unicode letter character.
 */
const reLetter = /^\p{Alphabetic}/u
/**
 * Matches every Unicode letter or number character.
 */
const reAlpha = /^(?:\p{Alphabetic}|\p{N})/u
/**
 * Matches every Unicode uppercase or titlecase character.
 */
const reUpper = /^(?:\p{Uppercase}|\p{Lt})/u
/**
 * Matches every Unicode lowercase character.
 */
const reLower = /^\p{Lowercase}/u
/**
 * Matches every Unicode whitespace character.
 */
const reSpace = /^\p{White_Space}/u
/**
 * Matches every Unicode newline character, plus \r\n.
 */
const reNewline = /^(?:\r\n|[\r\n\t\v\u0085\u2028\u2029])/u

// #region Character-based parsers

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
    return error(state, overwrite(
      state.errors,
      makeUnexpected('EOF'),
    ))
  }

  const { width, next } = nextChar(index, view)

  if (fn(next)) {
    return ok(state, next, index + width)
  }
  return error(state, overwrite(
    state.errors,
    makeUnexpected(quote(next)),
  ))
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
  const nextState = CharParser(next => c === next)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected(quote(c))))
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
  const nextState = CharParser(
    next => c.toLowerCase() === next.toLowerCase(),
  )(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected(quote(c))))
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
export const satisfies = fn => makeParser(state => {
  const name = fn.name.length ? fn.name : '<anonymous>'
  const message = `a character that satisfies function "${name}"`

  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected(message)))
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

  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected(message)))
})

/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */
export const any = makeParser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return error(state, overwrite(
      state.errors,
      makeExpected('any character'),
      makeUnexpected('EOF'),
    ))
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
  return error(state, overwrite(
    state.errors,
    makeExpected('EOF'),
    makeUnexpected(quote(next)),
  ))
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
export const oneOf = chars => makeParser(state => {
  const { index, view } = state
  const { width, next } = nextChar(index, view)
  const arr = [...chars]

  if (arr.includes(next)) {
    return ok(state, next, index + width)
  }
  const message = 'one of ' + commaSeparate(arr.map(c => `"${c}"`))

  return error(state, overwrite(
    state.errors,
    makeExpected(message),
    makeUnexpected(quote(next)),
  ))
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

    return error(state, overwrite(
      state.errors,
      makeExpected(message),
      makeUnexpected(quote(next)),
    ))
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
  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected('a digit')))
})

/**
 * A parser taht reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */
export const hexDigit = makeParser(state => {
  const fn = c => c >= '0' && c <= '9'
    || c >= 'a' && c <= 'f'
    || c >= 'A' && c <= 'F'
  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('a hex digit')),
  )
})

/**
 * A parser that reads a single character and succeeds with that
 * character if it is a tab.
 */
export const tab = makeParser(state => {
  const fn = c => c === '\t'
  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected('a tab')))
})

/**
 * A parser that reads a single character and succeeds with that
 * character if it is a carriage return.
 */
export const cr = makeParser(state => {
  const fn = c => c === '\r'
  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    makeExpected('a carriage return'),
  ))
})

/**
 * A parser that reads a single character and succeeds with that
 * character if it is a line feed.
 */
export const lf = makeParser(state => {
  const fn = c => c === '\n'
  const nextState = CharParser(fn)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('a line feed')),
  )
})

// #endregion

// #region String-based parsers

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

// #endregion

// #region Regular expression-based parsers

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
export const letter = makeParser(state => {
  const nextState = RegexParser(reLetter, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, makeExpected('a letter')))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */
export const alphanum = makeParser(state => {
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
export const upper = makeParser(state => {
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
export const lower = makeParser(state => {
  const nextState = RegexParser(reLower, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    makeExpected('a lowercase letter'),
  ))
})

/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace if it has the
 * Unicode `White_Space` property.
 */
export const space = makeParser(state => {
  const nextState = RegexParser(reSpace, 1)(state)
  if (nextState.status === Status.Ok) return nextState
  return error(
    nextState, overwrite(nextState.errors, makeExpected('whitespace')),
  )
})

/**
 * A parser that reads a character and succeeds if the next character is
 * a newline. If that newline is a carriage return, it will also read
 * the next character and include it in the result if it is a line feed.
 * Newlines in Unicode are any of the following characters/combinations:
 *
 * * `LF` (line feed, `U+000A` or `\n`)
 * * `VT` (vertical tab, `U+000B` or `\v`)
 * * `FF` (form feed, `U+000C` or `\f`)
 * * `CR` (carriage return, `U+000D` or `\r`)
 * * `CR+LF` (`CR` followed by `LF`, `\r\n`)
 * * `NEL` (next line, `U+0085`)
 * * `LS` (line separator, `U+2028`)
 * * `PS` (paragraph separator, `U+2029`)
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

// #endregion

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const fail = message => makeParser(state => error(
  state, overwrite(state.errors, makeGeneric(message)),
))

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */
export const failFatally = message => makeParser(state => fatal(
  state, overwrite(state.errors, makeGeneric(message)),
))
