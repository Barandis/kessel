<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `followedByM(p: Parser<T>, msg: string): Parser<null>`

Applies a parser and succeeds without consuming input if that parser succeeds.

This parser is similar to [`lookAhead`](lookahead.md) except that it does not produce a result.

If `followedByM` fails, it will add a [`expected(msg)`](../tools/expected.md) as an error message.

#### Example

```javascript
const parser = followedByM(digit, 'a digit')

const s = parse(parser, '1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, 'a')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // a
                        // ^
                        // Expected a digit
```

#### Parameters

* `p` The parser to apply. If it succeeds, `followedBy` succeeds.
* `msg` The expected error message to use on failure.

#### Success

* Succeeds if `p` succeeds. Does not consume input or return a result.

#### Failure

* Fails if `p` fails or fails fatally. No input is consumed and the state is not changed in either case.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `msg` is not a string.

#### See Also

* [`followedBy`](followedby.md)
* [`lookAhead`](lookahead.md)
* [`notEmptyM`](notemptym.md)
* [`notFollowedByM`](notfollowedbym.md)