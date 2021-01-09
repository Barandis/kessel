// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alpha,
  any,
  anyOf,
  char,
  charI,
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
import { terror, tfail, tpass } from 'test/helper'

describe('Character parsers', () => {
  describe('char', () => {
    it('throws if something other than a single char is passed', () => {
      terror(
        char(0),
        '',
        '[char]: expected argument to be a one-character string; found 0',
      )
      terror(
        char({}),
        '',
        '[char]: expected argument to be a one-character string; found {}',
      )
      terror(
        char('ab'),
        '',
        '[char]: expected argument to be a one-character string; found "ab"',
      )
      terror(
        char(() => {}),
        '',
        '[char]: expected argument to be a one-character string; '
          + 'found function',
      )
      terror(
        char(),
        '',
        '[char]: expected argument to be a one-character string; '
          + 'found undefined',
      )
      terror(
        char(0, 'test'),
        '',
        '[char]: expected first argument to be a one-character string; found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        char('a', 0),
        '',
        '[char]: expected second argument to be a string; found 0',
      )
    })

    context('1-byte characters', () => {
      const parser = char('O')
      const parserm = char('O', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'Onomatopoeia', 'O')
        tpass(parserm, 'Onomatopoeia', 'O')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'topoeia', "'O'")
        tfail(parserm, 'topoeia', 'test')
      })
      it('fails if the case does not match', () => {
        tfail(parser, 'onomatopoeia', "'O'")
        tfail(parserm, 'onomatopoeia', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'O'")
        tfail(parserm, '', 'test')
      })
    })

    context('2-byte characters', () => {
      const parser = char('З')
      const parserm = char('З', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'Звукоподражание', 'З')
        tpass(parserm, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'подражание', "'З'")
        tfail(parserm, 'подражание', 'test')
      })
      it('fails if the case does not match', () => {
        tfail(parser, 'звукоподражание', "'З'")
        tfail(parserm, 'звукоподражание', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'З'")
        tfail(parserm, '', 'test')
      })
    })

    context('3-byte characters', () => {
      const parser = char('ค')
      const parserm = char('ค', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'คำเลียนเสียง', 'ค')
        tpass(parserm, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'ยนเสียง', "'ค'")
        tfail(parserm, 'ยนเสียง', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'ค'")
        tfail(parserm, '', 'test')
      })
    })

    context('4-byte characters', () => {
      const parser = char('𝑂')
      const parserm = char('𝑂', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
        tpass(parserm, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "'𝑂'")
        tfail(parserm, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'𝑂'")
        tfail(parserm, '', 'test')
      })
    })
  })

  describe('charI', () => {
    it('throws if something other than a single char is passed', () => {
      terror(
        charI(0),
        '',
        '[charI]: expected argument to be a one-character string; found 0',
      )
      terror(
        charI({}),
        '',
        '[charI]: expected argument to be a one-character string; found {}',
      )
      terror(
        charI('ab'),
        '',
        '[charI]: expected argument to be a one-character string; found "ab"',
      )
      terror(
        charI(0, 'test'),
        '',
        '[charI]: expected first argument to be a one-character string; '
          + 'found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        charI('a', 0),
        '',
        '[charI]: expected second argument to be a string; found 0',
      )
    })

    context('1-byte characters', () => {
      const parser = charI('O')
      const parserm = charI('O', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'Onomatopoeia', 'O')
        tpass(parserm, 'Onomatopoeia', 'O')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'topoeia', "'O'")
        tfail(parserm, 'topoeia', 'test')
      })
      it('succeeds if the case does not match', () => {
        tpass(parser, 'onomatopoeia', 'o')
        tpass(parserm, 'onomatopoeia', 'o')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'O'")
        tfail(parserm, '', 'test')
      })
    })

    context('2-byte characters', () => {
      const parser = charI('З')
      const parserm = charI('З', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'Звукоподражание', 'З')
        tpass(parserm, 'Звукоподражание', 'З')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'подражание', "'З'")
        tfail(parserm, 'подражание', 'test')
      })
      it('succeeds if the case does not match', () => {
        tpass(parser, 'звукоподражание', 'з')
        tpass(parserm, 'звукоподражание', 'з')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'З'")
        tfail(parserm, '', 'test')
      })
    })

    context('3-byte characters', () => {
      const parser = charI('ค')
      const parserm = charI('ค', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, 'คำเลียนเสียง', 'ค')
        tpass(parserm, 'คำเลียนเสียง', 'ค')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, 'ยนเสียง', "'ค'")
        tfail(parserm, 'ยนเสียง', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'ค'")
        tfail(parserm, '', 'test')
      })
    })

    context('4-byte characters', () => {
      const parser = charI('𝑂')
      const parserm = charI('𝑂', 'test')

      it('succeeds if the next character matches', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
        tpass(parserm, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂')
      })
      it('fails if the next character does not match', () => {
        tfail(parser, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "'𝑂'")
        tfail(parserm, '𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'test')
      })
      it('fails at EOF', () => {
        tfail(parser, '', "'𝑂'")
        tfail(parserm, '', 'test')
      })
    })
  })

  describe('satisfy', () => {
    const fn = char => char === char.toUpperCase()

    it('throws if a non-function is passed in', () => {
      terror(
        satisfy(0),
        '',
        '[satisfy]: expected argument to be a function; found 0',
      )
      terror(
        satisfy({}),
        '',
        '[satisfy]: expected argument to be a function; found {}',
      )
      terror(
        satisfy(Symbol.for('test')),
        '',
        '[satisfy]: expected argument to be a function; found Symbol(test)',
      )
      terror(
        satisfy(0, 'test'),
        '',
        '[satisfy]: expected first argument to be a function; found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        satisfy(fn, 0),
        '',
        '[satisfy]: expected second argument to be a string; found 0',
      )
    })
    it('tests the next 1-byte character', () => {
      tpass(satisfy(fn), 'Onomatopoeia', { result: 'O', index: 1 })
      tpass(satisfy(fn, 'test'), 'Onomatopoeia', { result: 'O', index: 1 })
      tfail(satisfy(fn), 'onomatopoeia', '')
      tfail(satisfy(fn, 'test'), 'onomatopoeia', 'test')
    })
    it('tests the next 2-byte character', () => {
      tpass(satisfy(fn), 'Звукоподражание', { result: 'З', index: 2 })
      tpass(satisfy(fn, 'test'), 'Звукоподражание', { result: 'З', index: 2 })
      tfail(satisfy(fn), 'звукоподражание', '')
      tfail(satisfy(fn, 'test'), 'звукоподражание', 'test')
    })
    it('tests the next 3-byte character', () => {
      tpass(satisfy(fn), 'คำเลียนเสียง', { result: 'ค', index: 3 })
      tpass(satisfy(fn, 'test'), 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })
    it('tests the next 4-byte character', () => {
      tpass(satisfy(fn), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      tpass(satisfy(fn, 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })
    it('fails automatically at EOF', () => {
      tfail(satisfy(fn), '', '')
      tfail(satisfy(fn, 'test'), '', 'test')
    })
  })

  describe('range', () => {
    it('throws if the first argument is not a character', () => {
      terror(
        range(0, '9'),
        '',
        '[range]: expected first argument to be a one-character string; '
          + 'found 0',
      )
    })
    it('throws if the second argument is not a character', () => {
      terror(
        range('0', 9),
        '',
        '[range]: expected second argument to be a one-character string; '
          + 'found 9',
      )
    })
    it('throws if the third argument exists and is not a string', () => {
      terror(
        range('0', '9', 0),
        '',
        '[range]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds if the next character is between the supplied two', () => {
      tpass(range('a', 'z'), 'abc', 'a')
      tpass(range('а', 'я'), 'цчш', 'ц')
      tpass(range('ก', 'ฮ'), 'รลว', 'ร')
      tpass(range('𝑎', '𝑧'), '𝑖𝑗𝑘', '𝑖')
      tpass(range('a', 'z', 'test'), 'abc', 'a')
      tpass(range('а', 'я', 'test'), 'цчш', 'ц')
      tpass(range('ก', 'ฮ', 'test'), 'รลว', 'ร')
      tpass(range('𝑎', '𝑧', 'test'), '𝑖𝑗𝑘', '𝑖')
    })
    it('fails if the next character is not between the supplied two', () => {
      tfail(range('a', 'z'), '123', "a character between 'a' and 'z'")
      tfail(range('а', 'я'), 'աբգ', "a character between 'а' and 'я'")
      tfail(range('ก', 'ฮ'), 'ａｂｃ', "a character between 'ก' and 'ฮ'")
      tfail(range('𝑎', '𝑧'), '𝒊𝒋𝒌', "a character between '𝑎' and '𝑧'")
      tfail(range('a', 'z', 'a-z'), '123', 'a-z')
      tfail(range('а', 'я', 'а-я'), 'աբգ', 'а-я')
      tfail(range('ก', 'ฮ', 'ก-ฮ'), 'ａｂｃ', 'ก-ฮ')
      tfail(range('𝑎', '𝑧', '𝑎-𝑧'), '𝒊𝒋𝒌', '𝑎-𝑧')
    })
    it('fails at EOF', () => {
      tfail(range('a', 'z'), '', "a character between 'a' and 'z'")
      tfail(range('a', 'z', 'a-z'), '', 'a-z')
    })
  })

  describe('any', () => {
    it('results in the next 1-byte character', () => {
      tpass(any, 'Onomatopoeia', { result: 'O', index: 1 })
    })
    it('results in the next 2-byte character', () => {
      tpass(any, 'Звукоподражание', { result: 'З', index: 2 })
    })
    it('results in the next 3-byte character', () => {
      tpass(any, 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })
    it('results in the next 4-byte character', () => {
      tpass(any, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })
    it('fails at EOF', () => {
      tfail(any, '', 'any character')
    })
  })

  describe('eof', () => {
    it('fails if there are any remaining 1-byte characters', () => {
      tfail(eof, 'Onomatopoeia', 'end of input')
    })
    it('fails if there are any remaining 2-byte characters', () => {
      tfail(eof, 'Звукоподражание', 'end of input')
    })
    it('fails if there are any remaining 3-byte characters', () => {
      tfail(eof, 'คำเลียนเสียง', 'end of input')
    })
    it('fails if there are any remaining 4-byte characters', () => {
      tfail(eof, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'end of input')
    })
    it('succeeds only at EOF', () => {
      tpass(eof, '', { result: null, index: 0 })
    })
  })

  describe('anyOf', () => {
    it('throws if the argument is not a string or an array', () => {
      terror(
        anyOf(0),
        '',
        '[anyOf]: expected a string or an array of characters; found 0',
      )
    })
    it('throws if the argument is an array of non-character strings', () => {
      terror(
        anyOf(['te', 'st']),
        '',
        '[anyOf]: expected a string or an array of characters; '
          + 'found ["te","st"]',
      )
      terror(
        anyOf(['', 'a']),
        '',
        '[anyOf]: expected a string or an array of characters; found ["","a"]',
      )
    })
    it('throws if the argument is an array of non-strings', () => {
      terror(
        anyOf([0, 1, 2]),
        '',
        '[anyOf]: expected a string or an array of characters; found [0,1,2]',
      )
    })
    it('checks the next charater against 1-byte characters', () => {
      const parser = anyOf('Onoma')
      tpass(parser, 'Onomatopoeia', { result: 'O', index: 1 })
      tpass(parser, 'matriculate', { result: 'm', index: 1 })
      tfail(parser, 'Matriculate', "any of 'O', 'n', 'o', 'm', or 'a'")
    })
    it('checks the next character against 2-byte characters', () => {
      const parser = anyOf('Звуко')
      tpass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      tpass(parser, 'учитель', { result: 'у', index: 2 })
      tfail(parser, 'Учитель', "any of 'З', 'в', 'у', 'к', or 'о'")
    })
    it('checks the next character against 3-byte characters', () => {
      const parser = anyOf('คำเลี')
      tpass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      tpass(parser, 'ลียน', { result: 'ล', index: 3 })
      tfail(parser, 'ยง', "any of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
    })
    it('checks the next character against 4-byte characters', () => {
      const parser = anyOf('𝑂𝑛𝑜𝑚𝑎')
      tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      tpass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      tfail(parser, 'matriculate', "any of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
    })
  })

  describe('noneOf', () => {
    it('throws if the argument is not a string or an array', () => {
      terror(
        noneOf(0),
        '',
        '[noneOf]: expected a string or an array of characters; found 0',
      )
    })
    it('throws if the argument is an array of non-character strings', () => {
      terror(
        noneOf(['te', 'st']),
        '',
        '[noneOf]: expected a string or an array of characters; '
          + 'found ["te","st"]',
      )
      terror(
        noneOf(['', 'a']),
        '',
        '[noneOf]: expected a string or an array of characters; found ["","a"]',
      )
    })
    it('throws if the argument is an array of non-strings', () => {
      terror(
        noneOf([0, 1, 2]),
        '',
        '[noneOf]: expected a string or an array of characters; found [0,1,2]',
      )
    })
    it('checks the next charater against 1-byte characters', () => {
      const parser = noneOf('Onoma')
      tfail(parser, 'Onomatopoeia', "none of 'O', 'n', 'o', 'm', or 'a'")
      tfail(parser, 'matriculate', "none of 'O', 'n', 'o', 'm', or 'a'")
      tpass(parser, 'Matriculate', { result: 'M', index: 1 })
    })
    it('checks the next character against 2-byte characters', () => {
      const parser = noneOf('Звуко')
      tfail(parser, 'Звукоподражание', "none of 'З', 'в', 'у', 'к', or 'о'")
      tfail(parser, 'учитель', "none of 'З', 'в', 'у', 'к', or 'о'")
      tpass(parser, 'Учитель', { result: 'У', index: 2 })
    })
    it('checks the next character against 3-byte characters', () => {
      const parser = noneOf('คำเลี')
      tfail(parser, 'คำเลียนเสียง', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      tfail(parser, 'ลียน', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      tpass(parser, 'ยง', { result: 'ย', index: 3 })
    })
    it('checks the next character against 4-byte characters', () => {
      const parser = noneOf('𝑂𝑛𝑜𝑚𝑎')
      tfail(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      tfail(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      tpass(parser, 'matriculate', { result: 'm', index: 1 })
    })
  })

  describe('digit', () => {
    it('succeeds on any single decimal digit', () => {
      tpass(digit, '123', '1')
    })
    it('fails on any other character', () => {
      tfail(digit, 'abc', 'a digit')
    })
    it('fails at EOF', () => {
      tfail(digit, '', 'a digit')
    })
  })

  describe('hex', () => {
    it('succeeds on any single decimal digit', () => {
      tpass(hex, '123', '1')
      tpass(hex, 'abc', 'a')
    })
    it('fails on any other character', () => {
      tfail(hex, 'ghi', 'a hexadecimal digit')
    })
    it('fails at EOF', () => {
      tfail(hex, '', 'a hexadecimal digit')
    })
  })

  describe('octal', () => {
    it('succeeds on any single octal digit', () => {
      tpass(octal, '123', '1')
    })
    it('fails on any other character', () => {
      tfail(octal, '890', 'an octal digit')
      tfail(octal, 'abc', 'an octal digit')
    })
    it('fails at EOF', () => {
      tfail(octal, '', 'an octal digit')
    })
  })

  describe('letter', () => {
    it('succeeds on uppercase letters', () => {
      tpass(letter, 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      tpass(letter, 'a', 'a')
    })
    it('fails on digits', () => {
      tfail(letter, '0', 'a letter')
    })
    it('fails on whitespace', () => {
      tfail(letter, ' ', 'a letter')
    })
  })

  describe('alpha', () => {
    it('succeeds on uppercase letters', () => {
      tpass(alpha, 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      tpass(alpha, 'a', 'a')
    })
    it('succeeds on digits', () => {
      tpass(alpha, '0', '0')
    })
    it('fails on whitespace', () => {
      tfail(alpha, ' ', 'an alphanumeric character')
    })
  })

  describe('upper', () => {
    it('succeeds on uppercase letters', () => {
      tpass(upper, 'A', 'A')
    })
    it('fails on lowercase letters', () => {
      tfail(upper, 'a', 'an uppercase letter')
    })
    it('fails on digits', () => {
      tfail(upper, '0', 'an uppercase letter')
    })
    it('fails on whitespace', () => {
      tfail(upper, ' ', 'an uppercase letter')
    })
  })

  describe('lower', () => {
    it('fails on uppercase letters', () => {
      tfail(lower, 'A', 'a lowercase letter')
    })
    it('succeeds on lowercase letters', () => {
      tpass(lower, 'a', 'a')
    })
    it('fails on digits', () => {
      tfail(lower, '0', 'a lowercase letter')
    })
    it('fails on whitespace', () => {
      tfail(lower, ' ', 'a lowercase letter')
    })
  })
})
