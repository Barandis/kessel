<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `join(p: Parser<[string]>): Parser<string>`

Applies a parser and returns the elements of the resulting array into a string.

This combinator solves the problem in JavaScript that there is no separate character type, and therefore a string is not just a list/array of characters. (Parsec parsers, for example, can return arrays of characters which Haskell regards also as strings in their own right.) Parsers like [`sequence`](sequence.md) and [`many`](many.md) return arrays, and often they are arrays of single-character strings. `join` will turn these results into simple strings.

`join(p)` is an optimized implementation of `chain(p, x => x.join(''))`.

#### Example

```javascript
const parser = join(many1(any))

const s = parse(parser, 'abcde')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "abcde"

const f = parse(parser, '')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected any character
```

#### Parameters

* `p` The parser that is applied, which must return an array.

#### Success

* Succeeds if `p` succeeds. Returns the resulting array's elements joined into a string.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `p` succeeds but does not return an array.

#### See Also

* [`map`](map.md)