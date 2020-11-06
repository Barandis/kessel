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
import { fail, pass } from 'test/helper'

describe('Regular expression parsers', () => {
  describe('regex', () => {
    it('accepts a string as input', () => {
      pass(regex('^\\w{3}'), 'Onomatopoeia', 'Ono')
    })
    it('accepts a regular expression as input', () => {
      pass(regex(/^\w{3}/i), 'onomatopoeia', 'ono')
    })
    it('is anchored even if an anchor is not in the regex', () => {
      fail(regex(/poe/), 'Onomatopoeia', {
        actual: '"Ono"',
        expected: 'a string matching /^poe/',
      })
    })
    it('fails if the input is at its end', () => {
      fail(regex(/^./), '', 'EOF')
    })
    it('succeeds at EOF if the match can be zero-length', () => {
      pass(regex(/^.*/), '', '')
    })
    it('matches 1-byte characters', () => {
      pass(regex(/^Onoma/), 'Onomatopoeia', 'Onoma')
      pass(regex(/^.{5}/), 'Onomatopoeia', 'Onoma')
      fail(regex(/^\d/), 'Onomatopoeia', '"On"')
    })
    it('matches 2-byte characters', () => {
      pass(regex(/^Звуко/), 'Звукоподражание', 'Звуко')
      pass(regex(/^.{5}/), 'Звукоподражание', 'Звуко')
      fail(regex(/^\d/), 'Звукоподражание', '"Зв"')
    })
    it('matches 3-byte characters (with the u flag)', () => {
      pass(regex(/^คำเลี/u), 'คำเลียนเสียง', 'คำเลี')
      pass(regex(/^.{5}/u), 'คำเลียนเสียง', 'คำเลี')
      fail(regex(/^\d/u), 'คำเลียนเสียง', '"คำ"')
    })
    it('matches 4-byte characters (with the u flag)', () => {
      pass(regex(/^𝑂𝑛𝑜𝑚𝑎/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      pass(regex(/^.{5}/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      fail(regex(/^\d/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '"𝑂𝑛"')
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
      fail(letterU, '4', { expected: 'a letter', actual: '"4"' })
      fail(letterU, '۴', { expected: 'a letter', actual: '"۴"' })
      fail(letterU, '४', { expected: 'a letter', actual: '"४"' })
      fail(letterU, '৪', { expected: 'a letter', actual: '"৪"' })
      fail(letterU, '๔', { expected: 'a letter', actual: '"๔"' })
      fail(letterU, '᠔', { expected: 'a letter', actual: '"᠔"' })
      fail(letterU, '𝟜', { expected: 'a letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(letterU, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(letterU, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(letterU, '¼', { expected: 'a letter', actual: '"¼"' })
      fail(letterU, '፬', { expected: 'a letter', actual: '"፬"' })
      fail(letterU, '⁴', { expected: 'a letter', actual: '"⁴"' })
      fail(letterU, '₄', { expected: 'a letter', actual: '"₄"' })
      fail(letterU, '④', { expected: 'a letter', actual: '"④"' })
      fail(letterU, '❹', { expected: 'a letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(letterU, ' ', { expected: 'a letter', actual: '" "' })
      fail(letterU, '\t', { expected: 'a letter', actual: '"\t"' })
      fail(letterU, '\n', { expected: 'a letter', actual: '"\n"' })
      fail(letterU, ' ', { expected: 'a letter', actual: '" "' })
      fail(letterU, '\u2003', { expected: 'a letter', actual: '"\u2003"' })
      fail(letterU, '\u202f', { expected: 'a letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(letterU, '(', { expected: 'a letter', actual: '"("' })
      fail(letterU, '｢', { expected: 'a letter', actual: '"｢"' })
      fail(letterU, ')', { expected: 'a letter', actual: '")"' })
      fail(letterU, '｣', { expected: 'a letter', actual: '"｣"' })
      fail(letterU, '!', { expected: 'a letter', actual: '"!"' })
      fail(letterU, '፣', { expected: 'a letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(letterU, '$', { expected: 'a letter', actual: '"$"' })
      fail(letterU, '₯', { expected: 'a letter', actual: '"₯"' })
      fail(letterU, '+', { expected: 'a letter', actual: '"+"' })
      fail(letterU, '⫇', { expected: 'a letter', actual: '"⫇"' })
      fail(letterU, '©', { expected: 'a letter', actual: '"©"' })
      fail(letterU, '🀄', { expected: 'a letter', actual: '"🀄"' })
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
      fail(alphaU, ' ', {
        expected: 'an alphanumeric character',
        actual: '" "',
      })
      fail(alphaU, '\t', {
        expected: 'an alphanumeric character',
        actual: '"\t"',
      })
      fail(alphaU, '\n', {
        expected: 'an alphanumeric character',
        actual: '"\n"',
      })
      fail(alphaU, ' ', {
        expected: 'an alphanumeric character',
        actual: '" "',
      })
      fail(alphaU, '\u2003', {
        expected: 'an alphanumeric character',
        actual: '"\u2003"',
      })
      fail(alphaU, '\u202f', {
        expected: 'an alphanumeric character',
        actual: '"\u202f"',
      })
    })
    it('fails on punctuation', () => {
      fail(alphaU, '(', {
        expected: 'an alphanumeric character',
        actual: '"("',
      })
      fail(alphaU, '｢', {
        expected: 'an alphanumeric character',
        actual: '"｢"',
      })
      fail(alphaU, ')', {
        expected: 'an alphanumeric character',
        actual: '")"',
      })
      fail(alphaU, '｣', {
        expected: 'an alphanumeric character',
        actual: '"｣"',
      })
      fail(alphaU, '!', {
        expected: 'an alphanumeric character',
        actual: '"!"',
      })
      fail(alphaU, '፣', {
        expected: 'an alphanumeric character',
        actual: '"፣"',
      })
    })
    it('fails on symbols', () => {
      fail(alphaU, '$', {
        expected: 'an alphanumeric character',
        actual: '"$"',
      })
      fail(alphaU, '₯', {
        expected: 'an alphanumeric character',
        actual: '"₯"',
      })
      fail(alphaU, '+', {
        expected: 'an alphanumeric character',
        actual: '"+"',
      })
      fail(alphaU, '⫇', {
        expected: 'an alphanumeric character',
        actual: '"⫇"',
      })
      fail(alphaU, '©', {
        expected: 'an alphanumeric character',
        actual: '"©"',
      })
      fail(alphaU, '🀄', {
        expected: 'an alphanumeric character',
        actual: '"🀄"',
      })
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
      fail(upperU, 'a', { expected: 'an uppercase letter', actual: '"a"' })
      fail(upperU, 'ž', { expected: 'an uppercase letter', actual: '"ž"' })
      fail(upperU, 'γ', { expected: 'an uppercase letter', actual: '"γ"' })
      fail(upperU, 'л', { expected: 'an uppercase letter', actual: '"л"' })
      fail(upperU, 'յ', { expected: 'an uppercase letter', actual: '"յ"' })
      fail(upperU, 'ე', { expected: 'an uppercase letter', actual: '"ე"' })
      fail(upperU, 'ⰽ', { expected: 'an uppercase letter', actual: '"ⰽ"' })
    })
    it('fails on decimal digits', () => {
      fail(upperU, '4', { expected: 'an uppercase letter', actual: '"4"' })
      fail(upperU, '۴', { expected: 'an uppercase letter', actual: '"۴"' })
      fail(upperU, '४', { expected: 'an uppercase letter', actual: '"४"' })
      fail(upperU, '৪', { expected: 'an uppercase letter', actual: '"৪"' })
      fail(upperU, '๔', { expected: 'an uppercase letter', actual: '"๔"' })
      fail(upperU, '᠔', { expected: 'an uppercase letter', actual: '"᠔"' })
      fail(upperU, '𝟜', { expected: 'an uppercase letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(upperU, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('fails on lowercase letter numbers', () => {
      fail(upperU, 'ⅳ', { expected: 'an uppercase letter', actual: '"ⅳ"' })
    })
    it('fails on other numbers', () => {
      fail(upperU, '¼', { expected: 'an uppercase letter', actual: '"¼"' })
      fail(upperU, '፬', { expected: 'an uppercase letter', actual: '"፬"' })
      fail(upperU, '⁴', { expected: 'an uppercase letter', actual: '"⁴"' })
      fail(upperU, '₄', { expected: 'an uppercase letter', actual: '"₄"' })
      fail(upperU, '④', { expected: 'an uppercase letter', actual: '"④"' })
      fail(upperU, '❹', { expected: 'an uppercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(upperU, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(upperU, '\t', { expected: 'an uppercase letter', actual: '"\t"' })
      fail(upperU, '\n', { expected: 'an uppercase letter', actual: '"\n"' })
      fail(upperU, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(upperU, '\u2003',
        { expected: 'an uppercase letter', actual: '"\u2003"' })
      fail(upperU, '\u202f',
        { expected: 'an uppercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(upperU, '(', { expected: 'an uppercase letter', actual: '"("' })
      fail(upperU, '｢', { expected: 'an uppercase letter', actual: '"｢"' })
      fail(upperU, ')', { expected: 'an uppercase letter', actual: '")"' })
      fail(upperU, '｣', { expected: 'an uppercase letter', actual: '"｣"' })
      fail(upperU, '!', { expected: 'an uppercase letter', actual: '"!"' })
      fail(upperU, '፣', { expected: 'an uppercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(upperU, '$', { expected: 'an uppercase letter', actual: '"$"' })
      fail(upperU, '₯', { expected: 'an uppercase letter', actual: '"₯"' })
      fail(upperU, '+', { expected: 'an uppercase letter', actual: '"+"' })
      fail(upperU, '⫇', { expected: 'an uppercase letter', actual: '"⫇"' })
      fail(upperU, '©', { expected: 'an uppercase letter', actual: '"©"' })
      fail(upperU, '🀄', { expected: 'an uppercase letter', actual: '"🀄"' })
    })
  })

  describe('lowerU', () => {
    it('fails on uppercase letters', () => {
      fail(lowerU, 'A', { expected: 'a lowercase letter', actual: '"A"' })
      fail(lowerU, 'Ž', { expected: 'a lowercase letter', actual: '"Ž"' })
      fail(lowerU, 'Γ', { expected: 'a lowercase letter', actual: '"Γ"' })
      fail(lowerU, 'Л', { expected: 'a lowercase letter', actual: '"Л"' })
      fail(lowerU, 'Յ', { expected: 'a lowercase letter', actual: '"Յ"' })
      fail(lowerU, 'Ⴄ', { expected: 'a lowercase letter', actual: '"Ⴄ"' })
      fail(lowerU, 'Ꮅ', { expected: 'a lowercase letter', actual: '"Ꮅ"' })
      fail(lowerU, 'Ⰽ', { expected: 'a lowercase letter', actual: '"Ⰽ"' })
    })
    it('fails on titlecase letters', () => {
      fail(lowerU, 'ǅ', { expected: 'a lowercase letter', actual: '"ǅ"' })
      fail(lowerU, 'ǋ', { expected: 'a lowercase letter', actual: '"ǋ"' })
      fail(lowerU, 'ῼ', { expected: 'a lowercase letter', actual: '"ῼ"' })
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
      fail(lowerU, '4', { expected: 'a lowercase letter', actual: '"4"' })
      fail(lowerU, '۴', { expected: 'a lowercase letter', actual: '"۴"' })
      fail(lowerU, '४', { expected: 'a lowercase letter', actual: '"४"' })
      fail(lowerU, '৪', { expected: 'a lowercase letter', actual: '"৪"' })
      fail(lowerU, '๔', { expected: 'a lowercase letter', actual: '"๔"' })
      fail(lowerU, '᠔', { expected: 'a lowercase letter', actual: '"᠔"' })
      fail(lowerU, '𝟜', { expected: 'a lowercase letter', actual: '"𝟜"' })
    })
    it('fails on uppercase letter numbers', () => {
      fail(lowerU, 'Ⅳ', { expected: 'a lowercase letter', actual: '"Ⅳ"' })
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(lowerU, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(lowerU, '¼', { expected: 'a lowercase letter', actual: '"¼"' })
      fail(lowerU, '፬', { expected: 'a lowercase letter', actual: '"፬"' })
      fail(lowerU, '⁴', { expected: 'a lowercase letter', actual: '"⁴"' })
      fail(lowerU, '₄', { expected: 'a lowercase letter', actual: '"₄"' })
      fail(lowerU, '④', { expected: 'a lowercase letter', actual: '"④"' })
      fail(lowerU, '❹', { expected: 'a lowercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(lowerU, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(lowerU, '\t', { expected: 'a lowercase letter', actual: '"\t"' })
      fail(lowerU, '\n', { expected: 'a lowercase letter', actual: '"\n"' })
      fail(lowerU, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(lowerU, '\u2003',
        { expected: 'a lowercase letter', actual: '"\u2003"' })
      fail(lowerU, '\u202f',
        { expected: 'a lowercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(lowerU, '(', { expected: 'a lowercase letter', actual: '"("' })
      fail(lowerU, '｢', { expected: 'a lowercase letter', actual: '"｢"' })
      fail(lowerU, ')', { expected: 'a lowercase letter', actual: '")"' })
      fail(lowerU, '｣', { expected: 'a lowercase letter', actual: '"｣"' })
      fail(lowerU, '!', { expected: 'a lowercase letter', actual: '"!"' })
      fail(lowerU, '፣', { expected: 'a lowercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(lowerU, '$', { expected: 'a lowercase letter', actual: '"$"' })
      fail(lowerU, '₯', { expected: 'a lowercase letter', actual: '"₯"' })
      fail(lowerU, '+', { expected: 'a lowercase letter', actual: '"+"' })
      fail(lowerU, '⫇', { expected: 'a lowercase letter', actual: '"⫇"' })
      fail(lowerU, '©', { expected: 'a lowercase letter', actual: '"©"' })
      fail(lowerU, '🀄', { expected: 'a lowercase letter', actual: '"🀄"' })
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
      fail(space, '\v', { expected: 'whitespace', actual: '"\v"' })
      fail(space, '\f', { expected: 'whitespace', actual: '"\f"' })
      fail(space, '\u0085', '"\u0085"')
      fail(space, '\u00a0', '"\u00a0"')
      fail(space, '\u1680', '"\u1680"')
      fail(space, '\u2000', '"\u2000"')
      fail(space, '\u2001', '"\u2001"')
      fail(space, '\u2002', '"\u2002"')
      fail(space, '\u2003', '"\u2003"')
      fail(space, '\u2004', '"\u2004"')
      fail(space, '\u2005', '"\u2005"')
      fail(space, '\u2006', '"\u2006"')
      fail(space, '\u2007', '"\u2007"')
      fail(space, '\u2008', '"\u2008"')
      fail(space, '\u2009', '"\u2009"')
      fail(space, '\u200a', '"\u200a"')
      fail(space, '\u2028', '"\u2028"')
      fail(space, '\u2029', '"\u2029"')
      fail(space, '\u202f', '"\u202f"')
      fail(space, '\u205f', '"\u205f"')
      fail(space, '\u3000', '"\u3000"')
    })
    it('succeeds only once', () => {
      pass(space, '     123', ' ')
      pass(space, '\t\n\r ', '\t')
    })
    it('fails on non-whitespace characters', () => {
      fail(space, 'O', { expected: 'whitespace', actual: '"O"' })
      fail(space, 'З', { expected: 'whitespace', actual: '"З"' })
      fail(space, 'ค', { expected: 'whitespace', actual: '"ค"' })
      fail(space, '𝑂', { expected: 'whitespace', actual: '"𝑂"' })
      fail(space, '\u180e', { expected: 'whitespace', actual: '"\u180e"' })
      fail(space, '\u200b', { expected: 'whitespace', actual: '"\u200b"' })
      fail(space, '\u200c', { expected: 'whitespace', actual: '"\u200c"' })
      fail(space, '\u200d', { expected: 'whitespace', actual: '"\u200d"' })
      fail(space, '\u2060', { expected: 'whitespace', actual: '"\u2060"' })
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
      fail(spaceU, 'O', { expected: 'whitespace', actual: '"O"' })
      fail(spaceU, 'З', { expected: 'whitespace', actual: '"З"' })
      fail(spaceU, 'ค', { expected: 'whitespace', actual: '"ค"' })
      fail(spaceU, '𝑂', { expected: 'whitespace', actual: '"𝑂"' })
      fail(spaceU, '\u180e', { expected: 'whitespace', actual: '"\u180e"' })
      fail(spaceU, '\u200b', { expected: 'whitespace', actual: '"\u200b"' })
      fail(spaceU, '\u200c', { expected: 'whitespace', actual: '"\u200c"' })
      fail(spaceU, '\u200d', { expected: 'whitespace', actual: '"\u200d"' })
      fail(spaceU, '\u2060', { expected: 'whitespace', actual: '"\u2060"' })
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
      fail(spaces1, '', { expected: 'whitespace', actual: 'EOF' })
      fail(spaces1, 'abc', { expected: 'whitespace', actual: '"a"' })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(spaces1, '\t\t\tabc', { result: null, index: 3 })
      pass(spaces1, '\n\nabc', { result: null, index: 2 })
      pass(spaces1, '\r\rabc', { result: null, index: 2 })
      pass(spaces1, ' abc', { result: null, index: 1 })
    })
    it('fails on non-conventional Unicode whitespace', () => {
      fail(spaces1, '\vabc', { expected: 'whitespace', actual: '"\v"' })
      fail(spaces1, '\f\f\f\fabc', { expected: 'whitespace', actual: '"\f"' })
      fail(spaces1, '\u0085abc', { expected: 'whitespace', actual: '"\u0085"' })
      fail(spaces1, '\u00a0abc', { expected: 'whitespace', actual: '"\u00a0"' })
      fail(spaces1, '\u1680abc', { expected: 'whitespace', actual: '"\u1680"' })
      fail(spaces1, '\u2000abc', { expected: 'whitespace', actual: '"\u2000"' })
      fail(spaces1, '\u2001abc', { expected: 'whitespace', actual: '"\u2001"' })
      fail(spaces1, '\u2002abc', { expected: 'whitespace', actual: '"\u2002"' })
      fail(spaces1, '\u2003abc', { expected: 'whitespace', actual: '"\u2003"' })
      fail(spaces1, '\u2004abc', { expected: 'whitespace', actual: '"\u2004"' })
      fail(spaces1, '\u2005abc', { expected: 'whitespace', actual: '"\u2005"' })
      fail(spaces1, '\u2006abc', { expected: 'whitespace', actual: '"\u2006"' })
      fail(spaces1, '\u2007abc', { expected: 'whitespace', actual: '"\u2007"' })
      fail(spaces1, '\u2008abc', { expected: 'whitespace', actual: '"\u2008"' })
      fail(spaces1, '\u2009abc', { expected: 'whitespace', actual: '"\u2009"' })
      fail(spaces1, '\u200aabc', { expected: 'whitespace', actual: '"\u200a"' })
      fail(spaces1, '\u2028abc', { expected: 'whitespace', actual: '"\u2028"' })
      fail(spaces1, '\u2029abc', { expected: 'whitespace', actual: '"\u2029"' })
      fail(spaces1, '\u202fabc', { expected: 'whitespace', actual: '"\u202f"' })
      fail(spaces1, '\u205fabc', { expected: 'whitespace', actual: '"\u205f"' })
      fail(spaces1, '\u3000abc', { expected: 'whitespace', actual: '"\u3000"' })
    })
  })

  describe('spaces1U', () => {
    it('fails if no whitespace is found', () => {
      fail(spaces1U, '', { expected: 'whitespace', actual: 'EOF' })
      fail(spaces1U, 'abc', { expected: 'whitespace', actual: '"a"' })
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
      fail(newline, '\u0085abc', { expected: 'a newline', actual: '"\u0085"' })
      fail(newline, '\u2028abc', { expected: 'a newline', actual: '"\u2028"' })
      fail(newline, '\u2029abc', { expected: 'a newline', actual: '"\u2029"' })
      fail(newline, 'Onoma', { expected: 'a newline', actual: '"O"' })
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
      fail(newlineU, 'Onoma', { expected: 'a newline', actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(newlineU, '', { expected: 'a newline', actual: 'EOF' })
    })
  })
})
