<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `letterU`

```javascript
const parser = letterU

const s = parse(parser, 'абв')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "а"

const f = parse(parser, '123')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a Unicode letter
```

Reads the next character and succeeds if that character is a Unicode letter.

A character is a Unicode letter if it has the Unicode `Alphabetic` binary property.

#### Success

* Succeeds if the next character is a Unicode letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alphaU`](alphau.md)
* [`letter`](letter.md)
* [`lowerU`](loweru.md)
* [`upperU`](upperu.md)