// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  attempt,
  betweenB,
  blockB,
  andThenB,
  chainB,
  choice,
  repeatB,
  orValue,
  leftB,
  manyTillB,
  optional,
  pipeB,
  rightB,
  sequenceB,
} from 'kessel/combinators/alternative'
import { lookAhead } from 'kessel/combinators/conditional'
import { many1, sequence } from 'kessel/combinators/sequence'
import { parse, Status } from 'kessel/core'
import { ErrorType } from 'kessel/error'
import { space } from 'kessel/index'
import { any, char, digit, eof, letter, noneOf } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Alternative and error recovery combinators', () => {
  describe('choice', () => {
    const parser = choice(
      sequence(char('a'), char('b')),
      sequence(char('c'), char('d')),
      sequence(char('e'), char('f')),
    )

    it('throws if any of its arguments are not parsers', () => {
      error(
        choice(any, 0),
        'abc',
        '[choice]: expected 2nd argument to be a parser; found 0',
      )
      error(
        choice(any, letter, () => letter),
        'abc',
        '[choice]: expected 3rd argument to be a parser; found function',
      )
    })
    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'yz', "'a', 'c', or 'e'")
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', "'a' or 'd'")
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('optional', () => {
    it('throws if its argument is not a parser', () => {
      error(optional(0), '', '[optional]: expected a parser; found 0')
    })
    it('consumes input and provides a result on success', () => {
      pass(optional(char('a')), 'abc', { result: 'a', index: 1 })
    })
    it('succeeds without consuming if its parser fails', () => {
      pass(optional(char('a')), 'bcd', { result: null, index: 0 })
    })
    it('fails fatally if its parser fails fatally', () => {
      fail(optional(sequence(char('a'), char('b'))), 'acd', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
      pass(optional(attempt(sequence(char('a'), char('b')))), 'acd', {
        result: null,
        index: 0,
      })
    })
  })

  describe('attempt', () => {
    it('throws if its argument is not a parser', () => {
      error(attempt(0), '', '[attempt]: expected a parser; found 0')
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
      fail(parser, 'tesl', { index: 2, status: Fatal })
      fail(attempt(parser), 'tesl', { index: 0, status: Error })
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

  describe('orValue', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        orValue(0),
        '',
        '[orValue]: expected 1st argument to be a parser; found 0',
      )
    })
    it('succeeds with its parser\'s successful result', () => {
      pass(orValue(char('a'), 'z'), 'abc', 'a')
    })
    it('succeeds with its value if is parser fails', () => {
      pass(orValue(char('b'), 'z'), 'abc', 'z')
    })
    it('fails fatally if its parser does', () => {
      fail(orValue(sequence(string('ab'), string('cd')), 'z'), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
    })
  })

  describe('sequenceB', () => {
    const parser = sequenceB(string('abc'), string('def'), string('ghi'))

    it('throws if any of its arguments is not a parser', () => {
      error(
        sequenceB(any, 0),
        '',
        '[sequenceB]: expected 2nd argument to be a parser; found 0',
      )
      error(
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
      pass(parser, 'abcdefghi', { result: ['abc', 'def', 'ghi'], index: 9 })
    })
    it('does not add null to results', () => {
      pass(sequenceB(string('abc'), eof), 'abc', {
        result: ['abc'],
        index: 3,
      })
    })
    it('still fails fatally if any of its parsers does', () => {
      const parser = sequenceB(sequence(letter, digit), letter, digit)
      fail(parser, 'aaa1', { expected: 'a digit', index: 1, status: Fatal })
    })
  })

  describe('chainB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        chainB(0, x => x),
        '',
        '[chainB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a function', () => {
      error(
        chainB(any, 0),
        '',
        '[chainB]: expected 2nd argument to be a function; found 0',
      )
    })
    it('passes successful result to function to get the next parser', () => {
      pass(chainB(any, c => char(c)), 'aa', { result: 'a', index: 2 })
    })
    it('fails if its parser fails without calling the second parser', () => {
      fail(chainB(char('a'), () => char('b')), 'bb', {
        expected: "'a'",
        index: 0,
        status: Error,
      })
    })
    it('fails when the second fails without the first consuming', () => {
      fail(chainB(lookAhead(char('a')), () => char('b')), 'a', {
        expected: "'b'",
        index: 0,
        status: Error,
      })
    })
    it('fails non-fatally if the second fails after the first consumes', () => {
      const parser = chainB(char('a'), () => char('b'))
      const [ctx, result] = parse(parser, 'ac')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal("'b'")
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(chainB(sequence(letter, digit), () => letter), 'aaa', {
        expected: 'a digit',
        index: 1,
        status: Fatal,
      })
      fail(chainB(letter, c => sequence(char(c), char(c))), 'aab', {
        expected: "'a'",
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('leftB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        leftB(0, any),
        '',
        '[leftB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        leftB(any, 0),
        '',
        '[leftB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its left parser if both pass', () => {
      pass(leftB(letter, digit), 'a1', 'a')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(leftB(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(leftB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(leftB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(leftB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(leftB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('rightB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        rightB(0, any),
        '',
        '[rightB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        rightB(any, 0),
        '',
        '[rightB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      pass(rightB(letter, digit), 'a1', '1')
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(rightB(letter, digit), '1', { expected: 'a letter', status: Error })
      fail(rightB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(rightB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(rightB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(rightB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('andThenB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        andThenB(0, any),
        '',
        '[andThenB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        andThenB(any, 0),
        '',
        '[andThenB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('returns the result of its right parser if both pass', () => {
      pass(andThenB(letter, digit), 'a1', ['a', '1'])
    })
    it('fails non-fatally if one parser fails and no input is consumed', () => {
      fail(andThenB(letter, digit), '1', {
        expected: 'a letter',
        status: Error,
      })
      fail(andThenB(eof, char('a')), '', { expected: "'a'", status: Error })
    })
    it('fails non-fatally on non-fatal errors after consumption', () => {
      const [ctx, result] = parse(andThenB(letter, digit), 'aa')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(1)
      expect(err.errors[0].label).to.equal('a digit')
    })
    it('still fails fatally if either parser fails fatally', () => {
      fail(andThenB(sequence(letter, letter), digit), 'a11', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      fail(andThenB(letter, sequence(letter, digit)), 'aab', {
        expected: 'a digit',
        index: 2,
        status: Fatal,
      })
    })
  })

  describe('repeatB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        repeatB(0, 5),
        '',
        '[repeatB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a number', () => {
      error(
        repeatB(any, '3'),
        '',
        '[repeatB]: expected 2nd argument to be a number; found "3"',
      )
    })
    it('applies one parser a number of times', () => {
      pass(repeatB(letter, 5), 'abcdef', ['a', 'b', 'c', 'd', 'e'])
      pass(repeatB(letter, 2), 'abcdef', ['a', 'b'])
      pass(repeatB(letter, 0), 'abcdef', [])
    })
    it('fails non-fatally if no input was consumed', () => {
      fail(repeatB(letter, 5), '12345', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if the parser fails fatally', () => {
      fail(repeatB(sequence(letter, letter), 5), 'a1b2c3d4e5', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
    it('fails non-fatally on non-fatal errors if input was consumed', () => {
      const [ctx, result] = parse(repeatB(letter, 5), 'abc123')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(3)
      expect(err.errors[0].label).to.equal('a letter')
    })
  })

  describe('manyTillB', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        manyTillB(0, any),
        '',
        '[manyTillB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        manyTillB(any, 0),
        '',
        '[manyTillB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('succeeds with content parser results before the end', () => {
      pass(manyTillB(any, letter), '12./abc', ['1', '2', '.', '/'])
    })
    it('can succeed with zero successes', () => {
      pass(manyTillB(any, letter), 'abc', [])
    })
    it('fails if the content parser fails before the end', () => {
      fail(manyTillB(digit, letter), '.123abc', {
        expected: 'a digit or a letter',
        index: 0,
        status: Error,
      })
    })
    it('backtracks if input is consumed before content parser fails', () => {
      const [ctx, result] = parse(manyTillB(digit, letter), '123.abc')
      const err = result.errors[0]

      expect(ctx.index).to.equal(0)
      expect(result.status).to.equal(Error)
      expect(err.ctx.index).to.equal(3)
      expect(err.errors[0].label).to.equal('a digit')
      expect(err.errors[1].label).to.equal('a letter')
    })
    it('fails fatally if either of its parsers fail fatally', () => {
      fail(manyTillB(digit, sequence(letter, digit)), '123abc', {
        expected: 'a digit',
        index: 4,
        status: Fatal,
      })
      fail(manyTillB(sequence(letter, digit), digit), 'a1b2cc3', {
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
      error(blockB(0), '', '[blockB]: expected a generator function; found 0')
      error(
        blockB(() => {}),
        '',
        '[blockB]: expected a generator function; found function',
      )
    })
    it('throws if it yields something other than a parser', () => {
      error(
        blockB(function *() { yield any; yield 0; return 0 }),
        'abc',
        '[blockB]: expected 2nd yield to be to a parser; found 0',
      )
      error(
        blockB(function *() { yield any; yield any; yield x => x; return 0 }),
        'abc',
        '[blockB]: expected 3rd yield to be to a parser; found function',
      )
    })
    it('fails if any of its parsers fail', () => {
      fail(parser, 'abd', { expected: "'c'", index: 2, status: Fatal })
      fail(parser, 'abcd', {
        expected: 'a whitespace character',
        index: 0,
        status: Error,
      })
      fail(parser, 'abc ', {
        expected: 'any character',
        index: 0,
        status: Error,
      })
      fail(parser, 'abc de', {
        expected: 'a whitespace character',
        index: 0,
        status: Error,
      })
    })
    it('succeeds with its return value if all parsers succeed', () => {
      pass(parser, 'abc d ', { result: 'd', index: 6 })
    })
  })

  describe('pipeB', () => {
    it('throws if its last argument is not a function', () => {
      error(
        pipeB(any, any, 0),
        '',
        '[pipeB]: expected 3rd argument to be a function; found 0',
      )
      error(
        pipeB(any, any, any, any),
        '',
        '[pipeB]: expected 4th argument to be a function; found parser',
      )
    })
    it('passes parser results to a single function', () => {
      pass(pipeB(letter, a => a.toUpperCase()), 'a', 'A')
      pass(pipeB(letter, digit, (a, b) => b + a), 'a1', '1a')
      pass(pipeB(letter, digit, letter, (a, b, c) => c + b + a), 'a1b', 'b1a')
    })
    it('fails non-fatally if no input is consumed on failure', () => {
      fail(pipeB(letter, a => a), '1', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
      fail(pipeB(eof, letter, (a, b) => b + a), '', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('fails non-fatally if input was consumed on non-fatal failure', () => {
      fail(pipeB(letter, digit, (a, b) => b + a), 'aa', {
        expected: 'a digit',
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      fail(
        pipeB(letter, sequence(digit, digit), (a, [b1, b2]) => b1 + b2 + a),
        'a1b',
        { expected: 'a digit', index: 2, status: Fatal },
      )
    })
  })

  describe('betweenB', () => {
    const parser = betweenB(char('('), char(')'), many1(noneOf(')')))

    it('throws if its first argument is not a parser', () => {
      error(
        betweenB(0, any, any),
        '',
        '[betweenB]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a parser', () => {
      error(
        betweenB(any, 0, any),
        '',
        '[betweenB]: expected 2nd argument to be a parser; found 0',
      )
    })
    it('throws if its third argument is not a parser', () => {
      error(
        betweenB(any, any, 0),
        '',
        '[betweenB]: expected 3rd argument to be a parser; found 0',
      )
    })
    it('succeeds with the result of its content parser', () => {
      pass(parser, '(abc)', ['a', 'b', 'c'])
    })
    it('fails non-fatally if no content is consumed', () => {
      fail(parser, 'abc)', {
        expected: "'('",
        index: 0,
        status: Error,
      })
    })
    it('fails non-fatally if input is consumed on a non-fatal failure', () => {
      fail(parser, '()', {
        expected: "none of ')'",
        index: 0,
        status: Error,
      })
      fail(parser, '(abc', {
        expected: "')'",
        index: 0,
        status: Error,
      })
    })
    it('fails fatally if one of its parsers fails fatally', () => {
      fail(betweenB(char('('), char(')'), sequence(letter, letter)), '(a)', {
        expected: 'a letter',
        index: 2,
        status: Fatal,
      })
      fail(betweenB(char('('), sequence(char(')'), char(')')), letter), '(a)', {
        expected: "')'",
        index: 3,
        status: Fatal,
      })
    })
  })
})
