// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { parse, ParserStatus } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { commaSeparate } from 'kessel/util'

const first = (errors, type) =>
  errors.find(error => error.type === type)?.message

const all = (errors, type) => commaSeparate(errors
  .filter(error => error.type === type)
  .map(error => error.message))

export function pass(parser, test, result) {
  const state = parse(parser, test)

  if (!state.status === ParserStatus.Ok) {
    const expected = all(state.errors, ErrorType.Expected)
    const actual = first(state.errors, ErrorType.Unexpected)

    expect.fail(`Unexpected failure: expected ${expected}, actual ${actual}`)
  } else if (typeof result === 'string') {
    expect(state.result).to.equal(result)
  } else if (Array.isArray(result)) {
    expect(state.result).to.deep.equal(result)
  } else {
    expect(state).to.deep.include(result)
  }
}

export function fail(parser, test, message) {
  const state = parse(parser, test)

  if (state.status === ParserStatus.Ok) {
    expect.fail(`Unexpected success: ${state.result}`)
  } else if (typeof message === 'string') {
    expect(first(state.errors, ErrorType.Unexpected)).to.equal(message)
  } else {
    if (message.expected) {
      expect(all(state.errors, ErrorType.Expected)).to.equal(message.expected)
    }
    if (message.actual) {
      expect(first(state.errors, ErrorType.Unexpected)).to.equal(message.actual)
    }
    if (message.generic) {
      expect(first(state.errors, ErrorType.Generic)).to.equal(message.generic)
    }
    if (message.index) {
      expect(state.index).to.equal(message.index)
    }
    if (message.status) {
      expect(state.status).to.equal(message.status)
    }
  }
}

export function error(fn, test, message) {
  expect(() => {
    parse(fn, test)
  }).to.throw(message)
}
