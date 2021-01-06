// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { attemptM, sequenceB } from 'kessel/combinators/backtracking'
import { seq } from 'kessel/combinators/sequence'
import { context, parse, Status } from 'kessel/core'
import {
  expected,
  format,
  formatErrors,
  generic,
  getCharIndex,
  getColNumber,
  getLineIndexes,
  getPosition,
  isNewline,
  merge,
  other,
  show,
  tabify,
  unexpected,
} from 'kessel/error'
import { char } from 'kessel/parsers/char'
import { commaSeparate, stringToView } from 'kessel/util'

describe('Parse errors', () => {
  describe('error message formatting', () => {
    describe('isNewLine', () => {
      const view = stringToView('\n\v\f\r\r\n\u0085\u2028\u2029OЗค𝑂')

      it('detects single-byte newlines', () => {
        expect(isNewline(0, view)).to.deep.equal({ newline: true, skip: 1 })
        expect(isNewline(1, view)).to.deep.equal({ newline: true, skip: 1 })
        expect(isNewline(2, view)).to.deep.equal({ newline: true, skip: 1 })
        expect(isNewline(3, view)).to.deep.equal({ newline: true, skip: 1 })
      })
      it('detects multi-character newlines', () => {
        expect(isNewline(4, view)).to.deep.equal({ newline: true, skip: 2 })
      })
      it('detects two-byte newlines', () => {
        expect(isNewline(6, view)).to.deep.equal({ newline: true, skip: 2 })
      })
      it('detects three-byte newlines', () => {
        expect(isNewline(8, view)).to.deep.equal({ newline: true, skip: 3 })
        expect(isNewline(11, view)).to.deep.equal({ newline: true, skip: 3 })
      })
      it('detects non-newlines', () => {
        expect(isNewline(14, view)).to.deep.equal({ newline: false, skip: 1 })
        expect(isNewline(15, view)).to.deep.equal({ newline: false, skip: 2 })
        expect(isNewline(17, view)).to.deep.equal({ newline: false, skip: 3 })
        expect(isNewline(20, view)).to.deep.equal({ newline: false, skip: 4 })
      })
      it('skips double-character detection at EOF', () => {
        const view = stringToView('\r')
        expect(isNewline(0, view)).to.deep.equal({ newline: true, skip: 1 })
      })
      it('detects non-newlines if EOF reached mid-character', () => {
        const view2 = new DataView(Uint8Array.from([0xc2]).buffer)
        expect(isNewline(0, view2)).to.deep.equal({ newline: false, skip: 2 })
        const view3 = new DataView(Uint8Array.from([0xe2, 0x80]).buffer)
        expect(isNewline(0, view3)).to.deep.equal({ newline: false, skip: 3 })
      })
    })

    describe('getLineIndexes', () => {
      describe('single-byte newlines', () => {
        const view = stringToView('Lorem ipsum dolor sit amet,\n'
        + 'consectetur adipiscing elit.\n'
        + 'Sed consequat luctus blandit.\n'
        + 'Etiam lacinia eu erat ac tincidunt.')

        it('calculates first-line indexes', () => {
          expect(getLineIndexes(6, view)).to.deep.equal({
            start: 0,
            end: 26,
            lineno: 1,
          })
        })
        it('calculates second-line indexes', () => {
          expect(getLineIndexes(33, view)).to.deep.equal({
            start: 28,
            end: 55,
            lineno: 2,
          })
        })
        it('calculates third-line indexes', () => {
          expect(getLineIndexes(60, view)).to.deep.equal({
            start: 57,
            end: 85,
            lineno: 3,
          })
        })
        it('calculates final-line indexes', () => {
          expect(getLineIndexes(95, view)).to.deep.equal({
            start: 87,
            end: 121,
            lineno: 4,
          })
        })
        it('accounts for indexes to newlines', () => {
          expect(getLineIndexes(56, view)).to.deep.equal({
            start: 28,
            end: 55,
            lineno: 2,
          })
        })
        it('changes lines at the right time', () => {
          expect(getLineIndexes(57, view)).to.deep.equal({
            start: 57,
            end: 85,
            lineno: 3,
          })
        })
        it('accounts for indexes to EOFs', () => {
          expect(getLineIndexes(122, view)).to.deep.equal({
            start: 87,
            end: 121,
            lineno: 4,
          })
        })
      })

      describe('two-character newlines', () => {
        const view = stringToView('Lorem ipsum dolor sit amet,\r\n'
        + 'consectetur adipiscing elit.\r\n'
        + 'Sed consequat luctus blandit.\r\n'
        + 'Etiam lacinia eu erat ac tincidunt.')

        it('calculates first-line indexes', () => {
          expect(getLineIndexes(6, view)).to.deep.equal({
            start: 0,
            end: 26,
            lineno: 1,
          })
        })
        it('calculates second-line indexes', () => {
          expect(getLineIndexes(33, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('calculates third-line indexes', () => {
          expect(getLineIndexes(60, view)).to.deep.equal({
            start: 59,
            end: 87,
            lineno: 3,
          })
        })
        it('calculates final-line indexes', () => {
          expect(getLineIndexes(95, view)).to.deep.equal({
            start: 90,
            end: 124,
            lineno: 4,
          })
        })
        it('accounts for indexes to newlines', () => {
          expect(getLineIndexes(57, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('accounts for indexes to newlines (second character)', () => {
          expect(getLineIndexes(58, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('changes lines at the right time', () => {
          expect(getLineIndexes(59, view)).to.deep.equal({
            start: 59,
            end: 87,
            lineno: 3,
          })
        })
        it('accounts for indexes to EOFs', () => {
          expect(getLineIndexes(125, view)).to.deep.equal({
            start: 90,
            end: 124,
            lineno: 4,
          })
        })
      })

      describe('two-byte newlines', () => {
        const view = stringToView('Lorem ipsum dolor sit amet,\u0085'
        + 'consectetur adipiscing elit.\u0085'
        + 'Sed consequat luctus blandit.\u0085'
        + 'Etiam lacinia eu erat ac tincidunt.')

        it('calculates first-line indexes', () => {
          expect(getLineIndexes(6, view)).to.deep.equal({
            start: 0,
            end: 26,
            lineno: 1,
          })
        })
        it('calculates second-line indexes', () => {
          expect(getLineIndexes(33, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('calculates third-line indexes', () => {
          expect(getLineIndexes(60, view)).to.deep.equal({
            start: 59,
            end: 87,
            lineno: 3,
          })
        })
        it('calculates final-line indexes', () => {
          expect(getLineIndexes(95, view)).to.deep.equal({
            start: 90,
            end: 124,
            lineno: 4,
          })
        })
        it('accounts for indexes to newlines', () => {
          expect(getLineIndexes(57, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('accounts for indexes to newlines (second character)', () => {
          expect(getLineIndexes(58, view)).to.deep.equal({
            start: 29,
            end: 56,
            lineno: 2,
          })
        })
        it('changes lines at the right time', () => {
          expect(getLineIndexes(59, view)).to.deep.equal({
            start: 59,
            end: 87,
            lineno: 3,
          })
        })
        it('accounts for indexes to EOFs', () => {
          expect(getLineIndexes(125, view)).to.deep.equal({
            start: 90,
            end: 124,
            lineno: 4,
          })
        })
      })

      describe('three-byte newlines', () => {
        const view = stringToView('Lorem ipsum dolor sit amet,\u2028'
        + 'consectetur adipiscing elit.\u2028'
        + 'Sed consequat luctus blandit.\u2028'
        + 'Etiam lacinia eu erat ac tincidunt.')

        it('calculates first-line indexes', () => {
          expect(getLineIndexes(6, view)).to.deep.equal({
            start: 0,
            end: 26,
            lineno: 1,
          })
        })
        it('calculates second-line indexes', () => {
          expect(getLineIndexes(33, view)).to.deep.equal({
            start: 30,
            end: 57,
            lineno: 2,
          })
        })
        it('calculates third-line indexes', () => {
          expect(getLineIndexes(65, view)).to.deep.equal({
            start: 61,
            end: 89,
            lineno: 3,
          })
        })
        it('calculates final-line indexes', () => {
          expect(getLineIndexes(95, view)).to.deep.equal({
            start: 93,
            end: 127,
            lineno: 4,
          })
        })
        it('accounts for indexes to newlines', () => {
          expect(getLineIndexes(58, view)).to.deep.equal({
            start: 30,
            end: 57,
            lineno: 2,
          })
        })
        it('accounts for indexes to newlines (second byte)', () => {
          expect(getLineIndexes(59, view)).to.deep.equal({
            start: 30,
            end: 57,
            lineno: 2,
          })
        })
        it('accounts for indexes to newlines (third byte)', () => {
          expect(getLineIndexes(60, view)).to.deep.equal({
            start: 30,
            end: 57,
            lineno: 2,
          })
        })
        it('changes lines at the right time', () => {
          expect(getLineIndexes(61, view)).to.deep.equal({
            start: 61,
            end: 89,
            lineno: 3,
          })
        })
        it('accounts for indexes to EOFs', () => {
          expect(getLineIndexes(128, view)).to.deep.equal({
            start: 93,
            end: 127,
            lineno: 4,
          })
        })
      })
    })

    describe('getCharIndex', () => {
      describe('1-byte characters', () => {
        const line = stringToView('Onomatopoeia')

        it('calculates char index for an index within a line', () => {
          expect(getCharIndex(4, line, 0)).to.equal(4)
        })
        it('calculates char index for an index at the start of a line', () => {
          expect(getCharIndex(0, line, 0)).to.equal(0)
        })
        it('calculates char index for an index at the end of a line', () => {
          expect(getCharIndex(11, line, 0)).to.equal(11)
        })
        it('calculates char index for an index after a line', () => {
          expect(getCharIndex(12, line, 0)).to.equal(12)
          expect(getCharIndex(13, line, 0)).to.equal(12)
        })
      })

      describe('2-byte characters', () => {
        const line = stringToView('Звукоподражание')

        it('calculates char index for an index within a line', () => {
          expect(getCharIndex(4, line, 0)).to.equal(2)
        })
        it('calculates char index for an index at the start of a line', () => {
          expect(getCharIndex(0, line, 0)).to.equal(0)
        })
        it('calculates char index for an index at the end of a line', () => {
          expect(getCharIndex(28, line, 0)).to.equal(14)
        })
        it('calculates char index for an index after a line', () => {
          expect(getCharIndex(30, line, 0)).to.equal(15)
          expect(getCharIndex(31, line, 0)).to.equal(15)
        })
      })

      describe('3-byte characters', () => {
        const line = stringToView('คำเลียนเสียง')

        it('calculates char index for an index within a line', () => {
          expect(getCharIndex(6, line, 0)).to.equal(2)
        })
        it('calculates char index for an index at the start of a line', () => {
          expect(getCharIndex(0, line, 0)).to.equal(0)
        })
        it('calculates char index for an index at the end of a line', () => {
          expect(getCharIndex(33, line, 0)).to.equal(11)
        })
        it('calculates char index for an index after a line', () => {
          expect(getCharIndex(36, line, 0)).to.equal(12)
          expect(getCharIndex(37, line, 0)).to.equal(12)
        })
      })

      describe('4-byte characters', () => {
        const line = stringToView('𝑂𝑛𝑜𝑚𝑎𝑡𝑜𝑝𝑜𝑒𝑖𝑎')

        it('calculates char index for an index within a line', () => {
          expect(getCharIndex(8, line, 0)).to.equal(2)
        })
        it('calculates char index for an index at the start of a line', () => {
          expect(getCharIndex(0, line, 0)).to.equal(0)
        })
        it('calculates char index for an index at the end of a line', () => {
          expect(getCharIndex(44, line, 0)).to.equal(11)
        })
        it('calculates char index for an index after a line', () => {
          expect(getCharIndex(48, line, 0)).to.equal(12)
          expect(getCharIndex(49, line, 0)).to.equal(12)
        })
      })

      describe('mixed-width characters', () => {
        const line = stringToView('Oвเ𝑚𝑎นпp')

        it('calculates char index for an index within a line', () => {
          expect(getCharIndex(0, line, 0)).to.equal(0)
          expect(getCharIndex(1, line, 0)).to.equal(1)
          expect(getCharIndex(3, line, 0)).to.equal(2)
          expect(getCharIndex(6, line, 0)).to.equal(3)
          expect(getCharIndex(10, line, 0)).to.equal(4)
          expect(getCharIndex(14, line, 0)).to.equal(5)
          expect(getCharIndex(17, line, 0)).to.equal(6)
          expect(getCharIndex(19, line, 0)).to.equal(7)
        })
        it('calculatres char index for an index after a line', () => {
          expect(getCharIndex(20, line, 0)).to.equal(8)
          expect(getCharIndex(21, line, 0)).to.equal(8)
        })
      })
    })

    describe('tabify', () => {
      const line = '\tOnoma\ttop\toeia\t'

      it('returns a tabified string with char index adjusted', () => {
        const expected = '        Onoma   top     oeia    '
        expect(tabify(1, line, 8)).to.deep.equal({
          line: expected, colIndex: 8,
        })
        expect(tabify(8, line, 8)).to.deep.equal({
          line: expected, colIndex: 17,
        })
        expect(tabify(12, line, 8)).to.deep.equal({
          line: expected, colIndex: 25,
        })
      })
      it('correctly adjusts indexes of tab characters themselves', () => {
        expect(tabify(0, line, 8).colIndex).to.equal(0)
        expect(tabify(6, line, 8).colIndex).to.equal(13)
        expect(tabify(10, line, 8).colIndex).to.equal(19)
        expect(tabify(15, line, 8).colIndex).to.equal(28)
      })
      it('correctly adjusts indexes from after the line', () => {
        expect(tabify(16, line, 8).colIndex).to.equal(32)
      })
      it('works for different tab sizes', () => {
        const expected = '    Onoma   top oeia    '
        expect(tabify(1, line, 4)).to.deep.equal({
          line: expected, colIndex: 4,
        })
        expect(tabify(8, line, 4)).to.deep.equal({
          line: expected, colIndex: 13,
        })
        expect(tabify(12, line, 4)).to.deep.equal({
          line: expected, colIndex: 17,
        })
      })
    })

    describe('getColNumber', () => {
      it('changes nothing in lines with no nonspacing marks', () => {
        const text = 'Onomatopoeia'
        expect(getColNumber(5, text)).to.deep.equal({ colno: 6, length: 12 })
      })
      it('adjusts index and length for nonspacing marks', () => {
        const text = 'คำเลียนเสียง'
        expect(getColNumber(0, text)).to.deep.equal({ colno: 1, length: 10 })
        expect(getColNumber(2, text)).to.deep.equal({ colno: 3, length: 10 })
        expect(getColNumber(5, text)).to.deep.equal({ colno: 5, length: 10 })
        expect(getColNumber(11, text)).to.deep.equal({ colno: 10, length: 10 })
      })
    })

    describe('show', () => {
      it('displays index location on a line shorter than max', () => {
        const line = 'Lorem ipsum dolor sit amet'
        const expected = 'Lorem ipsum dolor sit amet\n'
                       + '            ^'
        expect(show(line, 26, 13, 72)).to.equal(expected)
      })
      it('displays early index location on a line longer than max', () => {
        const line = 'Lorem ipsum dolor sit amet, '
          + 'consectetur adipiscing elit. '
          + 'Sed consequat luctus blandit. '
          + 'Etiam lacinia eu erat ac tincidunt.'
        const expected = 'Lorem ipsum dolor sit amet, '
          + 'consectetur adipiscing elit. Sed consequa...\n'
          + '            ^'
        expect(show(line, 122, 13, 72)).to.equal(expected)
      })
      it('displays late index location on a line longer than max', () => {
        const line = 'Lorem ipsum dolor sit amet, '
          + 'consectetur adipiscing elit. '
          + 'Sed consequat luctus blandit. '
          + 'Etiam lacinia eu erat ac tincidunt.'
        const expected = '...it. Sed consequat luctus blandit. '
          + 'Etiam lacinia eu erat ac tincidunt.\n'
          + '                                     ^'
        expect(show(line, 122, 88, 72)).to.equal(expected)
      })
      it('displays mid index location on a line longer than twice max', () => {
        const line = 'Lorem ipsum dolor sit amet, '
          + 'consectetur adipiscing elit. '
          + 'Sed consequat luctus blandit. '
          + 'Etiam lacinia eu erat ac tincidunt. '
          + 'Cras et mollis mi, vitae sodales nunc. '
          + 'Ut viverra quam quis enim posuere malesuada.'
        const expected = '...t. Sed consequat luctus blandit. '
          + 'Etiam lacinia eu erat ac tincidun...\n'
          + '                                    ^'
        expect(show(line, 206, 88, 72)).to.equal(expected)
      })
    })

    describe('commaSeparate', () => {
      it('returns an empty string for 0 elements', () => {
        expect(commaSeparate([])).to.equal('')
      })
      it('returns the element for 1 element', () => {
        expect(commaSeparate(['test a'])).to.equal('test a')
      })
      it('separates two elements with "or"', () => {
        expect(commaSeparate(['test a', 'test b'])).to.equal('test a or test b')
      })
      it('separates 3 or more elements with commas and a final "or"', () => {
        const input = ['test a', 'test b', 'test c', 'test d']
        const expected = 'test a, test b, test c, or test d'
        expect(commaSeparate(input)).to.equal(expected)
      })
    })

    describe('format', () => {
      const expecteds = merge(merge(
        expected('a letter'),
        expected('a digit'),
      ),
      expected('whitespace'))
      const unexpecteds = merge(
        unexpected('end of input'), unexpected('"a"'),
      )
      const generics = generic('Test message')
      const others = other('Other message')
      const view = stringToView(
        '\tOnomatopoeia\t\t\t\tคำเลียนเสียง\nЗвукоподражание',
      )

      it('formats an expected in a line 2 message', () => {
        const exp = 'Parse error at (line 2, column 3):\n\n'
                  + 'Звукоподражание\n'
                  + '  ^\n'
                  + 'Expected a letter\n\n'
        expect(format([expecteds[0]], 58, view, 8, 72)).to.equal(exp)
      })
      it('formats multiple expecteds in a line 2 message', () => {
        const exp = 'Parse error at (line 2, column 5):\n\n'
                  + 'Звукоподражание\n'
                  + '    ^\n'
                  + 'Expected a letter, a digit, or whitespace\n\n'
        expect(format(expecteds, 62, view, 8, 72)).to.equal(exp)
      })
      it('formats unexpecteds in a line 2 message', () => {
        const exp = 'Parse error at (line 2, column 16):\n\n'
                  + 'Звукоподражание\n'
                  + '               ^\n'
                  + 'Unexpected end of input\n'
                  + 'Note: failure occurred at the end of input\n\n'
        expect(format(unexpecteds, 84, view, 8, 72)).to.equal(exp)
      })
      it('formats messages in a line 2 message', () => {
        const exp = 'Parse error at (line 2, column 16):\n\n'
                  + 'Звукоподражание\n'
                  + '               ^\n'
                  + 'Test message\n'
                  + 'Note: failure occurred at the end of input\n\n'
        expect(format(generics, 84, view, 8, 72)).to.equal(exp)
      })
      it('formats all types of messages in a line 2 message', () => {
        const exp = 'Parse error at (line 2, column 16):\n\n'
                  + 'Звукоподражание\n'
                  + '               ^\n'
                  + 'Unexpected end of input\n'
                  + 'Expected a letter, a digit, or whitespace\n'
                  + 'Test message\n'
                  + 'Note: failure occurred at the end of input\n\n'
        expect(format([
          ...expecteds, ...unexpecteds, ...generics, ...others,
        ], 84, view, 8, 72)).to.equal(exp)
      })
      it('formats messages in a line 1 message', () => {
        const exp = 'Parse error at (line 1, column 13):\n\n'
          + '        Onomatopoeia                            คำเลียนเสียง\n'
          + '            ^\n'
          + 'Expected a letter, a digit, or whitespace\n\n'
        expect(format(expecteds, 5, view, 8, 72)).to.equal(exp)
      })
      it('formats messages in a line 1 message', () => {
        const exp = 'Parse error at (line 1, column 53):\n\n'
          + '        Onomatopoeia                            คำเลียนเสียง\n'
          + '                                                    ^\n'
          + 'Expected a letter, a digit, or whitespace\n\n'
        expect(format(expecteds, 29, view, 8, 72)).to.equal(exp)
      })
      it('formats an unknown message if there are no errors', () => {
        const exp = 'Parse error at (line 2, column 5):\n\n'
                  + 'Звукоподражание\n'
                  + '    ^\n'
                  + 'Unknown error(s)\n\n'
        expect(format([], 62, view, 8, 72)).to.equal(exp)
      })
      it('formats nested errors that come from backtracking', () => {
        const parser = sequenceB(char('t'), char('e'), char('s'), char('t'))
        const [state, result] = parse(parser, 'tesl')
        const exp = 'Parse error at (line 1, column 1):\n\n'
          + 'tesl\n'
          + '^\n\n'
          + 'The parser backtracked after:\n\n'
          + '  Parse error at (line 1, column 4):\n\n'
          + '  tesl\n'
          + '     ^\n'
          + '  Expected \'t\'\n\n'
        const errorMsg = format(result.errors, state.index, state.view, 8, 72)
        expect(errorMsg).to.equal(exp)
      })
      it('formats compound errors from backlabel', () => {
        const parser = attemptM(
          seq(char('t'), char('e'), char('s'), char('t')),
          "the word 'test'",
        )
        const [state, result] = parse(parser, 'tesl')
        const exp = 'Parse error at (line 1, column 1):\n\n'
          + 'tesl\n'
          + '^\n\n'
          + "the word 'test' could not be parsed because:\n\n"
          + '  Parse error at (line 1, column 4):\n\n'
          + '  tesl\n'
          + '     ^\n'
          + '  Expected \'t\'\n\n'
        const errorMsg = format(result.errors, state.index, state.view, 8, 72)
        expect(errorMsg).to.equal(exp)
      })
    })

    describe('formatErrors', () => {
      const input = '\t\tOnomatopoeia'
      const ctx = context(input)
      ctx.index = 4
      const result = {
        errors: expected('a digit'),
        status: Status.Fail,
      }
      const reply = [ctx, result]

      it('formats errors using default settings', () => {
        const exp = 'Parse error at (line 1, column 19):\n\n'
                  + '                Onomatopoeia\n'
                  + '                  ^\n'
                  + 'Expected a digit\n\n'
        expect(formatErrors(reply)).to.equal(exp)
      })
      it('formats errors using a custom tab size', () => {
        const exp = 'Parse error at (line 1, column 11):\n\n'
                  + '        Onomatopoeia\n'
                  + '          ^\n'
                  + 'Expected a digit\n\n'
        expect(formatErrors(reply, 4)).to.equal(exp)
      })
      it('formats errors using a custom line length', () => {
        const exp = 'Parse error at (line 1, column 11):\n\n'
                  + '        Onom...\n'
                  + '          ^\n'
                  + 'Expected a digit\n\n'
        expect(formatErrors(reply, 4, 15)).to.equal(exp)
      })
      it('formats errors using a custom formatting function', () => {
        const fn = (errors, index, view, tabSize = 8, maxWidth = 72) =>
          `${errors[0].label}\n${index}\n${
            view.byteLength
          }\n${tabSize}\n${maxWidth}`
        const exp = 'a digit\n4\n14\n8\n72'
        expect(
          formatErrors(reply, undefined, undefined, fn),
        ).to.equal(exp)
      })
    })
  })

  describe('getPosition', () => {
    const view = stringToView(
      '\tOnomatopoeia\t\t\t\tคำเลียนเสียง\nЗвукоподражание',
    )

    it('calculates the position with default tab stops', () => {
      expect(getPosition({ view, index: 58 })).to.deep.equal({
        line: 2, column: 3,
      })
      expect(getPosition({ view, index: 5 })).to.deep.equal({
        line: 1, column: 13,
      })
    })
    it('accounts for zero-with characters', () => {
      expect(getPosition({ view, index: 29 })).to.deep.equal({
        line: 1, column: 53,
      })
    })
    it('accounts for different tab stops', () => {
      expect(getPosition({ view, index: 5 }, 4)).to.deep.equal({
        line: 1, column: 9,
      })
    })
  })
})
