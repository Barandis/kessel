<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `opt(p: Parser<T>): Parser<T | null>`

Optionally matches a parser. If this parser succeeds, its result is returned. If it fails, `null` is returned.

`opt` will only fail (fatally) if its parser fails fatally.

A common use case is to skip some optional input; in this case, `opt` can be wrapped in [`skip`](skip.md), it can be placed in a position in another combinator where its output is ignored (such as [`left`](left.md)'s second parser.md), or its output can simply not be used.

#### Example

```javascript
const parser = opt(sequence(letter, digit))

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "1"]

const r = parse(parser, '1')
console.log(status(r))  // "ok"
console.log(success(r)) // null

const t = parse(parser, 'ab')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

#### Parameters

* `p`: The parser that gets applied.

#### Success

* Succeeds unless `p` fails fatally. If `p` succeeds, its result is returned. If `p` fails, `opt` still succeeds, but it returns nothing (`null`) and still generates an error message (for use in sequential combinators when the next parser also fails).

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`lookAhead`](lookahead.md)
* [`orValue`](orvalue.md)
* [`skip`](skip.md)