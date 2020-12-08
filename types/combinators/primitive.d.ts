export function always<T>(x: T): Parser<T>;
export function map<T, U>(p: Parser<T>, fn: (arg: T) => U): Parser<U>;
export function apply<T, U>(p: Parser<T>, q: Parser<(arg: T) => U>): Parser<U>;
export function chain<T>(p: Parser<T>, fn: (arg: T) => Parser<U>): Parser<U>;
export const empty: Parser<null>;
export function orElse(p: Parser<T>, q: Parser<U>): Parser<T | U>;
export function andThen(p: Parser<T>, q: Parser<U>): Parser<[T, U]>;

type Parser<T> = import("../core").Parser<T>;
