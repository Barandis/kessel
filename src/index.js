// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

///////////////////////////////////////////////////////////////////////
// PARSERS

export {
  alpha,
  any,
  char,
  digit,
  eof,
  hex,
  ichar,
  letter,
  lower,
  noneof,
  octal,
  oneof,
  range,
  satisfy,
  upper,
} from './parsers/char'
export {
  always,
  fail,
  fatal,
} from './parsers/misc'
export {
  newline,
  regex,
  space,
  spaces,
  spaces1,
  ualpha,
  uletter,
  ulower,
  unewline,
  uspace,
  uspaces,
  uspaces1,
  uupper,
} from './parsers/regex'
export {
  all,
  anystr,
  istr,
  str,
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
  attempt,
  bapply,
  bbetween,
  bblock,
  bchain,
  bleft,
  bpipe,
  brepeat,
  bright,
  bseq,
  buntil,
} from './combinators/backtracking'
export {
  apply,
  chain,
  compact,
  fifth,
  first,
  fourth,
  join,
  map,
  nth,
  second,
  third,
  value,
} from './combinators/chaining'
export {
  assoc1L,
  assoc1R,
  assocL,
  assocR,
  between,
  block,
  endby,
  endby1,
  left,
  many,
  many1,
  pipe,
  repeat,
  right,
  sepby,
  sepby1,
  seq,
  skip,
  until,
} from './combinators/sequence'

///////////////////////////////////////////////////////////////////////
// PARSER TOOLS AND UTILITIES

export {
  Status,
  failReply,
  failure,
  fatalReply,
  okReply,
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
