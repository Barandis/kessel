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

/***/ "./src/combinators/alternative.js":
/*!****************************************!*\
  !*** ./src/combinators/alternative.js ***!
  \****************************************/
/*! exports provided: alt, altL, optional, orElse, back, seqB, chainB, leftB, rightB, bothB, countB, manyTillB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return alt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "altL", function() { return altL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orElse", function() { return orElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "back", function() { return back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seqB", function() { return seqB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return leftB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return rightB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return bothB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return countB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return manyTillB; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



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
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const alt = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const errors = [];

  for (const p of ps) {
    const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
    errors.push(...result.errors);
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, errors);
});
/**
 * Creates a parser that implements alternatives, but with a failure
 * message included. The parsers are tried one at a time as with `alt`,
 * but if they all fail (or if any fail fatally), the last argument is
 * used as the expected message rather than constructing it out of the
 * expected messages of each failed parser.
 *
 * `altL(ps, message)` is an optimized version of `label(alt(ps),
 * message)`.
 *
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @param {string} message The message for the `Expected` error that
 *     will result from the parser failing.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const altL = (ps, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  for (const p of ps) {
    const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;

    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message)]);
    }
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message)]);
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
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied value
 * `x`. This parser only fails if its contained parser fails fatally.
 *
 * `orElse(p, x)` is an optimized implementation of `alt([p,
 * constant(x)])`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */

const orElse = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, x);
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

const back = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors, index);
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
 * Note that `seqB(ps)` is not the same as `back(seq(ps))`, as the
 * former will fail fatally if one of `ps` fails fatally, while the
 * latter will fail non-fatally in that case.
 *
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */

const seqB = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors, index);
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
 * Note that `chainB(p, fn)` is not the same as `back(chain(p, fn))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(fn(result1.value)(next1));
  if (result2.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return tuple2;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, result2.errors, index);
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
 * Note that `leftB(p1, p2)` is not the same as `back(left(p1, p2))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */

const leftB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;

  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, result2.errors, index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, result1.value);
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
 * Note that `rightB(p1, p2)` is not the same as `back(right(p1, p2))`,
 * as the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */

const rightB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return tuple2;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, result2.errors, index);
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
 * Note that `bothB(p1, p2)` is not the same as `back(both(p1, p2))`, as
 * the former will fail fatally if one of its parsers fails fatally,
 * while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const bothB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;

  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, [result1.value, result2.value]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, result2.errors, index);
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
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors, index);
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
    const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(end(next));
    next = next1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) break;
    const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(next));
    next = next2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;

    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next2, [...result2.errors, ...result1.errors], index);
    }

    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});

/***/ }),

/***/ "./src/combinators/chaining.js":
/*!*************************************!*\
  !*** ./src/combinators/chaining.js ***!
  \*************************************/
/*! exports provided: chain, map, join, skip, value, left, right, both, pipe, between */
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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(fn(result1.value)(next1));
  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple2;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
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
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, fn(result.value));
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
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value.join(''));
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
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
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
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, x);
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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [next2, result2] = p2(next1);

  if (result2.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, result1.value);
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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p2(next1));
  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple2;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [next2, result2] = p2(next1);

  if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next2, [result1.value, result2.value]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
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

    if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
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
  const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(pre(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple1;
  const [next2, result2] = p(next1);

  if (result2.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next2.index !== index, next2, result2.errors);
  }

  const [next3, result3] = post(next2);
  if (result3.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next3, result2.value);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next3.index !== index, next3, result3.errors);
});

/***/ }),

/***/ "./src/combinators/conditional.js":
/*!****************************************!*\
  !*** ./src/combinators/conditional.js ***!
  \****************************************/
/*! exports provided: lookAhead, notEmpty, followedBy, followedByL, notFollowedBy, notFollowedByL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return lookAhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
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
  return result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, result.value, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors, index);
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
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */

const notEmpty = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const index = state.index;
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok || next.index !== index) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('the parser to consume input')]);
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
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, undefined, index);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
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

  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(msg)], index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
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
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, undefined, index);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
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

  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(msg)], index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null, index);
});

/***/ }),

/***/ "./src/combinators/message.js":
/*!************************************!*\
  !*** ./src/combinators/message.js ***!
  \************************************/
/*! exports provided: label */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that applies the supplied parser. If that parser
 * consumes input, nothing additional happens. If it fails non-fatally,
 * the returned parser fails in the same way, but it replaces the
 * supplied parser's errors with an expected error whose message is the
 * supplied string.
 *
 * This can be used to provide better error messages in cases where the
 * automatically generated error messages are insufficient.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} message The new `Expected` error message if `p`
 *     fails.
 * @returns {Parser} A parser that applies `p` and passes its results
 *     through except for changing its `Expected` error message upon
 *     failure.
 */

const label = (p, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message)]);
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: seq, block, many, many1, skipMany, skipMany1, sepBy, sepBy1, sepEndBy, sepEndBy1, count, manyTill, chainl, chainl1, chainr, chainr1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return seq; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainl", function() { return chainl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainl1", function() { return chainl1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainr", function() { return chainr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainr1", function() { return chainr1; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


/** @typedef {import('kessel/core').Parser} Parser */

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
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */


const seq = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
      return next.index === index ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, result.errors);
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

    if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
      return next.index === index ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, result.errors) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, result.errors);
    }

    nextValue = result.value;
  }
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful results into an array and providing
 * that as its own result. The returned parser only fails if the
 * supplied parser consumes input when it fails. Otherwise, it succeeds
 * even if the supplied parser doesn't succeed even once.
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
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    values.push(result.value);
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, values);
});
/**
 * Creates a parser that applies the supplied parser until it fails,
 * collecting all of the successful results into an array and providing
 * that as its own result. The contained parser must succeed at least
 * once, or the returned parser will fail. Otherwise, the returned
 * parser only fails if the supplied parser consumes input when it
 * fails.
 *
 * @param {Parser} p A parser to be applied one or more times.
 * @returns {Parser} A parser that applies the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  let next = nextState;
  const values = [result.value];

  while (true) {
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    values.push(result.value);
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
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  let next = nextState;

  while (true) {
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [tuple1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuple2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    if (next.index === index) throw new Error(loopMessage('sepBy'));
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [tuple1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuple2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    if (next.index === index) throw new Error(loopMessage('sepBy1'));
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [tuple1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuple2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    if (next.index === index) throw new Error(loopMessage('sepEndBy'));
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [tuple1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuple2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    if (next.index === index) throw new Error(loopMessage('sepEndBy1'));
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

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["range"])(n)) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) {
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
    const [tuple1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(end(next));
    next = next1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple1;
    if (result1.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) break;
    const [tuple2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = next2;
    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple2;

    if (result2.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["maybeFatal"])(next.index !== index, next, [...result2.errors, ...result1.errors]);
    }

    values.push(result2.value);
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

const chainl = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [tupleop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(op(next));
    next = nextop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tupleop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuplep, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextp;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuplep;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["range"])(ops.length)) {
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

const chainl1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [tupleop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(op(next));
    next = nextop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tupleop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuplep, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextp;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuplep;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["range"])(ops.length)) {
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

const chainr = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [tupleop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(op(next));
    next = nextop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tupleop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuplep, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextp;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuplep;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["range"])(ops.length - 1, -1)) {
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

const chainr1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [tupleop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(op(next));
    next = nextop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tupleop;
    if (resultop.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    const [tuplep, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextp;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuplep;
    if (resultp.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, value, index);
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: Status, makeState, makeParser, ok, error, fatal, maybeFatal, parse */
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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/** @typedef {import('./error.js').ParseError} ParseError */

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
 * @property {ParseError[]} errors A list of errors that occurred during
 *     an unsuccessful parse.
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
      return Object(_util__WEBPACK_IMPORTED_MODULE_0__["stringToView"])(input);
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
 * Runs a parser against an input. This input can be a string, a typed
 * array, an array buffer, or a data view. The return value is the final
 * parser state returned by the parser after being run.
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

/***/ }),

/***/ "./src/error.js":
/*!**********************!*\
  !*** ./src/error.js ***!
  \**********************/
/*! exports provided: ErrorType, makeError, expectedError, unexpectedError, genericError, otherError, push, clear, overwrite, isNewline, getLineIndexes, getCharIndex, tabify, getColNumber, show, format, formatErrors, getPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return ErrorType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeError", function() { return makeError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "expectedError", function() { return expectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unexpectedError", function() { return unexpectedError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericError", function() { return genericError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otherError", function() { return otherError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "push", function() { return push; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return clear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overwrite", function() { return overwrite; });
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
  /** Error type representing an expected result. */
  Expected: Symbol('expected'),

  /** Error type representing a result that was not expected. */
  Unexpected: Symbol('unexpected'),

  /** Error type representing a generic error message. */
  Generic: Symbol('message'),

  /**
   * Error type representing some other kind of error message to be
   * displayed in a custom error formatter.
   */
  Other: Symbol('other')
};
/**
 * An error generated when a parser fails.
 *
 * @typedef {Object} ParseError
 * @property {ErrorType} type The type of the parse error.
 * @property {string} message The error message.
 */

/**
 * Creates a new `ParseError`.
 *
 * @param {ErrorType} type The type of the parse error.
 * @param {string} message The error message.
 * @returns {ParseError} A new `ParseError` with the given type and
 *     message.
 */

function makeError(type, message) {
  return {
    type,
    message
  };
}
/**
 * Creates an expected error. Multiple expected errors can be a part of
 * a single error message, and the default formatter will comma-separate
 * them and preface them with the word 'Expected'.
 *
 * @param {string} message The message describing what was expected.
 * @returns {ParseError} A new parse error of the expected type.
 */

function expectedError(message) {
  return makeError(ErrorType.Expected, message);
}
/**
 * Creates an unexpected error. The default formatter will display only
 * the first unexpected error, and it will be prefaced with
 * 'Unexpected'.
 *
 * @param {string} message The message describing what was found but was
 *     not expected.
 * @returns {ParseError} A new parse error of the unexpected type.
 */

function unexpectedError(message) {
  return makeError(ErrorType.Unexpected, message);
}
/**
 * Creates a generic error. The default formatter will display only
 * the first generic error, below the other errors, and it will be
 * unprefaced.
 *
 * @param {string} message The generic error's message.
 * @returns {ParseError} A new parse error of the generic type.
 */

function genericError(message) {
  return makeError(ErrorType.Generic, message);
}
/**
 * Creates an other error. These errors are not displayed by the default
 * formatter at all and are only useful for custom formatters.
 *
 * @param {string} message The other error's message.
 * @returns {ParseError} A new parse error of the other type.
 */

function otherError(message) {
  return makeError(ErrorType.Other, message);
}
/**
 * Adds one or more parse errors to an array of errors.
 *
 * @param {ParseError[]} list The array of errors to add to.
 * @param {...ParseError} errors The error(s) to be pushed onto the end
 *     of the array.
 * @returns {ParseError[]} A new array that is a shallow copy of `list`
 *     with the elements of `errors` added to the end.
 */

function push(list, ...errors) {
  return [...list, ...errors];
} // Clears all errors of a particular type from a list of errors. If
// `type` is not provided, all errors will be cleared. Multiple types
// can be provided.

/**
 * Clears all errors of a particular type from a list of errors. If no
 * `types` are provided, all errors will be cleared.
 *
 * @param {ParseError[]} list The array of errors to clear from.
 * @param {...ErrorType} types The error types to be removed from the
 *     array. If no types are provided, all errors will be removed.
 * @returns {ParseError[]} A shallow copy of `list` with all errors of
 *     the provided type(s) removed.
 */

function clear(list, ...types) {
  if (types.length === 0) return [];
  return list.filter(error => !types.includes(error.type));
}
/**
 * Clears all errors from an array of errors that are of the same error
 * type as any of the provided errors, and then adds those errors to the
 * end of the array.
 *
 * @param {ParseError[]} list The array of errors to overwrite to.
 * @param {...ParseError} errors The error(s) to be pushed onto the end
 *     of the array, after all errors of those types are removed.
 * @returns {ParseError[]} A new array that is a shallow copy of `list`
 *     with the elements of `errors` replacing those of the same type
 *     from the original array.
 */

function overwrite(list, ...errors) {
  const types = errors.map(error => error.type);
  const result = list.filter(error => !types.includes(error.type));
  return [...result, ...errors];
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

function show(line, length, colno, maxWidth) {
  // First case: the line is shorter than maxWidth. Display the line
  // with the caret positioned below it.
  if (colno <= maxWidth && length <= maxWidth) {
    return `${line}\n${' '.repeat(colno - 1)}^`;
  } // Second case: the line is longer than (maxWidth - 3) and the caret
  // points to a character in the first (maxWidth - 3) characters.
  // Display the first part of the line with `...` after it and position
  // the caret below it.


  if (colno <= maxWidth - 3) {
    return `${line.substring(0, maxWidth - 3)}...\n${' '.repeat(colno - 1)}^`;
  } // Third case: the line is longer than (maxWidth - 3) and the caret
  // points at a character that is not in the first (maxWidth - 3)
  // characters but is in the last (maxWidth - 3) characters. Display
  // the last part of the line with `...` before it, calculate a new
  // position for the caret, and position it below the line.


  if (colno >= length - maxWidth + 3) {
    const start = length - maxWidth + 3;
    const newColno = colno - (length - maxWidth);
    return `...${line.substring(start)}\n${' '.repeat(newColno - 1)}^`;
  } // Final case: the line is longer than maxWidth - 3 and the caret
  // does not point to a character within either the first or last
  // (maxWidth - 3) characters. Shift the line to make the caret point
  // at the middle of it, add `...` to the start *and* end, and position
  // the caret below it.


  const start = colno - 1 - Math.ceil(maxWidth / 2) + 3;
  const end = colno - 1 + Math.floor(maxWidth / 2) - 3;
  return `...${line.substring(start, end)}...\n${' '.repeat(Math.ceil(maxWidth / 2))}^`;
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
 */

function format(errors, index, view, tabSize, maxWidth) {
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
    length
  } = getColNumber(colIndex, line);
  const position = `Parse error at (line ${lineno}, column ${colno}):`;
  const display = show(line, length, colno, maxWidth);
  const message = errors.find(error => error.type === ErrorType.Generic);
  const unexpected = errors.find(error => error.type === ErrorType.Unexpected);
  const expected = Object(_util__WEBPACK_IMPORTED_MODULE_0__["commaSeparate"])(errors.filter(error => error.type === ErrorType.Expected).map(error => error.message));
  const unexpMsg = unexpected ? `Unexpected ${unexpected.message}\n` : '';
  const expMsg = expected.length ? `Expected ${expected}\n` : '';
  const msgMsg = message ? `${message.message}\n` : '';
  return `${position}\n\n${display}\n${unexpMsg}${expMsg}${msgMsg}\n`;
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
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, upper, constant, fail, failFatally, unexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, alt, altL, back, bothB, chainB, countB, leftB, manyTillB, optional, orElse, rightB, seqB, between, both, chain, join, left, map, pipe, right, skip, value, followedBy, followedByL, lookAhead, notEmpty, notFollowedBy, notFollowedByL, label, block, chainl, chainl1, chainr, chainr1, count, many, many1, manyTill, sepBy, sepBy1, sepEndBy, sepEndBy1, seq, skipMany, skipMany1, Status, error, fatal, makeParser, maybeFatal, ok, parse, ErrorType, clear, expectedError, formatErrors, genericError, getPosition, otherError, overwrite, push, unexpectedError */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unexpected", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["unexpected"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["alt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "altL", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["altL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "back", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["countB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orElse", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["orElse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["rightB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seqB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["seqB"]; });

/* harmony import */ var _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/chaining */ "./src/combinators/chaining.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "both", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["both"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_5__["value"]; });

/* harmony import */ var _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinators/conditional */ "./src/combinators/conditional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedBy", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["followedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedByL", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["followedByL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["lookAhead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedByL", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedByL"]; });

/* harmony import */ var _combinators_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/message */ "./src/combinators/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _combinators_message__WEBPACK_IMPORTED_MODULE_7__["label"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainl", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["chainl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainl1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["chainl1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainr", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["chainr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainr1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["chainr1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["manyTill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["seq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany1"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "makeParser", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["makeParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maybeFatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["maybeFatal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["ok"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["parse"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "clear", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["clear"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expectedError", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["expectedError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatErrors", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["formatErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "genericError", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["genericError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["getPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "otherError", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["otherError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "overwrite", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["overwrite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unexpectedError", function() { return _error__WEBPACK_IMPORTED_MODULE_10__["unexpectedError"]; });

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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



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

const CharParser = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;

  if (index >= view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])('EOF')]);
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);

  if (fn(next)) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(next))]);
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


const char = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(next => c === next)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(c))]);
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

const chari = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(read => c.toLowerCase() === read.toLowerCase())(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(c))]);
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

const satisfy = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const name = fn.name.length ? fn.name : '<anonymous>';
  const message = `a character that satisfies function "${name}"`;
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message)]);
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

const range = (start, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= start && c <= end;

  const message = `a character between "${start}" and "${end}"`;
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message)]);
});
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */

const any = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;

  if (index === view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('any character'), Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])('EOF')]);
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
});
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 */

const eof = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;

  if (index === view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, null);
  }

  const {
    _,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('EOF'), Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(next))]);
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

const anyOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);
  const arr = [...chars];
  if (arr.includes(next)) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
  const message = 'any of ' + Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["commaSeparate"])(arr.map(c => `"${c}"`));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message), Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(next))]);
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

const noneOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);
  const arr = [...chars];

  if (arr.includes(next)) {
    const message = 'none of ' + Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["commaSeparate"])(arr.map(c => `"${c}"`));
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(message), Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(next))]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a digit')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a hex digit')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '7';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('an octal digit')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a letter')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('an alphanumeric character')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('an uppercase letter')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z';

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a lowercase letter')]);
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: constant, fail, failFatally, unexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "constant", function() { return constant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return failFatally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unexpected", function() { return unexpected; });
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
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

const constant = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, x));
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const fail = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["genericError"])(message)]));
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const failFatally = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["genericError"])(message)]));
/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} message The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const unexpected = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(message)]));

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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



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
 * `length` is the length of the returned `actual` state property upon
 * failure. If it's not provided, the length will be the same as the
 * length of the regular expression's source.
 *
 * @param {RegExp} re The regular expression used to match against the
 *     input text starting at its current position.
 * @param {number} [length] The length of the resulting `Unexpected`
 *     error message if the parser fails. If this is not present, that
 *     message will be as long as the string representation of the
 *     regular expression, just as a guess.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */

const RegexParser = (re, length = null) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["viewToString"])(index, view.byteLength - index, view);
  const match = rest.match(re);

  if (match) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["stringToView"])(match[0]).byteLength);
  }

  let len = length !== null && length !== void 0 ? length : Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(re.source) - 1; // to ignore anchor

  if (len > view.byteLength - index) {
    len = view.byteLength - index;
  }

  const actual = len === 0 ? 'EOF' : Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])([...rest].slice(0, len).join(''));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(actual)]);
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


const regex = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  // First, convert to a regular expression if it's a string
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

  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(regex)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(`a string matching ${regex}`)]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reLetter, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a letter')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reAlpha, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('an alphanumeric character')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUpper, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('an uppercase letter')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reLower, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a lowercase letter')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reSpace, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('whitespace')]);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 */

const spaceU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUspace, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('whitespace')]);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, _] = RegexParser(reSpaces, 1)(state);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */

const spacesU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, _] = RegexParser(reUspaces, 1)(state);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, result] = RegexParser(reSpaces1, 1)(state);
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('whitespace')]);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, result] = RegexParser(reUspaces1, 1)(state);
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('whitespace')]);
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

const newline = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reNewline, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a newline')]);
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

const newlineU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUnewline, 1)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])('a newline')]);
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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



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

const StringParser = (length, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  if (length === 0) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, '');
  const {
    index,
    view
  } = state;

  if (index >= view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])('EOF')]);
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChars"])(index, view, length);

  if (Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(next) !== length || !fn(next)) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, [Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(next))]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
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


const string = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(str), chars => str === chars)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(str))]);
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

const stringi = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["quote"])(str))]);
});
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 */

const all = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const width = view.byteLength - index;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["viewToString"])(index, width, view), index + width);
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

const anyString = n => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(n, () => true)(state));
  if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, [...result.errors, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expectedError"])(`a string of ${n} characters`)]);
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
 * Surrounds the supplied string in double quotes.
 *
 * @param {string} str The string to surround in double quotes.
 * @returns {string} The same string, led and trailed by double quotes.
 */

function quote(str) {
  return `"${str}"`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NoYWluaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jb25kaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImFsdCIsInBzIiwibWFrZVBhcnNlciIsInN0YXRlIiwiZXJyb3JzIiwicCIsInR1cGxlIiwibmV4dCIsInJlc3VsdCIsImR1cCIsInN0YXR1cyIsIlN0YXR1cyIsIk9rIiwicHVzaCIsIkZhdGFsIiwiZmF0YWwiLCJlcnJvciIsImFsdEwiLCJtZXNzYWdlIiwiZXhwZWN0ZWRFcnJvciIsIm9wdGlvbmFsIiwib2siLCJvckVsc2UiLCJ4IiwiRXJyb3IiLCJiYWNrIiwiaW5kZXgiLCJzZXFCIiwidmFsdWVzIiwibmV4dFN0YXRlIiwidmFsdWUiLCJjaGFpbkIiLCJmbiIsInR1cGxlMSIsIm5leHQxIiwicmVzdWx0MSIsInR1cGxlMiIsIm5leHQyIiwicmVzdWx0MiIsImxlZnRCIiwicDEiLCJwMiIsInJpZ2h0QiIsImJvdGhCIiwiY291bnRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJza2lwIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsInBpcGUiLCJiZXR3ZWVuIiwicHJlIiwicG9zdCIsIm5leHQzIiwicmVzdWx0MyIsImxvb2tBaGVhZCIsIm5vdEVtcHR5IiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlMIiwibXNnIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlMIiwibGFiZWwiLCJsb29wTWVzc2FnZSIsIm5hbWUiLCJzZXEiLCJibG9jayIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcE1hbnkiLCJza2lwTWFueTEiLCJzZXBCeSIsInNlcCIsIm5leHRTdGF0ZTEiLCJuZXh0U3RhdGUyIiwic2VwQnkxIiwic2VwRW5kQnkiLCJzZXBOZXh0Iiwic2VwRW5kQnkxIiwiY291bnQiLCJtYW55VGlsbCIsImNoYWlubCIsIm9wIiwib3BzIiwidHVwbGVvcCIsIm5leHRvcCIsInJlc3VsdG9wIiwidHVwbGVwIiwibmV4dHAiLCJyZXN1bHRwIiwiaSIsImxlbmd0aCIsImNoYWlubDEiLCJjaGFpbnIiLCJjaGFpbnIxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiU3ltYm9sIiwibWFrZVN0YXRlIiwiaW5wdXQiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwidGFiIiwiemVyb1dpZHRoIiwiRXJyb3JUeXBlIiwiRXhwZWN0ZWQiLCJVbmV4cGVjdGVkIiwiR2VuZXJpYyIsIk90aGVyIiwibWFrZUVycm9yIiwidHlwZSIsInVuZXhwZWN0ZWRFcnJvciIsImdlbmVyaWNFcnJvciIsIm90aGVyRXJyb3IiLCJsaXN0IiwiY2xlYXIiLCJ0eXBlcyIsImZpbHRlciIsImluY2x1ZGVzIiwib3ZlcndyaXRlIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwicmVwZWF0IiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsImNoYXJMZW5ndGgiLCJzaG93IiwibWF4V2lkdGgiLCJuZXdDb2xubyIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJmb3JtYXQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsInVuZXhwZWN0ZWQiLCJleHBlY3RlZCIsImNvbW1hU2VwYXJhdGUiLCJ1bmV4cE1zZyIsImV4cE1zZyIsIm1zZ01zZyIsImZvcm1hdEVycm9ycyIsImZvcm1hdHRlciIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwiQ2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJxdW90ZSIsImNoYXIiLCJjIiwiY2hhcmkiLCJyZWFkIiwidG9Mb3dlckNhc2UiLCJzYXRpc2Z5IiwiYW55IiwiZW9mIiwiYW55T2YiLCJjaGFycyIsImFyciIsIm5vbmVPZiIsImRpZ2l0IiwiaGV4Iiwib2N0YWwiLCJsZXR0ZXIiLCJhbHBoYSIsInVwcGVyIiwibG93ZXIiLCJjb25zdGFudCIsImZhaWwiLCJmYWlsRmF0YWxseSIsInJlTGV0dGVyIiwicmVBbHBoYSIsInJlVXBwZXIiLCJyZUxvd2VyIiwicmVTcGFjZSIsInJlVXNwYWNlIiwicmVTcGFjZXMiLCJyZVVzcGFjZXMiLCJyZVNwYWNlczEiLCJyZVVzcGFjZXMxIiwicmVOZXdsaW5lIiwicmVVbmV3bGluZSIsIlJlZ2V4UGFyc2VyIiwicmUiLCJyZXN0IiwibGVuIiwic291cmNlIiwiYWN0dWFsIiwic2xpY2UiLCJyZWdleCIsIlJlZ0V4cCIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJsZXR0ZXJVIiwiYWxwaGFVIiwidXBwZXJVIiwibG93ZXJVIiwic3BhY2UiLCJzcGFjZVUiLCJzcGFjZXMiLCJzcGFjZXNVIiwic3BhY2VzMSIsInNwYWNlczFVIiwibmV3bGluZVUiLCJTdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJzdHJpbmciLCJzdHIiLCJzdHJpbmdpIiwiYWxsIiwiYW55U3RyaW5nIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJsYXN0IiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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U0FBUzRILEtBQVQsQ0FBZTZELEdBQWYsRUFBb0I7QUFDekIsU0FBUSxJQUFHQSxHQUFJLEdBQWY7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2xRLEdBQVQsQ0FBYXFCLEtBQWIsRUFBb0I7QUFDekIsU0FBTyxDQUFDQSxLQUFELEVBQVFBLEtBQVIsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3FLLGFBQVQsQ0FBdUI2RixRQUF2QixFQUFpQztBQUN0QyxVQUFRQSxRQUFRLENBQUNyTCxNQUFqQjtBQUNFLFNBQUssQ0FBTDtBQUFRLGFBQU8sRUFBUDs7QUFDUixTQUFLLENBQUw7QUFBUSxhQUFPcUwsUUFBUSxDQUFDLENBQUQsQ0FBZjs7QUFDUixTQUFLLENBQUw7QUFBUSxhQUFPQSxRQUFRLENBQUMzTyxJQUFULENBQWMsTUFBZCxDQUFQOztBQUNSO0FBQVM7QUFDUCxjQUFNNE8sSUFBSSxHQUFHRCxRQUFRLENBQUN6QyxLQUFULEVBQWI7QUFDQSxjQUFNMkMsSUFBSSxHQUFHRCxJQUFJLENBQUNFLEdBQUwsRUFBYjtBQUNBLGVBQVEsR0FBRUYsSUFBSSxDQUFDNU8sSUFBTCxDQUFVLElBQVYsQ0FBZ0IsUUFBTzZPLElBQUssRUFBdEM7QUFDRDtBQVJIO0FBVUQsQyIsImZpbGUiOiJrZXNzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIHJhbmdlIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYWx0ZXJuYXRpdmVzLiBFYWNoIG9mIHRoZSBzdXBwbGllZFxuICogcGFyc2VycyBpcyBhcHBsaWVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLiBXaGVuIHRoZSBmaXJzdCBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aGUgZmlyc3QgcGFyc2VyIGZhaWxzIHdoaWxlIGNvbnN1bWluZyBpbnB1dCwgZXhlY3V0aW9uXG4gKiBpcyBzdG9wcGVkIGFuZCB0aGUgc3RhdGUgZnJvbSB0aGF0IGxhc3QgcGFyc2VyIGlzIHBhc3NlZCB0aHJvdWdoLiBUaGVcbiAqIHNhbWUgaGFwcGVucyBpZiBhbGwgcGFyc2VycyBhcmUgYXBwbGllZCB3aXRob3V0IGFueSBvZiB0aGVtXG4gKiBzdWNjZWVkaW5nLlxuICpcbiAqIE9uIGZhaWx1cmUsIGFsbCBvZiB0aGUgYEV4cGVjdGVkYCBlcnJvcnMgZnJvbSBhbnkgb2YgdGhlIGNvbnRhaW5lZFxuICogcGFyc2VycyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoaXMgcGFyc2VyJ3MgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyW119IHBzIFRoZSBwYXJzZXJzIHRvIGFwcGx5IHRvIHRoZSBpbnB1dCwgb25lIGF0IGFcbiAqICAgICB0aW1lLCB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZSBmYWlscyBmYXRhbGx5LCBvciBhbGwgZmFpbC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQgPSBwcyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZXJyb3JzID0gW11cblxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICAgIGVycm9ycy5wdXNoKC4uLnJlc3VsdC5lcnJvcnMpXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIGZhdGFsKG5leHQsIGVycm9ycylcbiAgfVxuICByZXR1cm4gZXJyb3Ioc3RhdGUsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYWx0ZXJuYXRpdmVzLCBidXQgd2l0aCBhIGZhaWx1cmVcbiAqIG1lc3NhZ2UgaW5jbHVkZWQuIFRoZSBwYXJzZXJzIGFyZSB0cmllZCBvbmUgYXQgYSB0aW1lIGFzIHdpdGggYGFsdGAsXG4gKiBidXQgaWYgdGhleSBhbGwgZmFpbCAob3IgaWYgYW55IGZhaWwgZmF0YWxseSksIHRoZSBsYXN0IGFyZ3VtZW50IGlzXG4gKiB1c2VkIGFzIHRoZSBleHBlY3RlZCBtZXNzYWdlIHJhdGhlciB0aGFuIGNvbnN0cnVjdGluZyBpdCBvdXQgb2YgdGhlXG4gKiBleHBlY3RlZCBtZXNzYWdlcyBvZiBlYWNoIGZhaWxlZCBwYXJzZXIuXG4gKlxuICogYGFsdEwocHMsIG1lc3NhZ2UpYCBpcyBhbiBvcHRpbWl6ZWQgdmVyc2lvbiBvZiBgbGFiZWwoYWx0KHBzKSxcbiAqIG1lc3NhZ2UpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGBFeHBlY3RlZGAgZXJyb3IgdGhhdFxuICogICAgIHdpbGwgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBmYWlsaW5nLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxuICogICAgIG9uZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsdEwgPSAocHMsIG1lc3NhZ2UpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbChuZXh0LCBbZXhwZWN0ZWRFcnJvcihtZXNzYWdlKV0pXG4gICAgfVxuICB9XG4gIHJldHVybiBlcnJvcihzdGF0ZSwgW2V4cGVjdGVkRXJyb3IobWVzc2FnZSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXJcbiAqIGl0IGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIEl0J3MgdXNlZCB0b1xuICogaW1wbGVtZW50IHNraXBwaW5nIG92ZXIgc29tZSBvcHRpb25hbCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgZm9yIG9wdGlvbmFsIGNvbnRlbnQgdG8gYmUgYXBwbGllZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seVxuICogICAgIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0aW9uYWwgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIHZhbHVlXG4gKiBgeGAuIFRoaXMgcGFyc2VyIG9ubHkgZmFpbHMgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBgb3JFbHNlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGFsdChbcCxcbiAqIGNvbnN0YW50KHgpXSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZSA9IChwLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuRXJyb3IpIHJldHVybiB0dXBsZVxuICByZXR1cm4gb2sobmV4dCwgeClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRyYW5zZm9ybXMgYSBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWxcbiAqIGZhaWx1cmUuIEl0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcjsgaWYgdGhhdCBwYXJzZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZSBzdGF0ZSBpcyBzZXQgYmFjayB0byB3aGF0IGl0IHdhcyAqYmVmb3JlKiB0aGF0IHBhcnNlciBpc1xuICogYXBwbGllZCBhbmQgdGhlIGZhdGFsIGZhaWx1cmUgaXMgcmV0dXJuZWQgYXMgYSBub24tZmF0YWwgZmFpbHVyZS4gSWZcbiAqIHRoZSBwYXJzZXIgaGFzIGFueSBvdGhlciByZXN1bHQsIGl0IGlzIHBhc3NlZCB0aHJvdWdoIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbGxvd3MgdGhlIHVzZXIgdG8gY2F1c2UgYSBub24tYmFja3RyYWNraW5nIHBhcnNlciB0b1xuICogYmFja3RyYWNrIHVwb24gZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBiYWNrID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXNcbiAqIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmVcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XG4gKiBiZWNvbWVzIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc29cbiAqIGZhaWwgbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHByZXZpb3VzIHBhcnNlcnMgaGF2ZSBjb25zdW1lZCBpbnB1dC4gQVxuICogZmF0YWwgZXJyb3IgZnJvbSBvbmUgb2YgdGhlIGNvbnRhaW5lZCBwYXJzZXJzIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuXG4gKiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgc2VxQihwcylgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFjayhzZXEocHMpKWAsIGFzIHRoZVxuICogZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBgcHNgIGZhaWxzIGZhdGFsbHksIHdoaWxlIHRoZVxuICogbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJbXX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxQiA9IHBzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgcmV0dXJuIGVycm9yKG5leHQsIHJlc3VsdC5lcnJvcnMsIGluZGV4KVxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSBzdGF0ZSBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkXG4gKiBwYXJzZXIgdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGVcbiAqIHBhcnNlciByZXR1cm5zIHRoYXQgcmVzdWx0aW5nIHN0YXRlLlxuICpcbiAqIElmIHRoZSBzZWNvbmQgcGFyc2VyICh0aGUgb25lIHByb3ZpZGVkIGJ5IGBmbmApIGZhaWxzIG5vbi1mYXRhbGx5LFxuICogdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG9cbiAqIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdFxuICogcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsXG4gKiByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYGNoYWluQihwLCBmbilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFjayhjaGFpbihwLCBmbikpYCwgYXNcbiAqIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzIGZhdGFsbHksXG4gKiB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlMVxuXG4gIGNvbnN0IFt0dXBsZTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKGZuKHJlc3VsdDEudmFsdWUpKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBTdGF0dXMuRXJyb3IpIHJldHVybiB0dXBsZTJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCByZXN1bHQyLmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxuICpcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBsZWZ0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2sobGVmdChwMSwgcDIpKWAsIGFzXG4gKiB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LFxuICogd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yKG5leHQyLCByZXN1bHQyLmVycm9ycywgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQyLCByZXN1bHQxLnZhbHVlKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgcmlnaHRCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFjayhyaWdodChwMSwgcDIpKWAsXG4gKiBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LFxuICogd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlMVxuXG4gIGNvbnN0IFt0dXBsZTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBTdGF0dXMuRXJyb3IpIHJldHVybiB0dXBsZTJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCByZXN1bHQyLmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGJvdGggaW4gYW4gYXJyYXkuIElmIGVpdGhlclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxuICpcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBib3RoQihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2soYm90aChwMSwgcDIpKWAsIGFzXG4gKiB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LFxuICogd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdGhCID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUxXG5cbiAgY29uc3QgW3R1cGxlMiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiBvayhuZXh0MiwgW3Jlc3VsdDEudmFsdWUsIHJlc3VsdDIudmFsdWVdKVxuICB9XG4gIHJldHVybiBlcnJvcihuZXh0MiwgcmVzdWx0Mi5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiB0aGF0IGZhaWx1cmUgaXMgZmF0YWwsIHRoZVxuICogb3ZlcmFsbCBmYWlsdXJlIHdpbGwgYWxzbyBiZSBmYXRhbC5cbiAqXG4gKiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiB0aGUgdW5kZXJseWluZyBlcnJvciB3YXNcbiAqIG5vbi1mYXRhbCwgZXZlbiBpZiBpbnB1dCB3YXMgY29uc3VtZWQgKGJhY2t0cmFja2luZyB3aWxsIGhhcHBlbiBpblxuICogdGhpcyBjYXNlKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgY291bnRCID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHJldHVybiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxuICpcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcyxcbiAqIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWwgKGJhY2t0cmFja2luZyBpZiBpbnB1dCBoYWQgYWxyZWFkeSBiZWVuXG4gKiBjb25zdW1lZCkuIEEgZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsXG4gKiBlcnJvciBmb3IgdGhlIG92ZXJhbGwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGVuZCBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxuICogICAgIHRpbWVzIHVudGlsIHRoZSBlbmQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgbWFueVRpbGxCID0gKHAsIGVuZCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAoZW5kKG5leHQpKVxuICAgIG5leHQgPSBuZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuT2spIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHtcbiAgICAgIHJldHVybiBlcnJvcihuZXh0MiwgWy4uLnJlc3VsdDIuZXJyb3JzLCAuLi5yZXN1bHQxLmVycm9yc10sIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgbWFrZVBhcnNlciwgbWF5YmVGYXRhbCwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cbiAqXG4gKiBJZiB0aGUgaW5pdGlhbCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBpbnN0ZWFkIHJldHVybmVkLiBJZiB0aGVcbiAqIHNlY29uZCBwYXJzZXIgKHRoZSByZXR1cm4gdmFsdWUgb2YgYGZuYCkgZmFpbHMgYW5kIGBwYCBjb25zdW1lZFxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlMVxuXG4gIGNvbnN0IFt0dXBsZTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKGZuKHJlc3VsdDEudmFsdWUpKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTJcbiAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHNcbiAqIHJlc3VsdCB0byB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvblxuICogYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cbiAqXG4gKiBJZiB0aGUgY29udGFpbmVkIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHByb3BhZ2F0ZWQgb3V0IGFzIHRoZVxuICogZmFpbHVyZSBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxuICpcbiAqIGBtYXAocCwgZm4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGNvbnN0YW50KGZuKHgpKSlgLiBUaGlzIGFsc28gbWFrZXMgaXQgYSBtb3JlIGVmZmljaWVudCB2ZXJzaW9uIG9mXG4gKiBgcGlwZShbcF0sIGZuKWAgKGEgc2luZ2xlLXBhcnNlciBgcGlwZWApLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYCBhbmQgd2hvc2UgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHN1Y2NlZWQgd2l0aCB0aGF0XG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSAocCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBvayhuZXh0LCBmbihyZXN1bHQudmFsdWUpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gVGhhdCBwYXJzZXIgaXNcbiAqIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgaWYgaXQgc3VjY2VlZHMsIHRoYXRcbiAqIHJlc3VsdCdzIGVsZW1lbnRzIGFyZSBqb2luZWQgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgaXNcbiAqIHVzZWZ1bCBiZWNhdXNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc2hhcmUgdGhlIGNoYXJhY3RlcmlzdGljIG9mIHNvbWVcbiAqIGZ1bmN0aW9uYWwgbGFuZ3VhZ2VzIHdoZXJlIGEgc3RyaW5nIGlzIHRoZSBzYW1lIGFzIGEgbGlzdCBvZlxuICogY2hhcmFjdGVycy4gSmF2YVNjcmlwdCBuZWVkcyBleHBsaWNpdCBjb252ZXJzaW9uIGJldHdlZW4gdGhlIHR3bywgc29cbiAqIHRoaXMgcGFyc2VyIHdpbGwgdHVybiBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBzdHJpbmcuXG4gKlxuICogSWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgdGhlIGNyZWF0ZWQgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIHdpdGhcbiAqIHRoZSBzYW1lIHN0YXRlLlxuICpcbiAqIGBqb2luKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGNvbnN0YW50KHguam9pbignJykpKWAuXG4gKlxuICogSWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2VzIG5vdCByZXN1bHQgaW4gYW4gYXJyYXksIGFuIGV4Y2VwdGlvbiB3aWxsXG4gKiBiZSB0aHJvd24gYmVjYXVzZSBhbiBhdHRlbXB0IHdpbGwgYmUgbWFkZSB0byBjYWxsIGBqb2luYCBvbiB0aGVcbiAqIHJlc3VsdC4gSWYgaXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBzb21ldGhpbmcgb3RoZXIgdGhhbiBzdHJpbmdzLFxuICogdGhvc2UgZWxlbWVudHMgd2lsbCBiZSBjb2VyY2VkIGludG8gc3RyaW5ncyBhbmQgdGhlbiBqb2luZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2ZcbiAqICAgICBzdHJpbmdzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VyIGFuZFxuICogICAgIHJlc3VsdHMgaW4gYSBzaW5nbGUgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGVcbiAqICAgICBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5leHBvcnQgY29uc3Qgam9pbiA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIG9rKG5leHQsIHJlc3VsdC52YWx1ZS5qb2luKCcnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgZGlzY2FyZHMgYW55XG4gKiBzdWNjZXNzZnVsIHJlc3VsdCB3aGlsZSBzdGlsbCBjb25zdW1pbmcgaW5wdXQuIEEgZmFpbHVyZSB3aWxsIGJlXG4gKiBwcm9wYWdhdGVkIHdpdGhvdXQgbW9kaWZpY2F0aW9uLlxuICpcbiAqIGBza2lwKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsICgpID0+XG4gKiBjb25zdGFudChudWxsKSlgLFxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRvIGJlIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBjb25zdW1lIGlucHV0IGFzIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZG9lcyBvbiBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXAgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBydW4gdGhlIHN1cHBsaWVkIHBhcnNlciBidXQsIG9uIHN1Y2Nlc3MsXG4gKiByZXN1bHQgaW4gdGhlIHN1cHBsaWVkIHZhbHVlIGluc3RlYWQuXG4gKlxuICogYHZhbHVlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW5hdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cbiAqIGNvbnN0YW50KHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxuICogICAgIHN1Y2Nlc3MuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gb2sobmV4dCwgeClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAxYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cbiAqXG4gKiBgbGVmdChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCB4ID0+XG4gKiB2YWx1ZShwMiwgeCkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcDIobmV4dDEpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQyLCByZXN1bHQxLnZhbHVlKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwgaWZcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGByaWdodChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCAoKSA9PlxuICogcDIpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlMVxuXG4gIGNvbnN0IFt0dXBsZTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTJcblxuICByZXR1cm4gbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXG4gKiBgcDFgIG9yIGBwMmAgZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsXG4gKiBiZSBmYXRhbCBpZiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cbiAqXG4gKiBgYm90aChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+XG4gKiBjaGFpbihwMiwgYiA9PiBjb25zdGFudChbYSwgYl0pKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdGggPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcDIobmV4dDEpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIG9rKG5leHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXG4gIH1cbiAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXG4gKiBwYXJzZXJzIHRvIGFwcGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KiBkaXNjYXJkZWQuXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gYGZuYCBub1xuICogbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogYHBpcGUoW3AxLCBwMl0sIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYVxuICogPT4gY2hhaW4ocDIsIGIgPT4gY29uc3RhbnQoZm4oYSwgYikpKSlgLCBgcGlwZShbcDEsIHAyLCBwM10sIGZuKWAgaXNcbiAqIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT4gY2hhaW4ocDIsIGIgPT5cbiAqIGNoYWluKHAzLCBjID0+IGNvbnN0YW50KGZuKGEsIGIsIGMpKSkpKWAsIGFuZCBzbyBvbi5cbiAqXG4gKiBJZiB0aGUgYXJyYXkgaGFzIG9uZSBlbGVtZW50LCB0aGUgcGFyc2VyIGJlY29tZXMgZXF1aXZhbGVudCB0byBgbWFwYFxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyW119IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmUgYXBwbGllZCBvbmUgYXQgYSB0aW1lLFxuICogICAgIGluIG9yZGVyLlxuICogQHBhcmFtIHtmdW5jdGlvbiguLi4qKToqfSBmbiBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgcmVjZWl2ZSBhc1xuICogICAgIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICogICAgIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGUgPSAocHMsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCBmbiguLi52YWx1ZXMpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGJlZm9yZSwgY29udGVudCwgYW5kIGFmdGVyIHBhcnNlcnNcbiAqIGluIG9yZGVyIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgYHBgIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXJcbiAqIGBwYWZ0ZXJgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxuICogdG8gcGF0Y2ggdGhlIFwiYWZ0ZXJcIiBjb250ZW50IGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyIGRvZXMsIHNvIHRha2VcbiAqIGNhcmUgdGhhdCB0aGUgcGFyc2VycyBkbyBub3Qgb3ZlcmxhcCBpbiB3aGF0IHRoZXkgbWF0Y2guXG4gKlxuICogYGJldHdlZW4ocHJlLCBwb3N0LCBwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGVmdChyaWdodChwcmUsIHApLCBwb3N0KWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHByZSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHBvc3QgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChwcmUsIHBvc3QsIHApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocHJlKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcChuZXh0MSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtuZXh0MywgcmVzdWx0M10gPSBwb3N0KG5leHQyKVxuICBpZiAocmVzdWx0My5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIG9rKG5leHQzLCByZXN1bHQyLnZhbHVlKVxuICByZXR1cm4gbWF5YmVGYXRhbChuZXh0My5pbmRleCAhPT0gaW5kZXgsIG5leHQzLCByZXN1bHQzLmVycm9ycylcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgb2ssIG1ha2VQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRFcnJvciB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBzdWNjZWVkcywgaXRzIHJlc3VsdCBiZWNvbWVzIHRoZSByZXN1bHQgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cbiAqIEVpdGhlciB3YXksIG5vIGlucHV0IGlzIGNvbnN1bWVkLiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlcihzKSBzYXRpc2Z5IHRoZSBwYXJzZXIgd2l0aG91dCBhY3R1YWxseSBjb25zdW1pbmdcbiAqIHRoZSBpbnB1dCB0byBmaW5kIG91dC5cbiAqXG4gKiBBcyBhIHNpZGUgZWZmZWN0LCBhbnkgZmF0YWwgcGFyc2UgZXJyb3Igd2lsbCBiZSB0cmFuc2Zvcm1lZCBpbnRvIGFcbiAqIG5vbi1mYXRhbCBvbmUsIHNpbmNlIG5vIGlucHV0IGlzIGJlaW5nIGNvbnN1bWVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBsb29rQWhlYWQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Pa1xuICAgID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLCBpbmRleClcbiAgICA6IGVycm9yKG5leHQsIHJlc3VsdC5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXG4gKiBgbm90RW1wdHkobWFueShwKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBmYWlscyBpZiBgcGAgcGFzc2VzIGJ1dCBkb2Vzbid0XG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3Qgbm90RW1wdHkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rIHx8IG5leHQuaW5kZXggIT09IGluZGV4KSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFtleHBlY3RlZEVycm9yKCd0aGUgcGFyc2VyIHRvIGNvbnN1bWUgaW5wdXQnKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxuICogYGZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcbiAqIG9yIGVsc2UgYGZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxuICByZXR1cm4gb2sobmV4dCwgbnVsbCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxuICogYGZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LCByZXBsYWNpbmcgYW55IFwiZXhwZWN0ZWRcIiBlcnJvclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gZXJyb3IobmV4dCwgW2V4cGVjdGVkRXJyb3IobXNnKV0sIGluZGV4KVxuICB9XG4gIHJldHVybiBvayhuZXh0LCBudWxsLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIHN1Y2NlZWRzLFxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcbiAqIG9yIGVsc2UgYG5vdEZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyB3aGVuIGl0XG4gKiAgICAgZmFpbHMsIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RGb2xsb3dlZEJ5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxuICByZXR1cm4gb2sobmV4dCwgbnVsbCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RGb2xsb3dlZEJ5TCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiBlcnJvcihuZXh0LCBbZXhwZWN0ZWRFcnJvcihtc2cpXSwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogY29uc3VtZXMgaW5wdXQsIG5vdGhpbmcgYWRkaXRpb25hbCBoYXBwZW5zLiBJZiBpdCBmYWlscyBub24tZmF0YWxseSxcbiAqIHRoZSByZXR1cm5lZCBwYXJzZXIgZmFpbHMgaW4gdGhlIHNhbWUgd2F5LCBidXQgaXQgcmVwbGFjZXMgdGhlXG4gKiBzdXBwbGllZCBwYXJzZXIncyBlcnJvcnMgd2l0aCBhbiBleHBlY3RlZCBlcnJvciB3aG9zZSBtZXNzYWdlIGlzIHRoZVxuICogc3VwcGxpZWQgc3RyaW5nLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBiZXR0ZXIgZXJyb3IgbWVzc2FnZXMgaW4gY2FzZXMgd2hlcmUgdGhlXG4gKiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBlcnJvciBtZXNzYWdlcyBhcmUgaW5zdWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBuZXcgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIGlmIGBwYFxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgcGFzc2VzIGl0cyByZXN1bHRzXG4gKiAgICAgdGhyb3VnaCBleGNlcHQgZm9yIGNoYW5naW5nIGl0cyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgdXBvblxuICogICAgIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBsYWJlbCA9IChwLCBtZXNzYWdlKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuRXJyb3IpIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgW2V4cGVjdGVkRXJyb3IobWVzc2FnZSldKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgb2ssIG1ha2VQYXJzZXIsIFN0YXR1cywgbWF5YmVGYXRhbCB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZHVwLCByYW5nZSB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXG4gKiBmYWlscy4gSW4gdGhlIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdFxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIFRoZSByZXR1cm5lZCBwYXJzZXIgbWF5IGZhaWwgZmF0YWxseSBldmVuIGlmIHRoZSB1bnN1Y2Nlc3NmdWxcbiAqIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuIFRoaXMgd2lsbCBoYXBwZW4gaWYgYW55IHByZXZpb3VzXG4gKiBwYXJzZXIgc3VjY2VlZGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gRXNzZW50aWFsbHksIGlmIHRoZSByZXR1cm5lZFxuICogcGFyc2VyIGNvbnN1bWVzIGFueXRoaW5nIGFuZCB0aGVuIGZhaWxzLCBpdCB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXEgPSBwcyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgICByZXR1cm4gbmV4dC5pbmRleCA9PT0gaW5kZXhcbiAgICAgICAgPyBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgICAgICA6IGZhdGFsKG5leHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLFxuICogYGJsb2NrYCB3aWxsIGFsc28gZmFpbCB3aXRoIHRoYXQgZmFpbHVyZS4gVGhpcyBmYWlsdXJlIHdpbGwgYmUgZmF0YWxcbiAqIGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxuICogICAgIHBhcnNlcidzIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seVxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSBnZW5GbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZ2VuID0gZ2VuRm4oKVxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2sobmV4dCwgdmFsdWUpXG5cbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gdmFsdWUobmV4dClcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgICByZXR1cm4gbmV4dC5pbmRleCA9PT0gaW5kZXhcbiAgICAgICAgPyBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgICAgICA6IGZhdGFsKG5leHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxuICB9XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kIHByb3ZpZGluZ1xuICogdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZVxuICogc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSwgaXQgc3VjY2VlZHNcbiAqIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kIHByb3ZpZGluZ1xuICogdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLCB0aGUgcmV0dXJuZWRcbiAqIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdFxuICogZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcblxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHlcbiAqIGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLFxuICogaXQgc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3RcbiAqIHN1Y2NlZWQgYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSxcbiAqIHRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0XG4gKiB3aGVuIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkxID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG5cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4uIFRoZVxuICogY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvIHRoZSBvbmx5IHdheSBmb3IgdGhpcyBwYXJzZXJcbiAqIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0byBmYWlsIGZhdGFsbHkuXG4gKlxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcbiAqIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBCeSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuXG4gICAgY29uc3QgW3R1cGxlMSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlMiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IEVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXG4gKiBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2Ugb3IgYSBub24tZmF0YWwgZmFpbHVyZVxuICogd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5IGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzXG4gKiBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkxID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcblxuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBFcnJvcihsb29wTWVzc2FnZSgnc2VwQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuIGFuZFxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvXG4gKiB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0b1xuICogZmFpbCBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcblxuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnknKSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLm5leHQsIGluZGV4IH0pXG4gIHJldHVybiBvayhzZXBOZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIG11c3Qgc3VjY2VlZCBhdCBsZWVhc3Qgb25jZVxuICogb3IgYSBub24tZmF0YWwgZmFpbHVyZSB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHlcbiAqIGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcbiAqIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuXG4gICAgY29uc3QgW3R1cGxlMSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlMiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IEVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeTEnKSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLm5leHQsIGluZGV4IH0pXG4gIHJldHVybiBvayhzZXBOZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxuICogZmFpbHMsIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWw7IGlmIGlucHV0IGlzIGNvbnN1bWVkIGJlZm9yZSBvclxuICogZHVyaW5nIHRoYXQgZmFpbHVyZSwgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgY291bnQgPSAocCwgbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxuICpcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcywgdGhlIG92ZXJhbGxcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXG4gKiBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsID0gKHAsIGVuZCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAoZW5kKG5leHQpKVxuICAgIG5leHQgPSBuZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuT2spIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKFxuICAgICAgICBuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgWy4uLnJlc3VsdDIuZXJyb3JzLCAuLi5yZXN1bHQxLmVycm9yc10sXG4gICAgICApXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWlubCA9IChwLCBvcCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxuICAgIG5leHQgPSBuZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlcCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlcFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIGVpdGhlciBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcbiAqIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5sMSA9IChwLCBvcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxuICAgIG5leHQgPSBuZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlcCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlcFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbnIgPSAocCwgb3AsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgeClcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbdHVwbGVvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZXBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbnIxID0gKHAsIG9wKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlb3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXG4gICAgbmV4dCA9IG5leHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlb3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGVwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcgfSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Vycm9yLmpzJykuUGFyc2VFcnJvcn0gUGFyc2VFcnJvciAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3ltYm9sIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogU3ltYm9sKCdvaycpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LiAqL1xuICBFcnJvcjogU3ltYm9sKCdlcnJvcicpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6IFN5bWJvbCgnZmF0YWwnKSxcbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHRcbiAqIGFuZCBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFN0YXRlXG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge1BhcnNlRXJyb3JbXX0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBkdXJpbmdcbiAqICAgICBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXlcbiAqICl9IFR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBzdGF0ZS4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhIG5ld1xuICogc3RhdGUgaXMgb25seSBjcmVhdGVkIGJlZm9yZSBwYXJzaW5nLCBpbiB0aGUgYHBhcnNlYCBmdW5jdGlvbi4gQW55XG4gKiBmdXJ0aGVyIHN0YXRlcyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBpbml0aWFsIHN0YXRlIHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHtTdGF0ZX0gQW4gZW1wdHkgcGFyc2VyIHN0YXRlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZShpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBzdGF0ZSwgdXBkYXRlcyBpdCBzb21laG93IChnZW5lcmFsbHkgYnkgcmVhZGluZyBhIGNoYXJhY3RlciksIGFuZFxuICogcmV0dXJucyB0aGUgdXBkYXRlZCBzdGF0ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIHVwZGF0ZWQgc3RhdGUgYWZ0ZXIgdGhlIHBhcnNlciBpc1xuICogICAgIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyXG4gKiBmdW5jdGlvbiBhbmQgcmV0dXJucyBpdDsgaXQncyBoZXJlIGluIGNhc2Ugc29tZXRoaW5nIG1vcmUgbmVlZHMgdG8gYmVcbiAqIGRvbmUgaW4gcGFyc2VyIGNyZWF0aW9uLiBUaGlzIGhhcyBoYXBwZW5lZCBpbiB0aGUgcGFzdCBhbmQgdmVyeVxuICogbGlrZWx5IHdpbGwgYWdhaW4gaGFwcGVuIGluIHRoZSBmdXR1cmUuXG4gKlxuICogV2hpbGUgaXQgaXMgbm90IGN1cnJlbnRseSBzbywgdGhlcmUgaGF2ZSBiZWVuIHRpbWVzIHdoZW4gYmVoYXZpb3Igb2ZcbiAqIGZ1bmN0aW9ucyBwcm9kdWNlZCBieSB0aGlzIGZhY3RvcnkgZGlmZmVyZWQgZnJvbSBnZW5lcmFsIGZ1bmN0aW9ucy5cbiAqIEJlY2F1c2Ugb2YgdGhlIHBvc3NpYmlsaXR5IHRoYXQgdGhpcyBjb3VsZCByZXR1cm4sIGl0J3Mgc3VnZ2VzdGVkIHRvXG4gKiB1c2UgdGhpcyBmdW5jdGlvbiB0byBwcm9kdWNlIGFsbCBwYXJzZXJzIHJhdGhlciB0aGFuIHByb2R1Y2luZyB0aGVtXG4gKiBieSBoYW5kLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IFRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJzZXIoZm4pIHtcbiAgcmV0dXJuIGZuXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLCBhcyB3ZWxsIGFzXG4gKiBhIGBTdGF0ZWAgcG90ZW50aWFsbHkgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2soc3RhdGUsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXRcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIGNvcHkgb2YgYFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkVycm9yLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2hpbGVcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIG5ldyBgU3RhdGVgIHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmF0YWwoc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYXRhbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2VyIGFwcGxpY2F0b2luIGZhaWxlZC5cbiAqIFdoZXRoZXIgdGhpcyBpcyBhIGZhdGFsIGVycm9yIG9yIG5vdCBkZXBlbmRzIG9uIHdoZXRoZXIgYHRlc3RgIGlzXG4gKiBgdHJ1ZWAgKGZhdGFsKSBvciBgZmFsc2VgIChub24tZmF0YWwpLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdGVzdCBVc2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBwcm9kdWNlZCByZXN1bHRcbiAqICAgICByZXByZXNlbnRzIGEgZmF0YWwgZXJyb3IgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVGYXRhbCh0ZXN0LCBzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IC4uLnN0YXRlLCBpbmRleCB9LFxuICAgIHsgc3RhdHVzOiB0ZXN0ID8gU3RhdHVzLkZhdGFsIDogU3RhdHVzLkVycm9yLCBlcnJvcnMgfSxcbiAgXVxufVxuXG4vKipcbiAqIFJ1bnMgYSBwYXJzZXIgYWdhaW5zdCBhbiBpbnB1dC4gVGhpcyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcsIGEgdHlwZWRcbiAqIGFycmF5LCBhbiBhcnJheSBidWZmZXIsIG9yIGEgZGF0YSB2aWV3LiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBmaW5hbFxuICogcGFyc2VyIHN0YXRlIHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IFRoZSBmaW5hbCBzdGF0ZSBhZnRlciBhbGwgcGFyc2VycyBoYXZlXG4gKiAgICAgYmVlbiBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XG4gIHJldHVybiBwYXJzZXIobWFrZVN0YXRlKGlucHV0KSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGNoYXJMZW5ndGgsXG4gIGNvbW1hU2VwYXJhdGUsXG4gIG5leHRDaGFyV2lkdGgsXG4gIHZpZXdUb1N0cmluZyxcbn0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuU3RhdGV9IFN0YXRlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cblxuY29uc3QgdGFiID0gL1xcdC9ndVxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcblxuLyoqXG4gKiBBIHN5bWJvbCBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cbiAqIEBlbnVtIHtzeW1ib2x9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XG4gIC8qKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBleHBlY3RlZCByZXN1bHQuICovXG4gIEV4cGVjdGVkOiBTeW1ib2woJ2V4cGVjdGVkJyksXG4gIC8qKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuICovXG4gIFVuZXhwZWN0ZWQ6IFN5bWJvbCgndW5leHBlY3RlZCcpLFxuICAvKiogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuICovXG4gIEdlbmVyaWM6IFN5bWJvbCgnbWVzc2FnZScpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiBTeW1ib2woJ290aGVyJyksXG59XG5cbi8qKlxuICogQW4gZXJyb3IgZ2VuZXJhdGVkIHdoZW4gYSBwYXJzZXIgZmFpbHMuXG4gKlxuICogQHR5cGVkZWYge09iamVjdH0gUGFyc2VFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIHR5cGUgb2YgdGhlIHBhcnNlIGVycm9yLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZUVycm9yYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yVHlwZX0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgcGFyc2UgZXJyb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtQYXJzZUVycm9yfSBBIG5ldyBgUGFyc2VFcnJvcmAgd2l0aCB0aGUgZ2l2ZW4gdHlwZSBhbmRcbiAqICAgICBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZUVycm9yKHR5cGUsIG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHsgdHlwZSwgbWVzc2FnZSB9XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBleHBlY3RlZCBlcnJvci4gTXVsdGlwbGUgZXhwZWN0ZWQgZXJyb3JzIGNhbiBiZSBhIHBhcnQgb2ZcbiAqIGEgc2luZ2xlIGVycm9yIG1lc3NhZ2UsIGFuZCB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIgd2lsbCBjb21tYS1zZXBhcmF0ZVxuICogdGhlbSBhbmQgcHJlZmFjZSB0aGVtIHdpdGggdGhlIHdvcmQgJ0V4cGVjdGVkJy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxuICogQHJldHVybnMge1BhcnNlRXJyb3J9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWRFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiBtYWtlRXJyb3IoRXJyb3JUeXBlLkV4cGVjdGVkLCBtZXNzYWdlKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvci4gVGhlIGRlZmF1bHQgZm9ybWF0dGVyIHdpbGwgZGlzcGxheSBvbmx5XG4gKiB0aGUgZmlyc3QgdW5leHBlY3RlZCBlcnJvciwgYW5kIGl0IHdpbGwgYmUgcHJlZmFjZWQgd2l0aFxuICogJ1VuZXhwZWN0ZWQnLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xuICogICAgIG5vdCBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtQYXJzZUVycm9yfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZEVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG1ha2VFcnJvcihFcnJvclR5cGUuVW5leHBlY3RlZCwgbWVzc2FnZSlcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvci4gVGhlIGRlZmF1bHQgZm9ybWF0dGVyIHdpbGwgZGlzcGxheSBvbmx5XG4gKiB0aGUgZmlyc3QgZ2VuZXJpYyBlcnJvciwgYmVsb3cgdGhlIG90aGVyIGVycm9ycywgYW5kIGl0IHdpbGwgYmVcbiAqIHVucHJlZmFjZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1BhcnNlRXJyb3J9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBnZW5lcmljIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gbWFrZUVycm9yKEVycm9yVHlwZS5HZW5lcmljLCBtZXNzYWdlKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1BhcnNlRXJyb3J9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3RoZXJFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiBtYWtlRXJyb3IoRXJyb3JUeXBlLk90aGVyLCBtZXNzYWdlKVxufVxuXG4vKipcbiAqIEFkZHMgb25lIG9yIG1vcmUgcGFyc2UgZXJyb3JzIHRvIGFuIGFycmF5IG9mIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gbGlzdCBUaGUgYXJyYXkgb2YgZXJyb3JzIHRvIGFkZCB0by5cbiAqIEBwYXJhbSB7Li4uUGFyc2VFcnJvcn0gZXJyb3JzIFRoZSBlcnJvcihzKSB0byBiZSBwdXNoZWQgb250byB0aGUgZW5kXG4gKiAgICAgb2YgdGhlIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlRXJyb3JbXX0gQSBuZXcgYXJyYXkgdGhhdCBpcyBhIHNoYWxsb3cgY29weSBvZiBgbGlzdGBcbiAqICAgICB3aXRoIHRoZSBlbGVtZW50cyBvZiBgZXJyb3JzYCBhZGRlZCB0byB0aGUgZW5kLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcHVzaChsaXN0LCAuLi5lcnJvcnMpIHtcbiAgcmV0dXJuIFsuLi5saXN0LCAuLi5lcnJvcnNdXG59XG5cbi8vIENsZWFycyBhbGwgZXJyb3JzIG9mIGEgcGFydGljdWxhciB0eXBlIGZyb20gYSBsaXN0IG9mIGVycm9ycy4gSWZcbi8vIGB0eXBlYCBpcyBub3QgcHJvdmlkZWQsIGFsbCBlcnJvcnMgd2lsbCBiZSBjbGVhcmVkLiBNdWx0aXBsZSB0eXBlc1xuLy8gY2FuIGJlIHByb3ZpZGVkLlxuLyoqXG4gKiBDbGVhcnMgYWxsIGVycm9ycyBvZiBhIHBhcnRpY3VsYXIgdHlwZSBmcm9tIGEgbGlzdCBvZiBlcnJvcnMuIElmIG5vXG4gKiBgdHlwZXNgIGFyZSBwcm92aWRlZCwgYWxsIGVycm9ycyB3aWxsIGJlIGNsZWFyZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGxpc3QgVGhlIGFycmF5IG9mIGVycm9ycyB0byBjbGVhciBmcm9tLlxuICogQHBhcmFtIHsuLi5FcnJvclR5cGV9IHR5cGVzIFRoZSBlcnJvciB0eXBlcyB0byBiZSByZW1vdmVkIGZyb20gdGhlXG4gKiAgICAgYXJyYXkuIElmIG5vIHR5cGVzIGFyZSBwcm92aWRlZCwgYWxsIGVycm9ycyB3aWxsIGJlIHJlbW92ZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VFcnJvcltdfSBBIHNoYWxsb3cgY29weSBvZiBgbGlzdGAgd2l0aCBhbGwgZXJyb3JzIG9mXG4gKiAgICAgdGhlIHByb3ZpZGVkIHR5cGUocykgcmVtb3ZlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyKGxpc3QsIC4uLnR5cGVzKSB7XG4gIGlmICh0eXBlcy5sZW5ndGggPT09IDApIHJldHVybiBbXVxuICByZXR1cm4gbGlzdC5maWx0ZXIoZXJyb3IgPT4gIXR5cGVzLmluY2x1ZGVzKGVycm9yLnR5cGUpKVxufVxuXG4vKipcbiAqIENsZWFycyBhbGwgZXJyb3JzIGZyb20gYW4gYXJyYXkgb2YgZXJyb3JzIHRoYXQgYXJlIG9mIHRoZSBzYW1lIGVycm9yXG4gKiB0eXBlIGFzIGFueSBvZiB0aGUgcHJvdmlkZWQgZXJyb3JzLCBhbmQgdGhlbiBhZGRzIHRob3NlIGVycm9ycyB0byB0aGVcbiAqIGVuZCBvZiB0aGUgYXJyYXkuXG4gKlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGxpc3QgVGhlIGFycmF5IG9mIGVycm9ycyB0byBvdmVyd3JpdGUgdG8uXG4gKiBAcGFyYW0gey4uLlBhcnNlRXJyb3J9IGVycm9ycyBUaGUgZXJyb3IocykgdG8gYmUgcHVzaGVkIG9udG8gdGhlIGVuZFxuICogICAgIG9mIHRoZSBhcnJheSwgYWZ0ZXIgYWxsIGVycm9ycyBvZiB0aG9zZSB0eXBlcyBhcmUgcmVtb3ZlZC5cbiAqIEByZXR1cm5zIHtQYXJzZUVycm9yW119IEEgbmV3IGFycmF5IHRoYXQgaXMgYSBzaGFsbG93IGNvcHkgb2YgYGxpc3RgXG4gKiAgICAgd2l0aCB0aGUgZWxlbWVudHMgb2YgYGVycm9yc2AgcmVwbGFjaW5nIHRob3NlIG9mIHRoZSBzYW1lIHR5cGVcbiAqICAgICBmcm9tIHRoZSBvcmlnaW5hbCBhcnJheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG92ZXJ3cml0ZShsaXN0LCAuLi5lcnJvcnMpIHtcbiAgY29uc3QgdHlwZXMgPSBlcnJvcnMubWFwKGVycm9yID0+IGVycm9yLnR5cGUpXG4gIGNvbnN0IHJlc3VsdCA9IGxpc3QuZmlsdGVyKGVycm9yID0+ICF0eXBlcy5pbmNsdWRlcyhlcnJvci50eXBlKSlcbiAgcmV0dXJuIFsuLi5yZXN1bHQsIC4uLmVycm9yc11cbn1cblxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxuICogICAgIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICovXG5cbi8qKlxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxuICAqXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxuICAqICAgICB0YWIgc2l6ZS5cbiAgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcbiAqIGRlc2lyZWQuXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxuICpcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG5cbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cbiAgICAgIH1cbiAgICAgIGxpbmVubysrXG4gICAgICBzdGFydCA9IGkgKyBza2lwXG4gICAgfVxuICAgIGkgKz0gc2tpcFxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cbiAqXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XG4gIGxldCBjaGFySW5kZXggPSAwXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxuICAgIGNoYXJJbmRleCsrXG4gIH1cbiAgcmV0dXJuIGNoYXJJbmRleFxufVxuXG4vKipcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxuICogY2hhcmFjdGVyIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcbiAgbGV0IHJlc3VsdCA9IGxpbmVcblxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICB9XG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxuICB9XG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xuICogbWFya3MuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XG4gIGxldCBpbmRleCA9IGNvbEluZGV4XG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxuXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcbiAqICAgICBjb2x1bW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoKSB7XG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke2xpbmV9XFxuJHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcbiAgICByZXR1cm4gYCR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcbiAgICByZXR1cm4gYC4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7JyAnLnJlcGVhdChuZXdDb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBGaW5hbCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiBtYXhXaWR0aCAtIDMgYW5kIHRoZSBjYXJldFxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XG4gIC8vIChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIFNoaWZ0IHRoZSBsaW5lIHRvIG1ha2UgdGhlIGNhcmV0IHBvaW50XG4gIC8vIGF0IHRoZSBtaWRkbGUgb2YgaXQsIGFkZCBgLi4uYCB0byB0aGUgc3RhcnQgKmFuZCogZW5kLCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBjb25zdCBzdGFydCA9IGNvbG5vIC0gMSAtIE1hdGguY2VpbChtYXhXaWR0aCAvIDIpICsgM1xuICBjb25zdCBlbmQgPSBjb2xubyAtIDEgKyBNYXRoLmZsb29yKG1heFdpZHRoIC8gMikgLSAzXG4gIHJldHVybiBgLi4uJHtcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICB9Li4uXFxuJHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZyB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHBhcnRzOlxuICpcbiAqIDEuIEEgcG9zaXRpb24gbGluZSB0aGF0IGdpdmVzIHRoZSBsaW5lIG51bWJlciBhbmQgY29sdW1uIG51bWJlciB3aGVyZVxuICogICAgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXG4gKiAgICB0d28gbGluZXMgaW4gdGhlIGVycm9yIG1lc3NhZ2UuIFRoZSBmaXJzdCBpcyBlaXRoZXIgdGhlIGVudGlyZVxuICogICAgaW5wdXQgbGluZSBvciwgaWYgdGhhdCdzIHRvbyBsb25nLCBhIHBvcnRpb24gb2YgdGhlIGlucHV0IGxpbmVcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcbiAqICAgIGxvY2F0aW9uLiBUaGUgc2Vjb25kIGlzIGEgY2FyZXQgcG9zaXRpb25lZCB1bmRlcm5lYXRoIHRoZSBsb2NhdGlvblxuICogICAgaW4gdGhlIGZpcnN0IGxpbmUgdGhhdCBzaG93cyBleGFjdGx5IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cbiAqIDQuIEFsbCBvZiB0aGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXMgKGlmIGFueSksIHNlcGFyYXRlZCBieSAnb3InIGFuZFxuICogICAgY29tbW1hcyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIG51bWJlciBvZiBtZXNzYWdlcy5cbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxuICpcbiAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXJyb3IgaXMgaW5kaWNhdGVkIGJ5IHRoZSBgaW5kZXhgIHBhcmFtZXRlcixcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcbiAqIGVycm9yIG9jY3VycmVkLiBUaGUgY2FsY3VsYXRpb24gb2YgbGluZSBhbmQgY29sdW1uIG51bWJlciBmcm9tIHRoaXNcbiAqIGZsYXQgYXJyYXkgb2YgYnl0ZXMgdGFrZXMgdGhlIGZvbGxvd2luZyBpbnRvIGFjY291bnQ6XG4gKlxuICogKiBNdWx0aS1ieXRlIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgaXMgVVRGLTggYXdhcmUsIHNvIGNoYXJhY3RlcnMgY2FuXG4gKiAgIGJlIDEsIDIsIDMsIG9yIDQgYnl0ZXMgbG9uZylcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXG4gKiAqIFRhYnMsIHdoaWNoIGFyZSBleHBhbmRlZCBpbnRvIGEgbnVtYmVyIG9mIHNwYWNlcyBzZXQgYnkgdGhlXG4gKiAgIGB0YWJTaXplYCBwYXJhbWV0ZXJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcbiAqICAgb3IgTFRSIGZvcm1hdHRpbmcgY2hhcmFjdGVycywgYW5kIGRpYWNyaXRpY3MgKEhlYnJldyBvciBUaGFpIHZvd2VsXG4gKiAgIG1hcmtzLCB1bWxhdXRzIG92ZXIgTGF0aW4gY2hhcmFjdGVycywgZXRjLilcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSA1IGVsZW1lbnRzIGFib3ZlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogVGhlIGZvbGxvd2luZyB0d28gbGluZXMgb2YgY29kZSB1c2VzIGBzdHJpbmdUb1ZpZXdgLCBhbiBpbnRlcm5hbFxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXG4gKiBVVEYtOCBkYXRhIHZpZXcuIEl0J3MgY2FsbGVkIGJ5IGBwYXJzZWAgaXRzZWxmLCBzbyBpbiByZWFsIHdvcmxkXG4gKiB1c2FnZSwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGtub3cuXG4gKlxuICogYGBgXG4gKiBjb25zdCB2aWV3ID0gc3RyaW5nVG9WaWV3KCdcXHRPbm9tYXRvcG9laWFcXHRcXHRcXHRcXHTguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIcnKVxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcbiAqIGBgYFxuICpcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcbiAqIHByb2R1Y2VkOlxuICpcbiAqIGBgYFxuICogUGFyc2UgZXJyb3IgYXQgKGxpbmUgMSwgY29sdW1uIDM3KTpcbiAqXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxuICogRXhwZWN0ZWQgYSBkaWdpdFxuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpIHtcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgbGVuZ3RoIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXG5cbiAgY29uc3QgcG9zaXRpb24gPSBgUGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgpXG4gIGNvbnN0IG1lc3NhZ2UgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLm1lc3NhZ2UpLFxuICApXG5cbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYFVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLm1lc3NhZ2V9XFxuYCA6ICcnXG4gIGNvbnN0IGV4cE1zZyA9IGV4cGVjdGVkLmxlbmd0aCA/IGBFeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBtc2dNc2cgPSBtZXNzYWdlID8gYCR7bWVzc2FnZS5tZXNzYWdlfVxcbmAgOiAnJ1xuXG4gIHJldHVybiBgJHtwb3NpdGlvbn1cXG5cXG4ke2Rpc3BsYXl9XFxuJHt1bmV4cE1zZ30ke2V4cE1zZ30ke21zZ01zZ31cXG5gXG59XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBBY2NlcHRzIGEgcGFyc2VyIHN0YXRlIGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4KSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0c1xuICogdG8gNzIpLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBwYXJzZXIncyBzdGF0ZSB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBwcm9kdWNlZCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKFxuICBzdGF0ZSwgcmVzdWx0LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgZm9ybWF0dGVyID0gZm9ybWF0LFxuKSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIHJldHVybiBmb3JtYXR0ZXIocmVzdWx0LmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IGJ5dGUgb2YgdGhlIHN1cHBsaWVkIHN0YXRlLiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIHN0YXRlJ3MgaW5kZXhcbiAqIHdpdGhpbiB0aGUgc3RhdGUncyBkYXRhIHZpZXcuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oc3RhdGUsIHRhYlNpemUgPSA4KSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgYW55T2YsXG4gIGNoYXIsXG4gIGNoYXJpLFxuICBkaWdpdCxcbiAgZW9mLFxuICBoZXgsXG4gIGxldHRlcixcbiAgbG93ZXIsXG4gIG5vbmVPZixcbiAgb2N0YWwsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBjb25zdGFudCxcbiAgZmFpbCxcbiAgZmFpbEZhdGFsbHksXG4gIHVuZXhwZWN0ZWQsXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xuZXhwb3J0IHtcbiAgYWxwaGFVLFxuICBsZXR0ZXJVLFxuICBsb3dlclUsXG4gIG5ld2xpbmUsXG4gIG5ld2xpbmVVLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlVSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICBzcGFjZXMxVSxcbiAgc3BhY2VzVSxcbiAgdXBwZXJVLFxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXG5leHBvcnQge1xuICBhbGwsXG4gIGFueVN0cmluZyxcbiAgc3RyaW5nLFxuICBzdHJpbmdpLFxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NQklOQVRPUlNcblxuZXhwb3J0IHtcbiAgYWx0LFxuICBhbHRMLFxuICBiYWNrLFxuICBib3RoQixcbiAgY2hhaW5CLFxuICBjb3VudEIsXG4gIGxlZnRCLFxuICBtYW55VGlsbEIsXG4gIG9wdGlvbmFsLFxuICBvckVsc2UsXG4gIHJpZ2h0QixcbiAgc2VxQixcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZSdcbmV4cG9ydCB7XG4gIGJldHdlZW4sXG4gIGJvdGgsXG4gIGNoYWluLFxuICBqb2luLFxuICBsZWZ0LFxuICBtYXAsXG4gIHBpcGUsXG4gIHJpZ2h0LFxuICBza2lwLFxuICB2YWx1ZSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jaGFpbmluZydcbmV4cG9ydCB7XG4gIGZvbGxvd2VkQnksXG4gIGZvbGxvd2VkQnlMLFxuICBsb29rQWhlYWQsXG4gIG5vdEVtcHR5LFxuICBub3RGb2xsb3dlZEJ5LFxuICBub3RGb2xsb3dlZEJ5TCxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jb25kaXRpb25hbCdcbmV4cG9ydCB7XG4gIGxhYmVsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL21lc3NhZ2UnXG5leHBvcnQge1xuICBibG9jayxcbiAgY2hhaW5sLFxuICBjaGFpbmwxLFxuICBjaGFpbnIsXG4gIGNoYWlucjEsXG4gIGNvdW50LFxuICBtYW55LFxuICBtYW55MSxcbiAgbWFueVRpbGwsXG4gIHNlcEJ5LFxuICBzZXBCeTEsXG4gIHNlcEVuZEJ5LFxuICBzZXBFbmRCeTEsXG4gIHNlcSxcbiAgc2tpcE1hbnksXG4gIHNraXBNYW55MSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXG5cbmV4cG9ydCB7XG4gIFN0YXR1cyxcbiAgZXJyb3IsXG4gIGZhdGFsLFxuICBtYWtlUGFyc2VyLFxuICBtYXliZUZhdGFsLFxuICBvayxcbiAgcGFyc2UsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY2xlYXIsXG4gIGV4cGVjdGVkRXJyb3IsXG4gIGZvcm1hdEVycm9ycyxcbiAgZ2VuZXJpY0Vycm9yLFxuICBnZXRQb3NpdGlvbixcbiAgb3RoZXJFcnJvcixcbiAgb3ZlcndyaXRlLFxuICBwdXNoLFxuICB1bmV4cGVjdGVkRXJyb3IsXG59IGZyb20gJy4vZXJyb3InXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRFcnJvciwgdW5leHBlY3RlZEVycm9yIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgY29tbWFTZXBhcmF0ZSwgZHVwLCBuZXh0Q2hhciwgcXVvdGUgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBDaGFyUGFyc2VyID0gZm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG5cbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcihzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcignRU9GJyldKVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG5cbiAgaWYgKGZuKG5leHQpKSB7XG4gICAgcmV0dXJuIG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxuICB9XG4gIHJldHVybiBlcnJvcihzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcihxdW90ZShuZXh0KSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFVwb24gZmFpbHVyZSwgdGhpcyBwYXJzZXIgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgYWx3YXlzIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIobmV4dCA9PiBjID09PSBuZXh0KShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IocXVvdGUoYykpXSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxuICogc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdFxuICogdGhlIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLiBVcG9uIGZhaWx1cmUsXG4gKiB0aGlzIHBhcnNlciBkb2VzIG5vdCBjb25zdW1lIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIGFsd2F5cyBmYWlsLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXJpID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihcbiAgICByZWFkID0+IGMudG9Mb3dlckNhc2UoKSA9PT0gcmVhZC50b0xvd2VyQ2FzZSgpLFxuICApKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihxdW90ZShjKSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xuICogYGZhbHNlYCwgdGhpcyBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeSA9IGZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBuYW1lID0gZm4ubmFtZS5sZW5ndGggPyBmbi5uYW1lIDogJzxhbm9ueW1vdXM+J1xuICBjb25zdCBtZXNzYWdlID0gYGEgY2hhcmFjdGVyIHRoYXQgc2F0aXNmaWVzIGZ1bmN0aW9uIFwiJHtuYW1lfVwiYFxuXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihtZXNzYWdlKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlclxuICogaXQgaXMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIChpbmNsdXNpdmUpLiBJZlxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXG4gKiB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcbiAqIG5vdCwgdGhlIGZ1bGwgc3RyaW5ncyBhcmUgY29tcGFyZWQgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXIsIHdoaWNoXG4gKiBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvci5cbiAqXG4gKiBcIkJldHdlZW5cIiBpcyBkZWZpbmVkIGFjY29yZGluZyB0byBjb2RlIHBvaW50cy4gVGhpcyBpcyBmaW5lIGluIG1vc3RcbiAqIGNhc2VzLCBidXQgaXQgY2FuIGdldCB3ZWlyZCB3aXRoIGhpZ2hlciBjb2RlIHBvaW50cy4gRm9yIGV4YW1wbGUsXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxuICogVGhlIGBoYCB3b3VsZCBpbnN0ZWFkIGJlIHRoZSBQbGFuY2sncyBDb25zdGFudCBjaGFyYWN0ZXIsIHdoaWNoIGlzIGluXG4gKiBhIGNvbXBsZXRlbHkgZGlmZmVyZW50IHBhcnQgb2YgdGhlIFVuaWNvZGUgc3BlY3RydW0gYW5kIHRoZXJlZm9yZSBpc1xuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZVxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gc3RhcnQgJiYgYyA8PSBlbmRcbiAgY29uc3QgbWVzc2FnZSA9IGBhIGNoYXJhY3RlciBiZXR3ZWVuIFwiJHtzdGFydH1cIiBhbmQgXCIke2VuZH1cImBcblxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IobWVzc2FnZSldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGlucHV0IGNoYXJhY3RlciBhbmQgdGhlbiBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnkgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgaWYgKGluZGV4ID09PSB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3IoXG4gICAgICBzdGF0ZSwgW2V4cGVjdGVkRXJyb3IoJ2FueSBjaGFyYWN0ZXInKSwgdW5leHBlY3RlZEVycm9yKCdFT0YnKV0sXG4gICAgKVxuICB9XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgZG9lc1xuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBlb2YgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgaWYgKGluZGV4ID09PSB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gb2soc3RhdGUsIG51bGwpXG4gIH1cbiAgY29uc3QgeyBfLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBbZXhwZWN0ZWRFcnJvcignRU9GJyksIHVuZXhwZWN0ZWRFcnJvcihxdW90ZShuZXh0KSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaFxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXG4gKiBpZ25vcmVkKS4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjaGFycyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5XG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYVxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueU9mID0gY2hhcnMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgaWYgKGFyci5pbmNsdWRlcyhuZXh0KSkgcmV0dXJuIG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxuICBjb25zdCBtZXNzYWdlID0gJ2FueSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnIubWFwKGMgPT4gYFwiJHtjfVwiYCkpXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgW2V4cGVjdGVkRXJyb3IobWVzc2FnZSksIHVuZXhwZWN0ZWRFcnJvcihxdW90ZShuZXh0KSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaFxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXG4gKiBpZ25vcmVkKS4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzICpub3QqIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZVxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjaGFycyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5XG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGFcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIG5vdFxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9uZU9mID0gY2hhcnMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgaWYgKGFyci5pbmNsdWRlcyhuZXh0KSkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSAnbm9uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnIubWFwKGMgPT4gYFwiJHtjfVwiYCkpXG4gICAgcmV0dXJuIGVycm9yKHN0YXRlLCBbZXhwZWN0ZWRFcnJvcihtZXNzYWdlKSwgdW5leHBlY3RlZEVycm9yKHF1b3RlKG5leHQpKV0pXG4gIH1cbiAgcmV0dXJuIG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGRpZ2l0LiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYSBVbmljb2RlIGRlY2ltYWwgZGlnaXQ7IGZvclxuICogdGhhdCwgdXNlIGByZWdleCgvXFxwe05kfS8pYC4gVGhpcyBwYXJzZXIgc3VjY2VlZHMgb25seSBmb3IgdGhlXG4gKiBsaXRlcmFsIGNoYXJhY3RlcnMgYDAtOWAuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWdpdCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIGRpZ2l0JyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2EgaGV4IGRpZ2l0JyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc3J1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2FuIG9jdGFsIGRpZ2l0JyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVyczsgYHVsZXR0ZXJgXG4gKiBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIGxldHRlcicpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3Rlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUlcbiAqIGNoYXJhY3RlcnM7IGB1YWxwaGFgIGlzIGEgVW5pY29kZSBhbHBoYW51bWVyaWMgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IoXG4gICAgbmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInKV0sXG4gIClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2FuIHVwcGVyY2FzZSBsZXR0ZXInKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1bG93ZXJgIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbG93ZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBsb3dlcmNhc2UgbGV0dGVyJyldKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgbWFrZVBhcnNlciwgb2sgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGdlbmVyaWNFcnJvciwgdW5leHBlY3RlZEVycm9yIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkXG4gKiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgYmUgdGhlIG5ldyBwYXJzZXIncyByZXN1bHQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBjb25zdGFudCA9IHggPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiBvayhzdGF0ZSwgeCkpXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IGVycm9yKFxuICBzdGF0ZSwgW2dlbmVyaWNFcnJvcihtZXNzYWdlKV0sXG4pKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uIFRoaXMgc2lnbmlmaWVzIGFcbiAqIGZhdGFsIGVycm9yLCBvbmUgdGhhdCBjYW5ub3QgYmUgcmVjb3ZlcmVkIGZyb20gd2l0aG91dCBiYWNrdHJhY2tpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgZmF0YWxseSB3aXRoIHRoZVxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsRmF0YWxseSA9IG1lc3NhZ2UgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiBmYXRhbChcbiAgc3RhdGUsIFtnZW5lcmljRXJyb3IobWVzc2FnZSldLFxuKSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSB1bmV4cGVjdGVkXG4gKiAgICAgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgdW5leHBlY3RlZCA9IG1lc3NhZ2UgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiBlcnJvcihcbiAgc3RhdGUsIFt1bmV4cGVjdGVkRXJyb3IobWVzc2FnZSldLFxuKSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZEVycm9yLCB1bmV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIHF1b3RlLCBzdHJpbmdUb1ZpZXcsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXNcbiAqIGl0IGFzIGZhciBhcyBpdCBjYW4gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKlxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xuICogaWdub3JlZCBpbiB0aGF0IG9ubHkgdGhlIGZpcnN0IG1hdGNoIGlzIHByb2Nlc3NlZCBhbmQgcmV0dXJuZWQuIFRoaXNcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxuICpcbiAqIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIHJldHVybmVkIGBhY3R1YWxgIHN0YXRlIHByb3BlcnR5IHVwb25cbiAqIGZhaWx1cmUuIElmIGl0J3Mgbm90IHByb3ZpZGVkLCB0aGUgbGVuZ3RoIHdpbGwgYmUgdGhlIHNhbWUgYXMgdGhlXG4gKiBsZW5ndGggb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbidzIHNvdXJjZS5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXG4gKiAgICAgaW5wdXQgdGV4dCBzdGFydGluZyBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbGVuZ3RoXSBUaGUgbGVuZ3RoIG9mIHRoZSByZXN1bHRpbmcgYFVuZXhwZWN0ZWRgXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpZiB0aGUgcGFyc2VyIGZhaWxzLiBJZiB0aGlzIGlzIG5vdCBwcmVzZW50LCB0aGF0XG4gKiAgICAgbWVzc2FnZSB3aWxsIGJlIGFzIGxvbmcgYXMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGVcbiAqICAgICByZWd1bGFyIGV4cHJlc3Npb24sIGp1c3QgYXMgYSBndWVzcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmNvbnN0IFJlZ2V4UGFyc2VyID0gKHJlLCBsZW5ndGggPSBudWxsKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gb2soc3RhdGUsIG1hdGNoWzBdLCBpbmRleCArIHN0cmluZ1RvVmlldyhtYXRjaFswXSkuYnl0ZUxlbmd0aClcbiAgfVxuXG4gIGxldCBsZW4gPSBsZW5ndGggPz8gY2hhckxlbmd0aChyZS5zb3VyY2UpIC0gMSAvLyB0byBpZ25vcmUgYW5jaG9yXG4gIGlmIChsZW4gPiB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCkge1xuICAgIGxlbiA9IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4XG4gIH1cbiAgY29uc3QgYWN0dWFsID0gbGVuID09PSAwID8gJ0VPRicgOiBxdW90ZShbLi4ucmVzdF0uc2xpY2UoMCwgbGVuKS5qb2luKCcnKSlcblxuICByZXR1cm4gZXJyb3Ioc3RhdGUsIFt1bmV4cGVjdGVkRXJyb3IoYWN0dWFsKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgc3VwcGxpZWQgcmVndWxhclxuICogZXhwcmVzc2lvbiB0byB0aGUgaW5wdXQgdGV4dCBhdCB0aGUgY3VycmVudCBsb2NhdGlvbi4gSWYgdGhlcmUgaXMgYVxuICogbWF0Y2gsIGFueSBtYXRjaGluZyB0ZXh0IGlzIHJldHVybmVkIGFzIGEgc3VjY2Vzc2Z1bCByZXN1bHQuIE5vIHRleHRcbiAqIGlzIGNvbnN1bWVkIHVwb24gZmFpbHVyZS5cbiAqXG4gKiBBIHN0cmluZyBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgcGFyc2VyLiBJZiBvbmUgaXMsIGl0IGlzIGNvbnZlcnRlZFxuICogaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRob3V0IGZsYWdzLlxuICpcbiAqIElmIGEgc3RhcnQgYW5jaG9yICheKSBpcyBub3QgaW5jbHVkZWQsIG9uZSB3aWxsIGJlIGFkZGVkLiBJZiB0aGUgYGdgXG4gKiBmbGFnIGlzIGluY2x1ZGVkLCBpdCdsbCBmdW5jdGlvbmFsbHkgYmUgaWdub3JlZCBhcyBvbmx5IHRoZSBmaXJzdFxuICogbWF0Y2ggd2lsbCBiZSBjb25zaWRlcmVkIGFueXdheS4gVGhlc2UgdHdvIHJ1bGVzIGVuc3VyZSB0aGF0IHRoZVxuICogbWF0Y2ggaXMgb25seSBhdHRlbXB0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqICAgICB0aGUgaW5wdXQgdGV4dC4gSWYgdGhpcyBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgaW50b1xuICogICAgIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgcmVnZXggPSByZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVnZXgpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihcbiAgICBuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihgYSBzdHJpbmcgbWF0Y2hpbmcgJHtyZWdleH1gKV0sXG4gIClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTGV0dGVyLCAxKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2EgbGV0dGVyJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVBbHBoYSwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKFxuICAgIG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyldLFxuICApXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxuICogaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBMZXR0ZXIsIFRpdGxlY2FzZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVcHBlciwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhbiB1cHBlcmNhc2UgbGV0dGVyJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxvd2VyY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzIGxvd2VyY2FzZSBpZiBpdCBoYXMgdGhlXG4gKiBVbmljb2RlIGBMb3dlcmNhc2VgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgbG93ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTG93ZXIsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBsb3dlcmNhc2UgbGV0dGVyJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlU3BhY2UsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignd2hpdGVzcGFjZScpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gQSBjaGFyYWN0ZXIgaXMgd2hpdGVzcGFjZSBmb3IgdGhlXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgYWxzbyByZWNvZ25pemUgdGhlIHR3by1jaGFyYWN0ZXIgY29tYmluYXRpb24gYFxcclxcbmBcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVc3BhY2UsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignd2hpdGVzcGFjZScpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXJcbiAqIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsXG4gKiB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGUgaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVTcGFjZXMsIDEpKHN0YXRlKVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cbiAqIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZVxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcbiAqIHByb2R1ZGUgYSByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXNVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFtuZXh0LCBfXSA9IFJlZ2V4UGFyc2VyKHJlVXNwYWNlcywgMSkoc3RhdGUpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVNwYWNlczEsIDEpKHN0YXRlKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gb2sobmV4dCwgbnVsbClcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCd3aGl0ZXNwYWNlJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzMSwgMSkoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiBvayhuZXh0LCBudWxsKVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ3doaXRlc3BhY2UnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICovXG5leHBvcnQgY29uc3QgbmV3bGluZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZU5ld2xpbmUsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBuZXdsaW5lJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKiAqIGBORUxgIChuZXh0IGxpbmUsIGBVKzAwODVgKVxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxuICpcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBuZXdsaW5lJyldKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZEVycm9yLCB1bmV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIG5leHRDaGFycywgcXVvdGUsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCBhIHBhcnRpY3VsYXIgc3RyaW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aFxuICogdG8gYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXG4gKiBgdHJ1ZWAsIHRoZW4gdGhlIHBhcnNlciBzdWNjZWVkcy5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXG4gKiBsZWZ0IGluIHRoZSBpbnB1dC4gSXQgd2lsbCBhbHdheXMgcGFzcyBpZiBgbGVuZ3RoYCBpcyAwLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxuICogICAgIHNob3VsZCByZWFkLlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqL1xuY29uc3QgU3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gb2soc3RhdGUsICcnKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICByZXR1cm4gZXJyb3Ioc3RhdGUsIFt1bmV4cGVjdGVkRXJyb3IoJ0VPRicpXSlcbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFycyhpbmRleCwgdmlldywgbGVuZ3RoKVxuICBpZiAoY2hhckxlbmd0aChuZXh0KSAhPT0gbGVuZ3RoIHx8ICFmbihuZXh0KSkge1xuICAgIHJldHVybiBlcnJvcihzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcihxdW90ZShuZXh0KSldKVxuICB9XG4gIHJldHVybiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXG4gKiBpbnB1dCBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoZSBzdHJpbmcgbWF0Y2hcbiAqIG11c3QgYmUgZXhhY3QgKGl0IGlzIGNhc2Utc2Vuc2l0aXZlKSwgYW5kIGFsbCBVVEYtOCBjaGFyYWN0ZXJzIGFyZVxuICogcmVjb2duaXplZCBwcm9wZXJseS5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmcgPSBzdHIgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ciA9PT0gY2hhcnMsXG4gICkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKHF1b3RlKHN0cikpXSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXG4gKiBpbnB1dCBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoaXMgbWF0Y2ggaXMgKm5vdCpcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXG4gKiBKYXZhU2NyaXB0IHVuZGVyc3RhbmRpbmcgb2YgcGFpcnMgb2YgdXBwZXItIGFuZCBsb3dlcmNhc2UgbGV0dGVycy4gSXRcbiAqIGNhbm5vdCBiZSBhc3N1bWVkIHRoYXQgMy0gYW5kIDQtYnl0ZSBjaGFyYWN0ZXJzIHdpbGwgcmVjb2duaXplIGNhc2UtXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ2kgPSBzdHIgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxuICApKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihxdW90ZShzdHIpKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhlIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQgdGV4dCBhbmQgcmVzdWx0cyBpblxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxuICBjb25zdCB3aWR0aCA9IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4XG4gIHJldHVybiBvayhzdGF0ZSwgdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldyksIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXG4gKiB0aGVtIChhcyBhIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlXG4gKiBub3QgdGhhdCBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKFxuICAgIG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgKV0sXG4gIClcbn0pXG4iLCIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xuLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlN0YXRlfSBTdGF0ZSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzIGludG8gYSBVQ1MtMiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuXG4gKiBlbmRpbmcgdmFsdWUsIHN0ZXBwaW5nIGJ5IGEgY2VydGFpbiB2YWx1ZSBiZXR3ZWVuIGVhY2guXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGxhc3QgbnVtYmVyIG9mIHRoZSByYW5nZS4gQnkgZGVmYXVsdCB0aGlzXG4gKiAgICAgbnVtYmVyIGZvcm1zIHRoZSB1cHBlciBib3VuZCBvZiB0aGUgcmFuZ2Ugd2l0aG91dCBiZWluZyBpbmNsdWRlZFxuICogICAgIGluIGl0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGVwPTFdIFRoZSBudW1iZXIgdG8gaW5jcmVhc2UgdGhlIHlpZWxkZWQgdmFsdWUgYnlcbiAqICAgICBkdXJpbmcgZWFjaCBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcbiAqICAgICBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSByYW5nZS5cbiAqIEB5aWVsZHMge251bWJlcn0gVGhlIHZhbHVlcyB0aGF0IG1ha2UgdXAgdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gKnJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGluY2x1c2l2ZSkge1xuICBjb25zdCBzID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBzdGFydCA6IDBcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcbiAgY29uc3QgcCA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJyA/IHN0ZXAgPT09IDAgPyAxIDogTWF0aC5hYnMoc3RlcCkgOiAxXG4gIGNvbnN0IGkgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcidcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcbiAgICAgID8gISFzdGVwIDogISFlbmRcblxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcbiAgbGV0IGN1cnJlbnQgPSBzXG5cbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gICAgaWYgKGZvcndhcmQpIHtcbiAgICAgIHJldHVybiBpID8gY3VycmVudCA+IGUgOiBjdXJyZW50ID49IGVcbiAgICB9XG4gICAgcmV0dXJuIGkgPyBjdXJyZW50IDwgZSA6IGN1cnJlbnQgPD0gZVxuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xuICB3aGlsZSAoIWZpbmlzaGVkKCkpIHtcbiAgICB5aWVsZCBjdXJyZW50XG4gICAgY3VycmVudCA9IGZvcndhcmQgPyBjdXJyZW50ICsgcCA6IGN1cnJlbnQgLSBwXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBvcnRpb24gb2YgYSBVVEYtOCBkYXRhIHZpZXcgYXMgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHdoaWNoXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxuICogICAgIG9mIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoZSBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xuICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aCB9LFxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXG4gIClcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcbiAqICAgICBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoZW5jb2Rlci5lbmNvZGUoc3RyKS5idWZmZXIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcbiAqIHZhbHVlIGNhbiBkaWZmZXIgZnJvbSB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiB0aGF0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XG4gIHJldHVybiBbLi4uc3RyXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmICgoYnl0ZSAmIDB4ODApID4+IDcgPT09IDApIHJldHVybiAxXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMSkgcmV0dXJuIDRcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxuICByZXR1cm4gMVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxuICpcbiAqIEB0eXBlZGVmIE5leHRDaGFySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uIHdpdGhpbiB0aGUgZGF0YSB2aWV3LlxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXG4gKiA0LWJ5dGUgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGVpciBmaXJzdCBieXRlcy4gSWZcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xuICBjb25zdCB2aWV3TGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoXG4gIGxldCB3aWR0aCA9IDBcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UoY291bnQpKSB7XG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xuICAgIHdpZHRoICs9IG5leHRDaGFyV2lkdGgoaSwgdmlldylcbiAgfVxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XG4gICAgd2lkdGggPSB2aWV3TGVuZ3RoIC0gaW5kZXhcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFN1cnJvdW5kcyB0aGUgc3VwcGxpZWQgc3RyaW5nIGluIGRvdWJsZSBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIGRvdWJsZSBxdW90ZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGxlZCBhbmQgdHJhaWxlZCBieSBkb3VibGUgcXVvdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIHJldHVybiBgXCIke3N0cn1cImBcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHR3byBjb3BpZXMgb2YgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIFdoaWxlIHRoaXMgd2lsbCBkdXBsaWNhdGUgYW55IHZhbHVlLCBpdCdzIHByaW1hcmlseSB1c2VmdWwgZm9yXG4gKiBjb3ZlcmluZyBhIG1pc3NpbmcgcGFydCBvZiBKYXZhU2NyaXB0IGRlc3RydWN0dXJpbmcsIHNvIGB2YWx1ZWBcbiAqIHNob3VsZCBnZW5lcmFsbHkgYmUgYW4gYXJyYXkgb3Igb2JqZWN0LlxuICpcbiAqIFRoYXQgbWlzc2luZyBwYXJ0IGlzIHJlZmVyZW5jZSB0byB0aGUgZW50aXJlIHZhbHVlLiBKYXZhU2NyaXB0IHdpbGxcbiAqIGFsbG93IGRlc3RydWN0dXJpbmcgdG8gcmVmZXJlbmNlIGFueSBhbmQgYWxsIHBhcnRzIG9mIGEgdmFsdWUsIGJ1dCBpdFxuICogZG9lcyBub3QgaGF2ZSBhIHN5bnRheCAobGlrZSB0aGUgYEBgIG9wZXJhdG9yIGluIGxhbmd1YWdlcyBsaWtlIFNjYWxhXG4gKiBhbmQgSGFza2VsbCkgdG8gcmVmZXJlbmNlIHRoZSBlbnRpcmUgdmFsdWUgYXQgdGhlIHNhbWUgdGltZS4gVXNpbmdcbiAqIHRoaXMgZnVuY3Rpb24sIG9uZSBvZiB0aGUgY29waWVzIGNhbiBiZSByZXRhaW5lZCBhcyBhIHdob2xlIHdoaWxlXG4gKiBwcm92aWRpbmcgYW5vdGhlciBjb3B5IGZvciBkZXN0cnVjdHVyaW5nLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGBcbiAqIGNvbnN0IFt3aG9sZSwgW3N0YXRlLCB2YWx1ZV1dID0gZHVwKHBhcnNlKHBhcnNlciwgaW5wdXQpKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtbU3RhdGUsIFJlc3VsdF19IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHtbW1N0YXRlLCBSZXN1bHRdLCBbU3RhdGUsIFJlc3VsdF1dfSBBbiBhcnJheSBjb250YWluaW5nIHR3b1xuICogICAgIGNvcGllcyBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXAodmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=