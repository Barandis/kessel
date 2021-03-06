// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { failReply, fatalReply, okReply, parser } from 'kessel/core'
import { generic } from 'kessel/error'

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in.
 *
 * @param {string} m The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */
export function fail(m) {
  return parser(ctx => failReply(ctx, generic(m)))
}

/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in. This signifies a fatal error,
 * one that cannot be recovered from without backtracking.
 *
 * @param {string} m The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */
export function fatal(m) {
  return parser(ctx => fatalReply(ctx, generic(m)))
}

/**
 * A parser which always succeeds with the supplied value.
 *
 * This serves as a primitive for both monads and applicatives. In
 * Haskell terms, this function represents both `pure` in the
 * `Applicative` class and `return` in the `Monad` class.
 *
 * In other words, it lifts an arbitrary value into a Parser context,
 * turning it into a parser that returns that value.
 *
 * @param {*} x The value will result when this parser is applied.
 * @returns {Parser} A parser that always succeeds with `value`.
 */
export function always(x) {
  return parser(ctx => okReply(ctx, x))
}
