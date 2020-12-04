<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `followedBy(p)`

```javascript
const parser = followedBy(digit)

const s = parse(parser, '1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, 'a')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // a
                        // ^
                        // Unknown message(s)
```

Applies a parser and succeeds without consuming input if that parser succeeds.

This parser is similar to [`lookAhead`](lookahead.md) except that it does not produce a result.

`followedBy` does not produce an error message on failure. It could, but other related parsers like [`notEmpty`](notempty.md) and [`notFollowedBy`](notfollowedby.md) cannot, so the choice was made to make `followedBy` consistent with those parsers. To add an error message, either wrap this parser in [`label`](label.md) or use [`followedByM`](followedbym.md) instead.

#### Parameters

* `p` The parser to apply. If it succeeds, `followedBy` succeeds.

#### Success

* Succeeds if `p` succeeds. Does not consume input or return a result.

#### Failure

* Fails if `p` fails or fails fatally. No input is consumed and the state is not changed in either case.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`followedByM`](followedbym.md)
* [`label`](label.md)
* [`lookAhead`](lookahead.md)
* [`notEmpty`](notempty.md)
* [`notFollowedBy`](notfollowedby.md)