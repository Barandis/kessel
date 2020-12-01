// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  followedBy,
  followedByM,
  lookAhead,
  notEmpty,
  notEmptyM,
  notFollowedBy,
  notFollowedByM,
} from 'kessel/combinators/conditional'
import { many, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { digit, letter } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Conditional and look-ahead combinators', () => {
  describe('lookAhead', () => {
    const parser = lookAhead(sequence(string('ab'), string('cd')))

    it('throws if its argument is not a parser', () => {
      error(lookAhead(0), '', '[lookAhead]: expected a parser; found 0')
    })
    it('succeeds with no consumption if its parser succeeds', () => {
      pass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      fail(parser, 'abd', { expected: "'cd'", index: 0 })
    })
  })

  describe('notEmpty', () => {
    it('throws if its argument is not a parser', () => {
      error(notEmpty(0), '', '[notEmpty]: expected a parser; found 0')
    })
    it('fails if its parser succeeds without consuming input', () => {
      fail(notEmpty(many(letter)), '123', {
        expected: '',
        index: 0,
        status: Error,
      })
    })
    it('succeeds if its parser succeeds and consumed input', () => {
      pass(notEmpty(many(letter)), 'abc', ['a', 'b', 'c'])
    })
    it('fails if its parser fails', () => {
      fail(notEmpty(letter), '123', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
      fail(notEmpty(sequence(letter, letter)), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('notEmptyM', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        notEmptyM(0, 'test'),
        '',
        '[notEmptyM]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      error(
        notEmptyM(many(letter), 0),
        '',
        '[notEmptyM]: expected 2nd argument to be a string; found 0',
      )
    })
    it('fails if its parser succeeds without consuming input', () => {
      fail(notEmptyM(many(letter), 'a letter'), '123', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
    })
    it('succeeds if its parser succeeds and consumed input', () => {
      pass(notEmptyM(many(letter), 'a letter'), 'abc', ['a', 'b', 'c'])
    })
    it('fails if its parser fails', () => {
      fail(notEmptyM(letter, 'at least one letter'), '123', {
        expected: 'a letter',
        index: 0,
        status: Error,
      })
      fail(notEmptyM(sequence(letter, letter), 'a1 or something'), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('followedBy', () => {
    it('throws if its argument is not a parser', () => {
      error(followedBy(0), '', '[followedBy]: expected a parser; found 0')
    })
    it('succeeds without changing state if its parser succeeds', () => {
      pass(followedBy(letter), 'abc', { result: null, index: 0 })
    })
    it('fails without changing state if its parser fails', () => {
      fail(followedBy(letter), '123', { index: 0, status: Error })
      fail(followedBy(sequence(letter, digit)), 'abc', {
        index: 0,
        status: Error,
      })
    })
  })

  describe('followedByM', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        followedByM(0, 'test'),
        '',
        '[followedByM]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      error(
        followedByM(many(letter), 0),
        '',
        '[followedByM]: expected 2nd argument to be a string; found 0',
      )
    })
    it('succeeds without changing state if its parser succeeds', () => {
      pass(followedByM(letter, 'test'), 'abc', { result: null, index: 0 })
    })
    it('fails without changing state if its parser fails', () => {
      fail(followedByM(letter, 'one single letter'), '123', {
        expected: 'one single letter',
        index: 0,
        status: Error,
      })
      fail(followedByM(
        sequence(letter, digit), 'a letter, then a digit',
      ), 'abc', {
        expected: 'a letter, then a digit',
        index: 0,
        status: Error,
      })
    })
  })

  describe('notFollowedBy', () => {
    it('throws if its argument is not a parser', () => {
      error(notFollowedBy(0), '', '[notFollowedBy]: expected a parser; found 0')
    })
    it('fails without changing state if its parser succeeds', () => {
      fail(notFollowedBy(letter), 'abc', { index: 0, status: Error })
    })
    it('succeeds without changing state if its parser fails', () => {
      pass(notFollowedBy(letter), '123', { result: null, index: 0 })
      pass(notFollowedBy(sequence(letter, digit)), 'abc', {
        result: null, index: 0,
      })
    })
  })

  describe('notFollowedByM', () => {
    it('throws if its first argument is not a parser', () => {
      error(
        notFollowedByM(0, 'test'),
        '',
        '[notFollowedByM]: expected 1st argument to be a parser; found 0',
      )
    })
    it('throws if its second argument is not a string', () => {
      error(
        notFollowedByM(many(letter), 0),
        '',
        '[notFollowedByM]: expected 2nd argument to be a string; found 0',
      )
    })
    it('fails without changing state if its parser succeeds', () => {
      fail(notFollowedByM(letter, 'something other than a letter'), 'abc', {
        expected: 'something other than a letter',
        index: 0,
        status: Error,
      })
    })
    it('succeeds without changing state if its parser fails', () => {
      pass(notFollowedByM(letter, 'test'), '123', { result: null, index: 0 })
      pass(notFollowedByM(sequence(letter, digit), 'test'), 'abc', {
        result: null, index: 0,
      })
    })
  })
})
