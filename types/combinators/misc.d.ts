export function join(p: Parser<[string]>): Parser<string>;
export function value<T>(p: Parser<any>, x: T): Parser<T>;
export function nth(p: Parser<[T]>, n: number): Parser<T>;
export function first(p: Parser<[T]>): Parser<T>;
export function second(p: Parser<[T]>): Parser<T>;
export function third(p: Parser<[T]>): Parser<T>;
export function fourth(p: Parser<[T]>): Parser<T>;
export function fifth(p: Parser<[T]>): Parser<T>;

type Parser<T> = import("../core").Parser<T>;
