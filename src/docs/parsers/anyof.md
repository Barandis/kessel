<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `anyOf(cs: string | string[]): Parser<string>`

Parses a character if that character is included in `cs`.

#### Example

```javascript
const parser = anyOf('Test')

const s = parse(parser, 'Test')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "T"

const f = parse(parser, 'Exit')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // Exit
                        // ^
                        // Expected any of 'T', 'e', 's', or 't'
```

#### Parameters

* `cs`: The set of characters that the next character is expected to be a part of. This can be either a string or an array of single-character strings.

#### Success

* Succeeds if the next character is one of the characters in `cs`. Consumes and returns that character.

#### Failure

* Fails if the next character is any other character.

#### Throws

* Throws an error if `cs` is not either a string or an array.
* Throws an error if `cs` is an array but at least one of the elements is either not a string or is not exactly one character in length.

#### See Also

* [`Parser`](../types/parser.md)
* [`noneOf`](noneof.md)