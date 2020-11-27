// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { charLength } from './util'

function stringify(value) {
  if (value === undefined) return 'undefined'
  if (typeof value === 'function') return `function ${value.name}`
  if (typeof value === 'symbol') return `Symbol(${value.description})`
  return JSON.stringify(value)
}

const charFormatter = value =>
  `expected a one-character string; found ${stringify(value)}`
const fnFormatter = value =>
  `expected a function; found ${stringify(value)}`
const strFormatter = value =>
  `expected a string; found ${stringify(value)}`
const strArrFormatter = value =>
  `expected a string or an array of characters; found ${stringify(value)}`
const strRegFormtter = value =>
  `expected a string or a regular expression; found ${stringify(value)}`

export const ordinalChar = ord => value =>
  `expected ${ord} argument to be a one-character string; found ${
    stringify(value)
  }`

export function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || charLength(value) !== 1) {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function') {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(
    Array.isArray(value)
    && value.every(c => typeof c === 'string' && charLength(c) === 1)
    || typeof value === 'string'
  )) {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  const type = Object.prototype.toString.call(value)
  if (typeof value !== 'string' && type !== '[object RegExp]') {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}
