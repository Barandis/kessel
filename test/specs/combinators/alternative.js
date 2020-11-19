// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  alt,
  altL,
  back,
  bothB,
  chainB,
  countB,
  leftB,
  manyTillB,
  optional,
  orElse,
  rightB,
  seqB,
} from 'kessel/combinators/alternative'
import { seq } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { any, char, digit, eof, letter } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Alternative and error recovery combinators', () => {
  describe('alt', () => {
    const parser = alt([
      seq([char('a'), char('b')]),
      seq([char('c'), char('d')]),
      seq([char('e'), char('f')]),
    ])

    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'yz', "'a', 'c', or 'e'")
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', "'a' or 'd'")
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('altL', () => {
    const parser = altL([
      seq([char('a'), char('b')]),
      seq([char('c'), char('d')]),
      seq([char('e'), char('f')]),
    ],
    '"ab", "cd", or "ef"')

    it('fails with its message if all parsers fail without consuming', () => {
      fail(parser, 'yz', '"ab", "cd", or "ef"')
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', '"ab", "cd", or "ef"')
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('optional', () => {
    it('consumes input without a result on success', () => {
      pass(optional(char('a')), 'abc', { result: null, index: 1 })
    })
    it('succeeds without consuming if its parser fails', () => {
      pass(optional(char('a')), 'bcd', { result: null, index: 0 })
    })
    it('fails fatally if its parser fails fatally', () => {
      fail(optional(seq([char('a'), char('b')])), 'acd', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
      pass(optional(back(seq([char('a'), char('b')]))), 'acd', {
        result: null,
        index: 0,
      })
    })
  })

  describe('back', () => {
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(back(char('a')), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('does nothing if its parser fails without consuming input', () => {
      const r1 = parse(char('a'), 'bcd')
      const r2 = parse(back(char('a')), 'bcd')
      expect(r1).to.deep.equal(r2)
    })
    it('resets the index if its parser fails with consuming input', () => {
      const parser = seq([string('te'), string('st')])
      fail(parser, 'tesl', { index: 2, status: Fatal })
      fail(back(parser), 'tesl', { index: 0, status: Error })
    })
    it('creates a nested error if it fails while consuming input', () => {
      const parser = seq([string('te'), string('st')])
      const [state, result] = parse(back(parser), 'tesl')
      const error = result.errors[0]

      expect(error.type).to.equal(ErrorType.Nested)
      expect(state.index).to.equal(0)
      expect(error.state.index).to.equal(2)
      expect(error.errors[0].type).to.equal(ErrorType.Expected)
      expect(error.errors[0].label).to.equal("'st'")
    })
  })

  describe('orElse', () => {
    it('succeeds with its parser\'s successful result', () => {
      pass(orElse(char('a'), 'z'), 'abc', 'a')
    })
    it('succeeds with its value if is parser fails', () => {
      pass(orElse(char('b'), 'z'), 'abc', 'z')
    })
    it('fails fatally if its parser does', () => {
      fail(orElse(seq([string('ab'), string('cd')]), 'z'), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
    })
  })

  describe('seqB', () => {
    const parser = seqB([string('abc'), string('def'), string('ghi')])

    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: "'abc'", index: 0 })
      fail(parser, 'abcdf', { expected: "'def'", index: 0 })
      fail(parser, 'abcdefh', { expected: "'ghi'", index: 0 })
    })
    it('succeeds if all of its parsers succeed', () => {
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(seqB([string('abc'), eof]), 'abc', { result: ['abc'], index: 3 })
    })
    it('still fails fatally if any of its parsers does', () => {
      const parser = seqB([seq([letter, digit]), letter, digit])
      fail(parser, 'aaa1', { expected: 'a digit', index: 1, status: Fatal })
    })
  })

  describe('chainB', () => {
    it('passes successful result to function to get the next parser', () => {
      pass(chainB(any, c => char(c)), 'aa', { result: 'a', index: 2 })
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chainB(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Error,
      })
    })
    it('fails non-fatally if the second fails after the first consumes', () => {
      fail(chainB(char('a'), () => char('b')), 'ac', {
        expected: "'b'",
        index: 0,
        status: Error,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(chainB(seq([letter, digit]), () => letter), 'aaa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainB(letter, c => seq([char(c), char(c)])), 'aab', {
        expected: "'a'",
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('leftB', () => {
    it('returns the result of its left parser if both pass', () => {
      pass(leftB(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(leftB(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(leftB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      fail(leftB(letter, digit), 'aa', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(leftB(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(leftB(letter, seq([letter, digit])), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('rightB', () => {
    it('returns the result of its right parser if both pass', () => {
      pass(rightB(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(rightB(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(rightB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      fail(rightB(letter, digit), 'aa', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(rightB(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(rightB(letter, seq([letter, digit])), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('bothB', () => {
    it('returns the result of its right parser if both pass', () => {
      pass(bothB(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(bothB(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(bothB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      fail(bothB(letter, digit), 'aa', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(bothB(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(bothB(letter, seq([letter, digit])), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('countB', () => {
    it('applies one parser a number of times', () => {
      pass(countB(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      pass(countB(letter, 2), 'abcdef', ['a', 'b'])
      pass(countB(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      fail(countB(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      fail(countB(seq([letter, letter]), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails non-fatally on non-fatal errors if input was consumed', () => {
      fail(countB(letter, 5), 'abc123', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
  })

  describe('manyTillB', () => {
    it('succeeds with content parser results before the end', () => {
      pass(manyTillB(any, letter), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      pass(manyTillB(any, letter), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      fail(manyTillB(digit, letter), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Error,
      })
    })
    it('backtracks if input is consumed before content parser fails', () => {
      fail(manyTillB(digit, letter), '123.abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      fail(manyTillB(digit, seq([letter, digit])), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(manyTillB(seq([letter, digit]), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
  })
})
