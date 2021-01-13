// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { bseq } from 'kessel/combinators/backtracking'
import { label } from 'kessel/combinators/misc'
import { seq } from 'kessel/combinators/sequence'
import { letter } from 'kessel/parsers/char'
import { terror, tfail, tpass } from 'test/helper'

describe('Miscellaneous combinators', () => {
  describe('label', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        label(0, 'test'),
        '',
        '[label]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        label(letter()),
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
})
