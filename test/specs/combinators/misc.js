// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  fifth,
  first,
  fourth,
  join,
  nth,
  second,
  third,
  value,
} from 'kessel/combinators/misc'
import { map } from 'kessel/combinators/primitive'
import { many, many1, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, letter } from 'kessel/parsers/char'
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
