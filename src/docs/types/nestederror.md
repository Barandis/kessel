<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type NestedError = { type: ErrorType; ctx: Context; errors: ErrorList }`

An error that happens at a different location than that provided by the associated context.

A nested error typically results from backtracking. The context changes when backtracking happens, which would lead to loss if information about the error that *caused* the backtracking if that information wasn't saved. That's the purpose of the nested error; it saves its own copy of the context where the error actually happened so that information can be put into an error message even after backtracking.

A nested error has its own error list, which is where the error(s) which caused the backtracking will be. The nested error will then be in the error list returned by the result of the failed parse.

Nested errors always have the type `ErrorType.Nested`.

The [`attempt`](../parsers/attempt.md) parser produces nested errors when it backtracks, as do all backtracking parsers (those whose names end with `B`).

#### Properties

* `type`: The type of the error. This is always `ErrorType.Nested` for nested errors.
* `ctx`: The context describing where the nested error occurred.
* `errors`: A list of the errors that caused the nested error to be created.

#### See Also

* [`CompoundError`](compounderror.md)
* [`Context`](context.md)
* [`ErrorList`](errorlist.md)
* [`ErrorType`](errortype.md)
* [`LocalError`](localerror.md)
* [`attempt`](../parsers/attempt.md)