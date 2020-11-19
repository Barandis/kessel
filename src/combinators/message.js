// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { fatal, makeParser, Status } from 'kessel/core'
import { compound, ErrorType, expected } from 'kessel/error'
import { dup } from 'kessel/util'

const { Ok } = Status
const { Nested } = ErrorType

/** @typedef {import('kessel/core').Parser} Parser */

function pass(state, result, errors) {
  return [{ ...state }, { ...result, errors }]
}

/**
 * Creates a parser that applies the supplied parser. If that parser
 * consumes input, nothing additional happens. Otherwise, the original
 * parser's result is retained but the error is overwritten by the
 * supplied message as an expected error.
 *
 * This can be used to provide better error messages in cases where the
 * automatically generated error messages are insufficient.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new `Expected` error message if `p` fails.
 * @returns {Parser} A parser that applies `p` and passes its results
 *     through except for changing its `Expected` error message upon
 *     failure.
 */
export const label = (p, msg) => makeParser(state => {
  const index = state.index
  const [reply, [next, result]] = dup(p(state))
  return index === next.index ? pass(next, result, expected(msg)) : reply
})

/**
 * Creates a parser that applies the supplied parser. If that parser
 * succeeds, that success is passed through, though if it didn't consume
 * any input, the provided string will be used to create an expected
 * error message.
 *
 * If the original parser fails, what happens depends on whether that
 * failure consumed input. If it did not, the supplied message
 * overwrites the original error message just as with `label`. If it
 * *did* consume input, the state is reset to the state before the
 * parser was applied, the error is set to a compound error using the
 * supplied message (with the nested error being the original error that
 * came from the failure point), and a fatal error is returned.
 *
 * This is one of the few places where a fatal error happens after
 * backtracking.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be
 *     an `Expected` error if no input was consumed, or a `Compound`
 *     error if it was.
 * @returns {Parser} A parser that applies `p` and changes the error
 *     as appropriate if `p` fails.
 */
export const backlabel = (p, msg) => makeParser(state => {
  const index = state.index
  const [reply, [next, result]] = dup(p(state))
  if (result.status === Ok) {
    return index === next.index
      ? pass(next, result, expected(msg)) : reply
  } else if (index === next.index) {
    if (result.errors.length === 1 && result.errors[0].type === Nested) {
      const { state, errors } = result.errors[0]
      return pass(next, result, compound(msg, state, errors))
    }
    return pass(next, result, expected(msg))
  }
  return fatal(state, compound(msg, next, result.errors))
})
