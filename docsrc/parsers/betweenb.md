<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `betweenB(pre: Parser<U>, post: Parser<V>, p: Parser<T>): Parser<T>`

Applies a pre-parser, a content parser, and a post-parser in order, returning the value of the content parser.

All three parsers must succeed for `betweenB` to succeed. Take care to avoid parsing too far with `p`; e.g., if the example used `join(many(any))` as a content parser instead of what it does, it would also match the ending `"`. This would mean that `post` would never succeed because `p` already consumed its `"`, so `betweenB` would never succeed.

If any of the parsers fails after some input was consumed, the state will be backtracked to where it was before `pre` was applied.

#### Example

```javascript
const parser = betweenB(char('"'), char('"'), join(many(noneOf('"'))))

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
console.log(status(t))  // "fail"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // "test
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 6):
                        //
                        //   "test
                        //        ^
                        //   Expected '"'
                        //   Note: failure occurred at the end of input
```

#### Parameters

* `pre`: The parser that is applied first. Its result is discarded.
* `post`: The parser that is applied last. Its result is discarded.
* `p`: The parser that is applied after `pre` and before `post`. Its result is returned by `between` itself.

#### Success

* Succeeds if all three parsers succeed. Returns the result of `p`.

#### Failure

* Fails if any of its three parsers fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if any of its three parsers fails fatally.

#### Throws

* Throws an error if any of `pre`, `post`, and `p` are not parsers.

#### See Also

* [`Parser`](../types/parser.md)
* [`between`](between.md)
* [`manyTillB`](manytillb.md)