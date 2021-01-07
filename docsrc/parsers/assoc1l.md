<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `assoc1L(p: Parser, o: Parser, m?: string): Parser`

Parses one or more occurrences of a content parser, separated by an operation parser, then applies the operations to the content left-associatively.

The operation parser `o` must return a function that will be applied to the results of the content parser `p` that surround it. Most parsers return strings or arrays, so `o` must be [`map`](map.md), [`value`](value.md), or one of the other small number of parsers that can return arbitrary values.

`p` must be the last to match. If `o` succeeds but `p` fails after it, then the parser state is left at the location immediately after the last success of `p`. The result is constructed by applying the function returned by the first `o` to the values returned by the first two `p`s, then applying the function returned by the second `o` to that value and the value returned by the third `p`, and so on.

`assoc1L` fails if `p` never succeeds, but it is not required that `o` ever succeed. If `o` never succeeds but `p` succeeds once, that result from `p` is returned.

#### Example

```javascript
const number = map(join(many(digit)), x => parseInt(x))
const op = orElse(
  value(char('+'), (a, b) => a + b), 
  value(char('-'), (a, b) => a - b),
)
const parser = assoc1L(number, op)

const s = parse(parser, '12-34+56')
console.log(status(s))  // "ok"
console.log(success(s)) // 34

const f = parse(parser, 'ab-cd+ef')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ab-cd+ef
                        // ^
                        // Expected a digit
```

See [`assocL`](assocl.md) for an explanation  of the example. That example works identically to this one.

#### Parameters

* `p`: The content parser.
* `o`: The operation parser. This parser must return a function.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds at least once and neither `p` nor `o` ever fail fatally. If `p` succeeds once and `o` does not, the result of `p` is returned. Otherwise, the left associative application of the results of `o` to the results of `p` is returned.

#### Failure

* Fails if `p` fails on its first attempt.

#### Fatal Failure

* Fails fatally if either `p` or `o` fail fatally.

#### Throws

* Throws an error if either `p` or `o` are not parsers.
* Throws an error if any result of `o` is not a function.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`assocL`](assocl.md)
* [`assoc1R`](assoc1r.md)