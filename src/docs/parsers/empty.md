<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `empty: Parser<null>`

A parser that always succeeds with no result.

This primarily exists for completeness, as it corresponds to the same-named operation in the `Alternative` type class in Haskell.

#### Example

```javascript
const parser = empty

const s = parse(empty, 'abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null
```

#### Success

* Always succeeds. Returns nothing and consumes no input.

#### See Also

* [`Parser`](../types/parser.md)
* [`orElse`](orelse.md)