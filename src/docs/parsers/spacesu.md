<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `spacesU`

```javascript
const parser = spacesU

const s = parse(parser, '   abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null
```

Reads zero or more Unicode whitespace characters and discards them.

A character is a Unicode whitespace character if it has the Unicode `White_Space` binary property. There are around 25 of these characters.

#### Success

* Always succeeds. All Unicode whitespace characters until the next non-whitespace character are consumed and discarded.

#### See Also

* [`newlineU`](newlineu.md)
* [`spaces`](spaces.md)
* [`spaces1U`](spaces1u.md)
* [`spaceU`](spaceu.md)
