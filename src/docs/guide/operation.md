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
  { status: 'ok', value: 'a' }
]
```

Okay, that's a little different than what `run` returns (which is...well, `'a'`). Here we have an array of two objects. One might reasonably guess that this is the famous `[Context, Result<T>]` tuple that we've talked about already, and one would be right. So the first object here is the updated context &mdash; but where's the text? Didn't we say the context is just the input text with some position information?

To explain this, we're going to have to talk briefly about character encodings.

UTF-8 is the standard for character encoding these days. It assigns each character one to four bytes, depending on the character; commonly-used characters tend to be smaller. This lets text be stored in as small a space as possible, on average, while still having enough assignments to cover all of the characters in the world's languages (with plenty of room for emojis left over).

But JavaScript was designed before UTF-8 was a thing. Its characters are encoded in a two-byte-per-character encoding called UCS-2, with some UTF-16-like extensions that give it some four-byte characters. This isn't compatible with UTF-8, which means if Kessel was to support UTF-8, it couldn't use regular JavaScript strings.

So when `parse` or `run` creates a context, it converts the UCS-2 string sent to it into an array of UTF-8 encoded bytes and stores this array as its input text. It's present in the context object shown above; it's the `buffer` in the `view` property (the `DataView` is just an interface to make it easier for Kessel to access the byte array). When a parse result is found, Kessel converts the UTF-8 bytes for the result *back* to a JavaScript string, and that's what becomes the result.

The other part of the context is its `index`. This is the index (in the UTF-8 byte array) of the first byte of the character that will be read the next time a parser is applied to the input. It's a *byte* index, not a *character* index; if a parser reads a 3-byte character out of the array, the index will go up by 3.

## The result object

There's one more part of the reply, which is the result. This is the second object in the tuple that `parse` returns:

```
{ status: 'ok', value: 'a' }
```

This isn't nearly so difficult to figure out: the `status` indicates that the parse seemed to go okay, and the `value` is the actual parsed value. What does it look like when a parse fails?

```
> K.parse(K.letter, '123456')
[
  {
    view: DataView { byteLength: 6, byteOffset: 0, buffer: [ArrayBuffer] },
    index: 0
  },
  { status: 'fail', errors: [ [Object] ] }
]
```

There's only one small difference in the context; the `index` is 0 instead of 1, indicating that nothing was consumed by the parse. And this makes sense; if a basic parser doesn't find the input it expects, it consumes nothing and results in a parse error. (Combinators can be different than parsers here, but we'll talk about that later.)

On the other hand, the result is quite different. First, the `status` tells us that something went wrong, and there is no `value` at all, having been replaced by some property called `errors` that has an array of objects.

This `errors` property, as the name suggests, is where the reply stores informaiton about any errors that occurred. Those errors are not plain text, and they do not make up a pretty error message like `run` threw, but this reply contains everything that's needed to *make* that message.

A result will have either a `value` property if it was successful or an `errors` property if it was not.

## Reply, what is it good for?

So why would you use `parse` instead of `run`, when the latter returns things that are so much simpler?

There are a few reasons. Your parser might be part of a larger program. If it is, then you might parts of the reply other than the parsed value, or perhaps you would prefer to have failure not throw an error. Perhaps you want to create your own custom error messages. Maybe you have need for some other code to track your context. Or maybe you just want to have extra control over what comes out of a parser.

Whatever the reason, there are a few functions that take a `Reply` object specifically and are designed mostly for use right alongside `parse` itself.

* [`succeeded`](../tools/succeeded.md) returns `true` or `false` to tell whether a parse succeeded,
* [`status`](../tools/status.md) returns `'ok'`, `'fail'`, or `'fatal'` (which we'll talk about later) to tell how a parse went,
* [`success`](../tools/success.md) returns the resulting value, just like `run` does, but returns `null` on failure instead of throwing an error,
* [`failure`](../tools/failure.md) returns a formatted error message, just as the one in `run`'s thrown error, if a parser fails.

Finally, there is [`formatErrors`](../tools/formaterrors.md), which produces the same error message that `run` and `failure` do. It also has some options that aren't available through `run` or `failure`, including the ability to provide a custom formatting function.

With these tools to make working with replies easier, the choice between `run` and `parse` can often just come down to personal preference.