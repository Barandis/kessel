<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `generic(msg: string): [LocalError]`

Creates a generic error. This error's `type` will be `ErrorType.Generic`.

This is returned as a single-element [`ErrorList`](../types/errorlist.md). For a larger list, use [`merge`](merge.md) to join lists.

#### Parameters

* `msg` The error message.

#### Returns

* Returns a single-element array with one error in it.

#### See Also

* [`merge`](merge.md)