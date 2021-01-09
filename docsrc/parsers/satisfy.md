<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `satisfy(fn: function, m?: string): Parser`

Parses a character for which the predicate `fn` returns `true` when passed that character.

Since the parser cannot reasonably figure out what conditions cause `fn` to pass, it does not generate an error message on failure by default. To provide a useful error message, supply that message as the optional second argument.

#### Example

```javascript
const parser = satisfy(x => x === x.toUpperCase())

const s = parse(parser, 'ABC')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Unknown error(s)

```

#### Parameters

* `fn`: The predicate function that the next character must pass in order for the parser to succeed.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `fn` returns `true` when the next character is passed into it. Consumes and returns that character.

#### Failure

* Fails if `fn` returns `false` when the next character is passed into it. 

#### Throws

* Throws an error if `fn` is not a non-parser function.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`range`](range.md)
* [`regex`](regex.md)