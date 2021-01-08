<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Overview

Kessel is a parser combinator library inspired heavily by the [Parsec][1] library written in Haskell and its F# counterpart [FParsec][2]. It shares many of the features of these libraries, brought to JavaScript, and includes some others.

* Full UTF-8 support, including 3- and 4-byte characters that JavaScript doesn't regularly support
* Detailed error messages and facilities to customize error messages
* Optimized implementations of combinators to help make up for the relative slowness of parser combinators in general
* Written in a consistent functional style, which makes it natural to create new parsers that look and work just like the packaged ones
* Selectable backtracking
* Ability to write arbitrary functions that contain other parsers and can be used as parsers themselves

To illustrate, here's a short parser definition for a CSV parser. This is a fully featured parser which can handle quoted commas, escaped quotes, and the like. This example is taken from a similar example in the online book [Real World Haskell][3]. It's shorter than the Haskell/Parsec version, but JavaScript's lack of custom operators means it's perhaps a bit more dense.

=== "Parser Code"

    ```javascript
    import { 
      alt, char, end, join, many, newline, noneOf, run, second, sep,
      seqB, string, value,
    } from '@barandis/kessel'

    const quotedChar = alt(noneOf('"'), value(string('""'), '"'))

    const quotedCell = second(seqB(
      char('"'),
      join(many(quotedChar)),
      char('"', 'quote at end of cell'),
    ))

    const cell = alt(quotedCell, join(many(noneOf(',\n\r'))))
    const line = sep(cell, char(','))
    const csv = end(line, newline)

    const parseCsv = input => run(csv, input)
    ```

=== "Example Run"

    ```javascript
    // CSV input is from Wikipedia's article on comma-separated values
    // https://en.wikipedia.org/wiki/Comma-separated_values#Example

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

[1]: https://hackage.haskell.org/package/parsec
[2]: https://www.quanttec.com/fparsec/
[3]: http://book.realworldhaskell.org/read/using-parsec.html
