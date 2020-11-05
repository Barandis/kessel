// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { chain, join, map } from 'kessel/combinators/chaining'
import { many, many1, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit } from 'kessel/parsers/char'
import { uletter } from 'kessel/parsers/regex'
import { fail, pass } from 'test/helper'

describe('Chaining and piping combinators', () => {
  describe('chain', () => {
    it('passes successful result to function to get the next parser', () => {
      pass(chain(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      fail(chain(any, c => char(c)), 'ab', { expected: '"a"', actual: '"b"' })
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chain(char('a'), () => char('b')), 'bb', {
        expected: '"a"',
        actual: '"b"',
        index: 0,
      })
    })
  })

  describe('map', () => {
    it('succeeds with the return value of its function', () => {
      pass(map(any, c => c.toUpperCase()), 'abc', 'A')
      pass(map(seq([uletter, digit]), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      fail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        actual: 'EOF',
        status: Status.Error,
      })
      fail(map(seq([uletter, digit]), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        status: Status.Fatal,
        index: 1,
      })
    })
  })

  describe('join', () => {
    it('joins array elements together into a resulting string', () => {
      pass(join(many(any)), '123', '123')
      pass(join(map(many(any), x => x.map(c => parseInt(c)))), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      fail(join(many1(any)), '', {
        expected: 'any character',
        actual: 'EOF',
        status: Status.Error,
      })
      fail(join(seq([uletter, digit])), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        status: Status.Fatal,
      })
    })
  })
})
