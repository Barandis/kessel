// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  between,
  both,
  chain,
  fifth,
  first,
  fourth,
  join,
  left,
  map,
  nth,
  pipe,
  right,
  second,
  skip,
  third,
  value,
} from 'kessel/combinators/chaining'
import { many, many1, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Chaining and piping combinators', () => {
  describe('chain', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        chain(0, x => x),
        '',
        '[chain]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      error(
        chain(any, 0),
        '',
        '[chain]: expected 2nd argument to be a function; found 0',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      pass(chain(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      fail(chain(any, c => char(c)), 'ab', "'a'")
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chain(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if the second fails after the first consumes', () => {
      fail(chain(char('a'), () => char('b')), 'ac', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('map', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        map(0, x => x),
        '',
        '[map]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      error(
        map(any, 0),
        '',
        '[map]: expected 2nd argument to be a function; found 0',
      )
    })
    it('succeeds with the return value of its function', () => {
      pass(map(any, c => c.toUpperCase()), 'abc', 'A')
      pass(map(sequence(letter, digit), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      fail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        status: Error,
      })
      fail(map(sequence(letter, digit), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        status: Fatal,
        index: 1,
      })
    })
  })

  describe('join', () => {
    it('throws if its argument is not a parser', () => {
      error(join(0), '', '[join]: expected a parser; found 0')
    })
    it('joins array elements together into a resulting string', () => {
      pass(join(many(any)), '123', '123')
      pass(join(map(many(any), x => x.map(c => parseInt(c)))), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      fail(join(many1(any)), '', {
        expected: 'any character',
        status: Error,
      })
      fail(join(sequence(letter, digit)), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
    })
  })

  describe('skip', () => {
    it('throws if its argument is not a parser', () => {
      error(skip(0), '', '[skip]: expected a parser; found 0')
    })
    it('consumes input on success but does not result in a value', () => {
      pass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('passes failures through', () => {
      fail(skip(char('a')), 'b', "'a'")
    })
  })

  describe('value', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        value(0), '', '[value]: expected 1st argument to be a parser; found 0',
      )
    })
    it('returns its constant when its parser succeeds', () => {
      pass(value(letter, '!'), 'a', '!')
      pass(value(digit, 10), '1', { result: 10 })
    })
    it('passes failures through', () => {
      fail(value(char('a'), '!'), 'b', "'a'")
    })
  })

  describe('left', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        left(0, any),
        '',
        '[left]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        left(any, 0),
        '',
        '[left]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      pass(left(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(left(letter, digit), '1', {
        expected: 'a letter',
        status: Error,
      })
      fail(left(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(left(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Status.Fatal,
      })
      fail(left(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('right', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        right(0, any),
        '',
        '[right]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        right(any, 0),
        '',
        '[right]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      pass(right(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(right(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(right(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(right(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(right(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('both', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        both(0, any),
        '',
        '[both]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        both(any, 0),
        '',
        '[both]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of both parsers if both pass', () => {
      pass(both(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(both(letter, digit), '1', {
        expected: 'a letter',
        status: Status.Error,
      })
      fail(both(eof, char('a')), '', {
        expected: "'a'",
        status: Status.Error,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(both(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Status.Fatal,
      })
      fail(both(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('pipe', () => {
    it('throws if its last argument is not a function', () => {
      error(
        pipe(any, any, 0),
        '',
        '[pipe]: expected 3rd argument to be a function; found 0',
      )
      error(
        pipe(any, any, any, any),
        '',
        '[pipe]: expected 4th argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      pass(pipe(letter, a => a.toUpperCase()), 'a', 'A')
      pass(pipe(letter, digit, (a, b) => b + a), 'a1', '1a')
      pass(pipe(letter, digit, letter, (a, b, c) => c + b + a), 'a1b', 'b1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      fail(pipe(letter, a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
      fail(pipe(eof, letter, (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if input was consumed on failure', () => {
      fail(pipe(letter, digit, (a, b) => b + a), 'aa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('between', () => {
    const parser = between(char('('), char(')'), many(noneOf(')')))

    it('throws if its first argument is not a parser', () => {
      error(
        between(0, any, any),
        '',
        '[between]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        between(any, 0, any),
        '',
        '[between]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      error(
        between(any, any, 0),
        '',
        '[between]: expected 3rd argument to be a parser; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      pass(parser, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      fail(parser, 'abc)', {
        expected: "'('",
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if content is consumed', () => {
      fail(parser, '(abc', {
        expected: "')'",
        index: 4,
        status: Fatal,
      })
      fail(between(char('('), char(')'), sequence(letter, letter)), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('nth', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        nth(0, 1),
        '',
        '[nth]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      error(
        nth(many(any), '1'),
        '',
        '[nth]: expected 2nd argument to be a number; found "1"',
      )
    })
    it('extracts the nth element of an array result', () => {
      pass(nth(many(any), 2), '12345', '3')
      pass(nth(sequence(char('"'), any, char('"')), 1), '"a"', 'a')
    })
    it('passes any parser failure through', () => {
      fail(nth(many1(any), 2), '', 'any character')
    })
  })

  describe('first', () => {
    it('throws if its argument is not a parser', () => {
      error(first(0), '', 'expected a parser; found 0')
    })
    it('extracts the first element of an array result', () => {
      pass(first(many(any)), '12345', '1')
    })
    it('passes any parser failure through', () => {
      fail(first(many1(any)), '', 'any character')
    })
  })

  describe('second', () => {
    it('throws if its argument is not a parser', () => {
      error(second(0), '', 'expected a parser; found 0')
    })
    it('extracts the second element of an array result', () => {
      pass(second(many(any)), '12345', '2')
    })
    it('passes any parser failure through', () => {
      fail(second(many1(any)), '', 'any character')
    })
  })

  describe('third', () => {
    it('throws if its argument is not a parser', () => {
      error(third(0), '', 'expected a parser; found 0')
    })
    it('extracts the third element of an array result', () => {
      pass(third(many(any)), '12345', '3')
    })
    it('passes any parser failure through', () => {
      fail(third(many1(any)), '', 'any character')
    })
  })

  describe('fourth', () => {
    it('throws if its argument is not a parser', () => {
      error(fourth(0), '', 'expected a parser; found 0')
    })
    it('extracts the fourth element of an array result', () => {
      pass(fourth(many(any)), '12345', '4')
    })
    it('passes any parser failure through', () => {
      fail(fourth(many1(any)), '', 'any character')
    })
  })

  describe('fifth', () => {
    it('throws if its argument is not a parser', () => {
      error(fifth(0), '', 'expected a parser; found 0')
    })
    it('extracts the fifth element of an array result', () => {
      pass(fifth(many(any)), '12345', '5')
    })
    it('passes any parser failure through', () => {
      fail(fifth(many1(any)), '', 'any character')
    })
  })
})
