export function char(c: string): Parser<string>;
export function charI(c: string): Parser<string>;
export function satisfy(fn: (arg0: string) => boolean): Parser<string>;
export function satisfyM(fn: (arg0: string) => boolean, message: string): Parser<string>;
export function range(s: string, e: string): Parser<string>;
export const any: Parser<string>;
export const eof: Parser<string>;
export function anyOf(cs: (string | string[])): Parser<string>;
export function noneOf(cs: (string | string[])): Parser<string>;
export const digit: Parser<string>;
export const hex: Parser<string>;
export const octal: Parser<string>;
export const letter: Parser<string>;
export const alpha: Parser<string>;
export const upper: Parser<string>;
export const lower: Parser<string>;

type Parser<T> = import("../core").Parser<T>;
