<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `not(p: Parser, m?: string): Parser`

Applies a parser and succeeds without consuming input if that parser fails.

`not` cannot feasibly produce an automatic error message on failure. To add an error message, pass an expected error message in as the second argument.

#### Example

```javascript
const parser = not(digit())

const s = parse(parser, 'a')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, '1')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1
                        // ^
                        // Unknown message(s)
```

#### Parameters

* `p`: The parser to apply. If it fails, `not` succeeds.
* `m`: The optional expected message that will be added if `not` fails.

#### Success

* Succeeds if `p` fails or fails fatally. Does not consume input or return a result.

#### Failure

* Fails if `p` succeeds. No input is consumed and the state is not changed.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`empty`](empty.md)