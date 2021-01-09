<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `newline(m?: string): Parser`

Parses an ASCII newline.

ASCII newlines include `\r`, `\n`, and `\r\n`.

#### Example

```javascript
const parser = newline()

const s = parse(parser, '\r\nNext line')
console.log(status(s))  // "ok"
console.log(success(s)) // "\r\n"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a newline
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is either `\r` or `\n`, or if the next two characters are `\r\n`. This character (or these characters) are consumed and returned as a single string.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newlineU`](newlineu.md)
* [`space`](space.md)
* [`spaces`](spaces.md)
* [`spaces1`](spaces1.md)