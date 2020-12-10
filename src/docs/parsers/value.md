<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `value<U>(p: Parser<T>, x: U): Parser<U>`

Applies a parser and, if it succeeds, returns another value.

`x` can be anything, so `value` is one of the few combinators that can return something other than a string.

`value(p, x)` is an optimized implementation of `chain(p, () => always(x))`.

#### Example

```javascript
const parser = value(string('""'), '"')

const s = parse(parser, '""')
console.log(status(s))  // "ok"
console.log(success(s)) / "\""

const f = parse(parser, '"')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // "
                        // ^
                        // Expected '""'
```

In this example, if the parser `string('""')` succeeds, then `value` returns a single character (`"`). This parser could be used for detecting a quote inside a quoted string in CSV, for instance, where quotation marks are escaped by doubling them.

#### Parameters

* `p`: The parser that gets applied to the input.
* `x`: The value for `value` to return if `p` succeeds.

#### Success

* Succeeds if `p` succeeds. In this case, the result of `p` is discarded and `x` is returned instead.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`always`](always.md)