<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `octal: Parser<string>`

Parses an octal digit (`0-7`).

#### Example

```javascript
const parser = octal

const s = parse(parser, '123')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "1"

const f = parse(parser, '890')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 890
                        // ^
                        // Expected an octal digit
```

#### Success

* Succeeds if the next character is an octal digit (`0-7`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`Parser`](../types/parser.md)
* [`digit`](digit.md)
* [`hex`](hex.md)