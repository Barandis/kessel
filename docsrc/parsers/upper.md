<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `upper(m?: string): Parser`

Parses an ASCII uppercase letter (`A-Z`).

This does not parse UTF-8 uppercase letters in general. Use [`uupper`](uupper.md) for that.

#### Example

```javascript
const parser = upper()

const s = parse(parser, 'ABC')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected an uppercase letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an ASCII uppercase letter (`A-Z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alpha`](alpha.md)
* [`letter`](letter.md)
* [`lower`](lower.md)
* [`uupper`](uupper.md)