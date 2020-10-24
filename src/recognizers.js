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

import { failure, Parser, success } from './parser'
import { charLength, stringToView, viewToString } from './util'

// Parses a particular string from the current position in the text. The
// `fn` parameter is a comparision function; it returns true if its two
// arguments are equal strings and `false` if they are not. This allows
// this parser to be used to make case-insenstive parsers, which is
// something that I wanted to do without resorting to regular
// expressions.
const StringParser = (str, fn) => Parser(state => {
  const type = Object.prototype.toString.call(str)
  if (type !== '[object String]') {
    throw new TypeError(`String parser requires string input; got ${type}`)
  }

  if (!state.success) return state

  if (str.length === 0) return success(state, { result: '' })

  const { index, view } = state
  const bytes = stringToView(str)
  const width = bytes.byteLength

  if (index + width > view.byteLength) {
    return failure(state, {
      expected: str,
      actual: viewToString(index, view.byteLength - index, view),
    })
  }

  const actual = viewToString(index, width, view)

  if (fn(str, actual)) {
    return success(state, { index: index + width, result: actual })
  }
  return failure(state, { expected: str, actual })
})

// Parses a string from the current location in the input. The string
// match must be exact (it is case-sensitive), and all UTF8 characters
// are recognized properly.
export const string = str => StringParser(str, (a, b) => a === b)

// Parses a string from the current location in the input. This match is
// *not* case-sensitive, but case-insensitivity is not recognized in
// 3-byte or 4-byte characters (for example, `𝑂` and `𝑜`, which are
// both 4-byte characters, are not recognized as matching by this
// parser). This is a limitation for which a solution has not yet been
// found; even using a regular expression with the flags `ui` does not
// recognize these two characters as being equal.
export const stringi = str =>
  StringParser(str, (a, b) => a.toLowerCase() === b.toLowerCase())

// The base regular expression parser. This takes a regular expression
// object and matches it as far as it can against the input at its
// current position.
//
// It is assumed that the regex begins with a `^` and does not have the
// `g` flag. For parsing, matches must be continuous from the beginning
// of the text. `expected` is a string that becomes the value of
// `expected` in the state if the parser fails. This lets more friendly
// messages be generated; failure on a `whitespace` parser can then say
// 'whitespace' for its expected rather than 'a string matching
// /^\p{White_Space}/'.
//
// `length` is the length of the returned `actual` state property upon
// failure. If it's not provided, the length will be the same as the
// length of the regular expression's source.
const RegexParser = (re, expected, length = null) => Parser(state => {
  if (!state.success) return state

  const { index, view } = state
  const rest = viewToString(index, view.byteLength - index, view)

  // Check to see if there's anything to match against
  if (rest.length === 0) {
    return failure(state, { expected, actual: '' })
  }

  const match = rest.match(re)
  if (match) {
    return success(state, {
      result: match[0],
      index: index + stringToView(match[0]).byteLength,
    })
  }
  const len = length ?? charLength(re.source) - 1 // to ignore anchor
  return failure(state, {
    expected,
    actual: [...rest].slice(0, len).join(''),
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
export const regex = re => {
  let regex = re

  // Make sure we actually have a regular expression or a string
  const type = Object.prototype.toString.call(re)
  if (type !== '[object RegExp]' && type !== '[object String]') {
    throw new TypeError(
      `Regex parser requires regular expression or string input; got ${
        type
      }`
    )
  }
  // If it's a string, make a regular expression out of it (without
  // flags)
  if (type === '[object String]') {
    regex = new RegExp(re)
  }

  // Next, make sure the regular expression starts with a ^ anchor
  const { source, flags } = regex
  const reanchor = source[0] !== '^'
  if (reanchor) {
    const newSource = '^' + source
    regex = new RegExp(newSource, flags)
  }

  return RegexParser(regex, `string matching ${regex}`)
}
