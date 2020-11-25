<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Kessel
*Parser combinator library for JavaScript*

Kessel is a full-featured parser combinator library written in JavaScript. Its aim is to make it easy to produce robust, arbitrarily complex parsers for any conceivable use.

This is alpha-quality software. The truth is that it sprouted from my attempt to write a 6502 assembler and being unsatisfied with what was available to do it, and that I've been learning about parser combinators as I go. The API is pretty solid but is still subject to change, and there's no guarantee that things won't change a lot as I learn more.

### Installation

```
npm install @barandis/kessel
```

This won't actually be available on NPM until I finish basic documentation, which should happen around the beginning of December.

There are also self-contained files (kessel.js and the minified kessel.min.js) in the `lib` directory of the distribution. These should work in the browser (where a global `kessel` object is provided) or with CommonJS or AMD.

### Overview

Kessel is a parser combinator library inspired heavily by the [Parsec][1] library written in Haskell and its F# counterpart [FParsec][2]. It shares many of the features of these libraries, brought to JavaScript, and includes some others.

* Full UTF-8 support, even with JavaScript not having UTF-8 strings
* Detailed error messages and facilities to customize error messages
* Optimized implementations of combinators, to help make up for the relative slowness of parser combinators in general
* Written in a consistent functional style, which makes it natural to create new parsers that look and work just like the packaged ones
* Selectable backtracking
* Ability to write arbitrary functions that contain other parsers and can be used as parsers themselves

To illustrate, here's a short parser definition for a CSV parser. This is a fully featured parser which can handle quoted commas, escaped quotes, and the like. This example is taken from a similar example in the online book [Real World Haskell][1]. It's shorter than the Haskell/Parsec version, but JavaScript's lack of custom operators means it's perhaps a bit more dense.

```javascript
import { 
  char, choice, join, label, many, newline, noneOf, run, second, sepBy,
  sepEndBy, sequenceB, string, value,
} from 'kessel'

const quotedChar = choice(noneOf('"'), value(string('""'), '"'))

const quotedCell = second(sequenceB(
  char('"'),
  join(many(quotedChar)),
  label(char('"'), 'quote at end of cell'),
))

const cell = choice(quotedCell, join(many(noneOf(',\n\r'))))
const line = sepBy(cell, char(','))
const csv = sepEndBy(line, newline)

const parseCsv = input => run(csv, input)
```

Running this against CSV input will produce the following result (CSV input is from [Wikipedia's article on comma-separated values][4]):

```javascript
const text = `Year,Make,Model,Description,Price
1997,Ford,E350,"ac, abs, moon",3000.00
1999,Chevy,"Venture ""Extended Edition""","",4900.00
1999,Chevy,"Venture ""Extended Edition, Very Large""",,5000.00
1996,Jeep,Grand Cherokee,"MUST SELL! air, moon roof, loaded",4799.00`

const result = parseCsv(text)

// `result` is equal to the following:
// [
//   ['Year', 'Make', 'Model', 'Description', 'Price'],
//   ['1997', 'Ford', 'E350', 'ac, abs, moon', '3000.00'],
//   ['1999', 'Chevy', 'Venture "Extended Edition"', '', '4900.00'],
//   ['1999', 'Chevy', 'Venture "Extended Edition, Very Large"', '', '5000.00'], 
//   ['1996', 'Jeep', 'Grand Cherokee', 'MUST SELL! air, moon roof, loaded', '4799.00']
// ]
```

This example exists as a test in the file `csv.js` in the `test/specs` directory.

### Documentation

Details for every function and parser in the API will be written after the long weekend.

[1]: https://hackage.haskell.org/package/parsec
[2]: https://www.quanttec.com/fparsec/
[3]: http://book.realworldhaskell.org/read/using-parsec.html
[4]: https://en.wikipedia.org/wiki/Comma-separated_values#Example
