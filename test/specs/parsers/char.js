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
        fail(parser, 'topoeia', "'O'")
      })
      it('fails if the case does not match', () => {
        fail(parser, 'onomatopoeia', "'O'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'O'")
      })
    })

    context('2-byte characters', () => {
      const parser = char('З')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'подражание', "'З'")
      })
      it('fails if the case does not match', () => {
        fail(parser, 'звукоподражание', "'З'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'З'")
      })
    })

    context('3-byte characters', () => {
      const parser = char('ค')

      it('succeeds if the next character matches', () => {
        pass(parser, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'ยนเสียง', "'ค'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'ค'")
      })
    })

    context('4-byte characters', () => {
      const parser = char('𝑂')

      it('succeeds if the next character matches', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        fail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "'𝑂'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'𝑂'")
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
        fail(parser, 'topoeia', "'O'")
      })
      it('succeeds if the case does not match', () => {
        pass(parser, 'onomatopoeia', 'o')
      })
      it('fails at EOF', () => {
        fail(parser, '', "'O'")
      })
    })

    context('2-byte characters', () => {
      const parser = chari('З')

      it('succeeds if the next character matches', () => {
        pass(parser, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'подражание', "'З'")
      })
      it('fails if the case does not match', () => {
        pass(parser, 'звукоподражание', 'з')
      })
      it('fails at EOF', () => {
        fail(parser, '', "'З'")
      })
    })

    context('3-byte characters', () => {
      const parser = chari('ค')

      it('succeeds if the next character matches', () => {
        pass(parser, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        fail(parser, 'ยนเสียง', "'ค'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'ค'")
      })
    })

    context('4-byte characters', () => {
      const parser = chari('𝑂')

      it('succeeds if the next character matches', () => {
        pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        fail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "'𝑂'")
      })
      it('fails at EOF', () => {
        fail(parser, '', "'𝑂'")
      })
    })
  })

  describe('satisfy', () => {
    const fn = char => char === char.toUpperCase()

    it('tests the next 1-byte character', () => {
      pass(satisfy(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      fail(
        satisfy(fn), 'onomatopoeia', "a character that satisfies function 'fn'",
      )
    })

    it('tests the next 2-byte character', () => {
      pass(satisfy(fn), 'Звукоподражание', { result: 'З', index: 2 })
      fail(
        satisfy(fn),
        'звукоподражание',
        "a character that satisfies function 'fn'",
      )
    })

    it('tests the next 3-byte character', () => {
      pass(satisfy(fn), 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })

    it('tests the next 4-byte character', () => {
      pass(satisfy(fn), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })

    it('names an unnamed function <anonymous>', () => {
      fail(
        satisfy(char => char === char.toUpperCase()),
        'onomatopoeia',
        "a character that satisfies function '<anonymous>'",
      )
    })

    it('fails automatically at EOF', () => {
      fail(satisfy(fn), '', "a character that satisfies function 'fn'")
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
      fail(range('a', 'z'), '123', "a character between 'a' and 'z'")
      fail(range('а', 'я'), 'աբգ', "a character between 'а' and 'я'")
      fail(range('ก', 'ฮ'), 'ａｂｃ', "a character between 'ก' and 'ฮ'")
      fail(range('𝑎', '𝑧'), '𝒊𝒋𝒌', "a character between '𝑎' and '𝑧'")
    })
    it('fails at EOF', () => {
      fail(range('a', 'z'), '', "a character between 'a' and 'z'")
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
      fail(any, '', 'any character')
    })
  })

  describe('eof', () => {
    it('fails if there are any remaining 1-byte characters', () => {
      fail(eof, 'Onomatopoeia', 'end of input')
    })
    it('fails if there are any remaining 2-byte characters', () => {
      fail(eof, 'Звукоподражание', 'end of input')
    })
    it('fails if there are any remaining 3-byte characters', () => {
      fail(eof, 'คำเลียนเสียง', 'end of input')
    })
    it('fails if there are any remaining 4-byte characters', () => {
      fail(eof, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'end of input')
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
      fail(parser, 'Matriculate', "any of 'O', 'n', 'o', 'm', or 'a'")
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = anyOf('Звуко')
      pass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      pass(parser, 'учитель', { result: 'у', index: 2 })
      fail(parser, 'Учитель', "any of 'З', 'в', 'у', 'к', or 'о'")
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = anyOf('คำเลี')
      pass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      pass(parser, 'ลียน', { result: 'ล', index: 3 })
      fail(parser, 'ยง', "any of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = anyOf('𝑂𝑛𝑜𝑚𝑎')
      pass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      pass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      fail(parser, 'matriculate', "any of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
    })
  })

  describe('noneOf', () => {
    it('checks the next charater against 1-byte characters', () => {
      const parser = noneOf('Onoma')
      fail(parser, 'Onomatopoeia', "none of 'O', 'n', 'o', 'm', or 'a'")
      fail(parser, 'matriculate', "none of 'O', 'n', 'o', 'm', or 'a'")
      pass(parser, 'Matriculate', { result: 'M', index: 1 })
    })

    it('checks the next character against 2-byte characters', () => {
      const parser = noneOf('Звуко')
      fail(parser, 'Звукоподражание', "none of 'З', 'в', 'у', 'к', or 'о'")
      fail(parser, 'учитель', "none of 'З', 'в', 'у', 'к', or 'о'")
      pass(parser, 'Учитель', { result: 'У', index: 2 })
    })

    it('checks the next character against 3-byte characters', () => {
      const parser = noneOf('คำเลี')
      fail(parser, 'คำเลียนเสียง', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      fail(parser, 'ลียน', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      pass(parser, 'ยง', { result: 'ย', index: 3 })
    })

    it('checks the next character against 4-byte characters', () => {
      const parser = noneOf('𝑂𝑛𝑜𝑚𝑎')
      fail(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      fail(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      pass(parser, 'matriculate', { result: 'm', index: 1 })
    })
  })

  describe('digit', () => {
    it('succeeds on any single decimal digit', () => {
      pass(digit, '123', '1')
    })
    it('fails on any other character', () => {
      fail(digit, 'abc', 'a digit')
    })
    it('fails at EOF', () => {
      fail(digit, '', 'a digit')
    })
  })

  describe('hex', () => {
    it('succeeds on any single decimal digit', () => {
      pass(hex, '123', '1')
      pass(hex, 'abc', 'a')
    })
    it('fails on any other character', () => {
      fail(hex, 'ghi', 'a hexadecimal digit')
    })
    it('fails at EOF', () => {
      fail(hex, '', 'a hexadecimal digit')
    })
  })

  describe('octal', () => {
    it('succeeds on any single octal digit', () => {
      pass(octal, '123', '1')
    })
    it('fails on any other character', () => {
      fail(octal, '890', 'an octal digit')
      fail(octal, 'abc', 'an octal digit')
    })
    it('fails at EOF', () => {
      fail(octal, '', 'an octal digit')
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
      fail(letter, '0', 'a letter')
    })
    it('fails on whitespace', () => {
      fail(letter, ' ', 'a letter')
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
      fail(alpha, ' ', 'an alphanumeric character')
    })
  })

  describe('upper', () => {
    it('succeeds on uppercase letters', () => {
      pass(upper, 'A', 'A')
    })
    it('fails on lowercase letters', () => {
      fail(upper, 'a', 'an uppercase letter')
    })
    it('fails on digits', () => {
      fail(upper, '0', 'an uppercase letter')
    })
    it('fails on whitespace', () => {
      fail(upper, ' ', 'an uppercase letter')
    })
  })

  describe('lower', () => {
    it('fails on uppercase letters', () => {
      fail(lower, 'A', 'a lowercase letter')
    })
    it('succeeds on lowercase letters', () => {
      pass(lower, 'a', 'a')
    })
    it('fails on digits', () => {
      fail(lower, '0', 'a lowercase letter')
    })
    it('fails on whitespace', () => {
      fail(lower, ' ', 'a lowercase letter')
    })
  })
})
