<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `upper`

Parses an ASCII uppercase letter (`A-Z`).

This does not parse UTF-8 uppercase letters in general. Use [`upperU`](upperu.md) for that.

#### Example

```javascript
const parser = upper

const s = parse(parser, 'ABC')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "A"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected an uppercase letter
```

#### Success

* Succeeds if the next character is an ASCII uppercase letter (`A-Z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alpha`](alpha.md)
* [`letter`](letter.md)
* [`lower`](lower.md)
* [`upperU`](upperu.md)