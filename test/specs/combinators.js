// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { alt, back, block, desc, seq } from 'kessel/combinators'
import { parse } from 'kessel/core'
import { any, char, eof, string, whitespace } from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Combinators', () => {
  describe('desc', () => {
    it('throws if passed a non-function', () => {
      error(desc(23, 'test'), 'test', '[desc]: expected function; received 23')
    })
    it('throws if passed a function that is not a parser', () => {
      error(
        desc(x => x, 'test'),
        'test',
        '[desc]: expected parser; received non-parser function'
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(desc(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected message if its parser fails', () => {
      fail(char('a'), 'bcd', { expected: ['"a"'] })
      fail(desc(char('a'), 'letter a'), 'bcd', { expected: ['letter a'] })
    })
    it('overwrites all of multiple expected messages', () => {
      const parser = alt(char('a'), char('b'), char('c'))
      fail(parser, 'def', { expected: ['"a"', '"b"', '"c"'] })
      fail(desc(parser, 'a, b, or c'), 'def', { expected: ['a, b, or c'] })
    })
  })

  describe('back', () => {
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(back(char('a')), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('does nothing if its parser fails without consuming input', () => {
      const r1 = parse(char('a'), 'bcd')
      const r2 = parse(back(char('a')), 'bcd')
      expect(r1).to.deep.equal(r2)
    })
    it('resets the index if its parser fails with consuming input', () => {
      const parser = string('test')
      fail(parser, 'tesl', { index: 3 })
      fail(back(parser), 'tesl', { index: 0 })
    })
  })

  describe('alt', () => {
    const parser = alt(string('abc'), string('def'), string('ghi'))

    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'xyz', { expected: ['"abc"', '"def"', '"ghi"'] })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'deg', { expected: ['"abc"', '"def"'] })
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'def', 'def')
    })
  })

  describe('seq', () => {
    const parser = seq(string('abc'), string('def'), string('ghi'))

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: ['"abc"'], actual: '"abd"', index: 2 })
      fail(parser, 'abcdf', { expected: ['"def"'], actual: '"df"', index: 4 })
      fail(parser, 'abcdefh', { expected: ['"ghi"'], actual: '"h"', index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(seq(string('abc'), eof), 'abc', { result: ['abc'], index: 3 })
    })
  })

  describe('block', () => {
    const parser = block(function *() {
      yield string('abc')
      yield whitespace
      const c = yield any
      yield whitespace

      return c
    })

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: ['"abc"'], actual: '"abd"', index: 2 })
      fail(parser, 'abcd', {
        expected: ['whitespace'],
        actual: '"d"',
        index: 3,
      })
      fail(parser, 'abc ', {
        expected: ['any character'],
        actual: 'EOF',
        index: 4,
      })
      fail(parser, 'abc de', {
        expected: ['whitespace'],
        actual: '"e"',
        index: 5,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      pass(parser, 'abc d ', { result: 'd', index: 6 })
    })
  })
})
