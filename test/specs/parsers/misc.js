// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Status } from 'kessel/core'
import {
  always,
  fail as pfail,
  failFatally,
  failUnexpected,
} from 'kessel/parsers/misc'
import { error, fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Miscellaneous parsers', () => {
  describe('always', () => {
    it('succeeds with the passed-in value', () => {
      pass(always('a'), '', 'a')
      pass(always(23), '', { result: 23, index: 0 })
      pass(always({ a: 1 }), '', { result: { a: 1 }, index: 0 })
    })
  })

  describe('fail', () => {
    it('throws if its argument is not a string', () => {
      error(pfail(0), '', '[fail]: expected a string; found 0')
    })
    it('fails with the supplied generic message', () => {
      fail(pfail('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Error,
      })
    })
  })

  describe('failFatally', () => {
    it('throws if its argument is not a string', () => {
      error(failFatally(0), '', '[failFatally]: expected a string; found 0')
    })
    it('fails with the supplied generic message', () => {
      fail(failFatally('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fatal,
      })
    })
  })

  describe('failUnexpected', () => {
    it('throws if its argument is not a string', () => {
      error(
        failUnexpected(0), '', '[failUnexpected]: expected a string; found 0',
      )
    })
    it('fails with the supplied unexpected message', () => {
      fail(failUnexpected('test message'), '', {
        unexpected: 'test message',
        index: 0,
        status: Error,
      })
    })
  })
})
