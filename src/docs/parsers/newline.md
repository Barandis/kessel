<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `newline`

```javascript
const parser = newline

const s = parse(parser, '\r\nNext line')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "\r\n"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a newline
```

Reads a character (or two, if the first character is `\r`) and succeeds if it is an ASCII newline.

ASCII newlines include `\r`, `\n`, and `\r\n`.

#### Success

* Succeeds if the next character is either `\r` or `\n`, or if the next two characters are `\r\n`. This character (or these characters) are consumed and returned as a single string.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`newlineU`](newlineu.md)
* [`space`](space.md)
* [`spaces`](spaces.md)
* [`spaces1`](spaces1.md)