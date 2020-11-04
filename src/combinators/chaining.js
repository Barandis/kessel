// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Parser, ParserStatus } from 'kessel/core'

// Applies the provided parser to the input. If it succeeds, its result
// is sent to the supplied function; it is expected to produce another
// parser, which will then be applied next to the input.
export const chain = (p, fn) => Parser(state => {
  const nextState = p(state)
  if (nextState.status !== ParserStatus.Ok) return nextState
  return fn(nextState.result)(nextState)
})
