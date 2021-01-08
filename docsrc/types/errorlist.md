<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `type ErrorList = (NestedError | CompoundError | LocalError)[]`

An `ErrorList` is simply an array of errors of mixed types. Unsuccessful results will have lists of errors because it is possible for more than one error to occur at the same location or from the same source.

#### See Also

* [`CompoundError`](compounderror.md)
* [`LocalError`](localerror.md)
* [`NestedError`](nestederror.md)
* [`Result`](result.md)
* [`failReply`](../tools/failreply.md)
* [`fatalReply`](../tools/fatalreply.md)
* [`maybeFatal`](../tools/maybefatal.md)