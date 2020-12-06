<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failFatally(msg)`

Fails fatally automatically with a custom expected error message.

Note that this explicit failure parser is the only way to fail fatally without consuming input. Every other case of fatal failure in Kessel is associated with failure after consuming input.

#### Example

```javascript
const parser = failFatally('a letter')

const t = parse(parser, '123')
console.log(status(t))  // Symbol(fatal)
console.log(failure(t)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter
```

#### Parameters

* `msg` The expected error message to apply.

#### Fatal Failure

* Always fails fatally. The failure message will be [`expected(msg)`](../tools/expected.md). No input is consumed.

#### Throws

* Throws an error if `msg` is not a string.

#### See Also

* [`fail`](fail.md)
* [`failUnexpected`](failunexpected.md)