<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `notEmpty(p: Parser<T>, m?: string): Parser<null>`

Applies a parser and succeeds if that parser succeeds and returns a result. If the parser does not return a result, `notEmpty` will fail.

This parser cannot produce a useful error message automatically. To provide a custom message, pass an expected error message in as the second argument.

`notEmpty` can be used to require at least one match from a parser. For example, [`many1(p)`](many1.md) could be naively implemented as `notEmpty(many(p))`, though it would not have a good error message.

#### Example

```javascript
const parser = notEmpty(optional(char('+')))

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

* `p`: The parser to be applied. `notEmpty` fails if this `p` succeeds but produces no result.
* `m`: The optional expected message that will be added if `notEmpty` fails.

#### Success

* Succeeds if `p` succeeds and returns a result. That result is returned.

#### Failure

* Fails if `p` fails.
* Fails if `p` succeeds but does not return a result.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`followedBy`](followedby.md)
* [`label`](label.md)
* [`notFollowedBy`](notfollowedby.md)