// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Status } from 'kessel/core'
import {
  constant,
  fail as pfail,
  failFatally,
  failUnexpected,
} from 'kessel/parsers/misc'
import { fail, pass } from 'test/helper'

const { Error, Fatal } = Status

describe('Miscellaneous parsers', () => {
  describe('constant', () => {
    it('succeeds with the passed-in value', () => {
      pass(constant('a'), '', 'a')
      pass(constant(23), '', { result: 23, index: 0 })
      pass(constant({ a: 1 }), '', { result: { a: 1 }, index: 0 })
    })
  })

  describe('fail', () => {
    it('fails with the supplied generic message', () => {
      fail(pfail('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Error,
      })
    })
  })

  describe('failFatally', () => {
    it('fails with the supplied generic message', () => {
      fail(failFatally('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fatal,
      })
    })
  })

  describe('unexpected', () => {
    it('fails with the supplied unexpected message', () => {
      fail(failUnexpected('test message'), '', {
        unexpected: 'test message',
        index: 0,
        status: Error,
      })
    })
  })
})
