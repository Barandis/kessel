// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { error, fatal, makeParser, Status } from 'kessel/core'
import { makeExpected, overwrite } from 'kessel/error'
import { dup } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that applies the supplied parser. If that parser
 * succeeds, nothing additional happens. If it fails (fatally or not),
 * the returned parser fails in the same way, but it replaces the
 * supplied parser's `Expected` errors with one whose message is the
 * supplied string.
 *
 * This can be used to provide better error messages in cases where the
 * automatically generated error messages are insufficient.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} message The new `Expected` error message if `p`
 *     fails.
 * @returns {Parser} A parser that applies `p` and passes its results
 *     through except for changing its `Expected` error message upon
 *     failure.
 */
export const label = (p, message) => makeParser(state => {
  const [tuple, [next, result]] = dup(p(state))
  if (result.status === Status.Error) {
    return error(next, overwrite(result.errors, makeExpected(message)))
  }
  if (result.status === Status.Fatal) {
    return fatal(next, overwrite(result.errors, makeExpected(message)))
  }
  return tuple
})
