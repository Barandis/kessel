<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `attempt(p)`

```javascript
const parser = attempt(left(letter, digit))

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, '12')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 12
                        // ^
                        // Expected a letter

const b = parse(parser, 'ab')
console.log(status(b))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
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

Applies a parser and, if it fails after consuming input, backtracks to the original location and fails non-fatally.

`attempt` implements general backtracking. It is different from the backtracking `B` parsers ([`sequenceB`](sequenceb.md), [`leftB`](leftb.md), etc.) in that it is meant to deal with all fatal failures (the `B` parsers only deal with fatal failures that result from non-fatal failures that come after successes). It's common to use this parser in conjunction with [`choice`](choice.md), [`optional`](optional.md), and other parsers which only fail if their parsers fail fatally.

Take care when using this parser. It attempts to provide information about what caused the backtracking to occur, but it's not hard to get long and convoluted error messages that don't help a lot if it's used to much. Use backtracking as little as can be done and still serve your needs.

#### Parameters

* `p` The parser that is applied and backtracked over if it fails fatally.

#### Success

* Succeeds if `p` succeeds. Returns `p`'s result.

#### Failure

* Fails if `p` fails.
* Fails if `p` fails fatally. In this case the fatal failure is turned into non-fatal failure and the state is backtracked to where it was before `p` was applied.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`choice`](choice.md)
* [`optional`](optional.md)
* [`orElse`](orelse.md)