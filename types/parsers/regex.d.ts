export function regex(re: (string | RegExp)): Parser<string>;
export const letterU: Parser<string>;
export const alphaU: Parser<string>;
export const upperU: Parser<string>;
export const lowerU: Parser<string>;
export const space: Parser<string>;
export const spaceU: Parser<string>;
export const spaces: Parser<string>;
export const spacesU: Parser<string>;
export const spaces1: Parser<string>;
export const spaces1U: Parser<string>;
export const newline: Parser<string>;
export const newlineU: Parser<string>;

type Parser<T> = import("../core").Parser<T>;
