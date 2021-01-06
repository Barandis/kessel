<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type ErrorType = symbol`

A symbol indicating the type of an error. The possible values are listed in the `ErrorType` namespace.

```
namespace ErrorType {
  const Expected: symbol;
  const Unexpected: symbol;
  const Generic: symbol;
  const Nested: symbol;
  const Compound: symbol;
  const Other: symbol;
}
```

[`NestedError`s](nestederror.md) must be of type `ErrorType.Nested`, while [`CompoundError`s](compounderror.md) must be of type `ErrorType.Compound`. All other error types are used for [`LocalError`s](localerror.md).

#### See Also

* [`CompoundError`](compounderror.md)
* [`LocalError`](localerror.md)
* [`NestedError`](nestederror.md)