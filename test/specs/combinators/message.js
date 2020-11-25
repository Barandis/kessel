// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { choice, backtrack } from 'kessel/combinators/alternative'
import { right } from 'kessel/combinators/chaining'
import { lookAhead } from 'kessel/combinators/conditional'
import { label, backLabel } from 'kessel/combinators/message'
import { sequence } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { char } from 'kessel/parsers/char'
import { fail } from 'test/helper'

describe('Message combinators', () => {
  describe('label', () => {
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(label(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected message if its parser fails', () => {
      fail(char('a'), 'bcd', "'a'")
      fail(label(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('does not change the expected message on a fatal error', () => {
      fail(sequence([char('a'), char('b')]), 'a1', "'b'")
      fail(label(sequence([char('a'), char('b')]), 'letter b'), 'a1', "'b'")
    })
    it('overwrites all of multiple expected messages', () => {
      const parser = choice(char('a'), char('b'), char('c'))
      fail(parser, 'def', "'a', 'b', or 'c'")
      fail(label(parser, 'a, b, or c'), 'def', 'a, b, or c')
    })
    it('adds an error message on success without consuming', () => {
      const [_, result] = parse(label(lookAhead(char('a')), 'test'), 'a')
      expect(result.status).to.equal(Status.Ok)
      expect(result.errors.[0].label).to.equal('test')
    })
  })

  describe('backLabel', () => {
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(backLabel(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected if its parser fails without consuming', () => {
      fail(char('a'), 'bcd', "'a'")
      fail(backLabel(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('adds an error message on success without consuming', () => {
      const [_, result] = parse(backLabel(lookAhead(char('a')), 'test'), 'a')
      expect(result.status).to.equal(Status.Ok)
      expect(result.errors.[0].label).to.equal('test')
    })
    it('adds a compound error if its parser fails while consuming', () => {
      const [state, result] = parse(
        backLabel(sequence([char('a'), char('b')]), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Fatal)
      expect(state.index).to.equal(0)
      expect(error.state.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
    it('collapses the nested error from backtracking', () => {
      const [state, result] = parse(
        backLabel(backtrack(right(char('a'), char('b'))), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Error)
      expect(state.index).to.equal(0)
      expect(error.state.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
  })
})
