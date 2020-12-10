<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `notFollowedByM(p: Parser<T>, msg: string): Parser<null>`

Applies a parser and succeeds without consuming input if that parser fails.

If this parser fails, it will add [`expected(msg)`](../tools/expected.md) as an error message.

#### Example

```javascript
const parser = notFollowedByM(digit, 'something other than a digit')

const s = parse(parser, 'a')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, '1')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1
                        // ^
                        // Expected something other than a digit
```

#### Parameters

* `p`: The parser to apply. If it fails, `notFollowedBy` succeeds.
* `msg`: The expected error message to use on failure.

#### Success

* Succeeds if `p` fails or fails fatally. Does not consume input or return a result.

#### Failure

* Fails if `p` succeeds. No input is consumed and the state is not changed.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `msg` is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`expected`](../tools/expected.md)
* [`followedByM`](followedbym.md)
* [`notEmptyM`](notemptym.md)
* [`notFollowedBy`](notfollowedby.md)