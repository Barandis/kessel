// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { sequence } from 'kessel/combinators/sequence'
import {
  error,
  failure,
  fatal,
  maybeFatal,
  ok,
  parse,
  run,
  Status,
  status,
  succeeded,
  success,
} from 'kessel/core'
import { ErrorType, merge, unexpected } from 'kessel/error'
import { char } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { stringToView } from 'kessel/util'
import { error as perror, pass } from 'test/helper'

const encoder = new TextEncoder()

describe('Core functionality', () => {
  describe('parser state', () => {
    context('input type', () => {
      it('parses strings', () => {
        pass(string('abc'), 'abc', 'abc')
      })
      it('parses array buffers', () => {
        pass(string('abc'), encoder.encode('abc').buffer, 'abc')
      })
      it('parses typed arrays', () => {
        pass(string('abc'), encoder.encode('abc'), 'abc')
      })
      it('parses data views', () => {
        pass(string('abc'), new DataView(encoder.encode('abc').buffer), 'abc')
      })
      it('throws an error if anything else is passed', () => {
        perror(
          string('123'),
          123,
          'Parser input must be a string, a typed array, an array buffer, or '
            + 'a data view; parser input was number',
        )
      })
    })

    describe('updating successful parser state', () => {
      it('creates new objects', () => {
        const [state, result] = parse(string('123'), '123')
        const [ustate, uresult] = ok(state, result.value)
        expect(state).to.not.equal(ustate)
        expect(result).to.deep.equal(uresult)
      })
      it('can update result and/or index properties', () => {
        const [state, result] = parse(string('123'), '123')
        const [ustate, uresult] = ok(state, '456', 0)
        expect(result.value).to.equal('123')
        expect(uresult.value).to.equal('456')
        expect(state.index).to.equal(3)
        expect(ustate.index).to.equal(0)
      })
    })

    describe('updated failure parser state', () => {
      it('creates a new object', () => {
        const [state, result] = parse(string('123'), 'abc')
        const [ustate, uresult] = error(state, result.errors)
        expect(state).to.not.equal(ustate)
        expect(result).to.deep.equal(uresult)
      })
      it('can update errors and/or index properties', () => {
        const [state, result] = parse(string('123'), 'abc')
        const [ustate1, uresult1] = error(state, merge(
          result.errors, unexpected("'z'"),
        ))
        const [ustate2, uresult2] = error(state)

        expect(result.errors).to.deep.equal([
          { type: ErrorType.Expected, label: "'123'" },
        ])
        expect(uresult1.errors).to.deep.equal([
          { type: ErrorType.Expected, label: "'123'" },
          { type: ErrorType.Unexpected, label: "'z'" },
        ])
        expect(uresult2.errors).to.deep.equal([])
        expect(state.index).to.equal(0)
        expect(ustate1.index).to.equal(0)
        expect(ustate2.index).to.equal(0)
      })
    })

    describe('updated fatal failure parser state', () => {
      it('creates a new object', () => {
        const [state, result] = parse(sequence(char('a'), char('1')), 'abc')
        const [ustate, uresult] = fatal(state, result.errors)
        expect(state).to.not.equal(ustate)
        expect(result).to.deep.equal(uresult)
      })
      it('can update errors and/or index properties', () => {
        const [state, result] = parse(sequence(char('a'), char('1')), 'abc')
        const [ustate1, uresult1] = fatal(state, merge(
          result.errors, unexpected("'z'"),
        ), 17)
        const [ustate2, uresult2] = fatal(state)

        expect(result.errors).to.deep.equal([
          { type: ErrorType.Expected, label: "'1'" },
        ])
        expect(uresult1.errors).to.deep.equal([
          { type: ErrorType.Expected, label: "'1'" },
          { type: ErrorType.Unexpected, label: "'z'" },
        ])
        expect(uresult2.errors).to.deep.equal([])
        expect(state.index).to.equal(1)
        expect(ustate1.index).to.equal(17)
        expect(ustate2.index).to.equal(1)
      })
    })

    describe('updating fatal/non-fatal parser state', () => {
      const state = { view: stringToView('test'), index: 0 }
      const fatal = maybeFatal(true, state)
      const nonFatal = maybeFatal(false, state)

      it('can set fatal state with a test', () => {
        const [_, result] = fatal
        expect(result.status).to.equal(Status.Fatal)
      })
      it('can set non-fatal state with a test', () => {
        const [_, result] = nonFatal
        expect(result.status).to.equal(Status.Error)
      })
    })
  })

  describe('evaluating parsers', () => {
    it('evaluates successes', () => {
      const reply = parse(char('a'), 'a')
      expect(succeeded(reply)).to.be.true
      expect(status(reply)).to.equal(Status.Ok)
      expect(success(reply)).to.equal('a')
      expect(failure(reply)).to.be.null
    })
    it('evaluates failures', () => {
      const reply = parse(char('a'), 'b')
      expect(succeeded(reply)).to.be.false
      expect(status(reply)).to.equal(Status.Error)
      expect(success(reply)).to.be.null
      expect(failure(reply)).to.equal(
        "Parse error at (line 1, column 1):\n\nb\n^\nExpected 'a'\n\n",
      )
    })
    describe('run', () => {
      it('returns the parser value on success', () => {
        const result = run(char('a'), 'a')
        expect(result).to.equal('a')
      })
      it('throws an error on failure', () => {
        const msg
          = "Parse error at (line 1, column 1):\n\nb\n^\nExpected 'a'\n\n"
        expect(() => run(char('a'), 'b')).to.throw(msg)
      })
    })
  })
})
