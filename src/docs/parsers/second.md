<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `second(p: Parser<[T]>): Parser<T>`

Applies a parser and returns the second element of the resulting array.

This parser works only if `p` returns an array, and it returns the second element of that array. It's most useful with parsers like [`sequence`](sequence.md) and [`many`](many.md) that always return arrays, though it will work with parsers like [`map`](map.md) and [`always`](always.md) if they are programmed to return arrays.

`second(p)` is an optimized implementation of `chain(p, x => always(x[1]))`.

#### Example

```javascript
const parser = second(many1(any))

const s = parse(parser, '12345')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "2"

const f = parse(parser, '')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected any character
                        // Note: failure occurred at the end of input
```

#### Parameters

* `p` The parser to apply. This parser should return an array.

#### Success

* Succeeds if `p` succeeds. Returns the second element of the array that `p` returns. If there are not at least two elements in that array, it will return `undefined` in the same manner that `undefined` is always returned when indexing a non-existent element of an array.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `p` succeeds but does not return an array.

#### See Also

* [`fifth`](fifth.md)
* [`first`](first.md)
* [`fourth`](fourth.md)
* [`nth`](nth.md)
* [`third`](third.md)