<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `upperU(m?: string): Parser`

Parses either a Unicode uppercase letter or a Unicode titlecase character.

A character is a Unicode uppercase character if it has the Unicode `Uppercase` binary property. This is approximately equal to characters that match the regular expression `/\p{Lu}/u` except with a few additional characters.

A character is a Unicode titlecase character if it has the Unicode `Letter, Titlecase` property, which is the same as characters that match the regular expression `/\p{Lt}/u`. Titlecase characters are typically ligatures of an uppercase character with a lowercase character, such as `ǈ`. (The double-lowercase counterparts such as `ǉ` are considered lowercase letters and would be parsed by [`lowerU`](loweru.md).)

#### Example

```javascript
const parser = upperU

const s = parse(parser, 'АБВ')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, 'абв')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // абв
                        // ^
                        // Expected a Unicode uppercase letter
```

#### Parameters

* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the next character is a Unicode uppercase or titlecase letter. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`alphaU`](alphau.md)
* [`letterU`](letteru.md)
* [`lowerU`](loweru.md)
* [`upper`](upper.md)