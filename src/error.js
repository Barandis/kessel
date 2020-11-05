// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  charLength,
  commaSeparate,
  nextCharWidth,
  viewToString,
} from './util'

/** @typedef {import('./core.js').State} State */

const tab = /\t/gu
const zeroWidth = /(?:\p{Mn}|\p{Cf})/gu

/**
 * A symbol defining the type of an error.
 *
 * @enum {symbol}
 */
export const ErrorType = {
  /**
   * Error type representing an expected result.
   */
  Expected: Symbol('expected'),
  /**
   * Error type representing a result that was not expected.
   */
  Unexpected: Symbol('unexpected'),
  /**
   * Error type representing a generic error message.
   */
  Generic: Symbol('message'),
  /**
   * Error type representing some other kind of error message to be
   * displayed in a custom error formatter.
   */
  Other: Symbol('other'),
}

/**
 * An error generated when a parser fails.
 *
 * @typedef {Object} ParseError
 * @property {ErrorType} type The type of the parse error.
 * @property {string} message The error message.
 */

/**
 * Creates a new `ParseError`.
 *
 * @param {ErrorType} type The type of the parse error.
 * @param {string} message The error message.
 * @returns {ParseError} A new `ParseError` with the given type and
 *     message.
 */
export function makeError(type, message) {
  return { type, message }
}

/**
 * Creates an expected error. Multiple expected errors can be a part of
 * a single error message, and the default formatter will comma-separate
 * them and preface them with the word 'Expected'.
 *
 * @param {string} message The message describing what was expected.
 * @returns {ParseError} A new parse error of the expected type.
 */
export function makeExpected(message) {
  return makeError(ErrorType.Expected, message)
}

/**
 * Creates an unexpected error. The default formatter will display only
 * the first unexpected error, and it will be prefaced with
 * 'Unexpected'.
 *
 * @param {string} message The message describing what was found but was
 *     not expected.
 * @returns {ParseError} A new parse error of the unexpected type.
 */
export function makeUnexpected(message) {
  return makeError(ErrorType.Unexpected, message)
}

/**
 * Creates a generic error. The default formatter will display only
 * the first generic error, below the other errors, and it will be
 * unprefaced.
 *
 * @param {string} message The generic error's message.
 * @returns {ParseError} A new parse error of the generic type.
 */
export function makeGeneric(message) {
  return makeError(ErrorType.Generic, message)
}

/**
 * Creates an other error. These errors are not displayed by the default
 * formatter at all and are only useful for custom formatters.
 *
 * @param {string} message The other error's message.
 * @returns {ParseError} A new parse error of the other type.
 */
export function makeOther(message) {
  return makeError(ErrorType.Other, message)
}

/**
 * Adds one or more parse errors to an array of errors.
 *
 * @param {ParseError[]} list The array of errors to add to.
 * @param {...ParseError} errors The error(s) to be pushed onto the end
 *     of the array.
 * @returns {ParseError[]} A new array that is a shallow copy of `list`
 *     with the elements of `errors` added to the end.
 */
export function push(list, ...errors) {
  return [...list, ...errors]
}

// Clears all errors of a particular type from a list of errors. If
// `type` is not provided, all errors will be cleared. Multiple types
// can be provided.
/**
 * Clears all errors of a particular type from a list of errors. If no
 * `types` are provided, all errors will be cleared.
 *
 * @param {ParseError[]} list The array of errors to clear from.
 * @param {...ErrorType} types The error types to be removed from the
 *     array. If no types are provided, all errors will be removed.
 * @returns {ParseError[]} A shallow copy of `list` with all errors of
 *     the provided type(s) removed.
 */
export function clear(list, ...types) {
  if (types.length === 0) return []
  return list.filter(error => !types.includes(error.type))
}

/**
 * Clears all errors from an array of errors that are of the same error
 * type as any of the provided errors, and then adds those errors to the
 * end of the array.
 *
 * @param {ParseError[]} list The array of errors to overwrite to.
 * @param {...ParseError} errors The error(s) to be pushed onto the end
 *     of the array, after all errors of those types are removed.
 * @returns {ParseError[]} A new array that is a shallow copy of `list`
 *     with the elements of `errors` replacing those of the same type
 *     from the original array.
 */
export function overwrite(list, ...errors) {
  const types = errors.map(error => error.type)
  const result = list.filter(error => !types.includes(error.type))
  return [...result, ...errors]
}

// #region Formatting utility functions

// #region Typedefs for object return types

/**
 * Object containing information about the evaluation of a byte to see
 * if it is (or starts) a newline.
 *
 * @typedef {object} NewlineInfo
 * @property {boolean} newline Indicates whether the scanned byte was
 *     either a newline or the beginning of a multi-byte newline.
 * @property {number} skip The number of bytes that the next character
 *     contains. This is returned accurately whether or not that
 *     character is a newline.
 */

/**
 * Object containing information about the start and end indexes of a
 * line within a data view, as well as the number of that line.
 *
 * @typedef {object} LineIndexInfo
 * @property {number} start The index within the data view of the first
 *     byte of the first character in a line. This is always the first
 *     byte of the data view itself, or the first byte after a newline
 *     character.
 * @property {number} end The index within the data view of the last
 *     byte of the last character in a line. This is either the last
 *     byte in the data view or the byte immediately preceding the first
 *     byte of a newline character.
 * @property {number} lineno The line number of the line bounded by
 *     indexes `start` and `end`. This number is 1-based, as it is used
 *     for display of an error position in the final error message.
 */

/**
 * Object containing the adjusted line and column index that results
 * from tab expansion.
 *
 * @typedef {object} TabbedLineInfo
 * @property {string} line The string of text representing one line,
 *     with tab characters replaced by the appropriate number of spaces.
 * @property {number} colIndex The character index passed into the
 *     function, adjusted by the difference in width between tabs and
 *     the spaces used to replace them.
 */

/**
 * Object contaning information about the adjusted column index and line
 * length after accounting for zero-width characters.
 *
 * @typedef {object} ColIndexInfo
 * @property {number} colno The adjusted column number of the character
 *     pointed to by the `charIndex` parameter. This is adjusted by any
 *     zero-width characters that may appear in the line and is turned
 *     into a 1-based number for display in the error message.
 * @property {number} length The length of the line, adjusted for
 *     zero-width characters. This is returned solely to be passed into
 *     other functions who then won't have to recalculate the width of
 *     the line accounting for those same zero-width characters.
 */

/**
 * A function called by `formatErrors` to do the actual formatting. A
 * default formatter function is provided but can be replaced if
 * desired.
 *
 * @callback Formatter
 * @param {ParseError[]} errors The errors being used to generate the
 *     error message.
 * @param {number} index The index within `view` of the byte where the
 *     error occurred.
 * @param {DataView} view The data view containing the input text.
 * @param {number} tabSize A number whose multiples define where tabs
 *     stop.
 * @param {number} maxWidth The maximum display width of the line where
 *     the error occurred. If the line is longer than this, it will be
 *     truncated with ellipses before and/or after.
 * @returns {string} A multi-line formatted error message.
 */

// #endregion

/**
 * Determines whether the character at the given index in the supplied
 * view is a newline. An object with two properties is returned;
 * `newline` is a boolean that indicates whether that character is a
 * newline; `skip` is the width of the character (and therefore how many
 * bytes to skip until the next character to check).
 *
 * All Unicode newlines (CR, LF, FF, VT, NEL, LS, and PS) are handled,
 * along with the multi-character newline CR+LF.
 *
 * @param {number} index The index into `view` indicating the byte to
 *     check to see if it's a newline.
 * @param {DataView} view The data view containing the input text.
 * @returns {NewlineInfo} Newline information about the indexed byte.
 */
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

/**
 * Calculates the starting and ending indexes of the line in the given
 * view that contains the byte pointed at by `index`. It does this by
 * determining where newlines are and then figuring out which ones come
 * closest before and after the index. The number of newlines that came
 * before the index (and therefore the line number of the line with the
 * index) is also counted.
 *
 * Returns an object with three properties: `start` is the index of the
 * first byte of the line, `end` is the index of the last byte of the
 * line (not counting the newline), and `lineno` is the line number
 * where the index appears. `lineno` is 1-indexed since it is meant for
 * display in the final error message.
 *
 * @param {number} index The index of the byte in `view` whose line
 *     index information is being determined.
 * @param {DataView} view The data view containing the input text.
 * @returns {LineIndexInfo} Information about the starting and ending
 *     indexes of the line containing the byte pointed to by `index`.
 */
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

/**
 * Calculates the character index (as opposed to byte index) within a
 * single line of text of the character pointed to by `index` within
 * `view`. The `start` parameter sets the first byte of a "line" within
 * the view and can be calculated with {@link getLineIndexes} above.
 *
 * In lines with only single-byte characters, the character index will
 * always be the same as `index - start`. The purpose of this function
 * is to adjust when multi-byte characters are present.
 *
 * @param {number} index The index of the byte in `view` whose character
 *     index is being determined.
 * @param {DataView} view The data view containing the input text.
 * @param {number} start The index of the first byte of the line
 *     containing the byte pointed to by `index`.
 * @returns {number} The index, within a single line of text, of the
 *     character whose first byte is being pointed to by `index`.
 */
export function getCharIndex(index, view, start) {
  let charIndex = 0
  let byteIndex = start
  while (byteIndex < index && byteIndex < view.byteLength) {
    byteIndex += nextCharWidth(byteIndex, view)
    charIndex++
  }
  return charIndex
}

/**
 * Expands tabs into spaces and calculates the column index of the
 * indexed character adjusting for those spaces. The number of spaces in
 * each tab can be specified with `tabSize`.
 *
 * The return value is an object with two properties: `line` is the
 * input line with tabs expanded into spaces, and `colIndex` is the
 * index of the column that has the character pointed at by the
 * character index.
 *
 * @param {number} charIndex The index of the character being pointed at
 *     within the line.
 * @param {string} line The line of text being tabified.
 * @param {number} tabSize The maximum number of spaces that can replace
 *     a tab. Note that tabs are treated as stops; they will be of
 *     varying sizes that results in them always ending at a column that
 *     is a multiple of `tabSize`.
 * @returns {TabbedLineInfo} Information about the line after replacing
 *     tabs with spaces.
 */
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

/**
 * Calculates the final column number of the character being pointed to
 * by the column index. This column number is 1-based (for display, the
 * same as the line number from `getLineIndexes`) and is adjusted for
 * zero-width characters such as formatting characters and non-spacing
 * marks.
 *
 * The return value is an object of two propeties: `colno` is the
 * 1-indexed column number, and `length` is the length of the line
 * adjusting for zero-width characters. The latter is provided so it
 * doesn't have to be recalculated by `show`.
 *
 * @param {number} colIndex The index of the column within the line
 *     containing the character being pointed at.
 * @param {string} line The line of text potentially containing
 *     zero-width characters to account for.
 * @returns {ColIndexInfo} Information about the adjusted line.
 */
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

/**
 * Generates a string containing one line that is the text at and around
 * the column to be displayed, and one line that is a caret pointing to
 * that particular column.
 *
 * This function adds ellipses as needed to the front and/or the back of
 * the line in order to get the column into the visible area, based on
 * the `maxWidth` of the line to display. The `length` parameter is the
 * `length` returned by `getColNumber` and is here just to avoid having
 * to recalculate it in this function when it already needed to be
 * calculated in the other.
 *
 * @param {string} line The line of text being formatted.
 * @param {number} length The length of the line, adjusted for tabs and
 *     zero-width characters.
 * @param {number} colno The column number where the caret should point.
 * @param {number} maxWidth The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @returns {string} The potentially truncated line of text, followed by
 *     another line containing a caret pointing at the designated
 *     column.
 */
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

/**
 * The default formatter for error messages.
 *
 * This function returns a string that has the following parts:
 *
 * 1. A position line that gives the line number and column number where
 *    the error occurred.
 * 2. A visual representation of the error location. This part generates
 *    two lines in the error message. The first is either the entire
 *    input line or, if that's too long, a portion of the input line
 *    started and/or ended with ellipses that contains the error
 *    location. The second is a caret positioned underneath the location
 *    in the first line that shows exactly where the error occurred.
 * 3. The first unexpected error message, if any.
 * 4. All of the expected error messages (if any), separated by 'or' and
 *    commmas as appropriate for the number of messages.
 * 5. The first of the generic messages, if any.
 *
 * The position of the error is indicated by the `index` parameter,
 * which is the index within the array of bytes in `view` where the
 * error occurred. The calculation of line and column number from this
 * flat array of bytes takes the following into account:
 *
 * * Multi-byte characters (everything is UTF-8 aware, so characters can
 *   be 1, 2, 3, or 4 bytes long)
 * * Multi-character and single-character multi-byte line endings
 * * Tabs, which are expanded into a number of spaces set by the
 *   `tabSize` parameter
 * * Zero-width characters, such as zero-width spaces and joiners, RTL
 *   or LTR formatting characters, and diacritics (Hebrew or Thai vowel
 *   marks, umlauts over Latin characters, etc.)
 *
 * The output is a single string that contains the 5 elements above.
 *
 * ### Example
 *
 * The following two lines of code uses `stringToView`, an internal
 * utility function that, as its name suggests, turns a string into a
 * UTF-8 data view. It's called by `parse` itself, so in real world
 * usage, it's not necessary to know.
 *
 * ```
 * const view = stringToView('\tOnomatopoeia\t\t\t\tคำเลียนเสียง')
 * const message = format([expected('a digit')], 29, view, 4, 72)
 * ```
 *
 * From this call to `format`, the following multi-line string will be
 * produced:
 *
 * ```
 * Parse error at (line 1, column 37):
 *
 *     Onomatopoeia                คำเลียนเสียง
 *                                     ^
 * Expected a digit
 * ```
 */
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

/**
 * Accepts a parser state and produces an error message from it.
 *
 * A default formatter is provided but an alternate one can be passed
 * in. The same goes for tab size (used to expand tabs in parsed text;
 * defaults to 8) and max width (for the error message itself; defaults
 * to 72).
 *
 * @param {State} state The parser's state when the error happened.
 * @param {number} [tabSize=8] A number whose multiples define where
 *     tabs stop.
 * @param {number} [maxWidth=72] The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {Formatter} [formatter=format] The function to which the
 *     actual formatting is delegated.
 */
export function formatErrors(
  state, tabSize = 8, maxWidth = 72, formatter = format,
) {
  const { errors, index, view } = state
  return formatter(errors, index, view, tabSize, maxWidth)
}
