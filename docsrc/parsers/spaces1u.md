<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaces1U(m?: string): Parser`

Parses one or more Unicode whitespace characters and discards them.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Example

```javascript
const parser = spaces1U()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, 'abc   ')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected one or more Unicode whitespace characters
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if at least one Unicode whitespace character is read. All Unicode whitespace characters until the next non-whitespace character are consumed and discarded.

#### Failure

* Fails if the next character is not a Unicode whitespace character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newlineU`](newlineu.md)
* [`spaces1`](spaces1.md)
* [`spacesU`](spacesu.md)
* [`spaceU`](spaceu.md)