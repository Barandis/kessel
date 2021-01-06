<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `peek(p: Parser, m?: string): Parser`

Applies a parser and returns its result on success, but does not consume input.

This parser allows for peeking ahead to see what characters are coming up without actually consuming those characters. It's common to see it in [`block`](block.md) parsers to drive logic that determines which parser gets applied based on the next character.

Since `peek` does not consume input no matter what it encounters, it cannot fail fatally. If its parser fails fatally, there is essentially automatic backtracking done, and the failure is converted into a non-fatal one.

#### Example

```javascript
const parser = peek(sequence(letter, letter))

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // ["a", "b"]
console.log(s[0].index) // 0

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter

const t = parse(parser, 'a1')
console.log(status(t))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // a1
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   a1
                        //    ^
                        //   Expected a letter
```

#### Parameters

* `p`: The parser to apply without consuming input. If `p` succeeds, its result will be returned.
* `m`: The optional expected message that will be added if `peek` fails.

#### Success

* Succeeds as long as `p` does not fail fatally. If `p` succeeds, its result is returned. If `p` fails, nothing is returned. In either case, no input is consumed.

#### Failure

* Fails if `p` fails, either regularly or fatally.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`block`](block.md)
* [`opt`](opt.md)