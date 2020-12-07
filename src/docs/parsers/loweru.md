<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lowerU`

Parses a Unicode lowercase letter.

A character is a Unicode lowercase letter if it has the Unicode `Lowercase`. This is approximately equal to characters that match the regular expression `/\p{Ll}/u` but includes a few other characters as well.

#### Example

```javascript
const parser = lowerU

const s = parse(parser, 'абв')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "а"

const f = parse(parser, 'АБВ')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // АБВ
                        // ^
                        // Expected a Unicode lowercase letter
```

#### Success

* Succeeds if the next character is a Unicode lowercase letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`alphaU`](alphau.md)
* [`letterU`](letteru.md)
* [`lower`](lower.md)
* [`upperU`](upperu.md)