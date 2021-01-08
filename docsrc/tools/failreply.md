<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failReply(ctx: Context, errors?: ErrorList, index?: number): Reply`

Creates a reply object representing an unsuccessful parse.

This function creates a [`Result`](../types/result.md) object with a status of `Status.Fail` out of the provided `errors` list (`[]` by default), and it uses the supplied context (modifying its index if the `index` parameter is present) to create a new context for the reply.

This function should always be used to create a failing reply, since it will always create both a new context and result, ensuring that older contexts aren't accidentally overwritten.

#### Parameters

* `ctx`: The context for the newly created reply.
* `errors`: The error list detailing errors that hapopened at the context's location. Defaults to an empty array.
* `index`: The index into the context's input. This is used just to change that index if necessary (in backtracking, for example). Defaults to the context's current index.

#### Returns

* Returns a reply object with the given context and result value.

#### See Also

* [`Context`](../types/context.md)
* [`ErrorList`](../types/errorlist.md)
* [`fatalReply`](fatalreply.md)
* [`maybeFatal`](maybefatal.md)
* [`okReply`](okreply.md)