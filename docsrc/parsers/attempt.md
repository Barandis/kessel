<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `attempt(p: Parser, m?: string): Parser`

Applies a parser and, if it fails after consuming input, backtracks to the original location and fails non-fatally.

`attempt` implements general backtracking. It is different from the backtracking `B` parsers ([`seqB`](seqb.md), [`leftB`](leftb.md), etc.) in that it is meant to deal with all fatal failures (the `B` parsers only deal with fatal failures that result from non-fatal failures that come after successes). It's common to use this parser in conjunction with [`alt`](alt.md), [`opt`](opt.md), and other parsers which only fail if their parsers fail fatally.

If an optional error message string is provided (as the second argument), then that message will become the new text of an error message for a regular failure, or it will become the text of a compound error message if the parser had to backtrack.

#### Example

```javascript
const parser = attempt(left(letter, digit))
const parserm = attempt(left(letter, digit), 'a letter, then a digit')

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, '12')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 12
                        // ^
                        // Expected a letter

const n = parse(parserm, '12')
console.log(status(n))  // "fail"
console.log(failure(n)) // Parse error at (line 1, column 1):
                        //
                        // 12
                        // ^
                        // Expected a letter, then a digit

const b = parse(parser, 'ab')
console.log(status(b))  // "fail"
console.log(failure(b)) // Parse error at (line 1, column 1):
                        //
                        // ab
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   ab
                        //    ^
                        //   Expected a digit

const c = parse(parserm, 'ab')
console.log(status(c))  // "fail"
console.log(failure(c)) // Parse error at (line 1, column 1):
                        //
                        // ab
                        // ^
                        // Could not be parse a letter, then a digit because:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   ab
                        //    ^
                        //   Expected a digit
```

#### Parameters

* `p`: The parser that is applied and backtracked over if it fails fatally.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns `p`'s result.

#### Failure

* Fails if `p` fails.
* Fails if `p` fails fatally. In this case the fatal failure is turned into non-fatal failure and the state is backtracked to where it was before `p` was applied.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`NestedError`](../types/nestederror.md)
* [`Parser`](../types/parser.md)
* [`alt`](alt.md)
* [`def`](def.md)
* [`opt`](opt.md)