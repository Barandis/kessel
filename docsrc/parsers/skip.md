<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `skip(p: Parser, m?: string): Parser`

Applies a parser and discards its result on success.

`skip(p)` is an optimized implementation of `chain(p, () => always(null))`.

#### Example

```javascript
const parser = skip(letter)

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter
```

#### Parameters

* `p`: The parser to apply to the input.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Discards the result and returns `null`.

#### Failure

* Fails if `p` fails.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`opt`](opt.md)
* [`skipMany`](skipmany.md)
* [`skipMany1`](skipmany1.md)