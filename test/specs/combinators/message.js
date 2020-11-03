// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { choice } from 'kessel/combinators/alternative'
import { label } from 'kessel/combinators/message'
import { sequence } from 'kessel/combinators/sequence'
import { parse } from 'kessel/core'
import { char } from 'kessel/parsers'
import { error, fail } from 'test/helper'

describe('Message combinators', () => {
  describe('label', () => {
    it('throws if passed a non-function', () => {
      error(
        label(23, 'test'),
        'test',
        '[label]: expected argument to be a parser Function; found a Number',
      )
    })
    it('throws if passed a function that is not a parser', () => {
      error(
        label(x => x, 'test'),
        'test',
        '[label]: '
          + 'expected argument to be a Parser; found a non-Parser Function',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(label(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected message if its parser fails', () => {
      fail(char('a'), 'bcd', { expected: '"a"' })
      fail(label(char('a'), 'letter a'), 'bcd', { expected: 'letter a' })
    })
    it('changes the expected message on a fatal error', () => {
      fail(sequence(char('a'), char('b')), 'a1', { expected: '"b"' })
      fail(
        label(sequence(char('a'), char('b')), 'letter b'),
        'a1',
        { expected: 'letter b' },
      )
    })
    it('overwrites all of multiple expected messages', () => {
      const parser = choice(char('a'), char('b'), char('c'))
      fail(parser, 'def', { expected: '"a", "b", or "c"' })
      fail(label(parser, 'a, b, or c'), 'def', { expected: 'a, b, or c' })
    })
  })
})
