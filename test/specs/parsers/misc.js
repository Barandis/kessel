// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Status } from 'kessel/core'
import { always, failNormally, failFatally } from 'kessel/parsers/misc'
import { terror, tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Miscellaneous parsers', () => {
  describe('failNormally', () => {
    it('throws if its argument is not a string', () => {
      terror(failNormally(0), '', '[failNormally]: expected a string; found 0')
    })
    it('fails with the supplied generic message', () => {
      tfail(failNormally('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fail,
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

  describe('always', () => {
    it('succeeds with the passed-in value', () => {
      tpass(always('a'), '', 'a')
      tpass(always(23), '', { result: 23, index: 0 })
      tpass(always({ a: 1 }), '', { result: { a: 1 }, index: 0 })
    })
  })
})
