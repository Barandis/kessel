// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { attempt, choice, choiceL } from 'kessel/combinators/alternative'
import { sequence } from 'kessel/combinators/sequence'
import { parse, ParserStatus } from 'kessel/core'
import { char, string } from 'kessel/parsers'
import { error, fail, pass } from 'test/helper'

describe('Alternative combinators', () => {
  describe('choice', () => {
    const parser = choice(
      sequence(char('a'), char('b')),
      sequence(char('c'), char('d')),
      sequence(char('e'), char('f')),
    )

    it('fails with all expecteds if all parsers fail without consuming', () => {
      fail(parser, 'yz', { expected: '"a", "c", or "e"' })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', { expected: '"a" or "d"' })
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('choiceL', () => {
    const parser = choiceL(
      sequence(char('a'), char('b')),
      sequence(char('c'), char('d')),
      sequence(char('e'), char('f')),
      '"ab", "cd", or "ef"',
    )

    it('throws if the last argument is not a string', () => {
      error(
        choiceL(char('a'), char('b')),
        'ab',
        '[choiceL]: expected String; received Function',
      )
    })
    it('throws if there are not at least two arguments', () => {
      error(
        choiceL('message'),
        'ab',
        '[choiceL]: expected at least 2 args; found 1',
      )
    })
    it('fails with its message if all parsers fail without consuming', () => {
      fail(parser, 'yz', { expected: '"ab", "cd", or "ef"' })
    })
    it('fails immediately if a failed parser consumes input', () => {
      fail(parser, 'ce', { expected: '"ab", "cd", or "ef"' })
    })
    it('succeeds if one parser succeeds first', () => {
      pass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('attempt', () => {
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
      fail(parser, 'tesl', { index: 2, status: ParserStatus.Fatal })
      fail(attempt(parser), 'tesl', { index: 0, status: ParserStatus.Error })
    })
  })
})
