// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  between,
  both,
  chain,
  join,
  left,
  map,
  pipe,
  right,
  skip,
  value,
} from 'kessel/combinators/chaining'
import { many, many1, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { fail, pass } from 'test/helper'

describe('Chaining and piping combinators', () => {
  describe('chain', () => {
    it('passes successful result to function to get the next parser', () => {
      pass(chain(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      fail(chain(any, c => char(c)), 'ab', { expected: '"a"', actual: '"b"' })
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chain(char('a'), () => char('b')), 'bb', {
        expected: '"a"',
        actual: '"b"',
        index: 0,
        status: Status.Error,
      })
    })
    it('fails fatally if the second fails after the first consumes', () => {
      fail(chain(char('a'), () => char('b')), 'ac', {
        expected: '"b"',
        actual: '"c"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('map', () => {
    it('succeeds with the return value of its function', () => {
      pass(map(any, c => c.toUpperCase()), 'abc', 'A')
      pass(map(seq([letter, digit]), cs => cs.join('')), 'a1', 'a1')
    })
    it('propagates failed state if its parser fails', () => {
      fail(map(any, c => c.toUpperCase()), '', {
        expected: 'any character',
        actual: 'EOF',
        status: Status.Error,
      })
      fail(map(seq([letter, digit]), cs => cs.join('')), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        status: Status.Fatal,
        index: 1,
      })
    })
  })

  describe('join', () => {
    it('joins array elements together into a resulting string', () => {
      pass(join(many(any)), '123', '123')
      pass(join(map(many(any), x => x.map(c => parseInt(c)))), '123', '123')
    })
    it('fails if its contained parser fails', () => {
      fail(join(many1(any)), '', {
        expected: 'any character',
        actual: 'EOF',
        status: Status.Error,
      })
      fail(join(seq([letter, digit])), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        status: Status.Fatal,
      })
    })
  })

  describe('skip', () => {
    it('consumes input on success but does not result in a value', () => {
      pass(skip(many(letter)), 'abcdef123', { result: null, index: 6 })
    })
    it('passes failures through', () => {
      fail(skip(char('a')), 'b', '"b"')
    })
  })

  describe('value', () => {
    it('returns its constant when its parser succeeds', () => {
      pass(value(letter, '!'), 'a', '!')
      pass(value(digit, 10), '1', { result: 10 })
    })
    it('passes failures through', () => {
      fail(value(char('a'), '!'), 'b', '"b"')
    })
  })

  describe('left', () => {
    it('returns the result of its left parser if both pass', () => {
      pass(left(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(left(letter, digit), '1', {
        expected: 'a letter',
        actual: '"1"',
        status: Status.Error,
      })
      fail(left(eof, char('a')), '', {
        expected: '"a"',
        actual: 'EOF',
        status: Status.Error,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(left(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
      fail(left(letter, digit), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('right', () => {
    it('returns the result of its right parser if both pass', () => {
      pass(right(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(right(letter, digit), '1', {
        expected: 'a letter',
        actual: '"1"',
        status: Status.Error,
      })
      fail(right(eof, char('a')), '', {
        expected: '"a"',
        actual: 'EOF',
        status: Status.Error,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(right(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
      fail(right(letter, digit), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('both', () => {
    it('returns the result of both parsers if both pass', () => {
      pass(both(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(both(letter, digit), '1', {
        expected: 'a letter',
        actual: '"1"',
        status: Status.Error,
      })
      fail(both(eof, char('a')), '', {
        expected: '"a"',
        actual: 'EOF',
        status: Status.Error,
      })
    })
    it('fails fatally if any input is consumed on failure', () => {
      fail(both(seq([letter, letter]), digit), 'a11', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
      fail(both(letter, digit), 'ab', {
        expected: 'a digit',
        actual: '"b"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('pipe', () => {
    it('passes parser results to a single function', () => {
      pass(pipe([letter], a => a.toUpperCase()), 'a', 'A')
      pass(pipe([letter, digit], (a, b) => b + a), 'a1', '1a')
      pass(pipe([letter, digit, letter], (a, b, c) => c + b + a), 'a1b', 'b1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      fail(pipe([letter], a => a), '1', {
        expected: 'a letter',
        actual: '"1"',
        index: 0,
        status: Status.Error,
      })
      fail(pipe([eof, letter], (a, b) => b + a), '', {
        expected: 'a letter',
        actual: 'EOF',
        index: 0,
        status: Status.Error,
      })
    })
    it('fails fatally if input was consumed on failure', () => {
      fail(pipe([letter, digit], (a, b) => b + a), 'aa', {
        expected: 'a digit',
        actual: '"a"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('between', () => {
    const parser = between(char('('), char(')'), many(noneOf(')')))

    it('succeeds with the result of its content parser', () => {
      pass(parser, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      fail(parser, 'abc)', {
        expected: '"("',
        actual: '"a"',
        index: 0,
        status: Status.Error,
      })
    })
    it('fails fatally if content is consumed', () => {
      fail(parser, '(abc', {
        expected: '")"',
        actual: 'EOF',
        index: 4,
        status: Status.Fatal,
      })
      fail(between(char('('), char(')'), seq([letter, letter])), '(a)', {
        expected: 'a letter',
        actual: '")"',
        index: 2,
        status: Status.Fatal,
      })
    })
  })
})
