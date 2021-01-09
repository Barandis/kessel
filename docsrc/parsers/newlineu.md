<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `newlineU(m?: string): Parser`

Parses a Unicode newline.

Unicode newlines include the ASCII newlines `\r`, `\n`, and `\r\n`, as well as the characters "next line" (`\u0085`), "line separator" (`\u2028`), and "paragraph separator" (`\u2029`).

#### Example

```javascript
const parser = newlineU()

const s = parse(parser, '\u2028Next line')
console.log(status(s))  // "ok"
console.log(success(s)) // "\u2028"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected a Unicode newline
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character (or two characters, for `\r\n`) is a Unicode newline. This character (or these characters) are consumed and returned as a single string.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newline`](newline.md)
* [`spacesU`](spacesu.md)
* [`spaces1U`](spaces1u.md)
* [`spaceU`](spaceu.md)
