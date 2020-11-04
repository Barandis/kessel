// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, Parser, ParserStatus } from 'kessel/core'
import { expected, overwrite } from 'kessel/error'
import { articlize, assertParser, assertString } from 'kessel/util'

const labelFunctionMsg = type =>
  `expected first argument to be a parser Function; found ${articlize(type)}`
const labelParserMsg = () =>
  'expected first argument to be a Parser; found a non-Parser Function'
const labelStringMsg = type =>
  `expected second argument to be a String; found ${articlize(type)}`

// Executes the supplied parser. If the parser succeeds, `label` simply
// passes the result through; but if it fails, `label` replaces its
// expected with the supplied string. Useful for providing clearer error
// messages from composed parsers.
export const label = (p, str) => Parser(state => {
  assertParser(p, 'label', labelFunctionMsg, labelParserMsg)
  assertString(str, 'label', labelStringMsg)

  const nextState = p(state)
  if (nextState.status === ParserStatus.Error) {
    return error(nextState, overwrite(nextState.errors, expected(str)))
  }
  if (nextState.status === ParserStatus.Fatal) {
    return fatal(nextState, overwrite(nextState.errors, expected(str)))
  }
  return nextState
})
