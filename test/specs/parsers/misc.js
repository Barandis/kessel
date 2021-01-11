// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { Status } from 'kessel/core'
import { always, fail, fatal } from 'kessel/parsers/misc'
import { tfail, tpass } from 'test/helper'

const { Fail, Fatal } = Status

describe('Miscellaneous parsers', () => {
  describe('fail', () => {
    it('fails with the supplied generic message', () => {
      tfail(fail('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fail,
      })
    })
    it('works fine with no message', () => {
      tfail(fail(), '', { generic: undefined, index: 0, status: Fail })
    })
  })

  describe('fatal', () => {
    it('fails with the supplied generic message', () => {
      tfail(fatal('test message'), '', {
        generic: 'test message',
        index: 0,
        status: Fatal,
      })
    })
    it('works fine with no message', () => {
      tfail(fatal(), '', { generic: undefined, index: 0, status: Fatal })
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
