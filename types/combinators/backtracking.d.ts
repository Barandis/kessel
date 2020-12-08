export function label(p: Parser<T>, msg: string): Parser<T>;
export function attempt(p: Parser<T>): Parser<T>;
export function attemptM(p: Parser<T>, msg: string): Parser<T>;
export function sequenceB(...ps: Parser[]): Parser<any[]>;
export function chainB<T>(p: Parser<T>, fn: (arg: T) => Parser<U>): Parser<U>;
export function applyB<T, U>(p: Parser<T>, f: Parser<(arg: T) => U>): Parser<U>;
export function leftB(p: Parser<T>, q: Parser<U>): Parser<T>;
export function rightB(p: Parser<T>, q: Parser<U>): Parser<U>;
export function andThenB(p: Parser<T>, q: Parser<U>): Parser<[T, U]>;
export function repeatB(p: Parser<T>, n: number): Parser<[T]>;
export function manyTillB(p: Parser<T>, end: Parser<U>): Parser<[T]>;
export function blockB(genFn: Iterator<Parser<any>, T, any>): Parser<T>;
export function pipeB<T>(...ps: (Parser<any> | ((...args: any[]) => T))[]): Parser<T>;
export function betweenB(pre: Parser<U>, post: Parser<V>, p: Parser<T>): Parser<T>;

type Parser<T> = import("../core").Parser<T>;
