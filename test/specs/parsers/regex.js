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
  ualpha,
  uletter,
  ulower,
  unewline,
  uspace,
  uspaces1,
  uspaces,
  uupper,
} from 'kessel/parsers/regex'
import { terror, tfail, tpass } from 'test/helper'

describe('Regular expression parsers', () => {
  describe('regex', () => {
    it('throws if argument is not a string or regex', () => {
      terror(
        regex(0),
        '',
        '[regex]: expected argument to be a string or a regular expression; '
          + 'found 0',
      )
      terror(
        regex(0, 'test'),
        '',
        '[regex]: expected first argument to be a string or a regular '
          + 'expression; found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        regex(/abc/, 0),
        '',
        '[regex]: expected second argument to be a string; found 0',
      )
    })
    it('accepts a string as input', () => {
      tpass(regex('^\\w{3}'), 'Onomatopoeia', 'Ono')
      tpass(regex('^\\w{3}', 'test'), 'Onomatopoeia', 'Ono')
    })
    it('accepts a regular expression as input', () => {
      tpass(regex(/^\w{3}/i), 'onomatopoeia', 'ono')
      tpass(regex(/^\w{3}/i, 'test'), 'onomatopoeia', 'ono')
    })
    it('is anchored even if an anchor is not in the regex', () => {
      tfail(regex(/poe/), 'Onomatopoeia', 'a string matching /^poe/')
      tfail(regex(/poe/, 'test'), 'Onomatopoeia', 'test')
    })
    it('fails at EOF', () => {
      tfail(regex(/^./), '', 'a string matching /^./')
      tfail(regex(/^./, 'test'), '', 'test')
    })
    it('succeeds at EOF if the match can be zero-length', () => {
      tpass(regex(/^.*/), '', '')
      tpass(regex(/^.*/, 'test'), '', '')
    })
    it('matches 1-byte characters', () => {
      tpass(regex(/^Onoma/), 'Onomatopoeia', 'Onoma')
      tpass(regex(/^.{5}/), 'Onomatopoeia', 'Onoma')
      tpass(regex(/^.{5}/, 'test'), 'Onomatopoeia', 'Onoma')
      tfail(regex(/^\d/), 'Onomatopoeia', 'a string matching /^\\d/')
      tfail(regex(/^\d/, 'test'), 'Onomatopoeia', 'test')
    })
    it('matches 2-byte characters', () => {
      tpass(regex(/^Звуко/), 'Звукоподражание', 'Звуко')
      tpass(regex(/^.{5}/), 'Звукоподражание', 'Звуко')
      tpass(regex(/^.{5}/, 'test'), 'Звукоподражание', 'Звуко')
      tfail(regex(/^\d/), 'Звукоподражание', 'a string matching /^\\d/')
      tfail(regex(/^\d/, 'test'), 'Звукоподражание', 'test')
    })
    it('matches 3-byte characters (with the u flag)', () => {
      tpass(regex(/^คำเลี/u), 'คำเลียนเสียง', 'คำเลี')
      tpass(regex(/^.{5}/u), 'คำเลียนเสียง', 'คำเลี')
      tpass(regex(/^.{5}/u, 'test'), 'คำเลียนเสียง', 'คำเลี')
      tfail(regex(/^\d/u), 'คำเลียนเสียง', 'a string matching /^\\d/u')
      tfail(regex(/^\d/u, 'test'), 'คำเลียนเสียง', 'test')
    })
    it('matches 4-byte characters (with the u flag)', () => {
      tpass(regex(/^𝑂𝑛𝑜𝑚𝑎/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      tpass(regex(/^.{5}/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      tpass(regex(/^.{5}/u, 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      tfail(regex(/^\d/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'a string matching /^\\d/u')
      tfail(regex(/^\d/u, 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'test')
    })
  })

  describe('uletter', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        uletter(0),
        '',
        '[uletter]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(uletter(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(uletter(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(uletter(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(uletter(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(uletter(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(uletter(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(uletter(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(uletter(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(uletter('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(uletter(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(uletter(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(uletter(), 'ῼ', 'ῼ')
      tpass(uletter('test'), 'ǅ', 'ǅ')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(uletter(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(uletter(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(uletter(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(uletter(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(uletter(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(uletter(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(uletter(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(uletter('test'), 'a', 'a')
    })
    it('fails on decimal digits', () => {
      tfail(uletter(), '4', 'a Unicode letter')
      tfail(uletter(), '۴', 'a Unicode letter')
      tfail(uletter(), '४', 'a Unicode letter')
      tfail(uletter(), '৪', 'a Unicode letter')
      tfail(uletter(), '๔', 'a Unicode letter')
      tfail(uletter(), '᠔', 'a Unicode letter')
      tfail(uletter(), '𝟜', 'a Unicode letter')
      tfail(uletter('test'), '4', 'test')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(uletter(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(uletter('test'), 'Ⅳ', 'Ⅳ')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(uletter(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(uletter('test'), 'ⅳ', 'ⅳ')
    })
    it('fails on other numbers', () => {
      tfail(uletter(), '¼', 'a Unicode letter')
      tfail(uletter(), '፬', 'a Unicode letter')
      tfail(uletter(), '⁴', 'a Unicode letter')
      tfail(uletter(), '₄', 'a Unicode letter')
      tfail(uletter(), '④', 'a Unicode letter')
      tfail(uletter(), '❹', 'a Unicode letter')
      tfail(uletter('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(uletter(), ' ', 'a Unicode letter')
      tfail(uletter(), '\t', 'a Unicode letter')
      tfail(uletter(), '\n', 'a Unicode letter')
      tfail(uletter(), ' ', 'a Unicode letter')
      tfail(uletter(), '\u2003', 'a Unicode letter')
      tfail(uletter(), '\u202f', 'a Unicode letter')
      tfail(uletter('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(uletter(), '(', 'a Unicode letter')
      tfail(uletter(), '｢', 'a Unicode letter')
      tfail(uletter(), ')', 'a Unicode letter')
      tfail(uletter(), '｣', 'a Unicode letter')
      tfail(uletter(), '!', 'a Unicode letter')
      tfail(uletter(), '፣', 'a Unicode letter')
      tfail(uletter('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(uletter(), '$', 'a Unicode letter')
      tfail(uletter(), '₯', 'a Unicode letter')
      tfail(uletter(), '+', 'a Unicode letter')
      tfail(uletter(), '⫇', 'a Unicode letter')
      tfail(uletter(), '©', 'a Unicode letter')
      tfail(uletter(), '🀄', 'a Unicode letter')
      tfail(uletter('test'), '$', 'test')
    })
    it('fails at EOF', () => {
      tfail(uletter(), '', 'a Unicode letter')
      tfail(uletter('test'), '', 'test')
    })
  })

  describe('ualpha', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        ualpha(0),
        '',
        '[ualpha]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(ualpha(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(ualpha(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(ualpha(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(ualpha(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(ualpha(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(ualpha(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(ualpha(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(ualpha(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(ualpha('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(ualpha(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(ualpha(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(ualpha(), 'ῼ', 'ῼ')
      tpass(ualpha('test'), 'ǅ', 'ǅ')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(ualpha(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(ualpha(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(ualpha(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(ualpha(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(ualpha(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(ualpha(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(ualpha(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(ualpha('test'), 'a', 'a')
    })
    it('succeeds on a single decimal digit', () => {
      tpass(ualpha(), '4', '4') // DIGIT FOUR
      tpass(ualpha(), '۴', '۴') // ARABIC-INDIC DIGIT FOUR
      tpass(ualpha(), '४', '४') // DEVANAGARI DIGIT FOUR
      tpass(ualpha(), '৪', '৪') // BENGALI DIGIT FOUR
      tpass(ualpha(), '๔', '๔') // THAI DIGIT FOUR
      tpass(ualpha(), '᠔', '᠔') // MONGOLIAN DIGIT FOUR
      tpass(ualpha(), '𝟜', '𝟜') // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
      tpass(ualpha('test'), '4', '4')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(ualpha(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(ualpha('test'), 'Ⅳ', 'Ⅳ')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(ualpha(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(ualpha('test'), 'ⅳ', 'ⅳ')
    })
    it('succeeds on a single other number', () => {
      tpass(ualpha(), '¼', '¼') // VULGAR FRACTION ONE QUARTER
      tpass(ualpha(), '፬', '፬') // ETHIOPIC DIGIT FOUR
      tpass(ualpha(), '⁴', '⁴') // SUPERSCRIPT FOUR
      tpass(ualpha(), '₄', '₄') // SUBSCRIPT FOUR
      tpass(ualpha(), '④', '④') // CIRCLED DIGIT FOUR
      tpass(ualpha(), '❹', '❹') // DINGBAT NEGATIVE CIRCLED DIGIT FOUR
      tpass(ualpha('test'), '¼', '¼')
    })
    it('fails on whitespace', () => {
      tfail(ualpha(), ' ', 'a Unicode alphanumeric character')
      tfail(ualpha(), '\t', 'a Unicode alphanumeric character')
      tfail(ualpha(), '\n', 'a Unicode alphanumeric character')
      tfail(ualpha(), ' ', 'a Unicode alphanumeric character')
      tfail(ualpha(), '\u2003', 'a Unicode alphanumeric character')
      tfail(ualpha(), '\u202f', 'a Unicode alphanumeric character')
      tfail(ualpha('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(ualpha(), '(', 'a Unicode alphanumeric character')
      tfail(ualpha(), '｢', 'a Unicode alphanumeric character')
      tfail(ualpha(), ')', 'a Unicode alphanumeric character')
      tfail(ualpha(), '｣', 'a Unicode alphanumeric character')
      tfail(ualpha(), '!', 'a Unicode alphanumeric character')
      tfail(ualpha(), '፣', 'a Unicode alphanumeric character')
      tfail(ualpha('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(ualpha(), '$', 'a Unicode alphanumeric character')
      tfail(ualpha(), '₯', 'a Unicode alphanumeric character')
      tfail(ualpha(), '+', 'a Unicode alphanumeric character')
      tfail(ualpha(), '⫇', 'a Unicode alphanumeric character')
      tfail(ualpha(), '©', 'a Unicode alphanumeric character')
      tfail(ualpha(), '🀄', 'a Unicode alphanumeric character')
      tfail(ualpha('test'), '$', 'test')
    })
    it('fails at EOF', () => {
      tfail(ualpha(), '', 'a Unicode alphanumeric character')
      tfail(ualpha('test'), '', 'test')
    })
  })

  describe('uupper', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        uupper(0),
        '',
        '[uupper]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(uupper(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(uupper(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(uupper(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(uupper(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(uupper(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(uupper(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(uupper(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(uupper(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(uupper('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(uupper(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(uupper(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(uupper(), 'ῼ', 'ῼ')
      tpass(uupper('test'), 'ǅ', 'ǅ')
    })
    it('fails on lowercase letters', () => {
      tfail(uupper(), 'a', 'a Unicode uppercase letter')
      tfail(uupper(), 'ž', 'a Unicode uppercase letter')
      tfail(uupper(), 'γ', 'a Unicode uppercase letter')
      tfail(uupper(), 'л', 'a Unicode uppercase letter')
      tfail(uupper(), 'յ', 'a Unicode uppercase letter')
      tfail(uupper(), 'ე', 'a Unicode uppercase letter')
      tfail(uupper(), 'ⰽ', 'a Unicode uppercase letter')
      tfail(uupper('test'), 'a', 'test')
    })
    it('fails on decimal digits', () => {
      tfail(uupper(), '4', 'a Unicode uppercase letter')
      tfail(uupper(), '۴', 'a Unicode uppercase letter')
      tfail(uupper(), '४', 'a Unicode uppercase letter')
      tfail(uupper(), '৪', 'a Unicode uppercase letter')
      tfail(uupper(), '๔', 'a Unicode uppercase letter')
      tfail(uupper(), '᠔', 'a Unicode uppercase letter')
      tfail(uupper(), '𝟜', 'a Unicode uppercase letter')
      tfail(uupper('test'), '4', 'test')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(uupper(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(uupper('test'), 'Ⅳ', 'Ⅳ')
    })
    it('fails on lowercase letter numbers', () => {
      tfail(uupper(), 'ⅳ', 'a Unicode uppercase letter')
      tfail(uupper('test'), 'ⅳ', 'test')
    })
    it('fails on other numbers', () => {
      tfail(uupper(), '¼', 'a Unicode uppercase letter')
      tfail(uupper(), '፬', 'a Unicode uppercase letter')
      tfail(uupper(), '⁴', 'a Unicode uppercase letter')
      tfail(uupper(), '₄', 'a Unicode uppercase letter')
      tfail(uupper(), '④', 'a Unicode uppercase letter')
      tfail(uupper(), '❹', 'a Unicode uppercase letter')
      tfail(uupper('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(uupper(), ' ', 'a Unicode uppercase letter')
      tfail(uupper(), '\t', 'a Unicode uppercase letter')
      tfail(uupper(), '\n', 'a Unicode uppercase letter')
      tfail(uupper(), ' ', 'a Unicode uppercase letter')
      tfail(uupper(), '\u2003', 'a Unicode uppercase letter')
      tfail(uupper(), '\u202f', 'a Unicode uppercase letter')
    })
    it('fails on punctuation', () => {
      tfail(uupper(), '(', 'a Unicode uppercase letter')
      tfail(uupper(), '｢', 'a Unicode uppercase letter')
      tfail(uupper(), ')', 'a Unicode uppercase letter')
      tfail(uupper(), '｣', 'a Unicode uppercase letter')
      tfail(uupper(), '!', 'a Unicode uppercase letter')
      tfail(uupper(), '፣', 'a Unicode uppercase letter')
      tfail(uupper('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(uupper(), '$', 'a Unicode uppercase letter')
      tfail(uupper(), '₯', 'a Unicode uppercase letter')
      tfail(uupper(), '+', 'a Unicode uppercase letter')
      tfail(uupper(), '⫇', 'a Unicode uppercase letter')
      tfail(uupper(), '©', 'a Unicode uppercase letter')
      tfail(uupper(), '🀄', 'a Unicode uppercase letter')
      tfail(uupper('test'), '$', 'test')
    })
    it('fails at EOF', () => {
      tfail(uupper(), '', 'a Unicode uppercase letter')
      tfail(uupper('test'), '', 'test')
    })
  })

  describe('ulower', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        ulower(0),
        '',
        '[ulower]: expected argument to be a string; found 0',
      )
    })
    it('fails on uppercase letters', () => {
      tfail(ulower(), 'A', 'a Unicode lowercase letter')
      tfail(ulower(), 'Ž', 'a Unicode lowercase letter')
      tfail(ulower(), 'Γ', 'a Unicode lowercase letter')
      tfail(ulower(), 'Л', 'a Unicode lowercase letter')
      tfail(ulower(), 'Յ', 'a Unicode lowercase letter')
      tfail(ulower(), 'Ⴄ', 'a Unicode lowercase letter')
      tfail(ulower(), 'Ꮅ', 'a Unicode lowercase letter')
      tfail(ulower(), 'Ⰽ', 'a Unicode lowercase letter')
      tfail(ulower('test'), 'A', 'test')
    })
    it('fails on titlecase letters', () => {
      tfail(ulower(), 'ǅ', 'a Unicode lowercase letter')
      tfail(ulower(), 'ǋ', 'a Unicode lowercase letter')
      tfail(ulower(), 'ῼ', 'a Unicode lowercase letter')
      tfail(ulower('test'), 'ǅ', 'test')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(ulower(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(ulower(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(ulower(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(ulower(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(ulower(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(ulower(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(ulower(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(ulower('test'), 'a', 'a')
    })
    it('fails on decimal digits', () => {
      tfail(ulower(), '4', 'a Unicode lowercase letter')
      tfail(ulower(), '۴', 'a Unicode lowercase letter')
      tfail(ulower(), '४', 'a Unicode lowercase letter')
      tfail(ulower(), '৪', 'a Unicode lowercase letter')
      tfail(ulower(), '๔', 'a Unicode lowercase letter')
      tfail(ulower(), '᠔', 'a Unicode lowercase letter')
      tfail(ulower(), '𝟜', 'a Unicode lowercase letter')
      tfail(ulower('test'), '4', 'test')
    })
    it('fails on uppercase letter numbers', () => {
      tfail(ulower(), 'Ⅳ', 'a Unicode lowercase letter')
      tfail(ulower('test'), 'Ⅳ', 'test')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(ulower(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(ulower('test'), 'ⅳ', 'ⅳ')
    })
    it('fails on other numbers', () => {
      tfail(ulower(), '¼', 'a Unicode lowercase letter')
      tfail(ulower(), '፬', 'a Unicode lowercase letter')
      tfail(ulower(), '⁴', 'a Unicode lowercase letter')
      tfail(ulower(), '₄', 'a Unicode lowercase letter')
      tfail(ulower(), '④', 'a Unicode lowercase letter')
      tfail(ulower(), '❹', 'a Unicode lowercase letter')
      tfail(ulower('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(ulower(), ' ', 'a Unicode lowercase letter')
      tfail(ulower(), '\t', 'a Unicode lowercase letter')
      tfail(ulower(), '\n', 'a Unicode lowercase letter')
      tfail(ulower(), ' ', 'a Unicode lowercase letter')
      tfail(ulower(), '\u2003', 'a Unicode lowercase letter')
      tfail(ulower(), '\u202f', 'a Unicode lowercase letter')
      tfail(ulower('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(ulower(), '(', 'a Unicode lowercase letter')
      tfail(ulower(), '｢', 'a Unicode lowercase letter')
      tfail(ulower(), ')', 'a Unicode lowercase letter')
      tfail(ulower(), '｣', 'a Unicode lowercase letter')
      tfail(ulower(), '!', 'a Unicode lowercase letter')
      tfail(ulower(), '፣', 'a Unicode lowercase letter')
      tfail(ulower('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(ulower(), '$', 'a Unicode lowercase letter')
      tfail(ulower(), '₯', 'a Unicode lowercase letter')
      tfail(ulower(), '+', 'a Unicode lowercase letter')
      tfail(ulower(), '⫇', 'a Unicode lowercase letter')
      tfail(ulower(), '©', 'a Unicode lowercase letter')
      tfail(ulower(), '🀄', 'a Unicode lowercase letter')
      tfail(ulower('test'), '$', 'test')
    })
    it('fails at EOF', () => {
      tfail(ulower(), '', 'a Unicode lowercase letter')
      tfail(ulower('test'), '', 'test')
    })
  })

  describe('space', () => {
    it('throws if it has a non-string argument', () => {
      terror(space(0), '', 'expected argument to be a string; found 0')
    })
    it('succeeds on a single instance of conventional whitespace', () => {
      tpass(space(), '\t', '\t')
      tpass(space(), '\n', '\n')
      tpass(space(), '\r', '\r')
      tpass(space(), '\r\n', '\r\n')
      tpass(space(), ' ', ' ')
      tpass(space('test'), '\t', '\t')
    })
    it('fails on Unicode whitespace of other kinds', () => {
      tfail(space(), '\v', 'a whitespace character')
      tfail(space(), '\f', 'a whitespace character')
      tfail(space(), '\u0085', 'a whitespace character')
      tfail(space(), '\u00a0', 'a whitespace character')
      tfail(space(), '\u1680', 'a whitespace character')
      tfail(space(), '\u2000', 'a whitespace character')
      tfail(space(), '\u2001', 'a whitespace character')
      tfail(space(), '\u2002', 'a whitespace character')
      tfail(space(), '\u2003', 'a whitespace character')
      tfail(space(), '\u2004', 'a whitespace character')
      tfail(space(), '\u2005', 'a whitespace character')
      tfail(space(), '\u2006', 'a whitespace character')
      tfail(space(), '\u2007', 'a whitespace character')
      tfail(space(), '\u2008', 'a whitespace character')
      tfail(space(), '\u2009', 'a whitespace character')
      tfail(space(), '\u200a', 'a whitespace character')
      tfail(space(), '\u2028', 'a whitespace character')
      tfail(space(), '\u2029', 'a whitespace character')
      tfail(space(), '\u202f', 'a whitespace character')
      tfail(space(), '\u205f', 'a whitespace character')
      tfail(space(), '\u3000', 'a whitespace character')
      tfail(space('test'), '\v', 'test')
    })
    it('succeeds only once', () => {
      tpass(space(), '     123', ' ')
      tpass(space(), '\t\n\r ', '\t')
    })
    it('fails on non-whitespace characters', () => {
      tfail(space(), 'O', 'a whitespace character')
      tfail(space(), 'З', 'a whitespace character')
      tfail(space(), 'ค', 'a whitespace character')
      tfail(space(), '𝑂', 'a whitespace character')
      tfail(space(), '\u180e', 'a whitespace character')
      tfail(space(), '\u200b', 'a whitespace character')
      tfail(space(), '\u200c', 'a whitespace character')
      tfail(space(), '\u200d', 'a whitespace character')
      tfail(space(), '\u2060', 'a whitespace character')
      tfail(space('test'), 'O', 'test')
    })
    it('fails at EOF', () => {
      tfail(space(), '', 'a whitespace character')
      tfail(space('test'), '', 'test')
    })
  })

  describe('uspace', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        uspace(0),
        '',
        '[uspace]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single instance of Unicode whitespace', () => {
      tpass(uspace(), '\t', '\t')
      tpass(uspace(), '\n', '\n')
      tpass(uspace(), '\v', '\v')
      tpass(uspace(), '\f', '\f')
      tpass(uspace(), '\r', '\r')
      tpass(uspace(), '\r\n', '\r\n')
      tpass(uspace(), ' ', ' ')
      tpass(uspace(), '\u0085', '\u0085')
      tpass(uspace(), '\u00a0', '\u00a0')
      tpass(uspace(), '\u1680', '\u1680')
      tpass(uspace(), '\u2000', '\u2000')
      tpass(uspace(), '\u2001', '\u2001')
      tpass(uspace(), '\u2002', '\u2002')
      tpass(uspace(), '\u2003', '\u2003')
      tpass(uspace(), '\u2004', '\u2004')
      tpass(uspace(), '\u2005', '\u2005')
      tpass(uspace(), '\u2006', '\u2006')
      tpass(uspace(), '\u2007', '\u2007')
      tpass(uspace(), '\u2008', '\u2008')
      tpass(uspace(), '\u2009', '\u2009')
      tpass(uspace(), '\u200a', '\u200a')
      tpass(uspace(), '\u2028', '\u2028')
      tpass(uspace(), '\u2029', '\u2029')
      tpass(uspace(), '\u202f', '\u202f')
      tpass(uspace(), '\u205f', '\u205f')
      tpass(uspace(), '\u3000', '\u3000')
      tpass(uspace('test'), '\t', '\t')
    })
    it('succeeds only once', () => {
      tpass(uspace(), '     123', ' ')
      tpass(uspace(), '\u3000\u1680\u202f', '\u3000')
    })
    it('fails on non-whitespace characters', () => {
      tfail(uspace(), 'O', 'a Unicode whitespace character')
      tfail(uspace(), 'З', 'a Unicode whitespace character')
      tfail(uspace(), 'ค', 'a Unicode whitespace character')
      tfail(uspace(), '𝑂', 'a Unicode whitespace character')
      tfail(uspace(), '\u180e', 'a Unicode whitespace character')
      tfail(uspace(), '\u200b', 'a Unicode whitespace character')
      tfail(uspace(), '\u200c', 'a Unicode whitespace character')
      tfail(uspace(), '\u200d', 'a Unicode whitespace character')
      tfail(uspace(), '\u2060', 'a Unicode whitespace character')
      tfail(uspace('test'), 'O', 'test')
    })
    it('fails at EOF', () => {
      tfail(uspace(), '', 'a Unicode whitespace character')
      tfail(uspace('test'), '', 'test')
    })
  })

  describe('spaces', () => {
    it('succeeds even if no whitespace is found', () => {
      tpass(spaces(), '', { result: null, index: 0 })
      tpass(spaces(), 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spaces(), '\t\t\tabc', { result: null, index: 3 })
      tpass(spaces(), '\n\nabc', { result: null, index: 2 })
      tpass(spaces(), '\r\rabc', { result: null, index: 2 })
      tpass(spaces(), ' abc', { result: null, index: 1 })
    })
    it('does not skip non-conventional Unicode whitespace', () => {
      tpass(spaces(), '\vabc', { result: null, index: 0 })
      tpass(spaces(), '\f\f\f\fabc', { result: null, index: 0 })
      tpass(spaces(), '\u0085abc', { result: null, index: 0 })
      tpass(spaces(), '\u00a0abc', { result: null, index: 0 })
      tpass(spaces(), '\u1680abc', { result: null, index: 0 })
      tpass(spaces(), '\u2000abc', { result: null, index: 0 })
      tpass(spaces(), '\u2001abc', { result: null, index: 0 })
      tpass(spaces(), '\u2002abc', { result: null, index: 0 })
      tpass(spaces(), '\u2003abc', { result: null, index: 0 })
      tpass(spaces(), '\u2004abc', { result: null, index: 0 })
      tpass(spaces(), '\u2005abc', { result: null, index: 0 })
      tpass(spaces(), '\u2006abc', { result: null, index: 0 })
      tpass(spaces(), '\u2007abc', { result: null, index: 0 })
      tpass(spaces(), '\u2008abc', { result: null, index: 0 })
      tpass(spaces(), '\u2009abc', { result: null, index: 0 })
      tpass(spaces(), '\u200aabc', { result: null, index: 0 })
      tpass(spaces(), '\u2028abc', { result: null, index: 0 })
      tpass(spaces(), '\u2029abc', { result: null, index: 0 })
      tpass(spaces(), '\u202fabc', { result: null, index: 0 })
      tpass(spaces(), '\u205fabc', { result: null, index: 0 })
      tpass(spaces(), '\u3000abc', { result: null, index: 0 })
    })
  })

  describe('uspaces', () => {
    it('succeeds even if no whitespace is found', () => {
      tpass(uspaces(), '', { result: null, index: 0 })
      tpass(uspaces(), 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(uspaces(), '\t\t\tabc', { result: null, index: 3 })
      tpass(uspaces(), '\n\nabc', { result: null, index: 2 })
      tpass(uspaces(), '\vabc', { result: null, index: 1 })
      tpass(uspaces(), '\f\f\f\fabc', { result: null, index: 4 })
      tpass(uspaces(), '\r\rabc', { result: null, index: 2 })
      tpass(uspaces(), ' abc', { result: null, index: 1 })
      tpass(uspaces(), '\u0085abc', { result: null, index: 2 })
      tpass(uspaces(), '\u00a0abc', { result: null, index: 2 })
      tpass(uspaces(), '\u1680abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2000abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2001abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2002abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2003abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2004abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2005abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2006abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2007abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2008abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2009abc', { result: null, index: 3 })
      tpass(uspaces(), '\u200aabc', { result: null, index: 3 })
      tpass(uspaces(), '\u2028abc', { result: null, index: 3 })
      tpass(uspaces(), '\u2029abc', { result: null, index: 3 })
      tpass(uspaces(), '\u202fabc', { result: null, index: 3 })
      tpass(uspaces(), '\u205fabc', { result: null, index: 3 })
      tpass(uspaces(), '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('spaces1', () => {
    it('throws if it has a non-string argument', () => {
      terror(spaces1(0), '', 'expected argument to be a string; found 0')
    })
    it('fails if no whitespace is found', () => {
      tfail(spaces1(), '', 'one or more whitespace characters')
      tfail(spaces1(), 'abc', 'one or more whitespace characters')
      tfail(spaces1('test'), '', 'test')
      tfail(spaces1('test'), 'abc', 'test')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spaces1(), '\t\t\tabc', { result: null, index: 3 })
      tpass(spaces1(), '\n\nabc', { result: null, index: 2 })
      tpass(spaces1(), '\r\rabc', { result: null, index: 2 })
      tpass(spaces1(), ' abc', { result: null, index: 1 })
      tpass(spaces1(), '\t\t\tabc', { result: null, index: 3 })
    })
    it('fails on non-conventional Unicode whitespace', () => {
      tfail(spaces1(), '\vabc', 'one or more whitespace characters')
      tfail(spaces1(), '\f\f\f\fabc', 'one or more whitespace characters')
      tfail(spaces1(), '\u0085abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u00a0abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u1680abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2000abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2001abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2002abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2003abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2004abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2005abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2006abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2007abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2008abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2009abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u200aabc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2028abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u2029abc', 'one or more whitespace characters')
      tfail(spaces1(), '\u202fabc', 'one or more whitespace characters')
      tfail(spaces1(), '\u205fabc', 'one or more whitespace characters')
      tfail(spaces1(), '\u3000abc', 'one or more whitespace characters')
      tfail(spaces1('test'), '\vabc', 'test')
    })
    it('fails at EOF', () => {
      tfail(spaces1(), '', 'one or more whitespace characters')
      tfail(spaces1('test'), '', 'test')
    })
  })

  describe('uspaces1', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        uspaces1(0),
        '',
        '[uspaces1]: expected argument to be a string; found 0',
      )
    })
    it('fails if no whitespace is found', () => {
      tfail(uspaces1(), '', 'one or more Unicode whitespace characters')
      tfail(uspaces1(), 'abc', 'one or more Unicode whitespace characters')
      tfail(uspaces1('test'), '', 'test')
      tfail(uspaces1('test'), 'abc', 'test')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(uspaces1(), '\t\t\tabc', { result: null, index: 3 })
      tpass(uspaces1(), '\n\nabc', { result: null, index: 2 })
      tpass(uspaces1(), '\vabc', { result: null, index: 1 })
      tpass(uspaces1(), '\f\f\f\fabc', { result: null, index: 4 })
      tpass(uspaces1(), '\r\rabc', { result: null, index: 2 })
      tpass(uspaces1(), ' abc', { result: null, index: 1 })
      tpass(uspaces1(), '\u0085abc', { result: null, index: 2 })
      tpass(uspaces1(), '\u00a0abc', { result: null, index: 2 })
      tpass(uspaces1(), '\u1680abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2000abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2001abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2002abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2003abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2004abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2005abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2006abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2007abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2008abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2009abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u200aabc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2028abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u2029abc', { result: null, index: 3 })
      tpass(uspaces1(), '\u202fabc', { result: null, index: 3 })
      tpass(uspaces1(), '\u205fabc', { result: null, index: 3 })
      tpass(uspaces1(), '\u3000abc', { result: null, index: 3 })
      tpass(uspaces1('test'), '\t\t\tabc', { result: null, index: 3 })
    })
    it('fails at EOF', () => {
      tfail(uspaces1(), '', 'one or more Unicode whitespace characters')
      tfail(uspaces1('test'), '', 'test')
    })
  })

  describe('newline', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        newline(0),
        '',
        '[newline]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single newline', () => {
      tpass(newline(), '\nabc', '\n')
      tpass(newline(), '\rabc', '\r')
      tpass(newline(), '\r\nabc', '\r\n')
      tpass(newline('test'), '\nabc', '\n')
    })
    it('fails on any other character combination', () => {
      tfail(newline(), '\u0085abc', 'a newline')
      tfail(newline(), '\u2028abc', 'a newline')
      tfail(newline(), '\u2029abc', 'a newline')
      tfail(newline('test'), 'Onoma', 'test')
    })
    it('fails at EOF', () => {
      tfail(newline(), '', 'a newline')
      tfail(newline('test'), '', 'test')
    })
  })

  describe('unewline', () => {
    it('throws if it has a non-string argument', () => {
      terror(
        unewline(0),
        '',
        '[unewline]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on a single Unicode newline', () => {
      tpass(unewline(), '\nabc', '\n')
      tpass(unewline(), '\rabc', '\r')
      tpass(unewline(), '\r\nabc', '\r\n')
      tpass(unewline(), '\u0085abc', '\u0085')
      tpass(unewline(), '\u2028abc', '\u2028')
      tpass(unewline(), '\u2029abc', '\u2029')
      tpass(unewline('test'), '\nabc', '\n')
    })
    it('fails on any other character combination', () => {
      tfail(unewline(), 'Onoma', 'a Unicode newline')
      tfail(unewline('test'), 'Onoma', 'test')
    })
    it('fails at EOF', () => {
      tfail(unewline(), '', 'a Unicode newline')
      tfail(unewline('test'), '', 'test')
    })
  })
})
