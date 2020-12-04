<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `fail(msg)`

```javascript
const parser = fail('a letter')

const f = parse(parser, '123')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Expected a letter
```

Fails automatically, applying a custom expected error message.

#### Parameters

* `msg` The expected error message to apply.

#### Failure

* Always fails. The failure message will be [`expected(msg)`](../tools/expected.md).

#### Throws

* Throws an error if `msg` is not a string.

#### See Also

* [`failFatally`](failfatally.md)
* [`failUnexpected`](failunexpected.md)