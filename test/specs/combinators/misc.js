// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { opt } from 'kessel/combinators/alternative'
import { bseq } from 'kessel/combinators/backtracking'
import { clean, flat, join } from 'kessel/combinators/chaining'
import { block, label, lazy, skip } from 'kessel/combinators/misc'
import { many, right, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, letter } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { str } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Miscellaneous combinators', () => {
  describe('label', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => label(0, 'test'),
        '',
        '[label]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        () => label(letter()),
        '',
        '[label]: expected second argument to be a string; found undefined',
      )
    })
    it('changes the error message of the parser it wraps', () => {
      tfail(label(letter(), 'not a digit!'), '1', 'not a digit!')
      tfail(label(bseq(letter(), letter()), 'two letters'), 'a1', 'two letters')
    })
    it('retains the result if the parser succeeds', () => {
      tpass(label(letter(), 'not a digit!'), 'a', 'a')
      tpass(label(bseq(letter(), letter()), 'two letters'), 'ab', ['a', 'b'])
    })
    it('retains the old error message if the parser fails fatally', () => {
      tfail(label(seq(letter(), letter()), 'two letters'), 'a1', 'a letter')
    })
  })

  describe('lazy', () => {
    it('throws if its first argument is not a function', () => {
      terror(
        () => lazy(0),
        '',
        '[lazy]: expected argument to be a function; found 0',
      )
      terror(
        () => lazy(0, 'test'),
        '',
        '[lazy]: expected first argument to be a function; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => lazy(any, 0),
        '',
        '[lazy]: expected second argument to be a string; found 0',
      )
    })
    it('throws if the argument does not return a parser', () => {
      terror(
        lazy(() => 0),
        'a',
        '[lazy]: expected function argument to return a parser',
      )
    })
    it('allows a parser to be defined recursively', () => {
      const list = (function list() {
        return clean(flat(seq(
          join(many(letter())),
          opt(right(char(','), lazy(list))),
        )))
      }())
      tpass(list, 'alfa,bravo,charlie', ['alfa', 'bravo', 'charlie'])
    })
  })

  describe('block', () => {
    const parser = block(function *() {
      yield str('abc')
      yield space()
      const c = yield any()
      yield space()

      return c
    })
    const parserm = block(function *() {
      yield str('abc')
      yield space()
      const c = yield any()
      yield space()

      return c
    }, "a character after 'abc'")

    it('throws if its first argument is not a generator function', () => {
      terror(
        () => block(0),
        '',
        '[block]: expected argument to be a generator function; found 0',
      )
      terror(
        () => block(() => {}),
        '',
        '[block]: expected argument to be a generator function; found function',
      )
      terror(
        () => block(0, 'test'),
        '',
        '[block]: expected first argument to be a generator function; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      () => terror(
        block(function *() { yield 1 }, 0),
        '',
        '[block]: expected second argument to be a string; found 0',
      )
    })
    it('throws if it yields something other than a parser', () => {
      terror(
        block(function *() { yield any(); yield 0; return 0 }),
        'abc',
        '[block]: expected second yield to be to a parser; found 0',
      )
      terror(
        block(function *() {
          yield any()
          yield any()
          yield x => x
          return 0
        }),
        'abc',
        '[block]: expected third yield to be to a parser; found function',
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
      tfail(parserm, 'abd', {
        expected: "a character after 'abc'",
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abcd', {
        expected: "a character after 'abc'",
        index: 3,
        status: Fatal,
      })
      tfail(parserm, 'abc ', {
        expected: "a character after 'abc'",
        index: 4,
        status: Fatal,
      })
      tfail(parserm, 'abc de', {
        expected: "a character after 'abc'",
        index: 5,
        status: Fatal,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      tpass(parser, 'abc d ', { result: 'd', index: 6 })
      tpass(parserm, 'abc d ', { result: 'd', index: 6 })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = block(function *() {
        yield opt(char('+'))
        yield opt(char('-'))
        return yield digit()
      })
      tpass(parser, '+-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'+', '-', or a digit")
      tfail(parserm, 'a', "a character after 'abc'")
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = block(function *() {
        yield opt(char('-'))
        const a = yield digit()
        const b = yield digit()
        return a + b
      })
      tpass(parser, '-12', '12')
      tpass(parser, '12', '12')
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', 'a digit')
    })
  })

  describe('skip', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => skip(0), '', '[skip]: expected argument to be a parser; found 0',
      )
      terror(
        () => skip(0, 'test'),
        '',
        '[skip]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a parser', () => {
      terror(
        () => skip(any(), 0),
        '',
        '[skip]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds with no result if its parser succeeds', () => {
      tpass(skip(char('a')), 'abc', { result: null, index: 1 })
      tpass(skip(many(letter())), 'abcdef123', { result: null, index: 6 })
      tpass(skip(char('a'), 'test'), 'abc', { result: null, index: 1 })
    })
    it('propagates failures without modification', () => {
      tfail(skip(char('a')), '123', { expected: "'a'", status: Fail })
      tfail(skip(seq(str('ab'), str('cd'))), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
      tfail(skip(char('a'), "an 'a'"), '123', {
        expected: "an 'a'",
        status: Fail,
      })
      tfail(skip(seq(str('ab'), str('cd')), "'abcd'"), 'abce', {
        expected: "'abcd'",
        status: Fatal,
      })
    })
  })
})
