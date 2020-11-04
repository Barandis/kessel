// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { chain } from 'kessel/combinators/chaining'
import { any, char } from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Chaining and piping combinators', () => {
  describe('chain', () => {
    it('throws if first argument is not a parser', () => {
      error(
        chain(23, () => {}),
        'abc',
        '[chain]: expected first argument to be a parser Function; found a '
          + 'Number',
      )
      error(
        chain(() => {}, () => {}),
        'abc',
        '[chain]: expected first argument to be a Parser; found a non-Parser '
          + 'Function',
      )
    })
    it('throws if second argument is not a function', () => {
      error(
        chain(any, 23),
        'abc',
        '[chain]: expected second argument to be a Function; found a Number',
      )
    })
    it('throws if the second argument does not produce a parser', () => {
      error(
        chain(any, () => 23),
        '123',
        '[chain]: expected second argument to produce a parser Function; '
          + 'found a Number',
      )
      error(
        chain(any, () => () => {}),
        '123',
        '[chain]: expected second argument to produce a Parser; found a '
          + 'non-Parser Function',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      pass(chain(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      fail(chain(any, c => char(c)), 'ab', { expected: '"a"', actual: '"b"' })
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chain(char('a'), _ => char('b')), 'bb', {
        expected: '"a"',
        actual: '"b"',
        index: 0,
      })
    })
  })
})
