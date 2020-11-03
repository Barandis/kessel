// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, ok, Parser, ParserStatus } from './core'
import { expected, generic, overwrite, unexpected } from './error'
import {
  articlize,
  assertCharacter,
  assertFunction,
  assertString,
  assertStringOrRegex,
  charLength,
  nextChar,
  quote,
  stringToView,
  viewToString,
} from './util'

// All of the regular expressions used in the derived regex parsers.
// These are here to create and compile them once, upon initial load, to
// speed parsing later.
const reLetter = /^\p{Alphabetic}/u
const reAlpha = /^(?:\p{Alphabetic}|\p{N})/u
const reUpper = /^(?:\p{Uppercase}|\p{Lt})/u
const reLower = /^\p{Lowercase}/u
const reSpace = /^\p{White_Space}/u
const reNewline = /^(?:\r\n|[\r\n\t\v\u0085\u2028\u2029])/u

// #region Character-based parsers

// A parser that reads a single character, feeds it to function `fn`,
// and succeeds or fails based on the return value.
//
// There isn't anything here that couldn't be written with
// `StringParser` instead, but when working with single characters there
// are certain assumptions that can be made (such as the number of
// characters that have to be read from the input view) that allow it to
// be a little more efficient. For that reason, this parser and the
// associated `char` and `chari` parsers will remain.
const CharParser = fn => Parser(state => {
  const { index, view } = state

  if (index >= view.byteLength) {
    return error(state, overwrite(
      state.errors,
      unexpected('EOF'),
    ))
  }

  const { width, next } = nextChar(index, view)

  if (fn(next)) {
    return ok(state, next, index + width)
  }
  return error(state, overwrite(
    state.errors,
    unexpected(quote(next)),
  ))
})

// Reads a single character from input and succeeds if that character is
// `c`. Upon failure, this parser does not consume input.
export const char = c => Parser(state => {
  assertCharacter(c, 'char')

  const nextState = CharParser(next => c === next)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected(quote(c))))
})

// Reads a single character from input and succeeds if that character is
// `c`. This differs from `char` in that the comparison done by this
// parser is case-insensitive. Upon failure, this parser does not
// consume input.
export const chari = c => Parser(state => {
  assertCharacter(c, 'chari')

  const nextState = CharParser(
    next => c.toLowerCase() === next.toLowerCase(),
  )(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected(quote(c))))
})

// Reads a single character and passes it to the provided function. If
// the function returns true, this parser succeeds with that character
// as the result. If the function returns false, this parser fails and
// consumes no input.
export const satisfies = fn => Parser(state => {
  assertFunction(fn, 'satisfies')

  const name = fn.name.length ? fn.name : '<anonymous>'
  const message = `a character that satisfies function "${name}"`

  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected(message)))
})

// Reads a single character and determines whether it is between the
// provided start and end characters (inclusive). If it is, the read
// character is the successful result, and if it is not, the parser
// fails without consuming input.
//
// "Between" is defined according to code points. This is fine in most
// cases, but it can get weird with higher code points. For example,
// there is no `h` in the set of mathematical lowercase italic symbols.
// The `h` would instead be the Planck's Constant character, which is in
// a completely different part of the Unicode spectrum and therefore is
// not "between" `a` and `z`. Take care with non-ascii characters.
export const range = (start, end) => Parser(state => {
  assertCharacter(
    start,
    'range',
    type => `expected first argument to be a String; found ${articlize(type)}`,
    c => `expected first argument to be one character; found "${c}"`,
  )
  assertCharacter(
    end,
    'range',
    type => `expected second argument to be a String; found ${articlize(type)}`,
    c => `expected second argument to be one character; found "${c}"`,
  )

  const fn = c => c >= start && c <= end
  const message = `a character between "${start}" and "${end}"`

  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected(message)))
})

// Reads one character and results in that character. Fails only at EOF.
export const any = Parser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return error(state, overwrite(
      state.errors,
      expected('any character'),
      unexpected('EOF'),
    ))
  }
  const { width, next } = nextChar(index, view)
  return ok(state, next, index + width)
})

// Reads one character and succeeds if that character does not exist
// (i.e., if the index is already at the end of the text). Consumes
// nothing on either success or failure.
export const eof = Parser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return ok(state, null)
  }
  const { _, next } = nextChar(index, view)
  return error(state, overwrite(
    state.errors,
    expected('EOF'),
    unexpected(quote(next)),
  ))
})

// Reads a character and compares it against each of the characters in
// the provided string. Succeeds if the read character is one of the
// characters in the string.
export const oneOf = str => Parser(state => {
  assertString(str, 'oneOf')

  const { index, view } = state
  const { width, next } = nextChar(index, view)

  if (str.includes(next)) {
    return ok(state, next, index + width)
  }
  return error(state, overwrite(
    state.errors,
    expected(`one of "${str}"`),
    unexpected(quote(next)),
  ))
})

// Reads a character and compares it against each of the characters in
// the provided string. Succeeds if the read character is *not* one of
// the characters in the string.
export const noneOf = str => Parser(state => {
  assertString(str, 'noneOf')

  const { index, view } = state
  const { width, next } = nextChar(index, view)

  if (str.includes(next)) {
    return error(state, overwrite(
      state.errors,
      expected(`none of "${str}"`),
      unexpected(quote(next)),
    ))
  }
  return ok(state, next, index + width)
})

// Reads a character and succeeds with that character if it is a digit.
// Note that this is not a unicode decimal digit; for that, use
// `regex(/\p{Nd}/)`. This parser succeeds only for the literal
// characters 0-9.
export const digit = Parser(state => {
  const fn = c => c >= '0' && c <= '9'
  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a digit')))
})

// Reads a character and succeeds with that character if it is a
// hexadecimal digit. This parser is not case sensitive.
export const hexDigit = Parser(state => {
  const fn = c => c >= '0' && c <= '9'
    || c >= 'a' && c <= 'f'
    || c >= 'A' && c <= 'F'
  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a hex digit')))
})

// Reads a single character and succeeds with that character if it is a
// tab.
export const tab = Parser(state => {
  const fn = c => c === '\t'
  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a tab')))
})

// Reads a single character and succeeds with that character if it is a
// carriage return.
export const cr = Parser(state => {
  const fn = c => c === '\r'
  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    expected('a carriage return'),
  ))
})

// Reads a single character and succeeds with that character if it is a
// line feed.
export const lf = Parser(state => {
  const fn = c => c === '\n'
  const nextState = CharParser(fn)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a line feed')))
})

// Reads two characters and succeeds with those two characters if they
// are a carriage return and a line feed, in that order.
export const crlf = Parser(state => {
  const nextState = StringParser('\r\n', c => c === '\r\n')(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a CR+LF')))
})

// #endregion

// #region String-based parsers

// Parses a particular string from the current position in the text. The
// `fn` parameter is a comparision function; it returns true if its two
// arguments are equal strings and `false` if they are not. `str` is the
// input string; this parameter is necessary for knowing how many bytes
// of the input view to pull for comparison.
const StringParser = (str, fn) => Parser(state => {
  if (str.length === 0) return ok(state, '')

  const { index, view } = state
  if (index >= view.byteLength) {
    return error(
      state,
      overwrite(state.errors, expected(quote(str)), unexpected('EOF')),
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
      expected(quote(str)),
      unexpected(quote(actual)),
    ))
})

// Parses a string from the current location in the input. The string
// match must be exact (it is case-sensitive), and all UTF-8 characters
// are recognized properly.
export const string = str => Parser(state => {
  assertString(str, 'string')
  return StringParser(str, c => c === str)(state)
})

// Parses a string from the current location in the input. This match is
// *not* case-sensitive. However, there is a limitation based on the
// JavaScript understanding of pairs of upper- and lowercase letters. It
// cannot be assumed that 3- and 4-byte characters will recognize case-
// insensitive counterparts.
export const stringi = str => Parser(state => {
  assertString(str, 'stringi')
  return StringParser(
    str, c => c.toLowerCase() === str.toLowerCase(),
  )(state)
})

// Reads the remainder of the input text and results in that text.
// Succeeds if already at EOF, resulting in an empty string.
export const all = Parser(state => {
  const { index, view } = state
  const width = view.byteLength - index
  return ok(state, viewToString(index, width, view), index + width)
})

// #endregion

// #region Regular expression-based parsers

// The base regular expression parser. This takes a regular expression
// object and matches it as far as it can against the input at its
// current position.
//
// It is assumed that the regex begins with a `^` . The `g` flag is
// ignored in that only the first match is processed and returned. This
// ensures that the match is only against the text directly at the
// current pointer location.
//
// `length` is the length of the returned `actual` state property upon
// failure. If it's not provided, the length will be the same as the
// length of the regular expression's source.
const RegexParser = (re, length = null) => Parser(state => {
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
    expected(`a string matching ${re}`),
    unexpected(actual),
  ))
})

// Attempts to match the supplied regular expression to the input text
// at the current location. If there is a match, any matching text is
// returned as a successful result. No text is consumed upon failure.
//
// A string can be passed to this parser. If one is, it is converted
// into a regular expression without flags.
//
// If a start anchor (^) is not included, one will be added. If the `g`
// flag is included, it'll functionally be ignored as only the first
// match will be considered anyway. These two rules ensure that the
// match is only attempted at the beginning of the current text.
export const regex = re => {
  assertStringOrRegex(re, 'regex')

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

// Reads a character and succeeds with that character if it is a letter.
// A letter for this purpose is any character with the Unicode
// `Alphabetic` property.
export const letter = Parser(state => {
  const nextState = RegexParser(reLetter, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a letter')))
})

// Reads a character and succeeds with that character if it is
// alphanumeric. A character is alphanumeric if it has either the
// Unicode `Alphabetic` property or the Unicode `Number` property.
export const alphanum = Parser(state => {
  const nextState = RegexParser(reAlpha, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    expected('an alphanumeric'),
  ))
})

// Reads a character and succeeds with that character if it is either an
// uppercase or titlecase letter. A character is uppercase if it has
// the Unicode `Uppercase` property and is titlecase if it has the
// Unicode `Letter, Titlecase` property.
export const upper = Parser(state => {
  const nextState = RegexParser(reUpper, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    expected('an uppercase letter'),
  ))
})

// Reads a character and succeeds with that character if it is a
// lowercase letter. A character is lowercase if it has the Unicode
// `Lowercase` property.
export const lower = Parser(state => {
  const nextState = RegexParser(reLower, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(
    nextState.errors,
    expected('a lowercase letter'),
  ))
})

// Reads a character and succeeds with that character if it is a
// whitespace character. A character is whitespace if it has the Unicode
// `White_Space` property.\
export const space = Parser(state => {
  const nextState = RegexParser(reSpace, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('whitespace')))
})

// Reads a character; succeeds if that character is a line feed or a
// carriage return. If it is a carriage return, it will read one more
// character if that character is a line feed.
export const newline = Parser(state => {
  const nextState = RegexParser(reNewline, 1)(state)
  if (nextState.status === ParserStatus.Ok) return nextState
  return error(nextState, overwrite(nextState.errors, expected('a newline')))
})

// #endregion

// Fails without consuming input, setting the generic error message to
// whatever is passed in.
export const fail = message => Parser(state => {
  assertString(message, 'fail')
  return error(state, overwrite(state.errors, generic(message)))
})

// Fails without consuming input, setting the generic error message to
// whatever is passed in. This signifies a fatal error, one that cannot
// be recovered from without backtracking.
export const failFatally = message => Parser(state => {
  assertString(message, 'failFatally')
  return fatal(state, overwrite(state.errors, generic(message)))
})
