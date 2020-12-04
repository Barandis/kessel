<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `assocL(p, pop, x)`

```javascript
const number = map(join(many(digit)), x => parseInt(x))
const op = choice(
  value(char('+'), (a, b) => a + b), 
  value(char('-'), (a, b) => a - b),
)
const parser = assocL(number, op, 0)

const s = parse(parser, '12-34+56')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // 34
```

Parses zero or more occurrences of a content parser, separated by an operation parser, then applies the operations to the content left-associatively.

The operation parser `pop` must return a function that will be applied to the results of the content parser `p` that surround it. Most parsers return strings or arrays, so `pop` must be [`map`](map.md), [`value`](value.md), or one of the other small number of parsers that can return arbitrary values.

`p` must be the last to match. If `pop` succeeds but `p` fails after it, then the parser state is left at the location immediately after the last success of `p`. The result is constructed by applying the function returned by the first `pop` to the values returned by the first two `p`s, then applying the function returned by the second `pop` to that value and the value returned by the third `p`, and so on.

If `p` never succeeds, `assocL` still succeeds, but it returns the value `x` directly. If `pop` never succeeds but `p` succeeds once, that result from `p` is returned.

This is a complex parser, so an explanation of the example is in order.

The content parser in this example is `number`, which gathers digits and parses them into an integer (this simple example does not recognize decimal points or signs). The operation parser is `op`, which matches either the character `+` or the character `-` and returns a function that adds two numbers or subtracts two numbers, respectively.

When applied to the input `'12-34+56'`, the results of the content parser are `12`, `34`, and `56`, while the results of the operation parser are the function that subtracts two numbers and the function that adds two numbers. Applying these left-associatively results in `(12 - 34) + 56`, which evaluates to `34`.

#### Parameters

* `p` The content parser.
* `pop` The operation parser. This parser must return a function.
* `x` The default return value. This is used as a result if `p` doesn't succeed at least once.

#### Success

* Succeeds if neither `p` nor `pop` fail fatally. If `p` never succeeds, `x` is returned. If `p` succeeds once and `pop` does not, the result of `p` is returned. Otherwise, the left associative application of the results of `pop` to the results of `p` is returned.

#### Fatal Failure

* Fails fatally if either `p` or `pop` fail fatally.

#### Throws

* Throws an error if either `p` or `pop` are not parsers.
* Throws an error if any result of `pop` is not a function.

#### See Also

* [`assoc1L`](assoc1l.md)
* [`assocR`](assocr.md)