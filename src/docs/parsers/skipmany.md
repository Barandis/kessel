<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `skipMany(p)`

```javascript
const parser = skipMany(right(digit, letter))

const s = parse(parser, '1a2b')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const t = parse(parser, '112b')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // 112b
                        //  ^
                        // Expected a letter
```

Applies a parser as many times as possible until it fails, discarding all of the parser's results.

`skipMany` executes a parser zero or more times, as long as it continues to succeed. When the parser fails, that does not mean that `skipMany` fails; that signals that `skipMany` is through executing.

The failure case in the example shows the only way that `skipMany` can fail: its underlying [`right`](right.md) parser fails fatally because it consumed input before failing, and that fatal failure causes `skipMany` to fail. `skipMany` does not fail from non-fatal failures of its parser.

#### Parameters

* `p` The parser to apply repeatedly until it fails.

#### Success

* Succeeds if `p` does not fail fatally. Discards all results.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`many`](many.md)
* [`skipMany1`](skipmany1.md)