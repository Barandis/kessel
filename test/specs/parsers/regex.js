// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alphanum,
  letter,
  lower,
  unewline,
  regex,
  uspace,
  upper,
  uspaces,
  uspaces1,
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

  describe('letter', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(letter, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(letter, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(letter, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(letter, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(letter, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(letter, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(letter, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(letter, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(letter, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(letter, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(letter, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(letter, 'a', 'a') // LATIN SMALL LETTER A
      pass(letter, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(letter, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(letter, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(letter, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(letter, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(letter, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(letter, '4', { expected: 'a letter', actual: '"4"' })
      fail(letter, '۴', { expected: 'a letter', actual: '"۴"' })
      fail(letter, '४', { expected: 'a letter', actual: '"४"' })
      fail(letter, '৪', { expected: 'a letter', actual: '"৪"' })
      fail(letter, '๔', { expected: 'a letter', actual: '"๔"' })
      fail(letter, '᠔', { expected: 'a letter', actual: '"᠔"' })
      fail(letter, '𝟜', { expected: 'a letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(letter, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(letter, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(letter, '¼', { expected: 'a letter', actual: '"¼"' })
      fail(letter, '፬', { expected: 'a letter', actual: '"፬"' })
      fail(letter, '⁴', { expected: 'a letter', actual: '"⁴"' })
      fail(letter, '₄', { expected: 'a letter', actual: '"₄"' })
      fail(letter, '④', { expected: 'a letter', actual: '"④"' })
      fail(letter, '❹', { expected: 'a letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(letter, ' ', { expected: 'a letter', actual: '" "' })
      fail(letter, '\t', { expected: 'a letter', actual: '"\t"' })
      fail(letter, '\n', { expected: 'a letter', actual: '"\n"' })
      fail(letter, ' ', { expected: 'a letter', actual: '" "' })
      fail(letter, '\u2003', { expected: 'a letter', actual: '"\u2003"' })
      fail(letter, '\u202f', { expected: 'a letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(letter, '(', { expected: 'a letter', actual: '"("' })
      fail(letter, '｢', { expected: 'a letter', actual: '"｢"' })
      fail(letter, ')', { expected: 'a letter', actual: '")"' })
      fail(letter, '｣', { expected: 'a letter', actual: '"｣"' })
      fail(letter, '!', { expected: 'a letter', actual: '"!"' })
      fail(letter, '፣', { expected: 'a letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(letter, '$', { expected: 'a letter', actual: '"$"' })
      fail(letter, '₯', { expected: 'a letter', actual: '"₯"' })
      fail(letter, '+', { expected: 'a letter', actual: '"+"' })
      fail(letter, '⫇', { expected: 'a letter', actual: '"⫇"' })
      fail(letter, '©', { expected: 'a letter', actual: '"©"' })
      fail(letter, '🀄', { expected: 'a letter', actual: '"🀄"' })
    })
  })

  describe('alphanum', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(alphanum, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(alphanum, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(alphanum, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(alphanum, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(alphanum, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(alphanum, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(alphanum, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(alphanum, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(alphanum, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(alphanum, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(alphanum, 'ῼ', 'ῼ')
    })
    it('succeeds on a single lowercase letter', () => {
      pass(alphanum, 'a', 'a') // LATIN SMALL LETTER A
      pass(alphanum, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(alphanum, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(alphanum, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(alphanum, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(alphanum, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(alphanum, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('succeeds on a single decimal digit', () => {
      pass(alphanum, '4', '4') // DIGIT FOUR
      pass(alphanum, '۴', '۴') // ARABIC-INDIC DIGIT FOUR
      pass(alphanum, '४', '४') // DEVANAGARI DIGIT FOUR
      pass(alphanum, '৪', '৪') // BENGALI DIGIT FOUR
      pass(alphanum, '๔', '๔') // THAI DIGIT FOUR
      pass(alphanum, '᠔', '᠔') // MONGOLIAN DIGIT FOUR
      pass(alphanum, '𝟜', '𝟜') // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(alphanum, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(alphanum, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('succeeds on a single other number', () => {
      pass(alphanum, '¼', '¼') // VULGAR FRACTION ONE QUARTER
      pass(alphanum, '፬', '፬') // ETHIOPIC DIGIT FOUR
      pass(alphanum, '⁴', '⁴') // SUPERSCRIPT FOUR
      pass(alphanum, '₄', '₄') // SUBSCRIPT FOUR
      pass(alphanum, '④', '④') // CIRCLED DIGIT FOUR
      pass(alphanum, '❹', '❹') // DINGBAT NEGATIVE CIRCLED DIGIT FOUR
    })
    it('fails on whitespace', () => {
      fail(alphanum, ' ', { expected: 'an alphanumeric', actual: '" "' })
      fail(alphanum, '\t', { expected: 'an alphanumeric', actual: '"\t"' })
      fail(alphanum, '\n', { expected: 'an alphanumeric', actual: '"\n"' })
      fail(alphanum, ' ', { expected: 'an alphanumeric', actual: '" "' })
      fail(alphanum, '\u2003', {
        expected: 'an alphanumeric',
        actual: '"\u2003"',
      })
      fail(alphanum, '\u202f', {
        expected: 'an alphanumeric',
        actual: '"\u202f"',
      })
    })
    it('fails on punctuation', () => {
      fail(alphanum, '(', { expected: 'an alphanumeric', actual: '"("' })
      fail(alphanum, '｢', { expected: 'an alphanumeric', actual: '"｢"' })
      fail(alphanum, ')', { expected: 'an alphanumeric', actual: '")"' })
      fail(alphanum, '｣', { expected: 'an alphanumeric', actual: '"｣"' })
      fail(alphanum, '!', { expected: 'an alphanumeric', actual: '"!"' })
      fail(alphanum, '፣', { expected: 'an alphanumeric', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(alphanum, '$', { expected: 'an alphanumeric', actual: '"$"' })
      fail(alphanum, '₯', { expected: 'an alphanumeric', actual: '"₯"' })
      fail(alphanum, '+', { expected: 'an alphanumeric', actual: '"+"' })
      fail(alphanum, '⫇', { expected: 'an alphanumeric', actual: '"⫇"' })
      fail(alphanum, '©', { expected: 'an alphanumeric', actual: '"©"' })
      fail(alphanum, '🀄', { expected: 'an alphanumeric', actual: '"🀄"' })
    })
  })

  describe('upper', () => {
    it('succeeds on a single uppercase letter', () => {
      pass(upper, 'A', 'A') // LATIN CAPITAL LETTER A
      pass(upper, 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      pass(upper, 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      pass(upper, 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      pass(upper, 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      pass(upper, 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      pass(upper, 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      pass(upper, 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      pass(upper, 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      pass(upper, 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      pass(upper, 'ῼ', 'ῼ')
    })
    it('fails on lowercase letters', () => {
      fail(upper, 'a', { expected: 'an uppercase letter', actual: '"a"' })
      fail(upper, 'ž', { expected: 'an uppercase letter', actual: '"ž"' })
      fail(upper, 'γ', { expected: 'an uppercase letter', actual: '"γ"' })
      fail(upper, 'л', { expected: 'an uppercase letter', actual: '"л"' })
      fail(upper, 'յ', { expected: 'an uppercase letter', actual: '"յ"' })
      fail(upper, 'ე', { expected: 'an uppercase letter', actual: '"ე"' })
      fail(upper, 'ⰽ', { expected: 'an uppercase letter', actual: '"ⰽ"' })
    })
    it('fails on decimal digits', () => {
      fail(upper, '4', { expected: 'an uppercase letter', actual: '"4"' })
      fail(upper, '۴', { expected: 'an uppercase letter', actual: '"۴"' })
      fail(upper, '४', { expected: 'an uppercase letter', actual: '"४"' })
      fail(upper, '৪', { expected: 'an uppercase letter', actual: '"৪"' })
      fail(upper, '๔', { expected: 'an uppercase letter', actual: '"๔"' })
      fail(upper, '᠔', { expected: 'an uppercase letter', actual: '"᠔"' })
      fail(upper, '𝟜', { expected: 'an uppercase letter', actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(upper, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('fails on lowercase letter numbers', () => {
      fail(upper, 'ⅳ', { expected: 'an uppercase letter', actual: '"ⅳ"' })
    })
    it('fails on other numbers', () => {
      fail(upper, '¼', { expected: 'an uppercase letter', actual: '"¼"' })
      fail(upper, '፬', { expected: 'an uppercase letter', actual: '"፬"' })
      fail(upper, '⁴', { expected: 'an uppercase letter', actual: '"⁴"' })
      fail(upper, '₄', { expected: 'an uppercase letter', actual: '"₄"' })
      fail(upper, '④', { expected: 'an uppercase letter', actual: '"④"' })
      fail(upper, '❹', { expected: 'an uppercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(upper, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(upper, '\t', { expected: 'an uppercase letter', actual: '"\t"' })
      fail(upper, '\n', { expected: 'an uppercase letter', actual: '"\n"' })
      fail(upper, ' ', { expected: 'an uppercase letter', actual: '" "' })
      fail(upper, '\u2003',
        { expected: 'an uppercase letter', actual: '"\u2003"' })
      fail(upper, '\u202f',
        { expected: 'an uppercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(upper, '(', { expected: 'an uppercase letter', actual: '"("' })
      fail(upper, '｢', { expected: 'an uppercase letter', actual: '"｢"' })
      fail(upper, ')', { expected: 'an uppercase letter', actual: '")"' })
      fail(upper, '｣', { expected: 'an uppercase letter', actual: '"｣"' })
      fail(upper, '!', { expected: 'an uppercase letter', actual: '"!"' })
      fail(upper, '፣', { expected: 'an uppercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(upper, '$', { expected: 'an uppercase letter', actual: '"$"' })
      fail(upper, '₯', { expected: 'an uppercase letter', actual: '"₯"' })
      fail(upper, '+', { expected: 'an uppercase letter', actual: '"+"' })
      fail(upper, '⫇', { expected: 'an uppercase letter', actual: '"⫇"' })
      fail(upper, '©', { expected: 'an uppercase letter', actual: '"©"' })
      fail(upper, '🀄', { expected: 'an uppercase letter', actual: '"🀄"' })
    })
  })

  describe('lower', () => {
    it('fails on uppercase letters', () => {
      fail(lower, 'A', { expected: 'a lowercase letter', actual: '"A"' })
      fail(lower, 'Ž', { expected: 'a lowercase letter', actual: '"Ž"' })
      fail(lower, 'Γ', { expected: 'a lowercase letter', actual: '"Γ"' })
      fail(lower, 'Л', { expected: 'a lowercase letter', actual: '"Л"' })
      fail(lower, 'Յ', { expected: 'a lowercase letter', actual: '"Յ"' })
      fail(lower, 'Ⴄ', { expected: 'a lowercase letter', actual: '"Ⴄ"' })
      fail(lower, 'Ꮅ', { expected: 'a lowercase letter', actual: '"Ꮅ"' })
      fail(lower, 'Ⰽ', { expected: 'a lowercase letter', actual: '"Ⰽ"' })
    })
    it('fails on titlecase letters', () => {
      fail(lower, 'ǅ', { expected: 'a lowercase letter', actual: '"ǅ"' })
      fail(lower, 'ǋ', { expected: 'a lowercase letter', actual: '"ǋ"' })
      fail(lower, 'ῼ', { expected: 'a lowercase letter', actual: '"ῼ"' })
    })
    it('succeeds on a single lowercase letter', () => {
      pass(lower, 'a', 'a') // LATIN SMALL LETTER A
      pass(lower, 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      pass(lower, 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      pass(lower, 'л', 'л') // CYRILLIC SMALL LETTER EL
      pass(lower, 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      pass(lower, 'ე', 'ე') // GEORGIAN LETTER EN
      pass(lower, 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
    })
    it('fails on decimal digits', () => {
      fail(lower, '4', { expected: 'a lowercase letter', actual: '"4"' })
      fail(lower, '۴', { expected: 'a lowercase letter', actual: '"۴"' })
      fail(lower, '४', { expected: 'a lowercase letter', actual: '"४"' })
      fail(lower, '৪', { expected: 'a lowercase letter', actual: '"৪"' })
      fail(lower, '๔', { expected: 'a lowercase letter', actual: '"๔"' })
      fail(lower, '᠔', { expected: 'a lowercase letter', actual: '"᠔"' })
      fail(lower, '𝟜', { expected: 'a lowercase letter', actual: '"𝟜"' })
    })
    it('fails on uppercase letter numbers', () => {
      fail(lower, 'Ⅳ', { expected: 'a lowercase letter', actual: '"Ⅳ"' })
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(lower, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(lower, '¼', { expected: 'a lowercase letter', actual: '"¼"' })
      fail(lower, '፬', { expected: 'a lowercase letter', actual: '"፬"' })
      fail(lower, '⁴', { expected: 'a lowercase letter', actual: '"⁴"' })
      fail(lower, '₄', { expected: 'a lowercase letter', actual: '"₄"' })
      fail(lower, '④', { expected: 'a lowercase letter', actual: '"④"' })
      fail(lower, '❹', { expected: 'a lowercase letter', actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(lower, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(lower, '\t', { expected: 'a lowercase letter', actual: '"\t"' })
      fail(lower, '\n', { expected: 'a lowercase letter', actual: '"\n"' })
      fail(lower, ' ', { expected: 'a lowercase letter', actual: '" "' })
      fail(lower, '\u2003',
        { expected: 'a lowercase letter', actual: '"\u2003"' })
      fail(lower, '\u202f',
        { expected: 'a lowercase letter', actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(lower, '(', { expected: 'a lowercase letter', actual: '"("' })
      fail(lower, '｢', { expected: 'a lowercase letter', actual: '"｢"' })
      fail(lower, ')', { expected: 'a lowercase letter', actual: '")"' })
      fail(lower, '｣', { expected: 'a lowercase letter', actual: '"｣"' })
      fail(lower, '!', { expected: 'a lowercase letter', actual: '"!"' })
      fail(lower, '፣', { expected: 'a lowercase letter', actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(lower, '$', { expected: 'a lowercase letter', actual: '"$"' })
      fail(lower, '₯', { expected: 'a lowercase letter', actual: '"₯"' })
      fail(lower, '+', { expected: 'a lowercase letter', actual: '"+"' })
      fail(lower, '⫇', { expected: 'a lowercase letter', actual: '"⫇"' })
      fail(lower, '©', { expected: 'a lowercase letter', actual: '"©"' })
      fail(lower, '🀄', { expected: 'a lowercase letter', actual: '"🀄"' })
    })
  })

  describe('uspace', () => {
    it('succeeds on a single character of Unicode whitespace', () => {
      pass(uspace, '\t', '\t')
      pass(uspace, '\n', '\n')
      pass(uspace, '\v', '\v')
      pass(uspace, '\f', '\f')
      pass(uspace, '\r', '\r')
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
      pass(uspace, '\r\nabc', '\r')
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
