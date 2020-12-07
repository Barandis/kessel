// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { all, anyString, string, stringI } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

describe('String parsers', () => {
  describe('string', () => {
    it('throws if its argument is not a string', () => {
      terror(string(0), '', '[string]: expected a string; found 0')
    })
    it('fails at the end of input', () => {
      tfail(string('abc'), '', "'abc'")
    })

    context('1-byte characters', () => {
      const parser = string('Onoma')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('fails if case does not match', () => {
        tfail(parser, 'onomatopoeia', { expected: "'Onoma'", index: 0 })
      })
      it('does not consume input on failure', () => {
        tfail(parser, 'Onosho', { expected: "'Onoma'", index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = string('Звуко')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('fails if case does not match', () => {
        tfail(parser, 'звукоподражание', { expected: "'Звуко'", index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = string('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = string('𝑂𝑛𝑜𝑚𝑎')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, '𝑂𝑛𝑜', { expect: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('stringI', () => {
    it('throws if its argument is not a string', () => {
      terror(stringI(0), '', '[stringI]: expected a string; found 0')
    })
    it('fails at the end of input', () => {
      tfail(stringI('abc'), '', { expected: "'abc'", actual: 'EOF' })
    })

    context('1-byte characters', () => {
      const parser = stringI('Onoma')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('succeeds if case does not match', () => {
        tpass(parser, 'onomatopoeia', { result: 'onoma', index: 5 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = stringI('Звуко')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'Звукоподражание', { result: 'Звуко', index: 10 })
      })
      it('succeeds if case does not match', () => {
        tpass(parser, 'звукоподражание', { result: 'звуко', index: 10 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'Звукоподражание', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = stringI('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), 'คำเลียนเสียง', { result: '', index: 0 })
      })
    })

    context('4-byte characters', () => {
      const parser = stringI('𝑂𝑛𝑜𝑚𝑎')

      it('succeeds if the same number of characters is matched', () => {
        tpass(parser, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
      })
      it('fails if the string is longer than the remaining text', () => {
        tfail(parser, '𝑂𝑛𝑜', { expected: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        tpass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('all', () => {
    it('results in all remaining 1-byte characters', () => {
      tpass(all, 'Onomatopoeia', { result: 'Onomatopoeia', index: 12 })
    })
    it('results in all remaining 2-byte characters', () => {
      tpass(all, 'Звукоподражание', { result: 'Звукоподражание', index: 30 })
    })
    it('results in all remaining 3-byte characters', () => {
      tpass(all, 'คำเลียนเสียง', { result: 'คำเลียนเสียง', index: 36 })
    })
    it('results in all remaining 4-byte characters', () => {
      tpass(all, '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', index: 48 })
    })
    it('succeeds at EOF', () => {
      tpass(all, '', { result: '', index: 0 })
    })
  })

  describe('anyString', () => {
    it('throws if its argument is not a number', () => {
      terror(anyString('0'), '', '[anyString]: expected a number; found "0"')
    })
    it('succeeds if there are more 1-byte characters than it reads', () => {
      tpass(anyString(5), 'Onomatopoeia', { result: 'Onoma', index: 5 })
    })
    it('succeeds if there are more 2-byte characters than it reads', () => {
      tpass(anyString(5), 'Звукоподражание', { result: 'Звуко', index: 10 })
    })
    it('succeeds if there are more 3-byte characters than it reads', () => {
      tpass(anyString(5), 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
    })
    it('succeeds if there are more 4-byte characters than it reads', () => {
      tpass(anyString(5), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
    })
    it('fails if there aren\'t enough characters remaining', () => {
      tfail(anyString(5), 'Ono', {
        expected: 'a string of 5 characters',
        index: 0,
      })
    })
  })
})
