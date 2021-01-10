<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `char(c: string, m?: string): Parser`

Parses the character `c`.

There is no character type in JavaScript, as a "character" is just a string with a length of 1. However, using `char` is a bit more efficient than using `string` and should be used as long as only one character is needed.

#### Example

```javascript
const parser = char('a')

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "a"

const f = parse(parser, 'ABC')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ABC
                        // ^
                        // Expected 'a'
```

#### Parameters

* `c`: The character that the next input character must be in order to succeed.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success 

* Succeeds if the next input character is `c`. Consumes and returns that character.

#### Failure 

* Fails if the next input character is any other character, including the opposite case version of `c`.

#### Throws

* Throws an error if `c` is not a string or if it isn't exactly one character in length.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`any`](any.md)
* [`ichar`](ichar.md)
* [`range`](range.md)
* [`str`](str.md)