<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lowerU`

```javascript
const parser = lowerU

const s = parse(parser, 'абв')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "а"

const f = parse(parser, 'АБВ')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // АБВ
                        // ^
                        // Expected a Unicode lowercase letter
```

Reads the next character and succeeds if that character is a Unicode lowercase letter.

A character is a Unicode lowercase letter if it has the Unicode `Lowercase`. This is approximately equal to characters that match the regular expression `/\p{Ll}/u` but includes a few other characters as well.

#### Success

* Succeeds if the next character is a Unicode lowercase letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alphaU`](alphau.md)
* [`letterU`](letteru.md)
* [`lower`](lower.md)
* [`upperU`](upperu.md)