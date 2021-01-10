// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argFnFormatter,
  argGenFormatter,
  argNumFormatter,
  argParFormatter,
  argStrFormatter,
  assertFunction,
  assertGenFunction,
  assertNumber,
  assertParser,
  assertString,
} from 'kessel/assert'
import { failReply, fatalReply, okReply, parser, Status } from 'kessel/core'
import { expected, merge } from 'kessel/error'
import { dup, range, replyFn, stringify, wordinal } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

const { Ok, Fail, Fatal } = Status

function loopMessage(name) {
  return `[${name}]: infinite loop detected; `
    + 'neither content nor separator parser consumed input'
}

/**
 * A parser that implements a sequence. Each supplied parser is executed
 * in order until either they all succeed or the first one fails. In the
 * former case, all results are merged into an array that becomes the
 * returned parser's result.
 *
 * This parser will fail fatally if any input was consumed before any of
 * its parsers fail, even if that failure itself was non-fatal.
 *
 * @param {...Parser|string} args The parsers to be executed. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message in place of the collected expected error messages
 *     of the constituent parsers.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */
export const seq = (...args) => {
  const ps = args.slice()
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null

  return parser(ctx => {
    const hasM = m != null

    ASSERT && ps.forEach((p, i) =>
      assertParser('seq', p, argParFormatter(i + 1, true)))

    const values = []
    const index = ctx.index
    let errors = hasM ? expected(m) : []
    let context = ctx

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      if (!hasM) errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status !== Ok) {
        const fn = replyFn(pres.status === Fatal || context.index !== index)
        return fn(context, errors)
      }
      values.push(pres.value)
    }
    return okReply(context, values)
  })
}

/**
 * A parser that executes the parsers `p` and `q` in order and returns
 * the result of `p`. This is the same operation as the applicative `<*`
 * in Haskell.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of `p`.
 */
export const left = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('left', p, argParFormatter(1, true))
  ASSERT && assertParser('left', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('left', m, argStrFormatter(3, true))

  const index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Status.Ok) {
    const fn = pres.status === Fatal ? fatalReply : failReply
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const [qctx, qres] = q(pctx)
  if (qres.status !== Ok) {
    const fn = replyFn(qres.status === Fatal || qctx.index !== index)
    return fn(qctx, hasM ? merror : merge(pres.errors, qres.errors))
  }
  return okReply(qctx, pres.value)
})

/**
 * A parser that executes the parsers `p` and `q` in order and returns
 * the result of `q`. This is the same operation as the applicative `*>`
 * in Haskell.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes both contained parsers and
 *     results in the value of the second.
 */
export const right = (p, q, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('right', p, argParFormatter(1, true))
  ASSERT && assertParser('right', q, argParFormatter(2, true))
  ASSERT && hasM && assertString('right', m, argStrFormatter(3, true))

  const index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Status.Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const [qrep, [qctx, qres]] = dup(q(pctx))
  if (qres.status !== Ok) {
    const fn = replyFn(qctx.status === Fatal || qctx.index !== index)
    return fn(qctx, hasM ? merror : merge(pres.errors, qres.errors))
  }
  return qrep
})

/**
 * A parser that executes a block of code in the form of a generator
 * function. Inside that function, parsers that are `yield`ed will be
 * executed and will evaluate to their results (which can then be
 * assigned to variables, etc.).
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * If any yielded parser fails after another yielded parser has consumed
 * input, this parser will fail fatally.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause an error to be thrown.
 *
 * @param {function():*} g A generator function that takes no arguments
 *     and returns whatever should be used as the returned parser's
 *     result. This generator function can `yield` only `Parser`s;
 *     otherwise an error is thrown.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */
export const block = (g, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertGenFunction('block', g, argGenFormatter(1, hasM))
  ASSERT && hasM && assertString('block', m, argStrFormatter(2, true))

  const gen = g()
  const index = ctx.index
  let errors = hasM ? expected(m) : []
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return okReply(context, value)

    ASSERT && assertParser('block', value, v => `expected ${
      wordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [pctx, pres] = value(context)
    context = pctx
    if (!hasM) errors = pres.errors?.length ? merge(errors, pres.errors) : []

    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal || pctx.index !== index)
      return fn(pctx, errors)
    }
    nextValue = pres.value
    i++
  }
})

/**
 * A parser that executes `p` zero or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser cannot fail non-fatally; however, if `p` ever fails
 * fatally, then so will this parser.
 *
 * @param {Parser} p A parser to be executed zero or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('many', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('many', m, argStrFormatter(2, true))

  const values = []
  let context = ctx

  while (true) {
    const [pctx, pres] = p(context)
    context = pctx

    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? expected(m) : pres.errors)
    }
    if (pres.status === Fail) break
    values.push(pres.value)
    if (context.index >= context.view.byteLength) break
  }
  return okReply(context, values)
})

/**
 * A parser that executes `p` one or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be executed one or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many1 = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('many1', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('many1', m, argStrFormatter(2, true))

  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  let context = pctx
  const values = [pres.value]

  while (true) {
    const [pctx, pres] = p(context)
    context = pctx

    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break
    values.push(pres.value)
    if (context.index >= context.view.byteLength) break
  }
  return okReply(context, values)
})

/**
 * A parser that executes `p` and discards any successful result while
 * still consuming input.
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will consume input as `p` does on
 *     success, but will produce no result.
 */
export const skip = (p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('skip', p, argParFormatter(1, hasM))
  ASSERT && hasM && assertString('skip', m, argStrFormatter(2, true))

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? expected(m) : pres.errors)
  }
  return okReply(pctx, null)
})

/**
 * A parser that executes `p` zero or more times, executing `s` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepby = (p, s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('sepby', p, argParFormatter(1, true))
  ASSERT && assertParser('sepby', s, argParFormatter(2, true))
  ASSERT && hasM && assertString('sepby', m, argStrFormatter(3, true))

  let index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status === Fatal) {
    return fatalReply(pctx, hasM ? merror : pres.errors)
  }
  if (pres.status === Fail) return okReply(pctx, [])

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [sctx, sres] = s(context)
    context = sctx
    if (sres.status === Fatal) {
      return fatalReply(sctx, hasM ? merror : sres.errors)
    }
    if (sres.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepby'))
    values.push(pres.value)
  }
  return okReply(context, values, index)
})

/**
 * A parser that executes `p` one or more times, executing `s` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepby1 = (p, s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('sepby1', p, argParFormatter(1, true))
  ASSERT && assertParser('sepby1', s, argParFormatter(2, true))
  ASSERT && hasM && assertString('sepby1', m, argStrFormatter(3, true))

  let index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [sctx, sres] = s(context)
    context = sctx
    if (sres.status === Fatal) {
      return fatalReply(sctx, hasM ? merror : sres.errors)
    }
    if (sres.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepby1'))
    values.push(pres.value)
  }
  return okReply(context, values, index)
})

/**
 * A parser that executes `p` zero or more times, executing `s` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const endby = (p, s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('endby', p, argParFormatter(1, true))
  ASSERT && assertParser('endby', s, argParFormatter(2, true))
  ASSERT && hasM && assertString('endby', m, argStrFormatter(3, true))

  let index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status === Fatal) {
    return fatalReply(pctx, hasM ? merror : pres.errors)
  }
  if (pres.status === Fail) return okReply(pctx, [])

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [sctx, sres] = s(context)
    context = sctx
    if (sres.status === Fatal) {
      return fatalReply(sctx, hasM ? merror : sres.errors)
    }
    if (sres.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('endby'))
    values.push(pres.value)
  }
  const [sctx, sres] = s({ ...context, index })
  if (sres.status === Fatal) {
    return fatalReply(sctx, hasM ? merror : sres.errors)
  }
  return okReply(sctx, values)
})

/**
 * A parser that executes `p` one or more times, executing `s` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const endby1 = (p, s, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('endby1', p, argParFormatter(1, true))
  ASSERT && assertParser('endby1', s, argParFormatter(2, true))
  ASSERT && hasM && assertString('endby1', m, argStrFormatter(3, true))

  let index = ctx.index
  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [sctx, sres] = s(context)
    context = sctx
    if (sres.status === Fatal) {
      return fatalReply(sctx, hasM ? merror : sres.errors)
    }
    if (sres.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('endby1'))
    values.push(pres.value)
  }
  const [sctx, sres] = s({ ...context, index })
  if (sres.status === Fatal) {
    return fatalReply(sctx, hasM ? merror : sres.errors)
  }
  return okReply(sctx, values)
})

/**
 * A parser that executes the supplied parser `n` times, collecting the
 * successful results into an array.
 *
 * If `p` fails after any input has been consumed by a prior execution
 * of `p`, this parser will fail fatally.
 *
 * @param {Parser} p A parser to execute multiple times.
 * @param {number} n The number of times to execute the parser.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const count = (p, n, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('count', p, argParFormatter(1, true))
  ASSERT && assertNumber('count', n, argNumFormatter(2, true))
  ASSERT && hasM && assertString('count', m, argStrFormatter(3, true))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status !== Ok) {
      const fn = replyFn(pres.status === Fatal || pctx.index !== index)
      return fn(pctx, hasM ? expected(m) : pres.errors)
    }
    values.push(pres.value)
  }
  return okReply(context, values)
})

/**
 * A parser which executes its start, content, and end parsers in order
 * and results in the result of its content parser.
 *
 * If either `p` or `e` fails after a prior parser has consumed
 * input, this parser will fail fatally.
 *
 * @param {Parser} s The first parser to apply.
 * @param {Parser} e The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */
export const between = (s, e, p, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('between', s, argParFormatter(1, true))
  ASSERT && assertParser('between', e, argParFormatter(2, true))
  ASSERT && assertParser('between', p, argParFormatter(3, true))
  ASSERT && hasM && assertString('between', m, argStrFormatter(4, true))

  const index = ctx.index

  const [sctx, sres] = s(ctx)
  if (sres.status !== Ok) {
    const fn = replyFn(sres.status === Fatal)
    return fn(sctx, hasM ? expected(m) : sres.errors)
  }

  const [pctx, pres] = p(sctx)
  const errors = hasM
    ? expected(m)
    : pres.errors?.length ? merge(sres.errors, pres.errors) : []
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal || pctx.index !== index)
    return fn(pctx, errors)
  }

  const [ectx, eres] = e(pctx)
  if (eres.status !== Ok) {
    const fn = replyFn(eres.status === Fatal || ectx.index !== index)
    return fn(ectx, hasM ? errors : merge(errors, eres.errors))
  }
  return okReply(ectx, pres.value)
})

/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails before `e` succeeds but after prior executions of `p`
 * have consumed input, this parser will fail fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} e The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will execute `p` zero or more times
 *     until `e` succeeds.
 */
export const until = (p, e, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('until', p, argParFormatter(1, true))
  ASSERT && assertParser('until', e, argParFormatter(2, true))
  ASSERT && hasM && assertString('until', m, argStrFormatter(3, true))

  const index = ctx.index
  const values = []
  let context = ctx
  const merror = expected(m)

  while (true) {
    const [ectx, eres] = e(context)
    context = ectx
    if (eres.status === Fatal) {
      return fatalReply(ectx, hasM ? merror : eres.errors)
    }
    if (eres.status === Ok) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) {
      const fn = replyFn(pctx.index !== index)
      return fn(pctx, hasM ? merror : merge(pres.errors, eres.errors))
    }
    values.push(pres.value)
  }
  return okReply(context, values)
})

/**
 * A parser that executes its parsers in sequence and passes those
 * results to a function of the same arity as the number of parsers to
 * execute. The return value of that function becomes this parser's
 * result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * If one of the parsers fails after prior parsers have consumed input,
 * this parser will fail fatally.
 *
 * This parser is equivalent to the applicative lift operation, lifting
 * multi-parameter functions into the context of a parser. It acts like
 * `liftA2` if two parsers are passed in, `liftA3` if three are passed
 * in, etc.
 *
 * @param {...(Parser|function(...*):*|string)} args An array of parsers
 *     to be executed one at a time, in order, followed by a function
 *     which will receive as parameters the results of each parser. Its
 *     return value will become the result of this parser. A single
 *     function must be present and it must come after the parsers.
 *     Optionally, a string may be the last argument; if it is present,
 *     it replaces the default error message in the event that the
 *     parser fails.
 * @returns {Parser} A parser that will execute its parsers in order,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipe = (...args) => {
  const ps = args.slice()
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null
  const fn = ps.pop()

  return parser(ctx => {
    const hasM = m != null

    ASSERT && ps.forEach((p, i) => assertParser(
      'pipe', p, argParFormatter(i + 1, true),
    ))
    ASSERT && assertFunction('pipe', fn, argFnFormatter(ps.length + 1, true))

    const index = ctx.index
    const values = []
    let context = ctx
    let errors = hasM ? expected(m) : []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      if (!hasM) errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status !== Ok) {
        const fn = replyFn(pres.status === Fatal || pctx.index !== index)
        return fn(pctx, errors)
      }
      values.push(pres.value)
    }
    return okReply(context, fn(...values))
  })
}

/**
 * Private formatting function for assertion messages about op parsers
 * not returning functions
 *
 * @param {number} ord The number of the op parser that fails to produce
 *     a function
 * @returns {string} An appropriate assertion failure message.
 */
function opFormatter(ord) {
  return value => `expected ${ord} op parser to return a function; found ${
    stringify(value)
  }`
}

/**
 * A parser that parses zero or more applications of `p`, each separated
 * by `o`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `o`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` left associtively to the values
 *     that result from `p`.
 */
export const lassoc = (p, o, x, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('lassoc', p, argParFormatter(1, true))
  ASSERT && assertParser('lassoc', o, argParFormatter(2, true))
  ASSERT && hasM && assertString('lassoc', m, argStrFormatter(4, true))

  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status === Fatal) {
    return fatalReply(pctx, hasM ? merror : pres.errors)
  }
  if (pres.status === Fail) return okReply(pctx, x)

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [octx, ores] = o(context)
    context = octx
    if (ores.status === Fatal) {
      return fatalReply(octx, hasM ? merror : ores.errors)
    }
    if (ores.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'lassoc', ores.value, opFormatter(wordinal(i + 1)),
    )

    ops.push(ores.value)
    values.push(pres.value)
    index = context.index
    i++
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return okReply(context, value, index)
})

/**
 * A parser that parses one or more applications of `p`, each separated
 * by `o`. It results in the value obtained by left associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `o` fails fatally.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` left associtively to the values
 *     that result from `p`.
 */
export const lassoc1 = (p, o, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('lassoc1', p, argParFormatter(1, true))
  ASSERT && assertParser('lassoc1', o, argParFormatter(2, true))
  ASSERT && hasM && assertString('lassoc1', m, argStrFormatter(3, true))

  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [octx, ores] = o(context)
    context = octx
    if (ores.status === Fatal) {
      return fatalReply(octx, hasM ? merror : ores.errors)
    }
    if (ores.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'lassoc1', ores.value, opFormatter(wordinal(i + 1)),
    )

    ops.push(ores.value)
    values.push(pres.value)
    index = context.index
    i++
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return okReply(context, value, index)
})

/**
 * A parser that parses zero or more applications of `p`, each separated
 * by `o`. It results in the value obtained by right associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `o`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` right associtively to the values
 *     that result from `p`.
 */
export const rassoc = (p, o, x, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('rassoc', p, argParFormatter(1, true))
  ASSERT && assertParser('rassoc', o, argParFormatter(2, true))
  ASSERT && hasM && assertString('rassoc', m, argStrFormatter(4, true))

  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status === Fatal) {
    return fatalReply(pctx, hasM ? merror : pres.errors)
  }
  if (pres.status === Fail) return okReply(pctx, x)

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [octx, ores] = o(context)
    context = octx
    if (ores.status === Fatal) {
      return fatalReply(octx, hasM ? merror : ores.errors)
    }
    if (ores.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'rassoc', ores.value, opFormatter(wordinal(i + 1)),
    )

    ops.push(ores.value)
    values.push(pres.value)
    index = context.index
    i++
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return okReply(context, value, index)
})

/**
 * A parser that parses one or more applications of `p`, each separated
 * by `o`. It results in the value obtained by right associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `o` fails fatally.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` right associtively to the values
 *     that result from `p`.
 */
export const rassoc1 = (p, o, m) => parser(ctx => {
  const hasM = m != null

  ASSERT && assertParser('rassoc1', p, argParFormatter(1, true))
  ASSERT && assertParser('rassoc1', o, argParFormatter(2, true))
  ASSERT && hasM && assertString('rassoc1', m, argStrFormatter(3, true))

  const merror = expected(m)

  const [pctx, pres] = p(ctx)
  if (pres.status !== Ok) {
    const fn = replyFn(pres.status === Fatal)
    return fn(pctx, hasM ? merror : pres.errors)
  }

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [octx, ores] = o(context)
    context = octx
    if (ores.status === Fatal) {
      return fatalReply(octx, hasM ? merror : ores.errors)
    }
    if (ores.status === Fail) break

    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status === Fatal) {
      return fatalReply(pctx, hasM ? merror : pres.errors)
    }
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'rassoc1', ores.value, opFormatter(wordinal(i + 1)),
    )

    ops.push(ores.value)
    values.push(pres.value)
    index = context.index
    i++
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return okReply(context, value, index)
})
