<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `block(genFn)`

Executes a generator function that can yield to parsers in its body.

`block` is the most versatile parser in the entire library and provides a way to parse pretty much anything without having to write a custom parser. It corresponds to using do-notation blocks in Haskell (hence the name `block`).

The generator function can do anything that any function could do. In addition, it can have `yield` expressions that yield any parser. That parser will be applied at that point, and if it's successful, its result will be fed back into the generator function, able to be used as needed (for example, in `const number = yield join(many1(digit))` in the example, the result of the `join` parser is assigned to the variable `number`). When the generator function returns, its return value becomes the value returned by the `block` parser.

If any of the parsers fail when yielded, then `block` will fail. If any input was consumed before the failure, that failure will be fatal.

`block` can be used to implement pretty much any other combinator. It, in conjunction with [`any`](#any), could be used to implement any other parser in this library. However, if there is a parser that already does what needs to be done, it's sure to be more efficient than just shoving everything into a `block`.

This is most notable with sequences. A `block` parser that discards a number of parser results and keeps one, returning that result, can very often be implemented as a [`sequence`](#parser) wrapped in [`nth`](#nth). This is a fairly common use case.

#### Example

```javascript
const parser = block(function *() {
  yield spaces
  const sign = yield optional(orElse(char('+'), char('-')))
  const number = yield join(many1(digit))
  yield spaces

  const result = parseInt(number) * (sign === '-' ? -1 : 1)
  return result
})

const s = parse(parser, '   1729   ')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // 1729

const f = parse(parser, 'abcd')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abcd
                        // ^
                        // Expected a digit

const t = parse(parser, '-abcd')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // -abcd
                        //  ^
                        // Expected a digit
```

The first yielded parser here is `spaces`. This skips zero or more whitespace characters. Its result is discarded as it is not assigned to anything (besides, `spaces` only returns `null` so its result isn't useful).

The second yielded parser is `optional(orElse(char('+'), char('-')))`. This will match either a `'+'` or `'-'` if it's there, or return `null` if the next character is neither of those (without `optional` it would fail, and we don't want that because it's okay for a number to have no sign). This value (either `'+'`, `'-'`, or `null`) is assigned to the variable `sign`.

The third yielded parser is `join(many1(digit))`. This simply matches a series of one or more digit characters (`0-9`), returning them as a single string instead of an array of characters (because of `join`). This parses a natural number, assigning the result to `number`. (When combined with `sign`, this could be a negative number as well, so the two together parse an integer.)

The fourth yielded parser skips whitespace at the end, similar to the first parser.

After the parsing is done, `sign` and `number` are used in a calculation that turns them into an integer of the JavaScript `number` type. This number is returned at the end, so the `block` parser in total results in this number. Note that it isn't a string, like most parsers return; `block` can return anything that its function can return.

The first case (`s`) shows success. Whitespace was skipped before and after the number, an optional sign was parsed (which was not present), and then the string `'1729'` was parsed. The calculation turned this into the number `1729`, which was returned.

The second case (`f`) fails because the first character is not a digit. It does not have to be whitespace (`spaces` can match zero spaces) and it does not have to be a sign (that parser is optional), but the `digit` part of the third parser has to be matched. No input was consumed before this failure, so it is not a fatal failure.

The third case (`t`) fails because, while the whitespace was ignored and the optional sign was parsed, the third parser fails against the non-digit `'a'`. Since input *was* consumed (the negative sign) before this failure, it is fatal.

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