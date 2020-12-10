<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sepBy1(p: Parser<T>, sep: Parser<U>): Parser<[T]>`

Parses one or more occurrences of a content parser, separated by a separator parser.

`sepBy1` applies the content parser `p` one or more times as long as both it and the preceding separator parser `sep` match. The operation of the parser in EBNF is `p (sep p)*`. Results of the separator parser are discarded, but results of the content parser are returned in an array.

The content parser must be the last to match. If the separator parser succeeds but the content parser fails after it, then the parser state is left at the location immediately after the last success of the content parser (i.e., at the beginning of the text matched by the separator parser).

#### Example

```javascript
const parser = sepBy1(count(letter, 3), char(','))

const s = parse(parser, 'aaa,bbb,ccc')
console.log(status(s))  // "ok"
console.log(success(s)) // ["aaa", "bbb", "ccc"]

const f = parse(parser, '111')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 111
                        // ^
                        // Expected a letter

const t = parse(parser, 'aaa,bbb,cc1')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 11):
                        //
                        // aaa,bbb,cc1
                        //           ^
                        // Expected a letter
```

#### Parameters

* `p`: The content parser. The results of this parser are returned in an array.
* `sep`: The separator parser. The results of this parser are discarded.

#### Success

* Succeeds as long as `p` matches at least once and neither parser fails fatally. When either parser first fails after at least one success from `p`, the successful results of `p` up to that point are collected and returned.

#### Failure

* Fails if `p` does not succeed at least once.

#### Fatal Failure

* Fails fatally if either parser fails fatally.

#### Throws

* Throws an error if either `p` or `sep` are not parsers.

#### See Also

* [`Parser`](../types/parser.md)
* [`sepBy`](sepby.md)
* [`sepEndBy1`](sependby1.md)