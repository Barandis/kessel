/* istanbul ignore file */
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { failReply, fatalReply, parser } from './core'
import { compound, expected, nested } from './error'

/** @typedef {import('./core').Context} Context */
/** @typedef {import('./core').Result} Result */
/** @typedef {import('./core').Reply} Reply */
/** @typedef {import('./error').ErrorList} ErrorList */

/**
 * Translates a UCS-2 string into a Uint8Array of UTF-8 bytes.
 */
export const encoder = new TextEncoder()

/**
 * Translates a Uint8Array of UTF-8 bytes into a UCS-2 string.
 */
export const decoder = new TextDecoder()

/**
 * An iterator that covers a range from a starting value to an ending
 * value, stepping by a certain value between each.
 *
 * @param {number} [start=0] The first number of the range.
 * @param {number} end The last number of the range. By default this
 *     number forms the upper bound of the range without being included
 *     in it.
 * @param {number} [step=1] The number to increase the yielded value by
 *     during each iteration.
 * @param {boolean} [inclusive=false] Determines whether `end` should be
 *     included as part of the range.
 * @yields {number} The values that make up the range.
 */
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

/**
 * An iterator that pairs values in an iterable with their indexes in a
 * series of two-element arrays. The first array element is the index;
 * the second is the value from the iterable.
 *
 * For arrays, this can be done with `array.entries()`, which produces
 * two-element arrays in the same format. However, this generator
 * function will work with any kind of object implementing the
 * `Iterable` interface.
 *
 * @param {Iterable} iterable An iterable object whose elements will
 *     be paired with their indexes.
 * @yields {[number, *]} The iterable's values, paired with their
 *     indexes.
 */
export function *enumerate(iterable) {
  const iterator = iterable[Symbol.iterator]()
  let result = iterator.next()
  let index = 0

  while (!result.done) {
    yield [index++, result.value]
    result = iterator.next()
  }
}

/**
 * Returns a portion of a UTF-8 data view as a UCS-2 string.
 *
 * @param {number} index The index of the byte to be the first in the
 *     generated string.
 * @param {number} length The number of bytes to include in the
 *     generated string.
 * @param {DataView} view The data view containing the text from which
 *     the generated string is taken.
 * @returns {string} A UCS-2 (regular JavaScript string) representation
 *     of the UTF-8 characters in the data view.
 */
export function viewToString(index, length, view) {
  const bytes = Uint8Array.from(
    { length },
    (_, i) => view.getUint8(index + i),
  )
  return decoder.decode(bytes)
}

/**
 * Creates a UTF-8 data view of a UCS-2 string.
 *
 * @param {string} str The string to encode into a UTF-8 data view.
 * @returns {DataView} A data view over the UTF-8 bytes of the input
 *     string.
 */
export function stringToView(str) {
  return new DataView(encoder.encode(str).buffer)
}

/**
 * Returns the number of UTF-8 characters in a string. This can differ
 * from the number of UCS-2 characters in the same string, meaning this
 * value can differ from the `length` property of the same string.
 *
 * @param {string} str The string of which to get the character length.
 * @return {number} The number of UTF-8 characters in that string.
 */
export function charLength(str) {
  return [...str].length
}

/**
 * Determines the width of the character currently indexed in the view,
 * based on the value of its first byte.
 *
 * @param {number} index The index of the byte within the view that is
 *     the first (and perhaps only) byte of the next character.
 * @param {DataView} view The data view containing the text.
 * @returns {(1|2|3|4)} The number of bytes contained in the character
 *     starting at the indexed byte.
 */
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

/**
 * Contains information about the next character(s) in the data view.
 *
 * @typedef NextCharInfo
 * @property {number} width The width of the returned character(s).
 * @property {string} next The next character(s).
 */

/**
 * Returns the character at the indexed position within the data view.
 * This character may be a 1-, 2-, 3-, or 4-byte character depending on
 * the value of its first byte.
 *
 * @param {number} index The index within the view of the first byte of
 *     the desired character.
 * @param {DataView} view The data view containing the text.
 * @returns {NextCharInfo} Information about the next character in the
 *     data view.
 */
export function nextChar(index, view) {
  const width = nextCharWidth(index, view)
  return { width, next: viewToString(index, width, view) }
}

/**
 * Returns the next `count` characters starting at the indexed position
 * within the view. Each of these characters may be 1-, 2-, 3-, or
 * 4-byte characters depending on the values of their first bytes. If
 * there are not enough characters left, those remaining will be
 * returned.
 *
 * @param {number} index The index within the view of the first byte of
 *     the first desired character.
 * @param {DataView} view The data view containing the text.
 * @param {number} count The number of characters to return.
 * @returns {NextCharInfo} Information about the next characters in the
 *     data view.
 */
export function nextChars(index, view, count) {
  const viewLength = view.byteLength
  let width = 0

  for (const _ of range(count)) {
    const i = index + width
    if (i >= viewLength) break
    width += nextCharWidth(i, view)
  }
  if (index + width >= viewLength) {
    width = viewLength - index
  }
  return { width, next: viewToString(index, width, view) }
}

/**
 * Surrounds the supplied string in single quotes.
 *
 * @param {string} str The string to surround in single quotes.
 * @returns {string} The same string, led and trailed by single quotes.
 */
export function quote(str) {
  return `'${str}'`
}

/**
 * Creates an array of two copies of the provided value.
 *
 * This sort of emulates *as-patterns* in a limited way in JavaScript.
 * In languages like Haskell and ML, when pattern matching is done,
 * there is a construct to be able to retain a larger part of the
 * destructured pattern while also breaking it down further. In Haskell,
 *
 * ```haskell
 * (head : tail) = [1, 2, 3, 4, 5]
 * ```
 *
 * will assign `1` to `head`, and `[2, 3, 4, 5]` to `tail`. This can be
 * done in JavaScript as well, like this:
 *
 * ```javascript
 * const [head, ...tail] = [1, 2, 3, 4, 5]
 * ```
 *
 * However, Haskell can go farther: it can also assign the entire list
 * as a whole to another variable while still assigning its elements as
 * above. It's done like this:
 *
 * ```haskell
 * list @ (head : tail) = [1, 2, 3, 4, 5]
 * ```
 *
 * This will, in addition to the assignments above, assign `[1, 2, 3, 4,
 * 5]` to `list`. The `@` sign is read *as*, and this construct is
 * called an *as-pattern* (perhaps because the ML way of doing it uses
 * the `as` keyword instead of the `@` symbol).
 *
 * There is no facility to do this in JavaScript. But there are many
 * places in this library where a `Reply` is descturctured into its
 * `Context` and `Result` elements, yet there is a need to conditionally
 * use the entire `Reply` as well (normally to return it if some
 * condition is met). Rather than create a new `Reply` from these parts,
 * `twin` can be used to duplicate the references to the `Reply`. Then
 * only *one* of the duplicate references can be destructured, while the
 * other one is retained as a whole.
 *
 * ```javascript
 * const [reply, [context, result]] = twin(parser(ctx))
 * ```
 *
 * As-patterns can be used on pieces of a pattern instead of the entire
 * pattern, and `twin` cannot do that. But it serves for what is needed
 * in Kessel.
 *
 * @param {Reply} value A reply that needs to be destructured while
 *     maintaining a reference to the whole.
 * @returns {[Reply, Reply]} An array containing two copies of the
 *     reply. One can be destructured while the other is retained whole.
 */
export function dup(value) {
  return [value, value]
}

/**
 * Comma-separates (as needed) the strings in the provided array. If
 * the array is empty, the result will be an empty string; if the array
 * has only one element, that element will be returned. If the array has
 * two elements, they will be joined with ' or ' between them. If the
 * array is longer than that, all elements will be comma-separated with
 * an additional 'or' between the last two elements (Oxford comma
 * style).
 *
 * @param {string[]} messages The strings that need to be joined into
 *     a comma-separated string.
 * @returns {string} The messages joined into a single string.
 */
export function commaSeparate(messages) {
  switch (messages.length) {
    case 0: return ''
    case 1: return messages[0]
    case 2: return messages.join(' or ')
    default: {
      const msgs = messages.slice()
      const last = msgs.pop()
      return `${msgs.join(', ')}, or ${last}`
    }
  }
}

/**
 * Augments a factory function to be able to determine whether it
 * created an arbitrary object. The factory function is assigned an
 * additional property (by default named `created`, can be changed by
 * passing in the `prop` argument) which is a function that takes an
 * object and returns `true` if the factory created it or `false` if it
 * did not.
 *
 * @param {function} fn The factory function that will be augmented with
 *     the new property.
 * @param {string|symbol} [prop='created'] The property that will be
 *     added to the factory function.
 * @returns {function} The augmented factory function.
 */
export function track(fn, prop = 'created') {
  const tracked = new WeakSet()

  return Object.defineProperty(
    (...args) => {
      const created = fn(...args)
      tracked.add(created)
      return created
    },
    prop,
    { value: tracked.has.bind(tracked) },
  )
}

/**
 * Converts a number to its string ordinal form (i.e., `1` becomes
 * `'1st'`, `1729` becomes `'1729th'`, etc.)
 *
 * @param {number} n The number to convert into an ordinal.
 * @returns {string} The same number in its ordinal form.
 */
export function ordinal(n) {
  const suffixes = ['th', 'st', 'nd', 'rd']
  const v = n % 100
  return n + (suffixes[(v - 20) % 10] ?? suffixes[v] ?? suffixes[0])
}

const nums = [
  'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
  'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen',
]
const ones = [
  'zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh',
  'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth',
  'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth',
  'nineteenth',
]
const tens = [
  'twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet',
]
const groups = [
  'hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion',
]

/**
 * Converts a number into its word-based ordinal form (i.e., `1` becomes
 * `'first'`, `1729` becomes `'one thousand seven hundred
 * twenty-ninth'`, etc.).
 *
 * @param {number} n The number to convert into an ordinal.
 * @returns {string} The same number in its word-based ordinal form.
 */
export function wordinal(n) {
  if (n < 0 || n > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Argument must be between 0 and ${Number.MAX_SAFE_INTEGER}`)
  }
  const mag = Math.floor(Math.log10(n))

  if (n < 20) return ones[n]
  if (mag === 1) {
    const i = Math.floor(n / 10) - 2
    return n % 10 === 0 ? `${tens[i]}ieth` : `${tens[i]}y-${ones[n % 10]}`
  }
  if (mag === 2) {
    const f = Math.floor(n / 10 ** mag)
    const x = n - f * 10 ** mag
    return `${nums[f]} ${groups[0]}${x === 0 ? 'th' : ` ${wordinal(x)}`}`
  }

  const g = mag % 3 + 1
  const i = Math.floor(mag / 3)
  const f = Math.floor(n / 10 ** (mag - g + 1))
  const m = (function mult(num) {
    if (num < 20) return nums[num]

    const rem = num % 10
    if (num < 100) {
      return `${tens[Math.floor(num / 10) - 2]}y${
        rem === 0 ? '' : `-${nums[rem]}`
      }`
    }

    const x = num - Math.floor(num / 100) * 100
    return `${nums[Math.floor(num / 100)]} ${groups[0]}${
      x === 0 ? 'th' : ` ${mult(x)}`
    }`
  }(f))
  const x = n - f * 10 ** (mag - g + 1)
  return `${m} ${groups[i]}${x === 0 ? 'th' : ` ${wordinal(x)}`}`
}

/**
 * Returns a reasonable string representation of a value. This will most
 * often be the output from `JSON.stringify()`, though representations
 * are also included for types that function doesn't support.
 *
 * @param {*} value The value to turn into a string.
 * @returns {string} A reasonable string representation of the value.
 */
export function stringify(value) {
  if (value === undefined) return 'undefined'
  if (typeof value === 'function') {
    return parser.created(value) ? 'parser' : 'function'
  }
  if (typeof value === 'symbol') return `Symbol(${value.description})`
  return JSON.stringify(value)
}

/**
 * Adds the appropriate indefinite article ('a' or 'an') to a word based
 * on its first letter.
 *
 * @param {string} str The string to prepend an article to.
 * @returns {string} The string with the prepended article.
 */
export function articlify(str) {
  return 'aeiouAEIOU'.includes(str[0]) ? `an ${str}` : `a ${str}`
}

// --------------------------------------------------------------------
// Error utilities

/**
 * Returns the function used to create a failure reply. The condition
 * determines whether the reply will be fatal (`true`) or not (`false`).
 *
 * @param {boolean} condition Should be `true` for a fatal failure or
 *     `false` for a non-fatal failure.
 * @returns The reply function for fatal or non-fatal failures.
 */
export function replyFn(condition) {
  return condition ? fatalReply : failReply
}

/**
 * Generates an error list for non-backtracked errors from underlying
 * parsers. The 'f' is for 'flat'; this function produces a non-nested
 * error whose message is based upon whether `m` exists or not.
 *
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list that does not take backtracking
 *     into account.
 */
export function ferror(m, errors) {
  return m == null ? errors : expected(m)
}

/**
 * Generates an error list for backtracked errors from underlying
 * parsers. The 'n' is for nested; this function produces a nested
 * error that instead be a compound error if `m` exists.
 *
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {Context} ctx The context from the point where the underlying
 *     error occurred.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list that takes backtracking into
 *     account.
 */
export function nerror(m, ctx, errors) {
  return m == null ? nested(ctx, errors) : compound(m, ctx, errors)
}

/**
 * Generates an error list that will only record backtracking
 * information if the provided condition is true.
 *
 * @param {boolean} cond If `true`, the new error list will include
 *     backtracking information.
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {Context} ctx The context from the point where the underlying
 *     error occurred.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list.
 */
export function berror(cond, m, ctx, errors) {
  return cond ? nerror(m, ctx, errors) : ferror(m, errors)
}
