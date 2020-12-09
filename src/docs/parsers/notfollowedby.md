<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `notFollowedBy(p: Parser<T>): Parser<null>`

Applies a parser and succeeds without consuming input if that parser fails.

`notFollowedBy` cannot feasibly produce an error message on failure. To add an error message, either wrap this parser in [`label`](label.md) or use [`notFollowedByM`](notfollowedbym.md) instead.

#### Example

```javascript
const parser = notFollowedBy(digit)

const s = parse(parser, 'a')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, '1')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1
                        // ^
                        // Unknown message(s)
```

#### Parameters

* `p`: The parser to apply. If it fails, `notFollowedBy` succeeds.

#### Success

* Succeeds if `p` fails or fails fatally. Does not consume input or return a result.

#### Failure

* Fails if `p` succeeds. No input is consumed and the state is not changed.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`followedBy`](followedby.md)
* [`label`](label.md)
* [`notEmpty`](notempty.md)
* [`notFollowedByM`](notfollowedbym.md)