// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, ok, Parser, ParserStatus } from 'kessel/core'
import { assertParser } from 'kessel/util'

// Executes the supplied parser. If it succeeds, its result becomes the
// result of `lookAhead`. Either way, no input is consumed.
//
// As a side effect, any fatal parse error will be transformed into a
// non-fatal one, since no input is being consumed.
export const lookAhead = p => Parser(state => {
  assertParser(p, 'lookAhead')

  const index = state.index
  const nextState = p(state)
  return nextState.status === ParserStatus.Ok
    ? ok(nextState, undefined, index)
    : error(nextState, undefined, index)
})
