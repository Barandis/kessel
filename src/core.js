// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { stringToView } from './util'

// It's probably still better than having these arrays inherit from a
// base array type
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

export const ParserStatus = {
  Ok: Symbol('ok'),
  Error: Symbol('error'),
  Fatal: Symbol('fatal'),
}

// Creates a new, empty parser state. This is not exported because a
// new state is only created before parsing, in the `parse` function.
// Any further states are derived from the initial state.
export function ParserState(input) {
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
    status: ParserStatus.Ok,
    result: null,
    errors: [],
  }
}

// The `trackedFactory` function sets up a tracking system so that any
// function that was created by this factory will return `true` from
// `Parser.created(fn)`, while any other object will return `false`.
//
// `fn` here is a parser function. This is a function that takes one
// argument, a parser state (as created by `ParserState` above);
// performs some action based on that parser state; and returns an
// updated parser state.
export const Parser = fn => fn

export function ok(state, result = state.result, index = state.index) {
  return {
    ...state,
    index,
    status: ParserStatus.Ok,
    result,
    errors: [],
  }
}

export function error(state, errors = state.errors, index = state.index) {
  return {
    ...state,
    index,
    status: ParserStatus.Error,
    result: null,
    errors,
  }
}

export function fatal(state, errors = state.errors, index = state.index) {
  return {
    ...state,
    index,
    status: ParserStatus.Fatal,
    result: null,
    errors,
  }
}

// Runs a parser against an input. This input can be a string, a typed
// array, an array buffer, or a data view. The return value is the final
// parser state returned by the parser after being run.
export function parse(parser, input) {
  return parser(ParserState(input))
}
