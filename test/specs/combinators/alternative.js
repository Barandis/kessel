// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  alt,
  altL,
  back,
  optional,
  orElse,
} from 'kessel/combinators/alternative'
import { seq } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { char } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

describe('Alternative combinators', () => {
  describe('alt', () => {
    const parser = alt([
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

  describe('altL', () => {
    const parser = altL([
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
      fail(parser, 'tesl', { index: 2, status: Status.Fatal })
      fail(back(parser), 'tesl', { index: 0, status: Status.Error })
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
        expected: '"cd"',
        actual: '"ce"',
        status: Status.Fatal,
      })
    })
  })
})
