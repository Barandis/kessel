<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `status(reply: Reply<any>): Status`

Returns the status of a parser reply.

The status indicates whether the parse succeeded (`Status.Ok`), failed (`Status.Fail`), or failed fatally (`Status.Fatal`).

#### Parameters

* `reply` A parse reply, presumably the return value of a call to [`parse`](parse.md).

#### Returns

* Returns the status of that reply.

#### See Also

* [`parse`](parse.md)
* [`succeeded`](succeeded.md)