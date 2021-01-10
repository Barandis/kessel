<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `strI(s: string, m?: string): Parser`

Parses the string `s` case-insensitively.

The number of characters read equals the number of characters in `s`. If there are not that many characters remaining in the input, the parser will automatically fail.

If `s` is the empty string, the parser will automatically succeed and consume no input.

#### Example

```javascript
const parser = strI('Test')

const s = parse(parser, 'testing')
console.log(status(s))  // "ok"
console.log(success(s)) // "test"

const f = parse(parser, 'oops')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // oops
                        // ^
                        // Expected 'Test'
```

#### Parameters

* `s`: The string to case-insensitively match against the input at its current location.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the first `n` characters of the input at its current location is the same as `s` (case-insensitive), where `n` equals the number of characters in `s` (including 0; having `s` be the empty string causes automatic success). The read characters are returned as a single string, and that many characters are consumed from the input.

#### Failure

* Fails if there are not as many characters left in the input as there are in `s`.
* Fails if the first `n` characters do not equal `s` case-insensitively.

#### Throws

* Throws an error if `s` is not a string.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`charI`](chari.md)
* [`regex`](regex.md)
* [`str`](str.md)