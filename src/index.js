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
  chari,
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
  always,
  fail,
  failFatally,
  failUnexpected,
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
  stringi,
} from './parsers/string'

///////////////////////////////////////////////////////////////////////
// COMBINATORS

export {
  attempt,
  betweenB,
  blockB,
  bothB,
  chainB,
  choice,
  countB,
  def,
  leftB,
  manyTillB,
  opt,
  pipeB,
  rightB,
  sequenceB,
} from './combinators/alternative'
export {
  between,
  both,
  chain,
  fifth,
  first,
  fourth,
  join,
  left,
  map,
  nth,
  pipe,
  right,
  second,
  skip,
  third,
  value,
} from './combinators/chaining'
export {
  followedBy,
  followedByM,
  lookAhead,
  notEmpty,
  notEmptyM,
  notFollowedBy,
  notFollowedByM,
} from './combinators/conditional'
export {
  backLabel,
  label,
} from './combinators/message'
export {
  assoc1L,
  assoc1R,
  assocL,
  assocR,
  block,
  many,
  many1,
  manyTill,
  repeat,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  sequence,
  skipMany,
  skipMany1,
} from './combinators/sequence'

///////////////////////////////////////////////////////////////////////
// PARSER TOOLS AND UTILITIES

export {
  Status,
  error,
  failure,
  fatal,
  makeParser,
  maybeFatal,
  ok,
  parse,
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
