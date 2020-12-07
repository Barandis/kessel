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
import { ok, Parser, Status, maybeFatal } from 'kessel/core'
import { merge } from 'kessel/error'
import { ordinal, range, stringify, twin } from 'kessel/util'

/** @typedef {import('kessel/core').Parser} Parser */

const { Ok, Fail, Fatal } = Status

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
    const [pctx, pres] = p(context)
    context = pctx

    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, pres.errors)
    }
    if (pres.value !== null) values.push(pres.value)
  }
  return ok(context, values)
})

/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `p`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `left(p, q)` is an optimized implementation of `chain(p, x =>
 * value(q, x))`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */
export const left = (p, q) => Parser(ctx => {
  ASSERT && assertParser('left', p, ordParFormatter('1st'))
  ASSERT && assertParser('left', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  const [qctx, qres] = q(pctx)
  return qres.status === Ok ? ok(qctx, pres.value)
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
})

/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `q`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `right(p, q)` is an optimized implementation of `chain(p, () =>
 * q)`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */
export const right = (p, q) => Parser(ctx => {
  ASSERT && assertParser('right', p, ordParFormatter('1st'))
  ASSERT && assertParser('right', q, ordParFormatter('2nd'))

  const index = ctx.index

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Status.Ok) return prep

  const [qrep, [qctx, qres]] = twin(q(pctx))
  return qres.status === Ok ? qrep
    : maybeFatal(qctx.index !== index, qctx, qres.errors)
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

    const [pctx, pres] = value(context)
    context = pctx

    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, pres.errors)
    }
    nextValue = pres.value
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
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    if (pres.value !== null) values.push(pres.value)
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

  const [prep, [pctx, pres]] = twin(p(ctx))
  if (pres.status !== Ok) return prep

  let context = pctx
  const values = pres.value !== null ? [pres.value] : []

  while (true) {
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
    if (pres.value !== null) values.push(pres.value)
    if (context.index >= context.view.byteLength) break
  }
  return ok(context, values)
})

/**
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * `skip(p)` is an optimized implementation of `chain(p, () =>
 * always(null))`,
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */
export const skip = p => Parser(ctx => {
  ASSERT && assertParser('skip', p)

  const [prep, [pctx, pres]] = twin(p(ctx))
  return pres.status === Ok ? ok(pctx, null) : prep
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
    const [prep, [pctx, pres]] = twin(p(context))
    context = pctx

    if (pres.status === Fatal) return prep
    if (pres.status === Fail) break
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
 * Creates a parser which applies its before, content, and after parsers
 * in order and results in the result of its content parser.
 *
 * Note that the content parser `p` is applied before the after parser
 * `pafter`. This means that the content parser will have an opportunity
 * to patch the "after" content before the after parser does, so take
 * care that the parsers do not overlap in what they match.
 *
 * `between(pre, post, p)` is an optimized implementation of
 * `left(right(pre, p), post)`.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */
export const between = (pre, post, p) => Parser(ctx => {
  ASSERT && assertParser('between', pre, ordParFormatter('1st'))
  ASSERT && assertParser('between', post, ordParFormatter('2nd'))
  ASSERT && assertParser('between', p, ordParFormatter('3rd'))

  const index = ctx.index

  const [prerep, [prectx, preres]] = twin(pre(ctx))
  if (preres.status !== Ok) return prerep

  const [pctx, pres] = p(prectx)
  if (pres.status !== Ok) {
    return maybeFatal(pctx.index !== index, pctx, pres.errors)
  }

  const [postctx, postres] = post(pctx)
  return postres.status === Ok ? ok(postctx, pres.value)
    : maybeFatal(postctx.index !== index, postctx, postres.errors)
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
    if (pres.value !== null) values.push(pres.value)
  }
  return ok(context, values)
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
 * `pipe(p, q, fn)` is an optimized implementation of `chain(p, a =>
 * chain(q, b => always(fn(a, b))))`, `pipe(p, q, r, fn)` is an
 * optimized implementation of `chain(p, a => chain(q, b => chain(r,
 * c => always(fn(a, b, c)))))`, and so on.
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
export const pipe = (...ps) => Parser(ctx => {
  const fn = ps.pop()

  ASSERT && assertParsers('pipe', ps)
  ASSERT && assertFunction('pipe', fn, ordFnFormatter(ordinal(ps.length + 1)))

  const index = ctx.index
  const values = []
  let context = ctx

  for (const p of ps) {
    const [pctx, pres] = p(context)
    context = pctx

    if (pres.status !== Ok) {
      return maybeFatal(context.index !== index, context, pres.errors)
    }
    values.push(pres.value)
  }
  return ok(context, fn(...values))
})

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
