<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `failUnexpected(msg)`

```javascript
const parser = failUnexpected('digit')

const f = parse(parser, '123')
console.log(status(f))  // Symbol(error)
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123
                        // ^
                        // Unexpected digit
```

Fails automatically, applying a custom unexpected error message.

#### Parameters

* `msg` The unexpected error message to apply.

#### Failure

* Always fails. The failure message will be [`unexpected(msg)`](../tools/unexpected.md).

#### Throws

* Throws an error if `msg` is not a string.

#### See Also

* [`fail`](fail.md)
* [`failFatally`](failfatally.md)