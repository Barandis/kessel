// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { seq } from 'kessel/combinators/sequence'
import { error, fatal, ok, parse } from 'kessel/core'
import {
  ErrorType,
  makeExpected,
  overwrite,
  makeUnexpected,
} from 'kessel/error'
import { char } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { error as terror, pass } from 'test/helper'

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
        terror(
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
        const [ustate1, uresult1] = error(state, overwrite(
          result.errors,
          makeExpected('"x"'),
          makeExpected('"y"'),
          makeUnexpected('"z"'),
        ))
        const [ustate2, uresult2] = error(state)

        expect(result.errors).to.deep.equal([
          { type: ErrorType.Unexpected, message: '"abc"' },
          { type: ErrorType.Expected, message: '"123"' },
        ])
        expect(uresult1.errors).to.deep.equal([
          { type: ErrorType.Expected, message: '"x"' },
          { type: ErrorType.Expected, message: '"y"' },
          { type: ErrorType.Unexpected, message: '"z"' },
        ])
        expect(uresult2.errors).to.deep.equal([])
        expect(state.index).to.equal(0)
        expect(ustate1.index).to.equal(0)
        expect(ustate2.index).to.equal(0)
      })
    })

    describe('updated fatal failure parser state', () => {
      it('creates a new object', () => {
        const [state, result] = parse(seq([char('a'), char('1')]), 'abc')
        const [ustate, uresult] = fatal(state, result.errors)
        expect(state).to.not.equal(ustate)
        expect(result).to.deep.equal(uresult)
      })
      it('can update errors and/or index properties', () => {
        const [state, result] = parse(seq([char('a'), char('1')]), 'abc')
        const [ustate1, uresult1] = fatal(state, overwrite(
          result.errors,
          makeExpected('"x"'),
          makeExpected('"y"'),
          makeUnexpected('"z"'),
        ), 17)
        const [ustate2, uresult2] = fatal(state)

        expect(result.errors).to.deep.equal([
          { type: ErrorType.Unexpected, message: '"b"' },
          { type: ErrorType.Expected, message: '"1"' },
        ])
        expect(uresult1.errors).to.deep.equal([
          { type: ErrorType.Expected, message: '"x"' },
          { type: ErrorType.Expected, message: '"y"' },
          { type: ErrorType.Unexpected, message: '"z"' },
        ])
        expect(uresult2.errors).to.deep.equal([])
        expect(state.index).to.equal(1)
        expect(ustate1.index).to.equal(17)
        expect(ustate2.index).to.equal(1)
      })
    })
  })
})
