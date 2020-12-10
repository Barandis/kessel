<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `any: Parser<string>`

Parses any single character.

#### Example

```javascript
const parser = any

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, '')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        //
                        // ^
                        // Expected any character
                        // Note: failure occurred at the end of input
```

#### Success

* Succeeds as long as there is a character to be read. That character is consumed and returned.

#### Failure

* Fails at the end of input.

#### See Also

* [`Parser`](../types/parser.md)
* [`anyString`](anystring.md)