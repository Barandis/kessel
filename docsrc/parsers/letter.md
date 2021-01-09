<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `letter(m?: string): Parser`

Parses an ASCII letter (`a-z` or `A-Z`).

This does not parse UTF-8 letters in general. Use [`letterU`](letteru.md) for that.

#### Example

```javascript
const parser = letter

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an ASCII letter (`a-z` or `A-Z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alpha`](alpha.md)
* [`letterU`](letteru.md)
* [`lower`](lower.md)
* [`upper`](upper.md)