<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `success(reply: Reply<T>): T | null`

Returns the parse result from a successful parse reply.

If the reply is not, in fact, successful, this function returns `null`.

#### Parameters

* `reply`: A parse reply, presumably the return value of a call to [`parse`](parse.md).

#### Returns

* Returns the result that comes from the parse reply, if it was successful. If it failed, `null` is returned..

#### See Also

* [`Reply`](../types/reply.md)
* [`failure`](failure.md)
* [`parse`](parse.md)