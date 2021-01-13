<!--
 Copyright (c) 2021 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

> `lazy(fn: function, m?: string): Parser`

Takes a parser factory function and defers execution of that function until the returned parser is executed. This can be used to define recursive parsers.

First, note that throughout this page, we will be in one of the rare territories where the distinction between *parser* and *parser factory* is actually very important. On this page, when *parser* is used, it actually means *parser* and not *parser factory*.

To illustrate why `lazy` is necessary, let's look at a naive definition of a parser that recursively parses comma-separated lists of words.

```javascript
const word = many1(letter())
const list = seq(
  word, 
  opt(right(char(','), list)),
)
```

This *looks* fine, but it actually is illegal JavaScript. A variable (`list` in this case) cannot be used until it is fully defined. That means that `list` cannot be used within the definition of `list`, so a recursive variable declaration like this is not allowed.

The simple way to fix that is to make `list` into a function instead (in fact, this function is a parser factory, as it's a function that returns a parser). It's perfectly okay to reference a function from inside its own definition.

```javascript
function list() {
  return seq(
    word,
    opt(right(char(','), list()))
  )
}
```

This also *looks* fine, but it has an even scarier problem. When you try to create a parser by invoking `list`, an infinite loop is created. `list` calls `list`, which calls `list`, and so on, forever (or at least until the stack overflows). We can see by looking at the definition that `list` wouldn't need to be called if the input didn't have the optional comma after a word, but there's no way for `list` to know whether that's the case, since an input hasn't been applied yet.

What we need is a solution like this one, except that it would defer the internal call to `list` until it was sure that it was actually needed. In other words, it would have to only call `list` when the parser was *executed*, not when it was *created*.

That's what `lazy` is for. Instead of running the parser factory that's passed to it, it wraps it in a parser which calls that parser factory when it's *executed*. If that parser is never executed &mdash; in this case, because that `opt` isn't satisfied because there's no comma to parse &mdash; then the parser factory doesn't run and the infinite loop never happens.

Here's the final, working solution to this recursive parser factory.

```javascript
function list() {
  return seq(
    word,
    opt(right(char(','), lazy(list)))
  )
}
```

`list` is now a safe parser factory that can be executed like any other parser factory without fear that it will loop infinitely.

#### Important notes on recursion

There are two important things to know about recursive parsers and how to use `lazy` to implement them.

The first is that, as with *any* recursion, there has to be a signal to stop. In recursive functions, there's usually an `if` statement that stops the function from running itself again once a certain point is reached (for example, a recursive factorial function will have some statement like `if (n === 0) return n`). That's the same with recursive parsers. `lazy` will do no good unless there is a case where it's not run, such as (as above) being inside an `opt` combinator that will eventually not match.

The second is that `lazy` cannot solve left-recursion. Top-down parser libraries like Kessel simply can't do left-recursive grammars. The example above is an example of right-recursion, which simply means that the recursive term (`list` in the above case) appears on the right side of a sequence. `right` is a sequence parser, and `list` appears on the right side of that sequence. Kessel can parse this without a problem.

Something like this, on the other hand, would make trouble. (This is done in a BNF-like grammar; I am no BNF expert and don't expect you to be either. The meaning should be fairly clear anyway.)

```
Expression ::= Expression '*' Expression
            || Expression '+' Expression
            || Term
Term ::= Number | Variable
```

This is not an uncommon sort of thing to want to parse; it's just a way of recursively defining multiplication and addition operations. But in this form, there's no way for Kessel (or any other top-down parser, combinator-based or not) to parse it successfully. The problem is that the recursive term, `Expression` in this case, is on the *left* side of a sequence. It's *left-recursive*.

Fortunately all left-recursive grammars can be transformed via algorithm into right-recursive grammars, at the cost of some complexity. Here's the same grammar, but with no left-recursion.

```
Expression ::= Multiplication '+' Expression
            || Multiplication
Multiplication ::= Term '*' Term
                || Term
Term ::= Number | Variable
```

This time, `Expression` appears on the right side of a sequence. This is right-recursive, and with the help of `lazy`, a Kessel parser for this grammar is easily constructed.

Algorithms to eliminate left-recursion are beyond the scope of this documentation, but there are a lot of sources available to explain how to do it. A quite academic resource (for those of you that like things like that) is available a the [Western University CS department][1], and a more accessible one (at least in my opinion) can be found at the [Worcester Polytechnic Institute CS department][2]. [Wikipedia's article on left recursion][3] has a reasonable algorithm; Wikipedia's material on math and on theoretical computing is often extremely dence, but I find this one usable.

If none of those excite you, just do a Google search for "left recursion elimination". You will get a lot of results, and perhaps one of them will work better for you than these three. If not, there are even videos on YouTube on how to do it.

#### Example

```javascript
const parser = (function parser() {
  return clean(flat(seq(
    join(many1(letter())),
    opt(right(char(','), lazy(parser))),
  )))
})()

const s = parse(parser, 'alfa,bravo,charlie')
console.log(status(s))  // "ok"
console.log(success(s)) // ["alfa","bravo","charlie"]

const f = parse(parser, '123,456,789')
console.log(status(f))  // "fail"
console.log(failure(f)) // Parse error at (line 1, column 1):
                        //
                        // 123,456,789
                        // ^
                        // Expected a letter
```

This is a "real" example of the code in the discussion above, in that it accounts for handling joining and flattening of character arrays into strings and for eliminating the `null` that `opt` will eventually produce when it doesn't match anymore. That was left out in the text above because it wasn't relevant to that discussion, but if you ran the `s` example case with the simple code from the discussion, you'd get 

```
[
  ['a', 'l', 'f', 'a'], 
  [
    ['b', 'r', 'a', 'v', 'o'], 
    [
      ['c', 'h', 'a', 'r', 'l', 'i', 'e'],
      [null],
    ]
  ]
]
```

And that's probably not what you want.

It is also idiomatic in that it's in an IIFE, so `parser` is an actual parser rather than a parser factory. This matches up with the examples in all of the other API documentation pages. You can, of course, do it how you want.

If this code makes sense to you without taking a few minutes to study it, then you've come far in your knowledge of Kessel.

#### Parameters

* `fn`: A parser factory function whose invocation will be deferred until the `lazy` parser is executed.
* `m`: The optional expected error message that will take the place of the default error message.

#### Success

* Succeeds if the parser produced by `fn` succeeds. Returns that parser's result.

#### Failure

* Fails if the parser produced by `fn` fails.

#### Fatal Failure

* Fails fatally if the parser produced by `fn` fails fatally.

#### Throws

* Throws an error if `fn` is not a function.
* Throws an error if `m` exists and is not a string.
* Throws an error if `fn` does not return a parser.

#### See Also

* [`Parser`](../types/parser.md)
* [`clean`](clean.md)
* [`opt`](opt.md)

[1]: https://www.csd.uwo.ca/~mmorenom/CS447/Lectures/Syntax.html/node8.html
[2]: https://web.cs.wpi.edu/~kal/PLT/PLT4.1.2.html
[3]: https://en.wikipedia.org/wiki/Left_recursion#Removing_all_left_recursion