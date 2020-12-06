<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `andThenB(p, q)`

Applies two parsers in order, returning their results in a tuple.

If either parser fails, then the entire `andThenB` parser also fails. If input was consumed by either parser and one of them fails, backtracking will take the state back to where it was before `p` was applied.

#### Example

```javascript
const parser = andThenB(letter, digit)

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "1"]

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

#### Parameters

* `p` The first parser to apply. If both parsers succeed, this parser's result will be the first element of `andThenB`'s result.
* `q` The second parser to apply. If both parsers succeed, this parser's result will be the second element of `andThenB`'s result.

#### Success

* Succeeds if both `p` and `q` succeed. Returns their results in a tuple.

#### Failure

* Fails if either `p` or `q` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p` or `q` fails fatally.

#### Throws

* Throws an error if either `p` or `q` are not parsers.

#### See Also

* [`andThen`](andthen.md)
* [`leftB`](leftb.md)
* [`rightB`](rightb.md)
* [`sequenceB`](sequenceb.md)