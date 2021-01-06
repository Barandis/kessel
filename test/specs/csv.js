// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { expect } from 'chai'

import {
  alt,
  char,
  join,
  label,
  many,
  newline,
  noneOf,
  run,
  second,
  sepBy,
  sepEndBy,
  sequenceB,
  string,
  value,
} from 'kessel'

const quotedChar = alt(noneOf('"'), value(string('""'), '"'))

const quotedCell = second(sequenceB(
  char('"'),
  join(many(quotedChar)),
  label(char('"'), 'quote at end of cell'),
))

const cell = alt(quotedCell, join(many(noneOf(',\n\r'))))
const line = sepBy(cell, char(','))
const csv = sepEndBy(line, newline)

const parseCsv = input => run(csv, input)

const parseCsv1 = input => run(sepEndBy(sepBy(alt(
  second(sequenceB(
    char('"'),
    join(many(alt(noneOf('"'), value(string('""'), '"')))),
    label(char('"'), 'quote at end of cell'),
  )), join(many(noneOf(',\n\r'))),
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
