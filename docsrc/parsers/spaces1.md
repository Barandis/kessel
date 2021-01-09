<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaces1(m? : string): Parser`

Parses one or more ASCII whitespace characters and discards them.

ASCII whitespace characters include any ASCII newline (`\r`, `\n`, or `\r\n`) along with a space (` `) or a horizontal tab (`\t`).

#### Example

```javascript
const parser = spaces1()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, 'abc   ')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc   
                        // ^
                        // Expected one or more whitespace characters
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if at least one ASCII whitespace character is read. All ASCII whitespace characters until the next non-whitespace character are consumed and discarded.

#### Failure

* Fails if the next character is not an ASCII whitespace character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`newline`](newline.md)
* [`space`](space.md)
* [`spaces`](spaces.md)
* [`spaces1U`](spaces1u.md)