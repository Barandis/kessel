<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

We all probably have a vague notion of what a parser is: it's some code that reads a piece of a longer string of text. By that reckoning, this might be the world's simplest parser:

```javascript
const parser = text => {
  const [char, ...rest] = text
  return [char, rest]
}
```

This simple little function strips the first character off the text and returns it along with the rest of the unparsed text. It matches any character, so it's like Kessel's [`any`](../parsers/any.md) parser. This example parser doesn't handle parsing errors (what happens when text is the empty string?) and is pretty simplistic with what it can work with, but it shares a surprising amount with a Kessel parser.

The type of the example parser is `(text: string) => [string, string]`. It takes a string and returns a tuple of two strings, one for the parsed character and one for the remaining text.

!!! note "Tuples"
    JavaScript, of course, doesn't have tuples. However, its arrays act very much like tuples in that, unlike most other languages, they can have elements of different types. We consistently use the term *tuple* when using arrays like this.

The type of a Kessel parser is quite similar:

```type Parser<T> = (ctx: Context) => [Context, Result<T>]```

A parser in Kessel is a function which takes a *context* as an argument. It returns an updated context, along with a result. These types are just enhanced versions of what is in the simple parser; a context is basically text along with information about the location of the next character to be parsed, and a result is either the parsed value (if the parser was successful) or error information (if it was not).

!!! note "Reply"
    The return type given for a `Parser` in the [API documentation](../types/parser.md) is `Reply<T>`. This doesn't make the type given above wrong; `Reply<T>` is just a type alias for `[Context, Result<T>]`.

[`letter`](../parsers/letter.md) is a very basic example of a Kessel parser. It is a function that attempts to match a character in the range `'a'-'z'` or `'A'-'Z'` at its context's current location. If it does, the parser is successful; the returned tuple will have a context updated to show which is the *next* character to parse, along with a result that has the parsed character as its value.

Most parsers accept arguments to program what they're looking for. For instance, the [`char`](../parsers/char.md) parser accepts the character that it's looking for as an argument; `char('a')` will try to match the letter `'a'`, while `char('Я')` will match a Russian capital letter "Ya". Many parsers accept one or more *other parsers* as arguments; these are *combinators* and will be discussed later.

!!! note "But wait..."
    You may have noticed that we say `char` takes a character as an argument, while also saying that a parser takes a context as an argument. So what gives?

    Technically, `char` is not a parser, but it is a function that *returns* a parser. So while `char` may not be a parser, `char('a')` is.