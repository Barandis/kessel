<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `satisfy(fn)`

```javascript
const parser = satisfy(x => x === x.toUpperCase())

const s = parse(parser, 'ABC')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "A"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Unknown error(s)

```

Reads a single character, succeeding if predicate `fn` returns `true` when passed that character.

#### Parameters

* `fn` The predicate function that the next character must pass in order for the parser to succeed.

#### Success

* Succeeds if `fn` returns `true` when the next character is passed into it. Consumes and returns that character.

#### Failure

* Fails if `fn` returns `false` when the next character is passed into it. If this happens, the parser does not generate an error message because it cannot have enough information to know what `fn` was going to pass. To provide an error message, either wrap the parser with [`label`](label.md) or use [`satisfyL`](satisfym.md).

#### Throws

* Throws an error if `fn` is not a non-parser function.

#### See Also

* [`label`](label.md)
* [`range`](range.md)
* [`regex`](regex.md)
* [`satisfyM`](satisfym.md)