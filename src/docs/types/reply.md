<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Reply<T> = [Context, Result<T>]`

The type representing a reply from a parser. Each parser returns a value of this type, and [`parse`](../tools/parse.md) does as well.

`Reply` objects should be produced by [`ok`](../tools/ok.md), [`fail`](../tools/fail.md), [`fatal`](../tools/fatal.md), and [`maybeFatal`](../tools/maybefatal.md) rather than being produced by hand. This ensures that the context is copied so that there aren't accidental overwrites of the indexes of older contexts.

A reply contains all of the information necessary to get a result and, if that result is a failure, to know what the failure was and where it happened.

#### See Also

* [`Context`](context.md)
* [`Result`](result.md)
* [`failure`](../tools/failure.md)
* [`status`](../tools/status.md)
* [`succeeded`](../tools/succeeded.md)
* [`success`](../tools/success.md)