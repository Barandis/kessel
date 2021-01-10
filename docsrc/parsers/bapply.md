<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `bapply(p: Parser, q: Parser, m?: string): Parser`

Applies two parsers, the second of which must return a function. Returns the result of that function when the result of the other parser is passed to it.

If `p` succeeds but `q` fails, the parser will backtrack to the location where `p` was originally applied and `bapply` will fail non-fatally.

#### Example

```javascript
const parser = bapply(left(letter, digit), always(c => c.toUpperCase()))

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

* `p`: A parser whose result is passed to the function that results from `q`.
* `q`: A parser that returns a function.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if both `p` and `q` succeed. Returns the result of the function returned by `q` when applied to the result of `p`.

#### Failure

* Fails if `p` or `q` fails.

#### Fatal Failure

* Fails fatally if either `p` or `q` fails fatally.

#### Throws

* Throws an error if either `p` or `q` are not parsers.
* Throws an error if `m` exists and is not a string.
* Throws an error if `q` succeeds but does not return a non-parser function.

#### See Also

* [`Parser`](../types/parser.md)
* [`always`](always.md)
* [`apply`](apply.md)
* [`bchain`](bchain.md)