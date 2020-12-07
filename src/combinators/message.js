// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertParser,
  assertString,
  ordParFormatter,
  ordStrFormatter,
} from 'kessel/assert'
import { fail, Parser, Status } from 'kessel/core'
import { compound, ErrorType, expected } from 'kessel/error'
import { twin } from 'kessel/util'

const { Ok, Fail } = Status
const { Nested } = ErrorType

/** @typedef {import('kessel/core').Parser} Parser */

function pass(ctx, result, errors) {
  return [{ ...ctx }, { ...result, errors }]
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
export const label = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('label', p, ordParFormatter('1st'))
  ASSERT && assertString('label', msg, ordStrFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Fail ? pass(pctx, pres, expected(msg)) : prep
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
 * *did* consume input, the context is reset to the context before the
 * parser was applied, the error is set to a compound error using the
 * supplied message (with the nested error being the original error that
 * came from the failure point), and failure happens.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be
 *     an `Expected` error if no input was consumed, or a `Compound`
 *     error if it was.
 * @returns {Parser} A parser that applies `p` and changes the error
 *     as appropriate if `p` fails.
 */
export const attemptM = (p, msg) => Parser(ctx => {
  ASSERT && assertParser('attemptM', p, ordParFormatter('1st'))
  ASSERT && assertString('attemptM', msg, ordStrFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Ok) return prep
  if (pres.status === Fail) {
    if (pres.errors.length === 1 && pres.errors[0].type === Nested) {
      const { ctx, errors } = pres.errors[0]
      return pass(pctx, pres, compound(msg, ctx, errors))
    }
    return pass(pctx, pres, expected(msg))
  }
  return fail(ctx, compound(msg, pctx, pres.errors))
})
