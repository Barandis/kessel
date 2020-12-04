<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `blockB(genFn)`

```javascript
const parser = blockB(function *() {
  yield spaces
  const sign = yield choice(char('+'), char('-'))
  const number = yield join(many1(digit))
  yield spaces

  const result = parseInt(number) * (sign === '-' ? -1 : 1)
  return result
})

const s = parse(parser, '   -1729   ')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // -1729

const f = parse(parser, '1729')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 1729
                        // ^
                        // Expected '+' or '-'

const t = parse(parser, '-abcd')
console.log(status(t))  // Symbol(error)
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

Executes a generator function. The generator can `yield` parsers whose results are returned to the generator when it's restarted. Returns the return value of the generator.

If any of these parsers fail, the `blockB` parser itself also fails. This failure will be non-fatal, even if input had been consumed; in this case, the parser backtracks to its location when the first yielded parser was applied.

See [`block`](block.md) for an explanation of the example. The two examples are identical except in that the `t` case in this example will backtrack and fail non-fatally, while the same case in [`block`](block.md)'s example will not backtrack and will fail fatally.

Simpler `blockB`s can often be rewritten into [`sequenceB`](sequenceb.md) parsers. The full power of `blockB` is most appropriate when a) calculations need to be done to the results of yielded parsers, b) a non-string result needs to be returned, or c.md) some of the parsers may be working asynchronously.

#### Parameters

* `genFn` A generator function that provides the body of the `blockB` parser. This generator function can `yield` parsers, which will have those parsers' results fed back into the function when it's restarted (so that they can be assigned to variables, used in calculations, etc.). The return value of this generator function becomes the result of the `blockB` parser.

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

* [`block`](block.md)
* [`sequenceB`](sequenceb.md)