<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `always(x)`

Always succeeds and returns its passed value.

This is the only parser that can return a value that is not a string. (Some combinators can also do this.)

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

* [`value`](value.md)