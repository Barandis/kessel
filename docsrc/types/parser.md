<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Parser = (ctx: Context) => Reply`

The type for a parsing function. This is, unsurprisingly, the most important type in Kessel.

Since [`Reply`](reply.md) is a tuple of a [`Context`](context.md) and a [`Result`](result.md), a `Parser` is just a function that accepts a context and returns an updated context and a result.

#### Parameters

* `ctx`: The context passed to the parser detailing the input and the current location in that input.

#### Returns

* Returns a tuple of an updated, post-parse context and the result that the parse produced.

#### See Also

* [`Context`](context.md)
* [`Reply`](reply.md)
* [`Result`](result.md)