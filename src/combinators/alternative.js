// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  assertFunction,
  assertGeneratorFunction,
  assertNumber,
  assertParser,
  assertParsers,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { error, fatal, maybeFatal, ok, Parser, Status } from 'kessel/core'
import { merge, nested } from 'kessel/error'
import { ordinal, range, stringify, twin } from 'kessel/util'

const { Ok, Error, Fatal } = Status

/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that tries to apply two parsers, returning the
 * result of the first that succeeds. If neither succeed, or if one
 * fails fatally, then the parser fails.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies the first parser and then
 *     if necessary the second parser, returning the result of the
 *     first to succeed.
 */
export const orElse = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('orElse', p1, ordParFormatter('1st'))
  ASSERT && assertParser('orElse', p2, ordParFormatter('2nd'))

  const [reply1, [context1, result1]] = twin(p1(ctx))
  if (result1.status !== Error) return reply1

  const [reply2, [context2, result2]] = twin(p2(context1))
  return result2.status === Ok ? reply2 : maybeFatal(
    result2.status === Fatal,
    context2,
    merge(result1.errors, result2.errors),
  )
})

/**
 * Creates a parser that implements alternatives. Each of the supplied
 * parsers is applied one at a time, in order. When the first parser
 * succeeds, or the first parser fails while consuming input, execution
 * is stopped and the context from that last parser is passed through.
 * The same happens if all parsers are applied without any of them
 * succeeding.
 *
 * On failure, all of the `Expected` errors from any of the contained
 * parsers will be merged into this parser's errors.
 *
 * @param {...Parser} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */
export const choice = (...ps) => Parser(ctx => {
  ASSERT && assertParsers('choice', ps)

  let errors = []

  for (const p of ps) {
    const [reply, [context, result]] = twin(p(ctx))
    if (result.status === Ok) return reply

    errors = merge(errors, result.errors)
    if (result.status === Fatal) return fatal(context, errors)
  }
  return error(ctx, errors)
})

/**
 * Creates a parser that applies the supplied parser, succeeding whether
 * it fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally. It's used to
 * implement skipping over some optional text.
 *
 * @param {Parser} p The parser for optional content to be applied and
 *     then have its result ignored.
 * @return {Parser} A parser that succeeds with no result unless its
 *     contained parser fails fatally. This parser consumes text only
 *     if its contained parser succeeds.
 */
export const optional = p => Parser(ctx => {
  ASSERT && assertParser('optional', p)

  const [reply, [context, result]] = twin(p(ctx))
  return result.status !== Error ? reply : ok(context, null)
})

/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied default
 * value `x`. This parser only fails if its contained parser fails
 * fatally.
 *
 * `orValue(p, x)` is an optimized implementation of `orElse(p,
 * value(x))`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */
export const orValue = (p, x) => Parser(ctx => {
  ASSERT && assertParser('orValue', p, ordParFormatter('1st'))

  const [reply, [context, result]] = twin(p(ctx))
  return result.status !== Error ? reply : ok(context, x)
})

/**
 * Creates a parser that transforms a fatal failure into a non-fatal
 * failure. It applies the supplied parser; if that parser fails
 * fatally, the context is set back to what it was *before* that parser
 * is applied and the fatal failure is returned as a non-fatal failure.
 * If the parser has any other result, it is passed through without
 * modification.
 *
 * This parser allows the user to cause a non-backtracking parser to
 * backtrack upon failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */
export const attempt = p => Parser(ctx => {
  ASSERT && assertParser('attempt', p)

  const index = ctx.index
  const [reply, [context, result]] = twin(p(ctx))
  if (result.status !== Ok) {
    const err = index === context.index
      ? result.errors
      : nested(context, result.errors)
    return error(context, err, index)
  }
  return reply
})

/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * If one of the parsers fails non-fatally, the entire parser will also
 * fail non-fatally, reverting the context to what it was before the
 * first parser was applied, even if previous parsers have consumed
 * input. A fatal error from one of the contained parsers will still
 * result in an overall fatal error.
 *
 * Note that `sequenceB(ps)` is not the same as
 * `backtrack(sequence(ps))`, as the former will fail fatally if one of
 * `ps` fails fatally, while the latter will fail non-fatally in that
 * case.
 *
 * @param {...Parser} ps The parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */
export const sequenceB = (...ps) => Parser(ctx => {
  ASSERT && assertParsers('sequenceB', ps)

  const values = []
  const index = ctx.index
  let context = ctx

  for (const p of ps) {
    const [reply, [next, result]] = twin(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) {
      const err = index === context.index
        ? result.errors
        : nested(context, result.errors)
      return error(context, err, index)
    }
    if (result.value !== null) values.push(result.value)
  }
  return ok(context, values)
})

/**
 * Creates a parser that chains the context after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting context.
 *
 * If the second parser (the one provided by `fn`) fails non-fatally,
 * the entire parser will also fail non-fatally, reverting the context
 * to what it was before the first parser was applied, even if the first
 * parser consumed input. A fatal error from either parser will still
 * result in an overall fatal error.
 *
 * Note that `chainB(p, fn)` is not the same as `backtrack(chain(p,
 * fn))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */
export const chainB = (p, fn) => Parser(ctx => {
  ASSERT && assertParser('chainB', p, ordParFormatter('1st'))
  ASSERT && assertFunction('chainB', fn, ordFnFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = twin(p(ctx))
  if (result1.status !== Ok) return reply1

  const [reply2, [context2, result2]] = twin(fn(result1.value)(context1))
  if (result2.status !== Error) return reply2
  const err = index === context2.index
    ? result2.errors
    : nested(context2, result2.errors)
  return error(context2, err, index)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `leftB(p1, p2)` is not the same as `backtrack(left(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */
export const leftB = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('leftB', p1, ordParFormatter('1st'))
  ASSERT && assertParser('leftB', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = twin(p1(ctx))
  if (result1.status !== Ok) return reply1

  const [reply2, [context2, result2]] = twin(p2(context1))
  if (result2.status === Fatal) return reply2
  if (result2.status === Ok) return ok(context2, result1.value)

  const err = index === context2.index
    ? result2.errors
    : nested(context2, result2.errors)
  return error(context2, err, index)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `rightB(p1, p2)` is not the same as `backtrack(right(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */
export const rightB = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('rightB', p1, ordParFormatter('1st'))
  ASSERT && assertParser('rightB', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = twin(p1(ctx))
  if (result1.status !== Status.Ok) return reply1

  const [reply2, [context2, result2]] = twin(p2(context1))
  if (result2.status !== Error) return reply2

  const err = index === context2.index
    ? result2.errors
    : nested(context2, result2.errors)
  return error(context2, err, index)
})

/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `andThenB(p1, p2)` is not the same as `attempt(andThen(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */
export const andThenB = (p1, p2) => Parser(ctx => {
  ASSERT && assertParser('andThenB', p1, ordParFormatter('1st'))
  ASSERT && assertParser('andThenB', p2, ordParFormatter('2nd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = twin(p1(ctx))
  if (result1.status !== Ok) return reply1

  const [reply2, [context2, result2]] = twin(p2(context1))
  if (result2.status === Fatal) return reply2
  if (result2.status === Ok) return ok(context2, [result1.value, result2.value])

  const err = index === context2.index
    ? result2.errors
    : nested(context2, result2.errors)
  return error(context2, err, index)
})

/**
 * Creates a parser that applies the supplied parser `n` times,
 * collecting the successful results into an array. If any application
 * fails, the overall parser will fail; if that failure is fatal, the
 * overall failure will also be fatal.
 *
 * The parser will fail non-fatally if the underlying error was
 * non-fatal, even if input was consumed (backtracking will happen in
 * this case).
 *
 * @param {Parser} p A parser to apply multiple times.
 * @param {number} n The number of times to apply the parser.
 * @returns {Parser} A parser that applies `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const repeatB = (p, n) => Parser(ctx => {
  ASSERT && assertParser('repeatB', p, ordParFormatter('1st'))
  ASSERT && assertNumber('repeatB', n, ordNumFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [reply, [next, result]] = twin(p(context))
    context = next
    if (result.status === Fatal) return reply
    if (result.status === Error) {
      const err = index === context.index
        ? result.errors
        : nested(context, result.errors)
      return error(context, err, index)
    }
    values.push(result.value)
  }
  return ok(context, values)
})

/**
 * Creates a parser which applies its content parser zero or more times
 * until its end parser is successful. This parser results in an array
 * of all of the successful content parser results. The end parser is
 * applied *first*, so it's fine to have the two parsers overlap. For
 * example, `manyTill(any, letter)` will work fine, because `letter`
 * will be tried first on each character (contrast with `between(letter,
 * any, letter)`, which will never succeed becuase the `any` is applied
 * before the final `letter` and will therefore consume a letter before
 * the `letter` parser gets to see it).
 *
 * If the content parser fails non-fatally before the end parser does,
 * the overall parser will fail (backtracking if input had already been
 * consumed). A fatal error by either parser will result in a fatal
 * error for the overall parser.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will apply the content zero or more
 *     times until the end parser succeeds.
 */
export const manyTillB = (p, end) => Parser(ctx => {
  ASSERT && assertParser('manyTillB', p, ordParFormatter('1st'))
  ASSERT && assertParser('manyTillB', end, ordParFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [reply1, [context1, result1]] = twin(end(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Ok) break

    const [reply2, [context2, result2]] = twin(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) {
      const err = index === context2.index
        ? merge(result2.errors, result1.errors)
        : nested(context2, merge(result2.errors, result1.errors))
      return error(context2, err, index)
    }
    values.push(result2.value)
  }
  return ok(context, values)
})

/**
 * Creates a parser that executes a block of code in the form of a
 * generator function. Inside that function, parsers that are `yield`ed
 * will be executed and will evaluate to their results (which can then
 * be assigned to variables, etc.).
 *
 * If any of these parsers fail, the `block` parser will also fail. If
 * that failure is non-fatal, backtracking will reset the index to where
 * it was at the beginning of the `block` parser application.
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause undefined behavior.
 *
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; yielding anything else will cause incorrect behavior
 *     depending on what exactly is yielded.
 * @returns {Parser} A parser that executes the generator function,
 *     applies parsers as they are yielded, and results (if all parsers
 *     succeed) in the return value of the generator.
 */
export const blockB = genFn => Parser(ctx => {
  ASSERT && assertGeneratorFunction('blockB', genFn)

  const gen = genFn()
  const index = ctx.index
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(context, value)

    ASSERT && assertParser('blockB', value, v => `expected ${
      ordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [reply, [next, result]] = twin(value(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) return error(next, result.errors, index)
    nextValue = result.value
    i++
  }
})

/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * If one of the parsers fails non-fatally, the overall parser will
 * backtrack to where the first parser was applied and fail non-fatally.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {...(Parser|function(...*):*)} ps An array of parsers to be
 *     applied one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of the created parser. A single
 *     function must be present and it must be the last parameter; all
 *     other parameters must be parsers.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipeB = (...ps) => Parser(ctx => {
  const fn = ps.pop()

  ASSERT && assertParsers('pipeB', ps)
  ASSERT && assertFunction('pipeB', fn, ordFnFormatter(ordinal(ps.length + 1)))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const p of ps) {
    const [reply, [next, result]] = twin(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) return error(context, result.errors, index)
    values.push(result.value)
  }
  return ok(context, fn(...values))
})

/**
 * Creates a parser which applies its pre, content, and post parsers in
 * order and results in the result of its content parser.
 *
 * Note that the content parser `p` is applied before the after parser
 * `post`. This means that the content parser will have an opportunity
 * to patch the "post" content before the post parser does, so take care
 * that the parsers do not overlap in what they match.
 *
 * If any parser fails non-fatally, the `betweenB` parser will backtrack
 * to where `pre` was applied and fail non-fatally.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */
export const betweenB = (pre, post, p) => Parser(ctx => {
  ASSERT && assertParser('betweenB', pre, ordParFormatter('1st'))
  ASSERT && assertParser('betweenB', post, ordParFormatter('2nd'))
  ASSERT && assertParser('betweenB', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [reply1, [context1, result1]] = twin(pre(ctx))
  if (result1.status !== Ok) return reply1

  const [reply2, [context2, result2]] = twin(p(context1))
  if (result2.status === Fatal) return reply2
  if (result2.status === Error) return error(context2, result2.errors, index)

  const [reply3, [context3, result3]] = twin(post(context2))
  if (result3.status === Fatal) return reply3
  if (result3.status === Error) return error(context3, result3.errors, index)
  return ok(context3, result2.value)
})
