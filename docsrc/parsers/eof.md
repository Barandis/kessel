<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `eof(m?: string): Parser`

Attempts to parse a character and succeeds if there is no character to parse.

The only time that there is no character to read is at the end of input, so this parser checks specifically for that condition.

#### Example

```javascript
const parser = eof()

const s = parse(parser, '')
console.log(status(s))  // "ok"
console.log(success(s)) // null

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected end of input
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the current parse location is at the end of input. Returns nothing and consumes no input.

#### Failure

* Fails if there is any character left to read.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`all`](all.md)