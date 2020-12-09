<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `nested(ctx: Context, errors: ErrorList): [NestedError]`

Creates a nested error using `ctx` to describe where the errors in the list `errors` happened. This is used to detail information about an actual error location after backtracking has moved the current context away from that location.

The `errors` parameter will become the error list for the new nested error. However, if `errors` itself contains only a single nested error, it will be collapsed into the new nested error. There is no need to have a nested error that contains nothing except another nested error.

#### Parameters

* `ctx` The context where the nested error(s) happened.
* `errors` The error(s) that happened in that location.

#### Returns

* Returns a list containing a single nested error, whose own error list will contain the errors that happened at its context's location.

#### See Also

* [`compound`](compound.md)