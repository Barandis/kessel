<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `flat(p: Parser, m?: string): Parser`

Applies a parser and returns the elements of the resulting array flattened into a single-level array.

This is a combinator that's useful because of the nature of strings in JavaScript, and specifically that they are not the same as a list of characters as they are in some other languages. When a parser made from nested array-producing parsers is executed, it can often return a result that is an array with some elements that are also arrays, when what's actually desired is a simple single-level array that can be easily [`join`](join.md)ed into a string.

This combinator does exactly that, flattening an arbitrarily nested array of arrays into a single, flat array.

`flat(p)` is an optimized implementation of `map(p, x => x.flat(Infinity))`.

#### Example

```javascript
const parser = flat(seq(
  many(letter()),
  many1(seq(digit(), many1(letter()))),
))

const s = parse(parser, 'abc1ef2g3xyz')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a","b","c","1","e","f","2","g","3","x","y","z"]

const f = parse(parser, '')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected a letter or a digit
```

#### Parameters

* `p`: The parser that is applied, which must return an array.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the resulting array's elements flattened into a single-level array.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `p` succeeds but does not return an array.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`join`](join.md)
* [`map`](map.md)