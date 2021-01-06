<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `letterU: Parser<string>`

Parses a Unicode letter.

A character is a Unicode letter if it has the Unicode `Alphabetic` binary property.

#### Example

```javascript
const parser = letterU

const s = parse(parser, 'абв')
console.log(status(s))  // "ok"
console.log(success(s)) // "а"

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a Unicode letter
```

#### Success

* Succeeds if the next character is a Unicode letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`Parser`](../types/parser.md)
* [`alphaU`](alphau.md)
* [`letter`](letter.md)
* [`lowerU`](loweru.md)
* [`upperU`](upperu.md)