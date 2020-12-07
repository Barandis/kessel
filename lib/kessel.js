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
/*! exports provided: choice, optional, orValue, lookAhead, notEmpty, notEmptyM, followedBy, followedByM, notFollowedBy, notFollowedByM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return choice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return optional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orValue", function() { return orValue; });
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
  Ok,
  Fail,
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
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
    if (pres.status === Ok) return prep;
    errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors);
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatal"])(pctx, errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, errors);
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

const optional = p => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('optional', p);
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status !== Fail ? prep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null);
});
/**
 * Creates a parser that succeeds either with the supplied parser's
 * successful result or else (if that parser fails) the supplied default
 * value `x`. This parser only fails if its contained parser fails
 * fatally.
 *
 * `orValue(p, x)` is an optimized implementation of `orElse(p,
 * always(x))`.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */

const orValue = (p, x) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('orValue', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status !== Fail ? prep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x);
});
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
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, pres.value, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, pres.errors, index);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status !== Ok || pctx.index !== index ? prep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notEmptyM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('notEmptyM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status !== Ok || pctx.index !== index ? prep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
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
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, undefined, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('followedByM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('followedByM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const index = ctx.index;
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index);
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
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, undefined, index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('notFollowedByM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('notFollowedByM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const index = ctx.index;
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg), index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null, index);
});

/***/ }),

/***/ "./src/combinators/backtracking.js":
/*!*****************************************!*\
  !*** ./src/combinators/backtracking.js ***!
  \*****************************************/
/*! exports provided: label, attempt, attemptM, sequenceB, chainB, leftB, rightB, andThenB, repeatB, manyTillB, blockB, pipeB, betweenB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "label", function() { return label; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attemptM", function() { return attemptM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return sequenceB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return leftB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return rightB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "andThenB", function() { return andThenB; });
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
  Fail,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('label', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('label', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Fail ? pass(pctx, pres, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg)) : prep;
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Ok) return prep;
  const err = index === pctx.index ? pres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, pres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, err, index);
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
 * came from the failure point), and failure happens.
 *
 * @param {Parser} p The parser to be applied.
 * @param {string} msg The new error message to be used. This will be
 *     an `Expected` error if no input was consumed, or a `Compound`
 *     error if it was.
 * @returns {Parser} A parser that applies `p` and changes the error
 *     as appropriate if `p` fails.
 */

const attemptM = (p, msg) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('attemptM', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('attemptM', msg, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Ok) return prep;

  if (pres.status === Fail) {
    if (pres.errors.length === 1 && pres.errors[0].type === kessel_error__WEBPACK_IMPORTED_MODULE_2__["ErrorType"].Nested) {
      const {
        ctx,
        errors
      } = pres.errors[0];
      return pass(pctx, pres, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, ctx, errors));
    }

    return pass(pctx, pres, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(msg));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(msg, pctx, pres.errors));
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
 * `attempt(sequence(ps))`, as the former will fail fatally if one of
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
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === context.index ? pres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, pres.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, err, index);
    }

    if (pres.value !== null) values.push(pres.value);
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
 * Note that `chainB(p, fn)` is not the same as `attempt(chain(p,
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chainB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chainB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('the 2nd argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status !== Fail) return qrep;
  const err = index === qctx.index ? qres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, qres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
});
/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `p`. If either `p` or `q`
 * fail, this parser will also fail.
 *
 * If `q` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `leftB(p, q)` is not the same as `attempt(left(p,
 * q))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */

const leftB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('leftB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status === Fatal) return qrep;
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, pres.value);
  const err = index === qctx.index ? qres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, qres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
});
/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `q`. If either `p` or `q`
 * fail, this parser will also fail.
 *
 * If `q` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `rightB(p, q)` is not the same as `attempt(right(p,
 * q))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */

const rightB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rightB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status !== Fail) return qrep;
  const err = index === qctx.index ? qres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, qres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
});
/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of both in an array. If either
 * `p` or `q` fail, this parser will also fail.
 *
 * If `q` fails non-fatally, the entire parser will also fail
 * non-fatally, reverting the context to what it was before the first
 * parser was applied, even if the first parser consumed input. A fatal
 * error from either parser will still result in an overall fatal error.
 *
 * Note that `andThenB(p, q)` is not the same as `attempt(andThen(p,
 * q))`, as the former will fail fatally if one of its parsers fails
 * fatally, while the latter will fail non-fatally in that case.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const andThenB = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThenB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThenB', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  if (qres.status === Fatal) return qrep;
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, [pres.value, qres.value]);
  const err = index === qctx.index ? qres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(qctx, qres.errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(qctx, err, index);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeatB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeatB', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordNumFormatter"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === context.index ? pres.errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(context, pres.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, err, index);
    }

    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTillB', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [endrep, [endctx, endres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(end(context));
    context = endctx;
    if (endres.status === Fatal) return endrep;
    if (endres.status === Ok) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      const err = index === pctx.index ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, endres.errors) : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["nested"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, endres.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, err, index);
    }

    values.push(pres.value);
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
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(value(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, pres.errors, index);
    nextValue = pres.value;
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipeB', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(ps.length + 1)));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const p of ps) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(context, pres.errors, index);
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('betweenB', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('3rd'));
  const index = ctx.index;
  const [prerep, [prectx, preres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(pre(ctx));
  if (preres.status !== Ok) return prerep;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(prectx));
  if (pres.status === Fatal) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(pctx, pres.errors, index);
  const [postrep, [postctx, postres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(post(pctx));
  if (postres.status === Fatal) return postrep;
  if (postres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(postctx, postres.errors, index);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(postctx, pres.value);
});

/***/ }),

/***/ "./src/combinators/misc.js":
/*!*********************************!*\
  !*** ./src/combinators/misc.js ***!
  \*********************************/
/*! exports provided: join, value, nth, first, second, third, fourth, fifth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
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
 * always(x.join('')))` or `apply(p, always(x => x.join('')))`.
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('join', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v.join(''));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('value', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x) : prep;
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordNumFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('nth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('1st argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[n]);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('first', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[0]);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('second', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[1]);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('third', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[2]);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fourth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[3]);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_2__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fifth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, v[4]);
});

/***/ }),

/***/ "./src/combinators/primitive.js":
/*!**************************************!*\
  !*** ./src/combinators/primitive.js ***!
  \**************************************/
/*! exports provided: always, map, apply, chain, empty, orElse, andThen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orElse", function() { return orElse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "andThen", function() { return andThen; });
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
  Fail,
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"]; // ====================================================================
// Both Applicative and Monad

/**
 * A parser which always succeeds with the supplied value.
 *
 * This serves as a primitive for both monads and applicatives. In
 * Haskell terms, this function represents both `pure` in the
 * `Applicative` class and `return` in the `Monad` class.
 *
 * In other words, it lifts an arbitrary value into a Parser context,
 * turning it into a parser that returns that value.
 *
 * @param {*} x The value will result when this parser is applied.
 * @returns {Parser} A parser that always succeeds with `value`.
 */

const always = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, x)); // ====================================================================
// Applicative

/**
 * A parser that applies the supplied parser and passes its result to
 * the provided function. The return value of that function becomes the
 * result.
 *
 * This is the `fmap` operation from Haskell's `Functor` class. It's
 * used as a basis for lifting functions into a Parser context.
 *
 * @param {Parser} p The parser to apply.
 * @param {function(*):*} fn A mapping function that is passed the
 *     result of `p` and whose return value will be the result of the
 *     created parser.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */

const map = (p, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('map', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('map', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, fn(pres.value)) : prep;
});
/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
 *
 * This is the same operation as `<*>` from Haskell's `Applicative`
 * class.
 *
 * @param {Parser} p A parser whose result will be passed to the
 *     function returned by `q`.
 * @param {Parser} q A parser which provides a function.
 * @returns {Parser} A parser that applies `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */

const apply = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, qres.errors);
  }

  const fn = qres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('apply', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('2nd argument to return a function'));
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, fn(pres.value));
}); // ====================================================================
// Monad

/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
 *
 * This is the same operation as the `Monad` class's `bind` operation
 * (generally written `>>=` in Haskell).
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('the 2nd argument to return a parser'));
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  return qres.status === Ok ? qrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, qres.errors);
}); // ====================================================================
// Alternative

/**
 * A parser that always succeeds with no result.
 *
 * This represents the `empty` operation from Haskell's `Alternative`
 * class.
 * @type {Parser}
 */

const empty = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx));
/**
 * A parser that first applies `p` and, if that fails, applies `q`. The
 * result is the result of whatever parser succeeds. If both fail,
 * `orElse` also fails, and if either fail fatally, `orElse` fails
 * fatally.
 *
 * This is the same operation as `<|>` in Haskell's `Alternative` class.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies the first parser and then if
 *     necessary the second parser, returning the result of the first to
 *     succeed.
 */

const orElse = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('orElse', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('orElse', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Fail) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  return qres.status === Ok ? qrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qres.status === Fatal, qctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
}); // ====================================================================
// Derivative primitives

/**
 * A parser that applies the parsers `p` and `q` in sequence and then
 * return the result of both in a 2-element array. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * This is the most primitive sequencing parser. It can be regarded as
 * an optimized implementation of either, in the monadic and applicative
 * styles respectively:
 *
 * ```
 * chain(p, a => chain(q, b => always([a, b])))
 * apply(p, apply(q, always(b => a => [a, b])))
 * ```
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the values of both parsers in an array.
 */

const andThen = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThen', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('andThen', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  return qres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, [pres.value, qres.value]) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, qres.errors);
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: sequence, left, right, block, many, many1, skip, skipMany, skipMany1, sepBy, sepBy1, sepEndBy, sepEndBy1, repeat, between, manyTill, pipe, assocL, assoc1L, assocR, assoc1R */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return sequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many", function() { return many; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return many1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return skipMany; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return skipMany1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepBy", function() { return sepBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepBy1", function() { return sepBy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepEndBy", function() { return sepEndBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return sepEndBy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return manyTill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
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
  Fail,
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
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, pres.errors);
    }

    if (pres.value !== null) values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
});
/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `p`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `left(p, q)` is an optimized implementation of `chain(p, x =>
 * value(q, x))`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the first.
 */

const left = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const [qctx, qres] = q(pctx);
  return qres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(qctx, pres.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, qres.errors);
});
/**
 * Creates a parser that will apply the parsers `p` and `q` in
 * sequence and then return the result of `q`. If either `p` or `q`
 * fail, this parser will also fail, and the failure will be fatal if
 * any input had been consumed by either parser.
 *
 * `right(p, q)` is an optimized implementation of `chain(p, () =>
 * q)`.
 *
 * @param {Parser} p The first parser to apply.
 * @param {Parser} q The second parser to apply.
 * @returns {Parser} A parser that applies both contained parsers and
 *     results in the value of the second.
 */

const right = (p, q) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) return prep;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(q(pctx));
  return qres.status === Ok ? qrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(qctx.index !== index, qctx, qres.errors);
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
    const [pctx, pres] = value(context);
    context = pctx;

    if (pres.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, pres.errors);
    }

    nextValue = pres.value;
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
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (pres.value !== null) values.push(pres.value);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  let context = pctx;
  const values = pres.value !== null ? [pres.value] : [];

  while (true) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (pres.value !== null) values.push(pres.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, null) : prep;
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
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
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
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  let context = pctx;

  while (true) {
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  let index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Fatal) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = sepctx;
    if (sepres.status === Fatal) return seprep;
    if (sepres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepBy'));
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepBy1', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  let index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = sepctx;
    if (sepres.status === Fatal) return seprep;
    if (sepres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepBy1'));
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  let index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Fatal) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = sepctx;
    if (sepres.status === Fatal) return seprep;
    if (sepres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepEndBy'));
    values.push(pres.value);
  }

  const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep({ ...context,
    index
  }));
  return sepres.status === Fatal ? seprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(sepctx, values);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepEndBy1', sep, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  let index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep(context));
    context = sepctx;
    if (sepres.status === Fatal) return seprep;
    if (sepres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepEndBy1'));
    values.push(pres.value);
  }

  const [seprep, [sepctx, sepres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(sep({ ...context,
    index
  }));
  return sepres.status === Fatal ? seprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(sepctx, values);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('repeat', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('repeat', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordNumFormatter"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, pres.errors);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', pre, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', post, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('3rd'));
  const index = ctx.index;
  const [prerep, [prectx, preres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(pre(ctx));
  if (preres.status !== Ok) return prerep;
  const [pctx, pres] = p(prectx);

  if (pres.status !== Ok) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(pctx.index !== index, pctx, pres.errors);
  }

  const [postctx, postres] = post(pctx);
  return postres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(postctx, pres.value) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(postctx.index !== index, postctx, postres.errors);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTill', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('manyTill', end, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [endrep, [endctx, endres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(end(context));
    context = endctx;
    if (endres.status === Fatal) return endrep;
    if (endres.status === Ok) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;

    if (pres.status === Fail) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, endres.errors));
    }

    if (pres.value !== null) values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, values);
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
 * `pipe(p, q, fn)` is an optimized implementation of `chain(p, a =>
 * chain(q, b => always(fn(a, b))))`, `pipe(p, q, r, fn)` is an
 * optimized implementation of `chain(p, a => chain(q, b => chain(r,
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(ps.length + 1)));
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const p of ps) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status !== Ok) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["maybeFatal"])(context.index !== index, context, pres.errors);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(context, fn(...values));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocL', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Fatal) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [oprep, [opctx, opres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = opctx;
    if (opres.status === Fatal) return oprep;
    if (opres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocL', opres.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(opres.value);
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1L', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [oprep, [opctx, opres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = opctx;
    if (opres.status === Fatal) return oprep;
    if (opres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1L', opres.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(opres.value);
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assocR', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status === Fatal) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [oprep, [opctx, opres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = opctx;
    if (opres.status === Fatal) return oprep;
    if (opres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assocR', opres.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(opres.value);
    values.push(pres.value);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('assoc1R', op, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordParFormatter"])('2nd'));
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(ctx));
  if (pres.status !== Ok) return prep;
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [oprep, [opctx, opres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(op(context));
    context = opctx;
    if (opres.status === Fatal) return oprep;
    if (opres.status === Fail) break;
    const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(p(context));
    context = pctx;
    if (pres.status === Fatal) return prep;
    if (pres.status === Fail) break;
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('assoc1R', opres.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ordinal"])(i + 1)));
    ops.push(opres.value);
    values.push(pres.value);
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
/*! exports provided: Status, Context, Parser, ok, fail, fatal, maybeFatal, parse, status, succeeded, success, failure, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ok", function() { return ok; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return fail; });
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
  Fail: Symbol('fail'),

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

function fail(ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Fail,
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
    status: test ? Status.Fatal : Status.Fail,
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
/*! exports provided: alpha, any, anyOf, char, charI, digit, eof, hex, letter, lower, noneOf, octal, range, satisfy, satisfyM, upper, failNormally, failFatally, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringI, choice, followedBy, followedByM, lookAhead, notEmpty, notEmptyM, notFollowedBy, notFollowedByM, optional, orValue, andThenB, attempt, attemptM, betweenB, blockB, chainB, label, leftB, manyTillB, pipeB, repeatB, rightB, sequenceB, fifth, first, fourth, join, nth, second, third, value, always, andThen, apply, chain, empty, map, orElse, assoc1L, assoc1R, assocL, assocR, between, block, left, many, many1, manyTill, pipe, repeat, right, sepBy, sepBy1, sepEndBy, sepEndBy1, sequence, skip, skipMany, skipMany1, Parser, Status, fail, failure, fatal, maybeFatal, ok, parse, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failNormally", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["failNormally"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["failFatally"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "choice", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["choice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedBy", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["followedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "followedByM", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["followedByM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lookAhead", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["lookAhead"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmpty", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["notEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notEmptyM", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["notEmptyM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedBy", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["notFollowedBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notFollowedByM", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["notFollowedByM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "optional", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["optional"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orValue", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["orValue"]; });

/* harmony import */ var _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/backtracking */ "./src/combinators/backtracking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "andThenB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["andThenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["attempt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attemptM", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["attemptM"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["betweenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "label", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTillB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["manyTillB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["pipeB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["repeatB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["rightB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequenceB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["sequenceB"]; });

/* harmony import */ var _combinators_misc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinators/misc */ "./src/combinators/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["fifth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["fourth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["nth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "second", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["second"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "third", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["third"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _combinators_misc__WEBPACK_IMPORTED_MODULE_6__["value"]; });

/* harmony import */ var _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/primitive */ "./src/combinators/primitive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["always"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "andThen", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["andThen"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orElse", function() { return _combinators_primitive__WEBPACK_IMPORTED_MODULE_7__["orElse"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1L", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assoc1L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1R", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assoc1R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocL", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocR", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["assocR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "manyTill", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["manyTill"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepEndBy1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sepEndBy1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sequence", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["sequence"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skipMany1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_8__["skipMany1"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return _core__WEBPACK_IMPORTED_MODULE_9__["fail"]; });

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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
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
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(ch => c === ch)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].char(c));
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
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].charI(c));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfyM', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordFnFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfyM', message, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordStrFormatter"])('2nd'));
  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(message));
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
 * @param {string} s The character that defines the start of the
 *     range of characters to match. It is included in that range.
 * @param {string} e The character that defines the end of the range
 *     of characters to match. It is included in that range.
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */

const range = (s, e) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordCharFormatter"])('1st'));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["ordCharFormatter"])('2nd'));

  const fn = c => c >= s && c <= e;

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].range(s, e));
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].any);
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
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].eof);
});
/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is among those characters, the parser
 * will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to be a member for
 *     the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is one
 *     of the characters in `chars`.
 */

const anyOf = cs => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('anyOf', cs);
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].anyOf(arr));
});
/**
 * Creates a parser that reads a character and compares it against each
 * of the characters in the provided string or array (if the array has
 * multi-character strings, they cannot match and will essentially be
 * ignored). If the read character is *not* among those characters, the
 * parser will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to not be a member
 *     for the parser to succeed.
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */

const noneOf = cs => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('noneOf', cs);
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].noneOf(arr)) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a digit. Note that this is not a Unicode decimal digit; for
 * that, use `regex(/\p{Nd}/)`. This parser succeeds only for the
 * literal characters `0-9`.
 */

const digit = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].digit);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 */

const hex = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].hex);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 */

const octal = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= '0' && c <= '7';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].octal);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. This parser is only for ASCII characters; `uletter`
 * is a Unicode letter parser.
 */

const letter = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].letter);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an alphanumeric character. This parser is only for ASCII
 * characters; `ualpha` is a Unicode alphanumeric parser.
 */

const alpha = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].alpha);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an uppercase letter. This parser is only for ASCII characters;
 * `uupper` is a Unicode uppercase letter parser.
 */

const upper = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'A' && c <= 'Z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].upper);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. This parser is only for ASCII characters;
 * `ulower` is a Unicode letter parser.
 */

const lower = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const fn = c => c >= 'a' && c <= 'z';

  const [cprep, [cpctx, cpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_4__["twin"])(CharParser(fn)(ctx));
  return cpres.status === Ok ? cprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(cpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_3__["expecteds"].lower);
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: failNormally, failFatally */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failNormally", function() { return failNormally; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failFatally", function() { return failFatally; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



/** @typedef {import('kessel/core').Parser} Parser */

/**
 * Creates a parser that fails without consuming input, setting the
 * generic error message to whatever is passed in.
 *
 * @param {string} msg The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const failNormally = msg => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('failNormally', msg);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(msg));
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
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
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

  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(regex)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reLetter)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reAlpha)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUpper)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reLower)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reSpace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUspace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaceU);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rpctx, _] = RegexParser(reSpaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 */

const spacesU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rpctx, _] = RegexParser(reUspaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rpctx, rpres] = RegexParser(reSpaces1)(ctx);
  return rpres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["Parser"])(ctx => {
  const [rpctx, rpres] = RegexParser(reUspaces1)(ctx);
  return rpres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(rpctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1U);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reNewline)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline);
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
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(RegexParser(reUnewline)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newlineU);
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
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChars"])(index, view, length);
  return Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(next) !== length || !fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(ctx) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["ok"])(ctx, next, index + width);
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].string(str));
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].stringI(str));
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
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["twin"])(StringParser(n, () => true)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fail"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvbWJpbmF0b3JzL3NlcXVlbmNlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb3JlLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9lcnJvci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL21lc3NhZ2VzLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL2NoYXIuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvbWlzYy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9yZWdleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9zdHJpbmcuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3V0aWwuanMiXSwibmFtZXMiOlsiZm9ybWF0dGVyIiwidHlwZSIsInZhbHVlIiwic3RyaW5naWZ5IiwiY2hhckZvcm1hdHRlciIsImZuRm9ybWF0dGVyIiwiZ2VuRm9ybWF0dGVyIiwic3RyRm9ybWF0dGVyIiwiYXJyRm9ybWF0dGVyIiwic3RyQXJyRm9ybWF0dGVyIiwic3RyUmVnRm9ybXR0ZXIiLCJudW1Gb3JtYXR0ZXIiLCJwYXJGb3JtYXR0ZXIiLCJvcmRGb3JtYXR0ZXIiLCJvcmQiLCJvcmRDaGFyRm9ybWF0dGVyIiwib3JkRm5Gb3JtYXR0ZXIiLCJvcmROdW1Gb3JtYXR0ZXIiLCJvcmRQYXJGb3JtYXR0ZXIiLCJvcmRTdHJGb3JtYXR0ZXIiLCJmYWlsQXNzZXJ0IiwibmFtZSIsIkVycm9yIiwiYXNzZXJ0Q2hhciIsImNoYXJMZW5ndGgiLCJhc3NlcnRGdW5jdGlvbiIsIlBhcnNlciIsImNyZWF0ZWQiLCJhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbiIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsImFzc2VydFN0cmluZyIsImFzc2VydEFycmF5IiwiQXJyYXkiLCJpc0FycmF5IiwiYXNzZXJ0U3RyaW5nT3JBcnJheSIsImV2ZXJ5IiwiYyIsImFzc2VydFN0cmluZ09yUmVnRXhwIiwiYXNzZXJ0TnVtYmVyIiwiYXNzZXJ0UGFyc2VyIiwiYXNzZXJ0UGFyc2VycyIsInZhbHVlcyIsImkiLCJlbnVtZXJhdGUiLCJvcmRpbmFsIiwiT2siLCJGYWlsIiwiRmF0YWwiLCJTdGF0dXMiLCJjaG9pY2UiLCJwcyIsImN0eCIsIkFTU0VSVCIsImVycm9ycyIsInAiLCJwcmVwIiwicGN0eCIsInByZXMiLCJ0d2luIiwic3RhdHVzIiwibWVyZ2UiLCJmYXRhbCIsImZhaWwiLCJvcHRpb25hbCIsIm9rIiwib3JWYWx1ZSIsIngiLCJsb29rQWhlYWQiLCJpbmRleCIsIm5vdEVtcHR5Iiwibm90RW1wdHlNIiwibXNnIiwiZXhwZWN0ZWQiLCJmb2xsb3dlZEJ5IiwidW5kZWZpbmVkIiwiZm9sbG93ZWRCeU0iLCJub3RGb2xsb3dlZEJ5Iiwibm90Rm9sbG93ZWRCeU0iLCJwYXNzIiwicmVzdWx0IiwibGFiZWwiLCJhdHRlbXB0IiwiZXJyIiwibmVzdGVkIiwiYXR0ZW1wdE0iLCJsZW5ndGgiLCJFcnJvclR5cGUiLCJOZXN0ZWQiLCJjb21wb3VuZCIsInNlcXVlbmNlQiIsImNvbnRleHQiLCJwdXNoIiwiY2hhaW5CIiwiZm4iLCJxIiwicXJlcCIsInFjdHgiLCJxcmVzIiwibGVmdEIiLCJyaWdodEIiLCJhbmRUaGVuQiIsInJlcGVhdEIiLCJuIiwiXyIsInJhbmdlIiwibWFueVRpbGxCIiwiZW5kIiwiZW5kcmVwIiwiZW5kY3R4IiwiZW5kcmVzIiwiYmxvY2tCIiwiZ2VuRm4iLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInYiLCJwaXBlQiIsInBvcCIsImJldHdlZW5CIiwicHJlIiwicG9zdCIsInByZXJlcCIsInByZWN0eCIsInByZXJlcyIsInBvc3RyZXAiLCJwb3N0Y3R4IiwicG9zdHJlcyIsImpvaW4iLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJhbHdheXMiLCJtYXAiLCJhcHBseSIsIm1heWJlRmF0YWwiLCJjaGFpbiIsImVtcHR5Iiwib3JFbHNlIiwiYW5kVGhlbiIsImxvb3BNZXNzYWdlIiwic2VxdWVuY2UiLCJsZWZ0IiwicmlnaHQiLCJibG9jayIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcCIsInNraXBNYW55Iiwic2tpcE1hbnkxIiwic2VwQnkiLCJzZXAiLCJzZXByZXAiLCJzZXBjdHgiLCJzZXByZXMiLCJUeXBlRXJyb3IiLCJzZXBCeTEiLCJzZXBFbmRCeSIsInNlcEVuZEJ5MSIsInJlcGVhdCIsImJldHdlZW4iLCJtYW55VGlsbCIsInBpcGUiLCJvcEZvcm1hdHRlciIsImFzc29jTCIsIm9wIiwib3BzIiwib3ByZXAiLCJvcGN0eCIsIm9wcmVzIiwiYXNzb2MxTCIsImFzc29jUiIsImFzc29jMVIiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJTeW1ib2wiLCJDb250ZXh0IiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwidGVzdCIsInBhcnNlIiwicGFyc2VyIiwicmVwbHkiLCJzdWNjZWVkZWQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJjb3VudCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiZXJyb3IiLCJjb21tYVNlcGFyYXRlIiwiZmlsdGVyIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJ1bmtub3duTXNnIiwiZW9mTXNnIiwiZ2V0UG9zaXRpb24iLCJjb2x1bW4iLCJzdHJpbmdzIiwiYWxwaGEiLCJhbHBoYVUiLCJhbnkiLCJhbnlPZiIsImFycmF5IiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhckkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZU9mIiwib2N0YWwiLCJyZWdleCIsInJlIiwic3BhY2UiLCJzcGFjZXMiLCJzcGFjZXMxIiwic3BhY2VzVSIsInNwYWNlczFVIiwic3BhY2VVIiwic3RyaW5nIiwic3RyIiwic3RyaW5nSSIsInVwcGVyIiwidXBwZXJVIiwiZXhwZWN0ZWRzIiwiQ2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJjcHJlcCIsImNwY3R4IiwiY3ByZXMiLCJjaCIsInRvTG93ZXJDYXNlIiwic2F0aXNmeSIsInNhdGlzZnlNIiwicyIsImUiLCJjcyIsImFyciIsImluY2x1ZGVzIiwiZmFpbE5vcm1hbGx5IiwiZmFpbEZhdGFsbHkiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJSZWdleFBhcnNlciIsInJlc3QiLCJSZWdFeHAiLCJzb3VyY2UiLCJmbGFncyIsInJlYW5jaG9yIiwibmV3U291cmNlIiwicnByZXAiLCJycGN0eCIsInJwcmVzIiwiU3RyaW5nUGFyc2VyIiwibmV4dENoYXJzIiwic3ByZXAiLCJzcGN0eCIsInNwcmVzIiwiY2hhcnMiLCJhbGwiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJzdGVwIiwiaW5jbHVzaXZlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJieXRlcyIsImZyb20iLCJkZWNvZGUiLCJlbmNvZGUiLCJ2aWV3TGVuZ3RoIiwibWVzc2FnZXMiLCJtc2dzIiwic2xpY2UiLCJsYXN0IiwicHJvcCIsInRyYWNrZWQiLCJXZWFrU2V0IiwiZGVmaW5lUHJvcGVydHkiLCJhcmdzIiwiYWRkIiwiaGFzIiwiYmluZCIsInN1ZmZpeGVzIiwiZGVzY3JpcHRpb24iLCJKU09OIiwiYXJ0aWNsaWZ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtB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Qzd2QkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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Q0FBQ3ZZLFNBQUwsQ0FBZUQsS0FBZixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTeVksU0FBVCxDQUFtQm5GLEdBQW5CLEVBQXdCO0FBQzdCLFNBQU8sYUFBYW1CLFFBQWIsQ0FBc0JuQixHQUFHLENBQUMsQ0FBRCxDQUF6QixJQUFpQyxNQUFLQSxHQUFJLEVBQTFDLEdBQStDLEtBQUlBLEdBQUksRUFBOUQ7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGVudW1lcmF0ZSwgb3JkaW5hbCwgc3RyaW5naWZ5IH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PlxuICB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuY29uc3QgY2hhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycpXG5jb25zdCBmbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBmdW5jdGlvbicpXG5jb25zdCBnZW5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJylcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxuY29uc3QgYXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhbiBhcnJheScpXG5jb25zdCBzdHJBcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnKVxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcbmNvbnN0IG51bUZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBudW1iZXInKVxuY29uc3QgcGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHBhcnNlcicpXG5cbmV4cG9ydCBjb25zdCBvcmRGb3JtYXR0ZXIgPSAodHlwZSwgb3JkKSA9PiB2YWx1ZSA9PlxuICBgZXhwZWN0ZWQgJHtvcmR9IGFyZ3VtZW50IHRvIGJlICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmV4cG9ydCBjb25zdCBvcmRDaGFyRm9ybWF0dGVyID0gb3JkID0+XG4gIG9yZEZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRGbkZvcm1hdHRlciA9IG9yZCA9PiBvcmRGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkTnVtRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBudW1iZXInLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkUGFyRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBwYXJzZXInLCBvcmQpXG5leHBvcnQgY29uc3Qgb3JkU3RyRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBzdHJpbmcnLCBvcmQpXG5cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRGdW5jdGlvbihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gZm5Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCBQYXJzZXIuY3JlYXRlZCh2YWx1ZSkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZyhuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gYXJyRm9ybWF0dGVyKSB7XG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFN0cmluZ09yQXJyYXkobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckFyckZvcm1hdHRlcikge1xuICBpZiAoIShcbiAgICBBcnJheS5pc0FycmF5KHZhbHVlKVxuICAgICYmIHZhbHVlLmV2ZXJ5KGMgPT4gdHlwZW9mIGMgPT09ICdzdHJpbmcnICYmIGNoYXJMZW5ndGgoYykgPT09IDEpXG4gICAgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICApKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0TnVtYmVyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBudW1Gb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFBhcnNlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gcGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicgfHwgIVBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VycyhuYW1lLCB2YWx1ZXMpIHtcbiAgZm9yIChjb25zdCBbaSwgdmFsdWVdIG9mIGVudW1lcmF0ZSh2YWx1ZXMpKSB7XG4gICAgYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBvcmRQYXJGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIGFzc2VydFN0cmluZyxcbiAgb3JkUGFyRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBmYXRhbCwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhbHRlcm5hdGl2ZXMuIEVhY2ggb2YgdGhlIHN1cHBsaWVkXG4gKiBwYXJzZXJzIGlzIGFwcGxpZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIuIFdoZW4gdGhlIGZpcnN0IHBhcnNlclxuICogc3VjY2VlZHMsIG9yIHRoZSBmaXJzdCBwYXJzZXIgZmFpbHMgd2hpbGUgY29uc3VtaW5nIGlucHV0LCBleGVjdXRpb25cbiAqIGlzIHN0b3BwZWQgYW5kIHRoZSBjb250ZXh0IGZyb20gdGhhdCBsYXN0IHBhcnNlciBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqIFRoZSBzYW1lIGhhcHBlbnMgaWYgYWxsIHBhcnNlcnMgYXJlIGFwcGxpZWQgd2l0aG91dCBhbnkgb2YgdGhlbVxuICogc3VjY2VlZGluZy5cbiAqXG4gKiBPbiBmYWlsdXJlLCBhbGwgb2YgdGhlIGBFeHBlY3RlZGAgZXJyb3JzIGZyb20gYW55IG9mIHRoZSBjb250YWluZWRcbiAqIHBhcnNlcnMgd2lsbCBiZSBtZXJnZWQgaW50byB0aGlzIHBhcnNlcidzIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYXBwbHkgdG8gdGhlIGlucHV0LCBvbmUgYXQgYVxuICogICAgIHRpbWUsIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBjb250YWluZWQgcGFyc2VycyB1bnRpbFxuICogICAgIG9uZSBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNob2ljZSA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdjaG9pY2UnLCBwcylcblxuICBsZXQgZXJyb3JzID0gW11cblxuICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG5cbiAgICBlcnJvcnMgPSBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbChwY3R4LCBlcnJvcnMpXG4gIH1cbiAgcmV0dXJuIGZhaWwoY3R4LCBlcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlclxuICogaXQgZmFpbHMgb3Igbm90IGJ1dCBvbmx5IGNvbnN1bWluZyBpbnB1dCBpZiBpdCBzdWNjZWVkcy4gVGhpcyBwYXJzZXJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gSXQncyB1c2VkIHRvXG4gKiBpbXBsZW1lbnQgc2tpcHBpbmcgb3ZlciBzb21lIG9wdGlvbmFsIHRleHQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBhcHBsaWVkIGFuZFxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXG4gKiBAcmV0dXJuIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgd2l0aCBubyByZXN1bHQgdW5sZXNzIGl0c1xuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5XG4gKiAgICAgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpb25hbCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ29wdGlvbmFsJywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgIT09IEZhaWwgPyBwcmVwIDogb2socGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXInc1xuICogc3VjY2Vzc2Z1bCByZXN1bHQgb3IgZWxzZSAoaWYgdGhhdCBwYXJzZXIgZmFpbHMpIHRoZSBzdXBwbGllZCBkZWZhdWx0XG4gKiB2YWx1ZSBgeGAuIFRoaXMgcGFyc2VyIG9ubHkgZmFpbHMgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHNcbiAqIGZhdGFsbHkuXG4gKlxuICogYG9yVmFsdWUocCwgeClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgb3JFbHNlKHAsXG4gKiBhbHdheXMoeCkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXInc1xuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cbiAqIEBwYXJhbSB7Kn0geCBBIHZhbHVlIHdoaWNoIHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3MgcmVzdWx0IGlmIHRoZVxuICogICAgIHN1cHBsaWVkIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIncyBzdWNjZXNzZnVsIHJlc3VsdCBvciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBvclZhbHVlID0gKHAsIHgpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdvclZhbHVlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgIT09IEZhaWwgPyBwcmVwIDogb2socGN0eCwgeClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlci4gSWYgdGhhdCBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBpdHMgcmVzdWx0IGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgcmV0dXJuZWQgcGFyc2VyLlxuICogRWl0aGVyIHdheSwgbm8gaW5wdXQgaXMgY29uc3VtZWQuIFRoaXMgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hldGhlclxuICogdGhlIG5leHQgY2hhcmFjdGVyKHMpIHNhdGlzZnkgdGhlIHBhcnNlciB3aXRob3V0IGFjdHVhbGx5IGNvbnN1bWluZ1xuICogdGhlIGlucHV0IHRvIGZpbmQgb3V0LlxuICpcbiAqIEFzIGEgc2lkZSBlZmZlY3QsIGFueSBmYXRhbCBwYXJzZSBlcnJvciB3aWxsIGJlIHRyYW5zZm9ybWVkIGludG8gYVxuICogbm9uLWZhdGFsIG9uZSwgc2luY2Ugbm8gaW5wdXQgaXMgYmVpbmcgY29uc3VtZWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgb3IgZmFpbHNcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvb2tBaGVhZCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xvb2tBaGVhZCcsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhwY3R4LCBwcmVzLnZhbHVlLCBpbmRleClcbiAgICA6IGZhaWwocGN0eCwgcHJlcy5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXG4gKiBgbm90RW1wdHkobWFueShwKSlgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEl0IHNob3VsZCBiZSB1c2VkXG4gKiBpbiBjb25qdW5jdGlvbiB3aXRoIG90aGVyIHBhcnNlcnMgdGhhdCB0YWtlIGNhcmUgb2YgcG90ZW50aWFsIGVycm9ycyxcbiAqIG9yIGVsc2UgYG5vdEVtcHR5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgZG9lc24ndFxuICogICAgIGNvbnN1bWUgYW55IGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdEVtcHR5ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90RW1wdHknLCBwKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyAhPT0gT2sgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXggPyBwcmVwIDogZmFpbChwY3R4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZmFpbHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscyxcbiAqIHRoaXMgcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgZWZmZWN0IGlzIHVzZWZ1bCBmb3IgdHVybmluZyBhIHBhcnNlciBpbnRvIG9uZSB3aGljaCBtdXN0IG1hdGNoXG4gKiBhdCBsZWFzdCBvbmNlLiBGb3IgaW5zdGFuY2UsIG9uZSBjb3VsZCBpbXBsZW1lbnQgYG1hbnkxKHApYCB3aXRoXG4gKiBgbm90RW1wdHkobWFueShwKSlgLlxuICpcbiAqIGBub3RFbXB0eU0ocCwgbXNnKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwobm90RW1wdHkocCksIG1zZylgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgc3VjY2VlZHNcbiAqICAgICB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGRvZXNuJ3RcbiAqICAgICBjb25zdW1lIGFueSBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXG4gKi9cbmV4cG9ydCBjb25zdCBub3RFbXB0eU0gPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90RW1wdHlNJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnbm90RW1wdHlNJywgbXNnLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyAhPT0gT2sgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXhcbiAgICA/IHByZXBcbiAgICA6IGZhaWwocGN0eCwgZXhwZWN0ZWQobXNnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgc3VjY2VlZHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBJdCBzaG91bGQgYmUgdXNlZFxuICogaW4gY29uanVuY3Rpb24gd2l0aCBvdGhlciBwYXJzZXJzIHRoYXQgdGFrZSBjYXJlIG9mIHBvdGVudGlhbCBlcnJvcnMsXG4gKiBvciBlbHNlIGBmb2xsb3dlZEJ5TGAgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZVxuICogICAgIHBhcnNlciBjb250ZXh0LCB3aGV0aGVyIG9yIG5vdCBgcGAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBmb2xsb3dlZEJ5ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZm9sbG93ZWRCeScsIHApXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhwY3R4LCBudWxsLCBpbmRleClcbiAgICA6IGZhaWwocGN0eCwgdW5kZWZpbmVkLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgc3VjY2VlZHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCxcbiAqIGBmb2xsb3dlZEJ5KHApYCBmYWlscyBub24tZmF0YWxseSwgcmVwbGFjaW5nIGFueSBcImV4cGVjdGVkXCIgZXJyb3JcbiAqIG1lc3NhZ2Ugd2l0aCBgbXNnYCBhbmQgcmVtb3ZpbmcgYW55IFwidW5leHBlY3RlZFwiIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogYGZvbGxvd2VkQnlNKHAsIG1zZylgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZlxuICogYGxhYmVsKGZvbGxvd2VkQnkocCksIG1zZylgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlXG4gKiAgICAgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvbGxvd2VkQnlNID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvbGxvd2VkQnlNJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZm9sbG93ZWRCeU0nLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rKHBjdHgsIG51bGwsIGluZGV4KVxuICAgIDogZmFpbChwY3R4LCBleHBlY3RlZChtc2cpLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgc3VjY2VlZHMsXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gSXQgc2hvdWxkIGJlIHVzZWRcbiAqIGluIGNvbmp1bmN0aW9uIHdpdGggb3RoZXIgcGFyc2VycyB0aGF0IHRha2UgY2FyZSBvZiBwb3RlbnRpYWwgZXJyb3JzLFxuICogb3IgZWxzZSBgbm90Rm9sbG93ZWRCeUxgIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ25vdEZvbGxvd2VkQnknLCBwKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICByZXR1cm4gcHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBmYWlsKHBjdHgsIHVuZGVmaW5lZCwgaW5kZXgpXG4gICAgOiBvayhwY3R4LCBudWxsLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dFxuICogd2hpY2ggZG9lcyBub3QgY2hhbmdlIHBhcnNlciBjb250ZXh0LiBJZiBgcGAgc3VjY2VlZHMsXG4gKiBgbm90Rm9sbG93ZWRCeShwKWAgZmFpbHMgbm9uLWZhdGFsbHksIHJlcGxhY2luZyBhbnkgXCJleHBlY3RlZFwiIGVycm9yXG4gKiBtZXNzYWdlIHdpdGggYG1zZ2AgYW5kIHJlbW92aW5nIGFueSBcInVuZXhwZWN0ZWRcIiBlcnJvciBtZXNzYWdlLlxuICpcbiAqIGBub3RGb2xsb3dlZEJ5TShwLCBtc2cpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2ZcbiAqIGBsYWJlbChub3RGb2xsb3dlZEJ5KHApLCBtc2cpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgXG4gKiAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGVcbiAqICAgICBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90Rm9sbG93ZWRCeU0gPSAocCwgbXNnKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90Rm9sbG93ZWRCeU0nLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdub3RGb2xsb3dlZEJ5TScsIG1zZywgb3JkU3RyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPa1xuICAgID8gZmFpbChwY3R4LCBleHBlY3RlZChtc2cpLCBpbmRleClcbiAgICA6IG9rKHBjdHgsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxuICBvcmRGbkZvcm1hdHRlcixcbiAgb3JkTnVtRm9ybWF0dGVyLFxuICBvcmRQYXJGb3JtYXR0ZXIsXG4gIG9yZFN0ckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWwsIG9rLCBQYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQsIG1lcmdlLCBuZXN0ZWQgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBvcmRpbmFsLCByYW5nZSwgc3RyaW5naWZ5LCB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuZnVuY3Rpb24gcGFzcyhjdHgsIHJlc3VsdCwgZXJyb3JzKSB7XG4gIHJldHVybiBbeyAuLi5jdHggfSwgeyAuLi5yZXN1bHQsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBjb25zdW1lcyBpbnB1dCwgbm90aGluZyBhZGRpdGlvbmFsIGhhcHBlbnMuIE90aGVyd2lzZSwgdGhlIG9yaWdpbmFsXG4gKiBwYXJzZXIncyByZXN1bHQgaXMgcmV0YWluZWQgYnV0IHRoZSBlcnJvciBpcyBvdmVyd3JpdHRlbiBieSB0aGVcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgYXMgYW4gZXhwZWN0ZWQgZXJyb3IuXG4gKlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGJldHRlciBlcnJvciBtZXNzYWdlcyBpbiBjYXNlcyB3aGVyZSB0aGVcbiAqIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGVycm9yIG1lc3NhZ2VzIGFyZSBpbnN1ZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IG1zZyBUaGUgbmV3IGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBwYXNzZXMgaXRzIHJlc3VsdHNcbiAqICAgICB0aHJvdWdoIGV4Y2VwdCBmb3IgY2hhbmdpbmcgaXRzIGBFeHBlY3RlZGAgZXJyb3IgbWVzc2FnZSB1cG9uXG4gKiAgICAgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxhYmVsID0gKHAsIG1zZykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xhYmVsJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnbGFiZWwnLCBtc2csIG9yZFN0ckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBGYWlsID8gcGFzcyhwY3R4LCBwcmVzLCBleHBlY3RlZChtc2cpKSA6IHByZXBcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHRyYW5zZm9ybXMgYSBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWxcbiAqIGZhaWx1cmUuIEl0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcjsgaWYgdGhhdCBwYXJzZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZSBjb250ZXh0IGlzIHNldCBiYWNrIHRvIHdoYXQgaXQgd2FzICpiZWZvcmUqIHRoYXQgcGFyc2VyXG4gKiBpcyBhcHBsaWVkIGFuZCB0aGUgZmF0YWwgZmFpbHVyZSBpcyByZXR1cm5lZCBhcyBhIG5vbi1mYXRhbCBmYWlsdXJlLlxuICogSWYgdGhlIHBhcnNlciBoYXMgYW55IG90aGVyIHJlc3VsdCwgaXQgaXMgcGFzc2VkIHRocm91Z2ggd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsbG93cyB0aGUgdXNlciB0byBjYXVzZSBhIG5vbi1iYWNrdHJhY2tpbmcgcGFyc2VyIHRvXG4gKiBiYWNrdHJhY2sgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcClcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBwY3R4LmluZGV4ID8gcHJlcy5lcnJvcnMgOiBuZXN0ZWQocGN0eCwgcHJlcy5lcnJvcnMpXG4gIHJldHVybiBmYWlsKHBjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIuIElmIHRoYXQgcGFyc2VyXG4gKiBzdWNjZWVkcywgdGhhdCBzdWNjZXNzIGlzIHBhc3NlZCB0aHJvdWdoLCB0aG91Z2ggaWYgaXQgZGlkbid0IGNvbnN1bWVcbiAqIGFueSBpbnB1dCwgdGhlIHByb3ZpZGVkIHN0cmluZyB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGFuIGV4cGVjdGVkXG4gKiBlcnJvciBtZXNzYWdlLlxuICpcbiAqIElmIHRoZSBvcmlnaW5hbCBwYXJzZXIgZmFpbHMsIHdoYXQgaGFwcGVucyBkZXBlbmRzIG9uIHdoZXRoZXIgdGhhdFxuICogZmFpbHVyZSBjb25zdW1lZCBpbnB1dC4gSWYgaXQgZGlkIG5vdCwgdGhlIHN1cHBsaWVkIG1lc3NhZ2VcbiAqIG92ZXJ3cml0ZXMgdGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2UganVzdCBhcyB3aXRoIGBsYWJlbGAuIElmIGl0XG4gKiAqZGlkKiBjb25zdW1lIGlucHV0LCB0aGUgY29udGV4dCBpcyByZXNldCB0byB0aGUgY29udGV4dCBiZWZvcmUgdGhlXG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIHRoZSBlcnJvciBpcyBzZXQgdG8gYSBjb21wb3VuZCBlcnJvciB1c2luZyB0aGVcbiAqIHN1cHBsaWVkIG1lc3NhZ2UgKHdpdGggdGhlIG5lc3RlZCBlcnJvciBiZWluZyB0aGUgb3JpZ2luYWwgZXJyb3IgdGhhdFxuICogY2FtZSBmcm9tIHRoZSBmYWlsdXJlIHBvaW50KSwgYW5kIGZhaWx1cmUgaGFwcGVucy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBuZXcgZXJyb3IgbWVzc2FnZSB0byBiZSB1c2VkLiBUaGlzIHdpbGwgYmVcbiAqICAgICBhbiBgRXhwZWN0ZWRgIGVycm9yIGlmIG5vIGlucHV0IHdhcyBjb25zdW1lZCwgb3IgYSBgQ29tcG91bmRgXG4gKiAgICAgZXJyb3IgaWYgaXQgd2FzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgY2hhbmdlcyB0aGUgZXJyb3JcbiAqICAgICBhcyBhcHByb3ByaWF0ZSBpZiBgcGAgZmFpbHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0TSA9IChwLCBtc2cpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0TScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2F0dGVtcHRNJywgbXNnLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGlmIChwcmVzLmVycm9ycy5sZW5ndGggPT09IDEgJiYgcHJlcy5lcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZCkge1xuICAgICAgY29uc3QgeyBjdHgsIGVycm9ycyB9ID0gcHJlcy5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBwYXNzKHBjdHgsIHByZXMsIGNvbXBvdW5kKG1zZywgY3R4LCBlcnJvcnMpKVxuICAgIH1cbiAgICByZXR1cm4gcGFzcyhwY3R4LCBwcmVzLCBleHBlY3RlZChtc2cpKVxuICB9XG4gIHJldHVybiBmYWlsKGN0eCwgY29tcG91bmQobXNnLCBwY3R4LCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzXG4gKiBleGVjdXRlZCBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lXG4gKiBmYWlscy4gSW4gdGhlIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdFxuICogYmVjb21lcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvXG4gKiBmYWlsIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIGNvbnRleHQgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZVxuICogZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHByZXZpb3VzIHBhcnNlcnMgaGF2ZSBjb25zdW1lZFxuICogaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBvbmUgb2YgdGhlIGNvbnRhaW5lZCBwYXJzZXJzIHdpbGwgc3RpbGxcbiAqIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgc2VxdWVuY2VCKHBzKWAgaXMgbm90IHRoZSBzYW1lIGFzXG4gKiBgYXR0ZW1wdChzZXF1ZW5jZShwcykpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2ZcbiAqIGBwc2AgZmFpbHMgZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdFxuICogY2FzZS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcn0gcHMgVGhlIHBhcnNlcnMgdG8gYmUgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXQgYVxuICogICAgIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcXVlbmNlQiA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdzZXF1ZW5jZUInLCBwcylcblxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyID0gaW5kZXggPT09IGNvbnRleHQuaW5kZXhcbiAgICAgICAgPyBwcmVzLmVycm9yc1xuICAgICAgICA6IG5lc3RlZChjb250ZXh0LCBwcmVzLmVycm9ycylcbiAgICAgIHJldHVybiBmYWlsKGNvbnRleHQsIGVyciwgaW5kZXgpXG4gICAgfVxuICAgIGlmIChwcmVzLnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIGNvbnRleHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZFxuICogcGFyc2VyIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlXG4gKiBwYXJzZXIgcmV0dXJucyB0aGF0IHJlc3VsdGluZyBjb250ZXh0LlxuICpcbiAqIElmIHRoZSBzZWNvbmQgcGFyc2VyICh0aGUgb25lIHByb3ZpZGVkIGJ5IGBmbmApIGZhaWxzIG5vbi1mYXRhbGx5LFxuICogdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dFxuICogdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdCBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0XG4gKiBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWwgZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGxcbiAqIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgY2hhaW5CKHAsIGZuKWAgaXMgbm90IHRoZSBzYW1lIGFzIGBhdHRlbXB0KGNoYWluKHAsXG4gKiBmbikpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkIgPSAocCwgZm4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbkInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2NoYWluQicsIGZuLCBvcmRGbkZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbkInLCBxLCBmb3JtYXR0ZXIoJ3RoZSAybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBGYWlsKSByZXR1cm4gcXJlcFxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gcXJlcy5lcnJvcnMgOiBuZXN0ZWQocWN0eCwgcXJlcy5lcnJvcnMpXG4gIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcGAuIElmIGVpdGhlciBgcGAgb3IgYHFgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbC5cbiAqXG4gKiBJZiBgcWAgZmFpbHMgbm9uLWZhdGFsbHksIHRoZSBlbnRpcmUgcGFyc2VyIHdpbGwgYWxzbyBmYWlsXG4gKiBub24tZmF0YWxseSwgcmV2ZXJ0aW5nIHRoZSBjb250ZXh0IHRvIHdoYXQgaXQgd2FzIGJlZm9yZSB0aGUgZmlyc3RcbiAqIHBhcnNlciB3YXMgYXBwbGllZCwgZXZlbiBpZiB0aGUgZmlyc3QgcGFyc2VyIGNvbnN1bWVkIGlucHV0LiBBIGZhdGFsXG4gKiBlcnJvciBmcm9tIGVpdGhlciBwYXJzZXIgd2lsbCBzdGlsbCByZXN1bHQgaW4gYW4gb3ZlcmFsbCBmYXRhbCBlcnJvci5cbiAqXG4gKiBOb3RlIHRoYXQgYGxlZnRCKHAsIHEpYCBpcyBub3QgdGhlIHNhbWUgYXMgYGF0dGVtcHQobGVmdChwLFxuICogcSkpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0QiA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0QicsIHEsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gdHdpbihxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcXJlcFxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2socWN0eCwgcHJlcy52YWx1ZSlcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IHFyZXMuZXJyb3JzIDogbmVzdGVkKHFjdHgsIHFyZXMuZXJyb3JzKVxuICByZXR1cm4gZmFpbChxY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYHFgLiBJZiBlaXRoZXIgYHBgIG9yIGBxYFxuICogZmFpbCwgdGhpcyBwYXJzZXIgd2lsbCBhbHNvIGZhaWwuXG4gKlxuICogSWYgYHFgIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGUgZW50aXJlIHBhcnNlciB3aWxsIGFsc28gZmFpbFxuICogbm9uLWZhdGFsbHksIHJldmVydGluZyB0aGUgY29udGV4dCB0byB3aGF0IGl0IHdhcyBiZWZvcmUgdGhlIGZpcnN0XG4gKiBwYXJzZXIgd2FzIGFwcGxpZWQsIGV2ZW4gaWYgdGhlIGZpcnN0IHBhcnNlciBjb25zdW1lZCBpbnB1dC4gQSBmYXRhbFxuICogZXJyb3IgZnJvbSBlaXRoZXIgcGFyc2VyIHdpbGwgc3RpbGwgcmVzdWx0IGluIGFuIG92ZXJhbGwgZmF0YWwgZXJyb3IuXG4gKlxuICogTm90ZSB0aGF0IGByaWdodEIocCwgcSlgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYXR0ZW1wdChyaWdodChwLFxuICogcSkpYCwgYXMgdGhlIGZvcm1lciB3aWxsIGZhaWwgZmF0YWxseSBpZiBvbmUgb2YgaXRzIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHksIHdoaWxlIHRoZSBsYXR0ZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGluIHRoYXQgY2FzZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZSBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHRCID0gKHAsIHEpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBTdGF0dXMuT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gRmFpbCkgcmV0dXJuIHFyZXBcblxuICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcWN0eC5pbmRleCA/IHFyZXMuZXJyb3JzIDogbmVzdGVkKHFjdHgsIHFyZXMuZXJyb3JzKVxuICByZXR1cm4gZmFpbChxY3R4LCBlcnIsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpblxuICogc2VxdWVuY2UgYW5kIHRoZW4gcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhbiBhcnJheS4gSWYgZWl0aGVyXG4gKiBgcGAgb3IgYHFgIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLlxuICpcbiAqIElmIGBxYCBmYWlscyBub24tZmF0YWxseSwgdGhlIGVudGlyZSBwYXJzZXIgd2lsbCBhbHNvIGZhaWxcbiAqIG5vbi1mYXRhbGx5LCByZXZlcnRpbmcgdGhlIGNvbnRleHQgdG8gd2hhdCBpdCB3YXMgYmVmb3JlIHRoZSBmaXJzdFxuICogcGFyc2VyIHdhcyBhcHBsaWVkLCBldmVuIGlmIHRoZSBmaXJzdCBwYXJzZXIgY29uc3VtZWQgaW5wdXQuIEEgZmF0YWxcbiAqIGVycm9yIGZyb20gZWl0aGVyIHBhcnNlciB3aWxsIHN0aWxsIHJlc3VsdCBpbiBhbiBvdmVyYWxsIGZhdGFsIGVycm9yLlxuICpcbiAqIE5vdGUgdGhhdCBgYW5kVGhlbkIocCwgcSlgIGlzIG5vdCB0aGUgc2FtZSBhcyBgYXR0ZW1wdChhbmRUaGVuKHAsXG4gKiBxKSlgLCBhcyB0aGUgZm9ybWVyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlsc1xuICogZmF0YWxseSwgd2hpbGUgdGhlIGxhdHRlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaW4gdGhhdCBjYXNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlcyBvZiBib3RoIHBhcnNlcnMgaW4gYW4gYXJyYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbmRUaGVuQiA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbkInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhbmRUaGVuQicsIHEsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gdHdpbihxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcXJlcFxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2socWN0eCwgW3ByZXMudmFsdWUsIHFyZXMudmFsdWVdKVxuXG4gIGNvbnN0IGVyciA9IGluZGV4ID09PSBxY3R4LmluZGV4ID8gcXJlcy5lcnJvcnMgOiBuZXN0ZWQocWN0eCwgcXJlcy5lcnJvcnMpXG4gIHJldHVybiBmYWlsKHFjdHgsIGVyciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLFxuICogY29sbGVjdGluZyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuIElmIGFueSBhcHBsaWNhdGlvblxuICogZmFpbHMsIHRoZSBvdmVyYWxsIHBhcnNlciB3aWxsIGZhaWw7IGlmIHRoYXQgZmFpbHVyZSBpcyBmYXRhbCwgdGhlXG4gKiBvdmVyYWxsIGZhaWx1cmUgd2lsbCBhbHNvIGJlIGZhdGFsLlxuICpcbiAqIFRoZSBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIHRoZSB1bmRlcmx5aW5nIGVycm9yIHdhc1xuICogbm9uLWZhdGFsLCBldmVuIGlmIGlucHV0IHdhcyBjb25zdW1lZCAoYmFja3RyYWNraW5nIHdpbGwgaGFwcGVuIGluXG4gKiB0aGlzIGNhc2UpLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGFwcGx5IG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBhcHBseSB0aGUgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXRCID0gKHAsIG4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXRCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0QicsIG4sIG9yZE51bUZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gY29udGV4dC5pbmRleFxuICAgICAgICA/IHByZXMuZXJyb3JzXG4gICAgICAgIDogbmVzdGVkKGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWwoY29udGV4dCwgZXJyLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lc1xuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxuICogb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzXG4gKiBhcHBsaWVkICpmaXJzdCosIHNvIGl0J3MgZmluZSB0byBoYXZlIHRoZSB0d28gcGFyc2VycyBvdmVybGFwLiBGb3JcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXG4gKiB3aWxsIGJlIHRyaWVkIGZpcnN0IG9uIGVhY2ggY2hhcmFjdGVyIChjb250cmFzdCB3aXRoIGBiZXR3ZWVuKGxldHRlcixcbiAqIGFueSwgbGV0dGVyKWAsIHdoaWNoIHdpbGwgbmV2ZXIgc3VjY2VlZCBiZWN1YXNlIHRoZSBgYW55YCBpcyBhcHBsaWVkXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxuICogdGhlIGBsZXR0ZXJgIHBhcnNlciBnZXRzIHRvIHNlZSBpdCkuXG4gKlxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5IGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLFxuICogdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGwgZmFpbCAoYmFja3RyYWNraW5nIGlmIGlucHV0IGhhZCBhbHJlYWR5IGJlZW5cbiAqIGNvbnN1bWVkKS4gQSBmYXRhbCBlcnJvciBieSBlaXRoZXIgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGEgZmF0YWxcbiAqIGVycm9yIGZvciB0aGUgb3ZlcmFsbCBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZW5kIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLiBJdHMgcmVzdWx0IGlzIGRpc2NhcmRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgdGhlIGNvbnRlbnQgemVybyBvciBtb3JlXG4gKiAgICAgdGltZXMgdW50aWwgdGhlIGVuZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55VGlsbEIgPSAocCwgZW5kKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGxCJywgZW5kLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZW5kcmVwLCBbZW5kY3R4LCBlbmRyZXNdXSA9IHR3aW4oZW5kKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBlbmRjdHhcbiAgICBpZiAoZW5kcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBlbmRyZXBcbiAgICBpZiAoZW5kcmVzLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnIgPSBpbmRleCA9PT0gcGN0eC5pbmRleFxuICAgICAgICA/IG1lcmdlKHByZXMuZXJyb3JzLCBlbmRyZXMuZXJyb3JzKVxuICAgICAgICA6IG5lc3RlZChwY3R4LCBtZXJnZShwcmVzLmVycm9ycywgZW5kcmVzLmVycm9ycykpXG4gICAgICByZXR1cm4gZmFpbChwY3R4LCBlcnIsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYVxuICogZ2VuZXJhdG9yIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWRcbiAqIHdpbGwgYmUgZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW5cbiAqIGJlIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZXNlIHBhcnNlcnMgZmFpbCwgdGhlIGBibG9ja2AgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLiBJZlxuICogdGhhdCBmYWlsdXJlIGlzIG5vbi1mYXRhbCwgYmFja3RyYWNraW5nIHdpbGwgcmVzZXQgdGhlIGluZGV4IHRvIHdoZXJlXG4gKiBpdCB3YXMgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgYGJsb2NrYCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxuICogICAgIHBhcnNlcidzIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seVxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2tCID0gZ2VuRm4gPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbignYmxvY2tCJywgZ2VuRm4pXG5cbiAgY29uc3QgZ2VuID0gZ2VuRm4oKVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2soY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9ja0InLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIG9yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbih2YWx1ZShjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBmYWlsKHBjdHgsIHByZXMuZXJyb3JzLCBpbmRleClcbiAgICBuZXh0VmFsdWUgPSBwcmVzLnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3Nlc1xuICogdGhvc2UgcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2ZcbiAqIHBhcnNlcnMgdG8gYXBwbHkuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSwgdGhlIG92ZXJhbGwgcGFyc2VyIHdpbGxcbiAqIGJhY2t0cmFjayB0byB3aGVyZSB0aGUgZmlyc3QgcGFyc2VyIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIElmIHRoZSBhcnJheSBoYXMgb25lIGVsZW1lbnQsIHRoZSBwYXJzZXIgYmVjb21lcyBlcXVpdmFsZW50IHRvIGBtYXBgXG4gKiBidXQgbGVzcyBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlXG4gKiAgICAgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsXG4gKiAgICAgb3RoZXIgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlQiA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VycygncGlwZUInLCBwcylcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlQicsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIGZhaWwoY29udGV4dCwgcHJlcy5lcnJvcnMsIGluZGV4KVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcHJlLCBjb250ZW50LCBhbmQgcG9zdCBwYXJzZXJzIGluXG4gKiBvcmRlciBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBOb3RlIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIGBwYCBpcyBhcHBsaWVkIGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyXG4gKiBgcG9zdGAuIFRoaXMgbWVhbnMgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgd2lsbCBoYXZlIGFuIG9wcG9ydHVuaXR5XG4gKiB0byBwYXRjaCB0aGUgXCJwb3N0XCIgY29udGVudCBiZWZvcmUgdGhlIHBvc3QgcGFyc2VyIGRvZXMsIHNvIHRha2UgY2FyZVxuICogdGhhdCB0aGUgcGFyc2VycyBkbyBub3Qgb3ZlcmxhcCBpbiB3aGF0IHRoZXkgbWF0Y2guXG4gKlxuICogSWYgYW55IHBhcnNlciBmYWlscyBub24tZmF0YWxseSwgdGhlIGBiZXR3ZWVuQmAgcGFyc2VyIHdpbGwgYmFja3RyYWNrXG4gKiB0byB3aGVyZSBgcHJlYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcHJlIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcG9zdCBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuQiA9IChwcmUsIHBvc3QsIHApID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHByZSwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBwb3N0LCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IHR3aW4ocHJlKGN0eCkpXG4gIGlmIChwcmVyZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXJlcFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKHByZWN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIGZhaWwocGN0eCwgcHJlcy5lcnJvcnMsIGluZGV4KVxuXG4gIGNvbnN0IFtwb3N0cmVwLCBbcG9zdGN0eCwgcG9zdHJlc11dID0gdHdpbihwb3N0KHBjdHgpKVxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcG9zdHJlcFxuICBpZiAocG9zdHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBmYWlsKHBvc3RjdHgsIHBvc3RyZXMuZXJyb3JzLCBpbmRleClcbiAgcmV0dXJuIG9rKHBvc3RjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0QXJyYXksXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBmb3JtYXR0ZXIsXG4gIG9yZE51bUZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgd2hpY2ggYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyLiBUaGF0IHBhcnNlciBpc1xuICogZXhwZWN0ZWQgdG8gcmVzdWx0IGluIGFuIGFycmF5IG9mIHN0cmluZ3MsIGFuZCBpZiBpdCBzdWNjZWVkcywgdGhhdFxuICogcmVzdWx0J3MgZWxlbWVudHMgYXJlIGpvaW5lZCB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyBpc1xuICogdXNlZnVsIGJlY2F1c2UgSmF2YVNjcmlwdCBkb2VzIG5vdCBzaGFyZSB0aGUgY2hhcmFjdGVyaXN0aWMgb2Ygc29tZVxuICogZnVuY3Rpb25hbCBsYW5ndWFnZXMgd2hlcmUgYSBzdHJpbmcgaXMgdGhlIHNhbWUgYXMgYSBsaXN0IG9mXG4gKiBjaGFyYWN0ZXJzLiBKYXZhU2NyaXB0IG5lZWRzIGV4cGxpY2l0IGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgdHdvLCBzb1xuICogdGhpcyBwYXJzZXIgd2lsbCB0dXJuIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgaW50byBhIHN0cmluZy5cbiAqXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCB0aGUgY3JlYXRlZCBwYXJzZXIgd2lsbCBhbHNvIGZhaWwgd2l0aFxuICogdGhlIHNhbWUgZXJyb3IgdHlwZS5cbiAqXG4gKiBgam9pbihwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeC5qb2luKCcnKSkpYCBvciBgYXBwbHkocCwgYWx3YXlzKHggPT4geC5qb2luKCcnKSkpYC5cbiAqXG4gKiBJZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGRvZXMgbm90IHJlc3VsdCBpbiBhbiBhcnJheSwgYW4gZXhjZXB0aW9uIHdpbGxcbiAqIGJlIHRocm93biBiZWNhdXNlIGFuIGF0dGVtcHQgd2lsbCBiZSBtYWRlIHRvIGNhbGwgYGpvaW5gIG9uIHRoZVxuICogcmVzdWx0LiBJZiBpdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIHNvbWV0aGluZyBvdGhlciB0aGFuIHN0cmluZ3MsXG4gKiB0aG9zZSBlbGVtZW50cyB3aWxsIGJlIGNvZXJjZWQgaW50byBzdHJpbmdzIGFuZCB0aGVuIGpvaW5lZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IGlzIGV4cGVjdGVkIHRvIHJlc3VsdCBpbiBhbiBhcnJheSBvZlxuICogICAgIHN0cmluZ3MuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXIgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiBhIHNpbmdsZSBzdHJpbmcgbWFkZSBmcm9tIGpvaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZVxuICogICAgIGFycmF5IG9mIHN0cmluZ3MuXG4gKi9cbmV4cG9ydCBjb25zdCBqb2luID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignam9pbicsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2pvaW4nLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2LmpvaW4oJycpKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgd2lsbCBydW4gdGhlIHN1cHBsaWVkIHBhcnNlciBidXQsIG9uIHN1Y2Nlc3MsXG4gKiByZXN1bHQgaW4gdGhlIHN1cHBsaWVkIHZhbHVlIGluc3RlYWQuXG4gKlxuICogYHZhbHVlKHAsIHgpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW5hdGlvbiBvZiBgY2hhaW4ocCwgKCkgPT5cbiAqIGFsd2F5cyh4KSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3ZhbHVlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgPT09IE9rID8gb2socGN0eCwgeCkgOiBwcmVwXG59KVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG50aCBlbGVtZW50IG9mIHRoZSByZXN1bHQgb2YgYSBwYXJzZXIgdGhhdCBwcm9kdWNlcyBhblxuICogYXJyYXkuIElmIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSB3aWxsIGJlIHBhc3NlZCB0aHJvdWdoLlxuICpcbiAqIGBudGgocCwgbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbbl0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdudGgnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBvcmROdW1Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdudGgnLCB2LCBmb3JtYXR0ZXIoJzFzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdltuXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWYgdGhlXG4gKiBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgZmlyc3QocClgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgeCA9PlxuICogYWx3YXlzKHhbMF0pKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcClcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlyc3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2WzBdKVxufSlcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhIHBhcnNlciByZXN1bHQgdGhhdCBpcyBhbiBhcnJheS4gSWZcbiAqIHRoZSBwYXJzZXIgZmFpbHMsIHRoYXQgZmFpbHVyZSBpcyBwYXNzZWQgdGhyb3VnaC5cbiAqXG4gKiBgc2Vjb25kKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyh4WzFdKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlY29uZCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3NlY29uZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbMV0pXG59KVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmIHRoZVxuICogcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYHRoaXJkKHApYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIGFsd2F5cyh4WzJdKSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgdGhpcmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgdGhpcmQgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd0aGlyZCcsIHApXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3RoaXJkJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2socGN0eCwgdlsyXSlcbn0pXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYSBwYXJzZXIgcmVzdWx0IHRoYXQgaXMgYW4gYXJyYXkuIElmXG4gKiB0aGUgcGFyc2VyIGZhaWxzLCB0aGF0IGZhaWx1cmUgaXMgcGFzc2VkIHRocm91Z2guXG4gKlxuICogYGZvdXJ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFszXSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3VydGggPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmb3VydGgnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmb3VydGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBvayhwY3R4LCB2WzNdKVxufSlcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaWZ0aCBlbGVtZW50IG9mIGEgcGFyc2VyIHJlc3VsdCB0aGF0IGlzIGFuIGFycmF5LiBJZiB0aGVcbiAqIHBhcnNlciBmYWlscywgdGhhdCBmYWlsdXJlIGlzIHBhc3NlZCB0aHJvdWdoLlxuICpcbiAqIGBmaWZ0aChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCB4ID0+XG4gKiBhbHdheXMoeFs0XSkpYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpZnRoID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZmlmdGgnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmaWZ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rKHBjdHgsIHZbNF0pXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydFBhcnNlcixcbiAgZm9ybWF0dGVyLFxuICBvcmRGbkZvcm1hdHRlcixcbiAgb3JkUGFyRm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgbWF5YmVGYXRhbCwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQm90aCBBcHBsaWNhdGl2ZSBhbmQgTW9uYWRcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBhbHdheXMgc3VjY2VlZHMgd2l0aCB0aGUgc3VwcGxpZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzZXJ2ZXMgYXMgYSBwcmltaXRpdmUgZm9yIGJvdGggbW9uYWRzIGFuZCBhcHBsaWNhdGl2ZXMuIEluXG4gKiBIYXNrZWxsIHRlcm1zLCB0aGlzIGZ1bmN0aW9uIHJlcHJlc2VudHMgYm90aCBgcHVyZWAgaW4gdGhlXG4gKiBgQXBwbGljYXRpdmVgIGNsYXNzIGFuZCBgcmV0dXJuYCBpbiB0aGUgYE1vbmFkYCBjbGFzcy5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcywgaXQgbGlmdHMgYW4gYXJiaXRyYXJ5IHZhbHVlIGludG8gYSBQYXJzZXIgY29udGV4dCxcbiAqIHR1cm5pbmcgaXQgaW50byBhIHBhcnNlciB0aGF0IHJldHVybnMgdGhhdCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHdpbGwgcmVzdWx0IHdoZW4gdGhpcyBwYXJzZXIgaXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIHdpdGggYHZhbHVlYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsd2F5cyA9IHggPT4gUGFyc2VyKGN0eCA9PiBvayhjdHgsIHgpKVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQXBwbGljYXRpdmVcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBhbmQgcGFzc2VzIGl0cyByZXN1bHQgdG9cbiAqIHRoZSBwcm92aWRlZCBmdW5jdGlvbi4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhlXG4gKiByZXN1bHQuXG4gKlxuICogVGhpcyBpcyB0aGUgYGZtYXBgIG9wZXJhdGlvbiBmcm9tIEhhc2tlbGwncyBgRnVuY3RvcmAgY2xhc3MuIEl0J3NcbiAqIHVzZWQgYXMgYSBiYXNpcyBmb3IgbGlmdGluZyBmdW5jdGlvbnMgaW50byBhIFBhcnNlciBjb250ZXh0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOip9IGZuIEEgbWFwcGluZyBmdW5jdGlvbiB0aGF0IGlzIHBhc3NlZCB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgIGFuZCB3aG9zZSByZXR1cm4gdmFsdWUgd2lsbCBiZSB0aGUgcmVzdWx0IG9mIHRoZVxuICogICAgIGNyZWF0ZWQgcGFyc2VyLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgc3VjY2VlZCB3aXRoIHRoYXRcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hcCA9IChwLCBmbikgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignbWFwJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICByZXR1cm4gcHJlcy5zdGF0dXMgPT09IE9rID8gb2socGN0eCwgZm4ocHJlcy52YWx1ZSkpIDogcHJlcFxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBgPCo+YCBmcm9tIEhhc2tlbGwncyBgQXBwbGljYXRpdmVgXG4gKiBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gKiAgICAgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgQSBwYXJzZXIgd2hpY2ggcHJvdmlkZXMgYSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIGBxYCBhbmQgcmVzdWx0cyBpblxuICogICAgIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYCB3aGVuIHRoZSB2YWx1ZVxuICogICAgIHJldHVybmVkIGJ5IGBwYCBpcyBwYXNzZWQgaW50byBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5ID0gKHAsIHEpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5JywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgcmV0dXJuIG1heWJlRmF0YWwocWN0eC5pbmRleCAhPT0gaW5kZXgsIHFjdHgsIHFyZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYXBwbHknLCBmbiwgZm9ybWF0dGVyKCcybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2socWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gTW9uYWRcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGBNb25hZGAgY2xhc3MncyBgYmluZGAgb3BlcmF0aW9uXG4gKiAoZ2VuZXJhbGx5IHdyaXR0ZW4gYD4+PWAgaW4gSGFza2VsbCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4pID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgb3JkRm5Gb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW4nLCBxLCBmb3JtYXR0ZXIoJ3RoZSAybmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcXJlcFxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgcXJlcy5lcnJvcnMpXG59KVxuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQWx0ZXJuYXRpdmVcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIG5vIHJlc3VsdC5cbiAqXG4gKiBUaGlzIHJlcHJlc2VudHMgdGhlIGBlbXB0eWAgb3BlcmF0aW9uIGZyb20gSGFza2VsbCdzIGBBbHRlcm5hdGl2ZWBcbiAqIGNsYXNzLlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5ID0gUGFyc2VyKGN0eCA9PiBvayhjdHgpKVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmlyc3QgYXBwbGllcyBgcGAgYW5kLCBpZiB0aGF0IGZhaWxzLCBhcHBsaWVzIGBxYC4gVGhlXG4gKiByZXN1bHQgaXMgdGhlIHJlc3VsdCBvZiB3aGF0ZXZlciBwYXJzZXIgc3VjY2VlZHMuIElmIGJvdGggZmFpbCxcbiAqIGBvckVsc2VgIGFsc28gZmFpbHMsIGFuZCBpZiBlaXRoZXIgZmFpbCBmYXRhbGx5LCBgb3JFbHNlYCBmYWlsc1xuICogZmF0YWxseS5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBgPHw+YCBpbiBIYXNrZWxsJ3MgYEFsdGVybmF0aXZlYCBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIGZpcnN0IHBhcnNlciBhbmQgdGhlbiBpZlxuICogICAgIG5lY2Vzc2FyeSB0aGUgc2Vjb25kIHBhcnNlciwgcmV0dXJuaW5nIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IHRvXG4gKiAgICAgc3VjY2VlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yRWxzZSA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3JFbHNlJywgcSwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IEZhaWwpIHJldHVybiBwcmVwXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSB0d2luKHEocGN0eCkpXG4gIHJldHVybiBxcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHFyZXBcbiAgICA6IG1heWJlRmF0YWwocXJlcy5zdGF0dXMgPT09IEZhdGFsLCBxY3R4LCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxufSlcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIERlcml2YXRpdmUgcHJpbWl0aXZlc1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBzZXF1ZW5jZSBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYm90aCBpbiBhIDItZWxlbWVudCBhcnJheS4gSWYgZWl0aGVyIGBwYCBvciBgcWBcbiAqIGZhaWwsIHRoaXMgcGFyc2VyIHdpbGwgYWxzbyBmYWlsLCBhbmQgdGhlIGZhaWx1cmUgd2lsbCBiZSBmYXRhbCBpZlxuICogYW55IGlucHV0IGhhZCBiZWVuIGNvbnN1bWVkIGJ5IGVpdGhlciBwYXJzZXIuXG4gKlxuICogVGhpcyBpcyB0aGUgbW9zdCBwcmltaXRpdmUgc2VxdWVuY2luZyBwYXJzZXIuIEl0IGNhbiBiZSByZWdhcmRlZCBhc1xuICogYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGVpdGhlciwgaW4gdGhlIG1vbmFkaWMgYW5kIGFwcGxpY2F0aXZlXG4gKiBzdHlsZXMgcmVzcGVjdGl2ZWx5OlxuICpcbiAqIGBgYFxuICogY2hhaW4ocCwgYSA9PiBjaGFpbihxLCBiID0+IGFsd2F5cyhbYSwgYl0pKSlcbiAqIGFwcGx5KHAsIGFwcGx5KHEsIGFsd2F5cyhiID0+IGEgPT4gW2EsIGJdKSkpXG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYm90aCBjb250YWluZWQgcGFyc2VycyBhbmRcbiAqICAgICByZXN1bHRzIGluIHRoZSB2YWx1ZXMgb2YgYm90aCBwYXJzZXJzIGluIGFuIGFycmF5LlxuICovXG5leHBvcnQgY29uc3QgYW5kVGhlbiA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYW5kVGhlbicsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FuZFRoZW4nLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIHJldHVybiBxcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rKHFjdHgsIFtwcmVzLnZhbHVlLCBxcmVzLnZhbHVlXSlcbiAgICA6IG1heWJlRmF0YWwocWN0eC5pbmRleCAhPT0gaW5kZXgsIHFjdHgsIHFyZXMuZXJyb3JzKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5lcmF0b3JGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFBhcnNlcnMsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmROdW1Gb3JtYXR0ZXIsXG4gIG9yZFBhckZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG9rLCBQYXJzZXIsIFN0YXR1cywgbWF5YmVGYXRhbCB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBvcmRpbmFsLCByYW5nZSwgc3RyaW5naWZ5LCB0d2luIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpc1xuICogZXhlY3V0ZWQgaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZVxuICogZmFpbHMuIEluIHRoZSBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXRcbiAqIGJlY29tZXMgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgcGFyc2VyIG1heSBmYWlsIGZhdGFsbHkgZXZlbiBpZiB0aGUgdW5zdWNjZXNzZnVsXG4gKiBjb250YWluZWQgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LiBUaGlzIHdpbGwgaGFwcGVuIGlmIGFueSBwcmV2aW91c1xuICogcGFyc2VyIHN1Y2NlZWRlZCBhbmQgY29uc3VtZWQgaW5wdXQuIEVzc2VudGlhbGx5LCBpZiB0aGUgcmV0dXJuZWRcbiAqIHBhcnNlciBjb25zdW1lcyBhbnl0aGluZyBhbmQgdGhlbiBmYWlscywgaXQgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0IGFcbiAqICAgICB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXF1ZW5jZSA9ICguLi5wcykgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdzZXF1ZW5jZScsIHBzKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICByZXR1cm4gbWF5YmVGYXRhbChjb250ZXh0LmluZGV4ICE9PSBpbmRleCwgY29udGV4dCwgcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcGAuIElmIGVpdGhlciBgcGAgb3IgYHFgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwgaWZcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGBsZWZ0KHAsIHEpYCBpcyBhbiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIHggPT5cbiAqIHZhbHVlKHEsIHgpKWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5LlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGVmdCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBvcmRQYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIHJldHVybiBxcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhxY3R4LCBwcmVzLnZhbHVlKVxuICAgIDogbWF5YmVGYXRhbChxY3R4LmluZGV4ICE9PSBpbmRleCwgcWN0eCwgcXJlcy5lcnJvcnMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluXG4gKiBzZXF1ZW5jZSBhbmQgdGhlbiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcWAuIElmIGVpdGhlciBgcGAgb3IgYHFgXG4gKiBmYWlsLCB0aGlzIHBhcnNlciB3aWxsIGFsc28gZmFpbCwgYW5kIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwgaWZcbiAqIGFueSBpbnB1dCBoYWQgYmVlbiBjb25zdW1lZCBieSBlaXRoZXIgcGFyc2VyLlxuICpcbiAqIGByaWdodChwLCBxKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxuICogcSlgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwLCBxKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHEsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5PaykgcmV0dXJuIHByZXBcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IHR3aW4ocShwY3R4KSlcbiAgcmV0dXJuIHFyZXMuc3RhdHVzID09PSBPayA/IHFyZXBcbiAgICA6IG1heWJlRmF0YWwocWN0eC5pbmRleCAhPT0gaW5kZXgsIHFjdHgsIHFyZXMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGFcbiAqIGdlbmVyYXRvciBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkXG4gKiB3aWxsIGJlIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuXG4gKiBiZSBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLiBJZiBhbnkgb2YgdGhlc2UgcGFyc2VycyBmYWlsLFxuICogYGJsb2NrYCB3aWxsIGFsc28gZmFpbCB3aXRoIHRoYXQgZmFpbHVyZS4gVGhpcyBmYWlsdXJlIHdpbGwgYmUgZmF0YWxcbiAqIGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgdW5kZWZpbmVkIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnZW5GbiBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiAgICAgYXJndW1lbnRzIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZFxuICogICAgIHBhcnNlcidzIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seVxuICogICAgIGBQYXJzZXJgczsgeWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsIGNhdXNlIGluY29ycmVjdCBiZWhhdmlvclxuICogICAgIGRlcGVuZGluZyBvbiB3aGF0IGV4YWN0bHkgaXMgeWllbGRlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBhcHBsaWVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgKGlmIGFsbCBwYXJzZXJzXG4gKiAgICAgc3VjY2VlZCkgaW4gdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSBnZW5GbiA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEdlbmVyYXRvckZ1bmN0aW9uKCdibG9jaycsIGdlbkZuKVxuXG4gIGNvbnN0IGdlbiA9IGdlbkZuKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIG9yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcHJlcy52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCBub24tbnVsbCByZXN1bHRzIGludG8gYW4gYXJyYXkgYW5kXG4gKiBwcm92aWRpbmcgdGhhdCBhcyBpdHMgb3duIHJlc3VsdC4gVGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmXG4gKiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW4gaXQgZmFpbHMuIE90aGVyd2lzZSwgaXRcbiAqIHN1Y2NlZWRzIGV2ZW4gaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBkb2Vzbid0IHN1Y2NlZWQgZXZlbiBvbmNlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgemVybyBvciBtb3JlIHRpbWVzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueScsIHApXG5cbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICBpZiAocHJlcy52YWx1ZSAhPT0gbnVsbCkgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgbm9uLW51bGwgcmVzdWx0cyBpbnRvIGFuIGFycmF5IGFuZFxuICogcHJvdmlkaW5nIHRoYXQgYXMgaXRzIG93biByZXN1bHQuIFRoZSBjb250YWluZWQgcGFyc2VyIG11c3Qgc3VjY2VlZFxuICogYXQgbGVhc3Qgb25jZSwgb3IgdGhlIHJldHVybmVkIHBhcnNlciB3aWxsIGZhaWwuIE90aGVyd2lzZSwgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIgb25seSBmYWlscyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGNvbnN1bWVzIGlucHV0IHdoZW5cbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGFwcGxpZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkxID0gcCA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueTEnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGNvbnN0IHZhbHVlcyA9IHByZXMudmFsdWUgIT09IG51bGwgPyBbcHJlcy52YWx1ZV0gOiBbXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIGlmIChwcmVzLnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIGRpc2NhcmRzIGFueVxuICogc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGUgc3RpbGwgY29uc3VtaW5nIGlucHV0LiBBIGZhaWx1cmUgd2lsbCBiZVxuICogcHJvcGFnYXRlZCB3aXRob3V0IG1vZGlmaWNhdGlvbi5cbiAqXG4gKiBgc2tpcChwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mIGBjaGFpbihwLCAoKSA9PlxuICogYWx3YXlzKG51bGwpKWAsXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdG8gYmUgZGlzY2FyZGVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGNvbnN1bWUgaW5wdXQgYXMgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBkb2VzIG9uIHN1Y2Nlc3MsIGJ1dCB3aWxsIHByb2R1Y2Ugbm8gcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc2tpcCA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXAnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2sgPyBvayhwY3R4LCBudWxsKSA6IHByZXBcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB1bnRpbCBpdCBmYWlscyxcbiAqIGRpc2NhcmRpbmcgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMuIFRoZSByZXR1cm5lZCBwYXJzZXIgb25seVxuICogZmFpbHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBjb25zdW1lcyBpbnB1dCB3aGVuIGl0IGZhaWxzLiBPdGhlcndpc2UsXG4gKiBpdCBzdWNjZWVkcyBldmVuIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZG9lc24ndCBzdWNjZWVkIGV2ZW4gb25jZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBhcHBsaWVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueSA9IHAgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXBNYW55JywgcClcblxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCBudWxsKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHVudGlsIGl0IGZhaWxzLFxuICogZGlzY2FyZGluZyBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cy4gVGhlIGNvbnRhaW5lZCBwYXJzZXIgbXVzdFxuICogc3VjY2VlZCBhdCBsZWFzdCBvbmNlLCBvciB0aGUgcmV0dXJuZWQgcGFyc2VyIHdpbGwgZmFpbC4gT3RoZXJ3aXNlLFxuICogdGhlIHJldHVybmVkIHBhcnNlciBvbmx5IGZhaWxzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgY29uc3VtZXMgaW5wdXRcbiAqIHdoZW4gaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgYXBwbGllZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gU3VjY2Vzc2Z1bCByZXN1bHRzIGFyZSBkaXNjYXJkZWQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwTWFueTEgPSBwID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdza2lwTWFueTEnLCBwKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHJldHVybiBwcmVwXG5cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIG51bGwpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXG4gKiBjb250ZW50IHBhcnNlciBjYW4gbWF0Y2ggemVybyB0aW1lcywgc28gdGhlIG9ubHkgd2F5IGZvciB0aGlzIHBhcnNlclxuICogdG8gZmFpbCBpcyBmb3Igb25lIG9mIGl0cyBwYXJzZXJzIHRvIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBDb250ZW50IHBhcnNlciByZXN1bHRzIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5LCB3aGljaCBiZWNvbWVzIHRoZVxuICogcmVzdWx0IGZvciB0aGUgcmV0dXJuZWQgcGFyc2VyLiBUaGUgcmVzdWx0cyBvZiB0aGUgc2VwYXJhdG9yIHBhcnNlclxuICogYXJlIGRpc2NhcmRlZC5cbiAqXG4gKiBJZiB0aGUgc2VwYXJhdG9yIGFuZCBjb250ZW50IHBhcnNlcnMgYm90aCBwYXNzIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBjb250ZW50LCB0aGF0IHdvdWxkIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW5cbiAqIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gc2VwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcEJ5ID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwQnknLCBzZXAsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rKHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NlcHJlcCwgW3NlcGN0eCwgc2VwcmVzXV0gPSB0d2luKHNlcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gc2VwY3R4XG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gc2VwcmVwXG4gICAgaWYgKHNlcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBCeScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBnYXRoZXJzIHZhbHVlcyBmcm9tIGEgY29udGVudCBwYXJzZXIsXG4gKiBpbnRlcnNwZXJzaW5nIGFwcGxpY2F0aW9ucyBvZiBhIHNlcGFyYXRvciBwYXJzZXIgaW4gYmV0d2Vlbi4gVGhlXG4gKiBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2Ugb3IgYSBub24tZmF0YWwgZmFpbHVyZVxuICogd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5IGZhaWwgaWYgb25lIG9mIGl0cyBwYXJzZXJzXG4gKiBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwQnkxID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEJ5MScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHNlcGN0eFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHNlcHJlcFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGdhdGhlcnMgdmFsdWVzIGZyb20gYSBjb250ZW50IHBhcnNlcixcbiAqIGludGVyc3BlcnNpbmcgYXBwbGljYXRpb25zIG9mIGEgc2VwYXJhdG9yIHBhcnNlciBpbiBiZXR3ZWVuIGFuZFxuICogb3B0aW9uYWxseSBhdCB0aGUgZW5kLiBUaGUgY29udGVudCBwYXJzZXIgY2FuIG1hdGNoIHplcm8gdGltZXMsIHNvXG4gKiB0aGUgb25seSB3YXkgZm9yIHRoaXMgcGFyc2VyIHRvIGZhaWwgaXMgZm9yIG9uZSBvZiBpdHMgcGFyc2VycyB0b1xuICogZmFpbCBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkgPSAocCwgc2VwKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwRW5kQnknLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBFbmRCeScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2socGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBzZXBjdHhcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBzZXByZXBcbiAgICBpZiAoc2VwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcEVuZEJ5JykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKHsgLi4uY29udGV4dCwgaW5kZXggfSkpXG4gIHJldHVybiBzZXByZXMuc3RhdHVzID09PSBGYXRhbCA/IHNlcHJlcCA6IG9rKHNlcGN0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgZ2F0aGVycyB2YWx1ZXMgZnJvbSBhIGNvbnRlbnQgcGFyc2VyLFxuICogaW50ZXJzcGVyc2luZyBhcHBsaWNhdGlvbnMgb2YgYSBzZXBhcmF0b3IgcGFyc2VyIGluIGJldHdlZW4gYW5kXG4gKiBvcHRpb25hbGx5IGF0IHRoZSBlbmQuIFRoZSBjb250ZW50IHBhcnNlciBtdXN0IHN1Y2NlZWQgYXQgbGVlYXN0IG9uY2VcbiAqIG9yIGEgbm9uLWZhdGFsIGZhaWx1cmUgd2lsbCBvY2N1ci4gT3RoZXJ3aXNlLCB0aGUgcGFyc2VyIGNhbiBvbmx5XG4gKiBmYWlsIGlmIG9uZSBvZiBpdHMgcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICpcbiAqIENvbnRlbnQgcGFyc2VyIHJlc3VsdHMgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXksIHdoaWNoIGJlY29tZXMgdGhlXG4gKiByZXN1bHQgZm9yIHRoZSByZXR1cm5lZCBwYXJzZXIuIFRoZSByZXN1bHRzIG9mIHRoZSBzZXBhcmF0b3IgcGFyc2VyXG4gKiBhcmUgZGlzY2FyZGVkLlxuICpcbiAqIElmIHRoZSBzZXBhcmF0b3IgYW5kIGNvbnRlbnQgcGFyc2VycyBib3RoIHBhc3Mgd2l0aG91dCBjb25zdW1pbmdcbiAqIGNvbnRlbnQsIHRoYXQgd291bGQgY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhblxuICogZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzZXAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwRW5kQnkxID0gKHAsIHNlcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcEVuZEJ5MScsIHNlcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzZXByZXAsIFtzZXBjdHgsIHNlcHJlc11dID0gdHdpbihzZXAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHNlcGN0eFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHNlcHJlcFxuICAgIGlmIChzZXByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwRW5kQnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2VwcmVwLCBbc2VwY3R4LCBzZXByZXNdXSA9IHR3aW4oc2VwKHsgLi4uY29udGV4dCwgaW5kZXggfSkpXG4gIHJldHVybiBzZXByZXMuc3RhdHVzID09PSBGYXRhbCA/IHNlcHJlcCA6IG9rKHNlcGN0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcyxcbiAqIGNvbGxlY3RpbmcgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LiBJZiBhbnkgYXBwbGljYXRpb25cbiAqIGZhaWxzLCB0aGUgb3ZlcmFsbCBwYXJzZXIgd2lsbCBmYWlsOyBpZiBpbnB1dCBpcyBjb25zdW1lZCBiZWZvcmUgb3JcbiAqIGR1cmluZyB0aGF0IGZhaWx1cmUsIHRoZSBmYWlsdXJlIHdpbGwgYmUgZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYXBwbHkgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGFwcGx5IHRoZSBwYXJzZXIuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJlcGVhdCA9IChwLCBuKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0JywgcCwgb3JkUGFyRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0Jywgbiwgb3JkTnVtRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgIHJldHVybiBtYXliZUZhdGFsKGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGJlZm9yZSwgY29udGVudCwgYW5kIGFmdGVyIHBhcnNlcnNcbiAqIGluIG9yZGVyIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIE5vdGUgdGhhdCB0aGUgY29udGVudCBwYXJzZXIgYHBgIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhZnRlciBwYXJzZXJcbiAqIGBwYWZ0ZXJgLiBUaGlzIG1lYW5zIHRoYXQgdGhlIGNvbnRlbnQgcGFyc2VyIHdpbGwgaGF2ZSBhbiBvcHBvcnR1bml0eVxuICogdG8gcGF0Y2ggdGhlIFwiYWZ0ZXJcIiBjb250ZW50IGJlZm9yZSB0aGUgYWZ0ZXIgcGFyc2VyIGRvZXMsIHNvIHRha2VcbiAqIGNhcmUgdGhhdCB0aGUgcGFyc2VycyBkbyBub3Qgb3ZlcmxhcCBpbiB3aGF0IHRoZXkgbWF0Y2guXG4gKlxuICogYGJldHdlZW4ocHJlLCBwb3N0LCBwKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGVmdChyaWdodChwcmUsIHApLCBwb3N0KWAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHByZSBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHBvc3QgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChwcmUsIHBvc3QsIHApID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuJywgcHJlLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuJywgcG9zdCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIG9yZFBhckZvcm1hdHRlcignM3JkJykpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcmVwLCBbcHJlY3R4LCBwcmVyZXNdXSA9IHR3aW4ocHJlKGN0eCkpXG4gIGlmIChwcmVyZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXJlcFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAocHJlY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgcmV0dXJuIG1heWJlRmF0YWwocGN0eC5pbmRleCAhPT0gaW5kZXgsIHBjdHgsIHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3Bvc3RjdHgsIHBvc3RyZXNdID0gcG9zdChwY3R4KVxuICByZXR1cm4gcG9zdHJlcy5zdGF0dXMgPT09IE9rID8gb2socG9zdGN0eCwgcHJlcy52YWx1ZSlcbiAgICA6IG1heWJlRmF0YWwocG9zdGN0eC5pbmRleCAhPT0gaW5kZXgsIHBvc3RjdHgsIHBvc3RyZXMuZXJyb3JzKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lc1xuICogdW50aWwgaXRzIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheVxuICogb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzXG4gKiBhcHBsaWVkICpmaXJzdCosIHNvIGl0J3MgZmluZSB0byBoYXZlIHRoZSB0d28gcGFyc2VycyBvdmVybGFwLiBGb3JcbiAqIGV4YW1wbGUsIGBtYW55VGlsbChhbnksIGxldHRlcilgIHdpbGwgd29yayBmaW5lLCBiZWNhdXNlIGBsZXR0ZXJgXG4gKiB3aWxsIGJlIHRyaWVkIGZpcnN0IG9uIGVhY2ggY2hhcmFjdGVyIChjb250cmFzdCB3aXRoIGBiZXR3ZWVuKGxldHRlcixcbiAqIGFueSwgbGV0dGVyKWAsIHdoaWNoIHdpbGwgbmV2ZXIgc3VjY2VlZCBiZWN1YXNlIHRoZSBgYW55YCBpcyBhcHBsaWVkXG4gKiBiZWZvcmUgdGhlIGZpbmFsIGBsZXR0ZXJgIGFuZCB3aWxsIHRoZXJlZm9yZSBjb25zdW1lIGEgbGV0dGVyIGJlZm9yZVxuICogdGhlIGBsZXR0ZXJgIHBhcnNlciBnZXRzIHRvIHNlZSBpdCkuXG4gKlxuICogSWYgdGhlIGNvbnRlbnQgcGFyc2VyIGZhaWxzIGJlZm9yZSB0aGUgZW5kIHBhcnNlciBkb2VzLCB0aGUgb3ZlcmFsbFxuICogcGFyc2VyIHdpbGwgZmFpbCAoZmF0YWxseSBpZiBpbnB1dCBoYWQgYWxyZWFkeSBiZWVuIGNvbnN1bWVkKS4gQVxuICogZmF0YWwgZXJyb3IgYnkgZWl0aGVyIHBhcnNlciB3aWxsIHJlc3VsdCBpbiBhIGZhdGFsIGVycm9yIGZvciB0aGVcbiAqIG92ZXJhbGwgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGVuZCBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IHRoZSBjb250ZW50IHplcm8gb3IgbW9yZVxuICogICAgIHRpbWVzIHVudGlsIHRoZSBlbmQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgbWFueVRpbGwgPSAocCwgZW5kKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueVRpbGwnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55VGlsbCcsIGVuZCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VuZHJlcCwgW2VuZGN0eCwgZW5kcmVzXV0gPSB0d2luKGVuZChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gZW5kY3R4XG4gICAgaWYgKGVuZHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZW5kcmVwXG4gICAgaWYgKGVuZHJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY29udGV4dCkpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoXG4gICAgICAgIGNvbnRleHQuaW5kZXggIT09IGluZGV4LCBjb250ZXh0LCBtZXJnZShwcmVzLmVycm9ycywgZW5kcmVzLmVycm9ycyksXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmVzLnZhbHVlICE9PSBudWxsKSB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhcHBsaWVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXNcbiAqIHRob3NlIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mXG4gKiBwYXJzZXJzIHRvIGFwcGx5LiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBOb3RlIHRoYXQsIHVubGlrZSBgc2VxdWVuY2VgLCBgbnVsbGAgcGFyc2VyIHJlc3VsdHMgYXJlICpub3QqXG4gKiBkaXNjYXJkZWQuIFRoaXMgZW5zdXJlcyB0aGF0IHRoZSBzYW1lIG51bWJlciBvZiBhcmd1bWVudHMgYXJlIHBhc3NlZFxuICogdG8gYGZuYCBubyBtYXR0ZXIgdGhlIHJlc3VsdHMgZnJvbSB0aGUgcGFyc2Vycy5cbiAqXG4gKiBgcGlwZShwLCBxLCBmbilgIGlzIGFuIG9wdGltaXplZCBpbXBsZW1lbnRhdGlvbiBvZiBgY2hhaW4ocCwgYSA9PlxuICogY2hhaW4ocSwgYiA9PiBhbHdheXMoZm4oYSwgYikpKSlgLCBgcGlwZShwLCBxLCByLCBmbilgIGlzIGFuXG4gKiBvcHRpbWl6ZWQgaW1wbGVtZW50YXRpb24gb2YgYGNoYWluKHAsIGEgPT4gY2hhaW4ocSwgYiA9PiBjaGFpbihyLFxuICogYyA9PiBhbHdheXMoZm4oYSwgYiwgYykpKSkpYCwgYW5kIHNvIG9uLlxuICpcbiAqIElmIHRoZSBhcnJheSBoYXMgb25lIGVsZW1lbnQsIHRoZSBwYXJzZXIgYmVjb21lcyBlcXVpdmFsZW50IHRvIGBtYXBgXG4gKiBidXQgbGVzcyBlZmZpY2llbnQuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBwcyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlXG4gKiAgICAgYXBwbGllZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGUgY3JlYXRlZCBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsXG4gKiAgICAgb3RoZXIgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLnBzKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXJzKCdwaXBlJywgcHMpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBvcmRGbkZvcm1hdHRlcihvcmRpbmFsKHBzLmxlbmd0aCArIDEpKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgcmV0dXJuIG1heWJlRmF0YWwoY29udGV4dC5pbmRleCAhPT0gaW5kZXgsIGNvbnRleHQsIHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxufSlcblxuLyoqXG4gKiBQcml2YXRlIGZvcm1hdHRpbmcgZnVuY3Rpb24gZm9yIGFzc2VydGlvbiBtZXNzYWdlcyBhYm91dCBvcCBwYXJzZXJzXG4gKiBub3QgcmV0dXJuaW5nIGZ1bmN0aW9uc1xuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBvcmQgVGhlIG51bWJlciBvZiB0aGUgb3AgcGFyc2VyIHRoYXQgZmFpbHMgdG8gcHJvZHVjZVxuICogICAgIGEgZnVuY3Rpb25cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEFuIGFwcHJvcHJpYXRlIGFzc2VydGlvbiBmYWlsdXJlIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIG9wRm9ybWF0dGVyKG9yZCkge1xuICByZXR1cm4gdmFsdWUgPT4gYGV4cGVjdGVkICR7b3JkfSBvcCBwYXJzZXIgdG8gcmV0dXJuIGEgZnVuY3Rpb247IGZvdW5kICR7XG4gICAgc3RyaW5naWZ5KHZhbHVlKVxuICB9YFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGBcbiAqIHNlcGFyYXRlZCBieSBgb3BgLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0XG4gKiBhc3NvY2lhdGl2ZSBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb3BgIHJlc3VsdHMgdG9cbiAqIHRoZSByZXN1bHRzIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvcGAsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvcGAgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGV4Y2VwdGlvbiB3aWxsIGJlIHRocm93blxuICogd2hlbiB0aGlzIHBhcnNlciB0cmllcyB0byBjYWxsIHRoYXQgcmVzdWx0IGFzIGEgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvcCBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY0wgPSAocCwgb3AsIHgpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBvayhwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvcHJlcCwgW29wY3R4LCBvcHJlc11dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gb3BjdHhcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIG9wcmVwXG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NMJywgb3ByZXMudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcHJlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBvayhjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYFxuICogc2VwYXJhdGVkIGJ5IGBvcGAuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvYzFMID0gKHAsIG9wKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIHAsIG9yZFBhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMUwnLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSByZXR1cm4gcHJlcFxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvcHJlcCwgW29wY3R4LCBvcHJlc11dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gb3BjdHhcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIG9wcmVwXG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2MxTCcsIG9wcmVzLnZhbHVlLCBvcEZvcm1hdHRlcihvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3ByZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9wYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb3BgIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY1IgPSAocCwgb3AsIHgpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBvcCwgb3JkUGFyRm9ybWF0dGVyKCcybmQnKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBvayhwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvcHJlcCwgW29wY3R4LCBvcHJlc11dID0gdHdpbihvcChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gb3BjdHhcbiAgICBpZiAob3ByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIG9wcmVwXG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gdHdpbihwKGNvbnRleHQpKVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIHByZXBcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnYXNzb2NSJywgb3ByZXMudmFsdWUsIG9wRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcHJlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rKGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgXG4gKiBzZXBhcmF0ZWQgYnkgYG9wYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHRcbiAqIGFzc29jaWF0aXZlIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0b1xuICogdGhlIHJlc3VsdHMgb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3MgZWl0aGVyIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHNcbiAqIGZhdGFsbHkgb3IgdGhlIGNvbnRlbnQgcGFyc2VyIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3Qgb25jZS4gSWZcbiAqIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9wYCwgdGhlbiB0aGF0IHJlc3VsdCBvZlxuICogYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9wYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXhjZXB0aW9uIHdpbGwgYmUgdGhyb3duXG4gKiB3aGVuIHRoaXMgcGFyc2VyIHRyaWVzIHRvIGNhbGwgdGhhdCByZXN1bHQgYXMgYSBmdW5jdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG9wIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvcGAgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9wYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvcCkgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBvcmRQYXJGb3JtYXR0ZXIoJzFzdCcpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvYzFSJywgb3AsIG9yZFBhckZvcm1hdHRlcignMm5kJykpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSB0d2luKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykgcmV0dXJuIHByZXBcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb3ByZXAsIFtvcGN0eCwgb3ByZXNdXSA9IHR3aW4ob3AoY29udGV4dCkpXG4gICAgY29udGV4dCA9IG9wY3R4XG4gICAgaWYgKG9wcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBvcHJlcFxuICAgIGlmIChvcHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IHR3aW4ocChjb250ZXh0KSlcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBwcmVwXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jMVInLCBvcHJlcy52YWx1ZSwgb3BGb3JtYXR0ZXIob3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9wcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2soY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZvcm1hdEVycm9ycyB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHRyYWNrIH0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvci5qcycpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBvbmUgb2YgdGhlIHR5cGVzXG4gKiBvZiB0eXBlZCBhcnJheXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG59XG5cbi8qKlxuICogQSBzeW1ib2wgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXG4gKiBAZW51bSB7c3ltYm9sfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2Ugd2FzIHN1Y2Nlc3NmdWwuICovXG4gIE9rOiBTeW1ib2woJ29rJyksXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXG4gIEZhaWw6IFN5bWJvbCgnZmFpbCcpLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6IFN5bWJvbCgnZmF0YWwnKSxcbn1cblxuLyoqXG4gKiBUaGUgY29udGV4dCBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHQgYW5kIGFcbiAqIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbnRleHRcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcbiAqICAgICBuZXh0IHBhcnNpbmcgb3BlcmF0aW9uIHdpbGwgdGFrZSBwbGFjZSAob3Igd2hlcmUgdGhlIGxhc3Qgb25lXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcbiAqIGVzc2VudGlhbGx5IGEgdW5pb24gb2Ygc3VjY2Vzc2Z1bCB2YWx1ZSBhbmQgZmFpbHVyZSBlcnJvciwgd2l0aCB0aGVcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIGEgc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBpbmNsdWRpbmcgdGhlXG4gKiBjb250ZXh0IGFuZCB0aGUgcmVzdWx0LlxuICogQHR5cGVkZWYge1tDb250ZXh0LCBSZXN1bHRdfSBSZXBseVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgVWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxJbnQ4QXJyYXl8XG4gKiAgIEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5XG4gKiApfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSBwYXJzZXIgY29udGV4dC4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhXG4gKiBuZXcgY29udGV4dCBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogQW55IGZ1cnRoZXIgY29udGV4dHMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgY29udGV4dCB1c2luZyB7QGxpbmsgb2t9LFxuICoge0BsaW5rIGVycm9yfSwgb3Ige0BsaW5rIGZhdGFsfS5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7Q29udGV4dH0gQW4gZW1wdHkgcGFyc2VyIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBDb250ZXh0KGlucHV0KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcbiAgICArIGBidWZmZXIsIG9yIGEgZGF0YSB2aWV3OyBwYXJzZXIgaW5wdXQgd2FzICR7dHlwZW9mIGlucHV0fWBcblxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlzVHlwZWRBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfSkoaW5wdXQpXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3LFxuICAgIGluZGV4OiAwLFxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcbiAqIGNvbnRleHQsIHVwZGF0ZXMgaXQgc29tZWhvdyAoZ2VuZXJhbGx5IGJ5IHJlYWRpbmcgYSBjaGFyYWN0ZXIpLCBhbmRcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgY29udGV4dC5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBiZWZvcmUgdGhlIHBhcnNlciBpcyBydW4uXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSB1cGRhdGVkIGNvbnRleHQgYWZ0ZXIgdGhlIHBhcnNlciBpcyBhcHBsaWVkIGFuZFxuICogICAgIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyIGZ1bmN0aW9uXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXG4gKiB0byB0cmFjayBwYXJzZXJzIHRoYXQgaXQgaGFzIGNyZWF0ZWQuXG4gKlxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcbiAqIHdpbGwgYXNzZXJ0IHRoYXQgdGhlIHBhcnNlciB0aGF0IGlzIHBhc3NlZCB0byBpdCB3YXMgY3JlYXRlZCBieSB0aGlzXG4gKiBmYWN0b3J5IGZ1bmN0aW9uLiBBbnkgb3RoZXIgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLFxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcbiAqIHJldHVybiB2YWx1ZS4gSWYgYXNzZXJ0aW9ucyBhcmUgbm90IGVuYWJsZWQsIHRoaXMgY2hlY2sgd2lsbCBub3QgYmVcbiAqIGRvbmUuXG4gKlxuICogRXZlcnkgcGFyc2VyIGluIHRoaXMgbGlicmFyeSBpcyBjcmVhdGVkIHdpdGggYG1ha2VQYXJzZXJgLCBzbyBhbnkgb2ZcbiAqIHRob3NlIG9yIGFueSBwYXJzZXIgY29tcG9zZWQgZnJvbSB0aG9zZSB3aWxsIHdvcmsgYXV0b21hdGljYWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gZm4gQSBwYXJzZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBQYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQsIGFzIHdlbGwgYXNcbiAqIGEgYENvbnRleHRgIHBvdGVudGlhbGx5IHdpdGggYW4gdXBkYXRlZCBgaW5kZXhgLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvayhjdHgsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyBgUmVzdWx0YCBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dFxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgY29weSBvZiBgQ29udGV4dGAuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZVxuICogICAgIGNvbnRleHQgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbChjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhaWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZVxuICogY29uc3VtaW5nIGlucHV0LCBhcyB3ZWxsIGFzIGEgbmV3IGBDb250ZXh0YCB3aXRoIGFuIHVwZGF0ZWQgYGluZGV4YC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsKGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IGBSZXN1bHRgIGluZGljYXRpbmcgdGhhdCBhIHBhcnNlciBhcHBsaWNhdG9pbiBmYWlsZWQuXG4gKiBXaGV0aGVyIHRoaXMgaXMgYSBmYXRhbCBlcnJvciBvciBub3QgZGVwZW5kcyBvbiB3aGV0aGVyIGB0ZXN0YCBpc1xuICogYHRydWVgIChmYXRhbCkgb3IgYGZhbHNlYCAobm9uLWZhdGFsKS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHRlc3QgVXNlZCB0byBkZXRlcm1pbmUgd2hldGhlciB0aGUgcHJvZHVjZWQgcmVzdWx0XG4gKiAgICAgcmVwcmVzZW50cyBhIGZhdGFsIGVycm9yIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge1BhcnNlRXJyb3JbXX0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGVcbiAqICAgICBjb250ZXh0IGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1heWJlRmF0YWwodGVzdCwgY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFtcbiAgICB7IC4uLmN0eCwgaW5kZXggfSxcbiAgICB7IHN0YXR1czogdGVzdCA/IFN0YXR1cy5GYXRhbCA6IFN0YXR1cy5GYWlsLCBlcnJvcnMgfSxcbiAgXVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gaW5wdXQgVGhlIGlucHV0XG4gKiAgICAgdGV4dC5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIGZpbmFsIGNvbnRleHQgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZSBiZWVuXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKENvbnRleHQoaW5wdXQpKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7U3RhdHVzfSBUaGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGRpZCBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYW5cbiAqIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKC4uLnJlcGx5KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXG4gKiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0geyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IGlucHV0IFRoZSBpbnB1dFxuICogICAgIHRleHQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBmcm9tIHRoZSBwYXJzZXIgYXBwbGljYXRpb24sIGlmIHRoZSBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGFyc2VyIGZhaWxzLiBUaGUgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIGFcbiAqICAgICBkZXRhaWxlZCByZWNvcmQgb2Ygd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuKHBhcnNlciwgaW5wdXQpIHtcbiAgY29uc3QgW2N0eCwgcmVzdWx0XSA9IHBhcnNlcihDb250ZXh0KGlucHV0KSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKGN0eCwgcmVzdWx0KSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGNoYXJMZW5ndGgsXG4gIGNvbW1hU2VwYXJhdGUsXG4gIG5leHRDaGFyV2lkdGgsXG4gIHZpZXdUb1N0cmluZyxcbn0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlJlc3VsdH0gUmVzdWx0ICovXG5cbmNvbnN0IHRhYiA9IC9cXHQvZ3VcbmNvbnN0IHplcm9XaWR0aCA9IC8oPzpcXHB7TW59fFxccHtDZn0pL2d1XG5cbi8qKlxuICogQSBzeW1ib2wgZGVmaW5pbmcgdGhlIHR5cGUgb2YgYW4gZXJyb3IuXG4gKiBAZW51bSB7c3ltYm9sfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JUeXBlID0ge1xuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxuICAgKiBtYWpvcml0eSBvZiBwYXJzZXJzLlxuICAgKi9cbiAgRXhwZWN0ZWQ6IFN5bWJvbCgnZXhwZWN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cbiAgICovXG4gIFVuZXhwZWN0ZWQ6IFN5bWJvbCgndW5leHBlY3RlZCcpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxuICAgKi9cbiAgR2VuZXJpYzogU3ltYm9sKCdnZW5lcmljJyksXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCBmb3IgYW4gZXJyb3IgdGhhdCBjYXVzZWQgYmFja3RyYWNraW5nLCB3aGVyZSB0aGVcbiAgICogcGFyZW50IGVycm9yIGlzIHJlcG9ydGVkIGFmdGVyIGJhY2t0cmFja2luZy5cbiAgICovXG4gIE5lc3RlZDogU3ltYm9sKCduZXN0ZWQnKSxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXG4gICAqL1xuICBDb21wb3VuZDogU3ltYm9sKCdjb21wb3VuZCcpLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiBTeW1ib2woJ290aGVyJyksXG59XG5cbi8qKlxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxuICogdG8gYSBwYXJ0aWN1bGFyIGluZGV4IG9yIG5lc3RlZC9jb21wb3VuZCBlcnJvcnMgdGhhdCBwb2ludCBiYWNrIHRvXG4gKiB0aGUgc2FtZSBpbmRleCBidXQgYXBwbHkgdG8gYSBkaWZmZXJlbnQgb25lLlxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGF0IHRoZSBsb2NhdGlvbiByZWZlcnJlZCB0byBieSB0aGUgY3VycmVudFxuICogY29udGV4dC4gVGhlIHR5cGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlcmUgdGhlIGxhYmVsIHNob3VsZCBiZVxuICogcG9zaXRpb25lZCBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2NhbEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGluIGEgZGlmZmVyZW50IGxvY2F0aW9uIHRoYW4gdGhlIG9uZSByZWZlcnJlZFxuICogdG8gYnkgdGhlIGN1cnJlbnQgY29udGV4dC4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQSBuZXN0ZWQgZXJyb3IgdGhhdCBoYXMgaXRzIG93biBsYWJlbC4gVGhpcyBpcyBzaW1wbHkgZm9yIHByb2R1Y2luZ1xuICogbmljZXIgZXJyb3IgbWVzc2FnZXM7IHRoaXMgZXJyb3IgaXMgdHlwaWNhbGx5IG9ubHkgcHJvZHVjZWQgYnkgdGhlXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG91bmRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLkNvbXBvdW5kYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBlcnJvci4gVGhpc1xuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXG4gKiAgICAgdW5kZXIgdGhpcyBjb21wb3VuZCBlcnJvci5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS4gSXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmUgYXJyYXkgb2ZcbiAqIGVycm9yIG1lc3NhZ2VzIG1heSBoYXZlIG11bHRpcGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCBidXQgb25seSB0aGVcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXG4gKiAgICAgbm90IGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLlVuZXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmUgZ2VuZXJpY1xuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcbiAqIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGdlbmVyaWMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5HZW5lcmljLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG90aGVyIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtFcnJvck1lc3NhZ2V9IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3RoZXIobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmVzdGVkIGVycm9yLiBUaGlzIHRha2VzIGFuIGVycm9yIGxpc3QgYW5kIHdyYXBzIGl0IHdpdGhcbiAqIGNvbnRleHQgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGVcbiAqIG5lc3RlZCBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvclxuICogd2lsbCBub3QgYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgbmVzdGVkIGVycm9yXG4gKiAgICAgb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7TmVzdGVkRXJyb3J9IEEgbmV3IG5lc3RlZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gZXJyb3JzXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBjdHgsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7Q29tcG91bmRFcnJvcn0gQSBuZXcgY29tcG91bmQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IFt7XG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXG4gICAgICBjdHg6IGVycm9ycy5jdHgsXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXG4gICAgICBsYWJlbCxcbiAgICB9XVxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBjdHgsIGVycm9ycywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9yczEgVGhlIGZpcnN0IGFycmF5IG9mIGVycm9ycy5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMyIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxLCBlcnJvcnMyKSB7XG4gIHJldHVybiBbLi4uZXJyb3JzMSwgLi4uZXJyb3JzMl1cbn1cblxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxuICogICAgIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICovXG5cbi8qKlxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxuICAqXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxuICAqICAgICB0YWIgc2l6ZS5cbiAgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcbiAqIGRlc2lyZWQuXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxuICogQHBhcmFtIHtQYXJzZUVycm9yW119IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxuICpcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG5cbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cbiAgICAgIH1cbiAgICAgIGxpbmVubysrXG4gICAgICBzdGFydCA9IGkgKyBza2lwXG4gICAgfVxuICAgIGkgKz0gc2tpcFxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cbiAqXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XG4gIGxldCBjaGFySW5kZXggPSAwXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxuICAgIGNoYXJJbmRleCsrXG4gIH1cbiAgcmV0dXJuIGNoYXJJbmRleFxufVxuXG4vKipcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxuICogY2hhcmFjdGVyIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcbiAgbGV0IHJlc3VsdCA9IGxpbmVcblxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICB9XG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxuICB9XG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xuICogbWFya3MuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XG4gIGxldCBpbmRleCA9IGNvbEluZGV4XG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxuXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcbiAqICAgICBjb2x1bW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7c3B9JHtcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxuICAgIH1eYFxuICB9XG5cbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcbiAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYSBjaGFyYWN0ZXIgd2l0aGluIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdFxuICAvLyAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBTaGlmdCB0aGUgbGluZSB0byBtYWtlIHRoZSBjYXJldCBwb2ludFxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgY29uc3Qgc3RhcnQgPSBjb2xubyAtIDEgLSBNYXRoLmNlaWwobWF4V2lkdGggLyAyKSArIDNcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xuICByZXR1cm4gYCR7c3B9Li4uJHtcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICB9Li4uXFxuJHtzcH0ke1xuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXG4gIH1eYFxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsoTmVzdGVkRXJyb3JbXXxDb21wb3VuZEVycm9yW10pfSBuZXN0ZWRzIEFuIGFycmF5IG9mIGVpdGhlclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXG4gKiAgICAgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgbmVzdGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE5lc3RlZChuZXN0ZWRzLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBuLmN0eFxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxuICAgICAgPyBgXFxuJHtzcH0ke24ubGFiZWx9IGNvdWxkIG5vdCBiZSBwYXJzZWQgYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxuICApXG5cbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxuXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcblxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcblxuICBjb25zdCB1bmtub3duTXNnID0gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGAke3NwfVVua25vd24gZXJyb3IocylcXG5gIDogJydcbiAgY29uc3QgZW9mTXNnID0gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXG4gICAgPyBgJHtzcH1Ob3RlOiBmYWlsdXJlIG9jY3VycmVkIGF0IHRoZSBlbmQgb2YgaW5wdXRcXG5gIDogJydcblxuICByZXR1cm4gZW5zdXJlTmV3bGluZXMoXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfSR7dW5rbm93bk1zZ31gXG4gICAgICArIGAke2VvZk1zZ30ke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXG4gICAgMixcbiAgKVxufVxuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogQWNjZXB0cyBhIHBhcnNlciBjb250ZXh0IGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4KSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0c1xuICogdG8gNzIpLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBwYXJzZXIncyBjb250ZXh0IHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtSZXN1bHR9IHJlc3VsdCBUaGUgcmVzdWx0IHByb2R1Y2VkIHdoZW4gdGhlIGVycm9yIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMoXG4gIGN0eCwgcmVzdWx0LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgZm9ybWF0dGVyID0gZm9ybWF0LFxuKSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBjb250ZXh0LiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIGNvbnRleHQnc1xuICogaW5kZXggd2l0aGluIHRoZSBjb250ZXh0J3MgZGF0YSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oY3R4LCB0YWJTaXplID0gOCkge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBhbnlPZixcbiAgY2hhcixcbiAgY2hhckksXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZU9mLFxuICBvY3RhbCxcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHNhdGlzZnlNLFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBmYWlsTm9ybWFsbHksXG4gIGZhaWxGYXRhbGx5LFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFscGhhVSxcbiAgbGV0dGVyVSxcbiAgbG93ZXJVLFxuICBuZXdsaW5lLFxuICBuZXdsaW5lVSxcbiAgcmVnZXgsXG4gIHNwYWNlLFxuICBzcGFjZVUsXG4gIHNwYWNlcyxcbiAgc3BhY2VzMSxcbiAgc3BhY2VzMVUsXG4gIHNwYWNlc1UsXG4gIHVwcGVyVSxcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlTdHJpbmcsXG4gIHN0cmluZyxcbiAgc3RyaW5nSSxcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGNob2ljZSxcbiAgZm9sbG93ZWRCeSxcbiAgZm9sbG93ZWRCeU0sXG4gIGxvb2tBaGVhZCxcbiAgbm90RW1wdHksXG4gIG5vdEVtcHR5TSxcbiAgbm90Rm9sbG93ZWRCeSxcbiAgbm90Rm9sbG93ZWRCeU0sXG4gIG9wdGlvbmFsLFxuICBvclZhbHVlLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xuZXhwb3J0IHtcbiAgYW5kVGhlbkIsXG4gIGF0dGVtcHQsXG4gIGF0dGVtcHRNLFxuICBiZXR3ZWVuQixcbiAgYmxvY2tCLFxuICBjaGFpbkIsXG4gIGxhYmVsLFxuICBsZWZ0QixcbiAgbWFueVRpbGxCLFxuICBwaXBlQixcbiAgcmVwZWF0QixcbiAgcmlnaHRCLFxuICBzZXF1ZW5jZUIsXG59IGZyb20gJy4vY29tYmluYXRvcnMvYmFja3RyYWNraW5nJ1xuZXhwb3J0IHtcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIG50aCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvbWlzYydcbmV4cG9ydCB7XG4gIGFsd2F5cyxcbiAgYW5kVGhlbixcbiAgYXBwbHksXG4gIGNoYWluLFxuICBlbXB0eSxcbiAgbWFwLFxuICBvckVsc2UsXG59IGZyb20gJy4vY29tYmluYXRvcnMvcHJpbWl0aXZlJ1xuZXhwb3J0IHtcbiAgYXNzb2MxTCxcbiAgYXNzb2MxUixcbiAgYXNzb2NMLFxuICBhc3NvY1IsXG4gIGJldHdlZW4sXG4gIGJsb2NrLFxuICBsZWZ0LFxuICBtYW55LFxuICBtYW55MSxcbiAgbWFueVRpbGwsXG4gIHBpcGUsXG4gIHJlcGVhdCxcbiAgcmlnaHQsXG4gIHNlcEJ5LFxuICBzZXBCeTEsXG4gIHNlcEVuZEJ5LFxuICBzZXBFbmRCeTEsXG4gIHNlcXVlbmNlLFxuICBza2lwLFxuICBza2lwTWFueSxcbiAgc2tpcE1hbnkxLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgUGFyc2VyLFxuICBTdGF0dXMsXG4gIGZhaWwsXG4gIGZhaWx1cmUsXG4gIGZhdGFsLFxuICBtYXliZUZhdGFsLFxuICBvayxcbiAgcGFyc2UsXG4gIHJ1bixcbiAgc3RhdHVzLFxuICBzdWNjZWVkZWQsXG4gIHN1Y2Nlc3MsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY29tcG91bmQsXG4gIGV4cGVjdGVkLFxuICBmb3JtYXRFcnJvcnMsXG4gIGdlbmVyaWMsXG4gIGdldFBvc2l0aW9uLFxuICBtZXJnZSxcbiAgbmVzdGVkLFxuICBvdGhlcixcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbnk6ICdhbnkgY2hhcmFjdGVyJyxcbiAgYW55T2Y6IGFycmF5ID0+ICdhbnkgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxuICBjaGFyOiBjID0+IHF1b3RlKGMpLFxuICBjaGFySTogYyA9PiBxdW90ZShjKSxcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcbiAgZW9mOiAnZW5kIG9mIGlucHV0JyxcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcbiAgbGV0dGVyVTogJ2EgVW5pY29kZSBsZXR0ZXInLFxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbmV3bGluZTogJ2EgbmV3bGluZScsXG4gIG5ld2xpbmVVOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxuICBub25lT2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIG9jdGFsOiAnYW4gb2N0YWwgZGlnaXQnLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzVTogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzdHJpbmc6IHN0ciA9PiBxdW90ZShzdHIpLFxuICBzdHJpbmdJOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXBwZXJVOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55T2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55T2YoYXJyYXkpKSxcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBjaGFySTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJJKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsZXR0ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxldHRlclUpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXG4gIG5vbmVPZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lT2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZSksXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxuICBzcGFjZXNVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlc1UpLFxuICBzcGFjZXMxVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxVSksXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxuICBzdHJpbmc6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZyhzdHIpKSxcbiAgc3RyaW5nSTogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nSShzdHIpKSxcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxuICB1cHBlclU6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXJVKSxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFzc2VydENoYXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRTdHJpbmcsXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXG4gIG9yZENoYXJGb3JtYXR0ZXIsXG4gIG9yZEZuRm9ybWF0dGVyLFxuICBvcmRTdHJGb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgbmV4dENoYXIsIHR3aW4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGZlZWRzIGl0IHRvIGEgZnVuY3Rpb24sIGFuZFxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpc24ndCBhbnl0aGluZyBoZXJlIHRoYXQgY291bGRuJ3QgYmUgd3JpdHRlbiB3aXRoXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcbiAqIGFyZSBjZXJ0YWluIGFzc3VtcHRpb25zIHRoYXQgY2FuIGJlIG1hZGUgKHN1Y2ggYXMgdGhlIG51bWJlciBvZlxuICogY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgcmVhZCBmcm9tIHRoZSBpbnB1dCB2aWV3KSB0aGF0IGFsbG93IGl0IHRvXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuY29uc3QgQ2hhclBhcnNlciA9IGZuID0+IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWwoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gZm4obmV4dCkgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZmFpbChjdHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVXBvbiBmYWlsdXJlLCB0aGlzIHBhcnNlciBkb2VzIG5vdFxuICogY29uc3VtZSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICBhbHdheXMgZmFpbC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gYyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXInLCBjKVxuXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihDaGFyUGFyc2VyKGNoID0+IGMgPT09IGNoKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmNoYXIoYykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmRcbiAqIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC4gVGhpcyBkaWZmZXJzIGZyb20gYGNoYXJgIGluIHRoYXRcbiAqIHRoZSBjb21wYXJpc29uIGRvbmUgYnkgdGhpcyBwYXJzZXIgaXMgY2FzZS1pbnNlbnNpdGl2ZS4gVXBvbiBmYWlsdXJlLFxuICogdGhpcyBwYXJzZXIgZG9lcyBub3QgY29uc3VtZSBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICBhbHdheXMgZmFpbC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCAob3IgaXRzXG4gKiAgICAgb3RoZXItY2FzZWQgY291bnRlcnBhcnQpIGlzIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFySSA9IGMgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFySScsIGMpXG5cbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKENoYXJQYXJzZXIoXG4gICAgY2ggPT4gYy50b0xvd2VyQ2FzZSgpID09PSBjaC50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMuY2hhckkoYykpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSBmbiA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4pXG4gIHJldHVybiBDaGFyUGFyc2VyKGZuKShjdHgpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGVcbiAqIHByb3ZpZGVkIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyXG4gKiBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zXG4gKiBgZmFsc2VgLCB0aGlzIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQgYW5kIHNpZ25hbHMgYW4gZXJyb3JcbiAqIHdpdGggdGhlIHByb3ZpZGVkIG1lc3NhZ2UuXG4gKlxuICogYHNhdGlzZnlNKGZuLCBtZXNzYWdlKWAgaXMgYW4gb3B0aW1pemVkIGltcGxlbWVudGF0aW9uIG9mXG4gKiBgbGFiZWwoc2F0aXNmeShmbiksIG1lc3NhZ2UpYC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc2F0aXNmeU0gPSAoZm4sIG1lc3NhZ2UpID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ3NhdGlzZnlNJywgZm4sIG9yZEZuRm9ybWF0dGVyKCcxc3QnKSlcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc2F0aXNmeU0nLCBtZXNzYWdlLCBvcmRTdHJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWQobWVzc2FnZSkpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlclxuICogaXQgaXMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgc3RhcnQgYW5kIGVuZCBjaGFyYWN0ZXJzIChpbmNsdXNpdmUpLiBJZlxuICogaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsIGFuZCBpZiBpdCBpcyBub3QsXG4gKiB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzdGFydGAgYW5kIGBlbmRgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gSWYgdGhleSBhcmVcbiAqIG5vdCwgdGhlIGZ1bGwgc3RyaW5ncyBhcmUgY29tcGFyZWQgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXIsIHdoaWNoXG4gKiBtYXkgY2F1c2UgdW5leHBlY3RlZCBiZWhhdmlvci5cbiAqXG4gKiBcIkJldHdlZW5cIiBpcyBkZWZpbmVkIGFjY29yZGluZyB0byBjb2RlIHBvaW50cy4gVGhpcyBpcyBmaW5lIGluIG1vc3RcbiAqIGNhc2VzLCBidXQgaXQgY2FuIGdldCB3ZWlyZCB3aXRoIGhpZ2hlciBjb2RlIHBvaW50cy4gRm9yIGV4YW1wbGUsXG4gKiB0aGVyZSBpcyBubyBgaGAgaW4gdGhlIHNldCBvZiBtYXRoZW1hdGljYWwgbG93ZXJjYXNlIGl0YWxpYyBzeW1ib2xzLlxuICogVGhlIGBoYCB3b3VsZCBpbnN0ZWFkIGJlIHRoZSBQbGFuY2sncyBDb25zdGFudCBjaGFyYWN0ZXIsIHdoaWNoIGlzIGluXG4gKiBhIGNvbXBsZXRlbHkgZGlmZmVyZW50IHBhcnQgb2YgdGhlIFVuaWNvZGUgc3BlY3RydW0gYW5kIHRoZXJlZm9yZSBpc1xuICogbm90IFwiYmV0d2VlblwiIGBhYCBhbmQgYHpgLiBUYWtlIGNhcmUgd2l0aCBub24tYXNjaWkgY2hhcmFjdGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlXG4gKiAgICAgcmFuZ2Ugb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzLCBlKSA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgcywgb3JkQ2hhckZvcm1hdHRlcignMXN0JykpXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIGUsIG9yZENoYXJGb3JtYXR0ZXIoJzJuZCcpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49IHMgJiYgYyA8PSBlXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLnJhbmdlKHMsIGUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGlucHV0IGNoYXJhY3RlciBhbmQgdGhlbiBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnkgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsKGN0eCwgZXhwZWN0ZWRzLmFueSlcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIG9rKGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGF0IGNoYXJhY3RlciBkb2VzXG4gKiBub3QgZXhpc3QgKGkuZS4sIGlmIHRoZSBpbmRleCBpcyBhbHJlYWR5IGF0IHRoZSBlbmQgb2YgdGhlIGlucHV0KS5cbiAqIENvbnN1bWVzIG5vdGhpbmcgb24gZWl0aGVyIHN1Y2Nlc3Mgb3IgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGVvZiA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCA/IG9rKGN0eCwgbnVsbCkgOiBmYWlsKGN0eCwgZXhwZWN0ZWRzLmVvZilcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2hcbiAqIG9mIHRoZSBjaGFyYWN0ZXJzIGluIHRoZSBwcm92aWRlZCBzdHJpbmcgb3IgYXJyYXkgKGlmIHRoZSBhcnJheSBoYXNcbiAqIG11bHRpLWNoYXJhY3RlciBzdHJpbmdzLCB0aGV5IGNhbm5vdCBtYXRjaCBhbmQgd2lsbCBlc3NlbnRpYWxseSBiZVxuICogaWdub3JlZCkuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGUgcGFyc2VyXG4gKiB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY3MgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheSBvciBhXG4gKiAgICAgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIGJlIGEgbWVtYmVyIGZvclxuICogICAgIHRoZSBwYXJzZXIgdG8gc3VjY2VlZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIG9uZVxuICogICAgIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlPZiA9IGNzID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnYW55T2YnLCBjcylcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG4gICAgOiBmYWlsKGN0eCwgZXhwZWN0ZWRzLmFueU9mKGFycikpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoXG4gKiBvZiB0aGUgY2hhcmFjdGVycyBpbiB0aGUgcHJvdmlkZWQgc3RyaW5nIG9yIGFycmF5IChpZiB0aGUgYXJyYXkgaGFzXG4gKiBtdWx0aS1jaGFyYWN0ZXIgc3RyaW5ncywgdGhleSBjYW5ub3QgbWF0Y2ggYW5kIHdpbGwgZXNzZW50aWFsbHkgYmVcbiAqIGlnbm9yZWQpLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXG4gKiBwYXJzZXIgd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBub3QgYmUgYSBtZW1iZXJcbiAqICAgICBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub25lT2YgPSBjcyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVPZicsIGNzKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IGZhaWwoY3R4LCBleHBlY3RlZHMubm9uZU9mKGFycikpXG4gICAgOiBvayhjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgZGlnaXQuIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIFVuaWNvZGUgZGVjaW1hbCBkaWdpdDsgZm9yXG4gKiB0aGF0LCB1c2UgYHJlZ2V4KC9cXHB7TmR9LylgLiBUaGlzIHBhcnNlciBzdWNjZWVkcyBvbmx5IGZvciB0aGVcbiAqIGxpdGVyYWwgY2hhcmFjdGVycyBgMC05YC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5kaWdpdClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBoZXhhZGVjaW1hbCBkaWdpdC4gVGhpcyBwYXJzZXIgaXMgbm90IGNhc2Ugc2Vuc2l0aXZlLlxuICovXG5leHBvcnQgY29uc3QgaGV4ID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc5J1xuICAgIHx8IGMgPj0gJ2EnICYmIGMgPD0gJ2YnXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnRidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMuaGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICcwJyAmJiBjIDw9ICc3J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5vY3RhbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIFRoaXMgcGFyc2VyIGlzIG9ubHkgZm9yIEFTQ0lJIGNoYXJhY3RlcnM7IGB1bGV0dGVyYFxuICogaXMgYSBVbmljb2RlIGxldHRlciBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXIgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcHJlcCwgW2NwY3R4LCBjcHJlc11dID0gdHdpbihDaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3ByZXMuc3RhdHVzID09PSBPayA/IGNwcmVwIDogZmFpbChjcGN0eCwgZXhwZWN0ZWRzLmxldHRlcilcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gYWxwaGFudW1lcmljIGNoYXJhY3Rlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUlcbiAqIGNoYXJhY3RlcnM7IGB1YWxwaGFgIGlzIGEgVW5pY29kZSBhbHBoYW51bWVyaWMgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gICAgfHwgYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgICB8fCBjID49ICcwJyAmJiBjIDw9ICc5J1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy5hbHBoYSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gdXBwZXJjYXNlIGxldHRlci4gVGhpcyBwYXJzZXIgaXMgb25seSBmb3IgQVNDSUkgY2hhcmFjdGVycztcbiAqIGB1dXBwZXJgIGlzIGEgVW5pY29kZSB1cHBlcmNhc2UgbGV0dGVyIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3ByZXAsIFtjcGN0eCwgY3ByZXNdXSA9IHR3aW4oQ2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNwcmVzLnN0YXR1cyA9PT0gT2sgPyBjcHJlcCA6IGZhaWwoY3BjdHgsIGV4cGVjdGVkcy51cHBlcilcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBUaGlzIHBhcnNlciBpcyBvbmx5IGZvciBBU0NJSSBjaGFyYWN0ZXJzO1xuICogYHVsb3dlcmAgaXMgYSBVbmljb2RlIGxldHRlciBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlciA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW2NwcmVwLCBbY3BjdHgsIGNwcmVzXV0gPSB0d2luKENoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcHJlcy5zdGF0dXMgPT09IE9rID8gY3ByZXAgOiBmYWlsKGNwY3R4LCBleHBlY3RlZHMubG93ZXIpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWwsIGZhdGFsLCBQYXJzZXIgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGdlbmVyaWMgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWxOb3JtYWxseSA9IG1zZyA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbE5vcm1hbGx5JywgbXNnKVxuICByZXR1cm4gZmFpbChjdHgsIGdlbmVyaWMobXNnKSlcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZVxuICogZ2VuZXJpYyBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYVxuICogZmF0YWwgZXJyb3IsIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbXNnIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmFpbEZhdGFsbHkgPSBtc2cgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2ZhaWxGYXRhbGx5JywgbXNnKVxuICByZXR1cm4gZmF0YWwoY3R4LCBnZW5lcmljKG1zZykpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbCwgb2ssIFBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBzdHJpbmdUb1ZpZXcsIHR3aW4sIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gQWxsIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIHVzZWQgaW4gdGhlIGRlcml2ZWQgcmVnZXggcGFyc2Vycy5cbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cblxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBvciBudW1iZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXBwZXIgPSAvXig/OlxccHtVcHBlcmNhc2V9fFxccHtMdH0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3Vcbi8qKiBNYXRjaGVzIGEgc2luZ2xlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXNwYWNlID0gL14oPzpcXHJcXG58XFxwe1doaXRlX1NwYWNlfSkvdVxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzMSA9IC9eW1xcclxcblxcdCBdKy9cbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxuLyoqIE1hdGNoZXMgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChcXHIsIFxcbiwgb3IgXFxyXFxuKS4gKi9cbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXG5jb25zdCByZVVuZXdsaW5lID0gL14oPzpcXHJcXG58W1xcclxcblxcdTAwODVcXHUyMDI4XFx1MjAyOV0pL3VcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IGFuZCBtYXRjaGVzXG4gKiBpdCBhcyBmYXIgYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICpcbiAqIEl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcmVnZXggYmVnaW5zIHdpdGggYSBgXmAgLiBUaGUgYGdgIGZsYWcgaXNcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcbiAqIGN1cnJlbnQgcG9pbnRlciBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXG4gKiAgICAgaW5wdXQgdGV4dCBzdGFydGluZyBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmNvbnN0IFJlZ2V4UGFyc2VyID0gcmUgPT4gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcblxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXG4gIHJldHVybiBtYXRjaFxuICAgID8gb2soY3R4LCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXG4gICAgOiBmYWlsKGN0eClcbn0pXG5cbi8qKlxuICogQ3JlYXRlcyBhIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyXG4gKiBleHByZXNzaW9uIHRvIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhXG4gKiBtYXRjaCwgYW55IG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dFxuICogaXMgY29uc3VtZWQgdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvXG4gKiAgICAgYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXG5cbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlZ2V4KShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbChycGN0eCwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsZXR0ZXIuIEEgbGV0dGVyIGZvciB0aGlzIHB1cnBvc2UgaXMgYW55IGNoYXJhY3RlciB3aXRoIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihSZWdleFBhcnNlcihyZUxldHRlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5sZXR0ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbHBoYW51bWVyaWMuIEEgY2hhcmFjdGVyIGlzIGFscGhhbnVtZXJpYyBpZiBpdCBoYXMgZWl0aGVyIHRoZVxuICogVW5pY29kZSBgQWxwaGFiZXRpY2AgcHJvcGVydHkgb3IgdGhlIFVuaWNvZGUgYE51bWJlcmAgcHJvcGVydHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlQWxwaGEpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuYWxwaGFVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXG4gKiB1cHBlcmNhc2UgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBVcHBlcmNhc2VgIHByb3BlcnR5IGFuZCBpcyB0aXRsZWNhc2VcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxuICovXG5leHBvcnQgY29uc3QgdXBwZXJVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihSZWdleFBhcnNlcihyZVVwcGVyKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbChycGN0eCwgZXhwZWN0ZWRzLnVwcGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxuICogVW5pY29kZSBgTG93ZXJjYXNlYCBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4oUmVnZXhQYXJzZXIocmVMb3dlcikoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5sb3dlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSB0d2luKFJlZ2V4UGFyc2VyKHJlU3BhY2UpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMuc3BhY2UpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihSZWdleFBhcnNlcihyZVVzcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5zcGFjZVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgX10gPSBSZWdleFBhcnNlcihyZVNwYWNlcykoY3R4KVxuICByZXR1cm4gb2socnBjdHgsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvXG4gKiB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLCB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGVcbiAqIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90XG4gKiBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnBjdHgsIF9dID0gUmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBvayhycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMxID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgcnByZXNdID0gUmVnZXhQYXJzZXIocmVTcGFjZXMxKShjdHgpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gb2socnBjdHgsIG51bGwpIDogZmFpbChycGN0eCwgZXhwZWN0ZWRzLnNwYWNlczEpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbCBvbmx5IGZhaWwgaWYgdGhlcmUgaXNcbiAqIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT24gc3VjY2VzcywgaXQgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBQYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSBSZWdleFBhcnNlcihyZVVzcGFjZXMxKShjdHgpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBvayhycGN0eCwgbnVsbClcbiAgICA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgdGhpcyBwYXJzZXIgcmVjb2duaXplcyBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmdcbiAqIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gdHdpbihSZWdleFBhcnNlcihyZU5ld2xpbmUpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsKHJwY3R4LCBleHBlY3RlZHMubmV3bGluZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IFBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IHR3aW4oUmVnZXhQYXJzZXIocmVVbmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWwocnBjdHgsIGV4cGVjdGVkcy5uZXdsaW5lVSlcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBhc3NlcnROdW1iZXIsIGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsLCBvaywgUGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGNoYXJMZW5ndGgsIG5leHRDaGFycywgdHdpbiwgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCBhIHBhcnRpY3VsYXIgc3RyaW5nIGZyb20gdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSB0ZXh0LiBBIHN0cmluZyBvZiBjaGFyYWN0ZXJzIGVxdWFsIGluIGxlbmd0aFxuICogdG8gYGxlbmd0aGAgaXMgcmVhZCBmcm9tIGlucHV0IGFuZCBwYXNzZWQgdG8gYGZuYDsgaWYgYGZuYCByZXR1cm5zXG4gKiBgdHJ1ZWAsIHRoZW4gdGhlIHBhcnNlciBzdWNjZWVkcy5cbiAqXG4gKiBUaGlzIHBhcnNlciBhbHdheXMgZmFpbHMgaWYgdGhlcmUgYXJlIGxlc3MgdGhhbiBgbGVuZ3RoYCBjaGFyYWN0ZXJzXG4gKiBsZWZ0IGluIHRoZSBpbnB1dC4gSXQgd2lsbCBhbHdheXMgcGFzcyBpZiBgbGVuZ3RoYCBpcyAwLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRoYXQgdGhlIHBhcnNlclxuICogICAgIHNob3VsZCByZWFkLlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOiBib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSByZWFkXG4gKiAgICAgc3RyaW5nIGlzIHBhc3NlZC4gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcmVhZCBzdHJpbmcgcGFzc2VzXG4gKiAgICAgdGhlIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqL1xuY29uc3QgU3RyaW5nUGFyc2VyID0gKGxlbmd0aCwgZm4pID0+IFBhcnNlcihjdHggPT4ge1xuICBpZiAobGVuZ3RoIDwgMSkgcmV0dXJuIG9rKGN0eCwgJycpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsKGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGZhaWwoY3R4KVxuICAgIDogb2soY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGVcbiAqIGlucHV0IGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhlIHN0cmluZyBtYXRjaFxuICogbXVzdCBiZSBleGFjdCAoaXQgaXMgY2FzZS1zZW5zaXRpdmUpLCBhbmQgYWxsIFVURi04IGNoYXJhY3RlcnMgYXJlXG4gKiByZWNvZ25pemVkIHByb3Blcmx5LlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZyA9IHN0ciA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnc3RyaW5nJywgc3RyKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gdHdpbihTdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIgPT09IGNoYXJzLFxuICApKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsKHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nKHN0cikpXG59KVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZVxuICogaW5wdXQgYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGlzIG1hdGNoIGlzICpub3QqXG4gKiBjYXNlLXNlbnNpdGl2ZS4gSG93ZXZlciwgdGhlcmUgaXMgYSBsaW1pdGF0aW9uIGJhc2VkIG9uIHRoZVxuICogSmF2YVNjcmlwdCB1bmRlcnN0YW5kaW5nIG9mIHBhaXJzIG9mIHVwcGVyLSBhbmQgbG93ZXJjYXNlIGxldHRlcnMuIEl0XG4gKiBjYW5ub3QgYmUgYXNzdW1lZCB0aGF0IDMtIGFuZCA0LWJ5dGUgY2hhcmFjdGVycyB3aWxsIHJlY29nbml6ZSBjYXNlLVxuICogaW5zZW5zaXRpdmUgY291bnRlcnBhcnRzLlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpbmdJID0gc3RyID0+IFBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmdJJywgc3RyKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gdHdpbihTdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzdHIpLCBjaGFycyA9PiBzdHIudG9Mb3dlckNhc2UoKSA9PT0gY2hhcnMudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbChzcGN0eCwgZXhwZWN0ZWRzLnN0cmluZ0koc3RyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB0aGUgcmVtYWluZGVyIG9mIHRoZSBpbnB1dCB0ZXh0IGFuZCByZXN1bHRzIGluXG4gKiB0aGF0IHRleHQuIFN1Y2NlZWRzIGlmIGFscmVhZHkgYXQgRU9GLCByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgYWxsID0gUGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB3aWR0aCA9IHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4XG4gIHJldHVybiBvayhjdHgsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBDcmVhdGVzIGEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjZXJ0YWluIG51bWJlciBvZiBjaGFyYWN0ZXJzLCB1c2luZ1xuICogdGhlbSAoYXMgYSBzdHJpbmcpIGFzIGl0cyByZXN1bHQuIFRoZSBwYXJzZXIgd2lsbCBmYWlsIGlmIHRoZXJlIGFyZVxuICogbm90IHRoYXQgbWFueSBjaGFyYWN0ZXJzIGxlZnQgdG8gcmVhZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gcmVhZC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhhdCBtYW55IGNoYXJhY3RlcnMgYW5kIGpvaW5zXG4gKiAgICAgdGhlbSBpbnRvIGEgc3RyaW5nIGZvciBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgYW55U3RyaW5nID0gbiA9PiBQYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignYW55U3RyaW5nJywgbilcblxuICBjb25zdCBbc3ByZXAsIFtzcGN0eCwgc3ByZXNdXSA9IHR3aW4oU3RyaW5nUGFyc2VyKG4sICgpID0+IHRydWUpKGN0eCkpXG4gIHJldHVybiBzcHJlcy5zdGF0dXMgPT09IE9rID8gc3ByZXAgOiBmYWlsKHNwY3R4LCBleHBlY3RlZHMuYW55U3RyaW5nKG4pKVxufSlcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBQYXJzZXIgfSBmcm9tICcuL2NvcmUnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5Db250ZXh0fSBDb250ZXh0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVzdWx0fSBSZXN1bHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXBseX0gUmVwbHkgKi9cblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVUNTLTIgc3RyaW5nIGludG8gYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzLlxuICovXG5leHBvcnQgY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMgaW50byBhIFVDUy0yIHN0cmluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoKVxuXG4vKipcbiAqIEFuIGl0ZXJhdG9yIHRoYXQgY292ZXJzIGEgcmFuZ2UgZnJvbSBhIHN0YXJ0aW5nIHZhbHVlIHRvIGFuIGVuZGluZ1xuICogdmFsdWUsIHN0ZXBwaW5nIGJ5IGEgY2VydGFpbiB2YWx1ZSBiZXR3ZWVuIGVhY2guXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGFydD0wXSBUaGUgZmlyc3QgbnVtYmVyIG9mIHRoZSByYW5nZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgVGhlIGxhc3QgbnVtYmVyIG9mIHRoZSByYW5nZS4gQnkgZGVmYXVsdCB0aGlzXG4gKiAgICAgbnVtYmVyIGZvcm1zIHRoZSB1cHBlciBib3VuZCBvZiB0aGUgcmFuZ2Ugd2l0aG91dCBiZWluZyBpbmNsdWRlZFxuICogICAgIGluIGl0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtzdGVwPTFdIFRoZSBudW1iZXIgdG8gaW5jcmVhc2UgdGhlIHlpZWxkZWQgdmFsdWUgYnlcbiAqICAgICBkdXJpbmcgZWFjaCBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtpbmNsdXNpdmU9ZmFsc2VdIERldGVybWluZXMgd2hldGhlciBgZW5kYCBzaG91bGQgYmVcbiAqICAgICBpbmNsdWRlZCBhcyBwYXJ0IG9mIHRoZSByYW5nZS5cbiAqIEB5aWVsZHMge251bWJlcn0gVGhlIHZhbHVlcyB0aGF0IG1ha2UgdXAgdGhlIHJhbmdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gKnJhbmdlKHN0YXJ0LCBlbmQsIHN0ZXAsIGluY2x1c2l2ZSkge1xuICBjb25zdCBzID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBzdGFydCA6IDBcbiAgY29uc3QgZSA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gZW5kIDogc3RhcnRcbiAgY29uc3QgcCA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJyA/IHN0ZXAgPT09IDAgPyAxIDogTWF0aC5hYnMoc3RlcCkgOiAxXG4gIGNvbnN0IGkgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcidcbiAgICA/ICEhaW5jbHVzaXZlIDogdHlwZW9mIGVuZCA9PT0gJ251bWJlcidcbiAgICAgID8gISFzdGVwIDogISFlbmRcblxuICBjb25zdCBmb3J3YXJkID0gcyA8IGVcbiAgbGV0IGN1cnJlbnQgPSBzXG5cbiAgY29uc3QgZmluaXNoZWQgPSAoKSA9PiB7XG4gICAgaWYgKGZvcndhcmQpIHtcbiAgICAgIHJldHVybiBpID8gY3VycmVudCA+IGUgOiBjdXJyZW50ID49IGVcbiAgICB9XG4gICAgcmV0dXJuIGkgPyBjdXJyZW50IDwgZSA6IGN1cnJlbnQgPD0gZVxuICB9XG5cbiAgLyogZXNsaW50LWRpc2FibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xuICB3aGlsZSAoIWZpbmlzaGVkKCkpIHtcbiAgICB5aWVsZCBjdXJyZW50XG4gICAgY3VycmVudCA9IGZvcndhcmQgPyBjdXJyZW50ICsgcCA6IGN1cnJlbnQgLSBwXG4gIH1cbiAgLyogZXNsaW50LWVuYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG59XG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBwYWlycyB2YWx1ZXMgaW4gYW4gaXRlcmFibGUgd2l0aCB0aGVpciBpbmRleGVzIGluIGFcbiAqIHNlcmllcyBvZiB0d28tZWxlbWVudCBhcnJheXMuIFRoZSBmaXJzdCBhcnJheSBlbGVtZW50IGlzIHRoZSBpbmRleDtcbiAqIHRoZSBzZWNvbmQgaXMgdGhlIHZhbHVlIGZyb20gdGhlIGl0ZXJhYmxlLlxuICpcbiAqIEZvciBhcnJheXMsIHRoaXMgY2FuIGJlIGRvbmUgd2l0aCBgYXJyYXkuZW50cmllcygpYCwgd2hpY2ggcHJvZHVjZXNcbiAqIHR3by1lbGVtZW50IGFycmF5cyBpbiB0aGUgc2FtZSBmb3JtYXQuIEhvd2V2ZXIsIHRoaXMgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbiB3aWxsIHdvcmsgd2l0aCBhbnkga2luZCBvZiBvYmplY3QgaW1wbGVtZW50aW5nIHRoZVxuICogYEl0ZXJhYmxlYCBpbnRlcmZhY2UuXG4gKlxuICogQHBhcmFtIHtJdGVyYWJsZX0gaXRlcmFibGUgQW4gaXRlcmFibGUgb2JqZWN0IHdob3NlIGVsZW1lbnRzIHdpbGxcbiAqICAgICBiZSBwYWlyZWQgd2l0aCB0aGVpciBpbmRleGVzLlxuICogQHlpZWxkcyB7W251bWJlciwgKl19IFRoZSBpdGVyYWJsZSdzIHZhbHVlcywgcGFpcmVkIHdpdGggdGhlaXJcbiAqICAgICBpbmRleGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gKmVudW1lcmF0ZShpdGVyYWJsZSkge1xuICBjb25zdCBpdGVyYXRvciA9IGl0ZXJhYmxlW1N5bWJvbC5pdGVyYXRvcl0oKVxuICBsZXQgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG4gIGxldCBpbmRleCA9IDBcblxuICB3aGlsZSAoIXJlc3VsdC5kb25lKSB7XG4gICAgeWllbGQgW2luZGV4KyssIHJlc3VsdC52YWx1ZV1cbiAgICByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzb3J0IG9mIGVtdWxhdGVzICphcy1wYXR0ZXJucyogaW4gYSBsaW1pdGVkIHdheSBpbiBKYXZhU2NyaXB0LlxuICogSW4gbGFuZ3VhZ2VzIGxpa2UgSGFza2VsbCBhbmQgTUwsIHdoZW4gcGF0dGVybiBtYXRjaGluZyBpcyBkb25lLFxuICogdGhlcmUgaXMgYSBjb25zdHJ1Y3QgdG8gYmUgYWJsZSB0byByZXRhaW4gYSBsYXJnZXIgcGFydCBvZiB0aGVcbiAqIGRlc3RydWN0dXJlZCBwYXR0ZXJuIHdoaWxlIGFsc28gYnJlYWtpbmcgaXQgZG93biBmdXJ0aGVyLiBJbiBIYXNrZWxsLFxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIHdpbGwgYXNzaWduIGAxYCB0byBgaGVhZGAsIGFuZCBgWzIsIDMsIDQsIDVdYCB0byBgdGFpbGAuIFRoaXMgY2FuIGJlXG4gKiBkb25lIGluIEphdmFTY3JpcHQgYXMgd2VsbCwgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtoZWFkLCAuLi50YWlsXSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogSG93ZXZlciwgSGFza2VsbCBjYW4gZ28gZmFydGhlcjogaXQgY2FuIGFsc28gYXNzaWduIHRoZSBlbnRpcmUgbGlzdFxuICogYXMgYSB3aG9sZSB0byBhbm90aGVyIHZhcmlhYmxlIHdoaWxlIHN0aWxsIGFzc2lnbmluZyBpdHMgZWxlbWVudHMgYXNcbiAqIGFib3ZlLiBJdCdzIGRvbmUgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIGxpc3QgQCAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBUaGlzIHdpbGwsIGluIGFkZGl0aW9uIHRvIHRoZSBhc3NpZ25tZW50cyBhYm92ZSwgYXNzaWduIGBbMSwgMiwgMywgNCxcbiAqIDVdYCB0byBgbGlzdGAuIFRoZSBgQGAgc2lnbiBpcyByZWFkICphcyosIGFuZCB0aGlzIGNvbnN0cnVjdCBpc1xuICogY2FsbGVkIGFuICphcy1wYXR0ZXJuKiAocGVyaGFwcyBiZWNhdXNlIHRoZSBNTCB3YXkgb2YgZG9pbmcgaXQgdXNlc1xuICogdGhlIGBhc2Aga2V5d29yZCBpbnN0ZWFkIG9mIHRoZSBgQGAgc3ltYm9sKS5cbiAqXG4gKiBUaGVyZSBpcyBubyBmYWNpbGl0eSB0byBkbyB0aGlzIGluIEphdmFTY3JpcHQuIEJ1dCB0aGVyZSBhcmUgbWFueVxuICogcGxhY2VzIGluIHRoaXMgbGlicmFyeSB3aGVyZSBhIGBSZXBseWAgaXMgZGVzY3R1cmN0dXJlZCBpbnRvIGl0c1xuICogYENvbnRleHRgIGFuZCBgUmVzdWx0YCBlbGVtZW50cywgeWV0IHRoZXJlIGlzIGEgbmVlZCB0byBjb25kaXRpb25hbGx5XG4gKiB1c2UgdGhlIGVudGlyZSBgUmVwbHlgIGFzIHdlbGwgKG5vcm1hbGx5IHRvIHJldHVybiBpdCBpZiBzb21lXG4gKiBjb25kaXRpb24gaXMgbWV0KS4gUmF0aGVyIHRoYW4gY3JlYXRlIGEgbmV3IGBSZXBseWAgZnJvbSB0aGVzZSBwYXJ0cyxcbiAqIGB0d2luYCBjYW4gYmUgdXNlZCB0byBkdXBsaWNhdGUgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGBSZXBseWAuIFRoZW5cbiAqIG9ubHkgKm9uZSogb2YgdGhlIGR1cGxpY2F0ZSByZWZlcmVuY2VzIGNhbiBiZSBkZXN0cnVjdHVyZWQsIHdoaWxlIHRoZVxuICogb3RoZXIgb25lIGlzIHJldGFpbmVkIGFzIGEgd2hvbGUuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHBhcnNlcihjdHgpKVxuICogYGBgXG4gKlxuICogQXMtcGF0dGVybnMgY2FuIGJlIHVzZWQgb24gcGllY2VzIG9mIGEgcGF0dGVybiBpbnN0ZWFkIG9mIHRoZSBlbnRpcmVcbiAqIHBhdHRlcm4sIGFuZCBgdHdpbmAgY2Fubm90IGRvIHRoYXQuIEJ1dCBpdCBzZXJ2ZXMgZm9yIHdoYXQgaXMgbmVlZGVkXG4gKiBpbiBLZXNzZWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gdmFsdWUgQSByZXBseSB0aGF0IG5lZWRzIHRvIGJlIGRlc3RydWN0dXJlZCB3aGlsZVxuICogICAgIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSB3aG9sZS5cbiAqIEByZXR1cm5zIHtbUmVwbHksIFJlcGx5XX0gQW4gYXJyYXkgY29udGFpbmluZyB0d28gY29waWVzIG9mIHRoZVxuICogICAgIHJlcGx5LiBPbmUgY2FuIGJlIGRlc3RydWN0dXJlZCB3aGlsZSB0aGUgb3RoZXIgaXMgcmV0YWluZWQgd2hvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0d2luKHZhbHVlKSB7XG4gIHJldHVybiBbdmFsdWUsIHZhbHVlXVxufVxuXG4vKipcbiAqIENvbW1hLXNlcGFyYXRlcyAoYXMgbmVlZGVkKSB0aGUgc3RyaW5ncyBpbiB0aGUgcHJvdmlkZWQgYXJyYXkuIElmXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxuICogaGFzIG9ubHkgb25lIGVsZW1lbnQsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkLiBJZiB0aGUgYXJyYXkgaGFzXG4gKiB0d28gZWxlbWVudHMsIHRoZXkgd2lsbCBiZSBqb2luZWQgd2l0aCAnIG9yICcgYmV0d2VlbiB0aGVtLiBJZiB0aGVcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXG4gKiBhbiBhZGRpdGlvbmFsICdvcicgYmV0d2VlbiB0aGUgbGFzdCB0d28gZWxlbWVudHMgKE94Zm9yZCBjb21tYVxuICogc3R5bGUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG1lc3NhZ2VzIFRoZSBzdHJpbmdzIHRoYXQgbmVlZCB0byBiZSBqb2luZWQgaW50b1xuICogICAgIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYVNlcGFyYXRlKG1lc3NhZ2VzKSB7XG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gJydcbiAgICBjYXNlIDE6IHJldHVybiBtZXNzYWdlc1swXVxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBtZXNzYWdlcy5zbGljZSgpXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxuICAgICAgcmV0dXJuIGAke21zZ3Muam9pbignLCAnKX0sIG9yICR7bGFzdH1gXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXVnbWVudHMgYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRcbiAqIGNyZWF0ZWQgYW4gYXJiaXRyYXJ5IG9iamVjdC4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gaXMgYXNzaWduZWQgYW5cbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxuICogcGFzc2luZyBpbiB0aGUgYHByb3BgIGFyZ3VtZW50KSB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIG9iamVjdCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZhY3RvcnkgY3JlYXRlZCBpdCBvciBgZmFsc2VgIGlmIGl0XG4gKiBkaWQgbm90LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBhdWdtZW50ZWQgd2l0aFxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IFtwcm9wPSdjcmVhdGVkJ10gVGhlIHByb3BlcnR5IHRoYXQgd2lsbCBiZVxuICogICAgIGFkZGVkIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjayhmbiwgcHJvcCA9ICdjcmVhdGVkJykge1xuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxuXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBmbiguLi5hcmdzKVxuICAgICAgdHJhY2tlZC5hZGQoY3JlYXRlZClcbiAgICAgIHJldHVybiBjcmVhdGVkXG4gICAgfSxcbiAgICBwcm9wLFxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzdHJpbmcgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGNvbnZlcnQgaW50byBhbiBvcmRpbmFsLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cbiAgY29uc3QgdiA9IG4gJSAxMDBcbiAgcmV0dXJuIG4gKyAoc3VmZml4ZXNbKHYgLSAyMCkgJSAxMF0gPz8gc3VmZml4ZXNbdl0gPz8gc3VmZml4ZXNbMF0pXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIFBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcHByb3ByaWF0ZSBpbmRlZmluaXRlIGFydGljbGUgKCdhJyBvciAnYW4nKSB0byBhIHdvcmQgYmFzZWRcbiAqIG9uIGl0cyBmaXJzdCBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHByZXBlbmQgYW4gYXJ0aWNsZSB0by5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCB0aGUgcHJlcGVuZGVkIGFydGljbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xpZnkoc3RyKSB7XG4gIHJldHVybiAnYWVpb3VBRUlPVScuaW5jbHVkZXMoc3RyWzBdKSA/IGBhbiAke3N0cn1gIDogYGEgJHtzdHJ9YFxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==