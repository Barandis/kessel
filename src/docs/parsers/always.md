<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `always(x)`

Always succeeds and returns its passed value.

This is the only parser that can return a value that is not a string. (Some combinators can also do this.)

This parser serves both as the `pure` member of the `Applicative` type class and the `return` member of the `Monad` type class in Haskell. It can be used to lift arbitrary values into the context of a parser, particularly to lift functions to allow them to be used by [`apply`](apply.md) and to lift values that functions return to allow them to be used by [`chain`](chain.md).

#### Example

```javascript
const parser = always(3.14)

const s = parse(parser, 'abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // 3.14
```

#### Parameters

* `x` An arbitrary value that this parser always returns.

#### Success

* Always succeeds. Returns `x` and consumes no input.

#### See Also

* [`apply`](apply.md)
* [`chain`](chain.md)
* [`value`](value.md)