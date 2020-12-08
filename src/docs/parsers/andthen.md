<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `andThen(p: Parser<T>, q: Parser<U>): Parser<[T, U]>`

Applies two parsers in order, returning their results in a tuple. 

If either parser fails, then the entire `andThen` parser also fails. If input was consumed by either parser and one of them fails, then the failure is fatal (whether or not `p` or `q` failed fatally). In the examples, `f` represents a non-fatal failure because the first parser ([`letter`](letter.md)) failed without consuming, but `t` represents a fata failure because the first parser consumed a character before the second parser ([`digit`](digit.md)) failed non-fatally.

This is the primitive combinator for sequencing parsers. In languages that have custom operators, it is often implemented as an operator like `.>>.`.

There is another version of this parser ([`andThenB`](andthenb.md)) that will backtrack and fail non-fatally if `p` succeeds and `q` fails non-fatally.

`andThen` does not emulate a member of a Haskell type class, but as the simplest sequential parser, it could be implemented using either [`chain`](chain.md) (monadic style) or [`apply`](apply.md) (applicative style). `andThen(p, q)` is equivalent to each of the following.

```javascript
// Monadic style, using chain
chain(p, a => chain(q, b => always([a, b])))

// Applicative style, using apply
apply(p, apply(q, always(b => a => [a, b])))
```

`andThen` is implemented in neither way, using an imperative style for more performance, but it may be useful to know how it fits in with monadic and applicative parsing.

#### Example

```javascript
const parser = andThen(letter, digit)

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "1"]

const f = parse(parser, '12')
console.log(status(f))  // Symbol(fail)
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

#### Parameters

* `p` The first parser to apply. If both parsers succeed, this parser's result will be the first element of `andThen`'s result.
* `q` The second parser to apply. If both parsers succeed, this parser's result will be the second element of `andThen`'s result.

#### Success

* Succeeds if both `p` and `q` succeed. Returns their results in a tuple.

#### Failure

* Fails if `p` fails.
* Fails if `q` fails after `p` succeeds but does not consume input.

#### Fatal Failure

* Fails fatally if either `p` or `q` fails fatally.
* Fails fatally if `q` fails after `p` succeeds and consumes some input.

#### Throws

* Throws an error if either `p` or `q` are not parsers.

#### See Also

* [`andThenB`](andthenb.md)
* [`apply`](apply.md)
* [`chain`](chain.md)
* [`left`](left.md)
* [`right`](right.md)
* [`sequence`](sequence.md)