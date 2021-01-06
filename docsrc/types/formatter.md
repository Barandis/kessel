<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Formatter = (errors: ErrorList, index: number, view: DataView, tabSize?: number, maxWidth?: number) => string`

This is the type for a custom formatting function that is passed to [`formatErrors`](../tools/formaterrors.md). There is already a default formatter of this type used by `formatErrors` by default, but if a custom formatter is desired, this is the type it should be.

#### Parameters

* `errors`: The error list being formatted by the formatter.
* `index`: The index into the input where the error(s) happened.
* `view`: The input text, as a data view.
* `tabSize`: The size of the tabs. This is typically used as tab stops, but there's no reason a custom formatter couldn't do otherwise. The formatter must set the default value.
* `maxSize`: The maximum width of the line to display. The formatter must decide exactly what this means and provide a default value.

#### Returns

* Returns a formatted string describing the errors in whatever way is desired.

#### See Also

* [`ErrorList`](errorlist.md)
* [`formatErrors`](../tools/formaterrors.md)