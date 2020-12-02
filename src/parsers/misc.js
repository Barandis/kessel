// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { assertString } from 'kessel/assert'
import { error, fatal, ok, Parser } from 'kessel/core'
import { generic, unexpected } from 'kessel/error'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that always succeeds and results in the provided
 * value.
 *
 * @param {*} x The value that be the new parser's result.
 * @returns {Parser} A parser that always succeeds with `value`.
 */
export const always = x => Parser(ctx => ok(ctx, x))

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const fail = msg => Parser(ctx => {
  ASSERT && assertString('fail', msg)
  return error(ctx, generic(msg))
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

/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export const failUnexpected = msg => Parser(ctx => {
  ASSERT && assertString('failUnexpected', msg)
  return error(ctx, unexpected(msg))
})
