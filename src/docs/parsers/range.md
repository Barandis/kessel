<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `range(s: string, e: string): Parser<string>`

Parses a character between `s` and `e` (inclusive).

"Between" is defined according to code points. This is fine in most cases, but it can get weird with higher code points. For example, there is no "h" in the set of mathematical lowercase italic symbols. The "h" that would be used in that set of symbols would instead be the Planck's Constant character, which is in a completely different part of the UTF-8 spectrum and therefore is not "between" mathematical lowercase italic symbols `a` and `z`. Take care with non-ASCII characters.

#### Example

```javascript
const parser = range('0', '3')

const s = parse(parser, '246')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "2"

const f = parse(parser, '468')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 468
                        // ^
                        // Expected a character between '0' and '3'
```

#### Parameters

* `s` The character representing the lower bound of the range. The next character's code point must be greater than or equal to `s`'s code point for the parser to succeed.
* `e` The character representing the upper bound of the range. The next character's code point must be less than or equal to `e`'s code point for the parser to succeed.

#### Success

* Succeeds if the code point of the next character is between the code points of `s` and `e`, inclusive. Consumes and returns that character.

#### Failure

* Fails if the code point of the next character is less than `s`'s code point or greater than `e`'s code point.

#### Throws

* Throws an error if either `s` or `e` are not strings or if either is not exactly one character in length.

#### See Also

* [`any`](any.md)
* [`char`](char.md)
* [`regex`](regex.md)
* [`satisfy`](satisfy.md)