<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `buntil(p: Parser, e: Parser, m?: string): Parser`

Applies a content parser zero or more times as long as an end parser continues to fail. Once the end parser succeeds, the content parser's successes are collected into an array and returned.

This parser differs from [`bbetween`](bbetween.md) in that the `e` parser is applied *first*; because of this, there is no possibility of content parser `p` consuming whatever `e` is supposed to match and thereby causing the combinator to fail.

If `p` fails before `e` succeeds and input was consumed, the state will backtrack to where it was before `p` was applied the first time.

#### Example

```javascript
const parser = buntil(letter(), char('>'))

const s = parse(parser, 'abcd>')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b", "c", "d"]

const f = parse(parser, '1234>')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1234>
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab12>')
console.log(status(t))  // "fail"
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

* `p`: The content parser. After `e` succeeds, the prior results of this parser are returned as an array.
* `e`: The end parser. `p` will continue to be applied until `e` succeeds. Its result is discarded.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds as long as `e` succeeds before `p` fails. Returns the results of `p` as an array. If `e` succeeds on the first attempt, `p` is never applied and the returned array is empty.

#### Failure

* Fails if `p` fails before `e` succeeds. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p` or `e` fail fatally.

#### Throws

* Throws an error if either `p` or `e` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`bbetween`](bbetween.md)
* [`bseq`](bseq.md)
* [`until`](until.md)