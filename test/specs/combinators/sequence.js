// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { choice } from 'kessel/combinators/alternative'
import { join, value } from 'kessel/combinators/misc'
import { map } from 'kessel/combinators/primitive'
import {
  assoc1L,
  assoc1R,
  assocL,
  assocR,
  between,
  block,
  left,
  many,
  many1,
  manyTill,
  pipe,
  repeat,
  right,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  sequence,
  skip,
  skipMany,
  skipMany1,
} from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Sequence combinators', () => {
  describe('sequence', () => {
    const parser = sequence(string('abc'), string('def'), string('ghi'))

    it('throws if any of its arguments is not a parser', () => {
      terror(
        sequence(any, 0),
        '',
        '[sequence]: expected 2nd argument to be a parser; found 0',
      )
      terror(
        sequence(any, letter, digit, {}),
        '',
        '[sequence]: expected 4th argument to be a parser; found {}',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', { expected: "'abc'", index: 0 })
      tfail(parser, 'abcdf', { expected: "'def'", index: 3 })
      tfail(parser, 'abcdefh', { expected: "'ghi'", index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      tpass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      tpass(sequence(string('abc'), eof), 'abc', { result: ['abc'], index: 3 })
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

    it('throws if its argument is not a generator function', () => {
      terror(block(0), '', '[block]: expected a generator function; found 0')
      terror(
        block(() => {}),
        '',
        '[block]: expected a generator function; found function',
      )
    })
    it('throws if it yields something other than a parser', () => {
      terror(
        block(function *() { yield any; yield 0; return 0 }),
        'abc',
        '[block]: expected 2nd yield to be to a parser; found 0',
      )
      terror(
        block(function *() { yield any; yield any; yield x => x; return 0 }),
        'abc',
        '[block]: expected 3rd yield to be to a parser; found function',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', { expected: "'abc'", index: 0, status: Fail })
      tfail(parser, 'abcd', {
        expected: 'a whitespace character',
        index: 3,
        status: Fatal,
      })
      tfail(parser, 'abc ', {
        expected: 'any character',
        index: 4,
        status: Fatal,
      })
      tfail(parser, 'abc de', {
        expected: 'a whitespace character',
        index: 5,
        status: Fatal,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      tpass(parser, 'abc d ', { result: 'd', index: 6 })
    })
  })

  describe('many', () => {
    it('throws if its argument is not a parser', () => {
      terror(many(0), '', '[many]: expected a parser; found 0')
    })
    it('succeeds zero times with an empty array', () => {
      tpass(many(digit), 'abc123', [])
      tpass(many(digit), '', [])
    })
    it('succeeds with all results until a non-match', () => {
      tpass(many(digit), '123abc', ['1', '2', '3'])
      tpass(many(digit), '123abc456', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(many(digit), '123', ['1', '2', '3'])
    })
    it('fails if its parser consumes while failing', () => {
      tfail(many(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      tpass(
        many(map(letter, x => x === 'a' ? null : x)),
        'abc',
        ['b', 'c'],
      )
    })
  })

  describe('many1', () => {
    it('throws if its argument is not a parser', () => {
      terror(many1(0), '', '[many1]: expected a parser; found 0')
    })
    it('fails if its parser does not match at least once', () => {
      tfail(many1(digit), 'abc123', 'a digit')
      tfail(many1(digit), '', 'a digit')
    })
    it('succeeds with all results until a non-match', () => {
      tpass(many1(digit), '123abc', ['1', '2', '3'])
      tpass(many1(digit), '123abc456', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(many1(digit), '123', ['1', '2', '3'])
    })
    it('fails if its parser consumes while failing', () => {
      tfail(many1(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      tpass(
        many1(map(letter, x => x === 'a' ? null : x)),
        'abc',
        ['b', 'c'],
      )
      tpass(
        many1(map(letter, x => x === 'b' ? null : x)),
        'abc',
        ['a', 'c'],
      )
    })
    it('succeeds with a single null result', () => {
      tpass(
        many1(map(letter, x => x === 'a' ? null : x)), 'a', [],
      )
    })
  })

  describe('skip', () => {
    it('throws if its argument is not a parser', () => {
      terror(skip(0), '', '[skip]: expected a parser; found 0')
    })
    it('succeeds with no result if its parser succeeds', () => {
      tpass(skip(char('a')), 'abc', { result: null, index: 1 })
      tpass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('propagates failures without modification', () => {
      tfail(skip(char('a')), '123', { expected: "'a'", status: Fail })
      tfail(skip(sequence(string('ab'), string('cd'))), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
    })
  })

  describe('skipMany', () => {
    it('throws if its argument is not a parser', () => {
      terror(skipMany(0), '', '[skipMany]: expected a parser; found 0')
    })
    it('succeeds zero times without consuming input', () => {
      tpass(skipMany(digit), 'abc123', { result: null, index: 0 })
      tpass(skipMany(digit), '', { result: null, index: 0 })
    })
    it('succeeds with all results until a non-match', () => {
      tpass(skipMany(digit), '123abc', { result: null, index: 3 })
      tpass(skipMany(digit), '123abc456', { result: null, index: 3 })
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(skipMany(digit), '123', { result: null, index: 3 })
    })
    it('fails if its parser consumes while failing', () => {
      tfail(skipMany(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('skipMany1', () => {
    it('throws if its argument is not a parser', () => {
      terror(skipMany1(0), '', '[skipMany1]: expected a parser; found 0')
    })
    it('fails if its parser does not match at least once', () => {
      tfail(skipMany1(digit), 'abc123', 'a digit')
      tfail(skipMany1(digit), '', 'a digit')
    })
    it('succeeds with all results until a non-match', () => {
      tpass(skipMany1(digit), '123abc', { result: null, index: 3 })
      tpass(skipMany1(digit), '123abc456', { result: null, index: 3 })
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(skipMany1(digit), '123', { result: null, index: 3 })
    })
    it('fails if its parser consumes while failing', () => {
      tfail(skipMany1(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('sepBy', () => {
    const parser = sepBy(letter, char(','))

    it('throws if its first argument is not a parser', () => {
      terror(
        sepBy(0, any),
        '',
        '[sepBy]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        sepBy(any, 0),
        '',
        '[sepBy]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('succeeds with no initial match', () => {
      tpass(parser, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepBy(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepBy(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepBy(letter, sequence(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepBy(string(''), string('')),
        'abc',
        '[sepBy]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepBy1', () => {
    const parser = sepBy1(letter, char(','))

    it('throws if its first argument is not a parser', () => {
      terror(
        sepBy1(0, any),
        '',
        '[sepBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        sepBy1(any, 0),
        '',
        '[sepBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('fails if there is no initial match', () => {
      tfail(parser, '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepBy1(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepBy1(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepBy1(letter, sequence(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepBy1(string(''), string('')),
        'abc',
        '[sepBy1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepEndBy', () => {
    const parser = sepEndBy(letter, char(','))

    it('throws if its first argument is not a parser', () => {
      terror(
        sepEndBy1(0, any),
        '',
        '[sepEndBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        sepEndBy1(any, 0),
        '',
        '[sepEndBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('comsumes the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('succeeds with no initial match', () => {
      tpass(parser, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepEndBy(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepEndBy(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepEndBy(letter, sequence(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepEndBy(string(''), string('')),
        'abc',
        '[sepEndBy]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepEndBy1', () => {
    const parser = sepEndBy1(letter, char(','))

    it('throws if its first argument is not a parser', () => {
      terror(
        sepEndBy1(0, any),
        '',
        '[sepEndBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        sepEndBy1(any, 0),
        '',
        '[sepEndBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('consumes the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('fails if there is no initial match', () => {
      tfail(parser, '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepEndBy1(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepEndBy1(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepEndBy1(letter, sequence(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepEndBy1(string(''), string('')),
        'abc',
        '[sepEndBy1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('repeat', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        repeat(0, 5),
        '',
        '[repeat]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        repeat(any, '3'),
        '',
        '[repeat]: expected 2nd argument to be a number; found "3"',
      )
    })
    it('applies one parser a number of times', () => {
      tpass(repeat(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      tpass(repeat(letter, 2), 'abcdef', ['a', 'b'])
      tpass(repeat(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      tfail(repeat(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      tfail(repeat(sequence(letter, letter), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails fatally on non-fatal errors if input was consumed', () => {
      tfail(repeat(letter, 5), 'abc123', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('manyTill', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        manyTill(0, any),
        '',
        '[manyTill]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        manyTill(any, 0),
        '',
        '[manyTill]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with content parser results before the end', () => {
      tpass(manyTill(any, letter), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      tpass(manyTill(any, letter), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      tfail(manyTill(digit, letter), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if input is consumed before content parser fails', () => {
      tfail(manyTill(digit, letter), '123.abc', {
        expected: 'a digit or a letter',
        index: 3,
        status: Fatal,
      })
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      tfail(manyTill(digit, sequence(letter, digit)), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(manyTill(sequence(letter, digit), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      tpass(
        manyTill(
          choice(letter, skip(space)), digit,
        ), 'a b c 1', ['a', 'b', 'c'],
      )
    })
  })

  describe('assocL', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        assocL(0, any),
        '',
        '[assocL]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        assocL(any, 0),
        '',
        '[assocL]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        assocL(any, any, 0),
        'abc',
        '[assocL]: expected 1st op parser to return a function; found "b"',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      tpass(assocL(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(assocL(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(assocL(p, op, 0), '23+17', { result: 40, index: 5 })
      tpass(assocL(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(assocL(p, op, 0), '23+17-42', { result: -2, index: 8 })
      tpass(assocL(p, op, 0), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(assocL(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(assocL(sequence(digit, digit), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(assocL(sequence(digit, digit), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(assocL(p, sequence(letter, letter), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assoc1L', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        assoc1L(0, any),
        '',
        '[assoc1L]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        assoc1L(any, 0),
        '',
        '[assoc1L]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        assoc1L(any, any),
        'abc',
        '[assoc1L]: expected 1st op parser to return a function; found "b"',
      )
    })
    it('fails if there are no matches', () => {
      tfail(assoc1L(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(assoc1L(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(assoc1L(p, op), '23+17', { result: 40, index: 5 })
      tpass(assoc1L(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(assoc1L(p, op), '23+17-42', { result: -2, index: 8 })
      tpass(assoc1L(p, op), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(assoc1L(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(assoc1L(sequence(digit, digit), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(assoc1L(sequence(digit, digit), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(assoc1L(p, sequence(letter, letter)), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assocR', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        assocR(0, any),
        '',
        '[assocR]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        assocR(any, 0),
        '',
        '[assocR]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        assocR(any, any, 0),
        'abc',
        '[assocR]: expected 1st op parser to return a function; found "b"',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      tpass(assocR(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(assocR(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(assocR(p, op, 0), '23+17', { result: 40, index: 5 })
      tpass(assocR(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds right-associatively with more than one match of op', () => {
      // incorrect math, good testing
      tpass(assocR(p, op, 0), '23+17-42', { result: -2, index: 8 })
      tpass(assocR(p, op, 0), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(assocR(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(assocR(sequence(digit, digit), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(assocR(sequence(digit, digit), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(assocR(p, sequence(letter, letter), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assoc1R', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        assoc1R(0, any),
        '',
        '[assoc1R]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        assoc1R(any, 0),
        '',
        '[assoc1R]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        assoc1R(any, any),
        'abc',
        '[assoc1R]: expected 1st op parser to return a function; found "b"',
      )
    })
    it('fails if there are no matches', () => {
      tfail(assoc1R(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(assoc1R(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(assoc1R(p, op), '23+17', { result: 40, index: 5 })
      tpass(assoc1R(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(assoc1R(p, op), '23+17-42', { result: -2, index: 8 })
      tpass(assoc1R(p, op), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(assoc1R(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(assoc1R(sequence(digit, digit), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(assoc1R(sequence(digit, digit), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(assoc1R(p, sequence(letter, letter)), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('left', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        left(0, any),
        '',
        '[left]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        left(any, 0),
        '',
        '[left]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      tpass(left(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(left(letter, digit), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(left(eof, char('a')), '', { expected: "'a'", status: Fail })
    })
    it('fails fatally if any input is consumed on failure', () => {
      tfail(left(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Status.Fatal,
      })
      tfail(left(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('right', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        right(0, any),
        '',
        '[right]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        right(any, 0),
        '',
        '[right]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(right(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(right(letter, digit), '1', { expected: 'a letter', status: Fail })
      tfail(right(eof, char('a')), '', { expected: "'a'", status: Fail })
    })
    it('fails fatally if any input is consumed on failure', () => {
      tfail(right(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(right(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('pipe', () => {
    it('throws if its last argument is not a function', () => {
      terror(
        pipe(any, any, 0),
        '',
        '[pipe]: expected 3rd argument to be a function; found 0',
      )
      terror(
        pipe(any, any, any, any),
        '',
        '[pipe]: expected 4th argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      tpass(pipe(letter, a => a.toUpperCase()), 'a', 'A')
      tpass(pipe(letter, digit, (a, b) => b + a), 'a1', '1a')
      tpass(pipe(letter, digit, letter, (a, b, c) => c + b + a), 'a1b', 'b1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      tfail(pipe(letter, a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(pipe(eof, letter, (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if input was consumed on failure', () => {
      tfail(pipe(letter, digit, (a, b) => b + a), 'aa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('between', () => {
    const parser = between(char('('), char(')'), many(noneOf(')')))

    it('throws if its first argument is not a parser', () => {
      terror(
        between(0, any, any),
        '',
        '[between]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        between(any, 0, any),
        '',
        '[between]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        between(any, any, 0),
        '',
        '[between]: expected 3rd argument to be a parser; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      tpass(parser, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      tfail(parser, 'abc)', {
        expected: "'('",
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if content is consumed', () => {
      tfail(parser, '(abc', {
        expected: "')'",
        index: 4,
        status: Fatal,
      })
      tfail(between(char('('), char(')'), sequence(letter, letter)), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
    })
  })
})
