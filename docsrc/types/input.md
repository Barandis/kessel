<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Input = string | ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array`

A union of all of the types that can be provided as input to a parser.

These are each converted by [`parse`](../tools/parse.md) or [`run`](../tools/run.md) into a `DataView`, which is then inserted into a [`Context`](context.md).

#### See Also

* [`Context`](context.md)
* [`parse`](../tools/parse.md)
* [`run`](../tools/run.md)