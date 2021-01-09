// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alphaU,
  letterU,
  lowerU,
  newline,
  newlineU,
  regex,
  space,
  spaces,
  spaces1,
  spaces1U,
  spacesU,
  spaceU,
  upperU,
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
    it('fails if the input is at its end', () => {
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

  describe('letterU', () => {
    it('throws if it has a non-string argument', () => {
      terror(letterU(0), '', 'expected argument to be a string; found 0')
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(letterU(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(letterU(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(letterU(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(letterU(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(letterU(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(letterU(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(letterU(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(letterU(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(letterU('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(letterU(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(letterU(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(letterU(), 'ῼ', 'ῼ')
      tpass(letterU('test'), 'ǅ', 'ǅ')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(letterU(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(letterU(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(letterU(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(letterU(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(letterU(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(letterU(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(letterU(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(letterU('test'), 'a', 'a')
    })
    it('fails on decimal digits', () => {
      tfail(letterU(), '4', 'a Unicode letter')
      tfail(letterU(), '۴', 'a Unicode letter')
      tfail(letterU(), '४', 'a Unicode letter')
      tfail(letterU(), '৪', 'a Unicode letter')
      tfail(letterU(), '๔', 'a Unicode letter')
      tfail(letterU(), '᠔', 'a Unicode letter')
      tfail(letterU(), '𝟜', 'a Unicode letter')
      tfail(letterU('test'), '4', 'test')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(letterU(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(letterU('test'), 'Ⅳ', 'Ⅳ')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(letterU(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(letterU('test'), 'ⅳ', 'ⅳ')
    })
    it('fails on other numbers', () => {
      tfail(letterU(), '¼', 'a Unicode letter')
      tfail(letterU(), '፬', 'a Unicode letter')
      tfail(letterU(), '⁴', 'a Unicode letter')
      tfail(letterU(), '₄', 'a Unicode letter')
      tfail(letterU(), '④', 'a Unicode letter')
      tfail(letterU(), '❹', 'a Unicode letter')
      tfail(letterU('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(letterU(), ' ', 'a Unicode letter')
      tfail(letterU(), '\t', 'a Unicode letter')
      tfail(letterU(), '\n', 'a Unicode letter')
      tfail(letterU(), ' ', 'a Unicode letter')
      tfail(letterU(), '\u2003', 'a Unicode letter')
      tfail(letterU(), '\u202f', 'a Unicode letter')
      tfail(letterU('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(letterU(), '(', 'a Unicode letter')
      tfail(letterU(), '｢', 'a Unicode letter')
      tfail(letterU(), ')', 'a Unicode letter')
      tfail(letterU(), '｣', 'a Unicode letter')
      tfail(letterU(), '!', 'a Unicode letter')
      tfail(letterU(), '፣', 'a Unicode letter')
      tfail(letterU('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(letterU(), '$', 'a Unicode letter')
      tfail(letterU(), '₯', 'a Unicode letter')
      tfail(letterU(), '+', 'a Unicode letter')
      tfail(letterU(), '⫇', 'a Unicode letter')
      tfail(letterU(), '©', 'a Unicode letter')
      tfail(letterU(), '🀄', 'a Unicode letter')
      tfail(letterU('test'), '$', 'test')
    })
  })

  describe('alphaU', () => {
    it('throws if it has a non-string argument', () => {
      terror(alphaU(0), '', 'expected argument to be a string; found 0')
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(alphaU(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(alphaU(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(alphaU(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(alphaU(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(alphaU(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(alphaU(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(alphaU(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(alphaU(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(alphaU('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(alphaU(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(alphaU(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(alphaU(), 'ῼ', 'ῼ')
      tpass(alphaU('test'), 'ǅ', 'ǅ')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(alphaU(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(alphaU(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(alphaU(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(alphaU(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(alphaU(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(alphaU(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(alphaU(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(alphaU('test'), 'a', 'a')
    })
    it('succeeds on a single decimal digit', () => {
      tpass(alphaU(), '4', '4') // DIGIT FOUR
      tpass(alphaU(), '۴', '۴') // ARABIC-INDIC DIGIT FOUR
      tpass(alphaU(), '४', '४') // DEVANAGARI DIGIT FOUR
      tpass(alphaU(), '৪', '৪') // BENGALI DIGIT FOUR
      tpass(alphaU(), '๔', '๔') // THAI DIGIT FOUR
      tpass(alphaU(), '᠔', '᠔') // MONGOLIAN DIGIT FOUR
      tpass(alphaU(), '𝟜', '𝟜') // MATHEMATICAL DOUBLE-STRUCK DIGIT FOUR
      tpass(alphaU('test'), '4', '4')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(alphaU(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(alphaU('test'), 'Ⅳ', 'Ⅳ')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(alphaU(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(alphaU('test'), 'ⅳ', 'ⅳ')
    })
    it('succeeds on a single other number', () => {
      tpass(alphaU(), '¼', '¼') // VULGAR FRACTION ONE QUARTER
      tpass(alphaU(), '፬', '፬') // ETHIOPIC DIGIT FOUR
      tpass(alphaU(), '⁴', '⁴') // SUPERSCRIPT FOUR
      tpass(alphaU(), '₄', '₄') // SUBSCRIPT FOUR
      tpass(alphaU(), '④', '④') // CIRCLED DIGIT FOUR
      tpass(alphaU(), '❹', '❹') // DINGBAT NEGATIVE CIRCLED DIGIT FOUR
      tpass(alphaU('test'), '¼', '¼')
    })
    it('fails on whitespace', () => {
      tfail(alphaU(), ' ', 'a Unicode alphanumeric character')
      tfail(alphaU(), '\t', 'a Unicode alphanumeric character')
      tfail(alphaU(), '\n', 'a Unicode alphanumeric character')
      tfail(alphaU(), ' ', 'a Unicode alphanumeric character')
      tfail(alphaU(), '\u2003', 'a Unicode alphanumeric character')
      tfail(alphaU(), '\u202f', 'a Unicode alphanumeric character')
      tfail(alphaU('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(alphaU(), '(', 'a Unicode alphanumeric character')
      tfail(alphaU(), '｢', 'a Unicode alphanumeric character')
      tfail(alphaU(), ')', 'a Unicode alphanumeric character')
      tfail(alphaU(), '｣', 'a Unicode alphanumeric character')
      tfail(alphaU(), '!', 'a Unicode alphanumeric character')
      tfail(alphaU(), '፣', 'a Unicode alphanumeric character')
      tfail(alphaU('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(alphaU(), '$', 'a Unicode alphanumeric character')
      tfail(alphaU(), '₯', 'a Unicode alphanumeric character')
      tfail(alphaU(), '+', 'a Unicode alphanumeric character')
      tfail(alphaU(), '⫇', 'a Unicode alphanumeric character')
      tfail(alphaU(), '©', 'a Unicode alphanumeric character')
      tfail(alphaU(), '🀄', 'a Unicode alphanumeric character')
      tfail(alphaU('test'), '$', 'test')
    })
  })

  describe('upperU', () => {
    it('throws if it has a non-string argument', () => {
      terror(upperU(0), '', 'expected argument to be a string; found 0')
    })
    it('succeeds on a single uppercase letter', () => {
      tpass(upperU(), 'A', 'A') // LATIN CAPITAL LETTER A
      tpass(upperU(), 'Ž', 'Ž') // LATIN CAPITAL LETTER Z WITH CARON
      tpass(upperU(), 'Γ', 'Γ') // GREEK CAPITAL LETTER GAMMA
      tpass(upperU(), 'Л', 'Л') // CYRILLIC CAPITAL LETTER EL
      tpass(upperU(), 'Յ', 'Յ') // ARMENIAN CAPITAL LETTER YI
      tpass(upperU(), 'Ⴄ', 'Ⴄ') // GEORGIAN CAPITAL LETTER EN
      tpass(upperU(), 'Ꮅ', 'Ꮅ') // CHEROKEE LETTER LI
      tpass(upperU(), 'Ⰽ', 'Ⰽ') // GLAGOLITHIC CAPTIAL LETTER KAKO
      tpass(upperU('test'), 'A', 'A')
    })
    it('succeeds on a single titlecase letter', () => {
      // LATIN CAPITAL LETTER D WITH SMALL LETTER Z WITH CARON
      tpass(upperU(), 'ǅ', 'ǅ')
      // LATIN CAPITAL LETTER N WITH SMALL LETTER J
      tpass(upperU(), 'ǋ', 'ǋ')
      // GREEK CAPITAL LETTER OMEGA WITH PROSGEGRAMMENI
      tpass(upperU(), 'ῼ', 'ῼ')
      tpass(upperU('test'), 'ǅ', 'ǅ')
    })
    it('fails on lowercase letters', () => {
      tfail(upperU(), 'a', 'a Unicode uppercase letter')
      tfail(upperU(), 'ž', 'a Unicode uppercase letter')
      tfail(upperU(), 'γ', 'a Unicode uppercase letter')
      tfail(upperU(), 'л', 'a Unicode uppercase letter')
      tfail(upperU(), 'յ', 'a Unicode uppercase letter')
      tfail(upperU(), 'ე', 'a Unicode uppercase letter')
      tfail(upperU(), 'ⰽ', 'a Unicode uppercase letter')
      tfail(upperU('test'), 'a', 'test')
    })
    it('fails on decimal digits', () => {
      tfail(upperU(), '4', 'a Unicode uppercase letter')
      tfail(upperU(), '۴', 'a Unicode uppercase letter')
      tfail(upperU(), '४', 'a Unicode uppercase letter')
      tfail(upperU(), '৪', 'a Unicode uppercase letter')
      tfail(upperU(), '๔', 'a Unicode uppercase letter')
      tfail(upperU(), '᠔', 'a Unicode uppercase letter')
      tfail(upperU(), '𝟜', 'a Unicode uppercase letter')
      tfail(upperU('test'), '4', 'test')
    })
    it('succeeds on a single uppercase letter number', () => {
      tpass(upperU(), 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
      tpass(upperU('test'), 'Ⅳ', 'Ⅳ')
    })
    it('fails on lowercase letter numbers', () => {
      tfail(upperU(), 'ⅳ', 'a Unicode uppercase letter')
      tfail(upperU('test'), 'ⅳ', 'test')
    })
    it('fails on other numbers', () => {
      tfail(upperU(), '¼', 'a Unicode uppercase letter')
      tfail(upperU(), '፬', 'a Unicode uppercase letter')
      tfail(upperU(), '⁴', 'a Unicode uppercase letter')
      tfail(upperU(), '₄', 'a Unicode uppercase letter')
      tfail(upperU(), '④', 'a Unicode uppercase letter')
      tfail(upperU(), '❹', 'a Unicode uppercase letter')
      tfail(upperU('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(upperU(), ' ', 'a Unicode uppercase letter')
      tfail(upperU(), '\t', 'a Unicode uppercase letter')
      tfail(upperU(), '\n', 'a Unicode uppercase letter')
      tfail(upperU(), ' ', 'a Unicode uppercase letter')
      tfail(upperU(), '\u2003', 'a Unicode uppercase letter')
      tfail(upperU(), '\u202f', 'a Unicode uppercase letter')
    })
    it('fails on punctuation', () => {
      tfail(upperU(), '(', 'a Unicode uppercase letter')
      tfail(upperU(), '｢', 'a Unicode uppercase letter')
      tfail(upperU(), ')', 'a Unicode uppercase letter')
      tfail(upperU(), '｣', 'a Unicode uppercase letter')
      tfail(upperU(), '!', 'a Unicode uppercase letter')
      tfail(upperU(), '፣', 'a Unicode uppercase letter')
      tfail(upperU('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(upperU(), '$', 'a Unicode uppercase letter')
      tfail(upperU(), '₯', 'a Unicode uppercase letter')
      tfail(upperU(), '+', 'a Unicode uppercase letter')
      tfail(upperU(), '⫇', 'a Unicode uppercase letter')
      tfail(upperU(), '©', 'a Unicode uppercase letter')
      tfail(upperU(), '🀄', 'a Unicode uppercase letter')
      tfail(upperU('test'), '$', 'test')
    })
  })

  describe('lowerU', () => {
    it('throws if it has a non-string argument', () => {
      terror(lowerU(0), '', 'expected argument to be a string; found 0')
    })
    it('fails on uppercase letters', () => {
      tfail(lowerU(), 'A', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Ž', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Γ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Л', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Յ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Ⴄ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Ꮅ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'Ⰽ', 'a Unicode lowercase letter')
      tfail(lowerU('test'), 'A', 'test')
    })
    it('fails on titlecase letters', () => {
      tfail(lowerU(), 'ǅ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'ǋ', 'a Unicode lowercase letter')
      tfail(lowerU(), 'ῼ', 'a Unicode lowercase letter')
      tfail(lowerU('test'), 'ǅ', 'test')
    })
    it('succeeds on a single lowercase letter', () => {
      tpass(lowerU(), 'a', 'a') // LATIN SMALL LETTER A
      tpass(lowerU(), 'ž', 'ž') // LATIN SMALL LETTER Z WITH CARON
      tpass(lowerU(), 'γ', 'γ') // GREEK SMALL LETTER GAMMA
      tpass(lowerU(), 'л', 'л') // CYRILLIC SMALL LETTER EL
      tpass(lowerU(), 'յ', 'յ') // ARMENIAN SMALL LETTER YI
      tpass(lowerU(), 'ე', 'ე') // GEORGIAN LETTER EN
      tpass(lowerU(), 'ⰽ', 'ⰽ') // GLAGOLITIC SMALL LETTER KAKO
      tpass(lowerU('test'), 'a', 'a')
    })
    it('fails on decimal digits', () => {
      tfail(lowerU(), '4', 'a Unicode lowercase letter')
      tfail(lowerU(), '۴', 'a Unicode lowercase letter')
      tfail(lowerU(), '४', 'a Unicode lowercase letter')
      tfail(lowerU(), '৪', 'a Unicode lowercase letter')
      tfail(lowerU(), '๔', 'a Unicode lowercase letter')
      tfail(lowerU(), '᠔', 'a Unicode lowercase letter')
      tfail(lowerU(), '𝟜', 'a Unicode lowercase letter')
      tfail(lowerU('test'), '4', 'test')
    })
    it('fails on uppercase letter numbers', () => {
      tfail(lowerU(), 'Ⅳ', 'a Unicode lowercase letter')
      tfail(lowerU('test'), 'Ⅳ', 'test')
    })
    it('succeeds on a single lowercase letter number', () => {
      tpass(lowerU(), 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
      tpass(lowerU('test'), 'ⅳ', 'ⅳ')
    })
    it('fails on other numbers', () => {
      tfail(lowerU(), '¼', 'a Unicode lowercase letter')
      tfail(lowerU(), '፬', 'a Unicode lowercase letter')
      tfail(lowerU(), '⁴', 'a Unicode lowercase letter')
      tfail(lowerU(), '₄', 'a Unicode lowercase letter')
      tfail(lowerU(), '④', 'a Unicode lowercase letter')
      tfail(lowerU(), '❹', 'a Unicode lowercase letter')
      tfail(lowerU('test'), '¼', 'test')
    })
    it('fails on whitespace', () => {
      tfail(lowerU(), ' ', 'a Unicode lowercase letter')
      tfail(lowerU(), '\t', 'a Unicode lowercase letter')
      tfail(lowerU(), '\n', 'a Unicode lowercase letter')
      tfail(lowerU(), ' ', 'a Unicode lowercase letter')
      tfail(lowerU(), '\u2003', 'a Unicode lowercase letter')
      tfail(lowerU(), '\u202f', 'a Unicode lowercase letter')
      tfail(lowerU('test'), ' ', 'test')
    })
    it('fails on punctuation', () => {
      tfail(lowerU(), '(', 'a Unicode lowercase letter')
      tfail(lowerU(), '｢', 'a Unicode lowercase letter')
      tfail(lowerU(), ')', 'a Unicode lowercase letter')
      tfail(lowerU(), '｣', 'a Unicode lowercase letter')
      tfail(lowerU(), '!', 'a Unicode lowercase letter')
      tfail(lowerU(), '፣', 'a Unicode lowercase letter')
      tfail(lowerU('test'), '(', 'test')
    })
    it('fails on symbols', () => {
      tfail(lowerU(), '$', 'a Unicode lowercase letter')
      tfail(lowerU(), '₯', 'a Unicode lowercase letter')
      tfail(lowerU(), '+', 'a Unicode lowercase letter')
      tfail(lowerU(), '⫇', 'a Unicode lowercase letter')
      tfail(lowerU(), '©', 'a Unicode lowercase letter')
      tfail(lowerU(), '🀄', 'a Unicode lowercase letter')
      tfail(lowerU('test'), '$', 'test')
    })
  })

  describe('space', () => {
    it('succeeds on a single instance of conventional whitespace', () => {
      tpass(space, '\t', '\t')
      tpass(space, '\n', '\n')
      tpass(space, '\r', '\r')
      tpass(space, '\r\n', '\r\n')
      tpass(space, ' ', ' ')
    })
    it('fails on Unicode whitespace of other kinds', () => {
      tfail(space, '\v', 'a whitespace character')
      tfail(space, '\f', 'a whitespace character')
      tfail(space, '\u0085', 'a whitespace character')
      tfail(space, '\u00a0', 'a whitespace character')
      tfail(space, '\u1680', 'a whitespace character')
      tfail(space, '\u2000', 'a whitespace character')
      tfail(space, '\u2001', 'a whitespace character')
      tfail(space, '\u2002', 'a whitespace character')
      tfail(space, '\u2003', 'a whitespace character')
      tfail(space, '\u2004', 'a whitespace character')
      tfail(space, '\u2005', 'a whitespace character')
      tfail(space, '\u2006', 'a whitespace character')
      tfail(space, '\u2007', 'a whitespace character')
      tfail(space, '\u2008', 'a whitespace character')
      tfail(space, '\u2009', 'a whitespace character')
      tfail(space, '\u200a', 'a whitespace character')
      tfail(space, '\u2028', 'a whitespace character')
      tfail(space, '\u2029', 'a whitespace character')
      tfail(space, '\u202f', 'a whitespace character')
      tfail(space, '\u205f', 'a whitespace character')
      tfail(space, '\u3000', 'a whitespace character')
    })
    it('succeeds only once', () => {
      tpass(space, '     123', ' ')
      tpass(space, '\t\n\r ', '\t')
    })
    it('fails on non-whitespace characters', () => {
      tfail(space, 'O', 'a whitespace character')
      tfail(space, 'З', 'a whitespace character')
      tfail(space, 'ค', 'a whitespace character')
      tfail(space, '𝑂', 'a whitespace character')
      tfail(space, '\u180e', 'a whitespace character')
      tfail(space, '\u200b', 'a whitespace character')
      tfail(space, '\u200c', 'a whitespace character')
      tfail(space, '\u200d', 'a whitespace character')
      tfail(space, '\u2060', 'a whitespace character')
    })
  })

  describe('spaceU', () => {
    it('succeeds on a single instance of Unicode whitespace', () => {
      tpass(spaceU, '\t', '\t')
      tpass(spaceU, '\n', '\n')
      tpass(spaceU, '\v', '\v')
      tpass(spaceU, '\f', '\f')
      tpass(spaceU, '\r', '\r')
      tpass(spaceU, '\r\n', '\r\n')
      tpass(spaceU, ' ', ' ')
      tpass(spaceU, '\u0085', '\u0085')
      tpass(spaceU, '\u00a0', '\u00a0')
      tpass(spaceU, '\u1680', '\u1680')
      tpass(spaceU, '\u2000', '\u2000')
      tpass(spaceU, '\u2001', '\u2001')
      tpass(spaceU, '\u2002', '\u2002')
      tpass(spaceU, '\u2003', '\u2003')
      tpass(spaceU, '\u2004', '\u2004')
      tpass(spaceU, '\u2005', '\u2005')
      tpass(spaceU, '\u2006', '\u2006')
      tpass(spaceU, '\u2007', '\u2007')
      tpass(spaceU, '\u2008', '\u2008')
      tpass(spaceU, '\u2009', '\u2009')
      tpass(spaceU, '\u200a', '\u200a')
      tpass(spaceU, '\u2028', '\u2028')
      tpass(spaceU, '\u2029', '\u2029')
      tpass(spaceU, '\u202f', '\u202f')
      tpass(spaceU, '\u205f', '\u205f')
      tpass(spaceU, '\u3000', '\u3000')
    })
    it('succeeds only once', () => {
      tpass(spaceU, '     123', ' ')
      tpass(spaceU, '\u3000\u1680\u202f', '\u3000')
    })
    it('fails on non-whitespace characters', () => {
      tfail(spaceU, 'O', 'a Unicode whitespace character')
      tfail(spaceU, 'З', 'a Unicode whitespace character')
      tfail(spaceU, 'ค', 'a Unicode whitespace character')
      tfail(spaceU, '𝑂', 'a Unicode whitespace character')
      tfail(spaceU, '\u180e', 'a Unicode whitespace character')
      tfail(spaceU, '\u200b', 'a Unicode whitespace character')
      tfail(spaceU, '\u200c', 'a Unicode whitespace character')
      tfail(spaceU, '\u200d', 'a Unicode whitespace character')
      tfail(spaceU, '\u2060', 'a Unicode whitespace character')
    })
  })

  describe('spaces', () => {
    it('succeeds even if no whitespace is found', () => {
      tpass(spaces, '', { result: null, index: 0 })
      tpass(spaces, 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spaces, '\t\t\tabc', { result: null, index: 3 })
      tpass(spaces, '\n\nabc', { result: null, index: 2 })
      tpass(spaces, '\r\rabc', { result: null, index: 2 })
      tpass(spaces, ' abc', { result: null, index: 1 })
    })
    it('does not skip non-conventional Unicode whitespace', () => {
      tpass(spaces, '\vabc', { result: null, index: 0 })
      tpass(spaces, '\f\f\f\fabc', { result: null, index: 0 })
      tpass(spaces, '\u0085abc', { result: null, index: 0 })
      tpass(spaces, '\u00a0abc', { result: null, index: 0 })
      tpass(spaces, '\u1680abc', { result: null, index: 0 })
      tpass(spaces, '\u2000abc', { result: null, index: 0 })
      tpass(spaces, '\u2001abc', { result: null, index: 0 })
      tpass(spaces, '\u2002abc', { result: null, index: 0 })
      tpass(spaces, '\u2003abc', { result: null, index: 0 })
      tpass(spaces, '\u2004abc', { result: null, index: 0 })
      tpass(spaces, '\u2005abc', { result: null, index: 0 })
      tpass(spaces, '\u2006abc', { result: null, index: 0 })
      tpass(spaces, '\u2007abc', { result: null, index: 0 })
      tpass(spaces, '\u2008abc', { result: null, index: 0 })
      tpass(spaces, '\u2009abc', { result: null, index: 0 })
      tpass(spaces, '\u200aabc', { result: null, index: 0 })
      tpass(spaces, '\u2028abc', { result: null, index: 0 })
      tpass(spaces, '\u2029abc', { result: null, index: 0 })
      tpass(spaces, '\u202fabc', { result: null, index: 0 })
      tpass(spaces, '\u205fabc', { result: null, index: 0 })
      tpass(spaces, '\u3000abc', { result: null, index: 0 })
    })
  })

  describe('spacesU', () => {
    it('succeeds even if no whitespace is found', () => {
      tpass(spacesU, '', { result: null, index: 0 })
      tpass(spacesU, 'abc', { result: null, index: 0 })
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spacesU, '\t\t\tabc', { result: null, index: 3 })
      tpass(spacesU, '\n\nabc', { result: null, index: 2 })
      tpass(spacesU, '\vabc', { result: null, index: 1 })
      tpass(spacesU, '\f\f\f\fabc', { result: null, index: 4 })
      tpass(spacesU, '\r\rabc', { result: null, index: 2 })
      tpass(spacesU, ' abc', { result: null, index: 1 })
      tpass(spacesU, '\u0085abc', { result: null, index: 2 })
      tpass(spacesU, '\u00a0abc', { result: null, index: 2 })
      tpass(spacesU, '\u1680abc', { result: null, index: 3 })
      tpass(spacesU, '\u2000abc', { result: null, index: 3 })
      tpass(spacesU, '\u2001abc', { result: null, index: 3 })
      tpass(spacesU, '\u2002abc', { result: null, index: 3 })
      tpass(spacesU, '\u2003abc', { result: null, index: 3 })
      tpass(spacesU, '\u2004abc', { result: null, index: 3 })
      tpass(spacesU, '\u2005abc', { result: null, index: 3 })
      tpass(spacesU, '\u2006abc', { result: null, index: 3 })
      tpass(spacesU, '\u2007abc', { result: null, index: 3 })
      tpass(spacesU, '\u2008abc', { result: null, index: 3 })
      tpass(spacesU, '\u2009abc', { result: null, index: 3 })
      tpass(spacesU, '\u200aabc', { result: null, index: 3 })
      tpass(spacesU, '\u2028abc', { result: null, index: 3 })
      tpass(spacesU, '\u2029abc', { result: null, index: 3 })
      tpass(spacesU, '\u202fabc', { result: null, index: 3 })
      tpass(spacesU, '\u205fabc', { result: null, index: 3 })
      tpass(spacesU, '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('spaces1', () => {
    it('fails if no whitespace is found', () => {
      tfail(spaces1, '', 'one or more whitespace characters')
      tfail(spaces1, 'abc', 'one or more whitespace characters')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spaces1, '\t\t\tabc', { result: null, index: 3 })
      tpass(spaces1, '\n\nabc', { result: null, index: 2 })
      tpass(spaces1, '\r\rabc', { result: null, index: 2 })
      tpass(spaces1, ' abc', { result: null, index: 1 })
    })
    it('fails on non-conventional Unicode whitespace', () => {
      tfail(spaces1, '\vabc', 'one or more whitespace characters')
      tfail(spaces1, '\f\f\f\fabc', 'one or more whitespace characters')
      tfail(spaces1, '\u0085abc', 'one or more whitespace characters')
      tfail(spaces1, '\u00a0abc', 'one or more whitespace characters')
      tfail(spaces1, '\u1680abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2000abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2001abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2002abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2003abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2004abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2005abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2006abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2007abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2008abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2009abc', 'one or more whitespace characters')
      tfail(spaces1, '\u200aabc', 'one or more whitespace characters')
      tfail(spaces1, '\u2028abc', 'one or more whitespace characters')
      tfail(spaces1, '\u2029abc', 'one or more whitespace characters')
      tfail(spaces1, '\u202fabc', 'one or more whitespace characters')
      tfail(spaces1, '\u205fabc', 'one or more whitespace characters')
      tfail(spaces1, '\u3000abc', 'one or more whitespace characters')
    })
  })

  describe('spaces1U', () => {
    it('fails if no whitespace is found', () => {
      tfail(spaces1U, '', 'one or more Unicode whitespace characters')
      tfail(spaces1U, 'abc', 'one or more Unicode whitespace characters')
    })
    it('skips all whitespace until the first non-whitespace', () => {
      tpass(spaces1U, '\t\t\tabc', { result: null, index: 3 })
      tpass(spaces1U, '\n\nabc', { result: null, index: 2 })
      tpass(spaces1U, '\vabc', { result: null, index: 1 })
      tpass(spaces1U, '\f\f\f\fabc', { result: null, index: 4 })
      tpass(spaces1U, '\r\rabc', { result: null, index: 2 })
      tpass(spaces1U, ' abc', { result: null, index: 1 })
      tpass(spaces1U, '\u0085abc', { result: null, index: 2 })
      tpass(spaces1U, '\u00a0abc', { result: null, index: 2 })
      tpass(spaces1U, '\u1680abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2000abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2001abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2002abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2003abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2004abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2005abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2006abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2007abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2008abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2009abc', { result: null, index: 3 })
      tpass(spaces1U, '\u200aabc', { result: null, index: 3 })
      tpass(spaces1U, '\u2028abc', { result: null, index: 3 })
      tpass(spaces1U, '\u2029abc', { result: null, index: 3 })
      tpass(spaces1U, '\u202fabc', { result: null, index: 3 })
      tpass(spaces1U, '\u205fabc', { result: null, index: 3 })
      tpass(spaces1U, '\u3000abc', { result: null, index: 3 })
    })
  })

  describe('newline', () => {
    it('succeeds on a single newline', () => {
      tpass(newline, '\nabc', '\n')
      tpass(newline, '\rabc', '\r')
      tpass(newline, '\r\nabc', '\r\n')
    })
    it('fails on any other character combination', () => {
      tfail(newline, '\u0085abc', 'a newline')
      tfail(newline, '\u2028abc', 'a newline')
      tfail(newline, '\u2029abc', 'a newline')
      tfail(newline, 'Onoma', 'a newline')
    })
    it('fails at EOF', () => {
      tfail(newline, '', { expected: 'a newline', actual: 'EOF' })
    })
  })

  describe('newlineU', () => {
    it('succeeds on a single Unicode newline', () => {
      tpass(newlineU, '\nabc', '\n')
      tpass(newlineU, '\rabc', '\r')
      tpass(newlineU, '\r\nabc', '\r\n')
      tpass(newlineU, '\u0085abc', '\u0085')
      tpass(newlineU, '\u2028abc', '\u2028')
      tpass(newlineU, '\u2029abc', '\u2029')
    })
    it('fails on any other character combination', () => {
      tfail(newlineU, 'Onoma', 'a Unicode newline')
    })
    it('fails at EOF', () => {
      tfail(newlineU, '', 'a Unicode newline')
    })
  })
})
