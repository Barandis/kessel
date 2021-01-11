<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `fail(m?: string): Parser`

Fails automatically with a custom generic error message.

The message is not required. Supplying no message will produce an error with no message, but `fail` is often used in situations where other nearby parsers will be supplying the error message.

#### Example

```javascript
const parser = fail('a letter, please?')

const f = parse(parser, '123')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // a letter, please?
```

#### Parameters

* `m`: The generic error message to apply.

#### Failure

* Always fails. The failure message will be [`generic(m)`](../tools/generic.md).

#### See Also

* [`Parser`](../types/parser.md)
* [`fatal`](fatal.md)
* [`generic`](../tools/generic.md)