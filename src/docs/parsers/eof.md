<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `eof`

```javascript
const parser = eof

const s = parse(parser, '')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // null

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected end of input
```

Attempts to read a character and succeeds if there is no character to read.

The only time that there is no character to read is at the end of input, so this parser checks specifically for that condition.

#### Success

* Succeeds if the current parse location is at the end of input. Returns nothing and consumes no input.

#### Failure

* Fails if there is any character left to read.

#### See Also

* [`all`](all.md)