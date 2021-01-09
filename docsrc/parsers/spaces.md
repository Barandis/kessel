<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spaces(): Parser`

Parses zero or more ASCII whitespace characters and discards them.

ASCII whitespace characters include any ASCII newline (`\r`, `\n`, or `\r\n`) along with a space (` `) or a horizontal tab (`\t`).

#### Example

```javascript
const parser = spaces()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // null
```

#### Success

* Always succeeds. All ASCII whitespace characters until the next non-whitespace character are consumed and discarded.

#### See Also

* [`Parser`](../types/parser.md)
* [`newline`](newline.md)
* [`space`](space.md)
* [`spaces1`](spaces1.md)
* [`spacesU`](spacesu.md)