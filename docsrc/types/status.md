<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `enum Status: 'ok' | 'fail' | 'fatal'`

A string indicating the status of a result. The possible values are listed in the `Status` namespace.

```
namespace Status {
  const Ok: 'ok';
  const Fail: 'fail';
  const Fatal: 'fatal';
}
```

This isn't typed as an enum because it's better for use with discriminated unions.

`Status.Ok` indicates a successful result, while `Status.Fail` is for non-fatal failures and `Status.Fatal` for fatal failures.

#### See Also

* [`Result`](result.md)
* [`status`](../tools/status.md)