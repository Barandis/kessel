// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { opt } from 'kessel/combinators/alternative'
import {
  apply,
  chain,
  compact,
  fifth,
  first,
  fourth,
  join,
  map,
  nth,
  second,
  third,
  value,
} from 'kessel/combinators/chaining'
import { many, many1, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, letter } from 'kessel/parsers/char'
import { always } from 'kessel/parsers/misc'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Chaining and piping combinators', () => {
  describe('join', () => {
    it('throws if its first argument is not a parser', () => {
      terror(join(0), '', '[join]: expected argument to be a parser; found 0')
      terror(
        join(0, 'test'),
        '',
        '[join]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        join(any, 0),
        '',
        '[join]: expected second argument to be a string; found 0',
      )
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
      tpass(join(many(any), 'test'), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      tfail(join(many1(any)), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(join(seq(letter, digit)), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
      tfail(join(many1(any), 'a character'), '', {
        expected: 'a character',
        status: Fail,
      })
      tfail(join(seq(letter, digit), 'a letter and a digit'), 'ab', {
        expected: 'a letter and a digit',
        status: Fatal,
      })
    })
  })

  describe('compact', () => {
    it('throws if its argument is not a parser', () => {
      terror(compact(0), '', '[compact]: expected a parser; found 0')
    })
    it('throws if its argument does not return an array', () => {
      terror(
        compact(any),
        'a',
        '[compact]: expected argument to return an array; found "a"',
      )
    })
    it('drops null and undefined elements', () => {
      tpass(compact(always(['1', null, '3'])), '123', ['1', '3'])
      tpass(compact(always(['1', undefined, '3'])), '123', ['1', '3'])
    })
    it('fails if its contained parser fails', () => {
      tfail(compact(many1(any)), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(compact(seq(letter, digit)), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
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
      tpass(nth(seq(char('"'), any, char('"')), 1), '"a"', 'a')
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

  describe('map', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        map(0, x => x),
        '',
        '[map]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        map(any, 0),
        '',
        '[map]: expected 2nd argument to be a function; found 0',
      )
    })
    it('succeeds with the return value of its function', () => {
      tpass(map(any, c => c.toUpperCase()), 'abc', 'A')
      tpass(map(seq(letter, digit), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      tfail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(map(seq(letter, digit), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        status: Fatal,
        index: 1,
      })
    })
  })

  describe('apply', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        apply(0, any),
        '',
        '[apply]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        apply(any, 0),
        '',
        '[apply]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      terror(
        apply(any, any),
        'ab',
        '[apply]: expected 2nd argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      tpass(apply(any, always(x => x.toUpperCase())), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      tfail(apply(char('a'), any), 'b', { expected: "'a'", status: Fail })
    })
    it('fails fatally if input is consumed before failure', () => {
      tfail(apply(char('a'), char('b')), 'ac', {
        expected: "'b'",
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Applicative style for `andThen(char('a'), char('b'))`
      const p = apply(char('a'), apply(char('b'), always(b => a => [a, b])))
      tpass(p, 'ab', ['a', 'b'])
      tfail(p, 'cd', { expected: "'a'", status: Fail })
      tfail(p, 'ac', { expected: "'b'", status: Fatal })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = apply(opt(char('-')), value(digit, x => x))
      tpass(parser, '-1', '-')
      tpass(parser, '1', { value: null })
      tfail(parser, 'a', "'-' or a digit")
    })
  })

  describe('chain', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        chain(0, x => x),
        '',
        '[chain]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        chain(any, 0),
        '',
        '[chain]: expected 2nd argument to be a function; found 0',
      )
    })
    it('throws if its second argument does not return a parser', () => {
      terror(
        chain(any, x => x),
        'a',
        '[chain]: expected the 2nd argument to return a parser; found "a"',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      tpass(chain(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      tfail(chain(any, c => char(c)), 'ab', "'a'")
    })
    it('fails if its parser fails without calling the second parser', () => {
      tfail(chain(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the second fails after the first consumes', () => {
      tfail(chain(char('a'), () => char('b')), 'ac', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Monadic style for `andThen(char('a'), char('b'))`
      const p = chain(char('a'), a => chain(char('b'), b => always([a, b])))
      tpass(p, 'ab', ['a', 'b'])
      tfail(p, 'cd', { expected: "'a'", status: Fail })
      tfail(p, 'ac', { expected: "'b'", status: Fatal })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = chain(opt(char('-')), () => digit)
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
    })
  })
})
