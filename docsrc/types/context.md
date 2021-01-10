<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Context = { view: DataView; index: number; }`

A `Context` is used to keep record of the input being parsed and the current parsing position within that input.

The `view` is the actual input, transformed into an array of bytes wrapped in a `DataView`. Kessel deals in UTF-8 characters, which may be anywhere between one and four bytes per character, and using an array of bytes to represent the input lets Kessel deal with the variable-length characters in the most flexible manner.

The `index` is a byte-based index (as opposed to the output of error messages, which is character-based). Kessel ensures that, as long as the byte array is properly formed (i.e., that someone didn't pass in bytes that don't actually represent real characters), it will always have `index` pointing at the first byte of the next character.

Contexts should be created using the functions [`okReply`](../tools/okreply.md), [`failReply`](../tools/failreply.md), and [`fatalReply`](../tools/fatalreply.md)because they ensure that no older contexts are overwritten (which can become important in nested and compound errors, which keep multiple contexts).

#### Properties

* `view`: A `DataView` representing the input text. This view is created by the parsing functions [`parse`](../tools/parse.md) and [`run`](../tools/run.md) from any of the legal types of input.
* `index`: A pointer that marks the current location in the view. The next byte read by a parser will be the byte at that location.

#### See Also

* [`Reply`](reply.md)
* [`failReply`](../tools/failreply.md)
* [`fatalReply`](../tools/fatalreply.md)
* [`okReply`](../tools/okreply.md)
* [`parse`](../tools/parse.md)
* [`run`](../tools/run.md)