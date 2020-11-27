(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["kessel"] = factory();
	else
		root["kessel"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assert.js":
/*!***********************!*\
  !*** ./src/assert.js ***!
  \***********************/
/*! exports provided: ordinalChar, assertChar, assertFunction, assertString, assertStringOrArray, assertStringOrRegExp, assertNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalChar", function() { return ordinalChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertChar", function() { return assertChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFunction", function() { return assertFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertString", function() { return assertString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStringOrArray", function() { return assertStringOrArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStringOrRegExp", function() { return assertStringOrRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNumber", function() { return assertNumber; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


function stringify(value) {
  if (value === undefined) return 'undefined';
  if (typeof value === 'function') return `function ${value.name}`;
  if (typeof value === 'symbol') return `Symbol(${value.description})`;
  return JSON.stringify(value);
}

const charFormatter = value => `expected a one-character string; found ${stringify(value)}`;

const fnFormatter = value => `expected a function; found ${stringify(value)}`;

const strFormatter = value => `expected a string; found ${stringify(value)}`;

const strArrFormatter = value => `expected a string or an array of characters; found ${stringify(value)}`;

const strRegFormtter = value => `expected a string or a regular expression; found ${stringify(value)}`;

const numFormatter = value => `expected a number; found ${stringify(value)}`;

const ordinalChar = ord => value => `expected ${ord} argument to be a one-character string; found ${stringify(value)}`;
function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || Object(_util__WEBPACK_IMPORTED_MODULE_0__["charLength"])(value) !== 1) {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function') {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(Array.isArray(value) && value.every(c => typeof c === 'string' && Object(_util__WEBPACK_IMPORTED_MODULE_0__["charLength"])(c) === 1) || typeof value === 'string')) {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  const type = Object.prototype.toString.call(value);

  if (typeof value !== 'string' && type !== '[object RegExp]') {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}

/***/ }),

/***/ "./src/combinators/alternative.js":
/*!****************************************!*\
  !*** ./src/combinators/alternative.js ***!
  \****************************************/
/*! exports provided: choice, optional, fallback, backtrack, sequenceB, chainB, leftB, rightB, bothB, countB, manyTillB, blockB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fallback", function() { return fallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backtrack", function() { return backtrack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return sequenceB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return leftB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return rightB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return bothB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return countB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return manyTillB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return blockB; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



const {
  Ok,
  Error,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that implements alternatives. Each of the supplied
 * parsers is applied one at a time, in order. When the first parser
 * succeeds, or the first parser fails while consuming input, execution
 * is stopped and the state from that last parser is passed through. The
 * same happens if all parsers are applied without any of them
 * succeeding.
 *
 * On failure, all of the `Expected` errors from any of the contained
 * parsers will be merged into this parser's errors.
 *
 * @param {...Parser} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const choice = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let errors = [];

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
    if (result.status === Ok) return reply;
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["merge"])(errors, result.errors);
    if (result.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, errors);
});
/**
 * Creates a parser that applies the supplied parser, succeeding whether
 * it fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally. It's used to
 * implement skipping over some optional text.
 *
 * @param {Parser} p The parser for optional content to be applied and
 *     then have its result ignored.
 * @return {Parser} A parser that succeeds with no result unless its
 *     contained parser fails fatally. This parser consumes text only
 *     if its contained parser succeeds.
 */

const optional = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Fatal ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied value
 * `x`. This parser only fails if its contained parser fails fatally.
 *
 * `fallback(p, x)` is an optimized implementation of `choice([p,
 * constant(x)])`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */

const fallback = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status !== Error ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, x);
});
/**
 * Creates a parser that transforms a fatal failure into a non-fatal
 * failure. It applies the supplied parser; if that parser fails
 * fatally, the state is set back to what it was *before* that parser is
 * applied and the fatal failure is returned as a non-fatal failure. If
 * the parser has any other result, it is passed through without
 * modification.
 *
 * This parser allows the user to cause a non-backtracking parser to
 * backtrack upon failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */

const backtrack = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));

  if (result.status !== Ok) {
    const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next, result.errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, err, index);
  }

  return reply;
});
/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * If one of the parsers fails non-fatally, the entire parser will also
 * fail non-fatally, reverting the state to what it was before the first
 * parser was applied, even if previous parsers have consumed input. A
 * fatal error from one of the contained parsers will still result in an
 * overall fatal error.
 *
 * Note that `sequenceB(ps)` is not the same as
 * `backtrack(sequence(ps))`, as the former will fail fatally if one of
 * `ps` fails fatally, while the latter will fail non-fatally in that
 * case.
 *
 * @param {...Parser} ps The parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */

const sequenceB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, err, index);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
 *
 * If the second parser (the one provided by `fn`) fails non-fatally,
 * the entire parser will also fail non-fatally, reverting the state to
 * what it was before the first parser was applied, even if the first
 * parser consumed input. A fatal error from either parser will still
 * result in an overall fatal error.
 *
 * Note that `chainB(p, fn)` is not the same as `backtrack(chain(p,
 * fn))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */

const chainB = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(fn(result1.value)(next1));
  if (result2.status !== Error) return reply2;
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `leftB(p1, p2)` is not the same as `backtrack(left(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */

const leftB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, result1.value);
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `rightB(p1, p2)` is not the same as `backtrack(right(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */

const rightB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status !== Error) return reply2;
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the state to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `bothB(p1, p2)` is not the same as `backtrack(both(p1,
 * p2))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const bothB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, [result1.value, result2.value]);
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, err, index);
});
/**
 * Creates a parser that applies the supplied parser `n` times,
 * collecting the successful results into an array. If any application
 * fails, the overall parser will fail; if that failure is fatal, the
 * overall failure will also be fatal.
 *
 * The parser will fail non-fatally if the underlying error was
 * non-fatal, even if input was consumed (backtracking will happen in
 * this case).
 *
 * @param {Parser} p A parser to apply multiple times.
 * @param {number} n The number of times to apply the parser.
 * @returns {Parser} A parser that applies `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const countB = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const values = [];
  let next = state;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(n)) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, err, index);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser which applies its content parser zero or more times
 * until its end parser is successful. This parser results in an array
 * of all of the successful content parser results. The end parser is
 * applied *first*, so it's fine to have the two parsers overlap. For
 * example, `manyTill(any, letter)` will work fine, because `letter`
 * will be tried first on each character (contrast with `between(letter,
 * any, letter)`, which will never succeed becuase the `any` is applied
 * before the final `letter` and will therefore consume a letter before
 * the `letter` parser gets to see it).
 *
 * If the content parser fails non-fatally before the end parser does,
 * the overall parser will fail (backtracking if input had already been
 * consumed). A fatal error by either parser will result in a fatal
 * error for the overall parser.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will apply the content zero or more
 *     times until the end parser succeeds.
 */

const manyTillB = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const values = [];
  let next = state;

  while (true) {
    const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(end(next));
    next = next1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = next2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      const err = index === next2.index ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["merge"])(result2.errors, result1.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(next2, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["merge"])(result2.errors, result1.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, err, index);
    }

    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that executes a block of code in the form of a
 * generator function. Inside that function, parsers that are `yield`ed
 * will be executed and will evaluate to their results (which can then
 * be assigned to variables, etc.).
 *
 * If any of these parsers fail, the `block` parser will also fail. If
 * that failure is non-fatal, backtracking will reset the index to where
 * it was at the beginning of the `block` parser application.
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause undefined behavior.
 *
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; yielding anything else will cause incorrect behavior
 *     depending on what exactly is yielded.
 * @returns {Parser} A parser that executes the generator function,
 *     applies parsers as they are yielded, and results (if all parsers
 *     succeed) in the return value of the generator.
 */

const blockB = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const gen = genFn();
  const index = state.index;
  let nextValue;
  let next = state;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value);
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(value(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(nextState, result.errors, index);
    nextValue = result.value;
  }
});

/***/ }),

/***/ "./src/combinators/chaining.js":
/*!*************************************!*\
  !*** ./src/combinators/chaining.js ***!
  \*************************************/
/*! exports provided: chain, map, join, skip, value, left, right, both, pipe, between, nth, first, second, third, fourth, fifth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "both", function() { return both; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return nth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "third", function() { return third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return fourth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return fifth; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that chains the state after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting state.
 *
 * If the initial parser fails, that failure is instead returned. If the
 * second parser (the return value of `fn`) fails and `p` consumed
 * input, the failure is fatal.
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */

const chain = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(fn(result1.value)(next1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that applies the supplied parser and passes its
 * result to the provided function. The return value of that function
 * becomes the result of the created parser.
 *
 * If the contained parser fails, that failure is propagated out as the
 * failure of the returned parser.
 *
 * `map(p, fn)` is an optimized implementation of `chain(p, x =>
 * constant(fn(x)))`. This also makes it a more efficient version of
 * `pipe([p], fn)` (a single-parser `pipe`).
 *
 * @param {Parser} p The parser to apply to the input.
 * @param {function(*):*} fn A mapping function that is passed the
 *     result of `p` and whose return value will be the result of the
 *     created parser.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, fn(result.value)) : reply;
});
/**
 * Creates a parser which applies the supplied parser. That parser is
 * expected to result in an array of strings, and if it succeeds, that
 * result's elements are joined together into a single string. This is
 * useful because JavaScript does not share the characteristic of some
 * functional languages where a string is the same as a list of
 * characters. JavaScript needs explicit conversion between the two, so
 * this parser will turn an array of characters into a string.
 *
 * If the supplied parser fails, the created parser will also fail with
 * the same state.
 *
 * `join(p)` is an optimized implementation of `chain(p, x =>
 * constant(x.join('')))`.
 *
 * If the supplied parser does not result in an array, an exception will
 * be thrown because an attempt will be made to call `join` on the
 * result. If it results in an array of something other than strings,
 * those elements will be coerced into strings and then joined.
 *
 * @param {Parser} p A parser that is expected to result in an array of
 *     strings.
 * @returns {Parser} A parser that applies its contained parser and
 *     results in a single string made from joining the elements of the
 *     array of strings.
 */

const join = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value.join('')) : reply;
});
/**
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * `skip(p)` is an optimized implementation of `chain(p, () =>
 * constant(null))`,
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */

const skip = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null) : reply;
});
/**
 * Creates a parser that will run the supplied parser but, on success,
 * result in the supplied value instead.
 *
 * `value(p, x)` is an optimized implemenation of `chain(p, () =>
 * constant(x))`.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */

const value = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, x) : tuple;
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `left(p1, p2)` is an optimized implementation of `chain(p1, x =>
 * value(p2, x))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */

const left = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p2(next1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, result1.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `right(p1, p2)` is an optimized implementation of `chain(p1, () =>
 * p2)`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */

const right = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p2(next1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail, and the failure will
 * be fatal if any input had been consumed by either parser.
 *
 * `both(p1, p2)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => constant([a, b])))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const both = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p2(next1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, [result1.value, result2.value]) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `seq`, `null` parser results are *not* discarded.
 * This ensures that the same number of arguments are passed to `fn` no
 * matter the results from the parsers.
 *
 * `pipe([p1, p2], fn)` is an optimized implementation of `chain(p1, a
 * => chain(p2, b => constant(fn(a, b))))`, `pipe([p1, p2, p3], fn)` is
 * an optimized implementation of `chain(p1, a => chain(p2, b =>
 * chain(p3, c => constant(fn(a, b, c)))))`, and so on.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {Parser[]} ps An array of parsers to be applied one at a time,
 *     in order.
 * @param {function(...*):*} fn A function which will receive as
 *     parameters the results of each parser. Its return value will
 *     become the result of the created parser.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipe = (ps, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const values = [];
  let next = state;

  for (const p of ps) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, fn(...values));
});
/**
 * Creates a parser which applies its before, content, and after parsers
 * in order and results in the result of its content parser.
 *
 * Note that the content parser `p` is applied before the after parser
 * `pafter`. This means that the content parser will have an opportunity
 * to patch the "after" content before the after parser does, so take
 * care that the parsers do not overlap in what they match.
 *
 * `between(pre, post, p)` is an optimized implementation of
 * `left(right(pre, p), post)`.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */

const between = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(pre(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p(next1);

  if (result2.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
  }

  const [next3, result3] = post(next2);
  return result3.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next3, result2.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next3.index !== index, next3, result3.errors);
});
/**
 * Returns the nth element of the result of a parser that produces an
 * array. If the parser fails, that failure will be passed through.
 *
 * `nth(p, n)` is an optimized implementation of `chain(p, x =>
 * constant(x[n]))`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */

const nth = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[n]) : reply;
});
/**
 * Returns the first element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `first(p)` is an optimized implementation of `chain(p, x =>
 * constant(x[0]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */

const first = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[0]) : reply;
});
/**
 * Returns the second element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `second(p)` is an optimized implementation of `chain(p, x =>
 * constant(x[1]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */

const second = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[1]) : reply;
});
/**
 * Returns the third element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `third(p)` is an optimized implementation of `chain(p, x =>
 * constant(x[2]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */

const third = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[2]) : reply;
});
/**
 * Returns the fourth element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `fourth(p)` is an optimized implementation of `chain(p, x =>
 * constant(x[3]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */

const fourth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[3]) : reply;
});
/**
 * Returns the fifth element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `fifth(p)` is an optimized implementation of `chain(p, x =>
 * constant(x[4]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */

const fifth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value[4]) : reply;
});

/***/ }),

/***/ "./src/combinators/conditional.js":
/*!****************************************!*\
  !*** ./src/combinators/conditional.js ***!
  \****************************************/
/*! exports provided: lookAhead, notEmpty, notEmptyL, followedBy, followedByL, notFollowedBy, notFollowedByL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return lookAhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmptyL", function() { return notEmptyL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followedBy", function() { return followedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followedByL", function() { return followedByL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return notFollowedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFollowedByL", function() { return notFollowedByL; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that applies the supplied parser. If that parser
 * succeeds, its result becomes the result of the returned parser.
 * Either way, no input is consumed. This is used to determine whether
 * the next character(s) satisfy the parser without actually consuming
 * the input to find out.
 *
 * As a side effect, any fatal parse error will be transformed into a
 * non-fatal one, since no input is being consumed.
 *
 * @param {Parser} p The parser to be applied.
 * @returns {Parser} A parser that applies `p` and succeeds or fails
 *     with it, but which consumes no input either way.
 */

const lookAhead = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors, index);
});
/**
 * Creates a parser that fails if the provided parser succeeds but does
 * not consume input. If the parser succeeds any other way or fails,
 * this parser transparently passes that result along.
 *
 * This effect is useful for turning a parser into one which must match
 * at least once. For instance, one could implement `many1(p)` with
 * `notEmpty(many(p))`.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notEmptyL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */

const notEmpty = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status !== Ok || next.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next);
});
/**
 * Creates a parser that fails if the provided parser succeeds but does
 * not consume input. If the parser succeeds any other way or fails,
 * this parser transparently passes that result along.
 *
 * This effect is useful for turning a parser into one which must match
 * at least once. For instance, one could implement `many1(p)` with
 * `notEmpty(many(p))`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` succeeds
 *     without consuming input.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */

const notEmptyL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status !== Ok || next.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg));
});
/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser state. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `followedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const followedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, undefined, index);
});
/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser state. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const followedByL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg), index);
});
/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser state. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notFollowedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser state, whether or not `p`
 *     succeeds.
 */

const notFollowedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, undefined, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
});
/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser state. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p`
 *    succeeds.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const notFollowedByL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg), index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
});

/***/ }),

/***/ "./src/combinators/message.js":
/*!************************************!*\
  !*** ./src/combinators/message.js ***!
  \************************************/
/*! exports provided: label, backLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backLabel", function() { return backLabel; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];
const {
  Nested
} = kessel_error__WEBPACK_IMPORTED_MODULE_1__["ErrorType"];
/** @typedef {import('kessel/core').Parser} Parser */

function pass(state, result, errors) {
  return [{ ...state
  }, { ...result,
    errors
  }];
}
/**
 * Creates a parser that applies the supplied parser. If that parser
 * consumes input, nothing additional happens. Otherwise, the original
 * parser's result is retained but the error is overwritten by the
 * supplied message as an expected error.
 *
 * This can be used to provide better error messages in cases where the
 * automatically generated error messages are insufficient.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new `Expected` error message if `p` fails.
 * @returns {Parser} A parser that applies `p` and passes its results
 *     through except for changing its `Expected` error message upon
 *     failure.
 */


const label = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return index === next.index ? pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg)) : reply;
});
/**
 * Creates a parser that applies the supplied parser. If that parser
 * succeeds, that success is passed through, though if it didn't consume
 * any input, the provided string will be used to create an expected
 * error message.
 *
 * If the original parser fails, what happens depends on whether that
 * failure consumed input. If it did not, the supplied message
 * overwrites the original error message just as with `label`. If it
 * *did* consume input, the state is reset to the state before the
 * parser was applied, the error is set to a compound error using the
 * supplied message (with the nested error being the original error that
 * came from the failure point), and a fatal error is returned.
 *
 * This is one of the few places where a fatal error happens after
 * backtracking.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be
 *     an `Expected` error if no input was consumed, or a `Compound`
 *     error if it was.
 * @returns {Parser} A parser that applies `p` and changes the error
 *     as appropriate if `p` fails.
 */

const backLabel = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));

  if (result.status === Ok) {
    return index === next.index ? pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg)) : reply;
  } else if (index === next.index) {
    if (result.errors.length === 1 && result.errors[0].type === Nested) {
      const {
        state,
        errors
      } = result.errors[0];
      return pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["compound"])(msg, state, errors));
    }

    return pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(msg));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["compound"])(msg, next, result.errors));
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: sequence, block, many, many1, skipMany, skipMany1, sepBy, sepBy1, sepEndBy, sepEndBy1, count, manyTill, assocl, assocl1, assocr, assocr1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many", function() { return many; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return many1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return skipMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return skipMany1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepBy", function() { return sepBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepBy1", function() { return sepBy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepEndBy", function() { return sepEndBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return sepEndBy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return manyTill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocl", function() { return assocl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocl1", function() { return assocl1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocr", function() { return assocr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocr1", function() { return assocr1; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



/** @typedef {import('kessel/core').Parser} Parser */

const {
  Ok,
  Error,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];

function loopMessage(name) {
  return `[${name}]: infinite loop detected; ` + 'neither content nor separator parser consumed input';
}
/**
 * Creates a parser that implements a sequence. Each supplied parser is
 * executed in order until either they all succeed or the first one
 * fails. In the former case, all results are merged into an array that
 * becomes the returned parser's result.
 *
 * The returned parser may fail fatally even if the unsuccessful
 * contained parser fails non-fatally. This will happen if any previous
 * parser succeeded and consumed input. Essentially, if the returned
 * parser consumes anything and then fails, it will fail fatally.
 *
 * @param {...Parser} ps The parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */


const sequence = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that executes a block of code in the form of a
 * generator function. Inside that function, parsers that are `yield`ed
 * will be executed and will evaluate to their results (which can then
 * be assigned to variables, etc.). If any of these parsers fail,
 * `block` will also fail with that failure. This failure will be fatal
 * if any input was consumed.
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause undefined behavior.
 *
 * @param {function():*} genFn A generator function that takes no
 *     arguments and returns whatever should be used as the returned
 *     parser's result. This generator function can `yield` only
 *     `Parser`s; yielding anything else will cause incorrect behavior
 *     depending on what exactly is yielded.
 * @returns {Parser} A parser that executes the generator function,
 *     applies parsers as they are yielded, and results (if all parsers
 *     succeed) in the return value of the generator.
 */

const block = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const gen = genFn();
  const index = state.index;
  let nextValue;
  let next = state;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value);
    const [nextState, result] = value(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    nextValue = result.value;
  }
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful non-null results into an array and
 * providing that as its own result. The returned parser only fails if
 * the supplied parser consumes input when it fails. Otherwise, it
 * succeeds even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const values = [];
  let next = state;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful non-null results into an array and
 * providing that as its own result. The contained parser must succeed
 * at least once, or the returned parser will fail. Otherwise, the
 * returned parser only fails if the supplied parser consumes input when
 * it fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return tuple;
  let next = nextState;
  const values = [result.value];

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The returned parser only
 * fails if the supplied parser consumes input when it fails. Otherwise,
 * it succeeds even if the supplied parser doesn't succeed even once.
 *
 * @param {Parser} p A parser to be applied zero or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let next = state;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * discarding all of the successful results. The contained parser must
 * succeed at least once, or the returned parser will fail. Otherwise,
 * the returned parser only fails if the supplied parser consumes input
 * when it fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Successful results are discarded.
 */

const skipMany1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  let next = nextState;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between. The
 * content parser can match zero times, so the only way for this parser
 * to fail is for one of its parsers to fail fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepBy'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values, index);
});
/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between. The
 * content parser must succeed at leeast once or a non-fatal failure
 * will occur. Otherwise, the parser can only fail if one of its parsers
 * fails fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepBy1'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values, index);
});
/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between and
 * optionally at the end. The content parser can match zero times, so
 * the only way for this parser to fail is for one of its parsers to
 * fail fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepEndBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepEndBy'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...next,
    index
  });
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(sepNext, values);
});
/**
 * Creates a parser that gathers values from a content parser,
 * interspersing applications of a separator parser in between and
 * optionally at the end. The content parser must succeed at leeast once
 * or a non-fatal failure will occur. Otherwise, the parser can only
 * fail if one of its parsers fails fatally.
 *
 * Content parser results are gathered into an array, which becomes the
 * result for the returned parser. The results of the separator parser
 * are discarded.
 *
 * If the separator and content parsers both pass without consuming
 * content, that would cause an infinite loop. In this case, an
 * exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} sep A parser that will match separators between the
 *     chunks of content.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sepEndBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepEndBy1'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...next,
    index
  });
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(sepNext, values);
});
/**
 * Creates a parser that applies the supplied parser `n` times,
 * collecting the successful results into an array. If any application
 * fails, the overall parser will fail; if input is consumed before or
 * during that failure, the failure will be fatal.
 *
 * @param {Parser} p A parser to apply multiple times.
 * @param {number} n The number of times to apply the parser.
 * @returns {Parser} A parser that applies `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const count = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const values = [];
  let next = state;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(n)) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser which applies its content parser zero or more times
 * until its end parser is successful. This parser results in an array
 * of all of the successful content parser results. The end parser is
 * applied *first*, so it's fine to have the two parsers overlap. For
 * example, `manyTill(any, letter)` will work fine, because `letter`
 * will be tried first on each character (contrast with `between(letter,
 * any, letter)`, which will never succeed becuase the `any` is applied
 * before the final `letter` and will therefore consume a letter before
 * the `letter` parser gets to see it).
 *
 * If the content parser fails before the end parser does, the overall
 * parser will fail (fatally if input had already been consumed). A
 * fatal error by either parser will result in a fatal error for the
 * overall parser.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} end The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @returns {Parser} A parser which will apply the content zero or more
 *     times until the end parser succeeds.
 */

const manyTill = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const values = [];
  let next = state;

  while (true) {
    const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(end(next));
    next = next1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = next2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["merge"])(result2.errors, result1.errors));
    }

    if (result2.value !== null) values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that parses zero or more applications of `p`
 * separated by `op`. It results in the value obtained by left
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */

const assocl = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value, index);
});
/**
 * Creates a parser that parses one or more applications of `p`
 * separated by `op`. It results in the value obtained by left
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless either one of its two parsers fails
 * fatally or the content parser does not succeed at least once. If
 * there is one match of `p` but no matches of `op`, then that result of
 * `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` left associtively to the values
 *     that result from `p`.
 */

const assocl1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value, index);
});
/**
 * Creates a parser that parses zero or more applications of `p`
 * separated by `op`. It results in the value obtained by right
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `op`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */

const assocr = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value, index);
});
/**
 * Creates a parser that parses one or more applications of `p`
 * separated by `op`. It results in the value obtained by right
 * associative application of the functions that are the `op` results to
 * the results of `p`.
 *
 * The parser does not fail unless either one of its two parsers fails
 * fatally or the content parser does not succeed at least once. If
 * there is one match of `p` but no matches of `op`, then that result of
 * `p` becomes the overall result.
 *
 * If any result of `op` is not a function, an exception will be thrown
 * when this parser tries to call that result as a function.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} op The operation parser to match in between each
 *     application of `p`.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `op` and result in the value obtained by
 *     applying the functions from `op` right associtively to the values
 *     that result from `p`.
 */

const assocr1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value, index);
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: Status, makeState, makeParser, ok, error, fatal, maybeFatal, parse, succeeded, result, failure, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeState", function() { return makeState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeParser", function() { return makeParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return ok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error", function() { return error; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return fatal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maybeFatal", function() { return maybeFatal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "succeeded", function() { return succeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "result", function() { return result; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return failure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


/** @typedef {import('./error.js').ErrorList} ErrorList */

/**
 * Determines whether the input value is an instance of one of the types
 * of typed arrays.
 *
 * @param {*} value The value to test.
 * @returns {boolean} Whether or not `value` is a typed array.
 */

function isTypedArray(value) {
  return value instanceof Uint8Array || value instanceof Uint8ClampedArray || value instanceof Uint16Array || value instanceof Uint32Array || value instanceof Int8Array || value instanceof Int16Array || value instanceof Int32Array || value instanceof Float32Array || value instanceof Float64Array;
}
/**
 * A symbol representing the status of the last parsing operation.
 * @enum {symbol}
 */


const Status = {
  /** Indicates that the last parse was successful. */
  Ok: Symbol('ok'),

  /** Indicates that the last parse failed without consuming input. */
  Error: Symbol('error'),

  /** Indicates that the last parse failed and consumed input. */
  Fatal: Symbol('fatal')
};
/**
 * The current state of a parser. This object contains the input text
 * and a pointer to the current location within it.
 *
 * @typedef {object} State
 * @property {DataView} view The data view containing the input text.
 * @property {number} index The index within the data view where the
 *     next parsing operation will take place (or where the last one
 *     resulted in an error).
 */

/**
 * A result from a parser application, successful or not. This is
 * essentially a union of successful value and failure error, with the
 * `status` property to determine which is valid.
 *
 * @typedef {object} Result
 * @property {Status} status The status of the last attempted parse of
 *     the input text.
 * @property {*} value The value of a successful parse.
 * @property {ErrorList} errors A list of errors that occurred
 *     during an unsuccessful parse.
 */

/**
 * @typedef {(
 *   Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Int8Array|
 *   Int16Array|Int32Array|Float32Array|Float64Array
 * )} TypedArray
 */

/**
 * Creates a new, empty parser state. This is not exported because a new
 * state is only created before parsing, in the `parse` function. Any
 * further states are derived from the initial state using {@link ok},
 * {@link error}, or {@link fatal}.
 *
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {State} An empty parser state object.
 */

function makeState(input) {
  const message = 'Parser input must be a string, a typed array, an array ' + `buffer, or a data view; parser input was ${typeof input}`;

  const view = (input => {
    if (typeof input === 'string') {
      return Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringToView"])(input);
    }

    if (isTypedArray(input)) {
      return new DataView(input.buffer);
    }

    if (input instanceof ArrayBuffer) {
      return new DataView(input);
    }

    if (input instanceof DataView) {
      return input;
    }

    throw new Error(message);
  })(input);

  return {
    view,
    index: 0
  };
}
/**
 * A parsing function. This is simply a function that takes a parser
 * state, updates it somehow (generally by reading a character), and
 * returns the updated state.
 *
 * @callback Parser
 * @param {State} state The state before the parser is run.
 * @returns {[State, Result]} The updated state after the parser is
 *     applied and the result of that parser application.
 */

/**
 * Creates a new `Parser`. This factory simply takes a parser
 * function and returns it; it's here in case something more needs to be
 * done in parser creation. This has happened in the past and very
 * likely will again happen in the future.
 *
 * While it is not currently so, there have been times when behavior of
 * functions produced by this factory differed from general functions.
 * Because of the possibility that this could return, it's suggested to
 * use this function to produce all parsers rather than producing them
 * by hand.
 *
 * @param {Parser} fn A parser function.
 * @returns {Parser} The same parser function.
 */

function makeParser(fn) {
  return fn;
}
/**
 * Produces a new `Result` indicating that a parse succeeded, as well as
 * a `State` potentially with an updated `index`.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {*} [value=null] The new result of the parser application.
 * @param {number} [index=state.index] The updated index after the
 *     parser was applied.
 * @returns {[State, Result]} A new object representing the state and
 *     result after the latest parser succeeded.
 */

function ok(state, value = null, index = state.index) {
  return [{ ...state,
    index
  }, {
    status: Status.Ok,
    value
  }];
}
/**
 * Produces a new `Result` indicating that a parse failed without
 * consuming input, as well as a copy of `State`.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {ParseError[]} [errors=[]] The errors associated
 *     with the state after the latest parser was applied.
 * @param {number} [index=state.index] The updated index after the
 *     latest parser was applied.
 * @returns {[State, Result]} A new object representing the state and
 *     result after the latest parser failed.
 */

function error(state, errors = [], index = state.index) {
  return [{ ...state,
    index
  }, {
    status: Status.Error,
    errors
  }];
}
/**
 * Produces a new `Result` indicating that a parse failed while
 * consuming input, as well as a new `State` with an updated `index`.
 *
 * @param {State} state The state prior to the parser being applied.
 * @param {ParseError[]} [errors=[] The errors associated
 *     with the state after the latest parser was applied.
 * @param {number} [index=state.index] The updated index after the
 *     latest parser was applied.
 * @returns {[State, Result]} A new object representing the state and
 *     result after the latest parser failed.
 */

function fatal(state, errors = [], index = state.index) {
  return [{ ...state,
    index
  }, {
    status: Status.Fatal,
    errors
  }];
}
/**
 * Produces a new `Result` indicating that a parser applicatoin failed.
 * Whether this is a fatal error or not depends on whether `test` is
 * `true` (fatal) or `false` (non-fatal).
 *
 * @param {boolean} test Used to determine whether the produced result
 *     represents a fatal error (`true`) or not (`false`).
 * @param {State} state The state prior to the parser being applied.
 * @param {ParseError[]} [errors=[] The errors associated
 *     with the state after the latest parser was applied.
 * @param {number} [index=state.index] The updated index after the
 *     latest parser was applied.
 * @returns {[State, Result]} A new object representing the state and
 *     result after the latest parser failed.
 */

function maybeFatal(test, state, errors = [], index = state.index) {
  return [{ ...state,
    index
  }, {
    status: test ? Status.Fatal : Status.Error,
    errors
  }];
}
/**
 * Applies a parser to input. This input can be a string, a typed array,
 * an array buffer, or a data view. The return value is the final parser
 * state returned by the parser after being run.
 *
 * @param {Parser} parser The parser to be applied to the input. This
 *     can, as always, be a composition of an arbitrary number of
 *     parsers and combinators.
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {[State, Result]} The final state after all parsers have
 *     been applied and the result of the final parser application.
 */

function parse(parser, input) {
  return parser(makeState(input));
}
/**
 * Determines whether an invocation of `parse` was successful.
 *
 * @param {[State, Result]} reply The state/result value returned by
 *     `parse`.
 * @returns {boolean} `true` if the parser succeeded or `false` if it
 *     did not.
 */

function succeeded(reply) {
  return reply[1].status === Status.Ok;
}
/**
 * Extracts the result from the value returned by `parse`. If the parser
 * did not succeed, this will return `null` instead.
 *
 * Note that `null` is a possible result from some individual parsers
 * (`skip`, `lookAhead`, etc.). The proper way to tell if a parser
 * succeeded in the first place is to use `succeeded`.
 *
 * @param {[State, Result]} reply The state/result value returned by
 *     `parse`.
 * @returns {*} The resulting value from the parse if it was successful,
 *     or `null` if it was not.
 */

function result(reply) {
  return succeeded(reply) ? reply[1].value : null;
}
/**
 * Extracts the error message as a string from the value returned by
 * an unsuccessful invocation of `parse`. If the parser was actually
 * successful, this will return `null` instead.
 *
 * @param {[State, Result]} reply The state/result value returned by
 *     `parse`.
 * @returns {string} A formatted string detailing the circumstances of
 *     the parser failure.
 */

function failure(reply) {
  return succeeded(reply) ? null : Object(_error__WEBPACK_IMPORTED_MODULE_0__["formatErrors"])(...reply);
}
/**
 * Applies a parser to input. Returns the parsed value if the parser
 * succeeds, or throws an exception with the parser's error message if
 * it fails.
 *
 * @param {Parser} parser The parser to be applied to the input. This
 *     can, as always, be a composition of an arbitrary number of
 *     parsers and combinators.
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {*} The result from the parser application, if the parser
 *     succeeds.
 * @throws {Error} If the parser fails. The error message will be a
 *     detailed record of where the error occurred.
 */

function run(parser, input) {
  const [state, result] = parser(makeState(input));

  if (result.status === Status.Ok) {
    return result.value;
  }

  throw new Error(Object(_error__WEBPACK_IMPORTED_MODULE_0__["formatErrors"])(state, result));
}

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! exports provided: ErrorType, expected, unexpected, generic, other, nested, compound, merge, isNewline, getLineIndexes, getCharIndex, tabify, getColNumber, show, format, formatErrors, getPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expected", function() { return expected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unexpected", function() { return unexpected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generic", function() { return generic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "other", function() { return other; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nested", function() { return nested; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compound", function() { return compound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewline", function() { return isNewline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineIndexes", function() { return getLineIndexes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCharIndex", function() { return getCharIndex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tabify", function() { return tabify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColNumber", function() { return getColNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "show", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatErrors", function() { return formatErrors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return getPosition; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/** @typedef {import('./core.js').State} State */

/** @typedef {import('./core.js').Result} Result */

const tab = /\t/gu;
const zeroWidth = /(?:\p{Mn}|\p{Cf})/gu;
/**
 * A symbol defining the type of an error.
 * @enum {symbol}
 */

const ErrorType = {
  /**
   * Error type representing an expected result. Produced by the vast
   * majority of parsers.
   */
  Expected: Symbol('expected'),

  /**
   * Error type representing a result that was not expected. Typically
   * produced by parsers such as `unexpected` and `notFollowedBy`.
   */
  Unexpected: Symbol('unexpected'),

  /**
   * Error type representing a generic error message. Typically produced
   * by parsers such as `fail` and `failFatally`.
   */
  Generic: Symbol('generic'),

  /**
   * Error type representing an error within another error. This is
   * generally used for an error that caused backtracking, where the
   * parent error is reported after backtracking.
   */
  Nested: Symbol('nested'),

  /**
   * Error type representing a nested error with its own separate error
   * message. This is produced specifically by the `compound` parser.
   */
  Compound: Symbol('compound'),

  /**
   * Error type representing some other kind of error message to be
   * displayed in a custom error formatter.
   */
  Other: Symbol('other')
};
/**
 * A list of errors. This can consist of any error messages that apply
 * to a particular index or nested/compound errors that point back to
 * the same index but apply to a different one.
 * @typedef {(NestedError|CompoundError|LocalError)[]} ErrorList
 */

/**
 * An error that happens at the location referred to by the current
 * state. The type is used to determine where the label should be
 * positioned in the error message.
 *
 * @typedef {object} LocalError
 * @property {ErrorType} type The error type.
 * @property {string} label The message associated with the error.
 */

/**
 * An error that happens in a different location than the one referred
 * to by the current state. The most typical reason for this happening
 * is backtracking; the local error can track the current
 * (post-backtrack) location while the nested error retains informtion
 * from the error that caused the backtracking in the first place.
 *
 * @typedef {object} NestedError
 * @property {ErrorType} type The error type. This will always be
 *     `ErrorType.Nested`.
 * @property {State} state The state at the time that the original error
 *     occurred. This can (and probably will) be different from the
 *     current state.
 * @property {ErrorList} errors A list of errors that occurred at the
 *     location derived from `state`.
 */

/**
 * A nested error that has its own label. This is simply for producing
 * nicer error messages; this error is typically only produced by the
 * `backlabel` parser.
 *
 * @typedef {object} CompoundError
 * @property {ErrorType} type The error type. This will always be
 *     `ErrorType.Compound`.
 * @property {string} label The message associated with this error. This
 *     is typically used as a sort of header over the nested messages
 *     under this compound error.
 * @property {State} state The state at the time that the original error
 *     occurred. This can (and probably will) be different from the
 *     current state.
 * @property {ErrorList} errors A list of errors that occurred at the
 *     location derived from `state`.
 */

/**
 * Creates a new error list containing one expected error message.
 *
 * @param {string} label The message describing what was expected.
 * @returns {[LocalError]} A new error message of the expected type.
 */

function expected(label) {
  return [{
    type: ErrorType.Expected,
    label
  }];
}
/**
 * Creates an unexpected error message. It is expected that one array of
 * error messages may have multiple unexpected errors, but only the
 * first will be displayed by the default formatter.
 *
 * @param {string} label The message describing what was found but was
 *     not expected.
 * @returns {[LocalError]} A new error message of the unexpected type.
 */

function unexpected(label) {
  return [{
    type: ErrorType.Unexpected,
    label
  }];
}
/**
 * Creates a generic error message. There can be more than one generic
 * error message in an array of error messages, but only the first will
 * be displayed by the default formatter.
 *
 * @param {string} label The generic error's message.
 * @returns {ErrorMessage} A new error message of the generic type.
 */

function generic(label) {
  return [{
    type: ErrorType.Generic,
    label
  }];
}
/**
 * Creates an other error. These errors are not displayed by the default
 * formatter at all and are only useful for custom formatters.
 *
 * @param {string} label The other error's message.
 * @returns {ErrorMessage} A new parse error of the other type.
 */

function other(label) {
  return [{
    type: ErrorType.Other,
    label
  }];
}
/**
 * Creates a nested error. This takes an error list and wraps it with
 * state information. If the supplied error list is just a single nested
 * error, that error is simply returned; a single nested error will not
 * be nested in another nested error.
 *
 * @param {State} state The state at the point where the nested error
 *     occurred.
 * @param {ErrorList} errors The list of errors that occurred at the
 *     position pointed to by the given state.
 * @returns {NestedError} A new nested error.
 */

function nested(state, errors) {
  return errors.length === 1 && errors[0].type === ErrorType.Nested ? errors : [{
    type: ErrorType.Nested,
    state,
    errors
  }];
}
/**
 * Creates a new compound error. This wraps an error list just as a
 * nested error does, except it also attaches a message to it. If the
 * supplied error list is just a single nested error, its information is
 * used to create a new compound error without any nested error.
 *
 * @param {string} label The message attached to the nested error.
 * @param {State} state The state at the point where the compound error
 *     occurred.
 * @param {ErrorList} errors The list of errors that occurred at the
 *     position pointed to by the given state.
 * @returns {CompoundError} A new compound error.
 */

function compound(label, state, errors) {
  return errors.length === 1 && errors[0].type === ErrorType.Nested ? [{
    type: ErrorType.Compound,
    state: errors.state,
    errors: errors.errors,
    label
  }] : [{
    type: ErrorType.Compound,
    state,
    errors,
    label
  }];
}
/**
 * Merges two arrays of errors.
 *
 * @param {ErrorList} errors1 The first array of errors.
 * @param {ErrorList} errors2 The second array of errors.
 * @returns {ErrorList} A new array containing all of the errors from
 *     the first two arrays.
 */

function merge(errors1, errors2) {
  return [...errors1, ...errors2];
} // #region Formatting utility functions
// #region Typedefs for object return types

/**
 * Object containing information about the evaluation of a byte to see
 * if it is (or starts) a newline.
 *
 * @typedef {object} NewlineInfo
 * @property {boolean} newline Indicates whether the scanned byte was
 *     either a newline or the beginning of a multi-byte newline.
 * @property {number} skip The number of bytes that the next character
 *     contains. This is returned accurately whether or not that
 *     character is a newline.
 */

/**
 * Object containing information about the start and end indexes of a
 * line within a data view, as well as the number of that line.
 *
 * @typedef {object} LineIndexInfo
 * @property {number} start The index within the data view of the first
 *     byte of the first character in a line. This is always the first
 *     byte of the data view itself, or the first byte after a newline
 *     character.
 * @property {number} end The index within the data view of the last
 *     byte of the last character in a line. This is either the last
 *     byte in the data view or the byte immediately preceding the first
 *     byte of a newline character.
 * @property {number} lineno The line number of the line bounded by
 *     indexes `start` and `end`. This number is 1-based, as it is used
 *     for display of an error position in the final error message.
 */

/**
 * Object containing the adjusted line and column index that results
 * from tab expansion.
 *
 * @typedef {object} TabbedLineInfo
 * @property {string} line The string of text representing one line,
 *     with tab characters replaced by the appropriate number of spaces.
 * @property {number} colIndex The character index passed into the
 *     function, adjusted by the difference in width between tabs and
 *     the spaces used to replace them.
 */

/**
 * Object contaning information about the adjusted column index and line
 * length after accounting for zero-width characters.
 *
 * @typedef {object} ColIndexInfo
 * @property {number} colno The adjusted column number of the character
 *     pointed to by the `charIndex` parameter. This is adjusted by any
 *     zero-width characters that may appear in the line and is turned
 *     into a 1-based number for display in the error message.
 * @property {number} length The length of the line, adjusted for
 *     zero-width characters. This is returned solely to be passed into
 *     other functions who then won't have to recalculate the width of
 *     the line accounting for those same zero-width characters.
 */

/**
  * Object containing line and column numbers.
  *
  * @typedef {object} Position
  * @property {number} line The line number of the byte pointed to by
  *     the index within the view.
  * @property {number} column The column number of the byte pointed to
  *     by the index within the view, adjusted for character width and
  *     tab size.
  */

/**
 * A function called by `formatErrors` to do the actual formatting. A
 * default formatter function is provided but can be replaced if
 * desired.
 *
 * @callback Formatter
 * @param {ParseError[]} errors The errors being used to generate the
 *     error message.
 * @param {number} index The index within `view` of the byte where the
 *     error occurred.
 * @param {DataView} view The data view containing the input text.
 * @param {number} tabSize A number whose multiples define where tabs
 *     stop.
 * @param {number} maxWidth The maximum display width of the line where
 *     the error occurred. If the line is longer than this, it will be
 *     truncated with ellipses before and/or after.
 * @returns {string} A multi-line formatted error message.
 */
// #endregion

/**
 * Determines whether the character at the given index in the supplied
 * view is a newline. An object with two properties is returned;
 * `newline` is a boolean that indicates whether that character is a
 * newline; `skip` is the width of the character (and therefore how many
 * bytes to skip until the next character to check).
 *
 * All Unicode newlines (CR, LF, FF, VT, NEL, LS, and PS) are handled,
 * along with the multi-character newline CR+LF.
 *
 * @param {number} index The index into `view` indicating the byte to
 *     check to see if it's a newline.
 * @param {DataView} view The data view containing the input text.
 * @returns {NewlineInfo} Newline information about the indexed byte.
 */

function isNewline(index, view) {
  const byte = view.getUint8(index);

  if (byte === 0x0a || byte === 0x0b || byte === 0x0c) {
    return {
      newline: true,
      skip: 1
    };
  }

  if (byte === 0x0d) {
    if (index < view.byteLength - 1) {
      const nextByte = view.getUint8(index + 1);

      if (byte === 0x0d && nextByte === 0x0a) {
        return {
          newline: true,
          skip: 2
        };
      }
    }

    return {
      newline: true,
      skip: 1
    };
  }

  if (index < view.byteLength - 1) {
    const nextByte = view.getUint8(index + 1);
    if (byte === 0xc2 && nextByte === 0x85) return {
      newline: true,
      skip: 2
    };

    if (index < view.byteLength - 2) {
      const thirdByte = view.getUint8(index + 2);

      if (byte === 0xe2 && nextByte === 0x80 && (thirdByte === 0xa8 || thirdByte === 0xa9)) {
        return {
          newline: true,
          skip: 3
        };
      }
    }
  }

  return {
    newline: false,
    skip: Object(_util__WEBPACK_IMPORTED_MODULE_0__["nextCharWidth"])(index, view)
  };
}
/**
 * Calculates the starting and ending indexes of the line in the given
 * view that contains the byte pointed at by `index`. It does this by
 * determining where newlines are and then figuring out which ones come
 * closest before and after the index. The number of newlines that came
 * before the index (and therefore the line number of the line with the
 * index) is also counted.
 *
 * Returns an object with three properties: `start` is the index of the
 * first byte of the line, `end` is the index of the last byte of the
 * line (not counting the newline), and `lineno` is the line number
 * where the index appears. `lineno` is 1-indexed since it is meant for
 * display in the final error message.
 *
 * @param {number} index The index of the byte in `view` whose line
 *     index information is being determined.
 * @param {DataView} view The data view containing the input text.
 * @returns {LineIndexInfo} Information about the starting and ending
 *     indexes of the line containing the byte pointed to by `index`.
 */

function getLineIndexes(index, view) {
  let start = 0;
  let lineno = 1; // 1-based

  let i = 0;

  while (i < view.byteLength) {
    const {
      newline,
      skip
    } = isNewline(i, view);

    if (newline) {
      if (i + skip > index) {
        return {
          start,
          end: i - 1,
          lineno
        };
      }

      lineno++;
      start = i + skip;
    }

    i += skip;
  }

  return {
    start,
    end: view.byteLength - 1,
    lineno
  };
}
/**
 * Calculates the character index (as opposed to byte index) within a
 * single line of text of the character pointed to by `index` within
 * `view`. The `start` parameter sets the first byte of a "line" within
 * the view and can be calculated with {@link getLineIndexes} above.
 *
 * In lines with only single-byte characters, the character index will
 * always be the same as `index - start`. The purpose of this function
 * is to adjust when multi-byte characters are present.
 *
 * @param {number} index The index of the byte in `view` whose character
 *     index is being determined.
 * @param {DataView} view The data view containing the input text.
 * @param {number} start The index of the first byte of the line
 *     containing the byte pointed to by `index`.
 * @returns {number} The index, within a single line of text, of the
 *     character whose first byte is being pointed to by `index`.
 */

function getCharIndex(index, view, start) {
  let charIndex = 0;
  let byteIndex = start;

  while (byteIndex < index && byteIndex < view.byteLength) {
    byteIndex += Object(_util__WEBPACK_IMPORTED_MODULE_0__["nextCharWidth"])(byteIndex, view);
    charIndex++;
  }

  return charIndex;
}
/**
 * Expands tabs into spaces and calculates the column index of the
 * indexed character adjusting for those spaces. The number of spaces in
 * each tab can be specified with `tabSize`.
 *
 * The return value is an object with two properties: `line` is the
 * input line with tabs expanded into spaces, and `colIndex` is the
 * index of the column that has the character pointed at by the
 * character index.
 *
 * @param {number} charIndex The index of the character being pointed at
 *     within the line.
 * @param {string} line The line of text being tabified.
 * @param {number} tabSize The maximum number of spaces that can replace
 *     a tab. Note that tabs are treated as stops; they will be of
 *     varying sizes that results in them always ending at a column that
 *     is a multiple of `tabSize`.
 * @returns {TabbedLineInfo} Information about the line after replacing
 *     tabs with spaces.
 */

function tabify(charIndex, line, tabSize) {
  const tabIndexes = [];
  let tabMatch = tab.exec(line);

  while (tabMatch !== null) {
    tabIndexes.push(tabMatch.index);
    tabMatch = tab.exec(line);
  } // replace each tab with the corect number of spaces, shifting the
  // remaining indexes by that amount


  let offset = 0;
  let preIndexOffset = 0;
  let result = line;

  for (const tabIndex of tabIndexes) {
    const actualIndex = tabIndex + offset;
    const spaceCount = tabSize - actualIndex % tabSize;

    if (actualIndex < charIndex + preIndexOffset) {
      preIndexOffset += spaceCount - 1;
    }

    offset += spaceCount - 1;
    result = result.substring(0, actualIndex) + ' '.repeat(spaceCount) + result.substring(actualIndex + 1);
  }

  return {
    line: result,
    colIndex: preIndexOffset + charIndex
  };
}
/**
 * Calculates the final column number of the character being pointed to
 * by the column index. This column number is 1-based (for display, the
 * same as the line number from `getLineIndexes`) and is adjusted for
 * zero-width characters such as formatting characters and non-spacing
 * marks.
 *
 * The return value is an object of two propeties: `colno` is the
 * 1-indexed column number, and `length` is the length of the line
 * adjusting for zero-width characters. The latter is provided so it
 * doesn't have to be recalculated by `show`.
 *
 * @param {number} colIndex The index of the column within the line
 *     containing the character being pointed at.
 * @param {string} line The line of text potentially containing
 *     zero-width characters to account for.
 * @returns {ColIndexInfo} Information about the adjusted line.
 */

function getColNumber(colIndex, line) {
  let index = colIndex;
  const matches = [];
  let match = zeroWidth.exec(line);

  while (match !== null) {
    matches.push(match.index);
    if (match.index < index) index--;
    match = zeroWidth.exec(line);
  }

  return {
    colno: index + 1,
    // 1-based
    length: Object(_util__WEBPACK_IMPORTED_MODULE_0__["charLength"])(line) - matches.length
  };
}
/**
 * Generates a string containing one line that is the text at and around
 * the column to be displayed, and one line that is a caret pointing to
 * that particular column.
 *
 * This function adds ellipses as needed to the front and/or the back of
 * the line in order to get the column into the visible area, based on
 * the `maxWidth` of the line to display. The `length` parameter is the
 * `length` returned by `getColNumber` and is here just to avoid having
 * to recalculate it in this function when it already needed to be
 * calculated in the other.
 *
 * @param {string} line The line of text being formatted.
 * @param {number} length The length of the line, adjusted for tabs and
 *     zero-width characters.
 * @param {number} colno The column number where the caret should point.
 * @param {number} maxWidth The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @returns {string} The potentially truncated line of text, followed by
 *     another line containing a caret pointing at the designated
 *     column.
 */

function show(line, length, colno, maxWidth, indent = 0) {
  const sp = ' '.repeat(indent); // First case: the line is shorter than maxWidth. Display the line
  // with the caret positioned below it.

  if (colno <= maxWidth && length <= maxWidth) {
    return `${sp}${line}\n${sp}${' '.repeat(colno - 1)}^`;
  } // Second case: the line is longer than (maxWidth - 3) and the caret
  // points to a character in the first (maxWidth - 3) characters.
  // Display the first part of the line with `...` after it and position
  // the caret below it.


  if (colno <= maxWidth - 3) {
    return `${sp}${line.substring(0, maxWidth - 3)}...\n${sp}${' '.repeat(colno - 1)}^`;
  } // Third case: the line is longer than (maxWidth - 3) and the caret
  // points at a character that is not in the first (maxWidth - 3)
  // characters but is in the last (maxWidth - 3) characters. Display
  // the last part of the line with `...` before it, calculate a new
  // position for the caret, and position it below the line.


  if (colno >= length - maxWidth + 3) {
    const start = length - maxWidth + 3;
    const newColno = colno - (length - maxWidth);
    return `${sp}...${line.substring(start)}\n${sp}${' '.repeat(newColno - 1)}^`;
  } // Final case: the line is longer than maxWidth - 3 and the caret
  // does not point to a character within either the first or last
  // (maxWidth - 3) characters. Shift the line to make the caret point
  // at the middle of it, add `...` to the start *and* end, and position
  // the caret below it.


  const start = colno - 1 - Math.ceil(maxWidth / 2) + 3;
  const end = colno - 1 + Math.floor(maxWidth / 2) - 3;
  return `${sp}...${line.substring(start, end)}...\n${sp}${' '.repeat(Math.ceil(maxWidth / 2))}^`;
}
/**
 * Formats a set of nested (or compound) error messages.
 *
 * @param {(NestedError[]|CompoundError[])} nesteds An array of either
 *     nested or compound errors to format.
 * @param {number} tabSize A number whose multiples determine where tab
 *     stops lay.
 * @param {number} maxWidth The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {number} indent The number of spaces to indent the error
 *     message.
 * @returns {string} The formatted nested error message.
 */

function formatNested(nesteds, tabSize, maxWidth, indent) {
  const sp = ' '.repeat(indent);
  const nestedMsgs = nesteds.map(n => {
    const {
      index,
      view
    } = n.state;
    const label = n.label ? `\n${sp}${n.label} could not be parsed because:\n\n` : `\n${sp}The parser backtracked after:\n\n`;
    return label + format(n.errors, index, view, tabSize, maxWidth, indent + 2);
  });
  return nestedMsgs.join('');
}
/**
 * Ensures that a string ends with a certain number of newlines.
 *
 * @param {string} text The string that is supposed to have a certain
 *     number of newlines at the end.
 * @param {number} count The number of newlines.
 * @returns {string} The same string, but with `count` newlines at the
 *     end.
 */


function ensureNewlines(text, count) {
  let result = text;

  while (result[result.length - 1] === '\n') {
    result = result.substring(0, result.length - 1);
  }

  return result + '\n'.repeat(count);
}
/**
 * The default formatter for error messages.
 *
 * This function returns a string that has the following parts:
 *
 * 1. A position line that gives the line number and column number where
 *    the error occurred.
 * 2. A visual representation of the error location. This part generates
 *    two lines in the error message. The first is either the entire
 *    input line or, if that's too long, a portion of the input line
 *    started and/or ended with ellipses that contains the error
 *    location. The second is a caret positioned underneath the location
 *    in the first line that shows exactly where the error occurred.
 * 3. The first unexpected error message, if any.
 * 4. All of the expected error messages (if any), separated by 'or' and
 *    commmas as appropriate for the number of messages.
 * 5. The first of the generic messages, if any.
 *
 * The position of the error is indicated by the `index` parameter,
 * which is the index within the array of bytes in `view` where the
 * error occurred. The calculation of line and column number from this
 * flat array of bytes takes the following into account:
 *
 * * Multi-byte characters (everything is UTF-8 aware, so characters can
 *   be 1, 2, 3, or 4 bytes long)
 * * Multi-character and single-character multi-byte line endings
 * * Tabs, which are expanded into a number of spaces set by the
 *   `tabSize` parameter
 * * Zero-width characters, such as zero-width spaces and joiners, RTL
 *   or LTR formatting characters, and diacritics (Hebrew or Thai vowel
 *   marks, umlauts over Latin characters, etc.)
 *
 * The output is a single string that contains the 5 elements above.
 *
 * ### Example
 *
 * The following two lines of code uses `stringToView`, an internal
 * utility function that, as its name suggests, turns a string into a
 * UTF-8 data view. It's called by `parse` itself, so in real world
 * usage, it's not necessary to know.
 *
 * ```
 * const view = stringToView('\tOnomatopoeia\t\t\t\tคำเลียนเสียง')
 * const message = format([expected('a digit')], 29, view, 4, 72)
 * ```
 *
 * From this call to `format`, the following multi-line string will be
 * produced:
 *
 * ```
 * Parse error at (line 1, column 37):
 *
 *     Onomatopoeia                คำเลียนเสียง
 *                                     ^
 * Expected a digit
 * ```
 *
 * @param {ErrorList} errors The list of errors to be formatted.
 * @param {number} index The index in the view where the error occurred.
 * @param {DataView} view The data view containing the input text.
 * @param {number} tabSize A number whose multiples determine where tab
 *     stops lay.
 * @param {number} maxWidth The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {number} [indent=0] The number of spaces the message should be
 *     indented. This should be 0 and increased only for nested errors.
 * @returns {string} The formatted error message.
 */


function format(errors, index, view, tabSize, maxWidth, indent = 0) {
  const {
    start,
    end,
    lineno
  } = getLineIndexes(index, view);
  const charIndex = getCharIndex(index, view, start);
  const sp = ' '.repeat(indent);
  const rawLine = Object(_util__WEBPACK_IMPORTED_MODULE_0__["viewToString"])(start, end - start + 1, view);
  const {
    colIndex,
    line
  } = tabify(charIndex, rawLine, tabSize);
  const {
    colno,
    length
  } = getColNumber(colIndex, line);
  const position = `${sp}Parse error at (line ${lineno}, column ${colno}):`;
  const display = show(line, length, colno, maxWidth, indent);
  const generic = errors.find(error => error.type === ErrorType.Generic);
  const unexpected = errors.find(error => error.type === ErrorType.Unexpected);
  const expected = Object(_util__WEBPACK_IMPORTED_MODULE_0__["commaSeparate"])(errors.filter(error => error.type === ErrorType.Expected).map(error => error.label));
  const nested = errors.filter(error => error.type === ErrorType.Nested);
  const compound = errors.filter(error => error.type === ErrorType.Compound);
  const unexpMsg = unexpected ? `${sp}Unexpected ${unexpected.label}\n` : '';
  const expMsg = expected.length ? `${sp}Expected ${expected}\n` : '';
  const genericMsg = generic ? `${sp}${generic.label}\n` : '';
  const nestedMsg = formatNested(nested, tabSize, maxWidth, indent);
  const compoundMsg = formatNested(compound, tabSize, maxWidth, indent);
  return ensureNewlines(`${position}\n\n${display}\n${unexpMsg}${expMsg}${genericMsg}` + `${compoundMsg}${nestedMsg}`, 2);
} // #endregion

/**
 * Accepts a parser state and produces an error message from it.
 *
 * A default formatter is provided but an alternate one can be passed
 * in. The same goes for tab size (used to expand tabs in parsed text;
 * defaults to 8) and max width (for the error message itself; defaults
 * to 72).
 *
 * @param {State} state The parser's state when the error happened.
 * @param {Result} result The result produced when the error happened.
 * @param {number} [tabSize=8] A number whose multiples define where
 *     tabs stop.
 * @param {number} [maxWidth=72] The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {Formatter} [formatter=format] The function to which the
 *     actual formatting is delegated.
 */

function formatErrors(state, result, tabSize = 8, maxWidth = 72, formatter = format) {
  const {
    index,
    view
  } = state;
  return formatter(result.errors, index, view, tabSize, maxWidth);
}
/**
 * Returns the position of the next byte of the supplied state. The
 * position is an object with `line` and `column` properties that are
 * the 1-based line and column numbers of the byte at the state's index
 * within the state's data view.
 *
 * @param {State} state The state whose current position is being
 *     calculated.
 * @param {number} [tabSize=8] A number whose multiples define where
 *     tabs stop. The current position's column number is adjusted based
 *     on this parameter when tab characters are present.
 * @returns {Position} A two-property object with `line` and `column`
 *     properties.
 */

function getPosition(state, tabSize = 8) {
  const {
    index,
    view
  } = state;
  const {
    start,
    end,
    lineno
  } = getLineIndexes(index, view);
  const charIndex = getCharIndex(index, view, start);
  const rawLine = Object(_util__WEBPACK_IMPORTED_MODULE_0__["viewToString"])(start, end - start + 1, view);
  const {
    colIndex,
    line
  } = tabify(charIndex, rawLine, tabSize);
  const {
    colno,
    _
  } = getColNumber(colIndex, line);
  return {
    line: lineno,
    column: colno
  };
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, upper, constant, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, backtrack, blockB, bothB, chainB, choice, countB, fallback, leftB, manyTillB, optional, rightB, sequenceB, between, both, chain, fifth, first, fourth, join, left, map, nth, pipe, right, second, skip, third, value, followedBy, followedByL, lookAhead, notEmpty, notFollowedBy, notFollowedByL, backLabel, label, assocl, assocl1, assocr, assocr1, block, count, many, many1, manyTill, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Status, error, failure, fatal, makeParser, maybeFatal, ok, parse, result, run, succeeded, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsers_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/char */ "./src/parsers/char.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["alpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyOf", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["anyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "char", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["char"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chari", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["chari"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["digit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eof", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["eof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letter", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["letter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lower", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["lower"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noneOf", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["noneOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "octal", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["octal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["satisfy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upper", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["upper"]; });

/* harmony import */ var _parsers_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/misc */ "./src/parsers/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["constant"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["fail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["failFatally"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failUnexpected", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["failUnexpected"]; });

/* harmony import */ var _parsers_regex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parsers/regex */ "./src/parsers/regex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alphaU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["alphaU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letterU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["letterU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowerU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["lowerU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newline", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["newline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newlineU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["newlineU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["regex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaceU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaceU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaces", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaces1", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaces1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaces1U", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaces1U"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spacesU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spacesU"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upperU", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["upperU"]; });

/* harmony import */ var _parsers_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/string */ "./src/parsers/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyString", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["anyString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "string", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["string"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringi", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["stringi"]; });

/* harmony import */ var _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combinators/alternative */ "./src/combinators/alternative.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backtrack", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["backtrack"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["countB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fallback", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["fallback"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["rightB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["sequenceB"]; });

/* harmony import */ var _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/chaining */ "./src/combinators/chaining.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["both"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["fifth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["fourth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["nth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "second", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["second"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "third", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["third"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["value"]; });

/* harmony import */ var _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinators/conditional */ "./src/combinators/conditional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedBy", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["followedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedByL", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["followedByL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["lookAhead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedByL", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedByL"]; });

/* harmony import */ var _combinators_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/message */ "./src/combinators/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backLabel", function() { return _combinators_message__WEBPACK_IMPORTED_MODULE_7__["backLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _combinators_message__WEBPACK_IMPORTED_MODULE_7__["label"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocl", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocl1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocl1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocr", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocr1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocr1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["manyTill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany1"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["failure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeParser", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["makeParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeFatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["maybeFatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["ok"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "result", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["result"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["run"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "succeeded", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["succeeded"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compound", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["compound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expected", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["expected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatErrors", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["formatErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generic", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["generic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["getPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nested", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["nested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "other", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["other"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unexpected", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["unexpected"]; });

// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT
///////////////////////////////////////////////////////////////////////
// PARSERS



 ///////////////////////////////////////////////////////////////////////
// COMBINATORS





 ///////////////////////////////////////////////////////////////////////
// PARSER TOOLS AND UTILITIES




/***/ }),

/***/ "./src/messages.js":
/*!*************************!*\
  !*** ./src/messages.js ***!
  \*************************/
/*! exports provided: strings, expecteds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strings", function() { return strings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expecteds", function() { return expecteds; });
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const strings = {
  alpha: 'an alphanumeric character',
  alphaU: 'a Unicode alphanumeric character',
  any: 'any character',
  anyOf: array => 'any of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
  anyString: n => `a string of ${n} characters`,
  char: c => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(c),
  chari: c => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(c),
  digit: 'a digit',
  eof: 'end of input',
  hex: 'a hexadecimal digit',
  letter: 'a letter',
  letterU: 'a Unicode letter',
  lower: 'a lowercase letter',
  lowerU: 'a Unicode lowercase letter',
  newline: 'a newline',
  newlineU: 'a Unicode newline',
  noneOf: array => 'none of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
  octal: 'an octal digit',
  range: (start, end) => `a character between '${start}' and '${end}'`,
  regex: re => `a string matching ${re}`,
  satisfy: fn => {
    const name = fn.name.length ? fn.name : '<anonymous>';
    return `a character that satisfies function '${name}'`;
  },
  space: 'a whitespace character',
  spaces: 'zero or more whitespace characters',
  spaces1: 'one or more whitespace characters',
  spacesU: 'zero or more Unicode whitespace characters',
  spaces1U: 'one or more Unicode whitespace characters',
  spaceU: 'a Unicode whitespace character',
  string: str => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(str),
  stringi: str => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(str),
  upper: 'an uppercase letter',
  upperU: 'a Unicode uppercase letter'
};
const expecteds = {
  alpha: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.alpha),
  alphaU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.alphaU),
  any: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.any),
  anyOf: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.anyOf(array)),
  anyString: n => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.anyString(n)),
  char: c => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.char(c)),
  chari: c => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.chari(c)),
  digit: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.digit),
  eof: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.eof),
  hex: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.hex),
  letter: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.letter),
  letterU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.letterU),
  lower: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.lower),
  lowerU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.lowerU),
  newline: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.newline),
  newlineU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.newlineU),
  noneOf: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.noneOf(array)),
  octal: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.octal),
  range: (start, end) => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.range(start, end)),
  regex: re => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.regex(re)),
  satisfy: fn => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.satisfy(fn)),
  space: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.space),
  spaces: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaces),
  spaces1: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaces1),
  spacesU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spacesU),
  spaces1U: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaces1U),
  spaceU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaceU),
  string: str => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.string(str)),
  stringi: str => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.stringi(str)),
  upper: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.upper),
  upperU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.upperU)
};

/***/ }),

/***/ "./src/parsers/char.js":
/*!*****************************!*\
  !*** ./src/parsers/char.js ***!
  \*****************************/
/*! exports provided: char, chari, satisfy, range, any, eof, anyOf, noneOf, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chari", function() { return chari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return satisfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eof", function() { return eof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyOf", function() { return anyOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneOf", function() { return noneOf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return digit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return hex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "octal", function() { return octal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letter", function() { return letter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return alpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upper", function() { return upper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lower", function() { return lower; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that reads a single character, feeds it to a function, and
 * succeeds or fails based on the return value.
 *
 * There isn't anything here that couldn't be written with
 * `StringParser` instead, but when working with single characters there
 * are certain assumptions that can be made (such as the number of
 * characters that have to be read from the input view) that allow it to
 * be a little more efficient.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const CharParser = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state);
});
/**
 * Creates a parser that reads a single character from input and
 * succeeds if that character is `c`. Upon failure, this parser does not
 * consume input.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     always fail.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */


const char = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(next => c === next)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].char(c));
});
/**
 * Creates a parser that reads a single character from input and
 * succeeds if that character is `c`. This differs from `char` in that
 * the comparison done by this parser is case-insensitive. Upon failure,
 * this parser does not consume input.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     always fail.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */

const chari = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(read => c.toLowerCase() === read.toLowerCase())(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].chari(c));
});
/**
 * Creates a parser that reads a single character and passes it to the
 * provided function. If the function returns `true`, this parser
 * succeeds with that character as the result. If the function returns
 * `false`, this parser fails and consumes no input.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfy = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].satisfy(fn));
});
/**
 * Creates a parser that reads a single character and determines whether
 * it is between the provided start and end characters (inclusive). If
 * it is, the read character is the successful result, and if it is not,
 * the parser fails without consuming input.
 *
 * `start` and `end` are expected to be single characters. If they are
 * not, the full strings are compared against the next character, which
 * may cause unexpected behavior.
 *
 * "Between" is defined according to code points. This is fine in most
 * cases, but it can get weird with higher code points. For example,
 * there is no `h` in the set of mathematical lowercase italic symbols.
 * The `h` would instead be the Planck's Constant character, which is in
 * a completely different part of the Unicode spectrum and therefore is
 * not "between" `a` and `z`. Take care with non-ascii characters.
 *
 * @param {string} start The character that defines the start of the
 *     range of characters to match. It is included in that range.
 * @param {string} end The character that defines the end of the range
 *     of characters to match. It is included in that range.
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */

const range = (start, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const fn = c => c >= start && c <= end;

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].range(start, end));
});
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */

const any = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].any);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width);
});
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 */

const eof = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].eof);
});
/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is among those characters, the parser
 * will succeed.
 *
 * @param {(string|string[])} chars The characters, either in an array
 *     or a string, in which the next input character has to be a
 *     member for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is
 *     one of the characters in `chars`.
 */

const anyOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const {
    index,
    view
  } = state;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyOf(arr));
});
/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is *not* among those characters, the
 * parser will succeed.
 *
 * @param {(string|string[])} chars The characters, either in an array
 *     or a string, in which the next input character has to not be a
 *     member for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */

const noneOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const {
    index,
    view
  } = state;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '7';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lower);
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: constant, fail, failFatally, failUnexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return failFatally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failUnexpected", function() { return failUnexpected; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that always succeeds and results in the provided
 * value.
 *
 * @param {*} x The value that be the new parser's result.
 * @returns {Parser} A parser that always succeeds with `value`.
 */

const constant = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, x));
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const fail = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(message));
});
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const failFatally = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(message));
});
/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} message The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failUnexpected = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["unexpected"])(message));
});

/***/ }),

/***/ "./src/parsers/regex.js":
/*!******************************!*\
  !*** ./src/parsers/regex.js ***!
  \******************************/
/*! exports provided: regex, letterU, alphaU, upperU, lowerU, space, spaceU, spaces, spacesU, spaces1, spaces1U, newline, newlineU */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "letterU", function() { return letterU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alphaU", function() { return alphaU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upperU", function() { return upperU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowerU", function() { return lowerU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceU", function() { return spaceU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaces", function() { return spaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spacesU", function() { return spacesU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaces1", function() { return spaces1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaces1U", function() { return spaces1U; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newline", function() { return newline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newlineU", function() { return newlineU; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */
// All of the regular expressions used in the derived regex parsers.
// These are here to create and compile them once, upon initial load, to
// speed parsing later.

/** Matches every Unicode letter character. */

const reLetter = /^\p{Alphabetic}/u;
/** Matches every Unicode letter or number character. */

const reAlpha = /^(?:\p{Alphabetic}|\p{N})/u;
/** Matches every Unicode uppercase or titlecase character. */

const reUpper = /^(?:\p{Uppercase}|\p{Lt})/u;
/** Matches every Unicode lowercase character. */

const reLower = /^\p{Lowercase}/u;
/** Matches a single conventional whitespace character. */

const reSpace = /^(?:\r\n|[\r\n\t ])/;
/** Matches a single Unicode whitespace character. */

const reUspace = /^(?:\r\n|\p{White_Space})/u;
/** Matches zero or more conventional whitespace characters. */

const reSpaces = /^[\r\n\t ]*/;
/** Matches zero or more Unicode whitespace characters. */

const reUspaces = /^\p{White_Space}*/u;
/** Matches one or more conventional whitespace characters. */

const reSpaces1 = /^[\r\n\t ]+/;
/** Matches one or more Unicode whitespace characters. */

const reUspaces1 = /^\p{White_Space}+/u;
/** Matches any conventional newline (\r, \n, or \r\n). */

const reNewline = /^(?:\r\n|\r|\n)/;
/** Matches every Unicode newline character, plus \r\n. */

const reUnewline = /^(?:\r\n|[\r\n\u0085\u2028\u2029])/u;
/**
 * Creates a parser that takes a regular expression object and matches
 * it as far as it can against the input at its current position.
 *
 * It is assumed that the regex begins with a `^` . The `g` flag is
 * ignored in that only the first match is processed and returned. This
 * ensures that the match is only against the text directly at the
 * current pointer location.
 *
 * @param {RegExp} re The regular expression used to match against the
 *     input text starting at its current position.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */

const RegexParser = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, view.byteLength - index, view);
  const match = rest.match(re);
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state);
});
/**
 * Creates a parser that attempts to match the supplied regular
 * expression to the input text at the current location. If there is a
 * match, any matching text is returned as a successful result. No text
 * is consumed upon failure.
 *
 * A string can be passed to this parser. If one is, it is converted
 * into a regular expression without flags.
 *
 * If a start anchor (^) is not included, one will be added. If the `g`
 * flag is included, it'll functionally be ignored as only the first
 * match will be considered anyway. These two rules ensure that the
 * match is only attempted at the beginning of the current text.
 *
 * @param {(string|RegExp)} re The regular expression to match against
 *     the input text. If this is a string, it will be converted into
 *     a regular expression with no flags.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */


const regex = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {} // First, convert to a regular expression if it's a string

  let regex = typeof re === 'string' ? new RegExp(re) : re; // Next, make sure the regular expression starts with a ^ anchor

  const {
    source,
    flags
  } = regex;
  const reanchor = source[0] !== '^';

  if (reanchor) {
    const newSource = '^' + source;
    regex = new RegExp(newSource, flags);
  }

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(regex)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reLetter)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reAlpha)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUpper)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reLower)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reSpace)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 */

const spaceU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUspace)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaceU);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [next, _] = RegexParser(reSpaces)(state);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */

const spacesU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [next, _] = RegexParser(reUspaces)(state);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [next, result] = RegexParser(reSpaces1)(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [next, result] = RegexParser(reUspaces1)(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1U);
});
/**
 * A parser that reads a character and succeeds if the next character is
 * a newline. If that newline is a carriage return, it will also read
 * the next character and include it in the result if it is a line feed.
 * Newlines this parser recognizes are any of the following
 * characters/combinations:
 *
 * * `LF` (line feed, `U+000A` or `\n`)
 * * `CR` (carriage return, `U+000D` or `\r`)
 * * `CR+LF` (`CR` followed by `LF`, `\r\n`)
 *
 * No characters will be consumed on failure, even in the case of
 * `\r\n`.
 */

const newline = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reNewline)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline);
});
/**
 * A parser that reads a character and succeeds if the next character is
 * a newline. If that newline is a carriage return, it will also read
 * the next character and include it in the result if it is a line feed.
 * Newlines in Unicode are any of the following characters/combinations:
 *
 * * `LF` (line feed, `U+000A` or `\n`)
 * * `CR` (carriage return, `U+000D` or `\r`)
 * * `CR+LF` (`CR` followed by `LF`, `\r\n`)
 * * `NEL` (next line, `U+0085`)
 * * `LS` (line separator, `U+2028`)
 * * `PS` (paragraph separator, `U+2029`)
 *
 * This does not include the characters `\f` or `\v`, which while being
 * vertical separators, aren't really newlines in the traditional sense.
 *
 * No characters will be consumed on failure, even in the case of
 * `\r\n`.
 */

const newlineU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUnewline)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newlineU);
});

/***/ }),

/***/ "./src/parsers/string.js":
/*!*******************************!*\
  !*** ./src/parsers/string.js ***!
  \*******************************/
/*! exports provided: string, stringi, all, anyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringi", function() { return stringi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anyString", function() { return anyString; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that attempts to match a particular string from the
 * current position in the text. A string of characters equal in length
 * to `length` is read from input and passed to `fn`; if `fn` returns
 * `true`, then the parser succeeds.
 *
 * This parser always fails if there are less than `length` characters
 * left in the input. It will always pass if `length` is 0.
 *
 * @param {number} length The number of characters that the parser
 *     should read.
 * @param {function(string): boolean} fn A function to which the read
 *     string is passed. If this function returns `true`, the parser
 *     succeeds.
 * @returns {Parser} A parser that succeeds if the read string passes
 *     the predicate function.
 */

const StringParser = (length, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  if (length === 0) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, '');
  const {
    index,
    view
  } = state;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChars"])(index, view, length);
  return Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(next) !== length || !fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width);
});
/**
 * Creates a parser that reads a string from the current location in the
 * input and matches it against its supplied string. The string match
 * must be exact (it is case-sensitive), and all UTF-8 characters are
 * recognized properly.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */


const string = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].string(str));
});
/**
 * Creates a parser that reads a string from the current location in the
 * input and matches it against its supplied string. This match is *not*
 * case-sensitive. However, there is a limitation based on the
 * JavaScript understanding of pairs of upper- and lowercase letters. It
 * cannot be assumed that 3- and 4-byte characters will recognize case-
 * insensitive counterparts.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */

const stringi = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].stringi(str));
});
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 */

const all = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const width = view.byteLength - index;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, width, view), index + width);
});
/**
 * Creates a parser that reads a certain number of characters, using
 * them (as a string) as its result. The parser will fail if there are
 * not that many characters left to read.
 *
 * @param {number} n The number of characters to read.
 * @returns {Parser} A parser that reads that many characters and joins
 *     them into a string for its result.
 */

const anyString = n => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(n, () => true)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encoder", function() { return encoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decoder", function() { return decoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewToString", function() { return viewToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToView", function() { return stringToView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charLength", function() { return charLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextCharWidth", function() { return nextCharWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextChar", function() { return nextChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextChars", function() { return nextChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dup", function() { return dup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaSeparate", function() { return commaSeparate; });
/* istanbul ignore file */
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/** @typedef {import('./core').State} State */

/** @typedef {import('./core').Result} Result */

/**
 * Translates a UCS-2 string into a Uint8Array of UTF-8 bytes.
 */
const encoder = new TextEncoder();
/**
 * Translates a Uint8Array of UTF-8 bytes into a UCS-2 string.
 */

const decoder = new TextDecoder();
/**
 * Creates an iterator that covers a range from a starting value to an
 * ending value, stepping by a certain value between each.
 *
 * @param {number} [start=0] The first number of the range.
 * @param {number} end The last number of the range. By default this
 *     number forms the upper bound of the range without being included
 *     in it.
 * @param {number} [step=1] The number to increase the yielded value by
 *     during each iteration.
 * @param {boolean} [inclusive=false] Determines whether `end` should be
 *     included as part of the range.
 * @yields {number} The values that make up the range.
 */

function* range(start, end, step, inclusive) {
  const s = typeof end === 'number' ? start : 0;
  const e = typeof end === 'number' ? end : start;
  const p = typeof step === 'number' ? step === 0 ? 1 : Math.abs(step) : 1;
  const i = typeof step === 'number' ? !!inclusive : typeof end === 'number' ? !!step : !!end;
  const forward = s < e;
  let current = s;

  const finished = () => {
    if (forward) {
      return i ? current > e : current >= e;
    }

    return i ? current < e : current <= e;
  };
  /* eslint-disable require-atomic-updates */


  while (!finished()) {
    yield current;
    current = forward ? current + p : current - p;
  }
  /* eslint-enable require-atomic-updates */

}
/**
 * Returns a portion of a UTF-8 data view as a UCS-2 string.
 *
 * @param {number} index The index of the byte to be the first in the
 *     generated string.
 * @param {number} length The number of bytes to include in the
 *     generated string.
 * @param {DataView} view The data view containing the text from which
 *     the generated string is taken.
 * @returns {string} A UCS-2 (regular JavaScript string) representation
 *     of the UTF-8 characters in the data view.
 */

function viewToString(index, length, view) {
  const bytes = Uint8Array.from({
    length
  }, (_, i) => view.getUint8(index + i));
  return decoder.decode(bytes);
}
/**
 * Creates a UTF-8 data view of a UCS-2 string.
 *
 * @param {string} str The string to encode into a UTF-8 data view.
 * @returns {DataView} A data view over the UTF-8 bytes of the input
 *     string.
 */

function stringToView(str) {
  return new DataView(encoder.encode(str).buffer);
}
/**
 * Returns the number of UTF-8 characters in a string. This can differ
 * from the number of UCS-2 characters in the same string, meaning this
 * value can differ from the `length` property of the same string.
 *
 * @param {string} str The string of which to get the character length.
 * @return {number} The number of UTF-8 characters in that string.
 */

function charLength(str) {
  return [...str].length;
}
/**
 * Determines the width of the character currently indexed in the view,
 * based on the value of its first byte.
 *
 * @param {number} index The index of the byte within the view that is
 *     the first (and perhaps only) byte of the next character.
 * @param {DataView} view The data view containing the text.
 * @returns {(1|2|3|4)} The number of bytes contained in the character
 *     starting at the indexed byte.
 */

function nextCharWidth(index, view) {
  const byte = view.getUint8(index);
  if ((byte & 0x80) >> 7 === 0) return 1;
  if ((byte & 0xe0) >> 5 === 0b110) return 2;
  if ((byte & 0xf0) >> 4 === 0b1110) return 3;
  if ((byte & 0xf0) >> 4 === 0b1111) return 4; // Hopefully shouldn't happen, but here in case one of those high
  // ascii codes is used

  return 1;
}
/**
 * Contains information about the next character(s) in the data view.
 *
 * @typedef NextCharInfo
 * @property {number} width The width of the returned character(s).
 * @property {string} next The next character(s).
 */

/**
 * Returns the character at the indexed position within the data view.
 * This character may be a 1-, 2-, 3-, or 4-byte character depending on
 * the value of its first byte.
 *
 * @param {number} index The index within the view of the first byte of
 *     the desired character.
 * @param {DataView} view The data view containing the text.
 * @returns {NextCharInfo} Information about the next character in the
 *     data view.
 */

function nextChar(index, view) {
  const width = nextCharWidth(index, view);
  return {
    width,
    next: viewToString(index, width, view)
  };
}
/**
 * Returns the next `count` characters starting at the indexed position
 * within the view. Each of these characters may be 1-, 2-, 3-, or
 * 4-byte characters depending on the values of their first bytes. If
 * there are not enough characters left, those remaining will be
 * returned.
 *
 * @param {number} index The index within the view of the first byte of
 *     the first desired character.
 * @param {DataView} view The data view containing the text.
 * @param {number} count The number of characters to return.
 * @returns {NextCharInfo} Information about the next characters in the
 *     data view.
 */

function nextChars(index, view, count) {
  const viewLength = view.byteLength;
  let width = 0;

  for (const _ of range(count)) {
    const i = index + width;
    if (i >= viewLength) break;
    width += nextCharWidth(i, view);
  }

  if (index + width >= viewLength) {
    width = viewLength - index;
  }

  return {
    width,
    next: viewToString(index, width, view)
  };
}
/**
 * Surrounds the supplied string in single quotes.
 *
 * @param {string} str The string to surround in single quotes.
 * @returns {string} The same string, led and trailed by single quotes.
 */

function quote(str) {
  return `'${str}'`;
}
/**
 * Creates an array of two copies of the provided value.
 *
 * While this will duplicate any value, it's primarily useful for
 * covering a missing part of JavaScript destructuring, so `value`
 * should generally be an array or object.
 *
 * That missing part is reference to the entire value. JavaScript will
 * allow destructuring to reference any and all parts of a value, but it
 * does not have a syntax (like the `@` operator in languages like Scala
 * and Haskell) to reference the entire value at the same time. Using
 * this function, one of the copies can be retained as a whole while
 * providing another copy for destructuring.
 *
 * ### Example
 * ```
 * const [whole, [state, value]] = dup(parse(parser, input))
 * ```
 *
 * @param {[State, Result]} value Any value.
 * @returns {[[State, Result], [State, Result]]} An array containing two
 *     copies of the value.
 */

function dup(value) {
  return [value, value];
}
/**
 * Comma-separates (as needed) the strings in the provided array. If
 * the array is empty, the result will be an empty string; if the array
 * has only one element, that element will be returned. If the array has
 * two elements, they will be joined with ' or ' between them. If the
 * array is longer than that, all elements will be comma-separated with
 * an additional 'or' between the last two elements (Oxford comma
 * style).
 *
 * @param {string[]} messages The strings that need to be joined into
 *     a comma-separated string.
 * @returns {string} The messages joined into a single string.
 */

function commaSeparate(messages) {
  switch (messages.length) {
    case 0:
      return '';

    case 1:
      return messages[0];

    case 2:
      return messages.join(' or ');

    default:
      {
        const msgs = messages.slice();
        const last = msgs.pop();
        return `${msgs.join(', ')}, or ${last}`;
      }
  }
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbInN0cmluZ2lmeSIsInZhbHVlIiwidW5kZWZpbmVkIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwib3JkaW5hbENoYXIiLCJvcmQiLCJhc3NlcnRDaGFyIiwiZm9ybWF0dGVyIiwiY2hhckxlbmd0aCIsIkVycm9yIiwiYXNzZXJ0RnVuY3Rpb24iLCJhc3NlcnRTdHJpbmciLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJ0eXBlIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0TnVtYmVyIiwiT2siLCJGYXRhbCIsIlN0YXR1cyIsImNob2ljZSIsInBzIiwibWFrZVBhcnNlciIsInN0YXRlIiwiZXJyb3JzIiwicCIsInJlcGx5IiwibmV4dCIsInJlc3VsdCIsImR1cCIsInN0YXR1cyIsIm1lcmdlIiwiZmF0YWwiLCJlcnJvciIsIm9wdGlvbmFsIiwib2siLCJmYWxsYmFjayIsIngiLCJiYWNrdHJhY2siLCJpbmRleCIsImVyciIsIm5lc3RlZCIsInNlcXVlbmNlQiIsInZhbHVlcyIsIm5leHRTdGF0ZSIsInB1c2giLCJjaGFpbkIiLCJmbiIsInJlcGx5MSIsIm5leHQxIiwicmVzdWx0MSIsInJlcGx5MiIsIm5leHQyIiwicmVzdWx0MiIsImxlZnRCIiwicDEiLCJwMiIsInJpZ2h0QiIsImJvdGhCIiwiY291bnRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImJsb2NrQiIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJza2lwIiwidHVwbGUiLCJsZWZ0IiwicmlnaHQiLCJib3RoIiwicGlwZSIsImJldHdlZW4iLCJwcmUiLCJwb3N0IiwibmV4dDMiLCJyZXN1bHQzIiwibnRoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibG9va0FoZWFkIiwibm90RW1wdHkiLCJub3RFbXB0eUwiLCJtc2ciLCJleHBlY3RlZCIsImZvbGxvd2VkQnkiLCJmb2xsb3dlZEJ5TCIsIm5vdEZvbGxvd2VkQnkiLCJub3RGb2xsb3dlZEJ5TCIsIk5lc3RlZCIsIkVycm9yVHlwZSIsInBhc3MiLCJsYWJlbCIsImJhY2tMYWJlbCIsImxlbmd0aCIsImNvbXBvdW5kIiwibG9vcE1lc3NhZ2UiLCJzZXF1ZW5jZSIsImJsb2NrIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwTWFueSIsInNraXBNYW55MSIsInNlcEJ5Iiwic2VwIiwibmV4dFN0YXRlMSIsIm5leHRTdGF0ZTIiLCJUeXBlRXJyb3IiLCJzZXBCeTEiLCJzZXBFbmRCeSIsInNlcE5leHQiLCJzZXBFbmRCeTEiLCJjb3VudCIsIm1hbnlUaWxsIiwiYXNzb2NsIiwib3AiLCJvcHMiLCJyZXBseW9wIiwibmV4dG9wIiwicmVzdWx0b3AiLCJyZXBseXAiLCJuZXh0cCIsInJlc3VsdHAiLCJpIiwiYXNzb2NsMSIsImFzc29jciIsImFzc29jcjEiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJTeW1ib2wiLCJtYWtlU3RhdGUiLCJpbnB1dCIsIm1lc3NhZ2UiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwic3VjY2VlZGVkIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwicmVwZWF0IiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImNvbW1hU2VwYXJhdGUiLCJmaWx0ZXIiLCJ1bmV4cE1zZyIsImV4cE1zZyIsImdlbmVyaWNNc2ciLCJuZXN0ZWRNc2ciLCJjb21wb3VuZE1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJpIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNhdGlzZnkiLCJzcGFjZSIsInNwYWNlcyIsInNwYWNlczEiLCJzcGFjZXNVIiwic3BhY2VzMVUiLCJzcGFjZVUiLCJzdHJpbmciLCJzdHIiLCJzdHJpbmdpIiwidXBwZXIiLCJ1cHBlclUiLCJleHBlY3RlZHMiLCJDaGFyUGFyc2VyIiwid2lkdGgiLCJuZXh0Q2hhciIsIkFTU0VSVCIsInJlYWQiLCJ0b0xvd2VyQ2FzZSIsImNoYXJzIiwiYXJyIiwiaW5jbHVkZXMiLCJjb25zdGFudCIsImZhaWwiLCJmYWlsRmF0YWxseSIsImZhaWxVbmV4cGVjdGVkIiwicmVMZXR0ZXIiLCJyZUFscGhhIiwicmVVcHBlciIsInJlTG93ZXIiLCJyZVNwYWNlIiwicmVVc3BhY2UiLCJyZVNwYWNlcyIsInJlVXNwYWNlcyIsInJlU3BhY2VzMSIsInJlVXNwYWNlczEiLCJyZU5ld2xpbmUiLCJyZVVuZXdsaW5lIiwiUmVnZXhQYXJzZXIiLCJyZXN0IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJyZWFuY2hvciIsIm5ld1NvdXJjZSIsIlN0cmluZ1BhcnNlciIsIm5leHRDaGFycyIsImFsbCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsInN0ZXAiLCJpbmNsdXNpdmUiLCJzIiwiZSIsImFicyIsImZvcndhcmQiLCJjdXJyZW50IiwiZmluaXNoZWQiLCJieXRlcyIsImZyb20iLCJkZWNvZGUiLCJlbmNvZGUiLCJ2aWV3TGVuZ3RoIiwibWVzc2FnZXMiLCJtc2dzIiwic2xpY2UiLCJsYXN0IiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFpQkE7QUFNQTtDQXNCQTtBQUNBOztBQUVBO0FBY0E7QUFrQkE7QUFRQTtDQXVCQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDMUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNNkIsT0FBTyxHQUFHO0FB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QUFDRSxLQUFULEVBQWI7QUFDQSxjQUFNQyxJQUFJLEdBQUdGLElBQUksQ0FBQ0csR0FBTCxFQUFiO0FBQ0EsZUFBUSxHQUFFSCxJQUFJLENBQUMzUCxJQUFMLENBQVUsSUFBVixDQUFnQixRQUFPNlAsSUFBSyxFQUF0QztBQUNEO0FBUkg7QUFVRCxDIiwiZmlsZSI6Imtlc3NlbC5ub2Fzc2VydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBjaGFyTGVuZ3RoIH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHJldHVybiBgZnVuY3Rpb24gJHt2YWx1ZS5uYW1lfWBcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxufVxyXG5cclxuY29uc3QgY2hhckZvcm1hdHRlciA9IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkIGEgb25lLWNoYXJhY3RlciBzdHJpbmc7IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcbmNvbnN0IGZuRm9ybWF0dGVyID0gdmFsdWUgPT5cclxuICBgZXhwZWN0ZWQgYSBmdW5jdGlvbjsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcclxuY29uc3Qgc3RyRm9ybWF0dGVyID0gdmFsdWUgPT5cclxuICBgZXhwZWN0ZWQgYSBzdHJpbmc7IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcbmNvbnN0IHN0ckFyckZvcm1hdHRlciA9IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnM7IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcbmNvbnN0IHN0clJlZ0Zvcm10dGVyID0gdmFsdWUgPT5cclxuICBgZXhwZWN0ZWQgYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb247IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcbmNvbnN0IG51bUZvcm1hdHRlciA9IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkIGEgbnVtYmVyOyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYWxDaGFyID0gb3JkID0+IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSBhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nOyBmb3VuZCAke1xyXG4gICAgc3RyaW5naWZ5KHZhbHVlKVxyXG4gIH1gXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q2hhcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gY2hhckZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGZuRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPckFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJBcnJGb3JtYXR0ZXIpIHtcclxuICBpZiAoIShcclxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXHJcbiAgICAmJiB2YWx1ZS5ldmVyeShjID0+IHR5cGVvZiBjID09PSAnc3RyaW5nJyAmJiBjaGFyTGVuZ3RoKGMpID09PSAxKVxyXG4gICAgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xyXG4gICkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcclxuICBjb25zdCB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKVxyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnICYmIHR5cGUgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxyXG4gIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZXJyb3IsIGZhdGFsLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IG1lcmdlLCBuZXN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCwgcmFuZ2UgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2ssIEVycm9yLCBGYXRhbCB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcy4gRWFjaCBvZiB0aGUgc3VwcGxpZWRcclxuICogcGFyc2VycyBpcyBhcHBsaWVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLiBXaGVuIHRoZSBmaXJzdCBwYXJzZXJcclxuICogc3VjY2VlZHMsIG9yIHRoZSBmaXJzdCBwYXJzZXIgZmFpbHMgd2hpbGUgY29uc3VtaW5nIGlucHV0LCBleGVjdXRpb25cclxuICogaXMgc3RvcHBlZCBhbmQgdGhlIHN0YXRlIGZyb20gdGhhdCBsYXN0IHBhcnNlciBpcyBwYXNzZWQgdGhyb3VnaC4gVGhlXHJcbiAqIHNhbWUgaGFwcGVucyBpZiBhbGwgcGFyc2VycyBhcmUgYXBwbGllZCB3aXRob3V0IGFueSBvZiB0aGVtXHJcbiAqIHN1Y2NlZWRpbmcuXHJcbiAqXHJcbiAqIE9uIGZhaWx1cmUsIGFsbCBvZiB0aGUgYEV4cGVjdGVkYCBlcnJvcnMgZnJvbSBhbnkgb2YgdGhlIGNvbnRhaW5lZFxyXG4gKiBwYXJzZXJzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhpcyBwYXJzZXIncyBlcnJvcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZSBmYWlscyBmYXRhbGx5LCBvciBhbGwgZmFpbC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxyXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNob2ljZSA9ICguLi5wcykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgbGV0IGVycm9ycyA9IFtdXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICAgIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcmVzdWx0LmVycm9ycylcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKG5leHQsIGVycm9ycylcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBlcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciwgc3VjY2VlZGluZyB3aGV0aGVyXHJcbiAqIGl0IGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXHJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gSXQncyB1c2VkIHRvXHJcbiAqIGltcGxlbWVudCBza2lwcGluZyBvdmVyIHNvbWUgb3B0aW9uYWwgdGV4dC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBhcHBsaWVkIGFuZFxyXG4gKiAgICAgdGhlbiBoYXZlIGl0cyByZXN1bHQgaWdub3JlZC5cclxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcclxuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5XHJcbiAqICAgICBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBvcHRpb25hbCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsID8gcmVwbHkgOiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBlaXRoZXIgd2l0aCB0aGUgc3VwcGxpZWQgcGFyc2VyJ3NcclxuICogc3VjY2Vzc2Z1bCByZXN1bHQgb3IgZWxzZSAoaWYgdGhhdCBwYXJzZXIgZmFpbHMpIHRoZSBzdXBwbGllZCB2YWx1ZVxyXG4gKiBgeGAuIFRoaXMgcGFyc2VyIG9ubHkgZmFpbHMgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS5cclxuICpcclxuICogYGZhbGxiYWNrKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNob2ljZShbcCxcclxuICogY29uc3RhbnQoeCldKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXHJcbiAqICAgICByZXN1bHQgaWYgaXQgc3VjY2VlZHMuXHJcbiAqIEBwYXJhbSB7Kn0geCBBIHZhbHVlIHdoaWNoIHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3MgcmVzdWx0IGlmIHRoZVxyXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCByZXN1bHRzIGluIGVpdGhlciBpdHMgY29udGFpbmVkXHJcbiAqICAgICBwYXJzZXIncyBzdWNjZXNzZnVsIHJlc3VsdCBvciB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFsbGJhY2sgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IEVycm9yID8gcmVwbHkgOiBvayhuZXh0LCB4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsXHJcbiAqIGZhaWx1cmUuIEl0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcjsgaWYgdGhhdCBwYXJzZXIgZmFpbHNcclxuICogZmF0YWxseSwgdGhlIHN0YXRlIGlzIHNldCBiYWNrIHRvIHdoYXQgaXQgd2FzICpiZWZvcmUqIHRoYXQgcGFyc2VyIGlzXHJcbiAqIGFwcGxpZWQgYW5kIHRoZSBmYXRhbCBmYWlsdXJlIGlzIHJldHVybmVkIGFzIGEgbm9uLWZhdGFsIGZhaWx1cmUuIElmXHJcbiAqIHRoZSBwYXJzZXIgaGFzIGFueSBvdGhlciByZXN1bHQsIGl0IGlzIHBhc3NlZCB0aHJvdWdoIHdpdGhvdXRcclxuICogbW9kaWZpY2F0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBhbGxvd3MgdGhlIHVzZXIgdG8gY2F1c2UgYSBub24tYmFja3RyYWNraW5nIHBhcnNlciB0b1xyXG4gKiBiYWNrdHJhY2sgdXBvbiBmYWlsdXJlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXHJcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBjYW5ub3QgZmFpbCBmYXRhbGx5LiBJZiBpdHMgY29udGFpbmVkXHJcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmFja3RyYWNrID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gIH1cclxuICByZXR1cm4gcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xyXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXHJcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XHJcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc29cclxuICogZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQuIEFcclxuICogZmF0YWwgZXJyb3IgZnJvbSBvbmUgb2YgdGhlIGNvbnRhaW5lZCBwYXJzZXJzIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuXHJcbiAqIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgc2VxdWVuY2VCKHBzKWAgaXMgbm90IHRoZSBzYW1lIGFzXHJcbiAqIGBiYWNrdHJhY2soc2VxdWVuY2UocHMpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mXHJcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxyXG4gKiBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VCID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQuaW5kZXhcclxuICAgICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgICA6IG5lc3RlZChuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgICByZXR1cm4gZXJyb3IobmV4dCwgZXJyLCBpbmRleClcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSBzdGF0ZSBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkXHJcbiAqIHBhcnNlciB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZVxyXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cclxuICpcclxuICogSWYgdGhlIHNlY29uZCBwYXJzZXIgKHRoZSBvbmUgcHJvdmlkZWQgYnkgYGZuYCkgZmFpbHMgbm9uLWZhdGFsbHksXHJcbiAqIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvXHJcbiAqIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGxcclxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgY2hhaW5CKHAsIGZuKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2soY2hhaW4ocCxcclxuICogZm4pKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cclxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcclxuICogICAgIHJldHVybnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAoZm4ocmVzdWx0MS52YWx1ZSkobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gRXJyb3IpIHJldHVybiByZXBseTJcclxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgID8gcmVzdWx0Mi5lcnJvcnNcclxuICAgIDogbmVzdGVkKG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDFgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxyXG4gKlxyXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxyXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXHJcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYGxlZnRCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKGxlZnQocDEsXHJcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxlZnRCID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhuZXh0MiwgcmVzdWx0MS52YWx1ZSlcclxuXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cclxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAyYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxyXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cclxuICpcclxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcclxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxyXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGByaWdodEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2socmlnaHQocDEsXHJcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByaWdodEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxyXG5cclxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgID8gcmVzdWx0Mi5lcnJvcnNcclxuICAgIDogbmVzdGVkKG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxyXG4gKlxyXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxyXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXHJcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYGJvdGhCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKGJvdGgocDEsXHJcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBib3RoQiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2sobmV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcclxuXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxyXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXHJcbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiB0aGF0IGZhaWx1cmUgaXMgZmF0YWwsIHRoZVxyXG4gKiBvdmVyYWxsIGZhaWx1cmUgd2lsbCBhbHNvIGJlIGZhdGFsLlxyXG4gKlxyXG4gKiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiB0aGUgdW5kZXJseWluZyBlcnJvciB3YXNcclxuICogbm9uLWZhdGFsLCBldmVuIGlmIGlucHV0IHdhcyBjb25zdW1lZCAoYmFja3RyYWNraW5nIHdpbGwgaGFwcGVuIGluXHJcbiAqIHRoaXMgY2FzZSkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGFwcGx5IG11bHRpcGxlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXHJcbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRCID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0LmluZGV4XHJcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXHJcbiAgICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgICAgcmV0dXJuIGVycm9yKG5leHQsIGVyciwgaW5kZXgpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcclxuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxyXG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcclxuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXHJcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXHJcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxyXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxyXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxyXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cclxuICpcclxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5IGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLFxyXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxyXG4gKiBjb25zdW1lZCkuIEEgZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsXHJcbiAqIGVycm9yIGZvciB0aGUgb3ZlcmFsbCBwYXJzZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXHJcbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXHJcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtYW55VGlsbEIgPSAocCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChlbmQobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dDFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgICAgICA/IG1lcmdlKHJlc3VsdDIuZXJyb3JzLCByZXN1bHQxLmVycm9ycylcclxuICAgICAgICA6IG5lc3RlZChuZXh0MiwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSlcclxuICAgICAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcclxuICogZ2VuZXJhdG9yIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWRcclxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxyXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxyXG4gKlxyXG4gKiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLCB0aGUgYGJsb2NrYCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuIElmXHJcbiAqIHRoYXQgZmFpbHVyZSBpcyBub24tZmF0YWwsIGJhY2t0cmFja2luZyB3aWxsIHJlc2V0IHRoZSBpbmRleCB0byB3aGVyZVxyXG4gKiBpdCB3YXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYGJsb2NrYCBwYXJzZXIgYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxyXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXHJcbiAqXHJcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcclxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xyXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxyXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XHJcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxyXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xyXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJsb2NrQiA9IGdlbkZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgbGV0IG5leHRWYWx1ZVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcclxuICAgIGlmIChkb25lKSByZXR1cm4gb2sobmV4dCwgdmFsdWUpXHJcblxyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cCh2YWx1ZShuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IobmV4dFN0YXRlLCByZXN1bHQuZXJyb3JzLCBpbmRleClcclxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxyXG4gIH1cclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIsIG1heWJlRmF0YWwsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxyXG4gKiBwYXJzZXIgdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGVcclxuICogcGFyc2VyIHJldHVybnMgdGhhdCByZXN1bHRpbmcgc3RhdGUuXHJcbiAqXHJcbiAqIElmIHRoZSBpbml0aWFsIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIGluc3RlYWQgcmV0dXJuZWQuIElmIHRoZVxyXG4gKiBzZWNvbmQgcGFyc2VyICh0aGUgcmV0dXJuIHZhbHVlIG9mIGBmbmApIGZhaWxzIGFuZCBgcGAgY29uc3VtZWRcclxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cclxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxyXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxyXG4gKiAgICAgcmV0dXJucy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKGZuKHJlc3VsdDEudmFsdWUpKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgcGFzc2VzIGl0c1xyXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cclxuICogYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cclxuICpcclxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcclxuICogZmFpbHVyZSBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxyXG4gKlxyXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KGZuKHgpKSlgLiBUaGlzIGFsc28gbWFrZXMgaXQgYSBtb3JlIGVmZmljaWVudCB2ZXJzaW9uIG9mXHJcbiAqIGBwaXBlKFtwXSwgZm4pYCAoYSBzaW5nbGUtcGFyc2VyIGBwaXBlYCkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOip9IGZuIEEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXHJcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBmbihyZXN1bHQudmFsdWUpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXHJcbiAqIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgaWYgaXQgc3VjY2VlZHMsIHRoYXRcclxuICogcmVzdWx0J3MgZWxlbWVudHMgYXJlIGpvaW5lZCB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBpc1xyXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXHJcbiAqIGZ1bmN0aW9uYWwgbGFuZ3VhZ2VzIHdoZXJlIGEgc3RyaW5nIGlzIHRoZSBzYW1lIGFzIGEgbGlzdCBvZlxyXG4gKiBjaGFyYWN0ZXJzLiBKYXZhU2NyaXB0IG5lZWRzIGV4cGxpY2l0IGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgdHdvLCBzb1xyXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCB0aGUgY3JlYXRlZCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgd2l0aFxyXG4gKiB0aGUgc2FtZSBzdGF0ZS5cclxuICpcclxuICogYGpvaW4ocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4LmpvaW4oJycpKSlgLlxyXG4gKlxyXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXMgbm90IHJlc3VsdCBpbiBhbiBhcnJheSwgYW4gZXhjZXB0aW9uIHdpbGxcclxuICogYmUgdGhyb3duIGJlY2F1c2UgYW4gYXR0ZW1wdCB3aWxsIGJlIG1hZGUgdG8gY2FsbCBgam9pbmAgb24gdGhlXHJcbiAqIHJlc3VsdC4gSWYgaXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBzb21ldGhpbmcgb3RoZXIgdGhhbiBzdHJpbmdzLFxyXG4gKiB0aG9zZSBlbGVtZW50cyB3aWxsIGJlIGNvZXJjZWQgaW50byBzdHJpbmdzIGFuZCB0aGVuIGpvaW5lZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2ZcclxuICogICAgIHN0cmluZ3MuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlciBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gYSBzaW5nbGUgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGVcclxuICogICAgIGFycmF5IG9mIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgam9pbiA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLmpvaW4oJycpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgZGlzY2FyZHMgYW55XHJcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0IHdoaWxlIHN0aWxsIGNvbnN1bWluZyBpbnB1dC4gQSBmYWlsdXJlIHdpbGwgYmVcclxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cclxuICpcclxuICogYHNraXAocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cclxuICogY29uc3RhbnQobnVsbCkpYCxcclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXHJcbiAqICAgICBwYXJzZXIgZG9lcyBvbiBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgcnVuIHRoZSBzdXBwbGllZCBwYXJzZXIgYnV0LCBvbiBzdWNjZXNzLFxyXG4gKiByZXN1bHQgaW4gdGhlIHN1cHBsaWVkIHZhbHVlIGluc3RlYWQuXHJcbiAqXHJcbiAqIGB2YWx1ZShwLCB4KWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVuYXRpb24gb2YgYGNoYWluKHAsICgpID0+XHJcbiAqIGNvbnN0YW50KHgpKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cclxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cclxuICogICAgIHN1Y2Nlc3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgeCkgOiB0dXBsZVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cclxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAxYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxyXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwgaWZcclxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXHJcbiAqXHJcbiAqIGBsZWZ0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIHggPT5cclxuICogdmFsdWUocDIsIHgpKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxlZnQgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtuZXh0MiwgcmVzdWx0Ml0gPSBwMihuZXh0MSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2sobmV4dDIsIHJlc3VsdDEudmFsdWUpXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxyXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYHJpZ2h0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsICgpID0+XHJcbiAqIHAyKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByaWdodCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbFxyXG4gKiBiZSBmYXRhbCBpZiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYGJvdGgocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PlxyXG4gKiBjaGFpbihwMiwgYiA9PiBjb25zdGFudChbYSwgYl0pKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm90aCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxyXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MiwgW3Jlc3VsdDEudmFsdWUsIHJlc3VsdDIudmFsdWVdKVxyXG4gICAgOiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcclxuICogdGhvc2UgcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2ZcclxuICogcGFyc2VycyB0byBhcHBseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXHJcbiAqIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCogZGlzY2FyZGVkLlxyXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gYGZuYCBub1xyXG4gKiBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cclxuICpcclxuICogYHBpcGUoW3AxLCBwMl0sIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYVxyXG4gKiA9PiBjaGFpbihwMiwgYiA9PiBjb25zdGFudChmbihhLCBiKSkpKWAsIGBwaXBlKFtwMSwgcDIsIHAzXSwgZm4pYCBpc1xyXG4gKiBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+IGNoYWluKHAyLCBiID0+XHJcbiAqIGNoYWluKHAzLCBjID0+IGNvbnN0YW50KGZuKGEsIGIsIGMpKSkpKWAsIGFuZCBzbyBvbi5cclxuICpcclxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcclxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlIGFwcGxpZWQgb25lIGF0IGEgdGltZSxcclxuICogICAgIGluIG9yZGVyLlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKC4uLiopOip9IGZuIEEgZnVuY3Rpb24gd2hpY2ggd2lsbCByZWNlaXZlIGFzXHJcbiAqICAgICBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcclxuICogICAgIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxyXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcclxuICogICAgIHJldHVybiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBwaXBlID0gKHBzLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgZm4oLi4udmFsdWVzKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGJlZm9yZSwgY29udGVudCwgYW5kIGFmdGVyIHBhcnNlcnNcclxuICogaW4gb3JkZXIgYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgYHBgIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXJcclxuICogYHBhZnRlcmAuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgd2lsbCBoYXZlIGFuIG9wcG9ydHVuaXR5XHJcbiAqIHRvIHBhdGNoIHRoZSBcImFmdGVyXCIgY29udGVudCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlciBkb2VzLCBzbyB0YWtlXHJcbiAqIGNhcmUgdGhhdCB0aGUgcGFyc2VycyBkbyBub3Qgb3ZlcmxhcCBpbiB3aGF0IHRoZXkgbWF0Y2guXHJcbiAqXHJcbiAqIGBiZXR3ZWVuKHByZSwgcG9zdCwgcClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxyXG4gKiBgbGVmdChyaWdodChwcmUsIHApLCBwb3N0KWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHBvc3QgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcclxuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcclxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChwcmUsIHBvc3QsIHApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocHJlKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtuZXh0MiwgcmVzdWx0Ml0gPSBwKG5leHQxKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gT2spIHtcclxuICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgW25leHQzLCByZXN1bHQzXSA9IHBvc3QobmV4dDIpXHJcbiAgcmV0dXJuIHJlc3VsdDMuc3RhdHVzID09PSBPayA/IG9rKG5leHQzLCByZXN1bHQyLnZhbHVlKVxyXG4gICAgOiBtYXliZUZhdGFsKG5leHQzLmluZGV4ICE9PSBpbmRleCwgbmV4dDMsIHJlc3VsdDMuZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG50aCBlbGVtZW50IG9mIHRoZSByZXN1bHQgb2YgYSBwYXJzZXIgdGhhdCBwcm9kdWNlcyBhblxyXG4gKiBhcnJheS4gSWYgdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIHdpbGwgYmUgcGFzc2VkIHRocm91Z2guXHJcbiAqXHJcbiAqIGBudGgocCwgbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4W25dKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSAwLWJhc2VkIGluZGV4IG9mIHRoZSByZXN1bHQgZWxlbWVudCB0byByZXR1cm4uXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVtuXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYGZpcnN0KHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFswXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbMF0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcclxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgc2Vjb25kKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFsxXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHNlY29uZCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZWNvbmQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVsxXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYHRoaXJkKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFsyXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRoaXJkID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbMl0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb3VydGggZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcclxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgZm91cnRoKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFszXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3VydGggPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVszXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYGZpZnRoKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFs0XSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpZnRoID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbNF0pIDogcmVwbHlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGVycm9yLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBzdWNjZWVkcywgaXRzIHJlc3VsdCBiZWNvbWVzIHRoZSByZXN1bHQgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cclxuICogRWl0aGVyIHdheSwgbm8gaW5wdXQgaXMgY29uc3VtZWQuIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlclxyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIocykgc2F0aXNmeSB0aGUgcGFyc2VyIHdpdGhvdXQgYWN0dWFsbHkgY29uc3VtaW5nXHJcbiAqIHRoZSBpbnB1dCB0byBmaW5kIG91dC5cclxuICpcclxuICogQXMgYSBzaWRlIGVmZmVjdCwgYW55IGZhdGFsIHBhcnNlIGVycm9yIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhXHJcbiAqIG5vbi1mYXRhbCBvbmUsIHNpbmNlIG5vIGlucHV0IGlzIGJlaW5nIGNvbnN1bWVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXHJcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb29rQWhlYWQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLCBpbmRleClcclxuICAgIDogZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcclxuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcclxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXHJcbiAqXHJcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXHJcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcclxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cclxuICpcclxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcclxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXHJcbiAqIG9yIGVsc2UgYG5vdEVtcHR5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxyXG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IE9rIHx8IG5leHQuaW5kZXggIT09IGluZGV4ID8gcmVwbHkgOiBlcnJvcihuZXh0KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzXHJcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXHJcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxyXG4gKlxyXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxyXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXHJcbiAqIGBub3RFbXB0eShtYW55KHApKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBzdWNjZWVkc1xyXG4gKiAgICAgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcclxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3RFbXB0eUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IE9rIHx8IG5leHQuaW5kZXggIT09IGluZGV4ID8gcmVwbHlcclxuICAgIDogZXJyb3IobmV4dCwgZXhwZWN0ZWQobXNnKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxyXG4gKiBgZm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHkuXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXHJcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxyXG4gKiBvciBlbHNlIGBmb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxyXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsLCBpbmRleClcclxuICAgIDogZXJyb3IobmV4dCwgdW5kZWZpbmVkLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxyXG4gKiBgZm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXHJcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxyXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG4gICAgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcclxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxyXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcclxuICogb3IgZWxzZSBgbm90Rm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcclxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYFxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxyXG4gICAgOiBvayhuZXh0LCBudWxsLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcclxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LCByZXBsYWNpbmcgYW55IFwiZXhwZWN0ZWRcIiBlcnJvclxyXG4gKiBtZXNzYWdlIHdpdGggYG1zZ2AgYW5kIHJlbW92aW5nIGFueSBcInVuZXhwZWN0ZWRcIiBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcclxuICogICAgc3VjY2VlZHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcclxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEZvbGxvd2VkQnlMID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcclxuICAgIDogb2sobmV4dCwgbnVsbCwgaW5kZXgpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBmYXRhbCwgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGNvbXBvdW5kLCBFcnJvclR5cGUsIGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5jb25zdCB7IE5lc3RlZCB9ID0gRXJyb3JUeXBlXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuZnVuY3Rpb24gcGFzcyhzdGF0ZSwgcmVzdWx0LCBlcnJvcnMpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUgfSwgeyAuLi5yZXN1bHQsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcclxuICogY29uc3VtZXMgaW5wdXQsIG5vdGhpbmcgYWRkaXRpb25hbCBoYXBwZW5zLiBPdGhlcndpc2UsIHRoZSBvcmlnaW5hbFxyXG4gKiBwYXJzZXIncyByZXN1bHQgaXMgcmV0YWluZWQgYnV0IHRoZSBlcnJvciBpcyBvdmVyd3JpdHRlbiBieSB0aGVcclxuICogc3VwcGxpZWQgbWVzc2FnZSBhcyBhbiBleHBlY3RlZCBlcnJvci5cclxuICpcclxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGJldHRlciBlcnJvciBtZXNzYWdlcyBpbiBjYXNlcyB3aGVyZSB0aGVcclxuICogYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZXJyb3IgbWVzc2FnZXMgYXJlIGluc3VmZmljaWVudC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBuZXcgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIGlmIGBwYCBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgcGFzc2VzIGl0cyByZXN1bHRzXHJcbiAqICAgICB0aHJvdWdoIGV4Y2VwdCBmb3IgY2hhbmdpbmcgaXRzIGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSB1cG9uXHJcbiAqICAgICBmYWlsdXJlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxhYmVsID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiBpbmRleCA9PT0gbmV4dC5pbmRleCA/IHBhc3MobmV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcclxuICogc3VjY2VlZHMsIHRoYXQgc3VjY2VzcyBpcyBwYXNzZWQgdGhyb3VnaCwgdGhvdWdoIGlmIGl0IGRpZG4ndCBjb25zdW1lXHJcbiAqIGFueSBpbnB1dCwgdGhlIHByb3ZpZGVkIHN0cmluZyB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGFuIGV4cGVjdGVkXHJcbiAqIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIElmIHRoZSBvcmlnaW5hbCBwYXJzZXIgZmFpbHMsIHdoYXQgaGFwcGVucyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhhdFxyXG4gKiBmYWlsdXJlIGNvbnN1bWVkIGlucHV0LiBJZiBpdCBkaWQgbm90LCB0aGUgc3VwcGxpZWQgbWVzc2FnZVxyXG4gKiBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBlcnJvciBtZXNzYWdlIGp1c3QgYXMgd2l0aCBgbGFiZWxgLiBJZiBpdFxyXG4gKiAqZGlkKiBjb25zdW1lIGlucHV0LCB0aGUgc3RhdGUgaXMgcmVzZXQgdG8gdGhlIHN0YXRlIGJlZm9yZSB0aGVcclxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCB0aGUgZXJyb3IgaXMgc2V0IHRvIGEgY29tcG91bmQgZXJyb3IgdXNpbmcgdGhlXHJcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgKHdpdGggdGhlIG5lc3RlZCBlcnJvciBiZWluZyB0aGUgb3JpZ2luYWwgZXJyb3IgdGhhdFxyXG4gKiBjYW1lIGZyb20gdGhlIGZhaWx1cmUgcG9pbnQpLCBhbmQgYSBmYXRhbCBlcnJvciBpcyByZXR1cm5lZC5cclxuICpcclxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZldyBwbGFjZXMgd2hlcmUgYSBmYXRhbCBlcnJvciBoYXBwZW5zIGFmdGVyXHJcbiAqIGJhY2t0cmFja2luZy5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBuZXcgZXJyb3IgbWVzc2FnZSB0byBiZSB1c2VkLiBUaGlzIHdpbGwgYmVcclxuICogICAgIGFuIGBFeHBlY3RlZGAgZXJyb3IgaWYgbm8gaW5wdXQgd2FzIGNvbnN1bWVkLCBvciBhIGBDb21wb3VuZGBcclxuICogICAgIGVycm9yIGlmIGl0IHdhcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgY2hhbmdlcyB0aGUgZXJyb3JcclxuICogICAgIGFzIGFwcHJvcHJpYXRlIGlmIGBwYCBmYWlscy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBiYWNrTGFiZWwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSB7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IG5leHQuaW5kZXhcclxuICAgICAgPyBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxyXG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IG5leHQuaW5kZXgpIHtcclxuICAgIGlmIChyZXN1bHQuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiByZXN1bHQuZXJyb3JzWzBdLnR5cGUgPT09IE5lc3RlZCkge1xyXG4gICAgICBjb25zdCB7IHN0YXRlLCBlcnJvcnMgfSA9IHJlc3VsdC5lcnJvcnNbMF1cclxuICAgICAgcmV0dXJuIHBhc3MobmV4dCwgcmVzdWx0LCBjb21wb3VuZChtc2csIHN0YXRlLCBlcnJvcnMpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhc3MobmV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKVxyXG4gIH1cclxuICByZXR1cm4gZmF0YWwoc3RhdGUsIGNvbXBvdW5kKG1zZywgbmV4dCwgcmVzdWx0LmVycm9ycykpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBvaywgbWFrZVBhcnNlciwgU3RhdHVzLCBtYXliZUZhdGFsIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAsIHJhbmdlIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuY29uc3QgeyBPaywgRXJyb3IsIEZhdGFsIH0gPSBTdGF0dXNcclxuXHJcbmZ1bmN0aW9uIGxvb3BNZXNzYWdlKG5hbWUpIHtcclxuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxyXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXNcclxuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxyXG4gKiBmYWlscy4gSW4gdGhlIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdFxyXG4gKiBiZWNvbWVzIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm5lZCBwYXJzZXIgbWF5IGZhaWwgZmF0YWxseSBldmVuIGlmIHRoZSB1bnN1Y2Nlc3NmdWxcclxuICogY29udGFpbmVkIHBhcnNlciBmYWlscyBub24tZmF0YWxseS4gVGhpcyB3aWxsIGhhcHBlbiBpZiBhbnkgcHJldmlvdXNcclxuICogcGFyc2VyIHN1Y2NlZWRlZCBhbmQgY29uc3VtZWQgaW5wdXQuIEVzc2VudGlhbGx5LCBpZiB0aGUgcmV0dXJuZWRcclxuICogcGFyc2VyIGNvbnN1bWVzIGFueXRoaW5nIGFuZCB0aGVuIGZhaWxzLCBpdCB3aWxsIGZhaWwgZmF0YWxseS5cclxuICpcclxuICogQHBhcmFtIHsuLi5QYXJzZXJ9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXQgYVxyXG4gKiAgICAgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNlcXVlbmNlID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhXHJcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXHJcbiAqIHdpbGwgYmUgZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW5cclxuICogYmUgYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS4gSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCxcclxuICogYGJsb2NrYCB3aWxsIGFsc28gZmFpbCB3aXRoIHRoYXQgZmFpbHVyZS4gVGhpcyBmYWlsdXJlIHdpbGwgYmUgZmF0YWxcclxuICogaWYgYW55IGlucHV0IHdhcyBjb25zdW1lZC5cclxuICpcclxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXHJcbiAqIHZhbHVlIHRoYXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5lZC5cclxuICpcclxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxyXG4gKiBjYXVzZSB1bmRlZmluZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXHJcbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXHJcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcclxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxyXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoYXQgZXhhY3RseSBpcyB5aWVsZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXHJcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXHJcbiAqICAgICBzdWNjZWVkKSBpbiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmxvY2sgPSBnZW5GbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBnZW4gPSBnZW5GbigpXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGxldCBuZXh0VmFsdWVcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXHJcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKG5leHQsIHZhbHVlKVxyXG5cclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSB2YWx1ZShuZXh0KVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxyXG4gIH1cclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXHJcbiAqIHByb3ZpZGluZyB0aGF0IGFzIGl0cyBvd24gcmVzdWx0LiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWZcclxuICogdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsIGl0XHJcbiAqIHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcclxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hbnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXHJcbiAqIHByb3ZpZGluZyB0aGF0IGFzIGl0cyBvd24gcmVzdWx0LiBUaGUgY29udGFpbmVkIHBhcnNlciBtdXN0IHN1Y2NlZWRcclxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXHJcbiAqIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlblxyXG4gKiBpdCBmYWlscy5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcclxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHR1cGxlXHJcblxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcclxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5XHJcbiAqIGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLFxyXG4gKiBpdCBzdWNjZWVkcyBldmVuIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lc24ndCBzdWNjZWVkIGV2ZW4gb25jZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXHJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwTWFueSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcclxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdFxyXG4gKiBzdWNjZWVkIGF0IGxlYXN0IG9uY2UsIG9yIHRoZSByZXR1cm5lZCBwYXJzZXIgd2lsbCBmYWlsLiBPdGhlcndpc2UsXHJcbiAqIHRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0XHJcbiAqIHdoZW4gaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXHJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXHJcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcclxuICogY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvIHRoZSBvbmx5IHdheSBmb3IgdGhpcyBwYXJzZXJcclxuICogdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvIGZhaWwgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBCeSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcclxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4uIFRoZVxyXG4gKiBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2Ugb3IgYSBub24tZmF0YWwgZmFpbHVyZVxyXG4gKiB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHkgZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnNcclxuICogZmFpbHMgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcclxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4gYW5kXHJcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xyXG4gKiB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0b1xyXG4gKiBmYWlsIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIFtdKVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnknKSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLm5leHQsIGluZGV4IH0pXHJcbiAgcmV0dXJuIG9rKHNlcE5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcclxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlZWFzdCBvbmNlXHJcbiAqIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmUgd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5XHJcbiAqIGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeTEnKSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLm5leHQsIGluZGV4IH0pXHJcbiAgcmV0dXJuIG9rKHNlcE5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcclxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxyXG4gKiBmYWlscywgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbDsgaWYgaW5wdXQgaXMgY29uc3VtZWQgYmVmb3JlIG9yXHJcbiAqIGR1cmluZyB0aGF0IGZhaWx1cmUsIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGFwcGx5IG11bHRpcGxlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXHJcbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnQgPSAocCwgbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcclxuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxyXG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcclxuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXHJcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXHJcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxyXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxyXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxyXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cclxuICpcclxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLCB0aGUgb3ZlcmFsbFxyXG4gKiBwYXJzZXIgd2lsbCBmYWlsIChmYXRhbGx5IGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW4gY29uc3VtZWQpLiBBXHJcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXHJcbiAqIG92ZXJhbGwgcGFyc2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxyXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxyXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueVRpbGwgPSAocCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChlbmQobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dDFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChcclxuICAgICAgICBuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSxcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdDIudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxyXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdFxyXG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cclxuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxyXG4gKlxyXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cclxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcclxuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXHJcbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cclxuICpcclxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cclxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcclxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cclxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcclxuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxyXG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NsID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxyXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xyXG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxyXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcclxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXHJcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcclxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcclxuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFzc29jbDEgPSAocCwgb3ApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBjb25zdCBvcHMgPSBbXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dG9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dHBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cclxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxyXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xyXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cclxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NyID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cclxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xyXG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxyXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcclxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXHJcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcclxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXHJcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhc3NvY3IxID0gKHAsIG9wKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgY29uc3Qgb3BzID0gW11cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gIH1cclxuXHJcbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxyXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XHJcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcclxuaW1wb3J0IHsgc3RyaW5nVG9WaWV3IH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xyXG4gKiBvZiB0eXBlZCBhcnJheXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxyXG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxyXG59XHJcblxyXG4vKipcclxuICogQSBzeW1ib2wgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXHJcbiAqIEBlbnVtIHtzeW1ib2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cclxuICBPazogU3ltYm9sKCdvaycpLFxyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXHJcbiAgRXJyb3I6IFN5bWJvbCgnZXJyb3InKSxcclxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cclxuICBGYXRhbDogU3ltYm9sKCdmYXRhbCcpLFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0XHJcbiAqIGFuZCBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTdGF0ZVxyXG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcclxuICogICAgIG5leHQgcGFyc2luZyBvcGVyYXRpb24gd2lsbCB0YWtlIHBsYWNlIChvciB3aGVyZSB0aGUgbGFzdCBvbmVcclxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cclxuICovXHJcblxyXG4vKipcclxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcclxuICogZXNzZW50aWFsbHkgYSB1bmlvbiBvZiBzdWNjZXNzZnVsIHZhbHVlIGFuZCBmYWlsdXJlIGVycm9yLCB3aXRoIHRoZVxyXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlc3VsdFxyXG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXHJcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgYSBzdWNjZXNzZnVsIHBhcnNlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxyXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyhcclxuICogICBVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcclxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheVxyXG4gKiApfSBUeXBlZEFycmF5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBzdGF0ZS4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhIG5ld1xyXG4gKiBzdGF0ZSBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLiBBbnlcclxuICogZnVydGhlciBzdGF0ZXMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgaW5pdGlhbCBzdGF0ZSB1c2luZyB7QGxpbmsgb2t9LFxyXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxyXG4gKlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMge1N0YXRlfSBBbiBlbXB0eSBwYXJzZXIgc3RhdGUgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZShpbnB1dCkge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcclxuICAgICsgYGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXc7IHBhcnNlciBpbnB1dCB3YXMgJHt0eXBlb2YgaW5wdXR9YFxyXG5cclxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNUeXBlZEFycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcclxuICAgIH1cclxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRhVmlldykge1xyXG4gICAgICByZXR1cm4gaW5wdXRcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxyXG4gIH0pKGlucHV0KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmlldyxcclxuICAgIGluZGV4OiAwLFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXHJcbiAqIHN0YXRlLCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXHJcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgc3RhdGUuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBQYXJzZXJcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGJlZm9yZSB0aGUgcGFyc2VyIGlzIHJ1bi5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIHVwZGF0ZWQgc3RhdGUgYWZ0ZXIgdGhlIHBhcnNlciBpc1xyXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlclxyXG4gKiBmdW5jdGlvbiBhbmQgcmV0dXJucyBpdDsgaXQncyBoZXJlIGluIGNhc2Ugc29tZXRoaW5nIG1vcmUgbmVlZHMgdG8gYmVcclxuICogZG9uZSBpbiBwYXJzZXIgY3JlYXRpb24uIFRoaXMgaGFzIGhhcHBlbmVkIGluIHRoZSBwYXN0IGFuZCB2ZXJ5XHJcbiAqIGxpa2VseSB3aWxsIGFnYWluIGhhcHBlbiBpbiB0aGUgZnV0dXJlLlxyXG4gKlxyXG4gKiBXaGlsZSBpdCBpcyBub3QgY3VycmVudGx5IHNvLCB0aGVyZSBoYXZlIGJlZW4gdGltZXMgd2hlbiBiZWhhdmlvciBvZlxyXG4gKiBmdW5jdGlvbnMgcHJvZHVjZWQgYnkgdGhpcyBmYWN0b3J5IGRpZmZlcmVkIGZyb20gZ2VuZXJhbCBmdW5jdGlvbnMuXHJcbiAqIEJlY2F1c2Ugb2YgdGhlIHBvc3NpYmlsaXR5IHRoYXQgdGhpcyBjb3VsZCByZXR1cm4sIGl0J3Mgc3VnZ2VzdGVkIHRvXHJcbiAqIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYWxsIHBhcnNlcnMgcmF0aGVyIHRoYW4gcHJvZHVjaW5nIHRoZW1cclxuICogYnkgaGFuZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhcnNlcihmbikge1xyXG4gIHJldHVybiBmblxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLCBhcyB3ZWxsIGFzXHJcbiAqIGEgYFN0YXRlYCBwb3RlbnRpYWxseSB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cclxuICogQHBhcmFtIHsqfSBbdmFsdWU9bnVsbF0gVGhlIG5ldyByZXN1bHQgb2YgdGhlIHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXHJcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHN1Y2NlZWRlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvayhzdGF0ZSwgdmFsdWUgPSBudWxsLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XHJcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLk9rLCB2YWx1ZSB9XVxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXRcclxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgY29weSBvZiBgU3RhdGVgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXV0gVGhlIGVycm9ycyBhc3NvY2lhdGVkXHJcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXHJcbiAqICAgICBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcclxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXJyb3Ioc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XHJcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkVycm9yLCBlcnJvcnMgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZVxyXG4gKiBjb25zdW1pbmcgaW5wdXQsIGFzIHdlbGwgYXMgYSBuZXcgYFN0YXRlYCB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkXHJcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXHJcbiAqICAgICBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcclxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmF0YWwoc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XHJcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhdGFsLCBlcnJvcnMgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlciBhcHBsaWNhdG9pbiBmYWlsZWQuXHJcbiAqIFdoZXRoZXIgdGhpcyBpcyBhIGZhdGFsIGVycm9yIG9yIG5vdCBkZXBlbmRzIG9uIHdoZXRoZXIgYHRlc3RgIGlzXHJcbiAqIGB0cnVlYCAoZmF0YWwpIG9yIGBmYWxzZWAgKG5vbi1mYXRhbCkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdGVzdCBVc2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBwcm9kdWNlZCByZXN1bHRcclxuICogICAgIHJlcHJlc2VudHMgYSBmYXRhbCBlcnJvciAoYHRydWVgKSBvciBub3QgKGBmYWxzZWApLlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcclxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXliZUZhdGFsKHRlc3QsIHN0YXRlLCBlcnJvcnMgPSBbXSwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xyXG4gIHJldHVybiBbXHJcbiAgICB7IC4uLnN0YXRlLCBpbmRleCB9LFxyXG4gICAgeyBzdGF0dXM6IHRlc3QgPyBTdGF0dXMuRmF0YWwgOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9LFxyXG4gIF1cclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxyXG4gKiBhbiBhcnJheSBidWZmZXIsIG9yIGEgZGF0YSB2aWV3LiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBmaW5hbCBwYXJzZXJcclxuICogc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciBhZnRlciBiZWluZyBydW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xyXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxyXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XHJcbiAqICAgICB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBUaGUgZmluYWwgc3RhdGUgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZVxyXG4gKiAgICAgYmVlbiBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xyXG4gIHJldHVybiBwYXJzZXIobWFrZVN0YXRlKGlucHV0KSlcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBpbnZvY2F0aW9uIG9mIGBwYXJzZWAgd2FzIHN1Y2Nlc3NmdWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7W1N0YXRlLCBSZXN1bHRdfSByZXBseSBUaGUgc3RhdGUvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5XHJcbiAqICAgICBgcGFyc2VgLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBwYXJzZXIgc3VjY2VlZGVkIG9yIGBmYWxzZWAgaWYgaXRcclxuICogICAgIGRpZCBub3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VlZGVkKHJlcGx5KSB7XHJcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcclxuICogZGlkIG5vdCBzdWNjZWVkLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcclxuICogKGBza2lwYCwgYGxvb2tBaGVhZGAsIGV0Yy4pLiBUaGUgcHJvcGVyIHdheSB0byB0ZWxsIGlmIGEgcGFyc2VyXHJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiAgICAgYHBhcnNlYC5cclxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXHJcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXN1bHQocmVwbHkpIHtcclxuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IHJlcGx5WzFdLnZhbHVlIDogbnVsbFxyXG59XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnlcclxuICogYW4gdW5zdWNjZXNzZnVsIGludm9jYXRpb24gb2YgYHBhcnNlYC4gSWYgdGhlIHBhcnNlciB3YXMgYWN0dWFsbHlcclxuICogc3VjY2Vzc2Z1bCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtbU3RhdGUsIFJlc3VsdF19IHJlcGx5IFRoZSBzdGF0ZS9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnlcclxuICogICAgIGBwYXJzZWAuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZm9ybWF0dGVkIHN0cmluZyBkZXRhaWxpbmcgdGhlIGNpcmN1bXN0YW5jZXMgb2ZcclxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlKHJlcGx5KSB7XHJcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKC4uLnJlcGx5KVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcclxuICogc3VjY2VlZHMsIG9yIHRocm93cyBhbiBleGNlcHRpb24gd2l0aCB0aGUgcGFyc2VyJ3MgZXJyb3IgbWVzc2FnZSBpZlxyXG4gKiBpdCBmYWlscy5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXHJcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXHJcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cclxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcclxuICogICAgIHRleHQuXHJcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBhcHBsaWNhdGlvbiwgaWYgdGhlIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGFyc2VyIGZhaWxzLiBUaGUgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIGFcclxuICogICAgIGRldGFpbGVkIHJlY29yZCBvZiB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcnVuKHBhcnNlciwgaW5wdXQpIHtcclxuICBjb25zdCBbc3RhdGUsIHJlc3VsdF0gPSBwYXJzZXIobWFrZVN0YXRlKGlucHV0KSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSB7XHJcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlXHJcbiAgfVxyXG4gIHRocm93IG5ldyBFcnJvcihmb3JtYXRFcnJvcnMoc3RhdGUsIHJlc3VsdCkpXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7XHJcbiAgY2hhckxlbmd0aCxcclxuICBjb21tYVNlcGFyYXRlLFxyXG4gIG5leHRDaGFyV2lkdGgsXHJcbiAgdmlld1RvU3RyaW5nLFxyXG59IGZyb20gJy4vdXRpbCdcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5TdGF0ZX0gU3RhdGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlJlc3VsdH0gUmVzdWx0ICovXHJcblxyXG5jb25zdCB0YWIgPSAvXFx0L2d1XHJcbmNvbnN0IHplcm9XaWR0aCA9IC8oPzpcXHB7TW59fFxccHtDZn0pL2d1XHJcblxyXG4vKipcclxuICogQSBzeW1ib2wgZGVmaW5pbmcgdGhlIHR5cGUgb2YgYW4gZXJyb3IuXHJcbiAqIEBlbnVtIHtzeW1ib2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgRXJyb3JUeXBlID0ge1xyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcclxuICAgKiBtYWpvcml0eSBvZiBwYXJzZXJzLlxyXG4gICAqL1xyXG4gIEV4cGVjdGVkOiBTeW1ib2woJ2V4cGVjdGVkJyksXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSByZXN1bHQgdGhhdCB3YXMgbm90IGV4cGVjdGVkLiBUeXBpY2FsbHlcclxuICAgKiBwcm9kdWNlZCBieSBwYXJzZXJzIHN1Y2ggYXMgYHVuZXhwZWN0ZWRgIGFuZCBgbm90Rm9sbG93ZWRCeWAuXHJcbiAgICovXHJcbiAgVW5leHBlY3RlZDogU3ltYm9sKCd1bmV4cGVjdGVkJyksXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxyXG4gICAqIGJ5IHBhcnNlcnMgc3VjaCBhcyBgZmFpbGAgYW5kIGBmYWlsRmF0YWxseWAuXHJcbiAgICovXHJcbiAgR2VuZXJpYzogU3ltYm9sKCdnZW5lcmljJyksXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcclxuICAgKiBnZW5lcmFsbHkgdXNlZCBmb3IgYW4gZXJyb3IgdGhhdCBjYXVzZWQgYmFja3RyYWNraW5nLCB3aGVyZSB0aGVcclxuICAgKiBwYXJlbnQgZXJyb3IgaXMgcmVwb3J0ZWQgYWZ0ZXIgYmFja3RyYWNraW5nLlxyXG4gICAqL1xyXG4gIE5lc3RlZDogU3ltYm9sKCduZXN0ZWQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIG5lc3RlZCBlcnJvciB3aXRoIGl0cyBvd24gc2VwYXJhdGUgZXJyb3JcclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXHJcbiAgICovXHJcbiAgQ29tcG91bmQ6IFN5bWJvbCgnY29tcG91bmQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBzb21lIG90aGVyIGtpbmQgb2YgZXJyb3IgbWVzc2FnZSB0byBiZVxyXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXHJcbiAgICovXHJcbiAgT3RoZXI6IFN5bWJvbCgnb3RoZXInKSxcclxufVxyXG5cclxuLyoqXHJcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcclxuICogdG8gYSBwYXJ0aWN1bGFyIGluZGV4IG9yIG5lc3RlZC9jb21wb3VuZCBlcnJvcnMgdGhhdCBwb2ludCBiYWNrIHRvXHJcbiAqIHRoZSBzYW1lIGluZGV4IGJ1dCBhcHBseSB0byBhIGRpZmZlcmVudCBvbmUuXHJcbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcclxuICovXHJcblxyXG4vKipcclxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGF0IHRoZSBsb2NhdGlvbiByZWZlcnJlZCB0byBieSB0aGUgY3VycmVudFxyXG4gKiBzdGF0ZS4gVGhlIHR5cGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlcmUgdGhlIGxhYmVsIHNob3VsZCBiZVxyXG4gKiBwb3NpdGlvbmVkIGluIHRoZSBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2NhbEVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cclxuICovXHJcblxyXG4vKipcclxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGluIGEgZGlmZmVyZW50IGxvY2F0aW9uIHRoYW4gdGhlIG9uZSByZWZlcnJlZFxyXG4gKiB0byBieSB0aGUgY3VycmVudCBzdGF0ZS4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXHJcbiAqIGlzIGJhY2t0cmFja2luZzsgdGhlIGxvY2FsIGVycm9yIGNhbiB0cmFjayB0aGUgY3VycmVudFxyXG4gKiAocG9zdC1iYWNrdHJhY2spIGxvY2F0aW9uIHdoaWxlIHRoZSBuZXN0ZWQgZXJyb3IgcmV0YWlucyBpbmZvcm10aW9uXHJcbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXN0ZWRFcnJvclxyXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxyXG4gKiAgICAgYEVycm9yVHlwZS5OZXN0ZWRgLlxyXG4gKiBAcHJvcGVydHkge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWwgZXJyb3JcclxuICogICAgIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tIHRoZVxyXG4gKiAgICAgY3VycmVudCBzdGF0ZS5cclxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYHN0YXRlYC5cclxuICovXHJcblxyXG4vKipcclxuICogQSBuZXN0ZWQgZXJyb3IgdGhhdCBoYXMgaXRzIG93biBsYWJlbC4gVGhpcyBpcyBzaW1wbHkgZm9yIHByb2R1Y2luZ1xyXG4gKiBuaWNlciBlcnJvciBtZXNzYWdlczsgdGhpcyBlcnJvciBpcyB0eXBpY2FsbHkgb25seSBwcm9kdWNlZCBieSB0aGVcclxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb21wb3VuZEVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXHJcbiAqICAgICBgRXJyb3JUeXBlLkNvbXBvdW5kYC5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVycm9yLiBUaGlzXHJcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xyXG4gKiAgICAgdW5kZXIgdGhpcyBjb21wb3VuZCBlcnJvci5cclxuICogQHByb3BlcnR5IHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsIGVycm9yXHJcbiAqICAgICBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbSB0aGVcclxuICogICAgIGN1cnJlbnQgc3RhdGUuXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxyXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBzdGF0ZWAuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgZXJyb3IgbGlzdCBjb250YWluaW5nIG9uZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBleHBlY3RlZC5cclxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZXhwZWN0ZWQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZChsYWJlbCkge1xyXG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuRXhwZWN0ZWQsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS4gSXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmUgYXJyYXkgb2ZcclxuICogZXJyb3IgbWVzc2FnZXMgbWF5IGhhdmUgbXVsdGlwbGUgdW5leHBlY3RlZCBlcnJvcnMsIGJ1dCBvbmx5IHRoZVxyXG4gKiBmaXJzdCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGZvdW5kIGJ1dCB3YXNcclxuICogICAgIG5vdCBleHBlY3RlZC5cclxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwZWN0ZWQobGFiZWwpIHtcclxuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLlVuZXhwZWN0ZWQsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUaGVyZSBjYW4gYmUgbW9yZSB0aGFuIG9uZSBnZW5lcmljXHJcbiAqIGVycm9yIG1lc3NhZ2UgaW4gYW4gYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMsIGJ1dCBvbmx5IHRoZSBmaXJzdCB3aWxsXHJcbiAqIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGdlbmVyaWMgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5HZW5lcmljLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XHJcbiAqIGZvcm1hdHRlciBhdCBhbGwgYW5kIGFyZSBvbmx5IHVzZWZ1bCBmb3IgY3VzdG9tIGZvcm1hdHRlcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7RXJyb3JNZXNzYWdlfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgb3RoZXIgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdGhlcihsYWJlbCkge1xyXG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuT3RoZXIsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmVzdGVkIGVycm9yLiBUaGlzIHRha2VzIGFuIGVycm9yIGxpc3QgYW5kIHdyYXBzIGl0IHdpdGhcclxuICogc3RhdGUgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGUgbmVzdGVkXHJcbiAqIGVycm9yLCB0aGF0IGVycm9yIGlzIHNpbXBseSByZXR1cm5lZDsgYSBzaW5nbGUgbmVzdGVkIGVycm9yIHdpbGwgbm90XHJcbiAqIGJlIG5lc3RlZCBpbiBhbm90aGVyIG5lc3RlZCBlcnJvci5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgbmVzdGVkIGVycm9yXHJcbiAqICAgICBvY2N1cnJlZC5cclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcclxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIHN0YXRlLlxyXG4gKiBAcmV0dXJucyB7TmVzdGVkRXJyb3J9IEEgbmV3IG5lc3RlZCBlcnJvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoc3RhdGUsIGVycm9ycykge1xyXG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXHJcbiAgICA/IGVycm9yc1xyXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBzdGF0ZSwgZXJyb3JzIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGNvbXBvdW5kIGVycm9yLiBUaGlzIHdyYXBzIGFuIGVycm9yIGxpc3QganVzdCBhcyBhXHJcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxyXG4gKiBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGUgbmVzdGVkIGVycm9yLCBpdHMgaW5mb3JtYXRpb24gaXNcclxuICogdXNlZCB0byBjcmVhdGUgYSBuZXcgY29tcG91bmQgZXJyb3Igd2l0aG91dCBhbnkgbmVzdGVkIGVycm9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXR0YWNoZWQgdG8gdGhlIG5lc3RlZCBlcnJvci5cclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgY29tcG91bmQgZXJyb3JcclxuICogICAgIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxyXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gc3RhdGUuXHJcbiAqIEByZXR1cm5zIHtDb21wb3VuZEVycm9yfSBBIG5ldyBjb21wb3VuZCBlcnJvci5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgc3RhdGUsIGVycm9ycykge1xyXG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXHJcbiAgICA/IFt7XHJcbiAgICAgIHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCxcclxuICAgICAgc3RhdGU6IGVycm9ycy5zdGF0ZSxcclxuICAgICAgZXJyb3JzOiBlcnJvcnMuZXJyb3JzLFxyXG4gICAgICBsYWJlbCxcclxuICAgIH1dXHJcbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCwgc3RhdGUsIGVycm9ycywgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIE1lcmdlcyB0d28gYXJyYXlzIG9mIGVycm9ycy5cclxuICpcclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9yczEgVGhlIGZpcnN0IGFycmF5IG9mIGVycm9ycy5cclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9yczIgVGhlIHNlY29uZCBhcnJheSBvZiBlcnJvcnMuXHJcbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxyXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSwgZXJyb3JzMikge1xyXG4gIHJldHVybiBbLi4uZXJyb3JzMSwgLi4uZXJyb3JzMl1cclxufVxyXG5cclxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXHJcblxyXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXHJcblxyXG4vKipcclxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxyXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xyXG4gKiAgICAgZWl0aGVyIGEgbmV3bGluZSBvciB0aGUgYmVnaW5uaW5nIG9mIGEgbXVsdGktYnl0ZSBuZXdsaW5lLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXHJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcclxuICogICAgIGNoYXJhY3RlciBpcyBhIG5ld2xpbmUuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxyXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xyXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxyXG4gKiAgICAgYnl0ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBhbHdheXMgdGhlIGZpcnN0XHJcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcclxuICogICAgIGNoYXJhY3Rlci5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGxhc3RcclxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcclxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XHJcbiAqICAgICBieXRlIG9mIGEgbmV3bGluZSBjaGFyYWN0ZXIuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcclxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcclxuICogICAgIGZvciBkaXNwbGF5IG9mIGFuIGVycm9yIHBvc2l0aW9uIGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xyXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXHJcbiAqICAgICB3aXRoIHRhYiBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2Ygc3BhY2VzLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcclxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXHJcbiAqICAgICB0aGUgc3BhY2VzIHVzZWQgdG8gcmVwbGFjZSB0aGVtLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcclxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXHJcbiAqICAgICBwb2ludGVkIHRvIGJ5IHRoZSBgY2hhckluZGV4YCBwYXJhbWV0ZXIuIFRoaXMgaXMgYWRqdXN0ZWQgYnkgYW55XHJcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcclxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3JcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cclxuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxyXG4gKiAgICAgdGhlIGxpbmUgYWNjb3VudGluZyBmb3IgdGhvc2Ugc2FtZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cclxuICAqXHJcbiAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQb3NpdGlvblxyXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcclxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxyXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiBUaGUgY29sdW1uIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvXHJcbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcclxuICAqICAgICB0YWIgc2l6ZS5cclxuICAqL1xyXG5cclxuLyoqXHJcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIGJ5IGBmb3JtYXRFcnJvcnNgIHRvIGRvIHRoZSBhY3R1YWwgZm9ybWF0dGluZy4gQVxyXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXHJcbiAqIGRlc2lyZWQuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXHJcbiAqICAgICBlcnJvciBtZXNzYWdlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXHJcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xyXG4gKiAgICAgc3RvcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIGxpbmUgd2hlcmVcclxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxyXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cclxuICogQHJldHVybnMge3N0cmluZ30gQSBtdWx0aS1saW5lIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1cHBsaWVkXHJcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcclxuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcclxuICogbmV3bGluZTsgYHNraXBgIGlzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIChhbmQgdGhlcmVmb3JlIGhvdyBtYW55XHJcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cclxuICpcclxuICogQWxsIFVuaWNvZGUgbmV3bGluZXMgKENSLCBMRiwgRkYsIFZULCBORUwsIExTLCBhbmQgUFMpIGFyZSBoYW5kbGVkLFxyXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbnRvIGB2aWV3YCBpbmRpY2F0aW5nIHRoZSBieXRlIHRvXHJcbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7TmV3bGluZUluZm99IE5ld2xpbmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluZGV4ZWQgYnl0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcclxuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcclxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcclxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcclxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcclxuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcclxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcclxuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XHJcbiAgfVxyXG5cclxuICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XHJcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxyXG5cclxuICAgIGlmIChieXRlID09PSAweGMyICYmIG5leHRCeXRlID09PSAweDg1KSByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cclxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcclxuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXHJcbiAgICAgIGlmIChieXRlID09PSAweGUyICYmIG5leHRCeXRlID09PSAweDgwXHJcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXHJcbiAqIHZpZXcgdGhhdCBjb250YWlucyB0aGUgYnl0ZSBwb2ludGVkIGF0IGJ5IGBpbmRleGAuIEl0IGRvZXMgdGhpcyBieVxyXG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxyXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxyXG4gKiBiZWZvcmUgdGhlIGluZGV4IChhbmQgdGhlcmVmb3JlIHRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSB3aXRoIHRoZVxyXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxyXG4gKlxyXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRocmVlIHByb3BlcnRpZXM6IGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZVxyXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcclxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxyXG4gKiB3aGVyZSB0aGUgaW5kZXggYXBwZWFycy4gYGxpbmVub2AgaXMgMS1pbmRleGVkIHNpbmNlIGl0IGlzIG1lYW50IGZvclxyXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBsaW5lXHJcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHJldHVybnMge0xpbmVJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydGluZyBhbmQgZW5kaW5nXHJcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KSB7XHJcbiAgbGV0IHN0YXJ0ID0gMFxyXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcclxuICBsZXQgaSA9IDBcclxuXHJcbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgIGNvbnN0IHsgbmV3bGluZSwgc2tpcCB9ID0gaXNOZXdsaW5lKGksIHZpZXcpXHJcbiAgICBpZiAobmV3bGluZSkge1xyXG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IGkgLSAxLCBsaW5lbm8gfVxyXG4gICAgICB9XHJcbiAgICAgIGxpbmVubysrXHJcbiAgICAgIHN0YXJ0ID0gaSArIHNraXBcclxuICAgIH1cclxuICAgIGkgKz0gc2tpcFxyXG4gIH1cclxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXHJcbiAqIHNpbmdsZSBsaW5lIG9mIHRleHQgb2YgdGhlIGNoYXJhY3RlciBwb2ludGVkIHRvIGJ5IGBpbmRleGAgd2l0aGluXHJcbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cclxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cclxuICpcclxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxyXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXHJcbiAqIGlzIHRvIGFkanVzdCB3aGVuIG11bHRpLWJ5dGUgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXHJcbiAqICAgICBpbmRleCBpcyBiZWluZyBkZXRlcm1pbmVkLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxyXG4gKiAgICAgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXHJcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xyXG4gIGxldCBjaGFySW5kZXggPSAwXHJcbiAgbGV0IGJ5dGVJbmRleCA9IHN0YXJ0XHJcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxyXG4gICAgY2hhckluZGV4KytcclxuICB9XHJcbiAgcmV0dXJuIGNoYXJJbmRleFxyXG59XHJcblxyXG4vKipcclxuICogRXhwYW5kcyB0YWJzIGludG8gc3BhY2VzIGFuZCBjYWxjdWxhdGVzIHRoZSBjb2x1bW4gaW5kZXggb2YgdGhlXHJcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxyXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXHJcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcclxuICogaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IGhhcyB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgYXQgYnkgdGhlXHJcbiAqIGNoYXJhY3RlciBpbmRleC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0XHJcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzcGFjZXMgdGhhdCBjYW4gcmVwbGFjZVxyXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcclxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XHJcbiAqICAgICBpcyBhIG11bHRpcGxlIG9mIGB0YWJTaXplYC5cclxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcclxuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xyXG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxyXG4gIGxldCB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXHJcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XHJcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXHJcbiAgICB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXHJcbiAgfVxyXG5cclxuICAvLyByZXBsYWNlIGVhY2ggdGFiIHdpdGggdGhlIGNvcmVjdCBudW1iZXIgb2Ygc3BhY2VzLCBzaGlmdGluZyB0aGVcclxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxyXG4gIGxldCBvZmZzZXQgPSAwXHJcbiAgbGV0IHByZUluZGV4T2Zmc2V0ID0gMFxyXG4gIGxldCByZXN1bHQgPSBsaW5lXHJcblxyXG4gIGZvciAoY29uc3QgdGFiSW5kZXggb2YgdGFiSW5kZXhlcykge1xyXG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxyXG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcclxuICAgIGlmIChhY3R1YWxJbmRleCA8IGNoYXJJbmRleCArIHByZUluZGV4T2Zmc2V0KSB7XHJcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXHJcbiAgICB9XHJcbiAgICBvZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxyXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxyXG4gIH1cclxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xyXG4gKiBieSB0aGUgY29sdW1uIGluZGV4LiBUaGlzIGNvbHVtbiBudW1iZXIgaXMgMS1iYXNlZCAoZm9yIGRpc3BsYXksIHRoZVxyXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xyXG4gKiBtYXJrcy5cclxuICpcclxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcclxuICogMS1pbmRleGVkIGNvbHVtbiBudW1iZXIsIGFuZCBgbGVuZ3RoYCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lXHJcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XHJcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXHJcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cclxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBwb3RlbnRpYWxseSBjb250YWluaW5nXHJcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXHJcbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xyXG4gIGxldCBpbmRleCA9IGNvbEluZGV4XHJcbiAgY29uc3QgbWF0Y2hlcyA9IFtdXHJcblxyXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXHJcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XHJcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXHJcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxyXG4gICAgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxyXG4gIH1cclxuICByZXR1cm4ge1xyXG4gICAgY29sbm86IGluZGV4ICsgMSwgLy8gMS1iYXNlZFxyXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogR2VuZXJhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25lIGxpbmUgdGhhdCBpcyB0aGUgdGV4dCBhdCBhbmQgYXJvdW5kXHJcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXHJcbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxyXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXHJcbiAqIHRoZSBgbWF4V2lkdGhgIG9mIHRoZSBsaW5lIHRvIGRpc3BsYXkuIFRoZSBgbGVuZ3RoYCBwYXJhbWV0ZXIgaXMgdGhlXHJcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXHJcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxyXG4gKiBjYWxjdWxhdGVkIGluIHRoZSBvdGhlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yIHRhYnMgYW5kXHJcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBvdGVudGlhbGx5IHRydW5jYXRlZCBsaW5lIG9mIHRleHQsIGZvbGxvd2VkIGJ5XHJcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXHJcbiAqICAgICBjb2x1bW4uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xyXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXHJcblxyXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxyXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXHJcbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoICYmIGxlbmd0aCA8PSBtYXhXaWR0aCkge1xyXG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXHJcbiAgfVxyXG5cclxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxyXG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cclxuICAvLyBEaXNwbGF5IHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYWZ0ZXIgaXQgYW5kIHBvc2l0aW9uXHJcbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxyXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcclxuICAgIHJldHVybiBgJHtzcH0ke2xpbmUuc3Vic3RyaW5nKDAsIG1heFdpZHRoIC0gMyl9Li4uXFxuJHtzcH0ke1xyXG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcclxuICAgIH1eYFxyXG4gIH1cclxuXHJcbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxyXG4gIC8vIHBvaW50cyBhdCBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMylcclxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XHJcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XHJcbiAgLy8gcG9zaXRpb24gZm9yIHRoZSBjYXJldCwgYW5kIHBvc2l0aW9uIGl0IGJlbG93IHRoZSBsaW5lLlxyXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcclxuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXHJcbiAgICBjb25zdCBuZXdDb2xubyA9IGNvbG5vIC0gKGxlbmd0aCAtIG1heFdpZHRoKVxyXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcclxuICB9XHJcblxyXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XHJcbiAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYSBjaGFyYWN0ZXIgd2l0aGluIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdFxyXG4gIC8vIChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIFNoaWZ0IHRoZSBsaW5lIHRvIG1ha2UgdGhlIGNhcmV0IHBvaW50XHJcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxyXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cclxuICBjb25zdCBzdGFydCA9IGNvbG5vIC0gMSAtIE1hdGguY2VpbChtYXhXaWR0aCAvIDIpICsgM1xyXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcclxuICByZXR1cm4gYCR7c3B9Li4uJHtcclxuICAgIGxpbmUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXHJcbiAgfS4uLlxcbiR7c3B9JHtcclxuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXHJcbiAgfV5gXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxyXG4gKlxyXG4gKiBAcGFyYW0geyhOZXN0ZWRFcnJvcltdfENvbXBvdW5kRXJyb3JbXSl9IG5lc3RlZHMgQW4gYXJyYXkgb2YgZWl0aGVyXHJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcclxuICogICAgIHN0b3BzIGxheS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXHJcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXHJcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxyXG4gKiAgICAgbWVzc2FnZS5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBuZXN0ZWQgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcbmZ1bmN0aW9uIGZvcm1hdE5lc3RlZChuZXN0ZWRzLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KSB7XHJcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcclxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XHJcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBuLnN0YXRlXHJcbiAgICBjb25zdCBsYWJlbCA9IG4ubGFiZWxcclxuICAgICAgPyBgXFxuJHtzcH0ke24ubGFiZWx9IGNvdWxkIG5vdCBiZSBwYXJzZWQgYmVjYXVzZTpcXG5cXG5gXHJcbiAgICAgIDogYFxcbiR7c3B9VGhlIHBhcnNlciBiYWNrdHJhY2tlZCBhZnRlcjpcXG5cXG5gXHJcbiAgICByZXR1cm4gbGFiZWwgKyBmb3JtYXQobi5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ICsgMilcclxuICB9KVxyXG4gIHJldHVybiBuZXN0ZWRNc2dzLmpvaW4oJycpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbnN1cmVzIHRoYXQgYSBzdHJpbmcgZW5kcyB3aXRoIGEgY2VydGFpbiBudW1iZXIgb2YgbmV3bGluZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBzdHJpbmcgdGhhdCBpcyBzdXBwb3NlZCB0byBoYXZlIGEgY2VydGFpblxyXG4gKiAgICAgbnVtYmVyIG9mIG5ld2xpbmVzIGF0IHRoZSBlbmQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGJ1dCB3aXRoIGBjb3VudGAgbmV3bGluZXMgYXQgdGhlXHJcbiAqICAgICBlbmQuXHJcbiAqL1xyXG5mdW5jdGlvbiBlbnN1cmVOZXdsaW5lcyh0ZXh0LCBjb3VudCkge1xyXG4gIGxldCByZXN1bHQgPSB0ZXh0XHJcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XHJcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5sZW5ndGggLSAxKVxyXG4gIH1cclxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGRlZmF1bHQgZm9ybWF0dGVyIGZvciBlcnJvciBtZXNzYWdlcy5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XHJcbiAqXHJcbiAqIDEuIEEgcG9zaXRpb24gbGluZSB0aGF0IGdpdmVzIHRoZSBsaW5lIG51bWJlciBhbmQgY29sdW1uIG51bWJlciB3aGVyZVxyXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIDIuIEEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBsb2NhdGlvbi4gVGhpcyBwYXJ0IGdlbmVyYXRlc1xyXG4gKiAgICB0d28gbGluZXMgaW4gdGhlIGVycm9yIG1lc3NhZ2UuIFRoZSBmaXJzdCBpcyBlaXRoZXIgdGhlIGVudGlyZVxyXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxyXG4gKiAgICBzdGFydGVkIGFuZC9vciBlbmRlZCB3aXRoIGVsbGlwc2VzIHRoYXQgY29udGFpbnMgdGhlIGVycm9yXHJcbiAqICAgIGxvY2F0aW9uLiBUaGUgc2Vjb25kIGlzIGEgY2FyZXQgcG9zaXRpb25lZCB1bmRlcm5lYXRoIHRoZSBsb2NhdGlvblxyXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxyXG4gKiAzLiBUaGUgZmlyc3QgdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLCBpZiBhbnkuXHJcbiAqIDQuIEFsbCBvZiB0aGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXMgKGlmIGFueSksIHNlcGFyYXRlZCBieSAnb3InIGFuZFxyXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxyXG4gKiA1LiBUaGUgZmlyc3Qgb2YgdGhlIGdlbmVyaWMgbWVzc2FnZXMsIGlmIGFueS5cclxuICpcclxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxyXG4gKiB3aGljaCBpcyB0aGUgaW5kZXggd2l0aGluIHRoZSBhcnJheSBvZiBieXRlcyBpbiBgdmlld2Agd2hlcmUgdGhlXHJcbiAqIGVycm9yIG9jY3VycmVkLiBUaGUgY2FsY3VsYXRpb24gb2YgbGluZSBhbmQgY29sdW1uIG51bWJlciBmcm9tIHRoaXNcclxuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcclxuICpcclxuICogKiBNdWx0aS1ieXRlIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgaXMgVVRGLTggYXdhcmUsIHNvIGNoYXJhY3RlcnMgY2FuXHJcbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxyXG4gKiAqIE11bHRpLWNoYXJhY3RlciBhbmQgc2luZ2xlLWNoYXJhY3RlciBtdWx0aS1ieXRlIGxpbmUgZW5kaW5nc1xyXG4gKiAqIFRhYnMsIHdoaWNoIGFyZSBleHBhbmRlZCBpbnRvIGEgbnVtYmVyIG9mIHNwYWNlcyBzZXQgYnkgdGhlXHJcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxyXG4gKiAqIFplcm8td2lkdGggY2hhcmFjdGVycywgc3VjaCBhcyB6ZXJvLXdpZHRoIHNwYWNlcyBhbmQgam9pbmVycywgUlRMXHJcbiAqICAgb3IgTFRSIGZvcm1hdHRpbmcgY2hhcmFjdGVycywgYW5kIGRpYWNyaXRpY3MgKEhlYnJldyBvciBUaGFpIHZvd2VsXHJcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxyXG4gKlxyXG4gKiBUaGUgb3V0cHV0IGlzIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSA1IGVsZW1lbnRzIGFib3ZlLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXHJcbiAqIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCwgYXMgaXRzIG5hbWUgc3VnZ2VzdHMsIHR1cm5zIGEgc3RyaW5nIGludG8gYVxyXG4gKiBVVEYtOCBkYXRhIHZpZXcuIEl0J3MgY2FsbGVkIGJ5IGBwYXJzZWAgaXRzZWxmLCBzbyBpbiByZWFsIHdvcmxkXHJcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cclxuICpcclxuICogYGBgXHJcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXHJcbiAqIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXQoW2V4cGVjdGVkKCdhIGRpZ2l0JyldLCAyOSwgdmlldywgNCwgNzIpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGcm9tIHRoaXMgY2FsbCB0byBgZm9ybWF0YCwgdGhlIGZvbGxvd2luZyBtdWx0aS1saW5lIHN0cmluZyB3aWxsIGJlXHJcbiAqIHByb2R1Y2VkOlxyXG4gKlxyXG4gKiBgYGBcclxuICogUGFyc2UgZXJyb3IgYXQgKGxpbmUgMSwgY29sdW1uIDM3KTpcclxuICpcclxuICogICAgIE9ub21hdG9wb2VpYSAgICAgICAgICAgICAgICDguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIdcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxyXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gdGhlIHZpZXcgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcclxuICogICAgIHN0b3BzIGxheS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXHJcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXHJcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZW50PTBdIFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRoZSBtZXNzYWdlIHNob3VsZCBiZVxyXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XHJcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxyXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXHJcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcclxuXHJcbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxyXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXHJcbiAgY29uc3QgeyBjb2xubywgbGVuZ3RoIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXHJcblxyXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcclxuICBjb25zdCBkaXNwbGF5ID0gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50KVxyXG4gIGNvbnN0IGdlbmVyaWMgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcclxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXHJcbiAgY29uc3QgZXhwZWN0ZWQgPSBjb21tYVNlcGFyYXRlKFxyXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXHJcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxyXG4gIClcclxuXHJcbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxyXG4gIGNvbnN0IGNvbXBvdW5kID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuQ29tcG91bmQpXHJcblxyXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xyXG4gIGNvbnN0IGV4cE1zZyA9IGV4cGVjdGVkLmxlbmd0aCA/IGAke3NwfUV4cGVjdGVkICR7ZXhwZWN0ZWR9XFxuYCA6ICcnXHJcbiAgY29uc3QgZ2VuZXJpY01zZyA9IGdlbmVyaWMgPyBgJHtzcH0ke2dlbmVyaWMubGFiZWx9XFxuYCA6ICcnXHJcblxyXG4gIGNvbnN0IG5lc3RlZE1zZyA9IGZvcm1hdE5lc3RlZChuZXN0ZWQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXHJcbiAgY29uc3QgY29tcG91bmRNc2cgPSBmb3JtYXROZXN0ZWQoY29tcG91bmQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXHJcblxyXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcclxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ31gXHJcbiAgICAgICsgYCR7Y29tcG91bmRNc2d9JHtuZXN0ZWRNc2d9YCxcclxuICAgIDIsXHJcbiAgKVxyXG59XHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vKipcclxuICogQWNjZXB0cyBhIHBhcnNlciBzdGF0ZSBhbmQgcHJvZHVjZXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGl0LlxyXG4gKlxyXG4gKiBBIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHByb3ZpZGVkIGJ1dCBhbiBhbHRlcm5hdGUgb25lIGNhbiBiZSBwYXNzZWRcclxuICogaW4uIFRoZSBzYW1lIGdvZXMgZm9yIHRhYiBzaXplICh1c2VkIHRvIGV4cGFuZCB0YWJzIGluIHBhcnNlZCB0ZXh0O1xyXG4gKiBkZWZhdWx0cyB0byA4KSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0c1xyXG4gKiB0byA3MikuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBwYXJzZXIncyBzdGF0ZSB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cclxuICogQHBhcmFtIHtSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IHByb2R1Y2VkIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZVxyXG4gKiAgICAgdGFicyBzdG9wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xyXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxyXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcclxuICogICAgIGFjdHVhbCBmb3JtYXR0aW5nIGlzIGRlbGVnYXRlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMoXHJcbiAgc3RhdGUsIHJlc3VsdCwgdGFiU2l6ZSA9IDgsIG1heFdpZHRoID0gNzIsIGZvcm1hdHRlciA9IGZvcm1hdCxcclxuKSB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IGJ5dGUgb2YgdGhlIHN1cHBsaWVkIHN0YXRlLiBUaGVcclxuICogcG9zaXRpb24gaXMgYW4gb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIHRoYXQgYXJlXHJcbiAqIHRoZSAxLWJhc2VkIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRoZSBieXRlIGF0IHRoZSBzdGF0ZSdzIGluZGV4XHJcbiAqIHdpdGhpbiB0aGUgc3RhdGUncyBkYXRhIHZpZXcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSB3aG9zZSBjdXJyZW50IHBvc2l0aW9uIGlzIGJlaW5nXHJcbiAqICAgICBjYWxjdWxhdGVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZVxyXG4gKiAgICAgdGFicyBzdG9wLiBUaGUgY3VycmVudCBwb3NpdGlvbidzIGNvbHVtbiBudW1iZXIgaXMgYWRqdXN0ZWQgYmFzZWRcclxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXHJcbiAqIEByZXR1cm5zIHtQb3NpdGlvbn0gQSB0d28tcHJvcGVydHkgb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYFxyXG4gKiAgICAgcHJvcGVydGllcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihzdGF0ZSwgdGFiU2l6ZSA9IDgpIHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcclxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxyXG5cclxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXHJcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcclxuICBjb25zdCB7IGNvbG5vLCBfIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXHJcblxyXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFBBUlNFUlNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYWxwaGEsXHJcbiAgYW55LFxyXG4gIGFueU9mLFxyXG4gIGNoYXIsXHJcbiAgY2hhcmksXHJcbiAgZGlnaXQsXHJcbiAgZW9mLFxyXG4gIGhleCxcclxuICBsZXR0ZXIsXHJcbiAgbG93ZXIsXHJcbiAgbm9uZU9mLFxyXG4gIG9jdGFsLFxyXG4gIHJhbmdlLFxyXG4gIHNhdGlzZnksXHJcbiAgdXBwZXIsXHJcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXHJcbmV4cG9ydCB7XHJcbiAgY29uc3RhbnQsXHJcbiAgZmFpbCxcclxuICBmYWlsRmF0YWxseSxcclxuICBmYWlsVW5leHBlY3RlZCxcclxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcclxuZXhwb3J0IHtcclxuICBhbHBoYVUsXHJcbiAgbGV0dGVyVSxcclxuICBsb3dlclUsXHJcbiAgbmV3bGluZSxcclxuICBuZXdsaW5lVSxcclxuICByZWdleCxcclxuICBzcGFjZSxcclxuICBzcGFjZVUsXHJcbiAgc3BhY2VzLFxyXG4gIHNwYWNlczEsXHJcbiAgc3BhY2VzMVUsXHJcbiAgc3BhY2VzVSxcclxuICB1cHBlclUsXHJcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xyXG5leHBvcnQge1xyXG4gIGFsbCxcclxuICBhbnlTdHJpbmcsXHJcbiAgc3RyaW5nLFxyXG4gIHN0cmluZ2ksXHJcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIENPTUJJTkFUT1JTXHJcblxyXG5leHBvcnQge1xyXG4gIGJhY2t0cmFjayxcclxuICBibG9ja0IsXHJcbiAgYm90aEIsXHJcbiAgY2hhaW5CLFxyXG4gIGNob2ljZSxcclxuICBjb3VudEIsXHJcbiAgZmFsbGJhY2ssXHJcbiAgbGVmdEIsXHJcbiAgbWFueVRpbGxCLFxyXG4gIG9wdGlvbmFsLFxyXG4gIHJpZ2h0QixcclxuICBzZXF1ZW5jZUIsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZSdcclxuZXhwb3J0IHtcclxuICBiZXR3ZWVuLFxyXG4gIGJvdGgsXHJcbiAgY2hhaW4sXHJcbiAgZmlmdGgsXHJcbiAgZmlyc3QsXHJcbiAgZm91cnRoLFxyXG4gIGpvaW4sXHJcbiAgbGVmdCxcclxuICBtYXAsXHJcbiAgbnRoLFxyXG4gIHBpcGUsXHJcbiAgcmlnaHQsXHJcbiAgc2Vjb25kLFxyXG4gIHNraXAsXHJcbiAgdGhpcmQsXHJcbiAgdmFsdWUsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jaGFpbmluZydcclxuZXhwb3J0IHtcclxuICBmb2xsb3dlZEJ5LFxyXG4gIGZvbGxvd2VkQnlMLFxyXG4gIGxvb2tBaGVhZCxcclxuICBub3RFbXB0eSxcclxuICBub3RGb2xsb3dlZEJ5LFxyXG4gIG5vdEZvbGxvd2VkQnlMLFxyXG59IGZyb20gJy4vY29tYmluYXRvcnMvY29uZGl0aW9uYWwnXHJcbmV4cG9ydCB7XHJcbiAgYmFja0xhYmVsLFxyXG4gIGxhYmVsLFxyXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWVzc2FnZSdcclxuZXhwb3J0IHtcclxuICBhc3NvY2wsXHJcbiAgYXNzb2NsMSxcclxuICBhc3NvY3IsXHJcbiAgYXNzb2NyMSxcclxuICBibG9jayxcclxuICBjb3VudCxcclxuICBtYW55LFxyXG4gIG1hbnkxLFxyXG4gIG1hbnlUaWxsLFxyXG4gIHNlcEJ5LFxyXG4gIHNlcEJ5MSxcclxuICBzZXBFbmRCeSxcclxuICBzZXBFbmRCeTEsXHJcbiAgc2VxdWVuY2UsXHJcbiAgc2tpcE1hbnksXHJcbiAgc2tpcE1hbnkxLFxyXG59IGZyb20gJy4vY29tYmluYXRvcnMvc2VxdWVuY2UnXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBQQVJTRVIgVE9PTFMgQU5EIFVUSUxJVElFU1xyXG5cclxuZXhwb3J0IHtcclxuICBTdGF0dXMsXHJcbiAgZXJyb3IsXHJcbiAgZmFpbHVyZSxcclxuICBmYXRhbCxcclxuICBtYWtlUGFyc2VyLFxyXG4gIG1heWJlRmF0YWwsXHJcbiAgb2ssXHJcbiAgcGFyc2UsXHJcbiAgcmVzdWx0LFxyXG4gIHJ1bixcclxuICBzdWNjZWVkZWQsXHJcbn0gZnJvbSAnLi9jb3JlJ1xyXG5leHBvcnQge1xyXG4gIEVycm9yVHlwZSxcclxuICBjb21wb3VuZCxcclxuICBleHBlY3RlZCxcclxuICBmb3JtYXRFcnJvcnMsXHJcbiAgZ2VuZXJpYyxcclxuICBnZXRQb3NpdGlvbixcclxuICBtZXJnZSxcclxuICBuZXN0ZWQsXHJcbiAgb3RoZXIsXHJcbiAgdW5leHBlY3RlZCxcclxufSBmcm9tICcuL2Vycm9yJ1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xyXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xyXG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXHJcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxyXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxyXG4gIGFueU9mOiBhcnJheSA9PiAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxyXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXHJcbiAgY2hhcmk6IGMgPT4gcXVvdGUoYyksXHJcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcclxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxyXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxyXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcclxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXHJcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxyXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcclxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcclxuICBuZXdsaW5lVTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcclxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXHJcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXHJcbiAgc2F0aXNmeTogZm4gPT4ge1xyXG4gICAgY29uc3QgbmFtZSA9IGZuLm5hbWUubGVuZ3RoID8gZm4ubmFtZSA6ICc8YW5vbnltb3VzPidcclxuICAgIHJldHVybiBgYSBjaGFyYWN0ZXIgdGhhdCBzYXRpc2ZpZXMgZnVuY3Rpb24gJyR7bmFtZX0nYFxyXG4gIH0sXHJcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcclxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXNVOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxVTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxyXG4gIHN0cmluZzogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgc3RyaW5naTogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcclxuICB1cHBlclU6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XHJcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxyXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxyXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxyXG4gIGFueU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLmFueU9mKGFycmF5KSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcclxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXHJcbiAgY2hhcmk6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyaShjKSksXHJcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxyXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxyXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxyXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxyXG4gIGxldHRlclU6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyVSksXHJcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxyXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxyXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXHJcbiAgbmV3bGluZVU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZVUpLFxyXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcclxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcclxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxyXG4gIHNhdGlzZnk6IGZuID0+IGV4cGVjdGVkKHN0cmluZ3Muc2F0aXNmeShmbikpLFxyXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcclxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcclxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxyXG4gIHNwYWNlc1U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzVSksXHJcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxyXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxyXG4gIHN0cmluZzogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nKHN0cikpLFxyXG4gIHN0cmluZ2k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ2koc3RyKSksXHJcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxyXG4gIHVwcGVyVTogZXhwZWN0ZWQoc3RyaW5ncy51cHBlclUpLFxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydENoYXIsXHJcbiAgYXNzZXJ0RnVuY3Rpb24sXHJcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcclxuICBvcmRpbmFsQ2hhcixcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXHJcbmltcG9ydCB7IGR1cCwgbmV4dENoYXIgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXHJcbiAqIHN1Y2NlZWRzIG9yIGZhaWxzIGJhc2VkIG9uIHRoZSByZXR1cm4gdmFsdWUuXHJcbiAqXHJcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcclxuICogYFN0cmluZ1BhcnNlcmAgaW5zdGVhZCwgYnV0IHdoZW4gd29ya2luZyB3aXRoIHNpbmdsZSBjaGFyYWN0ZXJzIHRoZXJlXHJcbiAqIGFyZSBjZXJ0YWluIGFzc3VtcHRpb25zIHRoYXQgY2FuIGJlIG1hZGUgKHN1Y2ggYXMgdGhlIG51bWJlciBvZlxyXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cclxuICogYmUgYSBsaXR0bGUgbW9yZSBlZmZpY2llbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xyXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXHJcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXHJcbiAqL1xyXG5jb25zdCBDaGFyUGFyc2VyID0gZm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3Ioc3RhdGUpXHJcblxyXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxyXG4gIHJldHVybiBmbihuZXh0KSA/IG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKSA6IGVycm9yKHN0YXRlKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcclxuICogc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBVcG9uIGZhaWx1cmUsIHRoaXMgcGFyc2VyIGRvZXMgbm90XHJcbiAqIGNvbnN1bWUgaW5wdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXHJcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXHJcbiAqICAgICBhbHdheXMgZmFpbC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIGlzIHRoZSBuZXh0XHJcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoYXIgPSBjID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0Q2hhcignY2hhcicsIGMpXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihuZXh0ID0+IGMgPT09IG5leHQpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5jaGFyKGMpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcclxuICogc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdFxyXG4gKiB0aGUgY29tcGFyaXNvbiBkb25lIGJ5IHRoaXMgcGFyc2VyIGlzIGNhc2UtaW5zZW5zaXRpdmUuIFVwb24gZmFpbHVyZSxcclxuICogdGhpcyBwYXJzZXIgZG9lcyBub3QgY29uc3VtZSBpbnB1dC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcclxuICogICAgIGFsd2F5cyBmYWlsLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgKG9yIGl0c1xyXG4gKiAgICAgb3RoZXItY2FzZWQgY291bnRlcnBhcnQpIGlzIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhcmkgPSBjID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0Q2hhcignY2hhcmknLCBjKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoXHJcbiAgICByZWFkID0+IGMudG9Mb3dlckNhc2UoKSA9PT0gcmVhZC50b0xvd2VyQ2FzZSgpLFxyXG4gICkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmNoYXJpKGMpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcclxuICogcHJvdmlkZWQgZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXJcclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xyXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xyXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXHJcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F0aXNmeSA9IGZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnknLCBmbilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc2F0aXNmeShmbikpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyXHJcbiAqIGl0IGlzIGJldHdlZW4gdGhlIHByb3ZpZGVkIHN0YXJ0IGFuZCBlbmQgY2hhcmFjdGVycyAoaW5jbHVzaXZlKS4gSWZcclxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXHJcbiAqIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXHJcbiAqXHJcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcclxuICogbm90LCB0aGUgZnVsbCBzdHJpbmdzIGFyZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3Rlciwgd2hpY2hcclxuICogbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIFwiQmV0d2VlblwiIGlzIGRlZmluZWQgYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzLiBUaGlzIGlzIGZpbmUgaW4gbW9zdFxyXG4gKiBjYXNlcywgYnV0IGl0IGNhbiBnZXQgd2VpcmQgd2l0aCBoaWdoZXIgY29kZSBwb2ludHMuIEZvciBleGFtcGxlLFxyXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxyXG4gKiBUaGUgYGhgIHdvdWxkIGluc3RlYWQgYmUgdGhlIFBsYW5jaydzIENvbnN0YW50IGNoYXJhY3Rlciwgd2hpY2ggaXMgaW5cclxuICogYSBjb21wbGV0ZWx5IGRpZmZlcmVudCBwYXJ0IG9mIHRoZSBVbmljb2RlIHNwZWN0cnVtIGFuZCB0aGVyZWZvcmUgaXNcclxuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0IFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGVcclxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2VcclxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydENoYXIoJ3JhbmdlJywgc3RhcnQsIG9yZGluYWxDaGFyKCdmaXJzdCcpKVxyXG4gICAgYXNzZXJ0Q2hhcigncmFuZ2UnLCBlbmQsIG9yZGluYWxDaGFyKCdzZWNvbmQnKSlcclxuICB9XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gc3RhcnQgJiYgYyA8PSBlbmRcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMucmFuZ2Uoc3RhcnQsIGVuZCkpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxyXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5hbnkpXHJcblxyXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxyXG4gIHJldHVybiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcclxuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXHJcbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlb2YgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcclxuICAgID8gb2soc3RhdGUsIG51bGwpIDogZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5lb2YpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcclxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xyXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcclxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGUgcGFyc2VyXHJcbiAqIHdpbGwgc3VjY2VlZC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxyXG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYVxyXG4gKiAgICAgbWVtYmVyIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXHJcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbnlPZiA9IGNoYXJzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JBcnJheSgnYW55T2YnLCBjaGFycylcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxyXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cclxuXHJcbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxyXG4gICAgPyBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aCkgOiBlcnJvcihzdGF0ZSwgZXhwZWN0ZWRzLmFueU9mKGFycikpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcclxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xyXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcclxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcclxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxyXG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGFcclxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcclxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNoYXJzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY2hhcnMpXHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXHJcblxyXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5ub25lT2YoYXJyKSkgOiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgZGlnaXQuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIFVuaWNvZGUgZGVjaW1hbCBkaWdpdDsgZm9yXHJcbiAqIHRoYXQsIHVzZSBgcmVnZXgoL1xccHtOZH0vKWAuIFRoaXMgcGFyc2VyIHN1Y2NlZWRzIG9ubHkgZm9yIHRoZVxyXG4gKiBsaXRlcmFsIGNoYXJhY3RlcnMgYDAtOWAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGlnaXQgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuZGlnaXQpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGV4ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xyXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnRidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuaGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb2N0YWwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMub2N0YWwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVyczsgYHVsZXR0ZXJgXHJcbiAqIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxldHRlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXIpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSVxyXG4gKiBjaGFyYWN0ZXJzOyBgdWFscGhhYCBpcyBhIFVuaWNvZGUgYWxwaGFudW1lcmljIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbHBoYSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xyXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcclxuICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFscGhhKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcclxuICogYHV1cHBlcmAgaXMgYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXIgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwcGVyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ0EnICYmIGMgPD0gJ1onXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnVwcGVyKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzO1xyXG4gKiBgdWxvd2VyYCBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb3dlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sb3dlcilcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgbWFrZVBhcnNlciwgb2sgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZ2VuZXJpYywgdW5leHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWRcclxuICogdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCBiZSB0aGUgbmV3IHBhcnNlcidzIHJlc3VsdC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgd2l0aCBgdmFsdWVgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0geCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IG9rKHN0YXRlLCB4KSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbCA9IG1lc3NhZ2UgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRTdHJpbmcoJ2ZhaWwnLCBtZXNzYWdlKVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgZ2VuZXJpYyhtZXNzYWdlKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uIFRoaXMgc2lnbmlmaWVzIGFcclxuICogZmF0YWwgZXJyb3IsIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXHJcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhaWxGYXRhbGx5ID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbEZhdGFsbHknLCBtZXNzYWdlKVxyXG4gIHJldHVybiBmYXRhbChzdGF0ZSwgZ2VuZXJpYyhtZXNzYWdlKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSB1bmV4cGVjdGVkXHJcbiAqICAgICBlcnJvci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXHJcbiAqICAgICBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhaWxVbmV4cGVjdGVkID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbFVuZXhwZWN0ZWQnLCBtZXNzYWdlKVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgdW5leHBlY3RlZChtZXNzYWdlKSlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydFN0cmluZ09yUmVnRXhwIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xyXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxyXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cclxuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cclxuXHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3VcclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3VcclxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cclxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XHJcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cclxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3VcclxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cclxuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xyXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cclxuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxyXG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xyXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXHJcbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXNcclxuICogaXQgYXMgZmFyIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cclxuICpcclxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xyXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xyXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcclxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXHJcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXHJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xyXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cclxuICovXHJcbmNvbnN0IFJlZ2V4UGFyc2VyID0gcmUgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcclxuXHJcbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxyXG4gIHJldHVybiBtYXRjaFxyXG4gICAgPyBvayhzdGF0ZSwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxyXG4gICAgOiBlcnJvcihzdGF0ZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXJcclxuICogZXhwcmVzc2lvbiB0byB0aGUgaW5wdXQgdGV4dCBhdCB0aGUgY3VycmVudCBsb2NhdGlvbi4gSWYgdGhlcmUgaXMgYVxyXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxyXG4gKiBpcyBjb25zdW1lZCB1cG9uIGZhaWx1cmUuXHJcbiAqXHJcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXHJcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cclxuICpcclxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcclxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcclxuICogbWF0Y2ggd2lsbCBiZSBjb25zaWRlcmVkIGFueXdheS4gVGhlc2UgdHdvIHJ1bGVzIGVuc3VyZSB0aGF0IHRoZVxyXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcclxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXHJcbiAqICAgICBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIG5vIGZsYWdzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXHJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xyXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXHJcblxyXG4gIC8vIEZpcnN0LCBjb252ZXJ0IHRvIGEgcmVndWxhciBleHByZXNzaW9uIGlmIGl0J3MgYSBzdHJpbmdcclxuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxyXG5cclxuICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCBhIF4gYW5jaG9yXHJcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxyXG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcclxuICBpZiAocmVhbmNob3IpIHtcclxuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxyXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZWdleCkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcclxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGV0dGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTGV0dGVyKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubGV0dGVyVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFscGhhbnVtZXJpYy4gQSBjaGFyYWN0ZXIgaXMgYWxwaGFudW1lcmljIGlmIGl0IGhhcyBlaXRoZXIgdGhlXHJcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFscGhhVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlQWxwaGEpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYVUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXHJcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxyXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjb25zdCB1cHBlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVVwcGVyKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMudXBwZXJVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxyXG4gKiBVbmljb2RlIGBMb3dlcmNhc2VgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTG93ZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sb3dlclUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxyXG4gKiBvciBgXFxyXFxuYCkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVNwYWNlKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2UpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcclxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cclxuICpcclxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxyXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXNwYWNlKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2VVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxyXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXJcclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcclxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXHJcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVTcGFjZXMpKHN0YXRlKVxyXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxyXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cclxuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXHJcbiAqIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90XHJcbiAqIHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtuZXh0LCBfXSA9IFJlZ2V4UGFyc2VyKHJlVXNwYWNlcykoc3RhdGUpXHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcclxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcclxuICogb25seSBmYWlsIGlmIHRoZXJlIGlzIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT25cclxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gUmVnZXhQYXJzZXIocmVTcGFjZXMxKShzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsKSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZXMxKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXHJcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsIG9ubHkgZmFpbCBpZiB0aGVyZSBpc1xyXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxyXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVVzcGFjZXMxKShzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsKSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZXMxVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcclxuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXHJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxyXG4gKiBOZXdsaW5lcyB0aGlzIHBhcnNlciByZWNvZ25pemVzIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZ1xyXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcclxuICpcclxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxyXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXHJcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcclxuICpcclxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcclxuICogYFxcclxcbmAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbmV3bGluZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm5ld2xpbmUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXHJcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cclxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XHJcbiAqXHJcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcclxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxyXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXHJcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXHJcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxyXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxyXG4gKlxyXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXHJcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxyXG4gKlxyXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxyXG4gKiBgXFxyXFxuYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5uZXdsaW5lVSlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydE51bWJlciwgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xyXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIG5leHRDaGFycywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGVcclxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgdGV4dC4gQSBzdHJpbmcgb2YgY2hhcmFjdGVycyBlcXVhbCBpbiBsZW5ndGhcclxuICogdG8gYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXHJcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXHJcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxyXG4gKiAgICAgc2hvdWxkIHJlYWQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogYm9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgcmVhZFxyXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHJlYWQgc3RyaW5nIHBhc3Nlc1xyXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cclxuICovXHJcbmNvbnN0IFN0cmluZ1BhcnNlciA9IChsZW5ndGgsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gb2soc3RhdGUsICcnKVxyXG5cclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXHJcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXHJcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxyXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcclxuICogcmVjb2duaXplZCBwcm9wZXJseS5cclxuICpcclxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXHJcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xyXG4gKiAgICAgb2YgdGhlIGlucHV0LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXHJcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcclxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcclxuICApKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcclxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXHJcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXHJcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxyXG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxyXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXHJcbiAqXHJcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xyXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcclxuICogICAgIG9mIHRoZSBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xyXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5naScsIHN0cilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIoXHJcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxyXG4gICkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnN0cmluZ2koc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cclxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcclxuICByZXR1cm4gb2soc3RhdGUsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXHJcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcclxuICogbm90IHRoYXQgbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXHJcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFueVN0cmluZyhuKSlcclxufSlcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5TdGF0ZX0gU3RhdGUgKi9cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcclxuXHJcbi8qKlxyXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW5cclxuICogZW5kaW5nIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xyXG4gKiAgICAgbnVtYmVyIGZvcm1zIHRoZSB1cHBlciBib3VuZCBvZiB0aGUgcmFuZ2Ugd2l0aG91dCBiZWluZyBpbmNsdWRlZFxyXG4gKiAgICAgaW4gaXQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XHJcbiAqICAgICBkdXJpbmcgZWFjaCBpdGVyYXRpb24uXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxyXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXHJcbiAqIEB5aWVsZHMge251bWJlcn0gVGhlIHZhbHVlcyB0aGF0IG1ha2UgdXAgdGhlIHJhbmdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcclxuICBjb25zdCBzID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBzdGFydCA6IDBcclxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxyXG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxyXG4gIGNvbnN0IGkgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcidcclxuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xyXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXHJcblxyXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxyXG4gIGxldCBjdXJyZW50ID0gc1xyXG5cclxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcclxuICAgIGlmIChmb3J3YXJkKSB7XHJcbiAgICAgIHJldHVybiBpID8gY3VycmVudCA+IGUgOiBjdXJyZW50ID49IGVcclxuICAgIH1cclxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcclxuICB9XHJcblxyXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cclxuICB3aGlsZSAoIWZpbmlzaGVkKCkpIHtcclxuICAgIHlpZWxkIGN1cnJlbnRcclxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxyXG4gIH1cclxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHRvIGJlIHRoZSBmaXJzdCBpbiB0aGVcclxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxyXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxyXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgVUNTLTIgKHJlZ3VsYXIgSmF2YVNjcmlwdCBzdHJpbmcpIHJlcHJlc2VudGF0aW9uXHJcbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb1N0cmluZyhpbmRleCwgbGVuZ3RoLCB2aWV3KSB7XHJcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXHJcbiAgICB7IGxlbmd0aCB9LFxyXG4gICAgKF8sIGkpID0+IHZpZXcuZ2V0VWludDgoaW5kZXggKyBpKSxcclxuICApXHJcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIFVURi04IGRhdGEgdmlldyBvZiBhIFVDUy0yIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxyXG4gKiBAcmV0dXJucyB7RGF0YVZpZXd9IEEgZGF0YSB2aWV3IG92ZXIgdGhlIFVURi04IGJ5dGVzIG9mIHRoZSBpbnB1dFxyXG4gKiAgICAgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvVmlldyhzdHIpIHtcclxuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxyXG4gKiBmcm9tIHRoZSBudW1iZXIgb2YgVUNTLTIgY2hhcmFjdGVycyBpbiB0aGUgc2FtZSBzdHJpbmcsIG1lYW5pbmcgdGhpc1xyXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIG9mIHdoaWNoIHRvIGdldCB0aGUgY2hhcmFjdGVyIGxlbmd0aC5cclxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhckxlbmd0aChzdHIpIHtcclxuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxyXG4gKiBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcclxuICogICAgIHRoZSBmaXJzdCAoYW5kIHBlcmhhcHMgb25seSkgYnl0ZSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXHJcbiAqICAgICBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBieXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcclxuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcclxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxyXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxyXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMCkgcmV0dXJuIDNcclxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XHJcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcclxuICAvLyBhc2NpaSBjb2RlcyBpcyB1c2VkXHJcbiAgcmV0dXJuIDFcclxufVxyXG5cclxuLyoqXHJcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV4dCBUaGUgbmV4dCBjaGFyYWN0ZXIocykuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cclxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cclxuICogdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxyXG4gKiAgICAgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxyXG4gKiAgICAgZGF0YSB2aWV3LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XHJcbiAgY29uc3Qgd2lkdGggPSBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KVxyXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxyXG4gKiB3aXRoaW4gdGhlIHZpZXcuIEVhY2ggb2YgdGhlc2UgY2hhcmFjdGVycyBtYXkgYmUgMS0sIDItLCAzLSwgb3JcclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXHJcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcclxuICogcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXHJcbiAqICAgICB0aGUgZmlyc3QgZGVzaXJlZCBjaGFyYWN0ZXIuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cclxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGVcclxuICogICAgIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGNvdW50KSB7XHJcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxyXG4gIGxldCB3aWR0aCA9IDBcclxuXHJcbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xyXG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcclxuICAgIGlmIChpID49IHZpZXdMZW5ndGgpIGJyZWFrXHJcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXHJcbiAgfVxyXG4gIGlmIChpbmRleCArIHdpZHRoID49IHZpZXdMZW5ndGgpIHtcclxuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XHJcbiAgfVxyXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3Vycm91bmQgaW4gc2luZ2xlIHF1b3Rlcy5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBxdW90ZShzdHIpIHtcclxuICByZXR1cm4gYCcke3N0cn0nYFxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0d28gY29waWVzIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICpcclxuICogV2hpbGUgdGhpcyB3aWxsIGR1cGxpY2F0ZSBhbnkgdmFsdWUsIGl0J3MgcHJpbWFyaWx5IHVzZWZ1bCBmb3JcclxuICogY292ZXJpbmcgYSBtaXNzaW5nIHBhcnQgb2YgSmF2YVNjcmlwdCBkZXN0cnVjdHVyaW5nLCBzbyBgdmFsdWVgXHJcbiAqIHNob3VsZCBnZW5lcmFsbHkgYmUgYW4gYXJyYXkgb3Igb2JqZWN0LlxyXG4gKlxyXG4gKiBUaGF0IG1pc3NpbmcgcGFydCBpcyByZWZlcmVuY2UgdG8gdGhlIGVudGlyZSB2YWx1ZS4gSmF2YVNjcmlwdCB3aWxsXHJcbiAqIGFsbG93IGRlc3RydWN0dXJpbmcgdG8gcmVmZXJlbmNlIGFueSBhbmQgYWxsIHBhcnRzIG9mIGEgdmFsdWUsIGJ1dCBpdFxyXG4gKiBkb2VzIG5vdCBoYXZlIGEgc3ludGF4IChsaWtlIHRoZSBgQGAgb3BlcmF0b3IgaW4gbGFuZ3VhZ2VzIGxpa2UgU2NhbGFcclxuICogYW5kIEhhc2tlbGwpIHRvIHJlZmVyZW5jZSB0aGUgZW50aXJlIHZhbHVlIGF0IHRoZSBzYW1lIHRpbWUuIFVzaW5nXHJcbiAqIHRoaXMgZnVuY3Rpb24sIG9uZSBvZiB0aGUgY29waWVzIGNhbiBiZSByZXRhaW5lZCBhcyBhIHdob2xlIHdoaWxlXHJcbiAqIHByb3ZpZGluZyBhbm90aGVyIGNvcHkgZm9yIGRlc3RydWN0dXJpbmcuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqIGBgYFxyXG4gKiBjb25zdCBbd2hvbGUsIFtzdGF0ZSwgdmFsdWVdXSA9IGR1cChwYXJzZShwYXJzZXIsIGlucHV0KSlcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7W1N0YXRlLCBSZXN1bHRdfSB2YWx1ZSBBbnkgdmFsdWUuXHJcbiAqIEByZXR1cm5zIHtbW1N0YXRlLCBSZXN1bHRdLCBbU3RhdGUsIFJlc3VsdF1dfSBBbiBhcnJheSBjb250YWluaW5nIHR3b1xyXG4gKiAgICAgY29waWVzIG9mIHRoZSB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkdXAodmFsdWUpIHtcclxuICByZXR1cm4gW3ZhbHVlLCB2YWx1ZV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENvbW1hLXNlcGFyYXRlcyAoYXMgbmVlZGVkKSB0aGUgc3RyaW5ncyBpbiB0aGUgcHJvdmlkZWQgYXJyYXkuIElmXHJcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XHJcbiAqIGhhcyBvbmx5IG9uZSBlbGVtZW50LCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIGFycmF5IGhhc1xyXG4gKiB0d28gZWxlbWVudHMsIHRoZXkgd2lsbCBiZSBqb2luZWQgd2l0aCAnIG9yICcgYmV0d2VlbiB0aGVtLiBJZiB0aGVcclxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcclxuICogYW4gYWRkaXRpb25hbCAnb3InIGJldHdlZW4gdGhlIGxhc3QgdHdvIGVsZW1lbnRzIChPeGZvcmQgY29tbWFcclxuICogc3R5bGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtZXNzYWdlcyBUaGUgc3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgam9pbmVkIGludG9cclxuICogICAgIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21tYVNlcGFyYXRlKG1lc3NhZ2VzKSB7XHJcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcclxuICAgIGNhc2UgMDogcmV0dXJuICcnXHJcbiAgICBjYXNlIDE6IHJldHVybiBtZXNzYWdlc1swXVxyXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGNvbnN0IG1zZ3MgPSBtZXNzYWdlcy5zbGljZSgpXHJcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXHJcbiAgICAgIHJldHVybiBgJHttc2dzLmpvaW4oJywgJyl9LCBvciAke2xhc3R9YFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9