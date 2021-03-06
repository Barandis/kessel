<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `many1(p: Parser, m?: string): Parser`

Applies a parser as many times as possible until it fails, collecting the results into a resulting array.

`many1` executes a parser one or more times, as long as it continues to succeed. The operation of the parser in EBNF is `p+`. When the parser fails, that does not mean that `many1` fails (as long as the parser succeeded at least once); that signals that `many1` is through executing and the successful results up to that point are returned.

As long as `p` succeeds at least once, the only way `many1` can fail is if `p` fails fatally.

#### Example

```javascript
const parser = many1(right(digit(), letter()))

const s = parse(parser, '1a2b')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b"]

const f = parse(parser, 'aabb')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 2):
                        //
                        // aabb
                        // ^
                        // Expected a digit

const t = parse(parser, '112b')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // 112b
                        //  ^
                        // Expected a letter
```

#### Parameters

* `p`: The parser to apply repeatedly until it fails.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds at least once and does not fail fatally. Returns the results that `p` had before failing in an array.

#### Failure

* Fails if `p` does not succeed at least once.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`many`](many.md)