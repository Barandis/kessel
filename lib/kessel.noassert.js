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
/*! exports provided: formatter, ordFormatter, ordCharFormatter, ordFnFormatter, ordNumFormatter, ordParFormatter, ordStrFormatter, assertChar, assertFunction, assertGeneratorFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser, assertParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return formatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFormatter", function() { return ordFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordCharFormatter", function() { return ordCharFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFnFormatter", function() { return ordFnFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordNumFormatter", function() { return ordNumFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordParFormatter", function() { return ordParFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordStrFormatter", function() { return ordStrFormatter; });
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
const parFormatter = formatter('a parser');
const ordFormatter = (type, ord) => value => `expected ${ord} argument to be ${type}; found ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value)}`;
const ordCharFormatter = ord => ordFormatter('a one-character string', ord);
const ordFnFormatter = ord => ordFormatter('a function', ord);
const ordNumFormatter = ord => ordFormatter('a number', ord);
const ordParFormatter = ord => ordFormatter('a parser', ord);
const ordStrFormatter = ord => ordFormatter('a string', ord);

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
function assertParser(name, value, formatter = parFormatter) {
  if (typeof value !== 'function' || !_core__WEBPACK_IMPORTED_MODULE_0__["Parser"].created(value)) {
    failAssert(name, value, formatter);
  }
}
function assertParsers(name, values) {
  for (const [i, value] of Object(_util__WEBPACK_IMPORTED_MODULE_1__["enumerate"])(values)) {
    assertParser(name, value, ordParFormatter(Object(_util__WEBPACK_IMPORTED_MODULE_1__["ordinal"])(i + 1)));
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
   false && false;
  let errors = [];

  for (const p of ps) {
    const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));

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
   false && false;
  const values = [];
  const index = ctx.index;
  let context = ctx;

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(fn(result1.value)(context1));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p2(context1));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p1(ctx));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p2(context1));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p1(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p2(context1));
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
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(end(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
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
     false && false;
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(value(context));
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
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const p of ps) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(pre(ctx));
  if (result1.status !== Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context1));
  if (result2.status === Fatal) return reply2;
  if (result2.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context2, result2.errors, index);
  const [reply3, [context3, result3]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(post(context2));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result1.status !== Ok) return reply1;
  const p2 = fn(result1.value);
   false && false;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p2(context1));
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
   false && false;
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
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
   false && false;
  const [tuple, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p1(ctx));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p1(ctx));
  if (result1.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return reply1;
  const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p2(context1));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p1(ctx));
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
   false && false;
   false && false;
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
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(pre(ctx));
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
   false && false;
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const v = result.value;
   false && false;
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
   false && false;
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
   false && false;
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
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
   false && false;
   false && false;
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
   false && false;
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
   false && false;
   false && false;
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
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
   false && false;
   false && false;
  const index = ctx.index;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));

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
   false && false;
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
   false && false;
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
     false && false;
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
   false && false;
  const values = [];
  let context = ctx;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  let context = next;
  const values = result.value !== null ? [result.value] : [];

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
  let context = ctx;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  let context = next;

  while (true) {
    const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, []);
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, []);
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
  let index = ctx.index;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  let context = next;

  while (true) {
    index = context.index;
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Error) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
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
   false && false;
   false && false;
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
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [reply1, [context1, result1]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(end(context));
    context = context1;
    if (result1.status === Fatal) return reply1;
    if (result1.status === Ok) break;
    const [reply2, [context2, result2]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = context2;
    if (result2.status === Fatal) return reply2;

    if (result2.status === Error) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(result2.errors, result1.errors));
    }

    if (result2.value !== null) values.push(result2.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
/**
 * Private formatting function for assertion messages about op parsers
 * not returning functions
 *
 * @param {number} ord The number of the op parser that fails to produce
 *     a function
 * @returns {string} An appropriate assertion failure message.
 */

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
   false && false;
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x);
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     false && false;
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
   false && false;
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     false && false;
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
   false && false;
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status === Fatal) return reply;
  if (result.status === Error) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(next, x);
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     false && false;
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
   false && false;
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (result.status !== Ok) return reply;
  const values = [result.value];
  const ops = [];
  let context = next;
  let index = context.index;
  let i = 0;

  while (true) {
    const [replyop, [contextop, resultop]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = contextop;
    if (resultop.status === Fatal) return replyop;
    if (resultop.status === Error) break;
    const [replyp, [contextp, resultp]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = contextp;
    if (resultp.status === Fatal) return replyp;
    if (resultp.status === Error) break;
     false && false;
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
   false && false;
  const [reply, [next, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(ch => c === ch)(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
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
   false && false;
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
   false && false;
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
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
   false && false;
   false && false;

  const fn = c => c >= start && c <= end;

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
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
   false && false;
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
   false && false;
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

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '7';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z';

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
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
   false && false;
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
   false && false;
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
   false && false;
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
   false && false; // First, convert to a regular expression if it's a string

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

  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(regex)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reLetter)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reAlpha)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUpper)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reLower)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reSpace)(ctx));
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
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUspace)(ctx));
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
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reNewline)(ctx));
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
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUnewline)(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(ctx));
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
   false && false;
  const [reply, [context, result]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(n, () => true)(ctx));
  return result.status === Ok ? reply : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["error"])(context, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, enumerate, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, twin, commaSeparate, track, ordinal, stringify, articlify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "encoder", function() { return encoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decoder", function() { return decoder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enumerate", function() { return enumerate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewToString", function() { return viewToString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToView", function() { return stringToView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charLength", function() { return charLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextCharWidth", function() { return nextCharWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextChar", function() { return nextChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextChars", function() { return nextChars; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quote", function() { return quote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "twin", function() { return twin; });
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
 * An iterator that covers a range from a starting value to an ending
 * value, stepping by a certain value between each.
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
 * An iterator that pairs values in an iterable with their indexes in a
 * series of two-element arrays. The first array element is the index;
 * the second is the value from the iterable.
 *
 * For arrays, this can be done with `array.entries()`, which produces
 * two-element arrays in the same format. However, this generator
 * function will work with any kind of object implementing the
 * `Iterable` interface.
 *
 * @param {Iterable} iterable An iterable object whose elements will
 *     be paired with their indexes.
 * @yields {[number, *]} The iterable's values, paired with their
 *     indexes.
 */

function* enumerate(iterable) {
  const iterator = iterable[Symbol.iterator]();
  let result = iterator.next();
  let index = 0;

  while (!result.done) {
    yield [index++, result.value];
    result = iterator.next();
  }
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
 * This sort of emulates *as-patterns* in a limited way in JavaScript.
 * In languages like Haskell and ML, when pattern matching is done,
 * there is a construct to be able to retain a larger part of the
 * destructured pattern while also breaking it down further. In Haskell,
 *
 * ```haskell
 * (head : tail) = [1, 2, 3, 4, 5]
 * ```
 *
 * will assign `1` to `head`, and `[2, 3, 4, 5]` to `tail`. This can be
 * done in JavaScript as well, like this:
 *
 * ```javascript
 * const [head, ...tail] = [1, 2, 3, 4, 5]
 * ```
 *
 * However, Haskell can go farther: it can also assign the entire list
 * as a whole to another variable while still assigning its elements as
 * above. It's done like this:
 *
 * ```haskell
 * list @ (head : tail) = [1, 2, 3, 4, 5]
 * ```
 *
 * This will, in addition to the assignments above, assign `[1, 2, 3, 4,
 * 5]` to `list`. The `@` sign is read *as*, and this construct is
 * called an *as-pattern* (perhaps because the ML way of doing it uses
 * the `as` keyword instead of the `@` symbol).
 *
 * There is no facility to do this in JavaScript. But there are many
 * places in this library where a `Reply` is descturctured into its
 * `Context` and `Result` elements, yet there is a need to conditionally
 * use the entire `Reply` as well (normally to return it if some
 * condition is met). Rather than create a new `Reply` from these parts,
 * `twin` can be used to duplicate the references to the `Reply`. Then
 * only *one* of the duplicate references can be destructured, while the
 * other one is retained as a whole.
 *
 * ```javascript
 * const [reply, [context, result]] = twin(parser(ctx))
 * ```
 *
 * As-patterns can be used on pieces of a pattern instead of the entire
 * pattern, and `twin` cannot do that. But it serves for what is needed
 * in Kessel.
 *
 * @param {Reply} value A reply that needs to be destructured while
 *     maintaining a reference to the whole.
 * @returns {[Reply, Reply]} An array containing two copies of the
 *     reply. One can be destructured while the other is retained whole.
 */

function twin(value) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvY2hhaW5pbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9tZXNzYWdlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9zZXF1ZW5jZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29yZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9tZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9jaGFyLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL21pc2MuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvcmVnZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvc3RyaW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy91dGlsLmpzIl0sIm5hbWVzIjpbImZvcm1hdHRlciIsInR5cGUiLCJ2YWx1ZSIsInN0cmluZ2lmeSIsImNoYXJGb3JtYXR0ZXIiLCJmbkZvcm1hdHRlciIsImdlbkZvcm1hdHRlciIsInN0ckZvcm1hdHRlciIsImFyckZvcm1hdHRlciIsInN0ckFyckZvcm1hdHRlciIsInN0clJlZ0Zvcm10dGVyIiwibnVtRm9ybWF0dGVyIiwicGFyRm9ybWF0dGVyIiwib3JkRm9ybWF0dGVyIiwib3JkIiwib3JkQ2hhckZvcm1hdHRlciIsIm9yZEZuRm9ybWF0dGVyIiwib3JkTnVtRm9ybWF0dGVyIiwib3JkUGFyRm9ybWF0dGVyIiwib3JkU3RyRm9ybWF0dGVyIiwiZmFpbEFzc2VydCIsIm5hbWUiLCJFcnJvciIsImFzc2VydENoYXIiLCJjaGFyTGVuZ3RoIiwiYXNzZXJ0RnVuY3Rpb24iLCJQYXJzZXIiLCJjcmVhdGVkIiwiYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24iLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJhc3NlcnRTdHJpbmciLCJhc3NlcnRBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImFzc2VydFN0cmluZ09yQXJyYXkiLCJldmVyeSIsImMiLCJhc3NlcnRTdHJpbmdPclJlZ0V4cCIsImFzc2VydE51bWJlciIsImFzc2VydFBhcnNlciIsImFzc2VydFBhcnNlcnMiLCJ2YWx1ZXMiLCJpIiwiZW51bWVyYXRlIiwib3JkaW5hbCIsIk9rIiwiRmF0YWwiLCJTdGF0dXMiLCJjaG9pY2UiLCJwcyIsImN0eCIsIkFTU0VSVCIsImVycm9ycyIsInAiLCJyZXBseSIsImNvbnRleHQiLCJyZXN1bHQiLCJ0d2luIiwic3RhdHVzIiwibWVyZ2UiLCJmYXRhbCIsImVycm9yIiwib3B0Iiwib2siLCJkZWYiLCJ4IiwiYXR0ZW1wdCIsImluZGV4IiwiZXJyIiwibmVzdGVkIiwic2VxdWVuY2VCIiwibmV4dCIsInB1c2giLCJjaGFpbkIiLCJmbiIsInJlcGx5MSIsImNvbnRleHQxIiwicmVzdWx0MSIsInJlcGx5MiIsImNvbnRleHQyIiwicmVzdWx0MiIsImxlZnRCIiwicDEiLCJwMiIsInJpZ2h0QiIsImJvdGhCIiwicmVwZWF0QiIsIm4iLCJfIiwicmFuZ2UiLCJtYW55VGlsbEIiLCJlbmQiLCJibG9ja0IiLCJnZW5GbiIsImdlbiIsIm5leHRWYWx1ZSIsImRvbmUiLCJwaXBlQiIsInBvcCIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInJlcGx5MyIsImNvbnRleHQzIiwicmVzdWx0MyIsImNoYWluIiwibWF5YmVGYXRhbCIsIm1hcCIsImpvaW4iLCJ2Iiwic2tpcCIsInR1cGxlIiwibGVmdCIsInJpZ2h0IiwiYm90aCIsInBpcGUiLCJiZXR3ZWVuIiwibnRoIiwiZmlyc3QiLCJzZWNvbmQiLCJ0aGlyZCIsImZvdXJ0aCIsImZpZnRoIiwibG9va0FoZWFkIiwibm90RW1wdHkiLCJub3RFbXB0eU0iLCJtc2ciLCJleHBlY3RlZCIsImZvbGxvd2VkQnkiLCJ1bmRlZmluZWQiLCJmb2xsb3dlZEJ5TSIsIm5vdEZvbGxvd2VkQnkiLCJub3RGb2xsb3dlZEJ5TSIsIk5lc3RlZCIsIkVycm9yVHlwZSIsInBhc3MiLCJsYWJlbCIsImJhY2tMYWJlbCIsImxlbmd0aCIsImNvbXBvdW5kIiwibG9vcE1lc3NhZ2UiLCJzZXF1ZW5jZSIsImJsb2NrIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwTWFueSIsInNraXBNYW55MSIsInNlcEJ5Iiwic2VwIiwiVHlwZUVycm9yIiwic2VwQnkxIiwic2VwRW5kQnkiLCJzZXBOZXh0Iiwic2VwRW5kQnkxIiwicmVwZWF0IiwibWFueVRpbGwiLCJvcEZvcm1hdHRlciIsImFzc29jTCIsIm9wIiwib3BzIiwicmVwbHlvcCIsImNvbnRleHRvcCIsInJlc3VsdG9wIiwicmVwbHlwIiwiY29udGV4dHAiLCJyZXN1bHRwIiwiYXNzb2MxTCIsImFzc29jUiIsImFzc29jMVIiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJTeW1ib2wiLCJDb250ZXh0IiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwiY291bnQiLCJyYXdMaW5lIiwidmlld1RvU3RyaW5nIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiZmluZCIsImNvbW1hU2VwYXJhdGUiLCJmaWx0ZXIiLCJ1bmV4cE1zZyIsImV4cE1zZyIsImdlbmVyaWNNc2ciLCJuZXN0ZWRNc2ciLCJjb21wb3VuZE1zZyIsInVua25vd25Nc2ciLCJlb2ZNc2ciLCJnZXRQb3NpdGlvbiIsImNvbHVtbiIsInN0cmluZ3MiLCJhbHBoYSIsImFscGhhVSIsImFueSIsImFueU9mIiwiYXJyYXkiLCJhbnlTdHJpbmciLCJjaGFyIiwicXVvdGUiLCJjaGFySSIsImRpZ2l0IiwiZW9mIiwiaGV4IiwibGV0dGVyIiwibGV0dGVyVSIsImxvd2VyIiwibG93ZXJVIiwibmV3bGluZVUiLCJub25lT2YiLCJvY3RhbCIsInJlZ2V4IiwicmUiLCJzcGFjZSIsInNwYWNlcyIsInNwYWNlczEiLCJzcGFjZXNVIiwic3BhY2VzMVUiLCJzcGFjZVUiLCJzdHJpbmciLCJzdHIiLCJzdHJpbmdJIiwidXBwZXIiLCJ1cHBlclUiLCJleHBlY3RlZHMiLCJDaGFyUGFyc2VyIiwid2lkdGgiLCJuZXh0Q2hhciIsImNoIiwidG9Mb3dlckNhc2UiLCJzYXRpc2Z5Iiwic2F0aXNmeU0iLCJjaGFycyIsImFyciIsImluY2x1ZGVzIiwiYWx3YXlzIiwiZmFpbCIsImZhaWxGYXRhbGx5IiwiZmFpbFVuZXhwZWN0ZWQiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsInMiLCJlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJieXRlcyIsImZyb20iLCJkZWNvZGUiLCJlbmNvZGUiLCJ2aWV3TGVuZ3RoIiwibWVzc2FnZXMiLCJtc2dzIiwic2xpY2UiLCJsYXN0IiwicHJvcCIsInRyYWNrZWQiLCJXZWFrU2V0IiwiZGVmaW5lUHJvcGVydHkiLCJhcmdzIiwiYWRkIiwiaGFzIiwiYmluZCIsInN1ZmZpeGVzIiwiZGVzY3JpcHRpb24iLCJKU09OIiwiYXJ0aWNsaWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyxJQUFJLElBQzNCQyxLQUFLLElBQUssWUFBV0QsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENBQVEsRUFEaEQ7QUFHUCxNQUFNRSxhQUFhLEdBQUdKLFNBQVMs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QUcsQ0FBQyxDQUFELENBQXpCLElBQWlDLE1BQUtBLEdBQUksRUFBMUMsR0FBK0MsS0FBSUEsR0FBSSxFQUE5RDtBQUNELEMiLCJmaWxlIjoia2Vzc2VsLm5vYXNzZXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wia2Vzc2VsXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZW51bWVyYXRlLCBvcmRpbmFsLCBzdHJpbmdpZnkgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBmb3JtYXR0ZXIgPSB0eXBlID0+XG4gIHZhbHVlID0+IGBleHBlY3RlZCAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5jb25zdCBjaGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJylcbmNvbnN0IGZuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGZ1bmN0aW9uJylcbmNvbnN0IGdlbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBnZW5lcmF0b3IgZnVuY3Rpb24nKVxuY29uc3Qgc3RyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZycpXG5jb25zdCBhcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2FuIGFycmF5JylcbmNvbnN0IHN0ckFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY2hhcmFjdGVycycpXG5jb25zdCBzdHJSZWdGb3JtdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcgb3IgYSByZWd1bGFyIGV4cHJlc3Npb24nKVxuY29uc3QgbnVtRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIG51bWJlcicpXG5jb25zdCBwYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgcGFyc2VyJylcblxuZXhwb3J0IGNvbnN0IG9yZEZvcm1hdHRlciA9ICh0eXBlLCBvcmQpID0+IHZhbHVlID0+XG4gIGBleHBlY3RlZCAke29yZH0gYXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IG9yZENoYXJGb3JtYXR0ZXIgPSBvcmQgPT5cbiAgb3JkRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZEZuRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmROdW1Gb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG51bWJlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRQYXJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRTdHJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZClcblxuZnVuY3Rpb24gZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKSB7XG4gIHRocm93IG5ldyBFcnJvcihgWyR7bmFtZX1dOiAke2Zvcm1hdHRlcih2YWx1ZSl9YClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydENoYXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGNoYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgfHwgY2hhckxlbmd0aCh2YWx1ZSkgIT09IDEpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBmbkZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IFBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24obmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IGdlbkZvcm1hdHRlcikge1xuICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSAhPT0gJ1tvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBhcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XG4gIGlmICghKFxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yUmVnRXhwKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBzdHJSZWdGb3JtdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJ1xuICAgICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnROdW1iZXIobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IG51bUZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhUGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRQYXJzZXJzKG5hbWUsIHZhbHVlcykge1xuICBmb3IgKGNvbnN0IFtpLCB2YWx1ZV0gb2YgZW51bWVyYXRlKHZhbHVlcykpIHtcbiAgICBhc3NlcnRQYXJzZXIobmFtZSwgdmFsdWUsIG9yZFBhckZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSkpXG4gIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmROdW1Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGVycm9yLCBmYXRhbCwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBtZXJnZSwgbmVzdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgb3JkaW5hbCwgcmFuZ2UsIHN0cmluZ2lmeSwgdHdpbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBFcnJvciwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGFsdGVybmF0aXZlcy4gRWFjaCBvZiB0aGUgc3VwcGxpZWRcbiAqIHBhcnNlcnMgaXMgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlci4gV2hlbiB0aGUgZmlyc3QgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhlIGZpcnN0IHBhcnNlciBmYWlscyB3aGlsZSBjb25zdW1pbmcgaW5wdXQsIGV4ZWN1dGlvblxuICogaXMgc3RvcHBlZCBhbmQgdGhlIGNvbnRleHQgZnJvbSB0aGF0IGxhc3QgcGFyc2VyIGlzIHBhc3NlZCB0aHJvdWdoLlxuICogVGhlIHNhbWUgaGFwcGVucyBpZiBhbGwgcGFyc2VycyBhcmUgYXBwbGllZCB3aXRob3V0IGFueSBvZiB0aGVtXG4gKiBzdWNjZWVkaW5nLlxuICpcbiAqIE9uIGZhaWx1cmUsIGFsbCBvZiB0aGUgYEV4cGVjdGVkYCBlcnJvcnMgZnJvbSBhbnkgb2YgdGhlIGNvbnRhaW5lZFxuICogcGFyc2VycyB3aWxsIGJlIG1lcmdlZCBpbnRvIHRoaXMgcGFyc2VyJ3MgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfSBwcyBUaGUgcGFyc2VycyB0byBhcHBseSB0byB0aGUgaW5wdXQsIG9uZSBhdCBhXG4gKiAgICAgdGltZSwgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgY2hvaWNlID0gKC4uLnBzKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ2Nob2ljZScsIHBzKVxuXG4gIGxldCBlcnJvcnMgPSBbXVxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSByZXR1cm4gcmVwbHlcblxuICAgIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcmVzdWx0LmVycm9ycylcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChjb250ZXh0LCBlcnJvcnMpXG4gIH1cbiAgcmV0dXJuIGVycm9yKGN0eCwgZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXJcbiAqIGl0IGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIEl0J3MgdXNlZCB0b1xuICogaW1wbGVtZW50IHNraXBwaW5nIG92ZXIgc29tZSBvcHRpb25hbCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgZm9yIG9wdGlvbmFsIGNvbnRlbnQgdG8gYmUgYXBwbGllZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seVxuICogICAgIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyAhPT0gRXJyb3IgPyByZXBseSA6IG9rKGNvbnRleHQsIG51bGwpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBlaXRoZXIgd2l0aCB0aGUgc3VwcGxpZWQgcGFyc2VyJ3NcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIGVsc2UgKGlmIHRoYXQgcGFyc2VyIGZhaWxzKSB0aGUgc3VwcGxpZWQgZGVmYXVsdFxuICogdmFsdWUgYHhgLiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzXG4gKiBmYXRhbGx5LlxuICpcbiAqIGBkZWYocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hvaWNlKFtwLFxuICogY29uc3RhbnQoeCldKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3NcbiAqICAgICByZXN1bHQgaWYgaXQgc3VjY2VlZHMuXG4gKiBAcGFyYW0geyp9IHggQSB2YWx1ZSB3aGljaCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzIHJlc3VsdCBpZiB0aGVcbiAqICAgICBzdXBwbGllZCBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCByZXN1bHRzIGluIGVpdGhlciBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCByZXN1bHQgb3IgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZGVmID0gKHAsIHgpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdkZWYnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzICE9PSBFcnJvciA/IHJlcGx5IDogb2soY29udGV4dCwgeClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRyYW5zZm9ybXMgYSBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWxcbiAqIGZhaWx1cmUuIEl0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcjsgaWYgdGhhdCBwYXJzZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZSBjb250ZXh0IGlzIHNldCBiYWNrIHRvIHdoYXQgaXQgd2FzICpiZWZvcmUqIHRoYXQgcGFyc2VyXG4gKiBpcyBhcHBsaWVkIGFuZCB0aGUgZmF0YWwgZmFpbHVyZSBpcyByZXR1cm5lZCBhcyBhIG5vbi1mYXRhbCBmYWlsdXJlLlxuICogSWYgdGhlIHBhcnNlciBoYXMgYW55IG90aGVyIHJlc3VsdCwgaXQgaXMgcGFzc2VkIHRocm91Z2ggd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsbG93cyB0aGUgdXNlciB0byBjYXVzZSBhIG5vbi1iYWNrdHJhY2tpbmcgcGFyc2VyIHRvXG4gKiBiYWNrdHJhY2sgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcClcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICA6IG5lc3RlZChjb250ZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIHJldHVybiBlcnJvcihjb250ZXh0LCBlcnIsIGluZGV4KVxuICB9XG4gIHJldHVybiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzb1xuICogZmFpbCBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBjb250ZXh0IHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGVcbiAqIGZpcnN0IHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiBwcmV2aW91cyBwYXJzZXJzIGhhdmUgY29uc3VtZWRcbiAqIGlucHV0LiBBIGZhdGFsIGVycm9yIGZyb20gb25lIG9mIHRoZSBjb250YWluZWQgcGFyc2VycyB3aWxsIHN0aWxsXG4gKiByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYHNlcXVlbmNlQihwcylgIGlzIG5vdCB0aGUgc2FtZSBhc1xuICogYGJhY2t0cmFjayhzZXF1ZW5jZShwcykpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2ZcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxuICogY2FzZS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXQgYVxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQiA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdzZXF1ZW5jZUInLCBwcylcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXhcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgICByZXR1cm4gZXJyb3IoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgaWYgKHJlc3VsdC52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIGNvbnRleHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBjb250ZXh0LlxuICpcbiAqIElmIHRoZSBzZWNvbmQgcGFyc2VyICh0aGUgb25lIHByb3ZpZGVkIGJ5IGBmbmApIGZhaWxzIG5vbi1mYXRhbGx5LFxuICogdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dFxuICogdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdCBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0XG4gKiBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGxcbiAqIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgY2hhaW5CKHAsIGZuKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2soY2hhaW4ocCxcbiAqIGZuKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluQiA9IChwLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NoYWluQicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW5CJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IHR3aW4oZm4ocmVzdWx0MS52YWx1ZSkoY29udGV4dDEpKVxuICBpZiAocmVzdWx0Mi5zdGF0dXMgIT09IEVycm9yKSByZXR1cm4gcmVwbHkyXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBjb250ZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChjb250ZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihjb250ZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHAxYC4gSWYgZWl0aGVyIGBwMWAgb3IgYHAyYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIGNvbnRleHQgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgbGVmdEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2sobGVmdChwMSxcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdEIgPSAocDEsIHAyKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBwMSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBwMiwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihwMShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSB0d2luKHAyKGNvbnRleHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2soY29udGV4dDIsIHJlc3VsdDEudmFsdWUpXG5cbiAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgPyByZXN1bHQyLmVycm9yc1xuICAgIDogbmVzdGVkKGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbiAgcmV0dXJuIGVycm9yKGNvbnRleHQyLCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcDJgLiBJZiBlaXRoZXIgYHAxYCBvciBgcDJgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcDJgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dCB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGByaWdodEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2socmlnaHQocDEsXG4gKiBwMikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDEgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwMiBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodEIgPSAocDEsIHAyKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcDEsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0QicsIHAyLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSB0d2luKHAxKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSB0d2luKHAyKGNvbnRleHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzICE9PSBFcnJvcikgcmV0dXJuIHJlcGx5MlxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBjb250ZXh0Mi5pbmRleFxuICAgID8gcmVzdWx0Mi5lcnJvcnNcbiAgICA6IG5lc3RlZChjb250ZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG4gIHJldHVybiBlcnJvcihjb250ZXh0MiwgZXJyLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHAxYCBhbmQgYHAyYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXG4gKiBgcDFgIG9yIGBwMmAgZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHAyYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIGNvbnRleHQgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgYm90aEIocDEsIHAyKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBiYWNrdHJhY2soYm90aChwMSxcbiAqIHAyKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdGhCID0gKHAxLCBwMikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JvdGhCJywgcDEsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JvdGhCJywgcDIsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4ocDEoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gdHdpbihwMihjb250ZXh0MSkpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rKGNvbnRleHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXG5cbiAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgPyByZXN1bHQyLmVycm9yc1xuICAgIDogbmVzdGVkKGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbiAgcmV0dXJuIGVycm9yKGNvbnRleHQyLCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiB0aGF0IGZhaWx1cmUgaXMgZmF0YWwsIHRoZVxuICogb3ZlcmFsbCBmYWlsdXJlIHdpbGwgYWxzbyBiZSBmYXRhbC5cbiAqXG4gKiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiB0aGUgdW5kZXJseWluZyBlcnJvciB3YXNcbiAqIG5vbi1mYXRhbCwgZXZlbiBpZiBpbnB1dCB3YXMgY29uc3VtZWQgKGJhY2t0cmFja2luZyB3aWxsIGhhcHBlbiBpblxuICogdGhpcyBjYXNlKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0QiA9IChwLCBuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0QicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdEInLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXhcbiAgICAgICAgPyByZXN1bHQuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgICByZXR1cm4gZXJyb3IoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0LnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzXG4gKiB1bnRpbCBpdHMgZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5XG4gKiBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXNcbiAqIGFwcGxpZWQgKmZpcnN0Kiwgc28gaXQncyBmaW5lIHRvIGhhdmUgdGhlIHR3byBwYXJzZXJzIG92ZXJsYXAuIEZvclxuICogZXhhbXBsZSwgYG1hbnlUaWxsKGFueSwgbGV0dGVyKWAgd2lsbCB3b3JrIGZpbmUsIGJlY2F1c2UgYGxldHRlcmBcbiAqIHdpbGwgYmUgdHJpZWQgZmlyc3Qgb24gZWFjaCBjaGFyYWN0ZXIgKGNvbnRyYXN0IHdpdGggYGJldHdlZW4obGV0dGVyLFxuICogYW55LCBsZXR0ZXIpYCwgd2hpY2ggd2lsbCBuZXZlciBzdWNjZWVkIGJlY3Vhc2UgdGhlIGBhbnlgIGlzIGFwcGxpZWRcbiAqIGJlZm9yZSB0aGUgZmluYWwgYGxldHRlcmAgYW5kIHdpbGwgdGhlcmVmb3JlIGNvbnN1bWUgYSBsZXR0ZXIgYmVmb3JlXG4gKiB0aGUgYGxldHRlcmAgcGFyc2VyIGdldHMgdG8gc2VlIGl0KS5cbiAqXG4gKiBJZiB0aGUgY29udGVudCBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIHRoZSBlbmQgcGFyc2VyIGRvZXMsXG4gKiB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsIChiYWNrdHJhY2tpbmcgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlblxuICogY29uc3VtZWQpLiBBIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbFxuICogZXJyb3IgZm9yIHRoZSBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsQiA9IChwLCBlbmQpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbEInLCBlbmQsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQyLmluZGV4XG4gICAgICAgID8gbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKVxuICAgICAgICA6IG5lc3RlZChjb250ZXh0MiwgbWVyZ2UocmVzdWx0Mi5lcnJvcnMsIHJlc3VsdDEuZXJyb3JzKSlcbiAgICAgIHJldHVybiBlcnJvcihjb250ZXh0MiwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFueSBvZiB0aGVzZSBwYXJzZXJzIGZhaWwsIHRoZSBgYmxvY2tgIHBhcnNlciB3aWxsIGFsc28gZmFpbC4gSWZcbiAqIHRoYXQgZmFpbHVyZSBpcyBub24tZmF0YWwsIGJhY2t0cmFja2luZyB3aWxsIHJlc2V0IHRoZSBpbmRleCB0byB3aGVyZVxuICogaXQgd2FzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGBibG9ja2AgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIHVuZGVmaW5lZCBiZWhhdmlvci5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZ2VuRm4gQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBub1xuICogICAgIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWRcbiAqICAgICBwYXJzZXIncyByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHlcbiAqICAgICBgUGFyc2VyYHM7IHlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbCBjYXVzZSBpbmNvcnJlY3QgYmVoYXZpb3JcbiAqICAgICBkZXBlbmRpbmcgb24gd2hhdCBleGFjdGx5IGlzIHlpZWxkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgYXBwbGllcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIChpZiBhbGwgcGFyc2Vyc1xuICogICAgIHN1Y2NlZWQpIGluIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrQiA9IGdlbkZuID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0R2VuZXJhdG9yRnVuY3Rpb24oJ2Jsb2NrQicsIGdlbkZuKVxuXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2tCJywgdmFsdWUsIHYgPT4gYGV4cGVjdGVkICR7XG4gICAgICBvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IHR3aW4odmFsdWUoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IobmV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3Nlc1xuICogdGhvc2UgcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2ZcbiAqIHBhcnNlcnMgdG8gYXBwbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSwgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGxcbiAqIGJhY2t0cmFjayB0byB3aGVyZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIElmIHRoZSBhcnJheSBoYXMgb25lIGVsZW1lbnQsIHRoZSBwYXJzZXIgYmVjb21lcyBlcXVpdmFsZW50IHRvIGBtYXBgXG4gKiBidXQgbGVzcyBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlXG4gKiAgICAgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsXG4gKiAgICAgb3RoZXIgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlQiA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VycygncGlwZUInLCBwcylcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIGVycm9yKGNvbnRleHQsIHJlc3VsdC5lcnJvcnMsIGluZGV4KVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgZm4oLi4udmFsdWVzKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwcmUsIGNvbnRlbnQsIGFuZCBwb3N0IHBhcnNlcnMgaW5cbiAqIG9yZGVyIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgYHBgIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXJcbiAqIGBwb3N0YC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb250ZW50IHBhcnNlciB3aWxsIGhhdmUgYW4gb3Bwb3J0dW5pdHlcbiAqIHRvIHBhdGNoIHRoZSBcInBvc3RcIiBjb250ZW50IGJlZm9yZSB0aGUgcG9zdCBwYXJzZXIgZG9lcywgc28gdGFrZSBjYXJlXG4gKiB0aGF0IHRoZSBwYXJzZXJzIGRvIG5vdCBvdmVybGFwIGluIHdoYXQgdGhleSBtYXRjaC5cbiAqXG4gKiBJZiBhbnkgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgYGJldHdlZW5CYCBwYXJzZXIgd2lsbCBiYWNrdHJhY2tcbiAqIHRvIHdoZXJlIGBwcmVgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW5CID0gKHByZSwgcG9zdCwgcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW5CJywgcHJlLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHBvc3QsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW5CJywgcCwgb3JkUGFyRm9ybWF0dGVyKCczcmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihwcmUoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gdHdpbihwKGNvbnRleHQxKSlcbiAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSByZXR1cm4gZXJyb3IoY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzLCBpbmRleClcblxuICBjb25zdCBbcmVwbHkzLCBbY29udGV4dDMsIHJlc3VsdDNdXSA9IHR3aW4ocG9zdChjb250ZXh0MikpXG4gIGlmIChyZXN1bHQzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTNcbiAgaWYgKHJlc3VsdDMuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIGVycm9yKGNvbnRleHQzLCByZXN1bHQzLmVycm9ycywgaW5kZXgpXG4gIHJldHVybiBvayhjb250ZXh0MywgcmVzdWx0Mi52YWx1ZSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRBcnJheSxcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRQYXJzZXJzLFxuICBmb3JtYXR0ZXIsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmROdW1Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG1heWJlRmF0YWwsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgb3JkaW5hbCwgdHdpbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBJZiB0aGUgaW5pdGlhbCBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBpbnN0ZWFkIHJldHVybmVkLiBJZiB0aGVcbiAqIHNlY29uZCBwYXJzZXIgKHRoZSByZXR1cm4gdmFsdWUgb2YgYGZuYCkgZmFpbHMgYW5kIGBwYCBjb25zdW1lZFxuICogaW5wdXQsIHRoZSBmYWlsdXJlIGlzIGZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHAsIGZuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW4nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2NoYWluJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBwMiA9IGZuKHJlc3VsdDEudmFsdWUpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoXG4gICAgJ2NoYWluJywgcDIsIGZvcm1hdHRlcigndGhlIDJuZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSxcbiAgKVxuXG4gIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gdHdpbihwMihjb250ZXh0MSkpXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyByZXBseTJcbiAgICA6IG1heWJlRmF0YWwoY29udGV4dDIuaW5kZXggIT09IGluZGV4LCBjb250ZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHNcbiAqIHJlc3VsdCB0byB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvblxuICogYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci5cbiAqXG4gKiBJZiB0aGUgY29udGFpbmVkIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHByb3BhZ2F0ZWQgb3V0IGFzIHRoZVxuICogZmFpbHVyZSBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxuICpcbiAqIGBtYXAocCwgZm4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyhmbih4KSkpYC4gVGhpcyBhbHNvIG1ha2VzIGl0IGEgbW9yZSBlZmZpY2llbnQgdmVyc2lvbiBvZlxuICogYHBpcGUoW3BdLCBmbilgIChhIHNpbmdsZS1wYXJzZXIgYHBpcGVgKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5IHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFwJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdtYXAnLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKGNvbnRleHQsIGZuKHJlc3VsdC52YWx1ZSkpIDogcmVwbHlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIFRoYXQgcGFyc2VyIGlzXG4gKiBleHBlY3RlZCB0byByZXN1bHQgaW4gYW4gYXJyYXkgb2Ygc3RyaW5ncywgYW5kIGlmIGl0IHN1Y2NlZWRzLCB0aGF0XG4gKiByZXN1bHQncyBlbGVtZW50cyBhcmUgam9pbmVkIHRvZ2V0aGVyIGludG8gYSBzaW5nbGUgc3RyaW5nLiBUaGlzIGlzXG4gKiB1c2VmdWwgYmVjYXVzZSBKYXZhU2NyaXB0IGRvZXMgbm90IHNoYXJlIHRoZSBjaGFyYWN0ZXJpc3RpYyBvZiBzb21lXG4gKiBmdW5jdGlvbmFsIGxhbmd1YWdlcyB3aGVyZSBhIHN0cmluZyBpcyB0aGUgc2FtZSBhcyBhIGxpc3Qgb2ZcbiAqIGNoYXJhY3RlcnMuIEphdmFTY3JpcHQgbmVlZHMgZXhwbGljaXQgY29udmVyc2lvbiBiZXR3ZWVuIHRoZSB0d28sIHNvXG4gKiB0aGlzIHBhcnNlciB3aWxsIHR1cm4gYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBpbnRvIGEgc3RyaW5nLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIHRoZSBjcmVhdGVkIHBhcnNlciB3aWxsIGFsc28gZmFpbCB3aXRoXG4gKiB0aGUgc2FtZSBlcnJvciB0eXBlLlxuICpcbiAqIGBqb2luKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyh4LmpvaW4oJycpKSlgLlxuICpcbiAqIElmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lcyBub3QgcmVzdWx0IGluIGFuIGFycmF5LCBhbiBleGNlcHRpb24gd2lsbFxuICogYmUgdGhyb3duIGJlY2F1c2UgYW4gYXR0ZW1wdCB3aWxsIGJlIG1hZGUgdG8gY2FsbCBgam9pbmAgb24gdGhlXG4gKiByZXN1bHQuIElmIGl0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2Ygc29tZXRoaW5nIG90aGVyIHRoYW4gc3RyaW5ncyxcbiAqIHRob3NlIGVsZW1lbnRzIHdpbGwgYmUgY29lcmNlZCBpbnRvIHN0cmluZ3MgYW5kIHRoZW4gam9pbmVkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlciBhbmRcbiAqICAgICByZXN1bHRzIGluIGEgc2luZ2xlIHN0cmluZyBtYWRlIGZyb20gam9pbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlXG4gKiAgICAgYXJyYXkgb2Ygc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdqb2luJywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdqb2luJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdi5qb2luKCcnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgZGlzY2FyZHMgYW55XG4gKiBzdWNjZXNzZnVsIHJlc3VsdCB3aGlsZSBzdGlsbCBjb25zdW1pbmcgaW5wdXQuIEEgZmFpbHVyZSB3aWxsIGJlXG4gKiBwcm9wYWdhdGVkIHdpdGhvdXQgbW9kaWZpY2F0aW9uLlxuICpcbiAqIGBza2lwKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsICgpID0+XG4gKiBhbHdheXMobnVsbCkpYCxcbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGRvZXMgb24gc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcCcsIHApXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbCkgOiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBydW4gdGhlIHN1cHBsaWVkIHBhcnNlciBidXQsIG9uIHN1Y2Nlc3MsXG4gKiByZXN1bHQgaW4gdGhlIHN1cHBsaWVkIHZhbHVlIGluc3RlYWQuXG4gKlxuICogYHZhbHVlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW5hdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cbiAqIGFsd2F5cyh4KSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3ZhbHVlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcblxuICBjb25zdCBbdHVwbGUsIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0LCB4KSA6IHR1cGxlXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMWAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYGxlZnQocDEsIHAyKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwMSwgeCA9PlxuICogdmFsdWUocDIsIHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAxIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcDIgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0ID0gKHAxLCBwMikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwMSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdCcsIHAyLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSB0d2luKHAxKGN0eCkpXG4gIGlmIChyZXN1bHQxLnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbY29udGV4dDIsIHJlc3VsdDJdID0gcDIoY29udGV4dDEpXG4gIHJldHVybiByZXN1bHQyLnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0MiwgcmVzdWx0MS52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwoY29udGV4dDIuaW5kZXggIT09IGluZGV4LCBjb250ZXh0MiwgcmVzdWx0Mi5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwMWAgYW5kIGBwMmAgaW5cbiAqIHNlcXVlbmNlIGFuZCB0aGVuIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwMmAuIElmIGVpdGhlciBgcDFgIG9yIGBwMmBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogYHJpZ2h0KHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsICgpID0+XG4gKiBwMilgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAxLCBwMikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcDEsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcDIsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4ocDEoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiByZXBseTFcblxuICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IHR3aW4ocDIoY29udGV4dDEpKVxuICByZXR1cm4gcmVzdWx0Mi5zdGF0dXMgPT09IE9rID8gcmVwbHkyXG4gICAgOiBtYXliZUZhdGFsKGNvbnRleHQyLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcDFgIGFuZCBgcDJgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBib3RoIGluIGFuIGFycmF5LiBJZiBlaXRoZXJcbiAqIGBwMWAgb3IgYHAyYCBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGxcbiAqIGJlIGZhdGFsIGlmIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGBib3RoKHAxLCBwMilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT5cbiAqIGNoYWluKHAyLCBiID0+IGFsd2F5cyhbYSwgYl0pKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwMSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAyIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWVzIG9mIGJvdGggcGFyc2VycyBpbiBhbiBhcnJheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJvdGggPSAocDEsIHAyKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYm90aCcsIHAxLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdib3RoJywgcDIsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4ocDEoY3R4KSlcbiAgaWYgKHJlc3VsdDEuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5MVxuXG4gIGNvbnN0IFtjb250ZXh0MiwgcmVzdWx0Ml0gPSBwMihjb250ZXh0MSlcbiAgcmV0dXJuIHJlc3VsdDIuc3RhdHVzID09PSBPayA/IG9rKGNvbnRleHQyLCBbcmVzdWx0MS52YWx1ZSwgcmVzdWx0Mi52YWx1ZV0pXG4gICAgOiBtYXliZUZhdGFsKGNvbnRleHQyLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDIsIHJlc3VsdDIuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzXG4gKiB0aG9zZSByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZlxuICogcGFyc2VycyB0byBhcHBseS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXG4gKiBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcXVlbmNlYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KlxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogYHBpcGUocDEsIHAyLCBmbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT5cbiAqIGNoYWluKHAyLCBiID0+IGFsd2F5cyhmbihhLCBiKSkpKWAsIGBwaXBlKHAxLCBwMiwgcDMsIGZuKWAgaXMgYW5cbiAqIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocDEsIGEgPT4gY2hhaW4ocDIsIGIgPT4gY2hhaW4ocDMsXG4gKiBjID0+IGFsd2F5cyhmbihhLCBiLCBjKSkpKSlgLCBhbmQgc28gb24uXG4gKlxuICogSWYgdGhlIGFycmF5IGhhcyBvbmUgZWxlbWVudCwgdGhlIHBhcnNlciBiZWNvbWVzIGVxdWl2YWxlbnQgdG8gYG1hcGBcbiAqIGJ1dCBsZXNzIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6Kil9IHBzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBhcHBsaWVkIG9uZSBhdCBhIHRpbWUsIGluIG9yZGVyLCBmb2xsb3dlZCBieSBhIGZ1bmN0aW9uIHdoaWNoXG4gKiAgICAgd2lsbCByZWNlaXZlIGFzIHBhcmFtZXRlcnMgdGhlIHJlc3VsdHMgb2YgZWFjaCBwYXJzZXIuIEl0cyByZXR1cm5cbiAqICAgICB2YWx1ZSB3aWxsIGJlY29tZSB0aGUgcmVzdWx0IG9mIHRoZSBjcmVhdGVkIHBhcnNlci4gQSBzaW5nbGVcbiAqICAgICBmdW5jdGlvbiBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGxcbiAqICAgICBvdGhlciBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGUgPSAoLi4ucHMpID0+IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcnMoJ3BpcGUnLCBwcylcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlJywgZm4sIG9yZEZuRm9ybWF0dGVyKG9yZGluYWwocHMubGVuZ3RoICsgMSkpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgZm4oLi4udmFsdWVzKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBiZWZvcmUsIGNvbnRlbnQsIGFuZCBhZnRlciBwYXJzZXJzXG4gKiBpbiBvcmRlciBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXG4gKiBgcGFmdGVyYC4gVGhpcyBtZWFucyB0aGF0IHRoZSBjb250ZW50IHBhcnNlciB3aWxsIGhhdmUgYW4gb3Bwb3J0dW5pdHlcbiAqIHRvIHBhdGNoIHRoZSBcImFmdGVyXCIgY29udGVudCBiZWZvcmUgdGhlIGFmdGVyIHBhcnNlciBkb2VzLCBzbyB0YWtlXG4gKiBjYXJlIHRoYXQgdGhlIHBhcnNlcnMgZG8gbm90IG92ZXJsYXAgaW4gd2hhdCB0aGV5IG1hdGNoLlxuICpcbiAqIGBiZXR3ZWVuKHByZSwgcG9zdCwgcClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxlZnQocmlnaHQocHJlLCBwKSwgcG9zdClgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwcmUgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwb3N0IFRoZSBsYXN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IGFuZCB3aG9zZSByZXN1bHQgYmVjb21lc1xuICogICAgIHRoZSByZXN1bHQgb2YgdGhlIG5ldyBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHRoZSBjb3JyZWN0XG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW4gPSAocHJlLCBwb3N0LCBwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHBvc3QsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzNyZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSB0d2luKHByZShjdHgpKVxuICBpZiAocmVzdWx0MS5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHkxXG5cbiAgY29uc3QgW2NvbnRleHQyLCByZXN1bHQyXSA9IHAoY29udGV4dDEpXG4gIGlmIChyZXN1bHQyLnN0YXR1cyAhPT0gT2spIHtcbiAgICByZXR1cm4gbWF5YmVGYXRhbChjb250ZXh0Mi5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQyLCByZXN1bHQyLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtjb250ZXh0MywgcmVzdWx0M10gPSBwb3N0KGNvbnRleHQyKVxuICByZXR1cm4gcmVzdWx0My5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dDMsIHJlc3VsdDIudmFsdWUpXG4gICAgOiBtYXliZUZhdGFsKGNvbnRleHQzLmluZGV4ICE9PSBpbmRleCwgY29udGV4dDMsIHJlc3VsdDMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudGggZWxlbWVudCBvZiB0aGUgcmVzdWx0IG9mIGEgcGFyc2VyIHRoYXQgcHJvZHVjZXMgYW5cbiAqIGFycmF5LiBJZiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgd2lsbCBiZSBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgbnRoKHAsIG4pYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyh4W25dKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSAwLWJhc2VkIGluZGV4IG9mIHRoZSByZXN1bHQgZWxlbWVudCB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGBuYHRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG50aCA9IChwLCBuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbnRoJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignbnRoJywgbiwgb3JkTnVtRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdudGgnLCB2LCBmb3JtYXR0ZXIoJzFzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdltuXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgZmlyc3QocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbMF0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmaXJzdCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZbMF0pXG59KVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNlY29uZCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZlxuICogdGhlIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxuICpcbiAqIGBzZWNvbmQocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbMV0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2Vjb25kJywgcClcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHYgPSByZXN1bHQudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdzZWNvbmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhjb250ZXh0LCB2WzFdKVxufSlcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZiB0aGVcbiAqIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxuICpcbiAqIGB0aGlyZChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFsyXSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRoaXJkID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndGhpcmQnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3RoaXJkJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2soY29udGV4dCwgdlsyXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXG4gKiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYGZvdXJ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFszXSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3VydGggPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmb3VydGgnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgY29uc3QgdiA9IHJlc3VsdC52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZvdXJ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZbM10pXG59KVxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxuICogcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYGZpZnRoKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyh4WzRdKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlmdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlmdGggPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaWZ0aCcsIHApXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2ID0gcmVzdWx0LnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhjb250ZXh0LCB2WzRdKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBvcmRQYXJGb3JtYXR0ZXIsXG4gIG9yZFN0ckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGVycm9yLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgdHdpbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogc3VjY2VlZHMsIGl0cyByZXN1bHQgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSByZXR1cm5lZCBwYXJzZXIuXG4gKiBFaXRoZXIgd2F5LCBubyBpbnB1dCBpcyBjb25zdW1lZC4gVGhpcyBpcyB1c2VkIHRvIGRldGVybWluZSB3aGV0aGVyXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIocykgc2F0aXNmeSB0aGUgcGFyc2VyIHdpdGhvdXQgYWN0dWFsbHkgY29uc3VtaW5nXG4gKiB0aGUgaW5wdXQgdG8gZmluZCBvdXQuXG4gKlxuICogQXMgYSBzaWRlIGVmZmVjdCwgYW55IGZhdGFsIHBhcnNlIGVycm9yIHdpbGwgYmUgdHJhbnNmb3JtZWQgaW50byBhXG4gKiBub24tZmF0YWwgb25lLCBzaW5jZSBubyBpbnB1dCBpcyBiZWluZyBjb25zdW1lZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyBvciBmYWlsc1xuICogICAgIHdpdGggaXQsIGJ1dCB3aGljaCBjb25zdW1lcyBubyBpbnB1dCBlaXRoZXIgd2F5LlxuICovXG5leHBvcnQgY29uc3QgbG9va0FoZWFkID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbG9va0FoZWFkJywgcClcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbY29udGV4dCwgcmVzdWx0XSA9IHAoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0LCByZXN1bHQudmFsdWUsIGluZGV4KVxuICAgIDogZXJyb3IoY29udGV4dCwgcmVzdWx0LmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzXG4gKiBub3QgY29uc3VtZSBpbnB1dC4gSWYgdGhlIHBhcnNlciBzdWNjZWVkcyBhbnkgb3RoZXIgd2F5IG9yIGZhaWxzLFxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXG4gKlxuICogVGhpcyBlZmZlY3QgaXMgdXNlZnVsIGZvciB0dXJuaW5nIGEgcGFyc2VyIGludG8gb25lIHdoaWNoIG11c3QgbWF0Y2hcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcbiAqIGBub3RFbXB0eShtYW55KHApKWAuXG4gKlxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxuICogb3IgZWxzZSBgbm90RW1wdHlMYCBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBmYWlscyBpZiBgcGAgcGFzc2VzIGJ1dCBkb2Vzbid0XG4gKiAgICAgY29uc3VtZSBhbnkgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3Qgbm90RW1wdHkgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3RFbXB0eScsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IE9rIHx8IGNvbnRleHQuaW5kZXggIT09IGluZGV4ID8gcmVwbHlcbiAgICA6IGVycm9yKGNvbnRleHQpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBmYWlscyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzXG4gKiBub3QgY29uc3VtZSBpbnB1dC4gSWYgdGhlIHBhcnNlciBzdWNjZWVkcyBhbnkgb3RoZXIgd2F5IG9yIGZhaWxzLFxuICogdGhpcyBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXG4gKlxuICogVGhpcyBlZmZlY3QgaXMgdXNlZnVsIGZvciB0dXJuaW5nIGEgcGFyc2VyIGludG8gb25lIHdoaWNoIG11c3QgbWF0Y2hcbiAqIGF0IGxlYXN0IG9uY2UuIEZvciBpbnN0YW5jZSwgb25lIGNvdWxkIGltcGxlbWVudCBgbWFueTEocClgIHdpdGhcbiAqIGBub3RFbXB0eShtYW55KHApKWAuXG4gKlxuICogYG5vdEVtcHR5TShwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcbiAqIGBsYWJlbChub3RFbXB0eShwKSwgbXNnKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYCBzdWNjZWVkc1xuICogICAgIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVtcHR5TSA9IChwLCBtc2cpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3RFbXB0eU0nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdub3RFbXB0eU0nLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgIT09IE9rIHx8IGNvbnRleHQuaW5kZXggIT09IGluZGV4ID8gcmVwbHlcbiAgICA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkKG1zZykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIHN1Y2NlZWRzLCBidXRcbiAqIHdoaWNoIGRvZXMgbm90IGNoYW5nZSBwYXJzZXIgY29udGV4dC4gSWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQsXG4gKiBgZm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxuICogb3IgZWxzZSBgZm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcbiAqICAgICBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgZm9sbG93ZWRCeSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvbGxvd2VkQnknLCBwKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gcChjdHgpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IG9rKGNvbnRleHQsIG51bGwsIGluZGV4KVxuICAgIDogZXJyb3IoY29udGV4dCwgdW5kZWZpbmVkLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgc3VjY2VlZHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogYGZvbGxvd2VkQnlNKHAsIG1zZylgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxhYmVsKGZvbGxvd2VkQnkocCksIG1zZylgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGxvd2VkQnlNID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvbGxvd2VkQnlNJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZm9sbG93ZWRCeU0nLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW2NvbnRleHQsIHJlc3VsdF0gPSBwKGN0eClcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbCwgaW5kZXgpXG4gICAgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgc3VjY2VlZHMsXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxuICogb3IgZWxzZSBgbm90Rm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ25vdEZvbGxvd2VkQnknLCBwKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gcChjdHgpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IGVycm9yKGNvbnRleHQsIHVuZGVmaW5lZCwgaW5kZXgpXG4gICAgOiBvayhjb250ZXh0LCBudWxsLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgc3VjY2VlZHMsXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXG4gKiBtZXNzYWdlIHdpdGggYG1zZ2AgYW5kIHJlbW92aW5nIGFueSBcInVuZXhwZWN0ZWRcIiBlcnJvciBtZXNzYWdlLlxuICpcbiAqIGBub3RGb2xsb3dlZEJ5TShwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcbiAqIGBsYWJlbChub3RGb2xsb3dlZEJ5KHApLCBtc2cpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgXG4gKiAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcbiAqICAgICBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeU0gPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90Rm9sbG93ZWRCeU0nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdub3RGb2xsb3dlZEJ5TScsIG1zZywgb3JkU3RyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbY29udGV4dCwgcmVzdWx0XSA9IHAoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBlcnJvcihjb250ZXh0LCBleHBlY3RlZChtc2cpLCBpbmRleClcbiAgICA6IG9rKGNvbnRleHQsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBvcmRQYXJGb3JtYXR0ZXIsXG4gIG9yZFN0ckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhdGFsLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuY29uc3QgeyBOZXN0ZWQgfSA9IEVycm9yVHlwZVxuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5mdW5jdGlvbiBwYXNzKGN0eCwgcmVzdWx0LCBlcnJvcnMpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCB9LCB7IC4uLnJlc3VsdCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcbiAqIGNvbnN1bWVzIGlucHV0LCBub3RoaW5nIGFkZGl0aW9uYWwgaGFwcGVucy4gT3RoZXJ3aXNlLCB0aGUgb3JpZ2luYWxcbiAqIHBhcnNlcidzIHJlc3VsdCBpcyByZXRhaW5lZCBidXQgdGhlIGVycm9yIGlzIG92ZXJ3cml0dGVuIGJ5IHRoZVxuICogc3VwcGxpZWQgbWVzc2FnZSBhcyBhbiBleHBlY3RlZCBlcnJvci5cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgYmV0dGVyIGVycm9yIG1lc3NhZ2VzIGluIGNhc2VzIHdoZXJlIHRoZVxuICogYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgZXJyb3IgbWVzc2FnZXMgYXJlIGluc3VmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBuZXcgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIGlmIGBwYCBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHBhc3NlcyBpdHMgcmVzdWx0c1xuICogICAgIHRocm91Z2ggZXhjZXB0IGZvciBjaGFuZ2luZyBpdHMgYEV4cGVjdGVkYCBlcnJvciBtZXNzYWdlIHVwb25cbiAqICAgICBmYWlsdXJlLlxuICovXG5leHBvcnQgY29uc3QgbGFiZWwgPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGFiZWwnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdsYWJlbCcsIG1zZywgb3JkU3RyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gaW5kZXggPT09IGNvbnRleHQuaW5kZXggPyBwYXNzKGNvbnRleHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSkgOiByZXBseVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBJZiB0aGF0IHBhcnNlclxuICogc3VjY2VlZHMsIHRoYXQgc3VjY2VzcyBpcyBwYXNzZWQgdGhyb3VnaCwgdGhvdWdoIGlmIGl0IGRpZG4ndCBjb25zdW1lXG4gKiBhbnkgaW5wdXQsIHRoZSBwcm92aWRlZCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvIGNyZWF0ZSBhbiBleHBlY3RlZFxuICogZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBJZiB0aGUgb3JpZ2luYWwgcGFyc2VyIGZhaWxzLCB3aGF0IGhhcHBlbnMgZGVwZW5kcyBvbiB3aGV0aGVyIHRoYXRcbiAqIGZhaWx1cmUgY29uc3VtZWQgaW5wdXQuIElmIGl0IGRpZCBub3QsIHRoZSBzdXBwbGllZCBtZXNzYWdlXG4gKiBvdmVyd3JpdGVzIHRoZSBvcmlnaW5hbCBlcnJvciBtZXNzYWdlIGp1c3QgYXMgd2l0aCBgbGFiZWxgLiBJZiBpdFxuICogKmRpZCogY29uc3VtZSBpbnB1dCwgdGhlIGNvbnRleHQgaXMgcmVzZXQgdG8gdGhlIGNvbnRleHQgYmVmb3JlIHRoZVxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCB0aGUgZXJyb3IgaXMgc2V0IHRvIGEgY29tcG91bmQgZXJyb3IgdXNpbmcgdGhlXG4gKiBzdXBwbGllZCBtZXNzYWdlICh3aXRoIHRoZSBuZXN0ZWQgZXJyb3IgYmVpbmcgdGhlIG9yaWdpbmFsIGVycm9yIHRoYXRcbiAqIGNhbWUgZnJvbSB0aGUgZmFpbHVyZSBwb2ludCksIGFuZCBhIGZhdGFsIGVycm9yIGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBmZXcgcGxhY2VzIHdoZXJlIGEgZmF0YWwgZXJyb3IgaGFwcGVucyBhZnRlclxuICogYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG5ldyBlcnJvciBtZXNzYWdlIHRvIGJlIHVzZWQuIFRoaXMgd2lsbCBiZVxuICogICAgIGFuIGBFeHBlY3RlZGAgZXJyb3IgaWYgbm8gaW5wdXQgd2FzIGNvbnN1bWVkLCBvciBhIGBDb21wb3VuZGBcbiAqICAgICBlcnJvciBpZiBpdCB3YXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBjaGFuZ2VzIHRoZSBlcnJvclxuICogICAgIGFzIGFwcHJvcHJpYXRlIGlmIGBwYCBmYWlscy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJhY2tMYWJlbCA9IChwLCBtc2cpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYWNrTGFiZWwnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdiYWNrTGFiZWwnLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IE9rKSB7XG4gICAgcmV0dXJuIGluZGV4ID09PSBjb250ZXh0LmluZGV4XG4gICAgICA/IHBhc3MoY29udGV4dCwgcmVzdWx0LCBleHBlY3RlZChtc2cpKSA6IHJlcGx5XG4gIH0gZWxzZSBpZiAoaW5kZXggPT09IGNvbnRleHQuaW5kZXgpIHtcbiAgICBpZiAocmVzdWx0LmVycm9ycy5sZW5ndGggPT09IDEgJiYgcmVzdWx0LmVycm9yc1swXS50eXBlID09PSBOZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHsgY3R4LCBlcnJvcnMgfSA9IHJlc3VsdC5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBwYXNzKGNvbnRleHQsIHJlc3VsdCwgY29tcG91bmQobXNnLCBjdHgsIGVycm9ycykpXG4gICAgfVxuICAgIHJldHVybiBwYXNzKGNvbnRleHQsIHJlc3VsdCwgZXhwZWN0ZWQobXNnKSlcbiAgfVxuICByZXR1cm4gZmF0YWwoY3R4LCBjb21wb3VuZChtc2csIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2ssIFBhcnNlciwgU3RhdHVzLCBtYXliZUZhdGFsIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IG9yZGluYWwsIHJhbmdlLCBzdHJpbmdpZnksIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRXJyb3IsIEZhdGFsIH0gPSBTdGF0dXNcblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgcGFyc2VyIG1heSBmYWlsIGZhdGFsbHkgZXZlbiBpZiB0aGUgdW5zdWNjZXNzZnVsXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xuICogcGFyc2VyIHN1Y2NlZWRlZCBhbmQgY29uc3VtZWQgaW5wdXQuIEVzc2VudGlhbGx5LCBpZiB0aGUgcmV0dXJuZWRcbiAqIHBhcnNlciBjb25zdW1lcyBhbnl0aGluZyBhbmQgdGhlbiBmYWlscywgaXQgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdzZXF1ZW5jZScsIHBzKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHJlc3VsdC5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLFxuICogYGJsb2NrYCB3aWxsIGFsc28gZmFpbCB3aXRoIHRoYXQgZmFpbHVyZS4gVGhpcyBmYWlsdXJlIHdpbGwgYmUgZmF0YWxcbiAqIGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxuICogICAgIHBhcnNlcidzIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seVxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSBnZW5GbiA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKCdibG9jaycsIGdlbkZuKVxuXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIG9yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtuZXh0LCByZXN1bHRdID0gdmFsdWUoY29udGV4dClcbiAgICBjb250ZXh0ID0gbmV4dFxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChjb250ZXh0LmluZGV4ICE9PSBpbmRleCwgY29udGV4dCwgcmVzdWx0LmVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcmVzdWx0LnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIG5vbi1udWxsIHJlc3VsdHMgaW50byBhbiBhcnJheSBhbmRcbiAqIHByb3ZpZGluZyB0aGF0IGFzIGl0cyBvd24gcmVzdWx0LiBUaGUgcmV0dXJuZWQgcGFyc2VyIG9ubHkgZmFpbHMgaWZcbiAqIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXQgd2hlbiBpdCBmYWlscy4gT3RoZXJ3aXNlLCBpdFxuICogc3VjY2VlZHMgZXZlbiBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXNuJ3Qgc3VjY2VlZCBldmVuIG9uY2UuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55JywgcClcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuICAgIGlmIChyZXN1bHQudmFsdWUgIT09IG51bGwpIHZhbHVlcy5wdXNoKHJlc3VsdC52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW5cbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueTEnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgbGV0IGNvbnRleHQgPSBuZXh0XG4gIGNvbnN0IHZhbHVlcyA9IHJlc3VsdC52YWx1ZSAhPT0gbnVsbCA/IFtyZXN1bHQudmFsdWVdIDogW11cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBuZXh0XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcbiAgICBpZiAocmVzdWx0LnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seVxuICogZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsXG4gKiBpdCBzdWNjZWVkcyBldmVuIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lc24ndCBzdWNjZWVkIGV2ZW4gb25jZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXBNYW55JywgcClcblxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG5leHRcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdFxuICogc3VjY2VlZCBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLFxuICogdGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXRcbiAqIHdoZW4gaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwTWFueTEnLCBwKVxuXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzICE9PSBPaykgcmV0dXJuIHJlcGx5XG5cbiAgbGV0IGNvbnRleHQgPSBuZXh0XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gbmV4dFxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlcbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIG51bGwpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXG4gKiBjb250ZW50IHBhcnNlciBjYW4gbWF0Y2ggemVybyB0aW1lcywgc28gdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlclxuICogdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEJ5ID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBzZXAsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHQsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuLiBUaGVcbiAqIGNvbnRlbnQgcGFyc2VyIG11c3Qgc3VjY2VlZCBhdCBsZWVhc3Qgb25jZSBvciBhIG5vbi1mYXRhbCBmYWlsdXJlXG4gKiB3aWxsIG9jY3VyLiBPdGhlcndpc2UsIHRoZSBwYXJzZXIgY2FuIG9ubHkgZmFpbCBpZiBvbmUgb2YgaXRzIHBhcnNlcnNcbiAqIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQ29udGVudCBwYXJzZXIgcmVzdWx0cyBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSwgd2hpY2ggYmVjb21lcyB0aGVcbiAqIHJlc3VsdCBmb3IgdGhlIHJldHVybmVkIHBhcnNlci4gVGhlIHJlc3VsdHMgb2YgdGhlIHNlcGFyYXRvciBwYXJzZXJcbiAqIGFyZSBkaXNjYXJkZWQuXG4gKlxuICogSWYgdGhlIHNlcGFyYXRvciBhbmQgY29udGVudCBwYXJzZXJzIGJvdGggcGFzcyB3aXRob3V0IGNvbnN1bWluZ1xuICogY29udGVudCwgdGhhdCB3b3VsZCBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuXG4gKiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHNlcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXBCeTEgPSAocCwgc2VwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnkxJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnkxJywgc2VwLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHJldHVybiByZXBseVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEJ5MScpKVxuICAgIHZhbHVlcy5wdXNoKHJlc3VsdDIudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2VlbiBhbmRcbiAqIG9wdGlvbmFsbHkgYXQgdGhlIGVuZC4gVGhlIGNvbnRlbnQgcGFyc2VyIGNhbiBtYXRjaCB6ZXJvIHRpbWVzLCBzb1xuICogdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlciB0byBmYWlsIGlzIGZvciBvbmUgb2YgaXRzIHBhcnNlcnMgdG9cbiAqIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEVuZEJ5ID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnknLCBzZXAsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHQsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbcmVwbHkxLCBbY29udGV4dDEsIHJlc3VsdDFdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5MiwgW2NvbnRleHQyLCByZXN1bHQyXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwTmV4dCwgX10gPSBzZXAoeyAuLi5jb250ZXh0LCBpbmRleCB9KVxuICByZXR1cm4gb2soc2VwTmV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4gYW5kXG4gKiBvcHRpb25hbGx5IGF0IHRoZSBlbmQuIFRoZSBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2VcbiAqIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmUgd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5XG4gKiBmYWlsIGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBsZXQgY29udGV4dCA9IG5leHRcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3JlcGx5MSwgW2NvbnRleHQxLCByZXN1bHQxXV0gPSB0d2luKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDFcbiAgICBpZiAocmVzdWx0MS5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseTIsIFtjb250ZXh0MiwgcmVzdWx0Ml1dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0MlxuICAgIGlmIChyZXN1bHQyLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseTJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBFbmRCeTEnKSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHQyLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzZXBOZXh0LCBfXSA9IHNlcCh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIHJldHVybiBvayhzZXBOZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxuICogZmFpbHMsIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWw7IGlmIGlucHV0IGlzIGNvbnN1bWVkIGJlZm9yZSBvclxuICogZHVyaW5nIHRoYXQgZmFpbHVyZSwgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBhcHBseSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gYXBwbHkgdGhlIHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmVwZWF0ID0gKHAsIG4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXQnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdyZXBlYXQnLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW25leHQsIHJlc3VsdF0gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG5leHRcbiAgICBpZiAocmVzdWx0LnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCByZXN1bHQuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChyZXN1bHQudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB3aGljaCBhcHBsaWVzIGl0cyBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqIHVudGlsIGl0cyBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXlcbiAqIG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpc1xuICogYXBwbGllZCAqZmlyc3QqLCBzbyBpdCdzIGZpbmUgdG8gaGF2ZSB0aGUgdHdvIHBhcnNlcnMgb3ZlcmxhcC4gRm9yXG4gKiBleGFtcGxlLCBgbWFueVRpbGwoYW55LCBsZXR0ZXIpYCB3aWxsIHdvcmsgZmluZSwgYmVjYXVzZSBgbGV0dGVyYFxuICogd2lsbCBiZSB0cmllZCBmaXJzdCBvbiBlYWNoIGNoYXJhY3RlciAoY29udHJhc3Qgd2l0aCBgYmV0d2VlbihsZXR0ZXIsXG4gKiBhbnksIGxldHRlcilgLCB3aGljaCB3aWxsIG5ldmVyIHN1Y2NlZWQgYmVjdWFzZSB0aGUgYGFueWAgaXMgYXBwbGllZFxuICogYmVmb3JlIHRoZSBmaW5hbCBgbGV0dGVyYCBhbmQgd2lsbCB0aGVyZWZvcmUgY29uc3VtZSBhIGxldHRlciBiZWZvcmVcbiAqIHRoZSBgbGV0dGVyYCBwYXJzZXIgZ2V0cyB0byBzZWUgaXQpLlxuICpcbiAqIElmIHRoZSBjb250ZW50IHBhcnNlciBmYWlscyBiZWZvcmUgdGhlIGVuZCBwYXJzZXIgZG9lcywgdGhlIG92ZXJhbGxcbiAqIHBhcnNlciB3aWxsIGZhaWwgKGZhdGFsbHkgaWYgaW5wdXQgaGFkIGFscmVhZHkgYmVlbiBjb25zdW1lZCkuIEFcbiAqIGZhdGFsIGVycm9yIGJ5IGVpdGhlciBwYXJzZXIgd2lsbCByZXN1bHQgaW4gYSBmYXRhbCBlcnJvciBmb3IgdGhlXG4gKiBvdmVyYWxsIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlbmQgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSB0aGUgY29udGVudCB6ZXJvIG9yIG1vcmVcbiAqICAgICB0aW1lcyB1bnRpbCB0aGUgZW5kIHBhcnNlciBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnlUaWxsID0gKHAsIGVuZCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnlUaWxsJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBlbmQsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseTEsIFtjb250ZXh0MSwgcmVzdWx0MV1dID0gdHdpbihlbmQoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHQxXG4gICAgaWYgKHJlc3VsdDEuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5MVxuICAgIGlmIChyZXN1bHQxLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHkyLCBbY29udGV4dDIsIHJlc3VsdDJdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dDJcbiAgICBpZiAocmVzdWx0Mi5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHkyXG4gICAgaWYgKHJlc3VsdDIuc3RhdHVzID09PSBFcnJvcikge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoXG4gICAgICAgIGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBtZXJnZShyZXN1bHQyLmVycm9ycywgcmVzdWx0MS5lcnJvcnMpLFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAocmVzdWx0Mi52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocmVzdWx0Mi52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBQcml2YXRlIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIGFzc2VydGlvbiBtZXNzYWdlcyBhYm91dCBvcCBwYXJzZXJzXG4gKiBub3QgcmV0dXJuaW5nIGZ1bmN0aW9uc1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcmQgVGhlIG51bWJlciBvZiB0aGUgb3AgcGFyc2VyIHRoYXQgZmFpbHMgdG8gcHJvZHVjZVxuICogICAgIGEgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIGFwcHJvcHJpYXRlIGFzc2VydGlvbiBmYWlsdXJlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIG9wRm9ybWF0dGVyKG9yZCkge1xuICByZXR1cm4gdmFsdWUgPT4gYGV4cGVjdGVkICR7b3JkfSBvcCBwYXJzZXIgdG8gcmV0dXJuIGEgZnVuY3Rpb247IGZvdW5kICR7XG4gICAgc3RyaW5naWZ5KHZhbHVlKVxuICB9YFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY0wgPSAocCwgb3AsIHgpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gRXJyb3IpIHJldHVybiBvayhuZXh0LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtyZXN1bHQudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gbmV4dFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3JlcGx5b3AsIFtjb250ZXh0b3AsIHJlc3VsdG9wXV0gPSB0d2luKG9wKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5b3BcbiAgICBpZiAocmVzdWx0b3Auc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIGNvbnN0IFtyZXBseXAsIFtjb250ZXh0cCwgcmVzdWx0cF1dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBjb250ZXh0cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseXBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jTCcsIHJlc3VsdG9wLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gocmVzdWx0b3AudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocmVzdWx0cC52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIGVpdGhlciBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzXG4gKiBmYXRhbGx5IG9yIHRoZSBjb250ZW50IHBhcnNlciBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIElmXG4gKiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW4gdGhhdCByZXN1bHQgb2ZcbiAqIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxTCA9IChwLCBvcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFMJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IG5leHRcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseW9wLCBbY29udGV4dG9wLCByZXN1bHRvcF1dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHlwLCBbY29udGV4dHAsIHJlc3VsdHBdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFMJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodFxuICogYXNzb2NpYXRpdmUgYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvXG4gKiB0aGUgcmVzdWx0cyBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb3BgLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb3BgIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBleGNlcHRpb24gd2lsbCBiZSB0aHJvd25cbiAqIHdoZW4gdGhpcyBwYXJzZXIgdHJpZXMgdG8gY2FsbCB0aGF0IHJlc3VsdCBhcyBhIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gb3AgVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb3BgIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvcGAgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFzc29jUiA9IChwLCBvcCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIG9wLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW25leHQsIHJlc3VsdF1dID0gdHdpbihwKGN0eCkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5XG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBFcnJvcikgcmV0dXJuIG9rKG5leHQsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3Jlc3VsdC52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBuZXh0XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcmVwbHlvcCwgW2NvbnRleHRvcCwgcmVzdWx0b3BdXSA9IHR3aW4ob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlvcFxuICAgIGlmIChyZXN1bHRvcC5zdGF0dXMgPT09IEVycm9yKSBicmVha1xuXG4gICAgY29uc3QgW3JlcGx5cCwgW2NvbnRleHRwLCByZXN1bHRwXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IGNvbnRleHRwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHJlcGx5cFxuICAgIGlmIChyZXN1bHRwLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NSJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3JlcGx5LCBbbmV4dCwgcmVzdWx0XV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgIT09IE9rKSByZXR1cm4gcmVwbHlcblxuICBjb25zdCB2YWx1ZXMgPSBbcmVzdWx0LnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IG5leHRcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtyZXBseW9wLCBbY29udGV4dG9wLCByZXN1bHRvcF1dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dG9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiByZXBseW9wXG4gICAgaWYgKHJlc3VsdG9wLnN0YXR1cyA9PT0gRXJyb3IpIGJyZWFrXG5cbiAgICBjb25zdCBbcmVwbHlwLCBbY29udGV4dHAsIHJlc3VsdHBdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gY29udGV4dHBcbiAgICBpZiAocmVzdWx0cC5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcmVwbHlwXG4gICAgaWYgKHJlc3VsdHAuc3RhdHVzID09PSBFcnJvcikgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFSJywgcmVzdWx0b3AudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChyZXN1bHRvcC52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChyZXN1bHRwLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmb3JtYXRFcnJvcnMgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgc3RyaW5nVG9WaWV3LCB0cmFjayB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3ltYm9sIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N5bWJvbH1cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogU3ltYm9sKCdvaycpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LiAqL1xuICBFcnJvcjogU3ltYm9sKCdlcnJvcicpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6IFN5bWJvbCgnZmF0YWwnKSxcbn1cblxuLyoqXG4gKiBUaGUgY29udGV4dCBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHQgYW5kIGFcbiAqIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbnRleHRcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcbiAqICAgICBuZXh0IHBhcnNpbmcgb3BlcmF0aW9uIHdpbGwgdGFrZSBwbGFjZSAob3Igd2hlcmUgdGhlIGxhc3Qgb25lXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcbiAqIGVzc2VudGlhbGx5IGEgdW5pb24gb2Ygc3VjY2Vzc2Z1bCB2YWx1ZSBhbmQgZmFpbHVyZSBlcnJvciwgd2l0aCB0aGVcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIGEgc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBpbmNsdWRpbmcgdGhlXG4gKiBjb250ZXh0IGFuZCB0aGUgcmVzdWx0LlxuICogQHR5cGVkZWYge1tDb250ZXh0LCBSZXN1bHRdfSBSZXBseVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgVWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxJbnQ4QXJyYXl8XG4gKiAgIEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5XG4gKiApfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSBwYXJzZXIgY29udGV4dC4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhXG4gKiBuZXcgY29udGV4dCBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogQW55IGZ1cnRoZXIgY29udGV4dHMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgY29udGV4dCB1c2luZyB7QGxpbmsgb2t9LFxuICoge0BsaW5rIGVycm9yfSwgb3Ige0BsaW5rIGZhdGFsfS5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7Q29udGV4dH0gQW4gZW1wdHkgcGFyc2VyIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb250ZXh0KGlucHV0KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcbiAgICArIGBidWZmZXIsIG9yIGEgZGF0YSB2aWV3OyBwYXJzZXIgaW5wdXQgd2FzICR7dHlwZW9mIGlucHV0fWBcblxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlzVHlwZWRBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfSkoaW5wdXQpXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3LFxuICAgIGluZGV4OiAwLFxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcbiAqIGNvbnRleHQsIHVwZGF0ZXMgaXQgc29tZWhvdyAoZ2VuZXJhbGx5IGJ5IHJlYWRpbmcgYSBjaGFyYWN0ZXIpLCBhbmRcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgY29udGV4dC5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBiZWZvcmUgdGhlIHBhcnNlciBpcyBydW4uXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSB1cGRhdGVkIGNvbnRleHQgYWZ0ZXIgdGhlIHBhcnNlciBpcyBhcHBsaWVkIGFuZFxuICogICAgIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyIGZ1bmN0aW9uXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXG4gKiB0byB0cmFjayBwYXJzZXJzIHRoYXQgaXQgaGFzIGNyZWF0ZWQuXG4gKlxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcbiAqIHdpbGwgYXNzZXJ0IHRoYXQgdGhlIHBhcnNlciB0aGF0IGlzIHBhc3NlZCB0byBpdCB3YXMgY3JlYXRlZCBieSB0aGlzXG4gKiBmYWN0b3J5IGZ1bmN0aW9uLiBBbnkgb3RoZXIgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLFxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcbiAqIHJldHVybiB2YWx1ZS4gSWYgYXNzZXJ0aW9ucyBhcmUgbm90IGVuYWJsZWQsIHRoaXMgY2hlY2sgd2lsbCBub3QgYmVcbiAqIGRvbmUuXG4gKlxuICogRXZlcnkgcGFyc2VyIGluIHRoaXMgbGlicmFyeSBpcyBjcmVhdGVkIHdpdGggYG1ha2VQYXJzZXJgLCBzbyBhbnkgb2ZcbiAqIHRob3NlIG9yIGFueSBwYXJzZXIgY29tcG9zZWQgZnJvbSB0aG9zZSB3aWxsIHdvcmsgYXV0b21hdGljYWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gZm4gQSBwYXJzZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBQYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcbiAqIGEgYENvbnRleHRgIHBvdGVudGlhbGx5IHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvayhjdHgsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgY29weSBvZiBgQ29udGV4dGAuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogICAgIGNvbnRleHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IoY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5FcnJvciwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlXG4gKiBjb25zdW1pbmcgaW5wdXQsIGFzIHdlbGwgYXMgYSBuZXcgYENvbnRleHRgIHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogICAgIGNvbnRleHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmF0YWwoY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYXRhbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgYFJlc3VsdGAgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2VyIGFwcGxpY2F0b2luIGZhaWxlZC5cbiAqIFdoZXRoZXIgdGhpcyBpcyBhIGZhdGFsIGVycm9yIG9yIG5vdCBkZXBlbmRzIG9uIHdoZXRoZXIgYHRlc3RgIGlzXG4gKiBgdHJ1ZWAgKGZhdGFsKSBvciBgZmFsc2VgIChub24tZmF0YWwpLlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdGVzdCBVc2VkIHRvIGRldGVybWluZSB3aGV0aGVyIHRoZSBwcm9kdWNlZCByZXN1bHRcbiAqICAgICByZXByZXNlbnRzIGEgZmF0YWwgZXJyb3IgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7UGFyc2VFcnJvcltdfSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogICAgIGNvbnRleHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWF5YmVGYXRhbCh0ZXN0LCBjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW1xuICAgIHsgLi4uY3R4LCBpbmRleCB9LFxuICAgIHsgc3RhdHVzOiB0ZXN0ID8gU3RhdHVzLkZhdGFsIDogU3RhdHVzLkVycm9yLCBlcnJvcnMgfSxcbiAgXVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIGZpbmFsIGNvbnRleHQgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZSBiZWVuXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKENvbnRleHQoaW5wdXQpKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7U3RhdHVzfSBUaGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGRpZCBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYW5cbiAqIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKC4uLnJlcGx5KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXG4gKiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBmcm9tIHRoZSBwYXJzZXIgYXBwbGljYXRpb24sIGlmIHRoZSBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGFyc2VyIGZhaWxzLiBUaGUgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIGFcbiAqICAgICBkZXRhaWxlZCByZWNvcmQgb2Ygd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuKHBhcnNlciwgaW5wdXQpIHtcbiAgY29uc3QgW2N0eCwgcmVzdWx0XSA9IHBhcnNlcihDb250ZXh0KGlucHV0KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKGN0eCwgcmVzdWx0KSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGNoYXJMZW5ndGgsXG4gIGNvbW1hU2VwYXJhdGUsXG4gIG5leHRDaGFyV2lkdGgsXG4gIHZpZXdUb1N0cmluZyxcbn0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlJlc3VsdH0gUmVzdWx0ICovXG5cbmNvbnN0IHRhYiA9IC9cXHQvZ3VcbmNvbnN0IHplcm9XaWR0aCA9IC8oPzpcXHB7TW59fFxccHtDZn0pL2d1XG5cbi8qKlxuICogQSBzeW1ib2wgZGVmaW5pbmcgdGhlIHR5cGUgb2YgYW4gZXJyb3IuXG4gKiBAZW51bSB7c3ltYm9sfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JUeXBlID0ge1xuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxuICAgKiBtYWpvcml0eSBvZiBwYXJzZXJzLlxuICAgKi9cbiAgRXhwZWN0ZWQ6IFN5bWJvbCgnZXhwZWN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cbiAgICovXG4gIFVuZXhwZWN0ZWQ6IFN5bWJvbCgndW5leHBlY3RlZCcpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxuICAgKi9cbiAgR2VuZXJpYzogU3ltYm9sKCdnZW5lcmljJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCBmb3IgYW4gZXJyb3IgdGhhdCBjYXVzZWQgYmFja3RyYWNraW5nLCB3aGVyZSB0aGVcbiAgICogcGFyZW50IGVycm9yIGlzIHJlcG9ydGVkIGFmdGVyIGJhY2t0cmFja2luZy5cbiAgICovXG4gIE5lc3RlZDogU3ltYm9sKCduZXN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXG4gICAqL1xuICBDb21wb3VuZDogU3ltYm9sKCdjb21wb3VuZCcpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiBTeW1ib2woJ290aGVyJyksXG59XG5cbi8qKlxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxuICogdG8gYSBwYXJ0aWN1bGFyIGluZGV4IG9yIG5lc3RlZC9jb21wb3VuZCBlcnJvcnMgdGhhdCBwb2ludCBiYWNrIHRvXG4gKiB0aGUgc2FtZSBpbmRleCBidXQgYXBwbHkgdG8gYSBkaWZmZXJlbnQgb25lLlxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGF0IHRoZSBsb2NhdGlvbiByZWZlcnJlZCB0byBieSB0aGUgY3VycmVudFxuICogY29udGV4dC4gVGhlIHR5cGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlcmUgdGhlIGxhYmVsIHNob3VsZCBiZVxuICogcG9zaXRpb25lZCBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2NhbEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGluIGEgZGlmZmVyZW50IGxvY2F0aW9uIHRoYW4gdGhlIG9uZSByZWZlcnJlZFxuICogdG8gYnkgdGhlIGN1cnJlbnQgY29udGV4dC4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQSBuZXN0ZWQgZXJyb3IgdGhhdCBoYXMgaXRzIG93biBsYWJlbC4gVGhpcyBpcyBzaW1wbHkgZm9yIHByb2R1Y2luZ1xuICogbmljZXIgZXJyb3IgbWVzc2FnZXM7IHRoaXMgZXJyb3IgaXMgdHlwaWNhbGx5IG9ubHkgcHJvZHVjZWQgYnkgdGhlXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG91bmRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLkNvbXBvdW5kYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBlcnJvci4gVGhpc1xuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXG4gKiAgICAgdW5kZXIgdGhpcyBjb21wb3VuZCBlcnJvci5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS4gSXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmUgYXJyYXkgb2ZcbiAqIGVycm9yIG1lc3NhZ2VzIG1heSBoYXZlIG11bHRpcGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCBidXQgb25seSB0aGVcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXG4gKiAgICAgbm90IGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLlVuZXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmUgZ2VuZXJpY1xuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcbiAqIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGdlbmVyaWMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5HZW5lcmljLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG90aGVyIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3RoZXIobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmVzdGVkIGVycm9yLiBUaGlzIHRha2VzIGFuIGVycm9yIGxpc3QgYW5kIHdyYXBzIGl0IHdpdGhcbiAqIGNvbnRleHQgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGVcbiAqIG5lc3RlZCBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvclxuICogd2lsbCBub3QgYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgbmVzdGVkIGVycm9yXG4gKiAgICAgb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TmVzdGVkRXJyb3J9IEEgbmV3IG5lc3RlZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gZXJyb3JzXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBjdHgsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7Q29tcG91bmRFcnJvcn0gQSBuZXcgY29tcG91bmQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IFt7XG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXG4gICAgICBjdHg6IGVycm9ycy5jdHgsXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXG4gICAgICBsYWJlbCxcbiAgICB9XVxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBjdHgsIGVycm9ycywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9yczEgVGhlIGZpcnN0IGFycmF5IG9mIGVycm9ycy5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMyIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxLCBlcnJvcnMyKSB7XG4gIHJldHVybiBbLi4uZXJyb3JzMSwgLi4uZXJyb3JzMl1cbn1cblxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxuICogICAgIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICovXG5cbi8qKlxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxuICAqXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxuICAqICAgICB0YWIgc2l6ZS5cbiAgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcbiAqIGRlc2lyZWQuXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxuICpcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG5cbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cbiAgICAgIH1cbiAgICAgIGxpbmVubysrXG4gICAgICBzdGFydCA9IGkgKyBza2lwXG4gICAgfVxuICAgIGkgKz0gc2tpcFxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cbiAqXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XG4gIGxldCBjaGFySW5kZXggPSAwXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxuICAgIGNoYXJJbmRleCsrXG4gIH1cbiAgcmV0dXJuIGNoYXJJbmRleFxufVxuXG4vKipcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxuICogY2hhcmFjdGVyIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcbiAgbGV0IHJlc3VsdCA9IGxpbmVcblxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICB9XG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxuICB9XG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xuICogbWFya3MuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XG4gIGxldCBpbmRleCA9IGNvbEluZGV4XG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxuXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcbiAqICAgICBjb2x1bW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7c3B9JHtcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxuICAgIH1eYFxuICB9XG5cbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcbiAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYSBjaGFyYWN0ZXIgd2l0aGluIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdFxuICAvLyAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBTaGlmdCB0aGUgbGluZSB0byBtYWtlIHRoZSBjYXJldCBwb2ludFxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgY29uc3Qgc3RhcnQgPSBjb2xubyAtIDEgLSBNYXRoLmNlaWwobWF4V2lkdGggLyAyKSArIDNcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xuICByZXR1cm4gYCR7c3B9Li4uJHtcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICB9Li4uXFxuJHtzcH0ke1xuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXG4gIH1eYFxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsoTmVzdGVkRXJyb3JbXXxDb21wb3VuZEVycm9yW10pfSBuZXN0ZWRzIEFuIGFycmF5IG9mIGVpdGhlclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXG4gKiAgICAgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgbmVzdGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE5lc3RlZChuZXN0ZWRzLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBuLmN0eFxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxuICAgICAgPyBgXFxuJHtzcH0ke24ubGFiZWx9IGNvdWxkIG5vdCBiZSBwYXJzZWQgYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxuICApXG5cbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxuXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcblxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcblxuICBjb25zdCB1bmtub3duTXNnID0gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGAke3NwfVVua25vd24gZXJyb3IocylcXG5gIDogJydcbiAgY29uc3QgZW9mTXNnID0gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXG4gICAgPyBgJHtzcH1Ob3RlOiBmYWlsdXJlIG9jY3VycmVkIGF0IHRoZSBlbmQgb2YgaW5wdXRcXG5gIDogJydcblxuICByZXR1cm4gZW5zdXJlTmV3bGluZXMoXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfSR7dW5rbm93bk1zZ31gXG4gICAgICArIGAke2VvZk1zZ30ke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXG4gICAgMixcbiAgKVxufVxuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogQWNjZXB0cyBhIHBhcnNlciBjb250ZXh0IGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4KSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0c1xuICogdG8gNzIpLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBwYXJzZXIncyBjb250ZXh0IHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IHByb2R1Y2VkIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMoXG4gIGN0eCwgcmVzdWx0LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgZm9ybWF0dGVyID0gZm9ybWF0LFxuKSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBjb250ZXh0LiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIGNvbnRleHQnc1xuICogaW5kZXggd2l0aGluIHRoZSBjb250ZXh0J3MgZGF0YSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oY3R4LCB0YWJTaXplID0gOCkge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBhbnlPZixcbiAgY2hhcixcbiAgY2hhckksXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZU9mLFxuICBvY3RhbCxcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHNhdGlzZnlNLFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBhbHdheXMsXG4gIGZhaWwsXG4gIGZhaWxGYXRhbGx5LFxuICBmYWlsVW5leHBlY3RlZCxcbn0gZnJvbSAnLi9wYXJzZXJzL21pc2MnXG5leHBvcnQge1xuICBhbHBoYVUsXG4gIGxldHRlclUsXG4gIGxvd2VyVSxcbiAgbmV3bGluZSxcbiAgbmV3bGluZVUsXG4gIHJlZ2V4LFxuICBzcGFjZSxcbiAgc3BhY2VVLFxuICBzcGFjZXMsXG4gIHNwYWNlczEsXG4gIHNwYWNlczFVLFxuICBzcGFjZXNVLFxuICB1cHBlclUsXG59IGZyb20gJy4vcGFyc2Vycy9yZWdleCdcbmV4cG9ydCB7XG4gIGFsbCxcbiAgYW55U3RyaW5nLFxuICBzdHJpbmcsXG4gIHN0cmluZ0ksXG59IGZyb20gJy4vcGFyc2Vycy9zdHJpbmcnXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT01CSU5BVE9SU1xuXG5leHBvcnQge1xuICBhdHRlbXB0LFxuICBiZXR3ZWVuQixcbiAgYmxvY2tCLFxuICBib3RoQixcbiAgY2hhaW5CLFxuICBjaG9pY2UsXG4gIGRlZixcbiAgbGVmdEIsXG4gIG1hbnlUaWxsQixcbiAgb3B0LFxuICBwaXBlQixcbiAgcmVwZWF0QixcbiAgcmlnaHRCLFxuICBzZXF1ZW5jZUIsXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBiZXR3ZWVuLFxuICBib3RoLFxuICBjaGFpbixcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIGxlZnQsXG4gIG1hcCxcbiAgbnRoLFxuICBwaXBlLFxuICByaWdodCxcbiAgc2Vjb25kLFxuICBza2lwLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY2hhaW5pbmcnXG5leHBvcnQge1xuICBmb2xsb3dlZEJ5LFxuICBmb2xsb3dlZEJ5TSxcbiAgbG9va0FoZWFkLFxuICBub3RFbXB0eSxcbiAgbm90RW1wdHlNLFxuICBub3RGb2xsb3dlZEJ5LFxuICBub3RGb2xsb3dlZEJ5TSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jb25kaXRpb25hbCdcbmV4cG9ydCB7XG4gIGJhY2tMYWJlbCxcbiAgbGFiZWwsXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWVzc2FnZSdcbmV4cG9ydCB7XG4gIGFzc29jMUwsXG4gIGFzc29jMVIsXG4gIGFzc29jTCxcbiAgYXNzb2NSLFxuICBibG9jayxcbiAgbWFueSxcbiAgbWFueTEsXG4gIG1hbnlUaWxsLFxuICByZXBlYXQsXG4gIHNlcEJ5LFxuICBzZXBCeTEsXG4gIHNlcEVuZEJ5LFxuICBzZXBFbmRCeTEsXG4gIHNlcXVlbmNlLFxuICBza2lwTWFueSxcbiAgc2tpcE1hbnkxLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgUGFyc2VyLFxuICBTdGF0dXMsXG4gIGVycm9yLFxuICBmYWlsdXJlLFxuICBmYXRhbCxcbiAgbWF5YmVGYXRhbCxcbiAgb2ssXG4gIHBhcnNlLFxuICBydW4sXG4gIHN0YXR1cyxcbiAgc3VjY2VlZGVkLFxuICBzdWNjZXNzLFxufSBmcm9tICcuL2NvcmUnXG5leHBvcnQge1xuICBFcnJvclR5cGUsXG4gIGNvbXBvdW5kLFxuICBleHBlY3RlZCxcbiAgZm9ybWF0RXJyb3JzLFxuICBnZW5lcmljLFxuICBnZXRQb3NpdGlvbixcbiAgbWVyZ2UsXG4gIG5lc3RlZCxcbiAgb3RoZXIsXG4gIHVuZXhwZWN0ZWQsXG59IGZyb20gJy4vZXJyb3InXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFscGhhVTogJ2EgVW5pY29kZSBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYW55OiAnYW55IGNoYXJhY3RlcicsXG4gIGFueU9mOiBhcnJheSA9PiAnYW55IG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIGFueVN0cmluZzogbiA9PiBgYSBzdHJpbmcgb2YgJHtufSBjaGFyYWN0ZXJzYCxcbiAgY2hhcjogYyA9PiBxdW90ZShjKSxcbiAgY2hhckk6IGMgPT4gcXVvdGUoYyksXG4gIGRpZ2l0OiAnYSBkaWdpdCcsXG4gIGVvZjogJ2VuZCBvZiBpbnB1dCcsXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxuICBsZXR0ZXI6ICdhIGxldHRlcicsXG4gIGxldHRlclU6ICdhIFVuaWNvZGUgbGV0dGVyJyxcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBsb3dlclU6ICdhIFVuaWNvZGUgbG93ZXJjYXNlIGxldHRlcicsXG4gIG5ld2xpbmU6ICdhIG5ld2xpbmUnLFxuICBuZXdsaW5lVTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcbiAgbm9uZU9mOiBhcnJheSA9PiAnbm9uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBvY3RhbDogJ2FuIG9jdGFsIGRpZ2l0JyxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXG4gIHJlZ2V4OiByZSA9PiBgYSBzdHJpbmcgbWF0Y2hpbmcgJHtyZX1gLFxuICBzcGFjZTogJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzMTogJ29uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlc1U6ICd6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxVTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VVOiAnYSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgc3RyaW5nOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgc3RyaW5nSTogc3RyID0+IHF1b3RlKHN0ciksXG4gIHVwcGVyOiAnYW4gdXBwZXJjYXNlIGxldHRlcicsXG4gIHVwcGVyVTogJ2EgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyJyxcbn1cblxuZXhwb3J0IGNvbnN0IGV4cGVjdGVkcyA9IHtcbiAgYWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGEpLFxuICBhbHBoYVU6IGV4cGVjdGVkKHN0cmluZ3MuYWxwaGFVKSxcbiAgYW55OiBleHBlY3RlZChzdHJpbmdzLmFueSksXG4gIGFueU9mOiBhcnJheSA9PiBleHBlY3RlZChzdHJpbmdzLmFueU9mKGFycmF5KSksXG4gIGFueVN0cmluZzogbiA9PiBleHBlY3RlZChzdHJpbmdzLmFueVN0cmluZyhuKSksXG4gIGNoYXI6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyKGMpKSxcbiAgY2hhckk6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFySShjKSksXG4gIGRpZ2l0OiBleHBlY3RlZChzdHJpbmdzLmRpZ2l0KSxcbiAgZW9mOiBleHBlY3RlZChzdHJpbmdzLmVvZiksXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxuICBsZXR0ZXI6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyKSxcbiAgbGV0dGVyVTogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXJVKSxcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxuICBsb3dlclU6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXJVKSxcbiAgbmV3bGluZTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lKSxcbiAgbmV3bGluZVU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZVUpLFxuICBub25lT2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3Mubm9uZU9mKGFycmF5KSksXG4gIG9jdGFsOiBleHBlY3RlZChzdHJpbmdzLm9jdGFsKSxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcbiAgcmVnZXg6IHJlID0+IGV4cGVjdGVkKHN0cmluZ3MucmVnZXgocmUpKSxcbiAgc3BhY2U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2UpLFxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcbiAgc3BhY2VzMTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxKSxcbiAgc3BhY2VzVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXNVKSxcbiAgc3BhY2VzMVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzMVUpLFxuICBzcGFjZVU6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VVKSxcbiAgc3RyaW5nOiBzdHIgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHJpbmcoc3RyKSksXG4gIHN0cmluZ0k6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZ0koc3RyKSksXG4gIHVwcGVyOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyKSxcbiAgdXBwZXJVOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyVSksXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRDaGFyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0U3RyaW5nLFxuICBhc3NlcnRTdHJpbmdPckFycmF5LFxuICBvcmRDaGFyRm9ybWF0dGVyLFxuICBvcmRGbkZvcm1hdHRlcixcbiAgb3JkU3RyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZXJyb3IsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBuZXh0Q2hhciwgdHdpbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBDaGFyUGFyc2VyID0gZm4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3IoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gZm4obmV4dCkgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3IoY3R4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kXG4gKiBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFVwb24gZmFpbHVyZSwgdGhpcyBwYXJzZXIgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgYWx3YXlzIGZhaWwuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IGMgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFyJywgYylcblxuICBjb25zdCBbcmVwbHksIFtuZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihjaCA9PiBjID09PSBjaCkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihuZXh0LCBleHBlY3RlZHMuY2hhcihjKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZFxuICogc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdFxuICogdGhlIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLiBVcG9uIGZhaWx1cmUsXG4gKiB0aGlzIHBhcnNlciBkb2VzIG5vdCBjb25zdW1lIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIGFsd2F5cyBmYWlsLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYXJJID0gYyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXJJJywgYylcblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihcbiAgICBjaCA9PiBjLnRvTG93ZXJDYXNlKCkgPT09IGNoLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuY2hhckkoYykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSBmbiA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4pXG4gIHJldHVybiBDaGFyUGFyc2VyKGZuKShjdHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQgYW5kIHNpZ25hbHMgYW4gZXJyb3JcbiAqIHdpdGggdGhlIHByb3ZpZGVkIG1lc3NhZ2UuXG4gKlxuICogYHNhdGlzZnlNKGZuLCBtZXNzYWdlKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwoc2F0aXNmeShmbiksIG1lc3NhZ2UpYC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeU0gPSAoZm4sIG1lc3NhZ2UpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnlNJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc2F0aXNmeU0nLCBtZXNzYWdlLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkKG1lc3NhZ2UpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBkZXRlcm1pbmVzIHdoZXRoZXJcbiAqIGl0IGlzIGJldHdlZW4gdGhlIHByb3ZpZGVkIHN0YXJ0IGFuZCBlbmQgY2hhcmFjdGVycyAoaW5jbHVzaXZlKS4gSWZcbiAqIGl0IGlzLCB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0LCBhbmQgaWYgaXQgaXMgbm90LFxuICogdGhlIHBhcnNlciBmYWlscyB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBgc3RhcnRgIGFuZCBgZW5kYCBhcmUgZXhwZWN0ZWQgdG8gYmUgc2luZ2xlIGNoYXJhY3RlcnMuIElmIHRoZXkgYXJlXG4gKiBub3QsIHRoZSBmdWxsIHN0cmluZ3MgYXJlIGNvbXBhcmVkIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyLCB3aGljaFxuICogbWF5IGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3IuXG4gKlxuICogXCJCZXR3ZWVuXCIgaXMgZGVmaW5lZCBhY2NvcmRpbmcgdG8gY29kZSBwb2ludHMuIFRoaXMgaXMgZmluZSBpbiBtb3N0XG4gKiBjYXNlcywgYnV0IGl0IGNhbiBnZXQgd2VpcmQgd2l0aCBoaWdoZXIgY29kZSBwb2ludHMuIEZvciBleGFtcGxlLFxuICogdGhlcmUgaXMgbm8gYGhgIGluIHRoZSBzZXQgb2YgbWF0aGVtYXRpY2FsIGxvd2VyY2FzZSBpdGFsaWMgc3ltYm9scy5cbiAqIFRoZSBgaGAgd291bGQgaW5zdGVhZCBiZSB0aGUgUGxhbmNrJ3MgQ29uc3RhbnQgY2hhcmFjdGVyLCB3aGljaCBpcyBpblxuICogYSBjb21wbGV0ZWx5IGRpZmZlcmVudCBwYXJ0IG9mIHRoZSBVbmljb2RlIHNwZWN0cnVtIGFuZCB0aGVyZWZvcmUgaXNcbiAqIG5vdCBcImJldHdlZW5cIiBgYWAgYW5kIGB6YC4gVGFrZSBjYXJlIHdpdGggbm9uLWFzY2lpIGNoYXJhY3RlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0YXJ0IFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGVcbiAqICAgICByYW5nZSBvZiBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGVuZCBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgZW5kIG9mIHRoZSByYW5nZVxuICogICAgIG9mIGNoYXJhY3RlcnMgdG8gbWF0Y2guIEl0IGlzIGluY2x1ZGVkIGluIHRoYXQgcmFuZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgbmV4dCBpbnB1dFxuICogICAgIGNoYXJhY3RlciBpcyBiZXR3ZWVuIGBzdGFydGAgYW5kIGBlbmRgIChpbmNsdXNpdmUpLlxuICovXG5leHBvcnQgY29uc3QgcmFuZ2UgPSAoc3RhcnQsIGVuZCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIHN0YXJ0LCBvcmRDaGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgZW5kLCBvcmRDaGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSBzdGFydCAmJiBjIDw9IGVuZFxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHlcbiAgICA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5yYW5nZShzdGFydCwgZW5kKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBpbnB1dCBjaGFyYWN0ZXIgYW5kIHRoZW4gc3VjY2VlZHMgd2l0aFxuICogdGhhdCBjaGFyYWN0ZXIuIEZhaWxzIG9ubHkgaWYgdGhlcmUgaXMgbm8gaW5wdXQgbGVmdCB0byByZWFkLlxuICovXG5leHBvcnQgY29uc3QgYW55ID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZXJyb3IoY3R4LCBleHBlY3RlZHMuYW55KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxuICogQ29uc3VtZXMgbm90aGluZyBvbiBlaXRoZXIgc3VjY2VzcyBvciBmYWlsdXJlLlxuICovXG5leHBvcnQgY29uc3QgZW9mID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoID8gb2soY3R4LCBudWxsKSA6IGVycm9yKGN0eCwgZXhwZWN0ZWRzLmVvZilcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcbiAqIG11bHRpLWNoYXJhY3RlciBzdHJpbmdzLCB0aGV5IGNhbm5vdCBtYXRjaCBhbmQgd2lsbCBlc3NlbnRpYWxseSBiZVxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGUgcGFyc2VyXG4gKiB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIGJlIGFcbiAqICAgICBtZW1iZXIgZm9yIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlPZiA9IGNoYXJzID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnYW55T2YnLCBjaGFycylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jaGFyc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZXJyb3IoY3R4LCBleHBlY3RlZHMuYW55T2YoYXJyKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcbiAqIG11bHRpLWNoYXJhY3RlciBzdHJpbmdzLCB0aGV5IGNhbm5vdCBtYXRjaCBhbmQgd2lsbCBlc3NlbnRpYWxseSBiZVxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY2hhcnMgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheVxuICogICAgIG9yIGEgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhXG4gKiAgICAgbWVtYmVyIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmVPZiA9IGNoYXJzID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZU9mJywgY2hhcnMpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICBjb25zdCBhcnIgPSBbLi4uY2hhcnNdXG5cbiAgcmV0dXJuIGFyci5pbmNsdWRlcyhuZXh0KVxuICAgID8gZXJyb3IoY3R4LCBleHBlY3RlZHMubm9uZU9mKGFycikpIDogb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGRpZ2l0LiBOb3RlIHRoYXQgdGhpcyBpcyBub3QgYSBVbmljb2RlIGRlY2ltYWwgZGlnaXQ7IGZvclxuICogdGhhdCwgdXNlIGByZWdleCgvXFxwe05kfS8pYC4gVGhpcyBwYXJzZXIgc3VjY2VlZHMgb25seSBmb3IgdGhlXG4gKiBsaXRlcmFsIGNoYXJhY3RlcnMgYDAtOWAuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWdpdCA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLmRpZ2l0KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuaGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc3J1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMub2N0YWwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzOyBgdWxldHRlcmBcbiAqIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMubGV0dGVyKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSVxuICogY2hhcmFjdGVyczsgYHVhbHBoYWAgaXMgYSBVbmljb2RlIGFscGhhbnVtZXJpYyBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5hbHBoYSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMudXBwZXIpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1bG93ZXJgIGlzIGEgVW5pY29kZSBsZXR0ZXIgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbG93ZXIgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5sb3dlcilcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZXJyb3IsIGZhdGFsLCBvaywgUGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljLCB1bmV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHJlc3VsdHMgaW4gdGhlIHByb3ZpZGVkXG4gKiB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgYmUgdGhlIG5ldyBwYXJzZXIncyByZXN1bHQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IFBhcnNlcihjdHggPT4gb2soY3R4LCB4KSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiBnZW5lcmljIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbCA9IG1zZyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbCcsIG1zZylcbiAgcmV0dXJuIGVycm9yKGN0eCwgZ2VuZXJpYyhtc2cpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlXG4gKiBnZW5lcmljIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLiBUaGlzIHNpZ25pZmllcyBhXG4gKiBmYXRhbCBlcnJvciwgb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtc2cgVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIGdlbmVyaWMgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgZmF0YWxseSB3aXRoIHRoZVxuICogICAgIHN1cHBsaWVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsRmF0YWxseSA9IG1zZyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbEZhdGFsbHknLCBtc2cpXG4gIHJldHVybiBmYXRhbChjdHgsIGdlbmVyaWMobXNnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSB1bmV4cGVjdGVkXG4gKiAgICAgZXJyb3IuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF1dG9tYXRpY2FsbHkgZmFpbHMgd2l0aCB0aGUgc3VwcGxpZWRcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbFVuZXhwZWN0ZWQgPSBtc2cgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2ZhaWxVbmV4cGVjdGVkJywgbXNnKVxuICByZXR1cm4gZXJyb3IoY3R4LCB1bmV4cGVjdGVkKG1zZykpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZXJyb3IsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgc3RyaW5nVG9WaWV3LCB0d2luLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cbi8vIHNwZWVkIHBhcnNpbmcgbGF0ZXIuXG5cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTGV0dGVyID0gL15cXHB7QWxwaGFiZXRpY30vdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxvd2VyID0gL15cXHB7TG93ZXJjYXNlfS91XG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cbi8qKiBNYXRjaGVzIGEgc2luZ2xlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3Vcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMgPSAvXltcXHJcXG5cXHQgXSovXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3Vcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlczEgPSAvXlxccHtXaGl0ZV9TcGFjZX0rL3Vcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbmV3bGluZSBjaGFyYWN0ZXIsIHBsdXMgXFxyXFxuLiAqL1xuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlc1xuICogaXQgYXMgZmFyIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xuICogZW5zdXJlcyB0aGF0IHRoZSBtYXRjaCBpcyBvbmx5IGFnYWluc3QgdGhlIHRleHQgZGlyZWN0bHkgYXQgdGhlXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZVxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5jb25zdCBSZWdleFBhcnNlciA9IHJlID0+IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICByZXR1cm4gbWF0Y2hcbiAgICA/IG9rKGN0eCwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxuICAgIDogZXJyb3IoY3R4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXJcbiAqIGV4cHJlc3Npb24gdG8gdGhlIGlucHV0IHRleHQgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb24uIElmIHRoZXJlIGlzIGFcbiAqIG1hdGNoLCBhbnkgbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0XG4gKiBpcyBjb25zdW1lZCB1cG9uIGZhaWx1cmUuXG4gKlxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cbiAqXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcbiAqIG1hdGNoIHdpbGwgYmUgY29uc2lkZXJlZCBhbnl3YXkuIFRoZXNlIHR3byBydWxlcyBlbnN1cmUgdGhhdCB0aGVcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB0byBtYXRjaCBhZ2FpbnN0XG4gKiAgICAgdGhlIGlucHV0IHRleHQuIElmIHRoaXMgaXMgYSBzdHJpbmcsIGl0IHdpbGwgYmUgY29udmVydGVkIGludG9cbiAqICAgICBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRoIG5vIGZsYWdzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlZ2V4ID0gcmUgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByZSlcblxuICAvLyBGaXJzdCwgY29udmVydCB0byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBpZiBpdCdzIGEgc3RyaW5nXG4gIGxldCByZWdleCA9IHR5cGVvZiByZSA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHJlKSA6IHJlXG5cbiAgLy8gTmV4dCwgbWFrZSBzdXJlIHRoZSByZWd1bGFyIGV4cHJlc3Npb24gc3RhcnRzIHdpdGggYSBeIGFuY2hvclxuICBjb25zdCB7IHNvdXJjZSwgZmxhZ3MgfSA9IHJlZ2V4XG4gIGNvbnN0IHJlYW5jaG9yID0gc291cmNlWzBdICE9PSAnXidcbiAgaWYgKHJlYW5jaG9yKSB7XG4gICAgY29uc3QgbmV3U291cmNlID0gJ14nICsgc291cmNlXG4gICAgcmVnZXggPSBuZXcgUmVnRXhwKG5ld1NvdXJjZSwgZmxhZ3MpXG4gIH1cblxuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oUmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihSZWdleFBhcnNlcihyZUxldHRlcikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMubGV0dGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgYWxwaGFVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihSZWdleFBhcnNlcihyZUFscGhhKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5hbHBoYVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxuICogaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBMZXR0ZXIsIFRpdGxlY2FzZWAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCB1cHBlclUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiByZXN1bHQuc3RhdHVzID09PSBPayA/IHJlcGx5IDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnVwcGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxuICogVW5pY29kZSBgTG93ZXJjYXNlYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oUmVnZXhQYXJzZXIocmVMb3dlcikoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMubG93ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihSZWdleFBhcnNlcihyZVNwYWNlKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zcGFjZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gQSBjaGFyYWN0ZXIgaXMgd2hpdGVzcGFjZSBmb3IgdGhlXG4gKiBwdXJwb3NlIG9mIHRoaXMgcGFyc2VyIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgV2hpdGVfU3BhY2VgIHByb3BlcnR5LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgYWxzbyByZWNvZ25pemUgdGhlIHR3by1jaGFyYWN0ZXIgY29tYmluYXRpb24gYFxcclxcbmBcbiAqIGFzIGEgc2luZ2xlIGluc3RhbmNlIG9mIHdoaXRlc3BhY2UuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZVUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zcGFjZVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtuZXh0LCBfXSA9IFJlZ2V4UGFyc2VyKHJlU3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVyb1xuICogd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCwgdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlXG4gKiBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdFxuICogcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW25leHQsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhuZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGxcbiAqIG9ubHkgZmFpbCBpZiB0aGVyZSBpcyBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uXG4gKiBzdWNjZXNzLCBpdCBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW2NvbnRleHQsIHJlc3VsdF0gPSBSZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gb2soY29udGV4dCwgbnVsbClcbiAgICA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zcGFjZXMxKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczFVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtjb250ZXh0LCByZXN1bHRdID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyBvayhjb250ZXh0LCBudWxsKVxuICAgIDogZXJyb3IoY29udGV4dCwgZXhwZWN0ZWRzLnNwYWNlczFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyB0aGlzIHBhcnNlciByZWNvZ25pemVzIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICogY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMubmV3bGluZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4oUmVnZXhQYXJzZXIocmVVbmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMubmV3bGluZVUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZXJyb3IsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgbmV4dENoYXJzLCB0d2luLCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoXG4gKiB0byBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBTdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2soY3R4LCAnJylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGVycm9yKGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGVycm9yKGN0eCkgOiBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZVxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGUgc3RyaW5nIG1hdGNoXG4gKiBtdXN0IGJlIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmVcbiAqIHJlY29nbml6ZWQgcHJvcGVybHkuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nID0gc3RyID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmcnLCBzdHIpXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKFN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHN0ciksIGNoYXJzID0+IHN0ciA9PT0gY2hhcnMsXG4gICkoY3R4KSlcbiAgcmV0dXJuIHJlc3VsdC5zdGF0dXMgPT09IE9rID8gcmVwbHkgOiBlcnJvcihjb250ZXh0LCBleHBlY3RlZHMuc3RyaW5nKHN0cikpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZVxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXG4gKiBjYXNlLXNlbnNpdGl2ZS4gSG93ZXZlciwgdGhlcmUgaXMgYSBsaW1pdGF0aW9uIGJhc2VkIG9uIHRoZVxuICogSmF2YVNjcmlwdCB1bmRlcnN0YW5kaW5nIG9mIHBhaXJzIG9mIHVwcGVyLSBhbmQgbG93ZXJjYXNlIGxldHRlcnMuIEl0XG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxuICogaW5zZW5zaXRpdmUgY291bnRlcnBhcnRzLlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdJID0gc3RyID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmdJJywgc3RyKVxuXG4gIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihTdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIudG9Mb3dlckNhc2UoKSA9PT0gY2hhcnMudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5zdHJpbmdJKHN0cikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhlIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQgdGV4dCBhbmQgcmVzdWx0cyBpblxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3Qgd2lkdGggPSB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleFxuICByZXR1cm4gb2soY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2VydGFpbiBudW1iZXIgb2YgY2hhcmFjdGVycywgdXNpbmdcbiAqIHRoZW0gKGFzIGEgc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmVcbiAqIG5vdCB0aGF0IG1hbnkgY2hhcmFjdGVycyBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIHRoYXQgbWFueSBjaGFyYWN0ZXJzIGFuZCBqb2luc1xuICogICAgIHRoZW0gaW50byBhIHN0cmluZyBmb3IgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueVN0cmluZyA9IG4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2FueVN0cmluZycsIG4pXG5cbiAgY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKFN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShjdHgpKVxuICByZXR1cm4gcmVzdWx0LnN0YXR1cyA9PT0gT2sgPyByZXBseSA6IGVycm9yKGNvbnRleHQsIGV4cGVjdGVkcy5hbnlTdHJpbmcobikpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vY29yZSdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlcGx5fSBSZXBseSAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW4gZW5kaW5nXG4gKiB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcbiAqICAgICBudW1iZXIgZm9ybXMgdGhlIHVwcGVyIGJvdW5kIG9mIHRoZSByYW5nZSB3aXRob3V0IGJlaW5nIGluY2x1ZGVkXG4gKiAgICAgaW4gaXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxuICogICAgIGR1cmluZyBlYWNoIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICogQHlpZWxkcyB7bnVtYmVyfSBUaGUgdmFsdWVzIHRoYXQgbWFrZSB1cCB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XG4gIGNvbnN0IHMgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IHN0YXJ0IDogMFxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcbiAgY29uc3QgaSA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJ1xuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxuXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxuICBsZXQgY3VycmVudCA9IHNcblxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgcmV0dXJuIGkgPyBjdXJyZW50ID4gZSA6IGN1cnJlbnQgPj0gZVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG4gIHdoaWxlICghZmluaXNoZWQoKSkge1xuICAgIHlpZWxkIGN1cnJlbnRcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbn1cblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IHBhaXJzIHZhbHVlcyBpbiBhbiBpdGVyYWJsZSB3aXRoIHRoZWlyIGluZGV4ZXMgaW4gYVxuICogc2VyaWVzIG9mIHR3by1lbGVtZW50IGFycmF5cy4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgaXMgdGhlIGluZGV4O1xuICogdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgZnJvbSB0aGUgaXRlcmFibGUuXG4gKlxuICogRm9yIGFycmF5cywgdGhpcyBjYW4gYmUgZG9uZSB3aXRoIGBhcnJheS5lbnRyaWVzKClgLCB3aGljaCBwcm9kdWNlc1xuICogdHdvLWVsZW1lbnQgYXJyYXlzIGluIHRoZSBzYW1lIGZvcm1hdC4gSG93ZXZlciwgdGhpcyBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uIHdpbGwgd29yayB3aXRoIGFueSBraW5kIG9mIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlXG4gKiBgSXRlcmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSBBbiBpdGVyYWJsZSBvYmplY3Qgd2hvc2UgZWxlbWVudHMgd2lsbFxuICogICAgIGJlIHBhaXJlZCB3aXRoIHRoZWlyIGluZGV4ZXMuXG4gKiBAeWllbGRzIHtbbnVtYmVyLCAqXX0gVGhlIGl0ZXJhYmxlJ3MgdmFsdWVzLCBwYWlyZWQgd2l0aCB0aGVpclxuICogICAgIGluZGV4ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqZW51bWVyYXRlKGl0ZXJhYmxlKSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpXG4gIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICB5aWVsZCBbaW5kZXgrKywgcmVzdWx0LnZhbHVlXVxuICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBvcnRpb24gb2YgYSBVVEYtOCBkYXRhIHZpZXcgYXMgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHdoaWNoXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxuICogICAgIG9mIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoZSBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xuICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aCB9LFxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXG4gIClcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcbiAqICAgICBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoZW5jb2Rlci5lbmNvZGUoc3RyKS5idWZmZXIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcbiAqIHZhbHVlIGNhbiBkaWZmZXIgZnJvbSB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiB0aGF0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XG4gIHJldHVybiBbLi4uc3RyXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmICgoYnl0ZSAmIDB4ODApID4+IDcgPT09IDApIHJldHVybiAxXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMSkgcmV0dXJuIDRcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxuICByZXR1cm4gMVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxuICpcbiAqIEB0eXBlZGVmIE5leHRDaGFySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uIHdpdGhpbiB0aGUgZGF0YSB2aWV3LlxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXG4gKiA0LWJ5dGUgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGVpciBmaXJzdCBieXRlcy4gSWZcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xuICBjb25zdCB2aWV3TGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoXG4gIGxldCB3aWR0aCA9IDBcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UoY291bnQpKSB7XG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xuICAgIHdpZHRoICs9IG5leHRDaGFyV2lkdGgoaSwgdmlldylcbiAgfVxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XG4gICAgd2lkdGggPSB2aWV3TGVuZ3RoIC0gaW5kZXhcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFN1cnJvdW5kcyB0aGUgc3VwcGxpZWQgc3RyaW5nIGluIHNpbmdsZSBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGxlZCBhbmQgdHJhaWxlZCBieSBzaW5nbGUgcXVvdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIHJldHVybiBgJyR7c3RyfSdgXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0d28gY29waWVzIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNvcnQgb2YgZW11bGF0ZXMgKmFzLXBhdHRlcm5zKiBpbiBhIGxpbWl0ZWQgd2F5IGluIEphdmFTY3JpcHQuXG4gKiBJbiBsYW5ndWFnZXMgbGlrZSBIYXNrZWxsIGFuZCBNTCwgd2hlbiBwYXR0ZXJuIG1hdGNoaW5nIGlzIGRvbmUsXG4gKiB0aGVyZSBpcyBhIGNvbnN0cnVjdCB0byBiZSBhYmxlIHRvIHJldGFpbiBhIGxhcmdlciBwYXJ0IG9mIHRoZVxuICogZGVzdHJ1Y3R1cmVkIHBhdHRlcm4gd2hpbGUgYWxzbyBicmVha2luZyBpdCBkb3duIGZ1cnRoZXIuIEluIEhhc2tlbGwsXG4gKlxuICogYGBgaGFza2VsbFxuICogKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogd2lsbCBhc3NpZ24gYDFgIHRvIGBoZWFkYCwgYW5kIGBbMiwgMywgNCwgNV1gIHRvIGB0YWlsYC4gVGhpcyBjYW4gYmVcbiAqIGRvbmUgaW4gSmF2YVNjcmlwdCBhcyB3ZWxsLCBsaWtlIHRoaXM6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBIYXNrZWxsIGNhbiBnbyBmYXJ0aGVyOiBpdCBjYW4gYWxzbyBhc3NpZ24gdGhlIGVudGlyZSBsaXN0XG4gKiBhcyBhIHdob2xlIHRvIGFub3RoZXIgdmFyaWFibGUgd2hpbGUgc3RpbGwgYXNzaWduaW5nIGl0cyBlbGVtZW50cyBhc1xuICogYWJvdmUuIEl0J3MgZG9uZSBsaWtlIHRoaXM6XG4gKlxuICogYGBgaGFza2VsbFxuICogbGlzdCBAIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIFRoaXMgd2lsbCwgaW4gYWRkaXRpb24gdG8gdGhlIGFzc2lnbm1lbnRzIGFib3ZlLCBhc3NpZ24gYFsxLCAyLCAzLCA0LFxuICogNV1gIHRvIGBsaXN0YC4gVGhlIGBAYCBzaWduIGlzIHJlYWQgKmFzKiwgYW5kIHRoaXMgY29uc3RydWN0IGlzXG4gKiBjYWxsZWQgYW4gKmFzLXBhdHRlcm4qIChwZXJoYXBzIGJlY2F1c2UgdGhlIE1MIHdheSBvZiBkb2luZyBpdCB1c2VzXG4gKiB0aGUgYGFzYCBrZXl3b3JkIGluc3RlYWQgb2YgdGhlIGBAYCBzeW1ib2wpLlxuICpcbiAqIFRoZXJlIGlzIG5vIGZhY2lsaXR5IHRvIGRvIHRoaXMgaW4gSmF2YVNjcmlwdC4gQnV0IHRoZXJlIGFyZSBtYW55XG4gKiBwbGFjZXMgaW4gdGhpcyBsaWJyYXJ5IHdoZXJlIGEgYFJlcGx5YCBpcyBkZXNjdHVyY3R1cmVkIGludG8gaXRzXG4gKiBgQ29udGV4dGAgYW5kIGBSZXN1bHRgIGVsZW1lbnRzLCB5ZXQgdGhlcmUgaXMgYSBuZWVkIHRvIGNvbmRpdGlvbmFsbHlcbiAqIHVzZSB0aGUgZW50aXJlIGBSZXBseWAgYXMgd2VsbCAobm9ybWFsbHkgdG8gcmV0dXJuIGl0IGlmIHNvbWVcbiAqIGNvbmRpdGlvbiBpcyBtZXQpLiBSYXRoZXIgdGhhbiBjcmVhdGUgYSBuZXcgYFJlcGx5YCBmcm9tIHRoZXNlIHBhcnRzLFxuICogYHR3aW5gIGNhbiBiZSB1c2VkIHRvIGR1cGxpY2F0ZSB0aGUgcmVmZXJlbmNlcyB0byB0aGUgYFJlcGx5YC4gVGhlblxuICogb25seSAqb25lKiBvZiB0aGUgZHVwbGljYXRlIHJlZmVyZW5jZXMgY2FuIGJlIGRlc3RydWN0dXJlZCwgd2hpbGUgdGhlXG4gKiBvdGhlciBvbmUgaXMgcmV0YWluZWQgYXMgYSB3aG9sZS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocGFyc2VyKGN0eCkpXG4gKiBgYGBcbiAqXG4gKiBBcy1wYXR0ZXJucyBjYW4gYmUgdXNlZCBvbiBwaWVjZXMgb2YgYSBwYXR0ZXJuIGluc3RlYWQgb2YgdGhlIGVudGlyZVxuICogcGF0dGVybiwgYW5kIGB0d2luYCBjYW5ub3QgZG8gdGhhdC4gQnV0IGl0IHNlcnZlcyBmb3Igd2hhdCBpcyBuZWVkZWRcbiAqIGluIEtlc3NlbC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSB2YWx1ZSBBIHJlcGx5IHRoYXQgbmVlZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlXG4gKiAgICAgbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHdob2xlLlxuICogQHJldHVybnMge1tSZXBseSwgUmVwbHldfSBBbiBhcnJheSBjb250YWluaW5nIHR3byBjb3BpZXMgb2YgdGhlXG4gKiAgICAgcmVwbHkuIE9uZSBjYW4gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlIHRoZSBvdGhlciBpcyByZXRhaW5lZCB3aG9sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHR3aW4odmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxuICogY3JlYXRlZCBhbiBhcmJpdHJhcnkgb2JqZWN0LiBUaGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhc3NpZ25lZCBhblxuICogYWRkaXRpb25hbCBwcm9wZXJ0eSAoYnkgZGVmYXVsdCBuYW1lZCBgY3JlYXRlZGAsIGNhbiBiZSBjaGFuZ2VkIGJ5XG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogb2JqZWN0IGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmFjdG9yeSBjcmVhdGVkIGl0IG9yIGBmYWxzZWAgaWYgaXRcbiAqIGRpZCBub3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGF1Z21lbnRlZCB3aXRoXG4gKiAgICAgdGhlIG5ldyBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSBhdWdtZW50ZWQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKGZuLCBwcm9wID0gJ2NyZWF0ZWQnKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSBuZXcgV2Vha1NldCgpXG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXG4gICAgICB0cmFja2VkLmFkZChjcmVhdGVkKVxuICAgICAgcmV0dXJuIGNyZWF0ZWRcbiAgICB9LFxuICAgIHByb3AsXG4gICAgeyB2YWx1ZTogdHJhY2tlZC5oYXMuYmluZCh0cmFja2VkKSB9LFxuICApXG59XG5cbi8qKlxuICogQ29udmVydHMgYSBudW1iZXIgdG8gaXRzIHN0cmluZyBvcmRpbmFsIGZvcm0gKGkuZS4sIGAxYCBiZWNvbWVzXG4gKiBgJzFzdCdgLCBgMTcyOWAgYmVjb21lcyBgJzE3Mjl0aCdgLCBldGMuKVxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gY29udmVydCBpbnRvIGFuIG9yZGluYWwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBudW1iZXIgaW4gaXRzIG9yZGluYWwgZm9ybS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9yZGluYWwobikge1xuICBjb25zdCBzdWZmaXhlcyA9IFsndGgnLCAnc3QnLCAnbmQnLCAncmQnXVxuICBjb25zdCB2ID0gbiAlIDEwMFxuICByZXR1cm4gbiArIChzdWZmaXhlc1sodiAtIDIwKSAlIDEwXSA/PyBzdWZmaXhlc1t2XSA/PyBzdWZmaXhlc1swXSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgYSB2YWx1ZS4gVGhpcyB3aWxsIG1vc3RcbiAqIG9mdGVuIGJlIHRoZSBvdXRwdXQgZnJvbSBgSlNPTi5zdHJpbmdpZnkoKWAsIHRob3VnaCByZXByZXNlbnRhdGlvbnNcbiAqIGFyZSBhbHNvIGluY2x1ZGVkIGZvciB0eXBlcyB0aGF0IGZ1bmN0aW9uIGRvZXNuJ3Qgc3VwcG9ydC5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0dXJuIGludG8gYSBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ2lmeSh2YWx1ZSkge1xuICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gUGFyc2VyLmNyZWF0ZWQodmFsdWUpID8gJ3BhcnNlcicgOiAnZnVuY3Rpb24nXG4gIH1cbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N5bWJvbCcpIHJldHVybiBgU3ltYm9sKCR7dmFsdWUuZGVzY3JpcHRpb259KWBcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHZhbHVlKVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIGFwcHJvcHJpYXRlIGluZGVmaW5pdGUgYXJ0aWNsZSAoJ2EnIG9yICdhbicpIHRvIGEgd29yZCBiYXNlZFxuICogb24gaXRzIGZpcnN0IGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gcHJlcGVuZCBhbiBhcnRpY2xlIHRvLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHN0cmluZyB3aXRoIHRoZSBwcmVwZW5kZWQgYXJ0aWNsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFydGljbGlmeShzdHIpIHtcbiAgcmV0dXJuICdhZWlvdUFFSU9VJy5pbmNsdWRlcyhzdHJbMF0pID8gYGFuICR7c3RyfWAgOiBgYSAke3N0cn1gXG59XG4iXSwic291cmNlUm9vdCI6IiJ9