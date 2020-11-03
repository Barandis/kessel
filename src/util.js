/* istanbul ignore file */
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Parser } from './core'

const reType = /^\[(?:object|class) (.*)\]/

// This encoder/decoder pair is used to translate back and forth
// between a JavaScript UCS2 string and a UTF8 encoding of that string
// in a Uint8Array.
export const encoder = new TextEncoder()
export const decoder = new TextDecoder()

export function trackedFactory(fn, prop = 'created') {
  const creations = new WeakSet()

  return Object.defineProperty(
    (...args) => {
      const created = fn(...args)
      creations.add(created)
      return created
    },
    prop,
    { value: creations.has.bind(creations) },
  )
}

export function *enumerate(iterable, start = 0) {
  const iterator = iterable[Symbol.iterator]()
  let result = iterator.next()
  let index = start >= 0 ? Math.floor(start) : 0

  while (!result.done) {
    yield { index: index++, value: result.value }
    result = iterator.next()
  }
}

export function *range(start, end, step, inclusive) {
  const s = typeof end === 'number' ? start : 0
  const e = typeof end === 'number' ? end : start
  const p = typeof step === 'number' ? step === 0 ? 1 : Math.abs(step) : 1
  const i = typeof step === 'number'
    ? !!inclusive : typeof end === 'number'
      ? !!step : !!end

  const forward = s < e
  let current = s

  const finished = () => {
    if (forward) {
      return i ? current > e : current >= e
    }
    return i ? current < e : current <= e
  }

  /* eslint-disable require-atomic-updates */
  while (!finished()) {
    yield current
    current = forward ? current + p : current - p
  }
  /* eslint-enable require-atomic-updates */
}

export function viewToString(index, length, view) {
  const bytes = Uint8Array.from(
    { length },
    (_, i) => view.getUint8(index + i),
  )
  return decoder.decode(bytes)
}

export function stringToView(str) {
  return new DataView(encoder.encode(str).buffer)
}

export function charLength(str) {
  return [...str].length
}

export function nextCharWidth(index, view) {
  const byte = view.getUint8(index)
  if ((byte & 0x80) >> 7 === 0) return 1
  if ((byte & 0xe0) >> 5 === 0b110) return 2
  if ((byte & 0xf0) >> 4 === 0b1110) return 3
  if ((byte & 0xf0) >> 4 === 0b1111) return 4
  // Hopefully shouldn't happen, but here in case one of those high
  // ascii codes is used
  return 1
}

export function nextChar(index, view) {
  const width = nextCharWidth(index, view)
  return { width, next: viewToString(index, width, view) }
}

export function articlize(str) {
  return 'aeiouyAEIOUY'.includes(str[0]) ? `an ${str}` : `a ${str}`
}

export function getType(obj) {
  const type = Object.prototype.toString.call(obj)
  return type.match(reType)[1]
}

export function assertType(obj, type, name, msgFn) {
  const actualType = getType(obj)
  if (type !== actualType) {
    throw new TypeError(`[${name}]: ${msgFn(actualType)}`)
  }
}

export function assertTypes(obj, types, name, msgFn) {
  const actualType = getType(obj)
  if (!types.includes(actualType)) {
    throw new TypeError(`[${name}]: ${msgFn(actualType)}`)
  }
}

export function assertCreated(obj, factory, name, msgFn) {
  if (!factory.created(obj)) {
    throw new TypeError(`[${name}]: ${msgFn()}`)
  }
}

const assertStringFn = type =>
  `expected argument to be a String; found ${articlize(type)}`

export function assertString(str, name, msgFn = assertStringFn) {
  assertType(str, 'String', name, msgFn)
}

const assertCharacterFn = c =>
  `expected argument to be one character; found "${c}"`

export function assertCharacter(
  c,
  name,
  strFn = assertStringFn,
  charFn = assertCharacterFn,
) {
  assertString(c, name, strFn)
  if (charLength(c) !== 1) {
    throw new TypeError(`[${name}]: ${charFn(c)}`)
  }
}

const assertStringOrRegexFn = type =>
  `expected argument to be a String or a RegExp; found ${articlize(type)}`

export function assertStringOrRegex(re, name, msgFn = assertStringOrRegexFn) {
  assertTypes(re, ['String', 'RegExp'], name, msgFn)
}

const assertFunctionFn = type =>
  `expected argument to be a Function; found ${articlize(type)}`

export function assertFunction(fn, name, msgFn = assertFunctionFn) {
  assertType(fn, 'Function', name, msgFn)
}

const assertGeneratorFunctionFn = type =>
  `expected argument to be a GeneratorFunction; found ${articlize(type)}`

export function assertGeneratorFunction(
  fn,
  name,
  msgFn = assertGeneratorFunctionFn,
) {
  assertType(fn, 'GeneratorFunction', name, msgFn)
}

const assertParserFunctionFn = type =>
  `expected argument to be a parser Function; found ${articlize(type)}`

const assertParserFn = () =>
  'expected argument to be a Parser; found a non-Parser Function'

export function assertParser(
  fn,
  name,
  fnFn = assertParserFunctionFn,
  parserFn = assertParserFn,
) {
  assertType(fn, 'Function', name, fnFn)
  assertCreated(fn, Parser, name, parserFn)
}

export function assertArgs(args, length, name) {
  if (args.length < length) {
    throw new TypeError(
      `[${name}]: expected at least ${length} arguments; found ${args.length}`,
    )
  }
}

export function quote(str) {
  return `"${str}"`
}
