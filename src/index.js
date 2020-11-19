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
  upper,
} from './parsers/char'
export {
  constant,
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
  back,
  bothB,
  chainB,
  choice,
  choiceL,
  countB,
  fallback,
  leftB,
  manyTillB,
  optional,
  rightB,
  seqB,
} from './combinators/alternative'
export {
  between,
  both,
  chain,
  join,
  left,
  map,
  pipe,
  right,
  skip,
  value,
} from './combinators/chaining'
export {
  followedBy,
  followedByL,
  lookAhead,
  notEmpty,
  notFollowedBy,
  notFollowedByL,
} from './combinators/conditional'
export {
  backlabel,
  label,
} from './combinators/message'
export {
  block,
  chainl,
  chainl1,
  chainr,
  chainr1,
  count,
  many,
  many1,
  manyTill,
  sepBy,
  sepBy1,
  sepEndBy,
  sepEndBy1,
  seq,
  skipMany,
  skipMany1,
} from './combinators/sequence'

///////////////////////////////////////////////////////////////////////
// PARSER TOOLS AND UTILITIES

export {
  Status,
  error,
  fatal,
  makeParser,
  maybeFatal,
  ok,
  parse,
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
