<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `formatErrors(reply: Reply<any>, tabSize?: number, maxWidth?: number, formatter?: Formatter): string`

Formats a failed reply into a string. There is a default formatter, but a custom formatter can be supplied if necessary.

The default formatter calculates the line and column based on the reply, includes all or part of the parsed line where the error happened, and displays a caret that points to the location of that error. Below that, unexpected, expected, generic, compound, and nested errors are displayed, in that order.

Every error case in the examples found on the parser API pages illustrates how that error would be formatted by the default formatter.

To use a custom formatter, a new function that conforms to the [`Formatter`](../types/formatter.md) should be passed in as the `formatter` parameter. This function is responsible for both formatting and for the setting of default values for `tabSize` and `maxWidth`.

#### Parameters

* `reply`: The failed reply returned from a parser, used to calculate the location of the error and the reason(s) why it happened.
* `tabSize`: The size of tab stops, used to determine how tab characters (`'\t'`) are formatted. In the default formatter, this does not define the size of the tab; it and its multiples become the column numbers where tabs terminate. The default tab size in the default formatter is 8.
* `maxWidth`: The maximum width of a line that is displayed in the error message. This controls only whether the line is truncated in the error message. The default max width in the default formatter is 72.
* `formatter`: A formatting function that actually performs the formatting. The default formatter is a function not provided through the API, but the presence of this parameter allows an alternate formatting function to be used instead.

#### Returns

* Returns a formatted error message.

#### See Also

* [`Formatter`](../types/formatter.md)
* [`Reply`](../types/reply.md)
* [`getPosition`](getposition.md)