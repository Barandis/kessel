<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `right(p1, p2)`

```javascript
const parser = right(letter, digit)

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
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

Applies two parsers in order, returning the result of the second one.

The result of the first parser is discarded. If either parser fails, then the entire `right` parser also fails. If input was consumed by either parser and one of them fails, then the failure is fatal (whether or not `p1` or `p2` failed fatally). In the examples, `f` represents a non-fatal failure because the first parser ([`letter`](letter.md)) failed without consuming, but `t` represents a fata failure because the first parser consumed a character before the second parser ([`digit`](digit.md)) failed non-fatally.

There is another version of this parser ([`rightB`](rightb.md)) that will backtrack and fail non-fatally if `p1` succeeds and `p2` fails non-fatally.

`right(p1, p2)` is an optimized implementation of `chain(p1, () => p2)`.

#### Parameters

* `p1` The first parser to apply. This parser's result will be discarded.
* `p2` The second parser to apply. If both parsers succeed, this parser's result will be `right`'s result.

#### Success

* Succeeds if both `p1` and `p2` succeed. Returns the result of `p2`.

#### Failure

* Fails if `p1` fails.
* Fails if `p2` fails after `p1` succeeds but does not consume any input.

#### Fatal Failure

* Fails fatally if either `p1` or `p2` fail fatally.
* Fails fatally if `p2` fails after `p1` succeeds and consumes some input.

#### Throws

* Throws an error if either `p1` or `p2` are not parsers.

#### See Also

* [`andThen`](andthen.md)
* [`left`](left.md)
* [`rightB`](rightb.md)
* [`sequence`](sequence.md)