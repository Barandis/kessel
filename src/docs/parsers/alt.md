<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `alt(...ps: Parser[], m?: string): Parser`
> 
Applies each of its parsers, one at a time, until the first one succeeds, the first one fails fatally, or they all fail.

If a parser in `ps` succeeds, no further parsers will be applied and the result of the successful parser will be returned.

If a parser in `ps` fails fatally, no further parsers will be applied and `alt` will fail fatally. This rule is necessary to ensure that each branch of the `alt` is starting from the same state (a fatal failure generally means input is consumed and the state has therefore changed).

If all parsers in `ps` fail, then `alt` fails as well.

`alt(p, q)` is the same as `orElse(p, q)`, while `alt(p, q, r)` is the same as `orElse(orElse(p, q), r)`, etc. Because of JavaScript's lack of custom operators, `alt` becomes much more commonly used. In languages with custom operators, that `orElse(orElse(p, q), r)` would become a much more manageable `p <|> q <|> r` (if `orElse` was implemented as `<|>`, as it is in Parsec and FParsec), and `alt` itself would be less necessary.

`orElse(p, q)` is more efficient than `alt(p, q)`, though once a third parser is added `alt` becomes more efficient. The differences should not be enough to be of concern.

#### Example

```javascript
const parser = alt(left(letter, digit), right(digit, letter), space)

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const r = parse(parser, '1a')
console.log(status(r))  // "ok"
console.log(success(r)) // "a"

const p = parse(parser, ' ')
console.log(status(p))  // "ok"
console.log(success(p)) // " "

const f = parse(parser, '-a')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // -a
                        // ^
                        // Expected a letter, a digit, or whitespace

const t = parse(parser, 'a ')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // a 
                        //  ^
                        // Expected a digit or a letter
```

The example shows *three* success cases, `s`, `r`, and `p`, one for each parser passed to `alt`. If all of these fail, as in the first failure case (`f`), then failure is the result. In the second failure case (`t`), the first parser fails but consumes input as it does so, so `alt` is halted at that point without applying its second or third parsers. Fatal failure is the result.

#### Parameters

* `...ps`: The parsers to apply one at a time until one succeeds.
* `m`: An optional message to be used as the expected error message in the event of failure, in place of the collected expected error messages of the parsers in `ps`.

#### Success

* Succeeds if any parser in `ps` succeeds. Its result is returned.

#### Failure

* Fails if every parser in `ps` fails.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.

#### Throws

* Throws if any member of `ps` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`attempt`](attempt.md)
* [`orElse`](orelse.md)
* [`sequence`](sequence.md)