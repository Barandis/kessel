<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `uletter(m?: string): Parser`

Parses a Unicode letter.

A character is a Unicode letter if it has the Unicode `Alphabetic` binary property.

#### Example

```javascript
const parser = uletter()

const s = parse(parser, 'абв')
console.log(status(s))  // "ok"
console.log(success(s)) // "а"

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a Unicode letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a Unicode letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`letter`](letter.md)
* [`ualpha`](ualpha.md)
* [`ulower`](ulower.md)
* [`uupper`](uupper.md)