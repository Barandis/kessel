<!--
 Copyright (c) 2020 Thomas J. Otterson
 
 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

# Summary

### A Note about Types

Types are given in the descriptions for each of the parsers and functions listed below. These are contained in TypeScript definition files in the project that can be used either for writing TypeScript programs that use Kessel or just in providing signature information for your IDE.

It should however be noted that some of the type information is incomplete because TypeScript leaves no way to express complete information in the case where there are variable numbers of arguments that can have different generic parameter types. There are notes to that effect in [`alt`](parsers/alt.md), [`pipe`](parsers/pipe.md), [`pipeB`](parsers/pipeb.md), [`seq`](parsers/seq.md), and [`seqB`](parsers/seqb.md).

However, there are shortcomings in other parsers that are not explicity marked. For example, TypeScript has no way to say that a string should be one character long, or that an array of strings should have elements that are all one character long. This affects the parameters in [`anyOf`](parsers/anyof.md), [`char`](parsers/char.md), [`charI`](parsers/chari.md), [`noneOf`](parsers/noneof.md), and [`range`](parsers/range.md).

A best effort is given to give useful types for documentation, but there's no way to make them perfect.

Assertions in the library do take care of most of the problem. If a 3-character string gets passed to [`char`](parsers/char.md), for example, an error will be thrown whether or not the type system can express that.

## Parsers

There are three kinds of entries in these tables: parsers, functions that produce parsers, and combinators. Since each of these either is or produces a parser, they are all referred to as parsers unless there is reason to differentiate.

Additionally, parsers are often said to *return* a value or to have a value as a *result*. Parsers all return `Reply` objects, but when *return* or *result* is used, it's meant to refer to the value held by the `Result` object inside that `Reply` object. It should be unambiguous.

### Table 1: Single character parsers

| Parser | Description |
|--------|-------------|
| [`char`](parsers/char.md) | Parses a single character. |
| [`charI`](parsers/chari.md) | Parses a single character, but without case sensitivity. |
| [`satisfy`](parsers/satisfy.md) | Parses a single character for which a predicate returns `true`. |
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
| [`always`](parsers/always.md) | Always succeeds and returns a value. |
| [`failNormally`](parsers/failnormally.md) | Fails with a generic message. |
| [`failFatally`](parsers/failfatally.md) | Fails fatally with a generic message. |

### Table 5: Sequence combinators

| Parser | Description |
|--------|-------------|
| [`seq`](parsers/seq.md) | Executes a series of parsers in order, returning their results in an array. |
| [`left`](parsers/left.md) | Executes two parsers in order and returns the result of the first one. |
| [`right`](parsers/right.md) | Executes two parsers in order and returns the result of the second one. |
| [`block`](parsers/block.md) | Runs a generator function. The generator can `yield` parsers, whose results will be returned as the result of the `yield` expressions. Returns the result of the generator. |
| [`many`](parsers/many.md) | Executes a parser zero or more times until it fails, returning all of the results in an array. |
| [`many1`](parsers/many1.md) | Executes a parser one or more times until it fails, returning all of the results in an array. |
| [`skip`](parsers/skip.md) | Executes a parser and discards the result. |
| [`sep`](parsers/sep.md) | Executes a content parser zero or more times with an application of a separator parser between each. Returns the content parser results. |
| [`sep1`](parsers/sep1.md) | Executes a content parser one or more times with an application of a separator parser between each. Returns the content parser results. |
| [`end`](parsers/end.md) | Executes a content parser zero or more times with an application of a separator parser between each and optionally at the end. Returns the content parser results. |
| [`end1`](parsers/end1.md) | Executes a content parser one or more times with an application of a separator parser between each and optionally at the end. Returns the content parser results.  |
| [`repeat`](parsers/repeat.md) | Executes a parser a certain number of times, returning the results in an array. |
| [`pipe`](parsers/pipe.md) | Executes a series of parsers in order, then passes the results as arguments to a function, then returns the result of that function. |
| [`between`](parsers/between.md) | Executes a content parser between two other parsers, returning only the content parser's result. |
| [`until`](parsers/until.md) | Executes a content parser zero or more times until an end parser succeeds. Returns the content parser's results. |
| [`assocL`](parsers/assocl.md) | Executes a content parser zero or more times with an application of an operator parser between each. Returns the value obtained by left associative application of all functions returned by the operator parser to the results returned by the content parser. |
| [`assoc1L`](parsers/assoc1l.md) | Executes a content parser one or more times with an application of an operator parser between each. Returns the value obtained by left associative application of all functions returned by the operator parser to the results returned by the content parser.|
| [`assocR`](parsers/assocr.md) | Executes a content parser zero or more times with an application of an operator parser between each. Returns the value obtained by right associative application of all functions returned by the operator parser to the results returned by the content parser.|
| [`assoc1R`](parsers/assoc1r.md) | Executes a content parser one or more times with an application of an operator parser between each. Returns the value obtained by right associative application of all functions returned by the operator parser to the results returned by the content parser. |

### Table 6: Alternative and conditional combinators

| Parser | Description |
|--------|-------------|
| [`alt`](parsers/alt.md) | Executes a series of parsers one at a time until one succeeds. |
| [`opt`](parsers/opt.md) | Executes a parser and returns its result on success. On failure, succeeds but returns nothing. |
| [`def`](parsers/def.md) | Executes a parser and returns either its result upon success or a default value upon failure. |
| [`peek`](parsers/peek.md) | Executes a parser and returns its result without consuming input. |
| [`empty`](parsers/empty.md) | Executes a parser and fails if the parser succeeds but consumes input. |
| [`not`](parsers/not.md) | Executes a parser and succeeds without consuming input if that parser fails. |

### Table 7: Backtracking combinators

| Parser | Description |
|--------|-------------|
| [`attempt`](parsers/attempt.md) | Executes a parser, backtracking to its original position if the parser fails and consumes input. |
| [`seqB`](parsers/seqb.md) | Executes a series of parsers in order, returning their results in an array. Backtracks to where the first parser was applied if any other of its parsers fails. |
| [`blockB`](parsers/blockb.md) | Runs a generator function. The generator can `yield` parsers, whose results will be returned as the result of the `yield` expressions. Returns the result of the generator. Backtracks to where the first yielded parser was applied if any later parser fails. |
| [`chainB`](parsers/chainb.md) | Executes a parser, then applies a function to the result, then applies the parser returned by the function. Backtracks to where the first parser was applied if the parser returned by the function fails. |
| [`applyB`](parsers/applyb.md) | Parses content and a function, returning the result of the function when passed the content. Backtracks to where the first parser was applied if the second parser fails. |
| [`leftB`](parsers/leftb.md) | Executes two parsers in order and returns the result of the first one. Backtracks to the location where the first parser was applied if the second one fails. |
| [`rightB`](parsers/rightb.md) | Executes two parsers in order and returns the result of the second one. Backtracks to the location where the first parser was applied if the second one fails. |
| [`pipeB`](parsers/pipeb.md) | Executes a series of parsers in order, then passes the results as arguments to a function, then returns the result of that function. Backtracks to where the first parser was applied if any other parser fails. |
| [`repeatB`](parsers/repeatb.md) | Executes a parser a certain number of times, returning the results in an array. Backtracks to where the first parser was applied if any other parser fails. |
| [`untilB`](parsers/untilb.md) | Executes a content parser zero or more times until an end parser succeeds. Returns the content parser's results. Backtracks to where the content parser was first applied if it fails before the end parser succeeds. |
| [`betweenB`](parsers/betweenb.md) | Executes a content parser between two other parsers, returning only the content parser's result. Backtracks to where the first parser was applied if either other parser fails. |

### Table 8: Chaining combinators

| Parser | Description |
|--------|-------------|
| [`chain`](parsers/chain.md) | Applies a parser, then applies a function to the result, then applies the parser returned by the function. |
| [`map`](parsers/map.md) | Applies a parser, then applies a function to the result, then returns the result of that function. |
| [`apply`](parsers/apply.md) | Parses content and a function, returning the result of the function when passed the content. |
| [`value`](parsers/value.md) | Executes a parser and returns a value. |
| [`nth`](parsers/nth.md) | Executes a parser and returns the nth element of the resulting array. |
| [`first`](parsers/first.md) | Executes a parser and returns the first element of the resulting array. |
| [`second`](parsers/second.md) | Executes a parser and returns the second element of the resulting array. |
| [`third`](parsers/third.md) | Executes a parser and returns the third element of the resulting array. |
| [`fourth`](parsers/fourth.md) | Executes a parser and returns the fourth element of the resulting array. |
| [`fifth`](parsers/fifth.md) | Executes a parser and returns the fifth element of the resulting array. |
| [`join`](parsers/join.md) | Executes a parser and returns its resulting array elements joined together into a string. |
| [`compact`](parsers/compact.md) | Executes a parser and returns its resulting array minus any `null` or `undefined` elements. |

## Tools

Tools provide ways to run parsers and ways to write new parsers (if [`block`](parsers/block.md) isn't good enough). Regular users will use the functions in Table 10, but those in Tables 11 and 12 are going to be of interest only to parser authors.

### Table 9: Running parsers

| Function | Description |
|----------|-------------|
| [`parse`](tools/parse.md) | Executes a parser. |
| [`succeeded`](tools/succeeded.md) | Determines whether a parser result was successful. |
| [`status`](tools/status.md) | Returns the status of a parser result. |
| [`success`](tools/success.md) | Returns the value from a parser result if it was successful. |
| [`failure`](tools/failure.md) | Returns the error message from a parser result if it failed. |
| [`run`](tools/run.md) | Executes a parser and either returns a successful result or throws an error. |

### Table 10: Error generation

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

### Table 11: Authoring parsers

| Function | Description |
|----------|-------------|
| [`parser`](tools/parser.md) | Creates a new parser. |
| [`okReply`](tools/okreply.md) | Generates a reply representing a success. |
| [`failReply`](tools/failreply.md) | Generates a reply representing a failure. |
| [`fatalReply`](tools/fatalreply.md) | Generates a reply representing a fatal failure. |

## Types

Kessel is written in JavaScript, which is a dynamically typed language, and so none of these types actually exist within the code. However, there is a lot of consistency around what functions expect from parameters and what they provide as return values, and we are able to document that here.

For TypeScript users, there will be a declaration file provided which will codify all of these types.

### Table 13: Types

| Type | Description |
|------|-------------|
| [`CompoundError`](types/compounderror.md) | A nested error that happened at a different location than the current context and has its own error message. |
| [`Context`](types/context.md) | The parsing context, which changes as more of the input is parsed. |
| [`ErrorList`](types/errorlist.md) | A list of parsing errors. |
| [`ErrorType`](types/errortype.md) | The type of a parsing error, used to determine how it should be displayed in an error message. |
| [`Formatter`](types/formatter.md) | A function that formats error information into a string. |
| [`Input`](types/input.md) | Parser input text, which can be in one of several different forms. |
| [`LocalError`](types/localerror.md) | A simple parsing error. |
| [`NestedError`](types/nestederror.md) | An error that happened at a different location than the current context. |
| [`Parser`](types/parser.md) | A function which actually performs parsing. |
| [`Reply`](types/reply.md) | The state of a parser after it has performed its parsing, consisting of an updated context and a result. |
| [`Result`](types/result.md) | The output of a parser, consisting of either a parsed value or a parsing error. |
| [`Status`](types/status.md) | The condition of a parser result, including whether the parse succeeded or not. |