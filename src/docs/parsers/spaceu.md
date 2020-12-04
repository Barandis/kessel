<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaceU`

```javascript
const parser = spaceU

const s = parse(parser, '   abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // " "

const f = parse(parser, 'abc   ')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected a Unicode whitespace character
```

Reads a character and succeeds if that character is a Unicode whitespace character.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Success

* Succeeds if the next character is a Unicode whitespace character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### See Also

* [`newlineU`](newlineu.md)
* [`space`](space.md)
* [`spaces1U`](spaces1u.md)
* [`spacesU`](spacesu.md)