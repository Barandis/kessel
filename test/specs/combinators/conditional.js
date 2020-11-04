// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lookAhead } from 'kessel/combinators/conditional'
import { sequence } from 'kessel/combinators/sequence'
import { string } from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Conditional and look-ahead combinators', () => {
  describe('lookAhead', () => {
    const parser = lookAhead(sequence(string('ab'), string('cd')))

    it('throws if a non-parser is passed in', () => {
      error(
        lookAhead(23),
        '123',
        '[lookAhead]: '
          + 'expected argument to be a parser Function; found a Number',
      )
      error(
        lookAhead(() => {}),
        '123',
        '[lookAhead]: '
          + 'expected argument to be a Parser; found a non-Parser Function',
      )
    })
    it('succeeds with no consumption if its parser succeeds', () => {
      pass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      fail(parser, 'abd', { expected: '"cd"', actual: '"d"', index: 0 })
    })
  })
})
