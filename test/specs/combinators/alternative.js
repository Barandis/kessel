// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  alt,
  def,
  empty,
  not,
  opt,
  peek,
} from 'kessel/combinators/alternative'
import { many, seq } from 'kessel/combinators/sequence'
import { Status } from 'kessel/core'
import { attempt } from 'kessel/index'
import { any, char, digit, letter } from 'kessel/parsers/char'
import { str } from 'kessel/parsers/string'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Alternative and conditional combinators', () => {
  describe('alt', () => {
    const parser = alt(
      seq(char('a'), char('b')),
      seq(char('c'), char('d')),
      seq(char('e'), char('f')),
    )
    const parserm = alt(
      seq(char('a'), char('b')),
      seq(char('c'), char('d')),
      seq(char('e'), char('f')),
      "one of 'ab', 'cd', or 'ef'",
    )

    it('throws if any of its arguments are not parsers', () => {
      terror(
        alt(any(), 0),
        'abc',
        '[alt]: expected second argument to be a parser; found 0',
      )
      terror(
        alt(any(), letter(), () => letter()),
        'abc',
        '[alt]: expected third argument to be a parser; found function',
      )
    })
    it('does not throw if the last argument only is a string', () => {
      tpass(alt(any(), 'test'), 'abc', 'a')
      terror(
        alt(any(), 'test', letter()),
        'abc',
        '[alt]: expected second argument to be a parser; found "test"',
      )
    })
    it('fails with all expecteds if all parsers fail without consuming', () => {
      tfail(parser, 'yz', "'a', 'c', or 'e'")
      tfail(parserm, 'yz', "one of 'ab', 'cd', or 'ef'")
    })
    it('fails immediately if a failed parser consumes input', () => {
      tfail(parser, 'ce', "'a' or 'd'")
      tfail(parserm, 'ce', "one of 'ab', 'cd', or 'ef'")
    })
    it('succeeds if one parser succeeds first', () => {
      tpass(parser, 'cd', { result: ['c', 'd'] })
      tpass(parserm, 'cd', { result: ['c', 'd'] })
    })
  })

  describe('opt', () => {
    it('throws if its argument is not a parser', () => {
      terror(opt(0), '', '[opt]: expected argument to be a parser; found 0')
      terror(
        opt(0, 'test'),
        '',
        '[opt]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        opt(letter(), 0),
        '',
        '[opt]: expected second argument to be a string; found 0',
      )
    })
    it('consumes input and provides a result on success', () => {
      tpass(opt(char('a')), 'abc', { result: 'a', index: 1 })
    })
    it('succeeds without consuming if its parser fails', () => {
      tpass(opt(char('a')), 'bcd', { result: null, index: 0 })
      tpass(opt(char('a'), 'test'), 'bcd', { result: null, index: 0 })
    })
    it('fails fatally if its parser fails fatally', () => {
      tfail(opt(seq(char('a'), char('b'))), 'acd', {
        expected: "'b'",
        index: 1,
        status: Fatal,
      })
      tpass(opt(attempt(seq(char('a'), char('b')))), 'acd', {
        result: null,
        index: 0,
      })
      tfail(opt(seq(char('a'), char('b')), 'test'), 'acd', {
        expected: 'test',
        index: 1,
        status: Fatal,
      })
      tpass(opt(attempt(seq(char('a'), char('b'))), 'test'), 'acd', {
        result: null,
        index: 0,
      })
    })
  })

  describe('def', () => {
    it('throws if its first argument is not a parser', () => {
      terror(
        def(0),
        '',
        '[def]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its third argument exists and is not a string', () => {
      terror(
        def(letter(), 0, 0),
        '',
        '[def]: expected third argument to be a string; found 0',
      )
    })
    it('succeeds with its parser\'s successful result', () => {
      tpass(def(char('a'), 'z'), 'abc', 'a')
      tpass(def(char('a'), 'z', 'test'), 'abc', 'a')
    })
    it('succeeds with its value if is parser fails', () => {
      tpass(def(char('b'), 'z'), 'abc', 'z')
      tpass(def(char('b'), 'z', 'test'), 'abc', 'z')
    })
    it('fails fatally if its parser does', () => {
      tfail(def(seq(str('ab'), str('cd')), 'z'), 'abce', {
        expected: "'cd'",
        status: Fatal,
      })
      tfail(def(seq(str('ab'), str('cd')), 'z', 'test'), 'abce', {
        expected: 'test',
        status: Fatal,
      })
    })
  })

  describe('peek', () => {
    const parser = peek(seq(str('ab'), str('cd')))
    const parserm = peek(seq(str('ab'), str('cd')), "'abcd'")

    it('throws if its first argument is not a parser', () => {
      terror(
        peek(0),
        '',
        '[peek]: expected argument to be a parser; found 0',
      )
      terror(
        peek(0, 'test'),
        '',
        '[peek]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        peek(letter(), 0),
        '',
        '[peek]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds with no consumption if its parser succeeds', () => {
      tpass(parser, 'abcd', { result: ['ab', 'cd'], index: 0 })
      tpass(parserm, 'abcd', { result: ['ab', 'cd'], index: 0 })
    })
    it('fails regularly if there was no consumption', () => {
      tfail(parser, 'bcd', { expected: "'ab'", index: 0 })
      tfail(parserm, 'bcd', { expected: "'abcd'", index: 0 })
    })
    it('fails with no consumption if its parser fails', () => {
      tfail(parser, 'abd', { nested: "'cd'", index: 0 })
      tfail(parserm, 'abd', { compound: "'abcd'", index: 0 })
    })
  })

  describe('empty', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        empty(0),
        '',
        '[empty]: expected argument to be a parser; found 0',
      )
      terror(
        empty(0, 'test'),
        '',
        '[empty]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        empty(many(letter()), 0),
        '',
        '[empty]: expected second argument to be a string; found 0',
      )
    })
    it('succeeds if its parser succeeds without consuming input', () => {
      tpass(empty(many(letter())), '123', { result: null })
      tpass(empty(many(letter()), 'no letters'), '123', { result: null })
    })
    it('fails if its parser succeeds and consumed input', () => {
      tfail(empty(many(letter())), 'abc', {
        expected: '',
        index: 3,
        status: Fail,
      })
      tfail(empty(many(letter()), 'no letters'), 'abc', {
        expected: 'no letters',
        index: 3,
        status: Fail,
      })
    })
    it('fails if its parser fails', () => {
      tfail(empty(letter()), '123', {
        expected: 'a letter',
        index: 0,
        status: Fail,
      })
      tfail(empty(seq(letter(), letter())), 'a1', {
        expected: 'a letter',
        index: 1,
        status: Fatal,
      })
      tfail(empty(letter(), 'at least one letter'), '123', {
        expected: 'at least one letter',
        index: 0,
        status: Fail,
      })
      tfail(empty(seq(letter(), letter()), 'a1 or something'), 'a1', {
        expected: 'a1 or something',
        index: 1,
        status: Fatal,
      })
    })
  })

  describe('not', () => {
    it('throws if its argument is not a parser', () => {
      terror(
        not(0),
        '',
        '[not]: expected argument to be a parser; found 0',
      )
      terror(
        not(0, 'test'),
        '',
        '[not]: expected first argument to be a parser; found 0',
      )
    })
    it('throws if its second argument exists and is not a string', () => {
      terror(
        not(many(letter()), 0),
        '',
        '[not]: expected second argument to be a string; found 0',
      )
    })
    it('fails without changing state if its parser succeeds', () => {
      tfail(not(letter()), 'abc', { index: 0, status: Fail })
      tfail(not(letter(), 'something other than a letter'), 'abc', {
        expected: 'something other than a letter',
        index: 0,
        status: Fail,
      })
    })
    it('succeeds without changing state if its parser fails', () => {
      tpass(not(letter()), '123', { result: null, index: 0 })
      tpass(not(seq(letter(), digit())), 'abc', {
        result: null, index: 0,
      })
      tpass(not(letter(), 'test'), '123', { result: null, index: 0 })
      tpass(not(seq(letter(), digit()), 'test'), 'abc', {
        result: null, index: 0,
      })
    })
  })
})
