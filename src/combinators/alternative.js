// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, Parser, ParserStatus } from 'kessel/core'
import { ErrorType, overwrite } from 'kessel/error'
import { assertParser } from 'kessel/util'

// Implements alternatives. Each parser is executed one at a time, in
// order. When the first parser succeeds, or the first parser fails
// while consuming input, execution is stopped and the state from that
// last parser is passed through. The same happens if all parsers are
// executed without any of them succeeding.
//
// On failure, all of the expected error messages from any of the
// contained parsers will be included.
export const choice = (...ps) => Parser(state => {
  let nextState = state
  let expecteds = []

  for (const p of ps) {
    assertParser(p, 'choice')

    nextState = p({ ...nextState, errors: [] })

    if (nextState.status === ParserStatus.Ok) return nextState

    expecteds = [
      ...expecteds,
      ...nextState.errors.filter(error => error.type === ErrorType.Expected),
    ]

    if (nextState.status === ParserStatus.Fatal) {
      return fatal(nextState, overwrite(nextState.errors, ...expecteds))
    }
  }

  return error(nextState, overwrite(nextState.errors, ...expecteds))
})

// Executes the supplied parser. If the parser succeeds or fails
// regularly, the state is simply passed through. If it fails fatally,
// the index is reset to what it was before the parser was executed and
// the failure is changed to non-fatal. This implements voluntary
// backtracking.
export const attempt = p => Parser(state => {
  assertParser(p, 'attempt')

  const index = state.index
  const nextState = p(state)
  if (nextState.status !== ParserStatus.Fatal) return nextState
  return error(nextState, undefined, index)
})
