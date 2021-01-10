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
  anyString: n => `a string of ${n} characters`,
  char: c => quote(c),
  charI: c => quote(c),
  digit: 'a digit',
  eof: 'end of input',
  hex: 'a hexadecimal digit',
  letter: 'a letter',
  letterU: 'a Unicode letter',
  lower: 'a lowercase letter',
  lowerU: 'a Unicode lowercase letter',
  newline: 'a newline',
  newlineU: 'a Unicode newline',
  noneof: array => 'none of ' + commaSeparate(array.map(c => `'${c}'`)),
  octal: 'an octal digit',
  oneof: array => 'one of ' + commaSeparate(array.map(c => `'${c}'`)),
  range: (start, end) => `a character between '${start}' and '${end}'`,
  regex: re => `a string matching ${re}`,
  space: 'a whitespace character',
  spaces: 'zero or more whitespace characters',
  spaces1: 'one or more whitespace characters',
  spacesU: 'zero or more Unicode whitespace characters',
  spaces1U: 'one or more Unicode whitespace characters',
  spaceU: 'a Unicode whitespace character',
  str: s => quote(s),
  strI: s => quote(s),
  upper: 'an uppercase letter',
  upperU: 'a Unicode uppercase letter',
}

export const expecteds = {
  alpha: expected(strings.alpha),
  alphaU: expected(strings.alphaU),
  any: expected(strings.any),
  anyString: n => expected(strings.anyString(n)),
  char: c => expected(strings.char(c)),
  charI: c => expected(strings.charI(c)),
  digit: expected(strings.digit),
  eof: expected(strings.eof),
  hex: expected(strings.hex),
  letter: expected(strings.letter),
  letterU: expected(strings.letterU),
  lower: expected(strings.lower),
  lowerU: expected(strings.lowerU),
  newline: expected(strings.newline),
  newlineU: expected(strings.newlineU),
  noneof: array => expected(strings.noneof(array)),
  octal: expected(strings.octal),
  oneof: array => expected(strings.oneof(array)),
  range: (start, end) => expected(strings.range(start, end)),
  regex: re => expected(strings.regex(re)),
  space: expected(strings.space),
  spaces: expected(strings.spaces),
  spaces1: expected(strings.spaces1),
  spacesU: expected(strings.spacesU),
  spaces1U: expected(strings.spaces1U),
  spaceU: expected(strings.spaceU),
  str: s => expected(strings.str(s)),
  strI: s => expected(strings.strI(s)),
  upper: expected(strings.upper),
  upperU: expected(strings.upperU),
}
