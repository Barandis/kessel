// Copyright (c) 2021 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import { range, wordinal } from 'kessel/util'

describe('Utilities', () => {
  describe('wordinal', () => {
    it('returns the word ordinal for numbers under 20', () => {
      expect(() => wordinal(-1)).to.throw()
      expect(wordinal(0)).to.equal('zeroth')
      expect(wordinal(1)).to.equal('first')
      expect(wordinal(2)).to.equal('second')
      expect(wordinal(3)).to.equal('third')
      expect(wordinal(4)).to.equal('fourth')
      expect(wordinal(5)).to.equal('fifth')
      expect(wordinal(6)).to.equal('sixth')
      expect(wordinal(7)).to.equal('seventh')
      expect(wordinal(8)).to.equal('eighth')
      expect(wordinal(9)).to.equal('ninth')
      expect(wordinal(10)).to.equal('tenth')
      expect(wordinal(11)).to.equal('eleventh')
      expect(wordinal(12)).to.equal('twelfth')
      expect(wordinal(13)).to.equal('thirteenth')
      expect(wordinal(14)).to.equal('fourteenth')
      expect(wordinal(15)).to.equal('fifteenth')
      expect(wordinal(16)).to.equal('sixteenth')
      expect(wordinal(17)).to.equal('seventeenth')
      expect(wordinal(18)).to.equal('eighteenth')
      expect(wordinal(19)).to.equal('nineteenth')
    })
    it('returns the word ordinal for tens from 20 to 90', () => {
      expect(wordinal(20)).to.equal('twentieth')
      expect(wordinal(30)).to.equal('thirtieth')
      expect(wordinal(40)).to.equal('fortieth')
      expect(wordinal(50)).to.equal('fiftieth')
      expect(wordinal(60)).to.equal('sixtieth')
      expect(wordinal(70)).to.equal('seventieth')
      expect(wordinal(80)).to.equal('eightieth')
      expect(wordinal(90)).to.equal('ninetieth')
    })
    it('returns the word ordinal for non-tens from 20 to 99', () => {
      expect(wordinal(21)).to.equal('twenty-first')
      expect(wordinal(32)).to.equal('thirty-second')
      expect(wordinal(43)).to.equal('forty-third')
      expect(wordinal(54)).to.equal('fifty-fourth')
      expect(wordinal(65)).to.equal('sixty-fifth')
      expect(wordinal(76)).to.equal('seventy-sixth')
      expect(wordinal(87)).to.equal('eighty-seventh')
      expect(wordinal(98)).to.equal('ninety-eighth')
      expect(wordinal(99)).to.equal('ninety-ninth')
    })
    it('returns the word ordinal for even hundreds up to 900', () => {
      expect(wordinal(100)).to.equal('one hundredth')
      expect(wordinal(200)).to.equal('two hundredth')
      expect(wordinal(300)).to.equal('three hundredth')
      expect(wordinal(400)).to.equal('four hundredth')
      expect(wordinal(500)).to.equal('five hundredth')
      expect(wordinal(600)).to.equal('six hundredth')
      expect(wordinal(700)).to.equal('seven hundredth')
      expect(wordinal(800)).to.equal('eight hundredth')
      expect(wordinal(900)).to.equal('nine hundredth')
    })
    it('returns the word ordinal for non-hundreds up to 999', () => {
      expect(wordinal(102)).to.equal('one hundred second')
      expect(wordinal(213)).to.equal('two hundred thirteenth')
      expect(wordinal(324)).to.equal('three hundred twenty-fourth')
      expect(wordinal(435)).to.equal('four hundred thirty-fifth')
      expect(wordinal(546)).to.equal('five hundred forty-sixth')
      expect(wordinal(657)).to.equal('six hundred fifty-seventh')
      expect(wordinal(768)).to.equal('seven hundred sixty-eighth')
      expect(wordinal(879)).to.equal('eight hundred seventy-ninth')
      expect(wordinal(980)).to.equal('nine hundred eightieth')
    })
    it('returns the word ordinal for even higher groups', () => {
      expect(wordinal(1000)).to.equal('one thousandth')
      expect(wordinal(2000000)).to.equal('two millionth')
      expect(wordinal(3000000000)).to.equal('three billionth')
      expect(wordinal(4000000000000)).to.equal('four trillionth')
      expect(wordinal(5000000000000000)).to.equal('five quadrillionth')
      expect(() => wordinal(6000000000000000000)).to.throw()
    })
    it('returns the word ordinal for multiple higher groups', () => {
      expect(wordinal(1100)).to.equal('one thousand one hundredth')
      expect(wordinal(2160000)).to.equal(
        'two million one hundred sixty thousandth',
      )
      expect(wordinal(32010002400)).to.equal(
        'thirty-two billion ten million two thousand four hundredth',
      )
      expect(wordinal(Number.MAX_SAFE_INTEGER)).to.equal(
        'nine quadrillion seven trillion one hundred ninety-nine billion '
          + 'two hundred fifty-four million seven hundred forty thousand '
          + 'nine hundred ninety-first',
      )
    })
  })

  describe('range', () => {
    it('produces an exclusive range using an end point', () => {
      const result = [...range(10)]
      expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it('produces an exclusive range using start and end points', () => {
      const result = [...range(1, 10)]
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it('produces an exclusive range using start, end, and step', () => {
      const result = [...range(1, 11, 2)]
      expect(result).to.deep.equal([1, 3, 5, 7, 9])
    })
    it('produces an inclusive range using an end point', () => {
      const result = [...range(10, true)]
      expect(result).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
    it('produces an inclusive range using start and end points', () => {
      const result = [...range(1, 10, true)]
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
    it('produces an inclusive range using start, end, and step', () => {
      const result = [...range(1, 11, 2, true)]
      expect(result).to.deep.equal([1, 3, 5, 7, 9, 11])
    })
    it('produces exclusive reverse ranges using an end point', () => {
      const result = [...range(-5)]
      expect(result).to.deep.equal([0, -1, -2, -3, -4])
    })
    it('produces exclusive reverse ranges using start and end points', () => {
      const result = [...range(10, 0)]
      expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
    })
    it('produces exclusive reverse ranges using start, end, and step', () => {
      const result = [...range(10, 0, 2)]
      expect(result).to.deep.equal([10, 8, 6, 4, 2])
    })
    it('produces inclusive reverse ranges using an end point', () => {
      const result = [...range(-5, true)]
      expect(result).to.deep.equal([0, -1, -2, -3, -4, -5])
    })
    it('produces inclusive reverse ranges using start and end points', () => {
      const result = [...range(10, 0, true)]
      expect(result).to.deep.equal([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])
    })
    it('produces exclusive reverse ranges using start, end, and step', () => {
      const result = [...range(10, 0, 2, true)]
      expect(result).to.deep.equal([10, 8, 6, 4, 2, 0])
    })
    it('is equal in inclusive/exclusive if end is not part of range', () => {
      const exclusive = [...range(1, 10, 2)]
      expect(exclusive).to.deep.equal([1, 3, 5, 7, 9])
      const inclusive = [...range(1, 10, 2, true)]
      expect(inclusive).to.deep.equal([1, 3, 5, 7, 9])
    })
    it('can use floating point numbers', () => {
      const result = [...range(0.5, 2.5, 0.5)]
      expect(result).to.deep.equal([0.5, 1.0, 1.5, 2.0])
    })
    it('rejects steps of 0 and regards them as 1 instead', () => {
      const result = [...range(1, 10, 0)]
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
    it('rejects negative steps and regards them as positive instead', () => {
      const result = [...range(1, 10, -1)]
      expect(result).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9])
    })
  })
})
