// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { parse } from 'kessel/parser'

export function pass(parser, test, expected) {
  const state = parse(parser, test)

  if (!state.success) {
    expect.fail(`Unexpected failure: expected "${
      state.expected
    }", actual "${state.actual}"`)
  } else if (typeof expected === 'string') {
    expect(state.result).to.equal(expected)
  } else if (Array.isArray(expected)) {
    expect(state.result).to.deep.equal(expected)
  } else {
    expect(state).to.deep.include(expected)
  }
}

export function fail(parser, test, actual) {
  const state = parse(parser, test)

  if (state.success) {
    expect.fail(`Unexpected success: ${state.result}`)
  } else if (typeof actual === 'string') {
    expect(state.actual).to.equal(actual)
  } else {
    expect(state).to.deep.include(actual)
  }
}

export function error(fn, test, message) {
  expect(() => {
    parse(fn, test)
  }).to.throw(message)
}
