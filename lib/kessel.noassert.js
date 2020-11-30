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
/*! exports provided: formatter, ordFormatter, ordinalChar, ordinalFunction, ordinalNumber, ordinalParser, ordinalString, assertChar, assertFunction, assertString, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser */
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
/*! exports provided: choice, opt, def, attempt, sequenceB, chainB, leftB, rightB, bothB, countB, manyTillB, blockB */
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
  if (false) {}
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
  if (false) {}
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
 * chain(p2, b => constant([a, b])))`.
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
 * constant(x[n]))`.
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
 * `notEmptyL(p, msg)` is an optimized implementation of
 * `label(notEmpty(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` succeeds
 *     without consuming input.
 * @returns {Parser} A parser which fails if `p` passes but doesn't
 *     consume any input, or otherwise passes the result through.
 */

const notEmptyL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
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
 * `followedByL(p, msg)` is an optimized implementation of
 * `label(followedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const followedByL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
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
 * `notFollowedByL(p, msg)` is an optimized implementation of
 * `label(notFollowedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p`
 *    succeeds.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser state, whether or not `p` succeeds.
 */

const notFollowedByL = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
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

const count = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
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

const assocl = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
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

const assocl1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
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

const assocr = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(nextState, x);
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
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

const assocr1 = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["makeParser"])(state => {
  /* istanbul ignore else */
  if (false) {}

  const [reply, [nextState, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(state));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let next = nextState;
  let index = next.index;

  while (true) {
    const [replyop, [nextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(next));
    next = nextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [nextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(next));
    next = nextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
    ops.push(resultop.value);
    values.push(resultp.value);
    index = next.index;
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
/*! exports provided: Status, makeState, makeParser, ok, error, fatal, maybeFatal, parse, succeeded, success, failure, run */
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
  return ensureNewlines(`${position}\n\n${display}\n${unexpMsg}${expMsg}${genericMsg}${unknownMsg}` + `${compoundMsg}${nestedMsg}`, 2);
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
/*! exports provided: alpha, any, anyOf, char, chari, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyL, upper, always, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringi, attempt, blockB, bothB, chainB, choice, countB, def, leftB, manyTillB, opt, rightB, sequenceB, between, both, chain, fifth, first, fourth, join, left, map, nth, pipe, right, second, skip, third, value, followedBy, followedByL, lookAhead, notEmpty, notFollowedBy, notFollowedByL, backLabel, label, assocl, assocl1, assocr, assocr1, block, count, many, many1, manyTill, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Status, error, failure, fatal, makeParser, maybeFatal, ok, parse, run, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "countB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["countB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["run"]; });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwicGFyc2VyRm9ybWF0dGVyIiwib3JkRm9ybWF0dGVyIiwib3JkIiwib3JkaW5hbENoYXIiLCJvcmRpbmFsRnVuY3Rpb24iLCJvcmRpbmFsTnVtYmVyIiwib3JkaW5hbFBhcnNlciIsIm9yZGluYWxTdHJpbmciLCJhc3NlcnRDaGFyIiwibmFtZSIsImNoYXJMZW5ndGgiLCJFcnJvciIsImFzc2VydEZ1bmN0aW9uIiwibWFrZVBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRTdHJpbmciLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJPayIsIkZhdGFsIiwiU3RhdHVzIiwiY2hvaWNlIiwicHMiLCJzdGF0ZSIsIkFTU0VSVCIsImVycm9ycyIsInAiLCJyZXBseSIsIm5leHQiLCJyZXN1bHQiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsIiwiZXJyb3IiLCJvcHQiLCJvayIsImRlZiIsIngiLCJhdHRlbXB0IiwiaW5kZXgiLCJlcnIiLCJuZXN0ZWQiLCJzZXF1ZW5jZUIiLCJ2YWx1ZXMiLCJuZXh0U3RhdGUiLCJwdXNoIiwiY2hhaW5CIiwiZm4iLCJyZXBseTEiLCJuZXh0MSIsInJlc3VsdDEiLCJyZXBseTIiLCJuZXh0MiIsInJlc3VsdDIiLCJsZWZ0QiIsInAxIiwicDIiLCJyaWdodEIiLCJib3RoQiIsImNvdW50QiIsIm4iLCJfIiwicmFuZ2UiLCJtYW55VGlsbEIiLCJlbmQiLCJibG9ja0IiLCJnZW5GbiIsImdlbiIsIm5leHRWYWx1ZSIsImkiLCJkb25lIiwiY2hhaW4iLCJtYXliZUZhdGFsIiwibWFwIiwiam9pbiIsInNraXAiLCJ0dXBsZSIsImxlZnQiLCJyaWdodCIsImJvdGgiLCJwaXBlIiwicG9wIiwiYmV0d2VlbiIsInByZSIsInBvc3QiLCJuZXh0MyIsInJlc3VsdDMiLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJsb29rQWhlYWQiLCJub3RFbXB0eSIsIm5vdEVtcHR5TCIsIm1zZyIsImV4cGVjdGVkIiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlMIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlMIiwiTmVzdGVkIiwiRXJyb3JUeXBlIiwicGFzcyIsImxhYmVsIiwiYmFja0xhYmVsIiwibGVuZ3RoIiwiY29tcG91bmQiLCJsb29wTWVzc2FnZSIsInNlcXVlbmNlIiwiYmxvY2siLCJtYW55IiwidmlldyIsImJ5dGVMZW5ndGgiLCJtYW55MSIsInNraXBNYW55Iiwic2tpcE1hbnkxIiwic2VwQnkiLCJzZXAiLCJuZXh0U3RhdGUxIiwibmV4dFN0YXRlMiIsIlR5cGVFcnJvciIsInNlcEJ5MSIsInNlcEVuZEJ5Iiwic2VwTmV4dCIsInNlcEVuZEJ5MSIsImNvdW50IiwibWFueVRpbGwiLCJhc3NvY2wiLCJvcCIsIm9wcyIsInJlcGx5b3AiLCJuZXh0b3AiLCJyZXN1bHRvcCIsInJlcGx5cCIsIm5leHRwIiwicmVzdWx0cCIsImFzc29jbDEiLCJhc3NvY3IiLCJhc3NvY3IxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiU3ltYm9sIiwibWFrZVN0YXRlIiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsInJlcGVhdCIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwicmF3TGluZSIsInZpZXdUb1N0cmluZyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZpbmQiLCJjb21tYVNlcGFyYXRlIiwiZmlsdGVyIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJ1bmtub3duTXNnIiwiZ2V0UG9zaXRpb24iLCJjb2x1bW4iLCJzdHJpbmdzIiwiYWxwaGEiLCJhbHBoYVUiLCJhbnkiLCJhbnlPZiIsImFycmF5IiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhcmkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZU9mIiwib2N0YWwiLCJyZWdleCIsInJlIiwic3BhY2UiLCJzcGFjZXMiLCJzcGFjZXMxIiwic3BhY2VzVSIsInNwYWNlczFVIiwic3BhY2VVIiwic3RyaW5nIiwic3RyIiwic3RyaW5naSIsInVwcGVyIiwidXBwZXJVIiwiZXhwZWN0ZWRzIiwiQ2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJyZWFkIiwidG9Mb3dlckNhc2UiLCJzYXRpc2Z5Iiwic2F0aXNmeUwiLCJjaGFycyIsImFyciIsImluY2x1ZGVzIiwiYWx3YXlzIiwiZmFpbCIsImZhaWxGYXRhbGx5IiwiZmFpbFVuZXhwZWN0ZWQiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImJ5dGVzIiwiZnJvbSIsImRlY29kZSIsImVuY29kZSIsInZpZXdMZW5ndGgiLCJtZXNzYWdlcyIsIm1zZ3MiLCJzbGljZSIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFyZ3MiLCJhZGQiLCJoYXMiLCJiaW5kIiwib3JkaW5hbCIsInN1ZmZpeGVzIiwidiIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImFydGljbGlmeSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtR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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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SSxFQUE5RDtBQUNELEMiLCJmaWxlIjoia2Vzc2VsLm5vYXNzZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIgfSBmcm9tICcuL2NvcmUnXHJcbmltcG9ydCB7IGNoYXJMZW5ndGgsIHN0cmluZ2lmeSB9IGZyb20gJy4vdXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXIgPSB0eXBlID0+XHJcbiAgdmFsdWUgPT4gYGV4cGVjdGVkICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXHJcblxyXG5jb25zdCBjaGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJylcclxuY29uc3QgZm5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nKVxyXG5jb25zdCBzdHJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nJylcclxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcclxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcclxuY29uc3QgbnVtRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG51bWJlcicpXHJcbmNvbnN0IHBhcnNlckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZEZvcm1hdHRlciA9ICh0eXBlLCBvcmQpID0+IHZhbHVlID0+XHJcbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxyXG5cclxuZXhwb3J0IGNvbnN0IG9yZGluYWxDaGFyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZClcclxuZXhwb3J0IGNvbnN0IG9yZGluYWxGdW5jdGlvbiA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsTnVtYmVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBudW1iZXInLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsUGFyc2VyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBwYXJzZXInLCBvcmQpXHJcbmV4cG9ydCBjb25zdCBvcmRpbmFsU3RyaW5nID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBzdHJpbmcnLCBvcmQpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0Q2hhcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gY2hhckZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0RnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGZuRm9ybWF0dGVyKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCBtYWtlUGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJGb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yQXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckFyckZvcm1hdHRlcikge1xyXG4gIGlmICghKFxyXG4gICAgQXJyYXkuaXNBcnJheSh2YWx1ZSlcclxuICAgICYmIHZhbHVlLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnICYmIGNoYXJMZW5ndGgoYykgPT09IDEpXHJcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgKSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKGBbJHtuYW1lfV06ICR7Zm9ybWF0dGVyKHZhbHVlKX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yUmVnRXhwKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJSZWdGb3JtdHRlcikge1xyXG4gIGNvbnN0IHR5cGUgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgdHlwZSAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IG51bUZvcm1hdHRlcikge1xyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJzZXJGb3JtYXR0ZXIpIHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8ICFtYWtlUGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXHJcbiAgfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydEZ1bmN0aW9uLFxyXG4gIGFzc2VydE51bWJlcixcclxuICBhc3NlcnRQYXJzZXIsXHJcbiAgb3JkaW5hbEZ1bmN0aW9uLFxyXG4gIG9yZGluYWxOdW1iZXIsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuaW1wb3J0IHsgZHVwLCBvcmRpbmFsLCByYW5nZSwgc3RyaW5naWZ5IH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhbHRlcm5hdGl2ZXMuIEVhY2ggb2YgdGhlIHN1cHBsaWVkXHJcbiAqIHBhcnNlcnMgaXMgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlci4gV2hlbiB0aGUgZmlyc3QgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzLCBvciB0aGUgZmlyc3QgcGFyc2VyIGZhaWxzIHdoaWxlIGNvbnN1bWluZyBpbnB1dCwgZXhlY3V0aW9uXHJcbiAqIGlzIHN0b3BwZWQgYW5kIHRoZSBzdGF0ZSBmcm9tIHRoYXQgbGFzdCBwYXJzZXIgaXMgcGFzc2VkIHRocm91Z2guIFRoZVxyXG4gKiBzYW1lIGhhcHBlbnMgaWYgYWxsIHBhcnNlcnMgYXJlIGFwcGxpZWQgd2l0aG91dCBhbnkgb2YgdGhlbVxyXG4gKiBzdWNjZWVkaW5nLlxyXG4gKlxyXG4gKiBPbiBmYWlsdXJlLCBhbGwgb2YgdGhlIGBFeHBlY3RlZGAgZXJyb3JzIGZyb20gYW55IG9mIHRoZSBjb250YWluZWRcclxuICogcGFyc2VycyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoaXMgcGFyc2VyJ3MgZXJyb3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYXBwbHkgdG8gdGhlIGlucHV0LCBvbmUgYXQgYVxyXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcclxuICogICAgIG9uZSBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaG9pY2UgPSAoLi4ucHMpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgZm9yIChjb25zdCBbaSwgcF0gb2YgcHMuZW50cmllcygpKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignY2hvaWNlJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGxldCBlcnJvcnMgPSBbXVxyXG5cclxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgICBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChuZXh0LCBlcnJvcnMpXHJcbiAgfVxyXG4gIHJldHVybiBlcnJvcihzdGF0ZSwgZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlclxyXG4gKiBpdCBmYWlscyBvciBub3QgYnV0IG9ubHkgY29uc3VtaW5nIGlucHV0IGlmIGl0IHN1Y2NlZWRzLiBUaGlzIHBhcnNlclxyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIEl0J3MgdXNlZCB0b1xyXG4gKiBpbXBsZW1lbnQgc2tpcHBpbmcgb3ZlciBzb21lIG9wdGlvbmFsIHRleHQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgZm9yIG9wdGlvbmFsIGNvbnRlbnQgdG8gYmUgYXBwbGllZCBhbmRcclxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXHJcbiAqIEByZXR1cm4ge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdCB1bmxlc3MgaXRzXHJcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seVxyXG4gKiAgICAgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgb3B0ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignb3B0JywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwgPyByZXBseSA6IG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xyXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHRcclxuICogdmFsdWUgYHhgLiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzXHJcbiAqIGZhdGFsbHkuXHJcbiAqXHJcbiAqIGBkZWYocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hvaWNlKFtwLFxyXG4gKiBjb25zdGFudCh4KV0pYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3NcclxuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cclxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXHJcbiAqICAgICBzdXBwbGllZCBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcclxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWYgPSAocCwgeCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBFcnJvciA/IHJlcGx5IDogb2sobmV4dCwgeClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgdHJhbnNmb3JtcyBhIGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbFxyXG4gKiBmYWlsdXJlLiBJdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXI7IGlmIHRoYXQgcGFyc2VyIGZhaWxzXHJcbiAqIGZhdGFsbHksIHRoZSBzdGF0ZSBpcyBzZXQgYmFjayB0byB3aGF0IGl0IHdhcyAqYmVmb3JlKiB0aGF0IHBhcnNlciBpc1xyXG4gKiBhcHBsaWVkIGFuZCB0aGUgZmF0YWwgZmFpbHVyZSBpcyByZXR1cm5lZCBhcyBhIG5vbi1mYXRhbCBmYWlsdXJlLiBJZlxyXG4gKiB0aGUgcGFyc2VyIGhhcyBhbnkgb3RoZXIgcmVzdWx0LCBpdCBpcyBwYXNzZWQgdGhyb3VnaCB3aXRob3V0XHJcbiAqIG1vZGlmaWNhdGlvbi5cclxuICpcclxuICogVGhpcyBwYXJzZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGNhdXNlIGEgbm9uLWJhY2t0cmFja2luZyBwYXJzZXIgdG9cclxuICogYmFja3RyYWNrIHVwb24gZmFpbHVyZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSBmYXRhbCBmYWlsdXJlcyB3aWxsIGJlIGNvbnZlcnRlZFxyXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxyXG4gKiAgICAgcGFyc2VyIGZhaWxzIGZhdGFsbHksIHRoaXMgb25lIHdpbGwgaW5zdGVhZCBmYWlsIG5vbi1mYXRhbGx5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgOiBuZXN0ZWQobmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gIH1cclxuICByZXR1cm4gcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xyXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXHJcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XHJcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc29cclxuICogZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQuIEFcclxuICogZmF0YWwgZXJyb3IgZnJvbSBvbmUgb2YgdGhlIGNvbnRhaW5lZCBwYXJzZXJzIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuXHJcbiAqIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgc2VxdWVuY2VCKHBzKWAgaXMgbm90IHRoZSBzYW1lIGFzXHJcbiAqIGBiYWNrdHJhY2soc2VxdWVuY2UocHMpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mXHJcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxyXG4gKiBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXHJcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2VxdWVuY2VCID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGZvciAoY29uc3QgW2ksIHBdIG9mIHBzLmVudHJpZXMoKSkge1xyXG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcXVlbmNlQicsIHAsIG9yZGluYWxQYXJzZXIob3JkaW5hbChpICsgMSkpKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHtcclxuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQuaW5kZXhcclxuICAgICAgICA/IHJlc3VsdC5lcnJvcnNcclxuICAgICAgICA6IG5lc3RlZChuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgICByZXR1cm4gZXJyb3IobmV4dCwgZXJyLCBpbmRleClcclxuICAgIH1cclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSBzdGF0ZSBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkXHJcbiAqIHBhcnNlciB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZVxyXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBzdGF0ZS5cclxuICpcclxuICogSWYgdGhlIHNlY29uZCBwYXJzZXIgKHRoZSBvbmUgcHJvdmlkZWQgYnkgYGZuYCkgZmFpbHMgbm9uLWZhdGFsbHksXHJcbiAqIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvXHJcbiAqIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGxcclxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgY2hhaW5CKHAsIGZuKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2soY2hhaW4ocCxcclxuICogZm4pKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cclxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcclxuICogICAgIHJldHVybnMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXHJcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRGdW5jdGlvbignY2hhaW5CJywgZm4sIG9yZGluYWxGdW5jdGlvbignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShuZXh0MSkpXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgPyByZXN1bHQyLmVycm9yc1xyXG4gICAgOiBuZXN0ZWQobmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcclxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXHJcbiAqXHJcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXHJcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIHN0YXRlIHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcclxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcclxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCBgbGVmdEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2sobGVmdChwMSxcclxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbGVmdEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKG5leHQyLCByZXN1bHQxLnZhbHVlKVxyXG5cclxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgID8gcmVzdWx0Mi5lcnJvcnNcclxuICAgIDogbmVzdGVkKG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICByZXR1cm4gZXJyb3IobmV4dDIsIGVyciwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxyXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXHJcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxyXG4gKlxyXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxyXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBzdGF0ZSB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXHJcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgYHJpZ2h0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhyaWdodChwMSxcclxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwMSwgcDIpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHAyLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gRXJyb3IpIHJldHVybiByZXBseTJcclxuXHJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IG5leHQyLmluZGV4XHJcbiAgICA/IHJlc3VsdDIuZXJyb3JzXHJcbiAgICA6IG5lc3RlZChuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbiAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cclxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXHJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cclxuICpcclxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcclxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgc3RhdGUgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxyXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxyXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cclxuICpcclxuICogTm90ZSB0aGF0IGBib3RoQihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhib3RoKHAxLFxyXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYm90aEIgPSAocDEsIHAyKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYm90aEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JvdGhCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKG5leHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXHJcblxyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBuZXh0Mi5pbmRleFxyXG4gICAgPyByZXN1bHQyLmVycm9yc1xyXG4gICAgOiBuZXN0ZWQobmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG4gIHJldHVybiBlcnJvcihuZXh0MiwgZXJyLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcclxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxyXG4gKiBmYWlscywgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbDsgaWYgdGhhdCBmYWlsdXJlIGlzIGZhdGFsLCB0aGVcclxuICogb3ZlcmFsbCBmYWlsdXJlIHdpbGwgYWxzbyBiZSBmYXRhbC5cclxuICpcclxuICogVGhlIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgdGhlIHVuZGVybHlpbmcgZXJyb3Igd2FzXHJcbiAqIG5vbi1mYXRhbCwgZXZlbiBpZiBpbnB1dCB3YXMgY29uc3VtZWQgKGJhY2t0cmFja2luZyB3aWxsIGhhcHBlbiBpblxyXG4gKiB0aGlzIGNhc2UpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBhcHBseSB0aGUgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxyXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50QiA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignY291bnRCJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnROdW1iZXIoJ2NvdW50QicsIG4sIG9yZGluYWxOdW1iZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dC5pbmRleFxyXG4gICAgICAgID8gcmVzdWx0LmVycm9yc1xyXG4gICAgICAgIDogbmVzdGVkKG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICAgIHJldHVybiBlcnJvcihuZXh0LCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXHJcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcclxuICogb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzXHJcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxyXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxyXG4gKiB3aWxsIGJlIHRyaWVkIGZpcnN0IG9uIGVhY2ggY2hhcmFjdGVyIChjb250cmFzdCB3aXRoIGBiZXR3ZWVuKGxldHRlcixcclxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcclxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcclxuICogdGhlIGBsZXR0ZXJgIHBhcnNlciBnZXRzIHRvIHNlZSBpdCkuXHJcbiAqXHJcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBub24tZmF0YWxseSBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcyxcclxuICogdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbCAoYmFja3RyYWNraW5nIGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW5cclxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxyXG4gKiBlcnJvciBmb3IgdGhlIG92ZXJhbGwgcGFyc2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxyXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxyXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueVRpbGxCID0gKHAsIGVuZCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsQicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBlbmQsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChlbmQobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dDFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xyXG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gbmV4dDIuaW5kZXhcclxuICAgICAgICA/IG1lcmdlKHJlc3VsdDIuZXJyb3JzLCByZXN1bHQxLmVycm9ycylcclxuICAgICAgICA6IG5lc3RlZChuZXh0MiwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSlcclxuICAgICAgcmV0dXJuIGVycm9yKG5leHQyLCBlcnIsIGluZGV4KVxyXG4gICAgfVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcclxuICogZ2VuZXJhdG9yIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWRcclxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxyXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxyXG4gKlxyXG4gKiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLCB0aGUgYGJsb2NrYCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuIElmXHJcbiAqIHRoYXQgZmFpbHVyZSBpcyBub24tZmF0YWwsIGJhY2t0cmFja2luZyB3aWxsIHJlc2V0IHRoZSBpbmRleCB0byB3aGVyZVxyXG4gKiBpdCB3YXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYGJsb2NrYCBwYXJzZXIgYXBwbGljYXRpb24uXHJcbiAqXHJcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxyXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXHJcbiAqXHJcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcclxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xyXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxyXG4gKiAgICAgcGFyc2VyJ3MgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5XHJcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxyXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xyXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJsb2NrQiA9IGdlbkZuID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgbGV0IG5leHRWYWx1ZVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuICBsZXQgaSA9IDBcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcclxuICAgIGlmIChkb25lKSByZXR1cm4gb2sobmV4dCwgdmFsdWUpXHJcblxyXG4gICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICAgIGlmIChBU1NFUlQpIHtcclxuICAgICAgYXNzZXJ0UGFyc2VyKCdibG9ja0InLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcclxuICAgICAgICBvcmRpbmFsKGkgKyAxKVxyXG4gICAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxyXG4gICAgfVxyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cCh2YWx1ZShuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IobmV4dFN0YXRlLCByZXN1bHQuZXJyb3JzLCBpbmRleClcclxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxyXG4gICAgaSsrXHJcbiAgfVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBhc3NlcnRGdW5jdGlvbixcclxuICBhc3NlcnROdW1iZXIsXHJcbiAgYXNzZXJ0UGFyc2VyLFxyXG4gIGZvcm1hdHRlcixcclxuICBvcmRpbmFsRnVuY3Rpb24sXHJcbiAgb3JkaW5hbE51bWJlcixcclxuICBvcmRpbmFsUGFyc2VyLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIsIG1heWJlRmF0YWwsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZHVwLCBvcmRpbmFsIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgc3RhdGUgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxyXG4gKiBwYXJzZXIgdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGVcclxuICogcGFyc2VyIHJldHVybnMgdGhhdCByZXN1bHRpbmcgc3RhdGUuXHJcbiAqXHJcbiAqIElmIHRoZSBpbml0aWFsIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIGluc3RlYWQgcmV0dXJuZWQuIElmIHRoZVxyXG4gKiBzZWNvbmQgcGFyc2VyICh0aGUgcmV0dXJuIHZhbHVlIG9mIGBmbmApIGZhaWxzIGFuZCBgcGAgY29uc3VtZWRcclxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cclxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxyXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxyXG4gKiAgICAgcmV0dXJucy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXHJcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXHJcblxyXG4gIGNvbnN0IHAyID0gZm4ocmVzdWx0MS52YWx1ZSlcclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcDIsIGZvcm1hdHRlcigndGhlIDJuZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZXBseTIsIFtuZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKG5leHQxKSlcclxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXHJcbiAgICA6IG1heWJlRmF0YWwobmV4dDIuaW5kZXggIT09IGluZGV4LCBuZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgcGFzc2VzIGl0c1xyXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cclxuICogYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cclxuICpcclxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcclxuICogZmFpbHVyZSBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxyXG4gKlxyXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KGZuKHgpKSlgLiBUaGlzIGFsc28gbWFrZXMgaXQgYSBtb3JlIGVmZmljaWVudCB2ZXJzaW9uIG9mXHJcbiAqIGBwaXBlKFtwXSwgZm4pYCAoYSBzaW5nbGUtcGFyc2VyIGBwaXBlYCkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOip9IGZuIEEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXHJcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcclxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxyXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbWFwJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRGdW5jdGlvbignbWFwJywgZm4sIG9yZGluYWxGdW5jdGlvbignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIGZuKHJlc3VsdC52YWx1ZSkpIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gVGhhdCBwYXJzZXIgaXNcclxuICogZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mIHN0cmluZ3MsIGFuZCBpZiBpdCBzdWNjZWVkcywgdGhhdFxyXG4gKiByZXN1bHQncyBlbGVtZW50cyBhcmUgam9pbmVkIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGlzXHJcbiAqIHVzZWZ1bCBiZWNhdXNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc2hhcmUgdGhlIGNoYXJhY3RlcmlzdGljIG9mIHNvbWVcclxuICogZnVuY3Rpb25hbCBsYW5ndWFnZXMgd2hlcmUgYSBzdHJpbmcgaXMgdGhlIHNhbWUgYXMgYSBsaXN0IG9mXHJcbiAqIGNoYXJhY3RlcnMuIEphdmFTY3JpcHQgbmVlZHMgZXhwbGljaXQgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSB0d28sIHNvXHJcbiAqIHRoaXMgcGFyc2VyIHdpbGwgdHVybiBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBzdHJpbmcuXHJcbiAqXHJcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIHRoZSBjcmVhdGVkIHBhcnNlciB3aWxsIGFsc28gZmFpbCB3aXRoXHJcbiAqIHRoZSBzYW1lIHN0YXRlLlxyXG4gKlxyXG4gKiBgam9pbihwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KHguam9pbignJykpKWAuXHJcbiAqXHJcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lcyBub3QgcmVzdWx0IGluIGFuIGFycmF5LCBhbiBleGNlcHRpb24gd2lsbFxyXG4gKiBiZSB0aHJvd24gYmVjYXVzZSBhbiBhdHRlbXB0IHdpbGwgYmUgbWFkZSB0byBjYWxsIGBqb2luYCBvbiB0aGVcclxuICogcmVzdWx0LiBJZiBpdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIHNvbWV0aGluZyBvdGhlciB0aGFuIHN0cmluZ3MsXHJcbiAqIHRob3NlIGVsZW1lbnRzIHdpbGwgYmUgY29lcmNlZCBpbnRvIHN0cmluZ3MgYW5kIHRoZW4gam9pbmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZlxyXG4gKiAgICAgc3RyaW5ncy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VyIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiBhIHNpbmdsZSBzdHJpbmcgbWFkZSBmcm9tIGpvaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZVxyXG4gKiAgICAgYXJyYXkgb2Ygc3RyaW5ncy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBqb2luID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignam9pbicsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLmpvaW4oJycpKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgZGlzY2FyZHMgYW55XHJcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0IHdoaWxlIHN0aWxsIGNvbnN1bWluZyBpbnB1dC4gQSBmYWlsdXJlIHdpbGwgYmVcclxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cclxuICpcclxuICogYHNraXAocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cclxuICogY29uc3RhbnQobnVsbCkpYCxcclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXHJcbiAqICAgICBwYXJzZXIgZG9lcyBvbiBzdWNjZXNzLCBidXQgd2lsbCBwcm9kdWNlIG5vIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignc2tpcCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgbnVsbCkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIHJ1biB0aGUgc3VwcGxpZWQgcGFyc2VyIGJ1dCwgb24gc3VjY2VzcyxcclxuICogcmVzdWx0IGluIHRoZSBzdXBwbGllZCB2YWx1ZSBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBgdmFsdWUocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbmF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxyXG4gKiBjb25zdGFudCh4KSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LiBJdHMgcmVzdWx0IGlzIGlnbm9yZWQuXHJcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcclxuICogICAgIHN1Y2NlZWRzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgYHBgIGJ1dCByZXR1cm4gYHhgIG9uXHJcbiAqICAgICBzdWNjZXNzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHZhbHVlID0gKHAsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCd2YWx1ZScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gIGNvbnN0IFt0dXBsZSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHgpIDogdHVwbGVcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcclxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmXHJcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxyXG4gKlxyXG4gKiBgbGVmdChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCB4ID0+XHJcbiAqIHZhbHVlKHAyLCB4KSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcclxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBmaXJzdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxyXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MiwgcmVzdWx0MS52YWx1ZSlcclxuICAgIDogbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMmAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcclxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsIGJlIGZhdGFsIGlmXHJcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxyXG4gKlxyXG4gKiBgcmlnaHQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgKCkgPT5cclxuICogcDIpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXHJcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcDEsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAyLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG5cclxuICBjb25zdCBbcmVwbHkxLCBbbmV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW3JlcGx5MiwgW25leHQyLCByZXN1bHQyXV0gPSBkdXAocDIobmV4dDEpKVxyXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyByZXBseTJcclxuICAgIDogbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXHJcbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGJvdGggaW4gYW4gYXJyYXkuIElmIGVpdGhlclxyXG4gKiBgcDFgIG9yIGBwMmAgZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsXHJcbiAqIGJlIGZhdGFsIGlmIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxyXG4gKlxyXG4gKiBgYm90aChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+XHJcbiAqIGNoYWluKHAyLCBiID0+IGNvbnN0YW50KFthLCBiXSkpKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxyXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBib3RoID0gKHAxLCBwMikgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JvdGgnLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JvdGgnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuXHJcbiAgY29uc3QgW3JlcGx5MSwgW25leHQxLCByZXN1bHQxXV0gPSBkdXAocDEoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcclxuXHJcbiAgY29uc3QgW25leHQyLCByZXN1bHQyXSA9IHAyKG5leHQxKVxyXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MiwgW3Jlc3VsdDEudmFsdWUsIHJlc3VsdDIudmFsdWVdKVxyXG4gICAgOiBtYXliZUZhdGFsKG5leHQyLmluZGV4ICE9PSBpbmRleCwgbmV4dDIsIHJlc3VsdDIuZXJyb3JzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcclxuICogdGhvc2UgcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2ZcclxuICogcGFyc2VycyB0byBhcHBseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXHJcbiAqIHBhcnNlcidzIHJlc3VsdC5cclxuICpcclxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCogZGlzY2FyZGVkLlxyXG4gKiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gYGZuYCBub1xyXG4gKiBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cclxuICpcclxuICogYHBpcGUocDEsIHAyLCBmbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT5cclxuICogY2hhaW4ocDIsIGIgPT4gY29uc3RhbnQoZm4oYSwgYikpKSlgLCBgcGlwZShwMSwgcDIsIHAzLCBmbilgIGlzIGFuXHJcbiAqIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT4gY2hhaW4ocDIsIGIgPT4gY2hhaW4ocDMsXHJcbiAqIGMgPT4gY29uc3RhbnQoZm4oYSwgYiwgYykpKSkpYCwgYW5kIHNvIG9uLlxyXG4gKlxyXG4gKiBJZiB0aGUgYXJyYXkgaGFzIG9uZSBlbGVtZW50LCB0aGUgcGFyc2VyIGJlY29tZXMgZXF1aXZhbGVudCB0byBgbWFwYFxyXG4gKiBidXQgbGVzcyBlZmZpY2llbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uKFBhcnNlcnxmdW5jdGlvbiguLi4qKToqKX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZVxyXG4gKiAgICAgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxyXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cclxuICogICAgIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhlIGNyZWF0ZWQgcGFyc2VyLiBBIHNpbmdsZVxyXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsXHJcbiAqICAgICBvdGhlciBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxyXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcclxuICogICAgIHJldHVybiB2YWx1ZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLnBzKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IHBzLnBvcCgpXHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtpLCBwXSBvZiBwcy5lbnRyaWVzKCkpIHtcclxuICAgICAgYXNzZXJ0UGFyc2VyKCdwaXBlJywgcCwgb3JkaW5hbFBhcnNlcihvcmRpbmFsKGkgKyAxKSkpXHJcbiAgICB9XHJcbiAgICBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBvcmRpbmFsRnVuY3Rpb24ob3JkaW5hbChwcy5sZW5ndGggKyAxKSkpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XHJcbiAgICBjb25zdCBbbmV4dFN0YXRlLCByZXN1bHRdID0gcChuZXh0KVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIGZuKC4uLnZhbHVlcykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBiZWZvcmUsIGNvbnRlbnQsIGFuZCBhZnRlciBwYXJzZXJzXHJcbiAqIGluIG9yZGVyIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXHJcbiAqIGBwYWZ0ZXJgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxyXG4gKiB0byBwYXRjaCB0aGUgXCJhZnRlclwiIGNvbnRlbnQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXIgZG9lcywgc28gdGFrZVxyXG4gKiBjYXJlIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxyXG4gKlxyXG4gKiBgYmV0d2VlbihwcmUsIHBvc3QsIHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxlZnQocmlnaHQocHJlLCBwKSwgcG9zdClgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXHJcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XHJcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHByZSwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwb3N0LCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICAgIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIG9yZGluYWxQYXJzZXIoJzNyZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcblxyXG4gIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKHByZShzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxyXG5cclxuICBjb25zdCBbbmV4dDIsIHJlc3VsdDJdID0gcChuZXh0MSlcclxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0Mi5pbmRleCAhPT0gaW5kZXgsIG5leHQyLCByZXN1bHQyLmVycm9ycylcclxuICB9XHJcblxyXG4gIGNvbnN0IFtuZXh0MywgcmVzdWx0M10gPSBwb3N0KG5leHQyKVxyXG4gIHJldHVybiByZXN1bHQzLnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0MywgcmVzdWx0Mi52YWx1ZSlcclxuICAgIDogbWF5YmVGYXRhbChuZXh0My5pbmRleCAhPT0gaW5kZXgsIG5leHQzLCByZXN1bHQzLmVycm9ycylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBudGggZWxlbWVudCBvZiB0aGUgcmVzdWx0IG9mIGEgcGFyc2VyIHRoYXQgcHJvZHVjZXMgYW5cclxuICogYXJyYXkuIElmIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgbnRoKHAsIG4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFtuXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgcmVzdWx0IGVsZW1lbnQgdG8gcmV0dXJuLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGBuYHRoIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG50aCA9IChwLCBuKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbnRoJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnROdW1iZXIoJ250aCcsIG4sIG9yZGluYWxOdW1iZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbbl0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZiB0aGVcclxuICogcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXHJcbiAqXHJcbiAqIGBmaXJzdChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XHJcbiAqIGNvbnN0YW50KHhbMF0pKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmaXJzdCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcClcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhuZXh0LCByZXN1bHQudmFsdWVbMF0pIDogcmVwbHlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcclxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgc2Vjb25kKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFsxXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHNlY29uZCBlbGVtZW50IG9mIHRoZVxyXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZWNvbmQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdzZWNvbmQnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVsxXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxyXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cclxuICpcclxuICogYHRoaXJkKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cclxuICogY29uc3RhbnQoeFsyXSkpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHRoaXJkID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcigndGhpcmQnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIHJlc3VsdC52YWx1ZVsyXSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZlxyXG4gKiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXHJcbiAqXHJcbiAqIGBmb3VydGgocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4WzNdKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXHJcbiAqICAgICByZXN1bHQgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlWzNdKSA6IHJlcGx5XHJcbn0pXHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXHJcbiAqIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxyXG4gKlxyXG4gKiBgZmlmdGgocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxyXG4gKiBjb25zdGFudCh4WzRdKSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlmdGggZWxlbWVudCBvZiB0aGVcclxuICogICAgIHJlc3VsdCBvZiBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmlmdGggPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdmaWZ0aCcsIHApXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlWzRdKSA6IHJlcGx5XHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydFBhcnNlcixcclxuICBhc3NlcnRTdHJpbmcsXHJcbiAgb3JkaW5hbFBhcnNlcixcclxuICBvcmRpbmFsU3RyaW5nLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IGVycm9yLCBvaywgbWFrZVBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xyXG5pbXBvcnQgeyBkdXAgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxyXG4gKiBzdWNjZWVkcywgaXRzIHJlc3VsdCBiZWNvbWVzIHRoZSByZXN1bHQgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cclxuICogRWl0aGVyIHdheSwgbm8gaW5wdXQgaXMgY29uc3VtZWQuIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlclxyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIocykgc2F0aXNmeSB0aGUgcGFyc2VyIHdpdGhvdXQgYWN0dWFsbHkgY29uc3VtaW5nXHJcbiAqIHRoZSBpbnB1dCB0byBmaW5kIG91dC5cclxuICpcclxuICogQXMgYSBzaWRlIGVmZmVjdCwgYW55IGZhdGFsIHBhcnNlIGVycm9yIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhXHJcbiAqIG5vbi1mYXRhbCBvbmUsIHNpbmNlIG5vIGlucHV0IGlzIGJlaW5nIGNvbnN1bWVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXHJcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsb29rQWhlYWQgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdsb29rQWhlYWQnLCBwKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2sobmV4dCwgcmVzdWx0LnZhbHVlLCBpbmRleClcclxuICAgIDogZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcclxuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcclxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXHJcbiAqXHJcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXHJcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcclxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cclxuICpcclxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcclxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXHJcbiAqIG9yIGVsc2UgYG5vdEVtcHR5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxyXG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFBhcnNlcignbm90RW1wdHknLCBwKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gT2sgfHwgbmV4dC5pbmRleCAhPT0gaW5kZXggPyByZXBseSA6IGVycm9yKG5leHQpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcclxuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcclxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXHJcbiAqXHJcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXHJcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcclxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cclxuICpcclxuICogYG5vdEVtcHR5TChwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcclxuICogYGxhYmVsKG5vdEVtcHR5KHApLCBtc2cpYC5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIHN1Y2NlZWRzXHJcbiAqICAgICB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxyXG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5vdEVtcHR5TCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdub3RFbXB0eUwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnbm90RW1wdHlMJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBPayB8fCBuZXh0LmluZGV4ICE9PSBpbmRleCA/IHJlcGx5XHJcbiAgICA6IGVycm9yKG5leHQsIGV4cGVjdGVkKG1zZykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgc3VjY2VlZHMsIGJ1dFxyXG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcclxuICogYGZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxyXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcclxuICogb3IgZWxzZSBgZm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcclxuICogICAgIHBhcnNlciBzdGF0ZSwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGZvbGxvd2VkQnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0UGFyc2VyKCdmb2xsb3dlZEJ5JywgcClcclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG4gICAgOiBlcnJvcihuZXh0LCB1bmRlZmluZWQsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcclxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBzdGF0ZS4gSWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQsXHJcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogYGZvbGxvd2VkQnlMKHAsIG1zZylgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxyXG4gKiBgbGFiZWwoZm9sbG93ZWRCeShwKSwgbXNnKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxyXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignZm9sbG93ZWRCeUwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnZm9sbG93ZWRCeUwnLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwsIGluZGV4KVxyXG4gICAgOiBlcnJvcihuZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0XHJcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgc3RhdGUuIElmIGBwYCBzdWNjZWVkcyxcclxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxyXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcclxuICogb3IgZWxzZSBgbm90Rm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcclxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgc3RhdGUsIHdoZXRoZXIgb3Igbm90IGBwYFxyXG4gKiAgICAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRQYXJzZXIoJ25vdEZvbGxvd2VkQnknLCBwKVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHAoc3RhdGUpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gZXJyb3IobmV4dCwgdW5kZWZpbmVkLCBpbmRleClcclxuICAgIDogb2sobmV4dCwgbnVsbCwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxyXG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIHN0YXRlLiBJZiBgcGAgc3VjY2VlZHMsXHJcbiAqIGBub3RGb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cclxuICpcclxuICogYG5vdEZvbGxvd2VkQnlMKHAsIG1zZylgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxyXG4gKiBgbGFiZWwobm90Rm9sbG93ZWRCeShwKSwgbXNnKWAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxyXG4gKiAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxyXG4gKiAgICAgcGFyc2VyIHN0YXRlLCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeUwgPSAocCwgbXNnKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignbm90Rm9sbG93ZWRCeUwnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnbm90Rm9sbG93ZWRCeUwnLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IGVycm9yKG5leHQsIGV4cGVjdGVkKG1zZyksIGluZGV4KVxyXG4gICAgOiBvayhuZXh0LCBudWxsLCBpbmRleClcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7XHJcbiAgYXNzZXJ0UGFyc2VyLFxyXG4gIGFzc2VydFN0cmluZyxcclxuICBvcmRpbmFsUGFyc2VyLFxyXG4gIG9yZGluYWxTdHJpbmcsXHJcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZmF0YWwsIG1ha2VQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcclxuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXHJcblxyXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcclxuY29uc3QgeyBOZXN0ZWQgfSA9IEVycm9yVHlwZVxyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbmZ1bmN0aW9uIHBhc3Moc3RhdGUsIHJlc3VsdCwgZXJyb3JzKSB7XHJcbiAgcmV0dXJuIFt7IC4uLnN0YXRlIH0sIHsgLi4ucmVzdWx0LCBlcnJvcnMgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXHJcbiAqIGNvbnN1bWVzIGlucHV0LCBub3RoaW5nIGFkZGl0aW9uYWwgaGFwcGVucy4gT3RoZXJ3aXNlLCB0aGUgb3JpZ2luYWxcclxuICogcGFyc2VyJ3MgcmVzdWx0IGlzIHJldGFpbmVkIGJ1dCB0aGUgZXJyb3IgaXMgb3ZlcndyaXR0ZW4gYnkgdGhlXHJcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgYXMgYW4gZXhwZWN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBiZXR0ZXIgZXJyb3IgbWVzc2FnZXMgaW4gY2FzZXMgd2hlcmUgdGhlXHJcbiAqIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGVycm9yIG1lc3NhZ2VzIGFyZSBpbnN1ZmZpY2llbnQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSBpZiBgcGAgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHBhc3NlcyBpdHMgcmVzdWx0c1xyXG4gKiAgICAgdGhyb3VnaCBleGNlcHQgZm9yIGNoYW5naW5nIGl0cyBgRXhwZWN0ZWRgIGVycm9yIG1lc3NhZ2UgdXBvblxyXG4gKiAgICAgZmFpbHVyZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsYWJlbCA9IChwLCBtc2cpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdsYWJlbCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0U3RyaW5nKCdsYWJlbCcsIG1zZywgb3JkaW5hbFN0cmluZygnMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICByZXR1cm4gaW5kZXggPT09IG5leHQuaW5kZXggPyBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXHJcbiAqIHN1Y2NlZWRzLCB0aGF0IHN1Y2Nlc3MgaXMgcGFzc2VkIHRocm91Z2gsIHRob3VnaCBpZiBpdCBkaWRuJ3QgY29uc3VtZVxyXG4gKiBhbnkgaW5wdXQsIHRoZSBwcm92aWRlZCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhbiBleHBlY3RlZFxyXG4gKiBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBJZiB0aGUgb3JpZ2luYWwgcGFyc2VyIGZhaWxzLCB3aGF0IGhhcHBlbnMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoYXRcclxuICogZmFpbHVyZSBjb25zdW1lZCBpbnB1dC4gSWYgaXQgZGlkIG5vdCwgdGhlIHN1cHBsaWVkIG1lc3NhZ2VcclxuICogb3ZlcndyaXRlcyB0aGUgb3JpZ2luYWwgZXJyb3IgbWVzc2FnZSBqdXN0IGFzIHdpdGggYGxhYmVsYC4gSWYgaXRcclxuICogKmRpZCogY29uc3VtZSBpbnB1dCwgdGhlIHN0YXRlIGlzIHJlc2V0IHRvIHRoZSBzdGF0ZSBiZWZvcmUgdGhlXHJcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgdGhlIGVycm9yIGlzIHNldCB0byBhIGNvbXBvdW5kIGVycm9yIHVzaW5nIHRoZVxyXG4gKiBzdXBwbGllZCBtZXNzYWdlICh3aXRoIHRoZSBuZXN0ZWQgZXJyb3IgYmVpbmcgdGhlIG9yaWdpbmFsIGVycm9yIHRoYXRcclxuICogY2FtZSBmcm9tIHRoZSBmYWlsdXJlIHBvaW50KSwgYW5kIGEgZmF0YWwgZXJyb3IgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBmZXcgcGxhY2VzIHdoZXJlIGEgZmF0YWwgZXJyb3IgaGFwcGVucyBhZnRlclxyXG4gKiBiYWNrdHJhY2tpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGVycm9yIG1lc3NhZ2UgdG8gYmUgdXNlZC4gVGhpcyB3aWxsIGJlXHJcbiAqICAgICBhbiBgRXhwZWN0ZWRgIGVycm9yIGlmIG5vIGlucHV0IHdhcyBjb25zdW1lZCwgb3IgYSBgQ29tcG91bmRgXHJcbiAqICAgICBlcnJvciBpZiBpdCB3YXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIGNoYW5nZXMgdGhlIGVycm9yXHJcbiAqICAgICBhcyBhcHByb3ByaWF0ZSBpZiBgcGAgZmFpbHMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmFja0xhYmVsID0gKHAsIG1zZykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2JhY2tMYWJlbCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0U3RyaW5nKCdiYWNrTGFiZWwnLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSB7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IG5leHQuaW5kZXhcclxuICAgICAgPyBwYXNzKG5leHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxyXG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IG5leHQuaW5kZXgpIHtcclxuICAgIGlmIChyZXN1bHQuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiByZXN1bHQuZXJyb3JzWzBdLnR5cGUgPT09IE5lc3RlZCkge1xyXG4gICAgICBjb25zdCB7IHN0YXRlLCBlcnJvcnMgfSA9IHJlc3VsdC5lcnJvcnNbMF1cclxuICAgICAgcmV0dXJuIHBhc3MobmV4dCwgcmVzdWx0LCBjb21wb3VuZChtc2csIHN0YXRlLCBlcnJvcnMpKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhc3MobmV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKVxyXG4gIH1cclxuICByZXR1cm4gZmF0YWwoc3RhdGUsIGNvbXBvdW5kKG1zZywgbmV4dCwgcmVzdWx0LmVycm9ycykpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydE51bWJlcixcclxuICBhc3NlcnRQYXJzZXIsXHJcbiAgb3JkaW5hbE51bWJlcixcclxuICBvcmRpbmFsUGFyc2VyLFxyXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXHJcbmltcG9ydCB7IG9rLCBtYWtlUGFyc2VyLCBTdGF0dXMsIG1heWJlRmF0YWwgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGR1cCwgb3JkaW5hbCwgcmFuZ2UsIHN0cmluZ2lmeSB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbmNvbnN0IHsgT2ssIEVycm9yLCBGYXRhbCB9ID0gU3RhdHVzXHJcblxyXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XHJcbiAgcmV0dXJuIGBbJHtuYW1lfV06IGluZmluaXRlIGxvb3AgZGV0ZWN0ZWQ7IGBcclxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXHJcbiAqIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmVcclxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcclxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuZWQgcGFyc2VyIG1heSBmYWlsIGZhdGFsbHkgZXZlbiBpZiB0aGUgdW5zdWNjZXNzZnVsXHJcbiAqIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuIFRoaXMgd2lsbCBoYXBwZW4gaWYgYW55IHByZXZpb3VzXHJcbiAqIHBhcnNlciBzdWNjZWVkZWQgYW5kIGNvbnN1bWVkIGlucHV0LiBFc3NlbnRpYWxseSwgaWYgdGhlIHJldHVybmVkXHJcbiAqIHBhcnNlciBjb25zdW1lcyBhbnl0aGluZyBhbmQgdGhlbiBmYWlscywgaXQgd2lsbCBmYWlsIGZhdGFsbHkuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcclxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9ICguLi5wcykgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBmb3IgKGNvbnN0IFtpLCBwXSBvZiBwcy5lbnRyaWVzKCkpIHtcclxuICAgICAgYXNzZXJ0UGFyc2VyKCdzZXF1ZW5jZScsIHAsIG9yZGluYWxQYXJzZXIob3JkaW5hbChpICsgMSkpKVxyXG4gICAgfVxyXG4gIH1cclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcclxuICAgICAgcmV0dXJuIG1heWJlRmF0YWwobmV4dC5pbmRleCAhPT0gaW5kZXgsIG5leHQsIHJlc3VsdC5lcnJvcnMpXHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhXHJcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXHJcbiAqIHdpbGwgYmUgZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW5cclxuICogYmUgYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS4gSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCxcclxuICogYGJsb2NrYCB3aWxsIGFsc28gZmFpbCB3aXRoIHRoYXQgZmFpbHVyZS4gVGhpcyBmYWlsdXJlIHdpbGwgYmUgZmF0YWxcclxuICogaWYgYW55IGlucHV0IHdhcyBjb25zdW1lZC5cclxuICpcclxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXHJcbiAqIHZhbHVlIHRoYXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5lZC5cclxuICpcclxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxyXG4gKiBjYXVzZSB1bmRlZmluZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXHJcbiAqICAgICBhcmd1bWVudHMgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkXHJcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcclxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxyXG4gKiAgICAgZGVwZW5kaW5nIG9uIHdoYXQgZXhhY3RseSBpcyB5aWVsZGVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXHJcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXHJcbiAqICAgICBzdWNjZWVkKSBpbiB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYmxvY2sgPSBnZW5GbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBnZW4gPSBnZW5GbigpXHJcbiAgY29uc3QgaW5kZXggPSBzdGF0ZS5pbmRleFxyXG4gIGxldCBuZXh0VmFsdWVcclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcbiAgbGV0IGkgPSAwXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXHJcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKG5leHQsIHZhbHVlKVxyXG5cclxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgICBpZiAoQVNTRVJUKSB7XHJcbiAgICAgIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcclxuICAgICAgICBvcmRpbmFsKGkgKyAxKVxyXG4gICAgICB9IHlpZWxkIHRvIGJlIHRvIGEgcGFyc2VyOyBmb3VuZCAke3N0cmluZ2lmeSh2KX1gKVxyXG4gICAgfVxyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHZhbHVlKG5leHQpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCByZXN1bHQuZXJyb3JzKVxyXG4gICAgfVxyXG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXHJcbiAgICBpKytcclxuICB9XHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcclxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxyXG4gKiBwcm92aWRpbmcgdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmXHJcbiAqIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLCBpdFxyXG4gKiBzdWNjZWVkcyBldmVuIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lc24ndCBzdWNjZWVkIGV2ZW4gb25jZS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXHJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXHJcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtYW55ID0gcCA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGFzc2VydFBhcnNlcignbWFueScsIHApXHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcclxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxyXG4gKiBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLCB0aGVcclxuICogcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuXHJcbiAqIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIG9uZSBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxyXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdtYW55MScsIHApXHJcbiAgY29uc3QgW3R1cGxlLCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiB0dXBsZVxyXG5cclxuICBsZXQgbmV4dCA9IG5leHRTdGF0ZVxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICAgIGlmIChuZXh0LmluZGV4ID49IG5leHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXHJcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seVxyXG4gKiBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSxcclxuICogaXQgc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdza2lwTWFueScsIHApXHJcbiAgbGV0IG5leHQgPSBzdGF0ZVxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZVxyXG5cclxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcbiAgICBpZiAobmV4dC5pbmRleCA+PSBuZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcclxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdFxyXG4gKiBzdWNjZWVkIGF0IGxlYXN0IG9uY2UsIG9yIHRoZSByZXR1cm5lZCBwYXJzZXIgd2lsbCBmYWlsLiBPdGhlcndpc2UsXHJcbiAqIHRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0XHJcbiAqIHdoZW4gaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXHJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSBwID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgYXNzZXJ0UGFyc2VyKCdza2lwTWFueTEnLCBwKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG4gICAgaWYgKG5leHQuaW5kZXggPj0gbmV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXHJcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcclxuICogY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvIHRoZSBvbmx5IHdheSBmb3IgdGhpcyBwYXJzZXJcclxuICogdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvIGZhaWwgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBCeSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBCeScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBCeScsIHNlcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcywgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcclxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4uIFRoZVxyXG4gKiBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2Ugb3IgYSBub24tZmF0YWwgZmFpbHVyZVxyXG4gKiB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHkgZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnNcclxuICogZmFpbHMgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignc2VwQnkxJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHNlcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwQnkxJykpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWVzLCBpbmRleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxyXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcclxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvXHJcbiAqIHRoZSBvbmx5IHdheSBmb3IgdGhpcyBwYXJzZXIgdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvXHJcbiAqIGZhaWwgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBFbmRCeSA9IChwLCBzZXApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeScsIHNlcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgW10pXHJcblxyXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0U3RhdGUxLCByZXN1bHQxXV0gPSBkdXAoc2VwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcclxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5MiwgW25leHRTdGF0ZTIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHRTdGF0ZTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcclxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgaWYgKG5leHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeScpKVxyXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgY29uc3QgW3NlcE5leHQsIF9dID0gc2VwKHsgLi4ubmV4dCwgaW5kZXggfSlcclxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXHJcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuIGFuZFxyXG4gKiBvcHRpb25hbGx5IGF0IHRoZSBlbmQuIFRoZSBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2VcclxuICogb3IgYSBub24tZmF0YWwgZmFpbHVyZSB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHlcclxuICogZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cclxuICpcclxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcclxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxyXG4gKiBhcmUgZGlzY2FyZGVkLlxyXG4gKlxyXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXHJcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxyXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cclxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXHJcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcclxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgc2VwKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignc2VwRW5kQnkxJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHNlcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGxldCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuXHJcbiAgICBjb25zdCBbcmVwbHkxLCBbbmV4dFN0YXRlMSwgcmVzdWx0MV1dID0gZHVwKHNlcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXHJcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseTIsIFtuZXh0U3RhdGUyLCByZXN1bHQyXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0U3RhdGUyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGlmIChuZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnkxJykpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxyXG4gIH1cclxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5uZXh0LCBpbmRleCB9KVxyXG4gIHJldHVybiBvayhzZXBOZXh0LCB2YWx1ZXMpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsXHJcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cclxuICogZmFpbHMsIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWw7IGlmIGlucHV0IGlzIGNvbnN1bWVkIGJlZm9yZSBvclxyXG4gKiBkdXJpbmcgdGhhdCBmYWlsdXJlLCB0aGUgZmFpbHVyZSB3aWxsIGJlIGZhdGFsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBhcHBseSB0aGUgcGFyc2VyLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxyXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNvdW50ID0gKHAsIG4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdjb3VudCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0TnVtYmVyKCdjb3VudCcsIG4sIG9yZGluYWxOdW1iZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBpbmRleCA9IHN0YXRlLmluZGV4XHJcbiAgY29uc3QgdmFsdWVzID0gW11cclxuICBsZXQgbmV4dCA9IHN0YXRlXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xyXG4gICAgY29uc3QgW25leHRTdGF0ZSwgcmVzdWx0XSA9IHAobmV4dClcclxuICAgIG5leHQgPSBuZXh0U3RhdGVcclxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xyXG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChuZXh0LmluZGV4ICE9PSBpbmRleCwgbmV4dCwgcmVzdWx0LmVycm9ycylcclxuICAgIH1cclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lc1xyXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XHJcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xyXG4gKiBhcHBsaWVkICpmaXJzdCosIHNvIGl0J3MgZmluZSB0byBoYXZlIHRoZSB0d28gcGFyc2VycyBvdmVybGFwLiBGb3JcclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcclxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXHJcbiAqIGFueSwgbGV0dGVyKWAsIHdoaWNoIHdpbGwgbmV2ZXIgc3VjY2VlZCBiZWN1YXNlIHRoZSBgYW55YCBpcyBhcHBsaWVkXHJcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXHJcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxyXG4gKlxyXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsIHRoZSBvdmVyYWxsXHJcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcclxuICogZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsIGVycm9yIGZvciB0aGVcclxuICogb3ZlcmFsbCBwYXJzZXIuXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXHJcbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXHJcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBtYW55VGlsbCA9IChwLCBlbmQpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxyXG4gICAgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbCcsIGVuZCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGluZGV4ID0gc3RhdGUuaW5kZXhcclxuICBjb25zdCB2YWx1ZXMgPSBbXVxyXG4gIGxldCBuZXh0ID0gc3RhdGVcclxuXHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIGNvbnN0IFtyZXBseTEsIFtuZXh0MSwgcmVzdWx0MV1dID0gZHVwKGVuZChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxyXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBPaykgYnJlYWtcclxuXHJcbiAgICBjb25zdCBbcmVwbHkyLCBbbmV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKG5leHQpKVxyXG4gICAgbmV4dCA9IG5leHQyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXHJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSB7XHJcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKFxyXG4gICAgICAgIG5leHQuaW5kZXggIT09IGluZGV4LCBuZXh0LCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpLFxyXG4gICAgICApXHJcbiAgICB9XHJcbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlcylcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxyXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xyXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cclxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXHJcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhc3NvY2wgPSAocCwgb3AsIHgpID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdhc3NvY2wnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2NsJywgb3AsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxyXG4gIH1cclxuICBjb25zdCBbcmVwbHksIFtuZXh0U3RhdGUsIHJlc3VsdF1dID0gZHVwKHAoc3RhdGUpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gb2sobmV4dFN0YXRlLCB4KVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxyXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xyXG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcclxuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxyXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcclxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXHJcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcclxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcclxuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFzc29jbDEgPSAocCwgb3ApID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkge1xyXG4gICAgYXNzZXJ0UGFyc2VyKCdhc3NvY2wxJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jbDEnLCBvcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHRTdGF0ZSwgcmVzdWx0XV0gPSBkdXAocChzdGF0ZSkpXHJcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBjb25zdCBvcHMgPSBbXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dG9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dHBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cclxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxyXG4gIH1cclxuICByZXR1cm4gb2sobmV4dCwgdmFsdWUsIGluZGV4KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcclxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0XHJcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xyXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXHJcbiAqXHJcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxyXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xyXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cclxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxyXG4gKlxyXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxyXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cclxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxyXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NyID0gKHAsIG9wLCB4KSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2NyJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jcicsIG9wLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHRTdGF0ZSwgeClcclxuXHJcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cclxuICBjb25zdCBvcHMgPSBbXVxyXG4gIGxldCBuZXh0ID0gbmV4dFN0YXRlXHJcbiAgbGV0IGluZGV4ID0gbmV4dC5pbmRleFxyXG5cclxuICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgY29uc3QgW3JlcGx5b3AsIFtuZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dG9wXHJcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xyXG5cclxuICAgIGNvbnN0IFtyZXBseXAsIFtuZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAobmV4dCkpXHJcbiAgICBuZXh0ID0gbmV4dHBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcclxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXHJcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxyXG4gICAgaW5kZXggPSBuZXh0LmluZGV4XHJcbiAgfVxyXG5cclxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXHJcbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcclxuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXHJcbiAgfVxyXG4gIHJldHVybiBvayhuZXh0LCB2YWx1ZSwgaW5kZXgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXHJcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxyXG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cclxuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxyXG4gKlxyXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIGVpdGhlciBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzXHJcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcclxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXHJcbiAqIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cclxuICpcclxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cclxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXHJcbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcclxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xyXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XHJcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xyXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYXNzb2NyMSA9IChwLCBvcCkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRQYXJzZXIoJ2Fzc29jcjEnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcclxuICAgIGFzc2VydFBhcnNlcignYXNzb2NyMScsIG9wLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dFN0YXRlLCByZXN1bHRdXSA9IGR1cChwKHN0YXRlKSlcclxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxyXG5cclxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxyXG4gIGNvbnN0IG9wcyA9IFtdXHJcbiAgbGV0IG5leHQgPSBuZXh0U3RhdGVcclxuICBsZXQgaW5kZXggPSBuZXh0LmluZGV4XHJcblxyXG4gIHdoaWxlICh0cnVlKSB7XHJcbiAgICBjb25zdCBbcmVwbHlvcCwgW25leHRvcCwgcmVzdWx0b3BdXSA9IGR1cChvcChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0b3BcclxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxyXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXHJcblxyXG4gICAgY29uc3QgW3JlcGx5cCwgW25leHRwLCByZXN1bHRwXV0gPSBkdXAocChuZXh0KSlcclxuICAgIG5leHQgPSBuZXh0cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxyXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcclxuXHJcbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcclxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXHJcbiAgICBpbmRleCA9IG5leHQuaW5kZXhcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cclxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xyXG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcclxuICB9XHJcbiAgcmV0dXJuIG9rKG5leHQsIHZhbHVlLCBpbmRleClcclxufSlcclxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IGZvcm1hdEVycm9ycyB9IGZyb20gJy4vZXJyb3InXHJcbmltcG9ydCB7IHN0cmluZ1RvVmlldywgdHJhY2sgfSBmcm9tICcuL3V0aWwnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvci5qcycpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBvbmUgb2YgdGhlIHR5cGVzXHJcbiAqIG9mIHR5cGVkIGFycmF5cy5cclxuICpcclxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheS5cclxuICovXHJcbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xyXG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDE2QXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDMyQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XHJcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDE2QXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MzJBcnJheVxyXG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcclxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBIHN5bWJvbCByZXByZXNlbnRpbmcgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBwYXJzaW5nIG9wZXJhdGlvbi5cclxuICogQGVudW0ge3N5bWJvbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBTdGF0dXMgPSB7XHJcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xyXG4gIE9rOiBTeW1ib2woJ29rJyksXHJcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cclxuICBFcnJvcjogU3ltYm9sKCdlcnJvcicpLFxyXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgYW5kIGNvbnN1bWVkIGlucHV0LiAqL1xyXG4gIEZhdGFsOiBTeW1ib2woJ2ZhdGFsJyksXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgY3VycmVudCBzdGF0ZSBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHRcclxuICogYW5kIGEgcG9pbnRlciB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3aXRoaW4gaXQuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFN0YXRlXHJcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IHdoZXJlIHRoZVxyXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxyXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBIHJlc3VsdCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBzdWNjZXNzZnVsIG9yIG5vdC4gVGhpcyBpc1xyXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXHJcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XHJcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcclxuICogICAgIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkXHJcbiAqICAgICBkdXJpbmcgYW4gdW5zdWNjZXNzZnVsIHBhcnNlLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBAdHlwZWRlZiB7KFxyXG4gKiAgIFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fFxyXG4gKiAgIEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5XHJcbiAqICl9IFR5cGVkQXJyYXlcclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgcGFyc2VyIHN0YXRlLiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGEgbmV3XHJcbiAqIHN0YXRlIGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgcGFyc2luZywgaW4gdGhlIGBwYXJzZWAgZnVuY3Rpb24uIEFueVxyXG4gKiBmdXJ0aGVyIHN0YXRlcyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBpbml0aWFsIHN0YXRlIHVzaW5nIHtAbGluayBva30sXHJcbiAqIHtAbGluayBlcnJvcn0sIG9yIHtAbGluayBmYXRhbH0uXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XHJcbiAqICAgICB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7U3RhdGV9IEFuIGVtcHR5IHBhcnNlciBzdGF0ZSBvYmplY3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVN0YXRlKGlucHV0KSB7XHJcbiAgY29uc3QgbWVzc2FnZSA9ICdQYXJzZXIgaW5wdXQgbXVzdCBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSwgYW4gYXJyYXkgJ1xyXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXHJcblxyXG4gIGNvbnN0IHZpZXcgPSAoaW5wdXQgPT4ge1xyXG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcclxuICAgIH1cclxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxyXG4gICAgfVxyXG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcclxuICAgIH1cclxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XHJcbiAgICAgIHJldHVybiBpbnB1dFxyXG4gICAgfVxyXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXHJcbiAgfSkoaW5wdXQpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2aWV3LFxyXG4gICAgaW5kZXg6IDAsXHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcclxuICogc3RhdGUsIHVwZGF0ZXMgaXQgc29tZWhvdyAoZ2VuZXJhbGx5IGJ5IHJlYWRpbmcgYSBjaGFyYWN0ZXIpLCBhbmRcclxuICogcmV0dXJucyB0aGUgdXBkYXRlZCBzdGF0ZS5cclxuICpcclxuICogQGNhbGxiYWNrIFBhcnNlclxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBUaGUgdXBkYXRlZCBzdGF0ZSBhZnRlciB0aGUgcGFyc2VyIGlzXHJcbiAqICAgICBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyIGZ1bmN0aW9uXHJcbiAqIGFuZCByZXR1cm5zIHRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbjsgdGhlIHB1cnBvc2Ugb2YgdGhlIGZhY3RvcnkgaXNcclxuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxyXG4gKlxyXG4gKiBJZiBhc3NlcnRpb25zIGFyZSBlbmFibGVkLCB0aGlzIHdpbGwgbWVhbiB0aGF0IGFueSBwYXJzZXIgY29tYmluYXRvclxyXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xyXG4gKiBmYWN0b3J5IGZ1bmN0aW9uLiBBbnkgb3RoZXIgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLFxyXG4gKiBldmVuIGlmIGl0IGFjY2VwdHMgdGhlIHJpZ2h0IGtpbmQgb2YgYXJndW1lbnQgYW5kIHJldHVybnMgdGhlIHByb3BlclxyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXHJcbiAqIGRvbmUuXHJcbiAqXHJcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXHJcbiAqIHRob3NlIG9yIGFueSBwYXJzZXIgY29tcG9zZWQgZnJvbSB0aG9zZSB3aWxsIHdvcmsgYXV0b21hdGljYWxseS5cclxuICpcclxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbWFrZVBhcnNlciA9IHRyYWNrKGZuID0+IGZuKVxyXG5cclxuLyoqXHJcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIHN1Y2NlZWRlZCwgYXMgd2VsbCBhc1xyXG4gKiBhIGBTdGF0ZWAgcG90ZW50aWFsbHkgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxyXG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcclxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb2soc3RhdGUsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xyXG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aXRob3V0XHJcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIGNvcHkgb2YgYFN0YXRlYC5cclxuICpcclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxyXG4gKiAgICAgd2l0aCB0aGUgc3RhdGUgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxyXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKHN0YXRlLCBlcnJvcnMgPSBbXSwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xyXG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5FcnJvciwgZXJyb3JzIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2hpbGVcclxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgbmV3IGBTdGF0ZWAgd2l0aCBhbiB1cGRhdGVkIGBpbmRleGAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZFxyXG4gKiAgICAgd2l0aCB0aGUgc3RhdGUgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9c3RhdGUuaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZVxyXG4gKiAgICAgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgc3RhdGUgYW5kXHJcbiAqICAgICByZXN1bHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsKHN0YXRlLCBlcnJvcnMgPSBbXSwgaW5kZXggPSBzdGF0ZS5pbmRleCkge1xyXG4gIHJldHVybiBbeyAuLi5zdGF0ZSwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYXRhbCwgZXJyb3JzIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZXIgYXBwbGljYXRvaW4gZmFpbGVkLlxyXG4gKiBXaGV0aGVyIHRoaXMgaXMgYSBmYXRhbCBlcnJvciBvciBub3QgZGVwZW5kcyBvbiB3aGV0aGVyIGB0ZXN0YCBpc1xyXG4gKiBgdHJ1ZWAgKGZhdGFsKSBvciBgZmFsc2VgIChub24tZmF0YWwpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHRlc3QgVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcHJvZHVjZWQgcmVzdWx0XHJcbiAqICAgICByZXByZXNlbnRzIGEgZmF0YWwgZXJyb3IgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cclxuICogQHBhcmFtIHtTdGF0ZX0gc3RhdGUgVGhlIHN0YXRlIHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkXHJcbiAqICAgICB3aXRoIHRoZSBzdGF0ZSBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1zdGF0ZS5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlXHJcbiAqICAgICBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxyXG4gKiBAcmV0dXJucyB7W1N0YXRlLCBSZXN1bHRdfSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzdGF0ZSBhbmRcclxuICogICAgIHJlc3VsdCBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVGYXRhbCh0ZXN0LCBzdGF0ZSwgZXJyb3JzID0gW10sIGluZGV4ID0gc3RhdGUuaW5kZXgpIHtcclxuICByZXR1cm4gW1xyXG4gICAgeyAuLi5zdGF0ZSwgaW5kZXggfSxcclxuICAgIHsgc3RhdHVzOiB0ZXN0ID8gU3RhdHVzLkZhdGFsIDogU3RhdHVzLkVycm9yLCBlcnJvcnMgfSxcclxuICBdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSxcclxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXHJcbiAqIHN0YXRlIHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcclxuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcclxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMge1tTdGF0ZSwgUmVzdWx0XX0gVGhlIGZpbmFsIHN0YXRlIGFmdGVyIGFsbCBwYXJzZXJzIGhhdmVcclxuICogICAgIGJlZW4gYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHBhcnNlciwgaW5wdXQpIHtcclxuICByZXR1cm4gcGFyc2VyKG1ha2VTdGF0ZShpbnB1dCkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW52b2NhdGlvbiBvZiBgcGFyc2VgIHdhcyBzdWNjZXNzZnVsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiAgICAgYHBhcnNlYC5cclxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcGFyc2VyIHN1Y2NlZWRlZCBvciBgZmFsc2VgIGlmIGl0XHJcbiAqICAgICBkaWQgbm90LlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZChyZXBseSkge1xyXG4gIHJldHVybiByZXBseVsxXS5zdGF0dXMgPT09IFN0YXR1cy5Pa1xyXG59XHJcblxyXG4vKipcclxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXHJcbiAqIGRpZCBub3Qgc3VjY2VlZCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cclxuICpcclxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXHJcbiAqIChgc2tpcGAsIGBsb29rQWhlYWRgLCBldGMuKS4gVGhlIHByb3BlciB3YXkgdG8gdGVsbCBpZiBhIHBhcnNlclxyXG4gKiBzdWNjZWVkZWQgaW4gdGhlIGZpcnN0IHBsYWNlIGlzIHRvIHVzZSBgc3VjY2VlZGVkYC5cclxuICpcclxuICogQHBhcmFtIHtbU3RhdGUsIFJlc3VsdF19IHJlcGx5IFRoZSBzdGF0ZS9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnlcclxuICogICAgIGBwYXJzZWAuXHJcbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHZhbHVlIGZyb20gdGhlIHBhcnNlIGlmIGl0IHdhcyBzdWNjZXNzZnVsLFxyXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VzcyhyZXBseSkge1xyXG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiBhbiB1bnN1Y2Nlc3NmdWwgaW52b2NhdGlvbiBvZiBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyIHdhcyBhY3R1YWxseVxyXG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gcmVwbHkgVGhlIHN0YXRlL3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieVxyXG4gKiAgICAgYHBhcnNlYC5cclxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxyXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcclxuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMoLi4ucmVwbHkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBSZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWUgaWYgdGhlIHBhcnNlclxyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXHJcbiAqIGl0IGZhaWxzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcclxuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcclxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxyXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxyXG4gKiAgICAgdGV4dC5cclxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxyXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgcmVzdWx0XSA9IHBhcnNlcihtYWtlU3RhdGUoaW5wdXQpKVxyXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcclxuICAgIHJldHVybiByZXN1bHQudmFsdWVcclxuICB9XHJcbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhzdGF0ZSwgcmVzdWx0KSlcclxufVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHtcclxuICBjaGFyTGVuZ3RoLFxyXG4gIGNvbW1hU2VwYXJhdGUsXHJcbiAgbmV4dENoYXJXaWR0aCxcclxuICB2aWV3VG9TdHJpbmcsXHJcbn0gZnJvbSAnLi91dGlsJ1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlN0YXRlfSBTdGF0ZSAqL1xyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cclxuXHJcbmNvbnN0IHRhYiA9IC9cXHQvZ3VcclxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcclxuXHJcbi8qKlxyXG4gKiBBIHN5bWJvbCBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cclxuICogQGVudW0ge3N5bWJvbH1cclxuICovXHJcbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XHJcbiAgLyoqXHJcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxyXG4gICAqIG1ham9yaXR5IG9mIHBhcnNlcnMuXHJcbiAgICovXHJcbiAgRXhwZWN0ZWQ6IFN5bWJvbCgnZXhwZWN0ZWQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxyXG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cclxuICAgKi9cclxuICBVbmV4cGVjdGVkOiBTeW1ib2woJ3VuZXhwZWN0ZWQnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVHlwaWNhbGx5IHByb2R1Y2VkXHJcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cclxuICAgKi9cclxuICBHZW5lcmljOiBTeW1ib2woJ2dlbmVyaWMnKSxcclxuICAvKipcclxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xyXG4gICAqIGdlbmVyYWxseSB1c2VkIGZvciBhbiBlcnJvciB0aGF0IGNhdXNlZCBiYWNrdHJhY2tpbmcsIHdoZXJlIHRoZVxyXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXHJcbiAgICovXHJcbiAgTmVzdGVkOiBTeW1ib2woJ25lc3RlZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxyXG4gICAqIG1lc3NhZ2UuIFRoaXMgaXMgcHJvZHVjZWQgc3BlY2lmaWNhbGx5IGJ5IHRoZSBgY29tcG91bmRgIHBhcnNlci5cclxuICAgKi9cclxuICBDb21wb3VuZDogU3ltYm9sKCdjb21wb3VuZCcpLFxyXG4gIC8qKlxyXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXHJcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cclxuICAgKi9cclxuICBPdGhlcjogU3ltYm9sKCdvdGhlcicpLFxyXG59XHJcblxyXG4vKipcclxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxyXG4gKiB0byBhIHBhcnRpY3VsYXIgaW5kZXggb3IgbmVzdGVkL2NvbXBvdW5kIGVycm9ycyB0aGF0IHBvaW50IGJhY2sgdG9cclxuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cclxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgYXQgdGhlIGxvY2F0aW9uIHJlZmVycmVkIHRvIGJ5IHRoZSBjdXJyZW50XHJcbiAqIHN0YXRlLiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXHJcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXHJcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IHN0YXRlLiBUaGUgbW9zdCB0eXBpY2FsIHJlYXNvbiBmb3IgdGhpcyBoYXBwZW5pbmdcclxuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XHJcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cclxuICogZnJvbSB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGJhY2t0cmFja2luZyBpbiB0aGUgZmlyc3QgcGxhY2UuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXHJcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXHJcbiAqIEBwcm9wZXJ0eSB7U3RhdGV9IHN0YXRlIFRoZSBzdGF0ZSBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb20gdGhlXHJcbiAqICAgICBjdXJyZW50IHN0YXRlLlxyXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcclxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgc3RhdGVgLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBBIG5lc3RlZCBlcnJvciB0aGF0IGhhcyBpdHMgb3duIGxhYmVsLiBUaGlzIGlzIHNpbXBseSBmb3IgcHJvZHVjaW5nXHJcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxyXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcclxuICogICAgIGBFcnJvclR5cGUuQ29tcG91bmRgLlxyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcclxuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXHJcbiAqICAgICB1bmRlciB0aGlzIGNvbXBvdW5kIGVycm9yLlxyXG4gKiBAcHJvcGVydHkge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWwgZXJyb3JcclxuICogICAgIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tIHRoZVxyXG4gKiAgICAgY3VycmVudCBzdGF0ZS5cclxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYHN0YXRlYC5cclxuICovXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxyXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxyXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXHJcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xyXG4gKiAgICAgbm90IGV4cGVjdGVkLlxyXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xyXG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcclxuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcclxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cclxuICogQHJldHVybnMge0Vycm9yTWVzc2FnZX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcclxuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcclxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXHJcbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XHJcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxyXG4gKiBzdGF0ZSBpbmZvcm1hdGlvbi4gSWYgdGhlIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWRcclxuICogZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3Igd2lsbCBub3RcclxuICogYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBuZXN0ZWQgZXJyb3JcclxuICogICAgIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxyXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gc3RhdGUuXHJcbiAqIEByZXR1cm5zIHtOZXN0ZWRFcnJvcn0gQSBuZXcgbmVzdGVkIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChzdGF0ZSwgZXJyb3JzKSB7XHJcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcclxuICAgID8gZXJyb3JzXHJcbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5OZXN0ZWQsIHN0YXRlLCBlcnJvcnMgfV1cclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcclxuICogbmVzdGVkIGVycm9yIGRvZXMsIGV4Y2VwdCBpdCBhbHNvIGF0dGFjaGVzIGEgbWVzc2FnZSB0byBpdC4gSWYgdGhlXHJcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xyXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZCBlcnJvclxyXG4gKiAgICAgb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXHJcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBzdGF0ZS5cclxuICogQHJldHVybnMge0NvbXBvdW5kRXJyb3J9IEEgbmV3IGNvbXBvdW5kIGVycm9yLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBzdGF0ZSwgZXJyb3JzKSB7XHJcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcclxuICAgID8gW3tcclxuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxyXG4gICAgICBzdGF0ZTogZXJyb3JzLnN0YXRlLFxyXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXHJcbiAgICAgIGxhYmVsLFxyXG4gICAgfV1cclxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBzdGF0ZSwgZXJyb3JzLCBsYWJlbCB9XVxyXG59XHJcblxyXG4vKipcclxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxyXG4gKlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMSBUaGUgZmlyc3QgYXJyYXkgb2YgZXJyb3JzLlxyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMiBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cclxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXHJcbiAqICAgICB0aGUgZmlyc3QgdHdvIGFycmF5cy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxLCBlcnJvcnMyKSB7XHJcbiAgcmV0dXJuIFsuLi5lcnJvcnMxLCAuLi5lcnJvcnMyXVxyXG59XHJcblxyXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcclxuXHJcbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcclxuXHJcbi8qKlxyXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXHJcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cclxuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXHJcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cclxuICovXHJcblxyXG4vKipcclxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXHJcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XHJcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcclxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxyXG4gKiAgICAgY2hhcmFjdGVyLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxyXG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxyXG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcclxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxyXG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxyXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXHJcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcclxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxyXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcclxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXHJcbiAqL1xyXG5cclxuLyoqXHJcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxyXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxyXG4gKlxyXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cclxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxyXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxyXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxyXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xyXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXHJcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cclxuICovXHJcblxyXG4vKipcclxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxyXG4gICpcclxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxyXG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXHJcbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cclxuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxyXG4gICogICAgIHRhYiBzaXplLlxyXG4gICovXHJcblxyXG4vKipcclxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXHJcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcclxuICogZGVzaXJlZC5cclxuICpcclxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxyXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcclxuICogICAgIGVycm9yIG9jY3VycmVkLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXHJcbiAqICAgICBzdG9wLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxyXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXHJcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLyoqXHJcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcclxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xyXG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxyXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcclxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxyXG4gKlxyXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXHJcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cclxuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXHJcbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xyXG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxyXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xyXG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XHJcbiAgfVxyXG5cclxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xyXG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xyXG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxyXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xyXG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cclxuICB9XHJcblxyXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcclxuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXHJcblxyXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxyXG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xyXG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcclxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcclxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcclxuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cclxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XHJcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXHJcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXHJcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXHJcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXHJcbiAqXHJcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXHJcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxyXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXHJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXHJcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcclxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcclxuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcclxuICBsZXQgc3RhcnQgPSAwXHJcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxyXG4gIGxldCBpID0gMFxyXG5cclxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xyXG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcclxuICAgIGlmIChuZXdsaW5lKSB7XHJcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XHJcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XHJcbiAgICAgIH1cclxuICAgICAgbGluZW5vKytcclxuICAgICAgc3RhcnQgPSBpICsgc2tpcFxyXG4gICAgfVxyXG4gICAgaSArPSBza2lwXHJcbiAgfVxyXG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcclxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cclxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxyXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxyXG4gKlxyXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXHJcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cclxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXHJcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cclxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcclxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XHJcbiAgbGV0IGNoYXJJbmRleCA9IDBcclxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcclxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XHJcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXHJcbiAgICBjaGFySW5kZXgrK1xyXG4gIH1cclxuICByZXR1cm4gY2hhckluZGV4XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcclxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXHJcbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXHJcbiAqXHJcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcclxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxyXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcclxuICogY2hhcmFjdGVyIGluZGV4LlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcclxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXHJcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxyXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcclxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxyXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xyXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XHJcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXHJcbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcclxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcclxuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcclxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcclxuICB9XHJcblxyXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxyXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XHJcbiAgbGV0IG9mZnNldCA9IDBcclxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXHJcbiAgbGV0IHJlc3VsdCA9IGxpbmVcclxuXHJcbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XHJcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XHJcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxyXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcclxuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcclxuICAgIH1cclxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxyXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXHJcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXHJcbiAgfVxyXG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cclxufVxyXG5cclxuLyoqXHJcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXHJcbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXHJcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxyXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXHJcbiAqIG1hcmtzLlxyXG4gKlxyXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxyXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcclxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcclxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXHJcbiAqXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcclxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cclxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XHJcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcclxuICBjb25zdCBtYXRjaGVzID0gW11cclxuXHJcbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcclxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcclxuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcclxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXHJcbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXHJcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcclxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cclxuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cclxuICpcclxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXHJcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cclxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcclxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcclxuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXHJcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xyXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxyXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcclxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcclxuICogICAgIGNvbHVtbi5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XHJcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcclxuXHJcbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXHJcbiAgLy8gd2l0aCB0aGUgY2FyZXQgcG9zaXRpb25lZCBiZWxvdyBpdC5cclxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XHJcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcclxuICB9XHJcblxyXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XHJcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxyXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cclxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXHJcbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xyXG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XHJcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxyXG4gICAgfV5gXHJcbiAgfVxyXG5cclxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XHJcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxyXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcclxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcclxuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXHJcbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xyXG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcclxuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXHJcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxyXG4gIH1cclxuXHJcbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcclxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XHJcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcclxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXHJcbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxyXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXHJcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xyXG4gIHJldHVybiBgJHtzcH0uLi4ke1xyXG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcclxuICB9Li4uXFxuJHtzcH0ke1xyXG4gICAgJyAnLnJlcGVhdChNYXRoLmNlaWwobWF4V2lkdGggLyAyKSlcclxuICB9XmBcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxyXG4gKiAgICAgc3RvcHMgbGF5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXHJcbiAqICAgICBtZXNzYWdlLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxyXG4gKi9cclxuZnVuY3Rpb24gZm9ybWF0TmVzdGVkKG5lc3RlZHMsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpIHtcclxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxyXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcclxuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IG4uc3RhdGVcclxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxyXG4gICAgICA/IGBcXG4ke3NwfSR7bi5sYWJlbH0gY291bGQgbm90IGJlIHBhcnNlZCBiZWNhdXNlOlxcblxcbmBcclxuICAgICAgOiBgXFxuJHtzcH1UaGUgcGFyc2VyIGJhY2t0cmFja2VkIGFmdGVyOlxcblxcbmBcclxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxyXG4gIH0pXHJcbiAgcmV0dXJuIG5lc3RlZE1zZ3Muam9pbignJylcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHN0cmluZyB0aGF0IGlzIHN1cHBvc2VkIHRvIGhhdmUgYSBjZXJ0YWluXHJcbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgbmV3bGluZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgYnV0IHdpdGggYGNvdW50YCBuZXdsaW5lcyBhdCB0aGVcclxuICogICAgIGVuZC5cclxuICovXHJcbmZ1bmN0aW9uIGVuc3VyZU5ld2xpbmVzKHRleHQsIGNvdW50KSB7XHJcbiAgbGV0IHJlc3VsdCA9IHRleHRcclxuICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcclxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpXHJcbiAgfVxyXG4gIHJldHVybiByZXN1bHQgKyAnXFxuJy5yZXBlYXQoY291bnQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxyXG4gKlxyXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwYXJ0czpcclxuICpcclxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXHJcbiAqICAgIHRoZSBlcnJvciBvY2N1cnJlZC5cclxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXHJcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXHJcbiAqICAgIGlucHV0IGxpbmUgb3IsIGlmIHRoYXQncyB0b28gbG9uZywgYSBwb3J0aW9uIG9mIHRoZSBpbnB1dCBsaW5lXHJcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXHJcbiAqICAgIGluIHRoZSBmaXJzdCBsaW5lIHRoYXQgc2hvd3MgZXhhY3RseSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cclxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXHJcbiAqICAgIGNvbW1tYXMgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBudW1iZXIgb2YgbWVzc2FnZXMuXHJcbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxyXG4gKlxyXG4gKiBUaGUgcG9zaXRpb24gb2YgdGhlIGVycm9yIGlzIGluZGljYXRlZCBieSB0aGUgYGluZGV4YCBwYXJhbWV0ZXIsXHJcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcclxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xyXG4gKiBmbGF0IGFycmF5IG9mIGJ5dGVzIHRha2VzIHRoZSBmb2xsb3dpbmcgaW50byBhY2NvdW50OlxyXG4gKlxyXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cclxuICogICBiZSAxLCAyLCAzLCBvciA0IGJ5dGVzIGxvbmcpXHJcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXHJcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcclxuICogICBgdGFiU2l6ZWAgcGFyYW1ldGVyXHJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcclxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcclxuICogICBtYXJrcywgdW1sYXV0cyBvdmVyIExhdGluIGNoYXJhY3RlcnMsIGV0Yy4pXHJcbiAqXHJcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXHJcbiAqXHJcbiAqICMjIyBFeGFtcGxlXHJcbiAqXHJcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzIG9mIGNvZGUgdXNlcyBgc3RyaW5nVG9WaWV3YCwgYW4gaW50ZXJuYWxcclxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXHJcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcclxuICogdXNhZ2UsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBrbm93LlxyXG4gKlxyXG4gKiBgYGBcclxuICogY29uc3QgdmlldyA9IHN0cmluZ1RvVmlldygnXFx0T25vbWF0b3BvZWlhXFx0XFx0XFx0XFx04LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHJylcclxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcclxuICogYGBgXHJcbiAqXHJcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcclxuICogcHJvZHVjZWQ6XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxyXG4gKlxyXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXHJcbiAqIEV4cGVjdGVkIGEgZGlnaXRcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRvIGJlIGZvcm1hdHRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbiB0aGUgdmlldyB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxyXG4gKiAgICAgc3RvcHMgbGF5LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXHJcbiAqICAgICBpbmRlbnRlZC4gVGhpcyBzaG91bGQgYmUgMCBhbmQgaW5jcmVhc2VkIG9ubHkgZm9yIG5lc3RlZCBlcnJvcnMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcclxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcclxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxyXG5cclxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXHJcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcclxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcclxuXHJcbiAgY29uc3QgcG9zaXRpb24gPSBgJHtzcH1QYXJzZSBlcnJvciBhdCAobGluZSAke2xpbmVub30sIGNvbHVtbiAke2NvbG5vfSk6YFxyXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXHJcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxyXG4gIGNvbnN0IHVuZXhwZWN0ZWQgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuVW5leHBlY3RlZClcclxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXHJcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcclxuICAgICAgLm1hcChlcnJvciA9PiBlcnJvci5sYWJlbCksXHJcbiAgKVxyXG5cclxuICBjb25zdCBuZXN0ZWQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpXHJcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcclxuXHJcbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYCR7c3B9VW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubGFiZWx9XFxuYCA6ICcnXHJcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcclxuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcclxuXHJcbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcclxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcclxuXHJcbiAgY29uc3QgdW5rbm93bk1zZyA9IGVycm9ycy5sZW5ndGggPT09IDAgPyBgJHtzcH1Vbmtub3duIGVycm9yKHMpXFxuYCA6ICcnXHJcblxyXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcclxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxyXG4gICAgICArIGAke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXHJcbiAgICAyLFxyXG4gIClcclxufVxyXG5cclxuLy8gI2VuZHJlZ2lvblxyXG5cclxuLyoqXHJcbiAqIEFjY2VwdHMgYSBwYXJzZXIgc3RhdGUgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cclxuICpcclxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXHJcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcclxuICogZGVmYXVsdHMgdG8gOCkgYW5kIG1heCB3aWR0aCAoZm9yIHRoZSBlcnJvciBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHNcclxuICogdG8gNzIpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgcGFyc2VyJ3Mgc3RhdGUgd2hlbiB0aGUgZXJyb3IgaGFwcGVuZWQuXHJcbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBwcm9kdWNlZCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcclxuICogICAgIHRhYnMgc3RvcC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcclxuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcclxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cclxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXHJcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKFxyXG4gIHN0YXRlLCByZXN1bHQsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBmb3JtYXR0ZXIgPSBmb3JtYXQsXHJcbikge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBzdGF0ZS4gVGhlXHJcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxyXG4gKiB0aGUgMS1iYXNlZCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aGUgYnl0ZSBhdCB0aGUgc3RhdGUncyBpbmRleFxyXG4gKiB3aXRoaW4gdGhlIHN0YXRlJ3MgZGF0YSB2aWV3LlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0YXRlfSBzdGF0ZSBUaGUgc3RhdGUgd2hvc2UgY3VycmVudCBwb3NpdGlvbiBpcyBiZWluZ1xyXG4gKiAgICAgY2FsY3VsYXRlZC5cclxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcclxuICogICAgIHRhYnMgc3RvcC4gVGhlIGN1cnJlbnQgcG9zaXRpb24ncyBjb2x1bW4gbnVtYmVyIGlzIGFkanVzdGVkIGJhc2VkXHJcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxyXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcclxuICogICAgIHByb3BlcnRpZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oc3RhdGUsIHRhYlNpemUgPSA4KSB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcclxuXHJcbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxyXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXHJcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxyXG5cclxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyBQQVJTRVJTXHJcblxyXG5leHBvcnQge1xyXG4gIGFscGhhLFxyXG4gIGFueSxcclxuICBhbnlPZixcclxuICBjaGFyLFxyXG4gIGNoYXJpLFxyXG4gIGRpZ2l0LFxyXG4gIGVvZixcclxuICBoZXgsXHJcbiAgbGV0dGVyLFxyXG4gIGxvd2VyLFxyXG4gIG5vbmVPZixcclxuICBvY3RhbCxcclxuICByYW5nZSxcclxuICBzYXRpc2Z5LFxyXG4gIHNhdGlzZnlMLFxyXG4gIHVwcGVyLFxyXG59IGZyb20gJy4vcGFyc2Vycy9jaGFyJ1xyXG5leHBvcnQge1xyXG4gIGFsd2F5cyxcclxuICBmYWlsLFxyXG4gIGZhaWxGYXRhbGx5LFxyXG4gIGZhaWxVbmV4cGVjdGVkLFxyXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xyXG5leHBvcnQge1xyXG4gIGFscGhhVSxcclxuICBsZXR0ZXJVLFxyXG4gIGxvd2VyVSxcclxuICBuZXdsaW5lLFxyXG4gIG5ld2xpbmVVLFxyXG4gIHJlZ2V4LFxyXG4gIHNwYWNlLFxyXG4gIHNwYWNlVSxcclxuICBzcGFjZXMsXHJcbiAgc3BhY2VzMSxcclxuICBzcGFjZXMxVSxcclxuICBzcGFjZXNVLFxyXG4gIHVwcGVyVSxcclxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXHJcbmV4cG9ydCB7XHJcbiAgYWxsLFxyXG4gIGFueVN0cmluZyxcclxuICBzdHJpbmcsXHJcbiAgc3RyaW5naSxcclxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xyXG5cclxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gQ09NQklOQVRPUlNcclxuXHJcbmV4cG9ydCB7XHJcbiAgYXR0ZW1wdCxcclxuICBibG9ja0IsXHJcbiAgYm90aEIsXHJcbiAgY2hhaW5CLFxyXG4gIGNob2ljZSxcclxuICBjb3VudEIsXHJcbiAgZGVmLFxyXG4gIGxlZnRCLFxyXG4gIG1hbnlUaWxsQixcclxuICBvcHQsXHJcbiAgcmlnaHRCLFxyXG4gIHNlcXVlbmNlQixcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xyXG5leHBvcnQge1xyXG4gIGJldHdlZW4sXHJcbiAgYm90aCxcclxuICBjaGFpbixcclxuICBmaWZ0aCxcclxuICBmaXJzdCxcclxuICBmb3VydGgsXHJcbiAgam9pbixcclxuICBsZWZ0LFxyXG4gIG1hcCxcclxuICBudGgsXHJcbiAgcGlwZSxcclxuICByaWdodCxcclxuICBzZWNvbmQsXHJcbiAgc2tpcCxcclxuICB0aGlyZCxcclxuICB2YWx1ZSxcclxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NoYWluaW5nJ1xyXG5leHBvcnQge1xyXG4gIGZvbGxvd2VkQnksXHJcbiAgZm9sbG93ZWRCeUwsXHJcbiAgbG9va0FoZWFkLFxyXG4gIG5vdEVtcHR5LFxyXG4gIG5vdEZvbGxvd2VkQnksXHJcbiAgbm90Rm9sbG93ZWRCeUwsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jb25kaXRpb25hbCdcclxuZXhwb3J0IHtcclxuICBiYWNrTGFiZWwsXHJcbiAgbGFiZWwsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9tZXNzYWdlJ1xyXG5leHBvcnQge1xyXG4gIGFzc29jbCxcclxuICBhc3NvY2wxLFxyXG4gIGFzc29jcixcclxuICBhc3NvY3IxLFxyXG4gIGJsb2NrLFxyXG4gIGNvdW50LFxyXG4gIG1hbnksXHJcbiAgbWFueTEsXHJcbiAgbWFueVRpbGwsXHJcbiAgc2VwQnksXHJcbiAgc2VwQnkxLFxyXG4gIHNlcEVuZEJ5LFxyXG4gIHNlcEVuZEJ5MSxcclxuICBzZXF1ZW5jZSxcclxuICBza2lwTWFueSxcclxuICBza2lwTWFueTEsXHJcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcclxuXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXHJcblxyXG5leHBvcnQge1xyXG4gIFN0YXR1cyxcclxuICBlcnJvcixcclxuICBmYWlsdXJlLFxyXG4gIGZhdGFsLFxyXG4gIG1ha2VQYXJzZXIsXHJcbiAgbWF5YmVGYXRhbCxcclxuICBvayxcclxuICBwYXJzZSxcclxuICBydW4sXHJcbiAgc3VjY2VlZGVkLFxyXG4gIHN1Y2Nlc3MsXHJcbn0gZnJvbSAnLi9jb3JlJ1xyXG5leHBvcnQge1xyXG4gIEVycm9yVHlwZSxcclxuICBjb21wb3VuZCxcclxuICBleHBlY3RlZCxcclxuICBmb3JtYXRFcnJvcnMsXHJcbiAgZ2VuZXJpYyxcclxuICBnZXRQb3NpdGlvbixcclxuICBtZXJnZSxcclxuICBuZXN0ZWQsXHJcbiAgb3RoZXIsXHJcbiAgdW5leHBlY3RlZCxcclxufSBmcm9tICcuL2Vycm9yJ1xyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xyXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcclxuXHJcbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xyXG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXHJcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxyXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxyXG4gIGFueU9mOiBhcnJheSA9PiAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxyXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXHJcbiAgY2hhcmk6IGMgPT4gcXVvdGUoYyksXHJcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcclxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxyXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxyXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcclxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXHJcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxyXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcclxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcclxuICBuZXdsaW5lVTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcclxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXHJcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXHJcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXHJcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcclxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXNVOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZXMxVTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcclxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxyXG4gIHN0cmluZzogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgc3RyaW5naTogc3RyID0+IHF1b3RlKHN0ciksXHJcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcclxuICB1cHBlclU6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XHJcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxyXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxyXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxyXG4gIGFueU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLmFueU9mKGFycmF5KSksXHJcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcclxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXHJcbiAgY2hhcmk6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyaShjKSksXHJcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxyXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxyXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxyXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxyXG4gIGxldHRlclU6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyVSksXHJcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxyXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxyXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXHJcbiAgbmV3bGluZVU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZVUpLFxyXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcclxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXHJcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcclxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxyXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcclxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcclxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxyXG4gIHNwYWNlc1U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzVSksXHJcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxyXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxyXG4gIHN0cmluZzogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nKHN0cikpLFxyXG4gIHN0cmluZ2k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ2koc3RyKSksXHJcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxyXG4gIHVwcGVyVTogZXhwZWN0ZWQoc3RyaW5ncy51cHBlclUpLFxyXG59XHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQge1xyXG4gIGFzc2VydENoYXIsXHJcbiAgYXNzZXJ0RnVuY3Rpb24sXHJcbiAgYXNzZXJ0U3RyaW5nLFxyXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXHJcbiAgb3JkaW5hbENoYXIsXHJcbiAgb3JkaW5hbEZ1bmN0aW9uLFxyXG4gIG9yZGluYWxTdHJpbmcsXHJcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcclxuaW1wb3J0IHsgZXJyb3IsIG1ha2VQYXJzZXIsIG9rLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcclxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcclxuaW1wb3J0IHsgZHVwLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xyXG5cclxuY29uc3QgeyBPayB9ID0gU3RhdHVzXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyLCBmZWVkcyBpdCB0byBhIGZ1bmN0aW9uLCBhbmRcclxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cclxuICpcclxuICogVGhlcmUgaXNuJ3QgYW55dGhpbmcgaGVyZSB0aGF0IGNvdWxkbid0IGJlIHdyaXR0ZW4gd2l0aFxyXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcclxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXHJcbiAqIGNoYXJhY3RlcnMgdGhhdCBoYXZlIHRvIGJlIHJlYWQgZnJvbSB0aGUgaW5wdXQgdmlldykgdGhhdCBhbGxvdyBpdCB0b1xyXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cclxuICpcclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcclxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXHJcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcclxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cclxuICovXHJcbmNvbnN0IENoYXJQYXJzZXIgPSBmbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXHJcbiAgcmV0dXJuIGZuKG5leHQpID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxyXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFVwb24gZmFpbHVyZSwgdGhpcyBwYXJzZXIgZG9lcyBub3RcclxuICogY29uc3VtZSBpbnB1dC5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcclxuICogICAgIGFsd2F5cyBmYWlsLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcclxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRDaGFyKCdjaGFyJywgYylcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKG5leHQgPT4gYyA9PT0gbmV4dCkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmNoYXIoYykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxyXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0XHJcbiAqIHRoZSBjb21wYXJpc29uIGRvbmUgYnkgdGhpcyBwYXJzZXIgaXMgY2FzZS1pbnNlbnNpdGl2ZS4gVXBvbiBmYWlsdXJlLFxyXG4gKiB0aGlzIHBhcnNlciBkb2VzIG5vdCBjb25zdW1lIGlucHV0LlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxyXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxyXG4gKiAgICAgYWx3YXlzIGZhaWwuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCAob3IgaXRzXHJcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBjaGFyaSA9IGMgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRDaGFyKCdjaGFyaScsIGMpXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihcclxuICAgIHJlYWQgPT4gYy50b0xvd2VyQ2FzZSgpID09PSByZWFkLnRvTG93ZXJDYXNlKCksXHJcbiAgKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcmkoYykpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgcGFzc2VzIGl0IHRvIHRoZVxyXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXHJcbiAqIGBmYWxzZWAsIHRoaXMgcGFyc2VyIGZhaWxzIGFuZCBjb25zdW1lcyBubyBpbnB1dC5cclxuICpcclxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XHJcbiAqIGZlYXNpYmxlIHRvIGhhdmUgaXQgYW5hbHl6ZSB0aGUgZnVuY3Rpb24gdG8gc2VlIHdoYXQgaXQgZXhwZWN0cyB0b1xyXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcclxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXHJcbiAqIGFkZCBhbiBhcHByb3ByaWF0ZSBlcnJvciBtZXNzYWdlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcclxuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxyXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSBmbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4pXHJcbiAgcmV0dXJuIENoYXJQYXJzZXIoZm4pKHN0YXRlKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcclxuICogcHJvdmlkZWQgZnVuY3Rpb24uIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhpcyBwYXJzZXJcclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xyXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQgYW5kIHNpZ25hbHMgYW4gZXJyb3JcclxuICogd2l0aCB0aGUgcHJvdmlkZWQgbWVzc2FnZS5cclxuICpcclxuICogYHNhdGlzZnlMKGZuLCBtZXNzYWdlKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXHJcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbWVzc2FnZSlgLlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxyXG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcclxuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcclxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzYXRpc2Z5TCA9IChmbiwgbWVzc2FnZSkgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSB7XHJcbiAgICBhc3NlcnRGdW5jdGlvbignc2F0aXNmeUwnLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcxc3QnKSlcclxuICAgIGFzc2VydFN0cmluZygnc2F0aXNmeUwnLCBtZXNzYWdlLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcclxuICB9XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWQobWVzc2FnZSkpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyXHJcbiAqIGl0IGlzIGJldHdlZW4gdGhlIHByb3ZpZGVkIHN0YXJ0IGFuZCBlbmQgY2hhcmFjdGVycyAoaW5jbHVzaXZlKS4gSWZcclxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXHJcbiAqIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXHJcbiAqXHJcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcclxuICogbm90LCB0aGUgZnVsbCBzdHJpbmdzIGFyZSBjb21wYXJlZCBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3Rlciwgd2hpY2hcclxuICogbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXHJcbiAqXHJcbiAqIFwiQmV0d2VlblwiIGlzIGRlZmluZWQgYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzLiBUaGlzIGlzIGZpbmUgaW4gbW9zdFxyXG4gKiBjYXNlcywgYnV0IGl0IGNhbiBnZXQgd2VpcmQgd2l0aCBoaWdoZXIgY29kZSBwb2ludHMuIEZvciBleGFtcGxlLFxyXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxyXG4gKiBUaGUgYGhgIHdvdWxkIGluc3RlYWQgYmUgdGhlIFBsYW5jaydzIENvbnN0YW50IGNoYXJhY3Rlciwgd2hpY2ggaXMgaW5cclxuICogYSBjb21wbGV0ZWx5IGRpZmZlcmVudCBwYXJ0IG9mIHRoZSBVbmljb2RlIHNwZWN0cnVtIGFuZCB0aGVyZWZvcmUgaXNcclxuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0IFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGVcclxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBlbmQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2VcclxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XHJcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIHtcclxuICAgIGFzc2VydENoYXIoJ3JhbmdlJywgc3RhcnQsIG9yZGluYWxDaGFyKCcxc3QnKSlcclxuICAgIGFzc2VydENoYXIoJ3JhbmdlJywgZW5kLCBvcmRpbmFsQ2hhcignMm5kJykpXHJcbiAgfVxyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49IHN0YXJ0ICYmIGMgPD0gZW5kXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnJhbmdlKHN0YXJ0LCBlbmQpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgaW5wdXQgY2hhcmFjdGVyIGFuZCB0aGVuIHN1Y2NlZWRzIHdpdGhcclxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGFueSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGVycm9yKHN0YXRlLCBleHBlY3RlZHMuYW55KVxyXG5cclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICByZXR1cm4gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXHJcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxyXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW9mID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXHJcbiAgICA/IG9rKHN0YXRlLCBudWxsKSA6IGVycm9yKHN0YXRlLCBleHBlY3RlZHMuZW9mKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXHJcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcclxuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXHJcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxyXG4gKiB3aWxsIHN1Y2NlZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcclxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIGJlIGFcclxuICogICAgIG1lbWJlciBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xyXG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55T2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZ09yQXJyYXkoJ2FueU9mJywgY2hhcnMpXHJcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gc3RhdGVcclxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcclxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXHJcblxyXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcclxuICAgID8gb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3Ioc3RhdGUsIGV4cGVjdGVkcy5hbnlPZihhcnIpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXHJcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcclxuICogbXVsdGktY2hhcmFjdGVyIHN0cmluZ3MsIHRoZXkgY2Fubm90IG1hdGNoIGFuZCB3aWxsIGVzc2VudGlhbGx5IGJlXHJcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXHJcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXHJcbiAqXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNoYXJzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXlcclxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhXHJcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XHJcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBub25lT2YgPSBjaGFycyA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVPZicsIGNoYXJzKVxyXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IHN0YXRlXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXHJcbiAgY29uc3QgYXJyID0gWy4uLmNoYXJzXVxyXG5cclxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXHJcbiAgICA/IGVycm9yKHN0YXRlLCBleHBlY3RlZHMubm9uZU9mKGFycikpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGRpZ2l0LiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYSBVbmljb2RlIGRlY2ltYWwgZGlnaXQ7IGZvclxyXG4gKiB0aGF0LCB1c2UgYHJlZ2V4KC9cXHB7TmR9LylgLiBUaGlzIHBhcnNlciBzdWNjZWVkcyBvbmx5IGZvciB0aGVcclxuICogbGl0ZXJhbCBjaGFyYWN0ZXJzIGAwLTlgLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmRpZ2l0KVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBoZXhhZGVjaW1hbCBkaWdpdC4gVGhpcyBwYXJzZXIgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGhleCA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xyXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcclxuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmhleClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG9jdGFsID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzcnXHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm9jdGFsKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7IGB1bGV0dGVyYFxyXG4gKiBpcyBhIFVuaWNvZGUgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneicgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubGV0dGVyKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3Rlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUlcclxuICogY2hhcmFjdGVyczsgYHVhbHBoYWAgaXMgYSBVbmljb2RlIGFscGhhbnVtZXJpYyBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGEgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcclxuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXHJcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5hbHBoYSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7XHJcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cclxuICovXHJcbmV4cG9ydCBjb25zdCB1cHBlciA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy51cHBlcilcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcclxuICogYHVsb3dlcmAgaXMgYSBVbmljb2RlIGxldHRlciBwYXJzZXIuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG93ZXIgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubG93ZXIpXHJcbn0pXHJcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cclxuLy9cclxuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXHJcbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXHJcblxyXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG1ha2VQYXJzZXIsIG9rIH0gZnJvbSAna2Vzc2VsL2NvcmUnXHJcbmltcG9ydCB7IGdlbmVyaWMsIHVuZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkXHJcbiAqIHZhbHVlLlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgYmUgdGhlIG5ldyBwYXJzZXIncyByZXN1bHQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4gb2soc3RhdGUsIHgpKVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxyXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBmYWlsID0gbWVzc2FnZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnZmFpbCcsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCBnZW5lcmljKG1lc3NhZ2UpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYVxyXG4gKiBmYXRhbCBlcnJvciwgb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcclxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbEZhdGFsbHkgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nKCdmYWlsRmF0YWxseScsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGZhdGFsKHN0YXRlLCBnZW5lcmljKG1lc3NhZ2UpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcclxuICogdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIHVuZXhwZWN0ZWRcclxuICogICAgIGVycm9yLlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcclxuICogICAgIGVycm9yIG1lc3NhZ2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZmFpbFVuZXhwZWN0ZWQgPSBtZXNzYWdlID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXHJcbiAgaWYgKEFTU0VSVCkgYXNzZXJ0U3RyaW5nKCdmYWlsVW5leHBlY3RlZCcsIG1lc3NhZ2UpXHJcbiAgcmV0dXJuIGVycm9yKHN0YXRlLCB1bmV4cGVjdGVkKG1lc3NhZ2UpKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXHJcbmltcG9ydCB7IGR1cCwgc3RyaW5nVG9WaWV3LCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXHJcbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xyXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxyXG5cclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3VcclxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XHJcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cclxuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxyXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXHJcbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xyXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xyXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3VcclxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXHJcbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xyXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXHJcbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxyXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXHJcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xyXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XHJcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXHJcbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xyXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cclxuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlc1xyXG4gKiBpdCBhcyBmYXIgYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxyXG4gKlxyXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXHJcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXHJcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxyXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXHJcbiAqXHJcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcclxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXHJcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxyXG4gKi9cclxuY29uc3QgUmVnZXhQYXJzZXIgPSByZSA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHJlc3QgPSB2aWV3VG9TdHJpbmcoaW5kZXgsIHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4LCB2aWV3KVxyXG5cclxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXHJcbiAgcmV0dXJuIG1hdGNoXHJcbiAgICA/IG9rKHN0YXRlLCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXHJcbiAgICA6IGVycm9yKHN0YXRlKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgc3VwcGxpZWQgcmVndWxhclxyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXHJcbiAqIG1hdGNoLCBhbnkgbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0XHJcbiAqIGlzIGNvbnN1bWVkIHVwb24gZmFpbHVyZS5cclxuICpcclxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcclxuICogaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRob3V0IGZsYWdzLlxyXG4gKlxyXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxyXG4gKiBmbGFnIGlzIGluY2x1ZGVkLCBpdCdsbCBmdW5jdGlvbmFsbHkgYmUgaWdub3JlZCBhcyBvbmx5IHRoZSBmaXJzdFxyXG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXHJcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cclxuICpcclxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxyXG4gKiAgICAgdGhlIGlucHV0IHRleHQuIElmIHRoaXMgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgY29udmVydGVkIGludG9cclxuICogICAgIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXHJcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHJlZ2V4ID0gcmUgPT4gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuICBpZiAoQVNTRVJUKSBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByZSlcclxuXHJcbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xyXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXHJcblxyXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XHJcbiAgY29uc3QgcmVhbmNob3IgPSBzb3VyY2VbMF0gIT09ICdeJ1xyXG4gIGlmIChyZWFuY2hvcikge1xyXG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXHJcbiAgICByZWdleCA9IG5ldyBSZWdFeHAobmV3U291cmNlLCBmbGFncylcclxuICB9XHJcblxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlZ2V4KShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMucmVnZXgocmVnZXgpKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxyXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMZXR0ZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5sZXR0ZXJVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcclxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcclxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYWxwaGFVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVBbHBoYSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFscGhhVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcclxuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXHJcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHVwcGVyVSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXBwZXIpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy51cHBlclUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxyXG4gKiBpdCBpcyBhIGxvd2VyY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzIGxvd2VyY2FzZSBpZiBpdCBoYXMgdGhlXHJcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgbG93ZXJVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVMb3dlcikoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmxvd2VyVSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxyXG4gKiByZWNvZ25pemVzIGFyZSBzcGFjZSwgdGFiLCBhbmQgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChgXFxyYCwgYFxcbmAsXHJcbiAqIG9yIGBcXHJcXG5gKS5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZSA9IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlU3BhY2UpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXHJcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxyXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxyXG4gKlxyXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXHJcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVc3BhY2UpKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zcGFjZVUpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXHJcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxyXG4gKiB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGUgaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGVcclxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXMgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbbmV4dCwgX10gPSBSZWdleFBhcnNlcihyZVNwYWNlcykoc3RhdGUpXHJcbiAgcmV0dXJuIG9rKG5leHQsIG51bGwpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXHJcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xyXG4gKiB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLCB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGVcclxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcclxuICogcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXNVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShzdGF0ZSlcclxuICByZXR1cm4gb2sobmV4dCwgbnVsbClcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxyXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbFxyXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxyXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBzcGFjZXMxID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVNwYWNlczEpKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnNwYWNlczEpXHJcbn0pXHJcblxyXG4vKipcclxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcclxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXHJcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXHJcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IFJlZ2V4UGFyc2VyKHJlVXNwYWNlczEpKHN0YXRlKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKG5leHQsIG51bGwpIDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnNwYWNlczFVKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xyXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcclxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXHJcbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXHJcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxyXG4gKlxyXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXHJcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcclxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxyXG4gKlxyXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxyXG4gKiBgXFxyXFxuYC5cclxuICovXHJcbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVOZXdsaW5lKShzdGF0ZSkpXHJcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMubmV3bGluZSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcclxuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXHJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxyXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcclxuICpcclxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxyXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXHJcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcclxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcclxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXHJcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXHJcbiAqXHJcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcclxuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXHJcbiAqXHJcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXHJcbiAqIGBcXHJcXG5gLlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gbWFrZVBhcnNlcihzdGF0ZSA9PiB7XHJcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVVbmV3bGluZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLm5ld2xpbmVVKVxyXG59KVxyXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXHJcbi8vXHJcbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxyXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxyXG5cclxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xyXG5pbXBvcnQgeyBlcnJvciwgbWFrZVBhcnNlciwgb2ssIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xyXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXHJcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgbmV4dENoYXJzLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcclxuXHJcbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xyXG5cclxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXJ0aWN1bGFyIHN0cmluZyBmcm9tIHRoZVxyXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aFxyXG4gKiB0byBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcclxuICogYHRydWVgLCB0aGVuIHRoZSBwYXJzZXIgc3VjY2VlZHMuXHJcbiAqXHJcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcclxuICogbGVmdCBpbiB0aGUgaW5wdXQuIEl0IHdpbGwgYWx3YXlzIHBhc3MgaWYgYGxlbmd0aGAgaXMgMC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXHJcbiAqICAgICBzaG91bGQgcmVhZC5cclxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXHJcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXHJcbiAqICAgICBzdWNjZWVkcy5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXHJcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxyXG4gKi9cclxuY29uc3QgU3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IG1ha2VQYXJzZXIoc3RhdGUgPT4ge1xyXG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2soc3RhdGUsICcnKVxyXG5cclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBlcnJvcihzdGF0ZSlcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBsZW5ndGgpXHJcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcclxuICAgID8gZXJyb3Ioc3RhdGUpIDogb2soc3RhdGUsIG5leHQsIGluZGV4ICsgd2lkdGgpXHJcbn0pXHJcblxyXG4vKipcclxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXHJcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxyXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcclxuICogcmVjb2duaXplZCBwcm9wZXJseS5cclxuICpcclxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXHJcbiAqIGxvbmdlciB0aGFuIHRoZSByZW1haW5pbmcgaW5wdXQsIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGZhaWwuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xyXG4gKiAgICAgb2YgdGhlIGlucHV0LlxyXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXHJcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxyXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihcclxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcclxuICApKHN0YXRlKSlcclxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcclxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXHJcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXHJcbiAqIEphdmFTY3JpcHQgdW5kZXJzdGFuZGluZyBvZiBwYWlycyBvZiB1cHBlci0gYW5kIGxvd2VyY2FzZSBsZXR0ZXJzLiBJdFxyXG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxyXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXHJcbiAqXHJcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xyXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcclxuICogICAgIG9mIHRoZSBpbnB1dC5cclxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xyXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3Qgc3RyaW5naSA9IHN0ciA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydFN0cmluZygnc3RyaW5naScsIHN0cilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIoXHJcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ci50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxyXG4gICkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLnN0cmluZ2koc3RyKSlcclxufSlcclxuXHJcbi8qKlxyXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cclxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBhbGwgPSBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBzdGF0ZVxyXG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcclxuICByZXR1cm4gb2soc3RhdGUsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxyXG59KVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXHJcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcclxuICogbm90IHRoYXQgbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXHJcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXHJcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBtYWtlUGFyc2VyKHN0YXRlID0+IHtcclxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xyXG4gIGlmIChBU1NFUlQpIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcclxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChTdHJpbmdQYXJzZXIobiwgKCkgPT4gdHJ1ZSkoc3RhdGUpKVxyXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IobmV4dCwgZXhwZWN0ZWRzLmFueVN0cmluZyhuKSlcclxufSlcclxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cclxuLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxyXG4vL1xyXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cclxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcclxuXHJcbmltcG9ydCB7IG1ha2VQYXJzZXIgfSBmcm9tICcuL2NvcmUnXHJcblxyXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuU3RhdGV9IFN0YXRlICovXHJcbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xyXG5cclxuLyoqXHJcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXHJcblxyXG4vKipcclxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcclxuXHJcbi8qKlxyXG4gKiBDcmVhdGVzIGFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuXHJcbiAqIGVuZGluZyB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cclxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcclxuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcclxuICogICAgIGluIGl0LlxyXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxyXG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcclxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxyXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XHJcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXHJcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcclxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcclxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXHJcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcclxuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxyXG5cclxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcclxuICBsZXQgY3VycmVudCA9IHNcclxuXHJcbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XHJcbiAgICBpZiAoZm9yd2FyZCkge1xyXG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXHJcbiAgICB9XHJcbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXHJcbiAgfVxyXG5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XHJcbiAgICB5aWVsZCBjdXJyZW50XHJcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcclxuICB9XHJcbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXHJcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcclxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXHJcbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcclxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxyXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xyXG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxyXG4gICAgeyBsZW5ndGggfSxcclxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXHJcbiAgKVxyXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cclxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcclxuICogICAgIHN0cmluZy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XHJcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcclxuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXHJcbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XHJcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxyXG59XHJcblxyXG4vKipcclxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcclxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXHJcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XHJcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXHJcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcclxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcclxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXHJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxyXG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXHJcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxyXG4gIHJldHVybiAxXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cclxuICpcclxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXHJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cclxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxyXG4gKi9cclxuXHJcbi8qKlxyXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXHJcbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXHJcbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcclxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cclxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcclxuICogICAgIGRhdGEgdmlldy5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xyXG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cclxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXHJcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxyXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXHJcbiAqIHJldHVybmVkLlxyXG4gKlxyXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxyXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxyXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cclxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXHJcbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXHJcbiAqICAgICBkYXRhIHZpZXcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xyXG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcclxuICBsZXQgd2lkdGggPSAwXHJcblxyXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcclxuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXHJcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xyXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxyXG4gIH1cclxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XHJcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxyXG4gIH1cclxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxyXG59XHJcblxyXG4vKipcclxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gc2luZ2xlIHF1b3Rlcy5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IHNpbmdsZSBxdW90ZXMuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XHJcbiAgcmV0dXJuIGAnJHtzdHJ9J2BcclxufVxyXG5cclxuLyoqXHJcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXHJcbiAqXHJcbiAqIFdoaWxlIHRoaXMgd2lsbCBkdXBsaWNhdGUgYW55IHZhbHVlLCBpdCdzIHByaW1hcmlseSB1c2VmdWwgZm9yXHJcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxyXG4gKiBzaG91bGQgZ2VuZXJhbGx5IGJlIGFuIGFycmF5IG9yIG9iamVjdC5cclxuICpcclxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxyXG4gKiBhbGxvdyBkZXN0cnVjdHVyaW5nIHRvIHJlZmVyZW5jZSBhbnkgYW5kIGFsbCBwYXJ0cyBvZiBhIHZhbHVlLCBidXQgaXRcclxuICogZG9lcyBub3QgaGF2ZSBhIHN5bnRheCAobGlrZSB0aGUgYEBgIG9wZXJhdG9yIGluIGxhbmd1YWdlcyBsaWtlIFNjYWxhXHJcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xyXG4gKiB0aGlzIGZ1bmN0aW9uLCBvbmUgb2YgdGhlIGNvcGllcyBjYW4gYmUgcmV0YWluZWQgYXMgYSB3aG9sZSB3aGlsZVxyXG4gKiBwcm92aWRpbmcgYW5vdGhlciBjb3B5IGZvciBkZXN0cnVjdHVyaW5nLlxyXG4gKlxyXG4gKiAjIyMgRXhhbXBsZVxyXG4gKiBgYGBcclxuICogY29uc3QgW3dob2xlLCBbc3RhdGUsIHZhbHVlXV0gPSBkdXAocGFyc2UocGFyc2VyLCBpbnB1dCkpXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0ge1tTdGF0ZSwgUmVzdWx0XX0gdmFsdWUgQW55IHZhbHVlLlxyXG4gKiBAcmV0dXJucyB7W1tTdGF0ZSwgUmVzdWx0XSwgW1N0YXRlLCBSZXN1bHRdXX0gQW4gYXJyYXkgY29udGFpbmluZyB0d29cclxuICogICAgIGNvcGllcyBvZiB0aGUgdmFsdWUuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHVwKHZhbHVlKSB7XHJcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxyXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxyXG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcclxuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXHJcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXHJcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXHJcbiAqIHN0eWxlKS5cclxuICpcclxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXHJcbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xyXG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XHJcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xyXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cclxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxyXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxyXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxyXG4gKiBjcmVhdGVkIGFuIGFyYml0cmFyeSBvYmplY3QuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFzc2lnbmVkIGFuXHJcbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxyXG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxyXG4gKiBvYmplY3QgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBmYWN0b3J5IGNyZWF0ZWQgaXQgb3IgYGZhbHNlYCBpZiBpdFxyXG4gKiBkaWQgbm90LlxyXG4gKlxyXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXVnbWVudGVkIHdpdGhcclxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXHJcbiAqICAgICBhZGRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cclxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHJhY2soZm4sIHByb3AgPSAnY3JlYXRlZCcpIHtcclxuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxyXG5cclxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxyXG4gICAgKC4uLmFyZ3MpID0+IHtcclxuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXHJcbiAgICAgIHRyYWNrZWQuYWRkKGNyZWF0ZWQpXHJcbiAgICAgIHJldHVybiBjcmVhdGVkXHJcbiAgICB9LFxyXG4gICAgcHJvcCxcclxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcclxuICApXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3RyaW5nIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcclxuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChuKSB7XHJcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cclxuICBjb25zdCB2ID0gbiAlIDEwMFxyXG4gIHJldHVybiBuICsgKHN1ZmZpeGVzWyh2IC0gMjApICUgMTBdID8/IHN1ZmZpeGVzW3ZdID8/IHN1ZmZpeGVzWzBdKVxyXG59XHJcblxyXG4vKipcclxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XHJcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcclxuICogYXJlIGFsc28gaW5jbHVkZWQgZm9yIHR5cGVzIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBzdXBwb3J0LlxyXG4gKlxyXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXHJcbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xyXG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gbWFrZVBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xyXG4gIH1cclxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxyXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxyXG4gKiBvbiBpdHMgZmlyc3QgbGV0dGVyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxyXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHByZXBlbmRlZCBhcnRpY2xlLlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcclxuICByZXR1cm4gJ2FlaW91QUVJT1UnLmluY2x1ZGVzKHN0clswXSkgPyBgYW4gJHtzdHJ9YCA6IGBhICR7c3RyfWBcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9