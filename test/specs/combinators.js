// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  alt,
  back,
  block,
  desc,
  lookahead,
  many,
  many1,
  seq,
} from 'kessel/combinators'
import { parse } from 'kessel/core'
import { any, char, digit, eof, space, string } from 'kessel/parsers'
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
      const parser = seq(string('te'), string('st'))
      fail(parser, 'tesl', { index: 2 })
      fail(back(parser), 'tesl', { index: 0 })
    })
  })

  describe('lookahead', () => {
    const parser = lookahead(seq(string('ab'), string('cd')))

    it('succeeds with no consumption if its parser succeeds', () => {
      pass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      fail(parser, 'abd', { expected: ['"cd"'], actual: '"d"', index: 0 })
    })
  })

  describe('alt', () => {
    const parser = alt(
      seq(char('a'), char('b')),
      seq(char('c'), char('d')),
      seq(char('e'), char('f')),
    )

    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'yz', { expected: ['"a"', '"c"', '"e"'] })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', { expected: ['"a"', '"d"'] })
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('seq', () => {
    const parser = seq(string('abc'), string('def'), string('ghi'))

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: ['"abc"'], actual: '"abd"', index: 0 })
      fail(parser, 'abcdf', { expected: ['"def"'], actual: '"df"', index: 3 })
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
      yield space
      const c = yield any
      yield space

      return c
    })

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: ['"abc"'], actual: '"abd"', index: 0 })
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

  describe('many', () => {
    it('succeeds zero times with an empty array', () => {
      pass(many(digit), 'abc123', [])
      pass(many(digit), '', [])
    })
    it('succeeds with all results until a non-match', () => {
      pass(many(digit), '123abc', ['1', '2', '3'])
      pass(many(digit), '123abc456', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      pass(many(digit), '123', ['1', '2', '3'])
    })
  })

  describe('many1', () => {
    it('fails if its parser does not match at least once', () => {
      fail(many1(digit), 'abc123', { expected: ['a digit'], actual: '"a"' })
      fail(many1(digit), '', { expected: ['a digit'], actual: 'EOF' })
    })
    it('succeeds with all results until a non-match', () => {
      pass(many1(digit), '123abc', ['1', '2', '3'])
      pass(many1(digit), '123abc456', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      pass(many1(digit), '123', ['1', '2', '3'])
    })
  })
})
