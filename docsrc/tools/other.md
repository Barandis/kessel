<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `other(msg: string): [LocalError]`

Creates some kind of error not explicity supported by Kessel. This error's `type` will be `ErrorType.Other`.

This is returned as a single-element [`ErrorList`](../types/errorlist.md). For a larger list, use [`merge`](merge.md) to join lists.

Error messages created by `other` are not displayed by the default formatter for error messages. They are only useful if a custom formatter is used.

#### Parameters

* `msg`: The error message.

#### Returns

* Returns a single-element array with one error in it.

#### See Also

* [`ErrorList`](../types/errorlist.md)
* [`LocalError`](../types/localerror.md)
* [`formatErrors`](formaterrors.md)
* [`merge`](merge.md)