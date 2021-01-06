// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

///////////////////////////////////////////////////////////////////////
// PARSERS

export {
  alpha,
  any,
  anyOf,
  char,
  charI,
  digit,
  eof,
  hex,
  letter,
  lower,
  noneOf,
  octal,
  range,
  satisfy,
  satisfyM,
  upper,
} from './parsers/char'
export {
  failNormally,
  failFatally,
} from './parsers/misc'
export {
  alphaU,
  letterU,
  lowerU,
  newline,
  newlineU,
  regex,
  space,
  spaceU,
  spaces,
  spaces1,
  spaces1U,
  spacesU,
  upperU,
} from './parsers/regex'
export {
  all,
  anyString,
  string,
  stringI,
} from './parsers/string'

///////////////////////////////////////////////////////////////////////
// COMBINATORS

export {
  alt,
  def,
  empty,
  not,
  opt,
  peek,
} from './combinators/alternative'
export {
  andThenB,
  applyB,
  attempt,
  attemptM,
  betweenB,
  blockB,
  chainB,
  label,
  leftB,
  manyTillB,
  pipeB,
  repeatB,
  rightB,
  sequenceB,
} from './combinators/backtracking'
export {
  compact,
  fifth,
  first,
  fourth,
  join,
  nth,
  second,
  third,
  value,
} from './combinators/misc'
export {
  always,
  andThen,
  apply,
  chain,
  map,
  orElse,
} from './combinators/primitive'
export {
  assoc1L,
  assoc1R,
  assocL,
  assocR,
  between,
  block,
  left,
  many,
  many1,
  manyTill,
  pipe,
  repeat,
  right,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  seq,
  skip,
  skipMany,
  skipMany1,
} from './combinators/sequence'

///////////////////////////////////////////////////////////////////////
// PARSER TOOLS AND UTILITIES

export {
  Status,
  fail,
  failure,
  fatal,
  maybeFatal,
  ok,
  parse,
  parser,
  run,
  status,
  succeeded,
  success,
} from './core'
export {
  ErrorType,
  compound,
  expected,
  formatErrors,
  generic,
  getPosition,
  merge,
  nested,
  other,
  unexpected,
} from './error'
