<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `expected(msg: string): [LocalError]`

Creates an error describing what outcome was expected. This error's `type` will be `ErrorType.Expected`.

This is returned as a single-element [`ErrorList`](../types/errorlist.md). For a larger list, use [`merge`](merge.md) to join lists.

#### Parameters

* `msg`: The error message describing what was expected.

#### Returns

* Returns a single-element array with one error in it.

#### See Also

* [`ErrorList`](../types/errorlist.md)
* [`LocalError`](../types/localerror.md)
* [`merge`](merge.md)