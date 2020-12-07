// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { assertString } from 'kessel/assert'
import { fail, fatal, Parser } from 'kessel/core'
import { generic } from 'kessel/error'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const failNormally = msg => Parser(ctx => {
  ASSERT && assertString('failNormally', msg)
  return fail(ctx, generic(msg))
})

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */
export const failFatally = msg => Parser(ctx => {
  ASSERT && assertString('failFatally', msg)
  return fatal(ctx, generic(msg))
})
