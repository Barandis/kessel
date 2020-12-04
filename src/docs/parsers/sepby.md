<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sepBy(p, psep)`

```javascript
const parser = sepBy(count(letter, 3), char(','))

const s = parse(parser, 'aaa,bbb,ccc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["aaa", "bbb", "ccc"]

const t = parse(parser, 'aaa,bbb,cc1')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 11):
                        //
                        // aaa,bbb,cc1
                        //           ^
                        // Expected a letter
```

Parses zero or more occurrences of a content parser, separated by a separator parser.

`sepBy` applies the content parser `p` zero or more times as long as both it and the preceding separator parser `psep` match. The operation of the parser in EBNF is `(p (psep p)*)?`. Results of the separator parser are discarded, but results of the content parser are returned in an array.

The content parser must be the last to match. If the separator parser succeeds but the content parser fails after it, then the parser state is left at the location immediately after the last success of the content parser (i.e., at the beginning of the text matched by the separator parser).

#### Parameters

* `p` The content parser. The results of this parser are returned in an array.
* `psep` The separator parser. The results of this parser are discarded.

#### Success

* Succeeds as long as neither parser fails fatally. When either parser first fails, the successful results of `p` up to that point are collected and returned. Since `p` can match zero or more times, even failure to match `p` altogether still results in success, just with an empty array as a result.

#### Fatal Failure

* Fails fatally if either parser fails fatally.

#### Throws

* Throws an error if either `p` or `psep` are not parsers.

#### See Also

* [`sepBy1`](sepby1.md)
* [`sepEndBy`](sependby.md)