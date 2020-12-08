<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Summary

## Terminology

A couple notes on terms you'll find in this API documentation.

### Parser

Everything in the Parser API Reference is referred to as a *parser*. This is not exactly accurate; in Kessel, a parser is a function that takes a context as an argument and returns a tuple of an updated context and a result. By that definition, the only parsers in here are things like [`any`](parsers/any.md) and [`letter`](parsers/letter.md) that don't take any additional parameters.

A number of items in the reference are functions that *produce* parsers. Examples are [`char`](parsers/char.md) and [`string`](parsers/string.md). These require extra information to know what to parse &mdash; `char` needs to know *which* character it's looking for, for example &mdash; so they have parameters to let them accept that information. But these functions *return* parsers. In other words, `char` is not a parser, but `char('a')` is. Because of that, it's safe enough to refer to these functions as parsers as well.

The final class of object in the Parser API Reference is the *combinator*. A combinator is a function that takes one or more parsers as parameters, maybe with other parameters as well, and return another parser. ([`block`](/parsers/block.md) and [`blockB`](parsers/blockb.md) take generator functions instead of parsers, but since those generator functions can call parsers in their bodies, they can also be considered combinators.)

Combinators are a little different because they don't actually read text. Every parser or parser-producing function, at the core, is a function that reads one or more characters of text and either succeeds or fails depending on whether it read the character(s) it was expecting. Combinators don't do that; they modify or compose other parsers. For example, [`many`](parsers/many.md) doesn't read any text at all, but it tells the parser passed into it to read text zero or more times.

But in the end it's all the same. `many` may not parse text directly, but it has a value passed to it which may be a parser itself. If it's not, then it must be a combinator that has a value passed to *it*. Eventually, there's going to be a parser, and it will read text. So `many` may not be a parser, and the same with [`choice`](parsers/choice.md) and [`pipe`](parsers/pipe.md) and [`join`](parsers/join.md), but `pipe(choice(char('_'), letter), join(many(choice(char('_'), letter, digit))), (first, rest) => first + rest)` is definitely a parser. (One which does a pretty reasonable job of parsing a programming language identifier..md)

In summary, every entry in the Parser API Reference either *is* a function that takes a context and returns a tuple of a context and a result, or it *produces* one. And directly or indirectly, every entry reads text. So unless there needs to be some distinction between these three different kinds of objects, it's safe to just call them all *parsers*.

### Return

As has already been stated way more times than is necessary, a parser returns a tuple of a context and a result. But as is also very clear, that's way too many words to use too many times.

In this documentation, we will talk about parsers *returning* values. In this case, "this parser returns a string" means "this parser returns a tuple of a context and a result, and upon success, the value of that result is a string." I think we can all agree that one is more fun to read (and write) than the other.

## Parsers

### Table 1: Single character parsers

| Parser | Description |
|--------|-------------|
| [`char`](parsers/char.md) | Parses a single character. |
| [`charI`](parsers/chari.md) | Parses a single character, but without case sensitivity. |
| [`satisfy`](parsers/satisfy.md) | Parses a single character for which a predicate returns `true`. |
| [`satisfyM`](parsers/satisfym.md) | Parses a single character for which a predicate returns `true`. Fails with a message string if the predicate returns `false`. |
| [`range`](parsers/range.md) | Parses a single character whose code point is between two other characters. |
| [`any`](parsers/any.md) | Parses any one character. |
| [`anyOf`](parsers/anyof.md) | Parses a single character which is included in a string or an array. |
| [`noneOf`](parsers/noneof.md) | Parses a single character which is *not* in included in a string or an array. |
| [`digit`](parsers/digit) | Parses a single decimal digit (`0-9`). |
| [`hex`](parsers/hex) | Parses a single hexadecmial digit (`0-9`, `a-f`, or `A-F`). |
| [`octal`](parsers/octal) | Parses a single octal digit (`0-7`). |
| [`letter`](parsers/letter) | Parses a single ASCII letter (`a-z` or `A-Z`). |
| [`alpha`](parsers/alpha) | Parses a single ASCII alphanumeric character (`0-9`, `a-z`, or `A-Z`). |
| [`lower`](parsers/lower) | Parses a single ASCII lowercase letter (`a-z`). |
| [`upper`](parsers/upper) | Parses a single ASCII uppercase letter (`A-Z`). |
| [`letterU`](parsers/letteru.md) | Parses a single UTF-8 letter. |
| [`alphaU`](parsers/alphau.md) | Parses a single UTF-8 alphanumeric character. |
| [`lowerU`](parsers/loweru.md) | Parses a single UTF-8 lowercase letter. |
| [`upperU`](parsers/upperu.md) | Parses a single UTF-8 uppercase letter. |

### Table 2: String (multiple-character) parsers

| Parser | Description |
|--------|-------------|
| [`string`](parsers/string.md) | Parses a string. |
| [`stringI`](parsers/stringi.md) | Parses a string, but without case sensitivity. |
| [`regex`](parsers/regex.md) | Parses a string matching a regular expression pattern. |
| [`all`](parsers/all.md) | Parses the remainder of the input as a string. |
| [`anyString`](parsers/anystring.md) | Parses a string of a certain number of characters. |

### Table 3: Whitespace parsers

| Parser | Description |
|--------|-------------|
| [`newline`](parsers/newline) | Parses a single ASCII newline character (`\r`, `\n`, or `\r\n`). |
| [`space`](parsers/space) | Parses a single ASCII whitespace character (` `, `\t`, or a newline). |
| [`spaces`](parsers/spaces.md) | Skips zero or more ASCII whitespace characters. |
| [`spaces1`](parsers/spaces1.md) | Skips one or more ASCII whitespace characters. |
| [`newlineU`](parsers/newlineu.md) | Parses a single UTF-8 newline character. |
| [`spaceU`](parsers/spaceu) | Parses a single UTF-8 whitespace character (including newlines.md). |
| [`spacesU`](parsers/spacesu.md) | Skips zero or more UTF-8 whitespace characters. |
| [`spaces1U`](parsers/spaces1u.md) | Skips one or more UTF-8 whitespace characters. |
| [`eof`](parsers/eof.md) | Succeeds only at the end of the input. |

### Table 4: Miscellaneous parsers

| Parser | Description |
|--------|-------------|
| [`failNormally`](parsers/failnormally.md) | Fails with a generic message. |
| [`failFatally`](parsers/failfatally.md) | Fails fatally with a generic message. |

### Table 5: Primitive combinators

| Parser | Description |
|--------|-------------|
| [`always`](parsers/always.md) | Always succeeds and returns a value. |
| [`empty`](parsers/empty.md) | Always succeeds and returns nothing. |
| [`map`](parsers/map.md) | Applies a parser, then applies a function to the result, then returns the result of that function. |
| [`apply`](parsers/apply.md) | Parses content and a function, returning the result of the function when passed the content. |
| [`chain`](parsers/chain.md) | Applies a parser, then applies a function to the result, then applies the parser returned by the function. |
| [`orElse`](parsers/orelse.md) | Applies a parser and, if it fails, a second parser. |
| [`andThen`](parsers/andthen.md) | Applies two parsers in order and returns their results in a tuple. |

### Table 6: Sequence combinators

| Parser | Description |
|--------|-------------|
| [`left`](parsers/left.md) | Executes two parsers in order and returns the result of the first one. |
| [`right`](parsers/right.md) | Executes two parsers in order and returns the result of the second one. |
| [`sequence`](parsers/sequence.md) | Executes a series of parsers in order, returning their results in an array. |
| [`block`](parsers/block.md) | Runs a generator function. The generator can `yield` parsers, whose results will be returned as the result of the `yield` expressions. Returns the result of the generator. |
| [`many`](parsers/many.md) | Executes a parser zero or more times until it fails, returning all of the results in an array. |
| [`many1`](parsers/many1.md) | Executes a parser one or more times until it fails, returning all of the results in an array. |
| [`skip`](parsers/skip.md) | Executes a parser and discards the result. |
| [`skipMany`](parsers/skipmany.md) | Executes a parser zero or more times until it fails, discarding the results. |
| [`skipMany1`](parsers/skipmany1.md) | Executes a parser one or more times until it fails, discarding the results. |
| [`sepBy`](parsers/sepby.md) | Executes a content parser zero or more times with an application of a separator parser between each. Returns the content parser results. |
| [`sepBy1`](parsers/sepby1.md) | Executes a content parser one or more times with an application of a separator parser between each. Returns the content parser results. |
| [`sepEndBy`](parsers/sependby.md) | Executes a content parser zero or more times with an application of a separator parser between each and optionally at the end. Returns the content parser results. |
| [`sepEndBy1`](parsers/sependby1.md) | Executes a content parser one or more times with an application of a separator parser between each and optionally at the end. Returns the content parser results.  |
| [`repeat`](parsers/repeat.md) | Executes a parser a certain number of times, returning the results in an array. |
| [`pipe`](parsers/pipe.md) | Executes a series of parsers in order, then passes the results as arguments to a function, then returns the result of that function. |
| [`between`](parsers/between.md) | Executes a content parser between two other parsers, returning only the content parser's result. |
| [`manyTill`](parsers/manytill.md) | Executes a content parser zero or more times until an end parser succeeds. Returns the content parser's results. |
| [`assocL`](parsers/assocl.md) | Executes a content parser zero or more times with an application of an operator parser between each. Returns the value obtained by left associative application of all functions returned by the operator parser to the results returned by the content parser. |
| [`assoc1L`](parsers/assoc1l.md) | Executes a content parser one or more times with an application of an operator parser between each. Returns the value obtained by left associative application of all functions returned by the operator parser to the results returned by the content parser.|
| [`assocR`](parsers/assocr.md) | Executes a content parser zero or more times with an application of an operator parser between each. Returns the value obtained by right associative application of all functions returned by the operator parser to the results returned by the content parser.|
| [`assoc1R`](parsers/assoc1r.md) | Executes a content parser one or more times with an application of an operator parser between each. Returns the value obtained by right associative application of all functions returned by the operator parser to the results returned by the content parser. |

### Table 7: Alternative and conditional combinators

| Parser | Description |
|--------|-------------|
| [`choice`](parsers/choice.md) | Executes a series of parsers one at a time until one succeeds. |
| [`optional`](parsers/optional.md) | Executes a parser and returns its result on success. On failure, succeeds but returns nothing. |
| [`orValue`](parsers/orvalue.md) | Executes a parser and returns either its result upon success or another value upon failure. |
| [`lookAhead`](parsers/lookahead.md) | Executes a parser and returns its result without consuming input. |
| [`notEmpty`](parsers/notempty.md) | Executes a parser and fails if the parser succeeds without consuming input. |
| [`notEmptyM`](parsers/notemptym.md) | Executes a parser and fails if the parser succeeds without consuming input. Overwrites the error message with a custom one on failure. |
| [`followedBy`](parsers/followedby.md) | Executes a parser and succeeds without consuming input if that parser succeeds. |
| [`followedByM`](parsers/followedbym.md) | Executes a parser and succeeds without consuming input if that parser succeeds. Overwrites the error message with a custom one on failure. |
| [`notFollowedBy`](parsers/notfollowedby.md) | Executes a parser and succeeds without consuming input if that parser fails. |
| [`notFollowedByM`](parsers/notfollowedbym.md) | Executes a parser and succeeds without consuming input if that parser fails. Overwrites the error message with a custom one on failure.  |

### Table 8: Backtracking combinators

| Parser | Description |
|--------|-------------|
| [`attempt`](parsers/attempt.md) | Executes a parser, backtracking to its original position if the parser fails and consumes input. |
| [`attemptM`](parsers/attemptm.md) | Executes a parser and replaces its errors with an expected error if that parser fails. Backtracks to where the parser was applied and adds additional information to the error message if that parser consumes input. |
| [`sequenceB`](parsers/sequenceb.md) | Executes a series of parsers in order, returning their results in an array. Backtracks to where the first parser was applied if any other of its parsers fails. |
| [`blockB`](parsers/blockb.md) | Runs a generator function. The generator can `yield` parsers, whose results will be returned as the result of the `yield` expressions. Returns the result of the generator. Backtracks to where the first yielded parser was applied if any later parser fails. |
| [`chainB`](parsers/chainb.md) | Executes a parser, then applies a function to the result, then applies the parser returned by the function. Backtracks to where the first parser was applied if the parser returned by the function fails. | [`applyB`](parsers/applyb.md) | Parses content and a function, returning the result of the function when passed the content. Backtracks to where the first parser was applied if the second parser fails. |
| [`leftB`](parsers/leftb.md) | Executes two parsers in order and returns the result of the first one. Backtracks to the location where the first parser was applied if the second one fails. |
| [`rightB`](parsers/rightb.md) | Executes two parsers in order and returns the result of the second one. Backtracks to the location where the first parser was applied if the second one fails. |
| [`andThenB`](parsers/andthenb.md) | Executes two parsers in order and returns the results of both in a tuple. Backtracks to the location where the first parser was applied if the second one fails. |
| [`pipeB`](parsers/pipeb.md) | Executes a series of parsers in order, then passes the results as arguments to a function, then returns the result of that function. Backtracks to where the first parser was applied if any other parser fails. |
| [`repeatB`](parsers/repeatb.md) | Executes a parser a certain number of times, returning the results in an array. Backtracks to where the first parser was applied if any other parser fails. |
| [`manyTillB`](parsers/manytillb.md) | Executes a content parser zero or more times until an end parser succeeds. Returns the content parser's results. Backtracks to where the content parser was first applied if it fails before the end parser succeeds. |
| [`betweenB`](parsers/betweenb.md) | Executes a content parser between two other parsers, returning only the content parser's result. Backtracks to where the first parser was applied if either other parser fails. |

### Table 9: Miscellaneous combinators

| Parser | Description |
|--------|-------------|
| [`label`](parsers/label.md) | Executes a parser and replaces its errors with an expected error if that parser fails. |
| [`value`](parsers/value.md) | Executes a parser and returns a value. |
| [`nth`](parsers/nth.md) | Executes a parser and returns the nth element of the resulting array. |
| [`first`](parsers/first.md) | Executes a parser and returns the first element of the resulting array. |
| [`second`](parsers/second.md) | Executes a parser and returns the second element of the resulting array. |
| [`third`](parsers/third.md) | Executes a parser and returns the third element of the resulting array. |
| [`fourth`](parsers/fourth.md) | Executes a parser and returns the fourth element of the resulting array. |
| [`fifth`](parsers/fifth.md) | Executes a parser and returns the fifth element of the resulting array. |
| [`join`](parsers/join.md) | Executes a parser and returns its resulting array elements joined together into a string. |

## Tools

### Table 10: Running parsers

| Function | Description |
|----------|-------------|
| [`parse`](tools/parse.md) | Executes a parser. |
| [`succeeded`](tools/succeeded.md) | Determines whether a parser result was successful. |
| [`status`](tools/status.md) | Returns the status of a parser result. |
| [`success`](tools/success.md) | Returns the value from a parser result if it was successful. |
| [`failure`](tools/failure.md) | Returns the error message from a parser result if it failed. |
| [`run`](tools/run.md) | Executes a parser and either returns a successful result or throws an error. |

### Table 11: Error generation

| Function | Description |
|----------|-------------|
| [`expected`](tools/expected.md) | Creates an error list containing a single expected error message. |
| [`unexpected`](tools/unexpected.md) | Creates an error list containing a single unexpected error message. |
| [`generic`](tools/generic.md) | Creates an error list containing a single generic error message. |
| [`nested`](tools/nested.md) | Adds a nested error to an error list. |
| [`compound`](tools/compound.md) | Adds a compound error to an error list. |
| [`other`](tools/other.md) | Creates an error list containing a single other error message. |
| [`merge`](tools/merge.md) | Merges two error lists. |
| [`formatErrors`](tools/formaterrors.md) | Generates an error message out of a parser context and result. |
| [`getPosition`](tools/getposition.md) | Determines the line/column position of a given context. |

### Table 12: Authoring parsers

| Function | Description |
|----------|-------------|
| [`Parser`](tools/parser.md) | Creates a new parser. |
| [`ok`](tools/ok.md) | Generates a reply representing a success. |
| [`fail`](tools/fail.md) | Generates a reply representing a failure. |
| [`fatal`](tools/fatal.md) | Generates a reply representing a fatal failure. |
| [`maybeFatal`](tools/maybefatal.md) | Generates a reply representing either a failure or a fatal failure, depending on a boolean value. |

## Types

Kessel is written in JavaScript, which is a dynamically typed language, and so none of these types actually exist within the code. However, there is a lot of consistency around what functions expect from parameters and what they provide as return values, and we are able to document that here.

For TypeScript users, there will be a declaration file provided which will codify all of these types.

### Table 13: Types

| Type | Description |
|------|-------------|
| [`Context`](types/context.md) | The parsing context, which changes as more of the input is parsed. |
| [`Error`](types/error.md) | A single parsing error. |
| [`ErrorList`](types/errorlist.md) | A list of parsing errors. |
| [`ErrorType`](types/errortype.md) | The type of a parsing error, used to determine how it should be displayed in an error message. |
| [`Input`](types/input.md) | Parser input text, which can be in one of several different forms. |
| [`Parser`](types/parser.md) | A function which actually performs parsing. |
| [`Reply`](types/reply.md) | The state of a parser after it has performed its parsing, consisting of an updated context and a result. |
| [`Result`](types/result.md) | The output of a parser, consisting of either a parsed value or a parsing error. |
| [`Status`](types/status.md) | The condition of a parser result, including whether the parse succeeded or not. |