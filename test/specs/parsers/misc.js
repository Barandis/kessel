// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  constant,
  fail as pfail,
  failFatally,
  unexpected,
} from 'kessel/parsers/misc'
import { fail, pass } from 'test/helper'

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
      fail(pfail('test message'), '', { generic: 'test message', index: 0 })
    })
  })

  describe('failFatally', () => {
    it('fails with the supplied generic message', () => {
      fail(failFatally('test message'), '', {
        generic: 'test message',
        index: 0,
      })
    })
  })

  describe('unexpected', () => {
    it('fails with the supplied unexpected message', () => {
      fail(unexpected('test message'), '', {
        actual: 'test message',
        index: 0,
      })
    })
  })
})
