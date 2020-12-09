<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `assocR<T>(p: Parser<T>, op: Parser<(a: T, b: T) => T>, x: T): Parser<T>`

Parses zero or more occurrences of a content parser, separated by an operation parser, then applies the operations to the content right-associatively.

The operation parser `op` must return a function that will be applied to the results of the content parser `p` that surround it. Most parsers return strings or arrays, so `op` must be [`map`](map.md), [`value`](value.md), or one of the other small number of parsers that can return arbitrary values.

`p` must be the last to match. If `op` succeeds but `p` fails after it, then the parser state is left at the location immediately after the last success of `p`. The result is constructed by applying the function returned by the first `op` to the values returned by the first two `p`s, then applying the function returned by the second `op` to that value and the value returned by the third `p`, and so on.

If `p` never succeeds, `assocR` still succeeds, but it returns the value `x` directly. If `op` never succeeds but `p` succeeds once, that result from `p` is returned.

#### Example

```javascript
const number = map(join(many(digit)), x => parseInt(x))
const op = orElse(
  value(char('+'), (a, b) => a + b), 
  value(char('-'), (a, b) => a - b),
)
const parser = assocR(number, op, 0)

const s = parse(parser, '12-34+56')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // -78
```

This is a complex parser, so an explanation of the example is in order.

The content parser in this example is `number`, which gathers digits and parses them into an integer (this simple example does not recognize decimal points or signs). The operation parser is `op`, which matches either the character `+` or the character `-` and returns a function that adds two numbers or subtracts two numbers, respectively.

When applied to the input `'12-34+56'`, the results of the content parser are `12`, `34`, and `56`, while the results of the operation parser are the function that subtracts two numbers and the function that adds two numbers. Applying these right-associatively results in `12 - (34 + 56)`, which evaluates to `-78`. (This is not mathematically valid &mdash; subtraction is left-associative absent parentheses &mdash; but it serves to illustrate how right-associativity works.)

#### Parameters

* `p`: The content parser.
* `op`: The operation parser. This parser must return a function.
* `x`: The default return value. This is used as a result if `p` doesn't succeed at least once.

#### Success

* Succeeds if neither `p` nor `op` fail fatally. If `p` never succeeds, `x` is returned. If `p` succeeds once and `op` does not, the result of `p` is returned. Otherwise, the left associative application of the results of `op` to the results of `p` is returned.

#### Fatal Failure

* Fails fatally if either `p` or `op` fail fatally.

#### Throws

* Throws an error if either `p` or `op` are not parsers.
* Throws an error if any result of `op` is not a function.

#### See Also

* [`Parser`](../types/parser.md)
* [`assocL`](assocl.md)
* [`assoc1R`](assoc1r.md)