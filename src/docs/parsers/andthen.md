<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `andThen(p1, p2)`

```javascript
const parser = andThen(letter, digit)

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
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

Applies two parsers in order, returning their results in a tuple.

If either parser fails, then the entire `andThen` parser also fails. If input was consumed by either parser and one of them fails, then the failure is fatal (whether or not `p1` or `p2` failed fatally). In the examples, `f` represents a non-fatal failure because the first parser ([`letter`](letter.md)) failed without consuming, but `t` represents a fata failure because the first parser consumed a character before the second parser ([`digit`](digit.md)) failed non-fatally.

There is another version of this parser ([`andThenB`](andthenb.md)) that will backtrack and fail non-fatally if `p1` succeeds and `p2` fails non-fatally.

`andThen(p1, p2)` is an optimized implementation of `chain(p1, a => chain(p2, b => always([a, b])))`.

#### Parameters

* `p1` The first parser to apply. If both parsers succeed, this parser's result will be the first element of `both`'s result.
* `p2` The second parser to apply. If both parsers succeed, this parser's result will be the second element of `both`'s result.

#### Success

* Succeeds if both `p1` and `p2` succeed. Returns the result of `p1`.

#### Failure

* Fails if `p1` fails.
* Fails if `p2` fails after `p1` succeeds but does not consume input.

#### Fatal Failure

* Fails fatally if either `p1` or `p2` fails fatally.
* Fails fatally if `p2` fails after `p1` succeeds and consumes some input.

#### Throws

* Throws an error if either `p1` or `p2` are not parsers.

#### See Also

* [`andThenB`](andthenb.md)
* [`left`](left.md)
* [`right`](right.md)
* [`sequence`](sequence.md)