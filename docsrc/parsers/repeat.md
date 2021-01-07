<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `repeat(p: Parser, n: number, m?: string): Parser`

Applies a parser a certain number of times, collecting the results into an array to return.

The parser `p` must succeed the full `n` times for `repeat` to succeed. Any fewer successes results in failure.

As with other combinators that run multiple parsers, it's possible for `repeat` to fail fatally even if the parser that failed did not fail fatally (because, for example, an earlier success consumed some input). There is another version of this parser, [`repeatB`](repeatb.md), that will backtrack and fail non-fatally when this happens.

#### Example

```javascript
const parser = repeat(letter, 3)

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b", "c"]

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab3')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 3):
                        //
                        // ab3
                        //   ^
                        // Expected a letter
```

#### Parameters

* `p`: The parser to apply. Its results are returned in an array.
* `n`: The number of times that `p` is applied.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds `n` times. The results are collected into an array and returned.

#### Failure

* Fails if `p` does not succeed at least once.
* Fails if `p` succeeds at least once but not `n` times and if the prior successes of do not consume any input.

#### Fatal Failure

* Fails fatally if `p` fails fatally.
* Fails fatally if `p` does not succeed `n` times and if prior successes consume some input.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `n` is not a number.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`opt`](opt.md)
* [`repeatB`](repeatb.md)
* [`seq`](seq.md)