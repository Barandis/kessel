<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `rightB(p1, p2)`

```javascript
const parser = rightB(letter, digit)

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "1"

const f = parse(parser, '12')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 12
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab')
console.log(status(t))  // Symbol(error)
console.log(failure(t)) // Parse error at (line 1, column 1):
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
```

Applies two parsers in order, returning the result of the second one.

The result of the first parser is discarded. If either parser fails, then the entire `rightB` parser also fails. If input was consumed by either parser and one of them fails, backtracking will take the state back to where it was before `p1` was applied.

#### Parameters

* `p1` The first parser to apply. This parser's result will be discarded.
* `p2` The second parser to apply. If both parsers succeed, this parser's result will be `rightB`'s result.

#### Success

* Succeeds if both `p1` and `p2` succeed. Returns the result of `p2`.

#### Failure

* Fails if either `p1` or `p2` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p1` or `p2` fail fatally.

#### Throws

* Throws an error if either `p1` or `p2` are not parsers.

#### See Also

* [`bothB`](bothb.md)
* [`leftB`](leftb.md)
* [`right`](rightb.md)
* [`sequenceB`](sequenceb.md)