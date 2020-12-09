
export function context(input: Input): Context;
export function ok(ctx: Context, value?: T, index?: number): Reply<T>;
export function fail(ctx: Context, errors?: ErrorList, index?: number): Reply<null>;
export function fatal(ctx: Context, errors?: ErrorList, index?: number): Reply<null>;
export function maybeFatal(test: boolean, ctx: Context, errors?: ErrorList, index?: number): Reply<null>;
export function parse(parser: Parser<T>, input: Input): Reply<T>;
export function status(reply: Reply<any>): Status;
export function succeeded(reply: Reply<any>): boolean;
export function success(reply: Reply<T>): T | null;
export function failure(reply: Reply<any>): string | null;
export function run(parser: Parser<T>, input: Input): T;
export function parser(parser: Parser<T>): Parser<T>;

export type Context = {
  view: DataView;
  index: number;
};
export type Status = symbol;
export namespace Status {
  const Ok: symbol;
  const Fail: symbol;
  const Fatal: symbol;
}
export type Result<T> = {
  status: Status;
  value: T;
  errors: ErrorList;
};
export type Reply<T> = [Context, Result<T>];
export type TypedArray = Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type Input = string | ArrayBuffer | DataView | Int8Array | Uint8Array | Uint8ClampedArray | Int16Array | Uint16Array | Int32Array | Uint32Array | Float32Array | Float64Array;
export type Parser<T> = (ctx: Context) => Reply<T>;

type ErrorList = import("./error").ErrorList;
