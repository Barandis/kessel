// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { skip } from 'kessel/combinators/chaining'
import {
  block,
  many,
  many1,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  seq,
  seqB,
  skipMany,
  skipMany1,
} from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter } from 'kessel/parsers/char'
import { spaceU } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
import { error, fail, pass } from 'test/helper'

describe('Sequence combinators', () => {
  describe('seq', () => {
    const parser = seq([string('abc'), string('def'), string('ghi')])

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: '"abc"', actual: '"abd"', index: 0 })
      fail(parser, 'abcdf', { expected: '"def"', actual: '"df"', index: 3 })
      fail(parser, 'abcdefh', { expected: '"ghi"', actual: '"h"', index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(seq([string('abc'), eof]), 'abc', { result: ['abc'], index: 3 })
    })
  })

  describe('seqB', () => {
    const parser = seqB([string('abc'), string('def'), string('ghi')])

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: '"abc"', actual: '"abd"', index: 0 })
      fail(parser, 'abcdf', { expected: '"def"', actual: '"df"', index: 0 })
      fail(parser, 'abcdefh', { expected: '"ghi"', actual: '"h"', index: 0 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(seqB([string('abc'), eof]), 'abc', { result: ['abc'], index: 3 })
    })
  })

  describe('block', () => {
    const parser = block(function *() {
      yield string('abc')
      yield spaceU
      const c = yield any
      yield spaceU

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
      fail(many(seq([char('a'), char('b')])), 'ababac', {
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
      fail(many1(seq([char('a'), char('b')])), 'ababac', {
        expected: '"b"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
  })

  describe('skip', () => {
    it('succeeds with no result if its parser succeeds', () => {
      pass(skip(char('a')), 'abc', { result: null, index: 1 })
      pass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('propagates failures without modification', () => {
      fail(skip(char('a')), '123', {
        expected: '"a"',
        actual: '"1"',
        status: Status.Error,
      })
      fail(skip(seq([string('ab'), string('cd')])), 'abce', {
        expected: '"cd"',
        actual: '"ce"',
        status: Status.Fatal,
      })
    })
  })

  describe('skipMany', () => {
    it('succeeds zero times without consuming input', () => {
      pass(skipMany(digit), 'abc123', { result: null, index: 0 })
      pass(skipMany(digit), '', { result: null, index: 0 })
    })
    it('succeeds with all results until a non-match', () => {
      pass(skipMany(digit), '123abc', { result: null, index: 3 })
      pass(skipMany(digit), '123abc456', { result: null, index: 3 })
    })
    it('succeeds until EOF if matches continue until then', () => {
      pass(skipMany(digit), '123', { result: null, index: 3 })
    })
    it('fails if its parser consumes while failing', () => {
      fail(skipMany(seq([char('a'), char('b')])), 'ababac', {
        expected: '"b"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
  })

  describe('skipMany1', () => {
    it('fails if its parser does not match at least once', () => {
      fail(skipMany1(digit), 'abc123', { expected: 'a digit', actual: '"a"' })
      fail(skipMany1(digit), '', { expected: 'a digit', actual: 'EOF' })
    })
    it('succeeds with all results until a non-match', () => {
      pass(skipMany1(digit), '123abc', { result: null, index: 3 })
      pass(skipMany1(digit), '123abc456', { result: null, index: 3 })
    })
    it('succeeds until EOF if matches continue until then', () => {
      pass(skipMany1(digit), '123', { result: null, index: 3 })
    })
    it('fails if its parser consumes while failing', () => {
      fail(skipMany1(seq([char('a'), char('b')])), 'ababac', {
        expected: '"b"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
  })

  describe('sepBy', () => {
    const parser = sepBy(letter, char(','))

    it('succeeds with multiple values with separators', () => {
      pass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      pass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      pass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      pass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('succeeds with no initial match', () => {
      pass(parser, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepBy(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 4,
        status: Status.Fatal,
      })
      fail(sepBy(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: '"-"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      error(
        sepBy(string(''), string('')),
        'abc',
        '[sepBy]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepBy1', () => {
    const parser = sepBy1(letter, char(','))

    it('succeeds with multiple values with separators', () => {
      pass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      pass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      pass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      pass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('fails if there is no initial match', () => {
      fail(parser, '1', {
        expected: 'a letter',
        actual: '"1"',
        index: 0,
        status: Status.Error,
      })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepBy1(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 4,
        status: Status.Fatal,
      })
      fail(sepBy1(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy1(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: '"-"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      error(
        sepBy1(string(''), string('')),
        'abc',
        '[sepBy1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepEndBy', () => {
    const parser = sepEndBy(letter, char(','))

    it('succeeds with multiple values with separators', () => {
      pass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      pass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      pass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('comsumes the final separator at the end of text', () => {
      pass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('succeeds with no initial match', () => {
      pass(parser, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepEndBy(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 4,
        status: Status.Fatal,
      })
      fail(sepEndBy(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: '"-"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      error(
        sepEndBy(string(''), string('')),
        'abc',
        '[sepEndBy]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepEndBy1', () => {
    const parser = sepEndBy1(letter, char(','))

    it('succeeds with multiple values with separators', () => {
      pass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      pass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      pass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('consumes the final separator at the end of text', () => {
      pass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('fails if there is no initial match', () => {
      fail(parser, '1', {
        expected: 'a letter',
        actual: '"1"',
        index: 0,
        status: Status.Error,
      })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepEndBy1(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 4,
        status: Status.Fatal,
      })
      fail(sepEndBy1(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy1(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: '"-"',
        actual: '"c"',
        index: 5,
        status: Status.Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      error(
        sepEndBy1(string(''), string('')),
        'abc',
        '[sepEndBy1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })
})
