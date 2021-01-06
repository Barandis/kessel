<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `merge(errors1: ErrorList, errors2: ErrorList): ErrorList`

Merges two error lists into a single error list.

This currently simply concatenates the lists; it does not remove any member of either list. The error formatter itself is regarded as responsible for displaying only the errors in question, so `merge` retains them all.

#### Parameters

* `errors1`: The first error list to merge.
* `errors2`: The second error list to merge.

#### Returns

* Returns both lists concatenated into a new list.

#### See Also

* [`ErrorList`](../types/errorlist.md)