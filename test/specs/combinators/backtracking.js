// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { opt, peek } from 'kessel/combinators/alternative'
import {
  attempt,
  bapply,
  bbetween,
  bblock,
  bchain,
  bleft,
  buntil,
  bpipe,
  brepeat,
  bright,
  bseq,
} from 'kessel/combinators/backtracking'
import { value } from 'kessel/combinators/chaining'
import { left, many1, right, seq } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { any, char, digit, eof, letter, noneof } from 'kessel/parsers/char'
import { always } from 'kessel/parsers/misc'
import { space } from 'kessel/parsers/regex'
import { str } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Backtracking and error handling combinators', () => {
  describe('attempt', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        attempt(0),
        '',
        '[attempt]: expected argument to be a parser; found 0',
      )
      terror(
        attempt(0, 'test'),
        '',
        '[attempt]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        attempt(any(), 0),
        '',
        '[attempt]: expected second argument to be a string; found 0',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(attempt(char('a')), 'abc')
      const r3 = parse(attempt(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2).to.deep.equal(r3)
    })
    it('does nothing if its parser fails and no message is provided', () => {
      const r1 = parse(char('a'), 'bcd')
      const r2 = parse(attempt(char('a')), 'bcd')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the message if it exists and the parser fails', () => {
      tfail(attempt(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('resets the index if its parser fails with consuming input', () => {
      const parser = seq(str('te'), str('st'))
      tfail(parser, 'tesl', { index: 2, status: Fatal })
      tfail(attempt(parser), 'tesl', { index: 0, status: Fail })
    })
    it('creates a nested error if it fails while consuming input', () => {
      const parser = seq(str('te'), str('st'))
      const [ctx, result] = parse(attempt(parser), 'tesl')
      const error = result.errors[0]

      expect(error.type).to.equal(ErrorType.Nested)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(2)
      expect(error.errors[0].type).to.equal(ErrorType.Expected)
      expect(error.errors[0].label).to.equal("'st'")
    })
    it('adds a compound error if its parser fails while consuming', () => {
      const [ctx, result] = parse(
        attempt(seq(char('a'), char('b')), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Fail)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
    it('collapses the nested error from backtracking', () => {
      const [ctx, result] = parse(
        attempt(attempt(right(char('a'), char('b'))), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Fail)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
  })

  describe('bseq', () => {
    const parser = bseq(str('abc'), str('def'), str('ghi'))
    const parserm = bseq(
      str('abc'), str('def'), str('ghi'), 'abc,def,ghi',
    )

    it('throws if any of its arguments is not a parser', () => {
      terror(
        bseq(any(), 0),
        '',
        '[bseq]: expected second argument to be a parser; found 0',
      )
      terror(
        bseq(any(), letter(), digit(), {}),
        '',
        '[bseq]: expected fourth argument to be a parser; found {}',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', {
        expected: "'abc'",
        index: 0,
      })
      tfail(parser, 'abcdf', {
        nested: "'def'",
        index: 0,
        ctxindex: 3,
      })
      tfail(parser, 'abcdefh', {
        nested: "'ghi'",
        index: 0,
        ctxindex: 6,
      })
    })
    it('fails with a new message if the message is included', () => {
      tfail(parserm, 'abd', {
        expected: 'abc,def,ghi',
        index: 0,
      })
      tfail(parserm, 'abcdf', {
        compound: 'abc,def,ghi',
        index: 0,
        ctxindex: 3,
      })
      tfail(parserm, 'abcdefh', {
        compound: 'abc,def,ghi',
        index: 0,
        ctxindex: 6,
      })
    })
    it('succeeds if all of its parsers succeed', () => {
      tpass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
      tpass(parserm, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('adds null to results', () => {
      tpass(bseq(str('abc'), eof()), 'abc', {
        result: ['abc', null],
        index: 3,
      })
    })
    it('still fails fatally if any of its parsers does', () => {
      const parser = bseq(seq(letter(), digit()), letter(), digit())
      tfail(parser, 'aaa1', { expected: 'a digit', index: 1, status: Fatal })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = bseq(opt(char('+')), opt(char('-')), digit())
      tpass(parser, '+-1', ['+', '-', '1'])
      tpass(parser, '1', [null, null, '1'])
      tfail(parser, 'a', "'+', '-', or a digit")
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = bseq(opt(char('-')), digit(), digit())
      tpass(parser, '-12', ['-', '1', '2'])
      tpass(parser, '12', [null, '1', '2'])
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('bchain', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        bchain(0, x => x),
        '',
        '[bchain]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        bchain(any(), 0),
        '',
        '[bchain]: expected second argument to be a function; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        bchain(any(), x => x, 0),
        '',
        '[bchain]: expected third argument to be a string; found 0',
      )
    })
    it('throws if the function does not return a parser', () => {
      terror(
        bchain(any(), x => x),
        'abc',
        '[bchain]: expected second argument to return a parser; found "a"',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      tpass(bchain(any(), c => char(c)), 'aa', { result: 'a', index: 2 })
      tpass(bchain(any(), c => char(c), 'test'), 'aa', {
        result: 'a',
        index: 2,
      })
    })
    it('fails if its parser fails without calling the second parser', () => {
      tfail(bchain(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Fail,
      })
      tfail(bchain(char('a'), () => char('b'), 'a then b'), 'bb', {
        expected: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails when the second fails without the first consuming', () => {
      tfail(bchain(peek(char('a')), () => char('b')), 'a', {
        expected: "'b'",
        index: 0,
        status: Fail,
      })
      tfail(bchain(peek(char('a')), () => char('b'), 'a then b'), 'a', {
        expected: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if the second fails after the first consumes', () => {
      tfail(bchain(char('a'), () => char('b')), 'ac', {
        nested: "'b'",
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(bchain(char('a'), () => char('b'), 'a then b'), 'ac', {
        compound: 'a then b',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(bchain(seq(letter(), digit()), () => letter()), 'aaa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(bchain(
        seq(letter(), digit()), () => letter(), '\\w\\d\\w',
      ), 'aaa', {
        expected: '\\w\\d\\w',
        index: 1,
        status: Fatal,
      })
      tfail(bchain(letter(), c => seq(char(c), char(c))), 'aab', {
        expected: "'a'",
        index: 2,
        status: Fatal,
      })
      tfail(bchain(letter(), c => seq(char(c), char(c)), 'letter, cc'), 'aab', {
        expected: 'letter, cc',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = bchain(opt(char('-')), () => digit())
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('bapply', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        bapply(0, any()),
        '',
        '[bapply]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        bapply(any(), 0),
        '',
        '[bapply]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        bapply(any(), any(), 0),
        '',
        '[bapply]: expected third argument to be a string; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      terror(
        bapply(any(), any()),
        'ab',
        '[bapply]: expected second argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      tpass(bapply(any(), always(x => x.toUpperCase())), 'a', 'A')
      tpass(bapply(any(), always(x => x.toUpperCase()), 'test'), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      tfail(bapply(char('a'), any()), 'b', { expected: "'a'", status: Fail })
      tfail(bapply(char('a'), any(), "'a' and a character"), 'b', {
        expected: "'a' and a character",
        status: Fail,
      })
    })
    it('backtracks if input is consumed before failure', () => {
      tfail(bapply(char('a'), char('b')), 'ac', {
        nested: "'b'",
        index: 0,
        status: Fail,
      })
      tfail(bapply(char('a'), char('b'), 'a then b'), 'ac', {
        compound: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(bapply(left(letter(), letter()), char('b')), 'a1b', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(bapply(left(letter(), letter()), char('b'), '\\w\\wb'), 'a1b', {
        expected: '\\w\\wb',
        index: 1,
        status: Fatal,
      })
      tfail(bapply(char('a'), left(letter(), letter())), 'ab1', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(bapply(char('a'), left(letter(), letter()), 'a\\w\\w'), 'ab1', {
        expected: 'a\\w\\w',
        index: 2,
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Applicative style for `andThenB(char('a'), char('b'))`
      const p = bapply(char('a'), bapply(char('b'), always(b => a => [a, b])))
      tpass(p, 'ab', ['a', 'b'])
      tfail(p, 'cd', { expected: "'a'", status: Fail })
      tfail(p, 'ac', { nested: "'b'", status: Fail })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = bapply(opt(char('-')), value(digit(), x => x))
      tpass(parser, '-1', '-')
      tpass(parser, '1', { value: null })
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('bleft', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        bleft(0, any()),
        '',
        '[bleft]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        bleft(any(), 0),
        '',
        '[bleft]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        bleft(any(), any(), 0),
        '',
        '[bleft]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      tpass(bleft(letter(), digit()), 'a1', 'a')
      tpass(bleft(letter(), digit(), 'test'), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(bleft(letter(), digit()), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(bleft(letter(), digit(), 'letter then digit'), '1', {
        expected: 'letter then digit',
        status: Fail,
      })
      tfail(bleft(eof(), char('a')), '', { expected: "'a'", status: Fail })
      tfail(bleft(eof(), char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      tfail(bleft(letter(), digit()), 'aa', {
        nested: 'a digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(bleft(letter(), digit(), 'letter then digit'), 'aa', {
        compound: 'letter then digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(bleft(seq(letter(), letter()), digit()), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(bleft(seq(letter(), letter()), digit(), '\\w\\w\\d'), 'a11', {
        expected: '\\w\\w\\d',
        index: 1,
        status: Fatal,
      })
      tfail(bleft(letter(), seq(letter(), digit())), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
      tfail(bleft(letter(), seq(letter(), digit()), '\\w\\w\\d'), 'aab', {
        expected: '\\w\\w\\d',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt message if next parser fails', () => {
      const parser = bleft(opt(char('-')), digit())
      tpass(parser, '-1', '-')
      tpass(parser, '1', { result: null })
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('bright', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        bright(0, any()),
        '',
        '[bright]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        bright(any(), 0),
        '',
        '[bright]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        bright(any(), any(), 0),
        '',
        '[bright]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(bright(letter(), digit()), 'a1', '1')
      tpass(bright(letter(), digit(), 'test'), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(bright(letter(), digit()), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(bright(letter(), digit(), 'letter then digit'), '1', {
        expected: 'letter then digit',
        status: Fail,
      })
      tfail(bright(eof(), char('a')), '', { expected: "'a'", status: Fail })
      tfail(bright(eof(), char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      tfail(bright(letter(), digit()), 'aa', {
        nested: 'a digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(bright(letter(), digit(), 'letter then digit'), 'aa', {
        compound: 'letter then digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(bright(seq(letter(), letter()), digit()), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(bright(seq(letter(), letter()), digit(), '\\w\\w\\d'), 'a11', {
        expected: '\\w\\w\\d',
        index: 1,
        status: Fatal,
      })
      tfail(bright(letter(), seq(letter(), digit())), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
      tfail(bright(letter(), seq(letter(), digit()), '\\w\\w\\d'), 'aab', {
        expected: '\\w\\w\\d',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt message if next parser fails', () => {
      const parser = bright(opt(char('-')), digit())
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('brepeat', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        brepeat(0, 5),
        '',
        '[brepeat]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        brepeat(any(), '3'),
        '',
        '[brepeat]: expected second argument to be a number; found "3"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        brepeat(any(), 3, 0),
        '',
        '[brepeat]: expected third argument to be a string; found 0',
      )
    })
    it('applies one parser a number of times', () => {
      tpass(brepeat(letter(), 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      tpass(brepeat(letter(), 2), 'abcdef', ['a', 'b'])
      tpass(brepeat(letter(), 0), 'abcdef', [])
      tpass(brepeat(letter(), 2, 'test'), 'abcdef', ['a', 'b'])
    })
    it('fails non-fatally if no input was consumed', () => {
      tfail(brepeat(letter(), 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(brepeat(letter(), 5, 'five letters'), '12345', {
        expected: 'five letters',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      tfail(brepeat(seq(letter(), letter()), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(brepeat(seq(letter(), letter()), 5, 'ten letters'), 'a1b2c3d4e5', {
        expected: 'ten letters',
        index: 1,
        status: Fatal,
      })
    })
    it('fails non-fatally on non-fatal errors if input was consumed', () => {
      tfail(brepeat(letter(), 5), 'abc123', {
        nested: 'a letter',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
      tfail(brepeat(letter(), 5, 'five letters'), 'abc123', {
        compound: 'five letters',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
    })
  })

  describe('buntil', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        buntil(0, any()),
        '',
        '[buntil]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        buntil(any(), 0),
        '',
        '[buntil]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exist and is not a parser', () => {
      terror(
        buntil(any(), any(), 0),
        '',
        '[buntil]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with content parser results before the end', () => {
      tpass(buntil(any(), letter()), '12./abc', ['1', '2', '.', '/'])
      tpass(buntil(any(), letter(), 'test'), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      tpass(buntil(any(), letter()), 'abc', [])
      tpass(buntil(any(), letter(), 'test'), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      tfail(buntil(digit(), letter()), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Fail,
      })
      tfail(buntil(digit(), letter(), 'digit then letter'), '.123abc', {
        expected: 'digit then letter',
        index: 0,
        status: Fail,
      })
    })
    it('backtracks if input is consumed before content parser fails', () => {
      tfail(buntil(digit(), letter()), '123.abc', {
        nested: 'a digit',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
      tfail(buntil(digit(), letter(), 'digit then letter'), '123.abc', {
        compound: 'digit then letter',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      tfail(buntil(digit(), seq(letter(), digit())), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(buntil(digit(), seq(letter(), digit()), '\\d\\w\\d'), '123abc', {
        expected: '\\d\\w\\d',
        index: 4,
        status: Fatal,
      })
      tfail(buntil(seq(letter(), digit()), digit(), '\\w\\d\\d'), 'a1b2cc3', {
        expected: '\\w\\d\\d',
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('bblock', () => {
    const g = function *() {
      yield seq(char('a'), char('b'), char('c'))
      yield space()
      const c = yield any()
      yield space()

      return c
    }
    const parser = bblock(g)
    const parserm = bblock(g, 'abc then char')

    it('throws if its first argument is not a generator function', () => {
      terror(
        bblock(0),
        '',
        '[bblock]: expected argument to be a generator function; found 0',
      )
      terror(
        bblock(() => {}),
        '',
        '[bblock]: expected argument to be a generator function; '
          + 'found function',
      )
      terror(
        bblock(0, 'test'),
        '',
        '[bblock]: expected first argument to be a generator function; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        bblock(function *() { yield 1 }, 0),
        '',
        '[bblock]: expected second argument to be a string; found 0',
      )
    })
    it('throws if it yields something other than a parser', () => {
      terror(
        bblock(function *() { yield any(); yield 0; return 0 }),
        'abc',
        '[bblock]: expected second yield to be to a parser; found 0',
      )
      terror(
        bblock(function *() {
          yield any()
          yield any()
          yield x => x
          return 0
        }),
        'abc',
        '[bblock]: expected third yield to be to a parser; found function',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', { expected: "'c'", index: 2, status: Fatal })
      tfail(parserm, 'abd', {
        expected: 'abc then char',
        index: 2,
        status: Fatal,
      })
      tfail(parser, 'abcd', {
        nested: 'a whitespace character',
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abcd', {
        compound: 'abc then char',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc ', {
        nested: 'any character',
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abc ', {
        compound: 'abc then char',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc de', {
        nested: 'a whitespace character',
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abc de', {
        compound: 'abc then char',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      tpass(parser, 'abc d ', { result: 'd', index: 6 })
      tpass(parserm, 'abc d ', { result: 'd', index: 6 })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = bblock(function *() {
        yield opt(char('+'))
        yield opt(char('-'))
        return yield digit()
      })
      tpass(parser, '+-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'+', '-', or a digit")
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = bblock(function *() {
        yield opt(char('-'))
        const a = yield digit()
        const b = yield digit()
        return a + b
      })
      tpass(parser, '-12', '12')
      tpass(parser, '12', '12')
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('bpipe', () => {
    it('throws if its last argument is not a function', () => {
      terror(
        bpipe(any(), any(), 0),
        '',
        '[bpipe]: expected third argument to be a function; found 0',
      )
      terror(
        bpipe(any(), any(), any(), any()),
        '',
        '[bpipe]: expected fourth argument to be a function; found parser',
      )
    })
    it('throws if string last arg is not preceded by a function', () => {
      terror(
        bpipe(any(), any(), any(), 'test'),
        '',
        '[bpipe]: expected third argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      tpass(bpipe(letter(), a => a.toUpperCase()), 'a', 'A')
      tpass(bpipe(letter(), digit(), (a, b) => b + a), 'a1', '1a')
      tpass(bpipe(
        letter(), digit(), letter(), (a, b, c) => c + b + a,
      ), 'a1b', 'b1a')
      tpass(bpipe(letter(), digit(), (a, b) => b + a, 'test'), 'a1', '1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      tfail(bpipe(letter(), a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(bpipe(letter(), a => a, 'some letter'), '1', {
        expected: 'some letter',
        index: 0,
        status: Fail,
      })
      tfail(bpipe(eof(), letter(), (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(bpipe(
        eof(), letter(), (a, b) => b + a, 'something impossible',
      ), '', {
        expected: 'something impossible',
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if input was consumed on non-fatal failure', () => {
      tfail(bpipe(letter(), digit(), (a, b) => b + a), 'aa', {
        nested: 'a digit',
        index: 0,
        status: Fail,
      })
      tfail(bpipe(letter(), digit(), (a, b) => b + a, 'letter, digit'), 'aa', {
        compound: 'letter, digit',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(
        bpipe(letter(), seq(digit(), digit()), (a, [b1, b2]) => b1 + b2 + a),
        'a1b',
        { expected: 'a digit', index: 2, status: Fatal },
      )
      tfail(
        bpipe(
          letter(), seq(digit(), digit()), (a, [b1, b2]) => b1 + b2 + a, 'test',
        ),
        'a1b',
        { expected: 'test', index: 2, status: Fatal },
      )
    })
    it('includes opt message if next parser fails', () => {
      const parser = bpipe(opt(char('-')), digit(), digit(), (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, 'a1', "'-' or a digit")
    })
    it('does not include opt message if next parser succeeds', () => {
      const parser = bpipe(opt(char('-')), digit(), digit(), (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('bbetween', () => {
    const parser = bbetween(char('('), char(')'), many1(noneof(')')))
    const parserm = bbetween(char('('), char(')'), many1(noneof(')')), 'test')

    it('throws if its first argument is not a parser', () => {
      terror(
        bbetween(0, any(), any()),
        '',
        '[bbetween]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        bbetween(any(), 0, any()),
        '',
        '[bbetween]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        bbetween(any(), any(), 0),
        '',
        '[bbetween]: expected third argument to be a parser; found 0',
      )
    })
    it('throws if its fourth argument exists and is not a string', () => {
      terror(
        bbetween(any(), any(), any(), 0),
        '',
        '[bbetween]: expected fourth argument to be a string; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      tpass(parser, '(abc)', ['a', 'b', 'c'])
      tpass(parserm, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      tfail(parser, 'abc)', {
        expected: "'('",
        index: 0,
        status: Fail,
      })
      tfail(parserm, 'abc)', {
        expected: 'test',
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if input is consumed on a non-fatal failure', () => {
      tfail(parser, '()', {
        nested: "none of ')'",
        index: 0,
        status: Fail,
      })
      tfail(parserm, '()', {
        compound: 'test',
        index: 0,
        status: Fail,
      })
      tfail(parser, '(abc', {
        nested: "')'",
        index: 0,
        status: Fail,
      })
      tfail(parserm, '(abc', {
        compound: 'test',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(bbetween(char('('), char(')'), seq(letter(), letter())), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(bbetween(
        char('('), char(')'), seq(letter(), letter()), 'zzz',
      ), '(a)', {
        expected: 'zzz',
        index: 2,
        status: Fatal,
      })
      tfail(
        bbetween(char('('), seq(char(')'), char(')')), letter()), '(a)', {
          expected: "')'",
          index: 3,
          status: Fatal,
        },
      )
      tfail(
        bbetween(
          char('('), seq(char(')'), char(')')), letter(), 'zzz',
        ), '(a)', {
          expected: 'zzz',
          index: 3,
          status: Fatal,
        },
      )
    })
    it('gives opt error message if next parser fails', () => {
      const parser = bbetween(opt(char('-')), char('-'), digit())
      tpass(parser, '-1-', '1')
      tpass(parser, '1-', '1')
      tfail(parser, 'a', "'-' or a digit")
    })
    it('gives two opt error messages if post parser fails', () => {
      const parser = bbetween(opt(char('-')), char('&'), opt(digit()))
      tfail(parser, '+', "'-', a digit, or '&'")
    })
    it('gives no opt message if next parser succeeds', () => {
      const parser = bbetween(opt(char('-')), char('-'), digit())
      tpass(parser, '-1-', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '1+', { nested: "'-'" })
    })
  })
})
