<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `followedBy(p: Parser<T>, m?: string): Parser<null>`

Applies a parser and succeeds without consuming input if that parser succeeds.

This parser is similar to [`lookAhead`](lookahead.md) except that it does not produce a result.

`followedBy` does not produce an error message on failure by default. It could, but other related parsers like [`notEmpty`](notempty.md) and [`notFollowedBy`](notfollowedby.md) cannot, so the choice was made to make `followedBy` consistent with those parsers. To add an error message, pass the expected error message in as the optional second parameter.

#### Example

```javascript
const parser = followedBy(digit)

const s = parse(parser, '1')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, 'a')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // a
                        // ^
                        // Unknown message(s)
```

#### Parameters

* `p`: The parser to apply. If it succeeds, `followedBy` succeeds.
* `m`: The optional expected message that will be added if `p` fails.

#### Success

* Succeeds if `p` succeeds. Does not consume input or return a result.

#### Failure

* Fails if `p` fails or fails fatally. No input is consumed and the state is not changed in either case.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`label`](label.md)
* [`lookAhead`](lookahead.md)
* [`notEmpty`](notempty.md)
* [`notFollowedBy`](notfollowedby.md)