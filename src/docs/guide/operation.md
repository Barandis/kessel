<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

Let's reprint the successful [`parse`](../tools/parse.md) example from the last page.

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

As was already revealed, this return result is a tuple of a context and a result. Let's finally get down to talking about what that actually means.

## The context object

Here's the isolated context object from the successful parse result above.

```
{
  view: DataView { byteLength: 6, byteOffset: 0, buffer: [ArrayBuffer] },
  index: 1
}
```

Alright, that's fine, but the context is supposed to contain the input text itself. But where's the text? To answer that question, we're going to have to learn (just a little) about character encodings.

JavaScript is a 25-year-old language. In the days when it was created, the state of character encodings, particularly those that allow the vast array of characters needed to represent all of the world's languages (while leaving plenty of room for emojis), wasn't settled. The authors of JavaScript chose an encoding called UTF-16, which uses two bytes per character with the possibility of using four for some characters using escape sequences.[^1]

[^1]: JavaScript really used UCS-2, but this is a pure two-byte encoding that can represent only 65,536 characters, which is not enough. UTF-16 can in this context be regarded as an extension of UCS-2 that allows four-byte characters to be used alongside the two-byte ones.

Around 2008, another encoding, called UTF-8, became the most popular in the world. UTF-8 encodes its characters in one to four bytes, depending on the character. The first 128 code points just *happen* to be the same as ASCII, and this ASCII compatibility became a chief reason for its adoption in the West.

The ship had already sailed for JavaScript though, and JavaScript does not have direct support for UTF-8 text, whatever its popularity.

??? note "Is UTF-16 bad?"
    None of this is meant to mean that UTF-16 is *bad*, per se. It can represent all of the same characters as UTF-8, just differently. Some would argue that UTF-16 is actually *better* in some ways because the more consistent character width makes it easier to index code points within strings.

    But UTF-16 is used by under 0.01% of web pages (UTF-8 is over 95%), and the powers-that-be in the web standards field consider UTF-8 to be the "mandatory encoding" for all text on the web. It further recommends specifically against using UTF-16 in browsers for security reasons.

    A lot of systems use UTF-16 &mdash; Microsoft Windows and Java are two examples, along with JavaScript &mdash; but at this point that may be more for backward compatibility reasons than anything.

Alright, so what does character encoding have to do with context? Basically, the effort was made to make Kessel use UTF-8, and since JavaScript strings are not UTF-8 compatible, something else needed to be done. That something else is making the context store text as an array of UTF-8-encoded bytes.

When the context is created, the input text is converted into a UTF-8 byte array. That array is tucked away in the context object within a `DataView`, which is simply an object that makes it easier to access the byte array. You can "see" the text right there in the context object:

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
There it is, the `buffer` property of the top-level `view` property in the context. An `ArrayBuffer` object is a byte array, and this one happens to hold UTF-8 encoded bytes. Let's look a little closer, since this view doesn't show us much about it.

```
> let r = K.parse(K.letter, 'abcdef')
undefined
> r[0].view.buffer
ArrayBuffer { [Uint8Contents]: <61 62 63 64 65 66>, byteLength: 6 }
```

*There's* the text! The contents of the array buffer are six numbers, which just happen to be (in hexadecimal) the UTF-8 code points for the letters `'abcdef'`. Mystery solved.[^2]

[^2]: To show how UTF-8 works, here's the same sort of thing, except using the first six letters of the *Russian* (Cyrillic) alphabet:

    ```
    > let r = K.parse(K.letter, 'абвгде')
    undefined
    > r[0].view.buffer
    ArrayBuffer {
      [Uint8Contents]: <d0 b0 d0 b1 d0 b2 d0 b3 d0 b4 d0 b5>,
      byteLength: 12
    }
    ```

    Twelve bytes to represent six characters; in UTF-8, Russian letters are two bytes long.

As for the rest &mdash; well, there's just the `index`. It just points at the byte that is the next to be read when the next parser is applied. The byte array itself doesn't change once the context is created, so rather than stripping bytes off the front (as in the simple example at the start of [Chapter 1](parsers.md)), this `index` is simply updated.

As a final note about context, let's see what happens to `index` in a parse failure.

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

This time `index` does not move. When `letter` fails, it does not consume any input, so the next parse attempt will happen at the same place. `index` reflects this by remaining at 0 when `letter` fails. This happens with *every* parser in Kessel that is not a combinator &mdash; they are atomic, so when they fail, it's as though they never ran in the first place.[^3]

[^3]: Alright, *one* more thing about `index`: it is a *byte* index, not a *character* index. Let's see how it works in that Russian text again (this uses [`letterU`](../parsers/letteru.md) because `letter` succeeds only with ASCII letters).

    ```
    > K.parse(K.letterU, 'абвгде')
    [
      {
        view: DataView { byteLength: 12, byteOffset: 0, buffer: [ArrayBuffer] },
        index: 2
      },
      { status: 'ok', value: 'а' }
    ]
    ```

    This time `index` is incremented by 2, because Russian letters are two bytes long.

## The result object

Alright, that was the hard part. Results are easy. Let's isolate the result object of the passing `letter` parse from the top of this page:

```
{ status: 'ok', value: 'a' }
```

Doesn't get much more straightforward than that. The `status` is `'ok'`, which means that nothing failed. The `value` is `'a'`, and it's not coincidental that it's the same as the return value of the successful [`run`](../tools/run.md) invocation from the [last chapter](running.md). And that's all there is to it.

So how does the failed case look?

```
{ status: 'fail', errors: [ [Object] ] }
```

This time, the `status` again tells us how it all worked out, in this case that the parse failed. With failure, there is no `value` property; in its place is `errors`, which is an array of objects describing errors that happened in the parse (there can be more than one, but there was not in this case.) Here's a closer look at the object in that `errors` property.

```
> let e = K.parse(K.letter, '123456')
undefined
> e[1].errors[0]
{ type: 'expected', label: 'a letter' }
```

Each of the errors is just an object with a `type` and a `label`. These are used for making nice error messages. There are other types of errors that have different properties than this, but that's something we'll look at later in the guide.

## Why `parse`?

Alright, so we've learned a lot about what goes on in the parser internals, but where does that get us in real life? Why wouldn't we just use `run` and not have to worry about all of these details?

Fact is, you may find that `run` is indeed best for you. But there are certainly reasons to use `parse` instead.

1. You don't want an exception thrown on failure.
2. You want to write your own error message formatter.
3. Your parser is embedded within other code that will check for the parser's success or failure and act accordingly.
4. You want the added detail for any number of other reasons.

If you choose to use `parse` in a particular application, there are some helpful functions to smooth over some of the details. All of them take the return value of `parse` and pick out some piece of it.

* [`success`](../tools/success.md) returns the same thing as `run` does, except that it returns `null` on failure rather than throwing an exception. 
* [`failure`](../tools/failure.md) does the opposite; it returns an error message on failure and returns `null` on success (again, no exception is thrown). 
* [`succeeded`](../tools/succeeded.md) returns `true` if the parse was successful and `false` if it was not. 
* [`status`](../tools/status.md) returns `'ok'`, `'fail'`, or `'fatal'` to tell how the parse went. (We'll talk about `'fatal'` later in the guide.)

Finally, there is [`formatErrors`](../tools/formaterrors.md). This takes a failed reply and returns a detailed error message; it's the same error message that both `run` and `failure` use. Using `formatErrors` grants you access to more options, including the ability to send a custom formatting function in case you want something different out of the error messages. (See [`Formatter`](../types/formatter.md) for information about what that function has to look like.)

So that's a pretty deep dive into parser internals, but at this point we've done nothing more than parse a single letter off the front of a string. Let's face it, that's not very useful. In the next chapter, we'll start to address that.