<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `def(p: Parser, x: *, m?: string): Parser`

Applies a parser and returns its result on success or an arbitrary value on failure.

The only way `def` can fail is if its parser fails fatally. For this reason, a common use case is to wrap the parser in [`attempt`](attempt.md) to ensure that the default value is always returned on any kind of failure. Take care when doing this, as backtracking can erase important error information.

`x` can be a value of any type, so this becomes one of the small number of combinators that can return results that are not strings or arrays of strings.

#### Example

```javascript
const parser = def(join(sequence(letter, digit)), 'Z0')

const s = parse(parser, 'a1')
console.log(status(s))  // "ok"
console.log(success(s)) // "a1"

const r = parse(parser, '12')
console.log(status(r))  // "ok"
console.log(success(r)) // "Z0"

const t = parse(parser, 'ab')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

#### Parameters

* `p`: The parser that gets applied. If it succeeds, its result is returned.
* `x`: An arbitrary value that is returned if `p` fails.
* `m`: The optional expected message that will be added if `def` fails fatally.

#### Success

* Succeeds unless `p` fails fatally. If `p` succeeds, its result is returned. If `p` fails, `x` is returned.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`attempt`](attempt.md)
* [`opt`](opt.md)