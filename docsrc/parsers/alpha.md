<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `alpha(m?: string): Parser`

Parses an ASCII alphanumeric character (`0-9`, `a-z`, or `A-Z`).

This does not parse UTF-8 alphanumeric characters in general. Use [`ualpha`](ualpha.md) for that.

#### Example

```javascript
const parser = alpha()

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, '---')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ---
                        // ^
                        // Expected an alphanumeric character
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an ASCII alphanumeric character (`0-9`, `a-z`, or `A-Z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`letter`](letter.md)
* [`lower`](lower.md)
* [`ualpha`](ualpha.md)
* [`upper`](upper.md)