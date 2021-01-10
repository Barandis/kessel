// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { all, anystr, istr, str } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

describe('String parsers', () => {
  describe('str', () => {
    it('throws if its first argument is not a string', () => {
      terror(str(0), '', '[str]: expected argument to be a string; found 0')
      terror(
        str(0, 'test'),
        '',
        '[str]: expected first argument to be a string; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        str('test', 0),
        '',
        '[str]: expected second argument to be a string; found 0',
      )
    })
    it('fails at the end of input', () => {
      tfail(str('abc'), '', "'abc'")
      tfail(str('abc', 'test'), '', 'test')
    })

    context('1-byte characters', () => {
      const parser = str('Onoma')
      const parserm = str('Onoma', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
        tpass(parserm, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('fails if case does not match', () => {
        tfail(parser, 'onomatopoeia', { expected: "'Onoma'", index: 0 })
        tfail(parserm, 'onomatopoeia', { expected: 'test', index: 0 })
      })
      it('does not consume input on failure', () => {
        tfail(parser, 'Onosho', { expected: "'Onoma'", index: 0 })
        tfail(parserm, 'Onosho', { expected: 'test', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
        tfail(parserm, 'Ono', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), 'Onomatopoeia', { result: '', index: 0 })
        tpass(str('', 'test'), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = str('Звуко')
      const parserm = str('Звуко', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
        tpass(parserm, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('fails if case does not match', () => {
        tfail(parser, 'звукоподражание', { expected: "'Звуко'", index: 0 })
        tfail(parserm, 'звукоподражание', { expected: 'test', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
        tfail(parserm, 'Зву', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str('', 'test'), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = str('คำเลี')
      const parserm = str('คำเลี', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
        tpass(parserm, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
        tfail(parserm, 'คำเ', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), 'คำเลียนเสียง', { result: '', index: 0 })
        tpass(str('', 'test'), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = str('𝑂𝑛𝑜𝑚𝑎')
      const parserm = str('𝑂𝑛𝑜𝑚𝑎', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
        tpass(parserm, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, '𝑂𝑛𝑜', { expect: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
        tfail(parser, '𝑂𝑛𝑜', { expect: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
        tpass(str('', 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('istr', () => {
    it('throws if its argument is not a string', () => {
      terror(istr(0), '', '[istr]: expected argument to be a string; found 0')
      terror(
        istr(0, 'test'),
        '',
        '[istr]: expected first argument to be a string; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        istr('test', 0),
        '',
        '[istr]: expected second argument to be a string; found 0',
      )
    })
    it('fails at the end of input', () => {
      tfail(istr('abc'), '', "'abc'")
      tfail(istr('abc', 'test'), '', 'test')
    })

    context('1-byte characters', () => {
      const parser = istr('Onoma')
      const parserm = istr('Onoma', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
        tpass(parserm, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('succeeds if case does not match', () => {
        tpass(parser, 'onomatopoeia', { result: 'onoma', index: 5 })
        tpass(parserm, 'onomatopoeia', { result: 'onoma', index: 5 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
        tfail(parserm, 'Ono', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), 'Onomatopoeia', { result: '', index: 0 })
        tpass(str('', 'test'), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = istr('Звуко')
      const parserm = istr('Звуко', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
        tpass(parserm, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('succeeds if case does not match', () => {
        tpass(parser, 'звукоподражание', { result: 'звуко', index: 10 })
        tpass(parserm, 'звукоподражание', { result: 'звуко', index: 10 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
        tfail(parserm, 'Зву', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), 'Звукоподражание', { result: '', index: 0 })
        tpass(str('', 'test'), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = istr('คำเลี')
      const parserm = istr('คำเลี', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
        tpass(parserm, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
        tfail(parserm, 'คำเ', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), 'คำเลียนเสียง', { result: '', index: 0 })
        tpass(str('', 'test'), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = istr('𝑂𝑛𝑜𝑚𝑎')
      const parserm = istr('𝑂𝑛𝑜𝑚𝑎', 'test')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
        tpass(parserm, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, '𝑂𝑛𝑜', { expected: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
        tfail(parserm, '𝑂𝑛𝑜', { expected: 'test', index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(str(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
        tpass(str('', 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('all', () => {
    it('results in all remaining 1-byte characters', () => {
      tpass(all(), 'Onomatopoeia', { result: 'Onomatopoeia', index: 12 })
    })
    it('results in all remaining 2-byte characters', () => {
      tpass(all(), 'Звукоподражание', { result: 'Звукоподражание', index: 30 })
    })
    it('results in all remaining 3-byte characters', () => {
      tpass(all(), 'คำเลียนเสียง', { result: 'คำเลียนเสียง', index: 36 })
    })
    it('results in all remaining 4-byte characters', () => {
      tpass(all(), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', index: 48 })
    })
    it('succeeds at EOF', () => {
      tpass(all(), '', { result: '', index: 0 })
    })
  })

  describe('anystr', () => {
    it('throws if its first argument is not a number', () => {
      terror(
        anystr('0'),
        '',
        '[anystr]: expected argument to be a number; found "0"',
      )
      terror(
        anystr('0', 'test'),
        '',
        '[anystr]: expected first argument to be a number; found "0"',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        anystr(0, 0),
        '',
        '[anystr]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds if there are more 1-byte characters than it reads', () => {
      tpass(anystr(5), 'Onomatopoeia', { result: 'Onoma', index: 5 })
      tpass(anystr(5, 'test'), 'Onomatopoeia', { result: 'Onoma', index: 5 })
    })
    it('succeeds if there are more 2-byte characters than it reads', () => {
      tpass(anystr(5), 'Звукоподражание', { result: 'Звуко', index: 10 })
      tpass(anystr(5, 'test'), 'Звукоподражание', {
        result: 'Звуко',
        index: 10,
      })
    })
    it('succeeds if there are more 3-byte characters than it reads', () => {
      tpass(anystr(5), 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      tpass(anystr(5, 'test'), 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
    })
    it('succeeds if there are more 4-byte characters than it reads', () => {
      tpass(anystr(5), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      tpass(anystr(5, 'test'), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', {
        result: '𝑂𝑛𝑜𝑚𝑎',
        index: 20,
      })
    })
    it('fails if there aren\'t enough characters remaining', () => {
      tfail(anystr(5), 'Ono', {
        expected: 'a string of 5 characters',
        index: 0,
      })
      tfail(anystr(5, 'test'), 'Ono', { expected: 'test', index: 0 })
    })
  })
})
