<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `hex`

```javascript
const parser = hex

const s = parse(parser, 'cafe')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "c"

const f = parse(parser, 'xyz')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // xyz
                        // ^
                        // Expected a hexadecimal digit
```

Reads a character and succeeds if that character is a hexadecimal digit (`0-9`, `a-f`, or `A-F`).

#### Success

* Succeeds if the next character is a hexadecimal digit (`0-9`, `a-f`, or `A-F`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`digit`](digit.md)
* [`octal`](octal.md)