<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `regex(r: string | RegExp, m?: string): Parser`

Matches the current input location against a regular expression pattern.

#### Example

```javascript
const parser = regex(/^\d+/)

const s = parse(parser, '123abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "123"

const f = parse(parser, 'abc123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc123
                        // ^
                        // Expected a string matching /^\d+/
```

#### Parameters

* `r`: The regular expression pattern to match against the current input location. This pattern can be either a `RegExp` object or a string (which is automatically converted into a `RegExp` object without flags). It will have an `^` anchor added to it if it doesn't already have one; all `regex` matches are done against the beginning of the input (based on its current state). No flags are removed, but the `g` flag is ignored because there can be only one match because of the `^` anchor.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if a match occurs at the current location of the input. The full match is returned as a single string, and that many characters are consumed. It is possible for this match to be zero characters long in the case where a `*` quantifier is used in the pattern. 

#### Failure

* Fails if there is no match at the current location of the input. Note that some patterns cannot fail; a pattern with a `*` quantifier, for example, can successfully match on zero characters.

#### Throws

* Throws an error if `r` is neither a `RegExp` object or a string.
* Throws an error if `r` is a string and cannot be converted into a `RegExp` object because it is not a valid regular expression pattern.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`satisfy`](satisfy.md)
* [`string`](string.md)