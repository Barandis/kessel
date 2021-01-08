<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `seqB(...ps: Parser[], m?: string): Parser`

Applies a series of parsers in order, returning an array that contains each parser's result.

`seqB` will only succeed if *all* of its parsers succeed. If one of them fails, `seqB` will also fail. If input was consumed before the failure occurred, `seqB` will backtrack to the location where its first parser was applied.

All of the results are gathered into an array.

#### Example

```javascript
const parser = seqB(letter, digit, letter)

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
console.log(status(t))  // "fail"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // a11
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 3):
                        //
                        //   a11
                        //     ^
                        //   Expected a letter
```

#### Parameters

* `...ps`: A series of parsers to apply to the input, one at a time, in order.
* `m`: An optional message to be used as the expected error message in the event of failure, in place of the collected expected error messages of the parsers in `ps`.

#### Success

* Succeeds if every parser in `ps` succeeds. Returns all of the results of the parsers in `ps` gathered into an array.

#### Failure

* Fails if any parser in `ps` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.

#### Throws

* Throws an error if any member of `ps` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`blockB`](blockb.md)
* [`leftB`](leftb.md)
* [`rightB`](rightb.md)
* [`seq`](seq.md)