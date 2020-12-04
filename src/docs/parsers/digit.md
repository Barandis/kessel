<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `digit`

```javascript
const parser = digit

const s = parse(parser, '123')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "1"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a digit
```

Reads a character and succeeds if it is a decimal digit (`0-9`).

Note that this parses ASCII digits, not UTF-8 digits in general. For that, use [`regex(/^\p{Nd}/u)`](regex.md).

#### Success

* Succeeds if the next character is a decimal digit (`0-9`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`hex`](/hex.md)
* [`octal`](/octal.md)