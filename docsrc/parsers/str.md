<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `str(s: string, m?: string): Parser`

Parses the string `s`.

The number of characters read equals the number of characters in `s`. If there are not that many characters remaining in the input, the parser will automatically fail.

If `s` is the empty string, the parser will automatically succeed and consume no input.

#### Example

```javascript
const parser = str('Test')

const s = parse(parser, 'Testing')
console.log(status(s))  // "ok"
console.log(success(s)) // "Test"

const f = parse(parser, 'test')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // test
                        // ^
                        // Expected 'Test'
```

#### Parameters

* `s`: The string to match against the input at its current location.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the first `n` characters of the input at its current location is the same as `s`, where `n` equals the number of characters in `s` (including 0; having `s` be the empty string causes automatic success). The read characters are returned as a single string, and that many characters are consumed from the input.

#### Failure

* Fails if there are not as many characters left in the input as there are in `s`.
* Fails if the first `n` characters do not equal `s`.

#### Throws

* Throws an error if `s` is not a string.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`char`](char.md)
* [`regex`](regex.md)
* [`strI`](stri.md)