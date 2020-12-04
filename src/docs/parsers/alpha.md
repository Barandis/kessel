<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `alpha`

```javascript
const parser = alpha

const s = parse(parser, 'abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, '---')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ---
                        // ^
                        // Expected an alphanumeric character
```

Reads the next character and succeeds if that character is an ASCII alphanumeric character (`0-9`, `a-z`, or `A-Z`).

This does not parse UTF-8 alphanumeric characters in general. Use [`alphaU`](#alphaU) for that.

#### Success

* Succeeds if the next character is an ASCII alphanumeric character (`0-9`, `a-z`, or `A-Z`). Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alphaU`](alphau.md)
* [`letter`](letter.md)
* [`lower`](lower.md)
* [`upper`](upper.md)