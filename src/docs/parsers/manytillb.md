<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `manyTillB(p, end)`

Applies a content parser zero or more times as long as an end parser continues to fail. Once the end parser succeeds, the content parser's successes are collected into an array and returned.

This parser differs from [`betweenB`](betweenb.md) in that the `end` parser is applied *first*; because of this, there is no possibility of content parser `p` consuming whatever `end` is supposed to match and thereby causing the combinator to fail.

If `p` fails before `end` succeeds and input was consumed, the state will backtrack to where it was before `p` was applied the first time.

#### Example

```javascript
const parser = manyTillB(letter, char('>'))

const s = parse(parser, 'abcd>')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "b", "c", "d"]

const f = parse(parser, '1234>')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1234>
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab12>')
console.log(status(t))  // Symbol(error)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // ab12>
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 3):
                        //
                        //   ab12>
                        //     ^
                        //   Expected a letter
```

#### Parameters

* `p` The content parser. After `end` succeeds, the prior results of this parser are returned as an array.
* `end` The end parser. `p` will continue to be applied until `end` succeeds. Its result is discarded.

#### Success

* Succeeds as long as `end` succeeds before `p` fails. Returns the results of `p` as an array. If `end` succeeds on the first attempt, `p` is never applied and the returned array is empty.

#### Failure

* Fails if `p` fails before `end` succeeds. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p` or `end` fail fatally.

#### Throws

* Throws an error if either `p` or `end` are not parsers.

#### See Also

* [`betweenB`](betweenb.md)
* [`manyTillB`](manytillb.md)
* [`sequenceB`](sequenceb.md)