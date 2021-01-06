<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type LocalError = { type: 'expected' | 'unexpected' | 'generic' | 'other'; msg: string; }`

An error that happens at a location indicated by an associated context.

A parser returns a [`Reply`](reply.md); this reply contains both a [`Result`](result.md) and a [`Context`](context.md). The result has a list of errors if it is a failed parse, and the context indicates the position where those errors happened. Thus the errors themselves do not have to carry context information because the context is there to do it.

Local errors can be of any kind other than `ErrorType.Nested` and `ErrorType.Compound`, each of which hold additional information and therefore are of types different from local errors.

#### Properties

* `type`: The type of the local error.
* `msg`: The message describing the local error.

#### See Also

* [`CompoundError`](compounderror.md)
* [`ErrorType`](errortype.md)
* [`NestedError`](nestederror.md)
* [`expected`](../tools/expected.md)
* [`generic`](../tools/generic.md)
* [`other`](../tools/other.md)
* [`unexpected`](../tools/unexpected.md)