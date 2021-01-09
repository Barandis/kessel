<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `octal(m?: string): Parser`

Parses an octal digit (`0-7`).

#### Example

```javascript
const parser = octal()

const s = parse(parser, '123')
console.log(status(s))  // "ok"
console.log(success(s)) // "1"

const f = parse(parser, '890')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 890
                        // ^
                        // Expected an octal digit
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an octal digit (`0-7`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`digit`](digit.md)
* [`hex`](hex.md)