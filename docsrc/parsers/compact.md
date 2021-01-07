<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `compact(p: Parser, m?: string): Parser`

Applies a parser and returns the elements of the resulting array except for any `null` or `undefined` elements.

This combinator is useful in conjunction with parsers like [`seq`](seq.md) and [`many`](many.md), which may return `null` values amongst their array elements, particularly if the [`opt`](opt.md) parser is used in their contained parsers. In a prior version of Kessel, `seq` and `many` dropped their `null` values by default, but this was found to be less than ideal for a number of reasons. `compact` brings that behavior back when needed.

#### Example

```javascript
const parser = compact(seq(opt(char('-')), digit, digit))

const s = parse(parser, '-12')
console.log(status(s))  // "ok"
console.log(success(s)) // ["-", "1", "2"]

const r = parser(parser, '12')
console.log(status(r))  // "ok"
console.log(success(r)) // ["1", "2"]

const f = parse(parser, 'ab')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ab
                        // ^
                        // Expected '-' or a digit
```

#### Parameters

* `p`: The parser that is applied, which must return an array.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the resulting array's elements except for `null` and `undefined` elements.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `p` succeeds but does not return an array.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`many`](many.md)
* [`map`](map.md)
* [`opt`](opt.md)
* [`seq`](seq.md)