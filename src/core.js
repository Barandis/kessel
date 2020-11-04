// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { stringToView } from './util'

/**
 * @typedef {import('./error.js').ParseError} ParseError
 */

/**
 * Determines whether the input value is an instance of one of the types
 * of typed arrays.
 *
 * @param {*} value The value to test.
 * @returns {boolean} Whether or not `value` is a typed array.
 */
function isTypedArray(value) {
  return value instanceof Uint8Array
    || value instanceof Uint8ClampedArray
    || value instanceof Uint16Array
    || value instanceof Uint32Array
    || value instanceof Int8Array
    || value instanceof Int16Array
    || value instanceof Int32Array
    || value instanceof Float32Array
    || value instanceof Float64Array
}

/**
 * A symbol representing the status of the last parsing operation.
 *
 * @enum {symbol}
 */
export const Status = {
  /**
   * Indicates that the last parse was successful.
   */
  Ok: Symbol('ok'),
  /**
   * Indicates that the last parse failed but did not consume any input.
   */
  Error: Symbol('error'),
  /**
   * Indicates that the last parse failed and consumed input.
   */
  Fatal: Symbol('fatal'),
}

/**
 * The current user state of a parser. This object contains not only the
 * input text but also a pointer to the current location within it, the
 * result of a successful parse, and the errors produced by a failed
 * parse.
 *
 * @typedef State
 * @property {DataView} view The data view containing the input text.
 * @property {number} index The index within the data view where the
 *     next parsing operation will take place (or where the last one
 *     resulted in an error).
 * @property {Status} status The status of the last attempted parse of
 *     the input text.
 * @property {*} result The result of a successful parse.
 * @property {ParseError[]} errors A list of errors that occurred during
 *     an unsuccessful parse.
 */

/**
 * @typedef {(
 *   Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Int8Array|
 *   Int16Array|Int32Array|Float32Array|Float64Array
 * )} TypedArray
 */

/**
 * Creates a new, empty parser state. This is not exported because a new
 * state is only created before parsing, in the `parse` function. Any
 * further states are derived from the initial state using {@link ok},
 * {@link error}, or {@link fatal}.
 *
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {State} An empty parser state object.
 */
export function makeState(input) {
  const message = 'Parser input must be a string, a typed array, an array '
    + `buffer, or a data view; parser input was ${typeof input}`

  const view = (input => {
    if (typeof input === 'string') {
      return stringToView(input)
    }
    if (isTypedArray(input)) {
      return new DataView(input.buffer)
    }
    if (input instanceof ArrayBuffer) {
      return new DataView(input)
    }
    if (input instanceof DataView) {
      return input
    }
    throw new Error(message)
  })(input)

  return {
    view,
    index: 0,
    status: Status.Ok,
    result: null,
    errors: [],
  }
}

/**
 * A parsing function. This is simply a function that takes a parser
 * state, updates it somehow (generally by reading a character), and
 * returns the updated state.
 *
 * @callback Parser
 * @param {State} state The state before the parser is run.
 * @returns {State} The updated state after the parser is applied.
 */

/**
 * Creates a new `Parser`. This factory simply takes a parser
 * function and returns it; it's here in case something more needs to be
 * done in parser creation. This has happened in the past and very
 * likely will again happen in the future.
 *
 * While it is not currently so, there have been times when behavior of
 * functions produced by this factory differed from general functions.
 * Because of the possibility that this could return, it's suggested to
 * use this function to produce all parsers rather than producing them
 * by hand.
 *
 * @param {Parser} fn A parser function.
 * @returns {Parser} The same parser function.
 */
export function makeParser(fn) {
  return fn
}

/**
 * Produces a new `State` indicating that a parse succeeded.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {*} [result=state.result] The new result of the parse.
 * @param {number} [index=state.index] The updated index after the
 *     parser was applied.
 * @returns {State} A new object representing the state after the latest
 *     parser succeeded.
 */
export function ok(state, result = state.result, index = state.index) {
  return {
    ...state,
    index,
    status: Status.Ok,
    result,
    errors: [],
  }
}

/**
 * Produces a new `State` indicating that a parse failed without
 * consuming input.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {ParseError[]} [errors=state.errors] The errors associated
 *     with the state after the latest parser was applied.
 * @param {number} [index=state.index] The updated index after the
 *     latest parser was applied.
 * @returns {State} A new object representing the state after the latest
 *     parser failed.
 */
export function error(state, errors = state.errors, index = state.index) {
  return {
    ...state,
    index,
    status: Status.Error,
    result: null,
    errors,
  }
}

/**
 * Produces a new `State` indicating that a parse failed while consuming
 * input.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {ParseError[]} [errors=state.errors] The errors associated
 *     with the state after the latest parser was applied.
 * @param {number} [index=state.index] The updated index after the
 *     latest parser was applied.
 * @returns {State} A new object representing the state after the latest
 *     parser failed.
 */
export function fatal(state, errors = state.errors, index = state.index) {
  return {
    ...state,
    index,
    status: Status.Fatal,
    result: null,
    errors,
  }
}

/**
 * Runs a parser against an input. This input can be a string, a typed
 * array, an array buffer, or a data view. The return value is the final
 * parser state returned by the parser after being run.
 *
 * @param {Parser} parser The parser to be applied to the input. This
 *     can, as always, be a composition of an arbitrary number of
 *     parsers and combinators.
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {State} The final state after all parsers have been applied.
 */
export function parse(parser, input) {
  return parser(makeState(input))
}
