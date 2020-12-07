<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `choice(...ps)`

Applies each of its parsers, one at a time, until the first one succeeds, the first one fails fatally, or they all fail.

If a parser in `ps` succeeds, no further parsers will be applied and the result of the successful parser will be returned.

If a parser in `ps` fails fatally, no further parsers will be applied and `choice` will fail fatally. This rule is necessary to ensure that each branch of the `choice` is starting from the same state (a fatal failure generally means input is consumed and the state has therefore changed).

If all parsers in `ps` fail, then `choice` fails as well.

`choice(p, q)` is the same as `orElse(p, q)`, while `choice(p, q, r)` is the same as `orElse(orElse(p, q), r)`, etc. Because of JavaScript's lack of custom operators, `choice` becomes much more commonly used. In languages with custom operators, that `orElse(orElse(p, q), r)` would become a much more manageable `p <|> q <|> r` (if `orElse` was implemented as `<|>`, as it is in Parsec and FParsec), and `choice` itself would be less necessary.

`orElse(p, q)` is more efficient than `choice(p, q)`, though once a third parser is added `choice` becomes more efficient. The differences should not be enough to be of concern.

#### Example

```javascript
const parser = choice(left(letter, digit), right(digit, letter), space)

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const r = parse(parser, '1a')
console.log(status(r))  // Symbol(ok)
console.log(success(r)) // "a"

const p = parse(parser, ' ')
console.log(status(p))  // Symbol(ok)
console.log(success(p)) // " "

const f = parse(parser, '-a')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // -a
                        // ^
                        // Expected a letter, a digit, or whitespace

const t = parse(parser, 'a ')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // a 
                        //  ^
                        // Expected a digit or a letter
```

The example shows *three* success cases, `s`, `r`, and `p`, one for each parser passed to `choice`. If all of these fail, as in the first failure case (`f`), then failure is the result. In the second failure case (`t`), the first parser fails but consumes input as it does so, so `choice` is halted at that point without applying its second or third parsers. Fatal failure is the result.

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
* [`orElse`](orelse.md)
* [`sequence`](sequence.md)