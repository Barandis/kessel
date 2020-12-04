<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sequence(...ps)`

```javascript
const parser = sequence(letter, digit, letter)

const s = parse(parser, 'a1b')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["a", "1", "b"]

const f = parse(parser, '11b')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 11b
                        // ^
                        // Expected a letter

const t = parse(parser, 'a11')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 3):
                        //
                        // a11
                        //   ^
                        // Expected a letter
```

Applies a series of parsers in order, returning an array that contains each parser's result.

`sequence` will only succeed if *all* of its parsers succeed. If one of them fails, `sequence` will fail fatally if it had consumed any input up to that point, even if the parser that failed did so non-fatally.

There is another version of this parser ([`sequenceB`](sequenceb.md)) that fails non-fatally and backtracks if the parser that fails does so non-fatally.

All of the results are gathered into an array, but `null` results are skipped.

#### Parameters

* `...ps` A series of parsers to apply to the input, one at a time, in order.

#### Success

* Succeeds if every parser in `ps` succeeds. Returns all of the non-`null` results of the parsers in `ps` gathered into an array.

#### Failure

* Fails if the first parser in `ps` fails.
* Fails if any subsequent parser in `ps` fails after the prior parsers succeed but do not consume any input.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.
* Fails fatally if any parser in `ps` fails after any prior parser succeeds and consumes some input.

#### Throws

* Throws an error if any member of `ps` is not a parser.

#### See Also

* [`block`](block.md)
* [`both`](both.md)
* [`left`](left.md)
* [`right`](right.md)
* [`sequenceB`](sequenceb.md)