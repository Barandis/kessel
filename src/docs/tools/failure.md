<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failure(reply: Reply<any>): string | null`

Returns the error message from a failed parse reply.

If the reply is not, in fact, a failure, this function returns `null`.

#### Parameters

* `reply`: A parse reply, presumably the return value of a call to [`parse`](parse.md).

#### Returns

* Returns the error message that comes from the parse reply, if it was unsuccessful. If it succeeded, `null` is returned..

#### See Also

* [`Reply`](../types/reply.md)
* [`parse`](parse.md)
* [`success`](success.md)