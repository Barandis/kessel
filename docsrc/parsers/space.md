<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `space(m?: string): Parser`

Parses an ASCII whitespace character.

ASCII whitespace characters include any ASCII newline (`\r`, `\n`, or `\r\n`) along with a space (` `) or a horizontal tab (`\t`).

#### Example

```javascript
const parser = space()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // " "

const f = parse(parser, 'abc   ')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected a whitespace character
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is an ASCII whitespace character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newline`](newline.md)
* [`spaces`](spaces.md)
* [`spaces1`](spaces1.md)
* [`spaceU`](spaceu.md)