<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Result<T> = { status: Status; value: T; errors: ErrorList; }`

The result produced by a parser. This can either be a success or a failure, depending on the values of the properties.

If the result is a success, then `status` should be `Status.Ok` and `errors` should be an empty array. If the result is a failure, then `status` should be either `Status.Fail` or `Status.Fatal` and `value` should be `null`.

This kind of emulates a `Either` type from Haskell by using `status` to determine which of `value` and `errors` is valid.

#### Properties

* `status`: The status of the parse result. This indicates whether the parse succeeded, failed, or failed fatally.
* `value`: The value returned by the parser on a successful parse.
* `errors`: The error list returned by the parser on an unsuccessful parse.

#### See Also

* [`Reply`](reply.md)
* [`Status`](status.md)