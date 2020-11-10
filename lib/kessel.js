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
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
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
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(state));
  if (result.status !== kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Ok) return tuple;
  let next = nextState;
  const values = [result.value];

  while (true) {
    const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(p(next));
    next = nextState;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Fatal) return tuple;
    if (result.status === kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"].Error) break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NoYWluaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jb25kaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImFsdCIsInBzIiwibWFrZVBhcnNlciIsInN0YXRlIiwiZXJyb3JzIiwicCIsInR1cGxlIiwibmV4dCIsInJlc3VsdCIsImR1cCIsInN0YXR1cyIsIlN0YXR1cyIsIk9rIiwicHVzaCIsIkZhdGFsIiwiZmF0YWwiLCJlcnJvciIsImFsdEwiLCJtZXNzYWdlIiwiZXhwZWN0ZWRFcnJvciIsIm9wdGlvbmFsIiwib2siLCJvckVsc2UiLCJ4IiwiRXJyb3IiLCJiYWNrIiwiaW5kZXgiLCJzZXFCIiwidmFsdWVzIiwibmV4dFN0YXRlIiwidmFsdWUiLCJjaGFpbkIiLCJmbiIsInR1cGxlMSIsIm5leHQxIiwicmVzdWx0MSIsInR1cGxlMiIsIm5leHQyIiwicmVzdWx0MiIsImxlZnRCIiwicDEiLCJwMiIsInJpZ2h0QiIsImJvdGhCIiwiY291bnRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJza2lwIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsInBpcGUiLCJiZXR3ZWVuIiwicHJlIiwicG9zdCIsIm5leHQzIiwicmVzdWx0MyIsImxvb2tBaGVhZCIsIm5vdEVtcHR5IiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlMIiwibXNnIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlMIiwibGFiZWwiLCJsb29wTWVzc2FnZSIsIm5hbWUiLCJzZXEiLCJibG9jayIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcE1hbnkiLCJza2lwTWFueTEiLCJzZXBCeSIsInNlcCIsIm5leHRTdGF0ZTEiLCJuZXh0U3RhdGUyIiwic2VwQnkxIiwic2VwRW5kQnkiLCJzZXBOZXh0Iiwic2VwRW5kQnkxIiwiY291bnQiLCJtYW55VGlsbCIsImNoYWlubCIsIm9wIiwib3BzIiwidHVwbGVvcCIsIm5leHRvcCIsInJlc3VsdG9wIiwidHVwbGVwIiwibmV4dHAiLCJyZXN1bHRwIiwiaSIsImxlbmd0aCIsImNoYWlubDEiLCJjaGFpbnIiLCJjaGFpbnIxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiU3ltYm9sIiwibWFrZVN0YXRlIiwiaW5wdXQiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwidGFiIiwiemVyb1dpZHRoIiwiRXJyb3JUeXBlIiwiRXhwZWN0ZWQiLCJVbmV4cGVjdGVkIiwiR2VuZXJpYyIsIk90aGVyIiwibWFrZUVycm9yIiwidHlwZSIsInVuZXhwZWN0ZWRFcnJvciIsImdlbmVyaWNFcnJvciIsIm90aGVyRXJyb3IiLCJsaXN0IiwiY2xlYXIiLCJ0eXBlcyIsImZpbHRlciIsImluY2x1ZGVzIiwib3ZlcndyaXRlIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwicmVwZWF0IiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsImNoYXJMZW5ndGgiLCJzaG93IiwibWF4V2lkdGgiLCJuZXdDb2xubyIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJmb3JtYXQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsInVuZXhwZWN0ZWQiLCJleHBlY3RlZCIsImNvbW1hU2VwYXJhdGUiLCJ1bmV4cE1zZyIsImV4cE1zZyIsIm1zZ01zZyIsImZvcm1hdEVycm9ycyIsImZvcm1hdHRlciIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwiQ2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJxdW90ZSIsImNoYXIiLCJjIiwiY2hhcmkiLCJyZWFkIiwidG9Mb3dlckNhc2UiLCJzYXRpc2Z5IiwiYW55IiwiZW9mIiwiYW55T2YiLCJjaGFycyIsImFyciIsIm5vbmVPZiIsImRpZ2l0IiwiaGV4Iiwib2N0YWwiLCJsZXR0ZXIiLCJhbHBoYSIsInVwcGVyIiwibG93ZXIiLCJjb25zdGFudCIsImZhaWwiLCJmYWlsRmF0YWxseSIsInJlTGV0dGVyIiwicmVBbHBoYSIsInJlVXBwZXIiLCJyZUxvd2VyIiwicmVTcGFjZSIsInJlVXNwYWNlIiwicmVTcGFjZXMiLCJyZVVzcGFjZXMiLCJyZVNwYWNlczEiLCJyZVVzcGFjZXMxIiwicmVOZXdsaW5lIiwicmVVbmV3bGluZSIsIlJlZ2V4UGFyc2VyIiwicmUiLCJyZXN0IiwibGVuIiwic291cmNlIiwiYWN0dWFsIiwic2xpY2UiLCJyZWdleCIsIlJlZ0V4cCIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJsZXR0ZXJVIiwiYWxwaGFVIiwidXBwZXJVIiwibG93ZXJVIiwic3BhY2UiLCJzcGFjZVUiLCJzcGFjZXMiLCJzcGFjZXNVIiwic3BhY2VzMSIsInNwYWNlczFVIiwibmV3bGluZVUiLCJTdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJzdHJpbmciLCJzdHIiLCJzdHJpbmdpIiwiYWxsIiwiYW55U3RyaW5nIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJsYXN0IiwicG9wIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFpQkE7QUFNQTtDQXNCQTtBQUNBOztBQUVBO0FBY0E7QUFZQTtBQVFBO0NBc0JBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLE1BQU13QixVQUFVLEdBQUczSyxFQUFFLElBQUk5Qiw4REFBVSxDQUFDQyxLQUFLLElBQUk7QUFDM0MsUUFB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YWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIGZhdGFsLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZEVycm9yIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCByYW5nZSB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcy4gRWFjaCBvZiB0aGUgc3VwcGxpZWRcbiAqIHBhcnNlcnMgaXMgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlci4gV2hlbiB0aGUgZmlyc3QgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhlIGZpcnN0IHBhcnNlciBmYWlscyB3aGlsZSBjb25zdW1pbmcgaW5wdXQsIGV4ZWN1dGlvblxuICogaXMgc3RvcHBlZCBhbmQgdGhlIHN0YXRlIGZyb20gdGhhdCBsYXN0IHBhcnNlciBpcyBwYXNzZWQgdGhyb3VnaC4gVGhlXG4gKiBzYW1lIGhhcHBlbnMgaWYgYWxsIHBhcnNlcnMgYXJlIGFwcGxpZWQgd2l0aG91dCBhbnkgb2YgdGhlbVxuICogc3VjY2VlZGluZy5cbiAqXG4gKiBPbiBmYWlsdXJlLCBhbGwgb2YgdGhlIGBFeHBlY3RlZGAgZXJyb3JzIGZyb20gYW55IG9mIHRoZSBjb250YWluZWRcbiAqIHBhcnNlcnMgd2lsbCBiZSBtZXJnZWQgaW50byB0aGlzIHBhcnNlcidzIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgYWx0ID0gcHMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgICBlcnJvcnMucHVzaCguLi5yZXN1bHQuZXJyb3JzKVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiBmYXRhbChuZXh0LCBlcnJvcnMpXG4gIH1cbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBlcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcywgYnV0IHdpdGggYSBmYWlsdXJlXG4gKiBtZXNzYWdlIGluY2x1ZGVkLiBUaGUgcGFyc2VycyBhcmUgdHJpZWQgb25lIGF0IGEgdGltZSBhcyB3aXRoIGBhbHRgLFxuICogYnV0IGlmIHRoZXkgYWxsIGZhaWwgKG9yIGlmIGFueSBmYWlsIGZhdGFsbHkpLCB0aGUgbGFzdCBhcmd1bWVudCBpc1xuICogdXNlZCBhcyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSByYXRoZXIgdGhhbiBjb25zdHJ1Y3RpbmcgaXQgb3V0IG9mIHRoZVxuICogZXhwZWN0ZWQgbWVzc2FnZXMgb2YgZWFjaCBmYWlsZWQgcGFyc2VyLlxuICpcbiAqIGBhbHRMKHBzLCBtZXNzYWdlKWAgaXMgYW4gb3B0aW1pemVkIHZlcnNpb24gb2YgYGxhYmVsKGFsdChwcyksXG4gKiBtZXNzYWdlKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJbXX0gcHMgVGhlIHBhcnNlcnMgdG8gYXBwbHkgdG8gdGhlIGlucHV0LCBvbmUgYXQgYVxuICogICAgIHRpbWUsIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZm9yIHRoZSBgRXhwZWN0ZWRgIGVycm9yIHRoYXRcbiAqICAgICB3aWxsIHJlc3VsdCBmcm9tIHRoZSBwYXJzZXIgZmFpbGluZy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHRMID0gKHBzLCBtZXNzYWdlKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWwobmV4dCwgW2V4cGVjdGVkRXJyb3IobWVzc2FnZSldKVxuICAgIH1cbiAgfVxuICByZXR1cm4gZXJyb3Ioc3RhdGUsIFtleHBlY3RlZEVycm9yKG1lc3NhZ2UpXSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciwgc3VjY2VlZGluZyB3aGV0aGVyXG4gKiBpdCBmYWlscyBvciBub3QgYnV0IG9ubHkgY29uc3VtaW5nIGlucHV0IGlmIGl0IHN1Y2NlZWRzLiBUaGlzIHBhcnNlclxuICogd2lsbCBvbmx5IGZhaWwgaWYgaXRzIHN1cHBsaWVkIHBhcnNlciBmYWlscyBmYXRhbGx5LiBJdCdzIHVzZWQgdG9cbiAqIGltcGxlbWVudCBza2lwcGluZyBvdmVyIHNvbWUgb3B0aW9uYWwgdGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIGZvciBvcHRpb25hbCBjb250ZW50IHRvIGJlIGFwcGxpZWQgYW5kXG4gKiAgICAgdGhlbiBoYXZlIGl0cyByZXN1bHQgaWdub3JlZC5cbiAqIEByZXR1cm4ge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdCB1bmxlc3MgaXRzXG4gKiAgICAgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LiBUaGlzIHBhcnNlciBjb25zdW1lcyB0ZXh0IG9ubHlcbiAqICAgICBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xuICogc3VjY2Vzc2Z1bCByZXN1bHQgb3IgZWxzZSAoaWYgdGhhdCBwYXJzZXIgZmFpbHMpIHRoZSBzdXBwbGllZCB2YWx1ZVxuICogYHhgLiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogYG9yRWxzZShwLCB4KWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBhbHQoW3AsXG4gKiBjb25zdGFudCh4KV0pYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXInc1xuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cbiAqIEBwYXJhbSB7Kn0geCBBIHZhbHVlIHdoaWNoIHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3MgcmVzdWx0IGlmIHRoZVxuICogICAgIHN1cHBsaWVkIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIncyBzdWNjZXNzZnVsIHJlc3VsdCBvciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBvckVsc2UgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLkVycm9yKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIG9rKG5leHQsIHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsXG4gKiBmYWlsdXJlLiBJdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXI7IGlmIHRoYXQgcGFyc2VyIGZhaWxzXG4gKiBmYXRhbGx5LCB0aGUgc3RhdGUgaXMgc2V0IGJhY2sgdG8gd2hhdCBpdCB3YXMgKmJlZm9yZSogdGhhdCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgYW5kIHRoZSBmYXRhbCBmYWlsdXJlIGlzIHJldHVybmVkIGFzIGEgbm9uLWZhdGFsIGZhaWx1cmUuIElmXG4gKiB0aGUgcGFyc2VyIGhhcyBhbnkgb3RoZXIgcmVzdWx0LCBpdCBpcyBwYXNzZWQgdGhyb3VnaCB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24uXG4gKlxuICogVGhpcyBwYXJzZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGNhdXNlIGEgbm9uLWJhY2t0cmFja2luZyBwYXJzZXIgdG9cbiAqIGJhY2t0cmFjayB1cG9uIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSBmYXRhbCBmYWlsdXJlcyB3aWxsIGJlIGNvbnZlcnRlZFxuICogICAgIGludG8gbm9uLWZhdGFsIGZhaWx1cmVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBjYW5ub3QgZmFpbCBmYXRhbGx5LiBJZiBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGZhaWxzIGZhdGFsbHksIHRoaXMgb25lIHdpbGwgaW5zdGVhZCBmYWlsIG5vbi1mYXRhbGx5LlxuICovXG5leHBvcnQgY29uc3QgYmFjayA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXG4gKiBmYWlscy4gSW4gdGhlIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdFxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvXG4gKiBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQuIEFcbiAqIGZhdGFsIGVycm9yIGZyb20gb25lIG9mIHRoZSBjb250YWluZWQgcGFyc2VycyB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhblxuICogb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHNlcUIocHMpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2soc2VxKHBzKSlgLCBhcyB0aGVcbiAqIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgYHBzYCBmYWlscyBmYXRhbGx5LCB3aGlsZSB0aGVcbiAqIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyW119IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXQgYVxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcUIgPSBwcyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHJldHVybiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cbiAqXG4gKiBJZiB0aGUgc2Vjb25kIHBhcnNlciAodGhlIG9uZSBwcm92aWRlZCBieSBgZm5gKSBmYWlscyBub24tZmF0YWxseSxcbiAqIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvXG4gKiB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3RcbiAqIHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbCBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbFxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBjaGFpbkIocCwgZm4pYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2soY2hhaW4ocCwgZm4pKWAsIGFzXG4gKiB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LFxuICogd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluQiA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gU3RhdHVzLkVycm9yKSByZXR1cm4gdHVwbGUyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgcmVzdWx0Mi5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDFgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgbGVmdEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrKGxlZnQocDEsIHAyKSlgLCBhc1xuICogdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseSxcbiAqIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRCID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUxXG5cbiAgY29uc3QgW3R1cGxlMiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikge1xuICAgIHJldHVybiBlcnJvcihuZXh0MiwgcmVzdWx0Mi5lcnJvcnMsIGluZGV4KVxuICB9XG4gIHJldHVybiBvayhuZXh0MiwgcmVzdWx0MS52YWx1ZSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAyYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHJpZ2h0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2socmlnaHQocDEsIHAyKSlgLFxuICogYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseSxcbiAqIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gU3RhdHVzLkVycm9yKSByZXR1cm4gdHVwbGUyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgcmVzdWx0Mi5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgYm90aEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrKGJvdGgocDEsIHAyKSlgLCBhc1xuICogdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseSxcbiAqIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBib3RoQiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3R1cGxlMSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlMVxuXG4gIGNvbnN0IFt0dXBsZTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gb2sobmV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcbiAgfVxuICByZXR1cm4gZXJyb3IobmV4dDIsIHJlc3VsdDIuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXG4gKiBmYWlscywgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbDsgaWYgdGhhdCBmYWlsdXJlIGlzIGZhdGFsLCB0aGVcbiAqIG92ZXJhbGwgZmFpbHVyZSB3aWxsIGFsc28gYmUgZmF0YWwuXG4gKlxuICogVGhlIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgdGhlIHVuZGVybHlpbmcgZXJyb3Igd2FzXG4gKiBub24tZmF0YWwsIGV2ZW4gaWYgaW5wdXQgd2FzIGNvbnN1bWVkIChiYWNrdHJhY2tpbmcgd2lsbCBoYXBwZW4gaW5cbiAqIHRoaXMgY2FzZSkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50QiA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSByZXR1cm4gZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cbiAqXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxuICogZXJyb3IgZm9yIHRoZSBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLk9rKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlMiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3IobmV4dDIsIFsuLi5yZXN1bHQyLmVycm9ycywgLi4ucmVzdWx0MS5lcnJvcnNdLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IG1ha2VQYXJzZXIsIG1heWJlRmF0YWwsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHN0YXRlIGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWRcbiAqIHBhcnNlciB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZVxuICogcGFyc2VyIHJldHVybnMgdGhhdCByZXN1bHRpbmcgc3RhdGUuXG4gKlxuICogSWYgdGhlIGluaXRpYWwgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgaW5zdGVhZCByZXR1cm5lZC4gSWYgdGhlXG4gKiBzZWNvbmQgcGFyc2VyICh0aGUgcmV0dXJuIHZhbHVlIG9mIGBmbmApIGZhaWxzIGFuZCBgcGAgY29uc3VtZWRcbiAqIGlucHV0LCB0aGUgZmFpbHVyZSBpcyBmYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUyXG4gIHJldHVybiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cbiAqIGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuXG4gKlxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcbiAqIGZhaWx1cmUgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cbiAqXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBjb25zdGFudChmbih4KSkpYC4gVGhpcyBhbHNvIG1ha2VzIGl0IGEgbW9yZSBlZmZpY2llbnQgdmVyc2lvbiBvZlxuICogYHBpcGUoW3BdLCBmbilgIChhIHNpbmdsZS1wYXJzZXIgYHBpcGVgKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5IHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gb2sobmV4dCwgZm4ocmVzdWx0LnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXG4gKiBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIGlmIGl0IHN1Y2NlZWRzLCB0aGF0XG4gKiByZXN1bHQncyBlbGVtZW50cyBhcmUgam9pbmVkIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGlzXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXG4gKiBmdW5jdGlvbmFsIGxhbmd1YWdlcyB3aGVyZSBhIHN0cmluZyBpcyB0aGUgc2FtZSBhcyBhIGxpc3Qgb2ZcbiAqIGNoYXJhY3RlcnMuIEphdmFTY3JpcHQgbmVlZHMgZXhwbGljaXQgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSB0d28sIHNvXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIHRoZSBjcmVhdGVkIHBhcnNlciB3aWxsIGFsc28gZmFpbCB3aXRoXG4gKiB0aGUgc2FtZSBzdGF0ZS5cbiAqXG4gKiBgam9pbihwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBjb25zdGFudCh4LmpvaW4oJycpKSlgLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lcyBub3QgcmVzdWx0IGluIGFuIGFycmF5LCBhbiBleGNlcHRpb24gd2lsbFxuICogYmUgdGhyb3duIGJlY2F1c2UgYW4gYXR0ZW1wdCB3aWxsIGJlIG1hZGUgdG8gY2FsbCBgam9pbmAgb24gdGhlXG4gKiByZXN1bHQuIElmIGl0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2Ygc29tZXRoaW5nIG90aGVyIHRoYW4gc3RyaW5ncyxcbiAqIHRob3NlIGVsZW1lbnRzIHdpbGwgYmUgY29lcmNlZCBpbnRvIHN0cmluZ3MgYW5kIHRoZW4gam9pbmVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlciBhbmRcbiAqICAgICByZXN1bHRzIGluIGEgc2luZ2xlIHN0cmluZyBtYWRlIGZyb20gam9pbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlXG4gKiAgICAgYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBvayhuZXh0LCByZXN1bHQudmFsdWUuam9pbignJykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIGRpc2NhcmRzIGFueVxuICogc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGUgc3RpbGwgY29uc3VtaW5nIGlucHV0LiBBIGZhaWx1cmUgd2lsbCBiZVxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBgc2tpcChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxuICogY29uc3RhbnQobnVsbCkpYCxcbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGRvZXMgb24gc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgcnVuIHRoZSBzdXBwbGllZCBwYXJzZXIgYnV0LCBvbiBzdWNjZXNzLFxuICogcmVzdWx0IGluIHRoZSBzdXBwbGllZCB2YWx1ZSBpbnN0ZWFkLlxuICpcbiAqIGB2YWx1ZShwLCB4KWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVuYXRpb24gb2YgYGNoYWluKHAsICgpID0+XG4gKiBjb25zdGFudCh4KSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIG9rKG5leHQsIHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxuICogdmFsdWUocDIsIHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUxXG5cbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxuICB9XG4gIHJldHVybiBvayhuZXh0MiwgcmVzdWx0MS52YWx1ZSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAyYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cbiAqXG4gKiBgcmlnaHQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgKCkgPT5cbiAqIHAyKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHQgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZTFcblxuICBjb25zdCBbdHVwbGUyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUyXG5cbiAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGJvdGggaW4gYW4gYXJyYXkuIElmIGVpdGhlclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbFxuICogYmUgZmF0YWwgaWYgYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYGJvdGgocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PlxuICogY2hhaW4ocDIsIGIgPT4gY29uc3RhbnQoW2EsIGJdKSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBib3RoID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbdHVwbGUxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUxXG5cbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiBvayhuZXh0MiwgW3Jlc3VsdDEudmFsdWUsIHJlc3VsdDIudmFsdWVdKVxuICB9XG4gIHJldHVybiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzXG4gKiB0aG9zZSByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZlxuICogcGFyc2VycyB0byBhcHBseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXG4gKiBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCogZGlzY2FyZGVkLlxuICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRvIGBmbmAgbm9cbiAqIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIGBwaXBlKFtwMSwgcDJdLCBmbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGFcbiAqID0+IGNoYWluKHAyLCBiID0+IGNvbnN0YW50KGZuKGEsIGIpKSkpYCwgYHBpcGUoW3AxLCBwMiwgcDNdLCBmbilgIGlzXG4gKiBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+IGNoYWluKHAyLCBiID0+XG4gKiBjaGFpbihwMywgYyA9PiBjb25zdGFudChmbihhLCBiLCBjKSkpKSlgLCBhbmQgc28gb24uXG4gKlxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcbiAqIGJ1dCBsZXNzIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlIGFwcGxpZWQgb25lIGF0IGEgdGltZSxcbiAqICAgICBpbiBvcmRlci5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oLi4uKik6Kn0gZm4gQSBmdW5jdGlvbiB3aGljaCB3aWxsIHJlY2VpdmUgYXNcbiAqICAgICBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuIHZhbHVlIHdpbGxcbiAqICAgICBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKHBzLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgZm4oLi4udmFsdWVzKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBiZWZvcmUsIGNvbnRlbnQsIGFuZCBhZnRlciBwYXJzZXJzXG4gKiBpbiBvcmRlciBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXG4gKiBgcGFmdGVyYC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb250ZW50IHBhcnNlciB3aWxsIGhhdmUgYW4gb3Bwb3J0dW5pdHlcbiAqIHRvIHBhdGNoIHRoZSBcImFmdGVyXCIgY29udGVudCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlciBkb2VzLCBzbyB0YWtlXG4gKiBjYXJlIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxuICpcbiAqIGBiZXR3ZWVuKHByZSwgcG9zdCwgcClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxlZnQocmlnaHQocHJlLCBwKSwgcG9zdClgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHByZShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGUxXG5cbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAobmV4dDEpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbbmV4dDMsIHJlc3VsdDNdID0gcG9zdChuZXh0MilcbiAgaWYgKHJlc3VsdDMuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiBvayhuZXh0MywgcmVzdWx0Mi52YWx1ZSlcbiAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDMuaW5kZXggIT09IGluZGV4LCBuZXh0MywgcmVzdWx0My5lcnJvcnMpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogc3VjY2VlZHMsIGl0cyByZXN1bHQgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSByZXR1cm5lZCBwYXJzZXIuXG4gKiBFaXRoZXIgd2F5LCBubyBpbnB1dCBpcyBjb25zdW1lZC4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIocykgc2F0aXNmeSB0aGUgcGFyc2VyIHdpdGhvdXQgYWN0dWFsbHkgY29uc3VtaW5nXG4gKiB0aGUgaW5wdXQgdG8gZmluZCBvdXQuXG4gKlxuICogQXMgYSBzaWRlIGVmZmVjdCwgYW55IGZhdGFsIHBhcnNlIGVycm9yIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhXG4gKiBub24tZmF0YWwgb25lLCBzaW5jZSBubyBpbnB1dCBpcyBiZWluZyBjb25zdW1lZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyBvciBmYWlsc1xuICogICAgIHdpdGggaXQsIGJ1dCB3aGljaCBjb25zdW1lcyBubyBpbnB1dCBlaXRoZXIgd2F5LlxuICovXG5leHBvcnQgY29uc3QgbG9va0FoZWFkID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2tcbiAgICA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZSwgaW5kZXgpXG4gICAgOiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXG4gKiB0aGlzIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cbiAqXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxuICogYXQgbGVhc3Qgb25jZS4gRm9yIGluc3RhbmNlLCBvbmUgY291bGQgaW1wbGVtZW50IGBtYW55MShwKWAgd2l0aFxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVtcHR5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PayB8fCBuZXh0LmluZGV4ICE9PSBpbmRleCkgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbZXhwZWN0ZWRFcnJvcigndGhlIHBhcnNlciB0byBjb25zdW1lIGlucHV0JyldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBmb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gZXJyb3IobmV4dCwgdW5kZWZpbmVkLCBpbmRleClcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcbiAqICAgICBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGxvd2VkQnlMID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIGVycm9yKG5leHQsIFtleHBlY3RlZEVycm9yKG1zZyldLCBpbmRleClcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgbnVsbCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBub3RGb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gZXJyb3IobmV4dCwgdW5kZWZpbmVkLCBpbmRleClcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0XG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgc3VjY2VlZHMsXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXG4gKiBtZXNzYWdlIHdpdGggYG1zZ2AgYW5kIHJlbW92aW5nIGFueSBcInVuZXhwZWN0ZWRcIiBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcbiAqICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gZXJyb3IobmV4dCwgW2V4cGVjdGVkRXJyb3IobXNnKV0sIGluZGV4KVxuICB9XG4gIHJldHVybiBvayhuZXh0LCBudWxsLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZEVycm9yIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcbiAqIGNvbnN1bWVzIGlucHV0LCBub3RoaW5nIGFkZGl0aW9uYWwgaGFwcGVucy4gSWYgaXQgZmFpbHMgbm9uLWZhdGFsbHksXG4gKiB0aGUgcmV0dXJuZWQgcGFyc2VyIGZhaWxzIGluIHRoZSBzYW1lIHdheSwgYnV0IGl0IHJlcGxhY2VzIHRoZVxuICogc3VwcGxpZWQgcGFyc2VyJ3MgZXJyb3JzIHdpdGggYW4gZXhwZWN0ZWQgZXJyb3Igd2hvc2UgbWVzc2FnZSBpcyB0aGVcbiAqIHN1cHBsaWVkIHN0cmluZy5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgYmV0dGVyIGVycm9yIG1lc3NhZ2VzIGluIGNhc2VzIHdoZXJlIHRoZVxuICogYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZXJyb3IgbWVzc2FnZXMgYXJlIGluc3VmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbmV3IGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSBpZiBgcGBcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHBhc3NlcyBpdHMgcmVzdWx0c1xuICogICAgIHRocm91Z2ggZXhjZXB0IGZvciBjaGFuZ2luZyBpdHMgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIHVwb25cbiAqICAgICBmYWlsdXJlLlxuICovXG5leHBvcnQgY29uc3QgbGFiZWwgPSAocCwgbWVzc2FnZSkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLkVycm9yKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFtleHBlY3RlZEVycm9yKG1lc3NhZ2UpXSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMsIG1heWJlRmF0YWwgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGR1cCwgcmFuZ2UgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgcGFyc2VyIG1heSBmYWlsIGZhdGFsbHkgZXZlbiBpZiB0aGUgdW5zdWNjZXNzZnVsXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xuICogcGFyc2VyIHN1Y2NlZWRlZCBhbmQgY29uc3VtZWQgaW5wdXQuIEVzc2VudGlhbGx5LCBpZiB0aGUgcmV0dXJuZWRcbiAqIHBhcnNlciBjb25zdW1lcyBhbnl0aGluZyBhbmQgdGhlbiBmYWlscywgaXQgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJbXX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxID0gcHMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgICAgcmV0dXJuIG5leHQuaW5kZXggPT09IGluZGV4XG4gICAgICAgID8gZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICAgICAgOiBmYXRhbChuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhXG4gKiBnZW5lcmF0b3IgZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZFxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxuICogYmUgYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS4gSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCxcbiAqIGBibG9ja2Agd2lsbCBhbHNvIGZhaWwgd2l0aCB0aGF0IGZhaWx1cmUuIFRoaXMgZmFpbHVyZSB3aWxsIGJlIGZhdGFsXG4gKiBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrID0gZ2VuRm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKG5leHQsIHZhbHVlKVxuXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHZhbHVlKG5leHQpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgICAgcmV0dXJuIG5leHQuaW5kZXggPT09IGluZGV4XG4gICAgICAgID8gZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICAgICAgOiBmYXRhbChuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICBuZXh0VmFsdWUgPSByZXN1bHQudmFsdWVcbiAgfVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZlxuICogdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsIGl0XG4gKiBzdWNjZWVkcyBldmVuIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lc24ndCBzdWNjZWVkIGV2ZW4gb25jZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW5cbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG5cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5XG4gKiBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSxcbiAqIGl0IHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgY29udGFpbmVkIHBhcnNlciBtdXN0XG4gKiBzdWNjZWVkIGF0IGxlYXN0IG9uY2UsIG9yIHRoZSByZXR1cm5lZCBwYXJzZXIgd2lsbCBmYWlsLiBPdGhlcndpc2UsXG4gKiB0aGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dFxuICogd2hlbiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55MSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcbiAqIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzbyB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyXG4gKiB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG8gZmFpbCBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcblxuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBFcnJvcihsb29wTWVzc2FnZSgnc2VwQnknKSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4uIFRoZVxuICogY29udGVudCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlZWFzdCBvbmNlIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmVcbiAqIHdpbGwgb2NjdXIuIE90aGVyd2lzZSwgdGhlIHBhcnNlciBjYW4gb25seSBmYWlsIGlmIG9uZSBvZiBpdHMgcGFyc2Vyc1xuICogZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEJ5MSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgICBjb25zdCBbdHVwbGUxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGUyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xuICogdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlciB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG9cbiAqIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5ID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgICBjb25zdCBbdHVwbGUxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGUyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5uZXh0LCBpbmRleCB9KVxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4gYW5kXG4gKiBvcHRpb25hbGx5IGF0IHRoZSBlbmQuIFRoZSBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2VcbiAqIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmUgd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5XG4gKiBmYWlsIGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcblxuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5uZXh0LCBpbmRleCB9KVxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcbiAqIGR1cmluZyB0aGF0IGZhaWx1cmUsIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50ID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gcChuZXh0KVxuICAgIG5leHQgPSBuZXh0U3RhdGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cbiAqXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsIHRoZSBvdmVyYWxsXG4gKiBwYXJzZXIgd2lsbCBmYWlsIChmYXRhbGx5IGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW4gY29uc3VtZWQpLiBBXG4gKiBmYXRhbCBlcnJvciBieSBlaXRoZXIgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGEgZmF0YWwgZXJyb3IgZm9yIHRoZVxuICogb3ZlcmFsbCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLiBJdHMgcmVzdWx0IGlzIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55VGlsbCA9IChwLCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gU3RhdHVzLk9rKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlMiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChcbiAgICAgICAgbmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIFsuLi5yZXN1bHQyLmVycm9ycywgLi4ucmVzdWx0MS5lcnJvcnNdLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5sID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlb3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXG4gICAgbmV4dCA9IG5leHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlb3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGVwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbmwxID0gKHAsIG9wKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3R1cGxlb3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXG4gICAgbmV4dCA9IG5leHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlb3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbdHVwbGVwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBTdGF0dXMuRXJyb3IpIGJyZWFrXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluciA9IChwLCBvcCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFt0dXBsZW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxuICAgIG5leHQgPSBuZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3R1cGxlcCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IFN0YXR1cy5GYXRhbCkgcmV0dXJuIHR1cGxlcFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gU3RhdHVzLkVycm9yKSBicmVha1xuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0XG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIGVpdGhlciBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcbiAqIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWlucjEgPSAocCwgb3ApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbdHVwbGVvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gU3RhdHVzLkZhdGFsKSByZXR1cm4gdHVwbGVvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFt0dXBsZXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBTdGF0dXMuRmF0YWwpIHJldHVybiB0dXBsZXBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IFN0YXR1cy5FcnJvcikgYnJlYWtcblxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHN0cmluZ1RvVmlldyB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5QYXJzZUVycm9yfSBQYXJzZUVycm9yICovXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBvbmUgb2YgdGhlIHR5cGVzXG4gKiBvZiB0eXBlZCBhcnJheXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG59XG5cbi8qKlxuICogQSBzeW1ib2wgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXG4gKiBAZW51bSB7c3ltYm9sfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2Ugd2FzIHN1Y2Nlc3NmdWwuICovXG4gIE9rOiBTeW1ib2woJ29rJyksXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXG4gIEVycm9yOiBTeW1ib2woJ2Vycm9yJyksXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgYW5kIGNvbnN1bWVkIGlucHV0LiAqL1xuICBGYXRhbDogU3ltYm9sKCdmYXRhbCcpLFxufVxuXG4vKipcbiAqIFRoZSBjdXJyZW50IHN0YXRlIG9mIGEgcGFyc2VyLiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUgaW5wdXQgdGV4dFxuICogYW5kIGEgcG9pbnRlciB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3aXRoaW4gaXQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gU3RhdGVcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcbiAqICAgICBuZXh0IHBhcnNpbmcgb3BlcmF0aW9uIHdpbGwgdGFrZSBwbGFjZSAob3Igd2hlcmUgdGhlIGxhc3Qgb25lXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcbiAqIGVzc2VudGlhbGx5IGEgdW5pb24gb2Ygc3VjY2Vzc2Z1bCB2YWx1ZSBhbmQgZmFpbHVyZSBlcnJvciwgd2l0aCB0aGVcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIGEgc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqIEBwcm9wZXJ0eSB7UGFyc2VFcnJvcltdfSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGR1cmluZ1xuICogICAgIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fFxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheVxuICogKX0gVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgcGFyc2VyIHN0YXRlLiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGEgbmV3XG4gKiBzdGF0ZSBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLiBBbnlcbiAqIGZ1cnRoZXIgc3RhdGVzIGFyZSBkZXJpdmVkIGZyb20gdGhlIGluaXRpYWwgc3RhdGUgdXNpbmcge0BsaW5rIG9rfSxcbiAqIHtAbGluayBlcnJvcn0sIG9yIHtAbGluayBmYXRhbH0uXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcbiAqICAgICB0ZXh0LlxuICogQHJldHVybnMge1N0YXRlfSBBbiBlbXB0eSBwYXJzZXIgc3RhdGUgb2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0YXRlKGlucHV0KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcbiAgICArIGBidWZmZXIsIG9yIGEgZGF0YSB2aWV3OyBwYXJzZXIgaW5wdXQgd2FzICR7dHlwZW9mIGlucHV0fWBcblxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlzVHlwZWRBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfSkoaW5wdXQpXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3LFxuICAgIGluZGV4OiAwLFxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcbiAqIHN0YXRlLCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIHN0YXRlLlxuICpcbiAqIEBjYWxsYmFjayBQYXJzZXJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBiZWZvcmUgdGhlIHBhcnNlciBpcyBydW4uXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBUaGUgdXBkYXRlZCBzdGF0ZSBhZnRlciB0aGUgcGFyc2VyIGlzXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYFBhcnNlcmAuIFRoaXMgZmFjdG9yeSBzaW1wbHkgdGFrZXMgYSBwYXJzZXJcbiAqIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGl0OyBpdCdzIGhlcmUgaW4gY2FzZSBzb21ldGhpbmcgbW9yZSBuZWVkcyB0byBiZVxuICogZG9uZSBpbiBwYXJzZXIgY3JlYXRpb24uIFRoaXMgaGFzIGhhcHBlbmVkIGluIHRoZSBwYXN0IGFuZCB2ZXJ5XG4gKiBsaWtlbHkgd2lsbCBhZ2FpbiBoYXBwZW4gaW4gdGhlIGZ1dHVyZS5cbiAqXG4gKiBXaGlsZSBpdCBpcyBub3QgY3VycmVudGx5IHNvLCB0aGVyZSBoYXZlIGJlZW4gdGltZXMgd2hlbiBiZWhhdmlvciBvZlxuICogZnVuY3Rpb25zIHByb2R1Y2VkIGJ5IHRoaXMgZmFjdG9yeSBkaWZmZXJlZCBmcm9tIGdlbmVyYWwgZnVuY3Rpb25zLlxuICogQmVjYXVzZSBvZiB0aGUgcG9zc2liaWxpdHkgdGhhdCB0aGlzIGNvdWxkIHJldHVybiwgaXQncyBzdWdnZXN0ZWQgdG9cbiAqIHVzZSB0aGlzIGZ1bmN0aW9uIHRvIHByb2R1Y2UgYWxsIHBhcnNlcnMgcmF0aGVyIHRoYW4gcHJvZHVjaW5nIHRoZW1cbiAqIGJ5IGhhbmQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWFrZVBhcnNlcihmbikge1xuICByZXR1cm4gZm5cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcbiAqIGEgYFN0YXRlYCBwb3RlbnRpYWxseSB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHsqfSBbdmFsdWU9bnVsbF0gVGhlIG5ldyByZXN1bHQgb2YgdGhlIHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvayhzdGF0ZSwgdmFsdWUgPSBudWxsLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgY29weSBvZiBgU3RhdGVgLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXV0gVGhlIGVycm9ycyBhc3NvY2lhdGVkXG4gKiAgICAgd2l0aCB0aGUgc3RhdGUgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcbiAqICAgICBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0YXRlLCBlcnJvcnMgPSBbXSwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZVxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgbmV3IGBTdGF0ZWAgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXRhbChzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhdGFsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZXIgYXBwbGljYXRvaW4gZmFpbGVkLlxuICogV2hldGhlciB0aGlzIGlzIGEgZmF0YWwgZXJyb3Igb3Igbm90IGRlcGVuZHMgb24gd2hldGhlciBgdGVzdGAgaXNcbiAqIGB0cnVlYCAoZmF0YWwpIG9yIGBmYWxzZWAgKG5vbi1mYXRhbCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSB0ZXN0IFVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHByb2R1Y2VkIHJlc3VsdFxuICogICAgIHJlcHJlc2VudHMgYSBmYXRhbCBlcnJvciAoYHRydWVgKSBvciBub3QgKGBmYWxzZWApLlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXliZUZhdGFsKHRlc3QsIHN0YXRlLCBlcnJvcnMgPSBbXSwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xuICByZXR1cm4gW1xuICAgIHsgLi4uc3RhdGUsIGluZGV4IH0sXG4gICAgeyBzdGF0dXM6IHRlc3QgPyBTdGF0dXMuRmF0YWwgOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9LFxuICBdXG59XG5cbi8qKlxuICogUnVucyBhIHBhcnNlciBhZ2FpbnN0IGFuIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZFxuICogYXJyYXksIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsXG4gKiBwYXJzZXIgc3RhdGUgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciBhZnRlciBiZWluZyBydW4uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcbiAqICAgICB0ZXh0LlxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIGZpbmFsIHN0YXRlIGFmdGVyIGFsbCBwYXJzZXJzIGhhdmVcbiAqICAgICBiZWVuIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZpbmFsIHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHBhcnNlciwgaW5wdXQpIHtcbiAgcmV0dXJuIHBhcnNlcihtYWtlU3RhdGUoaW5wdXQpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgY2hhckxlbmd0aCxcbiAgY29tbWFTZXBhcmF0ZSxcbiAgbmV4dENoYXJXaWR0aCxcbiAgdmlld1RvU3RyaW5nLFxufSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5TdGF0ZX0gU3RhdGUgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3ltYm9sIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gKi9cbiAgRXhwZWN0ZWQ6IFN5bWJvbCgnZXhwZWN0ZWQnKSxcbiAgLyoqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gKi9cbiAgVW5leHBlY3RlZDogU3ltYm9sKCd1bmV4cGVjdGVkJyksXG4gIC8qKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gKi9cbiAgR2VuZXJpYzogU3ltYm9sKCdtZXNzYWdlJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBzb21lIG90aGVyIGtpbmQgb2YgZXJyb3IgbWVzc2FnZSB0byBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYSBjdXN0b20gZXJyb3IgZm9ybWF0dGVyLlxuICAgKi9cbiAgT3RoZXI6IFN5bWJvbCgnb3RoZXInKSxcbn1cblxuLyoqXG4gKiBBbiBlcnJvciBnZW5lcmF0ZWQgd2hlbiBhIHBhcnNlciBmYWlscy5cbiAqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBQYXJzZUVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgdHlwZSBvZiB0aGUgcGFyc2UgZXJyb3IuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYFBhcnNlRXJyb3JgLlxuICpcbiAqIEBwYXJhbSB7RXJyb3JUeXBlfSB0eXBlIFRoZSB0eXBlIG9mIHRoZSBwYXJzZSBlcnJvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybnMge1BhcnNlRXJyb3J9IEEgbmV3IGBQYXJzZUVycm9yYCB3aXRoIHRoZSBnaXZlbiB0eXBlIGFuZFxuICogICAgIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYWtlRXJyb3IodHlwZSwgbWVzc2FnZSkge1xuICByZXR1cm4geyB0eXBlLCBtZXNzYWdlIH1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGV4cGVjdGVkIGVycm9yLiBNdWx0aXBsZSBleHBlY3RlZCBlcnJvcnMgY2FuIGJlIGEgcGFydCBvZlxuICogYSBzaW5nbGUgZXJyb3IgbWVzc2FnZSwgYW5kIHRoZSBkZWZhdWx0IGZvcm1hdHRlciB3aWxsIGNvbW1hLXNlcGFyYXRlXG4gKiB0aGVtIGFuZCBwcmVmYWNlIHRoZW0gd2l0aCB0aGUgd29yZCAnRXhwZWN0ZWQnLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VFcnJvcn0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZEVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG1ha2VFcnJvcihFcnJvclR5cGUuRXhwZWN0ZWQsIG1lc3NhZ2UpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yLiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgd2lsbCBkaXNwbGF5IG9ubHlcbiAqIHRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yLCBhbmQgaXQgd2lsbCBiZSBwcmVmYWNlZCB3aXRoXG4gKiAnVW5leHBlY3RlZCcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXG4gKiAgICAgbm90IGV4cGVjdGVkLlxuICogQHJldHVybnMge1BhcnNlRXJyb3J9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4gbWFrZUVycm9yKEVycm9yVHlwZS5VbmV4cGVjdGVkLCBtZXNzYWdlKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yLiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgd2lsbCBkaXNwbGF5IG9ubHlcbiAqIHRoZSBmaXJzdCBnZW5lcmljIGVycm9yLCBiZWxvdyB0aGUgb3RoZXIgZXJyb3JzLCBhbmQgaXQgd2lsbCBiZVxuICogdW5wcmVmYWNlZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VFcnJvcn0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIGdlbmVyaWMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWNFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiBtYWtlRXJyb3IoRXJyb3JUeXBlLkdlbmVyaWMsIG1lc3NhZ2UpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VFcnJvcn0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdGhlckVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIG1ha2VFcnJvcihFcnJvclR5cGUuT3RoZXIsIG1lc3NhZ2UpXG59XG5cbi8qKlxuICogQWRkcyBvbmUgb3IgbW9yZSBwYXJzZSBlcnJvcnMgdG8gYW4gYXJyYXkgb2YgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBsaXN0IFRoZSBhcnJheSBvZiBlcnJvcnMgdG8gYWRkIHRvLlxuICogQHBhcmFtIHsuLi5QYXJzZUVycm9yfSBlcnJvcnMgVGhlIGVycm9yKHMpIHRvIGJlIHB1c2hlZCBvbnRvIHRoZSBlbmRcbiAqICAgICBvZiB0aGUgYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VFcnJvcltdfSBBIG5ldyBhcnJheSB0aGF0IGlzIGEgc2hhbGxvdyBjb3B5IG9mIGBsaXN0YFxuICogICAgIHdpdGggdGhlIGVsZW1lbnRzIG9mIGBlcnJvcnNgIGFkZGVkIHRvIHRoZSBlbmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwdXNoKGxpc3QsIC4uLmVycm9ycykge1xuICByZXR1cm4gWy4uLmxpc3QsIC4uLmVycm9yc11cbn1cblxuLy8gQ2xlYXJzIGFsbCBlcnJvcnMgb2YgYSBwYXJ0aWN1bGFyIHR5cGUgZnJvbSBhIGxpc3Qgb2YgZXJyb3JzLiBJZlxuLy8gYHR5cGVgIGlzIG5vdCBwcm92aWRlZCwgYWxsIGVycm9ycyB3aWxsIGJlIGNsZWFyZWQuIE11bHRpcGxlIHR5cGVzXG4vLyBjYW4gYmUgcHJvdmlkZWQuXG4vKipcbiAqIENsZWFycyBhbGwgZXJyb3JzIG9mIGEgcGFydGljdWxhciB0eXBlIGZyb20gYSBsaXN0IG9mIGVycm9ycy4gSWYgbm9cbiAqIGB0eXBlc2AgYXJlIHByb3ZpZGVkLCBhbGwgZXJyb3JzIHdpbGwgYmUgY2xlYXJlZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gbGlzdCBUaGUgYXJyYXkgb2YgZXJyb3JzIHRvIGNsZWFyIGZyb20uXG4gKiBAcGFyYW0gey4uLkVycm9yVHlwZX0gdHlwZXMgVGhlIGVycm9yIHR5cGVzIHRvIGJlIHJlbW92ZWQgZnJvbSB0aGVcbiAqICAgICBhcnJheS4gSWYgbm8gdHlwZXMgYXJlIHByb3ZpZGVkLCBhbGwgZXJyb3JzIHdpbGwgYmUgcmVtb3ZlZC5cbiAqIEByZXR1cm5zIHtQYXJzZUVycm9yW119IEEgc2hhbGxvdyBjb3B5IG9mIGBsaXN0YCB3aXRoIGFsbCBlcnJvcnMgb2ZcbiAqICAgICB0aGUgcHJvdmlkZWQgdHlwZShzKSByZW1vdmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIobGlzdCwgLi4udHlwZXMpIHtcbiAgaWYgKHR5cGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIFtdXG4gIHJldHVybiBsaXN0LmZpbHRlcihlcnJvciA9PiAhdHlwZXMuaW5jbHVkZXMoZXJyb3IudHlwZSkpXG59XG5cbi8qKlxuICogQ2xlYXJzIGFsbCBlcnJvcnMgZnJvbSBhbiBhcnJheSBvZiBlcnJvcnMgdGhhdCBhcmUgb2YgdGhlIHNhbWUgZXJyb3JcbiAqIHR5cGUgYXMgYW55IG9mIHRoZSBwcm92aWRlZCBlcnJvcnMsIGFuZCB0aGVuIGFkZHMgdGhvc2UgZXJyb3JzIHRvIHRoZVxuICogZW5kIG9mIHRoZSBhcnJheS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gbGlzdCBUaGUgYXJyYXkgb2YgZXJyb3JzIHRvIG92ZXJ3cml0ZSB0by5cbiAqIEBwYXJhbSB7Li4uUGFyc2VFcnJvcn0gZXJyb3JzIFRoZSBlcnJvcihzKSB0byBiZSBwdXNoZWQgb250byB0aGUgZW5kXG4gKiAgICAgb2YgdGhlIGFycmF5LCBhZnRlciBhbGwgZXJyb3JzIG9mIHRob3NlIHR5cGVzIGFyZSByZW1vdmVkLlxuICogQHJldHVybnMge1BhcnNlRXJyb3JbXX0gQSBuZXcgYXJyYXkgdGhhdCBpcyBhIHNoYWxsb3cgY29weSBvZiBgbGlzdGBcbiAqICAgICB3aXRoIHRoZSBlbGVtZW50cyBvZiBgZXJyb3JzYCByZXBsYWNpbmcgdGhvc2Ugb2YgdGhlIHNhbWUgdHlwZVxuICogICAgIGZyb20gdGhlIG9yaWdpbmFsIGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3ZlcndyaXRlKGxpc3QsIC4uLmVycm9ycykge1xuICBjb25zdCB0eXBlcyA9IGVycm9ycy5tYXAoZXJyb3IgPT4gZXJyb3IudHlwZSlcbiAgY29uc3QgcmVzdWx0ID0gbGlzdC5maWx0ZXIoZXJyb3IgPT4gIXR5cGVzLmluY2x1ZGVzKGVycm9yLnR5cGUpKVxuICByZXR1cm4gWy4uLnJlc3VsdCwgLi4uZXJyb3JzXVxufVxuXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuLy8gI3JlZ2lvbiBUeXBlZGVmcyBmb3Igb2JqZWN0IHJldHVybiB0eXBlc1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uIG9mIGEgYnl0ZSB0byBzZWVcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXdsaW5lSW5mb1xuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXG4gKiAgICAgZWl0aGVyIGEgbmV3bGluZSBvciB0aGUgYmVnaW5uaW5nIG9mIGEgbXVsdGktYnl0ZSBuZXdsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNraXAgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSBuZXh0IGNoYXJhY3RlclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxuICogICAgIGNoYXJhY3RlciBpcyBhIG5ld2xpbmUuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIGFcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExpbmVJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBhbHdheXMgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZGF0YSB2aWV3IGl0c2VsZiwgb3IgdGhlIGZpcnN0IGJ5dGUgYWZ0ZXIgYSBuZXdsaW5lXG4gKiAgICAgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGxhc3RcbiAqICAgICBieXRlIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgZWl0aGVyIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIGEgbmV3bGluZSBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZW5vIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBib3VuZGVkIGJ5XG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxuICogICAgIGZvciBkaXNwbGF5IG9mIGFuIGVycm9yIHBvc2l0aW9uIGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkanVzdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmRleCB0aGF0IHJlc3VsdHNcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWJiZWRMaW5lSW5mb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcbiAqICAgICB3aXRoIHRhYiBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2Ygc3BhY2VzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbEluZGV4IFRoZSBjaGFyYWN0ZXIgaW5kZXggcGFzc2VkIGludG8gdGhlXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcbiAqICAgICB0aGUgc3BhY2VzIHVzZWQgdG8gcmVwbGFjZSB0aGVtLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgY29sdW1uIGluZGV4IGFuZCBsaW5lXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbEluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBwb2ludGVkIHRvIGJ5IHRoZSBgY2hhckluZGV4YCBwYXJhbWV0ZXIuIFRoaXMgaXMgYWRqdXN0ZWQgYnkgYW55XG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFwcGVhciBpbiB0aGUgbGluZSBhbmQgaXMgdHVybmVkXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3JcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoaXMgaXMgcmV0dXJuZWQgc29sZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXG4gKiAgICAgdGhlIGxpbmUgYWNjb3VudGluZyBmb3IgdGhvc2Ugc2FtZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKi9cblxuLyoqXG4gICogT2JqZWN0IGNvbnRhaW5pbmcgbGluZSBhbmQgY29sdW1uIG51bWJlcnMuXG4gICpcbiAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQb3NpdGlvblxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5XG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiBUaGUgY29sdW1uIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvXG4gICogICAgIGJ5IHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcsIGFkanVzdGVkIGZvciBjaGFyYWN0ZXIgd2lkdGggYW5kXG4gICogICAgIHRhYiBzaXplLlxuICAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIGJ5IGBmb3JtYXRFcnJvcnNgIHRvIGRvIHRoZSBhY3R1YWwgZm9ybWF0dGluZy4gQVxuICogZGVmYXVsdCBmb3JtYXR0ZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnV0IGNhbiBiZSByZXBsYWNlZCBpZlxuICogZGVzaXJlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGVyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gYHZpZXdgIG9mIHRoZSBieXRlIHdoZXJlIHRoZVxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIGxpbmUgd2hlcmVcbiAqICAgICB0aGUgZXJyb3Igb2NjdXJyZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmVcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxuICogQHJldHVybnMge3N0cmluZ30gQSBtdWx0aS1saW5lIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1cHBsaWVkXG4gKiB2aWV3IGlzIGEgbmV3bGluZS4gQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXMgaXMgcmV0dXJuZWQ7XG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxuICogbmV3bGluZTsgYHNraXBgIGlzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIChhbmQgdGhlcmVmb3JlIGhvdyBtYW55XG4gKiBieXRlcyB0byBza2lwIHVudGlsIHRoZSBuZXh0IGNoYXJhY3RlciB0byBjaGVjaykuXG4gKlxuICogQWxsIFVuaWNvZGUgbmV3bGluZXMgKENSLCBMRiwgRkYsIFZULCBORUwsIExTLCBhbmQgUFMpIGFyZSBoYW5kbGVkLFxuICogYWxvbmcgd2l0aCB0aGUgbXVsdGktY2hhcmFjdGVyIG5ld2xpbmUgQ1IrTEYuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbnRvIGB2aWV3YCBpbmRpY2F0aW5nIHRoZSBieXRlIHRvXG4gKiAgICAgY2hlY2sgdG8gc2VlIGlmIGl0J3MgYSBuZXdsaW5lLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TmV3bGluZUluZm99IE5ld2xpbmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKGJ5dGUgPT09IDB4MGEgfHwgYnl0ZSA9PT0gMHgwYiB8fCBieXRlID09PSAweDBjKSB7XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcblxuICAgIGlmIChieXRlID09PSAweGMyICYmIG5leHRCeXRlID09PSAweDg1KSByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAyKSB7XG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcbiAgICAgIGlmIChieXRlID09PSAweGUyICYmIG5leHRCeXRlID09PSAweDgwXG4gICAgICAgICYmICh0aGlyZEJ5dGUgPT09IDB4YTggfHwgdGhpcmRCeXRlID09PSAweGE5KSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBuZXdsaW5lOiBmYWxzZSwgc2tpcDogbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cbiAqIHZpZXcgdGhhdCBjb250YWlucyB0aGUgYnl0ZSBwb2ludGVkIGF0IGJ5IGBpbmRleGAuIEl0IGRvZXMgdGhpcyBieVxuICogZGV0ZXJtaW5pbmcgd2hlcmUgbmV3bGluZXMgYXJlIGFuZCB0aGVuIGZpZ3VyaW5nIG91dCB3aGljaCBvbmVzIGNvbWVcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXG4gKiBiZWZvcmUgdGhlIGluZGV4IChhbmQgdGhlcmVmb3JlIHRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSB3aXRoIHRoZVxuICogaW5kZXgpIGlzIGFsc28gY291bnRlZC5cbiAqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRocmVlIHByb3BlcnRpZXM6IGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZVxuICogZmlyc3QgYnl0ZSBvZiB0aGUgbGluZSwgYGVuZGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGJ5dGUgb2YgdGhlXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXG4gKiB3aGVyZSB0aGUgaW5kZXggYXBwZWFycy4gYGxpbmVub2AgaXMgMS1pbmRleGVkIHNpbmNlIGl0IGlzIG1lYW50IGZvclxuICogZGlzcGxheSBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBsaW5lXG4gKiAgICAgaW5kZXggaW5mb3JtYXRpb24gaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0xpbmVJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydGluZyBhbmQgZW5kaW5nXG4gKiAgICAgaW5kZXhlcyBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KSB7XG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IHsgbmV3bGluZSwgc2tpcCB9ID0gaXNOZXdsaW5lKGksIHZpZXcpXG4gICAgaWYgKG5ld2xpbmUpIHtcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IGkgLSAxLCBsaW5lbm8gfVxuICAgICAgfVxuICAgICAgbGluZW5vKytcbiAgICAgIHN0YXJ0ID0gaSArIHNraXBcbiAgICB9XG4gICAgaSArPSBza2lwXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdmlldy5ieXRlTGVuZ3RoIC0gMSwgbGluZW5vIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcbiAqIHNpbmdsZSBsaW5lIG9mIHRleHQgb2YgdGhlIGNoYXJhY3RlciBwb2ludGVkIHRvIGJ5IGBpbmRleGAgd2l0aGluXG4gKiBgdmlld2AuIFRoZSBgc3RhcnRgIHBhcmFtZXRlciBzZXRzIHRoZSBmaXJzdCBieXRlIG9mIGEgXCJsaW5lXCIgd2l0aGluXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxuICpcbiAqIEluIGxpbmVzIHdpdGggb25seSBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzLCB0aGUgY2hhcmFjdGVyIGluZGV4IHdpbGxcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHRvIGFkanVzdCB3aGVuIG11bHRpLWJ5dGUgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcbiAqICAgICBpbmRleCBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXgsIHdpdGhpbiBhIHNpbmdsZSBsaW5lIG9mIHRleHQsIG9mIHRoZVxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpIHtcbiAgbGV0IGNoYXJJbmRleCA9IDBcbiAgbGV0IGJ5dGVJbmRleCA9IHN0YXJ0XG4gIHdoaWxlIChieXRlSW5kZXggPCBpbmRleCAmJiBieXRlSW5kZXggPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXG4gICAgY2hhckluZGV4KytcbiAgfVxuICByZXR1cm4gY2hhckluZGV4XG59XG5cbi8qKlxuICogRXhwYW5kcyB0YWJzIGludG8gc3BhY2VzIGFuZCBjYWxjdWxhdGVzIHRoZSBjb2x1bW4gaW5kZXggb2YgdGhlXG4gKiBpbmRleGVkIGNoYXJhY3RlciBhZGp1c3RpbmcgZm9yIHRob3NlIHNwYWNlcy4gVGhlIG51bWJlciBvZiBzcGFjZXMgaW5cbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogYGxpbmVgIGlzIHRoZVxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxuICogaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IGhhcyB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgYXQgYnkgdGhlXG4gKiBjaGFyYWN0ZXIgaW5kZXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0XG4gKiAgICAgd2l0aGluIHRoZSBsaW5lLlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzcGFjZXMgdGhhdCBjYW4gcmVwbGFjZVxuICogICAgIGEgdGFiLiBOb3RlIHRoYXQgdGFicyBhcmUgdHJlYXRlZCBhcyBzdG9wczsgdGhleSB3aWxsIGJlIG9mXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcbiAqICAgICBpcyBhIG11bHRpcGxlIG9mIGB0YWJTaXplYC5cbiAqIEByZXR1cm5zIHtUYWJiZWRMaW5lSW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmUgYWZ0ZXIgcmVwbGFjaW5nXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYmlmeShjaGFySW5kZXgsIGxpbmUsIHRhYlNpemUpIHtcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXG4gIGxldCB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIHdoaWxlICh0YWJNYXRjaCAhPT0gbnVsbCkge1xuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcbiAgICB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIH1cblxuICAvLyByZXBsYWNlIGVhY2ggdGFiIHdpdGggdGhlIGNvcmVjdCBudW1iZXIgb2Ygc3BhY2VzLCBzaGlmdGluZyB0aGVcbiAgLy8gcmVtYWluaW5nIGluZGV4ZXMgYnkgdGhhdCBhbW91bnRcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IHByZUluZGV4T2Zmc2V0ID0gMFxuICBsZXQgcmVzdWx0ID0gbGluZVxuXG4gIGZvciAoY29uc3QgdGFiSW5kZXggb2YgdGFiSW5kZXhlcykge1xuICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdGFiSW5kZXggKyBvZmZzZXRcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxuICAgIGlmIChhY3R1YWxJbmRleCA8IGNoYXJJbmRleCArIHByZUluZGV4T2Zmc2V0KSB7XG4gICAgICBwcmVJbmRleE9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIH1cbiAgICBvZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIGFjdHVhbEluZGV4KSArICcgJy5yZXBlYXQoc3BhY2VDb3VudClcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXG4gIH1cbiAgcmV0dXJuIHsgbGluZTogcmVzdWx0LCBjb2xJbmRleDogcHJlSW5kZXhPZmZzZXQgKyBjaGFySW5kZXggfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXG4gKiBieSB0aGUgY29sdW1uIGluZGV4LiBUaGlzIGNvbHVtbiBudW1iZXIgaXMgMS1iYXNlZCAoZm9yIGRpc3BsYXksIHRoZVxuICogc2FtZSBhcyB0aGUgbGluZSBudW1iZXIgZnJvbSBgZ2V0TGluZUluZGV4ZXNgKSBhbmQgaXMgYWRqdXN0ZWQgZm9yXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXG4gKiBtYXJrcy5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxuICogMS1pbmRleGVkIGNvbHVtbiBudW1iZXIsIGFuZCBgbGVuZ3RoYCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lXG4gKiBhZGp1c3RpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhlIGxhdHRlciBpcyBwcm92aWRlZCBzbyBpdFxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdpdGhpbiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBwb3RlbnRpYWxseSBjb250YWluaW5nXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRvIGFjY291bnQgZm9yLlxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpIHtcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcbiAgY29uc3QgbWF0Y2hlcyA9IFtdXG5cbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgbWF0Y2hlcy5wdXNoKG1hdGNoLmluZGV4KVxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXG4gICAgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sbm86IGluZGV4ICsgMSwgLy8gMS1iYXNlZFxuICAgIGxlbmd0aDogY2hhckxlbmd0aChsaW5lKSAtIG1hdGNoZXMubGVuZ3RoLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25lIGxpbmUgdGhhdCBpcyB0aGUgdGV4dCBhdCBhbmQgYXJvdW5kXG4gKiB0aGUgY29sdW1uIHRvIGJlIGRpc3BsYXllZCwgYW5kIG9uZSBsaW5lIHRoYXQgaXMgYSBjYXJldCBwb2ludGluZyB0b1xuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZWxsaXBzZXMgYXMgbmVlZGVkIHRvIHRoZSBmcm9udCBhbmQvb3IgdGhlIGJhY2sgb2ZcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cbiAqIHRoZSBgbWF4V2lkdGhgIG9mIHRoZSBsaW5lIHRvIGRpc3BsYXkuIFRoZSBgbGVuZ3RoYCBwYXJhbWV0ZXIgaXMgdGhlXG4gKiBgbGVuZ3RoYCByZXR1cm5lZCBieSBgZ2V0Q29sTnVtYmVyYCBhbmQgaXMgaGVyZSBqdXN0IHRvIGF2b2lkIGhhdmluZ1xuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXG4gKiBjYWxjdWxhdGVkIGluIHRoZSBvdGhlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yIHRhYnMgYW5kXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBvdGVudGlhbGx5IHRydW5jYXRlZCBsaW5lIG9mIHRleHQsIGZvbGxvd2VkIGJ5XG4gKiAgICAgYW5vdGhlciBsaW5lIGNvbnRhaW5pbmcgYSBjYXJldCBwb2ludGluZyBhdCB0aGUgZGVzaWduYXRlZFxuICogICAgIGNvbHVtbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgpIHtcbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gYCR7bGluZX1cXG4keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gU2Vjb25kIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxuICAvLyBEaXNwbGF5IHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYWZ0ZXIgaXQgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xuICAgIHJldHVybiBgJHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyBhdCBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMylcbiAgLy8gY2hhcmFjdGVycyBidXQgaXMgaW4gdGhlIGxhc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gRGlzcGxheVxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcbiAgLy8gcG9zaXRpb24gZm9yIHRoZSBjYXJldCwgYW5kIHBvc2l0aW9uIGl0IGJlbG93IHRoZSBsaW5lLlxuICBpZiAoY29sbm8gPj0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcbiAgICBjb25zdCBuZXdDb2xubyA9IGNvbG5vIC0gKGxlbmd0aCAtIG1heFdpZHRoKVxuICAgIHJldHVybiBgLi4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAuLi4ke1xuICAgIGxpbmUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXG4gIH0uLi5cXG4ke1xuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXG4gIH1eYFxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCkge1xuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICBjb25zdCBwb3NpdGlvbiA9IGBQYXJzZSBlcnJvciBhdCAobGluZSAke2xpbmVub30sIGNvbHVtbiAke2NvbG5vfSk6YFxuICBjb25zdCBkaXNwbGF5ID0gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aClcbiAgY29uc3QgbWVzc2FnZSA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubWVzc2FnZSksXG4gIClcblxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgVW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubWVzc2FnZX1cXG5gIDogJydcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYEV4cGVjdGVkICR7ZXhwZWN0ZWR9XFxuYCA6ICcnXG4gIGNvbnN0IG1zZ01zZyA9IG1lc3NhZ2UgPyBgJHttZXNzYWdlLm1lc3NhZ2V9XFxuYCA6ICcnXG5cbiAgcmV0dXJuIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7bXNnTXNnfVxcbmBcbn1cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEFjY2VwdHMgYSBwYXJzZXIgc3RhdGUgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cbiAqXG4gKiBBIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHByb3ZpZGVkIGJ1dCBhbiBhbHRlcm5hdGUgb25lIGNhbiBiZSBwYXNzZWRcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcbiAqIGRlZmF1bHRzIHRvIDgpIGFuZCBtYXggd2lkdGggKGZvciB0aGUgZXJyb3IgbWVzc2FnZSBpdHNlbGY7IGRlZmF1bHRzXG4gKiB0byA3MikuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHBhcnNlcidzIHN0YXRlIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IHByb2R1Y2VkIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMoXG4gIHN0YXRlLCByZXN1bHQsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBmb3JtYXR0ZXIgPSBmb3JtYXQsXG4pIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgc3RhdGUuIFRoZVxuICogcG9zaXRpb24gaXMgYW4gb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIHRoYXQgYXJlXG4gKiB0aGUgMS1iYXNlZCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aGUgYnl0ZSBhdCB0aGUgc3RhdGUncyBpbmRleFxuICogd2l0aGluIHRoZSBzdGF0ZSdzIGRhdGEgdmlldy5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgd2hvc2UgY3VycmVudCBwb3NpdGlvbiBpcyBiZWluZ1xuICogICAgIGNhbGN1bGF0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZVxuICogICAgIHRhYnMgc3RvcC4gVGhlIGN1cnJlbnQgcG9zaXRpb24ncyBjb2x1bW4gbnVtYmVyIGlzIGFkanVzdGVkIGJhc2VkXG4gKiAgICAgb24gdGhpcyBwYXJhbWV0ZXIgd2hlbiB0YWIgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbn0gQSB0d28tcHJvcGVydHkgb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYFxuICogICAgIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihzdGF0ZSwgdGFiU2l6ZSA9IDgpIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBhbnlPZixcbiAgY2hhcixcbiAgY2hhcmksXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZU9mLFxuICBvY3RhbCxcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHVwcGVyLFxufSBmcm9tICcuL3BhcnNlcnMvY2hhcidcbmV4cG9ydCB7XG4gIGNvbnN0YW50LFxuICBmYWlsLFxuICBmYWlsRmF0YWxseSxcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9wYXJzZXJzL21pc2MnXG5leHBvcnQge1xuICBhbHBoYVUsXG4gIGxldHRlclUsXG4gIGxvd2VyVSxcbiAgbmV3bGluZSxcbiAgbmV3bGluZVUsXG4gIHJlZ2V4LFxuICBzcGFjZSxcbiAgc3BhY2VVLFxuICBzcGFjZXMsXG4gIHNwYWNlczEsXG4gIHNwYWNlczFVLFxuICBzcGFjZXNVLFxuICB1cHBlclUsXG59IGZyb20gJy4vcGFyc2Vycy9yZWdleCdcbmV4cG9ydCB7XG4gIGFsbCxcbiAgYW55U3RyaW5nLFxuICBzdHJpbmcsXG4gIHN0cmluZ2ksXG59IGZyb20gJy4vcGFyc2Vycy9zdHJpbmcnXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT01CSU5BVE9SU1xuXG5leHBvcnQge1xuICBhbHQsXG4gIGFsdEwsXG4gIGJhY2ssXG4gIGJvdGhCLFxuICBjaGFpbkIsXG4gIGNvdW50QixcbiAgbGVmdEIsXG4gIG1hbnlUaWxsQixcbiAgb3B0aW9uYWwsXG4gIG9yRWxzZSxcbiAgcmlnaHRCLFxuICBzZXFCLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xuZXhwb3J0IHtcbiAgYmV0d2VlbixcbiAgYm90aCxcbiAgY2hhaW4sXG4gIGpvaW4sXG4gIGxlZnQsXG4gIG1hcCxcbiAgcGlwZSxcbiAgcmlnaHQsXG4gIHNraXAsXG4gIHZhbHVlLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NoYWluaW5nJ1xuZXhwb3J0IHtcbiAgZm9sbG93ZWRCeSxcbiAgZm9sbG93ZWRCeUwsXG4gIGxvb2tBaGVhZCxcbiAgbm90RW1wdHksXG4gIG5vdEZvbGxvd2VkQnksXG4gIG5vdEZvbGxvd2VkQnlMLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsJ1xuZXhwb3J0IHtcbiAgbGFiZWwsXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWVzc2FnZSdcbmV4cG9ydCB7XG4gIGJsb2NrLFxuICBjaGFpbmwsXG4gIGNoYWlubDEsXG4gIGNoYWlucixcbiAgY2hhaW5yMSxcbiAgY291bnQsXG4gIG1hbnksXG4gIG1hbnkxLFxuICBtYW55VGlsbCxcbiAgc2VwQnksXG4gIHNlcEJ5MSxcbiAgc2VwRW5kQnksXG4gIHNlcEVuZEJ5MSxcbiAgc2VxLFxuICBza2lwTWFueSxcbiAgc2tpcE1hbnkxLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBlcnJvcixcbiAgZmF0YWwsXG4gIG1ha2VQYXJzZXIsXG4gIG1heWJlRmF0YWwsXG4gIG9rLFxuICBwYXJzZSxcbn0gZnJvbSAnLi9jb3JlJ1xuZXhwb3J0IHtcbiAgRXJyb3JUeXBlLFxuICBjbGVhcixcbiAgZXhwZWN0ZWRFcnJvcixcbiAgZm9ybWF0RXJyb3JzLFxuICBnZW5lcmljRXJyb3IsXG4gIGdldFBvc2l0aW9uLFxuICBvdGhlckVycm9yLFxuICBvdmVyd3JpdGUsXG4gIHB1c2gsXG4gIHVuZXhwZWN0ZWRFcnJvcixcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZEVycm9yLCB1bmV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBkdXAsIG5leHRDaGFyLCBxdW90ZSB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyLCBmZWVkcyBpdCB0byBhIGZ1bmN0aW9uLCBhbmRcbiAqIHN1Y2NlZWRzIG9yIGZhaWxzIGJhc2VkIG9uIHRoZSByZXR1cm4gdmFsdWUuXG4gKlxuICogVGhlcmUgaXNuJ3QgYW55dGhpbmcgaGVyZSB0aGF0IGNvdWxkbid0IGJlIHdyaXR0ZW4gd2l0aFxuICogYFN0cmluZ1BhcnNlcmAgaW5zdGVhZCwgYnV0IHdoZW4gd29ya2luZyB3aXRoIHNpbmdsZSBjaGFyYWN0ZXJzIHRoZXJlXG4gKiBhcmUgY2VydGFpbiBhc3N1bXB0aW9ucyB0aGF0IGNhbiBiZSBtYWRlIChzdWNoIGFzIHRoZSBudW1iZXIgb2ZcbiAqIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIHJlYWQgZnJvbSB0aGUgaW5wdXQgdmlldykgdGhhdCBhbGxvdyBpdCB0b1xuICogYmUgYSBsaXR0bGUgbW9yZSBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmNvbnN0IENoYXJQYXJzZXIgPSBmbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcblxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGVycm9yKHN0YXRlLCBbdW5leHBlY3RlZEVycm9yKCdFT0YnKV0pXG4gIH1cblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcblxuICBpZiAoZm4obmV4dCkpIHtcbiAgICByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gIH1cbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBbdW5leHBlY3RlZEVycm9yKHF1b3RlKG5leHQpKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVXBvbiBmYWlsdXJlLCB0aGlzIHBhcnNlciBkb2VzIG5vdFxuICogY29uc3VtZSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICBhbHdheXMgZmFpbC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihuZXh0ID0+IGMgPT09IG5leHQpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihxdW90ZShjKSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0XG4gKiB0aGUgY29tcGFyaXNvbiBkb25lIGJ5IHRoaXMgcGFyc2VyIGlzIGNhc2UtaW5zZW5zaXRpdmUuIFVwb24gZmFpbHVyZSxcbiAqIHRoaXMgcGFyc2VyIGRvZXMgbm90IGNvbnN1bWUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgYWx3YXlzIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgKG9yIGl0c1xuICogICAgIG90aGVyLWNhc2VkIGNvdW50ZXJwYXJ0KSBpcyB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhcmkgPSBjID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKFxuICAgIHJlYWQgPT4gYy50b0xvd2VyQ2FzZSgpID09PSByZWFkLnRvTG93ZXJDYXNlKCksXG4gICkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKHF1b3RlKGMpKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gZm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IG5hbWUgPSBmbi5uYW1lLmxlbmd0aCA/IGZuLm5hbWUgOiAnPGFub255bW91cz4nXG4gIGNvbnN0IG1lc3NhZ2UgPSBgYSBjaGFyYWN0ZXIgdGhhdCBzYXRpc2ZpZXMgZnVuY3Rpb24gXCIke25hbWV9XCJgXG5cbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKG1lc3NhZ2UpXSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyXG4gKiBpdCBpcyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBzdGFydCBhbmQgZW5kIGNoYXJhY3RlcnMgKGluY2x1c2l2ZSkuIElmXG4gKiBpdCBpcywgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIHRoZSBzdWNjZXNzZnVsIHJlc3VsdCwgYW5kIGlmIGl0IGlzIG5vdCxcbiAqIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogYHN0YXJ0YCBhbmQgYGVuZGAgYXJlIGV4cGVjdGVkIHRvIGJlIHNpbmdsZSBjaGFyYWN0ZXJzLiBJZiB0aGV5IGFyZVxuICogbm90LCB0aGUgZnVsbCBzdHJpbmdzIGFyZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3Rlciwgd2hpY2hcbiAqIG1heSBjYXVzZSB1bmV4cGVjdGVkIGJlaGF2aW9yLlxuICpcbiAqIFwiQmV0d2VlblwiIGlzIGRlZmluZWQgYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzLiBUaGlzIGlzIGZpbmUgaW4gbW9zdFxuICogY2FzZXMsIGJ1dCBpdCBjYW4gZ2V0IHdlaXJkIHdpdGggaGlnaGVyIGNvZGUgcG9pbnRzLiBGb3IgZXhhbXBsZSxcbiAqIHRoZXJlIGlzIG5vIGBoYCBpbiB0aGUgc2V0IG9mIG1hdGhlbWF0aWNhbCBsb3dlcmNhc2UgaXRhbGljIHN5bWJvbHMuXG4gKiBUaGUgYGhgIHdvdWxkIGluc3RlYWQgYmUgdGhlIFBsYW5jaydzIENvbnN0YW50IGNoYXJhY3Rlciwgd2hpY2ggaXMgaW5cbiAqIGEgY29tcGxldGVseSBkaWZmZXJlbnQgcGFydCBvZiB0aGUgVW5pY29kZSBzcGVjdHJ1bSBhbmQgdGhlcmVmb3JlIGlzXG4gKiBub3QgXCJiZXR3ZWVuXCIgYGFgIGFuZCBgemAuIFRha2UgY2FyZSB3aXRoIG5vbi1hc2NpaSBjaGFyYWN0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdGFydCBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlXG4gKiAgICAgcmFuZ2Ugb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2VcbiAqICAgICBvZiBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIG5leHQgaW5wdXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSBzdGFydCAmJiBjIDw9IGVuZFxuICBjb25zdCBtZXNzYWdlID0gYGEgY2hhcmFjdGVyIGJldHdlZW4gXCIke3N0YXJ0fVwiIGFuZCBcIiR7ZW5kfVwiYFxuXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcihtZXNzYWdlKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgaW5wdXQgY2hhcmFjdGVyIGFuZCB0aGVuIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyLiBGYWlscyBvbmx5IGlmIHRoZXJlIGlzIG5vIGlucHV0IGxlZnQgdG8gcmVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxuICBpZiAoaW5kZXggPT09IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcihcbiAgICAgIHN0YXRlLCBbZXhwZWN0ZWRFcnJvcignYW55IGNoYXJhY3RlcicpLCB1bmV4cGVjdGVkRXJyb3IoJ0VPRicpXSxcbiAgICApXG4gIH1cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIHJldHVybiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXG4gKiBub3QgZXhpc3QgKGkuZS4sIGlmIHRoZSBpbmRleCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0KS5cbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVvZiA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxuICBpZiAoaW5kZXggPT09IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBvayhzdGF0ZSwgbnVsbClcbiAgfVxuICBjb25zdCB7IF8sIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gZXJyb3Ioc3RhdGUsIFtleHBlY3RlZEVycm9yKCdFT0YnKSwgdW5leHBlY3RlZEVycm9yKHF1b3RlKG5leHQpKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXG4gKiBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgc3RyaW5nIG9yIGFycmF5IChpZiB0aGUgYXJyYXkgaGFzXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxuICogd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcbiAqICAgICBvciBhIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBiZSBhXG4gKiAgICAgbWVtYmVyIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3QgYW55T2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cblxuICBpZiAoYXJyLmluY2x1ZGVzKG5leHQpKSByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gIGNvbnN0IG1lc3NhZ2UgPSAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFyci5tYXAoYyA9PiBgXCIke2N9XCJgKSlcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBbZXhwZWN0ZWRFcnJvcihtZXNzYWdlKSwgdW5leHBlY3RlZEVycm9yKHF1b3RlKG5leHQpKV0pXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXG4gKiBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgc3RyaW5nIG9yIGFycmF5IChpZiB0aGUgYXJyYXkgaGFzXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXG4gKiBwYXJzZXIgd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcbiAqICAgICBvciBhIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBub3QgYmUgYVxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub25lT2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cblxuICBpZiAoYXJyLmluY2x1ZGVzKG5leHQpKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFyci5tYXAoYyA9PiBgXCIke2N9XCJgKSlcbiAgICByZXR1cm4gZXJyb3Ioc3RhdGUsIFtleHBlY3RlZEVycm9yKG1lc3NhZ2UpLCB1bmV4cGVjdGVkRXJyb3IocXVvdGUobmV4dCkpXSlcbiAgfVxuICByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgZGlnaXQuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIFVuaWNvZGUgZGVjaW1hbCBkaWdpdDsgZm9yXG4gKiB0aGF0LCB1c2UgYHJlZ2V4KC9cXHB7TmR9LylgLiBUaGlzIHBhcnNlciBzdWNjZWVkcyBvbmx5IGZvciB0aGVcbiAqIGxpdGVyYWwgY2hhcmFjdGVycyBgMC05YC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2EgZGlnaXQnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgaGV4YWRlY2ltYWwgZGlnaXQuIFRoaXMgcGFyc2VyIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhleCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBoZXggZGlnaXQnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxuICovXG5leHBvcnQgY29uc3Qgb2N0YWwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzcnXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYW4gb2N0YWwgZGlnaXQnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzOyBgdWxldHRlcmBcbiAqIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2EgbGV0dGVyJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSVxuICogY2hhcmFjdGVyczsgYHVhbHBoYWAgaXMgYSBVbmljb2RlIGFscGhhbnVtZXJpYyBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihcbiAgICBuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicpXSxcbiAgKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiB1cHBlcmNhc2UgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzO1xuICogYHV1cHBlcmAgaXMgYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgdXBwZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYW4gdXBwZXJjYXNlIGxldHRlcicpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzO1xuICogYHVsb3dlcmAgaXMgYSBVbmljb2RlIGxldHRlciBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIGxvd2VyY2FzZSBsZXR0ZXInKV0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIGZhdGFsLCBtYWtlUGFyc2VyLCBvayB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZ2VuZXJpY0Vycm9yLCB1bmV4cGVjdGVkRXJyb3IgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWRcbiAqIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCBiZSB0aGUgbmV3IHBhcnNlcidzIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0geCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IG9rKHN0YXRlLCB4KSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiBnZW5lcmljIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWwgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4gZXJyb3IoXG4gIHN0YXRlLCBbZ2VuZXJpY0Vycm9yKG1lc3NhZ2UpXSxcbikpXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYVxuICogZmF0YWwgZXJyb3IsIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXG4gKiAgICAgc3VwcGxpZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWxGYXRhbGx5ID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IGZhdGFsKFxuICBzdGF0ZSwgW2dlbmVyaWNFcnJvcihtZXNzYWdlKV0sXG4pKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcbiAqIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIHVuZXhwZWN0ZWRcbiAqICAgICBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmV4cGVjdGVkID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IGVycm9yKFxuICBzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcihtZXNzYWdlKV0sXG4pKVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkRXJyb3IsIHVuZXhwZWN0ZWRFcnJvciB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgcXVvdGUsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cbi8vIHNwZWVkIHBhcnNpbmcgbGF0ZXIuXG5cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTGV0dGVyID0gL15cXHB7QWxwaGFiZXRpY30vdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxvd2VyID0gL15cXHB7TG93ZXJjYXNlfS91XG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cbi8qKiBNYXRjaGVzIGEgc2luZ2xlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3Vcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMgPSAvXltcXHJcXG5cXHQgXSovXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3Vcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlczEgPSAvXlxccHtXaGl0ZV9TcGFjZX0rL3Vcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbmV3bGluZSBjaGFyYWN0ZXIsIHBsdXMgXFxyXFxuLiAqL1xuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlc1xuICogaXQgYXMgZmFyIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xuICogZW5zdXJlcyB0aGF0IHRoZSBtYXRjaCBpcyBvbmx5IGFnYWluc3QgdGhlIHRleHQgZGlyZWN0bHkgYXQgdGhlXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXG4gKlxuICogYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgcmV0dXJuZWQgYGFjdHVhbGAgc3RhdGUgcHJvcGVydHkgdXBvblxuICogZmFpbHVyZS4gSWYgaXQncyBub3QgcHJvdmlkZWQsIHRoZSBsZW5ndGggd2lsbCBiZSB0aGUgc2FtZSBhcyB0aGVcbiAqIGxlbmd0aCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9uJ3Mgc291cmNlLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtsZW5ndGhdIFRoZSBsZW5ndGggb2YgdGhlIHJlc3VsdGluZyBgVW5leHBlY3RlZGBcbiAqICAgICBlcnJvciBtZXNzYWdlIGlmIHRoZSBwYXJzZXIgZmFpbHMuIElmIHRoaXMgaXMgbm90IHByZXNlbnQsIHRoYXRcbiAqICAgICBtZXNzYWdlIHdpbGwgYmUgYXMgbG9uZyBhcyB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZVxuICogICAgIHJlZ3VsYXIgZXhwcmVzc2lvbiwganVzdCBhcyBhIGd1ZXNzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuY29uc3QgUmVnZXhQYXJzZXIgPSAocmUsIGxlbmd0aCA9IG51bGwpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcblxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXG4gIGlmIChtYXRjaCkge1xuICAgIHJldHVybiBvayhzdGF0ZSwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxuICB9XG5cbiAgbGV0IGxlbiA9IGxlbmd0aCA/PyBjaGFyTGVuZ3RoKHJlLnNvdXJjZSkgLSAxIC8vIHRvIGlnbm9yZSBhbmNob3JcbiAgaWYgKGxlbiA+IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4KSB7XG4gICAgbGVuID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgfVxuICBjb25zdCBhY3R1YWwgPSBsZW4gPT09IDAgPyAnRU9GJyA6IHF1b3RlKFsuLi5yZXN0XS5zbGljZSgwLCBsZW4pLmpvaW4oJycpKVxuXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcihhY3R1YWwpXSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxuICogaXMgY29uc3VtZWQgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXG4gKiAgICAgYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICAvLyBGaXJzdCwgY29udmVydCB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBpZiBpdCdzIGEgc3RyaW5nXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggYSBeIGFuY2hvclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgaWYgKHJlYW5jaG9yKSB7XG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gIH1cblxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZWdleCkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKFxuICAgIG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKGBhIHN0cmluZyBtYXRjaGluZyAke3JlZ2V4fWApXSxcbiAgKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gQSBsZXR0ZXIgZm9yIHRoaXMgcHVycG9zZSBpcyBhbnkgY2hhcmFjdGVyIHdpdGggdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMZXR0ZXIsIDEpKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIHR1cGxlXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignYSBsZXR0ZXInKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFscGhhbnVtZXJpYy4gQSBjaGFyYWN0ZXIgaXMgYWxwaGFudW1lcmljIGlmIGl0IGhhcyBlaXRoZXIgdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eSBvciB0aGUgVW5pY29kZSBgTnVtYmVyYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZUFscGhhLCAxKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IoXG4gICAgbmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInKV0sXG4gIClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgZWl0aGVyIGFuIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpc1xuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVVwcGVyLCAxKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ2FuIHVwcGVyY2FzZSBsZXR0ZXInKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMb3dlciwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIGxvd2VyY2FzZSBsZXR0ZXInKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVTcGFjZSwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCd3aGl0ZXNwYWNlJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcbiAqIHB1cnBvc2Ugb2YgdGhpcyBwYXJzZXIgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBXaGl0ZV9TcGFjZWAgcHJvcGVydHkuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxuICogYXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2Ygd2hpdGVzcGFjZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVVzcGFjZSwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCd3aGl0ZXNwYWNlJyldKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlcyA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbbmV4dCwgX10gPSBSZWdleFBhcnNlcihyZVNwYWNlcywgMSkoc3RhdGUpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzLCAxKShzdGF0ZSlcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbFxuICogb25seSBmYWlsIGlmIHRoZXJlIGlzIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT25cbiAqIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IFJlZ2V4UGFyc2VyKHJlU3BhY2VzMSwgMSkoc3RhdGUpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiBvayhuZXh0LCBudWxsKVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoJ3doaXRlc3BhY2UnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbCBvbmx5IGZhaWwgaWYgdGhlcmUgaXNcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVVzcGFjZXMxLCAxKShzdGF0ZSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5PaykgcmV0dXJuIG9rKG5leHQsIG51bGwpXG4gIHJldHVybiBlcnJvcihuZXh0LCBbLi4ucmVzdWx0LmVycm9ycywgZXhwZWN0ZWRFcnJvcignd2hpdGVzcGFjZScpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgdGhpcyBwYXJzZXIgcmVjb2duaXplcyBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTmV3bGluZSwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIG5ld2xpbmUnKV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIGluIFVuaWNvZGUgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXG4gKiAqIGBMU2AgKGxpbmUgc2VwYXJhdG9yLCBgVSsyMDI4YClcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXG4gKlxuICogVGhpcyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIGBcXGZgIG9yIGBcXHZgLCB3aGljaCB3aGlsZSBiZWluZ1xuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICovXG5leHBvcnQgY29uc3QgbmV3bGluZVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVbmV3bGluZSwgMSkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKCdhIG5ld2xpbmUnKV0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkRXJyb3IsIHVuZXhwZWN0ZWRFcnJvciB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgbmV4dENoYXJzLCBxdW90ZSwgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoXG4gKiB0byBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBTdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGlmIChsZW5ndGggPT09IDApIHJldHVybiBvayhzdGF0ZSwgJycpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBlcnJvcihzdGF0ZSwgW3VuZXhwZWN0ZWRFcnJvcignRU9GJyldKVxuICB9XG5cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXG4gIGlmIChjaGFyTGVuZ3RoKG5leHQpICE9PSBsZW5ndGggfHwgIWZuKG5leHQpKSB7XG4gICAgcmV0dXJuIGVycm9yKHN0YXRlLCBbdW5leHBlY3RlZEVycm9yKHF1b3RlKG5leHQpKV0pXG4gIH1cbiAgcmV0dXJuIG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxuICogbXVzdCBiZSBleGFjdCAoaXQgaXMgY2FzZS1zZW5zaXRpdmUpLCBhbmQgYWxsIFVURi04IGNoYXJhY3RlcnMgYXJlXG4gKiByZWNvZ25pemVkIHByb3Blcmx5LlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IobmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IocXVvdGUoc3RyKSldKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuIEhvd2V2ZXIsIHRoZXJlIGlzIGEgbGltaXRhdGlvbiBiYXNlZCBvbiB0aGVcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxuICogY2Fubm90IGJlIGFzc3VtZWQgdGhhdCAzLSBhbmQgNC1ieXRlIGNoYXJhY3RlcnMgd2lsbCByZWNvZ25pemUgY2FzZS1cbiAqIGluc2Vuc2l0aXZlIGNvdW50ZXJwYXJ0cy5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIGNhc2UtaW5zZW5zaXRpdmVseSBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3R1cGxlLCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSByZXR1cm4gdHVwbGVcbiAgcmV0dXJuIGVycm9yKG5leHQsIFsuLi5yZXN1bHQuZXJyb3JzLCBleHBlY3RlZEVycm9yKHF1b3RlKHN0cikpXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB0aGUgcmVtYWluZGVyIG9mIHRoZSBpbnB1dCB0ZXh0IGFuZCByZXN1bHRzIGluXG4gKiB0aGF0IHRleHQuIFN1Y2NlZWRzIGlmIGFscmVhZHkgYXQgRU9GLCByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgYWxsID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rKHN0YXRlLCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2VydGFpbiBudW1iZXIgb2YgY2hhcmFjdGVycywgdXNpbmdcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcbiAqIG5vdCB0aGF0IG1hbnkgY2hhcmFjdGVycyBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIHRoYXQgbWFueSBjaGFyYWN0ZXJzIGFuZCBqb2luc1xuICogICAgIHRoZW0gaW50byBhIHN0cmluZyBmb3IgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueVN0cmluZyA9IG4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHJldHVybiB0dXBsZVxuICByZXR1cm4gZXJyb3IoXG4gICAgbmV4dCwgWy4uLnJlc3VsdC5lcnJvcnMsIGV4cGVjdGVkRXJyb3IoYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2ApXSxcbiAgKVxufSlcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuU3RhdGV9IFN0YXRlICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVzdWx0fSBSZXN1bHQgKi9cblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVUNTLTIgc3RyaW5nIGludG8gYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzLlxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW5cbiAqIGVuZGluZyB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcbiAqICAgICBudW1iZXIgZm9ybXMgdGhlIHVwcGVyIGJvdW5kIG9mIHRoZSByYW5nZSB3aXRob3V0IGJlaW5nIGluY2x1ZGVkXG4gKiAgICAgaW4gaXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxuICogICAgIGR1cmluZyBlYWNoIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICogQHlpZWxkcyB7bnVtYmVyfSBUaGUgdmFsdWVzIHRoYXQgbWFrZSB1cCB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XG4gIGNvbnN0IHMgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IHN0YXJ0IDogMFxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcbiAgY29uc3QgaSA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJ1xuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxuXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxuICBsZXQgY3VycmVudCA9IHNcblxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgcmV0dXJuIGkgPyBjdXJyZW50ID4gZSA6IGN1cnJlbnQgPj0gZVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG4gIHdoaWxlICghZmluaXNoZWQoKSkge1xuICAgIHlpZWxkIGN1cnJlbnRcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHRvIGJlIHRoZSBmaXJzdCBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGluY2x1ZGUgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcbiAqICAgICB0aGUgZ2VuZXJhdGVkIHN0cmluZyBpcyB0YWtlbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgVUNTLTIgKHJlZ3VsYXIgSmF2YVNjcmlwdCBzdHJpbmcpIHJlcHJlc2VudGF0aW9uXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb1N0cmluZyhpbmRleCwgbGVuZ3RoLCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxuICAgIHsgbGVuZ3RoIH0sXG4gICAgKF8sIGkpID0+IHZpZXcuZ2V0VWludDgoaW5kZXggKyBpKSxcbiAgKVxuICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoYnl0ZXMpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFVURi04IGRhdGEgdmlldyBvZiBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlIGludG8gYSBVVEYtOCBkYXRhIHZpZXcuXG4gKiBAcmV0dXJucyB7RGF0YVZpZXd9IEEgZGF0YSB2aWV3IG92ZXIgdGhlIFVURi04IGJ5dGVzIG9mIHRoZSBpbnB1dFxuICogICAgIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvVmlldyhzdHIpIHtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiBhIHN0cmluZy4gVGhpcyBjYW4gZGlmZmVyXG4gKiBmcm9tIHRoZSBudW1iZXIgb2YgVUNTLTIgY2hhcmFjdGVycyBpbiB0aGUgc2FtZSBzdHJpbmcsIG1lYW5pbmcgdGhpc1xuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIG9mIHdoaWNoIHRvIGdldCB0aGUgY2hhcmFjdGVyIGxlbmd0aC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhckxlbmd0aChzdHIpIHtcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgY3VycmVudGx5IGluZGV4ZWQgaW4gdGhlIHZpZXcsXG4gKiBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB3aXRoaW4gdGhlIHZpZXcgdGhhdCBpc1xuICogICAgIHRoZSBmaXJzdCAoYW5kIHBlcmhhcHMgb25seSkgYnl0ZSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHsoMXwyfDN8NCl9IFRoZSBudW1iZXIgb2YgYnl0ZXMgY29udGFpbmVkIGluIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcbiAgaWYgKChieXRlICYgMHhlMCkgPj4gNSA9PT0gMGIxMTApIHJldHVybiAyXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMCkgcmV0dXJuIDNcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxuICAvLyBIb3BlZnVsbHkgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGhlcmUgaW4gY2FzZSBvbmUgb2YgdGhvc2UgaGlnaFxuICAvLyBhc2NpaSBjb2RlcyBpcyB1c2VkXG4gIHJldHVybiAxXG59XG5cbi8qKlxuICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyKHMpIGluIHRoZSBkYXRhIHZpZXcuXG4gKlxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSByZXR1cm5lZCBjaGFyYWN0ZXIocykuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV4dCBUaGUgbmV4dCBjaGFyYWN0ZXIocykuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXG4gKiBUaGlzIGNoYXJhY3RlciBtYXkgYmUgYSAxLSwgMi0sIDMtLCBvciA0LWJ5dGUgY2hhcmFjdGVyIGRlcGVuZGluZyBvblxuICogdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXIoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3Qgd2lkdGggPSBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgYGNvdW50YCBjaGFyYWN0ZXJzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uXG4gKiB3aXRoaW4gdGhlIHZpZXcuIEVhY2ggb2YgdGhlc2UgY2hhcmFjdGVycyBtYXkgYmUgMS0sIDItLCAzLSwgb3JcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxuICogdGhlcmUgYXJlIG5vdCBlbm91Z2ggY2hhcmFjdGVycyBsZWZ0LCB0aG9zZSByZW1haW5pbmcgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZmlyc3QgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gcmV0dXJuLlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGNvdW50KSB7XG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcbiAgbGV0IHdpZHRoID0gMFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcbiAgICBjb25zdCBpID0gaW5kZXggKyB3aWR0aFxuICAgIGlmIChpID49IHZpZXdMZW5ndGgpIGJyZWFrXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxuICB9XG4gIGlmIChpbmRleCArIHdpZHRoID49IHZpZXdMZW5ndGgpIHtcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxuICB9XG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gZG91YmxlIHF1b3Rlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3Vycm91bmQgaW4gZG91YmxlIHF1b3Rlcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IGRvdWJsZSBxdW90ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdW90ZShzdHIpIHtcbiAgcmV0dXJuIGBcIiR7c3RyfVwiYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogV2hpbGUgdGhpcyB3aWxsIGR1cGxpY2F0ZSBhbnkgdmFsdWUsIGl0J3MgcHJpbWFyaWx5IHVzZWZ1bCBmb3JcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxuICogc2hvdWxkIGdlbmVyYWxseSBiZSBhbiBhcnJheSBvciBvYmplY3QuXG4gKlxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxuICogYWxsb3cgZGVzdHJ1Y3R1cmluZyB0byByZWZlcmVuY2UgYW55IGFuZCBhbGwgcGFydHMgb2YgYSB2YWx1ZSwgYnV0IGl0XG4gKiBkb2VzIG5vdCBoYXZlIGEgc3ludGF4IChsaWtlIHRoZSBgQGAgb3BlcmF0b3IgaW4gbGFuZ3VhZ2VzIGxpa2UgU2NhbGFcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xuICogdGhpcyBmdW5jdGlvbiwgb25lIG9mIHRoZSBjb3BpZXMgY2FuIGJlIHJldGFpbmVkIGFzIGEgd2hvbGUgd2hpbGVcbiAqIHByb3ZpZGluZyBhbm90aGVyIGNvcHkgZm9yIGRlc3RydWN0dXJpbmcuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYFxuICogY29uc3QgW3dob2xlLCBbc3RhdGUsIHZhbHVlXV0gPSBkdXAocGFyc2UocGFyc2VyLCBpbnB1dCkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMge1tbU3RhdGUsIFJlc3VsdF0sIFtTdGF0ZSwgUmVzdWx0XV19IEFuIGFycmF5IGNvbnRhaW5pbmcgdHdvXG4gKiAgICAgY29waWVzIG9mIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGR1cCh2YWx1ZSkge1xuICByZXR1cm4gW3ZhbHVlLCB2YWx1ZV1cbn1cblxuLyoqXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxuICogdGhlIGFycmF5IGlzIGVtcHR5LCB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nOyBpZiB0aGUgYXJyYXlcbiAqIGhhcyBvbmx5IG9uZSBlbGVtZW50LCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIGFycmF5IGhhc1xuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXG4gKiBhcnJheSBpcyBsb25nZXIgdGhhbiB0aGF0LCBhbGwgZWxlbWVudHMgd2lsbCBiZSBjb21tYS1zZXBhcmF0ZWQgd2l0aFxuICogYW4gYWRkaXRpb25hbCAnb3InIGJldHdlZW4gdGhlIGxhc3QgdHdvIGVsZW1lbnRzIChPeGZvcmQgY29tbWFcbiAqIHN0eWxlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtZXNzYWdlcyBUaGUgc3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgam9pbmVkIGludG9cbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbWVzc2FnZXMgam9pbmVkIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xuICBzd2l0Y2ggKG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuICcnXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cbiAgICBjYXNlIDI6IHJldHVybiBtZXNzYWdlcy5qb2luKCcgb3IgJylcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxuICAgICAgY29uc3QgbGFzdCA9IG1zZ3MucG9wKClcbiAgICAgIHJldHVybiBgJHttc2dzLmpvaW4oJywgJyl9LCBvciAke2xhc3R9YFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==