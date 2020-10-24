// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  all,
  any,
  eof,
  noneOf,
  oneOf,
  regex,
  satisfies,
  string,
  stringi,
} from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Recognizers', () => {
  describe('string', () => {
    it('throws an error if a non-string is passed in', () => {
      error(
        string(23),
        'some text',
        'String parser requires string input; got [object Number]'
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
          actual: '"onoma"',
          index: 0,
        })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ono', {
          expected: ['"Onoma"'],
          actual: '"Ono"',
          index: 0,
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
        fail(parser, 'звукоподражание', { actual: '"звуко"', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Зву', { actual: '"Зву"', index: 0 })
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
        fail(parser, 'คำเ', { actual: '"คำเ"', index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { actual: '"𝑂𝑛𝑜"', index: 0 })
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
        'String parser requires string input; got [object Number]'
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
          index: 0,
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
        fail(parser, 'Зву', { actual: '"Зву"', index: 0 })
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
        fail(parser, 'คำเ', { actual: '"คำเ"', index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { actual: '"𝑂𝑛𝑜"', index: 0 })
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
        'Regex parser requires regular expression or string input; got '
          + '[object Number]'
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

  describe('satisfies', () => {
    it('fails if the supplied value is not a function', () => {
      error(
        satisfies(23),
        'some text',
        'satisfies parser requires a function; got [object Number]'
      )
    })

    const fn = char => char === char.toUpperCase()

    it('tests the next 1-byte character', () => {
      pass(satisfies(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      fail(satisfies(fn), 'onomatopoeia', {
        expected: ['a character satisfying function fn'],
        actual: '"o"',
      })
    })

    it('tests the next 2-byte character', () => {
      pass(satisfies(fn), 'Звукоподражание', { result: 'З', index: 2 })
      fail(satisfies(fn), 'звукоподражание', {
        expected: ['a character satisfying function fn'],
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
        expected: ['a character satisfying function <anonymous>'],
        actual: '"o"',
      })
    })

    it('fails automatically at EOF', () => {
      fail(satisfies(fn), '', {
        expected: ['a character satisfying function fn'],
        actual: 'EOF',
      })
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
})
