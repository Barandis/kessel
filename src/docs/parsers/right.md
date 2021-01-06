<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `right(p: Parser<T>, q: Parser<U>): Parser<U>`

Applies two parsers in order, returning the result of the second one.

The result of the first parser is discarded. If either parser fails, then the entire `right` parser also fails. If input was consumed by either parser and one of them fails, then the failure is fatal (whether or not `p` or `q` failed fatally).

There is another version of this parser ([`rightB`](rightb.md)) that will backtrack and fail non-fatally if `p` succeeds and `q` fails non-fatally.

`right(p, q)` is the equivalent of `p *> q` in the Haskell `Applicative` class and is written `>>.` in FParsec. It can be regarded as an optimized implementation of either of the following.

```
chain(p, () => q) // monadic style
apply(p, apply(q, x => () => x)) // applicative style
```

#### Example

```javascript
const parser = right(letter, digit)

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
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

In this example, `f` represents a non-fatal failure because the first parser (`letter`) failed without consuming, but `t` represents a fata failure because the first parser consumed a character before the second parser (`digit`) failed non-fatally.

#### Parameters

* `p`: The first parser to apply. This parser's result will be discarded.
* `q`: The second parser to apply. If both parsers succeed, this parser's result will be `right`'s result.

#### Success

* Succeeds if both `p` and `q` succeed. Returns the result of `q`.

#### Failure

* Fails if `p` fails.
* Fails if `q` fails after `p` succeeds but does not consume any input.

#### Fatal Failure

* Fails fatally if either `p` or `q` fail fatally.
* Fails fatally if `q` fails after `p` succeeds and consumes some input.

#### Throws

* Throws an error if either `p` or `q` are not parsers.

#### See Also

* [`Parser`](../types/parser.md)
* [`andThen`](andthen.md)
* [`left`](left.md)
* [`rightB`](rightb.md)
* [`seq`](seq.md)