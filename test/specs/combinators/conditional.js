// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  followedBy,
  followedByL,
  lookAhead,
  notEmpty,
  notFollowedBy,
  notFollowedByL,
} from 'kessel/combinators/conditional'
import { many, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { digit, letter } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { fail, pass } from 'test/helper'

describe('Conditional and look-ahead combinators', () => {
  describe('lookAhead', () => {
    const parser = lookAhead(seq([string('ab'), string('cd')]))

    it('succeeds with no consumption if its parser succeeds', () => {
      pass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      fail(parser, 'abd', { expected: '"cd"', actual: '"d"', index: 0 })
    })
  })

  describe('notEmpty', () => {
    it('fails if its parser succeeds without consuming input', () => {
      fail(notEmpty(many(letter)), '123', {
        expected: 'the parser to consume input',
        index: 0,
        status: Status.Error,
      })
    })
    it('succeeds if its parser succeeds and consumed input', () => {
      pass(notEmpty(many(letter)), 'abc', ['a', 'b', 'c'])
    })
    it('fails if its parser fails', () => {
      fail(notEmpty(letter), '123', {
        expected: 'a letter',
        actual: '"1"',
        index: 0,
        status: Status.Error,
      })
      fail(notEmpty(seq([letter, letter])), 'a1', {
        expected: 'a letter',
        actual: '"1"',
        index: 1,
        status: Status.Fatal,
      })
    })
  })

  describe('followedBy', () => {
    it('succeeds without changing state if its parser succeeds', () => {
      pass(followedBy(letter), 'abc', { result: null, index: 0 })
    })
    it('fails without changing state if its parser fails', () => {
      fail(followedBy(letter), '123', {
        index: 0,
        status: Status.Error,
      })
      fail(followedBy(seq([letter, digit])), 'abc', {
        index: 0,
        status: Status.Error,
      })
    })
  })

  describe('followedByL', () => {
    it('succeeds without changing state if its parser succeeds', () => {
      pass(followedByL(letter, 'test'), 'abc', { result: null, index: 0 })
    })
    it('fails without changing state if its parser fails', () => {
      fail(followedByL(letter, 'one single letter'), '123', {
        expected: 'one single letter',
        index: 0,
        status: Status.Error,
      })
      fail(followedByL(seq([letter, digit]), 'a letter, then a digit'), 'abc', {
        expected: 'a letter, then a digit',
        index: 0,
        status: Status.Error,
      })
    })
  })

  describe('notFollowedBy', () => {
    it('fails without changing state if its parser succeeds', () => {
      fail(notFollowedBy(letter), 'abc', { index: 0, status: Status.Error })
    })
    it('succeeds without changing state if its parser fails', () => {
      pass(notFollowedBy(letter), '123', { result: null, index: 0 })
      pass(notFollowedBy(seq([letter, digit])), 'abc', {
        result: null, index: 0,
      })
    })
  })

  describe('notFollowedByL', () => {
    it('fails without changing state if its parser succeeds', () => {
      fail(notFollowedByL(letter, 'something other than a letter'), 'abc', {
        expected: 'something other than a letter',
        index: 0,
        status: Status.Error,
      })
    })
    it('succeeds without changing state if its parser fails', () => {
      pass(notFollowedByL(letter, 'test'), '123', { result: null, index: 0 })
      pass(notFollowedByL(seq([letter, digit]), 'test'), 'abc', {
        result: null, index: 0,
      })
    })
  })
})
