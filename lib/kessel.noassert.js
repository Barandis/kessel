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
/*! exports provided: formatter, ordFormatter, ordinalChar, ordinalFunction, ordinalNumber, ordinalParser, ordinalString, assertChar, assertFunction, assertGeneratorFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return formatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFormatter", function() { return ordFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalChar", function() { return ordinalChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalFunction", function() { return ordinalFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalNumber", function() { return ordinalNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalParser", function() { return ordinalParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalString", function() { return ordinalString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertChar", function() { return assertChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFunction", function() { return assertFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertGeneratorFunction", function() { return assertGeneratorFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertString", function() { return assertString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertArray", function() { return assertArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStringOrArray", function() { return assertStringOrArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertStringOrRegExp", function() { return assertStringOrRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertNumber", function() { return assertNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertParser", function() { return assertParser; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


const formatter = type => value => `expected ${type}; found ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value)}`;
const charFormatter = formatter('a one-character string');
const fnFormatter = formatter('a function');
const genFormatter = formatter('a generator function');
const strFormatter = formatter('a string');
const arrFormatter = formatter('an array');
const strArrFormatter = formatter('a string or an array of characters');
const strRegFormtter = formatter('a string or a regular expression');
const numFormatter = formatter('a number');
const parserFormatter = formatter('a parser');
const ordFormatter = (type, ord) => value => `expected ${ord} argument to be ${type}; found ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value)}`;
const ordinalChar = ord => ordFormatter('a one-character string', ord);
const ordinalFunction = ord => ordFormatter('a function', ord);
const ordinalNumber = ord => ordFormatter('a number', ord);
const ordinalParser = ord => ordFormatter('a parser', ord);
const ordinalString = ord => ordFormatter('a string', ord);

function failAssert(name, value, formatter) {
  throw new Error(`[${name}]: ${formatter(value)}`);
}

function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(value) !== 1) {
    failAssert(name, value, formatter);
  }
}
function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || _core__WEBPACK_IMPORTED_MODULE_0__["makeParser"].created(value)) {
    failAssert(name, value, formatter);
  }
}
function assertGeneratorFunction(name, value, formatter = genFormatter) {
  if (Object.prototype.toString.call(value) !== '[object GeneratorFunction]') {
    failAssert(name, value, formatter);
  }
}
function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') failAssert(name, value, formatter);
}
function assertArray(name, value, formatter = arrFormatter) {
  if (!Array.isArray(value)) failAssert(name, value, formatter);
}
function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(Array.isArray(value) && value.every(c => typeof c === 'string' && Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(c) === 1) || typeof value === 'string')) {
    failAssert(name, value, formatter);
  }
}
function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  if (typeof value !== 'string' && Object.prototype.toString.call(value) !== '[object RegExp]') {
    failAssert(name, value, formatter);
  }
}
function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') failAssert(name, value, formatter);
}
function assertParser(name, value, formatter = parserFormatter) {
  if (typeof value !== 'function' || !_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"].created(value)) {
    failAssert(name, value, formatter);
  }
}

/***/ }),

/***/ "./src/combinators/alternative.js":
/*!****************************************!*\
  !*** ./src/combinators/alternative.js ***!
  \****************************************/
/*! exports provided: choice, opt, def, attempt, sequenceB, chainB, leftB, rightB, bothB, countB, manyTillB, blockB, pipeB, betweenB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return opt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return sequenceB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return leftB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return rightB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return bothB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return countB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return manyTillB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return blockB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return pipeB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "betweenB", function() { return betweenB; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok,
  Error,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
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

const choice = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  let errors = [];

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
    if (result.status === Ok) return reply;
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, result.errors);
    if (result.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(next, errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, errors);
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

const opt = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return result.status === Fatal ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
});
/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied default
 * value `x`. This parser only fails if its contained parser fails
 * fatally.
 *
 * `def(p, x)` is an optimized implementation of `choice([p,
 * constant(x)])`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */

const def = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return result.status !== Error ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x);
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

const attempt = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));

  if (result.status !== Ok) {
    const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next, result.errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, err, index);
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

const sequenceB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, err, index);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const chainB = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(fn(result1.value)(next1));
  if (result2.status !== Error) return reply2;
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, err, index);
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

const leftB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(next1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next2, result1.value);
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, err, index);
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

const rightB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(next1));
  if (result2.status !== Error) return reply2;
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, err, index);
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

const bothB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(next1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next2, [result1.value, result2.value]);
  const err = index === next2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, err, index);
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

const countB = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === next.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, err, index);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const manyTillB = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  while (true) {
    const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(end(next));
    next = next1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = next2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      const err = index === next2.index ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(next2, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, err, index);
    }

    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const blockB = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  if (false) {}
  const gen = genFn();
  const index = state.index;
  let nextValue;
  let next = state;
  let i = 0;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value);
    /* istanbul ignore else */

    if (false) {}

    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(value(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(nextState, result.errors, index);
    nextValue = result.value;
    i++;
  }
});
/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * If one of the parsers fails non-fatally, the overall parser will
 * backtrack to where the first parser was applied and fail non-fatally.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {...(Parser|function(...*):*)} ps An array of parsers to be
 *     applied one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of the created parser. A single
 *     function must be present and it must be the last parameter; all
 *     other parameters must be parsers.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipeB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = ps.pop();
  /* istanbul ignore else */

  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  for (const p of ps) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, result.errors, index);
    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, fn(...values));
});
/**
 * Creates a parser which applies its pre, content, and post parsers in
 * order and results in the result of its content parser.
 *
 * Note that the content parser `p` is applied before the after parser
 * `post`. This means that the content parser will have an opportunity
 * to patch the "post" content before the post parser does, so take care
 * that the parsers do not overlap in what they match.
 *
 * If any parser fails non-fatally, the `betweenB` parser will backtrack
 * to where `pre` was applied and fail non-fatally.
 *
 * @param {Parser} pre The first parser to apply.
 * @param {Parser} post The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */

const betweenB = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(pre(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next2, result2.errors, index);
  const [reply3, [next3, result3]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(post(next2));
  if (result3.status === Fatal) return reply3;
  if (result3.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next3, result3.errors, index);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next3, result2.value);
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
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
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

const chain = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result1.status !== Ok) return reply1;
  const p2 = fn(result1.value);

  if (false) {}

  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next2.index !== index, next2, result2.errors);
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
 * always(fn(x)))`. This also makes it a more efficient version of
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

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, fn(result.value)) : reply;
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
 * always(x.join('')))`.
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

const join = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v.join(''));
});
/**
 * Creates a parser that applies the supplied parser and discards any
 * successful result while still consuming input. A failure will be
 * propagated without modification.
 *
 * `skip(p)` is an optimized implementation of `chain(p, () =>
 * always(null))`,
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @returns {Parser} A parser that will consume input as its contained
 *     parser does on success, but will produce no result.
 */

const skip = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null) : reply;
});
/**
 * Creates a parser that will run the supplied parser but, on success,
 * result in the supplied value instead.
 *
 * `value(p, x)` is an optimized implemenation of `chain(p, () =>
 * always(x))`.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */

const value = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const [tuple, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x) : tuple;
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

const left = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p2(next1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next2, result1.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next2.index !== index, next2, result2.errors);
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

const right = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(next1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail, and the failure will
 * be fatal if any input had been consumed by either parser.
 *
 * `both(p1, p2)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => always([a, b])))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const both = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p2(next1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next2, [result1.value, result2.value]) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next2.index !== index, next2, result2.errors);
});
/**
 * Creates a parser that applies its parsers in sequence and passes
 * those results to a function of the same arity as the number of
 * parsers to apply. The return value of that function becomes the
 * parser's result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * `pipe(p1, p2, fn)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => always(fn(a, b))))`, `pipe(p1, p2, p3, fn)` is an
 * optimized implementation of `chain(p1, a => chain(p2, b => chain(p3,
 * c => always(fn(a, b, c)))))`, and so on.
 *
 * If the array has one element, the parser becomes equivalent to `map`
 * but less efficient.
 *
 * @param {...(Parser|function(...*):*)} ps An array of parsers to be
 *     applied one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of the created parser. A single
 *     function must be present and it must be the last parameter; all
 *     other parameters must be parsers.
 * @returns {Parser} A parser that will apply its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipe = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = ps.pop();
  /* istanbul ignore else */

  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  for (const p of ps) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, fn(...values));
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

const between = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(pre(state));
  if (result1.status !== Ok) return reply1;
  const [next2, result2] = p(next1);

  if (result2.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next2.index !== index, next2, result2.errors);
  }

  const [next3, result3] = post(next2);
  return result3.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next3, result2.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next3.index !== index, next3, result3.errors);
});
/**
 * Returns the nth element of the result of a parser that produces an
 * array. If the parser fails, that failure will be passed through.
 *
 * `nth(p, n)` is an optimized implementation of `chain(p, x =>
 * always(x[n]))`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */

const nth = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[n]);
});
/**
 * Returns the first element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `first(p)` is an optimized implementation of `chain(p, x =>
 * always(x[0]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */

const first = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('first', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[0]);
});
/**
 * Returns the second element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `second(p)` is an optimized implementation of `chain(p, x =>
 * always(x[1]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */

const second = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('second', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[1]);
});
/**
 * Returns the third element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `third(p)` is an optimized implementation of `chain(p, x =>
 * always(x[2]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */

const third = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('third', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[2]);
});
/**
 * Returns the fourth element of a parser result that is an array. If
 * the parser fails, that failure is passed through.
 *
 * `fourth(p)` is an optimized implementation of `chain(p, x =>
 * always(x[3]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */

const fourth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fourth', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[3]);
});
/**
 * Returns the fifth element of a parser result that is an array. If the
 * parser fails, that failure is passed through.
 *
 * `fifth(p)` is an optimized implementation of `chain(p, x =>
 * always(x[4]))`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */

const fifth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fifth', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const v = result.value;

  if (false) {}

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, v[4]);
});

/***/ }),

/***/ "./src/combinators/conditional.js":
/*!****************************************!*\
  !*** ./src/combinators/conditional.js ***!
  \****************************************/
/*! exports provided: lookAhead, notEmpty, notEmptyM, followedBy, followedByM, notFollowedBy, notFollowedByM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return lookAhead; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return notEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notEmptyM", function() { return notEmptyM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followedBy", function() { return followedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followedByM", function() { return followedByM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return notFollowedBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFollowedByM", function() { return notFollowedByM; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
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

const lookAhead = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, result.errors, index);
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

const notEmpty = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return result.status !== Ok || next.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next);
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
 * `notEmptyM(p, msg)` is an optimized implementation of
 * `label(notEmpty(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` succeeds
 *     without consuming input.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */

const notEmptyM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return result.status !== Ok || next.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
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

const followedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, undefined, index);
});
/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser state. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * `followedByM(p, msg)` is an optimized implementation of
 * `label(followedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const followedByM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index);
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

const notFollowedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}
  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, undefined, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null, index);
});
/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser state. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * `notFollowedByM(p, msg)` is an optimized implementation of
 * `label(notFollowedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p`
 *    succeeds.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const notFollowedByM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [next, result] = p(state);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null, index);
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
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




const {
  Ok
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
const {
  Nested
} = kessel_error__WEBPACK_IMPORTED_MODULE_2__["ErrorType"];
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


const label = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return index === next.index ? pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : reply;
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

const backLabel = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));

  if (result.status === Ok) {
    return index === next.index ? pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : reply;
  } else if (index === next.index) {
    if (result.errors.length === 1 && result.errors[0].type === Nested) {
      const {
        state,
        errors
      } = result.errors[0];
      return pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, state, errors));
    }

    return pass(next, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(state, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, next, result.errors));
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: sequence, block, many, many1, skipMany, skipMany1, sepBy, sepBy1, sepEndBy, sepEndBy1, repeat, manyTill, assocL, assoc1L, assocR, assoc1R */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return manyTill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocL", function() { return assocL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assoc1L", function() { return assoc1L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assocR", function() { return assocR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assoc1R", function() { return assoc1R; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT




/** @typedef {import('kessel/core').Parser} Parser */

const {
  Ok,
  Error,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];

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


const sequence = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const values = [];
  const index = state.index;
  let next = state;

  for (const p of ps) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const block = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  if (false) {}
  const gen = genFn();
  const index = state.index;
  let nextValue;
  let next = state;
  let i = 0;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value);
    /* istanbul ignore else */

    if (false) {}

    const [nextState, result] = value(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    nextValue = result.value;
    i++;
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

const many = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many', p);
  const values = [];
  let next = state;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const many1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many1', p);
  const [tuple, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return tuple;
  let next = nextState;
  const values = [result.value];

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const skipMany = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany', p);
  let next = state;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
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

const skipMany1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany1', p);
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  let next = nextState;

  while (true) {
    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (next.index >= next.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
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

const sepBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepBy'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values, index);
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

const sepBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepBy1'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values, index);
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

const sepEndBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, []);
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepEndBy'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...next,
    index
  });
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(sepNext, values);
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

const sepEndBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  let index = state.index;
  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let next = nextState;

  while (true) {
    index = next.index;
    const [reply1, [nextState1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(next));
    next = nextState1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [nextState2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextState2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (next.index === index) throw new TypeError(loopMessage('sepEndBy1'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...next,
    index
  });
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(sepNext, values);
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

const repeat = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [nextState, result] = p(next);
    next = nextState;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next.index !== index, next, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
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

const manyTill = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const index = state.index;
  const values = [];
  let next = state;

  while (true) {
    const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(end(next));
    next = next1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = next2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(next.index !== index, next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors));
    }

    if (result2.value !== null) values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, values);
});

function opFormatter(ord) {
  return value => `expected ${ord} op parser to return a function; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(value)}`;
}
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


const assocL = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;
  let i = 0;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;

    if (false) {}

    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value, index);
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

const assoc1L = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;
  let i = 0;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;

    if (false) {}

    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value, index);
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

const assocR = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;
  let i = 0;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;

    if (false) {}

    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value, index);
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

const assoc1R = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;
  let i = 0;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;

    if (false) {}

    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, value, index);
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: Status, makeState, makeParser, ok, error, fatal, maybeFatal, parse, status, succeeded, success, failure, run */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "status", function() { return status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "succeeded", function() { return succeeded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "success", function() { return success; });
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
 * Creates a new `Parser`. This factory simply takes a parser function
 * and returns the same parser function; the purpose of the factory is
 * to track parsers that it has created.
 *
 * If assertions are enabled, this will mean that any parser combinator
 * will assert that the parser that is passed to it was created by this
 * factory function. Any other will cause an exception to be thrown,
 * even if it accepts the right kind of argument and returns the proper
 * return value. If assertions are not enabled, this check will not be
 * done.
 *
 * Every parser in this library is created with `makeParser`, so any of
 * those or any parser composed from those will work automatically.
 *
 * @param {Parser} fn A parser function.
 * @returns {Parser} The same parser function.
 */

const makeParser = Object(_util__WEBPACK_IMPORTED_MODULE_1__["track"])(fn => fn);
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
 * Returns the status of the given reply.
 *
 * @param {[State, Result]} reply The state/result value returned by
 *     `parse`.
 * @returns {Status} The status of the given reply.
 */

function status(reply) {
  return reply[1].status;
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

function success(reply) {
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
  const unknownMsg = errors.length === 0 ? `${sp}Unknown error(s)\n` : '';
  const eofMsg = index >= view.byteLength ? `${sp}Note: failure occurred at the end of input\n` : '';
  return ensureNewlines(`${position}\n\n${display}\n${unexpMsg}${expMsg}${genericMsg}${unknownMsg}` + `${eofMsg}${compoundMsg}${nestedMsg}`, 2);
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
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyM, upper, always, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, attempt, betweenB, blockB, bothB, chainB, choice, countB, def, leftB, manyTillB, opt, pipeB, rightB, sequenceB, between, both, chain, fifth, first, fourth, join, left, map, nth, pipe, right, second, skip, third, value, followedBy, followedByM, lookAhead, notEmpty, notEmptyM, notFollowedBy, notFollowedByM, backLabel, label, assoc1L, assoc1R, assocL, assocR, block, many, many1, manyTill, repeat, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Status, error, failure, fatal, makeParser, maybeFatal, ok, parse, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "satisfyM", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["satisfyM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upper", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["upper"]; });

/* harmony import */ var _parsers_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/misc */ "./src/parsers/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["always"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["attempt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["betweenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["countB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["pipeB"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedByM", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["followedByM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["lookAhead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmptyM", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notEmptyM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedByM", function() { return _combinators_conditional__WEBPACK_IMPORTED_MODULE_6__["notFollowedByM"]; });

/* harmony import */ var _combinators_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/message */ "./src/combinators/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "backLabel", function() { return _combinators_message__WEBPACK_IMPORTED_MODULE_7__["backLabel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _combinators_message__WEBPACK_IMPORTED_MODULE_7__["label"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1L", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assoc1L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1R", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assoc1R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocL", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocR", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["manyTill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["repeat"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["run"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "succeeded", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["succeeded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "success", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["success"]; });

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
/*! exports provided: char, chari, satisfy, satisfyM, range, any, eof, anyOf, noneOf, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chari", function() { return chari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return satisfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfyM", function() { return satisfyM; });
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
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
/* harmony import */ var kessel_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! kessel/messages */ "./src/messages.js");
/* harmony import */ var kessel_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kessel/util */ "./src/util.js");
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
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(next => c === next)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].char(c));
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
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(read => c.toLowerCase() === read.toLowerCase())(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].chari(c));
});
/**
 * Creates a parser that reads a single character and passes it to the
 * provided function. If the function returns `true`, this parser
 * succeeds with that character as the result. If the function returns
 * `false`, this parser fails and consumes no input.
 *
 * This parser cannot determine the cause for an error since it's not
 * feasible to have it analyze the function to see what it expects to
 * match, so no error message is provided on failure. Use
 * `label(satisfy(fn), msg)` or the equivalent `satisfyL(fn, msg)` to
 * add an appropriate error message.
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
  return CharParser(fn)(state);
});
/**
 * Creates a parser that reads a single character and passes it to the
 * provided function. If the function returns `true`, this parser
 * succeeds with that character as the result. If the function returns
 * `false`, this parser fails and consumes no input and signals an error
 * with the provided message.
 *
 * `satisfyM(fn, message)` is an optimized implementation of
 * `label(satisfy(fn), message)`.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @param {string} message The error message to use if the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfyM = (fn, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(message));
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

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].range(start, end));
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].any);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
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
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].eof);
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
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].anyOf(arr));
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
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(state, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= '0' && c <= '7';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  const fn = c => c >= 'a' && c <= 'z';

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(state));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].lower);
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: always, fail, failFatally, failUnexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
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

const always = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, x));
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
  if (length < 1) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(state, '');
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
/*! exports provided: encoder, decoder, range, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate, track, ordinal, stringify, articlify */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlify", function() { return articlify; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core.js");
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
/**
 * Augments a factory function to be able to determine whether it
 * created an arbitrary object. The factory function is assigned an
 * additional property (by default named `created`, can be changed by
 * passing in the `prop` argument) which is a function that takes an
 * object and returns `true` if the factory created it or `false` if it
 * did not.
 *
 * @param {function} fn The factory function that will be augmented with
 *     the new property.
 * @param {string|symbol} [prop='created'] The property that will be
 *     added to the factory function.
 * @returns {function} The augmented factory function.
 */

function track(fn, prop = 'created') {
  const tracked = new WeakSet();
  return Object.defineProperty((...args) => {
    const created = fn(...args);
    tracked.add(created);
    return created;
  }, prop, {
    value: tracked.has.bind(tracked)
  });
}
/**
 * Converts a number to its string ordinal form (i.e., `1` becomes
 * `'1st'`, `1729` becomes `'1729th'`, etc.)
 *
 * @param {number} n The number to convert into an ordinal.
 * @returns {string} The same number in its ordinal form.
 */

function ordinal(n) {
  var _ref, _suffixes;

  const suffixes = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + ((_ref = (_suffixes = suffixes[(v - 20) % 10]) !== null && _suffixes !== void 0 ? _suffixes : suffixes[v]) !== null && _ref !== void 0 ? _ref : suffixes[0]);
}
/**
 * Returns a reasonable string representation of a value. This will most
 * often be the output from `JSON.stringify()`, though representations
 * are also included for types that function doesn't support.
 *
 * @param {*} value The value to turn into a string.
 * @returns {string} A reasonable string representation of the value.
 */

function stringify(value) {
  if (value === undefined) return 'undefined';

  if (typeof value === 'function') {
    return _core__WEBPACK_IMPORTED_MODULE_0__["makeParser"].created(value) ? 'parser' : 'function';
  }

  if (typeof value === 'symbol') return `Symbol(${value.description})`;
  return JSON.stringify(value);
}
/**
 * Adds the appropriate indefinite article ('a' or 'an') to a word based
 * on its first letter.
 *
 * @param {string} str The string to prepend an article to.
 * @returns {string} The string with the prepended article.
 */

function articlify(str) {
  return 'aeiouAEIOU'.includes(str[0]) ? `an ${str}` : `a ${str}`;
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsImdlbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsImFyckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwicGFyc2VyRm9ybWF0dGVyIiwib3JkRm9ybWF0dGVyIiwib3JkIiwib3JkaW5hbENoYXIiLCJvcmRpbmFsRnVuY3Rpb24iLCJvcmRpbmFsTnVtYmVyIiwib3JkaW5hbFBhcnNlciIsIm9yZGluYWxTdHJpbmciLCJmYWlsQXNzZXJ0IiwibmFtZSIsIkVycm9yIiwiYXNzZXJ0Q2hhciIsImNoYXJMZW5ndGgiLCJhc3NlcnRGdW5jdGlvbiIsIm1ha2VQYXJzZXIiLCJjcmVhdGVkIiwiYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhc3NlcnRTdHJpbmciLCJhc3NlcnRBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImFzc2VydFN0cmluZ09yQXJyYXkiLCJldmVyeSIsImMiLCJhc3NlcnRTdHJpbmdPclJlZ0V4cCIsImFzc2VydE51bWJlciIsImFzc2VydFBhcnNlciIsIk9rIiwiRmF0YWwiLCJTdGF0dXMiLCJjaG9pY2UiLCJwcyIsInN0YXRlIiwiQVNTRVJUIiwiZXJyb3JzIiwicCIsInJlcGx5IiwibmV4dCIsInJlc3VsdCIsImR1cCIsInN0YXR1cyIsIm1lcmdlIiwiZmF0YWwiLCJlcnJvciIsIm9wdCIsIm9rIiwiZGVmIiwieCIsImF0dGVtcHQiLCJpbmRleCIsImVyciIsIm5lc3RlZCIsInNlcXVlbmNlQiIsInZhbHVlcyIsIm5leHRTdGF0ZSIsInB1c2giLCJjaGFpbkIiLCJmbiIsInJlcGx5MSIsIm5leHQxIiwicmVzdWx0MSIsInJlcGx5MiIsIm5leHQyIiwicmVzdWx0MiIsImxlZnRCIiwicDEiLCJwMiIsInJpZ2h0QiIsImJvdGhCIiwiY291bnRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImJsb2NrQiIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiaSIsImRvbmUiLCJwaXBlQiIsInBvcCIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInJlcGx5MyIsIm5leHQzIiwicmVzdWx0MyIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJ2Iiwic2tpcCIsInR1cGxlIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsInBpcGUiLCJiZXR3ZWVuIiwibnRoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibG9va0FoZWFkIiwibm90RW1wdHkiLCJub3RFbXB0eU0iLCJtc2ciLCJleHBlY3RlZCIsImZvbGxvd2VkQnkiLCJ1bmRlZmluZWQiLCJmb2xsb3dlZEJ5TSIsIm5vdEZvbGxvd2VkQnkiLCJub3RGb2xsb3dlZEJ5TSIsIk5lc3RlZCIsIkVycm9yVHlwZSIsInBhc3MiLCJsYWJlbCIsImJhY2tMYWJlbCIsImxlbmd0aCIsImNvbXBvdW5kIiwibG9vcE1lc3NhZ2UiLCJzZXF1ZW5jZSIsImJsb2NrIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwTWFueSIsInNraXBNYW55MSIsInNlcEJ5Iiwic2VwIiwibmV4dFN0YXRlMSIsIm5leHRTdGF0ZTIiLCJUeXBlRXJyb3IiLCJzZXBCeTEiLCJzZXBFbmRCeSIsInNlcE5leHQiLCJzZXBFbmRCeTEiLCJyZXBlYXQiLCJtYW55VGlsbCIsIm9wRm9ybWF0dGVyIiwiYXNzb2NMIiwib3AiLCJvcHMiLCJyZXBseW9wIiwibmV4dG9wIiwicmVzdWx0b3AiLCJyZXBseXAiLCJuZXh0cCIsInJlc3VsdHAiLCJhc3NvYzFMIiwiYXNzb2NSIiwiYXNzb2MxUiIsImlzVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIlN5bWJvbCIsIm1ha2VTdGF0ZSIsImlucHV0IiwibWVzc2FnZSIsInN0cmluZ1RvVmlldyIsIkRhdGFWaWV3IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJ0cmFjayIsInRlc3QiLCJwYXJzZSIsInBhcnNlciIsInN1Y2NlZWRlZCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiZm9ybWF0RXJyb3JzIiwicnVuIiwidGFiIiwiemVyb1dpZHRoIiwiRXhwZWN0ZWQiLCJVbmV4cGVjdGVkIiwiR2VuZXJpYyIsIkNvbXBvdW5kIiwiT3RoZXIiLCJ1bmV4cGVjdGVkIiwiZ2VuZXJpYyIsIm90aGVyIiwiZXJyb3JzMSIsImVycm9yczIiLCJpc05ld2xpbmUiLCJieXRlIiwiZ2V0VWludDgiLCJuZXdsaW5lIiwibmV4dEJ5dGUiLCJ0aGlyZEJ5dGUiLCJuZXh0Q2hhcldpZHRoIiwiZ2V0TGluZUluZGV4ZXMiLCJzdGFydCIsImxpbmVubyIsImdldENoYXJJbmRleCIsImNoYXJJbmRleCIsImJ5dGVJbmRleCIsInRhYmlmeSIsImxpbmUiLCJ0YWJTaXplIiwidGFiSW5kZXhlcyIsInRhYk1hdGNoIiwiZXhlYyIsIm9mZnNldCIsInByZUluZGV4T2Zmc2V0IiwidGFiSW5kZXgiLCJhY3R1YWxJbmRleCIsInNwYWNlQ291bnQiLCJzdWJzdHJpbmciLCJjb2xJbmRleCIsImdldENvbE51bWJlciIsIm1hdGNoZXMiLCJtYXRjaCIsImNvbG5vIiwic2hvdyIsIm1heFdpZHRoIiwiaW5kZW50Iiwic3AiLCJuZXdDb2xubyIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJmb3JtYXROZXN0ZWQiLCJuZXN0ZWRzIiwibmVzdGVkTXNncyIsImZvcm1hdCIsImVuc3VyZU5ld2xpbmVzIiwidGV4dCIsImNvdW50IiwicmF3TGluZSIsInZpZXdUb1N0cmluZyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZpbmQiLCJjb21tYVNlcGFyYXRlIiwiZmlsdGVyIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJ1bmtub3duTXNnIiwiZW9mTXNnIiwiZ2V0UG9zaXRpb24iLCJjb2x1bW4iLCJzdHJpbmdzIiwiYWxwaGEiLCJhbHBoYVUiLCJhbnkiLCJhbnlPZiIsImFycmF5IiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhcmkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZU9mIiwib2N0YWwiLCJyZWdleCIsInJlIiwic3BhY2UiLCJzcGFjZXMiLCJzcGFjZXMxIiwic3BhY2VzVSIsInNwYWNlczFVIiwic3BhY2VVIiwic3RyaW5nIiwic3RyIiwic3RyaW5naSIsInVwcGVyIiwidXBwZXJVIiwiZXhwZWN0ZWRzIiwiQ2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJyZWFkIiwidG9Mb3dlckNhc2UiLCJzYXRpc2Z5Iiwic2F0aXNmeU0iLCJjaGFycyIsImFyciIsImluY2x1ZGVzIiwiYWx3YXlzIiwiZmFpbCIsImZhaWxGYXRhbGx5IiwiZmFpbFVuZXhwZWN0ZWQiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJzbGljZSIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFyZ3MiLCJhZGQiLCJoYXMiLCJiaW5kIiwi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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0FBRCxDQUF6QixJQUFpQyxNQUFLQSxHQUFJLEVBQTFDLEdBQStDLEtBQUlBLEdBQUksRUFBOUQ7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5ub2Fzc2VydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBtYWtlUGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xyXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBzdHJpbmdpZnkgfSBmcm9tICcuL3V0aWwnXHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PlxyXG4gIHZhbHVlID0+IGBleHBlY3RlZCAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxyXG5cclxuY29uc3QgY2hhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycpXHJcbmNvbnN0IGZuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGZ1bmN0aW9uJylcclxuY29uc3QgZ2VuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicpXHJcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxyXG5jb25zdCBhcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2FuIGFycmF5JylcclxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcclxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcclxuY29uc3QgbnVtRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG51bWJlcicpXHJcbmNvbnN0IHBhcnNlckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZEZvcm1hdHRlciA9ICh0eXBlLCBvcmQpID0+IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYWxDaGFyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZClcclxuZXhwb3J0IGNvbnN0IG9yZGluYWxGdW5jdGlvbiA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsTnVtYmVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBudW1iZXInLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsUGFyc2VyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBwYXJzZXInLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsU3RyaW5nID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBzdHJpbmcnLCBvcmQpXHJcblxyXG5mdW5jdGlvbiBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpIHtcclxuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcclxuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZm5Gb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IG1ha2VQYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcclxuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZ2VuRm9ybWF0dGVyKSB7XHJcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcclxuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gYXJyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKCEoXHJcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxyXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcclxuICAgIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcclxuICApKSB7XHJcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JSZWdFeHAobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0clJlZ0Zvcm10dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcclxuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XHJcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8ICFtYWtlUGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XHJcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydEZ1bmN0aW9uLFxyXG4gIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uLFxyXG4gIGFzc2VydE51bWJlcixcclxuICBhc3NlcnRQYXJzZXIsXHJcbiAgb3JkaW5hbEZ1bmN0aW9uLFxyXG4gIG9yZGluYWxOdW1iZXIsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuaW1wb3J0IHsgZHVwLCBvcmRpbmFsLCByYW5nZSwgc3RyaW5naWZ5IH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhbHRlcm5hdGl2ZXMuIEVhY2ggb2YgdGhlIHN1cHBsaWVkXHJcbiAqIHBhcnNlcnMgaXMgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlci4gV2hlbiB0aGUgZmlyc3QgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzLCBvciB0aGUgZmlyc3QgcGFyc2VyIGZhaWxzIHdoaWxlIGNvbnN1bWluZyBpbnB1dCwgZXhlY3V0aW9uXHJcbiAqIGlzIHN0b3BwZWQgYW5kIHRoZSBzdGF0ZSBmcm9tIHRoYXQgbGFzdCBwYXJzZXIgaXMgcGFzc2VkIHRocm91Z2guIFRoZVxyXG4gKiBzYW1lIGhhcHBlbnMgaWYgYWxsIHBhcnNlcnMgYXJlIGFwcGxpZWQgd2l0aG91dCBhbnkgb2YgdGhlbVxyXG4gKiBzdWNjZWVkaW5nLlxyXG4gKlxyXG4gKiBPbiBmYWlsdXJlLCBhbGwgb2YgdGhlIGBFeHBlY3RlZGAgZXJyb3JzIGZyb20gYW55IG9mIHRoZSBjb250YWluZWRcclxuICogcGFyc2VycyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoaXMgcGFyc2VyJ3MgZXJyb3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYXBwbHkgdG8gdGhlIGlucHV0LCBvbmUgYXQgYVxyXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcclxuICogICAgIG9uZSBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaG9pY2UgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgZm9yIChjb25zdCBbaSwgcF0gb2YgcHMuZW50cmllcygpKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignY2hvaWNlJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlcnJvcnMgPSBbXVxyXG5cclxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgICBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChuZXh0LCBlcnJvcnMpXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlclxyXG4gKiBpdCBmYWlscyBvciBub3QgYnV0IG9ubHkgY29uc3VtaW5nIGlucHV0IGlmIGl0IHN1Y2NlZWRzLiBUaGlzIHBhcnNlclxyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIEl0J3MgdXNlZCB0b1xyXG4gKiBpbXBsZW1lbnQgc2tpcHBpbmcgb3ZlciBzb21lIG9wdGlvbmFsIHRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgZm9yIG9wdGlvbmFsIGNvbnRlbnQgdG8gYmUgYXBwbGllZCBhbmRcclxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXHJcbiAqIEByZXR1cm4ge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdCB1bmxlc3MgaXRzXHJcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seVxyXG4gKiAgICAgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3B0ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignb3B0JywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwgPyByZXBseSA6IG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xyXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHRcclxuICogdmFsdWUgYHhgLiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzXHJcbiAqIGZhdGFsbHkuXHJcbiAqXHJcbiAqIGBkZWYocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hvaWNlKFtwLFxyXG4gKiBjb25zdGFudCh4KV0pYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3NcclxuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cclxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXHJcbiAqICAgICBzdXBwbGllZCBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcclxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWYgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBFcnJvciA/IHJlcGx5IDogb2sobmV4dCwgeClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgdHJhbnNmb3JtcyBhIGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbFxyXG4gKiBmYWlsdXJlLiBJdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXI7IGlmIHRoYXQgcGFyc2VyIGZhaWxzXHJcbiAqIGZhdGFsbHksIHRoZSBzdGF0ZSBpcyBzZXQgYmFjayB0byB3aGF0IGl0IHdhcyAqYmVmb3JlKiB0aGF0IHBhcnNlciBpc1xyXG4gKiBhcHBsaWVkIGFuZCB0aGUgZmF0YWwgZmFpbHVyZSBpcyByZXR1cm5lZCBhcyBhIG5vbi1mYXRhbCBmYWlsdXJlLiBJZlxyXG4gKiB0aGUgcGFyc2VyIGhhcyBhbnkgb3RoZXIgcmVzdWx0LCBpdCBpcyBwYXNzZWQgdGhyb3VnaCB3aXRob3V0XHJcbiAqIG1vZGlmaWNhdGlvbi5cclxuICpcclxuICogVGhpcyBwYXJzZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGNhdXNlIGEgbm9uLWJhY2t0cmFja2luZyBwYXJzZXIgdG9cclxuICogYmFja3RyYWNrIHVwb24gZmFpbHVyZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSBmYXRhbCBmYWlsdXJlcyB3aWxsIGJlIGNvbnZlcnRlZFxyXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxyXG4gKiAgICAgcGFyc2VyIGZhaWxzIGZhdGFsbHksIHRoaXMgb25lIHdpbGwgaW5zdGVhZCBmYWlsIG5vbi1mYXRhbGx5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gIH1cclxuICByZXR1cm4gcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xyXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXHJcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XHJcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc29cclxuICogZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQuIEFcclxuICogZmF0YWwgZXJyb3IgZnJvbSBvbmUgb2YgdGhlIGNvbnRhaW5lZCBwYXJzZXJzIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuXHJcbiAqIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgc2VxdWVuY2VCKHBzKWAgaXMgbm90IHRoZSBzYW1lIGFzXHJcbiAqIGBiYWNrdHJhY2soc2VxdWVuY2UocHMpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mXHJcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxyXG4gKiBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VCID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGZvciAoY29uc3QgW2ksIHBdIG9mIHBzLmVudHJpZXMoKSkge1xyXG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcXVlbmNlQicsIHAsIG9yZGluYWxQYXJzZXIob3JkaW5hbChpICsgMSkpKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQuaW5kZXhcclxuICAgICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgICA6IG5lc3RlZChuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgICByZXR1cm4gZXJyb3IobmV4dCwgZXJyLCBpbmRleClcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSBzdGF0ZSBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkXHJcbiAqIHBhcnNlciB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZVxyXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cclxuICpcclxuICogSWYgdGhlIHNlY29uZCBwYXJzZXIgKHRoZSBvbmUgcHJvdmlkZWQgYnkgYGZuYCkgZmFpbHMgbm9uLWZhdGFsbHksXHJcbiAqIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvXHJcbiAqIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGxcclxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgY2hhaW5CKHAsIGZuKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2soY2hhaW4ocCxcclxuICogZm4pKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cclxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcclxuICogICAgIHJldHVybnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRGdW5jdGlvbignY2hhaW5CJywgZm4sIG9yZGluYWxGdW5jdGlvbignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgPyByZXN1bHQyLmVycm9yc1xyXG4gICAgOiBuZXN0ZWQobmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcclxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXHJcbiAqXHJcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXHJcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcclxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcclxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgbGVmdEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2sobGVmdChwMSxcclxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbGVmdEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKG5leHQyLCByZXN1bHQxLnZhbHVlKVxyXG5cclxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgID8gcmVzdWx0Mi5lcnJvcnNcclxuICAgIDogbmVzdGVkKG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxyXG4gKlxyXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxyXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXHJcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYHJpZ2h0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhyaWdodChwMSxcclxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHAyLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gRXJyb3IpIHJldHVybiByZXBseTJcclxuXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cclxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXHJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cclxuICpcclxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcclxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxyXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGBib3RoQihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhib3RoKHAxLFxyXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm90aEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYm90aEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JvdGhCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKG5leHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXHJcblxyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgPyByZXN1bHQyLmVycm9yc1xyXG4gICAgOiBuZXN0ZWQobmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcclxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxyXG4gKiBmYWlscywgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbDsgaWYgdGhhdCBmYWlsdXJlIGlzIGZhdGFsLCB0aGVcclxuICogb3ZlcmFsbCBmYWlsdXJlIHdpbGwgYWxzbyBiZSBmYXRhbC5cclxuICpcclxuICogVGhlIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgdGhlIHVuZGVybHlpbmcgZXJyb3Igd2FzXHJcbiAqIG5vbi1mYXRhbCwgZXZlbiBpZiBpbnB1dCB3YXMgY29uc3VtZWQgKGJhY2t0cmFja2luZyB3aWxsIGhhcHBlbiBpblxyXG4gKiB0aGlzIGNhc2UpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBhcHBseSB0aGUgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxyXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50QiA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignY291bnRCJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnROdW1iZXIoJ2NvdW50QicsIG4sIG9yZGluYWxOdW1iZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICAgID8gcmVzdWx0LmVycm9yc1xyXG4gICAgICAgIDogbmVzdGVkKG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXHJcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcclxuICogb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzXHJcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxyXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxyXG4gKiB3aWxsIGJlIHRyaWVkIGZpcnN0IG9uIGVhY2ggY2hhcmFjdGVyIChjb250cmFzdCB3aXRoIGBiZXR3ZWVuKGxldHRlcixcclxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcclxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcclxuICogdGhlIGBsZXR0ZXJgIHBhcnNlciBnZXRzIHRvIHNlZSBpdCkuXHJcbiAqXHJcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcyxcclxuICogdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbCAoYmFja3RyYWNraW5nIGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW5cclxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxyXG4gKiBlcnJvciBmb3IgdGhlIG92ZXJhbGwgcGFyc2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxyXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxyXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueVRpbGxCID0gKHAsIGVuZCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsQicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBlbmQsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChlbmQobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dDFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgICAgICA/IG1lcmdlKHJlc3VsdDIuZXJyb3JzLCByZXN1bHQxLmVycm9ycylcclxuICAgICAgICA6IG5lc3RlZChuZXh0MiwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSlcclxuICAgICAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcclxuICogZ2VuZXJhdG9yIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWRcclxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxyXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxyXG4gKlxyXG4gKiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLCB0aGUgYGJsb2NrYCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuIElmXHJcbiAqIHRoYXQgZmFpbHVyZSBpcyBub24tZmF0YWwsIGJhY2t0cmFja2luZyB3aWxsIHJlc2V0IHRoZSBpbmRleCB0byB3aGVyZVxyXG4gKiBpdCB3YXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYGJsb2NrYCBwYXJzZXIgYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxyXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXHJcbiAqXHJcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcclxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xyXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxyXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XHJcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxyXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xyXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJsb2NrQiA9IGdlbkZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKCdibG9ja0InLCBnZW5GbilcclxuICBjb25zdCBnZW4gPSBnZW5GbigpXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGxldCBuZXh0VmFsdWVcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXHJcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKG5leHQsIHZhbHVlKVxyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoQVNTRVJUKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignYmxvY2tCJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XHJcbiAgICAgICAgb3JkaW5hbChpICsgMSlcclxuICAgICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcclxuICAgIH1cclxuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAodmFsdWUobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIGVycm9yKG5leHRTdGF0ZSwgcmVzdWx0LmVycm9ycywgaW5kZXgpXHJcbiAgICBuZXh0VmFsdWUgPSByZXN1bHQudmFsdWVcclxuICAgIGkrK1xyXG4gIH1cclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzXHJcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXHJcbiAqIHBhcnNlcnMgdG8gYXBwbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxyXG4gKiBwYXJzZXIncyByZXN1bHQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcclxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcclxuICogdG8gYGZuYCBubyBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cclxuICpcclxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbFxyXG4gKiBiYWNrdHJhY2sgdG8gd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cclxuICpcclxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcclxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcclxuICogICAgIGFwcGxpZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb24gd2hpY2hcclxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXHJcbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci4gQSBzaW5nbGVcclxuICogICAgIGZ1bmN0aW9uIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBiZSB0aGUgbGFzdCBwYXJhbWV0ZXI7IGFsbFxyXG4gKiAgICAgb3RoZXIgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcclxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gcHMucG9wKClcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGZvciAoY29uc3QgW2ksIHBdIG9mIHBzLmVudHJpZXMoKSkge1xyXG4gICAgICBhc3NlcnRQYXJzZXIoJ3BpcGVCJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgICBhc3NlcnRGdW5jdGlvbigncGlwZUInLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKG9yZGluYWwocHMubGVuZ3RoICsgMSkpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIGZuKC4uLnZhbHVlcykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwcmUsIGNvbnRlbnQsIGFuZCBwb3N0IHBhcnNlcnMgaW5cclxuICogb3JkZXIgYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgYHBgIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXJcclxuICogYHBvc3RgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxyXG4gKiB0byBwYXRjaCB0aGUgXCJwb3N0XCIgY29udGVudCBiZWZvcmUgdGhlIHBvc3QgcGFyc2VyIGRvZXMsIHNvIHRha2UgY2FyZVxyXG4gKiB0aGF0IHRoZSBwYXJzZXJzIGRvIG5vdCBvdmVybGFwIGluIHdoYXQgdGhleSBtYXRjaC5cclxuICpcclxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhlIGBiZXR3ZWVuQmAgcGFyc2VyIHdpbGwgYmFja3RyYWNrXHJcbiAqIHRvIHdoZXJlIGBwcmVgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXHJcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XHJcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJldHdlZW5CID0gKHByZSwgcG9zdCwgcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JldHdlZW5CJywgcHJlLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwLCBvcmRpbmFsUGFyc2VyKCczcmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwcmUoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBlcnJvcihuZXh0MiwgcmVzdWx0Mi5lcnJvcnMsIGluZGV4KVxyXG5cclxuICBjb25zdCBbcmVwbHkzLCBbbmV4dDMsIHJlc3VsdDNdXSA9IGR1cChwb3N0KG5leHQyKSlcclxuICBpZiAocmVzdWx0My5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkzXHJcbiAgaWYgKHJlc3VsdDMuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIGVycm9yKG5leHQzLCByZXN1bHQzLmVycm9ycywgaW5kZXgpXHJcbiAgcmV0dXJuIG9rKG5leHQzLCByZXN1bHQyLnZhbHVlKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBhc3NlcnRBcnJheSxcclxuICBhc3NlcnRGdW5jdGlvbixcclxuICBhc3NlcnROdW1iZXIsXHJcbiAgYXNzZXJ0UGFyc2VyLFxyXG4gIGZvcm1hdHRlcixcclxuICBvcmRpbmFsRnVuY3Rpb24sXHJcbiAgb3JkaW5hbE51bWJlcixcclxuICBvcmRpbmFsUGFyc2VyLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIsIG1heWJlRmF0YWwsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZHVwLCBvcmRpbmFsIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxyXG4gKiBwYXJzZXIgdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGVcclxuICogcGFyc2VyIHJldHVybnMgdGhhdCByZXN1bHRpbmcgc3RhdGUuXHJcbiAqXHJcbiAqIElmIHRoZSBpbml0aWFsIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIGluc3RlYWQgcmV0dXJuZWQuIElmIHRoZVxyXG4gKiBzZWNvbmQgcGFyc2VyICh0aGUgcmV0dXJuIHZhbHVlIG9mIGBmbmApIGZhaWxzIGFuZCBgcGAgY29uc3VtZWRcclxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cclxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxyXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxyXG4gKiAgICAgcmV0dXJucy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IHAyID0gZm4ocmVzdWx0MS52YWx1ZSlcclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcDIsIGZvcm1hdHRlcigndGhlIDJuZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgcGFzc2VzIGl0c1xyXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cclxuICogYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cclxuICpcclxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcclxuICogZmFpbHVyZSBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxyXG4gKlxyXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGFsd2F5cyhmbih4KSkpYC4gVGhpcyBhbHNvIG1ha2VzIGl0IGEgbW9yZSBlZmZpY2llbnQgdmVyc2lvbiBvZlxyXG4gKiBgcGlwZShbcF0sIGZuKWAgKGEgc2luZ2xlLXBhcnNlciBgcGlwZWApLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5IHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgIGFuZCB3aG9zZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHRoZVxyXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgc3VjY2VlZCB3aXRoIHRoYXRcclxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcCA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBvcmRpbmFsRnVuY3Rpb24oJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBmbihyZXN1bHQudmFsdWUpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXHJcbiAqIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgaWYgaXQgc3VjY2VlZHMsIHRoYXRcclxuICogcmVzdWx0J3MgZWxlbWVudHMgYXJlIGpvaW5lZCB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBpc1xyXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXHJcbiAqIGZ1bmN0aW9uYWwgbGFuZ3VhZ2VzIHdoZXJlIGEgc3RyaW5nIGlzIHRoZSBzYW1lIGFzIGEgbGlzdCBvZlxyXG4gKiBjaGFyYWN0ZXJzLiBKYXZhU2NyaXB0IG5lZWRzIGV4cGxpY2l0IGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgdHdvLCBzb1xyXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCB0aGUgY3JlYXRlZCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgd2l0aFxyXG4gKiB0aGUgc2FtZSBzdGF0ZS5cclxuICpcclxuICogYGpvaW4ocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBhbHdheXMoeC5qb2luKCcnKSkpYC5cclxuICpcclxuICogSWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2VzIG5vdCByZXN1bHQgaW4gYW4gYXJyYXksIGFuIGV4Y2VwdGlvbiB3aWxsXHJcbiAqIGJlIHRocm93biBiZWNhdXNlIGFuIGF0dGVtcHQgd2lsbCBiZSBtYWRlIHRvIGNhbGwgYGpvaW5gIG9uIHRoZVxyXG4gKiByZXN1bHQuIElmIGl0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2Ygc29tZXRoaW5nIG90aGVyIHRoYW4gc3RyaW5ncyxcclxuICogdGhvc2UgZWxlbWVudHMgd2lsbCBiZSBjb2VyY2VkIGludG8gc3RyaW5ncyBhbmQgdGhlbiBqb2luZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mXHJcbiAqICAgICBzdHJpbmdzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXIgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIGEgc2luZ2xlIHN0cmluZyBtYWRlIGZyb20gam9pbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlXHJcbiAqICAgICBhcnJheSBvZiBzdHJpbmdzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdqb2luJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0QXJyYXkoJ2pvaW4nLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdi5qb2luKCcnKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBkaXNjYXJkcyBhbnlcclxuICogc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGUgc3RpbGwgY29uc3VtaW5nIGlucHV0LiBBIGZhaWx1cmUgd2lsbCBiZVxyXG4gKiBwcm9wYWdhdGVkIHdpdGhvdXQgbW9kaWZpY2F0aW9uLlxyXG4gKlxyXG4gKiBgc2tpcChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxyXG4gKiBhbHdheXMobnVsbCkpYCxcclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXHJcbiAqICAgICBwYXJzZXIgZG9lcyBvbiBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignc2tpcCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgbnVsbCkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIHJ1biB0aGUgc3VwcGxpZWQgcGFyc2VyIGJ1dCwgb24gc3VjY2VzcyxcclxuICogcmVzdWx0IGluIHRoZSBzdXBwbGllZCB2YWx1ZSBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBgdmFsdWUocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbmF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxyXG4gKiBhbHdheXMoeCkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgdGhlIG5ldyBwYXJzZXIgd2lsbCByZXN1bHQgaW4gaWYgYHBgXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxyXG4gKiAgICAgc3VjY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCB4KSA6IHR1cGxlXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDFgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxyXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxyXG4gKiB2YWx1ZShwMiwgeCkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGVmdCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcDEsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtuZXh0MiwgcmVzdWx0Ml0gPSBwMihuZXh0MSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2sobmV4dDIsIHJlc3VsdDEudmFsdWUpXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxyXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYHJpZ2h0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsICgpID0+XHJcbiAqIHAyKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByaWdodCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcigncmlnaHQnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbFxyXG4gKiBiZSBmYXRhbCBpZiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYGJvdGgocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PlxyXG4gKiBjaGFpbihwMiwgYiA9PiBhbHdheXMoW2EsIGJdKSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZXMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJvdGggPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYm90aCcsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYm90aCcsIHAyLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcDIobmV4dDEpXHJcbiAgcmV0dXJuIHJlc3VsdDIuc3RhdHVzID09PSBPayA/IG9rKG5leHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3Nlc1xyXG4gKiB0aG9zZSByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZlxyXG4gKiBwYXJzZXJzIHRvIGFwcGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcclxuICogcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxdWVuY2VgLCBgbnVsbGAgcGFyc2VyIHJlc3VsdHMgYXJlICpub3QqXHJcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXHJcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXHJcbiAqXHJcbiAqIGBwaXBlKHAxLCBwMiwgZm4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+XHJcbiAqIGNoYWluKHAyLCBiID0+IGFsd2F5cyhmbihhLCBiKSkpKWAsIGBwaXBlKHAxLCBwMiwgcDMsIGZuKWAgaXMgYW5cclxuICogb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PiBjaGFpbihwMiwgYiA9PiBjaGFpbihwMyxcclxuICogYyA9PiBhbHdheXMoZm4oYSwgYiwgYykpKSkpYCwgYW5kIHNvIG9uLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJyYXkgaGFzIG9uZSBlbGVtZW50LCB0aGUgcGFyc2VyIGJlY29tZXMgZXF1aXZhbGVudCB0byBgbWFwYFxyXG4gKiBidXQgbGVzcyBlZmZpY2llbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uKFBhcnNlcnxmdW5jdGlvbiguLi4qKToqKX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZVxyXG4gKiAgICAgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxyXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cclxuICogICAgIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhlIGNyZWF0ZWQgcGFyc2VyLiBBIHNpbmdsZVxyXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsXHJcbiAqICAgICBvdGhlciBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxyXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcclxuICogICAgIHJldHVybiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IHBzLnBvcCgpXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtpLCBwXSBvZiBwcy5lbnRyaWVzKCkpIHtcclxuICAgICAgYXNzZXJ0UGFyc2VyKCdwaXBlJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgICBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBvcmRpbmFsRnVuY3Rpb24ob3JkaW5hbChwcy5sZW5ndGggKyAxKSkpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XHJcbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gcChuZXh0KVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIGZuKC4uLnZhbHVlcykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBiZWZvcmUsIGNvbnRlbnQsIGFuZCBhZnRlciBwYXJzZXJzXHJcbiAqIGluIG9yZGVyIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXHJcbiAqIGBwYWZ0ZXJgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxyXG4gKiB0byBwYXRjaCB0aGUgXCJhZnRlclwiIGNvbnRlbnQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXIgZG9lcywgc28gdGFrZVxyXG4gKiBjYXJlIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxyXG4gKlxyXG4gKiBgYmV0d2VlbihwcmUsIHBvc3QsIHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxlZnQocmlnaHQocHJlLCBwKSwgcG9zdClgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXHJcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XHJcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHByZSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwb3N0LCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIG9yZGluYWxQYXJzZXIoJzNyZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHByZShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcChuZXh0MSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICB9XHJcblxyXG4gIGNvbnN0IFtuZXh0MywgcmVzdWx0M10gPSBwb3N0KG5leHQyKVxyXG4gIHJldHVybiByZXN1bHQzLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MywgcmVzdWx0Mi52YWx1ZSlcclxuICAgIDogbWF5YmVGYXRhbChuZXh0My5pbmRleCAhPT0gaW5kZXgsIG5leHQzLCByZXN1bHQzLmVycm9ycylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudGggZWxlbWVudCBvZiB0aGUgcmVzdWx0IG9mIGEgcGFyc2VyIHRoYXQgcHJvZHVjZXMgYW5cclxuICogYXJyYXkuIElmIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgbnRoKHAsIG4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogYWx3YXlzKHhbbl0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBudGggPSAocCwgbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ250aCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBvcmRpbmFsTnVtYmVyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydEFycmF5KCdudGgnLCB2LCBmb3JtYXR0ZXIoJzFzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZbbl0pXHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXHJcbiAqIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgZmlyc3QocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBhbHdheXMoeFswXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpcnN0ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignZmlyc3QnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XHJcblxyXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRBcnJheSgnZmlyc3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdlswXSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcclxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgc2Vjb25kKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogYWx3YXlzKHhbMV0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignc2Vjb25kJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0QXJyYXkoJ3NlY29uZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2WzFdKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYHRoaXJkKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogYWx3YXlzKHhbMl0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCB0aGlyZCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0QXJyYXkoJ3RoaXJkJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZbMl0pXHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXHJcbiAqIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYGZvdXJ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGFsd2F5cyh4WzNdKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydEFycmF5KCdmb3VydGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdlszXSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaWZ0aCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZiB0aGVcclxuICogcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXHJcbiAqXHJcbiAqIGBmaWZ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGFsd2F5cyh4WzRdKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlmdGggZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlmdGggPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdmaWZ0aCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydEFycmF5KCdmaWZ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2WzRdKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBhc3NlcnRQYXJzZXIsXHJcbiAgYXNzZXJ0U3RyaW5nLFxyXG4gIG9yZGluYWxQYXJzZXIsXHJcbiAgb3JkaW5hbFN0cmluZyxcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgb2ssIG1ha2VQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcclxuICogc3VjY2VlZHMsIGl0cyByZXN1bHQgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSByZXR1cm5lZCBwYXJzZXIuXHJcbiAqIEVpdGhlciB3YXksIG5vIGlucHV0IGlzIGNvbnN1bWVkLiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcclxuICogdGhlIG5leHQgY2hhcmFjdGVyKHMpIHNhdGlzZnkgdGhlIHBhcnNlciB3aXRob3V0IGFjdHVhbGx5IGNvbnN1bWluZ1xyXG4gKiB0aGUgaW5wdXQgdG8gZmluZCBvdXQuXHJcbiAqXHJcbiAqIEFzIGEgc2lkZSBlZmZlY3QsIGFueSBmYXRhbCBwYXJzZSBlcnJvciB3aWxsIGJlIHRyYW5zZm9ybWVkIGludG8gYVxyXG4gKiBub24tZmF0YWwgb25lLCBzaW5jZSBubyBpbnB1dCBpcyBiZWluZyBjb25zdW1lZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyBvciBmYWlsc1xyXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG9va0FoZWFkID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignbG9va0FoZWFkJywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZSwgaW5kZXgpXHJcbiAgICA6IGVycm9yKG5leHQsIHJlc3VsdC5lcnJvcnMsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzXHJcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXHJcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxyXG4gKlxyXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxyXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXHJcbiAqIGBub3RFbXB0eShtYW55KHApKWAuXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXHJcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxyXG4gKiBvciBlbHNlIGBub3RFbXB0eUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcclxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ25vdEVtcHR5JywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IE9rIHx8IG5leHQuaW5kZXggIT09IGluZGV4ID8gcmVwbHkgOiBlcnJvcihuZXh0KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzXHJcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXHJcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxyXG4gKlxyXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxyXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXHJcbiAqIGBub3RFbXB0eShtYW55KHApKWAuXHJcbiAqXHJcbiAqIGBub3RFbXB0eU0ocCwgbXNnKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXHJcbiAqIGBsYWJlbChub3RFbXB0eShwKSwgbXNnKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBzdWNjZWVkc1xyXG4gKiAgICAgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcclxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3RFbXB0eU0gPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbm90RW1wdHlNJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRTdHJpbmcoJ25vdEVtcHR5TScsIG1zZywgb3JkaW5hbFN0cmluZygnMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gT2sgfHwgbmV4dC5pbmRleCAhPT0gaW5kZXggPyByZXBseVxyXG4gICAgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQsXHJcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cclxuICpcclxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcclxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXHJcbiAqIG9yIGVsc2UgYGZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXHJcbiAqICAgICBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignZm9sbG93ZWRCeScsIHApXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsLCBpbmRleClcclxuICAgIDogZXJyb3IobmV4dCwgdW5kZWZpbmVkLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxyXG4gKiBgZm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXHJcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIGBmb2xsb3dlZEJ5TShwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxhYmVsKGZvbGxvd2VkQnkocCksIG1zZylgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcclxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvbGxvd2VkQnlNID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2ZvbGxvd2VkQnlNJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRTdHJpbmcoJ2ZvbGxvd2VkQnlNJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsLCBpbmRleClcclxuICAgIDogZXJyb3IobmV4dCwgZXhwZWN0ZWQobXNnKSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxyXG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgc3VjY2VlZHMsXHJcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cclxuICpcclxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcclxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXHJcbiAqIG9yIGVsc2UgYG5vdEZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyB3aGVuIGl0XHJcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGBcclxuICogICAgIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEZvbGxvd2VkQnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdub3RGb2xsb3dlZEJ5JywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IGVycm9yKG5leHQsIHVuZGVmaW5lZCwgaW5kZXgpXHJcbiAgICA6IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIHN1Y2NlZWRzLFxyXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXHJcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIGBub3RGb2xsb3dlZEJ5TShwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxhYmVsKG5vdEZvbGxvd2VkQnkocCksIG1zZylgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcclxuICogICAgc3VjY2VlZHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcclxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEZvbGxvd2VkQnlNID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ25vdEZvbGxvd2VkQnlNJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRTdHJpbmcoJ25vdEZvbGxvd2VkQnlNJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcclxuICAgIDogb2sobmV4dCwgbnVsbCwgaW5kZXgpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydFBhcnNlcixcclxuICBhc3NlcnRTdHJpbmcsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxuICBvcmRpbmFsU3RyaW5nLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IGZhdGFsLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcbmNvbnN0IHsgTmVzdGVkIH0gPSBFcnJvclR5cGVcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG5mdW5jdGlvbiBwYXNzKHN0YXRlLCByZXN1bHQsIGVycm9ycykge1xyXG4gIHJldHVybiBbeyAuLi5zdGF0ZSB9LCB7IC4uLnJlc3VsdCwgZXJyb3JzIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBjb25zdW1lcyBpbnB1dCwgbm90aGluZyBhZGRpdGlvbmFsIGhhcHBlbnMuIE90aGVyd2lzZSwgdGhlIG9yaWdpbmFsXHJcbiAqIHBhcnNlcidzIHJlc3VsdCBpcyByZXRhaW5lZCBidXQgdGhlIGVycm9yIGlzIG92ZXJ3cml0dGVuIGJ5IHRoZVxyXG4gKiBzdXBwbGllZCBtZXNzYWdlIGFzIGFuIGV4cGVjdGVkIGVycm9yLlxyXG4gKlxyXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgYmV0dGVyIGVycm9yIG1lc3NhZ2VzIGluIGNhc2VzIHdoZXJlIHRoZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBlcnJvciBtZXNzYWdlcyBhcmUgaW5zdWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgaWYgYHBgIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcclxuICogICAgIHRocm91Z2ggZXhjZXB0IGZvciBjaGFuZ2luZyBpdHMgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIHVwb25cclxuICogICAgIGZhaWx1cmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGFiZWwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbGFiZWwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnbGFiZWwnLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIGluZGV4ID09PSBuZXh0LmluZGV4ID8gcGFzcyhuZXh0LCByZXN1bHQsIGV4cGVjdGVkKG1zZykpIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBzdWNjZWVkcywgdGhhdCBzdWNjZXNzIGlzIHBhc3NlZCB0aHJvdWdoLCB0aG91Z2ggaWYgaXQgZGlkbid0IGNvbnN1bWVcclxuICogYW55IGlucHV0LCB0aGUgcHJvdmlkZWQgc3RyaW5nIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYW4gZXhwZWN0ZWRcclxuICogZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogSWYgdGhlIG9yaWdpbmFsIHBhcnNlciBmYWlscywgd2hhdCBoYXBwZW5zIGRlcGVuZHMgb24gd2hldGhlciB0aGF0XHJcbiAqIGZhaWx1cmUgY29uc3VtZWQgaW5wdXQuIElmIGl0IGRpZCBub3QsIHRoZSBzdXBwbGllZCBtZXNzYWdlXHJcbiAqIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2UganVzdCBhcyB3aXRoIGBsYWJlbGAuIElmIGl0XHJcbiAqICpkaWQqIGNvbnN1bWUgaW5wdXQsIHRoZSBzdGF0ZSBpcyByZXNldCB0byB0aGUgc3RhdGUgYmVmb3JlIHRoZVxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIHRoZSBlcnJvciBpcyBzZXQgdG8gYSBjb21wb3VuZCBlcnJvciB1c2luZyB0aGVcclxuICogc3VwcGxpZWQgbWVzc2FnZSAod2l0aCB0aGUgbmVzdGVkIGVycm9yIGJlaW5nIHRoZSBvcmlnaW5hbCBlcnJvciB0aGF0XHJcbiAqIGNhbWUgZnJvbSB0aGUgZmFpbHVyZSBwb2ludCksIGFuZCBhIGZhdGFsIGVycm9yIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgZmV3IHBsYWNlcyB3aGVyZSBhIGZhdGFsIGVycm9yIGhhcHBlbnMgYWZ0ZXJcclxuICogYmFja3RyYWNraW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBlcnJvciBtZXNzYWdlIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZVxyXG4gKiAgICAgYW4gYEV4cGVjdGVkYCBlcnJvciBpZiBubyBpbnB1dCB3YXMgY29uc3VtZWQsIG9yIGEgYENvbXBvdW5kYFxyXG4gKiAgICAgZXJyb3IgaWYgaXQgd2FzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBjaGFuZ2VzIHRoZSBlcnJvclxyXG4gKiAgICAgYXMgYXBwcm9wcmlhdGUgaWYgYHBgIGZhaWxzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJhY2tMYWJlbCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdiYWNrTGFiZWwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnYmFja0xhYmVsJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBPaykge1xyXG4gICAgcmV0dXJuIGluZGV4ID09PSBuZXh0LmluZGV4XHJcbiAgICAgID8gcGFzcyhuZXh0LCByZXN1bHQsIGV4cGVjdGVkKG1zZykpIDogcmVwbHlcclxuICB9IGVsc2UgaWYgKGluZGV4ID09PSBuZXh0LmluZGV4KSB7XHJcbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDEgJiYgcmVzdWx0LmVycm9yc1swXS50eXBlID09PSBOZXN0ZWQpIHtcclxuICAgICAgY29uc3QgeyBzdGF0ZSwgZXJyb3JzIH0gPSByZXN1bHQuZXJyb3JzWzBdXHJcbiAgICAgIHJldHVybiBwYXNzKG5leHQsIHJlc3VsdCwgY29tcG91bmQobXNnLCBzdGF0ZSwgZXJyb3JzKSlcclxuICAgIH1cclxuICAgIHJldHVybiBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSlcclxuICB9XHJcbiAgcmV0dXJuIGZhdGFsKHN0YXRlLCBjb21wb3VuZChtc2csIG5leHQsIHJlc3VsdC5lcnJvcnMpKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBhc3NlcnRGdW5jdGlvbixcclxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcclxuICBhc3NlcnROdW1iZXIsXHJcbiAgYXNzZXJ0UGFyc2VyLFxyXG4gIG9yZGluYWxOdW1iZXIsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBvaywgbWFrZVBhcnNlciwgU3RhdHVzLCBtYXliZUZhdGFsIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAsIG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnkgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xyXG5cclxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xyXG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXHJcbiAgICArICduZWl0aGVyIGNvbnRlbnQgbm9yIHNlcGFyYXRvciBwYXJzZXIgY29uc3VtZWQgaW5wdXQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xyXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXHJcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XHJcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogVGhlIHJldHVybmVkIHBhcnNlciBtYXkgZmFpbCBmYXRhbGx5IGV2ZW4gaWYgdGhlIHVuc3VjY2Vzc2Z1bFxyXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xyXG4gKiBwYXJzZXIgc3VjY2VlZGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gRXNzZW50aWFsbHksIGlmIHRoZSByZXR1cm5lZFxyXG4gKiBwYXJzZXIgY29uc3VtZXMgYW55dGhpbmcgYW5kIHRoZW4gZmFpbHMsIGl0IHdpbGwgZmFpbCBmYXRhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVuY2UgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgZm9yIChjb25zdCBbaSwgcF0gb2YgcHMuZW50cmllcygpKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignc2VxdWVuY2UnLCBwLCBvcmRpbmFsUGFyc2VyKG9yZGluYWwoaSArIDEpKSlcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYVxyXG4gKiBnZW5lcmF0b3IgZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZFxyXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXHJcbiAqIGJlIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuIElmIGFueSBvZiB0aGVzZSBwYXJzZXJzIGZhaWwsXHJcbiAqIGBibG9ja2Agd2lsbCBhbHNvIGZhaWwgd2l0aCB0aGF0IGZhaWx1cmUuIFRoaXMgZmFpbHVyZSB3aWxsIGJlIGZhdGFsXHJcbiAqIGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQuXHJcbiAqXHJcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxyXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXHJcbiAqXHJcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcclxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xyXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxyXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XHJcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxyXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xyXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJsb2NrID0gZ2VuRm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24oJ2Jsb2NrJywgZ2VuRm4pXHJcbiAgY29uc3QgZ2VuID0gZ2VuRm4oKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dFZhbHVlXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG4gIGxldCBpID0gMFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxyXG4gICAgaWYgKGRvbmUpIHJldHVybiBvayhuZXh0LCB2YWx1ZSlcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKEFTU0VSVCkge1xyXG4gICAgICBhc3NlcnRQYXJzZXIoJ2Jsb2NrJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XHJcbiAgICAgICAgb3JkaW5hbChpICsgMSlcclxuICAgICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcclxuICAgIH1cclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSB2YWx1ZShuZXh0KVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgaSsrXHJcbiAgfVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcclxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZlxyXG4gKiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSwgaXRcclxuICogc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxyXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ21hbnknLCBwKVxyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXHJcbiAqIHByb3ZpZGluZyB0aGF0IGFzIGl0cyBvd24gcmVzdWx0LiBUaGUgY29udGFpbmVkIHBhcnNlciBtdXN0IHN1Y2NlZWRcclxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXHJcbiAqIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlblxyXG4gKiBpdCBmYWlscy5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcclxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignbWFueTEnLCBwKVxyXG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gdHVwbGVcclxuXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHlcclxuICogZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsXHJcbiAqIGl0IHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignc2tpcE1hbnknLCBwKVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3RcclxuICogc3VjY2VlZCBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLFxyXG4gKiB0aGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dFxyXG4gKiB3aGVuIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkxID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignc2tpcE1hbnkxJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XHJcblxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXHJcbiAqIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzbyB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyXHJcbiAqIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0byBmYWlsIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignc2VwQnknLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignc2VwQnknLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIFtdKVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwQnknKSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXHJcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcclxuICogY29udGVudCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlZWFzdCBvbmNlIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmVcclxuICogd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5IGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzXHJcbiAqIGZhaWxzIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwQnkxID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBCeTEnLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcclxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4gYW5kXHJcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xyXG4gKiB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0b1xyXG4gKiBmYWlsIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignc2VwRW5kQnknLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignc2VwRW5kQnknLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIFtdKVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnknKSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLm5leHQsIGluZGV4IH0pXHJcbiAgcmV0dXJuIG9rKHNlcE5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcclxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgbXVzdCBzdWNjZWVkIGF0IGxlZWFzdCBvbmNlXHJcbiAqIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmUgd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5XHJcbiAqIGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXHJcbiAqXHJcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXHJcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcclxuICogYXJlIGRpc2NhcmRlZC5cclxuICpcclxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xyXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cclxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXHJcbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxyXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXHJcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeTEnLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5MScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlcE5leHQsIF9dID0gc2VwKHsgLi4ubmV4dCwgaW5kZXggfSlcclxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxyXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXHJcbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcclxuICogZHVyaW5nIHRoYXQgZmFpbHVyZSwgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cclxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByZXBlYXQgPSAocCwgbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ3JlcGVhdCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0TnVtYmVyKCdyZXBlYXQnLCBuLCBvcmRpbmFsTnVtYmVyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcclxuICAgIGNvbnN0IFtuZXh0U3RhdGUsIHJlc3VsdF0gPSBwKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcclxuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxyXG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcclxuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXHJcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXHJcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxyXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxyXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxyXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cclxuICpcclxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLCB0aGUgb3ZlcmFsbFxyXG4gKiBwYXJzZXIgd2lsbCBmYWlsIChmYXRhbGx5IGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW4gY29uc3VtZWQpLiBBXHJcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXHJcbiAqIG92ZXJhbGwgcGFyc2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxyXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxyXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueVRpbGwgPSAocCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBlbmQsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChlbmQobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dDFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChcclxuICAgICAgICBuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSxcclxuICAgICAgKVxyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdDIudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG5mdW5jdGlvbiBvcEZvcm1hdHRlcihvcmQpIHtcclxuICByZXR1cm4gdmFsdWUgPT4gYGV4cGVjdGVkICR7b3JkfSBvcCBwYXJzZXIgdG8gcmV0dXJuIGEgZnVuY3Rpb247IGZvdW5kICR7XHJcbiAgICBzdHJpbmdpZnkodmFsdWUpXHJcbiAgfWBcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcclxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXHJcbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cclxuICpcclxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXHJcbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXHJcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxyXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXHJcbiAqXHJcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXHJcbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXHJcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXHJcbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXHJcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcclxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcclxuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFzc29jTCA9IChwLCBvcCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jTCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIHgpXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgY29uc3Qgb3BzID0gW11cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcclxuICBsZXQgaSA9IDBcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChBU1NFUlQpIHtcclxuICAgICAgYXNzZXJ0RnVuY3Rpb24oJ2Fzc29jTCcsIHJlc3VsdG9wLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICAgIGkrK1xyXG4gIH1cclxuXHJcbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XHJcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcclxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXHJcbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cclxuICpcclxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXHJcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxyXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXHJcbiAqXHJcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXHJcbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXHJcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcclxuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxyXG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2MxTCA9IChwLCBvcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIG9wLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAoQVNTRVJUKSB7XHJcbiAgICAgIGFzc2VydEZ1bmN0aW9uKCdhc3NvYzFMJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSlcclxuICAgIH1cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gICAgaSsrXHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cclxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxyXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xyXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cclxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NSID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2NSJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIG9wLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgeClcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBjb25zdCBvcHMgPSBbXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxyXG4gIGxldCBpID0gMFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dG9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dHBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKEFTU0VSVCkge1xyXG4gICAgICBhc3NlcnRGdW5jdGlvbignYXNzb2NSJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSlcclxuICAgIH1cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gICAgaSsrXHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxyXG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cclxuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxyXG4gKlxyXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIGVpdGhlciBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcclxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXHJcbiAqIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cclxuICpcclxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cclxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcclxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2MxUicsIG9wLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAoQVNTRVJUKSB7XHJcbiAgICAgIGFzc2VydEZ1bmN0aW9uKCdhc3NvYzFSJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSlcclxuICAgIH1cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gICAgaSsrXHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBmb3JtYXRFcnJvcnMgfSBmcm9tICcuL2Vycm9yJ1xyXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHRyYWNrIH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xyXG4gKiBvZiB0eXBlZCBhcnJheXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxyXG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxyXG59XHJcblxyXG4vKipcclxuICogQSBzeW1ib2wgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXHJcbiAqIEBlbnVtIHtzeW1ib2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cclxuICBPazogU3ltYm9sKCdvaycpLFxyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXHJcbiAgRXJyb3I6IFN5bWJvbCgnZXJyb3InKSxcclxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cclxuICBGYXRhbDogU3ltYm9sKCdmYXRhbCcpLFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0XHJcbiAqIGFuZCBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTdGF0ZVxyXG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcclxuICogICAgIG5leHQgcGFyc2luZyBvcGVyYXRpb24gd2lsbCB0YWtlIHBsYWNlIChvciB3aGVyZSB0aGUgbGFzdCBvbmVcclxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cclxuICovXHJcblxyXG4vKipcclxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcclxuICogZXNzZW50aWFsbHkgYSB1bmlvbiBvZiBzdWNjZXNzZnVsIHZhbHVlIGFuZCBmYWlsdXJlIGVycm9yLCB3aXRoIHRoZVxyXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlc3VsdFxyXG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXHJcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgYSBzdWNjZXNzZnVsIHBhcnNlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxyXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyhcclxuICogICBVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcclxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheVxyXG4gKiApfSBUeXBlZEFycmF5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBzdGF0ZS4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhIG5ld1xyXG4gKiBzdGF0ZSBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLiBBbnlcclxuICogZnVydGhlciBzdGF0ZXMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgaW5pdGlhbCBzdGF0ZSB1c2luZyB7QGxpbmsgb2t9LFxyXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxyXG4gKlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMge1N0YXRlfSBBbiBlbXB0eSBwYXJzZXIgc3RhdGUgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZShpbnB1dCkge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcclxuICAgICsgYGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXc7IHBhcnNlciBpbnB1dCB3YXMgJHt0eXBlb2YgaW5wdXR9YFxyXG5cclxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNUeXBlZEFycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcclxuICAgIH1cclxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRhVmlldykge1xyXG4gICAgICByZXR1cm4gaW5wdXRcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxyXG4gIH0pKGlucHV0KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmlldyxcclxuICAgIGluZGV4OiAwLFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXHJcbiAqIHN0YXRlLCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXHJcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgc3RhdGUuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBQYXJzZXJcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGJlZm9yZSB0aGUgcGFyc2VyIGlzIHJ1bi5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIHVwZGF0ZWQgc3RhdGUgYWZ0ZXIgdGhlIHBhcnNlciBpc1xyXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxyXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXHJcbiAqIHRvIHRyYWNrIHBhcnNlcnMgdGhhdCBpdCBoYXMgY3JlYXRlZC5cclxuICpcclxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcclxuICogd2lsbCBhc3NlcnQgdGhhdCB0aGUgcGFyc2VyIHRoYXQgaXMgcGFzc2VkIHRvIGl0IHdhcyBjcmVhdGVkIGJ5IHRoaXNcclxuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcclxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcclxuICogcmV0dXJuIHZhbHVlLiBJZiBhc3NlcnRpb25zIGFyZSBub3QgZW5hYmxlZCwgdGhpcyBjaGVjayB3aWxsIG5vdCBiZVxyXG4gKiBkb25lLlxyXG4gKlxyXG4gKiBFdmVyeSBwYXJzZXIgaW4gdGhpcyBsaWJyYXJ5IGlzIGNyZWF0ZWQgd2l0aCBgbWFrZVBhcnNlcmAsIHNvIGFueSBvZlxyXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cclxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1ha2VQYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcclxuICogYSBgU3RhdGVgIHBvdGVudGlhbGx5IHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9rKHN0YXRlLCB2YWx1ZSA9IG51bGwsIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxyXG4gKiBjb25zdW1pbmcgaW5wdXQsIGFzIHdlbGwgYXMgYSBjb3B5IG9mIGBTdGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcclxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlXHJcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIG5ldyBgU3RhdGVgIHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcclxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmYXRhbChzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2VyIGFwcGxpY2F0b2luIGZhaWxlZC5cclxuICogV2hldGhlciB0aGlzIGlzIGEgZmF0YWwgZXJyb3Igb3Igbm90IGRlcGVuZHMgb24gd2hldGhlciBgdGVzdGAgaXNcclxuICogYHRydWVgIChmYXRhbCkgb3IgYGZhbHNlYCAobm9uLWZhdGFsKS5cclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSB0ZXN0IFVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHByb2R1Y2VkIHJlc3VsdFxyXG4gKiAgICAgcmVwcmVzZW50cyBhIGZhdGFsIGVycm9yIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxyXG4gKiAgICAgd2l0aCB0aGUgc3RhdGUgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxyXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlRmF0YWwodGVzdCwgc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgLi4uc3RhdGUsIGluZGV4IH0sXHJcbiAgICB7IHN0YXR1czogdGVzdCA/IFN0YXR1cy5GYXRhbCA6IFN0YXR1cy5FcnJvciwgZXJyb3JzIH0sXHJcbiAgXVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gVGhpcyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksXHJcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxyXG4gKiBzdGF0ZSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXHJcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXHJcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cclxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcclxuICogICAgIHRleHQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IFRoZSBmaW5hbCBzdGF0ZSBhZnRlciBhbGwgcGFyc2VycyBoYXZlXHJcbiAqICAgICBiZWVuIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZpbmFsIHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XHJcbiAgcmV0dXJuIHBhcnNlcihtYWtlU3RhdGUoaW5wdXQpKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cclxuICpcclxuICogQHBhcmFtIHtbU3RhdGUsIFJlc3VsdF19IHJlcGx5IFRoZSBzdGF0ZS9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnlcclxuICogICAgIGBwYXJzZWAuXHJcbiAqIEByZXR1cm5zIHtTdGF0dXN9IFRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xyXG4gIHJldHVybiByZXBseVsxXS5zdGF0dXNcclxufVxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBpbnZvY2F0aW9uIG9mIGBwYXJzZWAgd2FzIHN1Y2Nlc3NmdWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7W1N0YXRlLCBSZXN1bHRdfSByZXBseSBUaGUgc3RhdGUvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5XHJcbiAqICAgICBgcGFyc2VgLlxyXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBwYXJzZXIgc3VjY2VlZGVkIG9yIGBmYWxzZWAgaWYgaXRcclxuICogICAgIGRpZCBub3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VlZGVkKHJlcGx5KSB7XHJcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcclxuICogZGlkIG5vdCBzdWNjZWVkLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcclxuICogKGBza2lwYCwgYGxvb2tBaGVhZGAsIGV0Yy4pLiBUaGUgcHJvcGVyIHdheSB0byB0ZWxsIGlmIGEgcGFyc2VyXHJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiAgICAgYHBhcnNlYC5cclxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXHJcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XHJcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyByZXBseVsxXS52YWx1ZSA6IG51bGxcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgc3RyaW5nIGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5XHJcbiAqIGFuIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XHJcbiAqIHN1Y2Nlc3NmdWwsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7W1N0YXRlLCBSZXN1bHRdfSByZXBseSBUaGUgc3RhdGUvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5XHJcbiAqICAgICBgcGFyc2VgLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXHJcbiAqICAgICB0aGUgcGFyc2VyIGZhaWx1cmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xyXG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gbnVsbCA6IGZvcm1hdEVycm9ycyguLi5yZXBseSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcclxuICogaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xyXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxyXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XHJcbiAqICAgICB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBmcm9tIHRoZSBwYXJzZXIgYXBwbGljYXRpb24sIGlmIHRoZSBwYXJzZXJcclxuICogICAgIHN1Y2NlZWRzLlxyXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXHJcbiAqICAgICBkZXRhaWxlZCByZWNvcmQgb2Ygd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XHJcbiAgY29uc3QgW3N0YXRlLCByZXN1bHRdID0gcGFyc2VyKG1ha2VTdGF0ZShpbnB1dCkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xyXG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxyXG4gIH1cclxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKHN0YXRlLCByZXN1bHQpKVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGNoYXJMZW5ndGgsXHJcbiAgY29tbWFTZXBhcmF0ZSxcclxuICBuZXh0Q2hhcldpZHRoLFxyXG4gIHZpZXdUb1N0cmluZyxcclxufSBmcm9tICcuL3V0aWwnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuU3RhdGV9IFN0YXRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xyXG5cclxuY29uc3QgdGFiID0gL1xcdC9ndVxyXG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxyXG5cclxuLyoqXHJcbiAqIEEgc3ltYm9sIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxyXG4gKiBAZW51bSB7c3ltYm9sfVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBleHBlY3RlZCByZXN1bHQuIFByb2R1Y2VkIGJ5IHRoZSB2YXN0XHJcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cclxuICAgKi9cclxuICBFeHBlY3RlZDogU3ltYm9sKCdleHBlY3RlZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XHJcbiAgICogcHJvZHVjZWQgYnkgcGFyc2VycyBzdWNoIGFzIGB1bmV4cGVjdGVkYCBhbmQgYG5vdEZvbGxvd2VkQnlgLlxyXG4gICAqL1xyXG4gIFVuZXhwZWN0ZWQ6IFN5bWJvbCgndW5leHBlY3RlZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcclxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxyXG4gICAqL1xyXG4gIEdlbmVyaWM6IFN5bWJvbCgnZ2VuZXJpYycpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGVycm9yIHdpdGhpbiBhbm90aGVyIGVycm9yLiBUaGlzIGlzXHJcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXHJcbiAgICogcGFyZW50IGVycm9yIGlzIHJlcG9ydGVkIGFmdGVyIGJhY2t0cmFja2luZy5cclxuICAgKi9cclxuICBOZXN0ZWQ6IFN5bWJvbCgnbmVzdGVkJyksXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBuZXN0ZWQgZXJyb3Igd2l0aCBpdHMgb3duIHNlcGFyYXRlIGVycm9yXHJcbiAgICogbWVzc2FnZS4gVGhpcyBpcyBwcm9kdWNlZCBzcGVjaWZpY2FsbHkgYnkgdGhlIGBjb21wb3VuZGAgcGFyc2VyLlxyXG4gICAqL1xyXG4gIENvbXBvdW5kOiBTeW1ib2woJ2NvbXBvdW5kJyksXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcclxuICAgKiBkaXNwbGF5ZWQgaW4gYSBjdXN0b20gZXJyb3IgZm9ybWF0dGVyLlxyXG4gICAqL1xyXG4gIE90aGVyOiBTeW1ib2woJ290aGVyJyksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIGxpc3Qgb2YgZXJyb3JzLiBUaGlzIGNhbiBjb25zaXN0IG9mIGFueSBlcnJvciBtZXNzYWdlcyB0aGF0IGFwcGx5XHJcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xyXG4gKiB0aGUgc2FtZSBpbmRleCBidXQgYXBwbHkgdG8gYSBkaWZmZXJlbnQgb25lLlxyXG4gKiBAdHlwZWRlZiB7KE5lc3RlZEVycm9yfENvbXBvdW5kRXJyb3J8TG9jYWxFcnJvcilbXX0gRXJyb3JMaXN0XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcclxuICogc3RhdGUuIFRoZSB0eXBlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBsYWJlbCBzaG91bGQgYmVcclxuICogcG9zaXRpb25lZCBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTG9jYWxFcnJvclxyXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXJyb3IuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiB0aGFuIHRoZSBvbmUgcmVmZXJyZWRcclxuICogdG8gYnkgdGhlIGN1cnJlbnQgc3RhdGUuIFRoZSBtb3N0IHR5cGljYWwgcmVhc29uIGZvciB0aGlzIGhhcHBlbmluZ1xyXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcclxuICogKHBvc3QtYmFja3RyYWNrKSBsb2NhdGlvbiB3aGlsZSB0aGUgbmVzdGVkIGVycm9yIHJldGFpbnMgaW5mb3JtdGlvblxyXG4gKiBmcm9tIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgYmFja3RyYWNraW5nIGluIHRoZSBmaXJzdCBwbGFjZS5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTmVzdGVkRXJyb3JcclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcclxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cclxuICogQHByb3BlcnR5IHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsIGVycm9yXHJcbiAqICAgICBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbSB0aGVcclxuICogICAgIGN1cnJlbnQgc3RhdGUuXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxyXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBzdGF0ZWAuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcclxuICogbmljZXIgZXJyb3IgbWVzc2FnZXM7IHRoaXMgZXJyb3IgaXMgdHlwaWNhbGx5IG9ubHkgcHJvZHVjZWQgYnkgdGhlXHJcbiAqIGBiYWNrbGFiZWxgIHBhcnNlci5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG91bmRFcnJvclxyXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxyXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBlcnJvci4gVGhpc1xyXG4gKiAgICAgaXMgdHlwaWNhbGx5IHVzZWQgYXMgYSBzb3J0IG9mIGhlYWRlciBvdmVyIHRoZSBuZXN0ZWQgbWVzc2FnZXNcclxuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXHJcbiAqIEBwcm9wZXJ0eSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb20gdGhlXHJcbiAqICAgICBjdXJyZW50IHN0YXRlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcclxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgc3RhdGVgLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGVycm9yIGxpc3QgY29udGFpbmluZyBvbmUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXHJcbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGV4cGVjdGVkIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWQobGFiZWwpIHtcclxuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkV4cGVjdGVkLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuIEl0IGlzIGV4cGVjdGVkIHRoYXQgb25lIGFycmF5IG9mXHJcbiAqIGVycm9yIG1lc3NhZ2VzIG1heSBoYXZlIG11bHRpcGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCBidXQgb25seSB0aGVcclxuICogZmlyc3Qgd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXHJcbiAqICAgICBub3QgZXhwZWN0ZWQuXHJcbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIHVuZXhwZWN0ZWQgdHlwZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5VbmV4cGVjdGVkLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmUgZ2VuZXJpY1xyXG4gKiBlcnJvciBtZXNzYWdlIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzLCBidXQgb25seSB0aGUgZmlyc3Qgd2lsbFxyXG4gKiBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7RXJyb3JNZXNzYWdlfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBnZW5lcmljIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpYyhsYWJlbCkge1xyXG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuR2VuZXJpYywgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxyXG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG90aGVyIGVycm9yJ3MgbWVzc2FnZS5cclxuICogQHJldHVybnMge0Vycm9yTWVzc2FnZX0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3RoZXIobGFiZWwpIHtcclxuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLk90aGVyLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5lc3RlZCBlcnJvci4gVGhpcyB0YWtlcyBhbiBlcnJvciBsaXN0IGFuZCB3cmFwcyBpdCB3aXRoXHJcbiAqIHN0YXRlIGluZm9ybWF0aW9uLiBJZiB0aGUgc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZFxyXG4gKiBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvciB3aWxsIG5vdFxyXG4gKiBiZSBuZXN0ZWQgaW4gYW5vdGhlciBuZXN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBzdGF0ZS5cclxuICogQHJldHVybnMge05lc3RlZEVycm9yfSBBIG5ldyBuZXN0ZWQgZXJyb3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkKHN0YXRlLCBlcnJvcnMpIHtcclxuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxyXG4gICAgPyBlcnJvcnNcclxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgc3RhdGUsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBjb21wb3VuZCBlcnJvci4gVGhpcyB3cmFwcyBhbiBlcnJvciBsaXN0IGp1c3QgYXMgYVxyXG4gKiBuZXN0ZWQgZXJyb3IgZG9lcywgZXhjZXB0IGl0IGFsc28gYXR0YWNoZXMgYSBtZXNzYWdlIHRvIGl0LiBJZiB0aGVcclxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXHJcbiAqIHVzZWQgdG8gY3JlYXRlIGEgbmV3IGNvbXBvdW5kIGVycm9yIHdpdGhvdXQgYW55IG5lc3RlZCBlcnJvci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kIGVycm9yXHJcbiAqICAgICBvY2N1cnJlZC5cclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcclxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIHN0YXRlLlxyXG4gKiBAcmV0dXJucyB7Q29tcG91bmRFcnJvcn0gQSBuZXcgY29tcG91bmQgZXJyb3IuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tcG91bmQobGFiZWwsIHN0YXRlLCBlcnJvcnMpIHtcclxuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxyXG4gICAgPyBbe1xyXG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXHJcbiAgICAgIHN0YXRlOiBlcnJvcnMuc3RhdGUsXHJcbiAgICAgIGVycm9yczogZXJyb3JzLmVycm9ycyxcclxuICAgICAgbGFiZWwsXHJcbiAgICB9XVxyXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsIHN0YXRlLCBlcnJvcnMsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMxIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMyIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxyXG4gKiBAcmV0dXJucyB7RXJyb3JMaXN0fSBBIG5ldyBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZXJyb3JzIGZyb21cclxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGVycm9yczEsIGVycm9yczIpIHtcclxuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXHJcbn1cclxuXHJcbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xyXG5cclxuLy8gI3JlZ2lvbiBUeXBlZGVmcyBmb3Igb2JqZWN0IHJldHVybiB0eXBlc1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uIG9mIGEgYnl0ZSB0byBzZWVcclxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXdsaW5lSW5mb1xyXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcclxuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNraXAgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSBuZXh0IGNoYXJhY3RlclxyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIGFcclxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExpbmVJbmRleEluZm9cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcclxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxyXG4gKiAgICAgYnl0ZSBvZiB0aGUgZGF0YSB2aWV3IGl0c2VsZiwgb3IgdGhlIGZpcnN0IGJ5dGUgYWZ0ZXIgYSBuZXdsaW5lXHJcbiAqICAgICBjaGFyYWN0ZXIuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XHJcbiAqICAgICBieXRlIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgZWl0aGVyIHRoZSBsYXN0XHJcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxyXG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZW5vIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBib3VuZGVkIGJ5XHJcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXHJcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcblxyXG4vKipcclxuICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkanVzdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmRleCB0aGF0IHJlc3VsdHNcclxuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWJiZWRMaW5lSW5mb1xyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxyXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbEluZGV4IFRoZSBjaGFyYWN0ZXIgaW5kZXggcGFzc2VkIGludG8gdGhlXHJcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxyXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cclxuICovXHJcblxyXG4vKipcclxuICogT2JqZWN0IGNvbnRhbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgY29sdW1uIGluZGV4IGFuZCBsaW5lXHJcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbEluZGV4SW5mb1xyXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxyXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFwcGVhciBpbiB0aGUgbGluZSBhbmQgaXMgdHVybmVkXHJcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXHJcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoaXMgaXMgcmV0dXJuZWQgc29sZWx5IHRvIGJlIHBhc3NlZCBpbnRvXHJcbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcclxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gICogT2JqZWN0IGNvbnRhaW5pbmcgbGluZSBhbmQgY29sdW1uIG51bWJlcnMuXHJcbiAgKlxyXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5XHJcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cclxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xyXG4gICogICAgIGJ5IHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcsIGFkanVzdGVkIGZvciBjaGFyYWN0ZXIgd2lkdGggYW5kXHJcbiAgKiAgICAgdGFiIHNpemUuXHJcbiAgKi9cclxuXHJcbi8qKlxyXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcclxuICogZGVmYXVsdCBmb3JtYXR0ZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnV0IGNhbiBiZSByZXBsYWNlZCBpZlxyXG4gKiBkZXNpcmVkLlxyXG4gKlxyXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGVyXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxyXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gYHZpZXdgIG9mIHRoZSBieXRlIHdoZXJlIHRoZVxyXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcclxuICogICAgIHN0b3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXHJcbiAqICAgICB0aGUgZXJyb3Igb2NjdXJyZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmVcclxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcblxyXG4vLyAjZW5kcmVnaW9uXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxyXG4gKiB2aWV3IGlzIGEgbmV3bGluZS4gQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXMgaXMgcmV0dXJuZWQ7XHJcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXHJcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxyXG4gKiBieXRlcyB0byBza2lwIHVudGlsIHRoZSBuZXh0IGNoYXJhY3RlciB0byBjaGVjaykuXHJcbiAqXHJcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcclxuICogYWxvbmcgd2l0aCB0aGUgbXVsdGktY2hhcmFjdGVyIG5ld2xpbmUgQ1IrTEYuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xyXG4gKiAgICAgY2hlY2sgdG8gc2VlIGlmIGl0J3MgYSBuZXdsaW5lLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XHJcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXHJcbiAgaWYgKGJ5dGUgPT09IDB4MGEgfHwgYnl0ZSA9PT0gMHgwYiB8fCBieXRlID09PSAweDBjKSB7XHJcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cclxuICB9XHJcblxyXG4gIGlmIChieXRlID09PSAweDBkKSB7XHJcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XHJcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXHJcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxyXG4gIH1cclxuXHJcbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xyXG4gICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcclxuXHJcbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XHJcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAyKSB7XHJcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxyXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxyXG4gICAgICAgICYmICh0aGlyZEJ5dGUgPT09IDB4YTggfHwgdGhpcmRCeXRlID09PSAweGE5KSkge1xyXG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBuZXdsaW5lOiBmYWxzZSwgc2tpcDogbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxyXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcclxuICogZGV0ZXJtaW5pbmcgd2hlcmUgbmV3bGluZXMgYXJlIGFuZCB0aGVuIGZpZ3VyaW5nIG91dCB3aGljaCBvbmVzIGNvbWVcclxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcclxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcclxuICogaW5kZXgpIGlzIGFsc28gY291bnRlZC5cclxuICpcclxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcclxuICogZmlyc3QgYnl0ZSBvZiB0aGUgbGluZSwgYGVuZGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGJ5dGUgb2YgdGhlXHJcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcclxuICogZGlzcGxheSBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxyXG4gKiAgICAgaW5kZXggaW5mb3JtYXRpb24gaXMgYmVpbmcgZGV0ZXJtaW5lZC5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xyXG4gKiAgICAgaW5kZXhlcyBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xyXG4gIGxldCBzdGFydCA9IDBcclxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxyXG4gICAgaWYgKG5ld2xpbmUpIHtcclxuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcclxuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cclxuICAgICAgfVxyXG4gICAgICBsaW5lbm8rK1xyXG4gICAgICBzdGFydCA9IGkgKyBza2lwXHJcbiAgICB9XHJcbiAgICBpICs9IHNraXBcclxuICB9XHJcbiAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdmlldy5ieXRlTGVuZ3RoIC0gMSwgbGluZW5vIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxyXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxyXG4gKiBgdmlld2AuIFRoZSBgc3RhcnRgIHBhcmFtZXRlciBzZXRzIHRoZSBmaXJzdCBieXRlIG9mIGEgXCJsaW5lXCIgd2l0aGluXHJcbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXHJcbiAqXHJcbiAqIEluIGxpbmVzIHdpdGggb25seSBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzLCB0aGUgY2hhcmFjdGVyIGluZGV4IHdpbGxcclxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxyXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcclxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXgsIHdpdGhpbiBhIHNpbmdsZSBsaW5lIG9mIHRleHQsIG9mIHRoZVxyXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpIHtcclxuICBsZXQgY2hhckluZGV4ID0gMFxyXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxyXG4gIHdoaWxlIChieXRlSW5kZXggPCBpbmRleCAmJiBieXRlSW5kZXggPCB2aWV3LmJ5dGVMZW5ndGgpIHtcclxuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcclxuICAgIGNoYXJJbmRleCsrXHJcbiAgfVxyXG4gIHJldHVybiBjaGFySW5kZXhcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxyXG4gKiBpbmRleGVkIGNoYXJhY3RlciBhZGp1c3RpbmcgZm9yIHRob3NlIHNwYWNlcy4gVGhlIG51bWJlciBvZiBzcGFjZXMgaW5cclxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cclxuICpcclxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogYGxpbmVgIGlzIHRoZVxyXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXHJcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxyXG4gKiBjaGFyYWN0ZXIgaW5kZXguXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxyXG4gKiAgICAgd2l0aGluIHRoZSBsaW5lLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcclxuICogICAgIGEgdGFiLiBOb3RlIHRoYXQgdGFicyBhcmUgdHJlYXRlZCBhcyBzdG9wczsgdGhleSB3aWxsIGJlIG9mXHJcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxyXG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXHJcbiAqIEByZXR1cm5zIHtUYWJiZWRMaW5lSW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmUgYWZ0ZXIgcmVwbGFjaW5nXHJcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRhYmlmeShjaGFySW5kZXgsIGxpbmUsIHRhYlNpemUpIHtcclxuICBjb25zdCB0YWJJbmRleGVzID0gW11cclxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxyXG4gIHdoaWxlICh0YWJNYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxyXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxyXG4gIH1cclxuXHJcbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXHJcbiAgLy8gcmVtYWluaW5nIGluZGV4ZXMgYnkgdGhhdCBhbW91bnRcclxuICBsZXQgb2Zmc2V0ID0gMFxyXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcclxuICBsZXQgcmVzdWx0ID0gbGluZVxyXG5cclxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcclxuICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdGFiSW5kZXggKyBvZmZzZXRcclxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXHJcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xyXG4gICAgICBwcmVJbmRleE9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxyXG4gICAgfVxyXG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXHJcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIGFjdHVhbEluZGV4KSArICcgJy5yZXBlYXQoc3BhY2VDb3VudClcclxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcclxuICB9XHJcbiAgcmV0dXJuIHsgbGluZTogcmVzdWx0LCBjb2xJbmRleDogcHJlSW5kZXhPZmZzZXQgKyBjaGFySW5kZXggfVxyXG59XHJcblxyXG4vKipcclxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cclxuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcclxuICogc2FtZSBhcyB0aGUgbGluZSBudW1iZXIgZnJvbSBgZ2V0TGluZUluZGV4ZXNgKSBhbmQgaXMgYWRqdXN0ZWQgZm9yXHJcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcclxuICogbWFya3MuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXHJcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxyXG4gKiBhZGp1c3RpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhlIGxhdHRlciBpcyBwcm92aWRlZCBzbyBpdFxyXG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdpdGhpbiB0aGUgbGluZVxyXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xyXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRvIGFjY291bnQgZm9yLlxyXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpIHtcclxuICBsZXQgaW5kZXggPSBjb2xJbmRleFxyXG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxyXG5cclxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxyXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xyXG4gICAgbWF0Y2hlcy5wdXNoKG1hdGNoLmluZGV4KVxyXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cclxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcclxuICB9XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcclxuICAgIGxlbmd0aDogY2hhckxlbmd0aChsaW5lKSAtIG1hdGNoZXMubGVuZ3RoLFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxyXG4gKiB0aGUgY29sdW1uIHRvIGJlIGRpc3BsYXllZCwgYW5kIG9uZSBsaW5lIHRoYXQgaXMgYSBjYXJldCBwb2ludGluZyB0b1xyXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZWxsaXBzZXMgYXMgbmVlZGVkIHRvIHRoZSBmcm9udCBhbmQvb3IgdGhlIGJhY2sgb2ZcclxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxyXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxyXG4gKiBgbGVuZ3RoYCByZXR1cm5lZCBieSBgZ2V0Q29sTnVtYmVyYCBhbmQgaXMgaGVyZSBqdXN0IHRvIGF2b2lkIGhhdmluZ1xyXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcclxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxyXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cclxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXHJcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXHJcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxyXG4gKiAgICAgYW5vdGhlciBsaW5lIGNvbnRhaW5pbmcgYSBjYXJldCBwb2ludGluZyBhdCB0aGUgZGVzaWduYXRlZFxyXG4gKiAgICAgY29sdW1uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcclxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxyXG5cclxuICAvLyBGaXJzdCBjYXNlOiB0aGUgbGluZSBpcyBzaG9ydGVyIHRoYW4gbWF4V2lkdGguIERpc3BsYXkgdGhlIGxpbmVcclxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxyXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcclxuICAgIHJldHVybiBgJHtzcH0ke2xpbmV9XFxuJHtzcH0keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxyXG4gIH1cclxuXHJcbiAgLy8gU2Vjb25kIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcclxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXHJcbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxyXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cclxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XHJcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7c3B9JHtcclxuICAgICAgJyAnLnJlcGVhdChjb2xubyAtIDEpXHJcbiAgICB9XmBcclxuICB9XHJcblxyXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcclxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXHJcbiAgLy8gY2hhcmFjdGVycyBidXQgaXMgaW4gdGhlIGxhc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gRGlzcGxheVxyXG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xyXG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cclxuICBpZiAoY29sbm8gPj0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzKSB7XHJcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xyXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcclxuICAgIHJldHVybiBgJHtzcH0uLi4ke2xpbmUuc3Vic3RyaW5nKHN0YXJ0KX1cXG4ke3NwfSR7JyAnLnJlcGVhdChuZXdDb2xubyAtIDEpfV5gXHJcbiAgfVxyXG5cclxuICAvLyBGaW5hbCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiBtYXhXaWR0aCAtIDMgYW5kIHRoZSBjYXJldFxyXG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcclxuICAvLyAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBTaGlmdCB0aGUgbGluZSB0byBtYWtlIHRoZSBjYXJldCBwb2ludFxyXG4gIC8vIGF0IHRoZSBtaWRkbGUgb2YgaXQsIGFkZCBgLi4uYCB0byB0aGUgc3RhcnQgKmFuZCogZW5kLCBhbmQgcG9zaXRpb25cclxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXHJcbiAgY29uc3Qgc3RhcnQgPSBjb2xubyAtIDEgLSBNYXRoLmNlaWwobWF4V2lkdGggLyAyKSArIDNcclxuICBjb25zdCBlbmQgPSBjb2xubyAtIDEgKyBNYXRoLmZsb29yKG1heFdpZHRoIC8gMikgLSAzXHJcbiAgcmV0dXJuIGAke3NwfS4uLiR7XHJcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxyXG4gIH0uLi5cXG4ke3NwfSR7XHJcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxyXG4gIH1eYFxyXG59XHJcblxyXG4vKipcclxuICogRm9ybWF0cyBhIHNldCBvZiBuZXN0ZWQgKG9yIGNvbXBvdW5kKSBlcnJvciBtZXNzYWdlcy5cclxuICpcclxuICogQHBhcmFtIHsoTmVzdGVkRXJyb3JbXXxDb21wb3VuZEVycm9yW10pfSBuZXN0ZWRzIEFuIGFycmF5IG9mIGVpdGhlclxyXG4gKiAgICAgbmVzdGVkIG9yIGNvbXBvdW5kIGVycm9ycyB0byBmb3JtYXQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXHJcbiAqICAgICBzdG9wcyBsYXkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xyXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZW50IFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCB0aGUgZXJyb3JcclxuICogICAgIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgbmVzdGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xyXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXHJcbiAgY29uc3QgbmVzdGVkTXNncyA9IG5lc3RlZHMubWFwKG4gPT4ge1xyXG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5zdGF0ZVxyXG4gICAgY29uc3QgbGFiZWwgPSBuLmxhYmVsXHJcbiAgICAgID8gYFxcbiR7c3B9JHtuLmxhYmVsfSBjb3VsZCBub3QgYmUgcGFyc2VkIGJlY2F1c2U6XFxuXFxuYFxyXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxyXG4gICAgcmV0dXJuIGxhYmVsICsgZm9ybWF0KG4uZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCArIDIpXHJcbiAgfSlcclxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxyXG59XHJcblxyXG4vKipcclxuICogRW5zdXJlcyB0aGF0IGEgc3RyaW5nIGVuZHMgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIG9mIG5ld2xpbmVzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cclxuICogICAgIG51bWJlciBvZiBuZXdsaW5lcyBhdCB0aGUgZW5kLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBuZXdsaW5lcy5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxyXG4gKiAgICAgZW5kLlxyXG4gKi9cclxuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcclxuICBsZXQgcmVzdWx0ID0gdGV4dFxyXG4gIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xyXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcclxuICB9XHJcbiAgcmV0dXJuIHJlc3VsdCArICdcXG4nLnJlcGVhdChjb3VudClcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZyB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHBhcnRzOlxyXG4gKlxyXG4gKiAxLiBBIHBvc2l0aW9uIGxpbmUgdGhhdCBnaXZlcyB0aGUgbGluZSBudW1iZXIgYW5kIGNvbHVtbiBudW1iZXIgd2hlcmVcclxuICogICAgdGhlIGVycm9yIG9jY3VycmVkLlxyXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcclxuICogICAgdHdvIGxpbmVzIGluIHRoZSBlcnJvciBtZXNzYWdlLiBUaGUgZmlyc3QgaXMgZWl0aGVyIHRoZSBlbnRpcmVcclxuICogICAgaW5wdXQgbGluZSBvciwgaWYgdGhhdCdzIHRvbyBsb25nLCBhIHBvcnRpb24gb2YgdGhlIGlucHV0IGxpbmVcclxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxyXG4gKiAgICBsb2NhdGlvbi4gVGhlIHNlY29uZCBpcyBhIGNhcmV0IHBvc2l0aW9uZWQgdW5kZXJuZWF0aCB0aGUgbG9jYXRpb25cclxuICogICAgaW4gdGhlIGZpcnN0IGxpbmUgdGhhdCBzaG93cyBleGFjdGx5IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxyXG4gKiA0LiBBbGwgb2YgdGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzIChpZiBhbnkpLCBzZXBhcmF0ZWQgYnkgJ29yJyBhbmRcclxuICogICAgY29tbW1hcyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIG51bWJlciBvZiBtZXNzYWdlcy5cclxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXHJcbiAqXHJcbiAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXJyb3IgaXMgaW5kaWNhdGVkIGJ5IHRoZSBgaW5kZXhgIHBhcmFtZXRlcixcclxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxyXG4gKiBlcnJvciBvY2N1cnJlZC4gVGhlIGNhbGN1bGF0aW9uIG9mIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZnJvbSB0aGlzXHJcbiAqIGZsYXQgYXJyYXkgb2YgYnl0ZXMgdGFrZXMgdGhlIGZvbGxvd2luZyBpbnRvIGFjY291bnQ6XHJcbiAqXHJcbiAqICogTXVsdGktYnl0ZSBjaGFyYWN0ZXJzIChldmVyeXRoaW5nIGlzIFVURi04IGF3YXJlLCBzbyBjaGFyYWN0ZXJzIGNhblxyXG4gKiAgIGJlIDEsIDIsIDMsIG9yIDQgYnl0ZXMgbG9uZylcclxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcclxuICogKiBUYWJzLCB3aGljaCBhcmUgZXhwYW5kZWQgaW50byBhIG51bWJlciBvZiBzcGFjZXMgc2V0IGJ5IHRoZVxyXG4gKiAgIGB0YWJTaXplYCBwYXJhbWV0ZXJcclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxyXG4gKiAgIG9yIExUUiBmb3JtYXR0aW5nIGNoYXJhY3RlcnMsIGFuZCBkaWFjcml0aWNzIChIZWJyZXcgb3IgVGhhaSB2b3dlbFxyXG4gKiAgIG1hcmtzLCB1bWxhdXRzIG92ZXIgTGF0aW4gY2hhcmFjdGVycywgZXRjLilcclxuICpcclxuICogVGhlIG91dHB1dCBpcyBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgNSBlbGVtZW50cyBhYm92ZS5cclxuICpcclxuICogIyMjIEV4YW1wbGVcclxuICpcclxuICogVGhlIGZvbGxvd2luZyB0d28gbGluZXMgb2YgY29kZSB1c2VzIGBzdHJpbmdUb1ZpZXdgLCBhbiBpbnRlcm5hbFxyXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcclxuICogVVRGLTggZGF0YSB2aWV3LiBJdCdzIGNhbGxlZCBieSBgcGFyc2VgIGl0c2VsZiwgc28gaW4gcmVhbCB3b3JsZFxyXG4gKiB1c2FnZSwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGtub3cuXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBjb25zdCB2aWV3ID0gc3RyaW5nVG9WaWV3KCdcXHRPbm9tYXRvcG9laWFcXHRcXHRcXHRcXHTguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIcnKVxyXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxyXG4gKiBgYGBcclxuICpcclxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxyXG4gKiBwcm9kdWNlZDpcclxuICpcclxuICogYGBgXHJcbiAqIFBhcnNlIGVycm9yIGF0IChsaW5lIDEsIGNvbHVtbiAzNyk6XHJcbiAqXHJcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5cclxuICogRXhwZWN0ZWQgYSBkaWdpdFxyXG4gKiBgYGBcclxuICpcclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdG8gYmUgZm9ybWF0dGVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXHJcbiAqICAgICBzdG9wcyBsYXkuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xyXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGVudD0wXSBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0aGUgbWVzc2FnZSBzaG91bGQgYmVcclxuICogICAgIGluZGVudGVkLiBUaGlzIHNob3VsZCBiZSAwIGFuZCBpbmNyZWFzZWQgb25seSBmb3IgbmVzdGVkIGVycm9ycy5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xyXG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcclxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxyXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXHJcblxyXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcclxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxyXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxyXG5cclxuICBjb25zdCBwb3NpdGlvbiA9IGAke3NwfVBhcnNlIGVycm9yIGF0IChsaW5lICR7bGluZW5vfSwgY29sdW1uICR7Y29sbm99KTpgXHJcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcclxuICBjb25zdCBnZW5lcmljID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkdlbmVyaWMpXHJcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxyXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcclxuICAgIGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkV4cGVjdGVkKVxyXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcclxuICApXHJcblxyXG4gIGNvbnN0IG5lc3RlZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZClcclxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxyXG5cclxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgJHtzcH1VbmV4cGVjdGVkICR7dW5leHBlY3RlZC5sYWJlbH1cXG5gIDogJydcclxuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xyXG4gIGNvbnN0IGdlbmVyaWNNc2cgPSBnZW5lcmljID8gYCR7c3B9JHtnZW5lcmljLmxhYmVsfVxcbmAgOiAnJ1xyXG5cclxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxyXG4gIGNvbnN0IGNvbXBvdW5kTXNnID0gZm9ybWF0TmVzdGVkKGNvbXBvdW5kLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxyXG5cclxuICBjb25zdCB1bmtub3duTXNnID0gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGAke3NwfVVua25vd24gZXJyb3IocylcXG5gIDogJydcclxuICBjb25zdCBlb2ZNc2cgPSBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcclxuICAgID8gYCR7c3B9Tm90ZTogZmFpbHVyZSBvY2N1cnJlZCBhdCB0aGUgZW5kIG9mIGlucHV0XFxuYCA6ICcnXHJcblxyXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcclxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxyXG4gICAgICArIGAke2VvZk1zZ30ke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXHJcbiAgICAyLFxyXG4gIClcclxufVxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLyoqXHJcbiAqIEFjY2VwdHMgYSBwYXJzZXIgc3RhdGUgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cclxuICpcclxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXHJcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcclxuICogZGVmYXVsdHMgdG8gOCkgYW5kIG1heCB3aWR0aCAoZm9yIHRoZSBlcnJvciBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHNcclxuICogdG8gNzIpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgcGFyc2VyJ3Mgc3RhdGUgd2hlbiB0aGUgZXJyb3IgaGFwcGVuZWQuXHJcbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBwcm9kdWNlZCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcclxuICogICAgIHRhYnMgc3RvcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXHJcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKFxyXG4gIHN0YXRlLCByZXN1bHQsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBmb3JtYXR0ZXIgPSBmb3JtYXQsXHJcbikge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBzdGF0ZS4gVGhlXHJcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxyXG4gKiB0aGUgMS1iYXNlZCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aGUgYnl0ZSBhdCB0aGUgc3RhdGUncyBpbmRleFxyXG4gKiB3aXRoaW4gdGhlIHN0YXRlJ3MgZGF0YSB2aWV3LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgd2hvc2UgY3VycmVudCBwb3NpdGlvbiBpcyBiZWluZ1xyXG4gKiAgICAgY2FsY3VsYXRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcclxuICogICAgIHRhYnMgc3RvcC4gVGhlIGN1cnJlbnQgcG9zaXRpb24ncyBjb2x1bW4gbnVtYmVyIGlzIGFkanVzdGVkIGJhc2VkXHJcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxyXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcclxuICogICAgIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oc3RhdGUsIHRhYlNpemUgPSA4KSB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcclxuXHJcbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxyXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXHJcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxyXG5cclxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBQQVJTRVJTXHJcblxyXG5leHBvcnQge1xyXG4gIGFscGhhLFxyXG4gIGFueSxcclxuICBhbnlPZixcclxuICBjaGFyLFxyXG4gIGNoYXJpLFxyXG4gIGRpZ2l0LFxyXG4gIGVvZixcclxuICBoZXgsXHJcbiAgbGV0dGVyLFxyXG4gIGxvd2VyLFxyXG4gIG5vbmVPZixcclxuICBvY3RhbCxcclxuICByYW5nZSxcclxuICBzYXRpc2Z5LFxyXG4gIHNhdGlzZnlNLFxyXG4gIHVwcGVyLFxyXG59IGZyb20gJy4vcGFyc2Vycy9jaGFyJ1xyXG5leHBvcnQge1xyXG4gIGFsd2F5cyxcclxuICBmYWlsLFxyXG4gIGZhaWxGYXRhbGx5LFxyXG4gIGZhaWxVbmV4cGVjdGVkLFxyXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xyXG5leHBvcnQge1xyXG4gIGFscGhhVSxcclxuICBsZXR0ZXJVLFxyXG4gIGxvd2VyVSxcclxuICBuZXdsaW5lLFxyXG4gIG5ld2xpbmVVLFxyXG4gIHJlZ2V4LFxyXG4gIHNwYWNlLFxyXG4gIHNwYWNlVSxcclxuICBzcGFjZXMsXHJcbiAgc3BhY2VzMSxcclxuICBzcGFjZXMxVSxcclxuICBzcGFjZXNVLFxyXG4gIHVwcGVyVSxcclxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXHJcbmV4cG9ydCB7XHJcbiAgYWxsLFxyXG4gIGFueVN0cmluZyxcclxuICBzdHJpbmcsXHJcbiAgc3RyaW5naSxcclxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ09NQklOQVRPUlNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYXR0ZW1wdCxcclxuICBiZXR3ZWVuQixcclxuICBibG9ja0IsXHJcbiAgYm90aEIsXHJcbiAgY2hhaW5CLFxyXG4gIGNob2ljZSxcclxuICBjb3VudEIsXHJcbiAgZGVmLFxyXG4gIGxlZnRCLFxyXG4gIG1hbnlUaWxsQixcclxuICBvcHQsXHJcbiAgcGlwZUIsXHJcbiAgcmlnaHRCLFxyXG4gIHNlcXVlbmNlQixcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xyXG5leHBvcnQge1xyXG4gIGJldHdlZW4sXHJcbiAgYm90aCxcclxuICBjaGFpbixcclxuICBmaWZ0aCxcclxuICBmaXJzdCxcclxuICBmb3VydGgsXHJcbiAgam9pbixcclxuICBsZWZ0LFxyXG4gIG1hcCxcclxuICBudGgsXHJcbiAgcGlwZSxcclxuICByaWdodCxcclxuICBzZWNvbmQsXHJcbiAgc2tpcCxcclxuICB0aGlyZCxcclxuICB2YWx1ZSxcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NoYWluaW5nJ1xyXG5leHBvcnQge1xyXG4gIGZvbGxvd2VkQnksXHJcbiAgZm9sbG93ZWRCeU0sXHJcbiAgbG9va0FoZWFkLFxyXG4gIG5vdEVtcHR5LFxyXG4gIG5vdEVtcHR5TSxcclxuICBub3RGb2xsb3dlZEJ5LFxyXG4gIG5vdEZvbGxvd2VkQnlNLFxyXG59IGZyb20gJy4vY29tYmluYXRvcnMvY29uZGl0aW9uYWwnXHJcbmV4cG9ydCB7XHJcbiAgYmFja0xhYmVsLFxyXG4gIGxhYmVsLFxyXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWVzc2FnZSdcclxuZXhwb3J0IHtcclxuICBhc3NvYzFMLFxyXG4gIGFzc29jMVIsXHJcbiAgYXNzb2NMLFxyXG4gIGFzc29jUixcclxuICBibG9jayxcclxuICBtYW55LFxyXG4gIG1hbnkxLFxyXG4gIG1hbnlUaWxsLFxyXG4gIHJlcGVhdCxcclxuICBzZXBCeSxcclxuICBzZXBCeTEsXHJcbiAgc2VwRW5kQnksXHJcbiAgc2VwRW5kQnkxLFxyXG4gIHNlcXVlbmNlLFxyXG4gIHNraXBNYW55LFxyXG4gIHNraXBNYW55MSxcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcclxuXHJcbmV4cG9ydCB7XHJcbiAgU3RhdHVzLFxyXG4gIGVycm9yLFxyXG4gIGZhaWx1cmUsXHJcbiAgZmF0YWwsXHJcbiAgbWFrZVBhcnNlcixcclxuICBtYXliZUZhdGFsLFxyXG4gIG9rLFxyXG4gIHBhcnNlLFxyXG4gIHJ1bixcclxuICBzdGF0dXMsXHJcbiAgc3VjY2VlZGVkLFxyXG4gIHN1Y2Nlc3MsXHJcbn0gZnJvbSAnLi9jb3JlJ1xyXG5leHBvcnQge1xyXG4gIEVycm9yVHlwZSxcclxuICBjb21wb3VuZCxcclxuICBleHBlY3RlZCxcclxuICBmb3JtYXRFcnJvcnMsXHJcbiAgZ2VuZXJpYyxcclxuICBnZXRQb3NpdGlvbixcclxuICBtZXJnZSxcclxuICBuZXN0ZWQsXHJcbiAgb3RoZXIsXHJcbiAgdW5leHBlY3RlZCxcclxufSBmcm9tICcuL2Vycm9yJ1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xyXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xyXG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXHJcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxyXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxyXG4gIGFueU9mOiBhcnJheSA9PiAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxyXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXHJcbiAgY2hhcmk6IGMgPT4gcXVvdGUoYyksXHJcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcclxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxyXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxyXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcclxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXHJcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxyXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcclxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcclxuICBuZXdsaW5lVTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcclxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXHJcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXHJcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcclxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXNVOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxVTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxyXG4gIHN0cmluZzogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgc3RyaW5naTogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcclxuICB1cHBlclU6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XHJcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxyXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxyXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxyXG4gIGFueU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLmFueU9mKGFycmF5KSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcclxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXHJcbiAgY2hhcmk6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyaShjKSksXHJcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxyXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxyXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxyXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxyXG4gIGxldHRlclU6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyVSksXHJcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxyXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxyXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXHJcbiAgbmV3bGluZVU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZVUpLFxyXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcclxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcclxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxyXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcclxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcclxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxyXG4gIHNwYWNlc1U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzVSksXHJcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxyXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxyXG4gIHN0cmluZzogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nKHN0cikpLFxyXG4gIHN0cmluZ2k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ2koc3RyKSksXHJcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxyXG4gIHVwcGVyVTogZXhwZWN0ZWQoc3RyaW5ncy51cHBlclUpLFxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydENoYXIsXHJcbiAgYXNzZXJ0RnVuY3Rpb24sXHJcbiAgYXNzZXJ0U3RyaW5nLFxyXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXHJcbiAgb3JkaW5hbENoYXIsXHJcbiAgb3JkaW5hbEZ1bmN0aW9uLFxyXG4gIG9yZGluYWxTdHJpbmcsXHJcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcclxuaW1wb3J0IHsgZHVwLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyLCBmZWVkcyBpdCB0byBhIGZ1bmN0aW9uLCBhbmRcclxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cclxuICpcclxuICogVGhlcmUgaXNuJ3QgYW55dGhpbmcgaGVyZSB0aGF0IGNvdWxkbid0IGJlIHdyaXR0ZW4gd2l0aFxyXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcclxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXHJcbiAqIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIHJlYWQgZnJvbSB0aGUgaW5wdXQgdmlldykgdGhhdCBhbGxvdyBpdCB0b1xyXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcclxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXHJcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcclxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cclxuICovXHJcbmNvbnN0IENoYXJQYXJzZXIgPSBmbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXHJcbiAgcmV0dXJuIGZuKG5leHQpID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxyXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFVwb24gZmFpbHVyZSwgdGhpcyBwYXJzZXIgZG9lcyBub3RcclxuICogY29uc3VtZSBpbnB1dC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcclxuICogICAgIGFsd2F5cyBmYWlsLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcclxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRDaGFyKCdjaGFyJywgYylcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKG5leHQgPT4gYyA9PT0gbmV4dCkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmNoYXIoYykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxyXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0XHJcbiAqIHRoZSBjb21wYXJpc29uIGRvbmUgYnkgdGhpcyBwYXJzZXIgaXMgY2FzZS1pbnNlbnNpdGl2ZS4gVXBvbiBmYWlsdXJlLFxyXG4gKiB0aGlzIHBhcnNlciBkb2VzIG5vdCBjb25zdW1lIGlucHV0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxyXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxyXG4gKiAgICAgYWx3YXlzIGZhaWwuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCAob3IgaXRzXHJcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFyaSA9IGMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRDaGFyKCdjaGFyaScsIGMpXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihcclxuICAgIHJlYWQgPT4gYy50b0xvd2VyQ2FzZSgpID09PSByZWFkLnRvTG93ZXJDYXNlKCksXHJcbiAgKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcmkoYykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZVxyXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXHJcbiAqIGBmYWxzZWAsIHRoaXMgcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dC5cclxuICpcclxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XHJcbiAqIGZlYXNpYmxlIHRvIGhhdmUgaXQgYW5hbHl6ZSB0aGUgZnVuY3Rpb24gdG8gc2VlIHdoYXQgaXQgZXhwZWN0cyB0b1xyXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcclxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXHJcbiAqIGFkZCBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcclxuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxyXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSBmbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4pXHJcbiAgcmV0dXJuIENoYXJQYXJzZXIoZm4pKHN0YXRlKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcclxuICogcHJvdmlkZWQgZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXJcclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xyXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQgYW5kIHNpZ25hbHMgYW4gZXJyb3JcclxuICogd2l0aCB0aGUgcHJvdmlkZWQgbWVzc2FnZS5cclxuICpcclxuICogYHNhdGlzZnlNKGZuLCBtZXNzYWdlKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXHJcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbWVzc2FnZSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcclxuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcclxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXRpc2Z5TSA9IChmbiwgbWVzc2FnZSkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRGdW5jdGlvbignc2F0aXNmeU0nLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnc2F0aXNmeU0nLCBtZXNzYWdlLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWQobWVzc2FnZSkpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyXHJcbiAqIGl0IGlzIGJldHdlZW4gdGhlIHByb3ZpZGVkIHN0YXJ0IGFuZCBlbmQgY2hhcmFjdGVycyAoaW5jbHVzaXZlKS4gSWZcclxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXHJcbiAqIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXHJcbiAqXHJcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcclxuICogbm90LCB0aGUgZnVsbCBzdHJpbmdzIGFyZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3Rlciwgd2hpY2hcclxuICogbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIFwiQmV0d2VlblwiIGlzIGRlZmluZWQgYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzLiBUaGlzIGlzIGZpbmUgaW4gbW9zdFxyXG4gKiBjYXNlcywgYnV0IGl0IGNhbiBnZXQgd2VpcmQgd2l0aCBoaWdoZXIgY29kZSBwb2ludHMuIEZvciBleGFtcGxlLFxyXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxyXG4gKiBUaGUgYGhgIHdvdWxkIGluc3RlYWQgYmUgdGhlIFBsYW5jaydzIENvbnN0YW50IGNoYXJhY3Rlciwgd2hpY2ggaXMgaW5cclxuICogYSBjb21wbGV0ZWx5IGRpZmZlcmVudCBwYXJ0IG9mIHRoZSBVbmljb2RlIHNwZWN0cnVtIGFuZCB0aGVyZWZvcmUgaXNcclxuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0IFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGVcclxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2VcclxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydENoYXIoJ3JhbmdlJywgc3RhcnQsIG9yZGluYWxDaGFyKCcxc3QnKSlcclxuICAgIGFzc2VydENoYXIoJ3JhbmdlJywgZW5kLCBvcmRpbmFsQ2hhcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49IHN0YXJ0ICYmIGMgPD0gZW5kXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnJhbmdlKHN0YXJ0LCBlbmQpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgaW5wdXQgY2hhcmFjdGVyIGFuZCB0aGVuIHN1Y2NlZWRzIHdpdGhcclxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFueSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGVycm9yKHN0YXRlLCBleHBlY3RlZHMuYW55KVxyXG5cclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXHJcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxyXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW9mID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXHJcbiAgICA/IG9rKHN0YXRlLCBudWxsKSA6IGVycm9yKHN0YXRlLCBleHBlY3RlZHMuZW9mKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXHJcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcclxuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXHJcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxyXG4gKiB3aWxsIHN1Y2NlZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcclxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIGJlIGFcclxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xyXG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55T2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZ09yQXJyYXkoJ2FueU9mJywgY2hhcnMpXHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXHJcblxyXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcclxuICAgID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5hbnlPZihhcnIpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXHJcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcclxuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXHJcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXHJcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcclxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhXHJcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XHJcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub25lT2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVPZicsIGNoYXJzKVxyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgYXJyID0gWy4uLmNoYXJzXVxyXG5cclxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXHJcbiAgICA/IGVycm9yKHN0YXRlLCBleHBlY3RlZHMubm9uZU9mKGFycikpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGRpZ2l0LiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYSBVbmljb2RlIGRlY2ltYWwgZGlnaXQ7IGZvclxyXG4gKiB0aGF0LCB1c2UgYHJlZ2V4KC9cXHB7TmR9LylgLiBUaGlzIHBhcnNlciBzdWNjZWVkcyBvbmx5IGZvciB0aGVcclxuICogbGl0ZXJhbCBjaGFyYWN0ZXJzIGAwLTlgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmRpZ2l0KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBoZXhhZGVjaW1hbCBkaWdpdC4gVGhpcyBwYXJzZXIgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGhleCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xyXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcclxuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmhleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9jdGFsID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzcnXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm9jdGFsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7IGB1bGV0dGVyYFxyXG4gKiBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubGV0dGVyKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3Rlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUlcclxuICogY2hhcmFjdGVyczsgYHVhbHBoYWAgaXMgYSBVbmljb2RlIGFscGhhbnVtZXJpYyBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGEgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcclxuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXHJcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7XHJcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCB1cHBlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy51cHBlcilcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcclxuICogYHVsb3dlcmAgaXMgYSBVbmljb2RlIGxldHRlciBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG93ZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubG93ZXIpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG1ha2VQYXJzZXIsIG9rIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGdlbmVyaWMsIHVuZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkXHJcbiAqIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgYmUgdGhlIG5ldyBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4gb2soc3RhdGUsIHgpKVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxyXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmYWlsID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbCcsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBnZW5lcmljKG1lc3NhZ2UpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYVxyXG4gKiBmYXRhbCBlcnJvciwgb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcclxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbEZhdGFsbHkgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nKCdmYWlsRmF0YWxseScsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGZhdGFsKHN0YXRlLCBnZW5lcmljKG1lc3NhZ2UpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIHVuZXhwZWN0ZWRcclxuICogICAgIGVycm9yLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbFVuZXhwZWN0ZWQgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nKCdmYWlsVW5leHBlY3RlZCcsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCB1bmV4cGVjdGVkKG1lc3NhZ2UpKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXHJcbmltcG9ydCB7IGR1cCwgc3RyaW5nVG9WaWV3LCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXHJcbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xyXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxyXG5cclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3VcclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxyXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xyXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3VcclxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXHJcbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xyXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXHJcbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxyXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXHJcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XHJcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXHJcbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cclxuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlc1xyXG4gKiBpdCBhcyBmYXIgYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXHJcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXHJcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxyXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcclxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXHJcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxyXG4gKi9cclxuY29uc3QgUmVnZXhQYXJzZXIgPSByZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHJlc3QgPSB2aWV3VG9TdHJpbmcoaW5kZXgsIHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4LCB2aWV3KVxyXG5cclxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXHJcbiAgcmV0dXJuIG1hdGNoXHJcbiAgICA/IG9rKHN0YXRlLCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXHJcbiAgICA6IGVycm9yKHN0YXRlKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgc3VwcGxpZWQgcmVndWxhclxyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXHJcbiAqIG1hdGNoLCBhbnkgbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0XHJcbiAqIGlzIGNvbnN1bWVkIHVwb24gZmFpbHVyZS5cclxuICpcclxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcclxuICogaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRob3V0IGZsYWdzLlxyXG4gKlxyXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxyXG4gKiBmbGFnIGlzIGluY2x1ZGVkLCBpdCdsbCBmdW5jdGlvbmFsbHkgYmUgaWdub3JlZCBhcyBvbmx5IHRoZSBmaXJzdFxyXG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXHJcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxyXG4gKiAgICAgdGhlIGlucHV0IHRleHQuIElmIHRoaXMgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgY29udmVydGVkIGludG9cclxuICogICAgIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXHJcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4ID0gcmUgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByZSlcclxuXHJcbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xyXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXHJcblxyXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XHJcbiAgY29uc3QgcmVhbmNob3IgPSBzb3VyY2VbMF0gIT09ICdeJ1xyXG4gIGlmIChyZWFuY2hvcikge1xyXG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXHJcbiAgICByZWdleCA9IG5ldyBSZWdFeHAobmV3U291cmNlLCBmbGFncylcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlZ2V4KShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMucmVnZXgocmVnZXgpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxyXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMZXR0ZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXJVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcclxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGFVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVBbHBoYSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFscGhhVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcclxuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXHJcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwcGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXBwZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy51cHBlclUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGxvd2VyY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzIGxvd2VyY2FzZSBpZiBpdCBoYXMgdGhlXHJcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG93ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMb3dlcikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmxvd2VyVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxyXG4gKiByZWNvZ25pemVzIGFyZSBzcGFjZSwgdGFiLCBhbmQgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChgXFxyYCwgYFxcbmAsXHJcbiAqIG9yIGBcXHJcXG5gKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlU3BhY2UpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxyXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXHJcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVc3BhY2UpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZVUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXHJcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxyXG4gKiB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGUgaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGVcclxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXMgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbbmV4dCwgX10gPSBSZWdleFBhcnNlcihyZVNwYWNlcykoc3RhdGUpXHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXHJcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xyXG4gKiB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLCB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGVcclxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcclxuICogcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXNVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShzdGF0ZSlcclxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxyXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbFxyXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxyXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXMxID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVNwYWNlczEpKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnNwYWNlczEpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcclxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXHJcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXHJcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IFJlZ2V4UGFyc2VyKHJlVXNwYWNlczEpKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnNwYWNlczFVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xyXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcclxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXHJcbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXHJcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxyXG4gKlxyXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXHJcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcclxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxyXG4gKlxyXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxyXG4gKiBgXFxyXFxuYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVOZXdsaW5lKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubmV3bGluZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcclxuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXHJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxyXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcclxuICpcclxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxyXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXHJcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcclxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcclxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXHJcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXHJcbiAqXHJcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcclxuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXHJcbiAqXHJcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXHJcbiAqIGBcXHJcXG5gLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVbmV3bGluZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm5ld2xpbmVVKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXHJcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgbmV4dENoYXJzLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXJ0aWN1bGFyIHN0cmluZyBmcm9tIHRoZVxyXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aFxyXG4gKiB0byBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcclxuICogYHRydWVgLCB0aGVuIHRoZSBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcclxuICogbGVmdCBpbiB0aGUgaW5wdXQuIEl0IHdpbGwgYWx3YXlzIHBhc3MgaWYgYGxlbmd0aGAgaXMgMC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXHJcbiAqICAgICBzaG91bGQgcmVhZC5cclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXHJcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXHJcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxyXG4gKi9cclxuY29uc3QgU3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2soc3RhdGUsICcnKVxyXG5cclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXHJcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXHJcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxyXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcclxuICogcmVjb2duaXplZCBwcm9wZXJseS5cclxuICpcclxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXHJcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xyXG4gKiAgICAgb2YgdGhlIGlucHV0LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXHJcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcclxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcclxuICApKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcclxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXHJcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXHJcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxyXG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxyXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXHJcbiAqXHJcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xyXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcclxuICogICAgIG9mIHRoZSBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xyXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5naScsIHN0cilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIoXHJcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxyXG4gICkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnN0cmluZ2koc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cclxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcclxuICByZXR1cm4gb2soc3RhdGUsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXHJcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcclxuICogbm90IHRoYXQgbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXHJcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFueVN0cmluZyhuKSlcclxufSlcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIgfSBmcm9tICcuL2NvcmUnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuU3RhdGV9IFN0YXRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuXHJcbiAqIGVuZGluZyB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcclxuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcclxuICogICAgIGluIGl0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxyXG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcclxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxyXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XHJcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXHJcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcclxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcclxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXHJcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcclxuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxyXG5cclxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcclxuICBsZXQgY3VycmVudCA9IHNcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZm9yd2FyZCkge1xyXG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXHJcbiAgfVxyXG5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XHJcbiAgICB5aWVsZCBjdXJyZW50XHJcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcclxuICB9XHJcbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXHJcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcclxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcclxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxyXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xyXG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxyXG4gICAgeyBsZW5ndGggfSxcclxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXHJcbiAgKVxyXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cclxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcclxuICogICAgIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcclxuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XHJcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcclxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXHJcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XHJcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXHJcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcclxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcclxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXHJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxyXG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXHJcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxyXG4gIHJldHVybiAxXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cclxuICpcclxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXHJcbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXHJcbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcclxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xyXG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cclxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXHJcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxyXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXHJcbiAqIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxyXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXHJcbiAqICAgICBkYXRhIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xyXG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcclxuICBsZXQgd2lkdGggPSAwXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXHJcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xyXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxyXG4gIH1cclxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XHJcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxyXG4gIH1cclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gc2luZ2xlIHF1b3Rlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IHNpbmdsZSBxdW90ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XHJcbiAgcmV0dXJuIGAnJHtzdHJ9J2BcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAqXHJcbiAqIFdoaWxlIHRoaXMgd2lsbCBkdXBsaWNhdGUgYW55IHZhbHVlLCBpdCdzIHByaW1hcmlseSB1c2VmdWwgZm9yXHJcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxyXG4gKiBzaG91bGQgZ2VuZXJhbGx5IGJlIGFuIGFycmF5IG9yIG9iamVjdC5cclxuICpcclxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxyXG4gKiBhbGxvdyBkZXN0cnVjdHVyaW5nIHRvIHJlZmVyZW5jZSBhbnkgYW5kIGFsbCBwYXJ0cyBvZiBhIHZhbHVlLCBidXQgaXRcclxuICogZG9lcyBub3QgaGF2ZSBhIHN5bnRheCAobGlrZSB0aGUgYEBgIG9wZXJhdG9yIGluIGxhbmd1YWdlcyBsaWtlIFNjYWxhXHJcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xyXG4gKiB0aGlzIGZ1bmN0aW9uLCBvbmUgb2YgdGhlIGNvcGllcyBjYW4gYmUgcmV0YWluZWQgYXMgYSB3aG9sZSB3aGlsZVxyXG4gKiBwcm92aWRpbmcgYW5vdGhlciBjb3B5IGZvciBkZXN0cnVjdHVyaW5nLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgW3dob2xlLCBbc3RhdGUsIHZhbHVlXV0gPSBkdXAocGFyc2UocGFyc2VyLCBpbnB1dCkpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gdmFsdWUgQW55IHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7W1tTdGF0ZSwgUmVzdWx0XSwgW1N0YXRlLCBSZXN1bHRdXX0gQW4gYXJyYXkgY29udGFpbmluZyB0d29cclxuICogICAgIGNvcGllcyBvZiB0aGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHVwKHZhbHVlKSB7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxyXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxyXG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcclxuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXHJcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXHJcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXHJcbiAqIHN0eWxlKS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXHJcbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xyXG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xyXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cclxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxyXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxyXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxyXG4gKiBjcmVhdGVkIGFuIGFyYml0cmFyeSBvYmplY3QuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFzc2lnbmVkIGFuXHJcbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxyXG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxyXG4gKiBvYmplY3QgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBmYWN0b3J5IGNyZWF0ZWQgaXQgb3IgYGZhbHNlYCBpZiBpdFxyXG4gKiBkaWQgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXVnbWVudGVkIHdpdGhcclxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXHJcbiAqICAgICBhZGRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhY2soZm4sIHByb3AgPSAnY3JlYXRlZCcpIHtcclxuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXHJcbiAgICAgIHRyYWNrZWQuYWRkKGNyZWF0ZWQpXHJcbiAgICAgIHJldHVybiBjcmVhdGVkXHJcbiAgICB9LFxyXG4gICAgcHJvcCxcclxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3RyaW5nIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcclxuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChuKSB7XHJcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cclxuICBjb25zdCB2ID0gbiAlIDEwMFxyXG4gIHJldHVybiBuICsgKHN1ZmZpeGVzWyh2IC0gMjApICUgMTBdID8/IHN1ZmZpeGVzW3ZdID8/IHN1ZmZpeGVzWzBdKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XHJcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcclxuICogYXJlIGFsc28gaW5jbHVkZWQgZm9yIHR5cGVzIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBzdXBwb3J0LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gbWFrZVBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxyXG4gKiBvbiBpdHMgZmlyc3QgbGV0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHByZXBlbmRlZCBhcnRpY2xlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcclxuICByZXR1cm4gJ2FlaW91QUVJT1UnLmluY2x1ZGVzKHN0clswXSkgPyBgYW4gJHtzdHJ9YCA6IGBhICR7c3RyfWBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9