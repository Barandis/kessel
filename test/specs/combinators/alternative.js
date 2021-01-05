// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  choice,
  followedBy,
  lookAhead,
  notEmpty,
  notFollowedBy,
  opt,
  orValue,
} from 'kessel/combinators/alternative'
import { many, sequence } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { attempt } from 'kessel/index'
import { any, char, digit, letter } from 'kessel/parsers/char'
import { string } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Alternative and conditional combinators', () => {
  describe('choice', () => {
    const parser = choice(
      sequence(char('a'), char('b')),
      sequence(char('c'), char('d')),
      sequence(char('e'), char('f')),
    )

    it('throws if any of its arguments are not parsers', () => {
      terror(
        choice(any, 0),
        'abc',
        '[choice]: expected 2nd argument to be a parser; found 0',
      )
      terror(
        choice(any, letter, () => letter),
        'abc',
        '[choice]: expected 3rd argument to be a parser; found function',
      )
    })
    it('fails with all expecteds if all parsers fail without consuming', () => {
      tfail(parser, 'yz', "'a', 'c', or 'e'")
    })
    it('fails immediately if a failed parser consumes input', () => {
      tfail(parser, 'ce', "'a' or 'd'")
    })
    it('succeeds if one parser succeeds first', () => {
      tpass(parser, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('opt', () => {
    it('throws if its argument is not a parser', () => {
      terror(opt(0), '', '[opt]: expected a parser; found 0')
    })
    it('consumes input and provides a result on success', () => {
      tpass(opt(char('a')), 'abc', { result: 'a', index: 1 })
    })
    it('succeeds without consuming if its parser fails', () => {
      tpass(opt(char('a')), 'bcd', { result: null, index: 0 })
    })
    it('fails fatally if its parser fails fatally', () => {
      tfail(opt(sequence(char('a'), char('b'))), 'acd', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
      tpass(opt(attempt(sequence(char('a'), char('b')))), 'acd', {
        result: null,
        index: 0,
      })
    })
  })

  describe('orValue', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        orValue(0),
        '',
        '[orValue]: expected 1st argument to be a parser; found 0',
      )
    })
    it('succeeds with its parser\'s successful result', () => {
      tpass(orValue(char('a'), 'z'), 'abc', 'a')
    })
    it('succeeds with its value if is parser fails', () => {
      tpass(orValue(char('b'), 'z'), 'abc', 'z')
    })
    it('fails fatally if its parser does', () => {
      tfail(orValue(sequence(string('ab'), string('cd')), 'z'), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
    })
  })

  describe('lookAhead', () => {
    const parser = lookAhead(sequence(string('ab'), string('cd')))

    it('throws if its argument is not a parser', () => {
      terror(lookAhead(0), '', '[lookAhead]: expected a parser; found 0')
    })
    it('succeeds with no consumption if its parser succeeds', () => {
      tpass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      tfail(parser, 'abd', { expected: "'cd'", index: 0 })
    })
  })

  describe('notEmpty', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        notEmpty(0),
        '',
        '[notEmpty]: expected argument to be a parser; found 0',
      )
      terror(
        notEmpty(0, 'test'),
        '',
        '[notEmpty]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        notEmpty(many(letter), 0),
        '',
        '[notEmpty]: expected second argument to be a string; found 0',
      )
    })
    it('fails if its parser succeeds without consuming input', () => {
      tfail(notEmpty(many(letter)), '123', {
        expected: '',
        index: 0,
        status: Fail,
      })
      tfail(notEmpty(many(letter), 'a letter'), '123', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds if its parser succeeds and consumed input', () => {
      tpass(notEmpty(many(letter)), 'abc', ['a', 'b', 'c'])
      tpass(notEmpty(many(letter), 'a letter'), 'abc', ['a', 'b', 'c'])
    })
    it('fails if its parser fails', () => {
      tfail(notEmpty(letter), '123', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(notEmpty(sequence(letter, letter)), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(notEmpty(letter, 'at least one letter'), '123', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(notEmpty(sequence(letter, letter), 'a1 or something'), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('followedBy', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        followedBy(0),
        '',
        '[followedBy]: expected argument to be a parser; found 0',
      )
      terror(
        followedBy(0, 'test'),
        '',
        '[followedBy]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        followedBy(many(letter), 0),
        '',
        '[followedBy]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds without changing state if its parser succeeds', () => {
      tpass(followedBy(letter), 'abc', { result: null, index: 0 })
      tpass(followedBy(letter, 'test'), 'abc', { result: null, index: 0 })
    })
    it('fails without changing state if its parser fails', () => {
      tfail(followedBy(letter), '123', { index: 0, status: Fail })
      tfail(followedBy(sequence(letter, digit)), 'abc', {
        index: 0,
        status: Fail,
      })
      tfail(followedBy(letter, 'one single letter'), '123', {
        expected: 'one single letter',
        index: 0,
        status: Fail,
      })
      tfail(followedBy(
        sequence(letter, digit), 'a letter, then a digit',
      ), 'abc', {
        expected: 'a letter, then a digit',
        index: 0,
        status: Fail,
      })
    })
  })

  describe('notFollowedBy', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        notFollowedBy(0),
        '',
        '[notFollowedBy]: expected argument to be a parser; found 0',
      )
      terror(
        notFollowedBy(0, 'test'),
        '',
        '[notFollowedBy]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        notFollowedBy(many(letter), 0),
        '',
        '[notFollowedBy]: expected second argument to be a string; found 0',
      )
    })
    it('fails without changing state if its parser succeeds', () => {
      tfail(notFollowedBy(letter), 'abc', { index: 0, status: Fail })
      tfail(notFollowedBy(letter, 'something other than a letter'), 'abc', {
        expected: 'something other than a letter',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds without changing state if its parser fails', () => {
      tpass(notFollowedBy(letter), '123', { result: null, index: 0 })
      tpass(notFollowedBy(sequence(letter, digit)), 'abc', {
        result: null, index: 0,
      })
      tpass(notFollowedBy(letter, 'test'), '123', { result: null, index: 0 })
      tpass(notFollowedBy(sequence(letter, digit), 'test'), 'abc', {
        result: null, index: 0,
      })
    })
  })
})
