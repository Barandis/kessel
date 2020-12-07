// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { choice, lookAhead } from 'kessel/combinators/alternative'
import {
  andThenB,
  applyB,
  attempt,
  attemptM,
  betweenB,
  blockB,
  chainB,
  label,
  leftB,
  manyTillB,
  pipeB,
  repeatB,
  rightB,
  sequenceB,
} from 'kessel/combinators/backtracking'
import { left, many1, sequence } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { space } from 'kessel/parsers/regex'
import { string } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'
import { always, right } from 'kessel/index'

const { Fail, Fatal } = Status

describe('Backtracking and error handling combinators', () => {
  describe('label', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        label(0, 'test'),
        '',
        '[label]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        label(char('a'), 0),
        '',
        '[label]: expected 2nd argument to be a string; found 0',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(label(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected message if its parser fails', () => {
      tfail(char('a'), 'bcd', "'a'")
      tfail(label(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('does not change the expected message on a fatal error', () => {
      tfail(sequence(char('a'), char('b')), 'a1', "'b'")
      tfail(label(sequence(char('a'), char('b')), 'letter b'), 'a1', "'b'")
    })
    it('overwrites all of multiple expected messages', () => {
      const parser = choice(char('a'), char('b'), char('c'))
      tfail(parser, 'def', "'a', 'b', or 'c'")
      tfail(label(parser, 'a, b, or c'), 'def', 'a, b, or c')
    })
  })

  describe('attemptM', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        attemptM(0, 'test'),
        '',
        '[attemptM]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      terror(
        attemptM(char('a'), 0),
        '',
        '[attemptM]: expected 2nd argument to be a string; found 0',
      )
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(attemptM(char('a'), 'test'), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('changes the expected if its parser fails without consuming', () => {
      tfail(char('a'), 'bcd', "'a'")
      tfail(attemptM(char('a'), 'letter a'), 'bcd', 'letter a')
    })
    it('adds a compound error if its parser fails while consuming', () => {
      const [ctx, result] = parse(
        attemptM(sequence(char('a'), char('b')), 'test'), 'a1',
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
        attemptM(attempt(right(char('a'), char('b'))), 'test'), 'a1',
      )
      const error = result.errors[0]

      expect(result.status).to.equal(Status.Fail)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(1)
      expect(error.label).to.equal('test')
      expect(error.errors[0].label).to.equal("'b'")
    })
  })

  describe('attempt', () => {
    it('throws if its argument is not a parser', () => {
      terror(attempt(0), '', '[attempt]: expected a parser; found 0')
    })
    it('does nothing if its parser succeeds', () => {
      const r1 = parse(char('a'), 'abc')
      const r2 = parse(attempt(char('a')), 'abc')
      expect(r1).to.deep.equal(r2)
    })
    it('does nothing if its parser fails without consuming input', () => {
      const r1 = parse(char('a'), 'bcd')
      const r2 = parse(attempt(char('a')), 'bcd')
      expect(r1).to.deep.equal(r2)
    })
    it('resets the index if its parser fails with consuming input', () => {
      const parser = sequence(string('te'), string('st'))
      tfail(parser, 'tesl', { index: 2, status: Fatal })
      tfail(attempt(parser), 'tesl', { index: 0, status: Fail })
    })
    it('creates a nested error if it fails while consuming input', () => {
      const parser = sequence(string('te'), string('st'))
      const [ctx, result] = parse(attempt(parser), 'tesl')
      const error = result.errors[0]

      expect(error.type).to.equal(ErrorType.Nested)
      expect(ctx.index).to.equal(0)
      expect(error.ctx.index).to.equal(2)
      expect(error.errors[0].type).to.equal(ErrorType.Expected)
      expect(error.errors[0].label).to.equal("'st'")
    })
  })

  describe('sequenceB', () => {
    const parser = sequenceB(string('abc'), string('def'), string('ghi'))

    it('throws if any of its arguments is not a parser', () => {
      terror(
        sequenceB(any, 0),
        '',
        '[sequenceB]: expected 2nd argument to be a parser; found 0',
      )
      terror(
        sequenceB(any, letter, digit, {}),
        '',
        '[sequenceB]: expected 4th argument to be a parser; found {}',
      )
    })
    it('fails if any of its parsers fail', () => {
      const [ctx1, result1] = parse(parser, 'abd')
      expect(ctx1.index).to.equal(0)
      expect(result1.errors[0].label).to.equal("'abc'")

      const [ctx2, result2] = parse(parser, 'abcdf')
      const err2 = result2.errors[0]
      expect(ctx2.index).to.equal(0)
      expect(err2.ctx.index).to.equal(3)
      expect(err2.errors[0].label).to.equal("'def'")

      const [ctx3, result3] = parse(parser, 'abcdefh')
      const err3 = result3.errors[0]
      expect(ctx3.index).to.equal(0)
      expect(err3.ctx.index).to.equal(6)
      expect(err3.errors[0].label).to.equal("'ghi'")
    })
    it('succeeds if all of its parsers succeed', () => {
      tpass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      tpass(sequenceB(string('abc'), eof), 'abc', {
        result: ['abc'],
        index: 3,
      })
    })
    it('still fails fatally if any of its parsers does', () => {
      const parser = sequenceB(sequence(letter, digit), letter, digit)
      tfail(parser, 'aaa1', { expected: 'a digit', index: 1, status: Fatal })
    })
  })

  describe('chainB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        chainB(0, x => x),
        '',
        '[chainB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      terror(
        chainB(any, 0),
        '',
        '[chainB]: expected 2nd argument to be a function; found 0',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      tpass(chainB(any, c => char(c)), 'aa', { result: 'a', index: 2 })
    })
    it('fails if its parser fails without calling the second parser', () => {
      tfail(chainB(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Fail,
      })
    })
    it('fails when the second fails without the first consuming', () => {
      tfail(chainB(lookAhead(char('a')), () => char('b')), 'a', {
        expected: "'b'",
        index: 0,
        status: Fail,
      })
    })
    it('fails non-fatally if the second fails after the first consumes', () => {
      const parser = chainB(char('a'), () => char('b'))
      const [ctx, result] = parse(parser, 'ac')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal("'b'")
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(chainB(sequence(letter, digit), () => letter), 'aaa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      tfail(chainB(letter, c => sequence(char(c), char(c))), 'aab', {
        expected: "'a'",
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('applyB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        applyB(0, any),
        '',
        '[applyB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        applyB(any, 0),
        '',
        '[applyB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its second argument fails to return a function', () => {
      terror(
        applyB(any, any),
        'ab',
        '[applyB]: expected 2nd argument to return a function; found "b"',
      )
    })
    it('returns the result of the function when passed the other value', () => {
      tpass(applyB(any, always(x => x.toUpperCase())), 'a', 'A')
    })
    it('fails without calling parser 2 if parser 1 fails', () => {
      tfail(applyB(char('a'), any), 'b', { expected: "'a'", status: Fail })
    })
    it('backtracks if input is consumed before failure', () => {
      tfail(applyB(char('a'), char('b')), 'ac', {
        expected: "'b'",
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
      tfail(applyB(char('a'), left(letter, letter)), 'ab1', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
    })
    it('can be used to implement sequencing', () => {
      // Applicative style for `andThenB(char('a'), char('b'))`
      const p = applyB(char('a'), applyB(char('b'), always(b => a => [a, b])))
      tpass(p, 'ab', ['a', 'b'])
      tfail(p, 'cd', { expected: "'a'", status: Fail })
      tfail(p, 'ac', { expected: "'b'", status: Fail })
    })
  })

  describe('leftB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        leftB(0, any),
        '',
        '[leftB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        leftB(any, 0),
        '',
        '[leftB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      tpass(leftB(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(leftB(letter, digit), '1', { expected: 'a letter', status: Fail })
      tfail(leftB(eof, char('a')), '', { expected: "'a'", status: Fail })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(leftB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(leftB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(leftB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('rightB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        rightB(0, any),
        '',
        '[rightB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        rightB(any, 0),
        '',
        '[rightB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(rightB(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(rightB(letter, digit), '1', { expected: 'a letter', status: Fail })
      tfail(rightB(eof, char('a')), '', { expected: "'a'", status: Fail })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(rightB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(rightB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(rightB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('andThenB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        andThenB(0, any),
        '',
        '[andThenB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      terror(
        andThenB(any, 0),
        '',
        '[andThenB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      tpass(andThenB(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      tfail(andThenB(letter, digit), '1', {
        expected: 'a letter',
        status: Fail,
      })
      tfail(andThenB(eof, char('a')), '', { expected: "'a'", status: Fail })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(andThenB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      tfail(andThenB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(andThenB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('repeatB', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        repeatB(0, 5),
        '',
        '[repeatB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      terror(
        repeatB(any, '3'),
        '',
        '[repeatB]: expected 2nd argument to be a number; found "3"',
      )
    })
    it('applies one parser a number of times', () => {
      tpass(repeatB(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      tpass(repeatB(letter, 2), 'abcdef', ['a', 'b'])
      tpass(repeatB(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      tfail(repeatB(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      tfail(repeatB(sequence(letter, letter), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails non-fatally on non-fatal errors if input was consumed', () => {
      const [ctx, result] = parse(repeatB(letter, 5), 'abc123')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Fail)
      expect(err.ctx.index).to.equal(3)
      expect(err.errors[0].label).to.equal('a letter')
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
      tfail(manyTillB(digit, sequence(letter, digit)), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      tfail(manyTillB(sequence(letter, digit), digit), 'a1b2cc3', {
        expected: 'a digit',
        index: 5,
        status: Fatal,
      })
    })
  })

  describe('blockB', () => {
    const parser = blockB(function *() {
      yield sequence(char('a'), char('b'), char('c'))
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
        expected: 'a whitespace character',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc ', {
        expected: 'any character',
        index: 0,
        status: Fail,
      })
      tfail(parser, 'abc de', {
        expected: 'a whitespace character',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      tpass(parser, 'abc d ', { result: 'd', index: 6 })
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
        expected: 'a digit',
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(
        pipeB(letter, sequence(digit, digit), (a, [b1, b2]) => b1 + b2 + a),
        'a1b',
        { expected: 'a digit', index: 2, status: Fatal },
      )
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
        expected: "none of ')'",
        index: 0,
        status: Fail,
      })
      tfail(parser, '(abc', {
        expected: "')'",
        index: 0,
        status: Fail,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      tfail(betweenB(char('('), char(')'), sequence(letter, letter)), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      tfail(
        betweenB(char('('), sequence(char(')'), char(')')), letter), '(a)', {
          expected: "')'",
          index: 3,
          status: Fatal,
        },
      )
    })
  })
})
