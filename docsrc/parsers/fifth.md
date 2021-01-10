<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `fifth(p: Parser, m?: string): Parser`

Applies a parser and returns the fifth element of the resulting array.

This parser works only if `p` returns an array, and it returns the fifth element of that array. It's most useful with parsers like [`seq`](seq.md) and [`many`](many.md) that always return arrays, though it will work with parsers like [`map`](map.md) and [`always`](always.md) if they are programmed to return arrays.

`fifth(p)` is an optimized implementation of `chain(p, x => always(x[4]))`.

#### Example

```javascript
const parser = fifth(many1(any()))

const s = parse(parser, '12345')
console.log(status(s))  // "ok"
console.log(success(s)) // "5"

const f = parse(parser, '')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected any character
                        // Note: failure occurred at the end of input
```

#### Parameters

* `p`: The parser to apply. This parser should return an array.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the fifth element of the array that `p` returns. If there are not at least five elements in that array, it will return `undefined` in the same manner that `undefined` is always returned when indexing a non-existent element of an array.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser. 
* Throws an error if `m` exists and is not a string.
* Throws an error if `p` succeeds but does not return an array.

#### See Also

* [`Parser`](../types/parser.md)
* [`first`](first.md)
* [`fourth`](fourth.md)
* [`nth`](nth.md)
* [`second`](second.md)
* [`third`](third.md)