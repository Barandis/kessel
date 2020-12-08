<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `orValue<U>(p: Parser<T>, x: U): Parser<T | U>`

Applies a parser and returns its result on success or an arbitrary value on failure.

The only way `orValue` can fail is if its parser fails fatally. For this reason, a common use case is to wrap the parser in [`attempt`](attempt.md) to ensure that the default value is always returned on any kind of failure. Take care when doing this, as backtracking can erase important error information.

`x` can be a value of any type, so this becomes one of the small number of combinators that can return results that are not strings or arrays of strings.

#### Example

```javascript
const parser = orValue(join(sequence(letter, digit)), 'Z0')

const s = parse(parser, 'a1')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a1"

const r = parse(parser, '12')
console.log(status(r))  // Symbol(ok)
console.log(success(r)) // "Z0"

const t = parse(parser, 'ab')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ab
                        //  ^
                        // Expected a digit
```

#### Parameters

* `p` The parser that gets applied. If it succeeds, its result is returned.
* `x` An arbitrary value that is returned if `p` fails.

#### Success

* Succeeds unless `p` fails fatally. If `p` succeeds, its result is returned. If `p` fails, `x` is returned.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`attempt`](attempt.md)
* [`optional`](optional.md)