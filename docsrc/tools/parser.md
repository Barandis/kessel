<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `parser(p: Parser): Parser`

Creates a parser.

In essence, this factory function simply takes a parser function and returns that same function. However, it flips some bits in the background to make sure everything works right with assertions. For that reason, only parsers used by this function can be used as parsers in Kessel; even functions with the same signature will fail if they came from elsewhere.

Additionally, it's entirely possible that future changes will create other reasons why this function must be used to create a parser.

Every parser in Kessel complies with this rule, so every parser that they return, directly or indirectly, also complies. In short: this is only something to be concerned about if you are authoring your own parsers.

`parser` has a property attached to it called `created`. This property is a function that can be used on any object to see if it is, in fact, a parser that was created with this function. For example, passing the [`any`](../parsers/any.md) to this function, `parser.created(any)`, will return `true`.

#### Parameters

* `p`: A function used to create a parser.

#### Returns

* Returns a parser conforming to the behavior of `p`.

#### See Also

* [`Context`](../types/context.md)
* [`Parser`](../types/parser.md)
* [`Reply`](../types/reply.md)