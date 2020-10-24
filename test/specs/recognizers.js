// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { regex, string, stringi } from 'kessel/recognizers'
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
        fail(parser, 'onomatopoeia', { actual: 'onoma', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ono', { actual: 'Ono', index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = string('Ονομα')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Ονοματοποιία', { result: 'Ονομα', index: 10 })
      })
      it('fails if case does not match', () => {
        fail(parser, 'ονοματοποιία', { actual: 'ονομα', index: 0 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ονο', { actual: 'Ονο', index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Ονοματοποιία', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = string('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'คำเ', { actual: 'คำเ', index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { actual: '𝑂𝑛𝑜', index: 0 })
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
        fail(parser, 'Ono', { actual: 'Ono', index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Onomatopoeia', { result: '', index: 0 })
      })
    })

    context('2-byte characters', () => {
      const parser = stringi('Ονομα')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'Ονοματοποιία', { result: 'Ονομα', index: 10 })
      })
      it('succeeds if case does not match', () => {
        pass(parser, 'ονοματοποιία', { result: 'ονομα', index: 10 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'Ονο', { actual: 'Ονο', index: 0 })
      })
      it('succeeds with an empty string', () => {
        pass(string(''), 'Ονοματοποιία', { result: '', index: 0 })
      })
    })

    context('3-byte characters', () => {
      const parser = stringi('คำเลี')

      it('succeeds if the same number of characters is matched', () => {
        pass(parser, 'คำเลียนเสียง', { result: 'คำเลี', index: 15 })
      })
      it('fails if the string is longer than the remaining text', () => {
        fail(parser, 'คำเ', { actual: 'คำเ', index: 0 })
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
        fail(parser, '𝑂𝑛𝑜', { actual: '𝑂𝑛𝑜', index: 0 })
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
      fail(regex(/poe/), 'Onomatopoeia', 'Ono')
    })
    it('fails if the input is at its end', () => {
      fail(regex(/^./), '', '')
    })
    it('matches 1-byte characters', () => {
      pass(regex(/^Onoma/), 'Onomatopoeia', 'Onoma')
      pass(regex(/^.{5}/), 'Onomatopoeia', 'Onoma')
      fail(regex(/^\d/), 'Onomatopoeia', 'On')
    })
    it('matches 2-byte characters', () => {
      pass(regex(/^Ονομα/), 'Ονοματοποιία', 'Ονομα')
      pass(regex(/^.{5}/), 'Ονοματοποιία', 'Ονομα')
      fail(regex(/^\d/), 'Ονοματοποιία', 'Ον')
    })
    it('matches 3-byte characters (with the u flag)', () => {
      pass(regex(/^คำเลี/u), 'คำเลียนเสียง', 'คำเลี')
      pass(regex(/^.{5}/u), 'คำเลียนเสียง', 'คำเลี')
      fail(regex(/^\d/u), 'คำเลียนเสียง', 'คำ')
    })
    it('matches 4-byte characters (with the u flag)', () => {
      pass(regex(/^𝑂𝑛𝑜𝑚𝑎/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      pass(regex(/^.{5}/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛𝑜𝑚𝑎')
      fail(regex(/^\d/u), '𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎', '𝑂𝑛')
    })
  })
})
