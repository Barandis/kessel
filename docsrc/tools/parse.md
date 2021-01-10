<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `parse(p: Parser, input: Input): Reply`

Executes a parser against input text. This is the primary parser execution function in Kessel.

For the purpose of supporting UTF-8, the input is stored internally as a `DataView`. `parse` knows how to transform several types into views, and `input` can be any of these.

* `string`
* `ArrayBuffer`
* any of the typed arrays (`Uint8Array`, `Int16Array`, etc.)
* `DataView`

`p`, which can be any parser but likely is a combinator composed of many parsers, is executed against this text, and the reply that is returned provides all of the information about how well it worked. The utility functions [`status`](status.md), [`succeeded`](succeeded.md), [`success`](success.md), and [`failure`](failure.md) can be used to extract that information from the reply.

#### Parameters

* `p`: The parser to execute.
* `input`: The text to execute `p` against.

#### Returns

* Returns a reply containing the context at the end of parsing and the parse result.

#### Throws

* Throws an error if any parser within `p` throws an error.

#### See Also

* [`Input`](../types/input.md)
* [`Parser`](../types/parser.md)
* [`Reply`](../types/reply.md)
* [`failure`](failure.md)
* [`run`](run.md)
* [`status`](status.md)
* [`succeeded`](succeeded.md)
* [`success`](success.md)