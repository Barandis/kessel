// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  alt,
  char,
  endby,
  join,
  many,
  newline,
  noneof,
  run,
  second,
  sepby,
  seqB,
  string,
  value,
} from 'kessel'

const quotedChar = alt(noneof('"'), value(string('""'), '"'))

const quotedCell = second(seqB(
  char('"'),
  join(many(quotedChar)),
  char('"', 'quote at end of cell'),
))

const cell = alt(quotedCell, join(many(noneof(',\n\r'))))
const line = sepby(cell, char(','))
const csv = endby(line, newline)

const parseCsv = input => run(csv, input)

const parseCsv1 = input => run(endby(sepby(alt(
  second(seqB(
    char('"'),
    join(many(alt(noneof('"'), value(string('""'), '"')))),
    char('"', 'quote at end of cell'),
  )), join(many(noneof(',\n\r'))),
), char(',')), newline), input)

describe('CSV parser', () => {
  it('successfully parses example CSV', () => {
    const text = `Year,Make,Model,Description,Price
1997,Ford,E350,"ac, abs, moon",3000.00
1999,Chevy,"Venture ""Extended Edition""","",4900.00
1999,Chevy,"Venture ""Extended Edition, Very Large""",,5000.00
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00`

    const expected = [
      ['Year', 'Make', 'Model', 'Description', 'Price'],
      ['1997', 'Ford', 'E350', 'ac, abs, moon', '3000.00'],
      ['1999', 'Chevy', 'Venture "Extended Edition"', '', '4900.00'],
      ['1999', 'Chevy', 'Venture "Extended Edition, Very Large"', '',
        '5000.00'],
      ['1996', 'Jeep', 'Grand Cherokee', 'MUST SELL! air, moon roof, loaded',
        '4799.00'],
    ]

    expect(parseCsv(text)).to.deep.equal(expected)
    expect(parseCsv1(text)).to.deep.equal(expected)
  })
})
