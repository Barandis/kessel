// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { assertString } from 'kessel/assert'
import { error, fatal, makeParser, ok } from 'kessel/core'
import { generic, unexpected } from 'kessel/error'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that always succeeds and results in the provided
 * value.
 *
 * @param {*} x The value that be the new parser's result.
 * @returns {Parser} A parser that always succeeds with `value`.
 */
export const constant = x => makeParser(state => ok(state, x))

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const fail = message => makeParser(state => {
  /* istanbul ignore else */
  if (ASSERT) assertString('fail', message)
  return error(state, generic(message))
})

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */
export const failFatally = message => makeParser(state => {
  /* istanbul ignore else */
  if (ASSERT) assertString('failFatally', message)
  return fatal(state, generic(message))
})

/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} message The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const failUnexpected = message => makeParser(state => {
  /* istanbul ignore else */
  if (ASSERT) assertString('failUnexpected', message)
  return error(state, unexpected(message))
})
