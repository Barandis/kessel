<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `charI(c: string, m?: string): Parser`

Parses the character `c` or its opposite case equivalent. In other words, this is a case-insensitive version of [`char`](char.md).

#### Example

```javascript
const parser = charI('a')

const s = parse(parser, 'ABC')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, 'BCD')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // BCD
                        // ^
                        // Expected 'a'
```

#### Parameters

* `c`: The character that the next input character must be (of any case) in order to succeed.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success 

* Succeeds if the next input character is either `c` or its opposite case counterpart. Consumes and returns that character.

#### Failure 

* Fails if the next input character is any other character.

#### Throws

* Throws an error if `c` is not a string or if it isn't exactly one character in length.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`any`](any.md)
* [`char`](char.md)
* [`stringI`](stringi.md)