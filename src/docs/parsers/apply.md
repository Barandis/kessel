<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `apply<T, U>(p: Parser<T>, f: Parser<(arg: T) => U>): Parser<U>`

Applies two parsers, the second of which must return a function. Returns the result of that function when the result of the other parser is passed to it.

This parser is the applicative-style counterpart of the monadic-style [`chain`](chain.md). It corresponds to the `<*>` member of the `Applicative` type class in Haskell, which basically means that it's used for applying functions that are already "inside" a parser. As with `chain` it's not likely to see a lot of use, as none of the Kessel parsers are actually implemented in terms of it, but it's available should anyone feel the need to write parsers in an applicative style (or the JavaScript equivalent, which is certainly not as intuitive).

As this parser requires that one of its parser return a function, [`always`](always.md) is often used to provide that parser.

There is another version of this parser ([`applyB`](applyb.md)) that will backtrack and fail non-fatally if `f` fails non-fatally.

#### Example

```javascript
const parser = apply(left(letter, digit), always(c => c.toUpperCase()))

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, '1a')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1a
                        // ^
                        // Expected a letter

const t = parse(parser, 'abc')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // abc
                        //  ^
                        // Expected 'a'
```

#### Parameters

* `p`: A parser whose result is passed to the function that results from `f`.
* `f`: A parser that returns a function.

#### Success

* Succeeds if both `p` and `f` succeed. Returns the result of the function returned by `f` when applied to the result of `p`.

#### Failure

* Fails if `p` fails.
* Fails if `f` fails after `p` succeeds without consuming any input.

#### Fatal Failure

* Fails fatally if either `p` or `f` fails fatally.
* Fails if `f` fails after `p` succeeds while consuming some input.

#### Throws

* Throws an error if either `p` or `f` are not parsers.
* Throws an error if `f` succeeds but does not return a non-parser function.

#### See Also

* [`Parser`](../types/parser.md)
* [`always`](always.md)
* [`andThen`](andthen.md)
* [`applyB`](applyb.md)
* [`chain`](chain.md)
