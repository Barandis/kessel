// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, makeParser, Status } from 'kessel/core'
import { expected } from 'kessel/error'
import { dup } from 'kessel/util'

const { Error } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that applies the supplied parser. If that parser
 * consumes input, nothing additional happens. If it fails non-fatally,
 * the returned parser fails in the same way, but it replaces the
 * supplied parser's errors with an expected error whose message is the
 * supplied string.
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
export const label = (p, msg) => makeParser(state => {
  const [reply, [next, result]] = dup(p(state))
  return result.status === Error ? error(next, expected(msg)) : reply
})
