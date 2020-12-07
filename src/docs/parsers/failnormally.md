<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failNormally(msg)`

Fails automatically with a custom generic error message.

#### Example

```javascript
const parser = failNormally('a letter, please?')

const f = parse(parser, '123')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // a letter, please?
```

#### Parameters

* `msg` The generic error message to apply.

#### Failure

* Always fails. The failure message will be [`generic(msg)`](../tools/generic.md).

#### Throws

* Throws an error if `msg` is not a string.

#### See Also

* [`failFatally`](failfatally.md)