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
/*! exports provided: formatter, ordFormatter, ordinalChar, ordinalFunction, ordinalNumber, ordinalParser, ordinalString, assertChar, assertFunction, assertGeneratorFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser, assertParsers */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertParsers", function() { return assertParsers; });
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
  if (typeof value !== 'function' || _core__WEBPACK_IMPORTED_MODULE_0__["Parser"].created(value)) {
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
  if (typeof value !== 'function' || !_core__WEBPACK_IMPORTED_MODULE_0__["Parser"].created(value)) {
    failAssert(name, value, formatter);
  }
}
function assertParsers(name, values) {
  for (const [i, value] of values.entries()) {
    assertParser(name, value, ordinalParser(Object(_util__WEBPACK_IMPORTED_MODULE_1__["ordinal"])(i + 1)));
  }
}

/***/ }),

/***/ "./src/combinators/alternative.js":
/*!****************************************!*\
  !*** ./src/combinators/alternative.js ***!
  \****************************************/
/*! exports provided: choice, opt, def, attempt, sequenceB, chainB, leftB, rightB, bothB, repeatB, manyTillB, blockB, pipeB, betweenB */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return repeatB; });
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
 * is stopped and the context from that last parser is passed through.
 * The same happens if all parsers are applied without any of them
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

const choice = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('choice', ps);
  let errors = [];

  for (const p of ps) {
    const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
    if (result.status === Ok) return reply;
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, result.errors);
    if (result.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(context, errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, errors);
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

const opt = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('opt', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return result.status !== Error ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null);
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

const def = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('def', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return result.status !== Error ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, x);
});
/**
 * Creates a parser that transforms a fatal failure into a non-fatal
 * failure. It applies the supplied parser; if that parser fails
 * fatally, the context is set back to what it was *before* that parser
 * is applied and the fatal failure is returned as a non-fatal failure.
 * If the parser has any other result, it is passed through without
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

const attempt = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('attempt', p);
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));

  if (result.status !== Ok) {
    const err = index === context.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, result.errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, err, index);
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
 * fail non-fatally, reverting the context to what it was before the
 * first parser was applied, even if previous parsers have consumed
 * input. A fatal error from one of the contained parsers will still
 * result in an overall fatal error.
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

const sequenceB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('sequenceB', ps);
  const values = [];
  const index = ctx.index;
  let context = ctx;

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === context.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, err, index);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
/**
 * Creates a parser that chains the context after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that resulting context.
 *
 * If the second parser (the one provided by `fn`) fails non-fatally,
 * the entire parser will also fail non-fatally, reverting the context
 * to what it was before the first parser was applied, even if the first
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

const chainB = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chainB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(fn(result1.value)(context1));
  if (result2.status !== Error) return reply2;
  const err = index === context2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p1`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
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

const leftB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(context1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context2, result1.value);
  const err = index === context2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of `p2`. If either `p1` or `p2`
 * fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
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

const rightB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(ctx));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(context1));
  if (result2.status !== Error) return reply2;
  const err = index === context2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, err, index);
});
/**
 * Creates a parser that will apply the parsers `p1` and `p2` in
 * sequence and then return the result of both in an array. If either
 * `p1` or `p2` fail, this parser will also fail.
 *
 * If `p2` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
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

const bothB = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bothB', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bothB', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p2(context1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context2, [result1.value, result2.value]);
  const err = index === context2.index ? result2.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context2, result2.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, err, index);
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

const repeatB = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeatB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeatB', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalNumber"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;

    if (result.status === Error) {
      const err = index === context.index ? result.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, result.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, err, index);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const manyTillB = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(end(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      const err = index === context2.index ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context2, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, err, index);
    }

    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const blockB = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertGeneratorFunction"])('blockB', genFn);
  const gen = genFn();
  const index = ctx.index;
  let nextValue;
  let context = ctx;
  let i = 0;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('blockB', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(value(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(next, result.errors, index);
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

const pipeB = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = ps.pop();
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('pipeB', ps);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipeB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(ps.length + 1)));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, result.errors, index);
    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(...values));
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

const betweenB = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('3rd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(pre(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, result2.errors, index);
  const [reply3, [context3, result3]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(post(context2));
  if (result3.status === Fatal) return reply3;
  if (result3.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context3, result3.errors, index);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context3, result2.value);
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
 * Creates a parser that chains the result after applying its contained
 * parser to another parser returned by the supplied function. The
 * parser returns that result.
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

const chain = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result1.status !== Ok) return reply1;
  const p2 = fn(result1.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('the 2nd argument to return a parser'));
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(context1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context2.index !== index, context2, result2.errors);
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

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('map', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('map', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('2nd'));
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(result.value)) : reply;
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
 * the same error type.
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

const join = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('join', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('join', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v.join(''));
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

const skip = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skip', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null) : reply;
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

const value = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('value', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
  const [tuple, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, x) : tuple;
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

const left = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [context2, result2] = p2(context1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context2, result1.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context2.index !== index, context2, result2.errors);
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

const right = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(ctx));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p2(context1));
  return result2.status === Ok ? reply2 : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context2.index !== index, context2, result2.errors);
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

const both = (p1, p2) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('both', p1, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('both', p2, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [context2, result2] = p2(context1);
  return result2.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context2, [result1.value, result2.value]) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context2.index !== index, context2, result2.errors);
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

const pipe = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = ps.pop();
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('pipe', ps);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["ordinal"])(ps.length + 1)));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const p of ps) {
    const [next, result] = p(context);
    context = next;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(...values));
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

const between = (pre, post, p) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('3rd'));
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(pre(ctx));
  if (result1.status !== Ok) return reply1;
  const [context2, result2] = p(context1);

  if (result2.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context2.index !== index, context2, result2.errors);
  }

  const [context3, result3] = post(context2);
  return result3.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context3, result2.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context3.index !== index, context3, result3.errors);
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

const nth = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalNumber"])('2nd'));
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('nth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('1st argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[n]);
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

const first = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('first', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('first', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[0]);
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

const second = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('second', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('second', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[1]);
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

const third = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('third', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('third', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[2]);
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

const fourth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fourth', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fourth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[3]);
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

const fifth = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fifth', p);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fifth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, v[4]);
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

const lookAhead = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lookAhead', p);
  const index = ctx.index;
  const [context, result] = p(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, result.value, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, result.errors, index);
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

const notEmpty = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notEmpty', p);
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return result.status !== Ok || context.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context);
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

const notEmptyM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notEmptyM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('notEmptyM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return result.status !== Ok || context.index !== index ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
});
/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser context. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `followedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */

const followedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('followedBy', p);
  const index = ctx.index;
  const [context, result] = p(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, undefined, index);
});
/**
 * Creates a parser that succeeds if the supplied parser succeeds, but
 * which does not change parser context. If `p` does not succeed,
 * `followedBy(p)` fails non-fatally, replacing any "expected" error
 * message with `msg` and removing any "unexpected" error message.
 *
 * `followedByM(p, msg)` is an optimized implementation of
 * `label(followedBy(p), msg)`.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} msg The expected error message to use if `p` fails.
 * @returns {Parser} A parser that applies `p` but does not change the
 *     parser context, whether or not `p` succeeds.
 */

const followedByM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('followedByM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('followedByM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const index = ctx.index;
  const [context, result] = p(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index);
});
/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser context. If `p` succeeds,
 * `notFollowedBy(p)` fails non-fatally.
 *
 * This parser produces no error messages on failure. It should be used
 * in conjunction with other parsers that take care of potential errors,
 * or else `notFollowedByL` should be used instead.
 *
 * @param {Parser} p The parser to apply.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser context, whether or not `p`
 *     succeeds.
 */

const notFollowedBy = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notFollowedBy', p);
  const index = ctx.index;
  const [context, result] = p(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, undefined, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null, index);
});
/**
 * Creates a parser that succeeds if the supplied parser fails, but
 * which does not change parser context. If `p` succeeds,
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
 *     parser context, whether or not `p` succeeds.
 */

const notFollowedByM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notFollowedByM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('notFollowedByM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const index = ctx.index;
  const [context, result] = p(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null, index);
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

function pass(ctx, result, errors) {
  return [{ ...ctx
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


const label = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('label', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('label', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  return index === context.index ? pass(context, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : reply;
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
 * *did* consume input, the context is reset to the context before the
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

const backLabel = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('backLabel', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('backLabel', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));

  if (result.status === Ok) {
    return index === context.index ? pass(context, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : reply;
  } else if (index === context.index) {
    if (result.errors.length === 1 && result.errors[0].type === Nested) {
      const {
        ctx,
        errors
      } = result.errors[0];
      return pass(context, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, ctx, errors));
    }

    return pass(context, result, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, context, result.errors));
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


const sequence = (...ps) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParsers"])('sequence', ps);
  const values = [];
  const index = ctx.index;
  let context = ctx;

  for (const p of ps) {
    const [next, result] = p(context);
    context = next;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, result.errors);
    }

    if (result.value !== null) values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const block = genFn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertGeneratorFunction"])('block', genFn);
  const gen = genFn();
  const index = ctx.index;
  let nextValue;
  let context = ctx;
  let i = 0;

  while (true) {
    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value);
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('block', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
    const [next, result] = value(context);
    context = next;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, result.errors);
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

const many = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many', p);
  const values = [];
  let context = ctx;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const many1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many1', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  let context = next;
  const values = [result.value];

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (result.value !== null) values.push(result.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const skipMany = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany', p);
  let context = ctx;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null);
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

const skipMany1 = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skipMany1', p);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  let context = next;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = next;
    if (result.status === Fatal) return reply;
    if (result.status === Error) break;
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null);
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

const sepBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, []);
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (context.index === index) throw new TypeError(loopMessage('sepBy'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values, index);
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

const sepBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy1', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (context.index === index) throw new TypeError(loopMessage('sepBy1'));
    values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values, index);
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

const sepEndBy = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, []);
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (context.index === index) throw new TypeError(loopMessage('sepEndBy'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...context,
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

const sepEndBy1 = (p, sep) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;
    if (result2.status === Error) break;
    if (context.index === index) throw new TypeError(loopMessage('sepEndBy1'));
    values.push(result2.value);
  }

  const [sepNext, _] = sep({ ...context,
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

const repeat = (p, n) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeat', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeat', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalNumber"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [next, result] = p(context);
    context = next;

    if (result.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, result.errors);
    }

    values.push(result.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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

const manyTill = (p, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTill', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTill', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(end(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors));
    }

    if (result2.value !== null) values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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


const assocL = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x);
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocL', resultop.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(resultop.value);
    values.push(resultp.value);
    index = context.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value, index);
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

const assoc1L = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1L', resultop.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(resultop.value);
    values.push(resultp.value);
    index = context.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value, index);
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

const assocR = (p, op, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x);
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocR', resultop.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(resultop.value);
    values.push(resultp.value);
    index = context.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value, index);
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

const assoc1R = (p, op) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalParser"])('2nd'));
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1R', resultop.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(resultop.value);
    values.push(resultp.value);
    index = context.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, value, index);
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: Status, Context, Parser, ok, error, fatal, maybeFatal, parse, status, succeeded, success, failure, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
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
 * The context of a parser. This object contains the input text and a
 * pointer to the current location within it.
 *
 * @typedef {object} Context
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
 * The object that is returned from a parser application, including the
 * context and the result.
 * @typedef {[Context, Result]} Reply
 */

/**
 * @typedef {(
 *   Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Int8Array|
 *   Int16Array|Int32Array|Float32Array|Float64Array
 * )} TypedArray
 */

/**
 * Creates a new, empty parser context. This is not exported because a
 * new context is only created before parsing, in the `parse` function.
 * Any further contexts are derived from the context using {@link ok},
 * {@link error}, or {@link fatal}.
 *
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {Context} An empty parser context.
 */

function Context(input) {
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
 * context, updates it somehow (generally by reading a character), and
 * returns the updated context.
 *
 * @callback Parser
 * @param {Context} ctx The context before the parser is run.
 * @returns {Reply} The updated context after the parser is applied and
 *     the result of that parser application.
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

const Parser = Object(_util__WEBPACK_IMPORTED_MODULE_1__["track"])(fn => fn);
/**
 * Produces a new `Result` indicating that a parse succeeded, as well as
 * a `Context` potentially with an updated `index`.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {*} [value=null] The new result of the parser application.
 * @param {number} [index=ctx.index] The updated index after the parser
 *     was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser succeeded.
 */

function ok(ctx, value = null, index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Ok,
    value
  }];
}
/**
 * Produces a new `Result` indicating that a parse failed without
 * consuming input, as well as a copy of `Context`.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {ParseError[]} [errors=[]] The errors associated with the
 *     context after the latest parser was applied.
 * @param {number} [index=ctx.index] The updated index after the latest
 *     parser was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser failed.
 */

function error(ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Error,
    errors
  }];
}
/**
 * Produces a new `Result` indicating that a parse failed while
 * consuming input, as well as a new `Context` with an updated `index`.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {ParseError[]} [errors=[] The errors associated with the
 *     context after the latest parser was applied.
 * @param {number} [index=ctx.index] The updated index after the latest
 *     parser was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser failed.
 */

function fatal(ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
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
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {ParseError[]} [errors=[] The errors associated with the
 *     context after the latest parser was applied.
 * @param {number} [index=ctx.index] The updated index after the latest
 *     parser was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser failed.
 */

function maybeFatal(test, ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: test ? Status.Fatal : Status.Error,
    errors
  }];
}
/**
 * Applies a parser to input. This input can be a string, a typed array,
 * an array buffer, or a data view. The return value is the final parser
 * context returned by the parser after being run.
 *
 * @param {Parser} parser The parser to be applied to the input. This
 *     can, as always, be a composition of an arbitrary number of
 *     parsers and combinators.
 * @param {(string|ArrayBuffer|TypedArray|DataView)} input The input
 *     text.
 * @returns {Reply} The final context after all parsers have been
 *     applied and the result of the final parser application.
 */

function parse(parser, input) {
  return parser(Context(input));
}
/**
 * Returns the status of the given reply.
 *
 * @param {Reply} reply The context/result value returned by `parse`.
 * @returns {Status} The status of the given reply.
 */

function status(reply) {
  return reply[1].status;
}
/**
 * Determines whether an invocation of `parse` was successful.
 *
 * @param {Reply} reply The context/result value returned by `parse`.
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
 * @param {Reply} reply The context/result value returned by `parse`.
 * @returns {*} The resulting value from the parse if it was successful,
 *     or `null` if it was not.
 */

function success(reply) {
  return succeeded(reply) ? reply[1].value : null;
}
/**
 * Extracts the error message as a string from the value returned by an
 * unsuccessful invocation of `parse`. If the parser was actually
 * successful, this will return `null` instead.
 *
 * @param {Reply} reply The context/result value returned by `parse`.
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
  const [ctx, result] = parser(Context(input));

  if (result.status === Status.Ok) {
    return result.value;
  }

  throw new Error(Object(_error__WEBPACK_IMPORTED_MODULE_0__["formatErrors"])(ctx, result));
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

/** @typedef {import('./core.js').Context} Context */

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
 * context. The type is used to determine where the label should be
 * positioned in the error message.
 *
 * @typedef {object} LocalError
 * @property {ErrorType} type The error type.
 * @property {string} label The message associated with the error.
 */

/**
 * An error that happens in a different location than the one referred
 * to by the current context. The most typical reason for this happening
 * is backtracking; the local error can track the current
 * (post-backtrack) location while the nested error retains informtion
 * from the error that caused the backtracking in the first place.
 *
 * @typedef {object} NestedError
 * @property {ErrorType} type The error type. This will always be
 *     `ErrorType.Nested`.
 * @property {Context} ctx The context at the time that the original
 *     error occurred. This can (and probably will) be different from
 *     the current context.
 * @property {ErrorList} errors A list of errors that occurred at the
 *     location derived from `ctx`.
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
 * @property {Context} ctx The context at the time that the original
 *     error occurred. This can (and probably will) be different from
 *     the current context.
 * @property {ErrorList} errors A list of errors that occurred at the
 *     location derived from `ctx`.
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
 * context information. If the supplied error list is just a single
 * nested error, that error is simply returned; a single nested error
 * will not be nested in another nested error.
 *
 * @param {Context} ctx The context at the point where the nested error
 *     occurred.
 * @param {ErrorList} errors The list of errors that occurred at the
 *     position pointed to by the given context.
 * @returns {NestedError} A new nested error.
 */

function nested(ctx, errors) {
  return errors.length === 1 && errors[0].type === ErrorType.Nested ? errors : [{
    type: ErrorType.Nested,
    ctx,
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
 * @param {Context} ctx The context at the point where the compound
 *     error occurred.
 * @param {ErrorList} errors The list of errors that occurred at the
 *     position pointed to by the given context.
 * @returns {CompoundError} A new compound error.
 */

function compound(label, ctx, errors) {
  return errors.length === 1 && errors[0].type === ErrorType.Nested ? [{
    type: ErrorType.Compound,
    ctx: errors.ctx,
    errors: errors.errors,
    label
  }] : [{
    type: ErrorType.Compound,
    ctx,
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
    } = n.ctx;
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
 * Accepts a parser context and produces an error message from it.
 *
 * A default formatter is provided but an alternate one can be passed
 * in. The same goes for tab size (used to expand tabs in parsed text;
 * defaults to 8) and max width (for the error message itself; defaults
 * to 72).
 *
 * @param {Context} ctx The parser's context when the error happened.
 * @param {Result} result The result produced when the error happened.
 * @param {number} [tabSize=8] A number whose multiples define where
 *     tabs stop.
 * @param {number} [maxWidth=72] The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {Formatter} [formatter=format] The function to which the
 *     actual formatting is delegated.
 */

function formatErrors(ctx, result, tabSize = 8, maxWidth = 72, formatter = format) {
  const {
    index,
    view
  } = ctx;
  return formatter(result.errors, index, view, tabSize, maxWidth);
}
/**
 * Returns the position of the next byte of the supplied context. The
 * position is an object with `line` and `column` properties that are
 * the 1-based line and column numbers of the byte at the context's
 * index within the context's data view.
 *
 * @param {Context} ctx The context whose current position is being
 *     calculated.
 * @param {number} [tabSize=8] A number whose multiples define where
 *     tabs stop. The current position's column number is adjusted based
 *     on this parameter when tab characters are present.
 * @returns {Position} A two-property object with `line` and `column`
 *     properties.
 */

function getPosition(ctx, tabSize = 8) {
  const {
    index,
    view
  } = ctx;
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
/*! exports provided: alpha, any, anyOf, char, charI, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyM, upper, always, fail, failFatally, failUnexpected, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringI, attempt, betweenB, blockB, bothB, chainB, choice, def, leftB, manyTillB, opt, pipeB, repeatB, rightB, sequenceB, between, both, chain, fifth, first, fourth, join, left, map, nth, pipe, right, second, skip, third, value, followedBy, followedByM, lookAhead, notEmpty, notEmptyM, notFollowedBy, notFollowedByM, backLabel, label, assoc1L, assoc1R, assocL, assocR, block, many, many1, manyTill, repeat, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skipMany, skipMany1, Parser, Status, error, failure, fatal, maybeFatal, ok, parse, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsers_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/char */ "./src/parsers/char.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["alpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anyOf", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["anyOf"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "char", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["char"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charI", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["charI"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "stringI", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["stringI"]; });

/* harmony import */ var _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combinators/alternative */ "./src/combinators/alternative.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["attempt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["betweenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bothB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["bothB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["pipeB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["repeatB"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "error", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["error"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["failure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fatal"]; });

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
  charI: c => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(c),
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
  stringI: str => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(str),
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
  charI: c => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.charI(c)),
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
  stringI: str => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.stringI(str)),
  upper: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.upper),
  upperU: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.upperU)
};

/***/ }),

/***/ "./src/parsers/char.js":
/*!*****************************!*\
  !*** ./src/parsers/char.js ***!
  \*****************************/
/*! exports provided: char, charI, satisfy, satisfyM, range, any, eof, anyOf, noneOf, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charI", function() { return charI; });
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

const CharParser = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx);
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


const char = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('char', c);
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(ch => c === ch)(ctx));
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

const charI = c => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('charI', c);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].charI(c));
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

const satisfy = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfy', fn);
  return CharParser(fn)(ctx);
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

const satisfyM = (fn, message) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfyM', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalFunction"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfyM', message, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalString"])('2nd'));
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(message));
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

const range = (start, end) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', start, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalChar"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordinalChar"])('2nd'));

  const fn = c => c >= start && c <= end;

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].range(start, end));
});
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 */

const any = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].any);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
});
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 */

const eof = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].eof);
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

const anyOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('anyOf', chars);
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].anyOf(arr));
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

const noneOf = chars => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('noneOf', chars);
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...chars];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '7';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["dup"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].lower);
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

const always = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, x));
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const fail = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fail', msg);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
});
/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in. This signifies a
 * fatal error, one that cannot be recovered from without backtracking.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const failFatally = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failFatally', msg);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
});
/**
 * Creates a parser that fails without consuming input, setting the
 * unexpected error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the unexpected
 *     error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failUnexpected = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failUnexpected', msg);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["unexpected"])(msg));
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

const RegexParser = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, view.byteLength - index, view);
  const match = rest.match(re);
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx);
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


const regex = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrRegExp"])('regex', re); // First, convert to a regular expression if it's a string

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

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(regex)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reLetter)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reAlpha)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUpper)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reLower)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reSpace)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 */

const spaceU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUspace)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaceU);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [next, _] = RegexParser(reSpaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */

const spacesU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [next, _] = RegexParser(reUspaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [context, result] = RegexParser(reSpaces1)(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [context, result] = RegexParser(reUspaces1)(ctx);
  return result.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1U);
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

const newline = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reNewline)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline);
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

const newlineU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(RegexParser(reUnewline)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newlineU);
});

/***/ }),

/***/ "./src/parsers/string.js":
/*!*******************************!*\
  !*** ./src/parsers/string.js ***!
  \*******************************/
/*! exports provided: string, stringI, all, anyString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringI", function() { return stringI; });
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

const StringParser = (length, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  if (length < 1) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, '');
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChars"])(index, view, length);
  return Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(next) !== length || !fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(ctx) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
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


const string = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('string', str);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].string(str));
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

const stringI = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('stringI', str);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].stringI(str));
});
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 */

const all = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  const width = view.byteLength - index;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, width, view), index + width);
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

const anyString = n => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('anyString', n);
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(StringParser(n, () => true)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
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

/** @typedef {import('./core').Context} Context */

/** @typedef {import('./core').Result} Result */

/** @typedef {import('./core').Reply} Reply */

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
 * const [whole, [ctx, value]] = dup(parse(parser, input))
 * ```
 *
 * @param {Reply} value Any value.
 * @returns {[Reply, Reply]} An array containing two copies of the
 *     value.
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
    return _core__WEBPACK_IMPORTED_MODULE_0__["Parser"].created(value) ? 'parser' : 'function';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsImdlbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsImFyckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwicGFyc2VyRm9ybWF0dGVyIiwib3JkRm9ybWF0dGVyIiwib3JkIiwib3JkaW5hbENoYXIiLCJvcmRpbmFsRnVuY3Rpb24iLCJvcmRpbmFsTnVtYmVyIiwib3JkaW5hbFBhcnNlciIsIm9yZGluYWxTdHJpbmciLCJmYWlsQXNzZXJ0IiwibmFtZSIsIkVycm9yIiwiYXNzZXJ0Q2hhciIsImNoYXJMZW5ndGgiLCJhc3NlcnRGdW5jdGlvbiIsIlBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImFzc2VydFN0cmluZyIsImFzc2VydEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiYXNzZXJ0U3RyaW5nT3JBcnJheSIsImV2ZXJ5IiwiYyIsImFzc2VydFN0cmluZ09yUmVnRXhwIiwiYXNzZXJ0TnVtYmVyIiwiYXNzZXJ0UGFyc2VyIiwiYXNzZXJ0UGFyc2VycyIsInZhbHVlcyIsImkiLCJlbnRyaWVzIiwib3JkaW5hbCIsIk9rIiwiRmF0YWwiLCJTdGF0dXMiLCJjaG9pY2UiLCJwcyIsImN0eCIsIkFTU0VSVCIsImVycm9ycyIsInAiLCJyZXBseSIsImNvbnRleHQiLCJyZXN1bHQiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsIiwiZXJyb3IiLCJvcHQiLCJvayIsImRlZiIsIngiLCJhdHRlbXB0IiwiaW5kZXgiLCJlcnIiLCJuZXN0ZWQiLCJzZXF1ZW5jZUIiLCJuZXh0IiwicHVzaCIsImNoYWluQiIsImZuIiwicmVwbHkxIiwiY29udGV4dDEiLCJyZXN1bHQxIiwicmVwbHkyIiwiY29udGV4dDIiLCJyZXN1bHQyIiwibGVmdEIiLCJwMSIsInAyIiwicmlnaHRCIiwiYm90aEIiLCJyZXBlYXRCIiwibiIsIl8iLCJyYW5nZSIsIm1hbnlUaWxsQiIsImVuZCIsImJsb2NrQiIsImdlbkZuIiwiZ2VuIiwibmV4dFZhbHVlIiwiZG9uZSIsInYiLCJwaXBlQiIsInBvcCIsImxlbmd0aCIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInJlcGx5MyIsImNvbnRleHQzIiwicmVzdWx0MyIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJza2lwIiwidHVwbGUiLCJsZWZ0IiwicmlnaHQiLCJib3RoIiwicGlwZSIsImJldHdlZW4iLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJsb29rQWhlYWQiLCJub3RFbXB0eSIsIm5vdEVtcHR5TSIsIm1zZyIsImV4cGVjdGVkIiwiZm9sbG93ZWRCeSIsInVuZGVmaW5lZCIsImZvbGxvd2VkQnlNIiwibm90Rm9sbG93ZWRCeSIsIm5vdEZvbGxvd2VkQnlNIiwiTmVzdGVkIiwiRXJyb3JUeXBlIiwicGFzcyIsImxhYmVsIiwiYmFja0xhYmVsIiwiY29tcG91bmQiLCJsb29wTWVzc2FnZSIsInNlcXVlbmNlIiwiYmxvY2siLCJtYW55IiwidmlldyIsImJ5dGVMZW5ndGgiLCJtYW55MSIsInNraXBNYW55Iiwic2tpcE1hbnkxIiwic2VwQnkiLCJzZXAiLCJUeXBlRXJyb3IiLCJzZXBCeTEiLCJzZXBFbmRCeSIsInNlcE5leHQiLCJzZXBFbmRCeTEiLCJyZXBlYXQiLCJtYW55VGlsbCIsIm9wRm9ybWF0dGVyIiwiYXNzb2NMIiwib3AiLCJvcHMiLCJyZXBseW9wIiwiY29udGV4dG9wIiwicmVzdWx0b3AiLCJyZXBseXAiLCJjb250ZXh0cCIsInJlc3VsdHAiLCJhc3NvYzFMIiwiYXNzb2NSIiwiYXNzb2MxUiIsImlzVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsIlN5bWJvbCIsIkNvbnRleHQiLCJpbnB1dCIsIm1lc3NhZ2UiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidHJhY2siLCJ0ZXN0IiwicGFyc2UiLCJwYXJzZXIiLCJzdWNjZWVkZWQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJjb3VudCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiY29tbWFTZXBhcmF0ZSIsImZpbHRlciIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55T2YiLCJhcnJheSIsImFueVN0cmluZyIsImNoYXIiLCJxdW90ZSIsImNoYXJJIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJsZXR0ZXIiLCJsZXR0ZXJVIiwibG93ZXIiLCJsb3dlclUiLCJuZXdsaW5lVSIsIm5vbmVPZiIsIm9jdGFsIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ0kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsIkNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJzYXRpc2Z5TSIsImNoYXJzIiwiYXJyIiwiaW5jbHVkZXMiLCJhbHdheXMiLCJmYWlsIiwiZmFpbEZhdGFsbHkiLCJmYWlsVW5leHBlY3RlZCIsInJlTGV0dGVyIiwicmVBbHBoYSIsInJlVXBwZXIiLCJyZUxvd2VyIiwicmVTcGFjZSIsInJlVXNwYWNlIiwicmVTcGFjZXMiLCJyZVVzcGFjZXMiLCJyZVNwYWNlczEiLCJyZVVzcGFjZXMxIiwicmVOZXdsaW5lIiwicmVVbmV3bGluZSIsIlJlZ2V4UGFyc2VyIiwicmVzdCIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJTdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJhbGwiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJzdGVwIiwiaW5jbHVzaXZlIiwicyIsImUiLCJhYnMiLCJmb3J3YXJkIiwiY3VycmVudCIsImZpbmlzaGVkIiwiYnl0ZXMiLCJmcm9tIiwiZGVjb2RlIiwiZW5jb2RlIiwidmlld0xlbmd0aCIsIm1lc3NhZ2VzIiwibXNncyIsInNsaWNlIiwibGFzdCIsInByb3AiLCJ0cmFja2VkIiwiV2Vha1NldCIsImRlZmluZVByb3BlcnR5IiwiYXJncyIsImFkZCIs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFrQkE7QUFNQTtDQXNCQTtBQUNBOztBQUVBO0FBZ0JBO0FBa0JBO0FBU0E7Q0F1QkE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7OztBQzlIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTWdDLE9BQU8sR0FBRztBQUNyQkMsT0FBSyxFQUFFLDJCQURjO0FBRXJCQyxRQUFNLEVBQUUsa0NBRmE7QUFHckJD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SUFBSSxDQUFDcFgsU0FBTCxDQUFlRCxLQUFmLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNzWCxTQUFULENBQW1CekUsR0FBbkIsRUFBd0I7QUFDN0IsU0FBTyxhQUFhYyxRQUFiLENBQXNCZCxHQUFHLENBQUMsQ0FBRCxDQUF6QixJQUFpQyxNQUFLQSxHQUFJLEVBQTFDLEdBQStDLEtBQUlBLEdBQUksRUFBOUQ7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIG9yZGluYWwsIHN0cmluZ2lmeSB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IGZvcm1hdHRlciA9IHR5cGUgPT5cbiAgdmFsdWUgPT4gYGV4cGVjdGVkICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmNvbnN0IGNoYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnKVxuY29uc3QgZm5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nKVxuY29uc3QgZ2VuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicpXG5jb25zdCBzdHJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nJylcbmNvbnN0IGFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYW4gYXJyYXknKVxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcbmNvbnN0IHN0clJlZ0Zvcm10dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicpXG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgbnVtYmVyJylcbmNvbnN0IHBhcnNlckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxuXG5leHBvcnQgY29uc3Qgb3JkRm9ybWF0dGVyID0gKHR5cGUsIG9yZCkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7b3JkfSBhcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3Qgb3JkaW5hbENoYXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZGluYWxGdW5jdGlvbiA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkaW5hbE51bWJlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZGluYWxQYXJzZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRpbmFsU3RyaW5nID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBzdHJpbmcnLCBvcmQpXG5cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZm5Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCBQYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gYXJyRm9ybWF0dGVyKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yQXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckFyckZvcm1hdHRlcikge1xuICBpZiAoIShcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICYmIHZhbHVlLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnICYmIGNoYXJMZW5ndGgoYykgPT09IDEpXG4gICAgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICApKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gcGFyc2VyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgIVBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VycyhuYW1lLCB2YWx1ZXMpIHtcbiAgZm9yIChjb25zdCBbaSwgdmFsdWVdIG9mIHZhbHVlcy5lbnRyaWVzKCkpIHtcbiAgICBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIG9yZGluYWxQYXJzZXIob3JkaW5hbChpICsgMSkpKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBvcmRpbmFsRnVuY3Rpb24sXG4gIG9yZGluYWxOdW1iZXIsXG4gIG9yZGluYWxQYXJzZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UsIG5lc3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgb3JkaW5hbCwgcmFuZ2UsIHN0cmluZ2lmeSB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcy4gRWFjaCBvZiB0aGUgc3VwcGxpZWRcbiAqIHBhcnNlcnMgaXMgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlci4gV2hlbiB0aGUgZmlyc3QgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhlIGZpcnN0IHBhcnNlciBmYWlscyB3aGlsZSBjb25zdW1pbmcgaW5wdXQsIGV4ZWN1dGlvblxuICogaXMgc3RvcHBlZCBhbmQgdGhlIGNvbnRleHQgZnJvbSB0aGF0IGxhc3QgcGFyc2VyIGlzIHBhc3NlZCB0aHJvdWdoLlxuICogVGhlIHNhbWUgaGFwcGVucyBpZiBhbGwgcGFyc2VycyBhcmUgYXBwbGllZCB3aXRob3V0IGFueSBvZiB0aGVtXG4gKiBzdWNjZWVkaW5nLlxuICpcbiAqIE9uIGZhaWx1cmUsIGFsbCBvZiB0aGUgYEV4cGVjdGVkYCBlcnJvcnMgZnJvbSBhbnkgb2YgdGhlIGNvbnRhaW5lZFxuICogcGFyc2VycyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoaXMgcGFyc2VyJ3MgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgY2hvaWNlID0gKC4uLnBzKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ2Nob2ljZScsIHBzKVxuXG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gT2spIHJldHVybiByZXBseVxuXG4gICAgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCByZXN1bHQuZXJyb3JzKVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsKGNvbnRleHQsIGVycm9ycylcbiAgfVxuICByZXR1cm4gZXJyb3IoY3R4LCBlcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlclxuICogaXQgZmFpbHMgb3Igbm90IGJ1dCBvbmx5IGNvbnN1bWluZyBpbnB1dCBpZiBpdCBzdWNjZWVkcy4gVGhpcyBwYXJzZXJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gSXQncyB1c2VkIHRvXG4gKiBpbXBsZW1lbnQgc2tpcHBpbmcgb3ZlciBzb21lIG9wdGlvbmFsIHRleHQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBhcHBsaWVkIGFuZFxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgd2l0aCBubyByZXN1bHQgdW5sZXNzIGl0c1xuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5XG4gKiAgICAgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdvcHQnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IEVycm9yID8gcmVwbHkgOiBvayhjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzXG4gKiBzdWNjZXNzZnVsIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHRcbiAqIHZhbHVlIGB4YC4gVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlsc1xuICogZmF0YWxseS5cbiAqXG4gKiBgZGVmKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNob2ljZShbcCxcbiAqIGNvbnN0YW50KHgpXSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4KSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZGVmJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gRXJyb3IgPyByZXBseSA6IG9rKGNvbnRleHQsIHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0cmFuc2Zvcm1zIGEgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsXG4gKiBmYWlsdXJlLiBJdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXI7IGlmIHRoYXQgcGFyc2VyIGZhaWxzXG4gKiBmYXRhbGx5LCB0aGUgY29udGV4dCBpcyBzZXQgYmFjayB0byB3aGF0IGl0IHdhcyAqYmVmb3JlKiB0aGF0IHBhcnNlclxuICogaXMgYXBwbGllZCBhbmQgdGhlIGZhdGFsIGZhaWx1cmUgaXMgcmV0dXJuZWQgYXMgYSBub24tZmF0YWwgZmFpbHVyZS5cbiAqIElmIHRoZSBwYXJzZXIgaGFzIGFueSBvdGhlciByZXN1bHQsIGl0IGlzIHBhc3NlZCB0aHJvdWdoIHdpdGhvdXRcbiAqIG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbGxvd3MgdGhlIHVzZXIgdG8gY2F1c2UgYSBub24tYmFja3RyYWNraW5nIHBhcnNlciB0b1xuICogYmFja3RyYWNrIHVwb24gZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXR0ZW1wdCcsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICA6IG5lc3RlZChjb250ZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIHJldHVybiBlcnJvcihjb250ZXh0LCBlcnIsIGluZGV4KVxuICB9XG4gIHJldHVybiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzb1xuICogZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBjb250ZXh0IHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGVcbiAqIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWRcbiAqIGlucHV0LiBBIGZhdGFsIGVycm9yIGZyb20gb25lIG9mIHRoZSBjb250YWluZWQgcGFyc2VycyB3aWxsIHN0aWxsXG4gKiByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHNlcXVlbmNlQihwcylgIGlzIG5vdCB0aGUgc2FtZSBhc1xuICogYGJhY2t0cmFjayhzZXF1ZW5jZShwcykpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2ZcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxuICogY2FzZS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXQgYVxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQiA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdzZXF1ZW5jZUInLCBwcylcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHJlc3VsdC5lcnJvcnNcbiAgICAgICAgOiBuZXN0ZWQoY29udGV4dCwgcmVzdWx0LmVycm9ycylcbiAgICAgIHJldHVybiBlcnJvcihjb250ZXh0LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgY29udGV4dCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkXG4gKiBwYXJzZXIgdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGVcbiAqIHBhcnNlciByZXR1cm5zIHRoYXQgcmVzdWx0aW5nIGNvbnRleHQuXG4gKlxuICogSWYgdGhlIHNlY29uZCBwYXJzZXIgKHRoZSBvbmUgcHJvdmlkZWQgYnkgYGZuYCkgZmFpbHMgbm9uLWZhdGFsbHksXG4gKiB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBjb250ZXh0XG4gKiB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3RcbiAqIHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbCBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbFxuICogcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBjaGFpbkIocCwgZm4pYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhjaGFpbihwLFxuICogZm4pKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW5CID0gKHAsIGZuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW5CJywgZm4sIG9yZGluYWxGdW5jdGlvbignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IGR1cChmbihyZXN1bHQxLnZhbHVlKShjb250ZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gRXJyb3IpIHJldHVybiByZXBseTJcbiAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgPyByZXN1bHQyLmVycm9yc1xuICAgIDogbmVzdGVkKGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbiAgcmV0dXJuIGVycm9yKGNvbnRleHQyLCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDFgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dCB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBsZWZ0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhsZWZ0KHAxLFxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0QiA9IChwMSwgcDIpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0QicsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocDIoY29udGV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gT2spIHJldHVybiBvayhjb250ZXh0MiwgcmVzdWx0MS52YWx1ZSlcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dDIuaW5kZXhcbiAgICA/IHJlc3VsdDIuZXJyb3JzXG4gICAgOiBuZXN0ZWQoY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxuICByZXR1cm4gZXJyb3IoY29udGV4dDIsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMmAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxuICpcbiAqIElmIGBwMmAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBjb250ZXh0IHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHJpZ2h0QihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhyaWdodChwMSxcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0QiA9IChwMSwgcDIpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHAyLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAxKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocDIoY29udGV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IEVycm9yKSByZXR1cm4gcmVwbHkyXG5cbiAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgPyByZXN1bHQyLmVycm9yc1xuICAgIDogbmVzdGVkKGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbiAgcmV0dXJuIGVycm9yKGNvbnRleHQyLCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dCB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGBib3RoQihwMSwgcDIpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGJhY2t0cmFjayhib3RoKHAxLFxuICogcDIpKWAsIGFzIHRoZSBmb3JtZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5LCB3aGlsZSB0aGUgbGF0dGVyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpbiB0aGF0IGNhc2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZXMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgY29uc3QgYm90aEIgPSAocDEsIHAyKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYm90aEInLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JvdGhCJywgcDIsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAocDEoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKGNvbnRleHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2soY29udGV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dDIuaW5kZXhcbiAgICA/IHJlc3VsdDIuZXJyb3JzXG4gICAgOiBuZXN0ZWQoY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxuICByZXR1cm4gZXJyb3IoY29udGV4dDIsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxuICogZmFpbHMsIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWw7IGlmIHRoYXQgZmFpbHVyZSBpcyBmYXRhbCwgdGhlXG4gKiBvdmVyYWxsIGZhaWx1cmUgd2lsbCBhbHNvIGJlIGZhdGFsLlxuICpcbiAqIFRoZSBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIHRoZSB1bmRlcmx5aW5nIGVycm9yIHdhc1xuICogbm9uLWZhdGFsLCBldmVuIGlmIGlucHV0IHdhcyBjb25zdW1lZCAoYmFja3RyYWNraW5nIHdpbGwgaGFwcGVuIGluXG4gKiB0aGlzIGNhc2UpLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGFwcGx5IG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBhcHBseSB0aGUgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXRCID0gKHAsIG4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXRCJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdEInLCBuLCBvcmRpbmFsTnVtYmVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXhcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgICByZXR1cm4gZXJyb3IoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cbiAqXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxuICogZXJyb3IgZm9yIHRoZSBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgZW5kLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAoZW5kKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgICAgID8gbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKVxuICAgICAgICA6IG5lc3RlZChjb250ZXh0MiwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSlcbiAgICAgIHJldHVybiBlcnJvcihjb250ZXh0MiwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFueSBvZiB0aGVzZSBwYXJzZXJzIGZhaWwsIHRoZSBgYmxvY2tgIHBhcnNlciB3aWxsIGFsc28gZmFpbC4gSWZcbiAqIHRoYXQgZmFpbHVyZSBpcyBub24tZmF0YWwsIGJhY2t0cmFja2luZyB3aWxsIHJlc2V0IHRoZSBpbmRleCB0byB3aGVyZVxuICogaXQgd2FzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGBibG9ja2AgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrQiA9IGdlbkZuID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24oJ2Jsb2NrQicsIGdlbkZuKVxuXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2tCJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XG4gICAgICBvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cCh2YWx1ZShjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gbmV4dFxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBlcnJvcihuZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbiAgICBuZXh0VmFsdWUgPSByZXN1bHQudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzXG4gKiB0aG9zZSByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZlxuICogcGFyc2VycyB0byBhcHBseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXG4gKiBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcXVlbmNlYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KlxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbFxuICogYmFja3RyYWNrIHRvIHdoZXJlIHRoZSBmaXJzdCBwYXJzZXIgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcbiAqIGJ1dCBsZXNzIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBhcHBsaWVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLCBmb2xsb3dlZCBieSBhIGZ1bmN0aW9uIHdoaWNoXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci4gQSBzaW5nbGVcbiAqICAgICBmdW5jdGlvbiBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGxcbiAqICAgICBvdGhlciBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGVCID0gKC4uLnBzKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlQicsIHBzKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3BpcGVCJywgZm4sIG9yZGluYWxGdW5jdGlvbihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IoY29udGV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHByZSwgY29udGVudCwgYW5kIHBvc3QgcGFyc2VycyBpblxuICogb3JkZXIgYW5kIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKlxuICogTm90ZSB0aGF0IHRoZSBjb250ZW50IHBhcnNlciBgcGAgaXMgYXBwbGllZCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlclxuICogYHBvc3RgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxuICogdG8gcGF0Y2ggdGhlIFwicG9zdFwiIGNvbnRlbnQgYmVmb3JlIHRoZSBwb3N0IHBhcnNlciBkb2VzLCBzbyB0YWtlIGNhcmVcbiAqIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxuICpcbiAqIElmIGFueSBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBgYmV0d2VlbkJgIHBhcnNlciB3aWxsIGJhY2t0cmFja1xuICogdG8gd2hlcmUgYHByZWAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHByZSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHBvc3QgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbkIgPSAocHJlLCBwb3N0LCBwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwcmUsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHBvc3QsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZGluYWxQYXJzZXIoJzNyZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAocHJlKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKGNvbnRleHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IoY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzLCBpbmRleClcblxuICBjb25zdCBbcmVwbHkzLCBbY29udGV4dDMsIHJlc3VsdDNdXSA9IGR1cChwb3N0KGNvbnRleHQyKSlcbiAgaWYgKHJlc3VsdDMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5M1xuICBpZiAocmVzdWx0My5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IoY29udGV4dDMsIHJlc3VsdDMuZXJyb3JzLCBpbmRleClcbiAgcmV0dXJuIG9rKGNvbnRleHQzLCByZXN1bHQyLnZhbHVlKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEFycmF5LFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIGZvcm1hdHRlcixcbiAgb3JkaW5hbEZ1bmN0aW9uLFxuICBvcmRpbmFsTnVtYmVyLFxuICBvcmRpbmFsUGFyc2VyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgbWF5YmVGYXRhbCwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBkdXAsIG9yZGluYWwgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWRcbiAqIHBhcnNlciB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZVxuICogcGFyc2VyIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogSWYgdGhlIGluaXRpYWwgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgaW5zdGVhZCByZXR1cm5lZC4gSWYgdGhlXG4gKiBzZWNvbmQgcGFyc2VyICh0aGUgcmV0dXJuIHZhbHVlIG9mIGBmbmApIGZhaWxzIGFuZCBgcGAgY29uc3VtZWRcbiAqIGlucHV0LCB0aGUgZmFpbHVyZSBpcyBmYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IHAyID0gZm4ocmVzdWx0MS52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW4nLCBwMiwgZm9ybWF0dGVyKCd0aGUgMm5kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocDIoY29udGV4dDEpKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXG4gICAgOiBtYXliZUZhdGFsKGNvbnRleHQyLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzXG4gKiByZXN1bHQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb25cbiAqIGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuXG4gKlxuICogSWYgdGhlIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwcm9wYWdhdGVkIG91dCBhcyB0aGVcbiAqIGZhaWx1cmUgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cbiAqXG4gKiBgbWFwKHAsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoZm4oeCkpKWAuIFRoaXMgYWxzbyBtYWtlcyBpdCBhIG1vcmUgZWZmaWNpZW50IHZlcnNpb24gb2ZcbiAqIGBwaXBlKFtwXSwgZm4pYCAoYSBzaW5nbGUtcGFyc2VyIGBwaXBlYCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseSB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOip9IGZuIEEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgIGFuZCB3aG9zZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHRoZVxuICogICAgIGNyZWF0ZWQgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgc3VjY2VlZCB3aXRoIHRoYXRcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcCA9IChwLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBvcmRpbmFsRnVuY3Rpb24oJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgZm4ocmVzdWx0LnZhbHVlKSkgOiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gVGhhdCBwYXJzZXIgaXNcbiAqIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZiBzdHJpbmdzLCBhbmQgaWYgaXQgc3VjY2VlZHMsIHRoYXRcbiAqIHJlc3VsdCdzIGVsZW1lbnRzIGFyZSBqb2luZWQgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgaXNcbiAqIHVzZWZ1bCBiZWNhdXNlIEphdmFTY3JpcHQgZG9lcyBub3Qgc2hhcmUgdGhlIGNoYXJhY3RlcmlzdGljIG9mIHNvbWVcbiAqIGZ1bmN0aW9uYWwgbGFuZ3VhZ2VzIHdoZXJlIGEgc3RyaW5nIGlzIHRoZSBzYW1lIGFzIGEgbGlzdCBvZlxuICogY2hhcmFjdGVycy4gSmF2YVNjcmlwdCBuZWVkcyBleHBsaWNpdCBjb252ZXJzaW9uIGJldHdlZW4gdGhlIHR3bywgc29cbiAqIHRoaXMgcGFyc2VyIHdpbGwgdHVybiBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIGludG8gYSBzdHJpbmcuXG4gKlxuICogSWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgdGhlIGNyZWF0ZWQgcGFyc2VyIHdpbGwgYWxzbyBmYWlsIHdpdGhcbiAqIHRoZSBzYW1lIGVycm9yIHR5cGUuXG4gKlxuICogYGpvaW4ocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHguam9pbignJykpKWAuXG4gKlxuICogSWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2VzIG5vdCByZXN1bHQgaW4gYW4gYXJyYXksIGFuIGV4Y2VwdGlvbiB3aWxsXG4gKiBiZSB0aHJvd24gYmVjYXVzZSBhbiBhdHRlbXB0IHdpbGwgYmUgbWFkZSB0byBjYWxsIGBqb2luYCBvbiB0aGVcbiAqIHJlc3VsdC4gSWYgaXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBzb21ldGhpbmcgb3RoZXIgdGhhbiBzdHJpbmdzLFxuICogdGhvc2UgZWxlbWVudHMgd2lsbCBiZSBjb2VyY2VkIGludG8gc3RyaW5ncyBhbmQgdGhlbiBqb2luZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2ZcbiAqICAgICBzdHJpbmdzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VyIGFuZFxuICogICAgIHJlc3VsdHMgaW4gYSBzaW5nbGUgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGVcbiAqICAgICBhcnJheSBvZiBzdHJpbmdzLlxuICovXG5leHBvcnQgY29uc3Qgam9pbiA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2pvaW4nLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnam9pbicsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHYuam9pbignJykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIGRpc2NhcmRzIGFueVxuICogc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGUgc3RpbGwgY29uc3VtaW5nIGlucHV0LiBBIGZhaWx1cmUgd2lsbCBiZVxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBgc2tpcChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxuICogYWx3YXlzKG51bGwpKWAsXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBkb2VzIG9uIHN1Y2Nlc3MsIGJ1dCB3aWxsIHByb2R1Y2Ugbm8gcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc2tpcCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXAnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbCkgOiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBydW4gdGhlIHN1cHBsaWVkIHBhcnNlciBidXQsIG9uIHN1Y2Nlc3MsXG4gKiByZXN1bHQgaW4gdGhlIHN1cHBsaWVkIHZhbHVlIGluc3RlYWQuXG4gKlxuICogYHZhbHVlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW5hdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cbiAqIGFsd2F5cyh4KSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3ZhbHVlJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG5cbiAgY29uc3QgW3R1cGxlLCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0LCB4KSA6IHR1cGxlXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxuICogdmFsdWUocDIsIHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAxLCBwMikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW2NvbnRleHQyLCByZXN1bHQyXSA9IHAyKGNvbnRleHQxKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dDIsIHJlc3VsdDEudmFsdWUpXG4gICAgOiBtYXliZUZhdGFsKGNvbnRleHQyLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwgaWZcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGByaWdodChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCAoKSA9PlxuICogcDIpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwMSwgcDIpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHAxLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAyKGNvbnRleHQxKSlcbiAgcmV0dXJuIHJlc3VsdDIuc3RhdHVzID09PSBPayA/IHJlcGx5MlxuICAgIDogbWF5YmVGYXRhbChjb250ZXh0Mi5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXG4gKiBgcDFgIG9yIGBwMmAgZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwsIGFuZCB0aGUgZmFpbHVyZSB3aWxsXG4gKiBiZSBmYXRhbCBpZiBhbnkgaW5wdXQgaGFkIGJlZW4gY29uc3VtZWQgYnkgZWl0aGVyIHBhcnNlci5cbiAqXG4gKiBgYm90aChwMSwgcDIpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAxLCBhID0+XG4gKiBjaGFpbihwMiwgYiA9PiBhbHdheXMoW2EsIGJdKSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBib3RoID0gKHAxLCBwMikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JvdGgnLCBwMSwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JvdGgnLCBwMiwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChwMShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW2NvbnRleHQyLCByZXN1bHQyXSA9IHAyKGNvbnRleHQxKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dDIsIFtyZXN1bHQxLnZhbHVlLCByZXN1bHQyLnZhbHVlXSlcbiAgICA6IG1heWJlRmF0YWwoY29udGV4dDIuaW5kZXggIT09IGluZGV4LCBjb250ZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXG4gKiBwYXJzZXJzIHRvIGFwcGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxdWVuY2VgLCBgbnVsbGAgcGFyc2VyIHJlc3VsdHMgYXJlICpub3QqXG4gKiBkaXNjYXJkZWQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICogdG8gYGZuYCBubyBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cbiAqXG4gKiBgcGlwZShwMSwgcDIsIGZuKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PlxuICogY2hhaW4ocDIsIGIgPT4gYWx3YXlzKGZuKGEsIGIpKSkpYCwgYHBpcGUocDEsIHAyLCBwMywgZm4pYCBpcyBhblxuICogb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgYSA9PiBjaGFpbihwMiwgYiA9PiBjaGFpbihwMyxcbiAqIGMgPT4gYWx3YXlzKGZuKGEsIGIsIGMpKSkpKWAsIGFuZCBzbyBvbi5cbiAqXG4gKiBJZiB0aGUgYXJyYXkgaGFzIG9uZSBlbGVtZW50LCB0aGUgcGFyc2VyIGJlY29tZXMgZXF1aXZhbGVudCB0byBgbWFwYFxuICogYnV0IGxlc3MgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7Li4uKFBhcnNlcnxmdW5jdGlvbiguLi4qKToqKX0gcHMgQW4gYXJyYXkgb2YgcGFyc2VycyB0byBiZVxuICogICAgIGFwcGxpZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb24gd2hpY2hcbiAqICAgICB3aWxsIHJlY2VpdmUgYXMgcGFyYW1ldGVycyB0aGUgcmVzdWx0cyBvZiBlYWNoIHBhcnNlci4gSXRzIHJldHVyblxuICogICAgIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhlIGNyZWF0ZWQgcGFyc2VyLiBBIHNpbmdsZVxuICogICAgIGZ1bmN0aW9uIG11c3QgYmUgcHJlc2VudCBhbmQgaXQgbXVzdCBiZSB0aGUgbGFzdCBwYXJhbWV0ZXI7IGFsbFxuICogICAgIG90aGVyIHBhcmFtZXRlcnMgbXVzdCBiZSBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZSA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VycygncGlwZScsIHBzKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3BpcGUnLCBmbiwgb3JkaW5hbEZ1bmN0aW9uKG9yZGluYWwocHMubGVuZ3RoICsgMSkpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgZm4oLi4udmFsdWVzKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBiZWZvcmUsIGNvbnRlbnQsIGFuZCBhZnRlciBwYXJzZXJzXG4gKiBpbiBvcmRlciBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXG4gKiBgcGFmdGVyYC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb250ZW50IHBhcnNlciB3aWxsIGhhdmUgYW4gb3Bwb3J0dW5pdHlcbiAqIHRvIHBhdGNoIHRoZSBcImFmdGVyXCIgY29udGVudCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlciBkb2VzLCBzbyB0YWtlXG4gKiBjYXJlIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxuICpcbiAqIGBiZXR3ZWVuKHByZSwgcG9zdCwgcClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxlZnQocmlnaHQocHJlLCBwKSwgcG9zdClgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHByZSwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwb3N0LCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIG9yZGluYWxQYXJzZXIoJzNyZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAocHJlKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbY29udGV4dDIsIHJlc3VsdDJdID0gcChjb250ZXh0MSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBPaykge1xuICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQyLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW2NvbnRleHQzLCByZXN1bHQzXSA9IHBvc3QoY29udGV4dDIpXG4gIHJldHVybiByZXN1bHQzLnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0MywgcmVzdWx0Mi52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwoY29udGV4dDMuaW5kZXggIT09IGluZGV4LCBjb250ZXh0MywgcmVzdWx0My5lcnJvcnMpXG59KVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG50aCBlbGVtZW50IG9mIHRoZSByZXN1bHQgb2YgYSBwYXJzZXIgdGhhdCBwcm9kdWNlcyBhblxuICogYXJyYXkuIElmIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoLlxuICpcbiAqIGBudGgocCwgbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbbl0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdudGgnLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignbnRoJywgbiwgb3JkaW5hbE51bWJlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdudGgnLCB2LCBmb3JtYXR0ZXIoJzFzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdltuXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgZmlyc3QocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbMF0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpcnN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdlswXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXG4gKiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYHNlY29uZChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFsxXSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHNlY29uZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZWNvbmQnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnc2Vjb25kJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdlsxXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgdGhpcmQgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgdGhpcmQocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbMl0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCB0aGlyZCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3RoaXJkJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdlsyXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXG4gKiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYGZvdXJ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFszXSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3VydGggPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmb3VydGgnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZm91cnRoJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdlszXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgZmlmdGgocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbNF0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpZnRoJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdls0XSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgb3JkaW5hbFBhcnNlcixcbiAgb3JkaW5hbFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGVycm9yLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBzdWNjZWVkcywgaXRzIHJlc3VsdCBiZWNvbWVzIHRoZSByZXN1bHQgb2YgdGhlIHJldHVybmVkIHBhcnNlci5cbiAqIEVpdGhlciB3YXksIG5vIGlucHV0IGlzIGNvbnN1bWVkLiBUaGlzIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXRoZXJcbiAqIHRoZSBuZXh0IGNoYXJhY3RlcihzKSBzYXRpc2Z5IHRoZSBwYXJzZXIgd2l0aG91dCBhY3R1YWxseSBjb25zdW1pbmdcbiAqIHRoZSBpbnB1dCB0byBmaW5kIG91dC5cbiAqXG4gKiBBcyBhIHNpZGUgZWZmZWN0LCBhbnkgZmF0YWwgcGFyc2UgZXJyb3Igd2lsbCBiZSB0cmFuc2Zvcm1lZCBpbnRvIGFcbiAqIG5vbi1mYXRhbCBvbmUsIHNpbmNlIG5vIGlucHV0IGlzIGJlaW5nIGNvbnN1bWVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBsb29rQWhlYWQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsb29rQWhlYWQnLCBwKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gcChjdHgpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKGNvbnRleHQsIHJlc3VsdC52YWx1ZSwgaW5kZXgpXG4gICAgOiBlcnJvcihjb250ZXh0LCByZXN1bHQuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsXG4gKiB0aGlzIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cbiAqXG4gKiBUaGlzIGVmZmVjdCBpcyB1c2VmdWwgZm9yIHR1cm5pbmcgYSBwYXJzZXIgaW50byBvbmUgd2hpY2ggbXVzdCBtYXRjaFxuICogYXQgbGVhc3Qgb25jZS4gRm9yIGluc3RhbmNlLCBvbmUgY291bGQgaW1wbGVtZW50IGBtYW55MShwKWAgd2l0aFxuICogYG5vdEVtcHR5KG1hbnkocCkpYC5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBub3RFbXB0eUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcbiAqICAgICBjb25zdW1lIGFueSBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFbXB0eSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ25vdEVtcHR5JywgcClcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBPayB8fCBjb250ZXh0LmluZGV4ICE9PSBpbmRleCA/IHJlcGx5XG4gICAgOiBlcnJvcihjb250ZXh0KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXG4gKiBgbm90RW1wdHkobWFueShwKSlgLlxuICpcbiAqIGBub3RFbXB0eU0ocCwgbXNnKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwobm90RW1wdHkocCksIG1zZylgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgc3VjY2VlZHNcbiAqICAgICB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcbiAqICAgICBjb25zdW1lIGFueSBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFbXB0eU0gPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90RW1wdHlNJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ25vdEVtcHR5TScsIG1zZywgb3JkaW5hbFN0cmluZygnMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gT2sgfHwgY29udGV4dC5pbmRleCAhPT0gaW5kZXggPyByZXBseVxuICAgIDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWQobXNnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgc3VjY2VlZHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBmb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBjb250ZXh0LCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZm9sbG93ZWRCeScsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW2NvbnRleHQsIHJlc3VsdF0gPSBwKGN0eClcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbCwgaW5kZXgpXG4gICAgOiBlcnJvcihjb250ZXh0LCB1bmRlZmluZWQsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBzdWNjZWVkcywgYnV0XG4gKiB3aGljaCBkb2VzIG5vdCBjaGFuZ2UgcGFyc2VyIGNvbnRleHQuIElmIGBwYCBkb2VzIG5vdCBzdWNjZWVkLFxuICogYGZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LCByZXBsYWNpbmcgYW55IFwiZXhwZWN0ZWRcIiBlcnJvclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBgZm9sbG93ZWRCeU0ocCwgbXNnKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwoZm9sbG93ZWRCeShwKSwgbXNnKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcbiAqICAgICBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeU0gPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZm9sbG93ZWRCeU0nLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZm9sbG93ZWRCeU0nLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gcChjdHgpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKGNvbnRleHQsIG51bGwsIGluZGV4KVxuICAgIDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWQobXNnKSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgY29udGV4dC4gSWYgYHBgIHN1Y2NlZWRzLFxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcbiAqIG9yIGVsc2UgYG5vdEZvbGxvd2VkQnlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyB3aGVuIGl0XG4gKiAgICAgZmFpbHMsIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBjb250ZXh0LCB3aGV0aGVyIG9yIG5vdCBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEZvbGxvd2VkQnkgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3RGb2xsb3dlZEJ5JywgcClcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbY29udGV4dCwgcmVzdWx0XSA9IHAoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihjb250ZXh0LCB1bmRlZmluZWQsIGluZGV4KVxuICAgIDogb2soY29udGV4dCwgbnVsbCwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgY29udGV4dC4gSWYgYHBgIHN1Y2NlZWRzLFxuICogYG5vdEZvbGxvd2VkQnkocClgIGZhaWxzIG5vbi1mYXRhbGx5LCByZXBsYWNpbmcgYW55IFwiZXhwZWN0ZWRcIiBlcnJvclxuICogbWVzc2FnZSB3aXRoIGBtc2dgIGFuZCByZW1vdmluZyBhbnkgXCJ1bmV4cGVjdGVkXCIgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBgbm90Rm9sbG93ZWRCeU0ocCwgbXNnKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwobm90Rm9sbG93ZWRCeShwKSwgbXNnKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEZvbGxvd2VkQnlNID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ25vdEZvbGxvd2VkQnlNJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ25vdEZvbGxvd2VkQnlNJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbY29udGV4dCwgcmVzdWx0XSA9IHAoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihjb250ZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcbiAgICA6IG9rKGNvbnRleHQsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBvcmRpbmFsUGFyc2VyLFxuICBvcmRpbmFsU3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmF0YWwsIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcbmNvbnN0IHsgTmVzdGVkIH0gPSBFcnJvclR5cGVcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuZnVuY3Rpb24gcGFzcyhjdHgsIHJlc3VsdCwgZXJyb3JzKSB7XG4gIHJldHVybiBbeyAuLi5jdHggfSwgeyAuLi5yZXN1bHQsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBjb25zdW1lcyBpbnB1dCwgbm90aGluZyBhZGRpdGlvbmFsIGhhcHBlbnMuIE90aGVyd2lzZSwgdGhlIG9yaWdpbmFsXG4gKiBwYXJzZXIncyByZXN1bHQgaXMgcmV0YWluZWQgYnV0IHRoZSBlcnJvciBpcyBvdmVyd3JpdHRlbiBieSB0aGVcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgYXMgYW4gZXhwZWN0ZWQgZXJyb3IuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGJldHRlciBlcnJvciBtZXNzYWdlcyBpbiBjYXNlcyB3aGVyZSB0aGVcbiAqIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGVycm9yIG1lc3NhZ2VzIGFyZSBpbnN1ZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcbiAqICAgICB0aHJvdWdoIGV4Y2VwdCBmb3IgY2hhbmdpbmcgaXRzIGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSB1cG9uXG4gKiAgICAgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxhYmVsID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xhYmVsJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2xhYmVsJywgbXNnLCBvcmRpbmFsU3RyaW5nKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIHJldHVybiBpbmRleCA9PT0gY29udGV4dC5pbmRleCA/IHBhc3MoY29udGV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKSA6IHJlcGx5XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBzdWNjZWVkcywgdGhhdCBzdWNjZXNzIGlzIHBhc3NlZCB0aHJvdWdoLCB0aG91Z2ggaWYgaXQgZGlkbid0IGNvbnN1bWVcbiAqIGFueSBpbnB1dCwgdGhlIHByb3ZpZGVkIHN0cmluZyB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGFuIGV4cGVjdGVkXG4gKiBlcnJvciBtZXNzYWdlLlxuICpcbiAqIElmIHRoZSBvcmlnaW5hbCBwYXJzZXIgZmFpbHMsIHdoYXQgaGFwcGVucyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhhdFxuICogZmFpbHVyZSBjb25zdW1lZCBpbnB1dC4gSWYgaXQgZGlkIG5vdCwgdGhlIHN1cHBsaWVkIG1lc3NhZ2VcbiAqIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2UganVzdCBhcyB3aXRoIGBsYWJlbGAuIElmIGl0XG4gKiAqZGlkKiBjb25zdW1lIGlucHV0LCB0aGUgY29udGV4dCBpcyByZXNldCB0byB0aGUgY29udGV4dCBiZWZvcmUgdGhlXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIHRoZSBlcnJvciBpcyBzZXQgdG8gYSBjb21wb3VuZCBlcnJvciB1c2luZyB0aGVcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgKHdpdGggdGhlIG5lc3RlZCBlcnJvciBiZWluZyB0aGUgb3JpZ2luYWwgZXJyb3IgdGhhdFxuICogY2FtZSBmcm9tIHRoZSBmYWlsdXJlIHBvaW50KSwgYW5kIGEgZmF0YWwgZXJyb3IgaXMgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZldyBwbGFjZXMgd2hlcmUgYSBmYXRhbCBlcnJvciBoYXBwZW5zIGFmdGVyXG4gKiBiYWNrdHJhY2tpbmcuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGVycm9yIG1lc3NhZ2UgdG8gYmUgdXNlZC4gVGhpcyB3aWxsIGJlXG4gKiAgICAgYW4gYEV4cGVjdGVkYCBlcnJvciBpZiBubyBpbnB1dCB3YXMgY29uc3VtZWQsIG9yIGEgYENvbXBvdW5kYFxuICogICAgIGVycm9yIGlmIGl0IHdhcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIGNoYW5nZXMgdGhlIGVycm9yXG4gKiAgICAgYXMgYXBwcm9wcmlhdGUgaWYgYHBgIGZhaWxzLlxuICovXG5leHBvcnQgY29uc3QgYmFja0xhYmVsID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JhY2tMYWJlbCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdiYWNrTGFiZWwnLCBtc2csIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSBjb250ZXh0LmluZGV4XG4gICAgICA/IHBhc3MoY29udGV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKSA6IHJlcGx5XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IGNvbnRleHQuaW5kZXgpIHtcbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDEgJiYgcmVzdWx0LmVycm9yc1swXS50eXBlID09PSBOZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHsgY3R4LCBlcnJvcnMgfSA9IHJlc3VsdC5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBwYXNzKGNvbnRleHQsIHJlc3VsdCwgY29tcG91bmQobXNnLCBjdHgsIGVycm9ycykpXG4gICAgfVxuICAgIHJldHVybiBwYXNzKGNvbnRleHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSlcbiAgfVxuICByZXR1cm4gZmF0YWwoY3R4LCBjb21wb3VuZChtc2csIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIG9yZGluYWxOdW1iZXIsXG4gIG9yZGluYWxQYXJzZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBvaywgUGFyc2VyLCBTdGF0dXMsIG1heWJlRmF0YWwgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBvcmRpbmFsLCByYW5nZSwgc3RyaW5naWZ5IH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbmNvbnN0IHsgT2ssIEVycm9yLCBGYXRhbCB9ID0gU3RhdHVzXG5cbmZ1bmN0aW9uIGxvb3BNZXNzYWdlKG5hbWUpIHtcbiAgcmV0dXJuIGBbJHtuYW1lfV06IGluZmluaXRlIGxvb3AgZGV0ZWN0ZWQ7IGBcbiAgICArICduZWl0aGVyIGNvbnRlbnQgbm9yIHNlcGFyYXRvciBwYXJzZXIgY29uc3VtZWQgaW5wdXQnXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXNcbiAqIGV4ZWN1dGVkIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmVcbiAqIGZhaWxzLiBJbiB0aGUgZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0XG4gKiBiZWNvbWVzIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogVGhlIHJldHVybmVkIHBhcnNlciBtYXkgZmFpbCBmYXRhbGx5IGV2ZW4gaWYgdGhlIHVuc3VjY2Vzc2Z1bFxuICogY29udGFpbmVkIHBhcnNlciBmYWlscyBub24tZmF0YWxseS4gVGhpcyB3aWxsIGhhcHBlbiBpZiBhbnkgcHJldmlvdXNcbiAqIHBhcnNlciBzdWNjZWVkZWQgYW5kIGNvbnN1bWVkIGlucHV0LiBFc3NlbnRpYWxseSwgaWYgdGhlIHJldHVybmVkXG4gKiBwYXJzZXIgY29uc3VtZXMgYW55dGhpbmcgYW5kIHRoZW4gZmFpbHMsIGl0IHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxdWVuY2UgPSAoLi4ucHMpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2Vycygnc2VxdWVuY2UnLCBwcylcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhXG4gKiBnZW5lcmF0b3IgZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZFxuICogd2lsbCBiZSBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlblxuICogYmUgYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS4gSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCxcbiAqIGBibG9ja2Agd2lsbCBhbHNvIGZhaWwgd2l0aCB0aGF0IGZhaWx1cmUuIFRoaXMgZmFpbHVyZSB3aWxsIGJlIGZhdGFsXG4gKiBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrID0gZ2VuRm4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbignYmxvY2snLCBnZW5GbilcblxuICBjb25zdCBnZW4gPSBnZW5GbigpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IGNvbnRleHQgPSBjdHhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXG4gICAgaWYgKGRvbmUpIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jsb2NrJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XG4gICAgICBvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbbmV4dCwgcmVzdWx0XSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHJlc3VsdC52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXG4gKiBwcm92aWRpbmcgdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmXG4gKiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSwgaXRcbiAqIHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueScsIHApXG5cbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW5cbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueTEnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBsZXQgY29udGV4dCA9IG5leHRcbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5XG4gKiBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSxcbiAqIGl0IHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBTdWNjZXNzZnVsIHJlc3VsdHMgYXJlIGRpc2NhcmRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNraXBNYW55ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcE1hbnknLCBwKVxuXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3RcbiAqIHN1Y2NlZWQgYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSxcbiAqIHRoZSByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0XG4gKiB3aGVuIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIFN1Y2Nlc3NmdWwgcmVzdWx0cyBhcmUgZGlzY2FyZGVkLlxuICovXG5leHBvcnQgY29uc3Qgc2tpcE1hbnkxID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcE1hbnkxJywgcClcblxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgbGV0IGNvbnRleHQgPSBuZXh0XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcbiAqIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzbyB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyXG4gKiB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG8gZmFpbCBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkgPSAocCwgc2VwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBwLCBvcmRpbmFsUGFyc2VyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHQsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IGR1cChzZXAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IGR1cChwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXG4gKiBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2Ugb3IgYSBub24tZmF0YWwgZmFpbHVyZVxuICogd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5IGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzXG4gKiBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkxID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBCeTEnLCBzZXAsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBuZXh0XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gZHVwKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xuICogdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlciB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG9cbiAqIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5ID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5JywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5Jywgc2VwLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0LCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgY29udGV4dCA9IG5leHRcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAoc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnknKSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIHJldHVybiBvayhzZXBOZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIG11c3Qgc3VjY2VlZCBhdCBsZWVhc3Qgb25jZVxuICogb3IgYSBub24tZmF0YWwgZmFpbHVyZSB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHlcbiAqIGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcbiAqIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBFbmRCeTEgPSAocCwgc2VwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnkxJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHNlcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgY29udGV4dCA9IG5leHRcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAoc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5jb250ZXh0LCBpbmRleCB9KVxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcbiAqIGR1cmluZyB0aGF0IGZhaWx1cmUsIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChwLCBuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0JywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdCcsIG4sIG9yZGluYWxOdW1iZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxuICpcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcywgdGhlIG92ZXJhbGxcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXG4gKiBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsID0gKHAsIGVuZCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsJywgZW5kLCBvcmRpbmFsUGFyc2VyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSBkdXAoZW5kKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoXG4gICAgICAgIGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuZnVuY3Rpb24gb3BGb3JtYXR0ZXIob3JkKSB7XG4gIHJldHVybiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHtvcmR9IG9wIHBhcnNlciB0byByZXR1cm4gYSBmdW5jdGlvbjsgZm91bmQgJHtcbiAgICBzdHJpbmdpZnkodmFsdWUpXG4gIH1gXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jTCA9IChwLCBvcCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jTCcsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5b3AsIFtjb250ZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5cCwgW2NvbnRleHRwLCByZXN1bHRwXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY0wnLCByZXN1bHRvcC52YWx1ZSwgb3BGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jMUwgPSAocCwgb3ApID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFMJywgcCwgb3JkaW5hbFBhcnNlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBvcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5b3AsIFtjb250ZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5cCwgW2NvbnRleHRwLCByZXN1bHRwXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFMJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jUiA9IChwLCBvcCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBvcCwgb3JkaW5hbFBhcnNlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSBkdXAocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5b3AsIFtjb250ZXh0b3AsIHJlc3VsdG9wXV0gPSBkdXAob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5cCwgW2NvbnRleHRwLCByZXN1bHRwXV0gPSBkdXAocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY1InLCByZXN1bHRvcC52YWx1ZSwgb3BGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKHJlc3VsdG9wLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdHAudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBlaXRoZXIgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSBvciB0aGUgY29udGVudCBwYXJzZXIgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJZlxuICogdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuIHRoYXQgcmVzdWx0IG9mXG4gKiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvYzFSID0gKHAsIG9wKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxUicsIHAsIG9yZGluYWxQYXJzZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgb3AsIG9yZGluYWxQYXJzZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IG5leHRcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseW9wLCBbY29udGV4dG9wLCByZXN1bHRvcF1dID0gZHVwKG9wKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseXAsIFtjb250ZXh0cCwgcmVzdWx0cF1dID0gZHVwKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2MxUicsIHJlc3VsdG9wLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IHN0cmluZ1RvVmlldywgdHJhY2sgfSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Vycm9yLmpzJykuRXJyb3JMaXN0fSBFcnJvckxpc3QgKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIG9uZSBvZiB0aGUgdHlwZXNcbiAqIG9mIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcbn1cblxuLyoqXG4gKiBBIHN5bWJvbCByZXByZXNlbnRpbmcgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBwYXJzaW5nIG9wZXJhdGlvbi5cbiAqIEBlbnVtIHtzeW1ib2x9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0dXMgPSB7XG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cbiAgT2s6IFN5bWJvbCgnb2snKSxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cbiAgRXJyb3I6IFN5bWJvbCgnZXJyb3InKSxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCBhbmQgY29uc3VtZWQgaW5wdXQuICovXG4gIEZhdGFsOiBTeW1ib2woJ2ZhdGFsJyksXG59XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0IGFuZCBhXG4gKiBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdpdGhpbiBpdC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICogY29udGV4dCBhbmQgdGhlIHJlc3VsdC5cbiAqIEB0eXBlZGVmIHtbQ29udGV4dCwgUmVzdWx0XX0gUmVwbHlcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHsoXG4gKiAgIFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fFxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheVxuICogKX0gVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgcGFyc2VyIGNvbnRleHQuIFRoaXMgaXMgbm90IGV4cG9ydGVkIGJlY2F1c2UgYVxuICogbmV3IGNvbnRleHQgaXMgb25seSBjcmVhdGVkIGJlZm9yZSBwYXJzaW5nLCBpbiB0aGUgYHBhcnNlYCBmdW5jdGlvbi5cbiAqIEFueSBmdXJ0aGVyIGNvbnRleHRzIGFyZSBkZXJpdmVkIGZyb20gdGhlIGNvbnRleHQgdXNpbmcge0BsaW5rIG9rfSxcbiAqIHtAbGluayBlcnJvcn0sIG9yIHtAbGluayBmYXRhbH0uXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcbiAqICAgICB0ZXh0LlxuICogQHJldHVybnMge0NvbnRleHR9IEFuIGVtcHR5IHBhcnNlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gQ29udGV4dChpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBjb250ZXh0LCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIGNvbnRleHQuXG4gKlxuICogQGNhbGxiYWNrIFBhcnNlclxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgdXBkYXRlZCBjb250ZXh0IGFmdGVyIHRoZSBwYXJzZXIgaXMgYXBwbGllZCBhbmRcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxuICogYW5kIHJldHVybnMgdGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uOyB0aGUgcHVycG9zZSBvZiB0aGUgZmFjdG9yeSBpc1xuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxuICpcbiAqIElmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQsIHRoaXMgd2lsbCBtZWFuIHRoYXQgYW55IHBhcnNlciBjb21iaW5hdG9yXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcbiAqIGV2ZW4gaWYgaXQgYWNjZXB0cyB0aGUgcmlnaHQga2luZCBvZiBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgcHJvcGVyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXG4gKiBkb25lLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgUGFyc2VyID0gdHJhY2soZm4gPT4gZm4pXG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLCBhcyB3ZWxsIGFzXG4gKiBhIGBDb250ZXh0YCBwb3RlbnRpYWxseSB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBwYXJzZXJcbiAqICAgICB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2soY3R4LCB2YWx1ZSA9IG51bGwsIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXRcbiAqIGNvbnN1bWluZyBpbnB1dCwgYXMgd2VsbCBhcyBhIGNvcHkgb2YgYENvbnRleHRgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVycm9yKGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRXJyb3IsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZVxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgbmV3IGBDb250ZXh0YCB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsKGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlciBhcHBsaWNhdG9pbiBmYWlsZWQuXG4gKiBXaGV0aGVyIHRoaXMgaXMgYSBmYXRhbCBlcnJvciBvciBub3QgZGVwZW5kcyBvbiB3aGV0aGVyIGB0ZXN0YCBpc1xuICogYHRydWVgIChmYXRhbCkgb3IgYGZhbHNlYCAobm9uLWZhdGFsKS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHRlc3QgVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcHJvZHVjZWQgcmVzdWx0XG4gKiAgICAgcmVwcmVzZW50cyBhIGZhdGFsIGVycm9yIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlRmF0YWwodGVzdCwgY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IC4uLmN0eCwgaW5kZXggfSxcbiAgICB7IHN0YXR1czogdGVzdCA/IFN0YXR1cy5GYXRhbCA6IFN0YXR1cy5FcnJvciwgZXJyb3JzIH0sXG4gIF1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSxcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxuICogY29udGV4dCByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSBmaW5hbCBjb250ZXh0IGFmdGVyIGFsbCBwYXJzZXJzIGhhdmUgYmVlblxuICogICAgIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZpbmFsIHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHBhcnNlciwgaW5wdXQpIHtcbiAgcmV0dXJuIHBhcnNlcihDb250ZXh0KGlucHV0KSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge1N0YXR1c30gVGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0dXMocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1c1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBpbnZvY2F0aW9uIG9mIGBwYXJzZWAgd2FzIHN1Y2Nlc3NmdWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBwYXJzZXIgc3VjY2VlZGVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBkaWQgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VlZGVkKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXMgPT09IFN0YXR1cy5Pa1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC4gSWYgdGhlIHBhcnNlclxuICogZGlkIG5vdCBzdWNjZWVkLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIE5vdGUgdGhhdCBgbnVsbGAgaXMgYSBwb3NzaWJsZSByZXN1bHQgZnJvbSBzb21lIGluZGl2aWR1YWwgcGFyc2Vyc1xuICogKGBza2lwYCwgYGxvb2tBaGVhZGAsIGV0Yy4pLiBUaGUgcHJvcGVyIHdheSB0byB0ZWxsIGlmIGEgcGFyc2VyXG4gKiBzdWNjZWVkZWQgaW4gdGhlIGZpcnN0IHBsYWNlIGlzIHRvIHVzZSBgc3VjY2VlZGVkYC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHZhbHVlIGZyb20gdGhlIHBhcnNlIGlmIGl0IHdhcyBzdWNjZXNzZnVsLFxuICogICAgIG9yIGBudWxsYCBpZiBpdCB3YXMgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VzcyhyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IHJlcGx5WzFdLnZhbHVlIDogbnVsbFxufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgc3RyaW5nIGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGFuXG4gKiB1bnN1Y2Nlc3NmdWwgaW52b2NhdGlvbiBvZiBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyIHdhcyBhY3R1YWxseVxuICogc3VjY2Vzc2Z1bCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZm9ybWF0dGVkIHN0cmluZyBkZXRhaWxpbmcgdGhlIGNpcmN1bXN0YW5jZXMgb2ZcbiAqICAgICB0aGUgcGFyc2VyIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gbnVsbCA6IGZvcm1hdEVycm9ycyguLi5yZXBseSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBSZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWUgaWYgdGhlIHBhcnNlclxuICogc3VjY2VlZHMsIG9yIHRocm93cyBhbiBleGNlcHRpb24gd2l0aCB0aGUgcGFyc2VyJ3MgZXJyb3IgbWVzc2FnZSBpZlxuICogaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxuICogQHBhcmFtIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBpbnB1dCBUaGUgaW5wdXRcbiAqICAgICB0ZXh0LlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XG4gIGNvbnN0IFtjdHgsIHJlc3VsdF0gPSBwYXJzZXIoQ29udGV4dChpbnB1dCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhjdHgsIHJlc3VsdCkpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBjaGFyTGVuZ3RoLFxuICBjb21tYVNlcGFyYXRlLFxuICBuZXh0Q2hhcldpZHRoLFxuICB2aWV3VG9TdHJpbmcsXG59IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3ltYm9sIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cbiAgICovXG4gIEV4cGVjdGVkOiBTeW1ib2woJ2V4cGVjdGVkJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxuICAgKiBwcm9kdWNlZCBieSBwYXJzZXJzIHN1Y2ggYXMgYHVuZXhwZWN0ZWRgIGFuZCBgbm90Rm9sbG93ZWRCeWAuXG4gICAqL1xuICBVbmV4cGVjdGVkOiBTeW1ib2woJ3VuZXhwZWN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cbiAgICovXG4gIEdlbmVyaWM6IFN5bWJvbCgnZ2VuZXJpYycpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXG4gICAqL1xuICBOZXN0ZWQ6IFN5bWJvbCgnbmVzdGVkJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIG5lc3RlZCBlcnJvciB3aXRoIGl0cyBvd24gc2VwYXJhdGUgZXJyb3JcbiAgICogbWVzc2FnZS4gVGhpcyBpcyBwcm9kdWNlZCBzcGVjaWZpY2FsbHkgYnkgdGhlIGBjb21wb3VuZGAgcGFyc2VyLlxuICAgKi9cbiAgQ29tcG91bmQ6IFN5bWJvbCgnY29tcG91bmQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXG4gICAqL1xuICBPdGhlcjogU3ltYm9sKCdvdGhlcicpLFxufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcbiAqIGNvbnRleHQuIFRoZSB0eXBlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBsYWJlbCBzaG91bGQgYmVcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTG9jYWxFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiB0aGFuIHRoZSBvbmUgcmVmZXJyZWRcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IGNvbnRleHQuIFRoZSBtb3N0IHR5cGljYWwgcmVhc29uIGZvciB0aGlzIGhhcHBlbmluZ1xuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XG4gKiAocG9zdC1iYWNrdHJhY2spIGxvY2F0aW9uIHdoaWxlIHRoZSBuZXN0ZWQgZXJyb3IgcmV0YWlucyBpbmZvcm10aW9uXG4gKiBmcm9tIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgYmFja3RyYWNraW5nIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXN0ZWRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZXJyb3IgbGlzdCBjb250YWluaW5nIG9uZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuRXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuIEl0IGlzIGV4cGVjdGVkIHRoYXQgb25lIGFycmF5IG9mXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXG4gKiBmaXJzdCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xuICogICAgIG5vdCBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIHVuZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5VbmV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgaW4gYW4gYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMsIGJ1dCBvbmx5IHRoZSBmaXJzdCB3aWxsXG4gKiBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7RXJyb3JNZXNzYWdlfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBnZW5lcmljIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuR2VuZXJpYywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcbiAqIGZvcm1hdHRlciBhdCBhbGwgYW5kIGFyZSBvbmx5IHVzZWZ1bCBmb3IgY3VzdG9tIGZvcm1hdHRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7RXJyb3JNZXNzYWdlfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgb3RoZXIgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuT3RoZXIsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5lc3RlZCBlcnJvci4gVGhpcyB0YWtlcyBhbiBlcnJvciBsaXN0IGFuZCB3cmFwcyBpdCB3aXRoXG4gKiBjb250ZXh0IGluZm9ybWF0aW9uLiBJZiB0aGUgc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlXG4gKiBuZXN0ZWQgZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3JcbiAqIHdpbGwgbm90IGJlIG5lc3RlZCBpbiBhbm90aGVyIG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge05lc3RlZEVycm9yfSBBIG5ldyBuZXN0ZWQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IGVycm9yc1xuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgY3R4LCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGNvbXBvdW5kIGVycm9yLiBUaGlzIHdyYXBzIGFuIGVycm9yIGxpc3QganVzdCBhcyBhXG4gKiBuZXN0ZWQgZXJyb3IgZG9lcywgZXhjZXB0IGl0IGFsc28gYXR0YWNoZXMgYSBtZXNzYWdlIHRvIGl0LiBJZiB0aGVcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xuICogdXNlZCB0byBjcmVhdGUgYSBuZXcgY29tcG91bmQgZXJyb3Igd2l0aG91dCBhbnkgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZFxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge0NvbXBvdW5kRXJyb3J9IEEgbmV3IGNvbXBvdW5kIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG91bmQobGFiZWwsIGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBbe1xuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxuICAgICAgY3R4OiBlcnJvcnMuY3R4LFxuICAgICAgZXJyb3JzOiBlcnJvcnMuZXJyb3JzLFxuICAgICAgbGFiZWwsXG4gICAgfV1cbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCwgY3R4LCBlcnJvcnMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMxIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzMiBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSwgZXJyb3JzMikge1xuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXG59XG5cbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcbiAqICAgICBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqL1xuXG4vKipcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgKlxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcbiAgKiAgICAgdGFiIHNpemUuXG4gICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXG4gKiBkZXNpcmVkLlxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cbiAqXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChieXRlID09PSAweDBkKSB7XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxuICpcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXG4gIGxldCBpID0gMFxuXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcbiAgICBpZiAobmV3bGluZSkge1xuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XG4gICAgICB9XG4gICAgICBsaW5lbm8rK1xuICAgICAgc3RhcnQgPSBpICsgc2tpcFxuICAgIH1cbiAgICBpICs9IHNraXBcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXG4gKlxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xuICBsZXQgY2hhckluZGV4ID0gMFxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcbiAgICBjaGFySW5kZXgrK1xuICB9XG4gIHJldHVybiBjaGFySW5kZXhcbn1cblxuLyoqXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcbiAqIGNoYXJhY3RlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xuICBjb25zdCB0YWJJbmRleGVzID0gW11cbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXG4gIGxldCByZXN1bHQgPSBsaW5lXG5cbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgfVxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcbiAqIG1hcmtzLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xuICBsZXQgaW5kZXggPSBjb2xJbmRleFxuICBjb25zdCBtYXRjaGVzID0gW11cblxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXG4gKiAgICAgY29sdW1uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcbiAgICB9XmBcbiAgfVxuXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAke3NwfS4uLiR7XG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcbiAgfS4uLlxcbiR7c3B9JHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxuICogICAgIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5jdHhcbiAgICBjb25zdCBsYWJlbCA9IG4ubGFiZWxcbiAgICAgID8gYFxcbiR7c3B9JHtuLmxhYmVsfSBjb3VsZCBub3QgYmUgcGFyc2VkIGJlY2F1c2U6XFxuXFxuYFxuICAgICAgOiBgXFxuJHtzcH1UaGUgcGFyc2VyIGJhY2t0cmFja2VkIGFmdGVyOlxcblxcbmBcbiAgICByZXR1cm4gbGFiZWwgKyBmb3JtYXQobi5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ICsgMilcbiAgfSlcbiAgcmV0dXJuIG5lc3RlZE1zZ3Muam9pbignJylcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYSBzdHJpbmcgZW5kcyB3aXRoIGEgY2VydGFpbiBudW1iZXIgb2YgbmV3bGluZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHN0cmluZyB0aGF0IGlzIHN1cHBvc2VkIHRvIGhhdmUgYSBjZXJ0YWluXG4gKiAgICAgbnVtYmVyIG9mIG5ld2xpbmVzIGF0IHRoZSBlbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgYnV0IHdpdGggYGNvdW50YCBuZXdsaW5lcyBhdCB0aGVcbiAqICAgICBlbmQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZU5ld2xpbmVzKHRleHQsIGNvdW50KSB7XG4gIGxldCByZXN1bHQgPSB0ZXh0XG4gIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArICdcXG4nLnJlcGVhdChjb3VudClcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZyB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHBhcnRzOlxuICpcbiAqIDEuIEEgcG9zaXRpb24gbGluZSB0aGF0IGdpdmVzIHRoZSBsaW5lIG51bWJlciBhbmQgY29sdW1uIG51bWJlciB3aGVyZVxuICogICAgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXG4gKiAgICB0d28gbGluZXMgaW4gdGhlIGVycm9yIG1lc3NhZ2UuIFRoZSBmaXJzdCBpcyBlaXRoZXIgdGhlIGVudGlyZVxuICogICAgaW5wdXQgbGluZSBvciwgaWYgdGhhdCdzIHRvbyBsb25nLCBhIHBvcnRpb24gb2YgdGhlIGlucHV0IGxpbmVcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcbiAqICAgIGxvY2F0aW9uLiBUaGUgc2Vjb25kIGlzIGEgY2FyZXQgcG9zaXRpb25lZCB1bmRlcm5lYXRoIHRoZSBsb2NhdGlvblxuICogICAgaW4gdGhlIGZpcnN0IGxpbmUgdGhhdCBzaG93cyBleGFjdGx5IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cbiAqIDQuIEFsbCBvZiB0aGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXMgKGlmIGFueSksIHNlcGFyYXRlZCBieSAnb3InIGFuZFxuICogICAgY29tbW1hcyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIG51bWJlciBvZiBtZXNzYWdlcy5cbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxuICpcbiAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXJyb3IgaXMgaW5kaWNhdGVkIGJ5IHRoZSBgaW5kZXhgIHBhcmFtZXRlcixcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcbiAqIGVycm9yIG9jY3VycmVkLiBUaGUgY2FsY3VsYXRpb24gb2YgbGluZSBhbmQgY29sdW1uIG51bWJlciBmcm9tIHRoaXNcbiAqIGZsYXQgYXJyYXkgb2YgYnl0ZXMgdGFrZXMgdGhlIGZvbGxvd2luZyBpbnRvIGFjY291bnQ6XG4gKlxuICogKiBNdWx0aS1ieXRlIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgaXMgVVRGLTggYXdhcmUsIHNvIGNoYXJhY3RlcnMgY2FuXG4gKiAgIGJlIDEsIDIsIDMsIG9yIDQgYnl0ZXMgbG9uZylcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXG4gKiAqIFRhYnMsIHdoaWNoIGFyZSBleHBhbmRlZCBpbnRvIGEgbnVtYmVyIG9mIHNwYWNlcyBzZXQgYnkgdGhlXG4gKiAgIGB0YWJTaXplYCBwYXJhbWV0ZXJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcbiAqICAgb3IgTFRSIGZvcm1hdHRpbmcgY2hhcmFjdGVycywgYW5kIGRpYWNyaXRpY3MgKEhlYnJldyBvciBUaGFpIHZvd2VsXG4gKiAgIG1hcmtzLCB1bWxhdXRzIG92ZXIgTGF0aW4gY2hhcmFjdGVycywgZXRjLilcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSA1IGVsZW1lbnRzIGFib3ZlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogVGhlIGZvbGxvd2luZyB0d28gbGluZXMgb2YgY29kZSB1c2VzIGBzdHJpbmdUb1ZpZXdgLCBhbiBpbnRlcm5hbFxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXG4gKiBVVEYtOCBkYXRhIHZpZXcuIEl0J3MgY2FsbGVkIGJ5IGBwYXJzZWAgaXRzZWxmLCBzbyBpbiByZWFsIHdvcmxkXG4gKiB1c2FnZSwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGtub3cuXG4gKlxuICogYGBgXG4gKiBjb25zdCB2aWV3ID0gc3RyaW5nVG9WaWV3KCdcXHRPbm9tYXRvcG9laWFcXHRcXHRcXHRcXHTguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIcnKVxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcbiAqIGBgYFxuICpcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcbiAqIHByb2R1Y2VkOlxuICpcbiAqIGBgYFxuICogUGFyc2UgZXJyb3IgYXQgKGxpbmUgMSwgY29sdW1uIDM3KTpcbiAqXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxuICogRXhwZWN0ZWQgYSBkaWdpdFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdG8gYmUgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbiB0aGUgdmlldyB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZW50PTBdIFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRoZSBtZXNzYWdlIHNob3VsZCBiZVxuICogICAgIGluZGVudGVkLiBUaGlzIHNob3VsZCBiZSAwIGFuZCBpbmNyZWFzZWQgb25seSBmb3IgbmVzdGVkIGVycm9ycy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICBjb25zdCBwb3NpdGlvbiA9IGAke3NwfVBhcnNlIGVycm9yIGF0IChsaW5lICR7bGluZW5vfSwgY29sdW1uICR7Y29sbm99KTpgXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGdlbmVyaWMgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcbiAgKVxuXG4gIGNvbnN0IG5lc3RlZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZClcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcblxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgJHtzcH1VbmV4cGVjdGVkICR7dW5leHBlY3RlZC5sYWJlbH1cXG5gIDogJydcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcbiAgY29uc3QgZ2VuZXJpY01zZyA9IGdlbmVyaWMgPyBgJHtzcH0ke2dlbmVyaWMubGFiZWx9XFxuYCA6ICcnXG5cbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgY29tcG91bmRNc2cgPSBmb3JtYXROZXN0ZWQoY29tcG91bmQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IGVycm9ycy5sZW5ndGggPT09IDAgPyBgJHtzcH1Vbmtub3duIGVycm9yKHMpXFxuYCA6ICcnXG4gIGNvbnN0IGVvZk1zZyA9IGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gYCR7c3B9Tm90ZTogZmFpbHVyZSBvY2N1cnJlZCBhdCB0aGUgZW5kIG9mIGlucHV0XFxuYCA6ICcnXG5cbiAgcmV0dXJuIGVuc3VyZU5ld2xpbmVzKFxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxuICAgICAgKyBgJHtlb2ZNc2d9JHtjb21wb3VuZE1zZ30ke25lc3RlZE1zZ31gLFxuICAgIDIsXG4gIClcbn1cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEFjY2VwdHMgYSBwYXJzZXIgY29udGV4dCBhbmQgcHJvZHVjZXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGl0LlxuICpcbiAqIEEgZGVmYXVsdCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQgYnV0IGFuIGFsdGVybmF0ZSBvbmUgY2FuIGJlIHBhc3NlZFxuICogaW4uIFRoZSBzYW1lIGdvZXMgZm9yIHRhYiBzaXplICh1c2VkIHRvIGV4cGFuZCB0YWJzIGluIHBhcnNlZCB0ZXh0O1xuICogZGVmYXVsdHMgdG8gOCkgYW5kIG1heCB3aWR0aCAoZm9yIHRoZSBlcnJvciBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHNcbiAqIHRvIDcyKS5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgcGFyc2VyJ3MgY29udGV4dCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7UmVzdWx0fSByZXN1bHQgVGhlIHJlc3VsdCBwcm9kdWNlZCB3aGVuIHRoZSBlcnJvciBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKFxuICBjdHgsIHJlc3VsdCwgdGFiU2l6ZSA9IDgsIG1heFdpZHRoID0gNzIsIGZvcm1hdHRlciA9IGZvcm1hdCxcbikge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgY29udGV4dC4gVGhlXG4gKiBwb3NpdGlvbiBpcyBhbiBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgdGhhdCBhcmVcbiAqIHRoZSAxLWJhc2VkIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRoZSBieXRlIGF0IHRoZSBjb250ZXh0J3NcbiAqIGluZGV4IHdpdGhpbiB0aGUgY29udGV4dCdzIGRhdGEgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCB3aG9zZSBjdXJyZW50IHBvc2l0aW9uIGlzIGJlaW5nXG4gKiAgICAgY2FsY3VsYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLiBUaGUgY3VycmVudCBwb3NpdGlvbidzIGNvbHVtbiBudW1iZXIgaXMgYWRqdXN0ZWQgYmFzZWRcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICogQHJldHVybnMge1Bvc2l0aW9ufSBBIHR3by1wcm9wZXJ0eSBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gXG4gKiAgICAgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGN0eCwgdGFiU2l6ZSA9IDgpIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgYW55T2YsXG4gIGNoYXIsXG4gIGNoYXJJLFxuICBkaWdpdCxcbiAgZW9mLFxuICBoZXgsXG4gIGxldHRlcixcbiAgbG93ZXIsXG4gIG5vbmVPZixcbiAgb2N0YWwsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICBzYXRpc2Z5TSxcbiAgdXBwZXIsXG59IGZyb20gJy4vcGFyc2Vycy9jaGFyJ1xuZXhwb3J0IHtcbiAgYWx3YXlzLFxuICBmYWlsLFxuICBmYWlsRmF0YWxseSxcbiAgZmFpbFVuZXhwZWN0ZWQsXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xuZXhwb3J0IHtcbiAgYWxwaGFVLFxuICBsZXR0ZXJVLFxuICBsb3dlclUsXG4gIG5ld2xpbmUsXG4gIG5ld2xpbmVVLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlVSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICBzcGFjZXMxVSxcbiAgc3BhY2VzVSxcbiAgdXBwZXJVLFxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXG5leHBvcnQge1xuICBhbGwsXG4gIGFueVN0cmluZyxcbiAgc3RyaW5nLFxuICBzdHJpbmdJLFxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NQklOQVRPUlNcblxuZXhwb3J0IHtcbiAgYXR0ZW1wdCxcbiAgYmV0d2VlbkIsXG4gIGJsb2NrQixcbiAgYm90aEIsXG4gIGNoYWluQixcbiAgY2hvaWNlLFxuICBkZWYsXG4gIGxlZnRCLFxuICBtYW55VGlsbEIsXG4gIG9wdCxcbiAgcGlwZUIsXG4gIHJlcGVhdEIsXG4gIHJpZ2h0QixcbiAgc2VxdWVuY2VCLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xuZXhwb3J0IHtcbiAgYmV0d2VlbixcbiAgYm90aCxcbiAgY2hhaW4sXG4gIGZpZnRoLFxuICBmaXJzdCxcbiAgZm91cnRoLFxuICBqb2luLFxuICBsZWZ0LFxuICBtYXAsXG4gIG50aCxcbiAgcGlwZSxcbiAgcmlnaHQsXG4gIHNlY29uZCxcbiAgc2tpcCxcbiAgdGhpcmQsXG4gIHZhbHVlLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2NoYWluaW5nJ1xuZXhwb3J0IHtcbiAgZm9sbG93ZWRCeSxcbiAgZm9sbG93ZWRCeU0sXG4gIGxvb2tBaGVhZCxcbiAgbm90RW1wdHksXG4gIG5vdEVtcHR5TSxcbiAgbm90Rm9sbG93ZWRCeSxcbiAgbm90Rm9sbG93ZWRCeU0sXG59IGZyb20gJy4vY29tYmluYXRvcnMvY29uZGl0aW9uYWwnXG5leHBvcnQge1xuICBiYWNrTGFiZWwsXG4gIGxhYmVsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL21lc3NhZ2UnXG5leHBvcnQge1xuICBhc3NvYzFMLFxuICBhc3NvYzFSLFxuICBhc3NvY0wsXG4gIGFzc29jUixcbiAgYmxvY2ssXG4gIG1hbnksXG4gIG1hbnkxLFxuICBtYW55VGlsbCxcbiAgcmVwZWF0LFxuICBzZXBCeSxcbiAgc2VwQnkxLFxuICBzZXBFbmRCeSxcbiAgc2VwRW5kQnkxLFxuICBzZXF1ZW5jZSxcbiAgc2tpcE1hbnksXG4gIHNraXBNYW55MSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXG5cbmV4cG9ydCB7XG4gIFBhcnNlcixcbiAgU3RhdHVzLFxuICBlcnJvcixcbiAgZmFpbHVyZSxcbiAgZmF0YWwsXG4gIG1heWJlRmF0YWwsXG4gIG9rLFxuICBwYXJzZSxcbiAgcnVuLFxuICBzdGF0dXMsXG4gIHN1Y2NlZWRlZCxcbiAgc3VjY2Vzcyxcbn0gZnJvbSAnLi9jb3JlJ1xuZXhwb3J0IHtcbiAgRXJyb3JUeXBlLFxuICBjb21wb3VuZCxcbiAgZXhwZWN0ZWQsXG4gIGZvcm1hdEVycm9ycyxcbiAgZ2VuZXJpYyxcbiAgZ2V0UG9zaXRpb24sXG4gIG1lcmdlLFxuICBuZXN0ZWQsXG4gIG90aGVyLFxuICB1bmV4cGVjdGVkLFxufSBmcm9tICcuL2Vycm9yJ1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgY29tbWFTZXBhcmF0ZSwgcXVvdGUgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBhbHBoYTogJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbHBoYVU6ICdhIFVuaWNvZGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxuICBhbnlPZjogYXJyYXkgPT4gJ2FueSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBhbnlTdHJpbmc6IG4gPT4gYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2AsXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXG4gIGNoYXJJOiBjID0+IHF1b3RlKGMpLFxuICBkaWdpdDogJ2EgZGlnaXQnLFxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxuICBoZXg6ICdhIGhleGFkZWNpbWFsIGRpZ2l0JyxcbiAgbGV0dGVyOiAnYSBsZXR0ZXInLFxuICBsZXR0ZXJVOiAnYSBVbmljb2RlIGxldHRlcicsXG4gIGxvd2VyOiAnYSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbG93ZXJVOiAnYSBVbmljb2RlIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcbiAgbmV3bGluZVU6ICdhIFVuaWNvZGUgbmV3bGluZScsXG4gIG5vbmVPZjogYXJyYXkgPT4gJ25vbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgb2N0YWw6ICdhbiBvY3RhbCBkaWdpdCcsXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gYGEgY2hhcmFjdGVyIGJldHdlZW4gJyR7c3RhcnR9JyBhbmQgJyR7ZW5kfSdgLFxuICByZWdleDogcmUgPT4gYGEgc3RyaW5nIG1hdGNoaW5nICR7cmV9YCxcbiAgc3BhY2U6ICdhIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgc3BhY2VzOiAnemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczE6ICdvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXNVOiAnemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzMVU6ICdvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlVTogJ2EgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHN0cmluZzogc3RyID0+IHF1b3RlKHN0ciksXG4gIHN0cmluZ0k6IHN0ciA9PiBxdW90ZShzdHIpLFxuICB1cHBlcjogJ2FuIHVwcGVyY2FzZSBsZXR0ZXInLFxuICB1cHBlclU6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XG4gIGFscGhhOiBleHBlY3RlZChzdHJpbmdzLmFscGhhKSxcbiAgYWxwaGFVOiBleHBlY3RlZChzdHJpbmdzLmFscGhhVSksXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxuICBhbnlPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlPZihhcnJheSkpLFxuICBhbnlTdHJpbmc6IG4gPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlTdHJpbmcobikpLFxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXG4gIGNoYXJJOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhckkoYykpLFxuICBkaWdpdDogZXhwZWN0ZWQoc3RyaW5ncy5kaWdpdCksXG4gIGVvZjogZXhwZWN0ZWQoc3RyaW5ncy5lb2YpLFxuICBoZXg6IGV4cGVjdGVkKHN0cmluZ3MuaGV4KSxcbiAgbGV0dGVyOiBleHBlY3RlZChzdHJpbmdzLmxldHRlciksXG4gIGxldHRlclU6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyVSksXG4gIGxvd2VyOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyKSxcbiAgbG93ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxvd2VyVSksXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXG4gIG5ld2xpbmVVOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmVVKSxcbiAgbm9uZU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLm5vbmVPZihhcnJheSkpLFxuICBvY3RhbDogZXhwZWN0ZWQoc3RyaW5ncy5vY3RhbCksXG4gIHJhbmdlOiAoc3RhcnQsIGVuZCkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yYW5nZShzdGFydCwgZW5kKSksXG4gIHJlZ2V4OiByZSA9PiBleHBlY3RlZChzdHJpbmdzLnJlZ2V4KHJlKSksXG4gIHNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlKSxcbiAgc3BhY2VzOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlcyksXG4gIHNwYWNlczE6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMSksXG4gIHNwYWNlc1U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzVSksXG4gIHNwYWNlczFVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczFVKSxcbiAgc3BhY2VVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlVSksXG4gIHN0cmluZzogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nKHN0cikpLFxuICBzdHJpbmdJOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmdJKHN0cikpLFxuICB1cHBlcjogZXhwZWN0ZWQoc3RyaW5ncy51cHBlciksXG4gIHVwcGVyVTogZXhwZWN0ZWQoc3RyaW5ncy51cHBlclUpLFxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0Q2hhcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcbiAgb3JkaW5hbENoYXIsXG4gIG9yZGluYWxGdW5jdGlvbixcbiAgb3JkaW5hbFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGVycm9yLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBDaGFyUGFyc2VyID0gZm4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3IoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gZm4obmV4dCkgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3IoY3R4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFVwb24gZmFpbHVyZSwgdGhpcyBwYXJzZXIgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgYWx3YXlzIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFyJywgYylcblxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGNoID0+IGMgPT09IGNoKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKG5leHQsIGV4cGVjdGVkcy5jaGFyKGMpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0XG4gKiB0aGUgY29tcGFyaXNvbiBkb25lIGJ5IHRoaXMgcGFyc2VyIGlzIGNhc2UtaW5zZW5zaXRpdmUuIFVwb24gZmFpbHVyZSxcbiAqIHRoaXMgcGFyc2VyIGRvZXMgbm90IGNvbnN1bWUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgYWx3YXlzIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgKG9yIGl0c1xuICogICAgIG90aGVyLWNhc2VkIGNvdW50ZXJwYXJ0KSBpcyB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhckkgPSBjID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcignY2hhckknLCBjKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoXG4gICAgY2ggPT4gYy50b0xvd2VyQ2FzZSgpID09PSBjaC50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLmNoYXJJKGMpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xuICogYGZhbHNlYCwgdGhpcyBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGNhdXNlIGZvciBhbiBlcnJvciBzaW5jZSBpdCdzIG5vdFxuICogZmVhc2libGUgdG8gaGF2ZSBpdCBhbmFseXplIHRoZSBmdW5jdGlvbiB0byBzZWUgd2hhdCBpdCBleHBlY3RzIHRvXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbXNnKWAgb3IgdGhlIGVxdWl2YWxlbnQgYHNhdGlzZnlMKGZuLCBtc2cpYCB0b1xuICogYWRkIGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gZm4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignc2F0aXNmeScsIGZuKVxuICByZXR1cm4gQ2hhclBhcnNlcihmbikoY3R4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlXG4gKiBwcm92aWRlZCBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlclxuICogc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJuc1xuICogYGZhbHNlYCwgdGhpcyBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0IGFuZCBzaWduYWxzIGFuIGVycm9yXG4gKiB3aXRoIHRoZSBwcm92aWRlZCBtZXNzYWdlLlxuICpcbiAqIGBzYXRpc2Z5TShmbiwgbWVzc2FnZSlgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtZXNzYWdlKWAuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnlNID0gKGZuLCBtZXNzYWdlKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5TScsIGZuLCBvcmRpbmFsRnVuY3Rpb24oJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzYXRpc2Z5TScsIG1lc3NhZ2UsIG9yZGluYWxTdHJpbmcoJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWQobWVzc2FnZSkpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlclxuICogaXQgaXMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIChpbmNsdXNpdmUpLiBJZlxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXG4gKiB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcbiAqIG5vdCwgdGhlIGZ1bGwgc3RyaW5ncyBhcmUgY29tcGFyZWQgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXIsIHdoaWNoXG4gKiBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvci5cbiAqXG4gKiBcIkJldHdlZW5cIiBpcyBkZWZpbmVkIGFjY29yZGluZyB0byBjb2RlIHBvaW50cy4gVGhpcyBpcyBmaW5lIGluIG1vc3RcbiAqIGNhc2VzLCBidXQgaXQgY2FuIGdldCB3ZWlyZCB3aXRoIGhpZ2hlciBjb2RlIHBvaW50cy4gRm9yIGV4YW1wbGUsXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxuICogVGhlIGBoYCB3b3VsZCBpbnN0ZWFkIGJlIHRoZSBQbGFuY2sncyBDb25zdGFudCBjaGFyYWN0ZXIsIHdoaWNoIGlzIGluXG4gKiBhIGNvbXBsZXRlbHkgZGlmZmVyZW50IHBhcnQgb2YgdGhlIFVuaWNvZGUgc3BlY3RydW0gYW5kIHRoZXJlZm9yZSBpc1xuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnQgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIHN0YXJ0IG9mIHRoZVxuICogICAgIHJhbmdlIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcGFyYW0ge3N0cmluZ30gZW5kIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzdGFydCwgZW5kKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgc3RhcnQsIG9yZGluYWxDaGFyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgZW5kLCBvcmRpbmFsQ2hhcignMm5kJykpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gc3RhcnQgJiYgYyA8PSBlbmRcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHlcbiAgICA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5yYW5nZShzdGFydCwgZW5kKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICovXG5leHBvcnQgY29uc3QgYW55ID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3IoY3R4LCBleHBlY3RlZHMuYW55KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxuICogQ29uc3VtZXMgbm90aGluZyBvbiBlaXRoZXIgc3VjY2VzcyBvciBmYWlsdXJlLlxuICovXG5leHBvcnQgY29uc3QgZW9mID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoID8gb2soY3R4LCBudWxsKSA6IGVycm9yKGN0eCwgZXhwZWN0ZWRzLmVvZilcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcbiAqIG11bHRpLWNoYXJhY3RlciBzdHJpbmdzLCB0aGV5IGNhbm5vdCBtYXRjaCBhbmQgd2lsbCBlc3NlbnRpYWxseSBiZVxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGUgcGFyc2VyXG4gKiB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIGJlIGFcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlPZiA9IGNoYXJzID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnYW55T2YnLCBjaGFycylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3IoY3R4LCBleHBlY3RlZHMuYW55T2YoYXJyKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcbiAqIG11bHRpLWNoYXJhY3RlciBzdHJpbmdzLCB0aGV5IGNhbm5vdCBtYXRjaCBhbmQgd2lsbCBlc3NlbnRpYWxseSBiZVxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhXG4gKiAgICAgbWVtYmVyIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNoYXJzID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY2hhcnMpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gZXJyb3IoY3R4LCBleHBlY3RlZHMubm9uZU9mKGFycikpIDogb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGRpZ2l0LiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYSBVbmljb2RlIGRlY2ltYWwgZGlnaXQ7IGZvclxuICogdGhhdCwgdXNlIGByZWdleCgvXFxwe05kfS8pYC4gVGhpcyBwYXJzZXIgc3VjY2VlZHMgb25seSBmb3IgdGhlXG4gKiBsaXRlcmFsIGNoYXJhY3RlcnMgYDAtOWAuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWdpdCA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuZGlnaXQpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgaGV4YWRlY2ltYWwgZGlnaXQuIFRoaXMgcGFyc2VyIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGhleCA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLmhleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBvY3RhbCA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMub2N0YWwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzOyBgdWxldHRlcmBcbiAqIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5sZXR0ZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJXG4gKiBjaGFyYWN0ZXJzOyBgdWFscGhhYCBpcyBhIFVuaWNvZGUgYWxwaGFudW1lcmljIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuYWxwaGEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIHVwcGVyY2FzZSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7XG4gKiBgdXVwcGVyYCBpcyBhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlciBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlciA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMudXBwZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1bG93ZXJgIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbG93ZXIgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLmxvd2VyKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBlcnJvciwgZmF0YWwsIG9rLCBQYXJzZXIgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGdlbmVyaWMsIHVuZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgcmVzdWx0cyBpbiB0aGUgcHJvdmlkZWRcbiAqIHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCBiZSB0aGUgbmV3IHBhcnNlcidzIHJlc3VsdC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsd2F5cyA9IHggPT4gUGFyc2VyKGN0eCA9PiBvayhjdHgsIHgpKVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsID0gbXNnID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsJywgbXNnKVxuICByZXR1cm4gZXJyb3IoY3R4LCBnZW5lcmljKG1zZykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dCwgc2V0dGluZyB0aGVcbiAqIGdlbmVyaWMgZXJyb3IgbWVzc2FnZSB0byB3aGF0ZXZlciBpcyBwYXNzZWQgaW4uIFRoaXMgc2lnbmlmaWVzIGFcbiAqIGZhdGFsIGVycm9yLCBvbmUgdGhhdCBjYW5ub3QgYmUgcmVjb3ZlcmVkIGZyb20gd2l0aG91dCBiYWNrdHJhY2tpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXG4gKiAgICAgc3VwcGxpZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWxGYXRhbGx5ID0gbXNnID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsRmF0YWxseScsIG1zZylcbiAgcmV0dXJuIGZhdGFsKGN0eCwgZ2VuZXJpYyhtc2cpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIHVuZXhwZWN0ZWRcbiAqICAgICBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsVW5leHBlY3RlZCA9IG1zZyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbFVuZXhwZWN0ZWQnLCBtc2cpXG4gIHJldHVybiBlcnJvcihjdHgsIHVuZXhwZWN0ZWQobXNnKSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmdPclJlZ0V4cCB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBlcnJvciwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXNcbiAqIGl0IGFzIGZhciBhcyBpdCBjYW4gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKlxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xuICogaWdub3JlZCBpbiB0aGF0IG9ubHkgdGhlIGZpcnN0IG1hdGNoIGlzIHByb2Nlc3NlZCBhbmQgcmV0dXJuZWQuIFRoaXNcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuY29uc3QgUmVnZXhQYXJzZXIgPSByZSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHJlc3QgPSB2aWV3VG9TdHJpbmcoaW5kZXgsIHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4LCB2aWV3KVxuXG4gIGNvbnN0IG1hdGNoID0gcmVzdC5tYXRjaChyZSlcbiAgcmV0dXJuIG1hdGNoXG4gICAgPyBvayhjdHgsIG1hdGNoWzBdLCBpbmRleCArIHN0cmluZ1RvVmlldyhtYXRjaFswXSkuYnl0ZUxlbmd0aClcbiAgICA6IGVycm9yKGN0eClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxuICogaXMgY29uc3VtZWQgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXG4gKiAgICAgYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXG5cbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlTGV0dGVyKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5sZXR0ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVBbHBoYSkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuYWxwaGFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXG4gKiB1cHBlcmNhc2UgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBVcHBlcmNhc2VgIHByb3BlcnR5IGFuZCBpcyB0aXRsZWNhc2VcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgdXBwZXJVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnVwcGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxuICogVW5pY29kZSBgTG93ZXJjYXNlYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IGR1cChSZWdleFBhcnNlcihyZUxvd2VyKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5sb3dlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuc3BhY2UpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zcGFjZVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtuZXh0LCBfXSA9IFJlZ2V4UGFyc2VyKHJlU3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW2NvbnRleHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbClcbiAgICA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zcGFjZXMxKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0LCBudWxsKVxuICAgIDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnNwYWNlczFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyB0aGlzIHBhcnNlciByZWNvZ25pemVzIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICogY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoUmVnZXhQYXJzZXIocmVOZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5uZXdsaW5lKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyBpbiBVbmljb2RlIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZyBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKiAqIGBORUxgIChuZXh0IGxpbmUsIGBVKzAwODVgKVxuICogKiBgTFNgIChsaW5lIHNlcGFyYXRvciwgYFUrMjAyOGApXG4gKiAqIGBQU2AgKHBhcmFncmFwaCBzZXBhcmF0b3IsIGBVKzIwMjlgKVxuICpcbiAqIFRoaXMgZG9lcyBub3QgaW5jbHVkZSB0aGUgY2hhcmFjdGVycyBgXFxmYCBvciBgXFx2YCwgd2hpY2ggd2hpbGUgYmVpbmdcbiAqIHZlcnRpY2FsIHNlcGFyYXRvcnMsIGFyZW4ndCByZWFsbHkgbmV3bGluZXMgaW4gdGhlIHRyYWRpdGlvbmFsIHNlbnNlLlxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmVVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKFJlZ2V4UGFyc2VyKHJlVW5ld2xpbmUpKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLm5ld2xpbmVVKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydE51bWJlciwgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGVycm9yLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgbmV4dENoYXJzLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoXG4gKiB0byBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBTdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2soY3R4LCAnJylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGVycm9yKGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGVycm9yKGN0eCkgOiBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZVxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGUgc3RyaW5nIG1hdGNoXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcbiAqIHJlY29nbml6ZWQgcHJvcGVybHkuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nID0gc3RyID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmcnLCBzdHIpXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zdHJpbmcoc3RyKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlXG4gKiBpbnB1dCBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoaXMgbWF0Y2ggaXMgKm5vdCpcbiAqIGNhc2Utc2Vuc2l0aXZlLiBIb3dldmVyLCB0aGVyZSBpcyBhIGxpbWl0YXRpb24gYmFzZWQgb24gdGhlXG4gKiBKYXZhU2NyaXB0IHVuZGVyc3RhbmRpbmcgb2YgcGFpcnMgb2YgdXBwZXItIGFuZCBsb3dlcmNhc2UgbGV0dGVycy4gSXRcbiAqIGNhbm5vdCBiZSBhc3N1bWVkIHRoYXQgMy0gYW5kIDQtYnl0ZSBjaGFyYWN0ZXJzIHdpbGwgcmVjb2duaXplIGNhc2UtXG4gKiBpbnNlbnNpdGl2ZSBjb3VudGVycGFydHMuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ0kgPSBzdHIgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZ0knLCBzdHIpXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSBkdXAoU3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuc3RyaW5nSShzdHIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cbiAqIHRoYXQgdGV4dC4gU3VjY2VlZHMgaWYgYWxyZWFkeSBhdCBFT0YsIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rKGN0eCwgdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldyksIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nXG4gKiB0aGVtIChhcyBhIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlXG4gKiBub3QgdGhhdCBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdhbnlTdHJpbmcnLCBuKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gZHVwKFN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5hbnlTdHJpbmcobikpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vY29yZSdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlcGx5fSBSZXBseSAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhblxuICogZW5kaW5nIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogV2hpbGUgdGhpcyB3aWxsIGR1cGxpY2F0ZSBhbnkgdmFsdWUsIGl0J3MgcHJpbWFyaWx5IHVzZWZ1bCBmb3JcbiAqIGNvdmVyaW5nIGEgbWlzc2luZyBwYXJ0IG9mIEphdmFTY3JpcHQgZGVzdHJ1Y3R1cmluZywgc28gYHZhbHVlYFxuICogc2hvdWxkIGdlbmVyYWxseSBiZSBhbiBhcnJheSBvciBvYmplY3QuXG4gKlxuICogVGhhdCBtaXNzaW5nIHBhcnQgaXMgcmVmZXJlbmNlIHRvIHRoZSBlbnRpcmUgdmFsdWUuIEphdmFTY3JpcHQgd2lsbFxuICogYWxsb3cgZGVzdHJ1Y3R1cmluZyB0byByZWZlcmVuY2UgYW55IGFuZCBhbGwgcGFydHMgb2YgYSB2YWx1ZSwgYnV0IGl0XG4gKiBkb2VzIG5vdCBoYXZlIGEgc3ludGF4IChsaWtlIHRoZSBgQGAgb3BlcmF0b3IgaW4gbGFuZ3VhZ2VzIGxpa2UgU2NhbGFcbiAqIGFuZCBIYXNrZWxsKSB0byByZWZlcmVuY2UgdGhlIGVudGlyZSB2YWx1ZSBhdCB0aGUgc2FtZSB0aW1lLiBVc2luZ1xuICogdGhpcyBmdW5jdGlvbiwgb25lIG9mIHRoZSBjb3BpZXMgY2FuIGJlIHJldGFpbmVkIGFzIGEgd2hvbGUgd2hpbGVcbiAqIHByb3ZpZGluZyBhbm90aGVyIGNvcHkgZm9yIGRlc3RydWN0dXJpbmcuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYFxuICogY29uc3QgW3dob2xlLCBbY3R4LCB2YWx1ZV1dID0gZHVwKHBhcnNlKHBhcnNlciwgaW5wdXQpKVxuICogYGBgXG4gKlxuICogQHBhcmFtIHtSZXBseX0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMge1tSZXBseSwgUmVwbHldfSBBbiBhcnJheSBjb250YWluaW5nIHR3byBjb3BpZXMgb2YgdGhlXG4gKiAgICAgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXAodmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxuICogY3JlYXRlZCBhbiBhcmJpdHJhcnkgb2JqZWN0LiBUaGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhc3NpZ25lZCBhblxuICogYWRkaXRpb25hbCBwcm9wZXJ0eSAoYnkgZGVmYXVsdCBuYW1lZCBgY3JlYXRlZGAsIGNhbiBiZSBjaGFuZ2VkIGJ5XG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogb2JqZWN0IGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmFjdG9yeSBjcmVhdGVkIGl0IG9yIGBmYWxzZWAgaWYgaXRcbiAqIGRpZCBub3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGF1Z21lbnRlZCB3aXRoXG4gKiAgICAgdGhlIG5ldyBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSBhdWdtZW50ZWQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKGZuLCBwcm9wID0gJ2NyZWF0ZWQnKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSBuZXcgV2Vha1NldCgpXG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXG4gICAgICB0cmFja2VkLmFkZChjcmVhdGVkKVxuICAgICAgcmV0dXJuIGNyZWF0ZWRcbiAgICB9LFxuICAgIHByb3AsXG4gICAgeyB2YWx1ZTogdHJhY2tlZC5oYXMuYmluZCh0cmFja2VkKSB9LFxuICApXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXIgdG8gaXRzIHN0cmluZyBvcmRpbmFsIGZvcm0gKGkuZS4sIGAxYCBiZWNvbWVzXG4gKiBgJzFzdCdgLCBgMTcyOWAgYmVjb21lcyBgJzE3Mjl0aCdgLCBldGMuKVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gY29udmVydCBpbnRvIGFuIG9yZGluYWwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBudW1iZXIgaW4gaXRzIG9yZGluYWwgZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICBjb25zdCBzdWZmaXhlcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXVxuICBjb25zdCB2ID0gbiAlIDEwMFxuICByZXR1cm4gbiArIChzdWZmaXhlc1sodiAtIDIwKSAlIDEwXSA/PyBzdWZmaXhlc1t2XSA/PyBzdWZmaXhlc1swXSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2YWx1ZS4gVGhpcyB3aWxsIG1vc3RcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcbiAqIGFyZSBhbHNvIGluY2x1ZGVkIGZvciB0eXBlcyB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3Qgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gUGFyc2VyLmNyZWF0ZWQodmFsdWUpID8gJ3BhcnNlcicgOiAnZnVuY3Rpb24nXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHJldHVybiBgU3ltYm9sKCR7dmFsdWUuZGVzY3JpcHRpb259KWBcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxuICogb24gaXRzIGZpcnN0IGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHN0cmluZyB3aXRoIHRoZSBwcmVwZW5kZWQgYXJ0aWNsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcbiAgcmV0dXJuICdhZWlvdUFFSU9VJy5pbmNsdWRlcyhzdHJbMF0pID8gYGFuICR7c3RyfWAgOiBgYSAke3N0cn1gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9