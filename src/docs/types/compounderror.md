<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type CompoundError = { type: ErrorType; msg: string; ctx: Context; errors: ErrorList }`

An error that happens at a different location than that provided by the associated context.

A compound error results from backtracking. The context changes when backtracking happens, which would lead to loss if information about the error that *caused* the backtracking if that information wasn't saved. That's the purpose of the nested error; it saves its own copy of the context where the error actually happened so that information can be put into an error message even after backtracking.

A compound error has its own error list, which is where the error(s) which caused the backtracking will be. It also has a message which is used as a header to explain the backtracking. The compound error will then be in the error list returned by the result of the failed parse.

Compound errors always have the type `ErrorType.Compound`.

The [`attemptM`](../parsers/attemptm.md) parser produces a compound error when it backtracks.

#### Properties

* `type`: The type of the error. This is always `ErrorType.Compound` for compound errors.
* `msg`: A message describing the circumstances of the backtracking.
* `ctx`: The context describing where the nested error occurred.
* `errors`: A list of the errors that caused the nested error to be created.

#### See Also

* [`Context`](context.md)
* [`ErrorList`](errorlist.md)
* [`ErrorType`](errortype.md)
* [`LocalError`](localerror.md)
* [`NestedError`](nestederror.md)
* [`attemptM`](../parsers/attemptm.md)
* [`compound`](../tools/compound.md)