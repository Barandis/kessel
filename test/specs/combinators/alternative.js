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

    it('throws before running any parser that is not a parser', () => {
      error(
        choice(42, char('a'), char('b')),
        'abc',
        '[choice]: '
          + 'expected 1st argument to be a parser Function; found a Number',
      )
      error(
        choice(char('a'), () => {}, char('b')),
        'def',
        '[choice]: '
          + 'expected 2nd argument to be a Parser; found a non-Parser Function',
      )
    })
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
        '[choiceL]: expected final argument to be a String; found a Function',
      )
    })
    it('throws if there are not at least two arguments', () => {
      error(
        choiceL('message'),
        'ab',
        '[choiceL]: expected at least 2 arguments; found 1',
      )
    })
    it('throws before running any parser that is not a parser', () => {
      error(
        choiceL(42, char('a'), char('b'), 'test'),
        'abc',
        '[choiceL]: '
          + 'expected 1st argument to be a parser Function; found a Number',
      )
      error(
        choiceL(char('a'), () => {}, char('b'), 'test'),
        'def',
        '[choiceL]: '
          + 'expected 2nd argument to be a Parser; found a non-Parser Function',
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
    it('throws if a non-parser is passed in', () => {
      error(
        attempt(23),
        'abc',
        '[attempt]: expected argument to be a parser Function; found a Number',
      )
      error(
        attempt(() => {}),
        'abc',
        '[attempt]: '
          + 'expected argument to be a Parser; found a non-Parser Function',
      )
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
      fail(parser, 'tesl', { index: 2, status: ParserStatus.Fatal })
      fail(attempt(parser), 'tesl', { index: 0, status: ParserStatus.Error })
    })
  })
})
