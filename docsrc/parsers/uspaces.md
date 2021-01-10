<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `uspaces(): Parser`

Parses zero or more Unicode whitespace characters and discards them.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Example

```javascript
const parser = uspaces()

const s = parse(parser, '   abc')
console.log(status(s))  // "ok"
console.log(success(s)) // null
```

#### Success

* Always succeeds. All Unicode whitespace characters until the next non-whitespace character are consumed and discarded.

#### See Also

* [`Parser`](../types/parser.md)
* [`spaces`](spaces.md)
* [`unewline`](unewline.md)
* [`uspace`](uspace.md)
* [`uspaces1`](uspaces1.md)
