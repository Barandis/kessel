// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, Parser, ParserStatus } from 'kessel/core'
import { expected, overwrite } from 'kessel/error'
import {
  assertParser,
  assertString,
  parserAssertMsg,
  typeAssertMsg,
} from 'kessel/util'

const labelFunctionMsg = typeAssertMsg('first', 'parser Function')
const labelParserMsg = parserAssertMsg('first')
const labelStringMsg = typeAssertMsg('second', 'String')

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
