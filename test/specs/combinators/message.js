// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { attempt, choice } from 'kessel/combinators/alternative'
import { right } from 'kessel/combinators/chaining'
import { label, attemptM } from 'kessel/combinators/message'
import { sequence } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { char } from 'kessel/parsers/char'
import { terror, tfail } from 'test/helper'

describe('Message combinators', () => {
  describe('label', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        label(0, 'test'),
        '',
        '[label]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        label(char('a'), 0),
        '',
        '[label]: expected 2nd argument to be a string; found 0',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(label(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected message if its parser fails', () => {
      tfail(char('a'), 'bcd', "'a'")
      tfail(label(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('does not change the expected message on a fatal error', () => {
      tfail(sequence(char('a'), char('b')), 'a1', "'b'")
      tfail(label(sequence(char('a'), char('b')), 'letter b'), 'a1', "'b'")
    })
    it('overwrites all of multiple expected messages', () => {
      const parser = choice(char('a'), char('b'), char('c'))
      tfail(parser, 'def', "'a', 'b', or 'c'")
      tfail(label(parser, 'a, b, or c'), 'def', 'a, b, or c')
    })
  })

  describe('attemptM', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        attemptM(0, 'test'),
        '',
        '[attemptM]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        attemptM(char('a'), 0),
        '',
        '[attemptM]: expected 2nd argument to be a string; found 0',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(attemptM(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected if its parser fails without consuming', () => {
      tfail(char('a'), 'bcd', "'a'")
      tfail(attemptM(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('adds a compound error if its parser fails while consuming', () => {
      const [ctx, result] = parse(
        attemptM(sequence(char('a'), char('b')), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Error)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
    it('collapses the nested error from backtracking', () => {
      const [ctx, result] = parse(
        attemptM(attempt(right(char('a'), char('b'))), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Error)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
  })
})
