<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Parser<T> = (ctx: Context) => Reply<T>`

The type for a parsing function. This is, unsurprisingly, the most important type in Kessel.

The parameter `T` refers to the type of the parser's result. [`any`](../parsers/any.md) is of type `Parser<string>`, for example, because that parser produces a single character (which is, of course, a string).

Since [`Reply`](reply.md) is a tuple of a [`Context`](context.md) and a [`Result`](result.md), a `Parser` is just a function that accepts a context and returns an updated context and a result.

#### See Also

* [`Context`](context.md)
* [`Reply`](reply.md)
* [`Result`](result.md)