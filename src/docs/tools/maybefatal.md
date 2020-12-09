<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `maybeFatal(test: boolean, ctx: Context, errors?: ErrorList, index?: number): Reply<null>`

Creates a reply object representing a failing parse. That failure may be fatal or non-fatal, depending on the value of the `test` parameter.

If `test` is true, then this will create a fatal reply (one with a `status` of `Status.Fatal`). Otherwise it will create a failing reply (one with a `status` of `Status.Fail`).

Once this determination of the type is made, this function works in all respects exactly like [`fatal`](fatal.md) or [`fail`](fail.md).

#### Parameters

* `test` A boolean telling whether this reply should represent a fatal failure.
* `ctx` The context for the newly created reply.
* `errors` The error list detailing errors that hapopened at the context's location. Defaults to an empty array.
* `index` The index into the context's input. This is used just to change that index if necessary (in backtracking, for example). Defaults to the context's current index.

#### Returns

* Returns a reply object with the given context and result value.

#### See Also

* [`fail`](fail.md)
* [`fatal`](fatal.md)
* [`ok`](ok.md)