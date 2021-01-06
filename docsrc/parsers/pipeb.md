<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `pipeB<T>(...ps: Parser[], fn: (...args: any[]) => T): Parser<T>`

!!! warning "Not a real type"
    The type given above is not a real type, because TypeScript/JavaScript does not have the ability to do rest arguments before other arguments. The "real" type is

    `pipeB<T>(...ps: (Parser<any> | ((...args: any[]) => T))[]): Parser<T>`

    The given type is more expressive and makes for better documentation, but even that one is imperfect. TypeScript cannot express as much information in this type as would be useful. Namely, the parsers in `ps` can all have different generic parameters, and the types of the parameters to `fn` should match those generic parameters in number and in order.

    A two-parser `pipeB` can be expressed with `pipeB<T, U>(p: Parser<T>, q: Parser<U>, fn: (a: T, b: U) => V): Parser<V>`. A three-parser version would have the type `pipeB<T, U, V>(p: Parser<T>, q: Parser<U>, r: Parser<V>, fn: (a: T, b: U, c: V) => W): Parser<W>`, and so on. Unfortunately it's impossible to write a type with a variable number of arguments.

Applies some parsers in order, then returns the result of a function to which all of the parser results have been passed.

`fn` will be passed one argument for every member of `ps`. JavaScript does not enforce that there has to be a parameter for each passed argument, but likely you will want to provide an `fn` that has an arity equal to the number of parsers in `ps`.

If any of the parsers fail, then backtracking will return the state to where it was before the first parser was applied.

`fn` can return anything, so this is one of the few combinators that can return something other than a string.

#### Example

```javascript
const parser = pipeB(upper, lower, (a, b) => a.toLowerCase() + b.toUpperCase())

const s = parse(parser, 'Abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "aB"

const f = parse(parser, 'abc')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // abc
                        // ^
                        // Expected an uppercase letter

const t = parse(parser, 'ABC')
console.log(status(t))  // "fail"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // ABC
                        // ^
                        // The parser backtracked after:
                        //
                        //   Parse error at (line 1, column 2):
                        //
                        //   ABC
                        //    ^
                        //   Expected a lowercase letter
```

See [`pipe`](pipe.md) for an explanation of this example. It's identical except for the final case failing fatally there and being backtracked and failing non-fatally here.

#### Parameters

* `...ps`: Zero or more parsers, each of which is applied to the input in order.
* `fn`: A function which receives the results of all of the parsers in `ps` if they all succeed. Its return value becomes the result of `pipe`.

#### Success

* Succeeds if all of the parsers in `ps` succeed. Returns the result of `fn` when all of the results of `...ps` are passed to it.

#### Failure

* Fails if the any parser in `ps` fails. If any input was consumed, backtracking will occur and an additional error message will be provided that details the circumstances of the backtracking.

#### Fatal Failure

* Fails fatally if any parser in `ps` fails fatally.

#### Throws

* Throws an error if the last argument is not a non-parser function.
* Throws an error if any other argument is not a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`pipe`](pipe.md)