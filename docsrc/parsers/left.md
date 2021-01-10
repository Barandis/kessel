<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `left(p: Parser, q: Parser, m?: string): Parser`

Applies two parsers in order, returning the result of the first one.

The result of the second parser is discarded. If either parser fails, then the entire `left` parser also fails. If input was consumed by either parser and one of them fails, then the failure is fatal (whether or not `p` or `q` failed fatally).

There is another version of this parser ([`bleft`](bleft.md)) that will backtrack and fail non-fatally if `p1` succeeds and `p2` fails non-fatally.

`left(p, q)` is the equivalent of `p <* q` in the Haskell `Applicative` class and is written `.>>` in FParsec. It can be regarded as an optimized implementation of either of the following.

```
chain(p, x => value(q, x)) // monadic style
apply(p, value(q, x => x)) // applicative style
```

#### Example

```javascript
const parser = left(letter(), digit())

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

const t = parse(parser, 'ab')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

In this example, `f` represents a non-fatal failure because the first parser (`letter`) failed without consuming, but `t` represents a fatal failure because the first parser consumed a character before the second parser (`digit`) failed non-fatally.

#### Parameters

* `p`: The first parser to apply. If both parsers succeed, this parser's result will be `left`'s result.
* `q`: The second parser to apply. This parser's result will be discarded.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if both `p` and `q` succeed. Returns the result of `p`.

#### Failure

* Fails if `p` fails.
* Fails if `q` fails after `p` succeeds but does not consume input.

#### Fatal Failure

* Fails fatally if either `p` or `q` fail fatally.
* Fails fatally if `q` fails after `p` succeds and consumes some input.

#### Throws

* Throws an error if either `p` or `q` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`bleft`](bleft.md)
* [`right`](right.md)
* [`seq`](seq.md)