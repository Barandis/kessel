// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  any,
  char,
  chari,
  cr,
  digit,
  eof,
  hexDigit,
  lf,
  noneOf,
  oneOf,
  range,
  satisfies,
  tab,
} from 'kessel/parsers/char'
import { fail, pass } from 'test/helper'

describe('Character parsers', () => {
  describe('char', () => {
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
    const fn = char => char === char.toUpperCase()

    it('tests the next 1-byte character', () => {
      pass(satisfies(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      fail(satisfies(fn), 'onomatopoeia', {
        expected: 'a character that satisfies function "fn"',
        actual: '"o"',
      })
    })

    it('tests the next 2-byte character', () => {
      pass(satisfies(fn), 'Звукоподражание', { result: 'З', index: 2 })
      fail(satisfies(fn), 'звукоподражание', {
        expected: 'a character that satisfies function "fn"',
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
        expected: 'a character that satisfies function "<anonymous>"',
        actual: '"o"',
      })
    })

    it('fails automatically at EOF', () => {
      fail(satisfies(fn), '', {
        expected: 'a character that satisfies function "fn"',
        actual: 'EOF',
      })
    })
  })

  describe('range', () => {
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
      fail(any, '', { expected: 'any character', actual: 'EOF' })
    })
  })

  describe('eof', () => {
    it('fails if there are any remaining 1-byte characters', () => {
      fail(eof, 'Onomatopoeia', { expected: 'EOF', actual: '"O"' })
    })
    it('fails if there are any remaining 2-byte characters', () => {
      fail(eof, 'Звукоподражание', { expected: 'EOF', actual: '"З"' })
    })
    it('fails if there are any remaining 3-byte characters', () => {
      fail(eof, 'คำเลียนเสียง', { expected: 'EOF', actual: '"ค"' })
    })
    it('fails if there are any remaining 4-byte characters', () => {
      fail(eof, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { expected: 'EOF', actual: '"𝑂"' })
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
        expected: 'one of "O", "n", "o", "m", or "a"',
        actual: '"M"',
      })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = oneOf('Звуко')
      pass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      pass(parser, 'учитель', { result: 'у', index: 2 })
      fail(parser, 'Учитель', {
        expected: 'one of "З", "в", "у", "к", or "о"',
        actual: '"У"',
      })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = oneOf('คำเลี')
      pass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      pass(parser, 'ลียน', { result: 'ล', index: 3 })
      fail(parser, 'ยง', {
        expected: 'one of "ค", "ำ", "เ", "ล", or "ี"',
        actual: '"ย"',
      })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = oneOf('𝑂𝑛𝑜𝑚𝑎')
      pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      pass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      fail(parser, 'matriculate', {
        expected: 'one of "𝑂", "𝑛", "𝑜", "𝑚", or "𝑎"',
        actual: '"m"',
      })
    })
  })

  describe('noneOf', () => {
    it('checks the next charater against 1-byte characters', () => {
      const parser = noneOf('Onoma')
      fail(parser, 'Onomatopoeia', {
        expected: 'none of "O", "n", "o", "m", or "a"',
        actual: '"O"',
      })
      fail(parser, 'matriculate', {
        expected: 'none of "O", "n", "o", "m", or "a"',
        actual: '"m"',
      })
      pass(parser, 'Matriculate', { result: 'M', index: 1 })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = noneOf('Звуко')
      fail(parser, 'Звукоподражание', {
        expected: 'none of "З", "в", "у", "к", or "о"',
        actual: '"З"',
      })
      fail(parser, 'учитель', {
        expected: 'none of "З", "в", "у", "к", or "о"',
        actual: '"у"',
      })
      pass(parser, 'Учитель', { result: 'У', index: 2 })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = noneOf('คำเลี')
      fail(parser, 'คำเลียนเสียง', {
        expected: 'none of "ค", "ำ", "เ", "ล", or "ี"',
        actual: '"ค"',
      })
      fail(parser, 'ลียน', {
        expected: 'none of "ค", "ำ", "เ", "ล", or "ี"',
        actual: '"ล"',
      })
      pass(parser, 'ยง', { result: 'ย', index: 3 })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = noneOf('𝑂𝑛𝑜𝑚𝑎')
      fail(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', {
        expected: 'none of "𝑂", "𝑛", "𝑜", "𝑚", or "𝑎"',
        actual: '"𝑂"',
      })
      fail(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', {
        expected: 'none of "𝑂", "𝑛", "𝑜", "𝑚", or "𝑎"',
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
      fail(digit, 'abc', { expected: 'a digit', actual: '"a"' })
    })
    it('fails at EOF', () => {
      fail(digit, '', { expected: 'a digit', actual: 'EOF' })
    })
  })

  describe('hexDigit', () => {
    it('succeeds on any single decimal digit', () => {
      pass(hexDigit, '123', '1')
      pass(hexDigit, 'abc', 'a')
    })
    it('fails on any other character', () => {
      fail(hexDigit, 'ghi', { expected: 'a hex digit', actual: '"g"' })
    })
    it('fails at EOF', () => {
      fail(hexDigit, '', { expected: 'a hex digit', actual: 'EOF' })
    })
  })

  describe('tab', () => {
    it('succeeds on a single tab', () => {
      pass(tab, '\tabc', '\t')
    })
    it('fails on any other character combination', () => {
      fail(tab, 'Onomatopoeia', { expected: 'a tab', actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(tab, '', { expected: 'a tab', actual: 'EOF' })
    })
  })

  describe('cr', () => {
    it('succeeds on a single cr', () => {
      pass(cr, '\rabc', '\r')
    })
    it('fails on any other character combination', () => {
      fail(cr, 'Onoma', { expected: 'a carriage return', actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(cr, '', { expected: 'a carriage return', actual: 'EOF' })
    })
  })

  describe('lf', () => {
    it('succeeds on a single lf', () => {
      pass(lf, '\nabc', '\n')
    })
    it('fails on any other character combination', () => {
      fail(lf, 'Onoma', { expected: 'a line feed', actual: '"O"' })
    })
    it('fails at EOF', () => {
      fail(lf, '', { expected: 'a line feed', actual: 'EOF' })
    })
  })
})
