// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { fail as pfail, failFatally } from 'kessel/parsers/misc'
import { fail } from 'test/helper'

describe('Miscellaneous parsers', () => {
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
})
