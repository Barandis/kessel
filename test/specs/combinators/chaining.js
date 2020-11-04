// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { chain } from 'kessel/combinators/chaining'
import { any, char } from 'kessel/parsers'
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
})
