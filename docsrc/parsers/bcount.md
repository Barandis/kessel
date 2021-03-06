<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `bcount(p: Parser, n: number, m?: string): Parser`

Applies a parser a certain number of times, collecting the results into an array to return.

The parser `p` must succeed the full `n` times for `bcount` to succeed. Any fewer successes results in failure. Any input that is consumed in the process will be backtracked.

#### Example

```javascript
const parser = bcount(letter(), 3)

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b", "c"]

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab3')
console.log(status(t))  // "fail"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // ab3
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 3):
                        //
                        //   ab3
                        //     ^
                        //   Expected a letter
```

#### Parameters

* `p`: The parser to apply. Its results are returned in an array.
* `n`: The number of times that `p` is applied.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds `n` times. The results are collected into an array and returned.

#### Failure

* Fails if `p` fails before it has succeeded `n` times. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if `p` fails fatally before it has succeeded `n` times.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `n` is not a number.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`bseq`](bseq.md)
* [`count`](count.md)