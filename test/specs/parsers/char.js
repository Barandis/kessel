// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alpha,
  any,
  oneof,
  char,
  digit,
  eof,
  hex,
  ichar,
  letter,
  lower,
  noneof,
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
        () => char(0),
        '',
        '[char]: expected argument to be a one-character string; found 0',
      )
      terror(
        () => char({}),
        '',
        '[char]: expected argument to be a one-character string; found {}',
      )
      terror(
        () => char('ab'),
        '',
        '[char]: expected argument to be a one-character string; found "ab"',
      )
      terror(
        () => char(() => {}),
        '',
        '[char]: expected argument to be a one-character string; '
          + 'found function',
      )
      terror(
        () => char(),
        '',
        '[char]: expected argument to be a one-character string; '
          + 'found undefined',
      )
      terror(
        () => char(0, 'test'),
        '',
        '[char]: expected first argument to be a one-character string; found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        () => char('a', 0),
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

  describe('ichar', () => {
    it('throws if something other than a single char is passed', () => {
      terror(
        () => ichar(0),
        '',
        '[ichar]: expected argument to be a one-character string; found 0',
      )
      terror(
        () => ichar({}),
        '',
        '[ichar]: expected argument to be a one-character string; found {}',
      )
      terror(
        () => ichar('ab'),
        '',
        '[ichar]: expected argument to be a one-character string; found "ab"',
      )
      terror(
        () => ichar(0, 'test'),
        '',
        '[ichar]: expected first argument to be a one-character string; '
          + 'found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        () => ichar('a', 0),
        '',
        '[ichar]: expected second argument to be a string; found 0',
      )
    })

    context('1-byte characters', () => {
      const parser = ichar('O')
      const parserm = ichar('O', 'test')

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
      const parser = ichar('З')
      const parserm = ichar('З', 'test')

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
      const parser = ichar('ค')
      const parserm = ichar('ค', 'test')

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
      const parser = ichar('𝑂')
      const parserm = ichar('𝑂', 'test')

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
        () => satisfy(0),
        '',
        '[satisfy]: expected argument to be a function; found 0',
      )
      terror(
        () => satisfy({}),
        '',
        '[satisfy]: expected argument to be a function; found {}',
      )
      terror(
        () => satisfy(Symbol.for('test')),
        '',
        '[satisfy]: expected argument to be a function; found Symbol(test)',
      )
      terror(
        () => satisfy(0, 'test'),
        '',
        '[satisfy]: expected first argument to be a function; found 0',
      )
    })
    it('throws if second argument exists and is not a string', () => {
      terror(
        () => satisfy(fn, 0),
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
        () => range(0, '9'),
        '',
        '[range]: expected first argument to be a one-character string; '
          + 'found 0',
      )
    })
    it('throws if the second argument is not a character', () => {
      terror(
        () => range('0', 9),
        '',
        '[range]: expected second argument to be a one-character string; '
          + 'found 9',
      )
    })
    it('throws if the third argument exists and is not a string', () => {
      terror(
        () => range('0', '9', 0),
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
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => any(0), '', '[any]: expected argument to be a string; found 0',
      )
    })
    it('results in the next 1-byte character', () => {
      tpass(any(), 'Onomatopoeia', { result: 'O', index: 1 })
      tpass(any('test'), 'Onomatopoeia', { result: 'O', index: 1 })
    })
    it('results in the next 2-byte character', () => {
      tpass(any(), 'Звукоподражание', { result: 'З', index: 2 })
      tpass(any('test'), 'Звукоподражание', { result: 'З', index: 2 })
    })
    it('results in the next 3-byte character', () => {
      tpass(any(), 'คำเลียนเสียง', { result: 'ค', index: 3 })
      tpass(any('test'), 'คำเลียนเสียง', { result: 'ค', index: 3 })
    })
    it('results in the next 4-byte character', () => {
      tpass(any(), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      tpass(any('test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
    })
    it('fails at EOF', () => {
      tfail(any(), '', 'any character')
      tfail(any('test'), '', 'test')
    })
  })

  describe('eof', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => eof(0), '', '[eof]: expected argument to be a string; found 0',
      )
    })
    it('fails if there are any remaining 1-byte characters', () => {
      tfail(eof(), 'Onomatopoeia', 'end of input')
      tfail(eof('test'), 'Onomatopoeia', 'test')
    })
    it('fails if there are any remaining 2-byte characters', () => {
      tfail(eof(), 'Звукоподражание', 'end of input')
      tfail(eof('test'), 'Звукоподражание', 'test')
    })
    it('fails if there are any remaining 3-byte characters', () => {
      tfail(eof(), 'คำเลียนเสียง', 'end of input')
      tfail(eof('test'), 'คำเลียนเสียง', 'test')
    })
    it('fails if there are any remaining 4-byte characters', () => {
      tfail(eof(), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'end of input')
      tfail(eof('test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', 'test')
    })
    it('succeeds only at EOF', () => {
      tpass(eof(), '', { result: null, index: 0 })
      tpass(eof('test'), '', { result: null, index: 0 })
    })
  })

  describe('oneof', () => {
    it('throws if the argument is not a string or an array', () => {
      terror(
        () => oneof(0),
        '',
        '[oneof]: expected argument to be a string or an array of characters; '
          + 'found 0',
      )
      terror(
        () => oneof(0, 'test'),
        '',
        '[oneof]: expected first argument to be a string or an array of '
          + 'characters; found 0',
      )
    })
    it('throws if the argument is an array of non-character strings', () => {
      terror(
        () => oneof(['te', 'st']),
        '',
        '[oneof]: expected argument to be a string or an array of characters; '
          + 'found ["te","st"]',
      )
      terror(
        () => oneof(['', 'a']),
        '',
        '[oneof]: expected argument to be a string or an array of characters; '
          + 'found ["","a"]',
      )
    })
    it('throws if the argument is an array of non-strings', () => {
      terror(
        () => oneof([0, 1, 2]),
        '',
        '[oneof]: expected argument to be a string or an array of characters; '
          + 'found [0,1,2]',
      )
    })
    it('throws if the second argument exists and is not a string', () => {
      terror(
        () => oneof('abc', 0),
        '',
        '[oneof]: expected second argument to be a string; found 0',
      )
    })
    it('checks the next charater against 1-byte characters', () => {
      const parser = oneof('Onoma')
      const parserm = oneof('Onoma', 'test')

      tpass(parser, 'Onomatopoeia', { result: 'O', index: 1 })
      tpass(parser, 'matriculate', { result: 'm', index: 1 })
      tpass(parserm, 'matriculate', { result: 'm', index: 1 })
      tfail(parser, 'Matriculate', "one of 'O', 'n', 'o', 'm', or 'a'")
      tfail(parserm, 'Matriculate', 'test')
    })
    it('checks the next character against 2-byte characters', () => {
      const parser = oneof('Звуко')
      const parserm = oneof('Звуко', 'test')

      tpass(parser, 'Звукоподражание', { result: 'З', index: 2 })
      tpass(parser, 'учитель', { result: 'у', index: 2 })
      tpass(parserm, 'учитель', { result: 'у', index: 2 })
      tfail(parser, 'Учитель', "one of 'З', 'в', 'у', 'к', or 'о'")
      tfail(parserm, 'Учитель', 'test')
    })
    it('checks the next character against 3-byte characters', () => {
      const parser = oneof('คำเลี')
      const parserm = oneof('คำเลี', 'test')

      tpass(parser, 'คำเลียนเสียง', { result: 'ค', index: 3 })
      tpass(parser, 'ลียน', { result: 'ล', index: 3 })
      tpass(parserm, 'ลียน', { result: 'ล', index: 3 })
      tfail(parser, 'ยง', "one of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      tfail(parserm, 'ยง', 'test')
    })
    it('checks the next character against 4-byte characters', () => {
      const parser = oneof('𝑂𝑛𝑜𝑚𝑎')
      const parserm = oneof('𝑂𝑛𝑜𝑚𝑎', 'test')

      tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂', index: 4 })
      tpass(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      tpass(parserm, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', { result: '𝑚', index: 4 })
      tfail(parser, 'matriculate', "one of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      tfail(parserm, 'matriculate', 'test')
    })
    it('fails at EOF', () => {
      tfail(oneof('abc'), '', "one of 'a', 'b', or 'c'")
      tfail(oneof('abc', 'abc'), '', 'abc')
    })
  })

  describe('noneof', () => {
    it('throws if the argument is not a string or an array', () => {
      terror(
        () => noneof(0),
        '',
        '[noneof]: expected argument to be a string or an array of characters; '
          + 'found 0',
      )
      terror(
        () => noneof(0, 'test'),
        '',
        '[noneof]: expected first argument to be a string or an array of '
          + 'characters; found 0',
      )
    })
    it('throws if the argument is an array of non-character strings', () => {
      terror(
        () => noneof(['te', 'st']),
        '',
        '[noneof]: expected argument to be a string or an array of characters; '
          + 'found ["te","st"]',
      )
      terror(
        () => noneof(['', 'a']),
        '',
        '[noneof]: expected argument to be a string or an array of characters; '
          + 'found ["","a"]',
      )
    })
    it('throws if the argument is an array of non-strings', () => {
      terror(
        () => noneof([0, 1, 2]),
        '',
        '[noneof]: expected argument to be a string or an array of characters; '
          + 'found [0,1,2]',
      )
    })
    it('throws if the second argument exists and is not a string', () => {
      terror(
        () => noneof('abc', 0),
        '',
        '[noneof]: expected second argument to be a string; found 0',
      )
    })
    it('checks the next charater against 1-byte characters', () => {
      const parser = noneof('Onoma')
      const parserm = noneof('Onoma', 'test')

      tfail(parser, 'Onomatopoeia', "none of 'O', 'n', 'o', 'm', or 'a'")
      tfail(parser, 'matriculate', "none of 'O', 'n', 'o', 'm', or 'a'")
      tfail(parserm, 'matriculate', 'test')
      tpass(parser, 'Matriculate', { result: 'M', index: 1 })
      tpass(parserm, 'Matriculate', { result: 'M', index: 1 })
    })
    it('checks the next character against 2-byte characters', () => {
      const parser = noneof('Звуко')
      const parserm = noneof('Звуко', 'test')

      tfail(parser, 'Звукоподражание', "none of 'З', 'в', 'у', 'к', or 'о'")
      tfail(parser, 'учитель', "none of 'З', 'в', 'у', 'к', or 'о'")
      tfail(parserm, 'учитель', 'test')
      tpass(parser, 'Учитель', { result: 'У', index: 2 })
      tpass(parserm, 'Учитель', { result: 'У', index: 2 })
    })
    it('checks the next character against 3-byte characters', () => {
      const parser = noneof('คำเลี')
      const parserm = noneof('คำเลี', 'test')

      tfail(parser, 'คำเลียนเสียง', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      tfail(parser, 'ลียน', "none of 'ค', 'ำ', 'เ', 'ล', or 'ี'")
      tfail(parserm, 'ลียน', 'test')
      tpass(parser, 'ยง', { result: 'ย', index: 3 })
      tpass(parserm, 'ยง', { result: 'ย', index: 3 })
    })
    it('checks the next character against 4-byte characters', () => {
      const parser = noneof('𝑂𝑛𝑜𝑚𝑎')
      const parserm = noneof('𝑂𝑛𝑜𝑚𝑎', 'test')

      tfail(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      tfail(parser, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', "none of '𝑂', '𝑛', '𝑜', '𝑚', or '𝑎'")
      tfail(parserm, '𝑚𝑎𝑡𝑟𝑖𝑐𝑢𝑙𝑎𝑡𝑒', 'test')
      tpass(parser, 'matriculate', { result: 'm', index: 1 })
      tpass(parserm, 'matriculate', { result: 'm', index: 1 })
    })
    it('fails at EOF', () => {
      tfail(noneof('abc'), '', "none of 'a', 'b', or 'c'")
      tfail(noneof('abc', 'not abc'), '', 'not abc')
    })
  })

  describe('digit', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => digit(0),
        '',
        '[digit]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on any single decimal digit', () => {
      tpass(digit(), '123', '1')
      tpass(digit('test'), '123', '1')
    })
    it('fails on any other character', () => {
      tfail(digit(), 'abc', 'a digit')
      tfail(digit('test'), 'abc', 'test')
    })
    it('fails at EOF', () => {
      tfail(digit(), '', 'a digit')
      tfail(digit('test'), '', 'test')
    })
  })

  describe('hex', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => hex(0), '', '[hex]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on any single decimal digit', () => {
      tpass(hex(), '123', '1')
      tpass(hex(), 'abc', 'a')
      tpass(hex('test'), 'abc', 'a')
    })
    it('fails on any other character', () => {
      tfail(hex(), 'ghi', 'a hexadecimal digit')
      tfail(hex('test'), 'ghi', 'test')
    })
    it('fails at EOF', () => {
      tfail(hex(), '', 'a hexadecimal digit')
      tfail(hex('test'), '', 'test')
    })
  })

  describe('octal', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => octal(0),
        '',
        '[octal]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on any single octal digit', () => {
      tpass(octal(), '123', '1')
      tpass(octal('test'), '123', '1')
    })
    it('fails on any other character', () => {
      tfail(octal(), '890', 'an octal digit')
      tfail(octal(), 'abc', 'an octal digit')
      tfail(octal('test'), 'abc', 'test')
    })
    it('fails at EOF', () => {
      tfail(octal(), '', 'an octal digit')
      tfail(octal('test'), '', 'test')
    })
  })

  describe('letter', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => letter(0),
        '',
        '[letter]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on uppercase letters', () => {
      tpass(letter(), 'A', 'A')
      tpass(letter('test'), 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      tpass(letter(), 'a', 'a')
      tpass(letter('test'), 'a', 'a')
    })
    it('fails on digits', () => {
      tfail(letter(), '0', 'a letter')
      tfail(letter('test'), '0', 'test')
    })
    it('fails on whitespace', () => {
      tfail(letter(), ' ', 'a letter')
      tfail(letter('test'), ' ', 'test')
    })
    it('fails at EOF', () => {
      tfail(letter(), '', 'a letter')
      tfail(letter('test'), '', 'test')
    })
  })

  describe('alpha', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => alpha(0),
        '',
        '[alpha]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on uppercase letters', () => {
      tpass(alpha(), 'A', 'A')
      tpass(alpha('test'), 'A', 'A')
    })
    it('succeeds on lowercase letters', () => {
      tpass(alpha(), 'a', 'a')
      tpass(alpha('test'), 'a', 'a')
    })
    it('succeeds on digits', () => {
      tpass(alpha(), '0', '0')
      tpass(alpha('test'), '0', '0')
    })
    it('fails on whitespace', () => {
      tfail(alpha(), ' ', 'an alphanumeric character')
      tfail(alpha('test'), ' ', 'test')
    })
    it('fails at EOF', () => {
      tfail(alpha(), '', 'an alphanumeric character')
      tfail(alpha('test'), '', 'test')
    })
  })

  describe('upper', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => upper(0),
        '',
        '[upper]: expected argument to be a string; found 0',
      )
    })
    it('succeeds on uppercase letters', () => {
      tpass(upper(), 'A', 'A')
      tpass(upper('test'), 'A', 'A')
    })
    it('fails on lowercase letters', () => {
      tfail(upper(), 'a', 'an uppercase letter')
      tfail(upper('test'), 'a', 'test')
    })
    it('fails on digits', () => {
      tfail(upper(), '0', 'an uppercase letter')
      tfail(upper('test'), '0', 'test')
    })
    it('fails on whitespace', () => {
      tfail(upper(), ' ', 'an uppercase letter')
      tfail(upper('test'), ' ', 'test')
    })
    it('fails at EOF', () => {
      tfail(upper(), '', 'an uppercase letter')
      tfail(upper('test'), '', 'test')
    })
  })

  describe('lower', () => {
    it('throws if its argument exists and is not a string', () => {
      terror(
        () => lower(0),
        '',
        '[lower]: expected argument to be a string; found 0',
      )
    })
    it('fails on uppercase letters', () => {
      tfail(lower(), 'A', 'a lowercase letter')
      tfail(lower('test'), 'A', 'test')
    })
    it('succeeds on lowercase letters', () => {
      tpass(lower(), 'a', 'a')
      tpass(lower('test'), 'a', 'a')
    })
    it('fails on digits', () => {
      tfail(lower(), '0', 'a lowercase letter')
      tfail(lower('test'), '0', 'test')
    })
    it('fails on whitespace', () => {
      tfail(lower(), ' ', 'a lowercase letter')
      tfail(lower('test'), ' ', 'test')
    })
    it('fails at EOF', () => {
      tfail(lower(), '', 'a lowercase letter')
      tfail(lower('test'), '', 'test')
    })
  })
})
