// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import {
  argParFormatter,
  argStrFormatter,
  assertFunction,
  assertGeneratorFunction,
  assertNumber,
  assertParser,
  assertParsers,
  assertString,
  ordFnFormatter,
  ordNumFormatter,
  ordParFormatter,
} from 'kessel/assert'
import { maybeFatal, ok, parser, Status } from 'kessel/core'
import { expected, merge } from 'kessel/error'
import { ordinal, range, stringify, twin } from 'kessel/util'

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
  const ps = args
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
        return maybeFatal(context.index !== index, context, errors)
      }
      values.push(pres.value)
    }
    return ok(context, values)
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

  const [pctx, pres] = p(ctx)
  if (pres.status !== Status.Ok) {
    const errors = hasM ? expected(m) : pres.errors
    return maybeFatal(pres.status === Fatal, pctx, errors)
  }

  const [qctx, qres] = q(pctx)
  const errors = hasM ? expected(m) : merge(pres.errors, qres.errors)
  return qres.status === Ok
    ? ok(qctx, pres.value)
    : maybeFatal(qctx.index !== index, qctx, errors)
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

  const [pctx, pres] = p(ctx)
  if (pres.status !== Status.Ok) {
    const errors = hasM ? expected(m) : pres.errors
    return maybeFatal(pres.status === Fatal, pctx, errors)
  }

  const [qrep, [qctx, qres]] = twin(q(pctx))
  const errors = hasM ? expected(m) : merge(pres.errors, qres.errors)
  return qres.status === Ok
    ? qrep
    : maybeFatal(qctx.index !== index, qctx, errors)
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
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; otherwise an error is thrown.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */
export const block = genFn => parser(ctx => {
  ASSERT && assertGeneratorFunction('block', genFn)

  const gen = genFn()
  const index = ctx.index
  let errors = []
  let nextValue
  let context = ctx
  let i = 0

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(context, value)

    ASSERT && assertParser('block', value, v => `expected ${
      ordinal(i + 1)
    } yield to be to a parser; found ${stringify(v)}`)

    const [pctx, pres] = value(context)
    context = pctx
    errors = pres.errors?.length ? merge(errors, pres.errors) : []

    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, errors)
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
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many = p => parser(ctx => {
  ASSERT && assertParser('many', p)

  const values = []
  let context = ctx

  while (true) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    values.push(pres.value)
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, values)
})

/**
 * A parser that executes `p` one or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be executed one or more times.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */
export const many1 = p => parser(ctx => {
  ASSERT && assertParser('many1', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  let context = pctx
  const values = [pres.value]

  while (true) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    values.push(pres.value)
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, values)
})

/**
 * A parser that executes `p` and discards any successful result while
 * still consuming input.
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as `p`  does on
 *     success, but will produce no result.
 */
export const skip = p => parser(ctx => {
  ASSERT && assertParser('skip', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, null) : prep
})

/**
 * A parser that executes `p` zero or more times until it fails,
 * discarding the results.
 *
 * This parser cannot fail non-fatally; however, if `p` ever fails
 * fatally, then so will this parser.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany = p => parser(ctx => {
  ASSERT && assertParser('skipMany', p)

  let context = ctx

  while (true) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, null)
})

/**
 * A parser that executes `p` one or more times until it fails,
 * discarding the results.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */
export const skipMany1 = p => parser(ctx => {
  ASSERT && assertParser('skipMany1', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  let context = pctx

  while (true) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, null)
})

/**
 * A parser that executes `p` zero or more times, executing `sep` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepBy = (p, sep) => parser(ctx => {
  ASSERT && assertParser('sepBy', p, ordParFormatter('1st'))
  ASSERT && assertParser('sepBy', sep, ordParFormatter('2nd'))

  let index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Fatal) return prep
  if (pres.status === Fail) return ok(pctx, [])

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [seprep, [sepctx, sepres]] = twin(sep(context))
    context = sepctx
    if (sepres.status === Fatal) return seprep
    if (sepres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepBy'))
    values.push(pres.value)
  }
  return ok(context, values, index)
})

/**
 * A parser that executes `p` one or more times, executing `sep` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepBy1 = (p, sep) => parser(ctx => {
  ASSERT && assertParser('sepBy1', p, ordParFormatter('1st'))
  ASSERT && assertParser('sepBy1', sep, ordParFormatter('2nd'))

  let index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [seprep, [sepctx, sepres]] = twin(sep(context))
    context = sepctx
    if (sepres.status === Fatal) return seprep
    if (sepres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepBy1'))
    values.push(pres.value)
  }
  return ok(context, values, index)
})

/**
 * A parser that executes `p` zero or more times, executing `sep` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepEndBy = (p, sep) => parser(ctx => {
  ASSERT && assertParser('sepEndBy', p, ordParFormatter('1st'))
  ASSERT && assertParser('sepEndBy', sep, ordParFormatter('2nd'))

  let index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Fatal) return prep
  if (pres.status === Fail) return ok(pctx, [])

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [seprep, [sepctx, sepres]] = twin(sep(context))
    context = sepctx
    if (sepres.status === Fatal) return seprep
    if (sepres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepEndBy'))
    values.push(pres.value)
  }
  const [seprep, [sepctx, sepres]] = twin(sep({ ...context, index }))
  return sepres.status === Fatal ? seprep : ok(sepctx, values)
})

/**
 * A parser that executes `p` one or more times, executing `sep` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `sep` ever fail fatally.
 *
 * If `p` and `sep` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */
export const sepEndBy1 = (p, sep) => parser(ctx => {
  ASSERT && assertParser('sepEndBy1', p, ordParFormatter('1st'))
  ASSERT && assertParser('sepEndBy1', sep, ordParFormatter('2nd'))

  let index = ctx.index
  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const values = [pres.value]
  let context = pctx

  while (true) {
    index = context.index

    const [seprep, [sepctx, sepres]] = twin(sep(context))
    context = sepctx
    if (sepres.status === Fatal) return seprep
    if (sepres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    if (context.index === index) throw new TypeError(loopMessage('sepEndBy1'))
    values.push(pres.value)
  }
  const [seprep, [sepctx, sepres]] = twin(sep({ ...context, index }))
  return sepres.status === Fatal ? seprep : ok(sepctx, values)
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
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */
export const repeat = (p, n) => parser(ctx => {
  ASSERT && assertParser('repeat', p, ordParFormatter('1st'))
  ASSERT && assertNumber('repeat', n, ordNumFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const _ of range(n)) {
    const [pctx, pres] = p(context)
    context = pctx
    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, pres.errors)
    }
    values.push(pres.value)
  }
  return ok(context, values)
})

/**
 * A parser which executes its pre, content, and post parsers in order
 * and results in the result of its content parser.
 *
 * If either `p` or `post` fails after a prior parser has consumed
 * input, this parser will fail fatally.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */
export const between = (pre, post, p) => parser(ctx => {
  ASSERT && assertParser('between', pre, ordParFormatter('1st'))
  ASSERT && assertParser('between', post, ordParFormatter('2nd'))
  ASSERT && assertParser('between', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [prerep, [prectx, preres]] = twin(pre(ctx))
  if (preres.status !== Ok) return prerep

  const [pctx, pres] = p(prectx)
  const errors = pres.errors?.length ? merge(preres.errors, pres.errors) : []
  if (pres.status !== Ok) {
    return maybeFatal(pctx.index !== index, pctx, errors)
  }

  const [postctx, postres] = post(pctx)
  return postres.status === Ok
    ? ok(postctx, pres.value)
    : maybeFatal(
      postctx.index !== index, postctx, merge(errors, postres.errors),
    )
})

/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails before `end` succeeds but after prior executions of `p`
 * have consumed input, this parser will fail fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will execute `p` zero or more times
 *     until `end` succeeds.
 */
export const manyTill = (p, end) => parser(ctx => {
  ASSERT && assertParser('manyTill', p, ordParFormatter('1st'))
  ASSERT && assertParser('manyTill', end, ordParFormatter('2nd'))

  const index = ctx.index
  const values = []
  let context = ctx

  while (true) {
    const [endrep, [endctx, endres]] = twin(end(context))
    context = endctx
    if (endres.status === Fatal) return endrep
    if (endres.status === Ok) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) {
      return maybeFatal(
        context.index !== index, context, merge(pres.errors, endres.errors),
      )
    }
    values.push(pres.value)
  }
  return ok(context, values)
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
 * @param {...(Parser|function(...*):*)} args An array of parsers to be
 *     executed one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of this parser. A single function
 *     must be present and it must be the last parameter; all other
 *     parameters must be parsers.
 * @returns {Parser} A parser that will execute its parsers in order,
 *     feed the results to its function, and result in the function's
 *     return value.
 */
export const pipe = (...args) => {
  const ps = args.slice()
  const fn = ps.pop()

  return parser(ctx => {
    ASSERT && assertParsers('pipe', ps)
    ASSERT && assertFunction('pipe', fn, ordFnFormatter(ordinal(ps.length + 1)))

    const index = ctx.index
    const values = []
    let context = ctx
    let errors = []

    for (const p of ps) {
      const [pctx, pres] = p(context)
      context = pctx
      errors = pres.errors?.length ? merge(errors, pres.errors) : []

      if (pres.status !== Ok) {
        return maybeFatal(context.index !== index, context, errors)
      }
      values.push(pres.value)
    }
    return ok(context, fn(...values))
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
 * by `op`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an error will be thrown.
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
export const assocL = (p, op, x) => parser(ctx => {
  ASSERT && assertParser('assocL', p, ordParFormatter('1st'))
  ASSERT && assertParser('assocL', op, ordParFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Fatal) return prep
  if (pres.status === Fail) return ok(pctx, x)

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [oprep, [opctx, opres]] = twin(op(context))
    context = opctx
    if (opres.status === Fatal) return oprep
    if (opres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'assocL', opres.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(opres.value)
    values.push(pres.value)
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
 * A parser that parses one or more applications of `p`, each separated
 * by `op`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `op` fails
 * fatally.
 *
 * If any result of `op` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */
export const assoc1L = (p, op) => parser(ctx => {
  ASSERT && assertParser('assoc1L', p, ordParFormatter('1st'))
  ASSERT && assertParser('assoc1L', op, ordParFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [oprep, [opctx, opres]] = twin(op(context))
    context = opctx
    if (opres.status === Fatal) return oprep
    if (opres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'assoc1L', opres.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(opres.value)
    values.push(pres.value)
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
 * A parser that parses zero or more applications of `p`, each separated
 * by `op`. It results in the value obtained by right associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an error will be thrown.
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
export const assocR = (p, op, x) => parser(ctx => {
  ASSERT && assertParser('assocR', p, ordParFormatter('1st'))
  ASSERT && assertParser('assocR', op, ordParFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status === Fatal) return prep
  if (pres.status === Fail) return ok(pctx, x)

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [oprep, [opctx, opres]] = twin(op(context))
    context = opctx
    if (opres.status === Fatal) return oprep
    if (opres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'assocR', opres.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(opres.value)
    values.push(pres.value)
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
 * A parser that parses one or more applications of `p`, each separated
 * by `op`. It results in the value obtained by right associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `op` fails
 * fatally.
 *
 * If any result of `op` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */
export const assoc1R = (p, op) => parser(ctx => {
  ASSERT && assertParser('assoc1R', p, ordParFormatter('1st'))
  ASSERT && assertParser('assoc1R', op, ordParFormatter('2nd'))

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const values = [pres.value]
  const ops = []
  let context = pctx
  let index = context.index
  let i = 0

  while (true) {
    const [oprep, [opctx, opres]] = twin(op(context))
    context = opctx
    if (opres.status === Fatal) return oprep
    if (opres.status === Fail) break

    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx
    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break

    ASSERT && assertFunction(
      'assoc1R', opres.value, opFormatter(ordinal(i + 1)),
    )

    ops.push(opres.value)
    values.push(pres.value)
    index = context.index
    i++
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return ok(context, value, index)
})
