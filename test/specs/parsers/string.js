// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { all, anyString, string, stringi } from 'kessel/parsers/string'
import { error, fail, pass } from 'test/helper'

describe('String parsers', () => {
  describe('string', () => {
    it('throws if its argument is not a string', () => {
      error(string(0), '', '[string]: expected a string; found 0')
    })
    it('fails at the end of input', () => {
      fail(string('abc'), '', "'abc'")
    })

    context('1-byte characters', () => {
      const parser = string('Onoma')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Onomatopoeia', { result: 'Onoma', index: 5 })
      })
      it('fails if case does not match', () => {
        fail(parser, 'onomatopoeia', { expected: "'Onoma'", index: 0 })
      })
      it('does not consume input on failure', () => {
        fail(parser, 'Onosho', { expected: "'Onoma'", index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
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
        fail(parser, 'звукоподражание', { expected: "'Звуко'", index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
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
        fail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { expect: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
    })
  })

  describe('stringi', () => {
    it('throws if its argument is not a string', () => {
      error(stringi(0), '', '[stringi]: expected a string; found 0')
    })
    it('fails at the end of input', () => {
      fail(stringi('abc'), '', { expected: "'abc'", actual: 'EOF' })
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
        fail(parser, 'Ono', { expected: "'Onoma'", index: 0 })
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
        fail(parser, 'Зву', { expected: "'Звуко'", index: 0 })
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
        fail(parser, 'คำเ', { expected: "'คำเลี'", index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { expected: "'𝑂𝑛𝑜𝑚𝑎'", index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '', index: 0 })
      })
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

  describe('anyString', () => {
    it('throws if its argument is not a number', () => {
      error(anyString('0'), '', '[anyString]: expected a number; found "0"')
    })
    it('succeeds if there are more 1-byte characters than it reads', () => {
      pass(anyString(5), 'Onomatopoeia', { result: 'Onoma', index: 5 })
    })
    it('succeeds if there are more 2-byte characters than it reads', () => {
      pass(anyString(5), 'Звукоподражание', { result: 'Звуко', index: 10 })
    })
    it('succeeds if there are more 3-byte characters than it reads', () => {
      pass(anyString(5), 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
    })
    it('succeeds if there are more 4-byte characters than it reads', () => {
      pass(anyString(5), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', { result: '𝑂𝑛𝑜𝑚𝑎', index: 20 })
    })
    it('fails if there aren\'t enough characters remaining', () => {
      fail(anyString(5), 'Ono', {
        expected: 'a string of 5 characters',
        index: 0,
      })
    })
  })
})
