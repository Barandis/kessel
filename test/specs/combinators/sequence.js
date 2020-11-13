// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { alt } from 'kessel/combinators/alternative'
import { join, map, skip, value } from 'kessel/combinators/chaining'
import {
  block,
  chainl,
  chainl1,
  chainr,
  chainr1,
  count,
  many,
  many1,
  manyTill,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  seq,
  skipMany,
  skipMany1,
} from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Sequence combinators', () => {
  describe('seq', () => {
    const parser = seq([string('abc'), string('def'), string('ghi')])

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: "'abc'", index: 0 })
      fail(parser, 'abcdf', { expected: "'def'", index: 3 })
      fail(parser, 'abcdefh', { expected: "'ghi'", index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(seq([string('abc'), eof]), 'abc', { result: ['abc'], index: 3 })
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
      fail(parser, 'abd', { expected: "'abc'", index: 0, status: Error })
      fail(parser, 'abcd', {
        expected: 'a whitespace character',
        index: 3,
        status: Fatal,
      })
      fail(parser, 'abc ', {
        expected: 'any character',
        index: 4,
        status: Fatal,
      })
      fail(parser, 'abc de', {
        expected: 'a whitespace character',
        index: 5,
        status: Fatal,
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
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(many(alt([any, eof])), 'abc', ['a', 'b', 'c'])
    })
  })

  describe('many1', () => {
    it('fails if its parser does not match at least once', () => {
      fail(many1(digit), 'abc123', 'a digit')
      fail(many1(digit), '', 'a digit')
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
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(many1(alt([any, eof])), 'abc', ['a', 'b', 'c'])
    })
  })

  describe('skip', () => {
    it('succeeds with no result if its parser succeeds', () => {
      pass(skip(char('a')), 'abc', { result: null, index: 1 })
      pass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('propagates failures without modification', () => {
      fail(skip(char('a')), '123', { expected: "'a'", status: Error })
      fail(skip(seq([string('ab'), string('cd')])), 'abce', {
        expected: "'cd'",
        status: Fatal,
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
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('skipMany1', () => {
    it('fails if its parser does not match at least once', () => {
      fail(skipMany1(digit), 'abc123', 'a digit')
      fail(skipMany1(digit), '', 'a digit')
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
        expected: "'b'",
        index: 5,
        status: Fatal,
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
        index: 4,
        status: Fatal,
      })
      fail(sepBy(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
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
        index: 0,
        status: Error,
      })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepBy1(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepBy1(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy1(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
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
        index: 4,
        status: Fatal,
      })
      fail(sepEndBy(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
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
        index: 0,
        status: Error,
      })
    })
    it('fails if its content parser fails fatally', () => {
      fail(sepEndBy1(seq([letter, letter]), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepEndBy1(seq([letter, letter]), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy1(letter, seq([char('-'), char('-')])), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
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

  describe('count', () => {
    it('applies one parser a number of times', () => {
      pass(count(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      pass(count(letter, 2), 'abcdef', ['a', 'b'])
      pass(count(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      fail(count(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      fail(count(seq([letter, letter]), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails fatally on non-fatal errors if input was consumed', () => {
      fail(count(letter, 5), 'abc123', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('manyTill', () => {
    it('succeeds with content parser results before the end', () => {
      pass(manyTill(any, letter), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      pass(manyTill(any, letter), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      fail(manyTill(digit, letter), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if input is consumed before content parser fails', () => {
      fail(manyTill(digit, letter), '123.abc', {
        expected: 'a digit or a letter',
        index: 3,
        status: Fatal,
      })
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      fail(manyTill(digit, seq([letter, digit])), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(manyTill(seq([letter, digit]), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(
        manyTill(alt([letter, skip(space)]), digit), 'a b c 1', ['a', 'b', 'c'],
      )
    })
  })

  describe('chainl', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = alt([
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    ])

    it('succeeds with a default value if there are no matches', () => {
      pass(chainl(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(chainl(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(chainl(p, op, 0), '23+17', { result: 40, index: 5 })
      pass(chainl(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(chainl(p, op, 0), '23+17-42', { result: -2, index: 8 })
      pass(chainl(p, op, 0), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(chainl(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(chainl(seq([digit, digit]), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainl(seq([digit, digit]), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(chainl(p, seq([letter, letter]), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('chainl1', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = alt([
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    ])

    it('fails if there are no matches', () => {
      fail(chainl1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(chainl1(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(chainl1(p, op), '23+17', { result: 40, index: 5 })
      pass(chainl1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(chainl1(p, op), '23+17-42', { result: -2, index: 8 })
      pass(chainl1(p, op), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(chainl1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(chainl1(seq([digit, digit]), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainl1(seq([digit, digit]), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(chainl1(p, seq([letter, letter])), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('chainr', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = alt([
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    ])

    it('succeeds with a default value if there are no matches', () => {
      pass(chainr(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(chainr(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(chainr(p, op, 0), '23+17', { result: 40, index: 5 })
      pass(chainr(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds right-associatively with more than one match of op', () => {
      // incorrect math, good testing
      pass(chainr(p, op, 0), '23+17-42', { result: -2, index: 8 })
      pass(chainr(p, op, 0), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(chainr(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(chainr(seq([digit, digit]), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainr(seq([digit, digit]), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(chainr(p, seq([letter, letter]), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('chainr1', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = alt([
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    ])

    it('fails if there are no matches', () => {
      fail(chainr1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(chainr1(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(chainr1(p, op), '23+17', { result: 40, index: 5 })
      pass(chainr1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(chainr1(p, op), '23+17-42', { result: -2, index: 8 })
      pass(chainr1(p, op), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(chainr1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(chainr1(seq([digit, digit]), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainr1(seq([digit, digit]), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(chainr1(p, seq([letter, letter])), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })
})
