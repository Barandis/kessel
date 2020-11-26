// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  newline,
  regex,
  space,
  spaces,
  spaces1,
  alphaU,
  letterU,
  lowerU,
  newlineU,
  spaceU,
  spacesU,
  spaces1U,
  upperU,
} from 'kessel/parsers/regex'
import { error, fail, pass } from 'test/helper'

describe('Regular expression parsers', () => {
  describe('regex', () => {
    it('throws if argument is not a string or regex', () => {
      error(
        regex(0),
        '',
        '[regex]: expected a string or a regular expression; found 0',
      )
    })
    it('accepts a string as input', () => {
      pass(regex('^\\w{3}'), 'Onomatopoeia', 'Ono')
    })
    it('accepts a regular expression as input', () => {
      pass(regex(/^\w{3}/i), 'onomatopoeia', 'ono')
    })
    it('is anchored even if an anchor is not in the regex', () => {
      fail(regex(/poe/), 'Onomatopoeia', 'a string matching /^poe/')
    })
    it('fails if the input is at its end', () => {
      fail(regex(/^./), '', 'a string matching /^./')
    })
    it('succeeds at EOF if the match can be zero-length', () => {
      pass(regex(/^.*/), '', '')
    })
    it('matches 1-byte characters', () => {
      pass(regex(/^Onoma/), 'Onomatopoeia', 'Onoma')
      pass(regex(/^.{5}/), 'Onomatopoeia', 'Onoma')
      fail(regex(/^\d/), 'Onomatopoeia', 'a string matching /^\\d/')
    })
    it('matches 2-byte characters', () => {
      pass(regex(/^Звуко/), 'Звукоподражание', 'Звуко')
      pass(regex(/^.{5}/), 'Звукоподражание', 'Звуко')
      fail(regex(/^\d/), 'Звукоподражание', 'a string matching /^\\d/')
    })
    it('matches 3-byte characters (with the u flag)', () => {
      pass(regex(/^คำเลี/u), 'คำเลียนเสียง', 'คำเลี')
      pass(regex(/^.{5}/u), 'คำเลียนเสียง', 'คำเลี')
      fail(regex(/^\d/u), 'คำเลียนเสียง', 'a string matching /^\\d/u')
    })
    it('matches 4-byte characters (with the u flag)', () => {
      pass(regex(/^𝑂𝑛𝑜𝑚𝑎/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      pass(regex(/^.{5}/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      fail(regex(/^\d/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'a string matching /^\\d/u')
    })
  })

  describe('letterU', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(letterU, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(letterU, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(letterU, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(letterU, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(letterU, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(letterU, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(letterU, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(letterU, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(letterU, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(letterU, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(letterU, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(letterU, 'a', 'a') // LATIN SMALL LETTER A
      pass(letterU, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(letterU, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(letterU, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(letterU, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(letterU, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(letterU, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(letterU, '4', 'a Unicode letter')
      fail(letterU, '۴', 'a Unicode letter')
      fail(letterU, '४', 'a Unicode letter')
      fail(letterU, '৪', 'a Unicode letter')
      fail(letterU, '๔', 'a Unicode letter')
      fail(letterU, '᠔', 'a Unicode letter')
      fail(letterU, '𝟜', 'a Unicode letter')
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(letterU, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(letterU, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(letterU, '¼', 'a Unicode letter')
      fail(letterU, '፬', 'a Unicode letter')
      fail(letterU, '⁴', 'a Unicode letter')
      fail(letterU, '₄', 'a Unicode letter')
      fail(letterU, '④', 'a Unicode letter')
      fail(letterU, '❹', 'a Unicode letter')
    })
    it('fails on whitespace', () => {
      fail(letterU, ' ', 'a Unicode letter')
      fail(letterU, '\t', 'a Unicode letter')
      fail(letterU, '\n', 'a Unicode letter')
      fail(letterU, ' ', 'a Unicode letter')
      fail(letterU, '\u2003', 'a Unicode letter')
      fail(letterU, '\u202f', 'a Unicode letter')
    })
    it('fails on punctuation', () => {
      fail(letterU, '(', 'a Unicode letter')
      fail(letterU, '｢', 'a Unicode letter')
      fail(letterU, ')', 'a Unicode letter')
      fail(letterU, '｣', 'a Unicode letter')
      fail(letterU, '!', 'a Unicode letter')
      fail(letterU, '፣', 'a Unicode letter')
    })
    it('fails on symbols', () => {
      fail(letterU, '$', 'a Unicode letter')
      fail(letterU, '₯', 'a Unicode letter')
      fail(letterU, '+', 'a Unicode letter')
      fail(letterU, '⫇', 'a Unicode letter')
      fail(letterU, '©', 'a Unicode letter')
      fail(letterU, '🀄', 'a Unicode letter')
    })
  })

  describe('alphaU', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(alphaU, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(alphaU, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(alphaU, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(alphaU, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(alphaU, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(alphaU, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(alphaU, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(alphaU, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(alphaU, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(alphaU, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(alphaU, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(alphaU, 'a', 'a') // LATIN SMALL LETTER A
      pass(alphaU, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(alphaU, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(alphaU, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(alphaU, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(alphaU, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(alphaU, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('succeeds on a single decimal digit', () => {
      pass(alphaU, '4', '4') // DIGIT FOUR
      pass(alphaU, '۴', '۴') // ARABIC-INDIC DIGIT FOUR
      pass(alphaU, '४', '४') // DEVANAGARI DIGIT FOUR
      pass(alphaU, '৪', '৪') // BENGALI DIGIT FOUR
      pass(alphaU, '๔', '๔') // THAI DIGIT FOUR
      pass(alphaU, '᠔', '᠔') // MONGOLIAN DIGIT FOUR
      pass(alphaU, '𝟜', '𝟜') // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(alphaU, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(alphaU, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('succeeds on a single other number', () => {
      pass(alphaU, '¼', '¼') // VULGAR FRACTION ONE QUARTER
      pass(alphaU, '፬', '፬') // ETHIOPIC DIGIT FOUR
      pass(alphaU, '⁴', '⁴') // SUPERSCRIPT FOUR
      pass(alphaU, '₄', '₄') // SUBSCRIPT FOUR
      pass(alphaU, '④', '④') // CIRCLED DIGIT FOUR
      pass(alphaU, '❹', '❹') // DINGBAT NEGATIVE CIRCLED DIGIT FOUR
    })
    it('fails on whitespace', () => {
      fail(alphaU, ' ', 'a Unicode alphanumeric character')
      fail(alphaU, '\t', 'a Unicode alphanumeric character')
      fail(alphaU, '\n', 'a Unicode alphanumeric character')
      fail(alphaU, ' ', 'a Unicode alphanumeric character')
      fail(alphaU, '\u2003', 'a Unicode alphanumeric character')
      fail(alphaU, '\u202f', 'a Unicode alphanumeric character')
    })
    it('fails on punctuation', () => {
      fail(alphaU, '(', 'a Unicode alphanumeric character')
      fail(alphaU, '｢', 'a Unicode alphanumeric character')
      fail(alphaU, ')', 'a Unicode alphanumeric character')
      fail(alphaU, '｣', 'a Unicode alphanumeric character')
      fail(alphaU, '!', 'a Unicode alphanumeric character')
      fail(alphaU, '፣', 'a Unicode alphanumeric character')
    })
    it('fails on symbols', () => {
      fail(alphaU, '$', 'a Unicode alphanumeric character')
      fail(alphaU, '₯', 'a Unicode alphanumeric character')
      fail(alphaU, '+', 'a Unicode alphanumeric character')
      fail(alphaU, '⫇', 'a Unicode alphanumeric character')
      fail(alphaU, '©', 'a Unicode alphanumeric character')
      fail(alphaU, '🀄', 'a Unicode alphanumeric character')
    })
  })

  describe('upperU', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(upperU, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(upperU, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(upperU, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(upperU, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(upperU, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(upperU, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(upperU, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(upperU, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(upperU, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(upperU, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(upperU, 'ῼ', 'ῼ')
    })
    it('fails on lowercase letters', () => {
      fail(upperU, 'a', 'a Unicode uppercase letter')
      fail(upperU, 'ž', 'a Unicode uppercase letter')
      fail(upperU, 'γ', 'a Unicode uppercase letter')
      fail(upperU, 'л', 'a Unicode uppercase letter')
      fail(upperU, 'յ', 'a Unicode uppercase letter')
      fail(upperU, 'ე', 'a Unicode uppercase letter')
      fail(upperU, 'ⰽ', 'a Unicode uppercase letter')
    })
    it('fails on decimal digits', () => {
      fail(upperU, '4', 'a Unicode uppercase letter')
      fail(upperU, '۴', 'a Unicode uppercase letter')
      fail(upperU, '४', 'a Unicode uppercase letter')
      fail(upperU, '৪', 'a Unicode uppercase letter')
      fail(upperU, '๔', 'a Unicode uppercase letter')
      fail(upperU, '᠔', 'a Unicode uppercase letter')
      fail(upperU, '𝟜', 'a Unicode uppercase letter')
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(upperU, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('fails on lowercase letter numbers', () => {
      fail(upperU, 'ⅳ', 'a Unicode uppercase letter')
    })
    it('fails on other numbers', () => {
      fail(upperU, '¼', 'a Unicode uppercase letter')
      fail(upperU, '፬', 'a Unicode uppercase letter')
      fail(upperU, '⁴', 'a Unicode uppercase letter')
      fail(upperU, '₄', 'a Unicode uppercase letter')
      fail(upperU, '④', 'a Unicode uppercase letter')
      fail(upperU, '❹', 'a Unicode uppercase letter')
    })
    it('fails on whitespace', () => {
      fail(upperU, ' ', 'a Unicode uppercase letter')
      fail(upperU, '\t', 'a Unicode uppercase letter')
      fail(upperU, '\n', 'a Unicode uppercase letter')
      fail(upperU, ' ', 'a Unicode uppercase letter')
      fail(upperU, '\u2003', 'a Unicode uppercase letter')
      fail(upperU, '\u202f', 'a Unicode uppercase letter')
    })
    it('fails on punctuation', () => {
      fail(upperU, '(', 'a Unicode uppercase letter')
      fail(upperU, '｢', 'a Unicode uppercase letter')
      fail(upperU, ')', 'a Unicode uppercase letter')
      fail(upperU, '｣', 'a Unicode uppercase letter')
      fail(upperU, '!', 'a Unicode uppercase letter')
      fail(upperU, '፣', 'a Unicode uppercase letter')
    })
    it('fails on symbols', () => {
      fail(upperU, '$', 'a Unicode uppercase letter')
      fail(upperU, '₯', 'a Unicode uppercase letter')
      fail(upperU, '+', 'a Unicode uppercase letter')
      fail(upperU, '⫇', 'a Unicode uppercase letter')
      fail(upperU, '©', 'a Unicode uppercase letter')
      fail(upperU, '🀄', 'a Unicode uppercase letter')
    })
  })

  describe('lowerU', () => {
    it('fails on uppercase letters', () => {
      fail(lowerU, 'A', 'a Unicode lowercase letter')
      fail(lowerU, 'Ž', 'a Unicode lowercase letter')
      fail(lowerU, 'Γ', 'a Unicode lowercase letter')
      fail(lowerU, 'Л', 'a Unicode lowercase letter')
      fail(lowerU, 'Յ', 'a Unicode lowercase letter')
      fail(lowerU, 'Ⴄ', 'a Unicode lowercase letter')
      fail(lowerU, 'Ꮅ', 'a Unicode lowercase letter')
      fail(lowerU, 'Ⰽ', 'a Unicode lowercase letter')
    })
    it('fails on titlecase letters', () => {
      fail(lowerU, 'ǅ', 'a Unicode lowercase letter')
      fail(lowerU, 'ǋ', 'a Unicode lowercase letter')
      fail(lowerU, 'ῼ', 'a Unicode lowercase letter')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(lowerU, 'a', 'a') // LATIN SMALL LETTER A
      pass(lowerU, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(lowerU, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(lowerU, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(lowerU, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(lowerU, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(lowerU, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(lowerU, '4', 'a Unicode lowercase letter')
      fail(lowerU, '۴', 'a Unicode lowercase letter')
      fail(lowerU, '४', 'a Unicode lowercase letter')
      fail(lowerU, '৪', 'a Unicode lowercase letter')
      fail(lowerU, '๔', 'a Unicode lowercase letter')
      fail(lowerU, '᠔', 'a Unicode lowercase letter')
      fail(lowerU, '𝟜', 'a Unicode lowercase letter')
    })
    it('fails on uppercase letter numbers', () => {
      fail(lowerU, 'Ⅳ', 'a Unicode lowercase letter')
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(lowerU, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(lowerU, '¼', 'a Unicode lowercase letter')
      fail(lowerU, '፬', 'a Unicode lowercase letter')
      fail(lowerU, '⁴', 'a Unicode lowercase letter')
      fail(lowerU, '₄', 'a Unicode lowercase letter')
      fail(lowerU, '④', 'a Unicode lowercase letter')
      fail(lowerU, '❹', 'a Unicode lowercase letter')
    })
    it('fails on whitespace', () => {
      fail(lowerU, ' ', 'a Unicode lowercase letter')
      fail(lowerU, '\t', 'a Unicode lowercase letter')
      fail(lowerU, '\n', 'a Unicode lowercase letter')
      fail(lowerU, ' ', 'a Unicode lowercase letter')
      fail(lowerU, '\u2003', 'a Unicode lowercase letter')
      fail(lowerU, '\u202f', 'a Unicode lowercase letter')
    })
    it('fails on punctuation', () => {
      fail(lowerU, '(', 'a Unicode lowercase letter')
      fail(lowerU, '｢', 'a Unicode lowercase letter')
      fail(lowerU, ')', 'a Unicode lowercase letter')
      fail(lowerU, '｣', 'a Unicode lowercase letter')
      fail(lowerU, '!', 'a Unicode lowercase letter')
      fail(lowerU, '፣', 'a Unicode lowercase letter')
    })
    it('fails on symbols', () => {
      fail(lowerU, '$', 'a Unicode lowercase letter')
      fail(lowerU, '₯', 'a Unicode lowercase letter')
      fail(lowerU, '+', 'a Unicode lowercase letter')
      fail(lowerU, '⫇', 'a Unicode lowercase letter')
      fail(lowerU, '©', 'a Unicode lowercase letter')
      fail(lowerU, '🀄', 'a Unicode lowercase letter')
    })
  })

  describe('space', () => {
    it('succeeds on a single instance of conventional whitespace', () => {
      pass(space, '\t', '\t')
      pass(space, '\n', '\n')
      pass(space, '\r', '\r')
      pass(space, '\r\n', '\r\n')
      pass(space, ' ', ' ')
    })
    it('fails on Unicode whitespace of other kinds', () => {
      fail(space, '\v', 'a whitespace character')
      fail(space, '\f', 'a whitespace character')
      fail(space, '\u0085', 'a whitespace character')
      fail(space, '\u00a0', 'a whitespace character')
      fail(space, '\u1680', 'a whitespace character')
      fail(space, '\u2000', 'a whitespace character')
      fail(space, '\u2001', 'a whitespace character')
      fail(space, '\u2002', 'a whitespace character')
      fail(space, '\u2003', 'a whitespace character')
      fail(space, '\u2004', 'a whitespace character')
      fail(space, '\u2005', 'a whitespace character')
      fail(space, '\u2006', 'a whitespace character')
      fail(space, '\u2007', 'a whitespace character')
      fail(space, '\u2008', 'a whitespace character')
      fail(space, '\u2009', 'a whitespace character')
      fail(space, '\u200a', 'a whitespace character')
      fail(space, '\u2028', 'a whitespace character')
      fail(space, '\u2029', 'a whitespace character')
      fail(space, '\u202f', 'a whitespace character')
      fail(space, '\u205f', 'a whitespace character')
      fail(space, '\u3000', 'a whitespace character')
    })
    it('succeeds only once', () => {
      pass(space, '     123', ' ')
      pass(space, '\t\n\r ', '\t')
    })
    it('fails on non-whitespace characters', () => {
      fail(space, 'O', 'a whitespace character')
      fail(space, 'З', 'a whitespace character')
      fail(space, 'ค', 'a whitespace character')
      fail(space, '𝑂', 'a whitespace character')
      fail(space, '\u180e', 'a whitespace character')
      fail(space, '\u200b', 'a whitespace character')
      fail(space, '\u200c', 'a whitespace character')
      fail(space, '\u200d', 'a whitespace character')
      fail(space, '\u2060', 'a whitespace character')
    })
  })

  describe('spaceU', () => {
    it('succeeds on a single instance of Unicode whitespace', () => {
      pass(spaceU, '\t', '\t')
      pass(spaceU, '\n', '\n')
      pass(spaceU, '\v', '\v')
      pass(spaceU, '\f', '\f')
      pass(spaceU, '\r', '\r')
      pass(spaceU, '\r\n', '\r\n')
      pass(spaceU, ' ', ' ')
      pass(spaceU, '\u0085', '\u0085')
      pass(spaceU, '\u00a0', '\u00a0')
      pass(spaceU, '\u1680', '\u1680')
      pass(spaceU, '\u2000', '\u2000')
      pass(spaceU, '\u2001', '\u2001')
      pass(spaceU, '\u2002', '\u2002')
      pass(spaceU, '\u2003', '\u2003')
      pass(spaceU, '\u2004', '\u2004')
      pass(spaceU, '\u2005', '\u2005')
      pass(spaceU, '\u2006', '\u2006')
      pass(spaceU, '\u2007', '\u2007')
      pass(spaceU, '\u2008', '\u2008')
      pass(spaceU, '\u2009', '\u2009')
      pass(spaceU, '\u200a', '\u200a')
      pass(spaceU, '\u2028', '\u2028')
      pass(spaceU, '\u2029', '\u2029')
      pass(spaceU, '\u202f', '\u202f')
      pass(spaceU, '\u205f', '\u205f')
      pass(spaceU, '\u3000', '\u3000')
    })
    it('succeeds only once', () => {
      pass(spaceU, '     123', ' ')
      pass(spaceU, '\u3000\u1680\u202f', '\u3000')
    })
    it('fails on non-whitespace characters', () => {
      fail(spaceU, 'O', 'a Unicode whitespace character')
      fail(spaceU, 'З', 'a Unicode whitespace character')
      fail(spaceU, 'ค', 'a Unicode whitespace character')
      fail(spaceU, '𝑂', 'a Unicode whitespace character')
      fail(spaceU, '\u180e', 'a Unicode whitespace character')
      fail(spaceU, '\u200b', 'a Unicode whitespace character')
      fail(spaceU, '\u200c', 'a Unicode whitespace character')
      fail(spaceU, '\u200d', 'a Unicode whitespace character')
      fail(spaceU, '\u2060', 'a Unicode whitespace character')
    })
  })

  describe('spaces', () => {
    it('succeeds even if no whitespace is found', () => {
      pass(spaces, '', { result: null, index: 0 })
      pass(spaces, 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(spaces, '\t\t\tabc', { result: null, index: 3 })
      pass(spaces, '\n\nabc', { result: null, index: 2 })
      pass(spaces, '\r\rabc', { result: null, index: 2 })
      pass(spaces, ' abc', { result: null, index: 1 })
    })
    it('does not skip non-conventional Unicode whitespace', () => {
      pass(spaces, '\vabc', { result: null, index: 0 })
      pass(spaces, '\f\f\f\fabc', { result: null, index: 0 })
      pass(spaces, '\u0085abc', { result: null, index: 0 })
      pass(spaces, '\u00a0abc', { result: null, index: 0 })
      pass(spaces, '\u1680abc', { result: null, index: 0 })
      pass(spaces, '\u2000abc', { result: null, index: 0 })
      pass(spaces, '\u2001abc', { result: null, index: 0 })
      pass(spaces, '\u2002abc', { result: null, index: 0 })
      pass(spaces, '\u2003abc', { result: null, index: 0 })
      pass(spaces, '\u2004abc', { result: null, index: 0 })
      pass(spaces, '\u2005abc', { result: null, index: 0 })
      pass(spaces, '\u2006abc', { result: null, index: 0 })
      pass(spaces, '\u2007abc', { result: null, index: 0 })
      pass(spaces, '\u2008abc', { result: null, index: 0 })
      pass(spaces, '\u2009abc', { result: null, index: 0 })
      pass(spaces, '\u200aabc', { result: null, index: 0 })
      pass(spaces, '\u2028abc', { result: null, index: 0 })
      pass(spaces, '\u2029abc', { result: null, index: 0 })
      pass(spaces, '\u202fabc', { result: null, index: 0 })
      pass(spaces, '\u205fabc', { result: null, index: 0 })
      pass(spaces, '\u3000abc', { result: null, index: 0 })
    })
  })

  describe('spacesU', () => {
    it('succeeds even if no whitespace is found', () => {
      pass(spacesU, '', { result: null, index: 0 })
      pass(spacesU, 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(spacesU, '\t\t\tabc', { result: null, index: 3 })
      pass(spacesU, '\n\nabc', { result: null, index: 2 })
      pass(spacesU, '\vabc', { result: null, index: 1 })
      pass(spacesU, '\f\f\f\fabc', { result: null, index: 4 })
      pass(spacesU, '\r\rabc', { result: null, index: 2 })
      pass(spacesU, ' abc', { result: null, index: 1 })
      pass(spacesU, '\u0085abc', { result: null, index: 2 })
      pass(spacesU, '\u00a0abc', { result: null, index: 2 })
      pass(spacesU, '\u1680abc', { result: null, index: 3 })
      pass(spacesU, '\u2000abc', { result: null, index: 3 })
      pass(spacesU, '\u2001abc', { result: null, index: 3 })
      pass(spacesU, '\u2002abc', { result: null, index: 3 })
      pass(spacesU, '\u2003abc', { result: null, index: 3 })
      pass(spacesU, '\u2004abc', { result: null, index: 3 })
      pass(spacesU, '\u2005abc', { result: null, index: 3 })
      pass(spacesU, '\u2006abc', { result: null, index: 3 })
      pass(spacesU, '\u2007abc', { result: null, index: 3 })
      pass(spacesU, '\u2008abc', { result: null, index: 3 })
      pass(spacesU, '\u2009abc', { result: null, index: 3 })
      pass(spacesU, '\u200aabc', { result: null, index: 3 })
      pass(spacesU, '\u2028abc', { result: null, index: 3 })
      pass(spacesU, '\u2029abc', { result: null, index: 3 })
      pass(spacesU, '\u202fabc', { result: null, index: 3 })
      pass(spacesU, '\u205fabc', { result: null, index: 3 })
      pass(spacesU, '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('spaces1', () => {
    it('fails if no whitespace is found', () => {
      fail(spaces1, '', 'one or more whitespace characters')
      fail(spaces1, 'abc', 'one or more whitespace characters')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(spaces1, '\t\t\tabc', { result: null, index: 3 })
      pass(spaces1, '\n\nabc', { result: null, index: 2 })
      pass(spaces1, '\r\rabc', { result: null, index: 2 })
      pass(spaces1, ' abc', { result: null, index: 1 })
    })
    it('fails on non-conventional Unicode whitespace', () => {
      fail(spaces1, '\vabc', 'one or more whitespace characters')
      fail(spaces1, '\f\f\f\fabc', 'one or more whitespace characters')
      fail(spaces1, '\u0085abc', 'one or more whitespace characters')
      fail(spaces1, '\u00a0abc', 'one or more whitespace characters')
      fail(spaces1, '\u1680abc', 'one or more whitespace characters')
      fail(spaces1, '\u2000abc', 'one or more whitespace characters')
      fail(spaces1, '\u2001abc', 'one or more whitespace characters')
      fail(spaces1, '\u2002abc', 'one or more whitespace characters')
      fail(spaces1, '\u2003abc', 'one or more whitespace characters')
      fail(spaces1, '\u2004abc', 'one or more whitespace characters')
      fail(spaces1, '\u2005abc', 'one or more whitespace characters')
      fail(spaces1, '\u2006abc', 'one or more whitespace characters')
      fail(spaces1, '\u2007abc', 'one or more whitespace characters')
      fail(spaces1, '\u2008abc', 'one or more whitespace characters')
      fail(spaces1, '\u2009abc', 'one or more whitespace characters')
      fail(spaces1, '\u200aabc', 'one or more whitespace characters')
      fail(spaces1, '\u2028abc', 'one or more whitespace characters')
      fail(spaces1, '\u2029abc', 'one or more whitespace characters')
      fail(spaces1, '\u202fabc', 'one or more whitespace characters')
      fail(spaces1, '\u205fabc', 'one or more whitespace characters')
      fail(spaces1, '\u3000abc', 'one or more whitespace characters')
    })
  })

  describe('spaces1U', () => {
    it('fails if no whitespace is found', () => {
      fail(spaces1U, '', 'one or more Unicode whitespace characters')
      fail(spaces1U, 'abc', 'one or more Unicode whitespace characters')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(spaces1U, '\t\t\tabc', { result: null, index: 3 })
      pass(spaces1U, '\n\nabc', { result: null, index: 2 })
      pass(spaces1U, '\vabc', { result: null, index: 1 })
      pass(spaces1U, '\f\f\f\fabc', { result: null, index: 4 })
      pass(spaces1U, '\r\rabc', { result: null, index: 2 })
      pass(spaces1U, ' abc', { result: null, index: 1 })
      pass(spaces1U, '\u0085abc', { result: null, index: 2 })
      pass(spaces1U, '\u00a0abc', { result: null, index: 2 })
      pass(spaces1U, '\u1680abc', { result: null, index: 3 })
      pass(spaces1U, '\u2000abc', { result: null, index: 3 })
      pass(spaces1U, '\u2001abc', { result: null, index: 3 })
      pass(spaces1U, '\u2002abc', { result: null, index: 3 })
      pass(spaces1U, '\u2003abc', { result: null, index: 3 })
      pass(spaces1U, '\u2004abc', { result: null, index: 3 })
      pass(spaces1U, '\u2005abc', { result: null, index: 3 })
      pass(spaces1U, '\u2006abc', { result: null, index: 3 })
      pass(spaces1U, '\u2007abc', { result: null, index: 3 })
      pass(spaces1U, '\u2008abc', { result: null, index: 3 })
      pass(spaces1U, '\u2009abc', { result: null, index: 3 })
      pass(spaces1U, '\u200aabc', { result: null, index: 3 })
      pass(spaces1U, '\u2028abc', { result: null, index: 3 })
      pass(spaces1U, '\u2029abc', { result: null, index: 3 })
      pass(spaces1U, '\u202fabc', { result: null, index: 3 })
      pass(spaces1U, '\u205fabc', { result: null, index: 3 })
      pass(spaces1U, '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('newline', () => {
    it('succeeds on a single newline', () => {
      pass(newline, '\nabc', '\n')
      pass(newline, '\rabc', '\r')
      pass(newline, '\r\nabc', '\r\n')
    })
    it('fails on any other character combination', () => {
      fail(newline, '\u0085abc', 'a newline')
      fail(newline, '\u2028abc', 'a newline')
      fail(newline, '\u2029abc', 'a newline')
      fail(newline, 'Onoma', 'a newline')
    })
    it('fails at EOF', () => {
      fail(newline, '', { expected: 'a newline', actual: 'EOF' })
    })
  })

  describe('newlineU', () => {
    it('succeeds on a single Unicode newline', () => {
      pass(newlineU, '\nabc', '\n')
      pass(newlineU, '\rabc', '\r')
      pass(newlineU, '\r\nabc', '\r\n')
      pass(newlineU, '\u0085abc', '\u0085')
      pass(newlineU, '\u2028abc', '\u2028')
      pass(newlineU, '\u2029abc', '\u2029')
    })
    it('fails on any other character combination', () => {
      fail(newlineU, 'Onoma', 'a Unicode newline')
    })
    it('fails at EOF', () => {
      fail(newlineU, '', 'a Unicode newline')
    })
  })
})
