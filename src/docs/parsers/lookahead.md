<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lookAhead(p)`

```javascript
const parser = lookAhead(letter)

const s = parse(parser, 'abc')
console.log(status(s))  // Symbol(ok)
console.log(success(s)) // "a"

const f = parse(parser, '123')
console.log(status(f))  // Symbol(ok)
console.log(success(f)) // null
```

Applies a parser and returns its result on success, but does not consume input.

This parser allows for peeking ahead to see what characters are coming up without actually consuming those characters. It's common to see it in [`block`](block.md) parsers to drive logic that determines which parser gets applied based on the next character.

`lookAhead` is very similar to [`optional`](optional.md). The difference is that `optional` consumes input on success where `lookAhead` does not.

#### Parameters

* `p` The parser to apply without consuming input. If `p` succeeds, its result will be returned.

#### Success

* Succeeds as long as `p` does not fail fatally. If `p` succeeds, its result is returned. If `p` fails, nothing is returned. In either case, no input is consumed.

#### Fatal Failure

* Fails fatally if `p` fails fatally.

#### Throws

* Throws an error if `p` is not a parser.

#### See Also

* [`block`](block.md)
* [`optional`](optional.md)