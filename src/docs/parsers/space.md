<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `space`

Parses an ASCII whitespace character.

ASCII whitespace characters include any ASCII newline (`\r`, `\n`, or `\r\n`) along with a space (` `) or a horizontal tab (`\t`).

#### Example

```javascript
const parser = space

const s = parse(parser, '   abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // " "

const f = parse(parser, 'abc   ')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected a whitespace character
```

#### Success

* Succeeds if the next character is an ASCII whitespace character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`newline`](newline.md)
* [`spaces`](spaces.md)
* [`spaces1`](spaces1.md)
* [`spaceU`](spaceu.md)