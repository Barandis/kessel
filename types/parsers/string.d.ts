export function string(str: string): Parser<string>;
export function stringI(str: string): Parser<string>;
export const all: Parser<string>;
export function anyString(n: number): Parser<string>;

type Parser<T> = import("../core").Parser<T>;
