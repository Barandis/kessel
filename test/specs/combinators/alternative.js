// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  attempt,
  choice,
  choiceL,
  optional,
} from 'kessel/combinators/alternative'
import { seq } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { char } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

describe('Alternative combinators', () => {
  describe('choice', () => {
    const parser = choice([
      seq([char('a'), char('b')]),
      seq([char('c'), char('d')]),
      seq([char('e'), char('f')]),
    ])

    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'yz', { expected: '"a", "c", or "e"' })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', { expected: '"a" or "d"' })
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('choiceL', () => {
    const parser = choiceL([
      seq([char('a'), char('b')]),
      seq([char('c'), char('d')]),
      seq([char('e'), char('f')]),
    ],
    '"ab", "cd", or "ef"')

    it('fails with its message if all parsers fail without consuming', () => {
      fail(parser, 'yz', { expected: '"ab", "cd", or "ef"' })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', { expected: '"ab", "cd", or "ef"' })
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
        expected: '"b"',
        actual: '"c"',
        index: 1,
        status: Status.Fatal,
      })
      pass(optional(attempt(seq([char('a'), char('b')]))), 'acd', {
        result: null,
        index: 0,
      })
    })
  })

  describe('attempt', () => {
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(attempt(char('a')), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('does nothing if its parser fails without consuming input', () => {
      const r1 = parse(char('a'), 'bcd')
      const r2 = parse(attempt(char('a')), 'bcd')
      expect(r1).to.deep.equal(r2)
    })
    it('resets the index if its parser fails with consuming input', () => {
      const parser = seq([string('te'), string('st')])
      fail(parser, 'tesl', { index: 2, status: Status.Fatal })
      fail(attempt(parser), 'tesl', { index: 0, status: Status.Error })
    })
  })
})
