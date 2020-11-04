// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, Parser, ParserStatus } from 'kessel/core'
import { ErrorType, expected, overwrite } from 'kessel/error'
import {
  articlize,
  assertArgs,
  assertParser,
  assertString,
  enumerate,
  ordinalize,
} from 'kessel/util'

const functionMsgFn = i => type =>
  `expected ${ordinalize(i)} argument to be a parser Function; found ${
    articlize(type)
  }`
const parserMsgFn = i => () =>
  `expected ${
    ordinalize(i)
  } argument to be a Parser; found a non-Parser Function`

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

  for (const { index: i, value: p } of enumerate(ps)) {
    assertParser(p, 'choice', functionMsgFn(i + 1), parserMsgFn(i + 1))

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

// Implements alternatives, but with a failure message included. All
// arguments must be parsers except for the last, which must be a
// string. The parsers are tried one at a time as with `choice`, but if
// they all fail (or if any fail fatally), the last argument is used as
// the expected message rather than constructing it out of the expected
// messages of each failed parser.
//
// This is a bit more efficient than using `label` and `choice` together
// since one less parser is created and there's no need to track each
// parser's expected messages.
export const choiceL = (...args) => Parser(state => {
  assertArgs(args, 2, 'choiceL')
  const ps = args.slice()
  const message = ps.pop()
  assertString(
    message,
    'choiceL',
    type => `expected final argument to be a String; found ${articlize(type)}`,
  )

  let nextState = state

  for (const { index: i, value: p } of enumerate(ps)) {
    assertParser(p, 'choiceL', functionMsgFn(i + 1), parserMsgFn(i + 1))

    nextState = p(nextState)

    if (nextState.status === ParserStatus.Ok) return nextState
    if (nextState.status === ParserStatus.Fatal) {
      return fatal(nextState, overwrite(nextState.errors, expected(message)))
    }
  }

  return error(nextState, overwrite(nextState.errors, expected(message)))
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
