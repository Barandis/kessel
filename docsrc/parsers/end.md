<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `end(p: Parser, s: Parser, m?: string): Parser`

Parses zero or more occurrences of a content parser, separated and optionally ended by a separator parser.

`end` applies the content parser `p` zero or more times as long as both it and the preceding separator parser `s` match. The operation of the parser in EBNF is `(p (s p)* s?)?`. Results of the separator parser are discarded, but results of the content parser are returned in an array.

The content parser need not be the last to match. If the separator parser succeeds but the content parser fails after it, then the parser state is left at the location immediately after the last success of the separator parser.

#### Example

```javascript
const parser = end(count(letter, 3), char(','))

const s = parse(parser, 'aaa,bbb,ccc,')
console.log(status(s))  // "ok"
console.log(success(s)) // ["aaa", "bbb", "ccc"]

const t = parse(parser, 'aaa,bbb,cc1,')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 11):
                        //
                        // aaa,bbb,cc1
                        //           ^
                        // Expected a letter
```

#### Parameters

* `p`: The content parser. The results of this parser are returned in an array.
* `s`: The separator parser. The results of this parser are discarded.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds as long as neither parser fails fatally. When either parser first fails, the successful results of `p` up to that point are collected and returned. Since `p` can match zero or more times, even failure to match `p` altogether still results in success, just with an empty array as a result.

#### Fatal Failure

* Fails fatally if either parser fails fatally.

#### Throws

* Throws an error if either `p` or `s` are not parsers.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`end1`](end1.md)
* [`sep`](sep.md)