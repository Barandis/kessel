// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { parser } from './core'
import { charLength, enumerate, ordinal, ordinalWord, stringify } from './util'

/**
 * Generates a formatter function out of a type.
 *
 * @param {string} type The type that the value should be.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */
export const formatter = type =>
  value => `expected ${type}; found ${stringify(value)}`

const charFormatter = formatter('a one-character string')
const fnFormatter = formatter('a function')
const genFormatter = formatter('a generator function')
const strFormatter = formatter('a string')
const arrFormatter = formatter('an array')
const strArrFormatter = formatter('a string or an array of characters')
const strRegFormtter = formatter('a string or a regular expression')
const numFormatter = formatter('a number')
const parFormatter = formatter('a parser')

/**
 * Generates a formatter function out of a type and a position.
 *
 * @param {string} type The type that the value should be.
 * @param {string} [order] The position of the value within an argument
 *     list.
 * @param {boolean} [multiple] Indicates whether there is more than one
 *     argument in the function whose error is being formatted. If this
 *     is false, the `order` will be ignored.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */
export const argFormatter = (type, order = 1, multiple = false) => value =>
  `expected ${
    multiple ? `${ordinalWord(order)} ` : ''
  }argument to be ${type}; found ${stringify(value)}`

export const argCharFormatter = (order = 1, multiple = false) =>
  argFormatter('a one-character string', order, multiple)
export const argFnFormatter = (order = 1, multiple = false) =>
  argFormatter('a function', order, multiple)
export const argNumFormatter = (order = 1, multiple = false) =>
  argFormatter('a number', order, multiple)
export const argParFormatter = (order = 1, multiple = false) =>
  argFormatter('a parser', order, multiple)
export const argStrFormatter = (order = 1, multiple = false) =>
  argFormatter('a string', order, multiple)

/**
 * Generates a formatter function out of a type and a position.
 *
 * @param {string} type The type that the value should be.
 * @param {string} ord The position of the value within aan argument
 *     list, a block of code, etc.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */
export const ordFormatter = (type, ord) => value =>
  `expected ${ord} argument to be ${type}; found ${stringify(value)}`

export const ordCharFormatter = ord =>
  ordFormatter('a one-character string', ord)
export const ordFnFormatter = ord => ordFormatter('a function', ord)
export const ordNumFormatter = ord => ordFormatter('a number', ord)
export const ordParFormatter = ord => ordFormatter('a parser', ord)
export const ordStrFormatter = ord => ordFormatter('a string', ord)

/**
 * @param {string} name
 * @param {*} value
 * @param {function(string):string} formatter
 */
function failAssert(name, value, formatter) {
  throw new Error(`[${name}]: ${formatter(value)}`)
}

/**
 * Asserts that a value is a single-character string.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || charLength(value) !== 1) {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that a value is a non-parser function.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || parser.created(value)) {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that a value is a generator function.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertGeneratorFunction(name, value, formatter = genFormatter) {
  if (Object.prototype.toString.call(value) !== '[object GeneratorFunction]') {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that a value is a string.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') failAssert(name, value, formatter)
}

/**
 * Asserts that a value is an array.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertArray(name, value, formatter = arrFormatter) {
  if (!Array.isArray(value)) failAssert(name, value, formatter)
}

/**
 * Asserts that a value is a string or an array of single-character
 * strings.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(
    Array.isArray(value)
    && value.every(c => typeof c === 'string' && charLength(c) === 1)
    || typeof value === 'string'
  )) {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that a value is a string or a regular expression.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  if (typeof value !== 'string'
    && Object.prototype.toString.call(value) !== '[object RegExp]') {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that a value is a number.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') failAssert(name, value, formatter)
}

/**
 * Asserts that a value is a parser.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */
export function assertParser(name, value, formatter = parFormatter) {
  if (typeof value !== 'function' || !parser.created(value)) {
    failAssert(name, value, formatter)
  }
}

/**
 * Asserts that an array contains only parsers.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*[]} values The array of values being checked.
 */
export function assertParsers(name, values) {
  for (const [i, value] of enumerate(values)) {
    assertParser(name, value, ordParFormatter(ordinal(i + 1)))
  }
}
