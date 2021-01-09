<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lowerU(m?: string): Parser`

Parses a Unicode lowercase letter.

A character is a Unicode lowercase letter if it has the Unicode `Lowercase`. This is approximately equal to characters that match the regular expression `/\p{Ll}/u` but includes a few other characters as well.

#### Example

```javascript
const parser = lowerU

const s = parse(parser, 'абв')
console.log(status(s))  // "ok"
console.log(success(s)) // "а"

const f = parse(parser, 'АБВ')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // АБВ
                        // ^
                        // Expected a Unicode lowercase letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a Unicode lowercase letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alphaU`](alphau.md)
* [`letterU`](letteru.md)
* [`lower`](lower.md)
* [`upperU`](upperu.md)