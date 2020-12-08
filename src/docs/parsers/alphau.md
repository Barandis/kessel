<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `alphaU: Parser<string>`

Parses a Unicode alphanumeric character.

A character is a Unicode alphanumeric character if it has either the Unicode `Alphabetic` binary property or the Unicode `Number` binary property.

#### Example

```javascript
const parser = alphaU

const s = parse(parser, 'абв')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "а"

const f = parse(parser, '---')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ---
                        // ^
                        // Expected a Unicode alphanumeric character
```

#### Success

* Succeeds if the next character is a Unicode alphanumeric character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alpha`](alpha.md)
* [`letterU`](letteru.md)
* [`lowerU`](loweru.md)
* [`upperU`](upperu.md)