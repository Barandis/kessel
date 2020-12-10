<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sequence(...ps: Parser[]): Parser<any[]>`

!!! warning "Inexpressive type"
    TypeScript cannot express as much information in this type as would be useful. Namely, the parsers in `ps` can all have different generic parameters, and the generic parameter of the return value is an array with each of those types in order, potentially missing members that are `null`.

    Unfortunately it's impossible to write a signature that can handle a variable number of arguments of variable generic types, and it's also impossible to write a signature that allows for a member of an array type to be non-existent in some cases.

Applies a series of parsers in order, returning an array that contains each parser's result.

`sequence` will only succeed if *all* of its parsers succeed. If one of them fails, `sequence` will fail fatally if it had consumed any input up to that point, even if the parser that failed did so non-fatally.

There is another version of this parser ([`sequenceB`](sequenceb.md)) that fails non-fatally and backtracks if the parser that fails does so non-fatally.

All of the results are gathered into an array, but `null` results are skipped.

A two-parser `sequence` is the same as [`andThen`](andthen.md).

#### Example

```javascript
const parser = sequence(letter, digit, letter)

const s = parse(parser, 'a1b')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "1", "b"]

const f = parse(parser, '11b')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 11b
                        // ^
                        // Expected a letter

const t = parse(parser, 'a11')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 3):
                        //
                        // a11
                        //   ^
                        // Expected a letter
```

#### Parameters

* `...ps`: A series of parsers to apply to the input, one at a time, in order.

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

* [`Parser`](../types/parser.md)
* [`andThen`](andthen.md)
* [`block`](block.md)
* [`left`](left.md)
* [`right`](right.md)
* [`sequenceB`](sequenceb.md)