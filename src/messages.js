// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expected } from './error'
import { commaSeparate, quote } from './util'

export const strings = {
  alpha: 'an alphanumeric character',
  alphaU: 'a Unicode alphanumeric character',
  any: 'any character',
  anyOf: array => 'any of ' + commaSeparate(array.map(c => `'${c}'`)),
  anyString: n => `a string of ${n} characters`,
  char: c => quote(c),
  chari: c => quote(c),
  digit: 'a digit',
  eof: 'end of input',
  hex: 'a hexadecimal digit',
  letter: 'a letter',
  letterU: 'a Unicode letter',
  lower: 'a lowercase letter',
  lowerU: 'a Unicode lowercase letter',
  newline: 'a newline',
  newlineU: 'a Unicode newline',
  noneOf: array => 'none of ' + commaSeparate(array.map(c => `'${c}'`)),
  octal: 'an octal digit',
  range: (start, end) => `a character between '${start}' and '${end}'`,
  regex: re => `a string matching ${re}`,
  satisfy: fn => {
    const name = fn.name.length ? fn.name : '<anonymous>'
    return `a character that satisfies function '${name}'`
  },
  space: 'a whitespace character',
  spaces: 'zero or more whitespace characters',
  spaces1: 'one or more whitespace characters',
  spacesU: 'zero or more Unicode whitespace characters',
  spaces1U: 'one or more Unicode whitespace characters',
  spaceU: 'a Unicode whitespace character',
  string: str => quote(str),
  stringi: str => quote(str),
  upper: 'an uppercase letter',
  upperU: 'a Unicode uppercase letter',
}

export const expecteds = {
  alpha: expected(strings.alpha),
  alphaU: expected(strings.alphaU),
  any: expected(strings.any),
  anyOf: array => expected(strings.anyOf(array)),
  anyString: n => expected(strings.anyString(n)),
  char: c => expected(strings.char(c)),
  chari: c => expected(strings.chari(c)),
  digit: expected(strings.digit),
  eof: expected(strings.eof),
  hex: expected(strings.hex),
  letter: expected(strings.letter),
  letterU: expected(strings.letterU),
  lower: expected(strings.lower),
  lowerU: expected(strings.lowerU),
  newline: expected(strings.newline),
  newlineU: expected(strings.newlineU),
  noneOf: array => expected(strings.noneOf(array)),
  octal: expected(strings.octal),
  range: (start, end) => expected(strings.range(start, end)),
  regex: re => expected(strings.regex(re)),
  satisfy: fn => expected(strings.satisfy(fn)),
  space: expected(strings.space),
  spaces: expected(strings.spaces),
  spaces1: expected(strings.spaces1),
  spacesU: expected(strings.spacesU),
  spaces1U: expected(strings.spaces1U),
  spaceU: expected(strings.spaceU),
  string: str => expected(strings.string(str)),
  stringi: str => expected(strings.stringi(str)),
  upper: expected(strings.upper),
  upperU: expected(strings.upperU),
}