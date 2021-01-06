// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { opt } from 'kessel/combinators/alternative'
import { value } from 'kessel/combinators/misc'
import {
  always,
  andThen,
  apply,
  chain,
  map,
  orElse,
} from 'kessel/combinators/primitive'
import { left } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter } from 'kessel/parsers/char'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Primitive combinators', () => {
  describe('always', () => {
    it('succeeds with the passed-in value', () => {
      tpass(always('a'), '', 'a')
      tpass(always(23), '', { result: 23, index: 0 })
      tpass(always({ a: 1 }), '', { result: { a: 1 }, index: 0 })
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
      tpass(map(andThen(letter, digit), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      tfail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        status: Fail,
      })
      tfail(map(andThen(letter, digit), cs => cs.join('')), 'ab', {
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

  describe('orElse', () => {
    const parser = orElse(
      andThen(char('a'), char('b')),
      andThen(char('c'), char('d')),
    )

    it('throws if either argument is not a parser', () => {
      terror(
        orElse(0, any),
        '',
        '[orElse]: expected 1st argument to be a parser; found 0',
      )
      terror(
        orElse(any, 0),
        '',
        '[orElse]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds if one of its parsers succeeds', () => {
      tpass(parser, 'abcd', ['a', 'b'])
      tpass(parser, 'cdef', ['c', 'd'])
    })
    it('fails if both parsers fail', () => {
      tfail(parser, 'wxyz', "'a' or 'c'")
    })
    it('fails if either parser fails fatally', () => {
      tfail(parser, 'cefg', "'a' or 'd'")
      tfail(parser, 'axcd', "'b'")
    })
  })

  describe('andThen', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        andThen(0, any),
        '',
        '[andThen]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        andThen(any, 0),
        '',
        '[andThen]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of both parsers if both pass', () => {
      tpass(andThen(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(andThen(letter, digit), '1', {
        expected: 'a letter',
        status: Status.Fail,
      })
      tfail(andThen(eof, char('a')), '', {
        expected: "'a'",
        status: Status.Fail,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      tfail(andThen(left(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Status.Fatal,
      })
      tfail(andThen(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Status.Fatal,
      })
    })
    it('returns opt error message if later parser fails', () => {
      const parser = andThen(opt(char('+')), digit)
      tpass(parser, '+1', ['+', '1'])
      tpass(parser, '1', [null, '1'])
      tfail(parser, 'a', "'+' or a digit")
    })
  })
})
