// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Parser, ParserStatus } from 'kessel/core'
import {
  articlize,
  assertFunction,
  assertParser,
  parserAssertMsg,
  typeAssertMsg,
} from 'kessel/util'

const chainFunctionMsg = type =>
  `expected second argument to produce a parser Function; found ${
    articlize(type)
  }`
const chainParserMsg = () =>
  'expected second argument to produce a Parser; found a non-Parser Function'

// Applies the provided parser to the input. If it succeeds, its result
// is sent to the supplied function; it is expected to produce another
// parser, which will then be applied next to the input.
export const chain = (p, fn) => Parser(state => {
  assertParser(
    p,
    'chain',
    typeAssertMsg('first', 'parser Function'),
    parserAssertMsg('first'),
  )
  assertFunction(fn, 'chain', typeAssertMsg('second', 'Function'))

  const nextState = p(state)
  if (nextState.status !== ParserStatus.Ok) return nextState

  const next = fn(nextState.result)
  assertParser(next, 'chain', chainFunctionMsg, chainParserMsg)
  return next(nextState)
})
