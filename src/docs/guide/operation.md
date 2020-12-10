<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

It's already been explained more than once that in Kessel, a parser is a function that accepts a context and returns an updated context with a result. But we haven't actually seen a context or a result to know what that means. [`run`](../tools/run.md) just returns a value, and we haven't supplied anything more than a string of text to anything.

## The context object

Our tool for this chapter to help us out with this understanding is [`parse`](../tools/parse.md). This runs a parser just like `run`, but what it returns is very different.

```
> K.parse(K.letter, 'abcdef')
[
  {
    view: DataView { byteLength: 6, byteOffset: 0, buffer: [ArrayBuffer] },
    index: 1
  },
  { status: Symbol(ok), value: 'a' }
]
```

Okay, that's a little different than what `run` returns (which is...well, `'a'`). Here we have an array of two objects. One might reasonably guess that this is the famous `[Context, Result<T>]` tuple that we've talked about already, and one would be right. So the first object here is the updated context &mdash; but where's the text? Didn't we say the context is just the input text with some position information?

To explain this, we're going to have to talk briefly about character encodings.

