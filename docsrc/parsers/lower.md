<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lower(m?: string): Parser`

Parses an ASCII lowercase letter (`a-z`).

This does not parse UTF-8 lowercase letters in general. Use [`lowerU`](loweru.md) for that.

#### Example

```javascript
const parser = lower

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, 'ABC')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ABC
                        // ^
                        // Expected a lowercase letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an ASCII lowercase letter (`a-z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alpha`](alpha.md)
* [`letter`](letter.md)
* [`lowerU`](loweru.md)
* [`upper`](upper.md)