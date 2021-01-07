<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `between(s: Parser, e: Parser, p: Parser, m?: string): Parser`

Applies a pre-parser, a content parser, and a post-parser in order, returning the value of the content parser.

All three parsers must succeed for `between` to succeed. Take care to avoid parsing too far with `p`; e.g., if the example used `join(many(any))` as a content parser instead of what it does, it would also match the ending `"`. This would mean that `e` would never succeed because `p` already consumed its `"`, so `between` would never succeed.

There is another version of this parser, [`betweenB`](betweenb.md), which backtracks and fails non-fatally if a non-fatal failure happens after input is consumed.

`between(s, e, p)` is an optimized implementation of `chain(chain(s, () => p), x => value(e, x))`. (Using higher-level parsers, this can also be written `left(right(s, p), e)`.)

#### Example

```javascript
const parser = between(char('"'), char('"'), join(many(noneOf('"'))))

const s = parse(parser, '"test"')
console.log(status(s))  // "ok"
console.log(success(s)) // "test"

const f = parse(parser, 'test"')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // test"
                        // ^
                        // Expected '"'

const t = parse(parser, '"test')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 6):
                        //
                        // "test
                        //      ^
                        // Expected '"'
                        // Note: failure occurred at the end of input
```

The first failure case in the example (`f`) is non-fatal failure, because no characters were consumed before the failure occurred. The second failure case (`t`) is fatal failure because, though `e` fails non-fatally, input was consumed before that failure happened.

#### Parameters

* `s`: The parser that is applied first. Its result is discarded.
* `e`: The parser that is applied last. Its result is discarded.
* `p`: The parser that is applied after `s` and before `e`. Its result is returned by `between` itself.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if all three parsers succeed. Returns the result of `p`.

#### Failure

* Fails if any of its three parsers fails before any input is consumed.

#### Fatal Failure

* Fails fatally if any of its three parsers fails fatally.
* Fails fatally if any of its three parsers fails after some input was consumed.

#### Throws

* Throws an error if any of `s`, `e`, and `p` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`betweenB`](betweenb.md)
* [`until`](until.md)