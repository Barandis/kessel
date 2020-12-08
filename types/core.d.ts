
export function context(input: Input): Context;
export function ok(ctx: Context, value?: T, index?: number): Reply<T>;
export function fail(ctx: Context, errors?: ErrorList, index?: number): Reply<any>;
export function fatal(ctx: Context, errors?: ErrorList, index?: number): Reply<any>;
export function maybeFatal(test: boolean, ctx: Context, errors?: ErrorList, index?: number): Reply<any>;
export function parse(parser: Parser<T>, input: Input): Reply<T>;
export function status(reply: Reply<any>): Status;
export function succeeded(reply: Reply<any>): boolean;
export function success(reply: Reply<T>): T;
export function failure(reply: Reply<any>): string;
export function run(parser: Parser<T>, input: Input): T;
export function parser(parser: Parser<T>): Parser<T>;

export type Context = {
  view: DataView;
  index: number;
};
export type Status = symbol;
export namespace Status {
  const Ok: any;
  const Fail: any;
  const Fatal: any;
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
