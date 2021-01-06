<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `orElse(p: Parser<T>, q: Parser<U>): Parser<T | U>`

The primitive combinator for alternatives. `orElse` will apply its two parsers one after another until one of the two succeeds.

If one of the two parsers fails fatally, `orElse` will stop at that point and fail fatally (i.e., if `p` fails fatally, `q` will never even be applied). If both parsers simply fail, `orElse` will also fail.

Because of the requirement that failure not be fatal for this parser to continue (input can't be consumed by one parser and there be hope for the other parser to succeed from a different starting point), it isn't unusual to use backtracking parsers or [`attempt`](#attempt) for either `p` or `q`.

In parser packages in other languages that support custom operators, `orElse` is often implemented as an operator like `<|>`. In Haskell this is a member of the `Alternative` type class.

#### Example

```javascript
const parser = orElse(left(letter, digit), right(digit, letter))

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const r = parse(parser, '1a')
console.log(status(r))  // "ok"
console.log(success(r)) // "a"

const f = parse(parser, ' a')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        //  a
                        // ^
                        // Expected a letter or a digit

const t = parse(parser, 'a ')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // a 
                        //  ^
                        // Expected a digit or a letter
```

#### Parameters

* `p`: The first parser to apply.
* `q`: The second parser to apply. This parser will only be applied if `p` fails; if `p` either succeeds or fails fatally, there is no need to apply `q` to know what the result will be.

#### Success

* Succeeds if both `p` and `q` succeed.

#### Failure

* Fails if both `p` and `q` fail.

#### Fatal Failure

* Fails fatally if either `p` or `q` fail fatally.

#### Throws

* Throws an error if either `p` or `q` are not parsers.

#### See Also

* [`Parser`](../types/parser.md)
* [`alt`](alt.md)
* [`andThen`](andthen.md)
* [`attempt`](attempt.md)