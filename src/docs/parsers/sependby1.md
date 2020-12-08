<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `sepEndBy1(p: Parser<T>, sep: Parser<U>): Parser<[T]>`

Parses one or more occurrences of a content parser, separated and optionally ended by a separator parser.

`sepEndBy1` applies the content parser `p` one or more times as long as both it and the preceding separator parser `sep` match. The operation of the parser in EBNF is `p (sep p)* sep?`. Results of the separator parser are discarded, but results of the content parser are returned in an array.

The content parser need not be the last to match. If the separator parser succeeds but the content parser fails after it, then the parser state is left at the location immediately after the last success of the separator parser.

#### Example

```javascript
const parser = sepEndBy1(count(letter, 3), char(','))

const s = parse(parser, 'aaa,bbb,ccc,')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // ["aaa", "bbb", "ccc"]

const f = parse(parser, '111,')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 111
                        // ^
                        // Expected a letter

const t = parse(parser, 'aaa,bbb,cc1,')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 11):
                        //
                        // aaa,bbb,cc1
                        //           ^
                        // Expected a letter
```

#### Parameters

* `p` The content parser. The results of this parser are returned in an array.
* `sep` The separator parser. The results of this parser are discarded.

#### Success

* Succeeds as long as `p` matches at least once and neither parser fails fatally. When either parser first fails after at least one success from `p`, the successful results of `p` up to that point are collected and returned.

#### Failure

* Fails if `p` does not succeed at least once.

#### Fatal Failure

* Fails fatally if either parser fails fatally.

#### Throws

* Throws an error if either `p` or `sep` are not parsers.

#### See Also

* [`sepBy1`](sepby1.md)
* [`sepEndBy`](sependby.md)