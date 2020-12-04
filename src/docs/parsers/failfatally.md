<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failFatally(msg)`

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

Fails automatically, applying a custom expected error message.

#### Parameters

* `msg` The expected error message to apply.

#### Fatal Failure

* Always fails fatally. The failure message will be [`expected(msg)`](../tools/expected.md). No input is consumed.

#### Throws

* Throws an error if `msg` is not a string.

#### See Also

* [`fail`](fail.md)
* [`failUnexpected`](failunexpected.md)