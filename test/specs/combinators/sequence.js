// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { block, many, many1, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

describe('Sequence combinators', () => {
  describe('sequence', () => {
    const parser = sequence([string('abc'), string('def'), string('ghi')])

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: '"abc"', actual: '"abd"', index: 0 })
      fail(parser, 'abcdf', { expected: '"def"', actual: '"df"', index: 3 })
      fail(parser, 'abcdefh', { expected: '"ghi"', actual: '"h"', index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(sequence([string('abc'), eof]), 'abc', { result: ['abc'], index: 3 })
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
      fail(parser, 'abd', {
        expected: '"abc"',
        actual: '"abd"',
        index: 0,
        status: Status.Error,
      })
      fail(parser, 'abcd', {
        expected: 'whitespace',
        actual: '"d"',
        index: 3,
        status: Status.Fatal,
      })
      fail(parser, 'abc ', {
        expected: 'any character',
        actual: 'EOF',
        index: 4,
        status: Status.Fatal,
      })
      fail(parser, 'abc de', {
        expected: 'whitespace',
        actual: '"e"',
        index: 5,
        status: Status.Fatal,
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
    it('fails if its parser consumes while failing', () => {
      fail(many(sequence([char('a'), char('b')])), 'ababac', {
        expected: '"b"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
  })

  describe('many1', () => {
    it('fails if its parser does not match at least once', () => {
      fail(many1(digit), 'abc123', { expected: 'a digit', actual: '"a"' })
      fail(many1(digit), '', { expected: 'a digit', actual: 'EOF' })
    })
    it('succeeds with all results until a non-match', () => {
      pass(many1(digit), '123abc', ['1', '2', '3'])
      pass(many1(digit), '123abc456', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      pass(many1(digit), '123', ['1', '2', '3'])
    })
    it('fails if its parser consumes while failing', () => {
      fail(many1(sequence([char('a'), char('b')])), 'ababac', {
        expected: '"b"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
  })
})
