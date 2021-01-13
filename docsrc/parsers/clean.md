<!--
 Copyright (c) 2021 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `clean(p: Parser, m?: string): Parser`

Applies a parser and returns the resulting array with `null` and `undefined` elements filtered out.

There are a number of parsers ([`opt`](opt.md) is an excellent) that can produce `null` results. If these results are subsequently put into an array via another parser like [`seq`](seq.md), it very well could be desirable to remove those `null` elements from the resulting array. This is what `clean` does.

`clean(p)` is an optimized implementation of `map(p, x => x.filter(e => e != null))`.

#### Example

```javascript
const parser = seq(letter(), opt(digit()), letter())

const s = parse(parser, 'abcde')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a",null,"b"]

const r = parse(clean(parser), 'abcde')
console.lgo(status(r))  // "ok"
console.log(success(r)) // ["a","b"]

const f = parse(parser, '')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected a letter
```

#### Parameters

* `p`: The parser that is applied, which must return an array.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the resulting array with `null` and `undefined` elements filtered out.

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
* [`map`](map.md)