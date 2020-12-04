<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaces1U`

```javascript
const parser = spaces1U

const s = parse(parser, '   abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, 'abc   ')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected one or more Unicode whitespace characters
```

Reads one or more Unicode whitespace characters and discards them.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Success

* Succeeds if at least one Unicode whitespace character is read. All Unicode whitespace characters until the next non-whitespace character are consumed and discarded.

#### Failure

* Fails if the next character is not a Unicode whitespace character.

#### See Also

* [`newlineU`](newlineu.md)
* [`spaces1`](spaces1.md)
* [`spacesU`](spacesu.md)
* [`spaceU`](spaceu.md)