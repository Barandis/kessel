<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `anyString(n: number): Parser<string>`

Parses a string that is `n` characters long.

#### Example

```javascript
const parser = anyString(3)

const s = parse(parser, 'abcdef')
console.log(status(s))  // "ok"
console.log(success(s)) // "abc"

const f = parse(parser, 'ab')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ab
                        // ^
                        // Expected a string of 3 characters
```

#### Parameters

* `n`: The number of characters to read.

#### Success

* Succeeds if there are at least `n` characters remaining to read. Consumes that many characters and returns them as a single string. If `n` is less than 1, no characters will be consumed and the empty string will be returned.

#### Failure

* Fails if there are not at least `n` characters remaining in the input.

#### Throws

* Throws an error if `n` is not a number.

#### See Also

* [`Parser`](../types/parser.md)
* [`all`](all.md)
* [`any`](any.md)