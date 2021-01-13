// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argFnFormatter,
  argParFormatter,
  argStrFormatter,
  assertFunction,
  assertParser,
  assertString,
  formatter,
} from 'kessel/assert'
import { failReply, parser, Status } from 'kessel/core'
import { expected } from 'kessel/error'
import { dup } from 'kessel/util'

const { Fail } = Status

/**
 * Executes a parser. If that parser succeeds or fails fatally, its
 * behavior is not modified.
 *
 * However, if the parser fails normally, whatever error message was
 * generated will be replaced with `m` as an expected error message.
 *
 * Every parser that can fail already can take an optional error
 * message. The purpose of this parser is to provide a way for
 * already-created parsers to change their error messages. For instance,
 * one might write `const quoted = between(char('"'), char('"'),
 * many(letter()))` and then re-use this `quoted` parser in a number of
 * contexts, all of which might have their own ideas of a good error
 * message. Using `label(quoted, errorMessage)` still lets that happen.
 *
 * Note that unlike virtually every other parser in the library, the
 * message `m` here is required.
 *
 * @param {Parser} p The parser whose failure message will be changed.
 * @param {string} m The new error message for parser failure.
 * @returns {Parser} A new parser that exeuctes the same as `p` but
 *     provides `m` as an error message when it fails.
 */
export const label = (p, m) => parser(ctx => {
  ASSERT && assertParser('label', p, argParFormatter(1, true))
  ASSERT && assertString('label', m, argStrFormatter(2, true))

  const [prep, [pctx, pres]] = dup(p(ctx))
  return pres.status !== Fail ? prep : failReply(pctx, expected(m))
})

/**
 * Creates a parser that runs a parser-producing function when it's
 * execucted. It then executes that parser and returns its result.
 *
 * This is useful for defining recursive parsers, as defining a parser
 * with a factory calling itself will always blow up the stack as the
 * factory calls itself infinitely many times. `lazy` defers the call to
 * the factory until the parser is executed and knows that it *needs*
 * another parser from that factory. Assuming that there is a case when
 * the parser would not call for another parser, the factory calls will
 * terminate and no infinite loop will occur.
 *
 * @param {function():Parser} fn A parser-producing factory function.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that calls `fn` on execution and executes
 *     the parser it returns.
 */
export const lazy = (fn, m) => {
  const hasM = m != null

  ASSERT && assertFunction('lazy', fn, argFnFormatter(1, hasM))
  ASSERT && hasM && assertString('lazy', m, argStrFormatter(2, true))

  return parser(ctx => {
    const p = fn()
    ASSERT && assertParser(
      'lazy', p, formatter('function argument to return a parser'),
    )
    return p(ctx)
  })
}
