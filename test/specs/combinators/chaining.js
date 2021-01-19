// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { opt } from 'kessel/combinators/alternative'
import {
  apply,
  chain,
  clean,
  fifth,
  first,
  flat,
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
      terror(
        () => join(0), '', '[join]: expected argument to be a parser; found 0',
      )
      terror(
        () => join(0, 'test'),
        '',
        '[join]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => join(any(), 0),
        '',
        '[join]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        join(any()),
        'a',
        '[join]: expected argument to return an array; found "a"',
      )
    })
    it('joins array elements together into a resulting string', () => {
      tpass(join(many(any())), '123', '123')
      tpass(join(map(many(any()), x => x.map(c => parseInt(c)))), '123', '123')
      tpass(join(many(any()), 'test'), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      tfail(join(many1(any())), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(join(seq(letter(), digit())), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
      tfail(join(many1(any()), 'a character'), '', {
        expected: 'a character',
        status: Fail,
      })
      tfail(join(seq(letter(), digit()), 'a letter and a digit'), 'ab', {
        expected: 'a letter and a digit',
        status: Fatal,
      })
    })
  })

  describe('flat', () => {
    const parser = seq(
      many(letter()),
      many(seq(digit(), many1(letter()))),
    )
    const parserf = flat(parser)
    const parserm = flat(parser, 'something weird')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => flat(0), '', '[flat]: expected argument to be a parser; found 0',
      )
      terror(
        () => flat(0, 'test'),
        '',
        '[flat]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => flat(any(), 0),
        '',
        '[flat]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        flat(any()),
        'a',
        '[flat]: expected argument to return an array; found "a"',
      )
    })
    it('flattens the results of nested array-producing parsers', () => {
      tpass(parser, 'abc1ef2g3xyz', [
        ['a', 'b', 'c'],
        [['1', ['e', 'f']], ['2', ['g']], ['3', ['x', 'y', 'z']]],
      ])
      tpass(
        parserf,
        'abc1ef2g3xyz',
        ['a', 'b', 'c', '1', 'e', 'f', '2', 'g', '3', 'x', 'y', 'z'],
      )
      tpass(
        parserm,
        'abc1ef2g3xyz',
        ['a', 'b', 'c', '1', 'e', 'f', '2', 'g', '3', 'x', 'y', 'z'],
      )
    })
    it('fails if its contained parser fails', () => {
      tfail(flat(many1(any())), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(flat(seq(letter(), digit())), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
      tfail(flat(many1(any()), 'a character'), '', {
        expected: 'a character',
        status: Fail,
      })
      tfail(flat(seq(letter(), digit()), 'a letter and a digit'), 'ab', {
        expected: 'a letter and a digit',
        status: Fatal,
      })
    })
  })

  describe('clean', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => clean(0),
        '',
        '[clean]: expected argument to be a parser; found 0',
      )
      terror(
        () => clean(0, 'test'),
        '',
        '[clean]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => clean(any(), 0),
        '',
        '[clean]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        clean(any()),
        'a',
        '[clean]: expected argument to return an array; found "a"',
      )
    })
    it('removes null or undefined values from a parser result', () => {
      const parser = seq(letter(), opt(digit()), letter())
      tpass(parser, 'ab', ['a', null, 'b'])
      tpass(clean(parser), 'ab', ['a', 'b'])
      tpass(clean(parser, 'a clean array'), 'ab', ['a', 'b'])
    })
    it('fails if its contained parser fails', () => {
      tfail(clean(many1(any())), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(clean(seq(letter(), digit())), 'ab', {
        expected: 'a digit',
        status: Fatal,
      })
      tfail(clean(many1(any()), 'a character'), '', {
        expected: 'a character',
        status: Fail,
      })
      tfail(clean(seq(letter(), digit()), 'a letter and a digit'), 'ab', {
        expected: 'a letter and a digit',
        status: Fatal,
      })
    })
  })

  describe('value', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => value(0),
        '',
        '[value]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => value(any(), 0, 0),
        '',
        '[value]: expected third argument to be a string; found 0',
      )
    })
    it('returns its constant when its parser succeeds', () => {
      tpass(value(letter(), '!'), 'a', '!')
      tpass(value(digit(), 10), '1', { result: 10 })
      tpass(value(letter(), '!', 'letter?'), 'a', '!')
    })
    it('passes failures through', () => {
      tfail(value(char('a'), '!'), 'b', "'a'")
      tfail(value(char('a'), '!', 'an a'), 'b', 'an a')
    })
  })

  describe('nth', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => nth(0, 1),
        '',
        '[nth]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        () => nth(many(any()), '1'),
        '',
        '[nth]: expected second argument to be a number; found "1"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => nth(many(any()), 1, 0),
        '',
        '[nth]: expected third argument to be a string; found 0',
      )
    })
    it('throws if its first argument does not return an array', () => {
      terror(
        nth(any(), 0),
        'a',
        '[nth]: expected first argument to return an array; found "a"',
      )
    })
    it('extracts the nth element of an array result', () => {
      tpass(nth(many(any()), 2), '12345', '3')
      tpass(nth(seq(char('"'), any(), char('"')), 1), '"a"', 'a')
    })
    it('passes any parser failure through', () => {
      tfail(nth(many1(any()), 2), '', 'any character')
    })
  })

  describe('first', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        () => first(0),
        '',
        '[first]: expected argument to be a parser; found 0',
      )
      terror(
        () => first(0, 'test'),
        '',
        '[first]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => first(any(), 0),
        '',
        '[first]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        first(any()),
        'a',
        '[first]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the first element of an array result', () => {
      tpass(first(many(any())), '12345', '1')
      tpass(first(many(any()), 'test'), '12345', '1')
    })
    it('passes any parser failure through', () => {
      tfail(first(many1(any())), '', 'any character')
      tfail(first(many1(any()), 'a character'), '', 'a character')
    })
  })

  describe('second', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        () => second(0),
        '',
        '[second]: expected argument to be a parser; found 0',
      )
      terror(
        () => second(0, 'test'),
        '',
        '[second]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => second(any(), 0),
        '',
        '[second]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        second(any()),
        'a',
        '[second]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the second element of an array result', () => {
      tpass(second(many(any())), '12345', '2')
      tpass(second(many(any()), 'test'), '12345', '2')
    })
    it('passes any parser failure through', () => {
      tfail(second(many1(any())), '', 'any character')
      tfail(second(many1(any()), 'a character'), '', 'a character')
    })
  })

  describe('third', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        () => third(0),
        '',
        '[third]: expected argument to be a parser; found 0',
      )
      terror(
        () => third(0, 'test'),
        '',
        '[third]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => third(any(), 0),
        '',
        '[third]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        third(any()),
        'a',
        '[third]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the third element of an array result', () => {
      tpass(third(many(any())), '12345', '3')
      tpass(third(many(any()), 'test'), '12345', '3')
    })
    it('passes any parser failure through', () => {
      tfail(third(many1(any())), '', 'any character')
      tfail(third(many1(any()), 'a character'), '', 'a character')
    })
  })

  describe('fourth', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        () => fourth(0),
        '',
        '[fourth]: expected argument to be a parser; found 0',
      )
      terror(
        () => fourth(0, 'test'),
        '',
        '[fourth]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => fourth(any(), 0),
        '',
        '[fourth]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        fourth(any()),
        'a',
        '[fourth]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the fourth element of an array result', () => {
      tpass(fourth(many(any())), '12345', '4')
      tpass(fourth(many(any()), 'test'), '12345', '4')
    })
    it('passes any parser failure through', () => {
      tfail(fourth(many1(any())), '', 'any character')
      tfail(fourth(many1(any()), 'a character'), '', 'a character')
    })
  })

  describe('fifth', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        () => fifth(0),
        '',
        '[fifth]: expected argument to be a parser; found 0',
      )
      terror(
        () => fifth(0, 'test'),
        '',
        '[fifth]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => fifth(any(), 0),
        '',
        '[fifth]: expected second argument to be a string; found 0',
      )
    })
    it('throws if its argument does not return an array', () => {
      terror(
        fifth(any()),
        'a',
        '[fifth]: expected argument to return an array; found "a"',
      )
    })
    it('extracts the fifth element of an array result', () => {
      tpass(fifth(many(any())), '12345', '5')
      tpass(fifth(many(any()), 'test'), '12345', '5')
    })
    it('passes any parser failure through', () => {
      tfail(fifth(many1(any())), '', 'any character')
      tfail(fifth(many1(any()), 'a character'), '', 'a character')
    })
  })

  describe('map', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => map(0, x => x),
        '',
        '[map]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        () => map(any(), 0),
        '',
        '[map]: expected second argument to be a function; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => map(any(), x => x, 0),
        '',
        '[map]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with the return value of its function', () => {
      tpass(map(any(), c => c.toUpperCase()), 'abc', 'A')
      tpass(map(seq(letter(), digit()), cs => cs.join('')), 'a1', 'a1')
      tpass(map(any(), c => c.toUpperCase(), 'test'), 'abc', 'A')
    })
    it('propagates failed state if its parser fails', () => {
      tfail(map(any(), c => c.toUpperCase()), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(map(seq(letter(), digit()), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        status: Fatal,
        index: 1,
      })
      tfail(map(any(), c => c.toUpperCase(), 'a char'), '', {
        expected: 'a char',
        status: Fail,
      })
      tfail(map(
        seq(letter(), digit()), cs => cs.join(''), 'letter, digit',
      ), 'ab', {
        expected: 'letter, digit',
        status: Fatal,
        index: 1,
      })
    })
  })

  describe('apply', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => apply(0, any()),
        '',
        '[apply]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => apply(any(), 0),
        '',
        '[apply]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => apply(any(), any(), 0),
        '',
        '[apply]: expected third argument to be a string; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      terror(
        apply(any(), any()),
        'ab',
        '[apply]: expected second argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      tpass(apply(any(), always(x => x.toUpperCase())), 'a', 'A')
      tpass(apply(any(), always(x => x.toUpperCase()), 'test'), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      tfail(apply(char('a'), any()), 'b', { expected: "'a'", status: Fail })
      tfail(apply(char('a'), any(), "an 'a'"), 'b', {
        expected: "an 'a'",
        status: Fail,
      })
    })
    it('fails fatally if input is consumed before failure', () => {
      tfail(apply(char('a'), char('b')), 'ac', {
        expected: "'b'",
        status: Fatal,
      })
      tfail(apply(char('a'), char('b'), "'a' then 'b'"), 'ac', {
        expected: "'a' then 'b'",
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
      const parser = apply(opt(char('-')), value(digit(), x => x))
      tpass(parser, '-1', '-')
      tpass(parser, '1', { value: null })
      tfail(parser, 'a', "'-' or a digit")
    })
  })

  describe('chain', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => chain(0, x => x),
        '',
        '[chain]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        () => chain(any(), 0),
        '',
        '[chain]: expected second argument to be a function; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => chain(any(), x => x, 0),
        '',
        '[chain]: expected third argument to be a string; found 0',
      )
    })
    it('throws if its second argument does not return a parser', () => {
      terror(
        chain(any(), x => x),
        'a',
        '[chain]: expected second argument to return a parser; found "a"',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      tpass(chain(any(), c => char(c)), 'aa', { result: 'a', index: 2 })
      tpass(chain(any(), c => char(c), 'test'), 'aa', { result: 'a', index: 2 })
      tfail(chain(any(), c => char(c)), 'ab', "'a'")
      tfail(
        chain(any(), c => char(c), 'a double letter'),
        'ab',
        'a double letter',
      )
    })
    it('fails if its parser fails without calling the second parser', () => {
      tfail(chain(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Fail,
      })
      tfail(chain(char('a'), () => char('b'), "'a' then 'b'"), 'bb', {
        expected: "'a' then 'b'",
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
      tfail(chain(char('a'), () => char('b'), "'a' then 'b'"), 'ac', {
        expected: "'a' then 'b'",
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
      const parser = chain(opt(char('-')), () => digit())
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
    })
  })
})
