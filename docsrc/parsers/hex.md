<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `hex(m?: string): Parser`

Parses a hexadecimal digit (`0-9`, `a-f`, or `A-F`).

#### Example

```javascript
const parser = hex()

const s = parse(parser, 'cafe')
console.log(status(s))  // "ok"
console.log(success(s)) // "c"

const f = parse(parser, 'xyz')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // xyz
                        // ^
                        // Expected a hexadecimal digit
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a hexadecimal digit (`0-9`, `a-f`, or `A-F`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`digit`](digit.md)
* [`octal`](octal.md)