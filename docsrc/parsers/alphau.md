<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `alphaU(m?: string): Parser`

Parses a Unicode alphanumeric character.

A character is a Unicode alphanumeric character if it has either the Unicode `Alphabetic` binary property or the Unicode `Number` binary property.

#### Example

```javascript
const parser = alphaU

const s = parse(parser, 'абв')
console.log(status(s))  // "ok"
console.log(success(s)) // "а"

const f = parse(parser, '---')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ---
                        // ^
                        // Expected a Unicode alphanumeric character
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a Unicode alphanumeric character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alpha`](alpha.md)
* [`letterU`](letteru.md)
* [`lowerU`](loweru.md)
* [`upperU`](upperu.md)