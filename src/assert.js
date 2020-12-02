// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Parser } from './core'
import { charLength, ordinal, stringify } from './util'

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

export const ordFormatter = (type, ord) => value =>
  `expected ${ord} argument to be ${type}; found ${stringify(value)}`

export const ordCharFormatter = ord =>
  ordFormatter('a one-character string', ord)
export const ordFnFormatter = ord => ordFormatter('a function', ord)
export const ordNumFormatter = ord => ordFormatter('a number', ord)
export const ordParFormatter = ord => ordFormatter('a parser', ord)
export const ordStrFormatter = ord => ordFormatter('a string', ord)

function failAssert(name, value, formatter) {
  throw new Error(`[${name}]: ${formatter(value)}`)
}

export function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || charLength(value) !== 1) {
    failAssert(name, value, formatter)
  }
}

export function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || Parser.created(value)) {
    failAssert(name, value, formatter)
  }
}

export function assertGeneratorFunction(name, value, formatter = genFormatter) {
  if (Object.prototype.toString.call(value) !== '[object GeneratorFunction]') {
    failAssert(name, value, formatter)
  }
}

export function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') failAssert(name, value, formatter)
}

export function assertArray(name, value, formatter = arrFormatter) {
  if (!Array.isArray(value)) failAssert(name, value, formatter)
}

export function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(
    Array.isArray(value)
    && value.every(c => typeof c === 'string' && charLength(c) === 1)
    || typeof value === 'string'
  )) {
    failAssert(name, value, formatter)
  }
}

export function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  if (typeof value !== 'string'
    && Object.prototype.toString.call(value) !== '[object RegExp]') {
    failAssert(name, value, formatter)
  }
}

export function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') failAssert(name, value, formatter)
}

export function assertParser(name, value, formatter = parFormatter) {
  if (typeof value !== 'function' || !Parser.created(value)) {
    failAssert(name, value, formatter)
  }
}

export function assertParsers(name, values) {
  for (const [i, value] of values.entries()) {
    assertParser(name, value, ordParFormatter(ordinal(i + 1)))
  }
}
