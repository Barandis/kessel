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
  ordinalNumber,
  ordinalParser,
} from 'kessel/assert'
import { ok, Parser, Status, maybeFatal } from 'kessel/core'
import { merge } from 'kessel/error'
import { dup, ordinal, range, stringify } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

const { Ok, Error, Fatal } = Status

function loopMessage(name) {
  return `[${name}]: infinite loop detected; `
    + 'neither content nor separator parser consumed input'
}

/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * The returned parser may fail fatally even if the unsuccessful
 * contained parser fails non-fatally. This will happen if any previous
 * parser succeeded and consumed input. Essentially, if the returned
 * parser consumes anything and then fails, it will fail fatally.
 *
 * @param {...Parser} ps The parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */
export const sequence = (...ps) => Parser(ctx => {
  ASSERT && assertParsers('sequence', ps)

  const values = []
  const index = ctx.index
  let context = ctx

  for (const p of ps) {
    const [next, result] = p(context)
    context = next

    if (result.status !== Ok) {
      return maybeFatal(context.index !== index, context, result.errors)
    }
    if (result.value !== null) values.push(result.value)
  }
  return ok(context, values)
})

/**
 * Creates a parser that executes a block of code in the form of a
 * generator function. Inside that function, parsers that are `yield`ed
 * will be executed and will evaluate to their results (which can then
 * be assigned to variables, etc.). If any of these parsers fail,
 * `block` will also fail with that failure. This failure will be fatal
 * if any input was consumed.
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
export const block = genFn => Parser(ctx => {
  ASSERT && assertGeneratorFunction('block', genFn)

  const gen = genFn()
  const index = ctx.index
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(context, value)

    ASSERT && assertParser('block', value, v => `expected ${
      ordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [next, result] = value(context)
    context = next

    if (result.status !== Ok) {
      return maybeFatal(context.index !== index, context, result.errors)
    }
    nextValue = result.value
    i++
  }
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful non-null results into an array and
 * providing that as its own result. The returned parser only fails if
 * the supplied parser consumes input when it fails. Otherwise, it
 * succeeds even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many = p => Parser(ctx => {
  ASSERT && assertParser('many', p)

  const values = []
  let context = ctx

  while (true) {
    const [reply, [next, result]] = dup(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (result.value !== null) values.push(result.value)
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, values)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful non-null results into an array and
 * providing that as its own result. The contained parser must succeed
 * at least once, or the returned parser will fail. Otherwise, the
 * returned parser only fails if the supplied parser consumes input when
 * it fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many1 = p => Parser(ctx => {
  ASSERT && assertParser('many1', p)

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  let context = next
  const values = result.value !== null ? [result.value] : []

  while (true) {
    const [reply, [next, result]] = dup(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (result.value !== null) values.push(result.value)
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, values)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The returned parser only
 * fails if the supplied parser consumes input when it fails. Otherwise,
 * it succeeds even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany = p => Parser(ctx => {
  ASSERT && assertParser('skipMany', p)

  let context = ctx

  while (true) {
    const [reply, [next, result]] = dup(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, null)
})

/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The contained parser must
 * succeed at least once, or the returned parser will fail. Otherwise,
 * the returned parser only fails if the supplied parser consumes input
 * when it fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany1 = p => Parser(ctx => {
  ASSERT && assertParser('skipMany1', p)

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  let context = next

  while (true) {
    const [reply, [next, result]] = dup(p(context))
    context = next

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, null)
})

/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between. The
 * content parser can match zero times, so the only way for this parser
 * to fail is for one of its parsers to fail fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepBy = (p, sep) => Parser(ctx => {
  ASSERT && assertParser('sepBy', p, ordinalParser('1st'))
  ASSERT && assertParser('sepBy', sep, ordinalParser('2nd'))

  let index = ctx.index
  const [reply, [next, result]] = dup(p(ctx))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(next, [])

  const values = [result.value]
  let context = next

  while (true) {
    index = context.index

    const [reply1, [context1, result1]] = dup(sep(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [context2, result2]] = dup(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (context.index === index) throw new TypeError(loopMessage('sepBy'))
    values.push(result2.value)
  }
  return ok(context, values, index)
})

/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between. The
 * content parser must succeed at leeast once or a non-fatal failure
 * will occur. Otherwise, the parser can only fail if one of its parsers
 * fails fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepBy1 = (p, sep) => Parser(ctx => {
  ASSERT && assertParser('sepBy1', p, ordinalParser('1st'))
  ASSERT && assertParser('sepBy1', sep, ordinalParser('2nd'))

  let index = ctx.index
  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const values = [result.value]
  let context = next

  while (true) {
    index = context.index

    const [reply1, [context1, result1]] = dup(sep(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [context2, result2]] = dup(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (context.index === index) throw new TypeError(loopMessage('sepBy1'))
    values.push(result2.value)
  }
  return ok(context, values, index)
})

/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between and
 * optionally at the end. The content parser can match zero times, so
 * the only way for this parser to fail is for one of its parsers to
 * fail fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepEndBy = (p, sep) => Parser(ctx => {
  ASSERT && assertParser('sepEndBy', p, ordinalParser('1st'))
  ASSERT && assertParser('sepEndBy', sep, ordinalParser('2nd'))

  let index = ctx.index
  const [reply, [next, result]] = dup(p(ctx))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(next, [])

  const values = [result.value]
  let context = next

  while (true) {
    index = context.index

    const [reply1, [context1, result1]] = dup(sep(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [context2, result2]] = dup(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (context.index === index) throw new TypeError(loopMessage('sepEndBy'))
    values.push(result2.value)
  }
  const [sepNext, _] = sep({ ...context, index })
  return ok(sepNext, values)
})

/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between and
 * optionally at the end. The content parser must succeed at leeast once
 * or a non-fatal failure will occur. Otherwise, the parser can only
 * fail if one of its parsers fails fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepEndBy1 = (p, sep) => Parser(ctx => {
  ASSERT && assertParser('sepEndBy1', p, ordinalParser('1st'))
  ASSERT && assertParser('sepEndBy1', sep, ordinalParser('2nd'))

  let index = ctx.index
  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const values = [result.value]
  let context = next

  while (true) {
    index = context.index

    const [reply1, [context1, result1]] = dup(sep(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [context2, result2]] = dup(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (context.index === index) throw new TypeError(loopMessage('sepEndBy1'))
    values.push(result2.value)
  }
  const [sepNext, _] = sep({ ...context, index })
  return ok(sepNext, values)
})

/**
 * Creates a parser that applies the supplied parser `n` times,
 * collecting the successful results into an array. If any application
 * fails, the overall parser will fail; if input is consumed before or
 * during that failure, the failure will be fatal.
 *
 * @param {Parser} p A parser to apply multiple times.
 * @param {number} n The number of times to apply the parser.
 * @returns {Parser} A parser that applies `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const repeat = (p, n) => Parser(ctx => {
  ASSERT && assertParser('repeat', p, ordinalParser('1st'))
  ASSERT && assertNumber('repeat', n, ordinalNumber('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [next, result] = p(context)
    context = next
    if (result.status !== Ok) {
      return maybeFatal(context.index !== index, context, result.errors)
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
 * If the content parser fails before the end parser does, the overall
 * parser will fail (fatally if input had already been consumed). A
 * fatal error by either parser will result in a fatal error for the
 * overall parser.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will apply the content zero or more
 *     times until the end parser succeeds.
 */
export const manyTill = (p, end) => Parser(ctx => {
  ASSERT && assertParser('manyTill', p, ordinalParser('1st'))
  ASSERT && assertParser('manyTill', end, ordinalParser('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [reply1, [context1, result1]] = dup(end(context))
    context = context1
    if (result1.status === Fatal) return reply1
    if (result1.status === Ok) break

    const [reply2, [context2, result2]] = dup(p(context))
    context = context2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) {
      return maybeFatal(
        context.index !== index, context, merge(result2.errors, result1.errors),
      )
    }
    if (result2.value !== null) values.push(result2.value)
  }
  return ok(context, values)
})

function opFormatter(ord) {
  return value => `expected ${ord} op parser to return a function; found ${
    stringify(value)
  }`
}

/**
 * Creates a parser that parses zero or more applications of `p`
 * separated by `op`. It results in the value obtained by left
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */
export const assocL = (p, op, x) => Parser(ctx => {
  ASSERT && assertParser('assocL', p, ordinalParser('1st'))
  ASSERT && assertParser('assocL', op, ordinalParser('2nd'))

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(next, x)

  const values = [result.value]
  const ops = []
  let context = next
  let index = context.index
  let i = 0

  while (true) {
    const [replyop, [contextop, resultop]] = dup(op(context))
    context = contextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [contextp, resultp]] = dup(p(context))
    context = contextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ASSERT && assertFunction(
      'assocL', resultop.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(resultop.value)
    values.push(resultp.value)
    index = context.index
    i++
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return ok(context, value, index)
})

/**
 * Creates a parser that parses one or more applications of `p`
 * separated by `op`. It results in the value obtained by left
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless either one of its two parsers fails
 * fatally or the content parser does not succeed at least once. If
 * there is one match of `p` but no matches of `op`, then that result of
 * `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */
export const assoc1L = (p, op) => Parser(ctx => {
  ASSERT && assertParser('assoc1L', p, ordinalParser('1st'))
  ASSERT && assertParser('assoc1L', op, ordinalParser('2nd'))

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const values = [result.value]
  const ops = []
  let context = next
  let index = context.index
  let i = 0

  while (true) {
    const [replyop, [contextop, resultop]] = dup(op(context))
    context = contextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [contextp, resultp]] = dup(p(context))
    context = contextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ASSERT && assertFunction(
      'assoc1L', resultop.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(resultop.value)
    values.push(resultp.value)
    index = context.index
    i++
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return ok(context, value, index)
})

/**
 * Creates a parser that parses zero or more applications of `p`
 * separated by `op`. It results in the value obtained by right
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */
export const assocR = (p, op, x) => Parser(ctx => {
  ASSERT && assertParser('assocR', p, ordinalParser('1st'))
  ASSERT && assertParser('assocR', op, ordinalParser('2nd'))

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(next, x)

  const values = [result.value]
  const ops = []
  let context = next
  let index = context.index
  let i = 0

  while (true) {
    const [replyop, [contextop, resultop]] = dup(op(context))
    context = contextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [contextp, resultp]] = dup(p(context))
    context = contextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ASSERT && assertFunction(
      'assocR', resultop.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(resultop.value)
    values.push(resultp.value)
    index = context.index
    i++
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return ok(context, value, index)
})

/**
 * Creates a parser that parses one or more applications of `p`
 * separated by `op`. It results in the value obtained by right
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless either one of its two parsers fails
 * fatally or the content parser does not succeed at least once. If
 * there is one match of `p` but no matches of `op`, then that result of
 * `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */
export const assoc1R = (p, op) => Parser(ctx => {
  ASSERT && assertParser('assoc1R', p, ordinalParser('1st'))
  ASSERT && assertParser('assoc1R', op, ordinalParser('2nd'))

  const [reply, [next, result]] = dup(p(ctx))
  if (result.status !== Ok) return reply

  const values = [result.value]
  const ops = []
  let context = next
  let index = context.index
  let i = 0

  while (true) {
    const [replyop, [contextop, resultop]] = dup(op(context))
    context = contextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [contextp, resultp]] = dup(p(context))
    context = contextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ASSERT && assertFunction(
      'assoc1R', resultop.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(resultop.value)
    values.push(resultp.value)
    index = context.index
    i++
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return ok(context, value, index)
})
