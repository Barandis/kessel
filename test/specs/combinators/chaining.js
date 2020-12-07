// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  between,
  fifth,
  first,
  fourth,
  join,
  left,
  nth,
  pipe,
  right,
  second,
  skip,
  third,
  value,
} from 'kessel/combinators/chaining'
import { map } from 'kessel/combinators/primitive'
import { many, many1, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Chaining and piping combinators', () => {
  describe('join', () => {
    it('throws if its argument is not a parser', () => {
      terror(join(0), '', '[join]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        join(any),
        'a',
        '[join]: expected argument to return an array; found "a"',
      )
    })
    it('joins array elements together into a resulting string', () => {
      tpass(join(many(any)), '123', '123')
      tpass(join(map(many(any), x => x.map(c => parseInt(c)))), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      tfail(join(many1(any)), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(join(sequence(letter, digit)), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
    })
  })

  describe('skip', () => {
    it('throws if its argument is not a parser', () => {
      terror(skip(0), '', '[skip]: expected a parser; found 0')
    })
    it('consumes input on success but does not result in a value', () => {
      tpass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('passes failures through', () => {
      tfail(skip(char('a')), 'b', "'a'")
    })
  })

  describe('value', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        value(0), '', '[value]: expected 1st argument to be a parser; found 0',
      )
    })
    it('returns its constant when its parser succeeds', () => {
      tpass(value(letter, '!'), 'a', '!')
      tpass(value(digit, 10), '1', { result: 10 })
    })
    it('passes failures through', () => {
      tfail(value(char('a'), '!'), 'b', "'a'")
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

  describe('nth', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        nth(0, 1),
        '',
        '[nth]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        nth(many(any), '1'),
        '',
        '[nth]: expected 2nd argument to be a number; found "1"',
      )
    })
    it('throws if its first argument does not return an array', () => {
      terror(
        nth(any, 0),
        'a',
        '[nth]: expected 1st argument to return an array; found "a"',
      )
    })
    it('extracts the nth element of an array result', () => {
      tpass(nth(many(any), 2), '12345', '3')
      tpass(nth(sequence(char('"'), any, char('"')), 1), '"a"', 'a')
    })
    it('passes any parser failure through', () => {
      tfail(nth(many1(any), 2), '', 'any character')
    })
  })

  describe('first', () => {
    it('throws if its argument is not a parser', () => {
      terror(first(0), '', '[first]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        first(any),
        'a',
        '[first]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the first element of an array result', () => {
      tpass(first(many(any)), '12345', '1')
    })
    it('passes any parser failure through', () => {
      tfail(first(many1(any)), '', 'any character')
    })
  })

  describe('second', () => {
    it('throws if its argument is not a parser', () => {
      terror(second(0), '', '[second]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        second(any),
        'a',
        '[second]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the second element of an array result', () => {
      tpass(second(many(any)), '12345', '2')
    })
    it('passes any parser failure through', () => {
      tfail(second(many1(any)), '', 'any character')
    })
  })

  describe('third', () => {
    it('throws if its argument is not a parser', () => {
      terror(third(0), '', '[third]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        third(any),
        'a',
        '[third]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the third element of an array result', () => {
      tpass(third(many(any)), '12345', '3')
    })
    it('passes any parser failure through', () => {
      tfail(third(many1(any)), '', 'any character')
    })
  })

  describe('fourth', () => {
    it('throws if its argument is not a parser', () => {
      terror(fourth(0), '', '[fourth]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        fourth(any),
        'a',
        '[fourth]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the fourth element of an array result', () => {
      tpass(fourth(many(any)), '12345', '4')
    })
    it('passes any parser failure through', () => {
      tfail(fourth(many1(any)), '', 'any character')
    })
  })

  describe('fifth', () => {
    it('throws if its argument is not a parser', () => {
      terror(fifth(0), '', '[fifth]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        fifth(any),
        'a',
        '[fifth]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the fifth element of an array result', () => {
      tpass(fifth(many(any)), '12345', '5')
    })
    it('passes any parser failure through', () => {
      tfail(fifth(many1(any)), '', 'any character')
    })
  })
})
