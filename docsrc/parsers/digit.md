<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `digit(m?: string): Parser`

Parses a decimal digit (`0-9`).

Note that this parses ASCII digits, not UTF-8 digits in general. For that, use [`regex(/^\p{Nd}/u)`](regex.md).

#### Example

```javascript
const parser = digit()

const s = parse(parser, '123')
console.log(status(s))  // "ok"
console.log(success(s)) // "1"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a digit
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a decimal digit (`0-9`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`hex`](/hex.md)
* [`octal`](/octal.md)