// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { makeParser, Status } from 'kessel/core'

/**
 * @typedef {import('kessel/core').Parser} Parser
 */

/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
 *
 * If the initial parser fails, that failure is instead returned.
 *
 * @param {Parser} p The first parser to apply. If this parser succeeds,
 *     its result is passed to `fn`, which will supply a second parser
 *     to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */
export const chain = (p, fn) => makeParser(state => {
  const nextState = p(state)
  if (nextState.status !== Status.Ok) return nextState
  return fn(nextState.result)(nextState)
})
