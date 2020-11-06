// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { commaSeparate } from 'kessel/util'

/**
 * @typedef {import('kessel/error').ParseError} ParseError
 * @typedef {import('kessel/core').Parser} Parser
 * @typedef {import('kessel/core').State} State
 */

/**
 * Returns the message string of the first error of the provided type.
 *
 * @param {ParseError[]} errors The array of errors to search for the
 *     first of the given type.
 * @param {ErrorType} type The type of error to search for.
 * @returns {string} The message of the first error of the supplied type
 *     to appear in the `errors` array.
 */
const first = (errors, type) =>
  errors.find(error => error.type === type)?.message

/**
 * Returns all of the message strings of errors of the provided type.
 *
 * @param {ParseError[]} errors The array of errors to search for errors
 *     of the given type.
 * @param {ErrorType} type The type of error to search for.
 * @returns {string} A comma-separated string of all of the messages of
 *     errors of the given type that appear in the `errors` array.
 */
const all = (errors, type) => commaSeparate(errors
  .filter(error => error.type === type)
  .map(error => error.message))

/**
 * Asserts that a parser succeeds with a given result when tested
 * against a test string.
 *
 * @param {Parser} parser The parser to test against the test string.
 * @param {string} test The test string to which the parser is applied.
 * @param {(string|string[]|State)} result The expected result. This can
 *     be a string or an array, in which case it is compared (deeply if
 *     necessary) with the `result` property of the state that the
 *     parser returns. Otherwise it is deeply compared to the state
 *     itself.
 */
export function pass(parser, test, result) {
  const state = parse(parser, test)

  if (!state.status === Status.Ok) {
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

/**
 * An object describing the state of the parser when tested and found
 * to fail.
 *
 * @typedef {object} FailureObject
 * @property {string} [expected] A comma-separated string of messages
 *     from errors of type `Expected`.
 * @property {string} [actual] A message string from an error of type
 *     `Unexpected`.
 * @property {string} [generic] A message string from an error of type
 *     `Generic`.
 * @property {number} [index] The expected index into the input when
 *     the parse error happens.
 * @property {Status} [status] The expected status at the point when the
 *     parse error happens.
 */

/**
 * Asserts that a parser will not succeed when tested against a test
 * string. This checks only for normal parser failure, not for
 * exceptions being thrown.
 *
 * @param {Parser} parser The parser to test against the test string.
 * @param {string} test The test string to which the parser is applied.
 * @param {(string|FailureObject)} message Either a string which matches
 *     the message from the first `Unexpected` error, or an object
 *     containing one or more properties that can be tested against the
 *     parser state.
 */
export function fail(parser, test, message) {
  const state = parse(parser, test)

  if (state.status === Status.Ok) {
    expect.fail(`Unexpected success: ${state.result}`)
  } else if (typeof message === 'string') {
    expect(first(state.errors, ErrorType.Unexpected)).to.equal(message)
  } else {
    if ('expected' in message) {
      expect(all(state.errors, ErrorType.Expected)).to.equal(message.expected)
    }
    if ('actual' in message) {
      expect(first(state.errors, ErrorType.Unexpected)).to.equal(message.actual)
    }
    if ('generic' in message) {
      expect(first(state.errors, ErrorType.Generic)).to.equal(message.generic)
    }
    if ('index' in message) {
      expect(state.index).to.equal(message.index)
    }
    if ('status' in message) {
      expect(state.status).to.equal(message.status)
    }
  }
}

/**
 * Asserts that a parser will throw an exception when applied to the
 * given test string.
 *
 * @param {Parser} parser The parser to test against the test string.
 * @param {string} test The test string to which the parser is applied.
 * @param {string} message The expected message of the thrown exception.
 */
export function error(parser, test, message) {
  expect(() => {
    parse(parser, test)
  }).to.throw(message)
}
