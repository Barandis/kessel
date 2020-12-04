<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `chain(p, fn)`

```javascript
const parser = chain(any, c => char(c))

const s = parse(parser, 'aabbcc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, '')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected any character
                        // Note: failure occurred at the end of input

const t = parse(parser, 'abc')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // abc
                        //  ^
                        // Expected 'a'
```

Applies a parser to the input, passes its result to a function, and then applies the parser that function returns to the input.

In the example, `chain` first applies `any`, which returns the next character of the input. `fn` then returns `char(c)`, where `c` is the result of the `any` application, and this parser is applied. The upshot is that this example of `chain` succeeds if the next two characters are the same.

In the case of `f`, `chain` fails fatally. This is because a character was consumed in `p`'s success, and if a character is consumed before failure, fatal failure is the result. There is another version of this parser ([`chainB`](chainb.md)) that will backtrack and fail non-fatally if the parser returned by `fn` fails non-fatally.

`chain` is not used that often itself, but it provides the basis for numerous other parsers (parsers/including all of those in the "Chaining combinators" section of the [API summary](../api.md#table-5-chaining-combinators)).

#### Parameters

* `p` The parser which is applied first and whose result is passed into `fn`.
* `fn` A function which, when passed the result of `p`, should return a second parser to be applied to the input.

#### Success

* Succeeds if both `p` and the parser returned by `fn` succeed. Returns the result of the parser returned by `fn`.

#### Failure

* Fails if `p` fails.
* Fsils if the parser returned by `fn` fails after `p` succeeds but consumes no input.

#### Fatal Failure

* Fails fatally if either `p` or the parser returned by `fn` fail fatally.
* Fails fatally if the parser returned by `fn` fails after `p` succeeds and consumes some input.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `fn` is not a non-parser function.
* Throws an error if `p` succeeds and the value returned by `fn` is not a parser.

#### See Also

* [`chainB`](chainb.md)
* [`map`](map.md)