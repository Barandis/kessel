export function failNormally(msg: string): Parser<null>;
export function failFatally(msg: string): Parser<null>;

type Parser<T> = import("../core").Parser<T>;
