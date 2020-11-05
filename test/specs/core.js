// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { sequence } from 'kessel/combinators/sequence'
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
      it('creates a new object', () => {
        const result = parse(string('123'), '123')
        const updated = ok(result)
        expect(result).to.not.equal(updated)
        expect(result).to.deep.equal(updated)
      })
      it('can update result and/or index properties', () => {
        const result = parse(string('123'), '123')
        const updated = ok(result, '456', 0)
        expect(result.result).to.equal('123')
        expect(updated.result).to.equal('456')
        expect(result.index).to.equal(3)
        expect(updated.index).to.equal(0)
      })
    })

    describe('updated failure parser state', () => {
      it('creates a new object', () => {
        const result = parse(string('123'), 'abc')
        const updated = error(result)
        expect(result).to.not.equal(updated)
        expect(result).to.deep.equal(updated)
      })
      it('can update errors and/or index properties', () => {
        const result = parse(string('123'), 'abc')
        const updated = error(result, overwrite(
          result.errors,
          makeExpected('"x"'),
          makeExpected('"y"'),
          makeUnexpected('"z"'),
        ), 17)
        expect(result.errors).to.deep.equal([
          { type: ErrorType.Unexpected, message: '"abc"' },
          { type: ErrorType.Expected, message: '"123"' },
        ])
        expect(updated.errors).to.deep.equal([
          { type: ErrorType.Expected, message: '"x"' },
          { type: ErrorType.Expected, message: '"y"' },
          { type: ErrorType.Unexpected, message: '"z"' },
        ])
        expect(result.index).to.equal(0)
        expect(updated.index).to.equal(17)
      })
    })

    describe('updated fatal failure parser state', () => {
      it('creates a new object', () => {
        const result = parse(sequence([char('a'), char('1')]), 'abc')
        const updated = fatal(result)
        expect(result).to.not.equal(updated)
        expect(result).to.deep.equal(updated)
      })
      it('can update errors and/or index properties', () => {
        const result = parse(sequence([char('a'), char('1')]), 'abc')
        const updated = fatal(result, overwrite(
          result.errors,
          makeExpected('"x"'),
          makeExpected('"y"'),
          makeUnexpected('"z"'),
        ), 17)
        expect(result.errors).to.deep.equal([
          { type: ErrorType.Unexpected, message: '"b"' },
          { type: ErrorType.Expected, message: '"1"' },
        ])
        expect(updated.errors).to.deep.equal([
          { type: ErrorType.Expected, message: '"x"' },
          { type: ErrorType.Expected, message: '"y"' },
          { type: ErrorType.Unexpected, message: '"z"' },
        ])
        expect(result.index).to.equal(1)
        expect(updated.index).to.equal(17)
      })
    })
  })
})
