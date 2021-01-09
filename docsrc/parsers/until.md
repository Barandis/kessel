<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `until(p: Parser, e: Parser, m?: string): Parser`

Applies a content parser zero or more times as long as an end parser continues to fail. Once the end parser succeeds, the content parser's successes are collected into an array and returned.

This parser differs from [`between`](between.md) in that the `e` parser is applied *first*; because of this, there is no possibility of content parser `p` consuming whatever `e` is supposed to match and thereby causing the combinator to fail.

The operation of this parser in EBNF is `(!e p)* e`.

#### Example

```javascript
const parser = until(letter, char('>'))

const s = parse(parser, 'abcd>')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b", "c", "d"]

const f = parse(parser, '1234>')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1234>
                        // ^
                        // Expected a letter

const t = parse(parser, 'ab12>')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 3):
                        //
                        // ab12>
                        //   ^
                        // Expected a letter
```

#### Parameters

* `p`: The content parser. After `e` succeeds, the prior results of this parser are returned as an array.
* `e`: The end parser. `p` will continue to be applied until `e` succeeds. Its result is discarded.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds as long as `e` succeeds before `p` fails. Returns the results of `p` as an array. If `e` succeeds on the first attempt, `p` is never applied and the returned array is empty.

#### Failure

* Fails if `p` and `e` both fail initially.
* Fails if `p` fails before `e` succeeds and prior successes from `p` did not consume any input.

#### Fatal Failure

* Fails fatally if either `p` or `e` fail fatally.
* Fails fatally if `p` fails before `e` succeeds and prior successes from `p` consumed some input.

#### Throws

* Throws an error if either `p` or `e` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`between`](between.md)
* [`seq`](seq.md)
* [`untilB`](untilb.md)