<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sequenceB(...ps: Parser[]): Parser<any[]>`

!!! warning "Inexpressive type"
    TypeScript cannot express as much information in this type as would be useful. Namely, the parsers in `ps` can all have different generic parameters, and the generic parameter of the return value is an array with each of those types in order, potentially missing members that are `null`.

    Unfortunately it's impossible to write a signature that can handle a variable number of arguments of variable generic types, and it's also impossible to write a signature that allows for a member of an array type to be non-existent in some cases.

Applies a series of parsers in order, returning an array that contains each parser's result.

`sequenceB` will only succeed if *all* of its parsers succeed. If one of them fails, `sequenceB` will also fail. If input was consumed before the failure occurred, `sequenceB` will backtrack to the location where its first parser was applied.

All of the results are gathered into an array.

#### Example

```javascript
const parser = sequenceB(letter, digit, letter)

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