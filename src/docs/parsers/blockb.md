<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `block(genFn: Iterator<Parser<any>, T, any>): Parser<T>`

Executes a generator function that can yield to parsers in its body.

This is a backtracking version of the [`block`](block) parser. It operates in exactly the same manner, except that if one of its parsers fail non-fatally after other of its parsers have consumed some input, it will backtrack to the position it was at the beginning of the `blockB` parser and report a non-fatal failure (`block` in this case would not backtrack and its failure would be fatal).

The same caveats also apply; `blockB` can implement any other parser, but it's best to use a more specific one if it suits.

#### Example

```javascript
const parser = blockB(function *() {
  yield spaces
  const sign = yield optional(orElse(char('+'), char('-')))
  const number = yield join(many1(digit))
  yield spaces

  const result = parseInt(number) * (sign === '-' ? -1 : 1)
  return result
})

const s = parse(parser, '   -1729   ')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // -1729

const f = parse(parser, 'abcd')
console.log(status(f))  // Symbol(fail)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abcd
                        // ^
                        // Expected a digit

const t = parse(parser, '-abcd')
console.log(status(t))  // Symbol(fail)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // -abcd
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   -abcd
                        //    ^
                        //   Expected a digit
```

See [`block`](#block) for a detailed breakdown of the example. That example works exactly the same as this one except with regard to the third case. With `block`, this case is a fatal error, but `blockB` backtracks and converts the error to a non-fatal one.

#### Parameters

* `genFn`: A generator function that provides the body of the `blockB` parser. This generator function can `yield` parsers, which will have those parsers' results fed back into the function when it's restarted (so that they can be assigned to variables, used in calculations, etc.). The return value of this generator function becomes the result of the `blockB` parser.

#### Success

* Succeeds if every parser that is applied in the generator function succeeds. (Not all parsers need be applied; those that are skipped by conditional statements, for instance, will never execute.) Returns the return value of the generator function.

#### Failure

* Fails if any yielded parser fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if any yielded parser fails fatally.

#### Throws

* Throws an error if `genFn` is not a generator function. 
* Throws an error if any `yield` statement is executed and the value that is yielded is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`block`](block.md)
* [`sequenceB`](sequenceb.md)