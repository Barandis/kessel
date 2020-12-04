<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `block(genFn)`

```javascript
const parser = block(function *() {
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
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // -abcd
                        //  ^
                        // Expected a digit
```

Executes a generator function. The generator can `yield` parsers whose results are returned to the generator when it's restarted. Returns the return value of the generator.

`block` is the most flexible of all of the parsers in the library, able to do anything that can be coded into a function and able to return any value.

In the example, a `spaces` parser is applied first, which skips any leading whitespace (`yield spaces` is not assigned to a variable, so the result of the `spaces` parser is discarded). Next is a `choice(char('+'), char('-'))` parser, which will match either `+` or `-` and assign that character to the variable `sign`. The third parser to run is `join(many1(digit))`, which reads one or more digits, joins them into a string, and assigns that string to the variable `number`. Finally, another `spaces` parser is applied and its result discarded.

The result of the parser is then calculated by parsing the string `number` with parseInt to create an integer, which is then multiplied by -1 if the value of `sign` is `-`. This is then returned by the last line of the generator function.

Note that in the success case, the value that's returned is the *number* `-1729`, not the *string* `'-1729'`. The `return` statement in the generator function returns a number, so that's what the result of the `block` parser will be. This illustrates that `block` can do anything that a function can do.

If any of these parsers fail, the `block` parser itself also fails. As shown in the two failure cases, if no input has yet been consumed (as in the `f` case), the failure is non-fatal. In the second (`t`) failure case, the `-` is consumed before the `digit` parser fails to parse the character `a`, and since something has been consumed, that failure will be fatal.

There is another version of this parser, [`blockB`](blockb.md), which will fail non-fatally and backtrack if a yielded parser fails non-fatally.

Simpler `block`s can often be rewritten into [`sequence`](sequence.md) parsers. The full power of `block` is most appropriate when a) calculations need to be done to the results of yielded parsers, b) a non-string result needs to be returned, or c.md) some of the parsers may be working asynchronously.

#### Parameters

* `genFn` A generator function that provides the body of the `block` parser. This generator function can `yield` parsers, which will have those parsers' results fed back into the function when it's restarted (so that they can be assigned to variables, used in calculations, etc.). The return value of this generator function becomes the result of the `block` parser.

#### Success

* Succeeds if every parser that is applied in the generator function succeeds. (Not all parsers need be applied; those that are skipped by conditional statements, for instance, will never execute.) Returns the return value of the generator function.

#### Failure

* Fails if any yielded parser fails before any input is consumed.

#### Fatal Failure

* Fails fatally if any yielded parser fails fatally.
* Fails fatally if any yielded parser fails non-fatally after some input was consumed.

#### Throws

* Throws an error if `genFn` is not a generator function. 
* Throws an error if any `yield` statement is executed and the value that is yielded is not a parser.

#### See Also

* [`blockB`](blockb.md)
* [`sequence`](sequence.md)