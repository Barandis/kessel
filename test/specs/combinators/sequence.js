// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { alt, opt } from 'kessel/combinators/alternative'
import { join, map, value } from 'kessel/combinators/chaining'
import { skip } from 'kessel/combinators/misc'
import {
  rassoc1,
  between,
  count,
  endby,
  endby1,
  lassoc,
  lassoc1,
  left,
  many,
  many1,
  until,
  pipe,
  rassoc,
  right,
  sepby,
  sepby1,
  seq,
} from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter, noneof } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { str } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Sequence combinators', () => {
  describe('seq', () => {
    const parser = seq(str('abc'), str('def'), str('ghi'))
    const parserm = seq(
      str('abc'),
      str('def'),
      str('ghi'),
      "'abcdefghi'",
    )

    it('throws if any of its arguments is not a parser', () => {
      terror(
        () => seq(any(), 0),
        '',
        '[seq]: expected second argument to be a parser; found 0',
      )
      terror(
        () => seq(any(), letter(), digit(), {}),
        '',
        '[seq]: expected fourth argument to be a parser; found {}',
      )
    })
    it('does not throw if the last argument only is a string', () => {
      tpass(seq(letter(), letter(), 'test'), 'abc', ['a', 'b'])
      terror(
        () => seq(any(), 'test', letter()),
        'abc',
        '[seq]: expected second argument to be a parser; found "test"',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', { expected: "'abc'", index: 0 })
      tfail(parser, 'abcdf', { expected: "'def'", index: 3 })
      tfail(parser, 'abcdefh', { expected: "'ghi'", index: 6 })
      tfail(parserm, 'abd', { expected: "'abcdefghi'", index: 0 })
      tfail(parserm, 'abcdf', { expected: "'abcdefghi'", index: 3 })
      tfail(parserm, 'abcdefh', { expected: "'abcdefghi'", index: 6 })
    })
    it('succeeds if all of its parsers succeed', () => {
      tpass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
      tpass(parserm, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('adds null to results', () => {
      tpass(seq(str('abc'), eof()), 'abc', {
        result: ['abc', null],
        index: 3,
      })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = seq(opt(char('+')), opt(char('-')), digit())
      const parserm = seq(opt(char('+')), opt(char('-')), digit(), '+-digit')

      tpass(parser, '+-1', ['+', '-', '1'])
      tpass(parser, '1', [null, null, '1'])
      tfail(parser, 'a', "'+', '-', or a digit")
      tfail(parserm, 'a', '+-digit')
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = seq(opt(char('-')), digit(), digit())
      const parserm = seq(opt(char('-')), digit(), digit(), '-\\d{2}')

      tpass(parser, '-12', ['-', '1', '2'])
      tpass(parser, '12', [null, '1', '2'])
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', 'a digit')
      tfail(parserm, 'ab', '-\\d{2}')
      tfail(parserm, '1a', '-\\d{2}')
    })
  })

  describe('many', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => many(0), '', '[many]: expected argument to be a parser; found 0',
      )
      terror(
        () => many(0, 'test'),
        '',
        '[many]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => many(any(), 0),
        '',
        '[many]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds zero times with an empty array', () => {
      tpass(many(digit()), 'abc123', [])
      tpass(many(digit()), '', [])
      tpass(many(digit(), 'many digits'), 'abc123', [])
    })
    it('succeeds with all results until a non-match', () => {
      tpass(many(digit()), '123abc', ['1', '2', '3'])
      tpass(many(digit()), '123abc456', ['1', '2', '3'])
      tpass(many(digit(), 'many digits'), '123abc', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(many(digit()), '123', ['1', '2', '3'])
      tpass(many(digit(), 'many digits'), '123', ['1', '2', '3'])
    })
    it('fails if its parser consumes while failing', () => {
      tfail(many(seq(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
      tfail(many(seq(char('a'), char('b')), "series of 'ab'"), 'ababac', {
        expected: "series of 'ab'",
        index: 5,
        status: Fatal,
      })
    })
    it('adds null to the results', () => {
      tpass(
        many(map(letter(), x => x === 'a' ? null : x)),
        'abc',
        [null, 'b', 'c'],
      )
    })
  })

  describe('many1', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => many1(0),
        '',
        '[many1]: expected argument to be a parser; found 0',
      )
      terror(
        () => many1(0, 'test'),
        '',
        '[many1]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        () => many1(any(), 0),
        '',
        '[many1]: expected second argument to be a string; found 0',
      )
    })
    it('fails if its parser does not match at least once', () => {
      tfail(many1(digit()), 'abc123', 'a digit')
      tfail(many1(digit()), '', 'a digit')
      tfail(many1(digit(), 'many digits'), 'abc123', 'many digits')
    })
    it('succeeds with all results until a non-match', () => {
      tpass(many1(digit()), '123abc', ['1', '2', '3'])
      tpass(many1(digit()), '123abc456', ['1', '2', '3'])
      tpass(many1(digit(), 'many digits'), '123abc', ['1', '2', '3'])
    })
    it('succeeds until EOF if matches continue until then', () => {
      tpass(many1(digit()), '123', ['1', '2', '3'])
      tpass(many1(digit(), 'many digits'), '123', ['1', '2', '3'])
    })
    it('fails if its parser consumes while failing', () => {
      tfail(many1(seq(char('a'), char('b'))), 'ababac', {
        expected: "'b'",
        index: 5,
        status: Fatal,
      })
      tfail(many1(seq(char('a'), char('b')), "series of 'ab'"), 'ababac', {
        expected: "series of 'ab'",
        index: 5,
        status: Fatal,
      })
    })
    it('adds null to the results', () => {
      tpass(
        many1(map(letter(), x => x === 'a' ? null : x)),
        'abc',
        [null, 'b', 'c'],
      )
      tpass(
        many1(map(letter(), x => x === 'b' ? null : x)),
        'abc',
        ['a', null, 'c'],
      )
    })
    it('succeeds with a single null result', () => {
      tpass(
        many1(map(letter(), x => x === 'a' ? null : x)), 'a', [null],
      )
    })
  })

  describe('sepby', () => {
    const parser = sepby(letter(), char(','))
    const parserm = sepby(letter(), char(','), 'comma separated letters')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => sepby(0, any()),
        '',
        '[sepby]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => sepby(any(), 0),
        '',
        '[sepby]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a string', () => {
      terror(
        () => sepby(any(), any(), 0),
        '',
        '[sepby]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
      tpass(parserm, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
      tpass(parserm, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
      tpass(parserm, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
      tpass(parserm, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('succeeds with no initial match', () => {
      tpass(parser, '1', { result: [], index: 0 })
      tpass(parserm, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepby(seq(letter(), letter()), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepby(seq(letter(), letter()), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(sepby(seq(letter(), letter()), char(','), 'test'), 'ab,a1', {
        expected: 'test',
        index: 4,
        status: Fatal,
      })
      tfail(sepby(seq(letter(), letter()), char(','), 'test'), 'a1', {
        expected: 'test',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepby(letter(), seq(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
      tfail(sepby(letter(), seq(char('-'), char('-')), 'test'), 'a--b-c', {
        expected: 'test',
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepby(str(''), str('')),
        'abc',
        '[sepby]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('sepby1', () => {
    const parser = sepby1(letter(), char(','))
    const parserm = sepby1(letter(), char(','), 'comma separated letters')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => sepby1(0, any()),
        '',
        '[sepby1]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => sepby1(any(), 0),
        '',
        '[sepby1]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a string', () => {
      terror(
        () => sepby1(any(), any(), 0),
        '',
        '[sepby1]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
      tpass(parserm, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
      tpass(parserm, 'a', { result: ['a'], index: 1 })
    })
    it('ignores the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 3 })
      tpass(parserm, 'a,b,1', { result: ['a', 'b'], index: 3 })
    })
    it('ignores the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 3 })
      tpass(parserm, 'a,b,', { result: ['a', 'b'], index: 3 })
    })
    it('fails if there is no initial match', () => {
      tfail(parser, '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(parserm, '1', {
        expected: 'comma separated letters',
        index: 0,
        status: Fail,
      })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(sepby1(seq(letter(), letter()), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(sepby1(seq(letter(), letter()), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(sepby1(seq(letter(), letter()), char(','), 'test'), 'ab,a1', {
        expected: 'test',
        index: 4,
        status: Fatal,
      })
      tfail(sepby1(seq(letter(), letter()), char(','), 'test'), 'a1', {
        expected: 'test',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(sepby1(letter(), seq(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
      tfail(sepby1(letter(), seq(char('-'), char('-')), 'test'), 'a--b-c', {
        expected: 'test',
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        sepby1(str(''), str('')),
        'abc',
        '[sepby1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('endby', () => {
    const parser = endby(letter(), char(','))
    const parserm = endby(letter(), char(','), 'comma separated letters')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => endby(0, any()),
        '',
        '[endby]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => endby(any(), 0),
        '',
        '[endby]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        () => endby(any(), any(), 0),
        '',
        '[endby]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
      tpass(parserm, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
      tpass(parserm, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
      tpass(parserm, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('comsumes the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
      tpass(parserm, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('succeeds with no initial match', () => {
      tpass(parser, '1', { result: [], index: 0 })
      tpass(parserm, '1', { result: [], index: 0 })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(endby(seq(letter(), letter()), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(endby(seq(letter(), letter()), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(endby(seq(letter(), letter()), char(','), 'test'), 'ab,a1', {
        expected: 'test',
        index: 4,
        status: Fatal,
      })
      tfail(endby(seq(letter(), letter()), char(','), 'test'), 'a1', {
        expected: 'test',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(endby(letter(), seq(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
      tfail(endby(letter(), seq(char('-'), char('-')), 'test'), 'a--b-c', {
        expected: 'test',
        index: 5,
        status: Fatal,
      })
    })
    it('fails if the optional final separator fails fatally', () => {
      tfail(endby(letter(), seq(char('-'), char('-'))), 'a--b--c-', {
        expected: "'-'",
        index: 8,
        status: Fatal,
      })
      tfail(endby(letter(), seq(char('-'), char('-')), 'test'), 'a--b--c-', {
        expected: 'test',
        index: 8,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        endby(str(''), str('')),
        'abc',
        '[endby]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('endby1', () => {
    const parser = endby1(letter(), char(','))
    const parserm = endby1(letter(), char(','), 'comma separated letters')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => endby1(0, any()),
        '',
        '[endby1]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => endby1(any(), 0),
        '',
        '[endby1]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        () => endby1(any(), any(), 0),
        '',
        '[endby1]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with multiple values with separators', () => {
      tpass(parser, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
      tpass(parserm, 'a,b,c', { result: ['a', 'b', 'c'], index: 5 })
    })
    it('succeeds with a single value with no separator', () => {
      tpass(parser, 'a', { result: ['a'], index: 1 })
      tpass(parserm, 'a', { result: ['a'], index: 1 })
    })
    it('consumes the final separator with no match after', () => {
      tpass(parser, 'a,b,1', { result: ['a', 'b'], index: 4 })
      tpass(parserm, 'a,b,1', { result: ['a', 'b'], index: 4 })
    })
    it('consumes the final separator at the end of text', () => {
      tpass(parser, 'a,b,', { result: ['a', 'b'], index: 4 })
      tpass(parserm, 'a,b,', { result: ['a', 'b'], index: 4 })
    })
    it('fails if there is no initial match', () => {
      tfail(parser, '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(parserm, '1', {
        expected: 'comma separated letters',
        index: 0,
        status: Fail,
      })
    })
    it('fails if its content parser fails fatally', () => {
      tfail(endby1(seq(letter(), letter()), char(',')), 'ab,a1', {
        expected: 'a letter',
        index: 4,
        status: Fatal,
      })
      tfail(endby1(seq(letter(), letter()), char(',')), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(endby1(seq(letter(), letter()), char(','), 'test'), 'ab,a1', {
        expected: 'test',
        index: 4,
        status: Fatal,
      })
      tfail(endby1(seq(letter(), letter()), char(','), 'test'), 'a1', {
        expected: 'test',
        index: 1,
        status: Fatal,
      })
    })
    it('fails if its separator parser fails fatally', () => {
      tfail(endby1(letter(), seq(char('-'), char('-'))), 'a--b-c', {
        expected: "'-'",
        index: 5,
        status: Fatal,
      })
      tfail(endby1(letter(), seq(char('-'), char('-')), 'test'), 'a--b-c', {
        expected: 'test',
        index: 5,
        status: Fatal,
      })
    })
    it('throws if an infinite loop was detected', () => {
      terror(
        endby1(str(''), str('')),
        'abc',
        '[endby1]: infinite loop detected; '
          + 'neither content nor separator parser consumed input',
      )
    })
  })

  describe('count', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => count(0, 5),
        '',
        '[count]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        () => count(any(), '3'),
        '',
        '[count]: expected second argument to be a number; found "3"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => count(any(), 3, 0),
        '',
        '[count]: expected third argument to be a string; found 0',
      )
    })
    it('applies one parser a number of times', () => {
      tpass(count(letter(), 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      tpass(count(letter(), 2), 'abcdef', ['a', 'b'])
      tpass(count(letter(), 0), 'abcdef', [])
      tpass(count(letter(), 2, 'two letters'), 'abcdef', ['a', 'b'])
    })
    it('fails non-fatally if no input was consumed', () => {
      tfail(count(letter(), 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(count(letter(), 5, 'five letters'), '12345', {
        expected: 'five letters',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      tfail(count(seq(letter(), letter()), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(count(seq(letter(), letter()), 5, 'ten letters'), 'a1b2c3d4e5', {
        expected: 'ten letters',
        index: 1,
        status: Fatal,
      })
    })
    it('fails fatally on non-fatal errors if input was consumed', () => {
      tfail(count(letter(), 5), 'abc123', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
      tfail(count(letter(), 5, 'five letters'), 'abc123', {
        expected: 'five letters',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('until', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => until(0, any()),
        '',
        '[until]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => until(any(), 0),
        '',
        '[until]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => until(any(), any(), 0),
        '',
        '[until]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with content parser results before the end', () => {
      tpass(until(any(), letter()), '12./abc', ['1', '2', '.', '/'])
      tpass(until(any(), letter(), 'test'), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      tpass(until(any(), letter()), 'abc', [])
      tpass(until(any(), letter(), 'test'), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      tfail(until(digit(), letter()), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Fail,
      })
      tfail(until(digit(), letter(), 'digits, then a letter'), '.123abc', {
        expected: 'digits, then a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if input is consumed before content parser fails', () => {
      tfail(until(digit(), letter()), '123.abc', {
        expected: 'a digit or a letter',
        index: 3,
        status: Fatal,
      })
      tfail(until(digit(), letter(), 'digits, then a letter'), '123.abc', {
        expected: 'digits, then a letter',
        index: 3,
        status: Fatal,
      })
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      tfail(until(digit(), seq(letter(), digit())), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(until(seq(letter(), digit()), digit()), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
      tfail(until(digit(), seq(letter(), digit()), 'test'), '123abc', {
        expected: 'test',
        index: 4,
        status: Fatal,
      })
      tfail(until(seq(letter(), digit()), digit(), 'test'), 'a1b2cc3', {
        expected: 'test',
        index: 5,
        status: Fatal,
      })
    })
    it('adds null to the results', () => {
      tpass(
        until(alt(letter(), skip(space())), digit()),
        'a b c 1',
        ['a', null, 'b', null, 'c', null],
      )
    })
  })

  describe('lassoc', () => {
    const p = map(join(many1(digit())), x => parseInt(x))
    const op = alt(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        () => lassoc(0, any()),
        '',
        '[lassoc]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => lassoc(any(), 0),
        '',
        '[lassoc]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        lassoc(any(), any(), 0),
        'abc',
        '[lassoc]: expected first op parser to return a function; found "b"',
      )
    })
    it('throws if its fourth argument exists and is not a string', () => {
      terror(
        () => lassoc(any(), any(), 0, 0),
        '',
        '[lassoc]: expected fourth argument to be a string; found 0',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      tpass(lassoc(p, op, 0), '', { result: 0, index: 0 })
      tpass(lassoc(p, op, 0, 'test'), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(lassoc(p, op, 0), '23', { result: 23, index: 2 })
      tpass(lassoc(p, op, 0, 'test'), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(lassoc(p, op, 0), '23+17', { result: 40, index: 5 })
      tpass(lassoc(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(lassoc(p, op, 0), '23+17-42', { result: -2, index: 8 })
      tpass(lassoc(p, op, 0), '23-17+42', { result: 48, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(lassoc(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(lassoc(seq(digit(), digit()), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(lassoc(seq(digit(), digit()), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(lassoc(p, seq(letter(), letter()), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
      tfail(lassoc(seq(digit(), digit()), op, 0, 'an expression'), '1a', {
        expected: 'an expression',
        index: 1,
        status: Fatal,
      })
      tfail(lassoc(seq(digit(), digit()), op, 0, 'an expression'), '12+1a', {
        expected: 'an expression',
        index: 4,
        status: Fatal,
      })
      tfail(lassoc(p, seq(letter(), letter()), 0, 'an expression'), '23a1', {
        expected: 'an expression',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('lassoc1', () => {
    const p = map(join(many1(digit())), x => parseInt(x))
    const op = alt(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        () => lassoc1(0, any()),
        '',
        '[lassoc1]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => lassoc1(any(), 0),
        '',
        '[lassoc1]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        lassoc1(any(), any()),
        'abc',
        '[lassoc1]: expected first op parser to return a function; found "b"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => lassoc1(any(), any(), 0),
        '',
        '[lassoc1]: expected third argument to be a string; found 0',
      )
    })
    it('fails if there are no matches', () => {
      tfail(lassoc1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Fail,
      })
      tfail(lassoc1(p, op, 'an expression'), '', {
        expected: 'an expression',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(lassoc1(p, op), '23', { result: 23, index: 2 })
      tpass(lassoc1(p, op, 'test'), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(lassoc1(p, op), '23+17', { result: 40, index: 5 })
      tpass(lassoc1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(lassoc1(p, op), '23+17-42', { result: -2, index: 8 })
      tpass(lassoc1(p, op), '23-17+42', { result: 48, index: 8 })
      tpass(lassoc1(p, op, 'test'), '23+17-42', { result: -2, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(lassoc1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(lassoc1(seq(digit(), digit()), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(lassoc1(seq(digit(), digit()), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(lassoc1(p, seq(letter(), letter())), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
      tfail(lassoc1(seq(digit(), digit()), op, 'an expression'), '1a', {
        expected: 'an expression',
        index: 1,
        status: Fatal,
      })
      tfail(lassoc1(seq(digit(), digit()), op, 'an expression'), '12+1a', {
        expected: 'an expression',
        index: 4,
        status: Fatal,
      })
      tfail(lassoc1(p, seq(letter(), letter()), 'an expression'), '23a1', {
        expected: 'an expression',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('rassoc', () => {
    const p = map(join(many1(digit())), x => parseInt(x))
    const op = alt(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        () => rassoc(0, any()),
        '',
        '[rassoc]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => rassoc(any(), 0),
        '',
        '[rassoc]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        rassoc(any(), any(), 0),
        'abc',
        '[rassoc]: expected first op parser to return a function; found "b"',
      )
    })
    it('throws if its fourth argument exists and is not a string', () => {
      terror(
        () => rassoc(any(), any(), 0, 0),
        '',
        '[rassoc]: expected fourth argument to be a string; found 0',
      )
    })
    it('succeeds with a default value if there are no matches', () => {
      tpass(rassoc(p, op, 0), '', { result: 0, index: 0 })
      tpass(rassoc(p, op, 0, 'test'), '', { result: 0, index: 0 })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(rassoc(p, op, 0), '23', { result: 23, index: 2 })
      tpass(rassoc(p, op, 0, 'test'), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(rassoc(p, op, 0), '23+17', { result: 40, index: 5 })
      tpass(rassoc(p, op, 0), '23-17', { result: 6, index: 5 })
    })
    it('succeeds right-associatively with more than one match of op', () => {
      // incorrect math, good testing
      tpass(rassoc(p, op, 0), '23+17-42', { result: -2, index: 8 })
      tpass(rassoc(p, op, 0), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(rassoc(p, op, 0), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(rassoc(seq(digit(), digit()), op, 0), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(rassoc(seq(digit(), digit()), op, 0), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(rassoc(p, seq(letter(), letter()), 0), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
      tfail(rassoc(seq(digit(), digit()), op, 0, 'an expression'), '1a', {
        expected: 'an expression',
        index: 1,
        status: Fatal,
      })
      tfail(rassoc(seq(digit(), digit()), op, 0, 'an expression'), '12+1a', {
        expected: 'an expression',
        index: 4,
        status: Fatal,
      })
      tfail(rassoc(p, seq(letter(), letter()), 0, 'an expression'), '23a1', {
        expected: 'an expression',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('rassoc1', () => {
    const p = map(join(many1(digit())), x => parseInt(x))
    const op = alt(
      value(char('+'), (a, b) => a + b),
      value(char('-'), (a, b) => a - b),
    )

    it('throws if its first argument is not a parser', () => {
      terror(
        () => rassoc1(0, any()),
        '',
        '[rassoc1]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => rassoc1(any(), 0),
        '',
        '[rassoc1]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its second argument does not return a function', () => {
      terror(
        rassoc1(any(), any()),
        'abc',
        '[rassoc1]: expected first op parser to return a function; found "b"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => rassoc1(any(), any(), 0),
        '',
        '[rassoc1]: expected third argument to be a string; found 0',
      )
    })
    it('fails if there are no matches', () => {
      tfail(rassoc1(p, op), '', {
        expected: 'a digit',
        index: 0,
        status: Fail,
      })
      tfail(rassoc1(p, op, 'an expression'), '', {
        expected: 'an expression',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with the first match if op never matches', () => {
      tpass(rassoc1(p, op), '23', { result: 23, index: 2 })
      tpass(rassoc1(p, op, 'test'), '23', { result: 23, index: 2 })
    })
    it('succeeds with one match of op', () => {
      tpass(rassoc1(p, op), '23+17', { result: 40, index: 5 })
      tpass(rassoc1(p, op), '23-17', { result: 6, index: 5 })
    })
    it('succeeds left-associatively with more than one match of op', () => {
      tpass(rassoc1(p, op), '23+17-42', { result: -2, index: 8 })
      tpass(rassoc1(p, op), '23-17+42', { result: -36, index: 8 })
    })
    it('ignores the last op if there is no p match after', () => {
      tpass(rassoc1(p, op), '23+17-', { result: 40, index: 5 })
    })
    it('fails fatally if either parser fails fatally', () => {
      tfail(rassoc1(seq(digit(), digit()), op), '1a', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(rassoc1(seq(digit(), digit()), op), '12+1a', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(rassoc1(p, seq(letter(), letter())), '23a1', {
        expected: 'a letter',
        index: 3,
        status: Fatal,
      })
      tfail(rassoc1(seq(digit(), digit()), op, 'an expression'), '1a', {
        expected: 'an expression',
        index: 1,
        status: Fatal,
      })
      tfail(rassoc1(seq(digit(), digit()), op, 'an expression'), '12+1a', {
        expected: 'an expression',
        index: 4,
        status: Fatal,
      })
      tfail(rassoc1(p, seq(letter(), letter()), 'an expression'), '23a1', {
        expected: 'an expression',
        index: 3,
        status: Fatal,
      })
    })
  })

  describe('left', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => left(0, any()),
        '',
        '[left]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => left(any(), 0),
        '',
        '[left]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        () => left(any(), any(), 0),
        '',
        '[left]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      tpass(left(letter(), digit()), 'a1', 'a')
      tpass(left(letter(), digit(), 'test'), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(left(letter(), digit()), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(left(eof(), char('a')), '', { expected: "'a'", status: Fail })
      tfail(left(letter(), digit(), 'a letter, then a digit'), '1', {
        expected: 'a letter, then a digit',
        status: Fail,
      })
      tfail(left(eof(), char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      tfail(left(seq(letter(), letter()), digit()), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(left(letter(), digit()), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(left(
        seq(letter(), letter()), digit(), 'two letters, digit',
      ), 'a11', {
        expected: 'two letters, digit',
        index: 1,
        status: Fatal,
      })
      tfail(left(letter(), digit(), 'letter/digit'), 'ab', {
        expected: 'letter/digit',
        index: 1,
        status: Fatal,
      })
    })
    it('gives opt error messages if second parser fails', () => {
      const parser = left(opt(char('-')), digit())
      tpass(parser, '-1', '-')
      tpass(parser, '1', { result: null })
      tfail(parser, 'a', "'-' or a digit")
      tfail(left(opt(
        char('-'),
      ), digit(), 'one-digit integer'), 'a', 'one-digit integer')
    })
  })

  describe('right', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        () => right(0, any()),
        '',
        '[right]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => right(any(), 0),
        '',
        '[right]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argumeent exists and is not a string', () => {
      terror(
        () => right(any(), any(), 0),
        '',
        '[right]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(right(letter(), digit()), 'a1', '1')
      tpass(right(letter(), digit(), 'test'), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(right(letter(), digit()), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(right(eof(), char('a')), '', { expected: "'a'", status: Fail })
      tfail(right(letter(), digit(), 'a letter, then a digit'), '1', {
        expected: 'a letter, then a digit',
        status: Fail,
      })
      tfail(right(eof(), char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      tfail(right(seq(letter(), letter()), digit()), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(right(letter(), digit()), 'ab', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
    })
    it('gives opt error messages if second parser fails', () => {
      const parser = right(opt(char('-')), digit())
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(right(opt(
        char('-'),
      ), digit(), 'one-digit integer'), 'a', 'one-digit integer')
    })
  })

  describe('pipe', () => {
    it('throws if its last argument is not a function or a string', () => {
      terror(
        () => pipe(any(), any(), 0),
        '',
        '[pipe]: expected third argument to be a function; found 0',
      )
      terror(
        () => pipe(any(), any(), any(), any()),
        '',
        '[pipe]: expected fourth argument to be a function; found parser',
      )
    })
    it('throws if string last arg is not preceded by a function', () => {
      terror(
        () => pipe(any(), any(), any(), 'test'),
        '',
        '[pipe]: expected third argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      tpass(pipe(letter(), a => a.toUpperCase()), 'a', 'A')
      tpass(pipe(letter(), digit(), (a, b) => b + a), 'a1', '1a')
      tpass(pipe(
        letter(), digit(), letter(), (a, b, c) => c + b + a,
      ), 'a1b', 'b1a')
      tpass(pipe(letter(), a => a.toUpperCase(), 'test'), 'a', 'A')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      tfail(pipe(letter(), a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(pipe(letter(), a => a, 'a single letter'), '1', {
        expected: 'a single letter',
        index: 0,
        status: Fail,
      })
      tfail(pipe(eof(), letter(), (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(pipe(
        eof(), letter(), (a, b) => b + a, 'something impossible',
      ), '', {
        expected: 'something impossible',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if input was consumed on failure', () => {
      tfail(pipe(letter(), digit(), (a, b) => b + a), 'aa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(pipe(letter(), digit(), (a, b) => b + a, 'letter, digit'), 'aa', {
        expected: 'letter, digit',
        index: 1,
        status: Fatal,
      })
    })
    it('includes opt message if next parser fails', () => {
      const parser = pipe(opt(char('-')), digit(), digit(), (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, 'a1', "'-' or a digit")
    })
    it('does not include opt message if next parser succeeds', () => {
      const parser = pipe(opt(char('-')), digit(), digit(), (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, '1a', 'a digit')
    })
  })

  describe('between', () => {
    const parser = between(char('('), char(')'), many(noneof(')')))
    const parserm = between(char('('), char(')'), many(noneof(')')),
      'parenthesized characters')

    it('throws if its first argument is not a parser', () => {
      terror(
        () => between(0, any(), any()),
        '',
        '[between]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        () => between(any(), 0, any()),
        '',
        '[between]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        () => between(any(), any(), 0),
        '',
        '[between]: expected third argument to be a parser; found 0',
      )
    })
    it('throws if its fourth argument exists and is not a string', () => {
      terror(
        () => between(any(), any(), any(), 0),
        '',
        '[between]: expected fourth argument to be a string; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      tpass(parser, '(abc)', ['a', 'b', 'c'])
      tpass(parserm, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      tfail(parser, 'abc)', {
        expected: "'('",
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abc)', {
        expected: 'parenthesized characters',
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
      tfail(parserm, '(abc', {
        expected: 'parenthesized characters',
        index: 4,
        status: Fatal,
      })
      tfail(between(char('('), char(')'), seq(letter(), letter())), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(between(
        char('('), char(')'), seq(letter(), letter()), 'test',
      ), '(a)', {
        expected: 'test',
        index: 2,
        status: Fatal,
      })
    })
    it('gives opt error message if next parser fails', () => {
      const parser = between(opt(char('-')), char('-'), digit())
      tpass(parser, '-1-', '1')
      tpass(parser, '1-', '1')
      tfail(parser, 'a', "'-' or a digit")
    })
    it('gives no opt message if next parser succeeds', () => {
      const parser = between(opt(char('-')), char('-'), digit())
      tpass(parser, '-1-', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '1+', "'-'")
    })
  })
})
