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
/*! exports provided: choice, choiceL, optional, fallback, backtrack, sequenceB, chainB, leftB, rightB, bothB, countB, manyTillB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceL", function() { return choiceL; });
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
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const choice = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
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
 * Creates a parser that implements alternatives, but with a failure
 * message included. The parsers are tried one at a time as with `alt`,
 * but if they all fail (or if any fail fatally), the last argument is
 * used as the expected message rather than constructing it out of the
 * expected messages of each failed parser.
 *
 * `choiceL(ps, message)` is an optimized version of `label(choice(ps),
 * message)`.
 *
 * @param {Parser[]} ps The parsers to apply to the input, one at a
 *     time, until one succeeds, one fails fatally, or all fail.
 * @param {string} message The message for the `Expected` error that
 *     will result from the parser failing.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const choiceL = (ps, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
    if (result.status === Ok) return reply;
    if (result.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(message));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(message));
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
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */

const sequenceB = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
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
 * @param {Parser[]} ps An array of parsers to be applied.
 * @returns {Parser} A parser that applies the supplied parsers one at a
 *     time, in order, and fails if any of those parsers fail.
 */


const sequence = ps => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
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
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, upper, constant, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, backtrack, bothB, chainB, choice, choiceL, countB, fallback, leftB, manyTillB, optional, rightB, sequenceB, between, both, chain, join, left, map, pipe, right, skip, value, followedBy, followedByL, lookAhead, notEmpty, notFollowedBy, notFollowedByL, backLabel, label, assocl, assocl1, assocr, assocr1, block, count, many, many1, manyTill, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Status, error, failure, fatal, makeParser, maybeFatal, ok, parse, result, run, succeeded, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choiceL", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choiceL"]; });

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
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(next => c === next)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].char(c));
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(read => c.toLowerCase() === read.toLowerCase())(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].chari(c));
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].satisfy(fn));
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

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].range(start, end));
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].any);
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
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].eof);
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
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].anyOf(arr));
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
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '7';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].lower);
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

const fail = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["generic"])(message)));
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} message The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const failFatally = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["fatal"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["generic"])(message)));
/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} message The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failUnexpected = message => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_1__["unexpected"])(message)));

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
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_0__["Status"];
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

const RegexParser = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const {
    index,
    view
  } = state;
  const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["viewToString"])(index, view.byteLength - index, view);
  const match = rest.match(re);
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state);
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

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(regex)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reLetter)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reAlpha)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUpper)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reLower)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reSpace)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].space);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUspace)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].spaceU);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, _] = RegexParser(reSpaces)(state);
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
  const [next, _] = RegexParser(reUspaces)(state);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, result] = RegexParser(reSpaces1)(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].spaces1);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"])(state => {
  const [next, result] = RegexParser(reUspaces1)(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(next, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].spaces1U);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reNewline)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].newline);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(RegexParser(reUnewline)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].newlineU);
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
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["nextChars"])(index, view, length);
  return Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(next) !== length || !fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(state) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["ok"])(state, next, index + width);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(str), chars => str === chars)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].string(str));
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].stringi(str));
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(StringParser(n, () => true)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_0__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_1__["expecteds"].anyString(n));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NoYWluaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jb25kaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJPayIsIkVycm9yIiwiRmF0YWwiLCJTdGF0dXMiLCJjaG9pY2UiLCJwcyIsIm1ha2VQYXJzZXIiLCJzdGF0ZSIsImVycm9ycyIsInAiLCJyZXBseSIsIm5leHQiLCJyZXN1bHQiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsIiwiZXJyb3IiLCJjaG9pY2VMIiwibWVzc2FnZSIsImV4cGVjdGVkIiwib3B0aW9uYWwiLCJvayIsImZhbGxiYWNrIiwieCIsImJhY2t0cmFjayIsImluZGV4IiwiZXJyIiwibmVzdGVkIiwic2VxdWVuY2VCIiwidmFsdWVzIiwibmV4dFN0YXRlIiwidmFsdWUiLCJwdXNoIiwiY2hhaW5CIiwiZm4iLCJyZXBseTEiLCJuZXh0MSIsInJlc3VsdDEiLCJyZXBseTIiLCJuZXh0MiIsInJlc3VsdDIiLCJsZWZ0QiIsInAxIiwicDIiLCJyaWdodEIiLCJib3RoQiIsImNvdW50QiIsIm4iLCJfIiwicmFuZ2UiLCJtYW55VGlsbEIiLCJlbmQiLCJjaGFpbiIsIm1heWJlRmF0YWwiLCJtYXAiLCJqb2luIiwic2tpcCIsInR1cGxlIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsInBpcGUiLCJiZXR3ZWVuIiwicHJlIiwicG9zdCIsIm5leHQzIiwicmVzdWx0MyIsImxvb2tBaGVhZCIsIm5vdEVtcHR5Iiwibm90RW1wdHlMIiwibXNnIiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlMIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlMIiwiTmVzdGVkIiwiRXJyb3JUeXBlIiwicGFzcyIsImxhYmVsIiwiYmFja0xhYmVsIiwibGVuZ3RoIiwidHlwZSIsImNvbXBvdW5kIiwibG9vcE1lc3NhZ2UiLCJuYW1lIiwic2VxdWVuY2UiLCJibG9jayIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcE1hbnkiLCJza2lwTWFueTEiLCJzZXBCeSIsInNlcCIsIm5leHRTdGF0ZTEiLCJuZXh0U3RhdGUyIiwiVHlwZUVycm9yIiwic2VwQnkxIiwic2VwRW5kQnkiLCJzZXBOZXh0Iiwic2VwRW5kQnkxIiwiY291bnQiLCJtYW55VGlsbCIsImFzc29jbCIsIm9wIiwib3BzIiwicmVwbHlvcCIsIm5leHRvcCIsInJlc3VsdG9wIiwicmVwbHlwIiwibmV4dHAiLCJyZXN1bHRwIiwiaSIsImFzc29jbDEiLCJhc3NvY3IiLCJhc3NvY3IxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiU3ltYm9sIiwibWFrZVN0YXRlIiwiaW5wdXQiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwic3VjY2VlZGVkIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwicmVwZWF0IiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsImNoYXJMZW5ndGgiLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwicmF3TGluZSIsInZpZXdUb1N0cmluZyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZpbmQiLCJjb21tYVNlcGFyYXRlIiwiZmlsdGVyIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJmb3JtYXR0ZXIiLCJnZXRQb3NpdGlvbiIsImNvbHVtbiIsInN0cmluZ3MiLCJhbHBoYSIsImFscGhhVSIsImFueSIsImFueU9mIiwiYXJyYXkiLCJjIiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhcmkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZU9mIiwib2N0YWwiLCJyZWdleCIsInJlIiwic2F0aXNmeSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ2kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsIkNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwicmVhZCIsInRvTG93ZXJDYXNlIiwiY2hhcnMiLCJhcnIiLCJpbmNsdWRlcyIsImNvbnN0YW50IiwiZmFpbCIsImZhaWxGYXRhbGx5IiwiZmFpbFVuZXhwZWN0ZWQiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJzbGljZSIsImxhc3QiLCJwb3AiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUVBLElBQUY7QUFBTUMsT0FBTjtBQUFhQztBQUFiLElBQXVCQyxrREFBN0I7QUFFQTs7QUFFQTtB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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBaUJBO0FBTUE7Q0FzQkE7QUFDQTs7QUFFQTtBQWNBO0FBWUE7QUFRQTtDQXVCQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFTyxNQUFNK0IsT0FBTyxHQUFHO0FBQ3JCQyxPQUFL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UDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2tMLGFBQVQsQ0FBdUJpRyxRQUF2QixFQUFpQztBQUN0QyxVQUFRQSxRQUFRLENBQUNqTyxNQUFqQjtBQUNFLFNBQUssQ0FBTDtBQUFRLGFBQU8sRUFBUDs7QUFDUixTQUFLLENBQUw7QUFBUSxhQUFPaU8sUUFBUSxDQUFDLENBQUQsQ0FBZjs7QUFDUixTQUFLLENBQUw7QUFBUSxhQUFPQSxRQUFRLENBQUMzUCxJQUFULENBQWMsTUFBZCxDQUFQOztBQUNSO0FBQVM7QUFDUCxjQUFNNFAsSUFBSSxHQUFHRCxRQUFRLENBQUNFLEtBQVQsRUFBYjtBQUNBLGNBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxHQUFMLEVBQWI7QUFDQSxlQUFRLEdBQUVILElBQUksQ0FBQzVQLElBQUwsQ0FBVSxJQUFWLENBQWdCLFFBQU84UCxJQUFLLEVBQXRDO0FBQ0Q7QUFSSDtBQVVELEMiLCJmaWxlIjoia2Vzc2VsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXJyb3IsIGZhdGFsLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgcmFuZ2UgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRXJyb3IsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhbHRlcm5hdGl2ZXMuIEVhY2ggb2YgdGhlIHN1cHBsaWVkXG4gKiBwYXJzZXJzIGlzIGFwcGxpZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIuIFdoZW4gdGhlIGZpcnN0IHBhcnNlclxuICogc3VjY2VlZHMsIG9yIHRoZSBmaXJzdCBwYXJzZXIgZmFpbHMgd2hpbGUgY29uc3VtaW5nIGlucHV0LCBleGVjdXRpb25cbiAqIGlzIHN0b3BwZWQgYW5kIHRoZSBzdGF0ZSBmcm9tIHRoYXQgbGFzdCBwYXJzZXIgaXMgcGFzc2VkIHRocm91Z2guIFRoZVxuICogc2FtZSBoYXBwZW5zIGlmIGFsbCBwYXJzZXJzIGFyZSBhcHBsaWVkIHdpdGhvdXQgYW55IG9mIHRoZW1cbiAqIHN1Y2NlZWRpbmcuXG4gKlxuICogT24gZmFpbHVyZSwgYWxsIG9mIHRoZSBgRXhwZWN0ZWRgIGVycm9ycyBmcm9tIGFueSBvZiB0aGUgY29udGFpbmVkXG4gKiBwYXJzZXJzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhpcyBwYXJzZXIncyBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJbXX0gcHMgVGhlIHBhcnNlcnMgdG8gYXBwbHkgdG8gdGhlIGlucHV0LCBvbmUgYXQgYVxuICogICAgIHRpbWUsIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxuICogICAgIG9uZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNob2ljZSA9IHBzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgZXJyb3JzID0gW11cblxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gT2spIHJldHVybiByZXBseVxuXG4gICAgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCByZXN1bHQuZXJyb3JzKVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKG5leHQsIGVycm9ycylcbiAgfVxuICByZXR1cm4gZXJyb3Ioc3RhdGUsIGVycm9ycylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYWx0ZXJuYXRpdmVzLCBidXQgd2l0aCBhIGZhaWx1cmVcbiAqIG1lc3NhZ2UgaW5jbHVkZWQuIFRoZSBwYXJzZXJzIGFyZSB0cmllZCBvbmUgYXQgYSB0aW1lIGFzIHdpdGggYGFsdGAsXG4gKiBidXQgaWYgdGhleSBhbGwgZmFpbCAob3IgaWYgYW55IGZhaWwgZmF0YWxseSksIHRoZSBsYXN0IGFyZ3VtZW50IGlzXG4gKiB1c2VkIGFzIHRoZSBleHBlY3RlZCBtZXNzYWdlIHJhdGhlciB0aGFuIGNvbnN0cnVjdGluZyBpdCBvdXQgb2YgdGhlXG4gKiBleHBlY3RlZCBtZXNzYWdlcyBvZiBlYWNoIGZhaWxlZCBwYXJzZXIuXG4gKlxuICogYGNob2ljZUwocHMsIG1lc3NhZ2UpYCBpcyBhbiBvcHRpbWl6ZWQgdmVyc2lvbiBvZiBgbGFiZWwoY2hvaWNlKHBzKSxcbiAqIG1lc3NhZ2UpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSBmb3IgdGhlIGBFeHBlY3RlZGAgZXJyb3IgdGhhdFxuICogICAgIHdpbGwgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBmYWlsaW5nLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxuICogICAgIG9uZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNob2ljZUwgPSAocHMsIG1lc3NhZ2UpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBPaykgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWwobmV4dCwgZXhwZWN0ZWQobWVzc2FnZSkpXG4gIH1cbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBleHBlY3RlZChtZXNzYWdlKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciwgc3VjY2VlZGluZyB3aGV0aGVyXG4gKiBpdCBmYWlscyBvciBub3QgYnV0IG9ubHkgY29uc3VtaW5nIGlucHV0IGlmIGl0IHN1Y2NlZWRzLiBUaGlzIHBhcnNlclxuICogd2lsbCBvbmx5IGZhaWwgaWYgaXRzIHN1cHBsaWVkIHBhcnNlciBmYWlscyBmYXRhbGx5LiBJdCdzIHVzZWQgdG9cbiAqIGltcGxlbWVudCBza2lwcGluZyBvdmVyIHNvbWUgb3B0aW9uYWwgdGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIGZvciBvcHRpb25hbCBjb250ZW50IHRvIGJlIGFwcGxpZWQgYW5kXG4gKiAgICAgdGhlbiBoYXZlIGl0cyByZXN1bHQgaWdub3JlZC5cbiAqIEByZXR1cm4ge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdCB1bmxlc3MgaXRzXG4gKiAgICAgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LiBUaGlzIHBhcnNlciBjb25zdW1lcyB0ZXh0IG9ubHlcbiAqICAgICBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG9wdGlvbmFsID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBGYXRhbCA/IHJlcGx5IDogb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xuICogc3VjY2Vzc2Z1bCByZXN1bHQgb3IgZWxzZSAoaWYgdGhhdCBwYXJzZXIgZmFpbHMpIHRoZSBzdXBwbGllZCB2YWx1ZVxuICogYHhgLiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogYGZhbGxiYWNrKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNob2ljZShbcCxcbiAqIGNvbnN0YW50KHgpXSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhbGxiYWNrID0gKHAsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IEVycm9yID8gcmVwbHkgOiBvayhuZXh0LCB4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgdHJhbnNmb3JtcyBhIGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbFxuICogZmFpbHVyZS4gSXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyOyBpZiB0aGF0IHBhcnNlciBmYWlsc1xuICogZmF0YWxseSwgdGhlIHN0YXRlIGlzIHNldCBiYWNrIHRvIHdoYXQgaXQgd2FzICpiZWZvcmUqIHRoYXQgcGFyc2VyIGlzXG4gKiBhcHBsaWVkIGFuZCB0aGUgZmF0YWwgZmFpbHVyZSBpcyByZXR1cm5lZCBhcyBhIG5vbi1mYXRhbCBmYWlsdXJlLiBJZlxuICogdGhlIHBhcnNlciBoYXMgYW55IG90aGVyIHJlc3VsdCwgaXQgaXMgcGFzc2VkIHRocm91Z2ggd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsbG93cyB0aGUgdXNlciB0byBjYXVzZSBhIG5vbi1iYWNrdHJhY2tpbmcgcGFyc2VyIHRvXG4gKiBiYWNrdHJhY2sgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhY2t0cmFjayA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0LmluZGV4XG4gICAgICA/IHJlc3VsdC5lcnJvcnNcbiAgICAgIDogbmVzdGVkKG5leHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgcmV0dXJuIGVycm9yKG5leHQsIGVyciwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXG4gKiBmYWlscy4gSW4gdGhlIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdFxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvXG4gKiBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQuIEFcbiAqIGZhdGFsIGVycm9yIGZyb20gb25lIG9mIHRoZSBjb250YWluZWQgcGFyc2VycyB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhblxuICogb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHNlcXVlbmNlQihwcylgIGlzIG5vdCB0aGUgc2FtZSBhc1xuICogYGJhY2t0cmFjayhzZXF1ZW5jZShwcykpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2ZcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxuICogY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcltdfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZUIgPSBwcyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxuICAgICAgICA/IHJlc3VsdC5lcnJvcnNcbiAgICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cbiAqXG4gKiBJZiB0aGUgc2Vjb25kIHBhcnNlciAodGhlIG9uZSBwcm92aWRlZCBieSBgZm5gKSBmYWlscyBub24tZmF0YWxseSxcbiAqIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvXG4gKiB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3RcbiAqIHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbCBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbFxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBjaGFpbkIocCwgZm4pYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhjaGFpbihwLFxuICogZm4pKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAoZm4ocmVzdWx0MS52YWx1ZSkobmV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IEVycm9yKSByZXR1cm4gcmVwbHkyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAxYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYGxlZnRCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKGxlZnQocDEsXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnRCID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKG5leHQyLCByZXN1bHQxLnZhbHVlKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAyYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHJpZ2h0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhyaWdodChwMSxcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXG4gKiBgcDFgIG9yIGBwMmAgZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYGJvdGhCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKGJvdGgocDEsXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBib3RoQiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhuZXh0MiwgW3Jlc3VsdDEudmFsdWUsIHJlc3VsdDIudmFsdWVdKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXG4gKiBmYWlscywgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbDsgaWYgdGhhdCBmYWlsdXJlIGlzIGZhdGFsLCB0aGVcbiAqIG92ZXJhbGwgZmFpbHVyZSB3aWxsIGFsc28gYmUgZmF0YWwuXG4gKlxuICogVGhlIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgdGhlIHVuZGVybHlpbmcgZXJyb3Igd2FzXG4gKiBub24tZmF0YWwsIGV2ZW4gaWYgaW5wdXQgd2FzIGNvbnN1bWVkIChiYWNrdHJhY2tpbmcgd2lsbCBoYXBwZW4gaW5cbiAqIHRoaXMgY2FzZSkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50QiA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQuaW5kZXhcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKG5leHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgICByZXR1cm4gZXJyb3IobmV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cbiAqXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxuICogZXJyb3IgZm9yIHRoZSBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHQyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIHtcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxuICAgICAgICA/IG1lcmdlKHJlc3VsdDIuZXJyb3JzLCByZXN1bHQxLmVycm9ycylcbiAgICAgICAgOiBuZXN0ZWQobmV4dDIsIG1lcmdlKHJlc3VsdDIuZXJyb3JzLCByZXN1bHQxLmVycm9ycykpXG4gICAgICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBtYWtlUGFyc2VyLCBtYXliZUZhdGFsLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cbiAqXG4gKiBJZiB0aGUgaW5pdGlhbCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBpbnN0ZWFkIHJldHVybmVkLiBJZiB0aGVcbiAqIHNlY29uZCBwYXJzZXIgKHRoZSByZXR1cm4gdmFsdWUgb2YgYGZuYCkgZmFpbHMgYW5kIGBwYCBjb25zdW1lZFxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAoZm4ocmVzdWx0MS52YWx1ZSkobmV4dDEpKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXG4gICAgOiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cbiAqIGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuXG4gKlxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcbiAqIGZhaWx1cmUgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cbiAqXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBjb25zdGFudChmbih4KSkpYC4gVGhpcyBhbHNvIG1ha2VzIGl0IGEgbW9yZSBlZmZpY2llbnQgdmVyc2lvbiBvZlxuICogYHBpcGUoW3BdLCBmbilgIChhIHNpbmdsZS1wYXJzZXIgYHBpcGVgKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5IHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIGZuKHJlc3VsdC52YWx1ZSkpIDogcmVwbHlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXG4gKiBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIGlmIGl0IHN1Y2NlZWRzLCB0aGF0XG4gKiByZXN1bHQncyBlbGVtZW50cyBhcmUgam9pbmVkIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGlzXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXG4gKiBmdW5jdGlvbmFsIGxhbmd1YWdlcyB3aGVyZSBhIHN0cmluZyBpcyB0aGUgc2FtZSBhcyBhIGxpc3Qgb2ZcbiAqIGNoYXJhY3RlcnMuIEphdmFTY3JpcHQgbmVlZHMgZXhwbGljaXQgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSB0d28sIHNvXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIHRoZSBjcmVhdGVkIHBhcnNlciB3aWxsIGFsc28gZmFpbCB3aXRoXG4gKiB0aGUgc2FtZSBzdGF0ZS5cbiAqXG4gKiBgam9pbihwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBjb25zdGFudCh4LmpvaW4oJycpKSlgLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lcyBub3QgcmVzdWx0IGluIGFuIGFycmF5LCBhbiBleGNlcHRpb24gd2lsbFxuICogYmUgdGhyb3duIGJlY2F1c2UgYW4gYXR0ZW1wdCB3aWxsIGJlIG1hZGUgdG8gY2FsbCBgam9pbmAgb24gdGhlXG4gKiByZXN1bHQuIElmIGl0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2Ygc29tZXRoaW5nIG90aGVyIHRoYW4gc3RyaW5ncyxcbiAqIHRob3NlIGVsZW1lbnRzIHdpbGwgYmUgY29lcmNlZCBpbnRvIHN0cmluZ3MgYW5kIHRoZW4gam9pbmVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlciBhbmRcbiAqICAgICByZXN1bHRzIGluIGEgc2luZ2xlIHN0cmluZyBtYWRlIGZyb20gam9pbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlXG4gKiAgICAgYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLmpvaW4oJycpKSA6IHJlcGx5XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIGRpc2NhcmRzIGFueVxuICogc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGUgc3RpbGwgY29uc3VtaW5nIGlucHV0LiBBIGZhaWx1cmUgd2lsbCBiZVxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBgc2tpcChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxuICogY29uc3RhbnQobnVsbCkpYCxcbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGRvZXMgb24gc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogcmVwbHlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgcnVuIHRoZSBzdXBwbGllZCBwYXJzZXIgYnV0LCBvbiBzdWNjZXNzLFxuICogcmVzdWx0IGluIHRoZSBzdXBwbGllZCB2YWx1ZSBpbnN0ZWFkLlxuICpcbiAqIGB2YWx1ZShwLCB4KWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVuYXRpb24gb2YgYGNoYWluKHAsICgpID0+XG4gKiBjb25zdGFudCh4KSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCB4KSA6IHR1cGxlXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxuICogdmFsdWUocDIsIHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcDIobmV4dDEpXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MiwgcmVzdWx0MS52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMmAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYHJpZ2h0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsICgpID0+XG4gKiBwMilgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXG4gICAgOiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGxcbiAqIGJlIGZhdGFsIGlmIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGBib3RoKHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT5cbiAqIGNoYWluKHAyLCBiID0+IGNvbnN0YW50KFthLCBiXSkpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZXMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgY29uc3QgYm90aCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2sobmV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXG4gKiBwYXJzZXJzIHRvIGFwcGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KiBkaXNjYXJkZWQuXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gYGZuYCBub1xuICogbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogYHBpcGUoW3AxLCBwMl0sIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYVxuICogPT4gY2hhaW4ocDIsIGIgPT4gY29uc3RhbnQoZm4oYSwgYikpKSlgLCBgcGlwZShbcDEsIHAyLCBwM10sIGZuKWAgaXNcbiAqIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT4gY2hhaW4ocDIsIGIgPT5cbiAqIGNoYWluKHAzLCBjID0+IGNvbnN0YW50KGZuKGEsIGIsIGMpKSkpKWAsIGFuZCBzbyBvbi5cbiAqXG4gKiBJZiB0aGUgYXJyYXkgaGFzIG9uZSBlbGVtZW50LCB0aGUgcGFyc2VyIGJlY29tZXMgZXF1aXZhbGVudCB0byBgbWFwYFxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyW119IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmUgYXBwbGllZCBvbmUgYXQgYSB0aW1lLFxuICogICAgIGluIG9yZGVyLlxuICogQHBhcmFtIHtmdW5jdGlvbiguLi4qKToqfSBmbiBBIGZ1bmN0aW9uIHdoaWNoIHdpbGwgcmVjZWl2ZSBhc1xuICogICAgIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm4gdmFsdWUgd2lsbFxuICogICAgIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGUgPSAocHMsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIGZuKC4uLnZhbHVlcykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgYmVmb3JlLCBjb250ZW50LCBhbmQgYWZ0ZXIgcGFyc2Vyc1xuICogaW4gb3JkZXIgYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBjb250ZW50IHBhcnNlciBgcGAgaXMgYXBwbGllZCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlclxuICogYHBhZnRlcmAuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgd2lsbCBoYXZlIGFuIG9wcG9ydHVuaXR5XG4gKiB0byBwYXRjaCB0aGUgXCJhZnRlclwiIGNvbnRlbnQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXIgZG9lcywgc28gdGFrZVxuICogY2FyZSB0aGF0IHRoZSBwYXJzZXJzIGRvIG5vdCBvdmVybGFwIGluIHdoYXQgdGhleSBtYXRjaC5cbiAqXG4gKiBgYmV0d2VlbihwcmUsIHBvc3QsIHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcbiAqIGBsZWZ0KHJpZ2h0KHByZSwgcCksIHBvc3QpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcG9zdCBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHByZSwgcG9zdCwgcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwcmUoc3RhdGUpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAobmV4dDEpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtuZXh0MywgcmVzdWx0M10gPSBwb3N0KG5leHQyKVxuICByZXR1cm4gcmVzdWx0My5zdGF0dXMgPT09IE9rID8gb2sobmV4dDMsIHJlc3VsdDIudmFsdWUpXG4gICAgOiBtYXliZUZhdGFsKG5leHQzLmluZGV4ICE9PSBpbmRleCwgbmV4dDMsIHJlc3VsdDMuZXJyb3JzKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogc3VjY2VlZHMsIGl0cyByZXN1bHQgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSByZXR1cm5lZCBwYXJzZXIuXG4gKiBFaXRoZXIgd2F5LCBubyBpbnB1dCBpcyBjb25zdW1lZC4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIocykgc2F0aXNmeSB0aGUgcGFyc2VyIHdpdGhvdXQgYWN0dWFsbHkgY29uc3VtaW5nXG4gKiB0aGUgaW5wdXQgdG8gZmluZCBvdXQuXG4gKlxuICogQXMgYSBzaWRlIGVmZmVjdCwgYW55IGZhdGFsIHBhcnNlIGVycm9yIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhXG4gKiBub24tZmF0YWwgb25lLCBzaW5jZSBubyBpbnB1dCBpcyBiZWluZyBjb25zdW1lZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyBvciBmYWlsc1xuICogICAgIHdpdGggaXQsIGJ1dCB3aGljaCBjb25zdW1lcyBubyBpbnB1dCBlaXRoZXIgd2F5LlxuICovXG5leHBvcnQgY29uc3QgbG9va0FoZWFkID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZSwgaW5kZXgpXG4gICAgOiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXG4gKiB0aGlzIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cbiAqXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxuICogYXQgbGVhc3Qgb25jZS4gRm9yIGluc3RhbmNlLCBvbmUgY291bGQgaW1wbGVtZW50IGBtYW55MShwKWAgd2l0aFxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBub3RFbXB0eUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcbiAqICAgICBjb25zdW1lIGFueSBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBPayB8fCBuZXh0LmluZGV4ICE9PSBpbmRleCA/IHJlcGx5IDogZXJyb3IobmV4dClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXG4gKiB0aGlzIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cbiAqXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxuICogYXQgbGVhc3Qgb25jZS4gRm9yIGluc3RhbmNlLCBvbmUgY291bGQgaW1wbGVtZW50IGBtYW55MShwKWAgd2l0aFxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIHN1Y2NlZWRzXG4gKiAgICAgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBmYWlscyBpZiBgcGAgcGFzc2VzIGJ1dCBkb2Vzbid0XG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3Qgbm90RW1wdHlMID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBPayB8fCBuZXh0LmluZGV4ICE9PSBpbmRleCA/IHJlcGx5XG4gICAgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBmb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsLCBpbmRleClcbiAgICA6IGVycm9yKG5leHQsIHVuZGVmaW5lZCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxuICogYGZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LCByZXBsYWNpbmcgYW55IFwiZXhwZWN0ZWRcIiBlcnJvclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwsIGluZGV4KVxuICAgIDogZXJyb3IobmV4dCwgZXhwZWN0ZWQobXNnKSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBub3RGb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxuICAgIDogb2sobmV4dCwgbnVsbCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3RGb2xsb3dlZEJ5TCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gZXJyb3IobmV4dCwgZXhwZWN0ZWQobXNnKSwgaW5kZXgpXG4gICAgOiBvayhuZXh0LCBudWxsLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmYXRhbCwgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcbmNvbnN0IHsgTmVzdGVkIH0gPSBFcnJvclR5cGVcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuZnVuY3Rpb24gcGFzcyhzdGF0ZSwgcmVzdWx0LCBlcnJvcnMpIHtcbiAgcmV0dXJuIFt7IC4uLnN0YXRlIH0sIHsgLi4ucmVzdWx0LCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogY29uc3VtZXMgaW5wdXQsIG5vdGhpbmcgYWRkaXRpb25hbCBoYXBwZW5zLiBPdGhlcndpc2UsIHRoZSBvcmlnaW5hbFxuICogcGFyc2VyJ3MgcmVzdWx0IGlzIHJldGFpbmVkIGJ1dCB0aGUgZXJyb3IgaXMgb3ZlcndyaXR0ZW4gYnkgdGhlXG4gKiBzdXBwbGllZCBtZXNzYWdlIGFzIGFuIGV4cGVjdGVkIGVycm9yLlxuICpcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBiZXR0ZXIgZXJyb3IgbWVzc2FnZXMgaW4gY2FzZXMgd2hlcmUgdGhlXG4gKiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBlcnJvciBtZXNzYWdlcyBhcmUgaW5zdWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgcGFzc2VzIGl0cyByZXN1bHRzXG4gKiAgICAgdGhyb3VnaCBleGNlcHQgZm9yIGNoYW5naW5nIGl0cyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgdXBvblxuICogICAgIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBjb25zdCBsYWJlbCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICByZXR1cm4gaW5kZXggPT09IG5leHQuaW5kZXggPyBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogc3VjY2VlZHMsIHRoYXQgc3VjY2VzcyBpcyBwYXNzZWQgdGhyb3VnaCwgdGhvdWdoIGlmIGl0IGRpZG4ndCBjb25zdW1lXG4gKiBhbnkgaW5wdXQsIHRoZSBwcm92aWRlZCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhbiBleHBlY3RlZFxuICogZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBJZiB0aGUgb3JpZ2luYWwgcGFyc2VyIGZhaWxzLCB3aGF0IGhhcHBlbnMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoYXRcbiAqIGZhaWx1cmUgY29uc3VtZWQgaW5wdXQuIElmIGl0IGRpZCBub3QsIHRoZSBzdXBwbGllZCBtZXNzYWdlXG4gKiBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBlcnJvciBtZXNzYWdlIGp1c3QgYXMgd2l0aCBgbGFiZWxgLiBJZiBpdFxuICogKmRpZCogY29uc3VtZSBpbnB1dCwgdGhlIHN0YXRlIGlzIHJlc2V0IHRvIHRoZSBzdGF0ZSBiZWZvcmUgdGhlXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIHRoZSBlcnJvciBpcyBzZXQgdG8gYSBjb21wb3VuZCBlcnJvciB1c2luZyB0aGVcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgKHdpdGggdGhlIG5lc3RlZCBlcnJvciBiZWluZyB0aGUgb3JpZ2luYWwgZXJyb3IgdGhhdFxuICogY2FtZSBmcm9tIHRoZSBmYWlsdXJlIHBvaW50KSwgYW5kIGEgZmF0YWwgZXJyb3IgaXMgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZldyBwbGFjZXMgd2hlcmUgYSBmYXRhbCBlcnJvciBoYXBwZW5zIGFmdGVyXG4gKiBiYWNrdHJhY2tpbmcuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGVycm9yIG1lc3NhZ2UgdG8gYmUgdXNlZC4gVGhpcyB3aWxsIGJlXG4gKiAgICAgYW4gYEV4cGVjdGVkYCBlcnJvciBpZiBubyBpbnB1dCB3YXMgY29uc3VtZWQsIG9yIGEgYENvbXBvdW5kYFxuICogICAgIGVycm9yIGlmIGl0IHdhcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIGNoYW5nZXMgdGhlIGVycm9yXG4gKiAgICAgYXMgYXBwcm9wcmlhdGUgaWYgYHBgIGZhaWxzLlxuICovXG5leHBvcnQgY29uc3QgYmFja0xhYmVsID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBPaykge1xuICAgIHJldHVybiBpbmRleCA9PT0gbmV4dC5pbmRleFxuICAgICAgPyBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxuICB9IGVsc2UgaWYgKGluZGV4ID09PSBuZXh0LmluZGV4KSB7XG4gICAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAxICYmIHJlc3VsdC5lcnJvcnNbMF0udHlwZSA9PT0gTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IHN0YXRlLCBlcnJvcnMgfSA9IHJlc3VsdC5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBwYXNzKG5leHQsIHJlc3VsdCwgY29tcG91bmQobXNnLCBzdGF0ZSwgZXJyb3JzKSlcbiAgICB9XG4gICAgcmV0dXJuIHBhc3MobmV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKVxuICB9XG4gIHJldHVybiBmYXRhbChzdGF0ZSwgY29tcG91bmQobXNnLCBuZXh0LCByZXN1bHQuZXJyb3JzKSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBvaywgbWFrZVBhcnNlciwgU3RhdHVzLCBtYXliZUZhdGFsIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgcmFuZ2UgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRXJyb3IsIEZhdGFsIH0gPSBTdGF0dXNcblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgcGFyc2VyIG1heSBmYWlsIGZhdGFsbHkgZXZlbiBpZiB0aGUgdW5zdWNjZXNzZnVsXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xuICogcGFyc2VyIHN1Y2NlZWRlZCBhbmQgY29uc3VtZWQgaW5wdXQuIEVzc2VudGlhbGx5LCBpZiB0aGUgcmV0dXJuZWRcbiAqIHBhcnNlciBjb25zdW1lcyBhbnl0aGluZyBhbmQgdGhlbiBmYWlscywgaXQgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJbXX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2UgPSBwcyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhXG4gKiBnZW5lcmF0b3IgZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZFxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxuICogYmUgYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS4gSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCxcbiAqIGBibG9ja2Agd2lsbCBhbHNvIGZhaWwgd2l0aCB0aGF0IGZhaWx1cmUuIFRoaXMgZmFpbHVyZSB3aWxsIGJlIGZhdGFsXG4gKiBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrID0gZ2VuRm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKG5leHQsIHZhbHVlKVxuXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHZhbHVlKG5leHQpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXG4gIH1cbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcbiAqIHByb3ZpZGluZyB0aGF0IGFzIGl0cyBvd24gcmVzdWx0LiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWZcbiAqIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLCBpdFxuICogc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXG4gKiBwcm92aWRpbmcgdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdCBzdWNjZWVkXG4gKiBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLCB0aGVcbiAqIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlblxuICogaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbdHVwbGUsIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiB0dXBsZVxuXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHlcbiAqIGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLFxuICogaXQgc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgbmV4dCA9IHN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgY29udGFpbmVkIHBhcnNlciBtdXN0XG4gKiBzdWNjZWVkIGF0IGxlYXN0IG9uY2UsIG9yIHRoZSByZXR1cm5lZCBwYXJzZXIgd2lsbCBmYWlsLiBPdGhlcndpc2UsXG4gKiB0aGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dFxuICogd2hlbiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55MSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcbiAqIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzbyB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyXG4gKiB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG8gZmFpbCBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcbiAqIGNvbnRlbnQgcGFyc2VyIG11c3Qgc3VjY2VlZCBhdCBsZWVhc3Qgb25jZSBvciBhIG5vbi1mYXRhbCBmYWlsdXJlXG4gKiB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHkgZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnNcbiAqIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcbiAqIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xuICogdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlciB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG9cbiAqIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5ID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NlcE5leHQsIF9dID0gc2VwKHsgLi4ubmV4dCwgaW5kZXggfSlcbiAgcmV0dXJuIG9rKHNlcE5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuIGFuZFxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlZWFzdCBvbmNlXG4gKiBvciBhIG5vbi1mYXRhbCBmYWlsdXJlIHdpbGwgb2NjdXIuIE90aGVyd2lzZSwgdGhlIHBhcnNlciBjYW4gb25seVxuICogZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5MSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcblxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0U3RhdGUxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5uZXh0LCBpbmRleCB9KVxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcbiAqIGR1cmluZyB0aGF0IGZhaWx1cmUsIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50ID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBuZXh0ID0gc3RhdGVcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gcChuZXh0KVxuICAgIG5leHQgPSBuZXh0U3RhdGVcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxuICpcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcywgdGhlIG92ZXJhbGxcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXG4gKiBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsID0gKHAsIGVuZCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IG5leHQgPSBzdGF0ZVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAoZW5kKG5leHQpKVxuICAgIG5leHQgPSBuZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoXG4gICAgICAgIG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2NsID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxuICAgIG5leHQgPSBuZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXG4gICAgbmV4dCA9IG5leHRwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY2wxID0gKHAsIG9wKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY3IgPSAocCwgb3AsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXG4gICAgbmV4dCA9IG5leHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY3IxID0gKHAsIG9wKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcbiAgICBuZXh0ID0gbmV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxuICAgIG5leHQgPSBuZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IHN0cmluZ1RvVmlldyB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3ltYm9sIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogU3ltYm9sKCdvaycpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LiAqL1xuICBFcnJvcjogU3ltYm9sKCdlcnJvcicpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6IFN5bWJvbCgnZmF0YWwnKSxcbn1cblxuLyoqXG4gKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHRcbiAqIGFuZCBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFN0YXRlXG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXlcbiAqICl9IFR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBzdGF0ZS4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhIG5ld1xuICogc3RhdGUgaXMgb25seSBjcmVhdGVkIGJlZm9yZSBwYXJzaW5nLCBpbiB0aGUgYHBhcnNlYCBmdW5jdGlvbi4gQW55XG4gKiBmdXJ0aGVyIHN0YXRlcyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBpbml0aWFsIHN0YXRlIHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHtTdGF0ZX0gQW4gZW1wdHkgcGFyc2VyIHN0YXRlIG9iamVjdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZShpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBzdGF0ZSwgdXBkYXRlcyBpdCBzb21laG93IChnZW5lcmFsbHkgYnkgcmVhZGluZyBhIGNoYXJhY3RlciksIGFuZFxuICogcmV0dXJucyB0aGUgdXBkYXRlZCBzdGF0ZS5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIHVwZGF0ZWQgc3RhdGUgYWZ0ZXIgdGhlIHBhcnNlciBpc1xuICogICAgIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyXG4gKiBmdW5jdGlvbiBhbmQgcmV0dXJucyBpdDsgaXQncyBoZXJlIGluIGNhc2Ugc29tZXRoaW5nIG1vcmUgbmVlZHMgdG8gYmVcbiAqIGRvbmUgaW4gcGFyc2VyIGNyZWF0aW9uLiBUaGlzIGhhcyBoYXBwZW5lZCBpbiB0aGUgcGFzdCBhbmQgdmVyeVxuICogbGlrZWx5IHdpbGwgYWdhaW4gaGFwcGVuIGluIHRoZSBmdXR1cmUuXG4gKlxuICogV2hpbGUgaXQgaXMgbm90IGN1cnJlbnRseSBzbywgdGhlcmUgaGF2ZSBiZWVuIHRpbWVzIHdoZW4gYmVoYXZpb3Igb2ZcbiAqIGZ1bmN0aW9ucyBwcm9kdWNlZCBieSB0aGlzIGZhY3RvcnkgZGlmZmVyZWQgZnJvbSBnZW5lcmFsIGZ1bmN0aW9ucy5cbiAqIEJlY2F1c2Ugb2YgdGhlIHBvc3NpYmlsaXR5IHRoYXQgdGhpcyBjb3VsZCByZXR1cm4sIGl0J3Mgc3VnZ2VzdGVkIHRvXG4gKiB1c2UgdGhpcyBmdW5jdGlvbiB0byBwcm9kdWNlIGFsbCBwYXJzZXJzIHJhdGhlciB0aGFuIHByb2R1Y2luZyB0aGVtXG4gKiBieSBoYW5kLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IFRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQYXJzZXIoZm4pIHtcbiAgcmV0dXJuIGZuXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLCBhcyB3ZWxsIGFzXG4gKiBhIGBTdGF0ZWAgcG90ZW50aWFsbHkgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2soc3RhdGUsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXRcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIGNvcHkgb2YgYFN0YXRlYC5cbiAqXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLnN0YXRlLCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkVycm9yLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2hpbGVcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIG5ldyBgU3RhdGVgIHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmF0YWwoc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYXRhbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2VyIGFwcGxpY2F0b2luIGZhaWxlZC5cbiAqIFdoZXRoZXIgdGhpcyBpcyBhIGZhdGFsIGVycm9yIG9yIG5vdCBkZXBlbmRzIG9uIHdoZXRoZXIgYHRlc3RgIGlzXG4gKiBgdHJ1ZWAgKGZhdGFsKSBvciBgZmFsc2VgIChub24tZmF0YWwpLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdGVzdCBVc2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBwcm9kdWNlZCByZXN1bHRcbiAqICAgICByZXByZXNlbnRzIGEgZmF0YWwgZXJyb3IgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVGYXRhbCh0ZXN0LCBzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IC4uLnN0YXRlLCBpbmRleCB9LFxuICAgIHsgc3RhdHVzOiB0ZXN0ID8gU3RhdHVzLkZhdGFsIDogU3RhdHVzLkVycm9yLCBlcnJvcnMgfSxcbiAgXVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBzdGF0ZSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBUaGUgZmluYWwgc3RhdGUgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZVxuICogICAgIGJlZW4gYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKG1ha2VTdGF0ZShpbnB1dCkpXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxuICogICAgIGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBwYXJzZXIgc3VjY2VlZGVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBkaWQgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VlZGVkKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXMgPT09IFN0YXR1cy5Pa1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC4gSWYgdGhlIHBhcnNlclxuICogZGlkIG5vdCBzdWNjZWVkLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIE5vdGUgdGhhdCBgbnVsbGAgaXMgYSBwb3NzaWJsZSByZXN1bHQgZnJvbSBzb21lIGluZGl2aWR1YWwgcGFyc2Vyc1xuICogKGBza2lwYCwgYGxvb2tBaGVhZGAsIGV0Yy4pLiBUaGUgcHJvcGVyIHdheSB0byB0ZWxsIGlmIGEgcGFyc2VyXG4gKiBzdWNjZWVkZWQgaW4gdGhlIGZpcnN0IHBsYWNlIGlzIHRvIHVzZSBgc3VjY2VlZGVkYC5cbiAqXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxuICogICAgIGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdChyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IHJlcGx5WzFdLnZhbHVlIDogbnVsbFxufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgc3RyaW5nIGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5XG4gKiBhbiB1bnN1Y2Nlc3NmdWwgaW52b2NhdGlvbiBvZiBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyIHdhcyBhY3R1YWxseVxuICogc3VjY2Vzc2Z1bCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxuICogICAgIGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMoLi4ucmVwbHkpXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBhcHBsaWNhdGlvbiwgaWYgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxuICogICAgIGRldGFpbGVkIHJlY29yZCBvZiB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xuICBjb25zdCBbc3RhdGUsIHJlc3VsdF0gPSBwYXJzZXIobWFrZVN0YXRlKGlucHV0KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKHN0YXRlLCByZXN1bHQpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgY2hhckxlbmd0aCxcbiAgY29tbWFTZXBhcmF0ZSxcbiAgbmV4dENoYXJXaWR0aCxcbiAgdmlld1RvU3RyaW5nLFxufSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5TdGF0ZX0gU3RhdGUgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3ltYm9sIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cbiAgICovXG4gIEV4cGVjdGVkOiBTeW1ib2woJ2V4cGVjdGVkJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxuICAgKiBwcm9kdWNlZCBieSBwYXJzZXJzIHN1Y2ggYXMgYHVuZXhwZWN0ZWRgIGFuZCBgbm90Rm9sbG93ZWRCeWAuXG4gICAqL1xuICBVbmV4cGVjdGVkOiBTeW1ib2woJ3VuZXhwZWN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cbiAgICovXG4gIEdlbmVyaWM6IFN5bWJvbCgnZ2VuZXJpYycpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXG4gICAqL1xuICBOZXN0ZWQ6IFN5bWJvbCgnbmVzdGVkJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIG5lc3RlZCBlcnJvciB3aXRoIGl0cyBvd24gc2VwYXJhdGUgZXJyb3JcbiAgICogbWVzc2FnZS4gVGhpcyBpcyBwcm9kdWNlZCBzcGVjaWZpY2FsbHkgYnkgdGhlIGBjb21wb3VuZGAgcGFyc2VyLlxuICAgKi9cbiAgQ29tcG91bmQ6IFN5bWJvbCgnY29tcG91bmQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXG4gICAqL1xuICBPdGhlcjogU3ltYm9sKCdvdGhlcicpLFxufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcbiAqIHN0YXRlLiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXG4gKiBwb3NpdGlvbmVkIGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXG4gKiB0byBieSB0aGUgY3VycmVudCBzdGF0ZS4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cbiAqIEBwcm9wZXJ0eSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbCBlcnJvclxuICogICAgIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tIHRoZVxuICogICAgIGN1cnJlbnQgc3RhdGUuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYHN0YXRlYC5cbiAqL1xuXG4vKipcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXG4gKiBAcHJvcGVydHkge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWwgZXJyb3JcbiAqICAgICBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbSB0aGVcbiAqICAgICBjdXJyZW50IHN0YXRlLlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBzdGF0ZWAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGVycm9yIGxpc3QgY29udGFpbmluZyBvbmUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxuICogZXJyb3IgbWVzc2FnZXMgbWF5IGhhdmUgbXVsdGlwbGUgdW5leHBlY3RlZCBlcnJvcnMsIGJ1dCBvbmx5IHRoZVxuICogZmlyc3Qgd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGZvdW5kIGJ1dCB3YXNcbiAqICAgICBub3QgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUaGVyZSBjYW4gYmUgbW9yZSB0aGFuIG9uZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzLCBidXQgb25seSB0aGUgZmlyc3Qgd2lsbFxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge0Vycm9yTWVzc2FnZX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpYyhsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge0Vycm9yTWVzc2FnZX0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdGhlcihsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLk90aGVyLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxuICogc3RhdGUgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGUgbmVzdGVkXG4gKiBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvciB3aWxsIG5vdFxuICogYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBzdGF0ZS5cbiAqIEByZXR1cm5zIHtOZXN0ZWRFcnJvcn0gQSBuZXcgbmVzdGVkIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkKHN0YXRlLCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IGVycm9yc1xuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgc3RhdGUsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBzdGF0ZS5cbiAqIEByZXR1cm5zIHtDb21wb3VuZEVycm9yfSBBIG5ldyBjb21wb3VuZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBzdGF0ZSwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBbe1xuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxuICAgICAgc3RhdGU6IGVycm9ycy5zdGF0ZSxcbiAgICAgIGVycm9yczogZXJyb3JzLmVycm9ycyxcbiAgICAgIGxhYmVsLFxuICAgIH1dXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsIHN0YXRlLCBlcnJvcnMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMxIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMiBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSwgZXJyb3JzMikge1xuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXG59XG5cbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcbiAqICAgICBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqL1xuXG4vKipcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgKlxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcbiAgKiAgICAgdGFiIHNpemUuXG4gICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXG4gKiBkZXNpcmVkLlxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cbiAqXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChieXRlID09PSAweDBkKSB7XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxuICpcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXG4gIGxldCBpID0gMFxuXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcbiAgICBpZiAobmV3bGluZSkge1xuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XG4gICAgICB9XG4gICAgICBsaW5lbm8rK1xuICAgICAgc3RhcnQgPSBpICsgc2tpcFxuICAgIH1cbiAgICBpICs9IHNraXBcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXG4gKlxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xuICBsZXQgY2hhckluZGV4ID0gMFxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcbiAgICBjaGFySW5kZXgrK1xuICB9XG4gIHJldHVybiBjaGFySW5kZXhcbn1cblxuLyoqXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcbiAqIGNoYXJhY3RlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xuICBjb25zdCB0YWJJbmRleGVzID0gW11cbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXG4gIGxldCByZXN1bHQgPSBsaW5lXG5cbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgfVxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcbiAqIG1hcmtzLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xuICBsZXQgaW5kZXggPSBjb2xJbmRleFxuICBjb25zdCBtYXRjaGVzID0gW11cblxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXG4gKiAgICAgY29sdW1uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcbiAgICB9XmBcbiAgfVxuXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAke3NwfS4uLiR7XG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcbiAgfS4uLlxcbiR7c3B9JHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxuICogICAgIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5zdGF0ZVxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxuICAgICAgPyBgXFxuJHtzcH0ke24ubGFiZWx9IGNvdWxkIG5vdCBiZSBwYXJzZWQgYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxuICApXG5cbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxuXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcblxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcblxuICByZXR1cm4gZW5zdXJlTmV3bGluZXMoXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfWBcbiAgICAgICsgYCR7Y29tcG91bmRNc2d9JHtuZXN0ZWRNc2d9YCxcbiAgICAyLFxuICApXG59XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBBY2NlcHRzIGEgcGFyc2VyIHN0YXRlIGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4KSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0c1xuICogdG8gNzIpLlxuICpcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBwYXJzZXIncyBzdGF0ZSB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBwcm9kdWNlZCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKFxuICBzdGF0ZSwgcmVzdWx0LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgZm9ybWF0dGVyID0gZm9ybWF0LFxuKSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIHJldHVybiBmb3JtYXR0ZXIocmVzdWx0LmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IGJ5dGUgb2YgdGhlIHN1cHBsaWVkIHN0YXRlLiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIHN0YXRlJ3MgaW5kZXhcbiAqIHdpdGhpbiB0aGUgc3RhdGUncyBkYXRhIHZpZXcuXG4gKlxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oc3RhdGUsIHRhYlNpemUgPSA4KSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgYW55T2YsXG4gIGNoYXIsXG4gIGNoYXJpLFxuICBkaWdpdCxcbiAgZW9mLFxuICBoZXgsXG4gIGxldHRlcixcbiAgbG93ZXIsXG4gIG5vbmVPZixcbiAgb2N0YWwsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBjb25zdGFudCxcbiAgZmFpbCxcbiAgZmFpbEZhdGFsbHksXG4gIGZhaWxVbmV4cGVjdGVkLFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFscGhhVSxcbiAgbGV0dGVyVSxcbiAgbG93ZXJVLFxuICBuZXdsaW5lLFxuICBuZXdsaW5lVSxcbiAgcmVnZXgsXG4gIHNwYWNlLFxuICBzcGFjZVUsXG4gIHNwYWNlcyxcbiAgc3BhY2VzMSxcbiAgc3BhY2VzMVUsXG4gIHNwYWNlc1UsXG4gIHVwcGVyVSxcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlTdHJpbmcsXG4gIHN0cmluZyxcbiAgc3RyaW5naSxcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGJhY2t0cmFjayxcbiAgYm90aEIsXG4gIGNoYWluQixcbiAgY2hvaWNlLFxuICBjaG9pY2VMLFxuICBjb3VudEIsXG4gIGZhbGxiYWNrLFxuICBsZWZ0QixcbiAgbWFueVRpbGxCLFxuICBvcHRpb25hbCxcbiAgcmlnaHRCLFxuICBzZXF1ZW5jZUIsXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBiZXR3ZWVuLFxuICBib3RoLFxuICBjaGFpbixcbiAgam9pbixcbiAgbGVmdCxcbiAgbWFwLFxuICBwaXBlLFxuICByaWdodCxcbiAgc2tpcCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY2hhaW5pbmcnXG5leHBvcnQge1xuICBmb2xsb3dlZEJ5LFxuICBmb2xsb3dlZEJ5TCxcbiAgbG9va0FoZWFkLFxuICBub3RFbXB0eSxcbiAgbm90Rm9sbG93ZWRCeSxcbiAgbm90Rm9sbG93ZWRCeUwsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY29uZGl0aW9uYWwnXG5leHBvcnQge1xuICBiYWNrTGFiZWwsXG4gIGxhYmVsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL21lc3NhZ2UnXG5leHBvcnQge1xuICBhc3NvY2wsXG4gIGFzc29jbDEsXG4gIGFzc29jcixcbiAgYXNzb2NyMSxcbiAgYmxvY2ssXG4gIGNvdW50LFxuICBtYW55LFxuICBtYW55MSxcbiAgbWFueVRpbGwsXG4gIHNlcEJ5LFxuICBzZXBCeTEsXG4gIHNlcEVuZEJ5LFxuICBzZXBFbmRCeTEsXG4gIHNlcXVlbmNlLFxuICBza2lwTWFueSxcbiAgc2tpcE1hbnkxLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBlcnJvcixcbiAgZmFpbHVyZSxcbiAgZmF0YWwsXG4gIG1ha2VQYXJzZXIsXG4gIG1heWJlRmF0YWwsXG4gIG9rLFxuICBwYXJzZSxcbiAgcmVzdWx0LFxuICBydW4sXG4gIHN1Y2NlZWRlZCxcbn0gZnJvbSAnLi9jb3JlJ1xuZXhwb3J0IHtcbiAgRXJyb3JUeXBlLFxuICBjb21wb3VuZCxcbiAgZXhwZWN0ZWQsXG4gIGZvcm1hdEVycm9ycyxcbiAgZ2VuZXJpYyxcbiAgZ2V0UG9zaXRpb24sXG4gIG1lcmdlLFxuICBuZXN0ZWQsXG4gIG90aGVyLFxuICB1bmV4cGVjdGVkLFxufSBmcm9tICcuL2Vycm9yJ1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgY29tbWFTZXBhcmF0ZSwgcXVvdGUgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBhbHBoYTogJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbHBoYVU6ICdhIFVuaWNvZGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxuICBhbnlPZjogYXJyYXkgPT4gJ2FueSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBhbnlTdHJpbmc6IG4gPT4gYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2AsXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXG4gIGNoYXJpOiBjID0+IHF1b3RlKGMpLFxuICBkaWdpdDogJ2EgZGlnaXQnLFxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxuICBoZXg6ICdhIGhleGFkZWNpbWFsIGRpZ2l0JyxcbiAgbGV0dGVyOiAnYSBsZXR0ZXInLFxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXG4gIGxvd2VyOiAnYSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbG93ZXJVOiAnYSBVbmljb2RlIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcbiAgbmV3bGluZVU6ICdhIFVuaWNvZGUgbmV3bGluZScsXG4gIG5vbmVPZjogYXJyYXkgPT4gJ25vbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gYGEgY2hhcmFjdGVyIGJldHdlZW4gJyR7c3RhcnR9JyBhbmQgJyR7ZW5kfSdgLFxuICByZWdleDogcmUgPT4gYGEgc3RyaW5nIG1hdGNoaW5nICR7cmV9YCxcbiAgc2F0aXNmeTogZm4gPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBmbi5uYW1lLmxlbmd0aCA/IGZuLm5hbWUgOiAnPGFub255bW91cz4nXG4gICAgcmV0dXJuIGBhIGNoYXJhY3RlciB0aGF0IHNhdGlzZmllcyBmdW5jdGlvbiAnJHtuYW1lfSdgXG4gIH0sXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzVTogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzdHJpbmc6IHN0ciA9PiBxdW90ZShzdHIpLFxuICBzdHJpbmdpOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXBwZXJVOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55T2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55T2YoYXJyYXkpKSxcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBjaGFyaTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJpKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsZXR0ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxldHRlclUpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzYXRpc2Z5OiBmbiA9PiBleHBlY3RlZChzdHJpbmdzLnNhdGlzZnkoZm4pKSxcbiAgc3BhY2U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2UpLFxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcbiAgc3BhY2VzMTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxKSxcbiAgc3BhY2VzVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXNVKSxcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxuICBzcGFjZVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VVKSxcbiAgc3RyaW5nOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmcoc3RyKSksXG4gIHN0cmluZ2k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ2koc3RyKSksXG4gIHVwcGVyOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyKSxcbiAgdXBwZXJVOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyVSksXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBDaGFyUGFyc2VyID0gZm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGZuKG5leHQpID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVXBvbiBmYWlsdXJlLCB0aGlzIHBhcnNlciBkb2VzIG5vdFxuICogY29uc3VtZSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICBhbHdheXMgZmFpbC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihuZXh0ID0+IGMgPT09IG5leHQpKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcihjKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxuICogc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdFxuICogdGhlIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLiBVcG9uIGZhaWx1cmUsXG4gKiB0aGlzIHBhcnNlciBkb2VzIG5vdCBjb25zdW1lIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIGFsd2F5cyBmYWlsLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXJpID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihcbiAgICByZWFkID0+IGMudG9Mb3dlckNhc2UoKSA9PT0gcmVhZC50b0xvd2VyQ2FzZSgpLFxuICApKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcmkoYykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gZm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc2F0aXNmeShmbikpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlclxuICogaXQgaXMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIChpbmNsdXNpdmUpLiBJZlxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXG4gKiB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcbiAqIG5vdCwgdGhlIGZ1bGwgc3RyaW5ncyBhcmUgY29tcGFyZWQgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXIsIHdoaWNoXG4gKiBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvci5cbiAqXG4gKiBcIkJldHdlZW5cIiBpcyBkZWZpbmVkIGFjY29yZGluZyB0byBjb2RlIHBvaW50cy4gVGhpcyBpcyBmaW5lIGluIG1vc3RcbiAqIGNhc2VzLCBidXQgaXQgY2FuIGdldCB3ZWlyZCB3aXRoIGhpZ2hlciBjb2RlIHBvaW50cy4gRm9yIGV4YW1wbGUsXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxuICogVGhlIGBoYCB3b3VsZCBpbnN0ZWFkIGJlIHRoZSBQbGFuY2sncyBDb25zdGFudCBjaGFyYWN0ZXIsIHdoaWNoIGlzIGluXG4gKiBhIGNvbXBsZXRlbHkgZGlmZmVyZW50IHBhcnQgb2YgdGhlIFVuaWNvZGUgc3BlY3RydW0gYW5kIHRoZXJlZm9yZSBpc1xuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZVxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gc3RhcnQgJiYgYyA8PSBlbmRcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5yYW5nZShzdGFydCwgZW5kKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICovXG5leHBvcnQgY29uc3QgYW55ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSwgZXhwZWN0ZWRzLmFueSlcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxuICogQ29uc3VtZXMgbm90aGluZyBvbiBlaXRoZXIgc3VjY2VzcyBvciBmYWlsdXJlLlxuICovXG5leHBvcnQgY29uc3QgZW9mID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICA/IG9rKHN0YXRlLCBudWxsKSA6IGVycm9yKHN0YXRlLCBleHBlY3RlZHMuZW9mKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaFxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXG4gKiBpZ25vcmVkKS4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjaGFycyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5XG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYVxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueU9mID0gY2hhcnMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5hbnlPZihhcnIpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaFxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXG4gKiBpZ25vcmVkKS4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzICpub3QqIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZVxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjaGFycyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5XG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGFcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIG5vdFxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9uZU9mID0gY2hhcnMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5ub25lT2YoYXJyKSkgOiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBkaWdpdC4gTm90ZSB0aGF0IHRoaXMgaXMgbm90IGEgVW5pY29kZSBkZWNpbWFsIGRpZ2l0OyBmb3JcbiAqIHRoYXQsIHVzZSBgcmVnZXgoL1xccHtOZH0vKWAuIFRoaXMgcGFyc2VyIHN1Y2NlZWRzIG9ubHkgZm9yIHRoZVxuICogbGl0ZXJhbCBjaGFyYWN0ZXJzIGAwLTlgLlxuICovXG5leHBvcnQgY29uc3QgZGlnaXQgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuZGlnaXQpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgaGV4YWRlY2ltYWwgZGlnaXQuIFRoaXMgcGFyc2VyIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhleCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuaGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc3J1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm9jdGFsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVyczsgYHVsZXR0ZXJgXG4gKiBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJXG4gKiBjaGFyYWN0ZXJzOyBgdWFscGhhYCBpcyBhIFVuaWNvZGUgYWxwaGFudW1lcmljIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnVwcGVyKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxvd2VyY2FzZSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7XG4gKiBgdWxvd2VyYCBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmxvd2VyKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgbWFrZVBhcnNlciwgb2sgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGdlbmVyaWMsIHVuZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWRcbiAqIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCBiZSB0aGUgbmV3IHBhcnNlcidzIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0geCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IG9rKHN0YXRlLCB4KSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiBnZW5lcmljIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWwgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT5cbiAgZXJyb3Ioc3RhdGUsIGdlbmVyaWMobWVzc2FnZSkpKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uIFRoaXMgc2lnbmlmaWVzIGFcbiAqIGZhdGFsIGVycm9yLCBvbmUgdGhhdCBjYW5ub3QgYmUgcmVjb3ZlcmVkIGZyb20gd2l0aG91dCBiYWNrdHJhY2tpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgZmF0YWxseSB3aXRoIHRoZVxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsRmF0YWxseSA9IG1lc3NhZ2UgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PlxuICBmYXRhbChzdGF0ZSwgZ2VuZXJpYyhtZXNzYWdlKSkpXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgdW5leHBlY3RlZFxuICogICAgIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWxVbmV4cGVjdGVkID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+XG4gIGVycm9yKHN0YXRlLCB1bmV4cGVjdGVkKG1lc3NhZ2UpKSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXNcbiAqIGl0IGFzIGZhciBhcyBpdCBjYW4gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKlxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xuICogaWdub3JlZCBpbiB0aGF0IG9ubHkgdGhlIGZpcnN0IG1hdGNoIGlzIHByb2Nlc3NlZCBhbmQgcmV0dXJuZWQuIFRoaXNcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuY29uc3QgUmVnZXhQYXJzZXIgPSByZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICByZXR1cm4gbWF0Y2hcbiAgICA/IG9rKHN0YXRlLCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXG4gICAgOiBlcnJvcihzdGF0ZSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxuICogaXMgY29uc3VtZWQgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXG4gKiAgICAgYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICAvLyBGaXJzdCwgY29udmVydCB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBpZiBpdCdzIGEgc3RyaW5nXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggYSBeIGFuY2hvclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgaWYgKHJlYW5jaG9yKSB7XG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gIH1cblxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZWdleCkoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5yZWdleChyZWdleCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZUxldHRlcikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVBbHBoYSkoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxuICogaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBMZXR0ZXIsIFRpdGxlY2FzZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVcHBlcikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy51cHBlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMb3dlcikoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sb3dlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVTcGFjZSkoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gQSBjaGFyYWN0ZXIgaXMgd2hpdGVzcGFjZSBmb3IgdGhlXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgYWxzbyByZWNvZ25pemUgdGhlIHR3by1jaGFyYWN0ZXIgY29tYmluYXRpb24gYFxcclxcbmBcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVc3BhY2UpKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2VVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlcyA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbbmV4dCwgX10gPSBSZWdleFBhcnNlcihyZVNwYWNlcykoc3RhdGUpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShzdGF0ZSlcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbFxuICogb25seSBmYWlsIGlmIHRoZXJlIGlzIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT25cbiAqIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IFJlZ2V4UGFyc2VyKHJlU3BhY2VzMSkoc3RhdGUpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnNwYWNlczEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbCBvbmx5IGZhaWwgaWYgdGhlcmUgaXNcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVVzcGFjZXMxKShzdGF0ZSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgbnVsbCkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2VzMVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICovXG5leHBvcnQgY29uc3QgbmV3bGluZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZU5ld2xpbmUpKHN0YXRlKSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubmV3bGluZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVVuZXdsaW5lKShzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm5ld2xpbmVVKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGVycm9yLCBtYWtlUGFyc2VyLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIG5leHRDaGFycywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCBhIHBhcnRpY3VsYXIgc3RyaW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aFxuICogdG8gYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXG4gKiBgdHJ1ZWAsIHRoZW4gdGhlIHBhcnNlciBzdWNjZWVkcy5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXG4gKiBsZWZ0IGluIHRoZSBpbnB1dC4gSXQgd2lsbCBhbHdheXMgcGFzcyBpZiBgbGVuZ3RoYCBpcyAwLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxuICogICAgIHNob3VsZCByZWFkLlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqL1xuY29uc3QgU3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gb2soc3RhdGUsICcnKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGVycm9yKHN0YXRlKSA6IG9rKHN0YXRlLCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxuICogbXVzdCBiZSBleGFjdCAoaXQgaXMgY2FzZS1zZW5zaXRpdmUpLCBhbmQgYWxsIFVURi04IGNoYXJhY3RlcnMgYXJlXG4gKiByZWNvZ25pemVkIHByb3Blcmx5LlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShzdGF0ZSkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnN0cmluZyhzdHIpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuIEhvd2V2ZXIsIHRoZXJlIGlzIGEgbGltaXRhdGlvbiBiYXNlZCBvbiB0aGVcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxuICogY2Fubm90IGJlIGFzc3VtZWQgdGhhdCAzLSBhbmQgNC1ieXRlIGNoYXJhY3RlcnMgd2lsbCByZWNvZ25pemUgY2FzZS1cbiAqIGluc2Vuc2l0aXZlIGNvdW50ZXJwYXJ0cy5cbiAqXG4gKiBJZiBgc3RyYCBpcyBlbXB0eSwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgc3VjY2VlZC4gSWYgaXQgaXNcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIGNhc2UtaW5zZW5zaXRpdmVseSBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zdHJpbmdpKHN0cikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhlIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQgdGV4dCBhbmQgcmVzdWx0cyBpblxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxuICBjb25zdCB3aWR0aCA9IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4XG4gIHJldHVybiBvayhzdGF0ZSwgdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldyksIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXG4gKiB0aGVtIChhcyBhIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlXG4gKiBub3QgdGhhdCBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbnlTdHJpbmcobikpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5TdGF0ZX0gU3RhdGUgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhblxuICogZW5kaW5nIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogV2hpbGUgdGhpcyB3aWxsIGR1cGxpY2F0ZSBhbnkgdmFsdWUsIGl0J3MgcHJpbWFyaWx5IHVzZWZ1bCBmb3JcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxuICogc2hvdWxkIGdlbmVyYWxseSBiZSBhbiBhcnJheSBvciBvYmplY3QuXG4gKlxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxuICogYWxsb3cgZGVzdHJ1Y3R1cmluZyB0byByZWZlcmVuY2UgYW55IGFuZCBhbGwgcGFydHMgb2YgYSB2YWx1ZSwgYnV0IGl0XG4gKiBkb2VzIG5vdCBoYXZlIGEgc3ludGF4IChsaWtlIHRoZSBgQGAgb3BlcmF0b3IgaW4gbGFuZ3VhZ2VzIGxpa2UgU2NhbGFcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xuICogdGhpcyBmdW5jdGlvbiwgb25lIG9mIHRoZSBjb3BpZXMgY2FuIGJlIHJldGFpbmVkIGFzIGEgd2hvbGUgd2hpbGVcbiAqIHByb3ZpZGluZyBhbm90aGVyIGNvcHkgZm9yIGRlc3RydWN0dXJpbmcuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYFxuICogY29uc3QgW3dob2xlLCBbc3RhdGUsIHZhbHVlXV0gPSBkdXAocGFyc2UocGFyc2VyLCBpbnB1dCkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMge1tbU3RhdGUsIFJlc3VsdF0sIFtTdGF0ZSwgUmVzdWx0XV19IEFuIGFycmF5IGNvbnRhaW5pbmcgdHdvXG4gKiAgICAgY29waWVzIG9mIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGR1cCh2YWx1ZSkge1xuICByZXR1cm4gW3ZhbHVlLCB2YWx1ZV1cbn1cblxuLyoqXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxuICogdGhlIGFycmF5IGlzIGVtcHR5LCB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nOyBpZiB0aGUgYXJyYXlcbiAqIGhhcyBvbmx5IG9uZSBlbGVtZW50LCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIGFycmF5IGhhc1xuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXG4gKiBhcnJheSBpcyBsb25nZXIgdGhhbiB0aGF0LCBhbGwgZWxlbWVudHMgd2lsbCBiZSBjb21tYS1zZXBhcmF0ZWQgd2l0aFxuICogYW4gYWRkaXRpb25hbCAnb3InIGJldHdlZW4gdGhlIGxhc3QgdHdvIGVsZW1lbnRzIChPeGZvcmQgY29tbWFcbiAqIHN0eWxlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtZXNzYWdlcyBUaGUgc3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgam9pbmVkIGludG9cbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbWVzc2FnZXMgam9pbmVkIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xuICBzd2l0Y2ggKG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuICcnXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cbiAgICBjYXNlIDI6IHJldHVybiBtZXNzYWdlcy5qb2luKCcgb3IgJylcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxuICAgICAgY29uc3QgbGFzdCA9IG1zZ3MucG9wKClcbiAgICAgIHJldHVybiBgJHttc2dzLmpvaW4oJywgJyl9LCBvciAke2xhc3R9YFxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==