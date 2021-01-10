<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `map(p: Parser, fn: function, m?: string): Parser`

Applies a parser and returns the value that a function returns when passed the parser's result.

`fn` can return anything, so `map` is one of the few combinators that can return something other than a string.

`map` corresponds to `fmap` in Haskell (often simply `map` in other languages), which is a member of the `Functor` type class. It is often written `<$>` in languages that support custom operators.

#### Example

```javascript
const parser = map(lower(), c => c.toUpperCase())

const s = parse(parser, 'abc')
console.log(status(s))  // "ok"
console.log(success(s)) // "A"

const f = parse(parser, 'ABC')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // ABC
                        // ^
                        // Expected a lowercase letter
```

In this example, a `lower` parser is used to read a lowercase letter. That character is passed into a function that uppercases it, then that uppercase letter is returned.

#### Parameters

* `p`: A parser to apply to the input.
* `fn`: A function of one argument which gets passed the result of `p`. Its return value becomes `map`'s result.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if `p` succeeds. Returns the value that `fn` returns when passed the result of `p`.

#### Failure

* Fails if `p` fails. In this case `fn` is never invoked.

#### Fatal Failure

* Fails fatally if `p` fails fatally. In this case `fn` is never invoked.

#### Throws

* Throws an error if `p` is not a parser.
* Throws an error if `fn` is not a non-parser function.
* Throws an error if `m` exists and is not a string.

#### See Also

* [`Parser`](../types/parser.md)
* [`chain`](chain.md)
* [`join`](join.md)
* [`pipe`](pipe.md)