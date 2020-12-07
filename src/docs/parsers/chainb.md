<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `chainB(p, fn)`

Applies a parser to the input, passes its result to a function, and then applies the parser that function returns to the input.

If `p` succeeds but the parser that is returned by `fn` fails, the state will backtrack to the location where `p` was originally applied and `chainB` will fail non-fatally.

#### Example

```javascript
const parser = chainB(any, c => char(c))

const s = parse(parser, 'aabbcc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, '')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 
                        // ^
                        // Expected any character
                        // Note: failure occurred at the end of input

const t = parse(parser, 'abc')
console.log(status(t))  // Symbol(fail)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   abc
                        //    ^
                        //   Expected 'a'
```

#### Parameters

* `p` The parser which is applied first and whose result is passed into `fn`.
* `fn` A function which, when passed the result of `p`, should return a second parser to be applied to the input.

#### Success

* Succeeds if both `p` and the parser returned by `fn` succeed. Returns the result of the parser returned by `fn`.

#### Failure

* Fails if either `p` or the parser returned by `fn` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if either `p` or the parser returned by `fn` fail fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `fn` is not a non-parser function.
* Throws an error if `p` succeeds and the value returned by `fn` is not a parser.

#### See Also

* [`chain`](chain.md)