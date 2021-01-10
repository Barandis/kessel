<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `empty(p: Parser, m?: string): Parser`

Applies a parser and succeeds if that parser succeeds but does not return a result. If the parser does return a result, `empty` will fail.

This parser cannot produce a useful error message automatically. To provide a custom message, pass an expected error message in as the second argument.

#### Example

```javascript
const parser = empty(opt(char('+')))

const s = parse(parser, '123')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, '+123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // +123
                        // ^
                        // Unknown error(s)
```

#### Parameters

* `p`: The parser to be applied. `empty` fails if this `p` succeeds but produces a result.
* `m`: The optional expected message that will be added if `empty` fails.

#### Success

* Succeeds if `p` succeeds but doesn't return a result.

#### Failure

* Fails if `p` fails.
* Fails if `p` succeeds but returns a result.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`not`](not.md)