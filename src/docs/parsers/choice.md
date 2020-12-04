<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `choice(...ps)`

```javascript
const parser = choice(left(letter, digit), right(digit, letter))

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const r = parse(parser, '1a')
console.log(status(r))  // Symbol(ok)
console.log(success(r)) // "a"

const f = parse(parser, ' a')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        //  a
                        // ^
                        // Expected a letter or a digit

const t = parse(parser, 'a ')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // a 
                        //  ^
                        // Expected a digit or a letter
```

Applies each of its parsers, one at a time, until the first one succeeds, the first one fails fatally, or they all fail.

If a parser in `ps` succeeds, no further parsers will be applied and the result of the successful parser will be returned.

If a parser in `ps` fails fatally, no further parsers will be applied and `choice` will fail fatally. This rule is necessary to ensure that each branch of the `choice` is starting from the same state (a fatal failure generally means input is consumed and the state has therefore changed).

If all parsers in `ps` fail, then `choice` fails as well.

The example shows *two* success cases. In the first one, the application of the first parser (`left(letter, digit)`) succeeds and its result is returned. In the second one, the application of the first parser fails, but the application of the second one (`right(digit, letter)`) succeeds and its result is returned.

In the first failure case, both parsers fail but neither consumes any input, so `choice` fails non-fatally. In the second case, the first parser fails fatally (it consumes `a` before it fails on the space), so the second parser is never applied and `choice` fails fatally.

Because `choice` fails immediately if any of its parsers fails fatally, it is quite common to wrap its parsers in `attempt` to turn their fatal failures into non-fatal failures. Take care in doing this, as backtracking can erase useful error information.

#### Parameters

* `...ps` The parsers to apply one at a time until one succeeds.

#### Success

* Succeeds if any parser in `ps` succeeds. Its result is returned.

#### Failure

* Fails if every parser in `ps` fails.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.

#### Throws

* Throws if any member of `ps` is not a parser.

#### See Also

* [`attempt`](attempt.md)
* [`sequence`](sequence.md)