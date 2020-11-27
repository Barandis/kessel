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
/*! exports provided: ordFormatter, ordinalChar, ordinalFunction, ordinalNumber, ordinalParser, ordinalString, assertChar, assertFunction, assertString, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFormatter", function() { return ordFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalChar", function() { return ordinalChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalFunction", function() { return ordinalFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalNumber", function() { return ordinalNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalParser", function() { return ordinalParser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinalString", function() { return ordinalString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertChar", function() { return assertChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFunction", function() { return assertFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertString", function() { return assertString; });
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
const strFormatter = formatter('a string');
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
function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(value) !== 1) {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || _core__WEBPACK_IMPORTED_MODULE_0__["makeParser"].created(value)) {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') {
    throw new Error(`[${name}]: ${formatter(value)}`);
  }
}
function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(Array.isArray(value) && value.every(c => typeof c === 'string' && Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(c) === 1) || typeof value === 'string')) {
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
function assertParser(name, value, formatter = parserFormatter) {
  if (typeof value !== 'function' || !_core__WEBPACK_IMPORTED_MODULE_0__["makeParser"].created(value)) {
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
  if (true) {
    for (const [i, p] of ps.entries()) {
      Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('choice', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    }
  }

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

const optional = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('optional', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  return result.status === Fatal ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
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

const fallback = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fallback', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
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

const backtrack = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('backtrack', p);
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
  if (true) {
    for (const [i, p] of ps.entries()) {
      Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sequenceB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    }
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chainB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bothB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bothB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('countB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('countB', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalNumber"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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

    if (true) {
      Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('blockB', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    }

    const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(value(next));
    next = nextState;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(nextState, result.errors, index);
    nextValue = result.value;
    i++;
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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  }

  const index = state.index;
  const [reply1, [next1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  if (result1.status !== Ok) return reply1;
  const [reply2, [next2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(fn(result1.value)(next1));
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

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('map', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('map', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  }

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

const join = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('join', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value.join('')) : reply;
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

const skip = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skip', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null) : reply;
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

const value = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('value', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
 * chain(p2, b => constant([a, b])))`.
 *
 * @param {Parser} p1 The first parser to apply.
 * @param {Parser} p2 The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const both = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('both', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('both', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  }

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
 * Note that, unlike `seq`, `null` parser results are *not* discarded.
 * This ensures that the same number of arguments are passed to `fn` no
 * matter the results from the parsers.
 *
 * `pipe(p1, p2, fn)` is an optimized implementation of `chain(p1, a =>
 * chain(p2, b => constant(fn(a, b))))`, `pipe(p1, p2, p3, fn)` is an
 * optimized implementation of `chain(p1, a => chain(p2, b => chain(p3,
 * c => constant(fn(a, b, c)))))`, and so on.
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

  if (true) {
    for (const [i, p] of ps.entries()) {
      Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('pipe', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["ordinal"])(i + 1)));
    }

    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["ordinal"])(ps.length + 1)));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('3rd'));
  }

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
 * constant(x[n]))`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */

const nth = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalNumber"])('2nd'));
  }

  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[n]) : reply;
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

const first = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('first', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[0]) : reply;
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

const second = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('second', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[1]) : reply;
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

const third = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('third', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[2]) : reply;
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

const fourth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fourth', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[3]) : reply;
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

const fifth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fifth', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(state));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, result.value[4]) : reply;
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
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyL, upper, constant, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, backtrack, blockB, bothB, chainB, choice, countB, fallback, leftB, manyTillB, optional, rightB, sequenceB, between, both, chain, fifth, first, fourth, join, left, map, nth, pipe, right, second, skip, third, value, followedBy, followedByL, lookAhead, notEmpty, notFollowedBy, notFollowedByL, backLabel, label, assocl, assocl1, assocr, assocr1, block, count, many, many1, manyTill, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Status, error, failure, fatal, makeParser, maybeFatal, ok, parse, result, run, succeeded, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "satisfyL", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["satisfyL"]; });

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
/*! exports provided: char, chari, satisfy, satisfyL, range, any, eof, anyOf, noneOf, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chari", function() { return chari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return satisfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfyL", function() { return satisfyL; });
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('char', c);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('chari', c);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfy', fn);
  return CharParser(fn)(state);
});
/**
 * Creates a parser that reads a single character and passes it to the
 * provided function. If the function returns `true`, this parser
 * succeeds with that character as the result. If the function returns
 * `false`, this parser fails and consumes no input and signals an error
 * with the provided message.
 *
 * `satisfyL(fn, message)` is an optimized implementation of
 * `label(satisfy(fn), message)`.
 *
 * @param {function(string):boolean} fn A function to which the next
 *     character is passed; if it returns `true`, the parser succeeds
 *     and if it returns `false` the parser fails.
 * @param {string} message The error message to use if the parser fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfyL = (fn, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfyL', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfyL', message, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  }

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
  if (true) {
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', start, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalChar"])('1st'));
    Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalChar"])('2nd'));
  }

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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('anyOf', chars);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('noneOf', chars);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fail', message);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failFatally', message);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failUnexpected', message);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrRegExp"])('regex', re); // First, convert to a regular expression if it's a string

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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('string', str);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('stringi', str);
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
  if (true) Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('anyString', n);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwicGFyc2VyRm9ybWF0dGVyIiwib3JkRm9ybWF0dGVyIiwib3JkIiwib3JkaW5hbENoYXIiLCJvcmRpbmFsRnVuY3Rpb24iLCJvcmRpbmFsTnVtYmVyIiwib3JkaW5hbFBhcnNlciIsIm9yZGluYWxTdHJpbmciLCJhc3NlcnRDaGFyIiwibmFtZSIsImNoYXJMZW5ndGgiLCJFcnJvciIsImFzc2VydEZ1bmN0aW9uIiwibWFrZVBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRTdHJpbmciLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJPayIsIkZhdGFsIiwiU3RhdHVzIiwiY2hvaWNlIiwicHMiLCJzdGF0ZSIsIkFTU0VSVCIsImkiLCJwIiwiZW50cmllcyIsIm9yZGluYWwiLCJlcnJvcnMiLCJyZXBseSIsIm5leHQiLCJyZXN1bHQiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsIiwiZXJyb3IiLCJvcHRpb25hbCIsIm9rIiwiZmFsbGJhY2siLCJ4IiwiYmFja3RyYWNrIiwiaW5kZXgiLCJlcnIiLCJuZXN0ZWQiLCJzZXF1ZW5jZUIiLCJ2YWx1ZXMiLCJuZXh0U3RhdGUiLCJwdXNoIiwiY2hhaW5CIiwiZm4iLCJyZXBseTEiLCJuZXh0MSIsInJlc3VsdDEiLCJyZXBseTIiLCJuZXh0MiIsInJlc3VsdDIiLCJsZWZ0QiIsInAxIiwicDIiLCJyaWdodEIiLCJib3RoQiIsImNvdW50QiIsIm4iLCJfIiwicmFuZ2UiLCJtYW55VGlsbEIiLCJlbmQiLCJibG9ja0IiLCJnZW5GbiIsImdlbiIsIm5leHRWYWx1ZSIsImRvbmUiLCJ2IiwiY2hhaW4iLCJtYXliZUZhdGFsIiwibWFwIiwiam9pbiIsInNraXAiLCJ0dXBsZSIsImxlZnQiLCJyaWdodCIsImJvdGgiLCJwaXBlIiwicG9wIiwibGVuZ3RoIiwiYmV0d2VlbiIsInByZSIsInBvc3QiLCJuZXh0MyIsInJlc3VsdDMiLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJsb29rQWhlYWQiLCJub3RFbXB0eSIsIm5vdEVtcHR5TCIsIm1zZyIsImV4cGVjdGVkIiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlMIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlMIiwiTmVzdGVkIiwiRXJyb3JUeXBlIiwicGFzcyIsImxhYmVsIiwiYmFja0xhYmVsIiwiY29tcG91bmQiLCJsb29wTWVzc2FnZSIsInNlcXVlbmNlIiwiYmxvY2siLCJtYW55IiwidmlldyIsImJ5dGVMZW5ndGgiLCJtYW55MSIsInNraXBNYW55Iiwic2tpcE1hbnkxIiwic2VwQnkiLCJzZXAiLCJuZXh0U3RhdGUxIiwibmV4dFN0YXRlMiIsIlR5cGVFcnJvciIsInNlcEJ5MSIsInNlcEVuZEJ5Iiwic2VwTmV4dCIsInNlcEVuZEJ5MSIsImNvdW50IiwibWFueVRpbGwiLCJhc3NvY2wiLCJvcCIsIm9wcyIsInJlcGx5b3AiLCJuZXh0b3AiLCJyZXN1bHRvcCIsInJlcGx5cCIsIm5leHRwIiwicmVzdWx0cCIsImFzc29jbDEiLCJhc3NvY3IiLCJhc3NvY3IxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiU3ltYm9sIiwibWFrZVN0YXRlIiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwic3VjY2VlZGVkIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwicmVwZWF0IiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImNvbW1hU2VwYXJhdGUiLCJmaWx0ZXIiLCJ1bmV4cE1zZyIsImV4cE1zZyIsImdlbmVyaWNNc2ciLCJuZXN0ZWRNc2ciLCJjb21wb3VuZE1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJpIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ2kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsIkNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwicmVhZCIsInRvTG93ZXJDYXNlIiwic2F0aXNmeSIsInNhdGlzZnlMIiwiY2hhcnMiLCJhcnIiLCJpbmNsdWRlcyIsImNvbnN0YW50IiwiZmFpbCIsImZhaWxGYXRhbGx5IiwiZmFpbFVuZXhwZWN0ZWQiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJzbGljZSIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFyZ3MiLCJhZGQiLCJoYXMiLCJiaW5kIiwic3VmZml4ZXMiLCJkZXNjcmlwdGlvbiIsIkpTT04iLCJhcnRpY2xpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBR0MsSUFBSSxJQUFJQyxLQUFLLElBQUssWUFBV0QsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENBQVEsRUFBL0U7O0FBRUEsTUFBTUUsYUFBYSxHQUFHSixTQUFTLENBQUMsd0JBQUQsQ0FBL0I7QUFDQSxNQUFNSyxXQUFXLEdBQUdMLFNBQVMsQ0FBQyxZQUFELENBQTdCO0FBQ0EsTUFBTU0sWUFBWSxHQUFHTixTQUFTLENBQUMsVUFBRCxDQUE5QjtBQUNBLE1BQU1PLGVBQWUsR0FBR1AsU0FBUyxDQUFDLG9DQUFELENBQWpDO0FBQ0EsTUFBTVEsY0FBYyxHQUFHUixTQUFTLENBQUMsa0NBQUQsQ0FBaEM7QUFDQSxNQUFNUyxZQUFZLEdBQUdULFNBQVMsQ0FBQyxVQUFELENBQTlCO0FBQ0EsTUFBTVUsZUFBZSxHQUFHVixTQUFTLENBQUMsVUFBRCxDQUFqQztBQUVPLE1BQU1XLFlBQVksR0FBRyxDQUFDVixJQUFELEVBQU9XLEdBQVAsS0FBZVYsS0FBSyxJQUM3QyxZQUFXVSxHQUFJLG1CQUFrQlgsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENBQVEsRUFEN0Q7QUFHQSxNQUFNVyxXQUFXLEdBQUdELEdBQUcsSUFBSUQsWUFBWSxDQUFDLHdCQUFELEVBQTJCQyxHQUEzQixDQUF2QztBQUNBLE1BQU1FLGVBQWUsR0FBR0YsR0FBRyxJQUFJRCxZQUFZLENBQUMsWUFBRCxFQUFlQyxHQUFmLENBQTNDO0FBQ0EsTUFBTUcsYUFBYSxHQUFHSCxHQUFHLElBQUlELFlBQVksQ0FBQyxVQUFELEVBQWFDLEdBQWIsQ0FBekM7QUFDQSxNQUFNSSxhQUFhLEdBQUdKLEdBQUcsSUFBSUQsWUFBWSxDQUFDLFVBQUQsRUFBYUMsR0FBYixDQUF6QztBQUNBLE1BQU1LLGFBQWEsR0FBR0wsR0FBRyxJQUFJRCxZQUFZLENBQUMsVUFBRCxFQUFhQyxHQUFiLENBQXpDO0FBRUEsU0FBU00sVUFBVCxDQUFvQkMsSUFBcEIsRUFBMEJqQixLQUExQixFQUFpQ0YsU0FBUyxHQUFHSSxhQUE3QyxFQUE0RDtBQUNqRSxNQUFJLE9BQU9GLEtBQVAsS0FBaUIsUUFBakIsSUFBNkJrQix3REFBVSxDQUFDbEIsS0FBRCxDQUFWLEtBQXNCLENBQXZELEVBQTBEO0FBQ3hELFVBQU0sSUFBSW1CLEtBQUosQ0FBVyxJQUFHRixJQUFLLE1BQUtuQixTQUFTLENBQUNFLEtBQUQsQ0FBUSxFQUF6QyxDQUFOO0FBQ0Q7QUFDRjtBQUVNLFNBQVNvQixjQUFULENBQXdCSCxJQUF4QixFQUE4QmpCLEtBQTlCLEVBQXFDRixTQUFTLEdBQUdLLFdBQWpELEVBQThEO0FBQ25FLE1BQUksT0FBT0gsS0FBUCxLQUFpQixVQUFqQixJQUErQnFCLGdEQUFVLENBQUNDLE9BQVgsQ0FBbUJ0QixLQUFuQixDQUFuQyxFQUE4RDtBQUM1RCxVQUFNLElBQUltQixLQUFKLENBQVcsSUFBR0YsSUFBSyxNQUFLbkIsU0FBUyxDQUFDRSxLQUFELENBQVEsRUFBekMsQ0FBTjtBQUNEO0FBQ0Y7QUFFTSxTQUFTdUIsWUFBVCxDQUFzQk4sSUFBdEIsRUFBNEJqQixLQUE1QixFQUFtQ0YsU0FBUyxHQUFHTSxZQUEvQyxFQUE2RDtBQUNsRSxNQUFJLE9BQU9KLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsVUFBTSxJQUFJbUIsS0FBSixDQUFXLElBQUdGLElBQUssTUFBS25CLFNBQVMsQ0FBQ0UsS0FBRCxDQUFRLEVBQXpDLENBQU47QUFDRDtBQUNGO0FBRU0sU0FBU3dCLG1CQUFULENBQTZCUCxJQUE3QixFQUFtQ2pCLEtBQW5DLEVBQTBDRixTQUFTLEdBQUdPLGVBQXRELEVBQXVFO0FBQzVFLE1BQUksRUFDRm9CLEtBQUssQ0FBQ0MsT0FBTixDQUFjMUIsS0FBZCxLQUNHQSxLQUFLLENBQUMyQixLQUFOLENBQVlDLENBQUMsSUFBSSxPQUFPQSxDQUFQLEtBQWEsUUFBYixJQUF5QlYsd0RBQVUsQ0FBQ1UsQ0FBRCxDQUFWLEtBQWtCLENBQTVELENBREgsSUFFRyxPQUFPNUIsS0FBUCxLQUFpQixRQUhsQixDQUFKLEVBSUc7QUFDRCxVQUFNLElBQUltQixLQUFKLENBQVcsSUFBR0YsSUFBSyxNQUFLbkIsU0FBUyxDQUFDRSxLQUFELENBQVEsRUFBekMsQ0FBTjtBQUNEO0FBQ0Y7QUFFTSxTQUFTNkIsb0JBQVQsQ0FBOEJaLElBQTlCLEVBQW9DakIsS0FBcEMsRUFBMkNGLFNBQVMsR0FBR1EsY0FBdkQsRUFBdUU7QUFDNUUsUUFBTVAsSUFBSSxHQUFHK0IsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0JqQyxLQUEvQixDQUFiOztBQUNBLE1BQUksT0FBT0EsS0FBUCxLQUFpQixRQUFqQixJQUE2QkQsSUFBSSxLQUFLLGlCQUExQyxFQUE2RDtBQUMzRCxVQUFNLElBQUlvQixLQUFKLENBQVcsSUFBR0YsSUFBSyxNQUFLbkIsU0FBUyxDQUFDRSxLQUFELENBQVEsRUFBekMsQ0FBTjtBQUNEO0FBQ0Y7QUFFTSxTQUFTa0MsWUFBVCxDQUFzQmpCLElBQXRCLEVBQTRCakIsS0FBNUIsRUFBbUNGLFNBQVMsR0FBR1MsWUFBL0MsRUFBNkQ7QUFDbEUsTUFBSSxPQUFPUCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCO0FBQzdCLFVBQU0sSUFBSW1CLEtBQUosQ0FBVyxJQUFHRixJQUFLLE1BQUtuQixTQUFTLENBQUNFLEtBQUQsQ0FBUSxFQUF6QyxDQUFOO0FBQ0Q7QUFDRjtBQUVNLFNBQVNtQyxZQUFULENBQXNCbEIsSUFBdEIsRUFBNEJqQixLQUE1QixFQUFtQ0YsU0FBUyxHQUFHVSxlQUEvQyxFQUFnRTtBQUNyRSxNQUFJLE9BQU9SLEtBQVAsS0FBaUIsVUFBakIsSUFBK0IsQ0FBQ3FCLGdEQUFVLENBQUNDLE9BQVgsQ0FBbUJ0QixLQUFuQixDQUFwQyxFQUErRDtBQUM3RCxVQUFNLElBQUltQixLQUFKLENBQVcsSUFBR0YsSUFBSyxNQUFLbkIsU0FBUyxDQUFDRSxLQUFELENBQVEsRUFBekMsQ0FBTjtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDeEVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFb0MsSUFBRjtBQUFNakIsT0FBTjtBQUFha0I7QUFBYixJQUF1QkMsa0RBQTdCO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBR0MsRUFBSixLQUFXbkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNuRDtBQUNBLE1BQUlDLElBQUosRUFBWTtBQUNWLFNBQUssTUFBTSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBWCxJQUFxQkosRUFBRSxDQUFDSyxPQUFILEVBQXJCLEVBQW1DO0FBQ2pDVix3RUFBWSxDQUFDLFFBQUQsRUFBV1MsQ0FBWCxFQUFjOUIsbUVBQWEsQ0FBQ2dDLDJEQUFPLENBQUNILENBQUMsR0FBRyxDQUFMLENBQVIsQ0FBM0IsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBSUksTUFBTSxHQUFHLEVBQWI7O0FBRUEsT0FBSyxNQUFNSCxDQUFYLElBQWdCSixFQUFoQixFQUFvQjtBQUNsQixVQUFNLENBQUNRLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxRQUFJUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUF0QixFQUEwQixPQUFPWSxLQUFQO0FBRTFCRCxVQUFNLEdBQUdNLDBEQUFLLENBQUNOLE1BQUQsRUFBU0csTUFBTSxDQUFDSCxNQUFoQixDQUFkO0FBQ0EsUUFBSUcsTUFBTSxDQUFDRSxNQUFQLEtBQWtCZixLQUF0QixFQUE2QixPQUFPaUIseURBQUssQ0FBQ0wsSUFBRCxFQUFPRixNQUFQLENBQVo7QUFDOUI7O0FBQ0QsU0FBT1EseURBQUssQ0FBQ2QsS0FBRCxFQUFRTSxNQUFSLENBQVo7QUFDRCxDQWpCMEMsQ0FBcEM7QUFtQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1TLFFBQVEsR0FBR1osQ0FBQyxJQUFJdkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUMvQztBQUNBLE1BQUlDLElBQUosRUFBWVAsa0VBQVksQ0FBQyxVQUFELEVBQWFTLENBQWIsQ0FBWjtBQUNaLFFBQU0sQ0FBQ0ksS0FBRCxFQUFRLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUFSLElBQTBCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUFuQztBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmYsS0FBbEIsR0FBMEJXLEtBQTFCLEdBQWtDUyxzREFBRSxDQUFDUixJQUFELEVBQU8sSUFBUCxDQUEzQztBQUNELENBTHNDLENBQWhDO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1TLFFBQVEsR0FBRyxDQUFDZCxDQUFELEVBQUllLENBQUosS0FBVXRDLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDcEQ7QUFDQSxNQUFJQyxJQUFKLEVBQVlQLGtFQUFZLENBQUMsVUFBRCxFQUFhUyxDQUFiLEVBQWdCOUIsbUVBQWEsQ0FBQyxLQUFELENBQTdCLENBQVo7QUFDWixRQUFNLENBQUNrQyxLQUFELEVBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQVIsSUFBMEJDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQW5DO0FBQ0EsU0FBT1MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBbEIsR0FBMEI2QixLQUExQixHQUFrQ1Msc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPVSxDQUFQLENBQTNDO0FBQ0QsQ0FMMkMsQ0FBckM7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxTQUFTLEdBQUdoQixDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ2hEO0FBQ0EsTUFBSUMsSUFBSixFQUFZUCxrRUFBWSxDQUFDLFdBQUQsRUFBY1MsQ0FBZCxDQUFaO0FBQ1osUUFBTWlCLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTSxDQUFDYixLQUFELEVBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQVIsSUFBMEJDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQW5DOztBQUNBLE1BQUlTLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQXRCLEVBQTBCO0FBQ3hCLFVBQU0wQixHQUFHLEdBQUdELEtBQUssS0FBS1osSUFBSSxDQUFDWSxLQUFmLEdBQ1JYLE1BQU0sQ0FBQ0gsTUFEQyxHQUVSZ0IsMkRBQU0sQ0FBQ2QsSUFBRCxFQUFPQyxNQUFNLENBQUNILE1BQWQsQ0FGVjtBQUdBLFdBQU9RLHlEQUFLLENBQUNOLElBQUQsRUFBT2EsR0FBUCxFQUFZRCxLQUFaLENBQVo7QUFDRDs7QUFDRCxTQUFPYixLQUFQO0FBQ0QsQ0FadUMsQ0FBakM7QUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWdCLFNBQVMsR0FBRyxDQUFDLEdBQUd4QixFQUFKLEtBQVduQiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ3REO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1YsU0FBSyxNQUFNLENBQUNDLENBQUQsRUFBSUMsQ0FBSixDQUFYLElBQXFCSixFQUFFLENBQUNLLE9BQUgsRUFBckIsRUFBbUM7QUFDakNWLHdFQUFZLENBQUMsV0FBRCxFQUFjUyxDQUFkLEVBQWlCOUIsbUVBQWEsQ0FBQ2dDLDJEQUFPLENBQUNILENBQUMsR0FBRyxDQUFMLENBQVIsQ0FBOUIsQ0FBWjtBQUNEO0FBQ0Y7O0FBQ0QsUUFBTXNCLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBTUosS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFDQSxNQUFJWixJQUFJLEdBQUdSLEtBQVg7O0FBRUEsT0FBSyxNQUFNRyxDQUFYLElBQWdCSixFQUFoQixFQUFvQjtBQUNsQixVQUFNLENBQUNRLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUF4QztBQUNBQSxRQUFJLEdBQUdpQixTQUFQO0FBRUEsUUFBSWhCLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmYsS0FBdEIsRUFBNkIsT0FBT1csS0FBUDs7QUFDN0IsUUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkI7QUFDM0IsWUFBTTJDLEdBQUcsR0FBR0QsS0FBSyxLQUFLWixJQUFJLENBQUNZLEtBQWYsR0FDUlgsTUFBTSxDQUFDSCxNQURDLEdBRVJnQiwyREFBTSxDQUFDZCxJQUFELEVBQU9DLE1BQU0sQ0FBQ0gsTUFBZCxDQUZWO0FBR0EsYUFBT1EseURBQUssQ0FBQ04sSUFBRCxFQUFPYSxHQUFQLEVBQVlELEtBQVosQ0FBWjtBQUNEOztBQUNELFFBQUlYLE1BQU0sQ0FBQ2xELEtBQVAsS0FBaUIsSUFBckIsRUFBMkJpRSxNQUFNLENBQUNFLElBQVAsQ0FBWWpCLE1BQU0sQ0FBQ2xELEtBQW5CO0FBQzVCOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9nQixNQUFQLENBQVQ7QUFDRCxDQXpCNkMsQ0FBdkM7QUEyQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1HLE1BQU0sR0FBRyxDQUFDeEIsQ0FBRCxFQUFJeUIsRUFBSixLQUFXaEQsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNuRDtBQUNBLE1BQUlDLElBQUosRUFBWTtBQUNWUCxzRUFBWSxDQUFDLFFBQUQsRUFBV1MsQ0FBWCxFQUFjOUIsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDQU0sd0VBQWMsQ0FBQyxRQUFELEVBQVdpRCxFQUFYLEVBQWV6RCxxRUFBZSxDQUFDLEtBQUQsQ0FBOUIsQ0FBZDtBQUNEOztBQUNELFFBQU1pRCxLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCckIsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBdEM7QUFDQSxNQUFJK0IsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCLE9BQU9rQyxNQUFQO0FBRTNCLFFBQU0sQ0FBQ0csTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCeEIsdURBQUcsQ0FBQ2tCLEVBQUUsQ0FBQ0csT0FBTyxDQUFDeEUsS0FBVCxDQUFGLENBQWtCdUUsS0FBbEIsQ0FBRCxDQUF0QztBQUNBLE1BQUlJLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJqQyxLQUF2QixFQUE4QixPQUFPc0QsTUFBUDtBQUM5QixRQUFNWCxHQUFHLEdBQUdELEtBQUssS0FBS2EsS0FBSyxDQUFDYixLQUFoQixHQUNSYyxPQUFPLENBQUM1QixNQURBLEdBRVJnQiwyREFBTSxDQUFDVyxLQUFELEVBQVFDLE9BQU8sQ0FBQzVCLE1BQWhCLENBRlY7QUFHQSxTQUFPUSx5REFBSyxDQUFDbUIsS0FBRCxFQUFRWixHQUFSLEVBQWFELEtBQWIsQ0FBWjtBQUNELENBakIwQyxDQUFwQztBQW1CUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNZSxLQUFLLEdBQUcsQ0FBQ0MsRUFBRCxFQUFLQyxFQUFMLEtBQVl6RCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ25EO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsT0FBRCxFQUFVMEMsRUFBVixFQUFjL0QsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDQXFCLHNFQUFZLENBQUMsT0FBRCxFQUFVMkMsRUFBVixFQUFjaEUsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDRDs7QUFDRCxRQUFNK0MsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFFQSxRQUFNLENBQUNTLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnJCLHVEQUFHLENBQUMwQixFQUFFLENBQUNwQyxLQUFELENBQUgsQ0FBdEM7QUFDQSxNQUFJK0IsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCLE9BQU9rQyxNQUFQO0FBRTNCLFFBQU0sQ0FBQ0csTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCeEIsdURBQUcsQ0FBQzJCLEVBQUUsQ0FBQ1AsS0FBRCxDQUFILENBQXRDO0FBQ0EsTUFBSUksT0FBTyxDQUFDdkIsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT29DLE1BQVA7QUFDOUIsTUFBSUUsT0FBTyxDQUFDdkIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCLE9BQU9xQixzREFBRSxDQUFDaUIsS0FBRCxFQUFRRixPQUFPLENBQUN4RSxLQUFoQixDQUFUO0FBRTNCLFFBQU04RCxHQUFHLEdBQUdELEtBQUssS0FBS2EsS0FBSyxDQUFDYixLQUFoQixHQUNSYyxPQUFPLENBQUM1QixNQURBLEdBRVJnQiwyREFBTSxDQUFDVyxLQUFELEVBQVFDLE9BQU8sQ0FBQzVCLE1BQWhCLENBRlY7QUFHQSxTQUFPUSx5REFBSyxDQUFDbUIsS0FBRCxFQUFRWixHQUFSLEVBQWFELEtBQWIsQ0FBWjtBQUNELENBbkIwQyxDQUFwQztBQXFCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNa0IsTUFBTSxHQUFHLENBQUNGLEVBQUQsRUFBS0MsRUFBTCxLQUFZekQsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNwRDtBQUNBLE1BQUlDLElBQUosRUFBWTtBQUNWUCxzRUFBWSxDQUFDLFFBQUQsRUFBVzBDLEVBQVgsRUFBZS9ELG1FQUFhLENBQUMsS0FBRCxDQUE1QixDQUFaO0FBQ0FxQixzRUFBWSxDQUFDLFFBQUQsRUFBVzJDLEVBQVgsRUFBZWhFLG1FQUFhLENBQUMsS0FBRCxDQUE1QixDQUFaO0FBQ0Q7O0FBQ0QsUUFBTStDLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBRUEsUUFBTSxDQUFDUyxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkJyQix1REFBRyxDQUFDMEIsRUFBRSxDQUFDcEMsS0FBRCxDQUFILENBQXRDO0FBQ0EsTUFBSStCLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJkLGtEQUFNLENBQUNGLEVBQTlCLEVBQWtDLE9BQU9rQyxNQUFQO0FBRWxDLFFBQU0sQ0FBQ0csTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCeEIsdURBQUcsQ0FBQzJCLEVBQUUsQ0FBQ1AsS0FBRCxDQUFILENBQXRDO0FBQ0EsTUFBSUksT0FBTyxDQUFDdkIsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCLE9BQU9zRCxNQUFQO0FBRTlCLFFBQU1YLEdBQUcsR0FBR0QsS0FBSyxLQUFLYSxLQUFLLENBQUNiLEtBQWhCLEdBQ1JjLE9BQU8sQ0FBQzVCLE1BREEsR0FFUmdCLDJEQUFNLENBQUNXLEtBQUQsRUFBUUMsT0FBTyxDQUFDNUIsTUFBaEIsQ0FGVjtBQUdBLFNBQU9RLHlEQUFLLENBQUNtQixLQUFELEVBQVFaLEdBQVIsRUFBYUQsS0FBYixDQUFaO0FBQ0QsQ0FsQjJDLENBQXJDO0FBb0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1tQixLQUFLLEdBQUcsQ0FBQ0gsRUFBRCxFQUFLQyxFQUFMLEtBQVl6RCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ25EO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsT0FBRCxFQUFVMEMsRUFBVixFQUFjL0QsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDQXFCLHNFQUFZLENBQUMsT0FBRCxFQUFVMkMsRUFBVixFQUFjaEUsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDRDs7QUFDRCxRQUFNK0MsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFFQSxRQUFNLENBQUNTLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnJCLHVEQUFHLENBQUMwQixFQUFFLENBQUNwQyxLQUFELENBQUgsQ0FBdEM7QUFDQSxNQUFJK0IsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCLE9BQU9rQyxNQUFQO0FBRTNCLFFBQU0sQ0FBQ0csTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCeEIsdURBQUcsQ0FBQzJCLEVBQUUsQ0FBQ1AsS0FBRCxDQUFILENBQXRDO0FBQ0EsTUFBSUksT0FBTyxDQUFDdkIsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT29DLE1BQVA7QUFDOUIsTUFBSUUsT0FBTyxDQUFDdkIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCLE9BQU9xQixzREFBRSxDQUFDaUIsS0FBRCxFQUFRLENBQUNGLE9BQU8sQ0FBQ3hFLEtBQVQsRUFBZ0IyRSxPQUFPLENBQUMzRSxLQUF4QixDQUFSLENBQVQ7QUFFM0IsUUFBTThELEdBQUcsR0FBR0QsS0FBSyxLQUFLYSxLQUFLLENBQUNiLEtBQWhCLEdBQ1JjLE9BQU8sQ0FBQzVCLE1BREEsR0FFUmdCLDJEQUFNLENBQUNXLEtBQUQsRUFBUUMsT0FBTyxDQUFDNUIsTUFBaEIsQ0FGVjtBQUdBLFNBQU9RLHlEQUFLLENBQUNtQixLQUFELEVBQVFaLEdBQVIsRUFBYUQsS0FBYixDQUFaO0FBQ0QsQ0FuQjBDLENBQXBDO0FBcUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNb0IsTUFBTSxHQUFHLENBQUNyQyxDQUFELEVBQUlzQyxDQUFKLEtBQVU3RCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ2xEO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsUUFBRCxFQUFXUyxDQUFYLEVBQWM5QixtRUFBYSxDQUFDLEtBQUQsQ0FBM0IsQ0FBWjtBQUNBb0Isc0VBQVksQ0FBQyxRQUFELEVBQVdnRCxDQUFYLEVBQWNyRSxtRUFBYSxDQUFDLEtBQUQsQ0FBM0IsQ0FBWjtBQUNEOztBQUNELFFBQU1nRCxLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLFFBQU1JLE1BQU0sR0FBRyxFQUFmO0FBQ0EsTUFBSWhCLElBQUksR0FBR1IsS0FBWDs7QUFFQSxPQUFLLE1BQU0wQyxDQUFYLElBQWdCQyx5REFBSyxDQUFDRixDQUFELENBQXJCLEVBQTBCO0FBQ3hCLFVBQU0sQ0FBQ2xDLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUF4QztBQUNBQSxRQUFJLEdBQUdpQixTQUFQO0FBQ0EsUUFBSWhCLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmYsS0FBdEIsRUFBNkIsT0FBT1csS0FBUDs7QUFDN0IsUUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkI7QUFDM0IsWUFBTTJDLEdBQUcsR0FBR0QsS0FBSyxLQUFLWixJQUFJLENBQUNZLEtBQWYsR0FDUlgsTUFBTSxDQUFDSCxNQURDLEdBRVJnQiwyREFBTSxDQUFDZCxJQUFELEVBQU9DLE1BQU0sQ0FBQ0gsTUFBZCxDQUZWO0FBR0EsYUFBT1EseURBQUssQ0FBQ04sSUFBRCxFQUFPYSxHQUFQLEVBQVlELEtBQVosQ0FBWjtBQUNEOztBQUNESSxVQUFNLENBQUNFLElBQVAsQ0FBWWpCLE1BQU0sQ0FBQ2xELEtBQW5CO0FBQ0Q7O0FBQ0QsU0FBT3lELHNEQUFFLENBQUNSLElBQUQsRUFBT2dCLE1BQVAsQ0FBVDtBQUNELENBdkJ5QyxDQUFuQztBQXlCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1vQixTQUFTLEdBQUcsQ0FBQ3pDLENBQUQsRUFBSTBDLEdBQUosS0FBWWpFLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDdkQ7QUFDQSxNQUFJQyxJQUFKLEVBQVk7QUFDVlAsc0VBQVksQ0FBQyxXQUFELEVBQWNTLENBQWQsRUFBaUI5QixtRUFBYSxDQUFDLEtBQUQsQ0FBOUIsQ0FBWjtBQUNBcUIsc0VBQVksQ0FBQyxXQUFELEVBQWNtRCxHQUFkLEVBQW1CeEUsbUVBQWEsQ0FBQyxLQUFELENBQWhDLENBQVo7QUFDRDs7QUFDRCxRQUFNK0MsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFDQSxRQUFNSSxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUloQixJQUFJLEdBQUdSLEtBQVg7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFNLENBQUM2QixNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkJyQix1REFBRyxDQUFDbUMsR0FBRyxDQUFDckMsSUFBRCxDQUFKLENBQXRDO0FBQ0FBLFFBQUksR0FBR3NCLEtBQVA7QUFDQSxRQUFJQyxPQUFPLENBQUNwQixNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPaUMsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUNwQixNQUFSLEtBQW1CaEIsRUFBdkIsRUFBMkI7QUFFM0IsVUFBTSxDQUFDcUMsTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCeEIsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSyxJQUFELENBQUYsQ0FBdEM7QUFDQUEsUUFBSSxHQUFHeUIsS0FBUDtBQUNBLFFBQUlDLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJmLEtBQXZCLEVBQThCLE9BQU9vQyxNQUFQOztBQUM5QixRQUFJRSxPQUFPLENBQUN2QixNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFDNUIsWUFBTTJDLEdBQUcsR0FBR0QsS0FBSyxLQUFLYSxLQUFLLENBQUNiLEtBQWhCLEdBQ1JSLDBEQUFLLENBQUNzQixPQUFPLENBQUM1QixNQUFULEVBQWlCeUIsT0FBTyxDQUFDekIsTUFBekIsQ0FERyxHQUVSZ0IsMkRBQU0sQ0FBQ1csS0FBRCxFQUFRckIsMERBQUssQ0FBQ3NCLE9BQU8sQ0FBQzVCLE1BQVQsRUFBaUJ5QixPQUFPLENBQUN6QixNQUF6QixDQUFiLENBRlY7QUFHQSxhQUFPUSx5REFBSyxDQUFDbUIsS0FBRCxFQUFRWixHQUFSLEVBQWFELEtBQWIsQ0FBWjtBQUNEOztBQUNESSxVQUFNLENBQUNFLElBQVAsQ0FBWVEsT0FBTyxDQUFDM0UsS0FBcEI7QUFDRDs7QUFDRCxTQUFPeUQsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPZ0IsTUFBUCxDQUFUO0FBQ0QsQ0E1QjhDLENBQXhDO0FBOEJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1zQixNQUFNLEdBQUdDLEtBQUssSUFBSW5FLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDakQsUUFBTWdELEdBQUcsR0FBR0QsS0FBSyxFQUFqQjtBQUNBLFFBQU0zQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLE1BQUk2QixTQUFKO0FBQ0EsTUFBSXpDLElBQUksR0FBR1IsS0FBWDtBQUNBLE1BQUlFLENBQUMsR0FBRyxDQUFSOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTTtBQUFFM0MsV0FBRjtBQUFTMkY7QUFBVCxRQUFrQkYsR0FBRyxDQUFDeEMsSUFBSixDQUFTeUMsU0FBVCxDQUF4QjtBQUNBLFFBQUlDLElBQUosRUFBVSxPQUFPbEMsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPakQsS0FBUCxDQUFUO0FBRVY7O0FBQ0EsUUFBSTBDLElBQUosRUFBWTtBQUNWUCx3RUFBWSxDQUFDLFFBQUQsRUFBV25DLEtBQVgsRUFBa0I0RixDQUFDLElBQUssWUFDbEM5QywyREFBTyxDQUFDSCxDQUFDLEdBQUcsQ0FBTCxDQUNSLG1DQUFrQzFDLDZEQUFTLENBQUMyRixDQUFELENBQUksRUFGcEMsQ0FBWjtBQUdEOztBQUNELFVBQU0sQ0FBQzVDLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDbkQsS0FBSyxDQUFDaUQsSUFBRCxDQUFOLENBQXhDO0FBQ0FBLFFBQUksR0FBR2lCLFNBQVA7QUFFQSxRQUFJaEIsTUFBTSxDQUFDRSxNQUFQLEtBQWtCZixLQUF0QixFQUE2QixPQUFPVyxLQUFQO0FBQzdCLFFBQUlFLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmpDLEtBQXRCLEVBQTZCLE9BQU9vQyx5REFBSyxDQUFDVyxTQUFELEVBQVloQixNQUFNLENBQUNILE1BQW5CLEVBQTJCYyxLQUEzQixDQUFaO0FBQzdCNkIsYUFBUyxHQUFHeEMsTUFBTSxDQUFDbEQsS0FBbkI7QUFDQTJDLEtBQUM7QUFDRjtBQUNGLENBekJ3QyxDQUFsQyxDOzs7Ozs7Ozs7Ozs7QUN2Y1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFRQTtBQUNBO0FBRUEsTUFBTTtBQUFFUDtBQUFGLElBQVNFLGtEQUFmO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11RCxLQUFLLEdBQUcsQ0FBQ2pELENBQUQsRUFBSXlCLEVBQUosS0FBV2hELDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDbEQ7QUFDQSxNQUFJQyxJQUFKLEVBQVk7QUFDVlAsc0VBQVksQ0FBQyxPQUFELEVBQVVTLENBQVYsRUFBYTlCLG1FQUFhLENBQUMsS0FBRCxDQUExQixDQUFaO0FBQ0FNLHdFQUFjLENBQUMsT0FBRCxFQUFVaUQsRUFBVixFQUFjekQscUVBQWUsQ0FBQyxLQUFELENBQTdCLENBQWQ7QUFDRDs7QUFDRCxRQUFNaUQsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFFQSxRQUFNLENBQUNTLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnJCLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQXRDO0FBQ0EsTUFBSStCLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJoQixFQUF2QixFQUEyQixPQUFPa0MsTUFBUDtBQUUzQixRQUFNLENBQUNHLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnhCLHVEQUFHLENBQUNrQixFQUFFLENBQUNHLE9BQU8sQ0FBQ3hFLEtBQVQsQ0FBRixDQUFrQnVFLEtBQWxCLENBQUQsQ0FBdEM7QUFDQSxTQUFPSSxPQUFPLENBQUN2QixNQUFSLEtBQW1CaEIsRUFBbkIsR0FBd0JxQyxNQUF4QixHQUNIcUIsOERBQVUsQ0FBQ3BCLEtBQUssQ0FBQ2IsS0FBTixLQUFnQkEsS0FBakIsRUFBd0JhLEtBQXhCLEVBQStCQyxPQUFPLENBQUM1QixNQUF2QyxDQURkO0FBRUQsQ0FkeUMsQ0FBbkM7QUFnQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNZ0QsR0FBRyxHQUFHLENBQUNuRCxDQUFELEVBQUl5QixFQUFKLEtBQVdoRCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ2hEO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsS0FBRCxFQUFRUyxDQUFSLEVBQVc5QixtRUFBYSxDQUFDLEtBQUQsQ0FBeEIsQ0FBWjtBQUNBTSx3RUFBYyxDQUFDLEtBQUQsRUFBUWlELEVBQVIsRUFBWXpELHFFQUFlLENBQUMsS0FBRCxDQUEzQixDQUFkO0FBQ0Q7O0FBQ0QsUUFBTSxDQUFDb0MsS0FBRCxFQUFRLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUFSLElBQTBCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUFuQztBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLEdBQXVCcUIsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPb0IsRUFBRSxDQUFDbkIsTUFBTSxDQUFDbEQsS0FBUixDQUFULENBQXpCLEdBQW9EZ0QsS0FBM0Q7QUFDRCxDQVJ1QyxDQUFqQztBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWdELElBQUksR0FBR3BELENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDM0M7QUFDQSxNQUFJQyxJQUFKLEVBQVlQLGtFQUFZLENBQUMsTUFBRCxFQUFTUyxDQUFULENBQVo7QUFDWixRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhZ0csSUFBYixDQUFrQixFQUFsQixDQUFQLENBQXpCLEdBQXlEaEQsS0FBaEU7QUFDRCxDQUxrQyxDQUE1QjtBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaUQsSUFBSSxHQUFHckQsQ0FBQyxJQUFJdkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUMzQztBQUNBLE1BQUlDLElBQUosRUFBWVAsa0VBQVksQ0FBQyxNQUFELEVBQVNTLENBQVQsQ0FBWjtBQUNaLFFBQU0sQ0FBQ0ksS0FBRCxFQUFRLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUFSLElBQTBCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUFuQztBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLEdBQXVCcUIsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPLElBQVAsQ0FBekIsR0FBd0NELEtBQS9DO0FBQ0QsQ0FMa0MsQ0FBNUI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaEQsS0FBSyxHQUFHLENBQUM0QyxDQUFELEVBQUllLENBQUosS0FBVXRDLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDakQ7QUFDQSxNQUFJQyxJQUFKLEVBQVlQLGtFQUFZLENBQUMsT0FBRCxFQUFVUyxDQUFWLEVBQWE5QixtRUFBYSxDQUFDLEtBQUQsQ0FBMUIsQ0FBWjtBQUNaLFFBQU0sQ0FBQ29GLEtBQUQsRUFBUSxDQUFDakQsSUFBRCxFQUFPQyxNQUFQLENBQVIsSUFBMEJDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQW5DO0FBQ0EsU0FBT1MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBbEIsR0FBdUJxQixzREFBRSxDQUFDUixJQUFELEVBQU9VLENBQVAsQ0FBekIsR0FBcUN1QyxLQUE1QztBQUNELENBTHdDLENBQWxDO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxJQUFJLEdBQUcsQ0FBQ3RCLEVBQUQsRUFBS0MsRUFBTCxLQUFZekQsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNsRDtBQUNBLE1BQUlDLElBQUosRUFBWTtBQUNWUCxzRUFBWSxDQUFDLE1BQUQsRUFBUzBDLEVBQVQsRUFBYS9ELG1FQUFhLENBQUMsS0FBRCxDQUExQixDQUFaO0FBQ0FxQixzRUFBWSxDQUFDLE1BQUQsRUFBUzJDLEVBQVQsRUFBYWhFLG1FQUFhLENBQUMsS0FBRCxDQUExQixDQUFaO0FBQ0Q7O0FBQ0QsUUFBTStDLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBRUEsUUFBTSxDQUFDUyxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkJyQix1REFBRyxDQUFDMEIsRUFBRSxDQUFDcEMsS0FBRCxDQUFILENBQXRDO0FBQ0EsTUFBSStCLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJoQixFQUF2QixFQUEyQixPQUFPa0MsTUFBUDtBQUUzQixRQUFNLENBQUNJLEtBQUQsRUFBUUMsT0FBUixJQUFtQkcsRUFBRSxDQUFDUCxLQUFELENBQTNCO0FBQ0EsU0FBT0ksT0FBTyxDQUFDdkIsTUFBUixLQUFtQmhCLEVBQW5CLEdBQXdCcUIsc0RBQUUsQ0FBQ2lCLEtBQUQsRUFBUUYsT0FBTyxDQUFDeEUsS0FBaEIsQ0FBMUIsR0FDSDhGLDhEQUFVLENBQUNwQixLQUFLLENBQUNiLEtBQU4sS0FBZ0JBLEtBQWpCLEVBQXdCYSxLQUF4QixFQUErQkMsT0FBTyxDQUFDNUIsTUFBdkMsQ0FEZDtBQUVELENBZHlDLENBQW5DO0FBZ0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXFELEtBQUssR0FBRyxDQUFDdkIsRUFBRCxFQUFLQyxFQUFMLEtBQVl6RCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ25EO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsT0FBRCxFQUFVMEMsRUFBVixFQUFjL0QsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDQXFCLHNFQUFZLENBQUMsT0FBRCxFQUFVMkMsRUFBVixFQUFjaEUsbUVBQWEsQ0FBQyxLQUFELENBQTNCLENBQVo7QUFDRDs7QUFDRCxRQUFNK0MsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFFQSxRQUFNLENBQUNTLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnJCLHVEQUFHLENBQUMwQixFQUFFLENBQUNwQyxLQUFELENBQUgsQ0FBdEM7QUFDQSxNQUFJK0IsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmQsa0RBQU0sQ0FBQ0YsRUFBOUIsRUFBa0MsT0FBT2tDLE1BQVA7QUFFbEMsUUFBTSxDQUFDRyxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkJ4Qix1REFBRyxDQUFDMkIsRUFBRSxDQUFDUCxLQUFELENBQUgsQ0FBdEM7QUFDQSxTQUFPSSxPQUFPLENBQUN2QixNQUFSLEtBQW1CaEIsRUFBbkIsR0FBd0JxQyxNQUF4QixHQUNIcUIsOERBQVUsQ0FBQ3BCLEtBQUssQ0FBQ2IsS0FBTixLQUFnQkEsS0FBakIsRUFBd0JhLEtBQXhCLEVBQStCQyxPQUFPLENBQUM1QixNQUF2QyxDQURkO0FBRUQsQ0FkMEMsQ0FBcEM7QUFnQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNc0QsSUFBSSxHQUFHLENBQUN4QixFQUFELEVBQUtDLEVBQUwsS0FBWXpELDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDbEQ7QUFDQSxNQUFJQyxJQUFKLEVBQVk7QUFDVlAsc0VBQVksQ0FBQyxNQUFELEVBQVMwQyxFQUFULEVBQWEvRCxtRUFBYSxDQUFDLEtBQUQsQ0FBMUIsQ0FBWjtBQUNBcUIsc0VBQVksQ0FBQyxNQUFELEVBQVMyQyxFQUFULEVBQWFoRSxtRUFBYSxDQUFDLEtBQUQsQ0FBMUIsQ0FBWjtBQUNEOztBQUNELFFBQU0rQyxLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUVBLFFBQU0sQ0FBQ1MsTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCckIsdURBQUcsQ0FBQzBCLEVBQUUsQ0FBQ3BDLEtBQUQsQ0FBSCxDQUF0QztBQUNBLE1BQUkrQixPQUFPLENBQUNwQixNQUFSLEtBQW1CaEIsRUFBdkIsRUFBMkIsT0FBT2tDLE1BQVA7QUFFM0IsUUFBTSxDQUFDSSxLQUFELEVBQVFDLE9BQVIsSUFBbUJHLEVBQUUsQ0FBQ1AsS0FBRCxDQUEzQjtBQUNBLFNBQU9JLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJoQixFQUFuQixHQUF3QnFCLHNEQUFFLENBQUNpQixLQUFELEVBQVEsQ0FBQ0YsT0FBTyxDQUFDeEUsS0FBVCxFQUFnQjJFLE9BQU8sQ0FBQzNFLEtBQXhCLENBQVIsQ0FBMUIsR0FDSDhGLDhEQUFVLENBQUNwQixLQUFLLENBQUNiLEtBQU4sS0FBZ0JBLEtBQWpCLEVBQXdCYSxLQUF4QixFQUErQkMsT0FBTyxDQUFDNUIsTUFBdkMsQ0FEZDtBQUVELENBZHlDLENBQW5DO0FBZ0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11RCxJQUFJLEdBQUcsQ0FBQyxHQUFHOUQsRUFBSixLQUFXbkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNqRCxRQUFNNEIsRUFBRSxHQUFHN0IsRUFBRSxDQUFDK0QsR0FBSCxFQUFYO0FBQ0E7O0FBQ0EsTUFBSTdELElBQUosRUFBWTtBQUNWLFNBQUssTUFBTSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FBWCxJQUFxQkosRUFBRSxDQUFDSyxPQUFILEVBQXJCLEVBQW1DO0FBQ2pDVix3RUFBWSxDQUFDLE1BQUQsRUFBU1MsQ0FBVCxFQUFZOUIsbUVBQWEsQ0FBQ2dDLDJEQUFPLENBQUNILENBQUMsR0FBRyxDQUFMLENBQVIsQ0FBekIsQ0FBWjtBQUNEOztBQUNEdkIsd0VBQWMsQ0FBQyxNQUFELEVBQVNpRCxFQUFULEVBQWF6RCxxRUFBZSxDQUFDa0MsMkRBQU8sQ0FBQ04sRUFBRSxDQUFDZ0UsTUFBSCxHQUFZLENBQWIsQ0FBUixDQUE1QixDQUFkO0FBQ0Q7O0FBQ0QsUUFBTTNDLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTUksTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJaEIsSUFBSSxHQUFHUixLQUFYOztBQUVBLE9BQUssTUFBTUcsQ0FBWCxJQUFnQkosRUFBaEIsRUFBb0I7QUFDbEIsVUFBTSxDQUFDMEIsU0FBRCxFQUFZaEIsTUFBWixJQUFzQk4sQ0FBQyxDQUFDSyxJQUFELENBQTdCO0FBQ0FBLFFBQUksR0FBR2lCLFNBQVA7O0FBRUEsUUFBSWhCLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQXRCLEVBQTBCO0FBQ3hCLGFBQU8wRCw4REFBVSxDQUFDN0MsSUFBSSxDQUFDWSxLQUFMLEtBQWVBLEtBQWhCLEVBQXVCWixJQUF2QixFQUE2QkMsTUFBTSxDQUFDSCxNQUFwQyxDQUFqQjtBQUNEOztBQUNEa0IsVUFBTSxDQUFDRSxJQUFQLENBQVlqQixNQUFNLENBQUNsRCxLQUFuQjtBQUNEOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9vQixFQUFFLENBQUMsR0FBR0osTUFBSixDQUFULENBQVQ7QUFDRCxDQXZCd0MsQ0FBbEM7QUF5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXdDLE9BQU8sR0FBRyxDQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWS9ELENBQVosS0FBa0J2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzNEO0FBQ0EsTUFBSUMsSUFBSixFQUFZO0FBQ1ZQLHNFQUFZLENBQUMsU0FBRCxFQUFZdUUsR0FBWixFQUFpQjVGLG1FQUFhLENBQUMsS0FBRCxDQUE5QixDQUFaO0FBQ0FxQixzRUFBWSxDQUFDLFNBQUQsRUFBWXdFLElBQVosRUFBa0I3RixtRUFBYSxDQUFDLEtBQUQsQ0FBL0IsQ0FBWjtBQUNBcUIsc0VBQVksQ0FBQyxTQUFELEVBQVlTLENBQVosRUFBZTlCLG1FQUFhLENBQUMsS0FBRCxDQUE1QixDQUFaO0FBQ0Q7O0FBQ0QsUUFBTStDLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBRUEsUUFBTSxDQUFDUyxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkJyQix1REFBRyxDQUFDdUQsR0FBRyxDQUFDakUsS0FBRCxDQUFKLENBQXRDO0FBQ0EsTUFBSStCLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJoQixFQUF2QixFQUEyQixPQUFPa0MsTUFBUDtBQUUzQixRQUFNLENBQUNJLEtBQUQsRUFBUUMsT0FBUixJQUFtQi9CLENBQUMsQ0FBQzJCLEtBQUQsQ0FBMUI7O0FBQ0EsTUFBSUksT0FBTyxDQUFDdkIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCO0FBQ3pCLFdBQU8wRCw4REFBVSxDQUFDcEIsS0FBSyxDQUFDYixLQUFOLEtBQWdCQSxLQUFqQixFQUF3QmEsS0FBeEIsRUFBK0JDLE9BQU8sQ0FBQzVCLE1BQXZDLENBQWpCO0FBQ0Q7O0FBRUQsUUFBTSxDQUFDNkQsS0FBRCxFQUFRQyxPQUFSLElBQW1CRixJQUFJLENBQUNqQyxLQUFELENBQTdCO0FBQ0EsU0FBT21DLE9BQU8sQ0FBQ3pELE1BQVIsS0FBbUJoQixFQUFuQixHQUF3QnFCLHNEQUFFLENBQUNtRCxLQUFELEVBQVFqQyxPQUFPLENBQUMzRSxLQUFoQixDQUExQixHQUNIOEYsOERBQVUsQ0FBQ2MsS0FBSyxDQUFDL0MsS0FBTixLQUFnQkEsS0FBakIsRUFBd0IrQyxLQUF4QixFQUErQkMsT0FBTyxDQUFDOUQsTUFBdkMsQ0FEZDtBQUVELENBcEJrRCxDQUE1QztBQXNCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTStELEdBQUcsR0FBRyxDQUFDbEUsQ0FBRCxFQUFJc0MsQ0FBSixLQUFVN0QsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUMvQztBQUNBLE1BQUlDLElBQUosRUFBWTtBQUNWUCxzRUFBWSxDQUFDLEtBQUQsRUFBUVMsQ0FBUixFQUFXOUIsbUVBQWEsQ0FBQyxLQUFELENBQXhCLENBQVo7QUFDQW9CLHNFQUFZLENBQUMsS0FBRCxFQUFRZ0QsQ0FBUixFQUFXckUsbUVBQWEsQ0FBQyxLQUFELENBQXhCLENBQVo7QUFDRDs7QUFDRCxRQUFNLENBQUNtQyxLQUFELEVBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQVIsSUFBMEJDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQW5DO0FBQ0EsU0FBT1MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBbEIsR0FBdUJxQixzREFBRSxDQUFDUixJQUFELEVBQU9DLE1BQU0sQ0FBQ2xELEtBQVAsQ0FBYWtGLENBQWIsQ0FBUCxDQUF6QixHQUFtRGxDLEtBQTFEO0FBQ0QsQ0FSc0MsQ0FBaEM7QUFVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0rRCxLQUFLLEdBQUduRSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzVDO0FBQ0FOLG9FQUFZLENBQUMsT0FBRCxFQUFVUyxDQUFWLENBQVo7QUFDQSxRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhLENBQWIsQ0FBUCxDQUF6QixHQUFtRGdELEtBQTFEO0FBQ0QsQ0FMbUMsQ0FBN0I7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1nRSxNQUFNLEdBQUdwRSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzdDO0FBQ0FOLG9FQUFZLENBQUMsUUFBRCxFQUFXUyxDQUFYLENBQVo7QUFDQSxRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhLENBQWIsQ0FBUCxDQUF6QixHQUFtRGdELEtBQTFEO0FBQ0QsQ0FMb0MsQ0FBOUI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1pRSxLQUFLLEdBQUdyRSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzVDO0FBQ0FOLG9FQUFZLENBQUMsT0FBRCxFQUFVUyxDQUFWLENBQVo7QUFDQSxRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhLENBQWIsQ0FBUCxDQUF6QixHQUFtRGdELEtBQTFEO0FBQ0QsQ0FMbUMsQ0FBN0I7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1rRSxNQUFNLEdBQUd0RSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzdDO0FBQ0FOLG9FQUFZLENBQUMsUUFBRCxFQUFXUyxDQUFYLENBQVo7QUFDQSxRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhLENBQWIsQ0FBUCxDQUF6QixHQUFtRGdELEtBQTFEO0FBQ0QsQ0FMb0MsQ0FBOUI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1tRSxLQUFLLEdBQUd2RSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQzVDO0FBQ0FOLG9FQUFZLENBQUMsT0FBRCxFQUFVUyxDQUFWLENBQVo7QUFDQSxRQUFNLENBQUNJLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBT0MsTUFBTSxDQUFDbEQsS0FBUCxDQUFhLENBQWIsQ0FBUCxDQUF6QixHQUFtRGdELEtBQTFEO0FBQ0QsQ0FMbUMsQ0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDN2JQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRVo7QUFBRixJQUFTRSxrREFBZjtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThFLFNBQVMsR0FBR3hFLENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDaEQsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTSxDQUFDWixJQUFELEVBQU9DLE1BQVAsSUFBaUJOLENBQUMsQ0FBQ0gsS0FBRCxDQUF4QjtBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLEdBQXVCcUIsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPQyxNQUFNLENBQUNsRCxLQUFkLEVBQXFCNkQsS0FBckIsQ0FBekIsR0FDSE4seURBQUssQ0FBQ04sSUFBRCxFQUFPQyxNQUFNLENBQUNILE1BQWQsRUFBc0JjLEtBQXRCLENBRFQ7QUFFRCxDQUx1QyxDQUFqQztBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXdELFFBQVEsR0FBR3pFLENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDL0MsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTSxDQUFDYixLQUFELEVBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQVIsSUFBMEJDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQW5DO0FBQ0EsU0FBT1MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBbEIsSUFBd0JhLElBQUksQ0FBQ1ksS0FBTCxLQUFlQSxLQUF2QyxHQUErQ2IsS0FBL0MsR0FBdURPLHlEQUFLLENBQUNOLElBQUQsQ0FBbkU7QUFDRCxDQUpzQyxDQUFoQztBQU1QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNcUUsU0FBUyxHQUFHLENBQUMxRSxDQUFELEVBQUkyRSxHQUFKLEtBQVlsRyw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ3ZELFFBQU1vQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLFFBQU0sQ0FBQ2IsS0FBRCxFQUFRLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUFSLElBQTBCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUFuQztBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLElBQXdCYSxJQUFJLENBQUNZLEtBQUwsS0FBZUEsS0FBdkMsR0FBK0NiLEtBQS9DLEdBQ0hPLHlEQUFLLENBQUNOLElBQUQsRUFBT3VFLDZEQUFRLENBQUNELEdBQUQsQ0FBZixDQURUO0FBRUQsQ0FMOEMsQ0FBeEM7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRSxVQUFVLEdBQUc3RSxDQUFDLElBQUl2Qiw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ2pELFFBQU1vQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLFFBQU0sQ0FBQ1osSUFBRCxFQUFPQyxNQUFQLElBQWlCTixDQUFDLENBQUNILEtBQUQsQ0FBeEI7QUFDQSxTQUFPUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUFsQixHQUF1QnFCLHNEQUFFLENBQUNSLElBQUQsRUFBTyxJQUFQLEVBQWFZLEtBQWIsQ0FBekIsR0FDSE4seURBQUssQ0FBQ04sSUFBRCxFQUFPeUUsU0FBUCxFQUFrQjdELEtBQWxCLENBRFQ7QUFFRCxDQUx3QyxDQUFsQztBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThELFdBQVcsR0FBRyxDQUFDL0UsQ0FBRCxFQUFJMkUsR0FBSixLQUFZbEcsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUN6RCxRQUFNb0IsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFDQSxRQUFNLENBQUNaLElBQUQsRUFBT0MsTUFBUCxJQUFpQk4sQ0FBQyxDQUFDSCxLQUFELENBQXhCO0FBQ0EsU0FBT1MsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBbEIsR0FBdUJxQixzREFBRSxDQUFDUixJQUFELEVBQU8sSUFBUCxFQUFhWSxLQUFiLENBQXpCLEdBQ0hOLHlEQUFLLENBQUNOLElBQUQsRUFBT3VFLDZEQUFRLENBQUNELEdBQUQsQ0FBZixFQUFzQjFELEtBQXRCLENBRFQ7QUFFRCxDQUxnRCxDQUExQztBQU9QO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTStELGFBQWEsR0FBR2hGLENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDcEQsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTSxDQUFDWixJQUFELEVBQU9DLE1BQVAsSUFBaUJOLENBQUMsQ0FBQ0gsS0FBRCxDQUF4QjtBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLEdBQXVCbUIseURBQUssQ0FBQ04sSUFBRCxFQUFPeUUsU0FBUCxFQUFrQjdELEtBQWxCLENBQTVCLEdBQ0hKLHNEQUFFLENBQUNSLElBQUQsRUFBTyxJQUFQLEVBQWFZLEtBQWIsQ0FETjtBQUVELENBTDJDLENBQXJDO0FBT1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1nRSxjQUFjLEdBQUcsQ0FBQ2pGLENBQUQsRUFBSTJFLEdBQUosS0FBWWxHLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDNUQsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTSxDQUFDWixJQUFELEVBQU9DLE1BQVAsSUFBaUJOLENBQUMsQ0FBQ0gsS0FBRCxDQUF4QjtBQUNBLFNBQU9TLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQWxCLEdBQXVCbUIseURBQUssQ0FBQ04sSUFBRCxFQUFPdUUsNkRBQVEsQ0FBQ0QsR0FBRCxDQUFmLEVBQXNCMUQsS0FBdEIsQ0FBNUIsR0FDSEosc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPLElBQVAsRUFBYVksS0FBYixDQUROO0FBRUQsQ0FMbUQsQ0FBN0MsQzs7Ozs7Ozs7Ozs7O0FDdEpQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFekI7QUFBRixJQUFTRSxrREFBZjtBQUNBLE1BQU07QUFBRXdGO0FBQUYsSUFBYUMsc0RBQW5CO0FBRUE7O0FBRUEsU0FBU0MsSUFBVCxDQUFjdkYsS0FBZCxFQUFxQlMsTUFBckIsRUFBNkJILE1BQTdCLEVBQXFDO0FBQ25DLFNBQU8sQ0FBQyxFQUFFLEdBQUdOO0FBQUwsR0FBRCxFQUFlLEVBQUUsR0FBR1MsTUFBTDtBQUFhSDtBQUFiLEdBQWYsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxNQUFNa0YsS0FBSyxHQUFHLENBQUNyRixDQUFELEVBQUkyRSxHQUFKLEtBQVlsRyw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ25ELFFBQU1vQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLFFBQU0sQ0FBQ2IsS0FBRCxFQUFRLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUFSLElBQTBCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUFuQztBQUNBLFNBQU9vQixLQUFLLEtBQUtaLElBQUksQ0FBQ1ksS0FBZixHQUF1Qm1FLElBQUksQ0FBQy9FLElBQUQsRUFBT0MsTUFBUCxFQUFlc0UsNkRBQVEsQ0FBQ0QsR0FBRCxDQUF2QixDQUEzQixHQUEyRHZFLEtBQWxFO0FBQ0QsQ0FKMEMsQ0FBcEM7QUFNUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWtGLFNBQVMsR0FBRyxDQUFDdEYsQ0FBRCxFQUFJMkUsR0FBSixLQUFZbEcsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUN2RCxRQUFNb0IsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBcEI7QUFDQSxRQUFNLENBQUNiLEtBQUQsRUFBUSxDQUFDQyxJQUFELEVBQU9DLE1BQVAsQ0FBUixJQUEwQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBbkM7O0FBQ0EsTUFBSVMsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBdEIsRUFBMEI7QUFDeEIsV0FBT3lCLEtBQUssS0FBS1osSUFBSSxDQUFDWSxLQUFmLEdBQ0htRSxJQUFJLENBQUMvRSxJQUFELEVBQU9DLE1BQVAsRUFBZXNFLDZEQUFRLENBQUNELEdBQUQsQ0FBdkIsQ0FERCxHQUNpQ3ZFLEtBRHhDO0FBRUQsR0FIRCxNQUdPLElBQUlhLEtBQUssS0FBS1osSUFBSSxDQUFDWSxLQUFuQixFQUEwQjtBQUMvQixRQUFJWCxNQUFNLENBQUNILE1BQVAsQ0FBY3lELE1BQWQsS0FBeUIsQ0FBekIsSUFBOEJ0RCxNQUFNLENBQUNILE1BQVAsQ0FBYyxDQUFkLEVBQWlCaEQsSUFBakIsS0FBMEIrSCxNQUE1RCxFQUFvRTtBQUNsRSxZQUFNO0FBQUVyRixhQUFGO0FBQVNNO0FBQVQsVUFBb0JHLE1BQU0sQ0FBQ0gsTUFBUCxDQUFjLENBQWQsQ0FBMUI7QUFDQSxhQUFPaUYsSUFBSSxDQUFDL0UsSUFBRCxFQUFPQyxNQUFQLEVBQWVpRiw2REFBUSxDQUFDWixHQUFELEVBQU05RSxLQUFOLEVBQWFNLE1BQWIsQ0FBdkIsQ0FBWDtBQUNEOztBQUNELFdBQU9pRixJQUFJLENBQUMvRSxJQUFELEVBQU9DLE1BQVAsRUFBZXNFLDZEQUFRLENBQUNELEdBQUQsQ0FBdkIsQ0FBWDtBQUNEOztBQUNELFNBQU9qRSx5REFBSyxDQUFDYixLQUFELEVBQVEwRiw2REFBUSxDQUFDWixHQUFELEVBQU10RSxJQUFOLEVBQVlDLE1BQU0sQ0FBQ0gsTUFBbkIsQ0FBaEIsQ0FBWjtBQUNELENBZDhDLENBQXhDLEM7Ozs7Ozs7Ozs7OztBQy9EUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxNQUFNO0FBQUVYLElBQUY7QUFBTWpCLE9BQU47QUFBYWtCO0FBQWIsSUFBdUJDLGtEQUE3Qjs7QUFFQSxTQUFTOEYsV0FBVCxDQUFxQm5ILElBQXJCLEVBQTJCO0FBQ3pCLFNBQVEsSUFBR0EsSUFBSyw2QkFBVCxHQUNILHFEQURKO0FBRUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1vSCxRQUFRLEdBQUcsQ0FBQyxHQUFHN0YsRUFBSixLQUFXbkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNyRCxRQUFNd0IsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFNSixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFwQjtBQUNBLE1BQUlaLElBQUksR0FBR1IsS0FBWDs7QUFFQSxPQUFLLE1BQU1HLENBQVgsSUFBZ0JKLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQU0sQ0FBQzBCLFNBQUQsRUFBWWhCLE1BQVosSUFBc0JOLENBQUMsQ0FBQ0ssSUFBRCxDQUE3QjtBQUNBQSxRQUFJLEdBQUdpQixTQUFQOztBQUVBLFFBQUloQixNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUF0QixFQUEwQjtBQUN4QixhQUFPMEQsOERBQVUsQ0FBQzdDLElBQUksQ0FBQ1ksS0FBTCxLQUFlQSxLQUFoQixFQUF1QlosSUFBdkIsRUFBNkJDLE1BQU0sQ0FBQ0gsTUFBcEMsQ0FBakI7QUFDRDs7QUFDRCxRQUFJRyxNQUFNLENBQUNsRCxLQUFQLEtBQWlCLElBQXJCLEVBQTJCaUUsTUFBTSxDQUFDRSxJQUFQLENBQVlqQixNQUFNLENBQUNsRCxLQUFuQjtBQUM1Qjs7QUFDRCxTQUFPeUQsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPZ0IsTUFBUCxDQUFUO0FBQ0QsQ0FmNEMsQ0FBdEM7QUFpQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNcUUsS0FBSyxHQUFHOUMsS0FBSyxJQUFJbkUsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNoRCxRQUFNZ0QsR0FBRyxHQUFHRCxLQUFLLEVBQWpCO0FBQ0EsUUFBTTNCLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsTUFBSTZCLFNBQUo7QUFDQSxNQUFJekMsSUFBSSxHQUFHUixLQUFYOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTTtBQUFFekMsV0FBRjtBQUFTMkY7QUFBVCxRQUFrQkYsR0FBRyxDQUFDeEMsSUFBSixDQUFTeUMsU0FBVCxDQUF4QjtBQUNBLFFBQUlDLElBQUosRUFBVSxPQUFPbEMsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPakQsS0FBUCxDQUFUO0FBRVYsVUFBTSxDQUFDa0UsU0FBRCxFQUFZaEIsTUFBWixJQUFzQmxELEtBQUssQ0FBQ2lELElBQUQsQ0FBakM7QUFDQUEsUUFBSSxHQUFHaUIsU0FBUDs7QUFFQSxRQUFJaEIsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBdEIsRUFBMEI7QUFDeEIsYUFBTzBELDhEQUFVLENBQUM3QyxJQUFJLENBQUNZLEtBQUwsS0FBZUEsS0FBaEIsRUFBdUJaLElBQXZCLEVBQTZCQyxNQUFNLENBQUNILE1BQXBDLENBQWpCO0FBQ0Q7O0FBQ0QyQyxhQUFTLEdBQUd4QyxNQUFNLENBQUNsRCxLQUFuQjtBQUNEO0FBQ0YsQ0FsQnVDLENBQWpDO0FBb0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNdUksSUFBSSxHQUFHM0YsQ0FBQyxJQUFJdkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUMzQyxRQUFNd0IsTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJaEIsSUFBSSxHQUFHUixLQUFYOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDTyxLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSyxJQUFELENBQUYsQ0FBeEM7QUFDQUEsUUFBSSxHQUFHaUIsU0FBUDtBQUVBLFFBQUloQixNQUFNLENBQUNFLE1BQVAsS0FBa0JmLEtBQXRCLEVBQTZCLE9BQU9XLEtBQVA7QUFDN0IsUUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkI7QUFDN0IsUUFBSStCLE1BQU0sQ0FBQ2xELEtBQVAsS0FBaUIsSUFBckIsRUFBMkJpRSxNQUFNLENBQUNFLElBQVAsQ0FBWWpCLE1BQU0sQ0FBQ2xELEtBQW5CO0FBQzNCLFFBQUlpRCxJQUFJLENBQUNZLEtBQUwsSUFBY1osSUFBSSxDQUFDdUYsSUFBTCxDQUFVQyxVQUE1QixFQUF3QztBQUN6Qzs7QUFDRCxTQUFPaEYsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPZ0IsTUFBUCxDQUFUO0FBQ0QsQ0Fka0MsQ0FBNUI7QUFnQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXlFLEtBQUssR0FBRzlGLENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDNUMsUUFBTSxDQUFDeUQsS0FBRCxFQUFRLENBQUNoQyxTQUFELEVBQVloQixNQUFaLENBQVIsSUFBK0JDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQXhDO0FBQ0EsTUFBSVMsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBdEIsRUFBMEIsT0FBTzhELEtBQVA7QUFFMUIsTUFBSWpELElBQUksR0FBR2lCLFNBQVg7QUFDQSxRQUFNRCxNQUFNLEdBQUcsQ0FBQ2YsTUFBTSxDQUFDbEQsS0FBUixDQUFmOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDZ0QsS0FBRCxFQUFRLENBQUNrQixTQUFELEVBQVloQixNQUFaLENBQVIsSUFBK0JDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0ssSUFBRCxDQUFGLENBQXhDO0FBQ0FBLFFBQUksR0FBR2lCLFNBQVA7QUFFQSxRQUFJaEIsTUFBTSxDQUFDRSxNQUFQLEtBQWtCZixLQUF0QixFQUE2QixPQUFPVyxLQUFQO0FBQzdCLFFBQUlFLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmpDLEtBQXRCLEVBQTZCO0FBQzdCLFFBQUkrQixNQUFNLENBQUNsRCxLQUFQLEtBQWlCLElBQXJCLEVBQTJCaUUsTUFBTSxDQUFDRSxJQUFQLENBQVlqQixNQUFNLENBQUNsRCxLQUFuQjtBQUMzQixRQUFJaUQsSUFBSSxDQUFDWSxLQUFMLElBQWNaLElBQUksQ0FBQ3VGLElBQUwsQ0FBVUMsVUFBNUIsRUFBd0M7QUFDekM7O0FBQ0QsU0FBT2hGLHNEQUFFLENBQUNSLElBQUQsRUFBT2dCLE1BQVAsQ0FBVDtBQUNELENBakJtQyxDQUE3QjtBQW1CUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNMEUsUUFBUSxHQUFHL0YsQ0FBQyxJQUFJdkIsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUMvQyxNQUFJUSxJQUFJLEdBQUdSLEtBQVg7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFNLENBQUNPLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUF4QztBQUNBQSxRQUFJLEdBQUdpQixTQUFQO0FBRUEsUUFBSWhCLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmYsS0FBdEIsRUFBNkIsT0FBT1csS0FBUDtBQUM3QixRQUFJRSxNQUFNLENBQUNFLE1BQVAsS0FBa0JqQyxLQUF0QixFQUE2QjtBQUM3QixRQUFJOEIsSUFBSSxDQUFDWSxLQUFMLElBQWNaLElBQUksQ0FBQ3VGLElBQUwsQ0FBVUMsVUFBNUIsRUFBd0M7QUFDekM7O0FBQ0QsU0FBT2hGLHNEQUFFLENBQUNSLElBQUQsRUFBTyxJQUFQLENBQVQ7QUFDRCxDQVpzQyxDQUFoQztBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTJGLFNBQVMsR0FBR2hHLENBQUMsSUFBSXZCLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDaEQsUUFBTSxDQUFDTyxLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBeEM7QUFDQSxNQUFJUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUF0QixFQUEwQixPQUFPWSxLQUFQO0FBRTFCLE1BQUlDLElBQUksR0FBR2lCLFNBQVg7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFNLENBQUNsQixLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSyxJQUFELENBQUYsQ0FBeEM7QUFDQUEsUUFBSSxHQUFHaUIsU0FBUDtBQUVBLFFBQUloQixNQUFNLENBQUNFLE1BQVAsS0FBa0JmLEtBQXRCLEVBQTZCLE9BQU9XLEtBQVA7QUFDN0IsUUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkI7QUFDN0IsUUFBSThCLElBQUksQ0FBQ1ksS0FBTCxJQUFjWixJQUFJLENBQUN1RixJQUFMLENBQVVDLFVBQTVCLEVBQXdDO0FBQ3pDOztBQUNELFNBQU9oRixzREFBRSxDQUFDUixJQUFELEVBQU8sSUFBUCxDQUFUO0FBQ0QsQ0FmdUMsQ0FBakM7QUFpQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU00RixLQUFLLEdBQUcsQ0FBQ2pHLENBQUQsRUFBSWtHLEdBQUosS0FBWXpILDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDbkQsTUFBSW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQWxCO0FBQ0EsUUFBTSxDQUFDYixLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBeEM7QUFDQSxNQUFJUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JmLEtBQXRCLEVBQTZCLE9BQU9XLEtBQVA7QUFDN0IsTUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkIsT0FBT3NDLHNEQUFFLENBQUNTLFNBQUQsRUFBWSxFQUFaLENBQVQ7QUFFN0IsUUFBTUQsTUFBTSxHQUFHLENBQUNmLE1BQU0sQ0FBQ2xELEtBQVIsQ0FBZjtBQUNBLE1BQUlpRCxJQUFJLEdBQUdpQixTQUFYOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1hMLFNBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFiO0FBRUEsVUFBTSxDQUFDUyxNQUFELEVBQVMsQ0FBQ3lFLFVBQUQsRUFBYXZFLE9BQWIsQ0FBVCxJQUFrQ3JCLHVEQUFHLENBQUMyRixHQUFHLENBQUM3RixJQUFELENBQUosQ0FBM0M7QUFDQUEsUUFBSSxHQUFHOEYsVUFBUDtBQUNBLFFBQUl2RSxPQUFPLENBQUNwQixNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPaUMsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUNwQixNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFFOUIsVUFBTSxDQUFDc0QsTUFBRCxFQUFTLENBQUN1RSxVQUFELEVBQWFyRSxPQUFiLENBQVQsSUFBa0N4Qix1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUEzQztBQUNBQSxRQUFJLEdBQUcrRixVQUFQO0FBQ0EsUUFBSXJFLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJmLEtBQXZCLEVBQThCLE9BQU9vQyxNQUFQO0FBQzlCLFFBQUlFLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJqQyxLQUF2QixFQUE4QjtBQUU5QixRQUFJOEIsSUFBSSxDQUFDWSxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCLE1BQU0sSUFBSW9GLFNBQUosQ0FBY2IsV0FBVyxDQUFDLE9BQUQsQ0FBekIsQ0FBTjtBQUMxQm5FLFVBQU0sQ0FBQ0UsSUFBUCxDQUFZUSxPQUFPLENBQUMzRSxLQUFwQjtBQUNEOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9nQixNQUFQLEVBQWVKLEtBQWYsQ0FBVDtBQUNELENBMUIwQyxDQUFwQztBQTRCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNcUYsTUFBTSxHQUFHLENBQUN0RyxDQUFELEVBQUlrRyxHQUFKLEtBQVl6SCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ3BELE1BQUlvQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFsQjtBQUNBLFFBQU0sQ0FBQ2IsS0FBRCxFQUFRLENBQUNrQixTQUFELEVBQVloQixNQUFaLENBQVIsSUFBK0JDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQXhDO0FBQ0EsTUFBSVMsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBdEIsRUFBMEIsT0FBT1ksS0FBUDtBQUUxQixRQUFNaUIsTUFBTSxHQUFHLENBQUNmLE1BQU0sQ0FBQ2xELEtBQVIsQ0FBZjtBQUNBLE1BQUlpRCxJQUFJLEdBQUdpQixTQUFYOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1hMLFNBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFiO0FBRUEsVUFBTSxDQUFDUyxNQUFELEVBQVMsQ0FBQ3lFLFVBQUQsRUFBYXZFLE9BQWIsQ0FBVCxJQUFrQ3JCLHVEQUFHLENBQUMyRixHQUFHLENBQUM3RixJQUFELENBQUosQ0FBM0M7QUFDQUEsUUFBSSxHQUFHOEYsVUFBUDtBQUNBLFFBQUl2RSxPQUFPLENBQUNwQixNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPaUMsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUNwQixNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFFOUIsVUFBTSxDQUFDc0QsTUFBRCxFQUFTLENBQUN1RSxVQUFELEVBQWFyRSxPQUFiLENBQVQsSUFBa0N4Qix1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUEzQztBQUNBQSxRQUFJLEdBQUcrRixVQUFQO0FBQ0EsUUFBSXJFLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJmLEtBQXZCLEVBQThCLE9BQU9vQyxNQUFQO0FBQzlCLFFBQUlFLE9BQU8sQ0FBQ3ZCLE1BQVIsS0FBbUJqQyxLQUF2QixFQUE4QjtBQUU5QixRQUFJOEIsSUFBSSxDQUFDWSxLQUFMLEtBQWVBLEtBQW5CLEVBQTBCLE1BQU0sSUFBSW9GLFNBQUosQ0FBY2IsV0FBVyxDQUFDLFFBQUQsQ0FBekIsQ0FBTjtBQUMxQm5FLFVBQU0sQ0FBQ0UsSUFBUCxDQUFZUSxPQUFPLENBQUMzRSxLQUFwQjtBQUNEOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9nQixNQUFQLEVBQWVKLEtBQWYsQ0FBVDtBQUNELENBekIyQyxDQUFyQztBQTJCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNc0YsUUFBUSxHQUFHLENBQUN2RyxDQUFELEVBQUlrRyxHQUFKLEtBQVl6SCw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ3RELE1BQUlvQixLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFsQjtBQUNBLFFBQU0sQ0FBQ2IsS0FBRCxFQUFRLENBQUNrQixTQUFELEVBQVloQixNQUFaLENBQVIsSUFBK0JDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQXhDO0FBQ0EsTUFBSVMsTUFBTSxDQUFDRSxNQUFQLEtBQWtCZixLQUF0QixFQUE2QixPQUFPVyxLQUFQO0FBQzdCLE1BQUlFLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmpDLEtBQXRCLEVBQTZCLE9BQU9zQyxzREFBRSxDQUFDUyxTQUFELEVBQVksRUFBWixDQUFUO0FBRTdCLFFBQU1ELE1BQU0sR0FBRyxDQUFDZixNQUFNLENBQUNsRCxLQUFSLENBQWY7QUFDQSxNQUFJaUQsSUFBSSxHQUFHaUIsU0FBWDs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYTCxTQUFLLEdBQUdaLElBQUksQ0FBQ1ksS0FBYjtBQUVBLFVBQU0sQ0FBQ1MsTUFBRCxFQUFTLENBQUN5RSxVQUFELEVBQWF2RSxPQUFiLENBQVQsSUFBa0NyQix1REFBRyxDQUFDMkYsR0FBRyxDQUFDN0YsSUFBRCxDQUFKLENBQTNDO0FBQ0FBLFFBQUksR0FBRzhGLFVBQVA7QUFDQSxRQUFJdkUsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT2lDLE1BQVA7QUFDOUIsUUFBSUUsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCO0FBRTlCLFVBQU0sQ0FBQ3NELE1BQUQsRUFBUyxDQUFDdUUsVUFBRCxFQUFhckUsT0FBYixDQUFULElBQWtDeEIsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSyxJQUFELENBQUYsQ0FBM0M7QUFDQUEsUUFBSSxHQUFHK0YsVUFBUDtBQUNBLFFBQUlyRSxPQUFPLENBQUN2QixNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPb0MsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUN2QixNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFFOUIsUUFBSThCLElBQUksQ0FBQ1ksS0FBTCxLQUFlQSxLQUFuQixFQUEwQixNQUFNLElBQUlvRixTQUFKLENBQWNiLFdBQVcsQ0FBQyxVQUFELENBQXpCLENBQU47QUFDMUJuRSxVQUFNLENBQUNFLElBQVAsQ0FBWVEsT0FBTyxDQUFDM0UsS0FBcEI7QUFDRDs7QUFDRCxRQUFNLENBQUNvSixPQUFELEVBQVVqRSxDQUFWLElBQWUyRCxHQUFHLENBQUMsRUFBRSxHQUFHN0YsSUFBTDtBQUFXWTtBQUFYLEdBQUQsQ0FBeEI7QUFDQSxTQUFPSixzREFBRSxDQUFDMkYsT0FBRCxFQUFVbkYsTUFBVixDQUFUO0FBQ0QsQ0EzQjZDLENBQXZDO0FBNkJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1vRixTQUFTLEdBQUcsQ0FBQ3pHLENBQUQsRUFBSWtHLEdBQUosS0FBWXpILDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDdkQsTUFBSW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQWxCO0FBQ0EsUUFBTSxDQUFDYixLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBeEM7QUFDQSxNQUFJUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JoQixFQUF0QixFQUEwQixPQUFPWSxLQUFQO0FBRTFCLFFBQU1pQixNQUFNLEdBQUcsQ0FBQ2YsTUFBTSxDQUFDbEQsS0FBUixDQUFmO0FBQ0EsTUFBSWlELElBQUksR0FBR2lCLFNBQVg7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWEwsU0FBSyxHQUFHWixJQUFJLENBQUNZLEtBQWI7QUFFQSxVQUFNLENBQUNTLE1BQUQsRUFBUyxDQUFDeUUsVUFBRCxFQUFhdkUsT0FBYixDQUFULElBQWtDckIsdURBQUcsQ0FBQzJGLEdBQUcsQ0FBQzdGLElBQUQsQ0FBSixDQUEzQztBQUNBQSxRQUFJLEdBQUc4RixVQUFQO0FBQ0EsUUFBSXZFLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJmLEtBQXZCLEVBQThCLE9BQU9pQyxNQUFQO0FBQzlCLFFBQUlFLE9BQU8sQ0FBQ3BCLE1BQVIsS0FBbUJqQyxLQUF2QixFQUE4QjtBQUU5QixVQUFNLENBQUNzRCxNQUFELEVBQVMsQ0FBQ3VFLFVBQUQsRUFBYXJFLE9BQWIsQ0FBVCxJQUFrQ3hCLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0ssSUFBRCxDQUFGLENBQTNDO0FBQ0FBLFFBQUksR0FBRytGLFVBQVA7QUFDQSxRQUFJckUsT0FBTyxDQUFDdkIsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT29DLE1BQVA7QUFDOUIsUUFBSUUsT0FBTyxDQUFDdkIsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCO0FBRTlCLFFBQUk4QixJQUFJLENBQUNZLEtBQUwsS0FBZUEsS0FBbkIsRUFBMEIsTUFBTSxJQUFJb0YsU0FBSixDQUFjYixXQUFXLENBQUMsV0FBRCxDQUF6QixDQUFOO0FBQzFCbkUsVUFBTSxDQUFDRSxJQUFQLENBQVlRLE9BQU8sQ0FBQzNFLEtBQXBCO0FBQ0Q7O0FBQ0QsUUFBTSxDQUFDb0osT0FBRCxFQUFVakUsQ0FBVixJQUFlMkQsR0FBRyxDQUFDLEVBQUUsR0FBRzdGLElBQUw7QUFBV1k7QUFBWCxHQUFELENBQXhCO0FBQ0EsU0FBT0osc0RBQUUsQ0FBQzJGLE9BQUQsRUFBVW5GLE1BQVYsQ0FBVDtBQUNELENBMUI4QyxDQUF4QztBQTRCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1xRixLQUFLLEdBQUcsQ0FBQzFHLENBQUQsRUFBSXNDLENBQUosS0FBVTdELDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDakQsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTUksTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJaEIsSUFBSSxHQUFHUixLQUFYOztBQUVBLE9BQUssTUFBTTBDLENBQVgsSUFBZ0JDLHlEQUFLLENBQUNGLENBQUQsQ0FBckIsRUFBMEI7QUFDeEIsVUFBTSxDQUFDaEIsU0FBRCxFQUFZaEIsTUFBWixJQUFzQk4sQ0FBQyxDQUFDSyxJQUFELENBQTdCO0FBQ0FBLFFBQUksR0FBR2lCLFNBQVA7O0FBQ0EsUUFBSWhCLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQXRCLEVBQTBCO0FBQ3hCLGFBQU8wRCw4REFBVSxDQUFDN0MsSUFBSSxDQUFDWSxLQUFMLEtBQWVBLEtBQWhCLEVBQXVCWixJQUF2QixFQUE2QkMsTUFBTSxDQUFDSCxNQUFwQyxDQUFqQjtBQUNEOztBQUNEa0IsVUFBTSxDQUFDRSxJQUFQLENBQVlqQixNQUFNLENBQUNsRCxLQUFuQjtBQUNEOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9nQixNQUFQLENBQVQ7QUFDRCxDQWR3QyxDQUFsQztBQWdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1zRixRQUFRLEdBQUcsQ0FBQzNHLENBQUQsRUFBSTBDLEdBQUosS0FBWWpFLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDdEQsUUFBTW9CLEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQXBCO0FBQ0EsUUFBTUksTUFBTSxHQUFHLEVBQWY7QUFDQSxNQUFJaEIsSUFBSSxHQUFHUixLQUFYOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDNkIsTUFBRCxFQUFTLENBQUNDLEtBQUQsRUFBUUMsT0FBUixDQUFULElBQTZCckIsdURBQUcsQ0FBQ21DLEdBQUcsQ0FBQ3JDLElBQUQsQ0FBSixDQUF0QztBQUNBQSxRQUFJLEdBQUdzQixLQUFQO0FBQ0EsUUFBSUMsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT2lDLE1BQVA7QUFDOUIsUUFBSUUsT0FBTyxDQUFDcEIsTUFBUixLQUFtQmhCLEVBQXZCLEVBQTJCO0FBRTNCLFVBQU0sQ0FBQ3FDLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QnhCLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0ssSUFBRCxDQUFGLENBQXRDO0FBQ0FBLFFBQUksR0FBR3lCLEtBQVA7QUFDQSxRQUFJQyxPQUFPLENBQUN2QixNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPb0MsTUFBUDs7QUFDOUIsUUFBSUUsT0FBTyxDQUFDdkIsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCO0FBQzVCLGFBQU8yRSw4REFBVSxDQUNmN0MsSUFBSSxDQUFDWSxLQUFMLEtBQWVBLEtBREEsRUFDT1osSUFEUCxFQUNhSSwwREFBSyxDQUFDc0IsT0FBTyxDQUFDNUIsTUFBVCxFQUFpQnlCLE9BQU8sQ0FBQ3pCLE1BQXpCLENBRGxCLENBQWpCO0FBR0Q7O0FBQ0QsUUFBSTRCLE9BQU8sQ0FBQzNFLEtBQVIsS0FBa0IsSUFBdEIsRUFBNEJpRSxNQUFNLENBQUNFLElBQVAsQ0FBWVEsT0FBTyxDQUFDM0UsS0FBcEI7QUFDN0I7O0FBQ0QsU0FBT3lELHNEQUFFLENBQUNSLElBQUQsRUFBT2dCLE1BQVAsQ0FBVDtBQUNELENBdEI2QyxDQUF2QztBQXdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11RixNQUFNLEdBQUcsQ0FBQzVHLENBQUQsRUFBSTZHLEVBQUosRUFBUTlGLENBQVIsS0FBY3RDLDhEQUFVLENBQUNvQixLQUFLLElBQUk7QUFDdEQsUUFBTSxDQUFDTyxLQUFELEVBQVEsQ0FBQ2tCLFNBQUQsRUFBWWhCLE1BQVosQ0FBUixJQUErQkMsdURBQUcsQ0FBQ1AsQ0FBQyxDQUFDSCxLQUFELENBQUYsQ0FBeEM7QUFDQSxNQUFJUyxNQUFNLENBQUNFLE1BQVAsS0FBa0JmLEtBQXRCLEVBQTZCLE9BQU9XLEtBQVA7QUFDN0IsTUFBSUUsTUFBTSxDQUFDRSxNQUFQLEtBQWtCakMsS0FBdEIsRUFBNkIsT0FBT3NDLHNEQUFFLENBQUNTLFNBQUQsRUFBWVAsQ0FBWixDQUFUO0FBRTdCLFFBQU1NLE1BQU0sR0FBRyxDQUFDZixNQUFNLENBQUNsRCxLQUFSLENBQWY7QUFDQSxRQUFNMEosR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFJekcsSUFBSSxHQUFHaUIsU0FBWDtBQUNBLE1BQUlMLEtBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFqQjs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYLFVBQU0sQ0FBQzhGLE9BQUQsRUFBVSxDQUFDQyxNQUFELEVBQVNDLFFBQVQsQ0FBVixJQUFnQzFHLHVEQUFHLENBQUNzRyxFQUFFLENBQUN4RyxJQUFELENBQUgsQ0FBekM7QUFDQUEsUUFBSSxHQUFHMkcsTUFBUDtBQUNBLFFBQUlDLFFBQVEsQ0FBQ3pHLE1BQVQsS0FBb0JmLEtBQXhCLEVBQStCLE9BQU9zSCxPQUFQO0FBQy9CLFFBQUlFLFFBQVEsQ0FBQ3pHLE1BQVQsS0FBb0JqQyxLQUF4QixFQUErQjtBQUUvQixVQUFNLENBQUMySSxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkI3Ryx1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUF0QztBQUNBQSxRQUFJLEdBQUc4RyxLQUFQO0FBQ0EsUUFBSUMsT0FBTyxDQUFDNUcsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT3lILE1BQVA7QUFDOUIsUUFBSUUsT0FBTyxDQUFDNUcsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCO0FBRTlCdUksT0FBRyxDQUFDdkYsSUFBSixDQUFTMEYsUUFBUSxDQUFDN0osS0FBbEI7QUFDQWlFLFVBQU0sQ0FBQ0UsSUFBUCxDQUFZNkYsT0FBTyxDQUFDaEssS0FBcEI7QUFDQTZELFNBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFiO0FBQ0Q7O0FBRUQsTUFBSTdELEtBQUssR0FBR2lFLE1BQU0sQ0FBQyxDQUFELENBQWxCOztBQUNBLE9BQUssTUFBTXRCLENBQVgsSUFBZ0J5Qyx5REFBSyxDQUFDc0UsR0FBRyxDQUFDbEQsTUFBTCxDQUFyQixFQUFtQztBQUNqQ3hHLFNBQUssR0FBRzBKLEdBQUcsQ0FBQy9HLENBQUQsQ0FBSCxDQUFPM0MsS0FBUCxFQUFjaUUsTUFBTSxDQUFDdEIsQ0FBQyxHQUFHLENBQUwsQ0FBcEIsQ0FBUjtBQUNEOztBQUNELFNBQU9jLHNEQUFFLENBQUNSLElBQUQsRUFBT2pELEtBQVAsRUFBYzZELEtBQWQsQ0FBVDtBQUNELENBL0I2QyxDQUF2QztBQWlDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNb0csT0FBTyxHQUFHLENBQUNySCxDQUFELEVBQUk2RyxFQUFKLEtBQVdwSSw4REFBVSxDQUFDb0IsS0FBSyxJQUFJO0FBQ3BELFFBQU0sQ0FBQ08sS0FBRCxFQUFRLENBQUNrQixTQUFELEVBQVloQixNQUFaLENBQVIsSUFBK0JDLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0gsS0FBRCxDQUFGLENBQXhDO0FBQ0EsTUFBSVMsTUFBTSxDQUFDRSxNQUFQLEtBQWtCaEIsRUFBdEIsRUFBMEIsT0FBT1ksS0FBUDtBQUUxQixRQUFNaUIsTUFBTSxHQUFHLENBQUNmLE1BQU0sQ0FBQ2xELEtBQVIsQ0FBZjtBQUNBLFFBQU0wSixHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQUl6RyxJQUFJLEdBQUdpQixTQUFYO0FBQ0EsTUFBSUwsS0FBSyxHQUFHWixJQUFJLENBQUNZLEtBQWpCOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDOEYsT0FBRCxFQUFVLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxDQUFWLElBQWdDMUcsdURBQUcsQ0FBQ3NHLEVBQUUsQ0FBQ3hHLElBQUQsQ0FBSCxDQUF6QztBQUNBQSxRQUFJLEdBQUcyRyxNQUFQO0FBQ0EsUUFBSUMsUUFBUSxDQUFDekcsTUFBVCxLQUFvQmYsS0FBeEIsRUFBK0IsT0FBT3NILE9BQVA7QUFDL0IsUUFBSUUsUUFBUSxDQUFDekcsTUFBVCxLQUFvQmpDLEtBQXhCLEVBQStCO0FBRS9CLFVBQU0sQ0FBQzJJLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QjdHLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0ssSUFBRCxDQUFGLENBQXRDO0FBQ0FBLFFBQUksR0FBRzhHLEtBQVA7QUFDQSxRQUFJQyxPQUFPLENBQUM1RyxNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPeUgsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUM1RyxNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFFOUJ1SSxPQUFHLENBQUN2RixJQUFKLENBQVMwRixRQUFRLENBQUM3SixLQUFsQjtBQUNBaUUsVUFBTSxDQUFDRSxJQUFQLENBQVk2RixPQUFPLENBQUNoSyxLQUFwQjtBQUNBNkQsU0FBSyxHQUFHWixJQUFJLENBQUNZLEtBQWI7QUFDRDs7QUFFRCxNQUFJN0QsS0FBSyxHQUFHaUUsTUFBTSxDQUFDLENBQUQsQ0FBbEI7O0FBQ0EsT0FBSyxNQUFNdEIsQ0FBWCxJQUFnQnlDLHlEQUFLLENBQUNzRSxHQUFHLENBQUNsRCxNQUFMLENBQXJCLEVBQW1DO0FBQ2pDeEcsU0FBSyxHQUFHMEosR0FBRyxDQUFDL0csQ0FBRCxDQUFILENBQU8zQyxLQUFQLEVBQWNpRSxNQUFNLENBQUN0QixDQUFDLEdBQUcsQ0FBTCxDQUFwQixDQUFSO0FBQ0Q7O0FBQ0QsU0FBT2Msc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPakQsS0FBUCxFQUFjNkQsS0FBZCxDQUFUO0FBQ0QsQ0E5QjJDLENBQXJDO0FBZ0NQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXFHLE1BQU0sR0FBRyxDQUFDdEgsQ0FBRCxFQUFJNkcsRUFBSixFQUFROUYsQ0FBUixLQUFjdEMsOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUN0RCxRQUFNLENBQUNPLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUF4QztBQUNBLE1BQUlTLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmYsS0FBdEIsRUFBNkIsT0FBT1csS0FBUDtBQUM3QixNQUFJRSxNQUFNLENBQUNFLE1BQVAsS0FBa0JqQyxLQUF0QixFQUE2QixPQUFPc0Msc0RBQUUsQ0FBQ1MsU0FBRCxFQUFZUCxDQUFaLENBQVQ7QUFFN0IsUUFBTU0sTUFBTSxHQUFHLENBQUNmLE1BQU0sQ0FBQ2xELEtBQVIsQ0FBZjtBQUNBLFFBQU0wSixHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQUl6RyxJQUFJLEdBQUdpQixTQUFYO0FBQ0EsTUFBSUwsS0FBSyxHQUFHWixJQUFJLENBQUNZLEtBQWpCOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDOEYsT0FBRCxFQUFVLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxDQUFWLElBQWdDMUcsdURBQUcsQ0FBQ3NHLEVBQUUsQ0FBQ3hHLElBQUQsQ0FBSCxDQUF6QztBQUNBQSxRQUFJLEdBQUcyRyxNQUFQO0FBQ0EsUUFBSUMsUUFBUSxDQUFDekcsTUFBVCxLQUFvQmYsS0FBeEIsRUFBK0IsT0FBT3NILE9BQVA7QUFDL0IsUUFBSUUsUUFBUSxDQUFDekcsTUFBVCxLQUFvQmpDLEtBQXhCLEVBQStCO0FBRS9CLFVBQU0sQ0FBQzJJLE1BQUQsRUFBUyxDQUFDQyxLQUFELEVBQVFDLE9BQVIsQ0FBVCxJQUE2QjdHLHVEQUFHLENBQUNQLENBQUMsQ0FBQ0ssSUFBRCxDQUFGLENBQXRDO0FBQ0FBLFFBQUksR0FBRzhHLEtBQVA7QUFDQSxRQUFJQyxPQUFPLENBQUM1RyxNQUFSLEtBQW1CZixLQUF2QixFQUE4QixPQUFPeUgsTUFBUDtBQUM5QixRQUFJRSxPQUFPLENBQUM1RyxNQUFSLEtBQW1CakMsS0FBdkIsRUFBOEI7QUFFOUJ1SSxPQUFHLENBQUN2RixJQUFKLENBQVMwRixRQUFRLENBQUM3SixLQUFsQjtBQUNBaUUsVUFBTSxDQUFDRSxJQUFQLENBQVk2RixPQUFPLENBQUNoSyxLQUFwQjtBQUNBNkQsU0FBSyxHQUFHWixJQUFJLENBQUNZLEtBQWI7QUFDRDs7QUFFRCxNQUFJN0QsS0FBSyxHQUFHaUUsTUFBTSxDQUFDQSxNQUFNLENBQUN1QyxNQUFQLEdBQWdCLENBQWpCLENBQWxCOztBQUNBLE9BQUssTUFBTTdELENBQVgsSUFBZ0J5Qyx5REFBSyxDQUFDc0UsR0FBRyxDQUFDbEQsTUFBSixHQUFhLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixDQUFyQixFQUEyQztBQUN6Q3hHLFNBQUssR0FBRzBKLEdBQUcsQ0FBQy9HLENBQUQsQ0FBSCxDQUFPc0IsTUFBTSxDQUFDdEIsQ0FBRCxDQUFiLEVBQWtCM0MsS0FBbEIsQ0FBUjtBQUNEOztBQUNELFNBQU95RCxzREFBRSxDQUFDUixJQUFELEVBQU9qRCxLQUFQLEVBQWM2RCxLQUFkLENBQVQ7QUFDRCxDQS9CNkMsQ0FBdkM7QUFpQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXNHLE9BQU8sR0FBRyxDQUFDdkgsQ0FBRCxFQUFJNkcsRUFBSixLQUFXcEksOERBQVUsQ0FBQ29CLEtBQUssSUFBSTtBQUNwRCxRQUFNLENBQUNPLEtBQUQsRUFBUSxDQUFDa0IsU0FBRCxFQUFZaEIsTUFBWixDQUFSLElBQStCQyx1REFBRyxDQUFDUCxDQUFDLENBQUNILEtBQUQsQ0FBRixDQUF4QztBQUNBLE1BQUlTLE1BQU0sQ0FBQ0UsTUFBUCxLQUFrQmhCLEVBQXRCLEVBQTBCLE9BQU9ZLEtBQVA7QUFFMUIsUUFBTWlCLE1BQU0sR0FBRyxDQUFDZixNQUFNLENBQUNsRCxLQUFSLENBQWY7QUFDQSxRQUFNMEosR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFJekcsSUFBSSxHQUFHaUIsU0FBWDtBQUNBLE1BQUlMLEtBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFqQjs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYLFVBQU0sQ0FBQzhGLE9BQUQsRUFBVSxDQUFDQyxNQUFELEVBQVNDLFFBQVQsQ0FBVixJQUFnQzFHLHVEQUFHLENBQUNzRyxFQUFFLENBQUN4RyxJQUFELENBQUgsQ0FBekM7QUFDQUEsUUFBSSxHQUFHMkcsTUFBUDtBQUNBLFFBQUlDLFFBQVEsQ0FBQ3pHLE1BQVQsS0FBb0JmLEtBQXhCLEVBQStCLE9BQU9zSCxPQUFQO0FBQy9CLFFBQUlFLFFBQVEsQ0FBQ3pHLE1BQVQsS0FBb0JqQyxLQUF4QixFQUErQjtBQUUvQixVQUFNLENBQUMySSxNQUFELEVBQVMsQ0FBQ0MsS0FBRCxFQUFRQyxPQUFSLENBQVQsSUFBNkI3Ryx1REFBRyxDQUFDUCxDQUFDLENBQUNLLElBQUQsQ0FBRixDQUF0QztBQUNBQSxRQUFJLEdBQUc4RyxLQUFQO0FBQ0EsUUFBSUMsT0FBTyxDQUFDNUcsTUFBUixLQUFtQmYsS0FBdkIsRUFBOEIsT0FBT3lILE1BQVA7QUFDOUIsUUFBSUUsT0FBTyxDQUFDNUcsTUFBUixLQUFtQmpDLEtBQXZCLEVBQThCO0FBRTlCdUksT0FBRyxDQUFDdkYsSUFBSixDQUFTMEYsUUFBUSxDQUFDN0osS0FBbEI7QUFDQWlFLFVBQU0sQ0FBQ0UsSUFBUCxDQUFZNkYsT0FBTyxDQUFDaEssS0FBcEI7QUFDQTZELFNBQUssR0FBR1osSUFBSSxDQUFDWSxLQUFiO0FBQ0Q7O0FBRUQsTUFBSTdELEtBQUssR0FBR2lFLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDdUMsTUFBUCxHQUFnQixDQUFqQixDQUFsQjs7QUFDQSxPQUFLLE1BQU03RCxDQUFYLElBQWdCeUMseURBQUssQ0FBQ3NFLEdBQUcsQ0FBQ2xELE1BQUosR0FBYSxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsQ0FBckIsRUFBMkM7QUFDekN4RyxTQUFLLEdBQUcwSixHQUFHLENBQUMvRyxDQUFELENBQUgsQ0FBT3NCLE1BQU0sQ0FBQ3RCLENBQUQsQ0FBYixFQUFrQjNDLEtBQWxCLENBQVI7QUFDRDs7QUFDRCxTQUFPeUQsc0RBQUUsQ0FBQ1IsSUFBRCxFQUFPakQsS0FBUCxFQUFjNkQsS0FBZCxDQUFUO0FBQ0QsQ0E5QjJDLENBQXJDLEM7Ozs7Ozs7Ozs7OztBQzFwQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU3VHLFlBQVQsQ0FBc0JwSyxLQUF0QixFQUE2QjtBQUMzQixTQUFPQSxLQUFLLFlBQVlxSyxVQUFqQixJQUNGckssS0FBSyxZQUFZc0ssaUJBRGYsSUFFRnRLLEtBQUssWUFBWXVLLFdBRmYsSUFHRnZLLEtBQUssWUFBWXdLLFdBSGYsSUFJRnhLLEtBQUssWUFBWXlLLFNBSmYsSUFLRnpLLEtBQUssWUFBWTBLLFVBTGYsSUFNRjFLLEtBQUssWUFBWTJLLFVBTmYsSUFPRjNLLEtBQUssWUFBWTRLLFlBUGYsSUFRRjVLLEtBQUssWUFBWTZLLFlBUnRCO0FBU0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTXZJLE1BQU0sR0FBRztBQUNwQjtBQUNBRixJQUFFLEVBQUUwSSxNQUFNLENBQUMsSUFBRCxDQUZVOztBQUdwQjtBQUNBM0osT0FBSyxFQUFFMkosTUFBTSxDQUFDLE9BQUQsQ0FKTzs7QUFLcEI7QUFDQXpJLE9BQUssRUFBRXlJLE1BQU0sQ0FBQyxPQUFEO0FBTk8sQ0FBZjtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFDL0IsUUFBTUMsT0FBTyxHQUFHLDREQUNYLDRDQUEyQyxPQUFPRCxLQUFNLEVBRDdEOztBQUdBLFFBQU14QyxJQUFJLEdBQUcsQ0FBQ3dDLEtBQUssSUFBSTtBQUNyQixRQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsYUFBT0UsMERBQVksQ0FBQ0YsS0FBRCxDQUFuQjtBQUNEOztBQUNELFFBQUlaLFlBQVksQ0FBQ1ksS0FBRCxDQUFoQixFQUF5QjtBQUN2QixhQUFPLElBQUlHLFFBQUosQ0FBYUgsS0FBSyxDQUFDSSxNQUFuQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSUosS0FBSyxZQUFZSyxXQUFyQixFQUFrQztBQUNoQyxhQUFPLElBQUlGLFFBQUosQ0FBYUgsS0FBYixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsS0FBSyxZQUFZRyxRQUFyQixFQUErQjtBQUM3QixhQUFPSCxLQUFQO0FBQ0Q7O0FBQ0QsVUFBTSxJQUFJN0osS0FBSixDQUFVOEosT0FBVixDQUFOO0FBQ0QsR0FkWSxFQWNWRCxLQWRVLENBQWI7O0FBZ0JBLFNBQU87QUFDTHhDLFFBREs7QUFFTDNFLFNBQUssRUFBRTtBQUZGLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNeEMsVUFBVSxHQUFHaUssbURBQUssQ0FBQ2pILEVBQUUsSUFBSUEsRUFBUCxDQUF4QjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU1osRUFBVCxDQUFZaEIsS0FBWixFQUFtQnpDLEtBQUssR0FBRyxJQUEzQixFQUFpQzZELEtBQUssR0FBR3BCLEtBQUssQ0FBQ29CLEtBQS9DLEVBQXNEO0FBQzNELFNBQU8sQ0FBQyxFQUFFLEdBQUdwQixLQUFMO0FBQVlvQjtBQUFaLEdBQUQsRUFBc0I7QUFBRVQsVUFBTSxFQUFFZCxNQUFNLENBQUNGLEVBQWpCO0FBQXFCcEM7QUFBckIsR0FBdEIsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN1RCxLQUFULENBQWVkLEtBQWYsRUFBc0JNLE1BQU0sR0FBRyxFQUEvQixFQUFtQ2MsS0FBSyxHQUFHcEIsS0FBSyxDQUFDb0IsS0FBakQsRUFBd0Q7QUFDN0QsU0FBTyxDQUFDLEVBQUUsR0FBR3BCLEtBQUw7QUFBWW9CO0FBQVosR0FBRCxFQUFzQjtBQUFFVCxVQUFNLEVBQUVkLE1BQU0sQ0FBQ25CLEtBQWpCO0FBQXdCNEI7QUFBeEIsR0FBdEIsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNPLEtBQVQsQ0FBZWIsS0FBZixFQUFzQk0sTUFBTSxHQUFHLEVBQS9CLEVBQW1DYyxLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUFqRCxFQUF3RDtBQUM3RCxTQUFPLENBQUMsRUFBRSxHQUFHcEIsS0FBTDtBQUFZb0I7QUFBWixHQUFELEVBQXNCO0FBQUVULFVBQU0sRUFBRWQsTUFBTSxDQUFDRCxLQUFqQjtBQUF3QlU7QUFBeEIsR0FBdEIsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMrQyxVQUFULENBQW9CeUYsSUFBcEIsRUFBMEI5SSxLQUExQixFQUFpQ00sTUFBTSxHQUFHLEVBQTFDLEVBQThDYyxLQUFLLEdBQUdwQixLQUFLLENBQUNvQixLQUE1RCxFQUFtRTtBQUN4RSxTQUFPLENBQ0wsRUFBRSxHQUFHcEIsS0FBTDtBQUFZb0I7QUFBWixHQURLLEVBRUw7QUFBRVQsVUFBTSxFQUFFbUksSUFBSSxHQUFHakosTUFBTSxDQUFDRCxLQUFWLEdBQWtCQyxNQUFNLENBQUNuQixLQUF2QztBQUE4QzRCO0FBQTlDLEdBRkssQ0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3lJLEtBQVQsQ0FBZUMsTUFBZixFQUF1QlQsS0FBdkIsRUFBOEI7QUFDbkMsU0FBT1MsTUFBTSxDQUFDVixTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUFiO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNVLFNBQVQsQ0FBbUIxSSxLQUFuQixFQUEwQjtBQUMvQixTQUFPQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNJLE1BQVQsS0FBb0JkLE1BQU0sQ0FBQ0YsRUFBbEM7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNjLE1BQVQsQ0FBZ0JGLEtBQWhCLEVBQXVCO0FBQzVCLFNBQU8wSSxTQUFTLENBQUMxSSxLQUFELENBQVQsR0FBbUJBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU2hELEtBQTVCLEdBQW9DLElBQTNDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTMkwsT0FBVCxDQUFpQjNJLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU8wSSxTQUFTLENBQUMxSSxLQUFELENBQVQsR0FBbUIsSUFBbkIsR0FBMEI0SSwyREFBWSxDQUFDLEdBQUc1SSxLQUFKLENBQTdDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzZJLEdBQVQsQ0FBYUosTUFBYixFQUFxQlQsS0FBckIsRUFBNEI7QUFDakMsUUFBTSxDQUFDdkksS0FBRCxFQUFRUyxNQUFSLElBQWtCdUksTUFBTSxDQUFDVixTQUFTLENBQUNDLEtBQUQsQ0FBVixDQUE5Qjs7QUFDQSxNQUFJOUgsTUFBTSxDQUFDRSxNQUFQLEtBQWtCZCxNQUFNLENBQUNGLEVBQTdCLEVBQWlDO0FBQy9CLFdBQU9jLE1BQU0sQ0FBQ2xELEtBQWQ7QUFDRDs7QUFDRCxRQUFNLElBQUltQixLQUFKLENBQVV5SywyREFBWSxDQUFDbkosS0FBRCxFQUFRUyxNQUFSLENBQXRCLENBQU47QUFDRCxDOzs7Ozs7Ozs7Ozs7QUNsU0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7O0FBQ0E7O0FBRUEsTUFBTTRJLEdBQUcsR0FBRyxNQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLHFCQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1oRSxTQUFTLEdBQUc7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRWlFLFVBQVEsRUFBRWxCLE1BQU0sQ0FBQyxVQUFELENBTE87O0FBTXZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0VtQixZQUFVLEVBQUVuQixNQUFNLENBQUMsWUFBRCxDQVZLOztBQVd2QjtBQUNGO0FBQ0E7QUFDQTtBQUNFb0IsU0FBTyxFQUFFcEIsTUFBTSxDQUFDLFNBQUQsQ0FmUTs7QUFnQnZCO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDRWhELFFBQU0sRUFBRWdELE1BQU0sQ0FBQyxRQUFELENBckJTOztBQXNCdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRXFCLFVBQVEsRUFBRXJCLE1BQU0sQ0FBQyxVQUFELENBMUJPOztBQTJCdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRXNCLE9BQUssRUFBRXRCLE1BQU0sQ0FBQyxPQUFEO0FBL0JVLENBQWxCO0FBa0NQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3RELFFBQVQsQ0FBa0JTLEtBQWxCLEVBQXlCO0FBQzlCLFNBQU8sQ0FBQztBQUFFbEksUUFBSSxFQUFFZ0ksU0FBUyxDQUFDaUUsUUFBbEI7QUFBNEIvRDtBQUE1QixHQUFELENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTb0UsVUFBVCxDQUFvQnBFLEtBQXBCLEVBQTJCO0FBQ2hDLFNBQU8sQ0FBQztBQUFFbEksUUFBSSxFQUFFZ0ksU0FBUyxDQUFDa0UsVUFBbEI7QUFBOEJoRTtBQUE5QixHQUFELENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3FFLE9BQVQsQ0FBaUJyRSxLQUFqQixFQUF3QjtBQUM3QixTQUFPLENBQUM7QUFBRWxJLFFBQUksRUFBRWdJLFNBQVMsQ0FBQ21FLE9BQWxCO0FBQTJCakU7QUFBM0IsR0FBRCxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTc0UsS0FBVCxDQUFldEUsS0FBZixFQUFzQjtBQUMzQixTQUFPLENBQUM7QUFBRWxJLFFBQUksRUFBRWdJLFNBQVMsQ0FBQ3FFLEtBQWxCO0FBQXlCbkU7QUFBekIsR0FBRCxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2xFLE1BQVQsQ0FBZ0J0QixLQUFoQixFQUF1Qk0sTUFBdkIsRUFBK0I7QUFDcEMsU0FBT0EsTUFBTSxDQUFDeUQsTUFBUCxLQUFrQixDQUFsQixJQUF1QnpELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVWhELElBQVYsS0FBbUJnSSxTQUFTLENBQUNELE1BQXBELEdBQ0gvRSxNQURHLEdBRUgsQ0FBQztBQUFFaEQsUUFBSSxFQUFFZ0ksU0FBUyxDQUFDRCxNQUFsQjtBQUEwQnJGLFNBQTFCO0FBQWlDTTtBQUFqQyxHQUFELENBRko7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNvRixRQUFULENBQWtCRixLQUFsQixFQUF5QnhGLEtBQXpCLEVBQWdDTSxNQUFoQyxFQUF3QztBQUM3QyxTQUFPQSxNQUFNLENBQUN5RCxNQUFQLEtBQWtCLENBQWxCLElBQXVCekQsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVaEQsSUFBVixLQUFtQmdJLFNBQVMsQ0FBQ0QsTUFBcEQsR0FDSCxDQUFDO0FBQ0QvSCxRQUFJLEVBQUVnSSxTQUFTLENBQUNvRSxRQURmO0FBRUQxSixTQUFLLEVBQUVNLE1BQU0sQ0FBQ04sS0FGYjtBQUdETSxVQUFNLEVBQUVBLE1BQU0sQ0FBQ0EsTUFIZDtBQUlEa0Y7QUFKQyxHQUFELENBREcsR0FPSCxDQUFDO0FBQUVsSSxRQUFJLEVBQUVnSSxTQUFTLENBQUNvRSxRQUFsQjtBQUE0QjFKLFNBQTVCO0FBQW1DTSxVQUFuQztBQUEyQ2tGO0FBQTNDLEdBQUQsQ0FQSjtBQVFEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNUUsS0FBVCxDQUFlbUosT0FBZixFQUF3QkMsT0FBeEIsRUFBaUM7QUFDdEMsU0FBTyxDQUFDLEdBQUdELE9BQUosRUFBYSxHQUFHQyxPQUFoQixDQUFQO0FBQ0QsQyxDQUVEO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsU0FBVCxDQUFtQjdJLEtBQW5CLEVBQTBCMkUsSUFBMUIsRUFBZ0M7QUFDckMsUUFBTW1FLElBQUksR0FBR25FLElBQUksQ0FBQ29FLFFBQUwsQ0FBYy9JLEtBQWQsQ0FBYjs7QUFDQSxNQUFJOEksSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksS0FBSyxJQUExQixJQUFrQ0EsSUFBSSxLQUFLLElBQS9DLEVBQXFEO0FBQ25ELFdBQU87QUFBRUUsYUFBTyxFQUFFLElBQVg7QUFBaUI1RyxVQUFJLEVBQUU7QUFBdkIsS0FBUDtBQUNEOztBQUVELE1BQUkwRyxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixRQUFJOUksS0FBSyxHQUFHMkUsSUFBSSxDQUFDQyxVQUFMLEdBQWtCLENBQTlCLEVBQWlDO0FBQy9CLFlBQU1xRSxRQUFRLEdBQUd0RSxJQUFJLENBQUNvRSxRQUFMLENBQWMvSSxLQUFLLEdBQUcsQ0FBdEIsQ0FBakI7O0FBQ0EsVUFBSThJLElBQUksS0FBSyxJQUFULElBQWlCRyxRQUFRLEtBQUssSUFBbEMsRUFBd0M7QUFDdEMsZUFBTztBQUFFRCxpQkFBTyxFQUFFLElBQVg7QUFBaUI1RyxjQUFJLEVBQUU7QUFBdkIsU0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTztBQUFFNEcsYUFBTyxFQUFFLElBQVg7QUFBaUI1RyxVQUFJLEVBQUU7QUFBdkIsS0FBUDtBQUNEOztBQUVELE1BQUlwQyxLQUFLLEdBQUcyRSxJQUFJLENBQUNDLFVBQUwsR0FBa0IsQ0FBOUIsRUFBaUM7QUFDL0IsVUFBTXFFLFFBQVEsR0FBR3RFLElBQUksQ0FBQ29FLFFBQUwsQ0FBYy9JLEtBQUssR0FBRyxDQUF0QixDQUFqQjtBQUVBLFFBQUk4SSxJQUFJLEtBQUssSUFBVCxJQUFpQkcsUUFBUSxLQUFLLElBQWxDLEVBQXdDLE9BQU87QUFBRUQsYUFBTyxFQUFFLElBQVg7QUFBaUI1RyxVQUFJLEVBQUU7QUFBdkIsS0FBUDs7QUFDeEMsUUFBSXBDLEtBQUssR0FBRzJFLElBQUksQ0FBQ0MsVUFBTCxHQUFrQixDQUE5QixFQUFpQztBQUMvQixZQUFNc0UsU0FBUyxHQUFHdkUsSUFBSSxDQUFDb0UsUUFBTCxDQUFjL0ksS0FBSyxHQUFHLENBQXRCLENBQWxCOztBQUNBLFVBQUk4SSxJQUFJLEtBQUssSUFBVCxJQUFpQkcsUUFBUSxLQUFLLElBQTlCLEtBQ0VDLFNBQVMsS0FBSyxJQUFkLElBQXNCQSxTQUFTLEtBQUssSUFEdEMsQ0FBSixFQUNpRDtBQUMvQyxlQUFPO0FBQUVGLGlCQUFPLEVBQUUsSUFBWDtBQUFpQjVHLGNBQUksRUFBRTtBQUF2QixTQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU87QUFBRTRHLFdBQU8sRUFBRSxLQUFYO0FBQWtCNUcsUUFBSSxFQUFFK0csMkRBQWEsQ0FBQ25KLEtBQUQsRUFBUTJFLElBQVI7QUFBckMsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTeUUsY0FBVCxDQUF3QnBKLEtBQXhCLEVBQStCMkUsSUFBL0IsRUFBcUM7QUFDMUMsTUFBSTBFLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLENBQWIsQ0FGMEMsQ0FFM0I7O0FBQ2YsTUFBSXhLLENBQUMsR0FBRyxDQUFSOztBQUVBLFNBQU9BLENBQUMsR0FBRzZGLElBQUksQ0FBQ0MsVUFBaEIsRUFBNEI7QUFDMUIsVUFBTTtBQUFFb0UsYUFBRjtBQUFXNUc7QUFBWCxRQUFvQnlHLFNBQVMsQ0FBQy9KLENBQUQsRUFBSTZGLElBQUosQ0FBbkM7O0FBQ0EsUUFBSXFFLE9BQUosRUFBYTtBQUNYLFVBQUlsSyxDQUFDLEdBQUdzRCxJQUFKLEdBQVdwQyxLQUFmLEVBQXNCO0FBQ3BCLGVBQU87QUFBRXFKLGVBQUY7QUFBUzVILGFBQUcsRUFBRTNDLENBQUMsR0FBRyxDQUFsQjtBQUFxQndLO0FBQXJCLFNBQVA7QUFDRDs7QUFDREEsWUFBTTtBQUNORCxXQUFLLEdBQUd2SyxDQUFDLEdBQUdzRCxJQUFaO0FBQ0Q7O0FBQ0R0RCxLQUFDLElBQUlzRCxJQUFMO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFaUgsU0FBRjtBQUFTNUgsT0FBRyxFQUFFa0QsSUFBSSxDQUFDQyxVQUFMLEdBQWtCLENBQWhDO0FBQW1DMEU7QUFBbkMsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNDLFlBQVQsQ0FBc0J2SixLQUF0QixFQUE2QjJFLElBQTdCLEVBQW1DMEUsS0FBbkMsRUFBMEM7QUFDL0MsTUFBSUcsU0FBUyxHQUFHLENBQWhCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHSixLQUFoQjs7QUFDQSxTQUFPSSxTQUFTLEdBQUd6SixLQUFaLElBQXFCeUosU0FBUyxHQUFHOUUsSUFBSSxDQUFDQyxVQUE3QyxFQUF5RDtBQUN2RDZFLGFBQVMsSUFBSU4sMkRBQWEsQ0FBQ00sU0FBRCxFQUFZOUUsSUFBWixDQUExQjtBQUNBNkUsYUFBUztBQUNWOztBQUNELFNBQU9BLFNBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0UsTUFBVCxDQUFnQkYsU0FBaEIsRUFBMkJHLElBQTNCLEVBQWlDQyxPQUFqQyxFQUEwQztBQUMvQyxRQUFNQyxVQUFVLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxRQUFRLEdBQUc3QixHQUFHLENBQUM4QixJQUFKLENBQVNKLElBQVQsQ0FBZjs7QUFDQSxTQUFPRyxRQUFRLEtBQUssSUFBcEIsRUFBMEI7QUFDeEJELGNBQVUsQ0FBQ3ZKLElBQVgsQ0FBZ0J3SixRQUFRLENBQUM5SixLQUF6QjtBQUNBOEosWUFBUSxHQUFHN0IsR0FBRyxDQUFDOEIsSUFBSixDQUFTSixJQUFULENBQVg7QUFDRCxHQU44QyxDQVEvQztBQUNBOzs7QUFDQSxNQUFJSyxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlDLGNBQWMsR0FBRyxDQUFyQjtBQUNBLE1BQUk1SyxNQUFNLEdBQUdzSyxJQUFiOztBQUVBLE9BQUssTUFBTU8sUUFBWCxJQUF1QkwsVUFBdkIsRUFBbUM7QUFDakMsVUFBTU0sV0FBVyxHQUFHRCxRQUFRLEdBQUdGLE1BQS9CO0FBQ0EsVUFBTUksVUFBVSxHQUFHUixPQUFPLEdBQUdPLFdBQVcsR0FBR1AsT0FBM0M7O0FBQ0EsUUFBSU8sV0FBVyxHQUFHWCxTQUFTLEdBQUdTLGNBQTlCLEVBQThDO0FBQzVDQSxvQkFBYyxJQUFJRyxVQUFVLEdBQUcsQ0FBL0I7QUFDRDs7QUFDREosVUFBTSxJQUFJSSxVQUFVLEdBQUcsQ0FBdkI7QUFDQS9LLFVBQU0sR0FBR0EsTUFBTSxDQUFDZ0wsU0FBUCxDQUFpQixDQUFqQixFQUFvQkYsV0FBcEIsSUFBbUMsSUFBSUcsTUFBSixDQUFXRixVQUFYLENBQW5DLEdBQ0wvSyxNQUFNLENBQUNnTCxTQUFQLENBQWlCRixXQUFXLEdBQUcsQ0FBL0IsQ0FESjtBQUVEOztBQUNELFNBQU87QUFBRVIsUUFBSSxFQUFFdEssTUFBUjtBQUFnQmtMLFlBQVEsRUFBRU4sY0FBYyxHQUFHVDtBQUEzQyxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dCLFlBQVQsQ0FBc0JELFFBQXRCLEVBQWdDWixJQUFoQyxFQUFzQztBQUMzQyxNQUFJM0osS0FBSyxHQUFHdUssUUFBWjtBQUNBLFFBQU1FLE9BQU8sR0FBRyxFQUFoQjtBQUVBLE1BQUlDLEtBQUssR0FBR3hDLFNBQVMsQ0FBQzZCLElBQVYsQ0FBZUosSUFBZixDQUFaOztBQUNBLFNBQU9lLEtBQUssS0FBSyxJQUFqQixFQUF1QjtBQUNyQkQsV0FBTyxDQUFDbkssSUFBUixDQUFhb0ssS0FBSyxDQUFDMUssS0FBbkI7QUFDQSxRQUFJMEssS0FBSyxDQUFDMUssS0FBTixHQUFjQSxLQUFsQixFQUF5QkEsS0FBSztBQUM5QjBLLFNBQUssR0FBR3hDLFNBQVMsQ0FBQzZCLElBQVYsQ0FBZUosSUFBZixDQUFSO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMZ0IsU0FBSyxFQUFFM0ssS0FBSyxHQUFHLENBRFY7QUFDYTtBQUNsQjJDLFVBQU0sRUFBRXRGLHdEQUFVLENBQUNzTSxJQUFELENBQVYsR0FBbUJjLE9BQU8sQ0FBQzlIO0FBRjlCLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2lJLElBQVQsQ0FBY2pCLElBQWQsRUFBb0JoSCxNQUFwQixFQUE0QmdJLEtBQTVCLEVBQW1DRSxRQUFuQyxFQUE2Q0MsTUFBTSxHQUFHLENBQXRELEVBQXlEO0FBQzlELFFBQU1DLEVBQUUsR0FBRyxJQUFJVCxNQUFKLENBQVdRLE1BQVgsQ0FBWCxDQUQ4RCxDQUc5RDtBQUNBOztBQUNBLE1BQUlILEtBQUssSUFBSUUsUUFBVCxJQUFxQmxJLE1BQU0sSUFBSWtJLFFBQW5DLEVBQTZDO0FBQzNDLFdBQVEsR0FBRUUsRUFBRyxHQUFFcEIsSUFBSyxLQUFJb0IsRUFBRyxHQUFFLElBQUlULE1BQUosQ0FBV0ssS0FBSyxHQUFHLENBQW5CLENBQXNCLEdBQW5EO0FBQ0QsR0FQNkQsQ0FTOUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUlBLEtBQUssSUFBSUUsUUFBUSxHQUFHLENBQXhCLEVBQTJCO0FBQ3pCLFdBQVEsR0FBRUUsRUFBRyxHQUFFcEIsSUFBSSxDQUFDVSxTQUFMLENBQWUsQ0FBZixFQUFrQlEsUUFBUSxHQUFHLENBQTdCLENBQWdDLFFBQU9FLEVBQUcsR0FDdkQsSUFBSVQsTUFBSixDQUFXSyxLQUFLLEdBQUcsQ0FBbkIsQ0FDRCxHQUZEO0FBR0QsR0FqQjZELENBbUI5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxNQUFJQSxLQUFLLElBQUloSSxNQUFNLEdBQUdrSSxRQUFULEdBQW9CLENBQWpDLEVBQW9DO0FBQ2xDLFVBQU14QixLQUFLLEdBQUcxRyxNQUFNLEdBQUdrSSxRQUFULEdBQW9CLENBQWxDO0FBQ0EsVUFBTUcsUUFBUSxHQUFHTCxLQUFLLElBQUloSSxNQUFNLEdBQUdrSSxRQUFiLENBQXRCO0FBQ0EsV0FBUSxHQUFFRSxFQUFHLE1BQUtwQixJQUFJLENBQUNVLFNBQUwsQ0FBZWhCLEtBQWYsQ0FBc0IsS0FBSTBCLEVBQUcsR0FBRSxJQUFJVCxNQUFKLENBQVdVLFFBQVEsR0FBRyxDQUF0QixDQUF5QixHQUExRTtBQUNELEdBNUI2RCxDQThCOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBTTNCLEtBQUssR0FBR3NCLEtBQUssR0FBRyxDQUFSLEdBQVlNLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxRQUFRLEdBQUcsQ0FBckIsQ0FBWixHQUFzQyxDQUFwRDtBQUNBLFFBQU1wSixHQUFHLEdBQUdrSixLQUFLLEdBQUcsQ0FBUixHQUFZTSxJQUFJLENBQUNFLEtBQUwsQ0FBV04sUUFBUSxHQUFHLENBQXRCLENBQVosR0FBdUMsQ0FBbkQ7QUFDQSxTQUFRLEdBQUVFLEVBQUcsTUFDWHBCLElBQUksQ0FBQ1UsU0FBTCxDQUFlaEIsS0FBZixFQUFzQjVILEdBQXRCLENBQ0QsUUFBT3NKLEVBQUcsR0FDVCxJQUFJVCxNQUFKLENBQVdXLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxRQUFRLEdBQUcsQ0FBckIsQ0FBWCxDQUNELEdBSkQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU08sWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0J6QixPQUEvQixFQUF3Q2lCLFFBQXhDLEVBQWtEQyxNQUFsRCxFQUEwRDtBQUN4RCxRQUFNQyxFQUFFLEdBQUcsSUFBSVQsTUFBSixDQUFXUSxNQUFYLENBQVg7QUFDQSxRQUFNUSxVQUFVLEdBQUdELE9BQU8sQ0FBQ25KLEdBQVIsQ0FBWWIsQ0FBQyxJQUFJO0FBQ2xDLFVBQU07QUFBRXJCLFdBQUY7QUFBUzJFO0FBQVQsUUFBa0J0RCxDQUFDLENBQUN6QyxLQUExQjtBQUNBLFVBQU13RixLQUFLLEdBQUcvQyxDQUFDLENBQUMrQyxLQUFGLEdBQ1QsS0FBSTJHLEVBQUcsR0FBRTFKLENBQUMsQ0FBQytDLEtBQU0sbUNBRFIsR0FFVCxLQUFJMkcsRUFBRyxtQ0FGWjtBQUdBLFdBQU8zRyxLQUFLLEdBQUdtSCxNQUFNLENBQUNsSyxDQUFDLENBQUNuQyxNQUFILEVBQVdjLEtBQVgsRUFBa0IyRSxJQUFsQixFQUF3QmlGLE9BQXhCLEVBQWlDaUIsUUFBakMsRUFBMkNDLE1BQU0sR0FBRyxDQUFwRCxDQUFyQjtBQUNELEdBTmtCLENBQW5CO0FBT0EsU0FBT1EsVUFBVSxDQUFDbkosSUFBWCxDQUFnQixFQUFoQixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVNxSixjQUFULENBQXdCQyxJQUF4QixFQUE4QmhHLEtBQTlCLEVBQXFDO0FBQ25DLE1BQUlwRyxNQUFNLEdBQUdvTSxJQUFiOztBQUNBLFNBQU9wTSxNQUFNLENBQUNBLE1BQU0sQ0FBQ3NELE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixLQUE4QixJQUFyQyxFQUEyQztBQUN6Q3RELFVBQU0sR0FBR0EsTUFBTSxDQUFDZ0wsU0FBUCxDQUFpQixDQUFqQixFQUFvQmhMLE1BQU0sQ0FBQ3NELE1BQVAsR0FBZ0IsQ0FBcEMsQ0FBVDtBQUNEOztBQUNELFNBQU90RCxNQUFNLEdBQUcsS0FBS2lMLE1BQUwsQ0FBWTdFLEtBQVosQ0FBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBUzhGLE1BQVQsQ0FBZ0JyTSxNQUFoQixFQUF3QmMsS0FBeEIsRUFBK0IyRSxJQUEvQixFQUFxQ2lGLE9BQXJDLEVBQThDaUIsUUFBOUMsRUFBd0RDLE1BQU0sR0FBRyxDQUFqRSxFQUFvRTtBQUN6RSxRQUFNO0FBQUV6QixTQUFGO0FBQVM1SCxPQUFUO0FBQWM2SDtBQUFkLE1BQXlCRixjQUFjLENBQUNwSixLQUFELEVBQVEyRSxJQUFSLENBQTdDO0FBQ0EsUUFBTTZFLFNBQVMsR0FBR0QsWUFBWSxDQUFDdkosS0FBRCxFQUFRMkUsSUFBUixFQUFjMEUsS0FBZCxDQUE5QjtBQUNBLFFBQU0wQixFQUFFLEdBQUcsSUFBSVQsTUFBSixDQUFXUSxNQUFYLENBQVg7QUFFQSxRQUFNWSxPQUFPLEdBQUdDLDBEQUFZLENBQUN0QyxLQUFELEVBQVE1SCxHQUFHLEdBQUc0SCxLQUFOLEdBQWMsQ0FBdEIsRUFBeUIxRSxJQUF6QixDQUE1QjtBQUNBLFFBQU07QUFBRTRGLFlBQUY7QUFBWVo7QUFBWixNQUFxQkQsTUFBTSxDQUFDRixTQUFELEVBQVlrQyxPQUFaLEVBQXFCOUIsT0FBckIsQ0FBakM7QUFDQSxRQUFNO0FBQUVlLFNBQUY7QUFBU2hJO0FBQVQsTUFBb0I2SCxZQUFZLENBQUNELFFBQUQsRUFBV1osSUFBWCxDQUF0QztBQUVBLFFBQU1pQyxRQUFRLEdBQUksR0FBRWIsRUFBRyx3QkFBdUJ6QixNQUFPLFlBQVdxQixLQUFNLElBQXRFO0FBQ0EsUUFBTWtCLE9BQU8sR0FBR2pCLElBQUksQ0FBQ2pCLElBQUQsRUFBT2hILE1BQVAsRUFBZWdJLEtBQWYsRUFBc0JFLFFBQXRCLEVBQWdDQyxNQUFoQyxDQUFwQjtBQUNBLFFBQU1yQyxPQUFPLEdBQUd2SixNQUFNLENBQUM0TSxJQUFQLENBQVlwTSxLQUFLLElBQUlBLEtBQUssQ0FBQ3hELElBQU4sS0FBZWdJLFNBQVMsQ0FBQ21FLE9BQTlDLENBQWhCO0FBQ0EsUUFBTUcsVUFBVSxHQUFHdEosTUFBTSxDQUFDNE0sSUFBUCxDQUFZcE0sS0FBSyxJQUFJQSxLQUFLLENBQUN4RCxJQUFOLEtBQWVnSSxTQUFTLENBQUNrRSxVQUE5QyxDQUFuQjtBQUNBLFFBQU16RSxRQUFRLEdBQUdvSSwyREFBYSxDQUM1QjdNLE1BQU0sQ0FBQzhNLE1BQVAsQ0FBY3RNLEtBQUssSUFBSUEsS0FBSyxDQUFDeEQsSUFBTixLQUFlZ0ksU0FBUyxDQUFDaUUsUUFBaEQsRUFDR2pHLEdBREgsQ0FDT3hDLEtBQUssSUFBSUEsS0FBSyxDQUFDMEUsS0FEdEIsQ0FENEIsQ0FBOUI7QUFLQSxRQUFNbEUsTUFBTSxHQUFHaEIsTUFBTSxDQUFDOE0sTUFBUCxDQUFjdE0sS0FBSyxJQUFJQSxLQUFLLENBQUN4RCxJQUFOLEtBQWVnSSxTQUFTLENBQUNELE1BQWhELENBQWY7QUFDQSxRQUFNSyxRQUFRLEdBQUdwRixNQUFNLENBQUM4TSxNQUFQLENBQWN0TSxLQUFLLElBQUlBLEtBQUssQ0FBQ3hELElBQU4sS0FBZWdJLFNBQVMsQ0FBQ29FLFFBQWhELENBQWpCO0FBRUEsUUFBTTJELFFBQVEsR0FBR3pELFVBQVUsR0FBSSxHQUFFdUMsRUFBRyxjQUFhdkMsVUFBVSxDQUFDcEUsS0FBTSxJQUF2QyxHQUE2QyxFQUF4RTtBQUNBLFFBQU04SCxNQUFNLEdBQUd2SSxRQUFRLENBQUNoQixNQUFULEdBQW1CLEdBQUVvSSxFQUFHLFlBQVdwSCxRQUFTLElBQTVDLEdBQWtELEVBQWpFO0FBQ0EsUUFBTXdJLFVBQVUsR0FBRzFELE9BQU8sR0FBSSxHQUFFc0MsRUFBRyxHQUFFdEMsT0FBTyxDQUFDckUsS0FBTSxJQUF6QixHQUErQixFQUF6RDtBQUVBLFFBQU1nSSxTQUFTLEdBQUdoQixZQUFZLENBQUNsTCxNQUFELEVBQVMwSixPQUFULEVBQWtCaUIsUUFBbEIsRUFBNEJDLE1BQTVCLENBQTlCO0FBQ0EsUUFBTXVCLFdBQVcsR0FBR2pCLFlBQVksQ0FBQzlHLFFBQUQsRUFBV3NGLE9BQVgsRUFBb0JpQixRQUFwQixFQUE4QkMsTUFBOUIsQ0FBaEM7QUFFQSxTQUFPVSxjQUFjLENBQ2xCLEdBQUVJLFFBQVMsT0FBTUMsT0FBUSxLQUFJSSxRQUFTLEdBQUVDLE1BQU8sR0FBRUMsVUFBVyxFQUE3RCxHQUNLLEdBQUVFLFdBQVksR0FBRUQsU0FBVSxFQUZaLEVBR25CLENBSG1CLENBQXJCO0FBS0QsQyxDQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTckUsWUFBVCxDQUNMbkosS0FESyxFQUNFUyxNQURGLEVBQ1V1SyxPQUFPLEdBQUcsQ0FEcEIsRUFDdUJpQixRQUFRLEdBQUcsRUFEbEMsRUFDc0M1TyxTQUFTLEdBQUdzUCxNQURsRCxFQUVMO0FBQ0EsUUFBTTtBQUFFdkwsU0FBRjtBQUFTMkU7QUFBVCxNQUFrQi9GLEtBQXhCO0FBQ0EsU0FBTzNDLFNBQVMsQ0FBQ29ELE1BQU0sQ0FBQ0gsTUFBUixFQUFnQmMsS0FBaEIsRUFBdUIyRSxJQUF2QixFQUE2QmlGLE9BQTdCLEVBQXNDaUIsUUFBdEMsQ0FBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3lCLFdBQVQsQ0FBcUIxTixLQUFyQixFQUE0QmdMLE9BQU8sR0FBRyxDQUF0QyxFQUF5QztBQUM5QyxRQUFNO0FBQUU1SixTQUFGO0FBQVMyRTtBQUFULE1BQWtCL0YsS0FBeEI7QUFDQSxRQUFNO0FBQUV5SyxTQUFGO0FBQVM1SCxPQUFUO0FBQWM2SDtBQUFkLE1BQXlCRixjQUFjLENBQUNwSixLQUFELEVBQVEyRSxJQUFSLENBQTdDO0FBQ0EsUUFBTTZFLFNBQVMsR0FBR0QsWUFBWSxDQUFDdkosS0FBRCxFQUFRMkUsSUFBUixFQUFjMEUsS0FBZCxDQUE5QjtBQUVBLFFBQU1xQyxPQUFPLEdBQUdDLDBEQUFZLENBQUN0QyxLQUFELEVBQVE1SCxHQUFHLEdBQUc0SCxLQUFOLEdBQWMsQ0FBdEIsRUFBeUIxRSxJQUF6QixDQUE1QjtBQUNBLFFBQU07QUFBRTRGLFlBQUY7QUFBWVo7QUFBWixNQUFxQkQsTUFBTSxDQUFDRixTQUFELEVBQVlrQyxPQUFaLEVBQXFCOUIsT0FBckIsQ0FBakM7QUFDQSxRQUFNO0FBQUVlLFNBQUY7QUFBU3JKO0FBQVQsTUFBZWtKLFlBQVksQ0FBQ0QsUUFBRCxFQUFXWixJQUFYLENBQWpDO0FBRUEsU0FBTztBQUFFQSxRQUFJLEVBQUVMLE1BQVI7QUFBZ0JpRCxVQUFNLEVBQUU1QjtBQUF4QixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDenZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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QUFDLHlCQUFJc1IsUUFBUSxDQUFDLENBQUM1USxDQUFDLEdBQUcsRUFBTCxJQUFXLEVBQVosQ0FBWixpREFBK0I0USxRQUFRLENBQUM1USxDQUFELENBQXZDLHVDQUE4QzRRLFFBQVEsQ0FBQyxDQUFELENBQXRELENBQVI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3ZXLFNBQVQsQ0FBbUJELEtBQW5CLEVBQTBCO0FBQy9CLE1BQUlBLEtBQUssS0FBSzBILFNBQWQsRUFBeUIsT0FBTyxXQUFQOztBQUN6QixNQUFJLE9BQU8xSCxLQUFQLEtBQWlCLFVBQXJCLEVBQWlDO0FBQy9CLFdBQU9xQixnREFBVSxDQUFDQyxPQUFYLENBQW1CdEIsS0FBbkIsSUFBNEIsUUFBNUIsR0FBdUMsVUFBOUM7QUFDRDs7QUFDRCxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0IsT0FBUSxVQUFTQSxLQUFLLENBQUN5VyxXQUFZLEdBQW5DO0FBQy9CLFNBQU9DLElBQUksQ0FBQ3pXLFNBQUwsQ0FBZUQsS0FBZixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTMlcsU0FBVCxDQUFtQnpFLEdBQW5CLEVBQXdCO0FBQzdCLFNBQU8sYUFBYWMsUUFBYixDQUFzQmQsR0FBRyxDQUFDLENBQUQsQ0FBekIsSUFBaUMsTUFBS0EsR0FBSSxFQUExQyxHQUErQyxLQUFJQSxHQUFJLEVBQTlEO0FBQ0QsQyIsImZpbGUiOiJrZXNzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgbWFrZVBhcnNlciB9IGZyb20gJy4vY29yZSdcclxuaW1wb3J0IHsgY2hhckxlbmd0aCwgc3RyaW5naWZ5IH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcclxuXHJcbmNvbnN0IGNoYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnKVxyXG5jb25zdCBmbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBmdW5jdGlvbicpXHJcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxyXG5jb25zdCBzdHJBcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnKVxyXG5jb25zdCBzdHJSZWdGb3JtdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24nKVxyXG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgbnVtYmVyJylcclxuY29uc3QgcGFyc2VyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHBhcnNlcicpXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkRm9ybWF0dGVyID0gKHR5cGUsIG9yZCkgPT4gdmFsdWUgPT5cclxuICBgZXhwZWN0ZWQgJHtvcmR9IGFyZ3VtZW50IHRvIGJlICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcblxyXG5leHBvcnQgY29uc3Qgb3JkaW5hbENoYXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkKVxyXG5leHBvcnQgY29uc3Qgb3JkaW5hbEZ1bmN0aW9uID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZClcclxuZXhwb3J0IGNvbnN0IG9yZGluYWxOdW1iZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG51bWJlcicsIG9yZClcclxuZXhwb3J0IGNvbnN0IG9yZGluYWxQYXJzZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZClcclxuZXhwb3J0IGNvbnN0IG9yZGluYWxTdHJpbmcgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZClcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZm5Gb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IG1ha2VQYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XHJcbiAgaWYgKCEoXHJcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxyXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcclxuICAgIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcclxuICApKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JSZWdFeHAobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0clJlZ0Zvcm10dGVyKSB7XHJcbiAgY29uc3QgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSlcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiB0eXBlICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gbnVtRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHBhcnNlckZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgIW1ha2VQYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7XHJcbiAgYXNzZXJ0RnVuY3Rpb24sXHJcbiAgYXNzZXJ0TnVtYmVyLFxyXG4gIGFzc2VydFBhcnNlcixcclxuICBvcmRpbmFsRnVuY3Rpb24sXHJcbiAgb3JkaW5hbE51bWJlcixcclxuICBvcmRpbmFsUGFyc2VyLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgb2ssIG1ha2VQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBtZXJnZSwgbmVzdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAsIG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnkgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2ssIEVycm9yLCBGYXRhbCB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcy4gRWFjaCBvZiB0aGUgc3VwcGxpZWRcclxuICogcGFyc2VycyBpcyBhcHBsaWVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLiBXaGVuIHRoZSBmaXJzdCBwYXJzZXJcclxuICogc3VjY2VlZHMsIG9yIHRoZSBmaXJzdCBwYXJzZXIgZmFpbHMgd2hpbGUgY29uc3VtaW5nIGlucHV0LCBleGVjdXRpb25cclxuICogaXMgc3RvcHBlZCBhbmQgdGhlIHN0YXRlIGZyb20gdGhhdCBsYXN0IHBhcnNlciBpcyBwYXNzZWQgdGhyb3VnaC4gVGhlXHJcbiAqIHNhbWUgaGFwcGVucyBpZiBhbGwgcGFyc2VycyBhcmUgYXBwbGllZCB3aXRob3V0IGFueSBvZiB0aGVtXHJcbiAqIHN1Y2NlZWRpbmcuXHJcbiAqXHJcbiAqIE9uIGZhaWx1cmUsIGFsbCBvZiB0aGUgYEV4cGVjdGVkYCBlcnJvcnMgZnJvbSBhbnkgb2YgdGhlIGNvbnRhaW5lZFxyXG4gKiBwYXJzZXJzIHdpbGwgYmUgbWVyZ2VkIGludG8gdGhpcyBwYXJzZXIncyBlcnJvcnMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZSBmYWlscyBmYXRhbGx5LCBvciBhbGwgZmFpbC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxyXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNob2ljZSA9ICguLi5wcykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtpLCBwXSBvZiBwcy5lbnRyaWVzKCkpIHtcclxuICAgICAgYXNzZXJ0UGFyc2VyKCdjaG9pY2UnLCBwLCBvcmRpbmFsUGFyc2VyKG9yZGluYWwoaSArIDEpKSlcclxuICAgIH1cclxuICB9XHJcbiAgbGV0IGVycm9ycyA9IFtdXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICAgIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcmVzdWx0LmVycm9ycylcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKG5leHQsIGVycm9ycylcclxuICB9XHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBlcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciwgc3VjY2VlZGluZyB3aGV0aGVyXHJcbiAqIGl0IGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXHJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gSXQncyB1c2VkIHRvXHJcbiAqIGltcGxlbWVudCBza2lwcGluZyBvdmVyIHNvbWUgb3B0aW9uYWwgdGV4dC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBhcHBsaWVkIGFuZFxyXG4gKiAgICAgdGhlbiBoYXZlIGl0cyByZXN1bHQgaWdub3JlZC5cclxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcclxuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5XHJcbiAqICAgICBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBvcHRpb25hbCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ29wdGlvbmFsJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwgPyByZXBseSA6IG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xyXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIHZhbHVlXHJcbiAqIGB4YC4gVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxyXG4gKlxyXG4gKiBgZmFsbGJhY2socCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hvaWNlKFtwLFxyXG4gKiBjb25zdGFudCh4KV0pYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3NcclxuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cclxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXHJcbiAqICAgICBzdXBwbGllZCBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcclxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmYWxsYmFjayA9IChwLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignZmFsbGJhY2snLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gRXJyb3IgPyByZXBseSA6IG9rKG5leHQsIHgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRyYW5zZm9ybXMgYSBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWxcclxuICogZmFpbHVyZS4gSXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyOyBpZiB0aGF0IHBhcnNlciBmYWlsc1xyXG4gKiBmYXRhbGx5LCB0aGUgc3RhdGUgaXMgc2V0IGJhY2sgdG8gd2hhdCBpdCB3YXMgKmJlZm9yZSogdGhhdCBwYXJzZXIgaXNcclxuICogYXBwbGllZCBhbmQgdGhlIGZhdGFsIGZhaWx1cmUgaXMgcmV0dXJuZWQgYXMgYSBub24tZmF0YWwgZmFpbHVyZS4gSWZcclxuICogdGhlIHBhcnNlciBoYXMgYW55IG90aGVyIHJlc3VsdCwgaXQgaXMgcGFzc2VkIHRocm91Z2ggd2l0aG91dFxyXG4gKiBtb2RpZmljYXRpb24uXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIGFsbG93cyB0aGUgdXNlciB0byBjYXVzZSBhIG5vbi1iYWNrdHJhY2tpbmcgcGFyc2VyIHRvXHJcbiAqIGJhY2t0cmFjayB1cG9uIGZhaWx1cmUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcclxuICogICAgIGludG8gbm9uLWZhdGFsIGZhaWx1cmVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcclxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBiYWNrdHJhY2sgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdiYWNrdHJhY2snLCBwKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0LmluZGV4XHJcbiAgICAgID8gcmVzdWx0LmVycm9yc1xyXG4gICAgICA6IG5lc3RlZChuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgcmV0dXJuIGVycm9yKG5leHQsIGVyciwgaW5kZXgpXHJcbiAgfVxyXG4gIHJldHVybiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXHJcbiAqIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmVcclxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcclxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzb1xyXG4gKiBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcclxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHByZXZpb3VzIHBhcnNlcnMgaGF2ZSBjb25zdW1lZCBpbnB1dC4gQVxyXG4gKiBmYXRhbCBlcnJvciBmcm9tIG9uZSBvZiB0aGUgY29udGFpbmVkIHBhcnNlcnMgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW5cclxuICogb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGBzZXF1ZW5jZUIocHMpYCBpcyBub3QgdGhlIHNhbWUgYXNcclxuICogYGJhY2t0cmFjayhzZXF1ZW5jZShwcykpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2ZcclxuICogYHBzYCBmYWlscyBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0XHJcbiAqIGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcclxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZUIgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgZm9yIChjb25zdCBbaSwgcF0gb2YgcHMuZW50cmllcygpKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignc2VxdWVuY2VCJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICAgID8gcmVzdWx0LmVycm9yc1xyXG4gICAgICAgIDogbmVzdGVkKG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHN0YXRlIGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWRcclxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXHJcbiAqIHBhcnNlciByZXR1cm5zIHRoYXQgcmVzdWx0aW5nIHN0YXRlLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2Vjb25kIHBhcnNlciAodGhlIG9uZSBwcm92aWRlZCBieSBgZm5gKSBmYWlscyBub24tZmF0YWxseSxcclxuICogdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG9cclxuICogd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdCBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbCBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbFxyXG4gKiByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGBjaGFpbkIocCwgZm4pYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhjaGFpbihwLFxyXG4gKiBmbikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cclxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxyXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxyXG4gKiAgICAgcmV0dXJucy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFpbkIgPSAocCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdjaGFpbkInLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydEZ1bmN0aW9uKCdjaGFpbkInLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKGZuKHJlc3VsdDEudmFsdWUpKG5leHQxKSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IEVycm9yKSByZXR1cm4gcmVwbHkyXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cclxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAxYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxyXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cclxuICpcclxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcclxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxyXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGBsZWZ0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhsZWZ0KHAxLFxyXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZWZ0QiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdsZWZ0QicsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignbGVmdEInLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2sobmV4dDIsIHJlc3VsdDEudmFsdWUpXHJcblxyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgPyByZXN1bHQyLmVycm9yc1xyXG4gICAgOiBuZXN0ZWQobmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMmAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcclxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXHJcbiAqXHJcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXHJcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcclxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcclxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgcmlnaHRCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKHJpZ2h0KHAxLFxyXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcmlnaHRCID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcigncmlnaHRCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwMihuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxyXG5cclxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgID8gcmVzdWx0Mi5lcnJvcnNcclxuICAgIDogbmVzdGVkKG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxyXG4gKlxyXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxyXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXHJcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYGJvdGhCKHAxLCBwMilgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYmFja3RyYWNrKGJvdGgocDEsXHJcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBib3RoQiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdib3RoQicsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYm90aEInLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2sobmV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcclxuXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxyXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXHJcbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiB0aGF0IGZhaWx1cmUgaXMgZmF0YWwsIHRoZVxyXG4gKiBvdmVyYWxsIGZhaWx1cmUgd2lsbCBhbHNvIGJlIGZhdGFsLlxyXG4gKlxyXG4gKiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiB0aGUgdW5kZXJseWluZyBlcnJvciB3YXNcclxuICogbm9uLWZhdGFsLCBldmVuIGlmIGlucHV0IHdhcyBjb25zdW1lZCAoYmFja3RyYWNraW5nIHdpbGwgaGFwcGVuIGluXHJcbiAqIHRoaXMgY2FzZSkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGFwcGx5IG11bHRpcGxlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXHJcbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY291bnRCID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdjb3VudEInLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydE51bWJlcignY291bnRCJywgbiwgb3JkaW5hbE51bWJlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0LmluZGV4XHJcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXHJcbiAgICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgICAgcmV0dXJuIGVycm9yKG5leHQsIGVyciwgaW5kZXgpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcclxuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxyXG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcclxuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXHJcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXHJcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxyXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxyXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxyXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cclxuICpcclxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5IGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLFxyXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxyXG4gKiBjb25zdW1lZCkuIEEgZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsXHJcbiAqIGVycm9yIGZvciB0aGUgb3ZlcmFsbCBwYXJzZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXHJcbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXHJcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtYW55VGlsbEIgPSAocCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsQicsIGVuZCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBPaykgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHQyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgICAgID8gbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKVxyXG4gICAgICAgIDogbmVzdGVkKG5leHQyLCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpKVxyXG4gICAgICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYVxyXG4gKiBnZW5lcmF0b3IgZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZFxyXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXHJcbiAqIGJlIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXHJcbiAqXHJcbiAqIElmIGFueSBvZiB0aGVzZSBwYXJzZXJzIGZhaWwsIHRoZSBgYmxvY2tgIHBhcnNlciB3aWxsIGFsc28gZmFpbC4gSWZcclxuICogdGhhdCBmYWlsdXJlIGlzIG5vbi1mYXRhbCwgYmFja3RyYWNraW5nIHdpbGwgcmVzZXQgdGhlIGluZGV4IHRvIHdoZXJlXHJcbiAqIGl0IHdhcyBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBgYmxvY2tgIHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICpcclxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXHJcbiAqIHZhbHVlIHRoYXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5lZC5cclxuICpcclxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxyXG4gKiBjYXVzZSB1bmRlZmluZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXHJcbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXHJcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcclxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxyXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoYXQgZXhhY3RseSBpcyB5aWVsZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXHJcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXHJcbiAqICAgICBzdWNjZWVkKSBpbiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmxvY2tCID0gZ2VuRm4gPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZ2VuID0gZ2VuRm4oKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dFZhbHVlXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG4gIGxldCBpID0gMFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxyXG4gICAgaWYgKGRvbmUpIHJldHVybiBvayhuZXh0LCB2YWx1ZSlcclxuXHJcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gICAgaWYgKEFTU0VSVCkge1xyXG4gICAgICBhc3NlcnRQYXJzZXIoJ2Jsb2NrQicsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xyXG4gICAgICAgIG9yZGluYWwoaSArIDEpXHJcbiAgICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXHJcbiAgICB9XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHZhbHVlKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBlcnJvcihuZXh0U3RhdGUsIHJlc3VsdC5lcnJvcnMsIGluZGV4KVxyXG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXHJcbiAgICBpKytcclxuICB9XHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydEZ1bmN0aW9uLFxyXG4gIGFzc2VydE51bWJlcixcclxuICBhc3NlcnRQYXJzZXIsXHJcbiAgb3JkaW5hbEZ1bmN0aW9uLFxyXG4gIG9yZGluYWxOdW1iZXIsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBtYWtlUGFyc2VyLCBtYXliZUZhdGFsLCBvaywgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGR1cCwgb3JkaW5hbCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHN0YXRlIGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWRcclxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXHJcbiAqIHBhcnNlciByZXR1cm5zIHRoYXQgcmVzdWx0aW5nIHN0YXRlLlxyXG4gKlxyXG4gKiBJZiB0aGUgaW5pdGlhbCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBpbnN0ZWFkIHJldHVybmVkLiBJZiB0aGVcclxuICogc2Vjb25kIHBhcnNlciAodGhlIHJldHVybiB2YWx1ZSBvZiBgZm5gKSBmYWlscyBhbmQgYHBgIGNvbnN1bWVkXHJcbiAqIGlucHV0LCB0aGUgZmFpbHVyZSBpcyBmYXRhbC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cclxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcclxuICogICAgIHJldHVybnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0RnVuY3Rpb24oJ2NoYWluJywgZm4sIG9yZGluYWxGdW5jdGlvbignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShuZXh0MSkpXHJcbiAgcmV0dXJuIHJlc3VsdDIuc3RhdHVzID09PSBPayA/IHJlcGx5MlxyXG4gICAgOiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHNcclxuICogcmVzdWx0IHRvIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uXHJcbiAqIGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuXHJcbiAqXHJcbiAqIElmIHRoZSBjb250YWluZWQgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcHJvcGFnYXRlZCBvdXQgYXMgdGhlXHJcbiAqIGZhaWx1cmUgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cclxuICpcclxuICogYG1hcChwLCBmbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudChmbih4KSkpYC4gVGhpcyBhbHNvIG1ha2VzIGl0IGEgbW9yZSBlZmZpY2llbnQgdmVyc2lvbiBvZlxyXG4gKiBgcGlwZShbcF0sIGZuKWAgKGEgc2luZ2xlLXBhcnNlciBgcGlwZWApLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5IHRvIHRoZSBpbnB1dC5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgIGFuZCB3aG9zZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHRoZVxyXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgc3VjY2VlZCB3aXRoIHRoYXRcclxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1hcCA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBvcmRpbmFsRnVuY3Rpb24oJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBmbihyZXN1bHQudmFsdWUpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXHJcbiAqIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgaWYgaXQgc3VjY2VlZHMsIHRoYXRcclxuICogcmVzdWx0J3MgZWxlbWVudHMgYXJlIGpvaW5lZCB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBpc1xyXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXHJcbiAqIGZ1bmN0aW9uYWwgbGFuZ3VhZ2VzIHdoZXJlIGEgc3RyaW5nIGlzIHRoZSBzYW1lIGFzIGEgbGlzdCBvZlxyXG4gKiBjaGFyYWN0ZXJzLiBKYXZhU2NyaXB0IG5lZWRzIGV4cGxpY2l0IGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgdHdvLCBzb1xyXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxyXG4gKlxyXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCB0aGUgY3JlYXRlZCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgd2l0aFxyXG4gKiB0aGUgc2FtZSBzdGF0ZS5cclxuICpcclxuICogYGpvaW4ocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4LmpvaW4oJycpKSlgLlxyXG4gKlxyXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXMgbm90IHJlc3VsdCBpbiBhbiBhcnJheSwgYW4gZXhjZXB0aW9uIHdpbGxcclxuICogYmUgdGhyb3duIGJlY2F1c2UgYW4gYXR0ZW1wdCB3aWxsIGJlIG1hZGUgdG8gY2FsbCBgam9pbmAgb24gdGhlXHJcbiAqIHJlc3VsdC4gSWYgaXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBzb21ldGhpbmcgb3RoZXIgdGhhbiBzdHJpbmdzLFxyXG4gKiB0aG9zZSBlbGVtZW50cyB3aWxsIGJlIGNvZXJjZWQgaW50byBzdHJpbmdzIGFuZCB0aGVuIGpvaW5lZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2ZcclxuICogICAgIHN0cmluZ3MuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlciBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gYSBzaW5nbGUgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGVcclxuICogICAgIGFycmF5IG9mIHN0cmluZ3MuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgam9pbiA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ2pvaW4nLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZS5qb2luKCcnKSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIGRpc2NhcmRzIGFueVxyXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCB3aGlsZSBzdGlsbCBjb25zdW1pbmcgaW5wdXQuIEEgZmFpbHVyZSB3aWxsIGJlXHJcbiAqIHByb3BhZ2F0ZWQgd2l0aG91dCBtb2RpZmljYXRpb24uXHJcbiAqXHJcbiAqIGBza2lwKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsICgpID0+XHJcbiAqIGNvbnN0YW50KG51bGwpKWAsXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRvIGJlIGRpc2NhcmRlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgaXRzIGNvbnRhaW5lZFxyXG4gKiAgICAgcGFyc2VyIGRvZXMgb24gc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2tpcCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ3NraXAnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBydW4gdGhlIHN1cHBsaWVkIHBhcnNlciBidXQsIG9uIHN1Y2Nlc3MsXHJcbiAqIHJlc3VsdCBpbiB0aGUgc3VwcGxpZWQgdmFsdWUgaW5zdGVhZC5cclxuICpcclxuICogYHZhbHVlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW5hdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cclxuICogY29uc3RhbnQoeCkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgdGhlIG5ldyBwYXJzZXIgd2lsbCByZXN1bHQgaW4gaWYgYHBgXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxyXG4gKiAgICAgc3VjY2Vzcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICBjb25zdCBbdHVwbGUsIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCB4KSA6IHR1cGxlXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDFgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxyXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxyXG4gKiB2YWx1ZShwMiwgeCkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGVmdCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcDEsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtuZXh0MiwgcmVzdWx0Ml0gPSBwMihuZXh0MSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2sobmV4dDIsIHJlc3VsdDEudmFsdWUpXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxyXG4gKiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYHJpZ2h0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsICgpID0+XHJcbiAqIHAyKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByaWdodCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcigncmlnaHQnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcclxuICogYHAxYCBvciBgcDJgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbFxyXG4gKiBiZSBmYXRhbCBpZiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cclxuICpcclxuICogYGJvdGgocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PlxyXG4gKiBjaGFpbihwMiwgYiA9PiBjb25zdGFudChbYSwgYl0pKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm90aCA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdib3RoJywgcDEsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdib3RoJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtuZXh0MiwgcmVzdWx0Ml0gPSBwMihuZXh0MSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2sobmV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcclxuICAgIDogbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzXHJcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXHJcbiAqIHBhcnNlcnMgdG8gYXBwbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxyXG4gKiBwYXJzZXIncyByZXN1bHQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXFgLCBgbnVsbGAgcGFyc2VyIHJlc3VsdHMgYXJlICpub3QqIGRpc2NhcmRlZC5cclxuICogVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRvIGBmbmAgbm9cclxuICogbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXHJcbiAqXHJcbiAqIGBwaXBlKHAxLCBwMiwgZm4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+XHJcbiAqIGNoYWluKHAyLCBiID0+IGNvbnN0YW50KGZuKGEsIGIpKSkpYCwgYHBpcGUocDEsIHAyLCBwMywgZm4pYCBpcyBhblxyXG4gKiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+IGNoYWluKHAyLCBiID0+IGNoYWluKHAzLFxyXG4gKiBjID0+IGNvbnN0YW50KGZuKGEsIGIsIGMpKSkpKWAsIGFuZCBzbyBvbi5cclxuICpcclxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcclxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcclxuICogICAgIGFwcGxpZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb24gd2hpY2hcclxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXHJcbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci4gQSBzaW5nbGVcclxuICogICAgIGZ1bmN0aW9uIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBiZSB0aGUgbGFzdCBwYXJhbWV0ZXI7IGFsbFxyXG4gKiAgICAgb3RoZXIgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcclxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgcGlwZSA9ICguLi5wcykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgZm9yIChjb25zdCBbaSwgcF0gb2YgcHMuZW50cmllcygpKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcigncGlwZScsIHAsIG9yZGluYWxQYXJzZXIob3JkaW5hbChpICsgMSkpKVxyXG4gICAgfVxyXG4gICAgYXNzZXJ0RnVuY3Rpb24oJ3BpcGUnLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKG9yZGluYWwocHMubGVuZ3RoICsgMSkpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICB9XHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCBmbiguLi52YWx1ZXMpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgYmVmb3JlLCBjb250ZW50LCBhbmQgYWZ0ZXIgcGFyc2Vyc1xyXG4gKiBpbiBvcmRlciBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cclxuICpcclxuICogTm90ZSB0aGF0IHRoZSBjb250ZW50IHBhcnNlciBgcGAgaXMgYXBwbGllZCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlclxyXG4gKiBgcGFmdGVyYC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb250ZW50IHBhcnNlciB3aWxsIGhhdmUgYW4gb3Bwb3J0dW5pdHlcclxuICogdG8gcGF0Y2ggdGhlIFwiYWZ0ZXJcIiBjb250ZW50IGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyIGRvZXMsIHNvIHRha2VcclxuICogY2FyZSB0aGF0IHRoZSBwYXJzZXJzIGRvIG5vdCBvdmVybGFwIGluIHdoYXQgdGhleSBtYXRjaC5cclxuICpcclxuICogYGJldHdlZW4ocHJlLCBwb3N0LCBwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXHJcbiAqIGBsZWZ0KHJpZ2h0KHByZSwgcCksIHBvc3QpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHByZSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcG9zdCBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xyXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxyXG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHByZSwgcG9zdCwgcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwcmUsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuJywgcG9zdCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBvcmRpbmFsUGFyc2VyKCczcmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwcmUoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAobmV4dDEpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBPaykge1xyXG4gICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbbmV4dDMsIHJlc3VsdDNdID0gcG9zdChuZXh0MilcclxuICByZXR1cm4gcmVzdWx0My5zdGF0dXMgPT09IE9rID8gb2sobmV4dDMsIHJlc3VsdDIudmFsdWUpXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDMuaW5kZXggIT09IGluZGV4LCBuZXh0MywgcmVzdWx0My5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbnRoIGVsZW1lbnQgb2YgdGhlIHJlc3VsdCBvZiBhIHBhcnNlciB0aGF0IHByb2R1Y2VzIGFuXHJcbiAqIGFycmF5LiBJZiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgd2lsbCBiZSBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYG50aChwLCBuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KHhbbl0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheS5cclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBudGggPSAocCwgbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ250aCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBvcmRpbmFsTnVtYmVyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlW25dKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXHJcbiAqIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgZmlyc3QocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4WzBdKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlyc3QgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdmaXJzdCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlWzBdKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXHJcbiAqIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYHNlY29uZChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KHhbMV0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignc2Vjb25kJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbMV0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZiB0aGVcclxuICogcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXHJcbiAqXHJcbiAqIGB0aGlyZChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KHhbMl0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCB0aGlyZCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbMl0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmb3VydGggZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcclxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgZm91cnRoKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFszXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb3VydGggPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdmb3VydGgnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVszXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYGZpZnRoKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFs0XSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZpZnRoID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignZmlmdGgnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVs0XSkgOiByZXBseVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZXJyb3IsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzLCBpdHMgcmVzdWx0IGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxyXG4gKiBFaXRoZXIgd2F5LCBubyBpbnB1dCBpcyBjb25zdW1lZC4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyXHJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlcihzKSBzYXRpc2Z5IHRoZSBwYXJzZXIgd2l0aG91dCBhY3R1YWxseSBjb25zdW1pbmdcclxuICogdGhlIGlucHV0IHRvIGZpbmQgb3V0LlxyXG4gKlxyXG4gKiBBcyBhIHNpZGUgZWZmZWN0LCBhbnkgZmF0YWwgcGFyc2UgZXJyb3Igd2lsbCBiZSB0cmFuc2Zvcm1lZCBpbnRvIGFcclxuICogbm9uLWZhdGFsIG9uZSwgc2luY2Ugbm8gaW5wdXQgaXMgYmVpbmcgY29uc3VtZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgb3IgZmFpbHNcclxuICogICAgIHdpdGggaXQsIGJ1dCB3aGljaCBjb25zdW1lcyBubyBpbnB1dCBlaXRoZXIgd2F5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvb2tBaGVhZCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWUsIGluZGV4KVxyXG4gICAgOiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lc1xyXG4gKiBub3QgY29uc3VtZSBpbnB1dC4gSWYgdGhlIHBhcnNlciBzdWNjZWVkcyBhbnkgb3RoZXIgd2F5IG9yIGZhaWxzLFxyXG4gKiB0aGlzIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cclxuICpcclxuICogVGhpcyBlZmZlY3QgaXMgdXNlZnVsIGZvciB0dXJuaW5nIGEgcGFyc2VyIGludG8gb25lIHdoaWNoIG11c3QgbWF0Y2hcclxuICogYXQgbGVhc3Qgb25jZS4gRm9yIGluc3RhbmNlLCBvbmUgY291bGQgaW1wbGVtZW50IGBtYW55MShwKWAgd2l0aFxyXG4gKiBgbm90RW1wdHkobWFueShwKSlgLlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxyXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcclxuICogb3IgZWxzZSBgbm90RW1wdHlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBmYWlscyBpZiBgcGAgcGFzc2VzIGJ1dCBkb2Vzbid0XHJcbiAqICAgICBjb25zdW1lIGFueSBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm90RW1wdHkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gT2sgfHwgbmV4dC5pbmRleCAhPT0gaW5kZXggPyByZXBseSA6IGVycm9yKG5leHQpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcclxuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcclxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXHJcbiAqXHJcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXHJcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcclxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIHN1Y2NlZWRzXHJcbiAqICAgICB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxyXG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5TCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gT2sgfHwgbmV4dC5pbmRleCAhPT0gaW5kZXggPyByZXBseVxyXG4gICAgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQsXHJcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cclxuICpcclxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcclxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXHJcbiAqIG9yIGVsc2UgYGZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXHJcbiAqICAgICBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG4gICAgOiBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQsXHJcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXHJcbiAqICAgICBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5TCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgbnVsbCwgaW5kZXgpXHJcbiAgICA6IGVycm9yKG5leHQsIGV4cGVjdGVkKG1zZyksIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIHN1Y2NlZWRzLFxyXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHkuXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXHJcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxyXG4gKiBvciBlbHNlIGBub3RGb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxyXG4gKiAgICAgZmFpbHMsIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub3RGb2xsb3dlZEJ5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IGVycm9yKG5leHQsIHVuZGVmaW5lZCwgaW5kZXgpXHJcbiAgICA6IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIHN1Y2NlZWRzLFxyXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXHJcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxyXG4gKiAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxyXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IGVycm9yKG5leHQsIGV4cGVjdGVkKG1zZyksIGluZGV4KVxyXG4gICAgOiBvayhuZXh0LCBudWxsLCBpbmRleClcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGZhdGFsLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcbmNvbnN0IHsgTmVzdGVkIH0gPSBFcnJvclR5cGVcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG5mdW5jdGlvbiBwYXNzKHN0YXRlLCByZXN1bHQsIGVycm9ycykge1xyXG4gIHJldHVybiBbeyAuLi5zdGF0ZSB9LCB7IC4uLnJlc3VsdCwgZXJyb3JzIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBjb25zdW1lcyBpbnB1dCwgbm90aGluZyBhZGRpdGlvbmFsIGhhcHBlbnMuIE90aGVyd2lzZSwgdGhlIG9yaWdpbmFsXHJcbiAqIHBhcnNlcidzIHJlc3VsdCBpcyByZXRhaW5lZCBidXQgdGhlIGVycm9yIGlzIG92ZXJ3cml0dGVuIGJ5IHRoZVxyXG4gKiBzdXBwbGllZCBtZXNzYWdlIGFzIGFuIGV4cGVjdGVkIGVycm9yLlxyXG4gKlxyXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgYmV0dGVyIGVycm9yIG1lc3NhZ2VzIGluIGNhc2VzIHdoZXJlIHRoZVxyXG4gKiBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBlcnJvciBtZXNzYWdlcyBhcmUgaW5zdWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgaWYgYHBgIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcclxuICogICAgIHRocm91Z2ggZXhjZXB0IGZvciBjaGFuZ2luZyBpdHMgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIHVwb25cclxuICogICAgIGZhaWx1cmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGFiZWwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIGluZGV4ID09PSBuZXh0LmluZGV4ID8gcGFzcyhuZXh0LCByZXN1bHQsIGV4cGVjdGVkKG1zZykpIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBzdWNjZWVkcywgdGhhdCBzdWNjZXNzIGlzIHBhc3NlZCB0aHJvdWdoLCB0aG91Z2ggaWYgaXQgZGlkbid0IGNvbnN1bWVcclxuICogYW55IGlucHV0LCB0aGUgcHJvdmlkZWQgc3RyaW5nIHdpbGwgYmUgdXNlZCB0byBjcmVhdGUgYW4gZXhwZWN0ZWRcclxuICogZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogSWYgdGhlIG9yaWdpbmFsIHBhcnNlciBmYWlscywgd2hhdCBoYXBwZW5zIGRlcGVuZHMgb24gd2hldGhlciB0aGF0XHJcbiAqIGZhaWx1cmUgY29uc3VtZWQgaW5wdXQuIElmIGl0IGRpZCBub3QsIHRoZSBzdXBwbGllZCBtZXNzYWdlXHJcbiAqIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2UganVzdCBhcyB3aXRoIGBsYWJlbGAuIElmIGl0XHJcbiAqICpkaWQqIGNvbnN1bWUgaW5wdXQsIHRoZSBzdGF0ZSBpcyByZXNldCB0byB0aGUgc3RhdGUgYmVmb3JlIHRoZVxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIHRoZSBlcnJvciBpcyBzZXQgdG8gYSBjb21wb3VuZCBlcnJvciB1c2luZyB0aGVcclxuICogc3VwcGxpZWQgbWVzc2FnZSAod2l0aCB0aGUgbmVzdGVkIGVycm9yIGJlaW5nIHRoZSBvcmlnaW5hbCBlcnJvciB0aGF0XHJcbiAqIGNhbWUgZnJvbSB0aGUgZmFpbHVyZSBwb2ludCksIGFuZCBhIGZhdGFsIGVycm9yIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgZmV3IHBsYWNlcyB3aGVyZSBhIGZhdGFsIGVycm9yIGhhcHBlbnMgYWZ0ZXJcclxuICogYmFja3RyYWNraW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBlcnJvciBtZXNzYWdlIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZVxyXG4gKiAgICAgYW4gYEV4cGVjdGVkYCBlcnJvciBpZiBubyBpbnB1dCB3YXMgY29uc3VtZWQsIG9yIGEgYENvbXBvdW5kYFxyXG4gKiAgICAgZXJyb3IgaWYgaXQgd2FzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBjaGFuZ2VzIHRoZSBlcnJvclxyXG4gKiAgICAgYXMgYXBwcm9wcmlhdGUgaWYgYHBgIGZhaWxzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJhY2tMYWJlbCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gT2spIHtcclxuICAgIHJldHVybiBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICA/IHBhc3MobmV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKSA6IHJlcGx5XHJcbiAgfSBlbHNlIGlmIChpbmRleCA9PT0gbmV4dC5pbmRleCkge1xyXG4gICAgaWYgKHJlc3VsdC5lcnJvcnMubGVuZ3RoID09PSAxICYmIHJlc3VsdC5lcnJvcnNbMF0udHlwZSA9PT0gTmVzdGVkKSB7XHJcbiAgICAgIGNvbnN0IHsgc3RhdGUsIGVycm9ycyB9ID0gcmVzdWx0LmVycm9yc1swXVxyXG4gICAgICByZXR1cm4gcGFzcyhuZXh0LCByZXN1bHQsIGNvbXBvdW5kKG1zZywgc3RhdGUsIGVycm9ycykpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGFzcyhuZXh0LCByZXN1bHQsIGV4cGVjdGVkKG1zZykpXHJcbiAgfVxyXG4gIHJldHVybiBmYXRhbChzdGF0ZSwgY29tcG91bmQobXNnLCBuZXh0LCByZXN1bHQuZXJyb3JzKSlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMsIG1heWJlRmF0YWwgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCwgcmFuZ2UgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xyXG5cclxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xyXG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXHJcbiAgICArICduZWl0aGVyIGNvbnRlbnQgbm9yIHNlcGFyYXRvciBwYXJzZXIgY29uc3VtZWQgaW5wdXQnXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xyXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXHJcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XHJcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogVGhlIHJldHVybmVkIHBhcnNlciBtYXkgZmFpbCBmYXRhbGx5IGV2ZW4gaWYgdGhlIHVuc3VjY2Vzc2Z1bFxyXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xyXG4gKiBwYXJzZXIgc3VjY2VlZGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gRXNzZW50aWFsbHksIGlmIHRoZSByZXR1cm5lZFxyXG4gKiBwYXJzZXIgY29uc3VtZXMgYW55dGhpbmcgYW5kIHRoZW4gZmFpbHMsIGl0IHdpbGwgZmFpbCBmYXRhbGx5LlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVuY2UgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IHZhbHVlcyA9IFtdXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XHJcbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gcChuZXh0KVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcclxuICogZ2VuZXJhdG9yIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWRcclxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxyXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLFxyXG4gKiBgYmxvY2tgIHdpbGwgYWxzbyBmYWlsIHdpdGggdGhhdCBmYWlsdXJlLiBUaGlzIGZhaWx1cmUgd2lsbCBiZSBmYXRhbFxyXG4gKiBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkLlxyXG4gKlxyXG4gKiBJZiBhbGwgcGFyc2VycyBpbiB0aGUgYmxvY2sgc3VjY2VlZCwgYGJsb2NrYCB3aWxsIHN1Y2NlZWQgd2l0aCB0aGVcclxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxyXG4gKlxyXG4gKiBPbmx5IHBhcnNlcnMgbWF5IGJlIHlpZWxkZWQgaW4gYSBibG9jay4gWWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsXHJcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGdlbkZuIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm9cclxuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcclxuICogICAgIHBhcnNlcidzIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seVxyXG4gKiAgICAgYFBhcnNlcmBzOyB5aWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGwgY2F1c2UgaW5jb3JyZWN0IGJlaGF2aW9yXHJcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcclxuICogICAgIGFwcGxpZXMgcGFyc2VycyBhcyB0aGV5IGFyZSB5aWVsZGVkLCBhbmQgcmVzdWx0cyAoaWYgYWxsIHBhcnNlcnNcclxuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBibG9jayA9IGdlbkZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgbGV0IG5leHRWYWx1ZVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcclxuICAgIGlmIChkb25lKSByZXR1cm4gb2sobmV4dCwgdmFsdWUpXHJcblxyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHZhbHVlKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgfVxyXG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXHJcbiAgfVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcclxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZlxyXG4gKiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSwgaXRcclxuICogc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxyXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcclxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxyXG4gKiBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLCB0aGVcclxuICogcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuXHJcbiAqIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxyXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFt0dXBsZSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gdHVwbGVcclxuXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHlcclxuICogZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsXHJcbiAqIGl0IHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxyXG4gKiBkaXNjYXJkaW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzLiBUaGUgY29udGFpbmVkIHBhcnNlciBtdXN0XHJcbiAqIHN1Y2NlZWQgYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSxcclxuICogdGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXRcclxuICogd2hlbiBpdCBmYWlscy5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNraXBNYW55MSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcclxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4uIFRoZVxyXG4gKiBjb250ZW50IHBhcnNlciBjYW4gbWF0Y2ggemVybyB0aW1lcywgc28gdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlclxyXG4gKiB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG8gZmFpbCBmYXRhbGx5LlxyXG4gKlxyXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxyXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXHJcbiAqIGFyZSBkaXNjYXJkZWQuXHJcbiAqXHJcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcclxuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXHJcbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxyXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcclxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxyXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNlcEJ5ID0gKHAsIHNlcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgbGV0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCBbXSlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5JykpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXHJcbiAqIGNvbnRlbnQgcGFyc2VyIG11c3Qgc3VjY2VlZCBhdCBsZWVhc3Qgb25jZSBvciBhIG5vbi1mYXRhbCBmYWlsdXJlXHJcbiAqIHdpbGwgb2NjdXIuIE90aGVyd2lzZSwgdGhlIHBhcnNlciBjYW4gb25seSBmYWlsIGlmIG9uZSBvZiBpdHMgcGFyc2Vyc1xyXG4gKiBmYWlscyBmYXRhbGx5LlxyXG4gKlxyXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxyXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXHJcbiAqIGFyZSBkaXNjYXJkZWQuXHJcbiAqXHJcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcclxuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXHJcbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxyXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcclxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxyXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNlcEJ5MSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwQnkxJykpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcclxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvXHJcbiAqIHRoZSBvbmx5IHdheSBmb3IgdGhpcyBwYXJzZXIgdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvXHJcbiAqIGZhaWwgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBFbmRCeSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlcE5leHQsIF9dID0gc2VwKHsgLi4ubmV4dCwgaW5kZXggfSlcclxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXHJcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuIGFuZFxyXG4gKiBvcHRpb25hbGx5IGF0IHRoZSBlbmQuIFRoZSBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2VcclxuICogb3IgYSBub24tZmF0YWwgZmFpbHVyZSB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHlcclxuICogZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBsZXQgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gICAgY29uc3QgW3JlcGx5MSwgW25leHRTdGF0ZTEsIHJlc3VsdDFdXSA9IGR1cChzZXAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dFN0YXRlMiwgcmVzdWx0Ml1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlMlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBpZiAobmV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5MScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlcE5leHQsIF9dID0gc2VwKHsgLi4ubmV4dCwgaW5kZXggfSlcclxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxyXG4gKiBjb2xsZWN0aW5nIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS4gSWYgYW55IGFwcGxpY2F0aW9uXHJcbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcclxuICogZHVyaW5nIHRoYXQgZmFpbHVyZSwgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cclxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjb3VudCA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lc1xyXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XHJcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xyXG4gKiBhcHBsaWVkICpmaXJzdCosIHNvIGl0J3MgZmluZSB0byBoYXZlIHRoZSB0d28gcGFyc2VycyBvdmVybGFwLiBGb3JcclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcclxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXHJcbiAqIGFueSwgbGV0dGVyKWAsIHdoaWNoIHdpbGwgbmV2ZXIgc3VjY2VlZCBiZWN1YXNlIHRoZSBgYW55YCBpcyBhcHBsaWVkXHJcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXHJcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxyXG4gKlxyXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsIHRoZSBvdmVyYWxsXHJcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcclxuICogZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsIGVycm9yIGZvciB0aGVcclxuICogb3ZlcmFsbCBwYXJzZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXHJcbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXHJcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtYW55VGlsbCA9IChwLCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBPaykgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHQyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKFxyXG4gICAgICAgIG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpLFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxyXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xyXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cclxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXHJcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhc3NvY2wgPSAocCwgb3AsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIHgpXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgY29uc3Qgb3BzID0gW11cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gIH1cclxuXHJcbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XHJcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcclxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXHJcbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cclxuICpcclxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXHJcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxyXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXHJcbiAqXHJcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXHJcbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXHJcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcclxuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxyXG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NsMSA9IChwLCBvcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxyXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xyXG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxyXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcclxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXHJcbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cclxuICpcclxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXHJcbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXHJcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxyXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXHJcbiAqXHJcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXHJcbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXHJcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXHJcbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXHJcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcclxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXHJcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhc3NvY3IgPSAocCwgb3AsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0U3RhdGUsIHgpXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgY29uc3Qgb3BzID0gW11cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG4gIGxldCBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseW9wLCBbbmV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHlwLCBbbmV4dHAsIHJlc3VsdHBdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXHJcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG4gIH1cclxuXHJcbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxyXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XHJcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxyXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcclxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXHJcbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cclxuICpcclxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xyXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXHJcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxyXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXHJcbiAqXHJcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXHJcbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXHJcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcclxuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxyXG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcclxuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFzc29jcjEgPSAocCwgb3ApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBjb25zdCBvcHMgPSBbXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dG9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dHBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBmb3JtYXRFcnJvcnMgfSBmcm9tICcuL2Vycm9yJ1xyXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHRyYWNrIH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xyXG4gKiBvZiB0eXBlZCBhcnJheXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxyXG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxyXG59XHJcblxyXG4vKipcclxuICogQSBzeW1ib2wgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXHJcbiAqIEBlbnVtIHtzeW1ib2x9XHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cclxuICBPazogU3ltYm9sKCdvaycpLFxyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXHJcbiAgRXJyb3I6IFN5bWJvbCgnZXJyb3InKSxcclxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cclxuICBGYXRhbDogU3ltYm9sKCdmYXRhbCcpLFxyXG59XHJcblxyXG4vKipcclxuICogVGhlIGN1cnJlbnQgc3RhdGUgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0XHJcbiAqIGFuZCBhIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBTdGF0ZVxyXG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcclxuICogICAgIG5leHQgcGFyc2luZyBvcGVyYXRpb24gd2lsbCB0YWtlIHBsYWNlIChvciB3aGVyZSB0aGUgbGFzdCBvbmVcclxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cclxuICovXHJcblxyXG4vKipcclxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcclxuICogZXNzZW50aWFsbHkgYSB1bmlvbiBvZiBzdWNjZXNzZnVsIHZhbHVlIGFuZCBmYWlsdXJlIGVycm9yLCB3aXRoIHRoZVxyXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlc3VsdFxyXG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXHJcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cclxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgYSBzdWNjZXNzZnVsIHBhcnNlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxyXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cclxuICovXHJcblxyXG4vKipcclxuICogQHR5cGVkZWYgeyhcclxuICogICBVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcclxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheVxyXG4gKiApfSBUeXBlZEFycmF5XHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBzdGF0ZS4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhIG5ld1xyXG4gKiBzdGF0ZSBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLiBBbnlcclxuICogZnVydGhlciBzdGF0ZXMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgaW5pdGlhbCBzdGF0ZSB1c2luZyB7QGxpbmsgb2t9LFxyXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxyXG4gKlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMge1N0YXRlfSBBbiBlbXB0eSBwYXJzZXIgc3RhdGUgb2JqZWN0LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTdGF0ZShpbnB1dCkge1xyXG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcclxuICAgICsgYGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXc7IHBhcnNlciBpbnB1dCB3YXMgJHt0eXBlb2YgaW5wdXR9YFxyXG5cclxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcclxuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaXNUeXBlZEFycmF5KGlucHV0KSkge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcclxuICAgIH1cclxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXHJcbiAgICB9XHJcbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRhVmlldykge1xyXG4gICAgICByZXR1cm4gaW5wdXRcclxuICAgIH1cclxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxyXG4gIH0pKGlucHV0KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgdmlldyxcclxuICAgIGluZGV4OiAwLFxyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXHJcbiAqIHN0YXRlLCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXHJcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgc3RhdGUuXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBQYXJzZXJcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIGJlZm9yZSB0aGUgcGFyc2VyIGlzIHJ1bi5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIHVwZGF0ZWQgc3RhdGUgYWZ0ZXIgdGhlIHBhcnNlciBpc1xyXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxyXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXHJcbiAqIHRvIHRyYWNrIHBhcnNlcnMgdGhhdCBpdCBoYXMgY3JlYXRlZC5cclxuICpcclxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcclxuICogd2lsbCBhc3NlcnQgdGhhdCB0aGUgcGFyc2VyIHRoYXQgaXMgcGFzc2VkIHRvIGl0IHdhcyBjcmVhdGVkIGJ5IHRoaXNcclxuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcclxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcclxuICogcmV0dXJuIHZhbHVlLiBJZiBhc3NlcnRpb25zIGFyZSBub3QgZW5hYmxlZCwgdGhpcyBjaGVjayB3aWxsIG5vdCBiZVxyXG4gKiBkb25lLlxyXG4gKlxyXG4gKiBFdmVyeSBwYXJzZXIgaW4gdGhpcyBsaWJyYXJ5IGlzIGNyZWF0ZWQgd2l0aCBgbWFrZVBhcnNlcmAsIHNvIGFueSBvZlxyXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cclxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG1ha2VQYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcclxuICogYSBgU3RhdGVgIHBvdGVudGlhbGx5IHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG9rKHN0YXRlLCB2YWx1ZSA9IG51bGwsIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxyXG4gKiBjb25zdW1pbmcgaW5wdXQsIGFzIHdlbGwgYXMgYSBjb3B5IG9mIGBTdGF0ZWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcclxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBlcnJvcihzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlXHJcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIG5ldyBgU3RhdGVgIHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWRcclxuICogICAgIHdpdGggdGhlIHN0YXRlIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PXN0YXRlLmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGVcclxuICogICAgIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIHN0YXRlIGFuZFxyXG4gKiAgICAgcmVzdWx0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmYXRhbChzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW3sgLi4uc3RhdGUsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxyXG59XHJcblxyXG4vKipcclxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2VyIGFwcGxpY2F0b2luIGZhaWxlZC5cclxuICogV2hldGhlciB0aGlzIGlzIGEgZmF0YWwgZXJyb3Igb3Igbm90IGRlcGVuZHMgb24gd2hldGhlciBgdGVzdGAgaXNcclxuICogYHRydWVgIChmYXRhbCkgb3IgYGZhbHNlYCAobm9uLWZhdGFsKS5cclxuICpcclxuICogQHBhcmFtIHtib29sZWFufSB0ZXN0IFVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHByb2R1Y2VkIHJlc3VsdFxyXG4gKiAgICAgcmVwcmVzZW50cyBhIGZhdGFsIGVycm9yIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxyXG4gKiAgICAgd2l0aCB0aGUgc3RhdGUgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxyXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1heWJlRmF0YWwodGVzdCwgc3RhdGUsIGVycm9ycyA9IFtdLCBpbmRleCA9IHN0YXRlLmluZGV4KSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHsgLi4uc3RhdGUsIGluZGV4IH0sXHJcbiAgICB7IHN0YXR1czogdGVzdCA/IFN0YXR1cy5GYXRhbCA6IFN0YXR1cy5FcnJvciwgZXJyb3JzIH0sXHJcbiAgXVxyXG59XHJcblxyXG4vKipcclxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gVGhpcyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksXHJcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxyXG4gKiBzdGF0ZSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXHJcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXHJcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cclxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcclxuICogICAgIHRleHQuXHJcbiAqIEByZXR1cm5zIHtbU3RhdGUsIFJlc3VsdF19IFRoZSBmaW5hbCBzdGF0ZSBhZnRlciBhbGwgcGFyc2VycyBoYXZlXHJcbiAqICAgICBiZWVuIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZpbmFsIHBhcnNlciBhcHBsaWNhdGlvbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XHJcbiAgcmV0dXJuIHBhcnNlcihtYWtlU3RhdGUoaW5wdXQpKVxyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cclxuICpcclxuICogQHBhcmFtIHtbU3RhdGUsIFJlc3VsdF19IHJlcGx5IFRoZSBzdGF0ZS9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnlcclxuICogICAgIGBwYXJzZWAuXHJcbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxyXG4gKiAgICAgZGlkIG5vdC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcclxuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzID09PSBTdGF0dXMuT2tcclxufVxyXG5cclxuLyoqXHJcbiAqIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC4gSWYgdGhlIHBhcnNlclxyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgbnVsbGAgaXMgYSBwb3NzaWJsZSByZXN1bHQgZnJvbSBzb21lIGluZGl2aWR1YWwgcGFyc2Vyc1xyXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcclxuICogc3VjY2VlZGVkIGluIHRoZSBmaXJzdCBwbGFjZSBpcyB0byB1c2UgYHN1Y2NlZWRlZGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7W1N0YXRlLCBSZXN1bHRdfSByZXBseSBUaGUgc3RhdGUvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5XHJcbiAqICAgICBgcGFyc2VgLlxyXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcclxuICogICAgIG9yIGBudWxsYCBpZiBpdCB3YXMgbm90LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc3VsdChyZXBseSkge1xyXG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiBhbiB1bnN1Y2Nlc3NmdWwgaW52b2NhdGlvbiBvZiBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyIHdhcyBhY3R1YWxseVxyXG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiAgICAgYHBhcnNlYC5cclxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxyXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcclxuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMoLi4ucmVwbHkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBSZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWUgaWYgdGhlIHBhcnNlclxyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXHJcbiAqIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcclxuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcclxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxyXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgcmVzdWx0XSA9IHBhcnNlcihtYWtlU3RhdGUoaW5wdXQpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcclxuICAgIHJldHVybiByZXN1bHQudmFsdWVcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhzdGF0ZSwgcmVzdWx0KSlcclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBjaGFyTGVuZ3RoLFxyXG4gIGNvbW1hU2VwYXJhdGUsXHJcbiAgbmV4dENoYXJXaWR0aCxcclxuICB2aWV3VG9TdHJpbmcsXHJcbn0gZnJvbSAnLi91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlN0YXRlfSBTdGF0ZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cclxuXHJcbmNvbnN0IHRhYiA9IC9cXHQvZ3VcclxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcclxuXHJcbi8qKlxyXG4gKiBBIHN5bWJvbCBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cclxuICogQGVudW0ge3N5bWJvbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxyXG4gICAqIG1ham9yaXR5IG9mIHBhcnNlcnMuXHJcbiAgICovXHJcbiAgRXhwZWN0ZWQ6IFN5bWJvbCgnZXhwZWN0ZWQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxyXG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cclxuICAgKi9cclxuICBVbmV4cGVjdGVkOiBTeW1ib2woJ3VuZXhwZWN0ZWQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVHlwaWNhbGx5IHByb2R1Y2VkXHJcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cclxuICAgKi9cclxuICBHZW5lcmljOiBTeW1ib2woJ2dlbmVyaWMnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xyXG4gICAqIGdlbmVyYWxseSB1c2VkIGZvciBhbiBlcnJvciB0aGF0IGNhdXNlZCBiYWNrdHJhY2tpbmcsIHdoZXJlIHRoZVxyXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXHJcbiAgICovXHJcbiAgTmVzdGVkOiBTeW1ib2woJ25lc3RlZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxyXG4gICAqIG1lc3NhZ2UuIFRoaXMgaXMgcHJvZHVjZWQgc3BlY2lmaWNhbGx5IGJ5IHRoZSBgY29tcG91bmRgIHBhcnNlci5cclxuICAgKi9cclxuICBDb21wb3VuZDogU3ltYm9sKCdjb21wb3VuZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXHJcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cclxuICAgKi9cclxuICBPdGhlcjogU3ltYm9sKCdvdGhlcicpLFxyXG59XHJcblxyXG4vKipcclxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxyXG4gKiB0byBhIHBhcnRpY3VsYXIgaW5kZXggb3IgbmVzdGVkL2NvbXBvdW5kIGVycm9ycyB0aGF0IHBvaW50IGJhY2sgdG9cclxuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cclxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgYXQgdGhlIGxvY2F0aW9uIHJlZmVycmVkIHRvIGJ5IHRoZSBjdXJyZW50XHJcbiAqIHN0YXRlLiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXHJcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXHJcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IHN0YXRlLiBUaGUgbW9zdCB0eXBpY2FsIHJlYXNvbiBmb3IgdGhpcyBoYXBwZW5pbmdcclxuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XHJcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cclxuICogZnJvbSB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGJhY2t0cmFja2luZyBpbiB0aGUgZmlyc3QgcGxhY2UuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXHJcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXHJcbiAqIEBwcm9wZXJ0eSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb20gdGhlXHJcbiAqICAgICBjdXJyZW50IHN0YXRlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcclxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgc3RhdGVgLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBIG5lc3RlZCBlcnJvciB0aGF0IGhhcyBpdHMgb3duIGxhYmVsLiBUaGlzIGlzIHNpbXBseSBmb3IgcHJvZHVjaW5nXHJcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxyXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcclxuICogICAgIGBFcnJvclR5cGUuQ29tcG91bmRgLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcclxuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXHJcbiAqICAgICB1bmRlciB0aGlzIGNvbXBvdW5kIGVycm9yLlxyXG4gKiBAcHJvcGVydHkge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWwgZXJyb3JcclxuICogICAgIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tIHRoZVxyXG4gKiAgICAgY3VycmVudCBzdGF0ZS5cclxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYHN0YXRlYC5cclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxyXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxyXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXHJcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xyXG4gKiAgICAgbm90IGV4cGVjdGVkLlxyXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xyXG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcclxuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcclxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cclxuICogQHJldHVybnMge0Vycm9yTWVzc2FnZX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcclxuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcclxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxyXG4gKiBzdGF0ZSBpbmZvcm1hdGlvbi4gSWYgdGhlIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWRcclxuICogZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3Igd2lsbCBub3RcclxuICogYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBuZXN0ZWQgZXJyb3JcclxuICogICAgIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxyXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gc3RhdGUuXHJcbiAqIEByZXR1cm5zIHtOZXN0ZWRFcnJvcn0gQSBuZXcgbmVzdGVkIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChzdGF0ZSwgZXJyb3JzKSB7XHJcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5OZXN0ZWQsIHN0YXRlLCBlcnJvcnMgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcclxuICogbmVzdGVkIGVycm9yIGRvZXMsIGV4Y2VwdCBpdCBhbHNvIGF0dGFjaGVzIGEgbWVzc2FnZSB0byBpdC4gSWYgdGhlXHJcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xyXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBzdGF0ZS5cclxuICogQHJldHVybnMge0NvbXBvdW5kRXJyb3J9IEEgbmV3IGNvbXBvdW5kIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBzdGF0ZSwgZXJyb3JzKSB7XHJcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcclxuICAgID8gW3tcclxuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxyXG4gICAgICBzdGF0ZTogZXJyb3JzLnN0YXRlLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgfV1cclxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBzdGF0ZSwgZXJyb3JzLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMSBUaGUgZmlyc3QgYXJyYXkgb2YgZXJyb3JzLlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMiBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cclxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgdHdvIGFycmF5cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxLCBlcnJvcnMyKSB7XHJcbiAgcmV0dXJuIFsuLi5lcnJvcnMxLCAuLi5lcnJvcnMyXVxyXG59XHJcblxyXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcclxuXHJcbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXHJcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cclxuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXHJcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cclxuICovXHJcblxyXG4vKipcclxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXHJcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XHJcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcclxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxyXG4gKiAgICAgY2hhcmFjdGVyLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxyXG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxyXG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcclxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxyXG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxyXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXHJcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcclxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxyXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcclxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxyXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxyXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxyXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xyXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXHJcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cclxuICovXHJcblxyXG4vKipcclxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxyXG4gICpcclxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxyXG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cclxuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxyXG4gICogICAgIHRhYiBzaXplLlxyXG4gICovXHJcblxyXG4vKipcclxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXHJcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcclxuICogZGVzaXJlZC5cclxuICpcclxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcclxuICogICAgIGVycm9yIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXHJcbiAqICAgICBzdG9wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxyXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXHJcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcclxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xyXG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxyXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcclxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxyXG4gKlxyXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXHJcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cclxuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xyXG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxyXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xyXG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XHJcbiAgfVxyXG5cclxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xyXG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xyXG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxyXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xyXG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cclxuICB9XHJcblxyXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcclxuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXHJcblxyXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxyXG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xyXG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcclxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcclxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcclxuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cclxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XHJcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXHJcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXHJcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXHJcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXHJcbiAqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXHJcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxyXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXHJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXHJcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcclxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcclxuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcclxuICBsZXQgc3RhcnQgPSAwXHJcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxyXG4gIGxldCBpID0gMFxyXG5cclxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcclxuICAgIGlmIChuZXdsaW5lKSB7XHJcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XHJcbiAgICAgIH1cclxuICAgICAgbGluZW5vKytcclxuICAgICAgc3RhcnQgPSBpICsgc2tpcFxyXG4gICAgfVxyXG4gICAgaSArPSBza2lwXHJcbiAgfVxyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcclxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cclxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxyXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxyXG4gKlxyXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXHJcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cclxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXHJcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cclxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcclxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XHJcbiAgbGV0IGNoYXJJbmRleCA9IDBcclxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcclxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXHJcbiAgICBjaGFySW5kZXgrK1xyXG4gIH1cclxuICByZXR1cm4gY2hhckluZGV4XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcclxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXHJcbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcclxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxyXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcclxuICogY2hhcmFjdGVyIGluZGV4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcclxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXHJcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxyXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcclxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxyXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xyXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XHJcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXHJcbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcclxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcclxuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcclxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcclxuICB9XHJcblxyXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxyXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XHJcbiAgbGV0IG9mZnNldCA9IDBcclxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXHJcbiAgbGV0IHJlc3VsdCA9IGxpbmVcclxuXHJcbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XHJcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XHJcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxyXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcclxuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcclxuICAgIH1cclxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxyXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXHJcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXHJcbiAgfVxyXG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXHJcbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXHJcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxyXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXHJcbiAqIG1hcmtzLlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxyXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcclxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcclxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcclxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cclxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XHJcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcclxuICBjb25zdCBtYXRjaGVzID0gW11cclxuXHJcbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcclxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcclxuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcclxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXHJcbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXHJcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcclxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cclxuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXHJcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cclxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcclxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcclxuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXHJcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xyXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcclxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcclxuICogICAgIGNvbHVtbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XHJcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcclxuXHJcbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXHJcbiAgLy8gd2l0aCB0aGUgY2FyZXQgcG9zaXRpb25lZCBiZWxvdyBpdC5cclxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XHJcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcclxuICB9XHJcblxyXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XHJcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxyXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cclxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXHJcbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xyXG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XHJcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxyXG4gICAgfV5gXHJcbiAgfVxyXG5cclxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XHJcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxyXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcclxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcclxuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXHJcbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcclxuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXHJcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxyXG4gIH1cclxuXHJcbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcclxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XHJcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcclxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXHJcbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxyXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXHJcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xyXG4gIHJldHVybiBgJHtzcH0uLi4ke1xyXG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcclxuICB9Li4uXFxuJHtzcH0ke1xyXG4gICAgJyAnLnJlcGVhdChNYXRoLmNlaWwobWF4V2lkdGggLyAyKSlcclxuICB9XmBcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxyXG4gKiAgICAgc3RvcHMgbGF5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXHJcbiAqICAgICBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0TmVzdGVkKG5lc3RlZHMsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpIHtcclxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxyXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IG4uc3RhdGVcclxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxyXG4gICAgICA/IGBcXG4ke3NwfSR7bi5sYWJlbH0gY291bGQgbm90IGJlIHBhcnNlZCBiZWNhdXNlOlxcblxcbmBcclxuICAgICAgOiBgXFxuJHtzcH1UaGUgcGFyc2VyIGJhY2t0cmFja2VkIGFmdGVyOlxcblxcbmBcclxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxyXG4gIH0pXHJcbiAgcmV0dXJuIG5lc3RlZE1zZ3Muam9pbignJylcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHN0cmluZyB0aGF0IGlzIHN1cHBvc2VkIHRvIGhhdmUgYSBjZXJ0YWluXHJcbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgbmV3bGluZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgYnV0IHdpdGggYGNvdW50YCBuZXdsaW5lcyBhdCB0aGVcclxuICogICAgIGVuZC5cclxuICovXHJcbmZ1bmN0aW9uIGVuc3VyZU5ld2xpbmVzKHRleHQsIGNvdW50KSB7XHJcbiAgbGV0IHJlc3VsdCA9IHRleHRcclxuICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpXHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQgKyAnXFxuJy5yZXBlYXQoY291bnQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwYXJ0czpcclxuICpcclxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXHJcbiAqICAgIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXHJcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXHJcbiAqICAgIGlucHV0IGxpbmUgb3IsIGlmIHRoYXQncyB0b28gbG9uZywgYSBwb3J0aW9uIG9mIHRoZSBpbnB1dCBsaW5lXHJcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXHJcbiAqICAgIGluIHRoZSBmaXJzdCBsaW5lIHRoYXQgc2hvd3MgZXhhY3RseSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cclxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXHJcbiAqICAgIGNvbW1tYXMgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBudW1iZXIgb2YgbWVzc2FnZXMuXHJcbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxyXG4gKlxyXG4gKiBUaGUgcG9zaXRpb24gb2YgdGhlIGVycm9yIGlzIGluZGljYXRlZCBieSB0aGUgYGluZGV4YCBwYXJhbWV0ZXIsXHJcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcclxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xyXG4gKiBmbGF0IGFycmF5IG9mIGJ5dGVzIHRha2VzIHRoZSBmb2xsb3dpbmcgaW50byBhY2NvdW50OlxyXG4gKlxyXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cclxuICogICBiZSAxLCAyLCAzLCBvciA0IGJ5dGVzIGxvbmcpXHJcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXHJcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcclxuICogICBgdGFiU2l6ZWAgcGFyYW1ldGVyXHJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcclxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcclxuICogICBtYXJrcywgdW1sYXV0cyBvdmVyIExhdGluIGNoYXJhY3RlcnMsIGV0Yy4pXHJcbiAqXHJcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzIG9mIGNvZGUgdXNlcyBgc3RyaW5nVG9WaWV3YCwgYW4gaW50ZXJuYWxcclxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXHJcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcclxuICogdXNhZ2UsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBrbm93LlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgdmlldyA9IHN0cmluZ1RvVmlldygnXFx0T25vbWF0b3BvZWlhXFx0XFx0XFx0XFx04LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHJylcclxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcclxuICogYGBgXHJcbiAqXHJcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcclxuICogcHJvZHVjZWQ6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxyXG4gKlxyXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXHJcbiAqIEV4cGVjdGVkIGEgZGlnaXRcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRvIGJlIGZvcm1hdHRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbiB0aGUgdmlldyB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxyXG4gKiAgICAgc3RvcHMgbGF5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXHJcbiAqICAgICBpbmRlbnRlZC4gVGhpcyBzaG91bGQgYmUgMCBhbmQgaW5jcmVhc2VkIG9ubHkgZm9yIG5lc3RlZCBlcnJvcnMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcclxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcclxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxyXG5cclxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXHJcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcclxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBgJHtzcH1QYXJzZSBlcnJvciBhdCAobGluZSAke2xpbmVub30sIGNvbHVtbiAke2NvbG5vfSk6YFxyXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXHJcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxyXG4gIGNvbnN0IHVuZXhwZWN0ZWQgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuVW5leHBlY3RlZClcclxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXHJcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcclxuICAgICAgLm1hcChlcnJvciA9PiBlcnJvci5sYWJlbCksXHJcbiAgKVxyXG5cclxuICBjb25zdCBuZXN0ZWQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpXHJcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcclxuXHJcbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYCR7c3B9VW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubGFiZWx9XFxuYCA6ICcnXHJcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcclxuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcclxuXHJcbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcclxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcclxuXHJcbiAgcmV0dXJuIGVuc3VyZU5ld2xpbmVzKFxyXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfWBcclxuICAgICAgKyBgJHtjb21wb3VuZE1zZ30ke25lc3RlZE1zZ31gLFxyXG4gICAgMixcclxuICApXHJcbn1cclxuXHJcbi8vICNlbmRyZWdpb25cclxuXHJcbi8qKlxyXG4gKiBBY2NlcHRzIGEgcGFyc2VyIHN0YXRlIGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXHJcbiAqXHJcbiAqIEEgZGVmYXVsdCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQgYnV0IGFuIGFsdGVybmF0ZSBvbmUgY2FuIGJlIHBhc3NlZFxyXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XHJcbiAqIGRlZmF1bHRzIHRvIDgpIGFuZCBtYXggd2lkdGggKGZvciB0aGUgZXJyb3IgbWVzc2FnZSBpdHNlbGY7IGRlZmF1bHRzXHJcbiAqIHRvIDcyKS5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHBhcnNlcidzIHN0YXRlIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxyXG4gKiBAcGFyYW0ge1Jlc3VsdH0gcmVzdWx0IFRoZSByZXN1bHQgcHJvZHVjZWQgd2hlbiB0aGUgZXJyb3IgaGFwcGVuZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXHJcbiAqICAgICB0YWJzIHN0b3AuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4V2lkdGg9NzJdIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXHJcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXHJcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXHJcbiAqIEBwYXJhbSB7Rm9ybWF0dGVyfSBbZm9ybWF0dGVyPWZvcm1hdF0gVGhlIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZVxyXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVycm9ycyhcclxuICBzdGF0ZSwgcmVzdWx0LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgZm9ybWF0dGVyID0gZm9ybWF0LFxyXG4pIHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIHJldHVybiBmb3JtYXR0ZXIocmVzdWx0LmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgc3RhdGUuIFRoZVxyXG4gKiBwb3NpdGlvbiBpcyBhbiBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgdGhhdCBhcmVcclxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIHN0YXRlJ3MgaW5kZXhcclxuICogd2l0aGluIHRoZSBzdGF0ZSdzIGRhdGEgdmlldy5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcclxuICogICAgIGNhbGN1bGF0ZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXHJcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxyXG4gKiAgICAgb24gdGhpcyBwYXJhbWV0ZXIgd2hlbiB0YWIgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cclxuICogQHJldHVybnMge1Bvc2l0aW9ufSBBIHR3by1wcm9wZXJ0eSBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gXHJcbiAqICAgICBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKHN0YXRlLCB0YWJTaXplID0gOCkge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxyXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXHJcblxyXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcclxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxyXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcclxuXHJcbiAgcmV0dXJuIHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbG5vIH1cclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gUEFSU0VSU1xyXG5cclxuZXhwb3J0IHtcclxuICBhbHBoYSxcclxuICBhbnksXHJcbiAgYW55T2YsXHJcbiAgY2hhcixcclxuICBjaGFyaSxcclxuICBkaWdpdCxcclxuICBlb2YsXHJcbiAgaGV4LFxyXG4gIGxldHRlcixcclxuICBsb3dlcixcclxuICBub25lT2YsXHJcbiAgb2N0YWwsXHJcbiAgcmFuZ2UsXHJcbiAgc2F0aXNmeSxcclxuICBzYXRpc2Z5TCxcclxuICB1cHBlcixcclxufSBmcm9tICcuL3BhcnNlcnMvY2hhcidcclxuZXhwb3J0IHtcclxuICBjb25zdGFudCxcclxuICBmYWlsLFxyXG4gIGZhaWxGYXRhbGx5LFxyXG4gIGZhaWxVbmV4cGVjdGVkLFxyXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xyXG5leHBvcnQge1xyXG4gIGFscGhhVSxcclxuICBsZXR0ZXJVLFxyXG4gIGxvd2VyVSxcclxuICBuZXdsaW5lLFxyXG4gIG5ld2xpbmVVLFxyXG4gIHJlZ2V4LFxyXG4gIHNwYWNlLFxyXG4gIHNwYWNlVSxcclxuICBzcGFjZXMsXHJcbiAgc3BhY2VzMSxcclxuICBzcGFjZXMxVSxcclxuICBzcGFjZXNVLFxyXG4gIHVwcGVyVSxcclxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXHJcbmV4cG9ydCB7XHJcbiAgYWxsLFxyXG4gIGFueVN0cmluZyxcclxuICBzdHJpbmcsXHJcbiAgc3RyaW5naSxcclxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ09NQklOQVRPUlNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYmFja3RyYWNrLFxyXG4gIGJsb2NrQixcclxuICBib3RoQixcclxuICBjaGFpbkIsXHJcbiAgY2hvaWNlLFxyXG4gIGNvdW50QixcclxuICBmYWxsYmFjayxcclxuICBsZWZ0QixcclxuICBtYW55VGlsbEIsXHJcbiAgb3B0aW9uYWwsXHJcbiAgcmlnaHRCLFxyXG4gIHNlcXVlbmNlQixcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xyXG5leHBvcnQge1xyXG4gIGJldHdlZW4sXHJcbiAgYm90aCxcclxuICBjaGFpbixcclxuICBmaWZ0aCxcclxuICBmaXJzdCxcclxuICBmb3VydGgsXHJcbiAgam9pbixcclxuICBsZWZ0LFxyXG4gIG1hcCxcclxuICBudGgsXHJcbiAgcGlwZSxcclxuICByaWdodCxcclxuICBzZWNvbmQsXHJcbiAgc2tpcCxcclxuICB0aGlyZCxcclxuICB2YWx1ZSxcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NoYWluaW5nJ1xyXG5leHBvcnQge1xyXG4gIGZvbGxvd2VkQnksXHJcbiAgZm9sbG93ZWRCeUwsXHJcbiAgbG9va0FoZWFkLFxyXG4gIG5vdEVtcHR5LFxyXG4gIG5vdEZvbGxvd2VkQnksXHJcbiAgbm90Rm9sbG93ZWRCeUwsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jb25kaXRpb25hbCdcclxuZXhwb3J0IHtcclxuICBiYWNrTGFiZWwsXHJcbiAgbGFiZWwsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9tZXNzYWdlJ1xyXG5leHBvcnQge1xyXG4gIGFzc29jbCxcclxuICBhc3NvY2wxLFxyXG4gIGFzc29jcixcclxuICBhc3NvY3IxLFxyXG4gIGJsb2NrLFxyXG4gIGNvdW50LFxyXG4gIG1hbnksXHJcbiAgbWFueTEsXHJcbiAgbWFueVRpbGwsXHJcbiAgc2VwQnksXHJcbiAgc2VwQnkxLFxyXG4gIHNlcEVuZEJ5LFxyXG4gIHNlcEVuZEJ5MSxcclxuICBzZXF1ZW5jZSxcclxuICBza2lwTWFueSxcclxuICBza2lwTWFueTEsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXHJcblxyXG5leHBvcnQge1xyXG4gIFN0YXR1cyxcclxuICBlcnJvcixcclxuICBmYWlsdXJlLFxyXG4gIGZhdGFsLFxyXG4gIG1ha2VQYXJzZXIsXHJcbiAgbWF5YmVGYXRhbCxcclxuICBvayxcclxuICBwYXJzZSxcclxuICByZXN1bHQsXHJcbiAgcnVuLFxyXG4gIHN1Y2NlZWRlZCxcclxufSBmcm9tICcuL2NvcmUnXHJcbmV4cG9ydCB7XHJcbiAgRXJyb3JUeXBlLFxyXG4gIGNvbXBvdW5kLFxyXG4gIGV4cGVjdGVkLFxyXG4gIGZvcm1hdEVycm9ycyxcclxuICBnZW5lcmljLFxyXG4gIGdldFBvc2l0aW9uLFxyXG4gIG1lcmdlLFxyXG4gIG5lc3RlZCxcclxuICBvdGhlcixcclxuICB1bmV4cGVjdGVkLFxyXG59IGZyb20gJy4vZXJyb3InXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJy4vZXJyb3InXHJcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XHJcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcclxuICBhbHBoYVU6ICdhIFVuaWNvZGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXHJcbiAgYW55OiAnYW55IGNoYXJhY3RlcicsXHJcbiAgYW55T2Y6IGFycmF5ID0+ICdhbnkgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcclxuICBhbnlTdHJpbmc6IG4gPT4gYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2AsXHJcbiAgY2hhcjogYyA9PiBxdW90ZShjKSxcclxuICBjaGFyaTogYyA9PiBxdW90ZShjKSxcclxuICBkaWdpdDogJ2EgZGlnaXQnLFxyXG4gIGVvZjogJ2VuZCBvZiBpbnB1dCcsXHJcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXHJcbiAgbGV0dGVyOiAnYSBsZXR0ZXInLFxyXG4gIGxldHRlclU6ICdhIFVuaWNvZGUgbGV0dGVyJyxcclxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXHJcbiAgbG93ZXJVOiAnYSBVbmljb2RlIGxvd2VyY2FzZSBsZXR0ZXInLFxyXG4gIG5ld2xpbmU6ICdhIG5ld2xpbmUnLFxyXG4gIG5ld2xpbmVVOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxyXG4gIG5vbmVPZjogYXJyYXkgPT4gJ25vbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcclxuICBvY3RhbDogJ2FuIG9jdGFsIGRpZ2l0JyxcclxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcclxuICByZWdleDogcmUgPT4gYGEgc3RyaW5nIG1hdGNoaW5nICR7cmV9YCxcclxuICBzcGFjZTogJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxyXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxyXG4gIHNwYWNlczE6ICdvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxyXG4gIHNwYWNlc1U6ICd6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxyXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxyXG4gIHNwYWNlVTogJ2EgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXHJcbiAgc3RyaW5nOiBzdHIgPT4gcXVvdGUoc3RyKSxcclxuICBzdHJpbmdpOiBzdHIgPT4gcXVvdGUoc3RyKSxcclxuICB1cHBlcjogJ2FuIHVwcGVyY2FzZSBsZXR0ZXInLFxyXG4gIHVwcGVyVTogJ2EgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVjdGVkcyA9IHtcclxuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXHJcbiAgYWxwaGFVOiBleHBlY3RlZChzdHJpbmdzLmFscGhhVSksXHJcbiAgYW55OiBleHBlY3RlZChzdHJpbmdzLmFueSksXHJcbiAgYW55T2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55T2YoYXJyYXkpKSxcclxuICBhbnlTdHJpbmc6IG4gPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlTdHJpbmcobikpLFxyXG4gIGNoYXI6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyKGMpKSxcclxuICBjaGFyaTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJpKGMpKSxcclxuICBkaWdpdDogZXhwZWN0ZWQoc3RyaW5ncy5kaWdpdCksXHJcbiAgZW9mOiBleHBlY3RlZChzdHJpbmdzLmVvZiksXHJcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXHJcbiAgbGV0dGVyOiBleHBlY3RlZChzdHJpbmdzLmxldHRlciksXHJcbiAgbGV0dGVyVTogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXJVKSxcclxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXHJcbiAgbG93ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyVSksXHJcbiAgbmV3bGluZTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lKSxcclxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXHJcbiAgbm9uZU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLm5vbmVPZihhcnJheSkpLFxyXG4gIG9jdGFsOiBleHBlY3RlZChzdHJpbmdzLm9jdGFsKSxcclxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxyXG4gIHJlZ2V4OiByZSA9PiBleHBlY3RlZChzdHJpbmdzLnJlZ2V4KHJlKSksXHJcbiAgc3BhY2U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2UpLFxyXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxyXG4gIHNwYWNlczE6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMSksXHJcbiAgc3BhY2VzVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXNVKSxcclxuICBzcGFjZXMxVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxVSksXHJcbiAgc3BhY2VVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlVSksXHJcbiAgc3RyaW5nOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmcoc3RyKSksXHJcbiAgc3RyaW5naTogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5naShzdHIpKSxcclxuICB1cHBlcjogZXhwZWN0ZWQoc3RyaW5ncy51cHBlciksXHJcbiAgdXBwZXJVOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyVSksXHJcbn1cclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7XHJcbiAgYXNzZXJ0Q2hhcixcclxuICBhc3NlcnRGdW5jdGlvbixcclxuICBhc3NlcnRTdHJpbmcsXHJcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcclxuICBvcmRpbmFsQ2hhcixcclxuICBvcmRpbmFsRnVuY3Rpb24sXHJcbiAgb3JkaW5hbFN0cmluZyxcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xyXG5pbXBvcnQgeyBkdXAsIG5leHRDaGFyIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGZlZWRzIGl0IHRvIGEgZnVuY3Rpb24sIGFuZFxyXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxyXG4gKlxyXG4gKiBUaGVyZSBpc24ndCBhbnl0aGluZyBoZXJlIHRoYXQgY291bGRuJ3QgYmUgd3JpdHRlbiB3aXRoXHJcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxyXG4gKiBhcmUgY2VydGFpbiBhc3N1bXB0aW9ucyB0aGF0IGNhbiBiZSBtYWRlIChzdWNoIGFzIHRoZSBudW1iZXIgb2ZcclxuICogY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgcmVhZCBmcm9tIHRoZSBpbnB1dCB2aWV3KSB0aGF0IGFsbG93IGl0IHRvXHJcbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcclxuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxyXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxyXG4gKi9cclxuY29uc3QgQ2hhclBhcnNlciA9IGZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGVycm9yKHN0YXRlKVxyXG5cclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICByZXR1cm4gZm4obmV4dCkgPyBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aCkgOiBlcnJvcihzdGF0ZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXHJcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVXBvbiBmYWlsdXJlLCB0aGlzIHBhcnNlciBkb2VzIG5vdFxyXG4gKiBjb25zdW1lIGlucHV0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxyXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxyXG4gKiAgICAgYWx3YXlzIGZhaWwuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFyID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydENoYXIoJ2NoYXInLCBjKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIobmV4dCA9PiBjID09PSBuZXh0KShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcihjKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXHJcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVGhpcyBkaWZmZXJzIGZyb20gYGNoYXJgIGluIHRoYXRcclxuICogdGhlIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLiBVcG9uIGZhaWx1cmUsXHJcbiAqIHRoaXMgcGFyc2VyIGRvZXMgbm90IGNvbnN1bWUgaW5wdXQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXHJcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXHJcbiAqICAgICBhbHdheXMgZmFpbC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcclxuICogICAgIG90aGVyLWNhc2VkIGNvdW50ZXJwYXJ0KSBpcyB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNoYXJpID0gYyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydENoYXIoJ2NoYXJpJywgYylcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKFxyXG4gICAgcmVhZCA9PiBjLnRvTG93ZXJDYXNlKCkgPT09IHJlYWQudG9Mb3dlckNhc2UoKSxcclxuICApKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5jaGFyaShjKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlXHJcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgYXMgdGhlIHJlc3VsdC4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnNcclxuICogYGZhbHNlYCwgdGhpcyBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZGV0ZXJtaW5lIHRoZSBjYXVzZSBmb3IgYW4gZXJyb3Igc2luY2UgaXQncyBub3RcclxuICogZmVhc2libGUgdG8gaGF2ZSBpdCBhbmFseXplIHRoZSBmdW5jdGlvbiB0byBzZWUgd2hhdCBpdCBleHBlY3RzIHRvXHJcbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxyXG4gKiBgbGFiZWwoc2F0aXNmeShmbiksIG1zZylgIG9yIHRoZSBlcXVpdmFsZW50IGBzYXRpc2Z5TChmbiwgbXNnKWAgdG9cclxuICogYWRkIGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xyXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXHJcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2F0aXNmeSA9IGZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnknLCBmbilcclxuICByZXR1cm4gQ2hhclBhcnNlcihmbikoc3RhdGUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZVxyXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXHJcbiAqIGBmYWxzZWAsIHRoaXMgcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dCBhbmQgc2lnbmFscyBhbiBlcnJvclxyXG4gKiB3aXRoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxyXG4gKlxyXG4gKiBgc2F0aXNmeUwoZm4sIG1lc3NhZ2UpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtZXNzYWdlKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xyXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxyXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdGlzZnlMID0gKGZuLCBtZXNzYWdlKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5TCcsIGZuLCBvcmRpbmFsRnVuY3Rpb24oJzFzdCcpKVxyXG4gICAgYXNzZXJ0U3RyaW5nKCdzYXRpc2Z5TCcsIG1lc3NhZ2UsIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtZXNzYWdlKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXJcclxuICogaXQgaXMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIChpbmNsdXNpdmUpLiBJZlxyXG4gKiBpdCBpcywgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIHRoZSBzdWNjZXNzZnVsIHJlc3VsdCwgYW5kIGlmIGl0IGlzIG5vdCxcclxuICogdGhlIHBhcnNlciBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cclxuICpcclxuICogYHN0YXJ0YCBhbmQgYGVuZGAgYXJlIGV4cGVjdGVkIHRvIGJlIHNpbmdsZSBjaGFyYWN0ZXJzLiBJZiB0aGV5IGFyZVxyXG4gKiBub3QsIHRoZSBmdWxsIHN0cmluZ3MgYXJlIGNvbXBhcmVkIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyLCB3aGljaFxyXG4gKiBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvci5cclxuICpcclxuICogXCJCZXR3ZWVuXCIgaXMgZGVmaW5lZCBhY2NvcmRpbmcgdG8gY29kZSBwb2ludHMuIFRoaXMgaXMgZmluZSBpbiBtb3N0XHJcbiAqIGNhc2VzLCBidXQgaXQgY2FuIGdldCB3ZWlyZCB3aXRoIGhpZ2hlciBjb2RlIHBvaW50cy4gRm9yIGV4YW1wbGUsXHJcbiAqIHRoZXJlIGlzIG5vIGBoYCBpbiB0aGUgc2V0IG9mIG1hdGhlbWF0aWNhbCBsb3dlcmNhc2UgaXRhbGljIHN5bWJvbHMuXHJcbiAqIFRoZSBgaGAgd291bGQgaW5zdGVhZCBiZSB0aGUgUGxhbmNrJ3MgQ29uc3RhbnQgY2hhcmFjdGVyLCB3aGljaCBpcyBpblxyXG4gKiBhIGNvbXBsZXRlbHkgZGlmZmVyZW50IHBhcnQgb2YgdGhlIFVuaWNvZGUgc3BlY3RydW0gYW5kIHRoZXJlZm9yZSBpc1xyXG4gKiBub3QgXCJiZXR3ZWVuXCIgYGFgIGFuZCBgemAuIFRha2UgY2FyZSB3aXRoIG5vbi1hc2NpaSBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZVxyXG4gKiAgICAgcmFuZ2Ugb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGVuZCBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgZW5kIG9mIHRoZSByYW5nZVxyXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIG5leHQgaW5wdXRcclxuICogICAgIGNoYXJhY3RlciBpcyBiZXR3ZWVuIGBzdGFydGAgYW5kIGBlbmRgIChpbmNsdXNpdmUpLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHN0YXJ0LCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0Q2hhcigncmFuZ2UnLCBzdGFydCwgb3JkaW5hbENoYXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0Q2hhcigncmFuZ2UnLCBlbmQsIG9yZGluYWxDaGFyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gc3RhcnQgJiYgYyA8PSBlbmRcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMucmFuZ2Uoc3RhcnQsIGVuZCkpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxyXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5hbnkpXHJcblxyXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxyXG4gIHJldHVybiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcclxuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXHJcbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBlb2YgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcclxuICAgID8gb2soc3RhdGUsIG51bGwpIDogZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5lb2YpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcclxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xyXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcclxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGUgcGFyc2VyXHJcbiAqIHdpbGwgc3VjY2VlZC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxyXG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYVxyXG4gKiAgICAgbWVtYmVyIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXHJcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbnlPZiA9IGNoYXJzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JBcnJheSgnYW55T2YnLCBjaGFycylcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxyXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cclxuXHJcbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxyXG4gICAgPyBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aCkgOiBlcnJvcihzdGF0ZSwgZXhwZWN0ZWRzLmFueU9mKGFycikpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcclxuICogb2YgdGhlIGNoYXJhY3RlcnMgaW4gdGhlIHByb3ZpZGVkIHN0cmluZyBvciBhcnJheSAoaWYgdGhlIGFycmF5IGhhc1xyXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcclxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcclxuICogcGFyc2VyIHdpbGwgc3VjY2VlZC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxyXG4gKiAgICAgb3IgYSBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gbm90IGJlIGFcclxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcclxuICogICAgIG9uZSBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNoYXJzID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY2hhcnMpXHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXHJcblxyXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5ub25lT2YoYXJyKSkgOiBvayhzdGF0ZSwgbmV4dCwgaW5kZXggKyB3aWR0aClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgZGlnaXQuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIFVuaWNvZGUgZGVjaW1hbCBkaWdpdDsgZm9yXHJcbiAqIHRoYXQsIHVzZSBgcmVnZXgoL1xccHtOZH0vKWAuIFRoaXMgcGFyc2VyIHN1Y2NlZWRzIG9ubHkgZm9yIHRoZVxyXG4gKiBsaXRlcmFsIGNoYXJhY3RlcnMgYDAtOWAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZGlnaXQgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuZGlnaXQpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgaGV4ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xyXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnRidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuaGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb2N0YWwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMub2N0YWwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVyczsgYHVsZXR0ZXJgXHJcbiAqIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxldHRlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXIpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSVxyXG4gKiBjaGFyYWN0ZXJzOyBgdWFscGhhYCBpcyBhIFVuaWNvZGUgYWxwaGFudW1lcmljIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbHBoYSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xyXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcclxuICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFscGhhKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcclxuICogYHV1cHBlcmAgaXMgYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXIgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwcGVyID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ0EnICYmIGMgPD0gJ1onXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnVwcGVyKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzO1xyXG4gKiBgdWxvd2VyYCBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb3dlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sb3dlcilcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgbWFrZVBhcnNlciwgb2sgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZ2VuZXJpYywgdW5leHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWRcclxuICogdmFsdWUuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCBiZSB0aGUgbmV3IHBhcnNlcidzIHJlc3VsdC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgd2l0aCBgdmFsdWVgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvbnN0YW50ID0geCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IG9rKHN0YXRlLCB4KSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbCA9IG1lc3NhZ2UgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRTdHJpbmcoJ2ZhaWwnLCBtZXNzYWdlKVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgZ2VuZXJpYyhtZXNzYWdlKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uIFRoaXMgc2lnbmlmaWVzIGFcclxuICogZmF0YWwgZXJyb3IsIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXHJcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhaWxGYXRhbGx5ID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbEZhdGFsbHknLCBtZXNzYWdlKVxyXG4gIHJldHVybiBmYXRhbChzdGF0ZSwgZ2VuZXJpYyhtZXNzYWdlKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXHJcbiAqIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSB1bmV4cGVjdGVkXHJcbiAqICAgICBlcnJvci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXHJcbiAqICAgICBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZhaWxVbmV4cGVjdGVkID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbFVuZXhwZWN0ZWQnLCBtZXNzYWdlKVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgdW5leHBlY3RlZChtZXNzYWdlKSlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydFN0cmluZ09yUmVnRXhwIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xyXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxyXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cclxuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cclxuXHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3VcclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3VcclxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cclxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XHJcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cclxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3VcclxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cclxuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xyXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cclxuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxyXG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xyXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXHJcbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXNcclxuICogaXQgYXMgZmFyIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cclxuICpcclxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xyXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xyXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcclxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXHJcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXHJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xyXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cclxuICovXHJcbmNvbnN0IFJlZ2V4UGFyc2VyID0gcmUgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcclxuXHJcbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxyXG4gIHJldHVybiBtYXRjaFxyXG4gICAgPyBvayhzdGF0ZSwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxyXG4gICAgOiBlcnJvcihzdGF0ZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXJcclxuICogZXhwcmVzc2lvbiB0byB0aGUgaW5wdXQgdGV4dCBhdCB0aGUgY3VycmVudCBsb2NhdGlvbi4gSWYgdGhlcmUgaXMgYVxyXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxyXG4gKiBpcyBjb25zdW1lZCB1cG9uIGZhaWx1cmUuXHJcbiAqXHJcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXHJcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cclxuICpcclxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcclxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcclxuICogbWF0Y2ggd2lsbCBiZSBjb25zaWRlcmVkIGFueXdheS4gVGhlc2UgdHdvIHJ1bGVzIGVuc3VyZSB0aGF0IHRoZVxyXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcclxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXHJcbiAqICAgICBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIG5vIGZsYWdzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXHJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xyXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXHJcblxyXG4gIC8vIEZpcnN0LCBjb252ZXJ0IHRvIGEgcmVndWxhciBleHByZXNzaW9uIGlmIGl0J3MgYSBzdHJpbmdcclxuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxyXG5cclxuICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCBhIF4gYW5jaG9yXHJcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxyXG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcclxuICBpZiAocmVhbmNob3IpIHtcclxuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxyXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXHJcbiAgfVxyXG5cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZWdleCkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcclxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGV0dGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTGV0dGVyKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubGV0dGVyVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFscGhhbnVtZXJpYy4gQSBjaGFyYWN0ZXIgaXMgYWxwaGFudW1lcmljIGlmIGl0IGhhcyBlaXRoZXIgdGhlXHJcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFscGhhVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlQWxwaGEpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYVUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXHJcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxyXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjb25zdCB1cHBlclUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVVwcGVyKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMudXBwZXJVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxyXG4gKiBVbmljb2RlIGBMb3dlcmNhc2VgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTG93ZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sb3dlclUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxyXG4gKiBvciBgXFxyXFxuYCkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZVNwYWNlKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2UpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcclxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cclxuICpcclxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxyXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXNwYWNlKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuc3BhY2VVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxyXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXJcclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcclxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXHJcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVTcGFjZXMpKHN0YXRlKVxyXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxyXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cclxuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXHJcbiAqIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90XHJcbiAqIHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtuZXh0LCBfXSA9IFJlZ2V4UGFyc2VyKHJlVXNwYWNlcykoc3RhdGUpXHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcclxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcclxuICogb25seSBmYWlsIGlmIHRoZXJlIGlzIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT25cclxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzMSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gUmVnZXhQYXJzZXIocmVTcGFjZXMxKShzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsKSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZXMxKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXHJcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsIG9ubHkgZmFpbCBpZiB0aGVyZSBpc1xyXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxyXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVVzcGFjZXMxKShzdGF0ZSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCBudWxsKSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZXMxVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcclxuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXHJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxyXG4gKiBOZXdsaW5lcyB0aGlzIHBhcnNlciByZWNvZ25pemVzIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZ1xyXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcclxuICpcclxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxyXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXHJcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcclxuICpcclxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcclxuICogYFxcclxcbmAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbmV3bGluZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm5ld2xpbmUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXHJcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cclxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XHJcbiAqXHJcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcclxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxyXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXHJcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXHJcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxyXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxyXG4gKlxyXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXHJcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxyXG4gKlxyXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxyXG4gKiBgXFxyXFxuYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5uZXdsaW5lVSlcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGFzc2VydE51bWJlciwgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xyXG5pbXBvcnQgeyBjaGFyTGVuZ3RoLCBkdXAsIG5leHRDaGFycywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGVcclxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgdGV4dC4gQSBzdHJpbmcgb2YgY2hhcmFjdGVycyBlcXVhbCBpbiBsZW5ndGhcclxuICogdG8gYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXHJcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXHJcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxyXG4gKiAgICAgc2hvdWxkIHJlYWQuXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogYm9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgcmVhZFxyXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHJlYWQgc3RyaW5nIHBhc3Nlc1xyXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cclxuICovXHJcbmNvbnN0IFN0cmluZ1BhcnNlciA9IChsZW5ndGgsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBpZiAobGVuZ3RoID09PSAwKSByZXR1cm4gb2soc3RhdGUsICcnKVxyXG5cclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXHJcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXHJcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxyXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcclxuICogcmVjb2duaXplZCBwcm9wZXJseS5cclxuICpcclxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXHJcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xyXG4gKiAgICAgb2YgdGhlIGlucHV0LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXHJcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcclxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcclxuICApKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcclxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXHJcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXHJcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxyXG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxyXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXHJcbiAqXHJcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xyXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcclxuICogICAgIG9mIHRoZSBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xyXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5naScsIHN0cilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIoXHJcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxyXG4gICkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnN0cmluZ2koc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cclxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcclxuICByZXR1cm4gb2soc3RhdGUsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXHJcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcclxuICogbm90IHRoYXQgbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXHJcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFueVN0cmluZyhuKSlcclxufSlcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIgfSBmcm9tICcuL2NvcmUnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuU3RhdGV9IFN0YXRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuXHJcbiAqIGVuZGluZyB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcclxuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcclxuICogICAgIGluIGl0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxyXG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcclxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxyXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XHJcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXHJcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcclxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcclxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXHJcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcclxuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxyXG5cclxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcclxuICBsZXQgY3VycmVudCA9IHNcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZm9yd2FyZCkge1xyXG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXHJcbiAgfVxyXG5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XHJcbiAgICB5aWVsZCBjdXJyZW50XHJcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcclxuICB9XHJcbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXHJcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcclxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcclxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxyXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xyXG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxyXG4gICAgeyBsZW5ndGggfSxcclxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXHJcbiAgKVxyXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cclxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcclxuICogICAgIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcclxuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XHJcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcclxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXHJcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XHJcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXHJcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcclxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcclxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXHJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxyXG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXHJcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxyXG4gIHJldHVybiAxXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cclxuICpcclxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXHJcbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXHJcbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcclxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xyXG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cclxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXHJcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxyXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXHJcbiAqIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxyXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXHJcbiAqICAgICBkYXRhIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xyXG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcclxuICBsZXQgd2lkdGggPSAwXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXHJcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xyXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxyXG4gIH1cclxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XHJcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxyXG4gIH1cclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gc2luZ2xlIHF1b3Rlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IHNpbmdsZSBxdW90ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XHJcbiAgcmV0dXJuIGAnJHtzdHJ9J2BcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAqXHJcbiAqIFdoaWxlIHRoaXMgd2lsbCBkdXBsaWNhdGUgYW55IHZhbHVlLCBpdCdzIHByaW1hcmlseSB1c2VmdWwgZm9yXHJcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxyXG4gKiBzaG91bGQgZ2VuZXJhbGx5IGJlIGFuIGFycmF5IG9yIG9iamVjdC5cclxuICpcclxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxyXG4gKiBhbGxvdyBkZXN0cnVjdHVyaW5nIHRvIHJlZmVyZW5jZSBhbnkgYW5kIGFsbCBwYXJ0cyBvZiBhIHZhbHVlLCBidXQgaXRcclxuICogZG9lcyBub3QgaGF2ZSBhIHN5bnRheCAobGlrZSB0aGUgYEBgIG9wZXJhdG9yIGluIGxhbmd1YWdlcyBsaWtlIFNjYWxhXHJcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xyXG4gKiB0aGlzIGZ1bmN0aW9uLCBvbmUgb2YgdGhlIGNvcGllcyBjYW4gYmUgcmV0YWluZWQgYXMgYSB3aG9sZSB3aGlsZVxyXG4gKiBwcm92aWRpbmcgYW5vdGhlciBjb3B5IGZvciBkZXN0cnVjdHVyaW5nLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgW3dob2xlLCBbc3RhdGUsIHZhbHVlXV0gPSBkdXAocGFyc2UocGFyc2VyLCBpbnB1dCkpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gdmFsdWUgQW55IHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7W1tTdGF0ZSwgUmVzdWx0XSwgW1N0YXRlLCBSZXN1bHRdXX0gQW4gYXJyYXkgY29udGFpbmluZyB0d29cclxuICogICAgIGNvcGllcyBvZiB0aGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHVwKHZhbHVlKSB7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxyXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxyXG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcclxuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXHJcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXHJcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXHJcbiAqIHN0eWxlKS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXHJcbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xyXG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xyXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cclxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxyXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxyXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxyXG4gKiBjcmVhdGVkIGFuIGFyYml0cmFyeSBvYmplY3QuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFzc2lnbmVkIGFuXHJcbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxyXG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxyXG4gKiBvYmplY3QgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBmYWN0b3J5IGNyZWF0ZWQgaXQgb3IgYGZhbHNlYCBpZiBpdFxyXG4gKiBkaWQgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXVnbWVudGVkIHdpdGhcclxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXHJcbiAqICAgICBhZGRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhY2soZm4sIHByb3AgPSAnY3JlYXRlZCcpIHtcclxuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXHJcbiAgICAgIHRyYWNrZWQuYWRkKGNyZWF0ZWQpXHJcbiAgICAgIHJldHVybiBjcmVhdGVkXHJcbiAgICB9LFxyXG4gICAgcHJvcCxcclxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3RyaW5nIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcclxuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChuKSB7XHJcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cclxuICBjb25zdCB2ID0gbiAlIDEwMFxyXG4gIHJldHVybiBuICsgKHN1ZmZpeGVzWyh2IC0gMjApICUgMTBdID8/IHN1ZmZpeGVzW3ZdID8/IHN1ZmZpeGVzWzBdKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XHJcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcclxuICogYXJlIGFsc28gaW5jbHVkZWQgZm9yIHR5cGVzIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBzdXBwb3J0LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gbWFrZVBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxyXG4gKiBvbiBpdHMgZmlyc3QgbGV0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHByZXBlbmRlZCBhcnRpY2xlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcclxuICByZXR1cm4gJ2FlaW91QUVJT1UnLmluY2x1ZGVzKHN0clswXSkgPyBgYW4gJHtzdHJ9YCA6IGBhICR7c3RyfWBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9