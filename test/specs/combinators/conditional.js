// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { lookAhead } from 'kessel/combinators/conditional'
import { sequence } from 'kessel/combinators/sequence'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

describe('Conditional and look-ahead combinators', () => {
  describe('lookAhead', () => {
    const parser = lookAhead(sequence([string('ab'), string('cd')]))

    it('succeeds with no consumption if its parser succeeds', () => {
      pass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      fail(parser, 'abd', { expected: '"cd"', actual: '"d"', index: 0 })
    })
  })
})
