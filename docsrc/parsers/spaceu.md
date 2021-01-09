<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaceU(m?: string): Parser`

Parse a Unicode whitespace character.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Example

```javascript
const parser = spaceU()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // " "

const f = parse(parser, 'abc   ')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected a Unicode whitespace character
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a Unicode whitespace character. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newlineU`](newlineu.md)
* [`space`](space.md)
* [`spaces1U`](spaces1u.md)
* [`spacesU`](spacesu.md)