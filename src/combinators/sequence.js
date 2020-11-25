// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

import { ok, makeParser, Status, maybeFatal } from 'kessel/core'
import { merge } from 'kessel/error'
import { dup, range } from 'kessel/util'

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
export const sequence = (...ps) => makeParser(state => {
  const values = []
  const index = state.index
  let next = state

  for (const p of ps) {
    const [nextState, result] = p(next)
    next = nextState

    if (result.status !== Ok) {
      return maybeFatal(next.index !== index, next, result.errors)
    }
    if (result.value !== null) values.push(result.value)
  }
  return ok(next, values)
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
export const block = genFn => makeParser(state => {
  const gen = genFn()
  const index = state.index
  let nextValue
  let next = state

  while (true) {
    const { value, done } = gen.next(nextValue)
    if (done) return ok(next, value)

    const [nextState, result] = value(next)
    next = nextState

    if (result.status !== Ok) {
      return maybeFatal(next.index !== index, next, result.errors)
    }
    nextValue = result.value
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
export const many = p => makeParser(state => {
  const values = []
  let next = state

  while (true) {
    const [reply, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (result.value !== null) values.push(result.value)
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, values)
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
export const many1 = p => makeParser(state => {
  const [tuple, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return tuple

  let next = nextState
  const values = [result.value]

  while (true) {
    const [reply, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (result.value !== null) values.push(result.value)
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, values)
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
export const skipMany = p => makeParser(state => {
  let next = state

  while (true) {
    const [reply, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, null)
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
export const skipMany1 = p => makeParser(state => {
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return reply

  let next = nextState

  while (true) {
    const [reply, [nextState, result]] = dup(p(next))
    next = nextState

    if (result.status === Fatal) return reply
    if (result.status === Error) break
    if (next.index >= next.view.byteLength) break
  }
  return ok(next, null)
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
export const sepBy = (p, sep) => makeParser(state => {
  let index = state.index
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(nextState, [])

  const values = [result.value]
  let next = nextState

  while (true) {
    index = next.index

    const [reply1, [nextState1, result1]] = dup(sep(next))
    next = nextState1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [nextState2, result2]] = dup(p(next))
    next = nextState2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (next.index === index) throw new TypeError(loopMessage('sepBy'))
    values.push(result2.value)
  }
  return ok(next, values, index)
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
export const sepBy1 = (p, sep) => makeParser(state => {
  let index = state.index
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return reply

  const values = [result.value]
  let next = nextState

  while (true) {
    index = next.index

    const [reply1, [nextState1, result1]] = dup(sep(next))
    next = nextState1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [nextState2, result2]] = dup(p(next))
    next = nextState2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (next.index === index) throw new TypeError(loopMessage('sepBy1'))
    values.push(result2.value)
  }
  return ok(next, values, index)
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
export const sepEndBy = (p, sep) => makeParser(state => {
  let index = state.index
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(nextState, [])

  const values = [result.value]
  let next = nextState

  while (true) {
    index = next.index

    const [reply1, [nextState1, result1]] = dup(sep(next))
    next = nextState1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [nextState2, result2]] = dup(p(next))
    next = nextState2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (next.index === index) throw new TypeError(loopMessage('sepEndBy'))
    values.push(result2.value)
  }
  const [sepNext, _] = sep({ ...next, index })
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
export const sepEndBy1 = (p, sep) => makeParser(state => {
  let index = state.index
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return reply

  const values = [result.value]
  let next = nextState

  while (true) {
    index = next.index

    const [reply1, [nextState1, result1]] = dup(sep(next))
    next = nextState1
    if (result1.status === Fatal) return reply1
    if (result1.status === Error) break

    const [reply2, [nextState2, result2]] = dup(p(next))
    next = nextState2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) break

    if (next.index === index) throw new TypeError(loopMessage('sepEndBy1'))
    values.push(result2.value)
  }
  const [sepNext, _] = sep({ ...next, index })
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
export const count = (p, n) => makeParser(state => {
  const index = state.index
  const values = []
  let next = state

  for (const _ of range(n)) {
    const [nextState, result] = p(next)
    next = nextState
    if (result.status !== Ok) {
      return maybeFatal(next.index !== index, next, result.errors)
    }
    values.push(result.value)
  }
  return ok(next, values)
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
export const manyTill = (p, end) => makeParser(state => {
  const index = state.index
  const values = []
  let next = state

  while (true) {
    const [reply1, [next1, result1]] = dup(end(next))
    next = next1
    if (result1.status === Fatal) return reply1
    if (result1.status === Ok) break

    const [reply2, [next2, result2]] = dup(p(next))
    next = next2
    if (result2.status === Fatal) return reply2
    if (result2.status === Error) {
      return maybeFatal(
        next.index !== index, next, merge(result2.errors, result1.errors),
      )
    }
    if (result2.value !== null) values.push(result2.value)
  }
  return ok(next, values)
})

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
export const assocl = (p, op, x) => makeParser(state => {
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(nextState, x)

  const values = [result.value]
  const ops = []
  let next = nextState
  let index = next.index

  while (true) {
    const [replyop, [nextop, resultop]] = dup(op(next))
    next = nextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [nextp, resultp]] = dup(p(next))
    next = nextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ops.push(resultop.value)
    values.push(resultp.value)
    index = next.index
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return ok(next, value, index)
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
export const assocl1 = (p, op) => makeParser(state => {
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return reply

  const values = [result.value]
  const ops = []
  let next = nextState
  let index = next.index

  while (true) {
    const [replyop, [nextop, resultop]] = dup(op(next))
    next = nextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [nextp, resultp]] = dup(p(next))
    next = nextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ops.push(resultop.value)
    values.push(resultp.value)
    index = next.index
  }

  let value = values[0]
  for (const i of range(ops.length)) {
    value = ops[i](value, values[i + 1])
  }
  return ok(next, value, index)
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
export const assocr = (p, op, x) => makeParser(state => {
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status === Fatal) return reply
  if (result.status === Error) return ok(nextState, x)

  const values = [result.value]
  const ops = []
  let next = nextState
  let index = next.index

  while (true) {
    const [replyop, [nextop, resultop]] = dup(op(next))
    next = nextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [nextp, resultp]] = dup(p(next))
    next = nextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ops.push(resultop.value)
    values.push(resultp.value)
    index = next.index
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return ok(next, value, index)
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
export const assocr1 = (p, op) => makeParser(state => {
  const [reply, [nextState, result]] = dup(p(state))
  if (result.status !== Ok) return reply

  const values = [result.value]
  const ops = []
  let next = nextState
  let index = next.index

  while (true) {
    const [replyop, [nextop, resultop]] = dup(op(next))
    next = nextop
    if (resultop.status === Fatal) return replyop
    if (resultop.status === Error) break

    const [replyp, [nextp, resultp]] = dup(p(next))
    next = nextp
    if (resultp.status === Fatal) return replyp
    if (resultp.status === Error) break

    ops.push(resultop.value)
    values.push(resultp.value)
    index = next.index
  }

  let value = values[values.length - 1]
  for (const i of range(ops.length - 1, -1)) {
    value = ops[i](values[i], value)
  }
  return ok(next, value, index)
})
