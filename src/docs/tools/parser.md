<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `parser<T>(p: (ctx: Context) => Reply<T>): Parser<T>`

Creates a parser.

In essence, this factory function simply takes a parser function and returns that same function (`(ctx: Context) => Reply<T>` and `Parser<T>` are equivalent). However, it flips some bits in the background to make sure everything works right with assertions. For that reason, only parsers used by this function can be used as parsers in Kessel; even functions with the same signature will fail if they came from elsewhere.

Additionally, it's entirely possible that future changes will create other reasons why this function must be used to create a parser.

Every parser in Kessel complies with this rule, so every parser that they return, directly or indirectly, also complies. In short: this is only something to be concerned about if you are authoring your own parsers.

`parser` has a property attached to it called `created`. This property is a function that can be used on any object to see if it is, in fact, a parser that was created with this function. For example, passing the [`any`](../parsers/any.md) to this function, `parser.created(any)`, will return `true`.

!!! note "Some parsers aren't parsers, but create parsers"
    It has been noted elsewhere that not every "parser" in this API is actually a parser. For example, [`any`](../parsers/any.md) may be a parser, but what about [`char`](../parsers/char.md)?

    ```javascript
    const isParser = parser.created(char)
    console.log(isParser)  // false
    ```

    However, these "non-parsers" are essentially just waiting for parameters to define their precise behavior (in the case of `char`, defining which character it matches), and after they have those parameters they return parsers.

    ```javascript
    const isParser = parser.created(char('a'))
    console.log(isParser)  // true
    ```

    We only bother to differentiate parsers and parser-creating functions when it would otherwise be ambiguous.

#### Parameters

* `p`: A function used to create a parser.

#### Returns

* Returns a parser conforming to the behavior of `p`.

#### See Also

* [`Context`](../types/context.md)
* [`Parser`](../types/parser.md)
* [`Reply`](../types/reply.md)