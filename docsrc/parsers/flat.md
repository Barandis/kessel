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

Here's an additional example to demonstrate the motivation behind making this parser in the first place. While writing a TOML parser, this parser ended up being written (non-functions here &mdash; including `newline`, as TOML has its own idea of what a newline is &mdash; are just parsers defined in other parts of the code and aren't important for understanding the point):

```javascript
const mlBasicBody = join(compact(seq(
  value(opt(newline), ''),
  join(many(mlbContent)),
  join(many(join(bseq(mlbQuotes, join(many1(mlbContent)))))),
  opt(mlbQuotes),
)))
```

This not-otherwise-complex parser includes five `join` parsers. This is necessary because one of the side effects of `join` is that it eliminates an array by turning it into a string. Without `join`, this parser would produce a three-level nested array, which is hard to pick string parts out of.

At least until `flat` made it easy. It will turn that three-level nested array into a single-level array, which eliminates the need for *all* of the internal `join`s. That same parser currently looks like this.

```javascript
const mlBasicBody = join(compact(flat(seq(
  value(opt(newline), ''),
  many(mlbContent),
  many(bseq(mlbQuotes, many1(mlbContent))),
  opt(mlbQuotes),
))))
```

Now there is a single `join` at the very top, and with the internal `join`s gone, the intent of the code is much clearer.

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