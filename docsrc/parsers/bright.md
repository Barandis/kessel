<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `bright(p: Parser, q: Parser, m?: string): Parser`

Applies two parsers in order, returning the result of the second one.

The result of the first parser is discarded. If either parser fails, then the entire `bright` parser also fails. If input was consumed by either parser and one of them fails, backtracking will take the state back to where it was before `p` was applied.

#### Example

```javascript
const parser = bright(letter(), digit())

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "1"

const f = parse(parser, '12')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 12
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab')
console.log(status(t))  // "fail"
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

* `p`: The first parser to apply. This parser's result will be discarded.
* `q`: The second parser to apply. If both parsers succeed, this parser's result will be `rightB`'s result.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if both `p` and `q` succeed. Returns the result of `q`.

#### Failure

* Fails if either `p` or `q` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p` or `q` fail fatally.

#### Throws

* Throws an error if either `p` or `q` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`bleft`](bleft.md)
* [`bseq`](bseq.md)
* [`right`](right.md)