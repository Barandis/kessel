<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

Now we've seen a couple examples of Kessel parsers, but we haven't actually *done* anything with them. A parser isn't worth much if you don't give it some text to parse, and we haven't seen how to do that yet. Let's fix that.

Kessel offers up the function [`run`](../tools/parse.md) to run a parser against input text. It handles creating the context which is then passed to the parser that's being run. We'll talk about that context in a bit, but first let's make a parser just run.

I will be doing this in a Node.js REPL. Enter `node` into a terminal and it should greet you with a message similar to this (the version number may, of course, be different).

```
Welcome to Node.js v14.13.0.
Type ".help" for more information.
>
```

The only setup we need is to make sure Kessel is loaded. Locate `kessel.js` and include it in a `require` expression. (As I write this, I'm working in a local copy of the repo itself, so it's at `./lib/kessel.js` for me; change that part in the command below to match where it is for you.)

```
> let K = require('./lib/kessel')
undefined
```

And we're ready to go. This is the way I'm running every example in this user's guide and in the tutorial. There are lots of different ways to run JavScripot code and you can run it any way you want...load it into a browser via a local webpage, write and execute scripts, however you like.

## Running a parser

Let's run a simple parser.

```
> K.run(K.letter, 'abcdef')
'a'
```

`run` executes the `letter` parser against the input, and `letter` matches the first character, which `run` returns.

??? note "Namespaces"
    Since we assigned the `require` expression to the variable `K`, all of Kessel's parsers and functions are available as properties on `K`. This might be convenient in code so that you can easily differentiate which parsers came from Kessel and which are custom.

    Another good way to do it is by destructuring the `require` expression:

    ```
    const { run, letter } = require('./lib/kessel')
    ```

    Then you could call the parsers and functions without the `K` prefix.

    ```
    > run(letter, 'abcdef')
    'a'
    ```

    This is the way I normally write JavaScript code. However, when working in a REPL as we are here, it's not very convenient to have to know exactly which library functions you're going to use at the very beginning, so we import them all into `K` and use them from there.

What if the parser fails?

```
> K.run(K.letter, '123456')
Uncaught Error: Parse error at (line 1, column 1):

123456
^
Expected a letter
```

A short stack trace follows that, but that's not as interesting as the error message. That message gives the line and column number where the error happened, prints out the line and points to the location, and says what was expected. In a short example, this information isn't that helpful, but if you're parsing a thousand-line document that uses 500 different parsers, you'll appreciate the detail of the error messages.

## ...*Parsing* a parser?

So after all of the talk in [Chapter 1](parsers.md) about *contexts*, we come over here and see no hint of a context at all when we're running our first parser. Well, that is the way of things. Contexts are handled transparently. `run` creates the context out of the input text you give to it, and even when we get to composite parsers, we'll see that the context gets passed from parser to parser without us ever even having to see it. You can write an extraordinarily complex parser with Kessel and never even have to know that contexts exist.

But `run` isn't the only game in town. In fact, `run` is pretty quick and dirty, either returning a successful result or just bailing with an exception. Oftentimes we would like more control than that. That's where [`parse`](../tools/parse.md) comes in.

`parse` does everything *almost* the same as `run`. It accepts the same arguments (a parser and some input text), it creates the context in the background, it executes the parser against that context. The difference is in what it returns.

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

Alright, so that's a little more involved than the `'a'` that `run` returned. Given a little thought, you might guess that what we have here is the infamous `[Context, Result<T>]` tuple that we talked about in [Chapter 1](parsers.md), and you would be right. `parse` basically takes the output tuple that its parser returns and passes it right along to us.

This is *really* notable when we run a parser that fails. `run` throws an exception, but `parse` is a different story.

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

So `parse` gives us a window into the way that parsers work internally since it returns all of the information that parsers use. To know what to do with all of this information, we're going to have to learn a little about [`Context`](../types/context.md) and [`Result`](../types/result.md).

Fortunately, we cover that next.