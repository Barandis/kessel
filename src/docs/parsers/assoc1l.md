<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `assoc1L(p, pop)`

```javascript
const number = map(join(many(digit)), x => parseInt(x))
const op = choice(
  value(char('+'), (a, b) => a + b), 
  value(char('-'), (a, b) => a - b),
)
const parser = assoc1L(number, op)

const s = parse(parser, '12-34+56')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // 34

const f = parse(parser, 'ab-cd+ef')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ab-cd+ef
                        // ^
                        // Expected a digit
```

Parses one or more occurrences of a content parser, separated by an operation parser, then applies the operations to the content left-associatively.

The operation parser `pop` must return a function that will be applied to the results of the content parser `p` that surround it. Most parsers return strings or arrays, so `pop` must be [`map`](map.md), [`value`](value.md), or one of the other small number of parsers that can return arbitrary values.

`p` must be the last to match. If `pop` succeeds but `p` fails after it, then the parser state is left at the location immediately after the last success of `p`. The result is constructed by applying the function returned by the first `pop` to the values returned by the first two `p`s, then applying the function returned by the second `pop` to that value and the value returned by the third `p`, and so on.

`assoc1L` fails if `p` never succeeds, but it is not required that `pop` ever succeed. If `pop` never succeeds but `p` succeeds once, that result from `p` is returned.

See [`assocL`](assocl.md) for an explanation of the success case of the example. That example works identically to this one.

#### Parameters

* `p` The content parser.
* `pop` The operation parser. This parser must return a function.

#### Success

* Succeeds if `p` succeeds at least once and neither `p` nor `pop` ever fail fatally. If `p` succeeds once and `pop` does not, the result of `p` is returned. Otherwise, the left associative application of the results of `pop` to the results of `p` is returned.

#### Failure

* Fails if `p` fails on its first attempt.

#### Fatal Failure

* Fails fatally if either `p` or `pop` fail fatally.

#### Throws

* Throws an error if either `p` or `pop` are not parsers.
* Throws an error if any result of `pop` is not a function.

#### See Also

* [`assocL`](assocl.md)
* [`assoc1R`](assoc1r.md)
* 