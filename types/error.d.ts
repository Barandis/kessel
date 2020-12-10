export function expected(label: string): [LocalError];
export function unexpected(label: string): [LocalError];
export function generic(label: string): [LocalError];
export function other(label: string): [LocalError];
export function nested(ctx: Context, errors: ErrorList): [NestedError];
export function compound(label: string, ctx: Context, errors: ErrorList): [CompoundError];
export function merge(errors1: ErrorList, errors2: ErrorList): ErrorList;
export function isNewline(index: number, view: DataView): { newline: boolean, skip: number};
export function getLineIndexes(index: number, view: DataView): { start: number, end: number, lineno: number };
export function getCharIndex(index: number, view: DataView, start: number): number;
export function tabify(charIndex: number, line: string, tabSize: number): { line: string, colIndex: number };
export function getColNumber(colIndex: number, line: string): { colno: number, length: number };
export function show(line: string, length: number, colno: number, maxWidth: number, indent?: number): string;
export function format(errors: ErrorList, index: number, view: DataView, tabSize?: number, maxWidth?: number, indent?: number): string;
export function formatErrors(ctx: Context, result: Result<any>, tabSize?: number, maxWidth?: number, formatter?: Formatter): string;
export function getPosition(ctx: Context, tabSize?: number): { line: number, column: number };

export type ErrorType = 'expected' | 'unexpected' | 'generic' | 'nested' | 'compound' | 'other';
export namespace ErrorType {
  const Expected: 'expected';
  const Unexpected: 'unexpected';
  const Generic: 'generic';
  const Nested: 'nested';
  const Compound: 'compound';
  const Other: 'other';
}
export type ErrorList = (NestedError | CompoundError | LocalError)[];
export type LocalError = {
  type: 'expected' | 'unexpected' | 'generic' | 'other';
  label: string;
};
export type NestedError = {
  type: 'nested';
  ctx: Context;
  errors: ErrorList;
};
export type CompoundError = {
  type: 'compound';
  label: string;
  ctx: Context;
  errors: ErrorList;
};
export type Formatter = (errors: ErrorList, index: number, view: DataView, tabSize?: number, maxWidth?: number) => string;

type Context = import("./core").Context;
type Result<T> = import("./core").Result<T>;
