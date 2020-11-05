// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  regex,
  space,
  spaces,
  spaces1,
  ualpha,
  uletter,
  ulower,
  unewline,
  uspace,
  uspaces,
  uspaces1,
  uupper,
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

  describe('uletter', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(uletter, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(uletter, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(uletter, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(uletter, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(uletter, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(uletter, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(uletter, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(uletter, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(uletter, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(uletter, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(uletter, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(uletter, 'a', 'a') // LATIN SMALL LETTER A
      pass(uletter, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(uletter, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(uletter, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(uletter, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(uletter, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(uletter, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(uletter, '4', { expected: 'a letter', actual: '"4"' })
      fail(uletter, '۴', { expected: 'a letter', actual: '"۴"' })
      fail(uletter, '४', { expected: 'a letter', actual: '"४"' })
      fail(uletter, '৪', { expected: 'a letter', actual: '"৪"' })
      fail(uletter, '๔', { expected: 'a letter', actual: '"๔"' })
      fail(uletter, '᠔', { expected: 'a letter', actual: '"᠔"' })
      fail(uletter, '𝟜', { expected: 'a letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(uletter, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(uletter, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(uletter, '¼', { expected: 'a letter', actual: '"¼"' })
      fail(uletter, '፬', { expected: 'a letter', actual: '"፬"' })
      fail(uletter, '⁴', { expected: 'a letter', actual: '"⁴"' })
      fail(uletter, '₄', { expected: 'a letter', actual: '"₄"' })
      fail(uletter, '④', { expected: 'a letter', actual: '"④"' })
      fail(uletter, '❹', { expected: 'a letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(uletter, ' ', { expected: 'a letter', actual: '" "' })
      fail(uletter, '\t', { expected: 'a letter', actual: '"\t"' })
      fail(uletter, '\n', { expected: 'a letter', actual: '"\n"' })
      fail(uletter, ' ', { expected: 'a letter', actual: '" "' })
      fail(uletter, '\u2003', { expected: 'a letter', actual: '"\u2003"' })
      fail(uletter, '\u202f', { expected: 'a letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(uletter, '(', { expected: 'a letter', actual: '"("' })
      fail(uletter, '｢', { expected: 'a letter', actual: '"｢"' })
      fail(uletter, ')', { expected: 'a letter', actual: '")"' })
      fail(uletter, '｣', { expected: 'a letter', actual: '"｣"' })
      fail(uletter, '!', { expected: 'a letter', actual: '"!"' })
      fail(uletter, '፣', { expected: 'a letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(uletter, '$', { expected: 'a letter', actual: '"$"' })
      fail(uletter, '₯', { expected: 'a letter', actual: '"₯"' })
      fail(uletter, '+', { expected: 'a letter', actual: '"+"' })
      fail(uletter, '⫇', { expected: 'a letter', actual: '"⫇"' })
      fail(uletter, '©', { expected: 'a letter', actual: '"©"' })
      fail(uletter, '🀄', { expected: 'a letter', actual: '"🀄"' })
    })
  })

  describe('ualpha', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(ualpha, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(ualpha, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(ualpha, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(ualpha, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(ualpha, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(ualpha, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(ualpha, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(ualpha, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(ualpha, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(ualpha, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(ualpha, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(ualpha, 'a', 'a') // LATIN SMALL LETTER A
      pass(ualpha, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(ualpha, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(ualpha, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(ualpha, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(ualpha, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(ualpha, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('succeeds on a single decimal digit', () => {
      pass(ualpha, '4', '4') // DIGIT FOUR
      pass(ualpha, '۴', '۴') // ARABIC-INDIC DIGIT FOUR
      pass(ualpha, '४', '४') // DEVANAGARI DIGIT FOUR
      pass(ualpha, '৪', '৪') // BENGALI DIGIT FOUR
      pass(ualpha, '๔', '๔') // THAI DIGIT FOUR
      pass(ualpha, '᠔', '᠔') // MONGOLIAN DIGIT FOUR
      pass(ualpha, '𝟜', '𝟜') // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(ualpha, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(ualpha, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('succeeds on a single other number', () => {
      pass(ualpha, '¼', '¼') // VULGAR FRACTION ONE QUARTER
      pass(ualpha, '፬', '፬') // ETHIOPIC DIGIT FOUR
      pass(ualpha, '⁴', '⁴') // SUPERSCRIPT FOUR
      pass(ualpha, '₄', '₄') // SUBSCRIPT FOUR
      pass(ualpha, '④', '④') // CIRCLED DIGIT FOUR
      pass(ualpha, '❹', '❹') // DINGBAT NEGATIVE CIRCLED DIGIT FOUR
    })
    it('fails on whitespace', () => {
      fail(ualpha, ' ', { expected: 'an alphanumeric', actual: '" "' })
      fail(ualpha, '\t', { expected: 'an alphanumeric', actual: '"\t"' })
      fail(ualpha, '\n', { expected: 'an alphanumeric', actual: '"\n"' })
      fail(ualpha, ' ', { expected: 'an alphanumeric', actual: '" "' })
      fail(ualpha, '\u2003', {
        expected: 'an alphanumeric',
        actual: '"\u2003"',
      })
      fail(ualpha, '\u202f', {
        expected: 'an alphanumeric',
        actual: '"\u202f"',
      })
    })
    it('fails on punctuation', () => {
      fail(ualpha, '(', { expected: 'an alphanumeric', actual: '"("' })
      fail(ualpha, '｢', { expected: 'an alphanumeric', actual: '"｢"' })
      fail(ualpha, ')', { expected: 'an alphanumeric', actual: '")"' })
      fail(ualpha, '｣', { expected: 'an alphanumeric', actual: '"｣"' })
      fail(ualpha, '!', { expected: 'an alphanumeric', actual: '"!"' })
      fail(ualpha, '፣', { expected: 'an alphanumeric', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(ualpha, '$', { expected: 'an alphanumeric', actual: '"$"' })
      fail(ualpha, '₯', { expected: 'an alphanumeric', actual: '"₯"' })
      fail(ualpha, '+', { expected: 'an alphanumeric', actual: '"+"' })
      fail(ualpha, '⫇', { expected: 'an alphanumeric', actual: '"⫇"' })
      fail(ualpha, '©', { expected: 'an alphanumeric', actual: '"©"' })
      fail(ualpha, '🀄', { expected: 'an alphanumeric', actual: '"🀄"' })
    })
  })

  describe('uupper', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(uupper, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(uupper, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(uupper, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(uupper, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(uupper, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(uupper, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(uupper, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(uupper, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(uupper, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(uupper, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(uupper, 'ῼ', 'ῼ')
    })
    it('fails on lowercase letters', () => {
      fail(uupper, 'a', { expected: 'an uppercase letter', actual: '"a"' })
      fail(uupper, 'ž', { expected: 'an uppercase letter', actual: '"ž"' })
      fail(uupper, 'γ', { expected: 'an uppercase letter', actual: '"γ"' })
      fail(uupper, 'л', { expected: 'an uppercase letter', actual: '"л"' })
      fail(uupper, 'յ', { expected: 'an uppercase letter', actual: '"յ"' })
      fail(uupper, 'ე', { expected: 'an uppercase letter', actual: '"ე"' })
      fail(uupper, 'ⰽ', { expected: 'an uppercase letter', actual: '"ⰽ"' })
    })
    it('fails on decimal digits', () => {
      fail(uupper, '4', { expected: 'an uppercase letter', actual: '"4"' })
      fail(uupper, '۴', { expected: 'an uppercase letter', actual: '"۴"' })
      fail(uupper, '४', { expected: 'an uppercase letter', actual: '"४"' })
      fail(uupper, '৪', { expected: 'an uppercase letter', actual: '"৪"' })
      fail(uupper, '๔', { expected: 'an uppercase letter', actual: '"๔"' })
      fail(uupper, '᠔', { expected: 'an uppercase letter', actual: '"᠔"' })
      fail(uupper, '𝟜', { expected: 'an uppercase letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(uupper, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('fails on lowercase letter numbers', () => {
      fail(uupper, 'ⅳ', { expected: 'an uppercase letter', actual: '"ⅳ"' })
    })
    it('fails on other numbers', () => {
      fail(uupper, '¼', { expected: 'an uppercase letter', actual: '"¼"' })
      fail(uupper, '፬', { expected: 'an uppercase letter', actual: '"፬"' })
      fail(uupper, '⁴', { expected: 'an uppercase letter', actual: '"⁴"' })
      fail(uupper, '₄', { expected: 'an uppercase letter', actual: '"₄"' })
      fail(uupper, '④', { expected: 'an uppercase letter', actual: '"④"' })
      fail(uupper, '❹', { expected: 'an uppercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(uupper, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(uupper, '\t', { expected: 'an uppercase letter', actual: '"\t"' })
      fail(uupper, '\n', { expected: 'an uppercase letter', actual: '"\n"' })
      fail(uupper, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(uupper, '\u2003',
        { expected: 'an uppercase letter', actual: '"\u2003"' })
      fail(uupper, '\u202f',
        { expected: 'an uppercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(uupper, '(', { expected: 'an uppercase letter', actual: '"("' })
      fail(uupper, '｢', { expected: 'an uppercase letter', actual: '"｢"' })
      fail(uupper, ')', { expected: 'an uppercase letter', actual: '")"' })
      fail(uupper, '｣', { expected: 'an uppercase letter', actual: '"｣"' })
      fail(uupper, '!', { expected: 'an uppercase letter', actual: '"!"' })
      fail(uupper, '፣', { expected: 'an uppercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(uupper, '$', { expected: 'an uppercase letter', actual: '"$"' })
      fail(uupper, '₯', { expected: 'an uppercase letter', actual: '"₯"' })
      fail(uupper, '+', { expected: 'an uppercase letter', actual: '"+"' })
      fail(uupper, '⫇', { expected: 'an uppercase letter', actual: '"⫇"' })
      fail(uupper, '©', { expected: 'an uppercase letter', actual: '"©"' })
      fail(uupper, '🀄', { expected: 'an uppercase letter', actual: '"🀄"' })
    })
  })

  describe('ulower', () => {
    it('fails on uppercase letters', () => {
      fail(ulower, 'A', { expected: 'a lowercase letter', actual: '"A"' })
      fail(ulower, 'Ž', { expected: 'a lowercase letter', actual: '"Ž"' })
      fail(ulower, 'Γ', { expected: 'a lowercase letter', actual: '"Γ"' })
      fail(ulower, 'Л', { expected: 'a lowercase letter', actual: '"Л"' })
      fail(ulower, 'Յ', { expected: 'a lowercase letter', actual: '"Յ"' })
      fail(ulower, 'Ⴄ', { expected: 'a lowercase letter', actual: '"Ⴄ"' })
      fail(ulower, 'Ꮅ', { expected: 'a lowercase letter', actual: '"Ꮅ"' })
      fail(ulower, 'Ⰽ', { expected: 'a lowercase letter', actual: '"Ⰽ"' })
    })
    it('fails on titlecase letters', () => {
      fail(ulower, 'ǅ', { expected: 'a lowercase letter', actual: '"ǅ"' })
      fail(ulower, 'ǋ', { expected: 'a lowercase letter', actual: '"ǋ"' })
      fail(ulower, 'ῼ', { expected: 'a lowercase letter', actual: '"ῼ"' })
    })
    it('succeeds on a single lowercase letter', () => {
      pass(ulower, 'a', 'a') // LATIN SMALL LETTER A
      pass(ulower, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(ulower, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(ulower, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(ulower, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(ulower, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(ulower, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(ulower, '4', { expected: 'a lowercase letter', actual: '"4"' })
      fail(ulower, '۴', { expected: 'a lowercase letter', actual: '"۴"' })
      fail(ulower, '४', { expected: 'a lowercase letter', actual: '"४"' })
      fail(ulower, '৪', { expected: 'a lowercase letter', actual: '"৪"' })
      fail(ulower, '๔', { expected: 'a lowercase letter', actual: '"๔"' })
      fail(ulower, '᠔', { expected: 'a lowercase letter', actual: '"᠔"' })
      fail(ulower, '𝟜', { expected: 'a lowercase letter', actual: '"𝟜"' })
    })
    it('fails on uppercase letter numbers', () => {
      fail(ulower, 'Ⅳ', { expected: 'a lowercase letter', actual: '"Ⅳ"' })
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(ulower, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(ulower, '¼', { expected: 'a lowercase letter', actual: '"¼"' })
      fail(ulower, '፬', { expected: 'a lowercase letter', actual: '"፬"' })
      fail(ulower, '⁴', { expected: 'a lowercase letter', actual: '"⁴"' })
      fail(ulower, '₄', { expected: 'a lowercase letter', actual: '"₄"' })
      fail(ulower, '④', { expected: 'a lowercase letter', actual: '"④"' })
      fail(ulower, '❹', { expected: 'a lowercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(ulower, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(ulower, '\t', { expected: 'a lowercase letter', actual: '"\t"' })
      fail(ulower, '\n', { expected: 'a lowercase letter', actual: '"\n"' })
      fail(ulower, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(ulower, '\u2003',
        { expected: 'a lowercase letter', actual: '"\u2003"' })
      fail(ulower, '\u202f',
        { expected: 'a lowercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(ulower, '(', { expected: 'a lowercase letter', actual: '"("' })
      fail(ulower, '｢', { expected: 'a lowercase letter', actual: '"｢"' })
      fail(ulower, ')', { expected: 'a lowercase letter', actual: '")"' })
      fail(ulower, '｣', { expected: 'a lowercase letter', actual: '"｣"' })
      fail(ulower, '!', { expected: 'a lowercase letter', actual: '"!"' })
      fail(ulower, '፣', { expected: 'a lowercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(ulower, '$', { expected: 'a lowercase letter', actual: '"$"' })
      fail(ulower, '₯', { expected: 'a lowercase letter', actual: '"₯"' })
      fail(ulower, '+', { expected: 'a lowercase letter', actual: '"+"' })
      fail(ulower, '⫇', { expected: 'a lowercase letter', actual: '"⫇"' })
      fail(ulower, '©', { expected: 'a lowercase letter', actual: '"©"' })
      fail(ulower, '🀄', { expected: 'a lowercase letter', actual: '"🀄"' })
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

  describe('uspace', () => {
    it('succeeds on a single instance of Unicode whitespace', () => {
      pass(uspace, '\t', '\t')
      pass(uspace, '\n', '\n')
      pass(uspace, '\v', '\v')
      pass(uspace, '\f', '\f')
      pass(uspace, '\r', '\r')
      pass(uspace, '\r\n', '\r\n')
      pass(uspace, ' ', ' ')
      pass(uspace, '\u0085', '\u0085')
      pass(uspace, '\u00a0', '\u00a0')
      pass(uspace, '\u1680', '\u1680')
      pass(uspace, '\u2000', '\u2000')
      pass(uspace, '\u2001', '\u2001')
      pass(uspace, '\u2002', '\u2002')
      pass(uspace, '\u2003', '\u2003')
      pass(uspace, '\u2004', '\u2004')
      pass(uspace, '\u2005', '\u2005')
      pass(uspace, '\u2006', '\u2006')
      pass(uspace, '\u2007', '\u2007')
      pass(uspace, '\u2008', '\u2008')
      pass(uspace, '\u2009', '\u2009')
      pass(uspace, '\u200a', '\u200a')
      pass(uspace, '\u2028', '\u2028')
      pass(uspace, '\u2029', '\u2029')
      pass(uspace, '\u202f', '\u202f')
      pass(uspace, '\u205f', '\u205f')
      pass(uspace, '\u3000', '\u3000')
    })
    it('succeeds only once', () => {
      pass(uspace, '     123', ' ')
      pass(uspace, '\u3000\u1680\u202f', '\u3000')
    })
    it('fails on non-whitespace characters', () => {
      fail(uspace, 'O', { expected: 'whitespace', actual: '"O"' })
      fail(uspace, 'З', { expected: 'whitespace', actual: '"З"' })
      fail(uspace, 'ค', { expected: 'whitespace', actual: '"ค"' })
      fail(uspace, '𝑂', { expected: 'whitespace', actual: '"𝑂"' })
      fail(uspace, '\u180e', { expected: 'whitespace', actual: '"\u180e"' })
      fail(uspace, '\u200b', { expected: 'whitespace', actual: '"\u200b"' })
      fail(uspace, '\u200c', { expected: 'whitespace', actual: '"\u200c"' })
      fail(uspace, '\u200d', { expected: 'whitespace', actual: '"\u200d"' })
      fail(uspace, '\u2060', { expected: 'whitespace', actual: '"\u2060"' })
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

  describe('uspaces', () => {
    it('succeeds even if no whitespace is found', () => {
      pass(uspaces, '', { result: null, index: 0 })
      pass(uspaces, 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(uspaces, '\t\t\tabc', { result: null, index: 3 })
      pass(uspaces, '\n\nabc', { result: null, index: 2 })
      pass(uspaces, '\vabc', { result: null, index: 1 })
      pass(uspaces, '\f\f\f\fabc', { result: null, index: 4 })
      pass(uspaces, '\r\rabc', { result: null, index: 2 })
      pass(uspaces, ' abc', { result: null, index: 1 })
      pass(uspaces, '\u0085abc', { result: null, index: 2 })
      pass(uspaces, '\u00a0abc', { result: null, index: 2 })
      pass(uspaces, '\u1680abc', { result: null, index: 3 })
      pass(uspaces, '\u2000abc', { result: null, index: 3 })
      pass(uspaces, '\u2001abc', { result: null, index: 3 })
      pass(uspaces, '\u2002abc', { result: null, index: 3 })
      pass(uspaces, '\u2003abc', { result: null, index: 3 })
      pass(uspaces, '\u2004abc', { result: null, index: 3 })
      pass(uspaces, '\u2005abc', { result: null, index: 3 })
      pass(uspaces, '\u2006abc', { result: null, index: 3 })
      pass(uspaces, '\u2007abc', { result: null, index: 3 })
      pass(uspaces, '\u2008abc', { result: null, index: 3 })
      pass(uspaces, '\u2009abc', { result: null, index: 3 })
      pass(uspaces, '\u200aabc', { result: null, index: 3 })
      pass(uspaces, '\u2028abc', { result: null, index: 3 })
      pass(uspaces, '\u2029abc', { result: null, index: 3 })
      pass(uspaces, '\u202fabc', { result: null, index: 3 })
      pass(uspaces, '\u205fabc', { result: null, index: 3 })
      pass(uspaces, '\u3000abc', { result: null, index: 3 })
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

  describe('uspaces1', () => {
    it('fails if no whitespace is found', () => {
      fail(uspaces1, '', { expected: 'whitespace', actual: 'EOF' })
      fail(uspaces1, 'abc', { expected: 'whitespace', actual: '"a"' })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      pass(uspaces1, '\t\t\tabc', { result: null, index: 3 })
      pass(uspaces1, '\n\nabc', { result: null, index: 2 })
      pass(uspaces1, '\vabc', { result: null, index: 1 })
      pass(uspaces1, '\f\f\f\fabc', { result: null, index: 4 })
      pass(uspaces1, '\r\rabc', { result: null, index: 2 })
      pass(uspaces1, ' abc', { result: null, index: 1 })
      pass(uspaces1, '\u0085abc', { result: null, index: 2 })
      pass(uspaces1, '\u00a0abc', { result: null, index: 2 })
      pass(uspaces1, '\u1680abc', { result: null, index: 3 })
      pass(uspaces1, '\u2000abc', { result: null, index: 3 })
      pass(uspaces1, '\u2001abc', { result: null, index: 3 })
      pass(uspaces1, '\u2002abc', { result: null, index: 3 })
      pass(uspaces1, '\u2003abc', { result: null, index: 3 })
      pass(uspaces1, '\u2004abc', { result: null, index: 3 })
      pass(uspaces1, '\u2005abc', { result: null, index: 3 })
      pass(uspaces1, '\u2006abc', { result: null, index: 3 })
      pass(uspaces1, '\u2007abc', { result: null, index: 3 })
      pass(uspaces1, '\u2008abc', { result: null, index: 3 })
      pass(uspaces1, '\u2009abc', { result: null, index: 3 })
      pass(uspaces1, '\u200aabc', { result: null, index: 3 })
      pass(uspaces1, '\u2028abc', { result: null, index: 3 })
      pass(uspaces1, '\u2029abc', { result: null, index: 3 })
      pass(uspaces1, '\u202fabc', { result: null, index: 3 })
      pass(uspaces1, '\u205fabc', { result: null, index: 3 })
      pass(uspaces1, '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('unewline', () => {
    it('succeeds on a single Unicode newline', () => {
      pass(unewline, '\nabc', '\n')
      pass(unewline, '\rabc', '\r')
      pass(unewline, '\r\nabc', '\r\n')
      pass(unewline, '\u0085abc', '\u0085')
      pass(unewline, '\u2028abc', '\u2028')
      pass(unewline, '\u2029abc', '\u2029')
    })
    it('fails on any other character combination', () => {
      fail(unewline, 'Onoma', { expected: 'a newline', actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(unewline, '', { expected: 'a newline', actual: 'EOF' })
    })
  })
})
