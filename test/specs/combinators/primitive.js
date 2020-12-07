// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { left } from 'kessel/combinators/chaining'
import {
  always,
  andThen,
  apply,
  chain,
  empty,
  map,
  orElse,
} from 'kessel/combinators/primitive'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter } from 'kessel/parsers/char'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Primitive combinators', () => {
  describe('always', () => {
    it('succeeds with the passed-in value', () => {
      pass(always('a'), '', 'a')
      pass(always(23), '', { result: 23, index: 0 })
      pass(always({ a: 1 }), '', { result: { a: 1 }, index: 0 })
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
      pass(map(andThen(letter, digit), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      fail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        status: Error,
      })
      fail(map(andThen(letter, digit), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        status: Fatal,
        index: 1,
      })
    })
  })

  describe('apply', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        apply(0, any),
        '',
        '[apply]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        apply(any, 0),
        '',
        '[apply]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      error(
        apply(any, any),
        'ab',
        '[apply]: expected 2nd argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      pass(apply(any, always(x => x.toUpperCase())), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      fail(apply(char('a'), any), 'b', { expected: "'a'", status: Error })
    })
    it('fails fatally if input is consumed before failure', () => {
      fail(apply(char('a'), char('b')), 'ac', {
        expected: "'b'",
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Applicative style for `andThen(char('a'), char('b'))`
      const p = apply(char('a'), apply(char('b'), always(b => a => [a, b])))
      pass(p, 'ab', ['a', 'b'])
      fail(p, 'cd', { expected: "'a'", status: Error })
      fail(p, 'ac', { expected: "'b'", status: Fatal })
    })
  })

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
    it('throws if its second argument does not return a parser', () => {
      error(
        chain(any, x => x),
        'a',
        '[chain]: expected the 2nd argument to return a parser; found "a"',
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
    it('can be used to implement sequencing', () => {
      // Monadic style for `andThen(char('a'), char('b'))`
      const p = chain(char('a'), a => chain(char('b'), b => always([a, b])))
      pass(p, 'ab', ['a', 'b'])
      fail(p, 'cd', { expected: "'a'", status: Error })
      fail(p, 'ac', { expected: "'b'", status: Fatal })
    })
  })

  describe('empty', () => {
    it('always succeeds with no result', () => {
      pass(empty, 'abc', { result: null, index: 0 })
    })
  })

  describe('orElse', () => {
    const parser = orElse(
      andThen(char('a'), char('b')),
      andThen(char('c'), char('d')),
    )

    it('throws if either argument is not a parser', () => {
      error(
        orElse(0, any),
        '',
        '[orElse]: expected 1st argument to be a parser; found 0',
      )
      error(
        orElse(any, 0),
        '',
        '[orElse]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds if one of its parsers succeeds', () => {
      pass(parser, 'abcd', ['a', 'b'])
      pass(parser, 'cdef', ['c', 'd'])
    })
    it('fails if both parsers fail', () => {
      fail(parser, 'wxyz', "'a' or 'c'")
    })
    it('fails if either parser fails fatally', () => {
      fail(parser, 'cefg', "'a' or 'd'")
      fail(parser, 'axcd', "'b'")
    })
  })

  describe('andThen', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        andThen(0, any),
        '',
        '[andThen]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        andThen(any, 0),
        '',
        '[andThen]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of both parsers if both pass', () => {
      pass(andThen(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(andThen(letter, digit), '1', {
        expected: 'a letter',
        status: Status.Error,
      })
      fail(andThen(eof, char('a')), '', {
        expected: "'a'",
        status: Status.Error,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(andThen(left(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Status.Fatal,
      })
      fail(andThen(letter, digit), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Status.Fatal,
      })
    })
  })
})
