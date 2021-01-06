<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `compound(msg: string, ctx: Context, errors: ErrorList): [CompoundError]`

Creates a compound error using `ctx` to describe where the errors in the list `errors` happened. Additionally, `msg` can be used to give further information about this context. This is used to detail information about an actual error location after backtracking has moved the current context away from that location.

The `errors` parameter will become the error list for the new compound error. However, if `errors` itself contains only a single nested error, it will be collapsed into this new compound error. There is no need to have a compound error that contains nothing except a nested error.

#### Parameters

* `msg`: A message describing the context or the error.
* `ctx`: The context where the nested error(s) happened.
* `errors`: The error(s) that happened in that location.

#### Returns

* Returns a list containing a single compound error, whose own error list will contain the errors that happened at its context's location.

#### See Also

* [`CompoundError`](../types/compounderror.md)
* [`ErrorList`](../types/errorlist.md)
* [`compound`](compound.md)