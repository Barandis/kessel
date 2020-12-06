<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `pipe(...ps, fn)`

Applies some parsers in order, then returns the result of a function to which all of the parser results have been passed.

`fn` will be passed one argument for every member of `ps`. JavaScript does not enforce that there has to be a parameter for each passed argument, but likely you will want to provide an `fn` that has an arity equal to the number of parsers in `ps`.

Unlike [`sequence`](sequence.md), `null` parser results are *not* discarded. This ensures that the same number of arguments will be passed to `fn` no matter the results of the parsers.

There is another version of this parser ([`pipeB`](pipeb.md)) that fails non-fatally and backtracks if the parser that fails does so non-fatally.

`fn` can return anything, so this is one of the few combinators that can return something other than a string.

`pipe(p1, p2, fn)` is an optimized implementation of `chain(p1, a => chain(p2, b => always(fn(a, b))))`, `pipe(p1, p2, p3, fn)` is an optimized implementation of `chain(p1, a => chain(p2, b => chain(p3, c => always(fn(a, b, c)))))`, and so on.

#### Example

```javascript
const parser = pipe(upper, lower, (a, b) => a.toLowerCase() + b.toUpperCase())

const s = parse(parser, 'Abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "aB"

const f = parse(parser, 'abc')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected an uppercase letter

const t = parse(parser, 'ABC')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 2):
                        //
                        // ABC
                        //  ^
                        // Expected a lowercase letter
```

In this example, the `upper` and `lower` parsers are applied, and the results of each are passed to an arity-2 function which lowercases the first argument and uppercases the second. The first failure example (`f`) shows non-fatal failure caused by the first parser failing non-fatally, but the second (`t`) shows a fatal failure caused by a parser (`upper` in this case) consuming a character before a later parser fails.

#### Parameters

* `...ps` Zero or more parsers, each of which is applied to the input in order.
* `fn` A function which receives the results of all of the parsers in `ps` if they all succeed. Its return value becomes the result of `pipe`.

#### Success

* Succeeds if all of the parsers in `ps` succeed. Returns the result of `fn` when all of the results of `...ps` are passed to it.

#### Failure

* Fails if the first parser in `ps` fails.
* Fails if any subsequent parser in `ps` fails after the ones before it succeed but do not consume input.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.
* Fails fatally if any parser in `ps` fails after a prior parser succeeds and consumes some input.

#### Throws

* Throws an error if the last argument is not a non-parser function.
* Throws an error if any other argument is not a parser.

#### See Also

* [`map`](map.md)
* [`pipeB`](pipeb.md)