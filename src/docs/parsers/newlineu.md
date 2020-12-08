<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `newlineU: Parser<string>`

Parses a Unicode newline.

Unicode newlines include the ASCII newlines `\r`, `\n`, and `\r\n`, as well as the characters "next line" (`\u0085`), "line separator" (`\u2028`), and "paragraph separator" (`\u2029`).

#### Example

```javascript
const parser = newlineU

const s = parse(parser, '\u2028Next line')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "\u2028"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a Unicode newline
```

#### Success

* Succeeds if the next character (or two characters, for `\r\n`) is a Unicode newline. This character (or these characters) are consumed and returned as a single string.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`newline`](newline.md)
* [`spacesU`](spacesu.md)
* [`spaces1U`](spaces1u.md)
* [`spaceU`](spaceu.md)
