<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `nth(p: Parser, n: number. m?: string): Parser`

Applies a parser and returns a given element of the resulting array.

This parser works only if `p` returns an array, and it returns the `n`th (0-based) element of that array. It's most useful with parsers like [`seq`](seq.md) and [`many`](many.md) that always return arrays, though it will work with parsers like [`map`](map.md) and [`always`](always.md) if they are programmed to return arrays.

`nth(p, n)` is an optimized implementation of `chain(p, x => always(x[n]))`.

#### Example

```javascript
const parser = nth(many1(any()), 3)

const s = parse(parser, '12345')
console.log(status(s))  // "ok"
console.log(success(s)) // "4"

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
* `n`: The 0-based index of the element from `p`'s result that should be returned.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the element of the array that `p` returns with the index `n`. If there are not `n + 1` elements in that array, it will return `undefined` in the same manner that `undefined` is always returned when indexing a non-existent element of an array.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `n` is not a number.
* Throws an error if `m` exists and is not a string.
* Throws an error if `p` succeeds but does not return an array.

#### See Also

* [`Parser`](../types/parser.md)
* [`fifth`](fifth.md)
* [`first`](first.md)
* [`fourth`](fourth.md)
* [`second`](second.md)
* [`third`](third.md)