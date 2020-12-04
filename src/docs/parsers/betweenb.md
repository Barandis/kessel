<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `betweenB(pre, post, p)`

```javascript
const parser = betweenB(char('"'), char('"'), join(many(noneOf('"'))))

const s = parse(parser, '"test"')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "test"

const f = parse(parser, 'test"')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // test"
                        // ^
                        // Expected '"'

const t = parse(parser, '"test')
console.log(status(t))  // Symbol(error)
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

Applies a pre-parser, a content parser, and a post-parser in order, returning the value of the content parser.

All three parsers must succeed for `between` to succeed. Take care to avoid parsing too far with `p`; e.g., if the example used `join(many(any))` as a content parser instead of what it does, it would also match the ending `"`. This would mean that `post` would never succeed because `p` already consumed its `"`, so `between` would never succeed.

If any of the parsers fails after some input was consumed, the state will be backtracked to where it was before `pre` was applied.

#### Parameters

* `pre` The parser that is applied first. Its result is discarded.
* `post` The parser that is applied last. Its result is discarded.
* `p` The parser that is applied after `pre` and before `post`. Its result is returned by `between` itself.

#### Success

* Succeeds if all three parsers succeed. Returns the result of `p`.

#### Failure

* Fails if any of its three parsers fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if any of its three parsers fails fatally.

#### Throws

* Throws an error if any of `pre`, `post`, and `p` are not parsers.

#### See Also

* [`between`](between.md)
* [`manyTillB`](manytillb.md)