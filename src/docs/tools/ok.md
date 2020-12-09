<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `ok(ctx: Context, value?: T, index?: number): Reply<T>`

Creates a reply object representing a successful parse.

This function creates a [`Result`](../types/result.md) object with a status of `Status.Ok` out of the provided `value` (`null` by default), and it uses the supplied context (modifying its index if the `index` parameter is present) to create a new context for the reply.

This function should always be used to create a successful reply, since it will always create both a new context and result, ensuring that older contexts aren't accidentally overwritten.

#### Parameters

* `ctx`: The context for the newly created reply.
* `value`: The value that represents the result of the parse. Defaults to `null`.
* `index`: The index into the context's input. This is used just to change that index if necessary (in backtracking, for example). Defaults to the context's current index.

#### Returns

* Returns a reply object with the given context and result value.

#### See Also

* [`Context`](../types/context.md)
* [`Reply`](../types/reply.md)
* [`fail`](fail.md)
* [`fatal`](fatal.md)
* [`maybeFatal`](maybefatal.md)