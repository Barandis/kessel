<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `getPosition(ctx: Context, tabSize?: number): { line: number, column: number }`

Calculates the position represented by a context.

The context contains both the text and a pointer into that text, and this function determines which line and column number within the text is indicated by that pointer. This calculation takes tab stops into effect, which is the reason for the `tabSize` parameter (which defaults to 8).

It also takes character sizes into account. A four-byte character takes up four bytes in the context, but it only takes one column. Zero-width characters (including the Unicode categories for non-spacing marks and for formatting characters) are accounted for as well.

This function uses the same calculation used by the default formatter in [`formatErrors`](formaterrors.md) to calculate the line and column for its error message.

#### Parameters

* `ctx`: The context supplying the text and position that is used to calculate the line and column numbers.
* `tabSize`: The size of the tab stops, used to calculate column numbers of characters that follow a tab within a line. Defaults to 8.

#### Returns

* Returns an object of two properties, `line` and `column`, which are set to the 1-based line and column numbers of the position indicated by the context.

#### See Also

* [`Context`](../types/context.md)
* [`formatErrors`](formaterrors.md)