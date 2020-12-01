// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { choice } from 'kessel/combinators/alternative'
import { join, map, skip, value } from 'kessel/combinators/chaining'
import {
  assocl,
  assocl1,
  assocr,
  assocr1,
  block,
  many,
  many1,
  manyTill,
  repeat,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  sequence,
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
  describe('sequence', () => {
    const parser = sequence(string('abc'), string('def'), string('ghi'))

    it('throws if any of its arguments is not a parser', () => {
      error(
        sequence(any, 0),
        '',
        '[sequence]: expected 2nd argument to be a parser; found 0',
      )
      error(
        sequence(any, letter, digit, {}),
        '',
        '[sequence]: expected 4th argument to be a parser; found {}',
      )
    })
    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: "'abc'", index: 0 })
      fail(parser, 'abcdf', { expected: "'def'", index: 3 })
      fail(parser, 'abcdefh', { expected: "'ghi'", index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(sequence(string('abc'), eof), 'abc', { result: ['abc'], index: 3 })
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
      error(block(0), '', '[block]: expected a generator function; found 0')
      error(
        block(() => {}),
        '',
        '[block]: expected a generator function; found function',
      )
    })
    it('throws if it yields something other than a parser', () => {
      error(
        block(function *() { yield any; yield 0; return 0 }),
        'abc',
        '[block]: expected 2nd yield to be to a parser; found 0',
      )
      error(
        block(function *() { yield any; yield any; yield x => x; return 0 }),
        'abc',
        '[block]: expected 3rd yield to be to a parser; found function',
      )
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
    it('throws if its argument is not a parser', () => {
      error(many(0), '', '[many]: expected a parser; found 0')
    })
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
      fail(many(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(many(choice(any, eof)), 'abc', ['a', 'b', 'c'])
    })
  })

  describe('many1', () => {
    it('throws if its argument is not a parser', () => {
      error(many1(0), '', '[many1]: expected a parser; found 0')
    })
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
      fail(many1(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(many1(choice(any, eof)), 'abc', ['a', 'b', 'c'])
    })
  })

  describe('skip', () => {
    it('throws if its argument is not a parser', () => {
      error(skip(0), '', '[skip]: expected a parser; found 0')
    })
    it('succeeds with no result if its parser succeeds', () => {
      pass(skip(char('a')), 'abc', { result: null, index: 1 })
      pass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('propagates failures without modification', () => {
      fail(skip(char('a')), '123', { expected: "'a'", status: Error })
      fail(skip(sequence(string('ab'), string('cd'))), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
    })
  })

  describe('skipMany', () => {
    it('throws if its argument is not a parser', () => {
      error(skipMany(0), '', '[skipMany]: expected a parser; found 0')
    })
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
      fail(skipMany(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('skipMany1', () => {
    it('throws if its argument is not a parser', () => {
      error(skipMany1(0), '', '[skipMany1]: expected a parser; found 0')
    })
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
      fail(skipMany1(sequence(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('sepBy', () => {
    const parser = sepBy(letter, char(','))

    it('throws if its first argument is not a parser', () => {
      error(
        sepBy(0, any),
        '',
        '[sepBy]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        sepBy(any, 0),
        '',
        '[sepBy]: expected 2nd argument to be a parser; found 0',
      )
    })
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
      fail(sepBy(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepBy(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy(letter, sequence(char('-'), char('-'))), 'a--b-c', {
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

    it('throws if its first argument is not a parser', () => {
      error(
        sepBy1(0, any),
        '',
        '[sepBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        sepBy1(any, 0),
        '',
        '[sepBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
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
      fail(sepBy1(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepBy1(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepBy1(letter, sequence(char('-'), char('-'))), 'a--b-c', {
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

    it('throws if its first argument is not a parser', () => {
      error(
        sepEndBy1(0, any),
        '',
        '[sepEndBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        sepEndBy1(any, 0),
        '',
        '[sepEndBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
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
      fail(sepEndBy(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepEndBy(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy(letter, sequence(char('-'), char('-'))), 'a--b-c', {
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

    it('throws if its first argument is not a parser', () => {
      error(
        sepEndBy1(0, any),
        '',
        '[sepEndBy1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        sepEndBy1(any, 0),
        '',
        '[sepEndBy1]: expected 2nd argument to be a parser; found 0',
      )
    })
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
      fail(sepEndBy1(sequence(letter, letter), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      fail(sepEndBy1(sequence(letter, letter), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      fail(sepEndBy1(letter, sequence(char('-'), char('-'))), 'a--b-c', {
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

  describe('repeat', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        repeat(0, 5),
        '',
        '[repeat]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      error(
        repeat(any, '3'),
        '',
        '[repeat]: expected 2nd argument to be a number; found "3"',
      )
    })
    it('applies one parser a number of times', () => {
      pass(repeat(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      pass(repeat(letter, 2), 'abcdef', ['a', 'b'])
      pass(repeat(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      fail(repeat(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      fail(repeat(sequence(letter, letter), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails fatally on non-fatal errors if input was consumed', () => {
      fail(repeat(letter, 5), 'abc123', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('manyTill', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        manyTill(0, any),
        '',
        '[manyTill]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        manyTill(any, 0),
        '',
        '[manyTill]: expected 2nd argument to be a parser; found 0',
      )
    })
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
      fail(manyTill(digit, sequence(letter, digit)), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(manyTill(sequence(letter, digit), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
    it('does not add null to the results', () => {
      pass(
        manyTill(
          choice(letter, skip(space)), digit,
        ), 'a b c 1', ['a', 'b', 'c'],
      )
    })
  })

  describe('assocl', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      error(
        assocl(0, any),
        '',
        '[assocl]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        assocl(any, 0),
        '',
        '[assocl]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      pass(assocl(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(assocl(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(assocl(p, op, 0), '23+17', { result: 40, index: 5 })
      pass(assocl(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(assocl(p, op, 0), '23+17-42', { result: -2, index: 8 })
      pass(assocl(p, op, 0), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(assocl(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(assocl(sequence(digit, digit), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(assocl(sequence(digit, digit), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(assocl(p, sequence(letter, letter), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assocl1', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      error(
        assocl1(0, any),
        '',
        '[assocl1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        assocl1(any, 0),
        '',
        '[assocl1]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('fails if there are no matches', () => {
      fail(assocl1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(assocl1(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(assocl1(p, op), '23+17', { result: 40, index: 5 })
      pass(assocl1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(assocl1(p, op), '23+17-42', { result: -2, index: 8 })
      pass(assocl1(p, op), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(assocl1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(assocl1(sequence(digit, digit), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(assocl1(sequence(digit, digit), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(assocl1(p, sequence(letter, letter)), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assocr', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      error(
        assocr(0, any),
        '',
        '[assocr]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        assocr(any, 0),
        '',
        '[assocr]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      pass(assocr(p, op, 0), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(assocr(p, op, 0), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(assocr(p, op, 0), '23+17', { result: 40, index: 5 })
      pass(assocr(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds right-associatively with more than one match of op', () => {
      // incorrect math, good testing
      pass(assocr(p, op, 0), '23+17-42', { result: -2, index: 8 })
      pass(assocr(p, op, 0), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(assocr(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(assocr(sequence(digit, digit), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(assocr(sequence(digit, digit), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(assocr(p, sequence(letter, letter), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('assocr1', () => {
    const p = map(join(many1(digit)), x => parseInt(x))
    const op = choice(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      error(
        assocr1(0, any),
        '',
        '[assocr1]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        assocr1(any, 0),
        '',
        '[assocr1]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('fails if there are no matches', () => {
      fail(assocr1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      pass(assocr1(p, op), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      pass(assocr1(p, op), '23+17', { result: 40, index: 5 })
      pass(assocr1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      pass(assocr1(p, op), '23+17-42', { result: -2, index: 8 })
      pass(assocr1(p, op), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      pass(assocr1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      fail(assocr1(sequence(digit, digit), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(assocr1(sequence(digit, digit), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(assocr1(p, sequence(letter, letter)), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
    })
  })
})
