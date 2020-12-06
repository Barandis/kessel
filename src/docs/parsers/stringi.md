<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `stringI(str)`

Parses the string `str` case-insensitively.

The number of characters read equals the number of characters in `str`. If there are not that many characters remaining in the input, the parser will automatically fail.

If `str` is the empty string, the parser will automatically succeed and consume no input.

#### Example

```javascript
const parser = stringI('Test')

const s = parse(parser, 'testing')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "test"

const f = parse(parser, 'oops')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // oops
                        // ^
                        // Expected 'Test'
```

#### Parameters

* `str` The string to case-insensitively match against the input at its current location.

#### Success

* Succeeds if the first `n` characters of the input at its current location is the same as `str` (case-insensitive), where `n` equals the number of characters in `str` (including 0; having `str` be the empty string causes automatic success). The read characters are returned as a single string, and that many characters are consumed from the input.

#### Failure

* Fails if there are not as many characters left in the input as there are in `str`.
* Fails if the first `n` characters do not equal `str` case-insensitively.

#### Throws

* Throws an error if `str` is not a string.

#### See Also

* [`charI`](chari.md)
* [`regex`](regex.md)
* [`string`](string.md)