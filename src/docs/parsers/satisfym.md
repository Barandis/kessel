<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `satisfyM(fn: (arg: string) => boolean, msg: string): Parser<string>`

Parses a character for which predicate `fn` returns `true` when passed that character. If the parser fails, `msg` is used as the expected error message.

#### Example

```javascript
const parser = satisfyM(x => x === x.toUpperCase(), 'an uppercase letter')

const s = parse(parser, 'ABC')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "A"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected an uppercase letter

```

#### Parameters

* `fn` The predicate function that the next character must pass in order for the parser to succeed.
* `msg` The text of the error message generated if the parser fails.

#### Success

* Succeeds if `fn` returns `true` when the next character is passed into it. Consumes and returns that character.

#### Failure

* Fails if `fn` returns `false` when the next character is passed into it. If this happens, [`expected(msg)`](../tools/expected.md) is used as the error message.

#### Throws

* Throws an error if `fn` is not a non-parser function.
* Throws an error if `str` is not a string.

#### See Also

* [`label`](label.md)
* [`satisfy`](satisfy.md)