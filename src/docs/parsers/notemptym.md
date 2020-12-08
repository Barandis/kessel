<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `notEmptyM(p: Parser<T>, msg: string): Parser<null>`

Applies a parser and succeeds if that parser succeeds and returns a result. If the parser does not return a result, `notEmpty` will fail.

If this parser fails, it will use [`expected(msg)`](../tools/expected.md) as an error message.

#### Example

```javascript
const parser = notEmpty(optional(char('+')), 'something other than +')

const s = parse(parser, '123')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, '+123')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // +123
                        // ^
                        // Expected something other than +
```

#### Parameters

* `p` The parser to be applied. `notEmpty` fails if this `p` succeeds but produces no result.
* `msg` The expected error message to use on failure.

#### Success

* Succeeds if `p` succeeds and returns a result. That result is returned.

#### Failure

* Fails if `p` fails.
* Fails if `p` succeeds but does not return a result.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `msg` is not a string.

#### See Also

* [`followedByM`](followedbym.md)
* [`notEmpty`](notempty.md)
* [`notFollowedByM`](notfollowedbym.md)