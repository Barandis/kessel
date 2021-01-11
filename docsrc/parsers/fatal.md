<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `fatal(m: string): Parser`

Fails fatally automatically with a custom generic error message.

The message is not required. Supplying no message will produce an error with no message, but `fatal` is often used in situations where other nearby parsers will be supplying the error message.

Note that this explicit failure parser is a rare way to fail fatally without consuming input. Fatal failure in Kessel is generally associated with failure after consuming input.

#### Example

```javascript
const parser = fatal('a letter please?')

const t = parse(parser, '123')
console.log(status(t))  // "fatal"
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // a letter please?
```

#### Parameters

* `m`: The generic error message to apply.

#### Fatal Failure

* Always fails fatally. The failure message will be [`generic(m)`](../tools/generic.md). No input is consumed.

#### See Also

* [`Parser`](../types/parser.md)
* [`fail`](fail.md)
* [`generic`](../tools/generic.md)