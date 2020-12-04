<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `octal`

```javascript
const parser = octal

const s = parse(parser, '123')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "1"

const f = parse(parser, '890')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 890
                        // ^
                        // Expected an octal digit
```

Reads the next character and succeeds if that character is an octal digit (`0-7`).

#### Success

* Succeeds if the next character is an octal digit (`0-7`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`digit`](digit.md)
* [`hex`](hex.md)