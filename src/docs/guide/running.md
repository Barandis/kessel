<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

Kessel offers up the function [`run`](../tools/parse.md) to run a parser against input text. It handles creating the context which is then passed to the parser that's being run. We'll talk about that context in a bit, but first let's make a parser just run.

I will be doing this in a Node.js REPL. Enter `node` into a terminal and it should greet you with a message similar to this.

```
Welcome to Node.js v14.13.0.
Type ".help" for more information.
>
```

The only setup we need is to make sure Kessel is loaded. Locate `kessel.js` (I'm working in the repo itself, so it's at `./lib/kessel.js` for me) and include it in a `require` expression.

```
> let K = require('./lib/kessel')
undefined
```

And we're ready to go. This is the way I'm running every example in this user's guide and in the tutorial. You can run it any way you want...load it into a browser via a local webpage, write and execute scripts, however you like.

Let's run a simple parser.

```
> K.run(K.letter, 'abcdef')
'a'
```

`run` executes the `letter` parser against the input, and `letter` matches the first character, which `run` returns.

!!! note "Namespaces"
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

    This is the way I normally program scripts, but for working in a REPL, I prefer not having to specify which parsers I'm going to use at the beginning.

What if the parser fails?

```
> K.run(K.letter, '123456')
Uncaught Error: Parse error at (line 1, column 1):

123456
^
Expected a letter
```

A short stack trace follows that, but that's not as interesting as the error message. That message gives the line and column number where the error happened, prints out the line and points to the location, and says what was expected. In a short example, this information isn't that helpful, but if you're parsing a thousand-line document that uses 500 different parsers, you'll appreciate the detail of the error messages.

`run` is quick and dirty, but is often exactly what you want. You can also use [`parse`](../tools/parse.md), which takes the same parameters, but instead of returning the value or throwing an error, it returns the same `[Context, Result<T>]` tuple that its parser returns. This affords more control over the parse result, but it means we need to know a little bit more about how Kessel parsers work.

Fortunately, we cover that next.