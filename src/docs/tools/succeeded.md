<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `succeeded(reply: Reply<any>): boolean`

Determines whether a parse reply indicates success.

This utility function simply reads the [`status`](status.md) from the reply and returns `true` if it is `Status.Ok` and `false` otherwise.

#### Parameters

* `reply`: A parse reply, presumably the return value of a call to [`parse`](parse.md).

#### Returns

* Returns `true` if the reply was successful or `false` if it was not.

#### See Also

* [`Reply`](../types/reply.md)
* [`parse`](parse.md)
* [`status`](status.md)