// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { opt, peek } from 'kessel/combinators/alternative'
import {
  applyB,
  attempt,
  betweenB,
  blockB,
  chainB,
  leftB,
  manyTillB,
  pipeB,
  repeatB,
  rightB,
  seqB,
} from 'kessel/combinators/backtracking'
import { value } from 'kessel/combinators/chaining'
import { left, many1, right, seq } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { always } from 'kessel/parsers/misc'
import { space } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
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
        attempt(any, 0),
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
      const parser = seq(string('te'), string('st'))
      tfail(parser, 'tesl', { index: 2, status: Fatal })
      tfail(attempt(parser), 'tesl', { index: 0, status: Fail })
    })
    it('creates a nested error if it fails while consuming input', () => {
      const parser = seq(string('te'), string('st'))
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

  describe('seqB', () => {
    const parser = seqB(string('abc'), string('def'), string('ghi'))
    const parserm = seqB(
      string('abc'), string('def'), string('ghi'), 'abc,def,ghi',
    )

    it('throws if any of its arguments is not a parser', () => {
      terror(
        seqB(any, 0),
        '',
        '[seqB]: expected second argument to be a parser; found 0',
      )
      terror(
        seqB(any, letter, digit, {}),
        '',
        '[seqB]: expected fourth argument to be a parser; found {}',
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
      tpass(seqB(string('abc'), eof), 'abc', {
        result: ['abc', null],
        index: 3,
      })
    })
    it('still fails fatally if any of its parsers does', () => {
      const parser = seqB(seq(letter, digit), letter, digit)
      tfail(parser, 'aaa1', { expected: 'a digit', index: 1, status: Fatal })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = seqB(opt(char('+')), opt(char('-')), digit)
      tpass(parser, '+-1', ['+', '-', '1'])
      tpass(parser, '1', [null, null, '1'])
      tfail(parser, 'a', "'+', '-', or a digit")
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = seqB(opt(char('-')), digit, digit)
      tpass(parser, '-12', ['-', '1', '2'])
      tpass(parser, '12', [null, '1', '2'])
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('chainB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        chainB(0, x => x),
        '',
        '[chainB]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        chainB(any, 0),
        '',
        '[chainB]: expected second argument to be a function; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        chainB(any, x => x, 0),
        '',
        '[chainB]: expected third argument to be a string; found 0',
      )
    })
    it('throws if the function does not return a parser', () => {
      terror(
        chainB(any, x => x),
        'abc',
        '[chainB]: expected second argument to return a parser; found "a"',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      tpass(chainB(any, c => char(c)), 'aa', { result: 'a', index: 2 })
      tpass(chainB(any, c => char(c), 'test'), 'aa', { result: 'a', index: 2 })
    })
    it('fails if its parser fails without calling the second parser', () => {
      tfail(chainB(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Fail,
      })
      tfail(chainB(char('a'), () => char('b'), 'a then b'), 'bb', {
        expected: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails when the second fails without the first consuming', () => {
      tfail(chainB(peek(char('a')), () => char('b')), 'a', {
        expected: "'b'",
        index: 0,
        status: Fail,
      })
      tfail(chainB(peek(char('a')), () => char('b'), 'a then b'), 'a', {
        expected: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if the second fails after the first consumes', () => {
      tfail(chainB(char('a'), () => char('b')), 'ac', {
        nested: "'b'",
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(chainB(char('a'), () => char('b'), 'a then b'), 'ac', {
        compound: 'a then b',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(chainB(seq(letter, digit), () => letter), 'aaa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(chainB(seq(letter, digit), () => letter, '\\w\\d\\w'), 'aaa', {
        expected: '\\w\\d\\w',
        index: 1,
        status: Fatal,
      })
      tfail(chainB(letter, c => seq(char(c), char(c))), 'aab', {
        expected: "'a'",
        index: 2,
        status: Fatal,
      })
      tfail(chainB(letter, c => seq(char(c), char(c)), 'letter, cc'), 'aab', {
        expected: 'letter, cc',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = chainB(opt(char('-')), () => digit)
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('applyB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        applyB(0, any),
        '',
        '[applyB]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        applyB(any, 0),
        '',
        '[applyB]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        applyB(any, any, 0),
        '',
        '[applyB]: expected third argument to be a string; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      terror(
        applyB(any, any),
        'ab',
        '[applyB]: expected second argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      tpass(applyB(any, always(x => x.toUpperCase())), 'a', 'A')
      tpass(applyB(any, always(x => x.toUpperCase()), 'test'), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      tfail(applyB(char('a'), any), 'b', { expected: "'a'", status: Fail })
      tfail(applyB(char('a'), any, "'a' and a character"), 'b', {
        expected: "'a' and a character",
        status: Fail,
      })
    })
    it('backtracks if input is consumed before failure', () => {
      tfail(applyB(char('a'), char('b')), 'ac', {
        nested: "'b'",
        index: 0,
        status: Fail,
      })
      tfail(applyB(char('a'), char('b'), 'a then b'), 'ac', {
        compound: 'a then b',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(applyB(left(letter, letter), char('b')), 'a1b', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(applyB(left(letter, letter), char('b'), '\\w\\wb'), 'a1b', {
        expected: '\\w\\wb',
        index: 1,
        status: Fatal,
      })
      tfail(applyB(char('a'), left(letter, letter)), 'ab1', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(applyB(char('a'), left(letter, letter), 'a\\w\\w'), 'ab1', {
        expected: 'a\\w\\w',
        index: 2,
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Applicative style for `andThenB(char('a'), char('b'))`
      const p = applyB(char('a'), applyB(char('b'), always(b => a => [a, b])))
      tpass(p, 'ab', ['a', 'b'])
      tfail(p, 'cd', { expected: "'a'", status: Fail })
      tfail(p, 'ac', { nested: "'b'", status: Fail })
    })
    it('adds opt error message if next parser fails', () => {
      const parser = applyB(opt(char('-')), value(digit, x => x))
      tpass(parser, '-1', '-')
      tpass(parser, '1', { value: null })
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('leftB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        leftB(0, any),
        '',
        '[leftB]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        leftB(any, 0),
        '',
        '[leftB]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        leftB(any, any, 0),
        '',
        '[leftB]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      tpass(leftB(letter, digit), 'a1', 'a')
      tpass(leftB(letter, digit, 'test'), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(leftB(letter, digit), '1', { expected: 'a letter', status: Fail })
      tfail(leftB(letter, digit, 'letter then digit'), '1', {
        expected: 'letter then digit',
        status: Fail,
      })
      tfail(leftB(eof, char('a')), '', { expected: "'a'", status: Fail })
      tfail(leftB(eof, char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      tfail(leftB(letter, digit), 'aa', {
        nested: 'a digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(leftB(letter, digit, 'letter then digit'), 'aa', {
        compound: 'letter then digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(leftB(seq(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(leftB(seq(letter, letter), digit, '\\w\\w\\d'), 'a11', {
        expected: '\\w\\w\\d',
        index: 1,
        status: Fatal,
      })
      tfail(leftB(letter, seq(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
      tfail(leftB(letter, seq(letter, digit), '\\w\\w\\d'), 'aab', {
        expected: '\\w\\w\\d',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt message if next parser fails', () => {
      const parser = leftB(opt(char('-')), digit)
      tpass(parser, '-1', '-')
      tpass(parser, '1', { result: null })
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('rightB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        rightB(0, any),
        '',
        '[rightB]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        rightB(any, 0),
        '',
        '[rightB]: expected second argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        rightB(any, any, 0),
        '',
        '[rightB]: expected third argument to be a string; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(rightB(letter, digit), 'a1', '1')
      tpass(rightB(letter, digit, 'test'), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(rightB(letter, digit), '1', { expected: 'a letter', status: Fail })
      tfail(rightB(letter, digit, 'letter then digit'), '1', {
        expected: 'letter then digit',
        status: Fail,
      })
      tfail(rightB(eof, char('a')), '', { expected: "'a'", status: Fail })
      tfail(rightB(eof, char('a'), 'something impossible'), '', {
        expected: 'something impossible',
        status: Fail,
      })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      tfail(rightB(letter, digit), 'aa', {
        nested: 'a digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
      tfail(rightB(letter, digit, 'letter then digit'), 'aa', {
        compound: 'letter then digit',
        index: 0,
        ctxindex: 1,
        status: Fail,
      })
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(rightB(seq(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(rightB(seq(letter, letter), digit, '\\w\\w\\d'), 'a11', {
        expected: '\\w\\w\\d',
        index: 1,
        status: Fatal,
      })
      tfail(rightB(letter, seq(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
      tfail(rightB(letter, seq(letter, digit), '\\w\\w\\d'), 'aab', {
        expected: '\\w\\w\\d',
        index: 2,
        status: Fatal,
      })
    })
    it('adds opt message if next parser fails', () => {
      const parser = rightB(opt(char('-')), digit)
      tpass(parser, '-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '-a', { nested: 'a digit' })
    })
  })

  describe('repeatB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        repeatB(0, 5),
        '',
        '[repeatB]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        repeatB(any, '3'),
        '',
        '[repeatB]: expected second argument to be a number; found "3"',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        repeatB(any, 3, 0),
        '',
        '[repeatB]: expected third argument to be a string; found 0',
      )
    })
    it('applies one parser a number of times', () => {
      tpass(repeatB(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      tpass(repeatB(letter, 2), 'abcdef', ['a', 'b'])
      tpass(repeatB(letter, 0), 'abcdef', [])
      tpass(repeatB(letter, 2, 'test'), 'abcdef', ['a', 'b'])
    })
    it('fails non-fatally if no input was consumed', () => {
      tfail(repeatB(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(repeatB(letter, 5, 'five letters'), '12345', {
        expected: 'five letters',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      tfail(repeatB(seq(letter, letter), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(repeatB(seq(letter, letter), 5, 'ten letters'), 'a1b2c3d4e5', {
        expected: 'ten letters',
        index: 1,
        status: Fatal,
      })
    })
    it('fails non-fatally on non-fatal errors if input was consumed', () => {
      tfail(repeatB(letter, 5), 'abc123', {
        nested: 'a letter',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
      tfail(repeatB(letter, 5, 'five letters'), 'abc123', {
        compound: 'five letters',
        index: 0,
        ctxindex: 3,
        status: Fail,
      })
    })
  })

  describe('manyTillB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        manyTillB(0, any),
        '',
        '[manyTillB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        manyTillB(any, 0),
        '',
        '[manyTillB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with content parser results before the end', () => {
      tpass(manyTillB(any, letter), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      tpass(manyTillB(any, letter), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      tfail(manyTillB(digit, letter), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Fail,
      })
    })
    it('backtracks if input is consumed before content parser fails', () => {
      const [ctx, result] = parse(manyTillB(digit, letter), '123.abc')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(3)
      expect(err.errors[0].label).to.equal('a digit')
      expect(err.errors[1].label).to.equal('a letter')
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      tfail(manyTillB(digit, seq(letter, digit)), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(manyTillB(seq(letter, digit), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('blockB', () => {
    const parser = blockB(function *() {
      yield seq(char('a'), char('b'), char('c'))
      yield space
      const c = yield any
      yield space

      return c
    })

    it('throws if its argument is not a generator function', () => {
      terror(blockB(0), '', '[blockB]: expected a generator function; found 0')
      terror(
        blockB(() => {}),
        '',
        '[blockB]: expected a generator function; found function',
      )
    })
    it('throws if it yields something other than a parser', () => {
      terror(
        blockB(function *() { yield any; yield 0; return 0 }),
        'abc',
        '[blockB]: expected 2nd yield to be to a parser; found 0',
      )
      terror(
        blockB(function *() { yield any; yield any; yield x => x; return 0 }),
        'abc',
        '[blockB]: expected 3rd yield to be to a parser; found function',
      )
    })
    it('fails if any of its parsers fail', () => {
      tfail(parser, 'abd', { expected: "'c'", index: 2, status: Fatal })
      tfail(parser, 'abcd', {
        nested: 'a whitespace character',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc ', {
        nested: 'any character',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc de', {
        nested: 'a whitespace character',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      tpass(parser, 'abc d ', { result: 'd', index: 6 })
    })
    it('gives opt error messages if later parsers fail', () => {
      const parser = blockB(function *() {
        yield opt(char('+'))
        yield opt(char('-'))
        return yield digit
      })
      tpass(parser, '+-1', '1')
      tpass(parser, '1', '1')
      tfail(parser, 'a', "'+', '-', or a digit")
    })
    it('ignores opt error messages if a later parser succeeds', () => {
      const parser = blockB(function *() {
        yield opt(char('-'))
        const a = yield digit
        const b = yield digit
        return a + b
      })
      tpass(parser, '-12', '12')
      tpass(parser, '12', '12')
      tfail(parser, 'ab', "'-' or a digit")
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('pipeB', () => {
    it('throws if its last argument is not a function', () => {
      terror(
        pipeB(any, any, 0),
        '',
        '[pipeB]: expected 3rd argument to be a function; found 0',
      )
      terror(
        pipeB(any, any, any, any),
        '',
        '[pipeB]: expected 4th argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      tpass(pipeB(letter, a => a.toUpperCase()), 'a', 'A')
      tpass(pipeB(letter, digit, (a, b) => b + a), 'a1', '1a')
      tpass(pipeB(letter, digit, letter, (a, b, c) => c + b + a), 'a1b', 'b1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      tfail(pipeB(letter, a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(pipeB(eof, letter, (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if input was consumed on non-fatal failure', () => {
      tfail(pipeB(letter, digit, (a, b) => b + a), 'aa', {
        nested: 'a digit',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(
        pipeB(letter, seq(digit, digit), (a, [b1, b2]) => b1 + b2 + a),
        'a1b',
        { expected: 'a digit', index: 2, status: Fatal },
      )
    })
    it('includes opt message if next parser fails', () => {
      const parser = pipeB(opt(char('-')), digit, digit, (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, 'a1', "'-' or a digit")
    })
    it('does not include opt message if next parser succeeds', () => {
      const parser = pipeB(opt(char('-')), digit, digit, (s, a, b) =>
        parseInt(a + b) * (s ? -1 : 1))
      tpass(parser, '-12', { result: -12 })
      tpass(parser, '12', { result: 12 })
      tfail(parser, '1a', { nested: 'a digit' })
    })
  })

  describe('betweenB', () => {
    const parser = betweenB(char('('), char(')'), many1(noneOf(')')))

    it('throws if its first argument is not a parser', () => {
      terror(
        betweenB(0, any, any),
        '',
        '[betweenB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        betweenB(any, 0, any),
        '',
        '[betweenB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      terror(
        betweenB(any, any, 0),
        '',
        '[betweenB]: expected 3rd argument to be a parser; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      tpass(parser, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      tfail(parser, 'abc)', {
        expected: "'('",
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
      tfail(parser, '(abc', {
        nested: "')'",
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(betweenB(char('('), char(')'), seq(letter, letter)), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(
        betweenB(char('('), seq(char(')'), char(')')), letter), '(a)', {
          expected: "')'",
          index: 3,
          status: Fatal,
        },
      )
    })
    it('gives opt error message if next parser fails', () => {
      const parser = betweenB(opt(char('-')), char('-'), digit)
      tpass(parser, '-1-', '1')
      tpass(parser, '1-', '1')
      tfail(parser, 'a', "'-' or a digit")
    })
    it('gives two opt error messages if post parser fails', () => {
      const parser = betweenB(opt(char('-')), char('&'), opt(digit))
      tfail(parser, '+', "'-', a digit, or '&'")
    })
    it('gives no opt message if next parser succeeds', () => {
      const parser = betweenB(opt(char('-')), char('-'), digit)
      tpass(parser, '-1-', '1')
      tfail(parser, 'a', "'-' or a digit")
      tfail(parser, '1+', { nested: "'-'" })
    })
  })
})
