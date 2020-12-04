<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `many(p)`

```javascript
const parser = many(right(digit, letter))

const s = parse(parser, '1a2b')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "b"]

const t = parse(parser, '112b')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // 112b
                        //  ^
                        // Expected a letter
```

Applies a parser as many times as possible until it fails, collecting the results into a resulting array.

`many` executes a parser zero or more times, as long as it continues to succeed. The operation of the parser in EBNF is `p*`. When the parser fails, that does not mean that `many` fails; that signals that `many` is through executing and the successful results up to that point are returned.

The failure case in the example shows the only way that `many` can fail: its underlying `right` parser fails fatally because it consumed input before failing, and that fatal failure causes `many` to fail. `many` does not fail from non-fatal failures of its parser.

#### Parameters

* `p` The parser to apply repeatedly until it fails.

#### Success

* Succeeds if `p` does not fail fatally. Returns the results that `p` had before failing in an array.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`many1`](many1.md)
* [`skipMany`](skipmany.md)