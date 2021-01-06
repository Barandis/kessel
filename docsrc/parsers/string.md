<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `string(str: string): Parser<string>`

Parses the string `str`.

The number of characters read equals the number of characters in `str`. If there are not that many characters remaining in the input, the parser will automatically fail.

If `str` is the empty string, the parser will automatically succeed and consume no input.

#### Example

```javascript
const parser = string('Test')

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

* `str`: The string to match against the input at its current location.

#### Success

* Succeeds if the first `n` characters of the input at its current location is the same as `str`, where `n` equals the number of characters in `str` (including 0; having `str` be the empty string causes automatic success). The read characters are returned as a single string, and that many characters are consumed from the input.

#### Failure

* Fails if there are not as many characters left in the input as there are in `str`.
* Fails if the first `n` characters do not equal `str`.

#### Throws

* Throws an error if `str` is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`char`](char.md)
* [`regex`](regex.md)
* [`stringI`](stringi.md)