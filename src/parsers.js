// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

// Here are the string and regular expression parsers which form the
// basis of the entire system.
//
// Every recognizer is a specialization of the StringParser or the
// RegexParser. In other words, these are the only two parsers that
// actually *parse text*. Every other parser either parameterizes one
// of these two to parse something more specific, or they are
// combinators that build more complex parsers. At the end though,
// every combinator calls one of these two, either directly or
// indirectly.
//
// These two are not exposed outside of this file. Their interfaces
// (with the comparison function for the StringParser and the expected
// outcome for the RegexParser) contain things that don't need to be
// exposed. The `string` and `regex` parsers are low-level enough to
// recognize any text, so it's these two parsers that can be composed
// for new parsing functions.

import { alt, back, desc } from './combinators'
import { failure, Parser, success } from './core'
import {
  assertCharacter,
  assertFunction,
  assertString,
  assertStringOrRegex,
  charLength,
  nextChar,
  push,
  stringToView,
  viewToString,
} from './util'

// All of the regular expressions used in the derived recognizers. These
// are here to create and compile them once, upon initial lode, to
// speed parsing later.

const reDigit = /^[0-9]/
const reDigits = /^[0-9]*/
const reHexDigit = /^[0-9a-fA-F]/
const reHexDigits = /^[0-9a-fA-F]*/
const reLetter = /^\p{Alphabetic}/u
const reLetters = /^\p{Alphabetic}*/u
const reAlpha = /^(?:\p{Alphabetic}|\p{N})/u
const reAlphas = /^(?:\p{Alphabetic}|\p{N})*/u
const reUpper = /^(?:\p{Uppercase}|\p{Lt})/u
const reLower = /^\p{Lowercase}/u
const reSpace = /^\p{White_Space}+/u
const reSpaces = /^\p{White_Space}*/u

// A parser for a single character. This parser takes a function of one
// argument; the next read character is passed to that function and, if
// it returns true, the parser succeeds with that character.
//
// If the function returns false, the parser fails, though it returns
// its `actual` state property without the normal quotes around literal
// strings. This is to enable the `StringParser` below to build up its
// own actual from individual invocations of this parser.
//
// This parser directly powers `char`, `chari`, and `satisfies`, and it
// is used repeatedly by `StringParser`.
const CharParser = fn => Parser(state => {
  const { index, view } = state
  const name = fn.name.length ? fn.name : '<anonymous>'
  const expected = `a character that satisfies function "${name}"`

  if (index >= view.byteLength) {
    return failure(state, {
      expected: push(state.expected, expected),
      actual: 'EOF',
    })
  }

  const { width, next } = nextChar(index, view)

  if (fn(next)) {
    return success(state, { result: next, index: index + width })
  }
  return failure(state, {
    expected: push(state.expected, expected),
    actual: next,
  })
})

// Reads the next character and succeeds if that character exactly
// matches the passed one. The result is the read character. This parser
// is more efficient than the `string` parser in cases where only one
// character needs to be read.
export const char = c => Parser(state => {
  assertCharacter(c, 'char')
  const nextState = CharParser(next => next === c)(state)

  if (nextState.success) return nextState

  const actual = nextState.actual === 'EOF' ? 'EOF' : `"${nextState.actual}"`
  return failure(nextState, { expected: [`"${c}"`], actual })
})

// Reads the next character and succeeds if that character case-
// insensitively matches the passed one. The result is the read
// character (which may be different than the passed character if they
// differ in case). This parser is more efficient than the `stringi`
// parser in cases where only one character needs to be read.
export const chari = c => Parser(state => {
  assertCharacter(c, 'chari')
  const nextState
    = CharParser(next => next.toLowerCase() === c.toLowerCase())(state)

  if (nextState.success) return nextState

  const actual = nextState.actual === 'EOF' ? 'EOF' : `"${nextState.actual}"`
  return failure(nextState, { expected: [`"${c}"`], actual })
})

// Reads the next character and passes it into the supplied predicate
// function. If that function returns `true`, the parser succeeds with
// that character as the result.
export const satisfies = fn => Parser(state => {
  assertFunction(fn, 'satisfies')
  const nextState = CharParser(fn)(state)

  if (nextState.success) return nextState

  const actual = nextState.actual === 'EOF' ? 'EOF' : `"${nextState.actual}"`
  return failure(nextState, { actual })
})

// Reads a character and succeeds if that character is in the range
// between the start and end characters provided. This is here primarily
// to lower the need for regular expressions on this common use case.
//
// "In range" is defined the same here as with the comparison operators
// for strings in JavaScript, which work off Unicode code points. Mixing
// cases is not recommended unless you know what you're doing, because
// those comparisons are often not intuitive.
//
// Also take care in non-ascii characters. For example, there is a
// series of "mathematical small italic" letters from 0xf09d918e to
// 0xf09d91a7, but they do not include an 'h'. Instead, the character
// "Planck constant" is used, which is at 0xe2848e. This 'h' will
// therefore not be in the range from 'a' to 'z' in mathematical small
// italics, and a solution to this problem is not feasible.
export const range = (start, end) => Parser(state => {
  assertCharacter(start, 'range')
  assertCharacter(end, 'range')

  const fn = c => c >= start && c <= end
  const nextState = CharParser(fn)(state)

  if (nextState.success) return nextState

  const actual = nextState.actual === 'EOF' ? 'EOF' : `"${nextState.actual}"`
  const expected = [`character between "${start}" and "${end}"`]
  return failure(nextState, { actual, expected })
})

// Parses a particular string from the current position in the text. The
// `fn` parameter is a comparision function; it returns true if its two
// arguments are equal strings and `false` if they are not. This allows
// this parser to be used to make case-insenstive parsers, which is
// something that I wanted to do without resorting to regular
// expressions.
const StringParser = (str, fn) => Parser(state => {
  if (str.length === 0) return success(state, { result: '' })

  let nextState = state
  let actual = ''

  for (const c of [...str]) {
    nextState = CharParser(fn(c))(nextState)
    if (!nextState.success) {
      if (actual === '' || nextState.actual !== 'EOF') {
        actual += nextState.actual
      }
      if (actual !== 'EOF') {
        actual = `"${actual}"`
      }
      return failure(nextState, { expected: [`"${str}"`], actual })
    }
    actual += nextState.result
  }

  return success(nextState, { result: actual })
})

// Parses a string from the current location in the input. The string
// match must be exact (it is case-sensitive), and all UTF8 characters
// are recognized properly.
export const string = str => Parser(state => {
  assertString(str, 'string')
  return StringParser(str, c => next => next === c)(state)
})

// Parses a string from the current location in the input. This match is
// *not* case-sensitive, but case-insensitivity is not recognized in
// 3-byte or 4-byte characters (for example, `𝑂` and `𝑜`, which are
// both 4-byte characters, are not recognized as matching by this
// parser). This is a limitation for which a solution has not yet been
// found; even using a regular expression with the flags `ui` does not
// recognize these two characters as being equal.
export const stringi = str => Parser(state => {
  assertString(str, 'stringi')
  return StringParser(
    str, c => next => next.toLowerCase() === c.toLowerCase()
  )(state)
})

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
  const expected = `a string matching ${re}`

  const match = rest.match(re)
  if (match) {
    return success(state, {
      result: match[0],
      index: index + stringToView(match[0]).byteLength,
    })
  }

  let len = length ?? charLength(re.source) - 1 // to ignore anchor
  if (len > view.byteLength - index) {
    len = view.byteLength - index
  }
  const actual = len === 0 ? 'EOF' : `"${[...rest].slice(0, len).join('')}"`

  return failure(state, {
    expected: push(state.expected, expected),
    actual,
  })
})

// The regular expression parser.
//
// This parser begins by manipulating its argument into the kind of
// regular expression expected. If it's a string, it's turned into a
// regular expression using that string as the pattern and using no
// flags. If it does *not* begin with `^`, a new regular expression that
// is anchored (but is otherwise identical) is created.
//
// Only the first match is returned, so the global flag essentially does
// nothing.
//
// Since we can't know the length of a match before successfully
// matching, the `actual` state property simply shows text of the same
// length as the input pattern upon failure.
//
// NOTE: the `regex` parser automatically backtracks; it does not
// consume input on failure. This is because there isn't a set number
// of characters to check against a regular expression, so we can't know
// how many "matched" before a parser failure.
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

// Reads one character and results in that character. Fails only at EOF.
export const any = Parser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return failure(state, {
      expected: push(state.expected, 'any character'),
      actual: 'EOF',
    })
  }
  const { width, next } = nextChar(index, view)
  return success(state, {
    index: index + width,
    result: next,
  })
})

// Reads the remainder of the input text and results in that text.
// Succeeds if already at EOF, resulting in an empty string.
export const all = Parser(state => {
  const { index, view } = state
  const width = view.byteLength - index
  return success(state, {
    index: index + width,
    result: viewToString(index, width, view),
  })
})

// Reads one character and succeeds if that character does not exist
// (i.e., if the index is already at the end of the text). Consumes
// nothing on either success or failure.
export const eof = Parser(state => {
  const { index, view } = state
  if (index === view.byteLength) {
    return success(state, { result: null })
  }
  const { _, next } = nextChar(index, view)
  return failure(state, {
    expected: push(state.expected, 'EOF'),
    actual: `"${next}"`,
  })
})

// Reads a character and compares it against each of the characters in
// the provided string. Succeeds if the read character is one of the
// characters in the string.
export const oneOf = str => Parser(state => {
  const { index, view } = state
  const { width, next } = nextChar(index, view)

  if (str.includes(next)) {
    return success(state, { result: next, index: index + width })
  }
  return failure(state, {
    expected: push(state.expected, `one of "${str}"`),
    actual: `"${next}"`,
  })
})

// Reads a character and compares it against each of the characters in
// the provided string. Succeeds if the read character is *not* one of
// the characters in the string.
export const noneOf = str => Parser(state => {
  const { index, view } = state
  const { width, next } = nextChar(index, view)

  if (str.includes(next)) {
    return failure(state, {
      expected: push(state.expected, `none of "${str}"`),
      actual: `"${next}"`,
    })
  }
  return success(state, { result: next, index: index + width })
})

// Reads a character and succeeds with that character if it is a digit.
// Note that this is not a unicode decimal digit; for that, use
// `regex(/\p{Nd}/)`. This parser succeeds only for the literal
// characters 0-9.
export const digit = desc(RegexParser(reDigit, 1), 'a digit')

// Attempts to read a character; if it is a digit, it will read another
// character, and so on until a character is read which is not a digit.
// Always succeeds with the entire string of read digits (which will be
// empty if no digit was read at all).
export const optDigits = RegexParser(reDigits)

// Reads a character and succeeds with that character if it is a
// hexadecimal digit. This parser is not case sensitive.
export const hexDigit = desc(RegexParser(reHexDigit, 1), 'a hex digit')

// Attempts to read a character; if it is a hexadecimal digit, it will
// read another character, and so on until a character is read which is
// not a hexadecimal digit. Always succeeds with the entire string of
// read digits (which will be empty if no hexadecimal digit was read at
// all).
export const optHexDigits = RegexParser(reHexDigits)

// Reads a character and succeeds with that character if it is a letter.
// A letter for this purpose is any character with the Unicode
// `Alphabetic` property.
export const letter = desc(RegexParser(reLetter, 1), 'a letter')

// Attempts to read a character; if it is a letter, it will read another
// character, and so on until a character is read which is not a letter.
// Always succeeds with the entire string of read letters (which will be
// empty if no letter was read at all).
export const optLetters = RegexParser(reLetters)

// Reads a character and succeeds with that character if it is
// alphanumeric. A character is alphanumeric if it has either the
// Unicode `Alphabetic` property or the Unicode `Number` property.
export const alphanum = desc(RegexParser(reAlpha, 1), 'an alphanumeric')

// Attempts to read a character; if it is an alphanumeric character, it
// will read another character, and so on until a character is read
// which is not alphanumeric. Always succeeds with the entire string of
// read alphanumeric characters (which will be empty if no alphanumeric
// character was read at all).
export const optAlphanums = RegexParser(reAlphas)

// Reads a character and succeeds with that character if it is either an
// uppercase or titlecase letter. A character is uppercase if it has
// the Unicode `Uppercase` property and is titlecase if it has the
// Unicode `Letter, Titlecase` property.
export const upper = desc(RegexParser(reUpper, 1), 'an uppercase letter')

// Reads a character and succeeds with that character if it is a
// lowercase letter. A character is lowercase if it has the Unicode
// `Lowercase` property .
export const lower = desc(RegexParser(reLower, 1), 'a lowercase letter')

// Reads one or more characters, so long as they are whitespace
// characters. Succeeds with the entire string of whitespace characters
// so long as there is at least one.
export const whitespace = desc(RegexParser(reSpace, 1), 'whitespace')

// Reads zero or more characters, so long as they are whitespace
// characters. Always succeeds with the entire string of whitespace
// characters; if there were none, this will succeed with an empty
// string.
export const optWhitespace = RegexParser(reSpaces)

// Reads a single character and succeeds with that character if it is a
// tab.
export const tab = desc(char('\t'), 'tab')

// Reads a single character and succeeds with that character if it is a
// carriage return.
export const cr = desc(char('\r'), 'carriage return')

// Reads a single character and succeeds with that character if it is a
// line feed.
export const lf = desc(char('\n'), 'line feed')

// Reads two characters and succeeds with those two characters if they
// are a carriage return and a line feed, in that order.
export const crlf = desc(string('\r\n'), 'CRLF')

// Reads a character; succeeds if that character is a line feed or a
// carriage return. If it is a carriage return, it will read one more
// character if that character is a line feed.
export const newline = desc(alt(back(crlf), lf, cr), 'newline')

// Succeeds on any newline (LF, CR, or CRLF) or EOF.
export const end = alt(newline, eof)

// Fails without consuming input, setting the `expected` message to
// whatever is passed in.
export const fail = message => Parser(state => {
  assertString(message, 'fail')
  return failure(state, { expected: [message] })
})

// Fails without consuming input, setting the `actual` message to
// whatever is passed in.
export const unexpected = message => Parser(state => {
  assertString(message, 'unexpected')
  return failure(state, { actual: message })
})
