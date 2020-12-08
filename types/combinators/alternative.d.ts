export function choice(...ps: Parser[]): Parser<any>;
export function optional(p: Parser<T>): Parser<T | null>;
export function orValue(p: Parser<T>, x: T): Parser<T>;
export function lookAhead(p: Parser<T>): Parser<T>;
export function notEmpty(p: Parser<T>): Parser<null>;
export function notEmptyM(p: Parser<T>, msg: string): Parser<null>;
export function followedBy(p: Parser<T>): Parser<null>;
export function followedByM(p: Parser<T>, msg: string): Parser<null>;
export function notFollowedBy(p: Parser<T>): Parser<null>;
export function notFollowedByM(p: Parser<T>, msg: string): Parser<null>;

type Parser<T> = import("../core").Parser<T>;
