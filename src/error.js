// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertParseError,
  charLength,
  nextCharWidth,
  trackedFactory,
  viewToString,
} from './util'

const tab = /\t/gu
const zeroWidth = /(?:\p{Mn}|\p{Cf})/gu

export const ErrorType = {
  Expected: Symbol('expected'),
  Unexpected: Symbol('unexpected'),
  Generic: Symbol('message'),
  Other: Symbol('other'),
}

export const ParseError = trackedFactory((type, message) => ({
  type, message,
}))

// Creates an expected error. Multiple expected errors can be a part of
// a single error message, and they will be comma-separated and prefaced
// with the word 'Expected'.
export function expected(msg) {
  return ParseError(ErrorType.Expected, msg)
}

// Creates an unexpected error. Only the first unexpected error in a
// list of errors will be displayed in an error message, and it will be
// prefaced with 'Unexpected'.
export function unexpected(msg) {
  return ParseError(ErrorType.Unexpected, msg)
}

// Creates a generic message error. Only the first of these will be
// displayed, unprefaced, at the bottom of the error message.
export function generic(msg) {
  return ParseError(ErrorType.Generic, msg)
}

// Creates an other error. These are not displayed by the default
// formatter and are only for use with custom formatters.
export function other(msg) {
  return ParseError(ErrorType.Other, msg)
}

// Adds one or more errors to a list of errors.
export function push(list, ...errors) {
  for (const error of errors) {
    assertParseError(error, 'push')
  }
  return [...list, ...errors]
}

// Clears all errors of a particular type from a list of errors. If
// `type` is not provided, all errors will be cleared. Multiple types
// can be provided.
export function clear(errors, ...types) {
  if (types.length === 0) return []
  return errors.filter(error => !types.includes(error.type))
}

// Clears all errors from a list of errors that are of the same type as
// any of the provided errors, and then adds those errors to the list.
export function overwrite(list, ...errors) {
  for (const error of errors) {
    assertParseError(error, 'overwrite')
  }
  const types = errors.map(error => error.type)
  const result = list.filter(error => !types.includes(error.type))
  return [...result, ...errors]
}

// #region Formatting utility functions

// Determines whether the character at the given index in the supplied
// view is a newline. An object with two properties is returned;
// `newline` is a boolean that indicates whether that character is a
// newline; `skip` is the width of the character (and therefore how
// many bytes to skip until the next character to check).
//
// All Unicode newlines (CR, LF, FF, VT, NEL, LS, and PS) are handled,
// along with the multi-character newline CR+LF.
export function isNewline(index, view) {
  const byte = view.getUint8(index)
  if (byte === 0x0a || byte === 0x0b || byte === 0x0c) {
    return { newline: true, skip: 1 }
  }

  if (byte === 0x0d) {
    if (index < view.byteLength - 1) {
      const nextByte = view.getUint8(index + 1)
      if (byte === 0x0d && nextByte === 0x0a) {
        return { newline: true, skip: 2 }
      }
    }
    return { newline: true, skip: 1 }
  }

  if (index < view.byteLength - 1) {
    const nextByte = view.getUint8(index + 1)

    if (byte === 0xc2 && nextByte === 0x85) return { newline: true, skip: 2 }
    if (index < view.byteLength - 2) {
      const thirdByte = view.getUint8(index + 2)
      if (byte === 0xe2 && nextByte === 0x80
        && (thirdByte === 0xa8 || thirdByte === 0xa9)) {
        return { newline: true, skip: 3 }
      }
    }
  }

  return { newline: false, skip: nextCharWidth(index, view) }
}

// Calculates the starting and ending indexes of the line in the given
// view that contains the byte pointed at by `index`. It does this by
// determining where newlines are and then figuring out which ones come
// closest before and after the index. The number of newlines that came
// before the index (and therefore the line number of the line with the
// index) is also counted.
//
// Returns an object with three properties: `start` is the index of the
// first byte of the line, `end` is the index of the last byte of the
// line (not counting the newline), and `lineno` is the line number
// where the index appears. `lineno` is 1-indexed since it is meant for
// display in the final error message.
export function getLineIndexes(index, view) {
  let start = 0
  let lineno = 1 // 1-based
  let i = 0

  while (i < view.byteLength) {
    const { newline, skip } = isNewline(i, view)
    if (newline) {
      if (i + skip > index) {
        return { start, end: i - 1, lineno }
      }
      lineno++
      start = i + skip
    }
    i += skip
  }
  return { start, end: view.byteLength - 1, lineno }
}

// Calculates the character index (as opposed to byte index) within a
// single line of text of the character pointed to by `index` within
// `view`. The `start` parameter sets the first byte of a "line" within
// the view and can be calculated with `getLineIndexes` above.
//
// In lines with only single-byte characters, the character index will
// always be the same as `index - start`. The purpose of this function
// is to adjust when multi-byte characters are present.
export function getCharIndex(index, view, start) {
  let charIndex = 0
  let byteIndex = start
  while (byteIndex < index && byteIndex < view.byteLength) {
    byteIndex += nextCharWidth(byteIndex, view)
    charIndex++
  }
  return charIndex
}

// Expands tabs into spaces and calculates the column index of the
// indexed character adjusting for those spaces. The number of spaces in
// each tab can be specified with `tabSize`.
//
// The return value is an object with two properties: `line` is the
// input line with tabs expanded into spaces, and `colIndex` is the
// index of the column that has the character pointed at by the
// character index.
export function tabify(charIndex, line, tabSize) {
  const tabIndexes = []
  let tabMatch = tab.exec(line)
  while (tabMatch !== null) {
    tabIndexes.push(tabMatch.index)
    tabMatch = tab.exec(line)
  }

  // replace each tab with the corect number of spaces, shifting the
  // remaining indexes by that amount
  let offset = 0
  let preIndexOffset = 0
  let result = line

  for (const tabIndex of tabIndexes) {
    const actualIndex = tabIndex + offset
    const spaceCount = tabSize - actualIndex % tabSize
    if (actualIndex < charIndex + preIndexOffset) {
      preIndexOffset += spaceCount - 1
    }
    offset += spaceCount - 1
    result = result.substring(0, actualIndex) + ' '.repeat(spaceCount)
      + result.substring(actualIndex + 1)
  }
  return { line: result, colIndex: preIndexOffset + charIndex }
}

// Calculates the final column number of the character being pointed to
// by the column index. This column number is 1-based (for display, the
// same as the line number from `getLineIndexes`) and is adjusted for
// zero-width characters such as formatting characters and non-spacing
// marks.
//
// The return value is an object of two propeties: `colno` is the
// 1-indexed column number, and `length` is the length of the line
// adjusting for zero-width characters. The latter is provided so it
// doesn't have to be recalculated by `show`.
export function getColNumber(colIndex, line) {
  let index = colIndex
  const matches = []

  let match = zeroWidth.exec(line)
  while (match !== null) {
    matches.push(match.index)
    if (match.index < index) index--
    match = zeroWidth.exec(line)
  }
  return {
    colno: index + 1, // 1-based
    length: charLength(line) - matches.length,
  }
}

// Generates a string containing one line that is the text at and around
// the column to be displayed, and one line that is a caret pointing to
// that particular column.
//
// This function adds ellipses as needed to the front and/or the back of
// the line in order to get the column into the visible area, based on
// the `maxWidth` of the line to display. The `length` parameter is the
// `length` returned by `getColNumber` and is here just to avoid having
// to recalculate it in this function when it already needed to be
// calculated in the other.
export function show(line, length, colno, maxWidth) {
  // First case: the line is shorter than maxWidth. Display the line
  // with the caret positioned below it.
  if (colno <= maxWidth && length <= maxWidth) {
    return `${line}\n${' '.repeat(colno - 1)}^`
  }

  // Second case: the line is longer than (maxWidth - 3) and the caret
  // points to a character in the first (maxWidth - 3) characters.
  // Display the first part of the line with `...` after it and position
  // the caret below it.
  if (colno <= maxWidth - 3) {
    return `${line.substring(0, maxWidth - 3)}...\n${' '.repeat(colno - 1)}^`
  }

  // Third case: the line is longer than (maxWidth - 3) and the caret
  // points at a character that is not in the first (maxWidth - 3)
  // characters but is in the last (maxWidth - 3) characters. Display
  // the last part of the line with `...` before it, calculate a new
  // position for the caret, and position it below the line.
  if (colno >= length - maxWidth + 3) {
    const start = length - maxWidth + 3
    const newColno = colno - (length - maxWidth)
    return `...${line.substring(start)}\n${' '.repeat(newColno - 1)}^`
  }

  // Final case: the line is longer than maxWidth - 3 and the caret
  // does not point to a character within either the first or last
  // (maxWidth - 3) characters. Shift the line to make the caret point
  // at the middle of it, add `...` to the start *and* end, and position
  // the caret below it.
  const start = colno - 1 - Math.ceil(maxWidth / 2) + 3
  const end = colno - 1 + Math.floor(maxWidth / 2) - 3
  return `...${
    line.substring(start, end)
  }...\n${
    ' '.repeat(Math.ceil(maxWidth / 2))
  }^`
}

// Comma-separates (as needed) the messages in the provided array. If
// the array is empty, the result will be an empty string; if the array
// has only one element, that element will be returned. If the array has
// two elements, they will be joined with ' or ' between them. If the
// array is longer than that, all elements will be comma-separated with
// an additional 'or' between the last two elements (Oxford comma
// style).
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

// The default formatter for error messages.
//
// This function returns a string that has the following parts:
//
// 1. A position line that gives the line number and column number where
//    the error occurred.
// 2. A visual representation of the error location. This part generates
//    two lines in the error message. The first is either the entire
//    input line or, if that's too long, a portion of the input line
//    started and/or ended with ellipses that contains the error
//    location. The second is a caret positioned underneath the location
//    in the first line that shows exactly where the error occurred.
// 3. The first unexpected error message, if any.
// 4. All of the expected error messages (if any), separated by 'or' and
//    commmas as appropriate for the number of messages.
// 5. The first of the generic messages, if any.
//
// The position of the error is indicated by the `index` parameter,
// which is the index within the array of bytes in `view` where the
// error occurred. The calculation of line and column number from this
// flat array of bytes takes the following into account:
//
// * Multi-byte characters (everything is UTF-8 aware, so characters can
//   be 1, 2, 3, or 4 bytes long)
// * Multi-character and single-character multi-byte line endings
// * Tabs, which are expanded into a number of spaces set by the
//   `tabSize` parameter
// * Zero-width characters, such as zero-width spaces and joiners, RTL
//   or LTR formatting characters, and diacritics (Hebrew or Thai vowel
//   marks, umlauts over Latin characters, etc.)
//
// The five parameters are:
//
// * `errors` is an array of error message objects. All types (generic,
//   unexpected, and expected) may be mixed in any way; they will be
//   sorted out by this function. "Other" messages are ignored; they are
//   intended for use with custom formatters.
// * `index` is the 0-based index into `view` which points at the byte
//   where the parse error occurred.
// * `view` is the DataView (backed by an array of bytes) containing the
//   input text to be parsed.
// * `tabSize` is the number of spaces in each tab, used for tab
//   expansion.
// * `maxWidth` is the maximum display width of the line of input shown
//   (from #2 above). It is only for purposes of determining how long
//   that line will be when displayed and whether ellipses have to
//   appear before and/or after it.
//
// The output is a single string that contains the 5 elements above.
//
// ### Example
//
// The following two lines of code uses `stringToView`, an internal
// utility function that, as its name suggests, turns a string into a
// UTF-8 data view. It's called by `parse` itself, so in real world
// usage, it's not necessary to know.
//
// const view = stringToView('\tOnomatopoeia\t\t\t\tคำเลียนเสียง')
// const message = format([expected('a digit')], 29, view, 4, 72)
//
// From this call to `format`, the following multi-line string will be
// produced:
//
// Parse error at (line 1, column 37):
//
//     Onomatopoeia                คำเลียนเสียง
//                                     ^
// Expected a digit
//
export function format(errors, index, view, tabSize, maxWidth) {
  const { start, end, lineno } = getLineIndexes(index, view)
  const charIndex = getCharIndex(index, view, start)

  const rawLine = viewToString(start, end - start + 1, view)
  const { colIndex, line } = tabify(charIndex, rawLine, tabSize)
  const { colno, length } = getColNumber(colIndex, line)

  const position = `Parse error at (line ${lineno}, column ${colno}):`
  const display = show(line, length, colno, maxWidth)
  const message = errors.find(error => error.type === ErrorType.Generic)
  const unexpected = errors.find(error => error.type === ErrorType.Unexpected)
  const expected = commaSeparate(
    errors.filter(error => error.type === ErrorType.Expected)
      .map(error => error.message),
  )

  const unexpMsg = unexpected ? `Unexpected ${unexpected.message}\n` : ''
  const expMsg = expected.length ? `Expected ${expected}\n` : ''
  const msgMsg = message ? `${message.message}\n` : ''

  return `${position}\n\n${display}\n${unexpMsg}${expMsg}${msgMsg}\n`
}

// #endregion

// Accepts a parser state and produces an error message from it.
//
// A default formatter (above) is provided but an alternate one can be
// passed in. The same goes for tab size (used to expand tabs in parsed
// text; defaults to 8) and max width (for the error message itself;
// defaults to 72).
export function formatErrors(
  state, tabSize = 8, maxWidth = 72, formatter = format,
) {
  const { errors, index, view } = state
  return formatter(errors, index, view, tabSize, maxWidth)
}
