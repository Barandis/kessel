<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `optional(p)`

```javascript
const parser = optional(sequence(letter, digit))

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "1"]

const r = parse(parser, '1')
console.log(status(r))  // Symbol(ok)
console.log(success(r)) // null

const t = parse(parser, 'ab')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

Optionally matches a parser. If this parser succeeds, its result is returned. If it fails, `null` is returned.

`optional` will only fail (fatally) if its parser fails fatally.

A common use case is to skip some optional input; in this case, `optional` can be wrapped in [`skip`](skip.md), it can be placed in a position in another combinator where its output is ignored (such as [`left`](left.md)'s second parser.md), or its output can simply not be used.

#### Parameters

* `p` The parser that gets applied.

#### Success

* Succeeds unless `p` fails fatally. If `p` succeeds, its result is returned. If `p` fails, `optional` still succeeds, but it returns nothing (`null`).

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`lookAhead`](lookahead.md)
* [`orElse`](orelse.md)
* [`skip`](skip.md)