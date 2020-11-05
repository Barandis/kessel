// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alpha,
  any,
  anyOf,
  char,
  chari,
  digit,
  eof,
  hex,
  letter,
  lower,
  noneOf,
  octal,
  range,
  satisfy,
  upper,
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

  describe('satisfy', () => {
    const fn = char => char === char.toUpperCase()

    it('tests the next 1-byte character', () => {
      pass(satisfy(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      fail(satisfy(fn), 'onomatopoeia', {
        expected: 'a character that satisfies function "fn"',
        actual: '"o"',
      })
    })

    it('tests the next 2-byte character', () => {
      pass(satisfy(fn), 'Звукоподражание', { result: 'З', index: 2 })
      fail(satisfy(fn), 'звукоподражание', {
        expected: 'a character that satisfies function "fn"',
        actual: '"з"',
      })
    })

    it('tests the next 3-byte character', () => {
      pass(satisfy(fn), 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })

    it('tests the next 4-byte character', () => {
      pass(satisfy(fn), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })

    it('names an unnamed function <anonymous>', () => {
      fail(satisfy(char => char === char.toUpperCase()), 'onomatopoeia', {
        expected: 'a character that satisfies function "<anonymous>"',
        actual: '"o"',
      })
    })

    it('fails automatically at EOF', () => {
      fail(satisfy(fn), '', {
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

  describe('anyOf', () => {
    it('checks the next charater against 1-byte characters', () => {
      const parser = anyOf('Onoma')
      pass(parser, 'Onomatopoeia', { result: 'O', index: 1 })
      pass(parser, 'matriculate', { result: 'm', index: 1 })
      fail(parser, 'Matriculate', {
        expected: 'any of "O", "n", "o", "m", or "a"',
        actual: '"M"',
      })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = anyOf('Звуко')
      pass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      pass(parser, 'учитель', { result: 'у', index: 2 })
      fail(parser, 'Учитель', {
        expected: 'any of "З", "в", "у", "к", or "о"',
        actual: '"У"',
      })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = anyOf('คำเลี')
      pass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      pass(parser, 'ลียน', { result: 'ล', index: 3 })
      fail(parser, 'ยง', {
        expected: 'any of "ค", "ำ", "เ", "ล", or "ี"',
        actual: '"ย"',
      })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = anyOf('𝑂𝑛𝑜𝑚𝑎')
      pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      pass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      fail(parser, 'matriculate', {
        expected: 'any of "𝑂", "𝑛", "𝑜", "𝑚", or "𝑎"',
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

  describe('hex', () => {
    it('succeeds on any single decimal digit', () => {
      pass(hex, '123', '1')
      pass(hex, 'abc', 'a')
    })
    it('fails on any other character', () => {
      fail(hex, 'ghi', { expected: 'a hex digit', actual: '"g"' })
    })
    it('fails at EOF', () => {
      fail(hex, '', { expected: 'a hex digit', actual: 'EOF' })
    })
  })

  describe('octal', () => {
    it('succeeds on any single octal digit', () => {
      pass(octal, '123', '1')
    })
    it('fails on any other character', () => {
      fail(octal, '890', { expected: 'an octal digit', actual: '"8"' })
      fail(octal, 'abc', { expected: 'an octal digit', actual: '"a"' })
    })
    it('fails at EOF', () => {
      fail(octal, '', { expected: 'an octal digit', actual: 'EOF' })
    })
  })

  describe('letter', () => {
    it('succeeds on uppercase letters', () => {
      pass(letter, 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      pass(letter, 'a', 'a')
    })
    it('fails on digits', () => {
      fail(letter, '0', { expected: 'a letter', actual: '"0"' })
    })
    it('fails on whitespace', () => {
      fail(letter, ' ', { expected: 'a letter', actual: '" "' })
    })
  })

  describe('alpha', () => {
    it('succeeds on uppercase letters', () => {
      pass(alpha, 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      pass(alpha, 'a', 'a')
    })
    it('succeeds on digits', () => {
      pass(alpha, '0', '0')
    })
    it('fails on whitespace', () => {
      fail(alpha, ' ', { expected: 'an alphanumeric character', actual: '" "' })
    })
  })

  describe('upper', () => {
    it('succeeds on uppercase letters', () => {
      pass(upper, 'A', 'A')
    })
    it('fails on lowercase letters', () => {
      fail(upper, 'a', { expected: 'an uppercase letter', actual: '"a"' })
    })
    it('fails on digits', () => {
      fail(upper, '0', { expected: 'an uppercase letter', actual: '"0"' })
    })
    it('fails on whitespace', () => {
      fail(upper, ' ', { expected: 'an uppercase letter', actual: '" "' })
    })
  })

  describe('lower', () => {
    it('fails on uppercase letters', () => {
      fail(lower, 'A', { expected: 'a lowercase letter', actual: '"A"' })
    })
    it('succeeds on lowercase letters', () => {
      pass(lower, 'a', 'a')
    })
    it('fails on digits', () => {
      fail(lower, '0', { expected: 'a lowercase letter', actual: '"0"' })
    })
    it('fails on whitespace', () => {
      fail(lower, ' ', { expected: 'a lowercase letter', actual: '" "' })
    })
  })
})
