<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `applyB<T, U>(p: Parser<T>, f: Parser<(arg: T) => U>): Parser<U>`

Applies two parsers, the second of which must return a function. Returns the result of that function when the result of the other parser is passed to it.

If `p` succeeds but `f` fails, the parser will backtrack to the location where `p` was originally applied and `applyB` will fail non-fatally.

#### Example

```javascript
const parser = applyB(left(letter, digit), always(c => c.toUpperCase()))

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, '1a')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1a
                        // ^
                        // Expected a letter

const t = parse(parser, 'abc')
console.log(status(t))  // "fail"
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

* `p`: A parser whose result is passed to the function that results from `f`.
* `f`: A parser that returns a function.

#### Success

* Succeeds if both `p` and `f` succeed. Returns the result of the function returned by `f` when applied to the result of `p`.

#### Failure

* Fails if `p` or `f` fails.

#### Fatal Failure

* Fails fatally if either `p` or `f` fails fatally.

#### Throws

* Throws an error if either `p` or `f` are not parsers.
* Throws an error if `f` succeeds but does not return a non-parser function.

#### See Also

* [`Parser`](../types/parser.md)
* [`always`](always.md)
* [`apply`](apply.md)
* [`chainB`](chainb.md)