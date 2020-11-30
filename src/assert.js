// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { makeParser } from './core'
import { charLength, stringify } from './util'

export const formatter = type =>
  value => `expected ${type}; found ${stringify(value)}`

const charFormatter = formatter('a one-character string')
const fnFormatter = formatter('a function')
const strFormatter = formatter('a string')
const arrFormatter = formatter('an array')
const strArrFormatter = formatter('a string or an array of characters')
const strRegFormtter = formatter('a string or a regular expression')
const numFormatter = formatter('a number')
const parserFormatter = formatter('a parser')

export const ordFormatter = (type, ord) => value =>
  `expected ${ord} argument to be ${type}; found ${stringify(value)}`

export const ordinalChar = ord => ordFormatter('a one-character string', ord)
export const ordinalFunction = ord => ordFormatter('a function', ord)
export const ordinalNumber = ord => ordFormatter('a number', ord)
export const ordinalParser = ord => ordFormatter('a parser', ord)
export const ordinalString = ord => ordFormatter('a string', ord)

export function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || charLength(value) !== 1) {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || makeParser.created(value)) {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertArray(name, value, formatter = arrFormatter) {
  if (!Array.isArray(value)) {
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

export function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}

export function assertParser(name, value, formatter = parserFormatter) {
  if (typeof value !== 'function' || !makeParser.created(value)) {
    throw new Error(`[${name}]: ${formatter(value)}`)
  }
}
