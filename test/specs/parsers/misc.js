// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Status } from 'kessel/core'
import {
  fail,
  failFatally,
  failUnexpected,
} from 'kessel/parsers/misc'
import { terror, tfail } from 'test/helper'

const { Error, Fatal } = Status

describe('Miscellaneous parsers', () => {
  describe('fail', () => {
    it('throws if its argument is not a string', () => {
      terror(fail(0), '', '[fail]: expected a string; found 0')
    })
    it('fails with the supplied generic message', () => {
      tfail(fail('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Error,
      })
    })
  })

  describe('failFatally', () => {
    it('throws if its argument is not a string', () => {
      terror(failFatally(0), '', '[failFatally]: expected a string; found 0')
    })
    it('fails with the supplied generic message', () => {
      tfail(failFatally('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fatal,
      })
    })
  })

  describe('failUnexpected', () => {
    it('throws if its argument is not a string', () => {
      terror(
        failUnexpected(0), '', '[failUnexpected]: expected a string; found 0',
      )
    })
    it('fails with the supplied unexpected message', () => {
      tfail(failUnexpected('test message'), '', {
        unexpected: 'test message',
        index: 0,
        status: Error,
      })
    })
  })
})
