// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  all,
  alphanum,
  any,
  char,
  chari,
  cr,
  crlf,
  digit,
  end,
  eof,
  fail as pfail,
  hexDigit,
  letter,
  lf,
  lower,
  newline,
  noneOf,
  oneOf,
  range,
  regex,
  satisfies,
  space,
  string,
  stringi,
  tab,
  unexpected,
  upper,
} from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Parsers', () => {
  describe('char', () => {
    it('fails if the supplied value is not a one-character string', () => {
      error(
        char(23), 'some text', '[char]: expected single character; received 23'
      )
      error(
        char('str'),
        'some text',
        '[char]: expected single character; received str'
      )
    })

    context('1-byte characters', () => {
      const parser = char('O')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Onomatopoeia', 'O')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'topoeia', '"t"')
      })
      it('fails if the case does not match', () => {
        fail(parser, 'onomatopoeia', '"o"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('2-byte characters', () => {
      const parser = char('З')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'подражание', '"п"')
      })
      it('fails if the case does not match', () => {
        fail(parser, 'звукоподражание', '"з"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('3-byte characters', () => {
      const parser = char('ค')

      it('succeeds if the next character matches', () => {
        pass(parser, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'ยนเสียง', '"ย"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('4-byte characters', () => {
      const parser = char('𝑂')

      it('succeeds if the next character matches', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        fail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '"𝑡"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })
  })

  describe('chari', () => {
    it('fails if the supplied value is not a one-character string', () => {
      error(
        chari(23),
        'some text',
        '[chari]: expected single character; received 23'
      )
      error(
        chari('str'),
        'some text',
        '[chari]: expected single character; received str'
      )
    })

    context('1-byte characters', () => {
      const parser = chari('O')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Onomatopoeia', 'O')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'topoeia', '"t"')
      })
      it('succeeds if the case does not match', () => {
        pass(parser, 'onomatopoeia', 'o')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('2-byte characters', () => {
      const parser = chari('З')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'подражание', '"п"')
      })
      it('fails if the case does not match', () => {
        pass(parser, 'звукоподражание', 'з')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('3-byte characters', () => {
      const parser = chari('ค')

      it('succeeds if the next character matches', () => {
        pass(parser, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'ยนเสียง', '"ย"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })

    context('4-byte characters', () => {
      const parser = chari('𝑂')

      it('succeeds if the next character matches', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        fail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '"𝑡"')
      })
      it('fails at EOF', () => {
        fail(parser, '', 'EOF')
      })
    })
  })

  describe('satisfies', () => {
    it('fails if the supplied value is not a function', () => {
      error(
        satisfies(23),
        'some text',
        '[satisfies]: expected function; received 23'
      )
    })

    const fn = char => char === char.toUpperCase()

    it('tests the next 1-byte character', () => {
      pass(satisfies(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      fail(satisfies(fn), 'onomatopoeia', {
        expected: ['a character that satisfies function "fn"'],
        actual: '"o"',
      })
    })

    it('tests the next 2-byte character', () => {
      pass(satisfies(fn), 'Звукоподражание', { result: 'З', index: 2 })
      fail(satisfies(fn), 'звукоподражание', {
        expected: ['a character that satisfies function "fn"'],
        actual: '"з"',
      })
    })

    it('tests the next 3-byte character', () => {
      pass(satisfies(fn), 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })

    it('tests the next 4-byte character', () => {
      pass(satisfies(fn), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })

    it('names an unnamed function <anonymous>', () => {
      fail(satisfies(char => char === char.toUpperCase()), 'onomatopoeia', {
        expected: ['a character that satisfies function "<anonymous>"'],
        actual: '"o"',
      })
    })

    it('fails automatically at EOF', () => {
      fail(satisfies(fn), '', {
        expected: ['a character that satisfies function "fn"'],
        actual: 'EOF',
      })
    })
  })

  describe('range', () => {
    it('throws if either argument is not a single character string', () => {
      error(
        range('0', 9), '123', '[range]: expected single character; received 9'
      )
      error(
        range(0, '9'), '123', '[range]: expected single character; received 0'
      )
    })
    it('succeeds if the next character is between the supplied two', () => {
      pass(range('a', 'z'), 'abc', 'a')
      pass(range('а', 'я'), 'цчш', 'ц')
      pass(range('ก', 'ฮ'), 'รลว', 'ร')
      pass(range('𝑎', '𝑧'), '𝑖𝑗𝑘', '𝑖')
    })
    it('fails if the next character is not between the supplied two', () => {
      fail(range('a', 'z'), '123', '"1"')
      fail(range('а', 'я'), 'աբգ', '"ա"')
      fail(range('ก', 'ฮ'), 'ａｂｃ', '"ａ"')
      fail(range('𝑎', '𝑧'), '𝒊𝒋𝒌', '"𝒊"')
    })
    it('fails at EOF', () => {
      fail(range('a', 'z'), '', 'EOF')
    })
  })

  describe('string', () => {
    it('throws an error if a non-string is passed in', () => {
      error(
        string(23),
        'some text',
        '[string]: expected string; received 23'
      )
    })

    context('1-byte characters', () => {
      const parser = string('Onoma')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('fails if case does not match', () => {
        fail(parser, 'onomatopoeia', {
          expected: ['"Onoma"'],
          actual: '"o"',
          index: 0,
        })
      })
      it('consumes input up until a failure', () => {
        fail(parser, 'Onosho', {
          expected: ['"Onoma"'],
          actual: '"Onos"',
          index: 3,
        })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ono', {
          expected: ['"Onoma"'],
          actual: '"Ono"',
          index: 3,
        })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = string('Звуко')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('fails if case does not match', () => {
        fail(parser, 'звукоподражание', { actual: '"з"', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Зву', { actual: '"Зву"', index: 6 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = string('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'คำเ', { actual: '"คำเ"', index: 9 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = string('𝑂𝑛𝑜𝑚𝑎')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, '𝑂𝑛𝑜', { actual: '"𝑂𝑛𝑜"', index: 12 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('stringi', () => {
    it('throws an error if a non-string is passed in', () => {
      error(
        stringi(23),
        'some text',
        '[stringi]: expected string; received 23'
      )
    })

    context('1-byte characters', () => {
      const parser = stringi('Onoma')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('succeeds if case does not match', () => {
        pass(parser, 'onomatopoeia', { result: 'onoma', index: 5 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ono', {
          expected: ['"Onoma"'],
          actual: '"Ono"',
          index: 3,
        })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = stringi('Звуко')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('succeeds if case does not match', () => {
        pass(parser, 'звукоподражание', { result: 'звуко', index: 10 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Зву', { actual: '"Зву"', index: 6 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = stringi('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'คำเ', { actual: '"คำเ"', index: 9 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = stringi('𝑂𝑛𝑜𝑚𝑎')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, '𝑂𝑛𝑜', { actual: '"𝑂𝑛𝑜"', index: 12 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('regex', () => {
    it('throws an error if the input is neither a string or a regex', () => {
      error(
        () => regex(23),
        'some text',
        '[regex]: expected string or regular expression; received 23'
      )
    })
    it('accepts a string as input', () => {
      pass(regex('^\\w{3}'), 'Onomatopoeia', 'Ono')
    })
    it('accepts a regular expression as input', () => {
      pass(regex(/^\w{3}/i), 'onomatopoeia', 'ono')
    })
    it('is anchored even if an anchor is not in the regex', () => {
      fail(regex(/poe/), 'Onomatopoeia', {
        actual: '"Ono"',
        expected: ['a string matching /^poe/'],
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

  describe('any', () => {
    it('results in the next 1-byte character', () => {
      pass(any, 'Onomatopoeia', { result: 'O', index: 1 })
    })
    it('results in the next 2-byte character', () => {
      pass(any, 'Звукоподражание', { result: 'З', index: 2 })
    })
    it('results in the next 3-byte character', () => {
      pass(any, 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })
    it('results in the next 4-byte character', () => {
      pass(any, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })
    it('fails at EOF', () => {
      fail(any, '', { expected: ['any character'], actual: 'EOF' })
    })
  })

  describe('all', () => {
    it('results in all remaining 1-byte characters', () => {
      pass(all, 'Onomatopoeia', { result: 'Onomatopoeia', index: 12 })
    })
    it('results in all remaining 2-byte characters', () => {
      pass(all, 'Звукоподражание', { result: 'Звукоподражание', index: 30 })
    })
    it('results in all remaining 3-byte characters', () => {
      pass(all, 'คำเลียนเสียง', { result: 'คำเลียนเสียง', index: 36 })
    })
    it('results in all remaining 4-byte characters', () => {
      pass(all, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', index: 48 })
    })
    it('succeeds at EOF', () => {
      pass(all, '', { result: '', index: 0 })
    })
  })

  describe('eof', () => {
    it('fails if there are any remaining 1-byte characters', () => {
      fail(eof, 'Onomatopoeia', { expected: ['EOF'], actual: '"O"' })
    })
    it('fails if there are any remaining 2-byte characters', () => {
      fail(eof, 'Звукоподражание', { expected: ['EOF'], actual: '"З"' })
    })
    it('fails if there are any remaining 3-byte characters', () => {
      fail(eof, 'คำเลียนเสียง', { expected: ['EOF'], actual: '"ค"' })
    })
    it('fails if there are any remaining 4-byte characters', () => {
      fail(eof, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { expected: ['EOF'], actual: '"𝑂"' })
    })
    it('succeeds only at EOF', () => {
      pass(eof, '', { result: null, index: 0 })
    })
  })

  describe('oneOf', () => {
    it('checks the next charater against 1-byte characters', () => {
      const parser = oneOf('Onoma')
      pass(parser, 'Onomatopoeia', { result: 'O', index: 1 })
      pass(parser, 'matriculate', { result: 'm', index: 1 })
      fail(parser, 'Matriculate', {
        expected: ['one of "Onoma"'],
        actual: '"M"',
      })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = oneOf('Звуко')
      pass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      pass(parser, 'учитель', { result: 'у', index: 2 })
      fail(parser, 'Учитель', { expected: ['one of "Звуко"'], actual: '"У"' })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = oneOf('คำเลี')
      pass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      pass(parser, 'ลียน', { result: 'ล', index: 3 })
      fail(parser, 'ยง', { expected: ['one of "คำเลี"'], actual: '"ย"' })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = oneOf('𝑂𝑛𝑜𝑚𝑎')
      pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      pass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      fail(parser, 'matriculate', {
        expected: ['one of "𝑂𝑛𝑜𝑚𝑎"'],
        actual: '"m"',
      })
    })
  })

  describe('noneOf', () => {
    it('checks the next charater against 1-byte characters', () => {
      const parser = noneOf('Onoma')
      fail(parser, 'Onomatopoeia', {
        expected: ['none of "Onoma"'],
        actual: '"O"',
      })
      fail(parser, 'matriculate', {
        expected: ['none of "Onoma"'],
        actual: '"m"',
      })
      pass(parser, 'Matriculate', { result: 'M', index: 1 })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = noneOf('Звуко')
      fail(parser, 'Звукоподражание', {
        expected: ['none of "Звуко"'],
        actual: '"З"',
      })
      fail(parser, 'учитель', { expected: ['none of "Звуко"'], actual: '"у"' })
      pass(parser, 'Учитель', { result: 'У', index: 2 })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = noneOf('คำเลี')
      fail(parser, 'คำเลียนเสียง', {
        expected: ['none of "คำเลี"'],
        actual: '"ค"',
      })
      fail(parser, 'ลียน', { expected: ['none of "คำเลี"'], actual: '"ล"' })
      pass(parser, 'ยง', { result: 'ย', index: 3 })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = noneOf('𝑂𝑛𝑜𝑚𝑎')
      fail(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', {
        expected: ['none of "𝑂𝑛𝑜𝑚𝑎"'],
        actual: '"𝑂"',
      })
      fail(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', {
        expected: ['none of "𝑂𝑛𝑜𝑚𝑎"'],
        actual: '"𝑚"',
      })
      pass(parser, 'matriculate', { result: 'm', index: 1 })
    })
  })

  describe('digit', () => {
    it('succeeds on any single decimal digit', () => {
      pass(digit, '123', '1')
    })
    it('fails on any other character', () => {
      fail(digit, 'abc', { expected: ['a digit'], actual: '"a"' })
    })
    it('fails at EOF', () => {
      fail(digit, '', { expected: ['a digit'], actual: 'EOF' })
    })
  })

  describe('hexDigit', () => {
    it('succeeds on any single decimal digit', () => {
      pass(hexDigit, '123', '1')
      pass(hexDigit, 'abc', 'a')
    })
    it('fails on any other character', () => {
      fail(hexDigit, 'ghi', { expected: ['a hex digit'], actual: '"g"' })
    })
    it('fails at EOF', () => {
      fail(hexDigit, '', { expected: ['a hex digit'], actual: 'EOF' })
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
      fail(letter, '4', { expected: ['a letter'], actual: '"4"' })
      fail(letter, '۴', { expected: ['a letter'], actual: '"۴"' })
      fail(letter, '४', { expected: ['a letter'], actual: '"४"' })
      fail(letter, '৪', { expected: ['a letter'], actual: '"৪"' })
      fail(letter, '๔', { expected: ['a letter'], actual: '"๔"' })
      fail(letter, '᠔', { expected: ['a letter'], actual: '"᠔"' })
      fail(letter, '𝟜', { expected: ['a letter'], actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(letter, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(letter, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(letter, '¼', { expected: ['a letter'], actual: '"¼"' })
      fail(letter, '፬', { expected: ['a letter'], actual: '"፬"' })
      fail(letter, '⁴', { expected: ['a letter'], actual: '"⁴"' })
      fail(letter, '₄', { expected: ['a letter'], actual: '"₄"' })
      fail(letter, '④', { expected: ['a letter'], actual: '"④"' })
      fail(letter, '❹', { expected: ['a letter'], actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(letter, ' ', { expected: ['a letter'], actual: '" "' })
      fail(letter, '\t', { expected: ['a letter'], actual: '"\t"' })
      fail(letter, '\n', { expected: ['a letter'], actual: '"\n"' })
      fail(letter, ' ', { expected: ['a letter'], actual: '" "' })
      fail(letter, '\u2003', { expected: ['a letter'], actual: '"\u2003"' })
      fail(letter, '\u202f', { expected: ['a letter'], actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(letter, '(', { expected: ['a letter'], actual: '"("' })
      fail(letter, '｢', { expected: ['a letter'], actual: '"｢"' })
      fail(letter, ')', { expected: ['a letter'], actual: '")"' })
      fail(letter, '｣', { expected: ['a letter'], actual: '"｣"' })
      fail(letter, '!', { expected: ['a letter'], actual: '"!"' })
      fail(letter, '፣', { expected: ['a letter'], actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(letter, '$', { expected: ['a letter'], actual: '"$"' })
      fail(letter, '₯', { expected: ['a letter'], actual: '"₯"' })
      fail(letter, '+', { expected: ['a letter'], actual: '"+"' })
      fail(letter, '⫇', { expected: ['a letter'], actual: '"⫇"' })
      fail(letter, '©', { expected: ['a letter'], actual: '"©"' })
      fail(letter, '🀄', { expected: ['a letter'], actual: '"🀄"' })
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
      fail(alphanum, ' ', { expected: ['an alphanumeric'], actual: '" "' })
      fail(alphanum, '\t', { expected: ['an alphanumeric'], actual: '"\t"' })
      fail(alphanum, '\n', { expected: ['an alphanumeric'], actual: '"\n"' })
      fail(alphanum, ' ', { expected: ['an alphanumeric'], actual: '" "' })
      fail(alphanum, '\u2003', {
        expected: ['an alphanumeric'],
        actual: '"\u2003"',
      })
      fail(alphanum, '\u202f', {
        expected: ['an alphanumeric'],
        actual: '"\u202f"',
      })
    })
    it('fails on punctuation', () => {
      fail(alphanum, '(', { expected: ['an alphanumeric'], actual: '"("' })
      fail(alphanum, '｢', { expected: ['an alphanumeric'], actual: '"｢"' })
      fail(alphanum, ')', { expected: ['an alphanumeric'], actual: '")"' })
      fail(alphanum, '｣', { expected: ['an alphanumeric'], actual: '"｣"' })
      fail(alphanum, '!', { expected: ['an alphanumeric'], actual: '"!"' })
      fail(alphanum, '፣', { expected: ['an alphanumeric'], actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(alphanum, '$', { expected: ['an alphanumeric'], actual: '"$"' })
      fail(alphanum, '₯', { expected: ['an alphanumeric'], actual: '"₯"' })
      fail(alphanum, '+', { expected: ['an alphanumeric'], actual: '"+"' })
      fail(alphanum, '⫇', { expected: ['an alphanumeric'], actual: '"⫇"' })
      fail(alphanum, '©', { expected: ['an alphanumeric'], actual: '"©"' })
      fail(alphanum, '🀄', { expected: ['an alphanumeric'], actual: '"🀄"' })
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
      fail(upper, 'a', { expected: ['an uppercase letter'], actual: '"a"' })
      fail(upper, 'ž', { expected: ['an uppercase letter'], actual: '"ž"' })
      fail(upper, 'γ', { expected: ['an uppercase letter'], actual: '"γ"' })
      fail(upper, 'л', { expected: ['an uppercase letter'], actual: '"л"' })
      fail(upper, 'յ', { expected: ['an uppercase letter'], actual: '"յ"' })
      fail(upper, 'ე', { expected: ['an uppercase letter'], actual: '"ე"' })
      fail(upper, 'ⰽ', { expected: ['an uppercase letter'], actual: '"ⰽ"' })
    })
    it('fails on decimal digits', () => {
      fail(upper, '4', { expected: ['an uppercase letter'], actual: '"4"' })
      fail(upper, '۴', { expected: ['an uppercase letter'], actual: '"۴"' })
      fail(upper, '४', { expected: ['an uppercase letter'], actual: '"४"' })
      fail(upper, '৪', { expected: ['an uppercase letter'], actual: '"৪"' })
      fail(upper, '๔', { expected: ['an uppercase letter'], actual: '"๔"' })
      fail(upper, '᠔', { expected: ['an uppercase letter'], actual: '"᠔"' })
      fail(upper, '𝟜', { expected: ['an uppercase letter'], actual: '"𝟜"' })
    })
    it('succeeds on a single uppercase letter number', () => {
      pass(upper, 'Ⅳ', 'Ⅳ') // ROMAN NUMERAL FOUR
    })
    it('fails on lowercase letter numbers', () => {
      fail(upper, 'ⅳ', { expected: ['an uppercase letter'], actual: '"ⅳ"' })
    })
    it('fails on other numbers', () => {
      fail(upper, '¼', { expected: ['an uppercase letter'], actual: '"¼"' })
      fail(upper, '፬', { expected: ['an uppercase letter'], actual: '"፬"' })
      fail(upper, '⁴', { expected: ['an uppercase letter'], actual: '"⁴"' })
      fail(upper, '₄', { expected: ['an uppercase letter'], actual: '"₄"' })
      fail(upper, '④', { expected: ['an uppercase letter'], actual: '"④"' })
      fail(upper, '❹', { expected: ['an uppercase letter'], actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(upper, ' ', { expected: ['an uppercase letter'], actual: '" "' })
      fail(upper, '\t', { expected: ['an uppercase letter'], actual: '"\t"' })
      fail(upper, '\n', { expected: ['an uppercase letter'], actual: '"\n"' })
      fail(upper, ' ', { expected: ['an uppercase letter'], actual: '" "' })
      fail(upper, '\u2003',
        { expected: ['an uppercase letter'], actual: '"\u2003"' })
      fail(upper, '\u202f',
        { expected: ['an uppercase letter'], actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(upper, '(', { expected: ['an uppercase letter'], actual: '"("' })
      fail(upper, '｢', { expected: ['an uppercase letter'], actual: '"｢"' })
      fail(upper, ')', { expected: ['an uppercase letter'], actual: '")"' })
      fail(upper, '｣', { expected: ['an uppercase letter'], actual: '"｣"' })
      fail(upper, '!', { expected: ['an uppercase letter'], actual: '"!"' })
      fail(upper, '፣', { expected: ['an uppercase letter'], actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(upper, '$', { expected: ['an uppercase letter'], actual: '"$"' })
      fail(upper, '₯', { expected: ['an uppercase letter'], actual: '"₯"' })
      fail(upper, '+', { expected: ['an uppercase letter'], actual: '"+"' })
      fail(upper, '⫇', { expected: ['an uppercase letter'], actual: '"⫇"' })
      fail(upper, '©', { expected: ['an uppercase letter'], actual: '"©"' })
      fail(upper, '🀄', { expected: ['an uppercase letter'], actual: '"🀄"' })
    })
  })

  describe('lower', () => {
    it('fails on uppercase letters', () => {
      fail(lower, 'A', { expected: ['a lowercase letter'], actual: '"A"' })
      fail(lower, 'Ž', { expected: ['a lowercase letter'], actual: '"Ž"' })
      fail(lower, 'Γ', { expected: ['a lowercase letter'], actual: '"Γ"' })
      fail(lower, 'Л', { expected: ['a lowercase letter'], actual: '"Л"' })
      fail(lower, 'Յ', { expected: ['a lowercase letter'], actual: '"Յ"' })
      fail(lower, 'Ⴄ', { expected: ['a lowercase letter'], actual: '"Ⴄ"' })
      fail(lower, 'Ꮅ', { expected: ['a lowercase letter'], actual: '"Ꮅ"' })
      fail(lower, 'Ⰽ', { expected: ['a lowercase letter'], actual: '"Ⰽ"' })
    })
    it('fails on titlecase letters', () => {
      fail(lower, 'ǅ', { expected: ['a lowercase letter'], actual: '"ǅ"' })
      fail(lower, 'ǋ', { expected: ['a lowercase letter'], actual: '"ǋ"' })
      fail(lower, 'ῼ', { expected: ['a lowercase letter'], actual: '"ῼ"' })
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
      fail(lower, '4', { expected: ['a lowercase letter'], actual: '"4"' })
      fail(lower, '۴', { expected: ['a lowercase letter'], actual: '"۴"' })
      fail(lower, '४', { expected: ['a lowercase letter'], actual: '"४"' })
      fail(lower, '৪', { expected: ['a lowercase letter'], actual: '"৪"' })
      fail(lower, '๔', { expected: ['a lowercase letter'], actual: '"๔"' })
      fail(lower, '᠔', { expected: ['a lowercase letter'], actual: '"᠔"' })
      fail(lower, '𝟜', { expected: ['a lowercase letter'], actual: '"𝟜"' })
    })
    it('fails on uppercase letter numbers', () => {
      fail(lower, 'Ⅳ', { expected: ['a lowercase letter'], actual: '"Ⅳ"' })
    })
    it('succeeds on a single lowercase letter number', () => {
      pass(lower, 'ⅳ', 'ⅳ') // SMALL ROMAN NUMERAL FOUR
    })
    it('fails on other numbers', () => {
      fail(lower, '¼', { expected: ['a lowercase letter'], actual: '"¼"' })
      fail(lower, '፬', { expected: ['a lowercase letter'], actual: '"፬"' })
      fail(lower, '⁴', { expected: ['a lowercase letter'], actual: '"⁴"' })
      fail(lower, '₄', { expected: ['a lowercase letter'], actual: '"₄"' })
      fail(lower, '④', { expected: ['a lowercase letter'], actual: '"④"' })
      fail(lower, '❹', { expected: ['a lowercase letter'], actual: '"❹"' })
    })
    it('fails on whitespace', () => {
      fail(lower, ' ', { expected: ['a lowercase letter'], actual: '" "' })
      fail(lower, '\t', { expected: ['a lowercase letter'], actual: '"\t"' })
      fail(lower, '\n', { expected: ['a lowercase letter'], actual: '"\n"' })
      fail(lower, ' ', { expected: ['a lowercase letter'], actual: '" "' })
      fail(lower, '\u2003',
        { expected: ['a lowercase letter'], actual: '"\u2003"' })
      fail(lower, '\u202f',
        { expected: ['a lowercase letter'], actual: '"\u202f"' })
    })
    it('fails on punctuation', () => {
      fail(lower, '(', { expected: ['a lowercase letter'], actual: '"("' })
      fail(lower, '｢', { expected: ['a lowercase letter'], actual: '"｢"' })
      fail(lower, ')', { expected: ['a lowercase letter'], actual: '")"' })
      fail(lower, '｣', { expected: ['a lowercase letter'], actual: '"｣"' })
      fail(lower, '!', { expected: ['a lowercase letter'], actual: '"!"' })
      fail(lower, '፣', { expected: ['a lowercase letter'], actual: '"፣"' })
    })
    it('fails on symbols', () => {
      fail(lower, '$', { expected: ['a lowercase letter'], actual: '"$"' })
      fail(lower, '₯', { expected: ['a lowercase letter'], actual: '"₯"' })
      fail(lower, '+', { expected: ['a lowercase letter'], actual: '"+"' })
      fail(lower, '⫇', { expected: ['a lowercase letter'], actual: '"⫇"' })
      fail(lower, '©', { expected: ['a lowercase letter'], actual: '"©"' })
      fail(lower, '🀄', { expected: ['a lowercase letter'], actual: '"🀄"' })
    })
  })

  describe('space', () => {
    it('succeeds on a single character of UTF-8 whitespace', () => {
      pass(space, '\t', '\t')
      pass(space, '\n', '\n')
      pass(space, '\v', '\v')
      pass(space, '\f', '\f')
      pass(space, '\r', '\r')
      pass(space, ' ', ' ')
      pass(space, '\u0085', '\u0085')
      pass(space, '\u00a0', '\u00a0')
      pass(space, '\u1680', '\u1680')
      pass(space, '\u2000', '\u2000')
      pass(space, '\u2001', '\u2001')
      pass(space, '\u2002', '\u2002')
      pass(space, '\u2003', '\u2003')
      pass(space, '\u2004', '\u2004')
      pass(space, '\u2005', '\u2005')
      pass(space, '\u2006', '\u2006')
      pass(space, '\u2007', '\u2007')
      pass(space, '\u2008', '\u2008')
      pass(space, '\u2009', '\u2009')
      pass(space, '\u200a', '\u200a')
      pass(space, '\u2028', '\u2028')
      pass(space, '\u2029', '\u2029')
      pass(space, '\u202f', '\u202f')
      pass(space, '\u205f', '\u205f')
      pass(space, '\u3000', '\u3000')
    })
    it('succeeds only once', () => {
      pass(space, '     123', ' ')
      pass(space, '\r\nabc', '\r')
      pass(space, '\u3000\u1680\u202f', '\u3000')
    })
    it('fails on non-whitespace characters', () => {
      fail(space, 'O', { expected: ['whitespace'], actual: '"O"' })
      fail(space, 'З', { expected: ['whitespace'], actual: '"З"' })
      fail(space, 'ค', { expected: ['whitespace'], actual: '"ค"' })
      fail(space, '𝑂', { expected: ['whitespace'], actual: '"𝑂"' })
      fail(space, '\u180e', { expected: ['whitespace'], actual: '"\u180e"' })
      fail(space, '\u200b', { expected: ['whitespace'], actual: '"\u200b"' })
      fail(space, '\u200c', { expected: ['whitespace'], actual: '"\u200c"' })
      fail(space, '\u200d', { expected: ['whitespace'], actual: '"\u200d"' })
      fail(space, '\u2060', { expected: ['whitespace'], actual: '"\u2060"' })
    })
  })

  describe('tab', () => {
    it('succeeds on a single tab', () => {
      pass(tab, '\tabc', '\t')
    })
    it('fails on any other character combination', () => {
      fail(tab, 'Onomatopoeia', { expected: ['tab'], actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(tab, '', { expected: ['tab'], actual: 'EOF' })
    })
  })

  describe('cr', () => {
    it('succeeds on a single cr', () => {
      pass(cr, '\rabc', '\r')
    })
    it('fails on any other character combination', () => {
      fail(cr, 'Onoma', { expected: ['carriage return'], actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(cr, '', { expected: ['carriage return'], actual: 'EOF' })
    })
  })

  describe('lf', () => {
    it('succeeds on a single lf', () => {
      pass(lf, '\nabc', '\n')
    })
    it('fails on any other character combination', () => {
      fail(lf, 'Onoma', { expected: ['line feed'], actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(lf, '', { expected: ['line feed'], actual: 'EOF' })
    })
  })

  describe('crlf', () => {
    it('succeeds on a single crlf', () => {
      pass(crlf, '\r\nabc', '\r\n')
    })
    it('fails on any other character combination', () => {
      fail(crlf, '\nOnoma', { expected: ['CRLF'], actual: '"\n"' })
    })
    it('fails at EOF', () => {
      fail(crlf, '', { expected: ['CRLF'], actual: 'EOF' })
    })
  })

  describe('newline', () => {
    it('succeeds on a single lf, cr, or crlf', () => {
      pass(newline, '\nabc', '\n')
      pass(newline, '\rabc', '\r')
      pass(newline, '\r\nabc', '\r\n')
    })
    it('fails on any other character combination', () => {
      fail(newline, 'Onoma', { expected: ['newline'], actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(newline, '', { expected: ['newline'], actual: 'EOF' })
    })
  })

  describe('end', () => {
    it('succeeds on a single lf, cr, or crlf', () => {
      pass(end, '\nabc', '\n')
      pass(end, '\rabc', '\r')
      pass(end, '\r\nabc', '\r\n')
    })
    it('fails on any other character combination', () => {
      fail(end, 'Onoma', { expected: ['newline', 'EOF'], actual: '"O"' })
    })
    it('succeeds with a null at EOF', () => {
      pass(end, '', { result: null })
    })
  })

  describe('fail', () => {
    it('throws if the passed value is not a string', () => {
      error(pfail(23), 'abc', '[fail]: expected string; received 23')
    })
    it('fails with the supplied expected message', () => {
      fail(pfail('test message'), '', { expected: ['test message'], index: 0 })
    })
  })

  describe('unexpected', () => {
    it('throws if the passed value is not a string', () => {
      error(unexpected(23), 'abc', '[unexpected]: expected string; received 23')
    })
    it('fails with the supplied actual message', () => {
      fail(unexpected('test message'), '', { actual: 'test message', index: 0 })
    })
  })
})
