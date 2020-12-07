<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lower`

Parses an ASCII lowercase letter (`a-z`).

This does not parse UTF-8 lowercase letters in general. Use [`lowerU`](loweru.md) for that.

#### Example

```javascript
const parser = lower

const s = parse(parser, 'abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, 'ABC')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ABC
                        // ^
                        // Expected a lowercase letter
```

#### Success

* Succeeds if the next character is an ASCII lowercase letter (`a-z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alpha`](alpha.md)
* [`letter`](letter.md)
* [`lowerU`](loweru.md)
* [`upper`](upper.md)