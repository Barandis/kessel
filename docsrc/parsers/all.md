<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `all(): Parser`

Parses the entire remaining input.

#### Example

```javascript
const parser = all()

const s = parse(parser, 'content')
console.log(status(s))  // "ok"
console.log(success(s)) // "content"
```

#### Success

* Always succeeds. Consumes all remaining characters and returns those characters as a single string. If the current parse location is already at the end of input, `all` will return the empty string and consume nothing.

#### See Also

* [`Parser`](../types/parser.md)
* [`anystr`](anystr.md)
* [`eof`](eof.md)