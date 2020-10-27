// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { failure, parse, success } from 'kessel/core'
import { string } from 'kessel/parsers'
import { error, pass } from 'test/helper'

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
        error(
          string('123'),
          123,
          'Parser input must be a string, a typed array, an array buffer, or '
            + 'a data view; parser input was number'
        )
      })
    })

    describe('updating successful parser state', () => {
      it('creates a new object', () => {
        const result = parse(string('123'), '123')
        const updated = success(result)
        expect(result).to.not.equal(updated)
        expect(result).to.deep.equal(updated)
      })
      it('can update result and/or index properties', () => {
        const result = parse(string('123'), '123')
        const updated = success(result, { result: '456', index: 0 })
        expect(result.result).to.equal('123')
        expect(updated.result).to.equal('456')
        expect(result.index).to.equal(3)
        expect(updated.index).to.equal(0)
      })
    })

    describe('updated failure parser state', () => {
      it('creates a new object', () => {
        const result = parse(string('123'), 'abc')
        const updated = failure(result)
        expect(result).to.not.equal(updated)
        expect(result).to.deep.equal(updated)
      })
      it('can update expected, unexpected, and/or index properties', () => {
        const result = parse(string('123'), 'abc')
        const updated = failure(result, {
          expected: ['"x"', '"y"'],
          actual: '"z"',
          index: 17,
        })
        expect(result.expected).to.deep.equal(['"123"'])
        expect(updated.expected).to.deep.equal(['"x"', '"y"'])
        expect(result.actual).to.equal('"abc"')
        expect(updated.actual).to.equal('"z"')
        expect(result.index).to.equal(0)
        expect(updated.index).to.equal(17)
      })
    })
  })
})
