<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type Status: symbol`

A symbol indicating the status of a result. The possible values are listed in the `Symbol` namespace.

```
namespace Status {
  const Ok: symbol;
  const Fail: symbol;
  const Fatal: symbol;
}
```

`Status.Ok` indicates a successful result, while `Status.Fail` is for non-fatal failures and `Status.Fatal` for fatal failures.

#### See Also

* [`Result`](result.md)
* [`status`](../tools/status.md)