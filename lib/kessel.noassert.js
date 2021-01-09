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
/*! exports provided: formatter, argFormatter, argCharFormatter, argFnFormatter, argGenFormatter, argNumFormatter, argParFormatter, argStrFormatter, argStrArrFormatter, ordFormatter, ordCharFormatter, ordFnFormatter, ordNumFormatter, ordParFormatter, ordStrFormatter, assertChar, assertFunction, assertGenFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser, assertParsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatter", function() { return formatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argFormatter", function() { return argFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argCharFormatter", function() { return argCharFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argFnFormatter", function() { return argFnFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argGenFormatter", function() { return argGenFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argNumFormatter", function() { return argNumFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argParFormatter", function() { return argParFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argStrFormatter", function() { return argStrFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argStrArrFormatter", function() { return argStrArrFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFormatter", function() { return ordFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordCharFormatter", function() { return ordCharFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordFnFormatter", function() { return ordFnFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordNumFormatter", function() { return ordNumFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordParFormatter", function() { return ordParFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordStrFormatter", function() { return ordStrFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertChar", function() { return assertChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFunction", function() { return assertFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertGenFunction", function() { return assertGenFunction; });
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


/**
 * Generates a formatter function out of a type.
 *
 * @param {string} type The type that the value should be.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */

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
/**
 * Generates a formatter function out of a type and a position.
 *
 * @param {string} type The type that the value should be.
 * @param {string} [order] The position of the value within an argument
 *     list.
 * @param {boolean} [multiple] Indicates whether there is more than one
 *     argument in the function whose error is being formatted. If this
 *     is false, the `order` will be ignored.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */

const argFormatter = (type, order = 1, multiple = false) => value => `expected ${multiple ? `${Object(_util__WEBPACK_IMPORTED_MODULE_1__["wordinal"])(order)} ` : ''}argument to be ${type}; found ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value)}`;
const argCharFormatter = (order = 1, multiple = false) => argFormatter('a one-character string', order, multiple);
const argFnFormatter = (order = 1, multiple = false) => argFormatter('a function', order, multiple);
const argGenFormatter = (order = 1, multiple = false) => argFormatter('a generator function', order, multiple);
const argNumFormatter = (order = 1, multiple = false) => argFormatter('a number', order, multiple);
const argParFormatter = (order = 1, multiple = false) => argFormatter('a parser', order, multiple);
const argStrFormatter = (order = 1, multiple = false) => argFormatter('a string', order, multiple);
const argStrArrFormatter = (order = 1, multiple = false) => argFormatter('a string or an array of characters', order, multiple);
/**
 * Generates a formatter function out of a type and a position.
 *
 * @param {string} type The type that the value should be.
 * @param {string} ord The position of the value within aan argument
 *     list, a block of code, etc.
 * @returns {function(*):string} A function that accepts a value of any
 *     type and returns a string incorporating that value.
 */

const ordFormatter = (type, ord) => value => `expected ${ord} argument to be ${type}; found ${Object(_util__WEBPACK_IMPORTED_MODULE_1__["stringify"])(value)}`;
const ordCharFormatter = ord => ordFormatter('a one-character string', ord);
const ordFnFormatter = ord => ordFormatter('a function', ord);
const ordNumFormatter = ord => ordFormatter('a number', ord);
const ordParFormatter = ord => ordFormatter('a parser', ord);
const ordStrFormatter = ord => ordFormatter('a string', ord);
/**
 * @param {string} name
 * @param {*} value
 * @param {function(string):string} formatter
 */

function failAssert(name, value, formatter) {
  throw new Error(`[${name}]: ${formatter(value)}`);
}
/**
 * Asserts that a value is a single-character string.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */


function assertChar(name, value, formatter = charFormatter) {
  if (typeof value !== 'string' || Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(value) !== 1) {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that a value is a non-parser function.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertFunction(name, value, formatter = fnFormatter) {
  if (typeof value !== 'function' || _core__WEBPACK_IMPORTED_MODULE_0__["parser"].created(value)) {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that a value is a generator function.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertGenFunction(name, value, formatter = genFormatter) {
  if (Object.prototype.toString.call(value) !== '[object GeneratorFunction]') {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that a value is a string.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertString(name, value, formatter = strFormatter) {
  if (typeof value !== 'string') failAssert(name, value, formatter);
}
/**
 * Asserts that a value is an array.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertArray(name, value, formatter = arrFormatter) {
  if (!Array.isArray(value)) failAssert(name, value, formatter);
}
/**
 * Asserts that a value is a string or an array of single-character
 * strings.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertStringOrArray(name, value, formatter = strArrFormatter) {
  if (!(Array.isArray(value) && value.every(c => typeof c === 'string' && Object(_util__WEBPACK_IMPORTED_MODULE_1__["charLength"])(c) === 1) || typeof value === 'string')) {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that a value is a string or a regular expression.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertStringOrRegExp(name, value, formatter = strRegFormtter) {
  if (typeof value !== 'string' && Object.prototype.toString.call(value) !== '[object RegExp]') {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that a value is a number.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertNumber(name, value, formatter = numFormatter) {
  if (typeof value !== 'number') failAssert(name, value, formatter);
}
/**
 * Asserts that a value is a parser.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*} value The value being checked.
 * @param {function(*):string} [formatter] A function that accepts a
 *     value of any type and returns a string incorporating that value.
 */

function assertParser(name, value, formatter = parFormatter) {
  if (typeof value !== 'function' || !_core__WEBPACK_IMPORTED_MODULE_0__["parser"].created(value)) {
    failAssert(name, value, formatter);
  }
}
/**
 * Asserts that an array contains only parsers.
 *
 * @param {string} name The name of the function making the assertion.
 * @param {*[]} values The array of values being checked.
 */

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
/*! exports provided: alt, opt, def, peek, empty, not */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return alt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return opt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "def", function() { return def; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return peek; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "not", function() { return not; });
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
 * A parser that executes parsers one at a time until one succeeds, one
 * fails fatally, or all fail. On failure (fatal or otherwise), error
 * messages from all parsers that had failed are merged into `alt`'s
 * error messages.
 *
 * @param {...Parser|string} args The parsers to execute, one at a time,
 *     until one succeeds, one fails fatally, or all fail. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message in place of the collected expected error messages
 *     of the constituent parsers.
 * @returns {Parser} A parser that applies its contained parsers until
 *     one succeeds.
 */

const alt = (...args) => {
  const ps = args.slice();
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const hasM = m != null;
     false && false;
    let errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : [];

    for (const p of ps) {
      const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
      if (pres.status === Ok) return prep;
      if (!hasM) errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors);
      if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, errors);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, errors);
  });
};
/**
 * A parser that executes the supplied parser, succeeding whether it
 * fails or not but only consuming input if it succeeds. This parser
 * will only fail if its supplied parser fails fatally.
 *
 * @param {Parser} p The parser for optional content to be executed and
 *     then have its result ignored.
 * @param {string} [m] The expected error message to use if `p` fails.
 * @return {Parser} A parser that succeeds with no result unless its
 *     contained parser fails fatally. This parser consumes text only if
 *     its contained parser succeeds.
 */

const opt = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status === Ok) return prep;
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors;
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, errors); // If the optional parser fails, we add the error message even though
  // the end result of `opt` is success. This lets sequencing parsers
  // add the opt parser's expected to error messages if a later parser
  // in the sequence fails.

  const reply = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null);
  reply[1].errors = errors;
  return reply;
});
/**
 * A parser that succeeds either with the supplied parser's successful
 * result or else (if that parser fails) the supplied default value `x`.
 * This parser only fails if its contained parser fails fatally.
 *
 * @param {Parser} p A parser whose result will be the created parser's
 *     result if it succeeds.
 * @param {*} x A value which will be the created parser's result if the
 *     supplied parser fails.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which results in either its contained
 *     parser's successful result or the provided value.
 */

const def = (p, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status === Ok) return prep;
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
});
/**
 * A parser that executes the supplied parser without consuming input.
 * Success or failure are still returned, though fatal failure is
 * converted to non-fatal due to the fact that no input is consumed.
 *
 * If the consituent parser fails fatally, a nested error message will
 * be created to track the actual error cause before this parser
 * automatically backtracks.
 *
 * @param {Parser} p The parser to be executed.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies `p` and succeeds or fails
 *     with it, but which consumes no input either way.
 */

const peek = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);
  if (pres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, pres.value, index);

  if (pres.status === Fail) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors), index);
  } // This parser implements automatic backtracking, so if its parser
  // fails fatally, it has to track that through a nested error


  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nerror"])(m, pctx, pres.errors), index);
});
/**
 * A parser that succeeds if the provided parser succeeds but does not
 * consume input. If the parser succeeds any other way or fails, this
 * parser transparently passes that result along.
 *
 * This parser, by default, produces no error message on failure if that
 * failure was caused by a success with input consumed. An error message
 * can be specified by passing the expected message in as the optional
 * second parameter.
 *
 * @param {Parser} p The parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which fails if `p` passes but consumes
 *     input, or otherwise passes the result through.
 */

const empty = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);
  if (pres.status === Ok && pctx.index === index) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null);
  const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
  return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
});
/**
 * A parser that succeeds if the supplied parser fails, but which does
 * not consume input. If `p` succeeds, this parser fails non-fatally.
 *
 * This parser, by default, produces no error messages on failure. An
 * error message can be specified by passing the expected message in as
 * the optional second parameter.
 *
 * @param {Parser} p The parser to apply.
 * @param {string} [m] The expected error message to use if `p`
 *     succeeds.
 * @returns {Parser} A parser that applies `p` and succeeds when it
 *     fails, but does not change the parser context, whether or not `p`
 *     succeeds.
 */

const not = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);
  return pres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, undefined), index) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null, index);
});

/***/ }),

/***/ "./src/combinators/backtracking.js":
/*!*****************************************!*\
  !*** ./src/combinators/backtracking.js ***!
  \*****************************************/
/*! exports provided: attempt, seqB, chainB, applyB, leftB, rightB, repeatB, untilB, blockB, pipeB, betweenB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seqB", function() { return seqB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return chainB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyB", function() { return applyB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return leftB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return rightB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return repeatB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "untilB", function() { return untilB; });
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

/**
 * A parser that backtracks when its contained parser fails fatally and
 * transforms that fatal failure into a non-fatal one.
 *
 * This is one of the few ways to cause a contained parser to backtrack
 * after a fatal failure (`peek` also does that as a side effect, etc.).
 * All of the `B` backtracking parsers backtrack only if the fatal
 * failure was caused by a contained parser's non-fatal failure.
 *
 * @param {Parser} p The parser whose fatal failures will be converted
 *     into non-fatal failures.
 * @param {string} [m] The expected error message to use if the parser
 *     fails. If the parser backtracks, this instead becomes the text of
 *     the generated compound error message.
 * @returns {Parser} A parser that cannot fail fatally. If its contained
 *     parser fails fatally, this one will instead fail non-fatally.
 */

const attempt = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const index = ctx.index;
  const [prep, [pctx, pres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(p(ctx));
  if (pres.status === Ok) return prep;

  if (pres.status === Fatal || pctx.index !== index) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nerror"])(m, pctx, pres.errors), index);
  }

  if (hasM) {
    if (pres.errors.length === 1 && pres.errors[0].type === kessel_error__WEBPACK_IMPORTED_MODULE_2__["ErrorType"].Nested) {
      const {
        ctx,
        errors
      } = pres.errors[0];
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["compound"])(m, ctx, errors), index);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m), index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, pres.errors, index);
});
/**
 * A parser that implements a sequence. Each supplied parser is executed
 * in order until either they all succeed or the first one fails. In the
 * former case, all results are merged into an array that becomes the
 * returned parser's result.
 *
 * If one of the parsers fails non-fatally after all of the earlier
 * parsers succeeded, this parser will backtrack to the point where the
 * very first parser was executed and will fail non-fatally.
 *
 * @param {...Parser|string} ps The parsers to be executed. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message (or compound error message, in the case of
 *     backtracking happening) in place of the collected expected error
 *     messages of the constituent parsers.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */

const seqB = (...args) => {
  const ps = args.slice();
  const m = typeof ps[ps.length - 1] === 'string' ? ps.pop() : null;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
     false && false;
    const values = [];
    const index = ctx.index;
    let context = ctx;
    let errors = [];

    for (const p of ps) {
      var _pres$errors;

      const [pctx, pres] = p(context);
      context = pctx;
      errors = ((_pres$errors = pres.errors) === null || _pres$errors === void 0 ? void 0 : _pres$errors.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

      if (pres.status === Fatal) {
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
      }

      if (pres.status === Fail) {
        const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, errors);
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
  });
};
/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
 *
 * If the parser returned by `fn` fails non-fatally after `p` succeeds,
 * this parser will backtrack to the point where `p` was executed and
 * will fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which will execute `p`, pass the result to
 *     the supplied function, and use that function's return value as a
 *     second parser to execute.
 */

const chainB = (p, fn, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const q = fn(pres.value);
   false && false;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));
  const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(qctx.index !== index, m, qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, error, index);
});
/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p A parser whose result will be passed to the
 *     function returned by `q`.
 * @param {Parser} q A parser which provides a function.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */

const applyB = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qctx, qres] = q(pctx);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));

  if (qres.status === Fail) {
    const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(qctx.index !== index, m, qctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, error, index);
  }

  const fn = qres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(qctx, fn(pres.value));
});
/**
 * A parser that will apply the parsers `p` and `q` in order and then
 * return the result of `p`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the first.
 */

const leftB = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qctx, qres] = q(pctx);
  if (qres.status === Ok) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(qctx, pres.value);
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));
  const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(qctx.index !== index, m, qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, error, index);
});
/**
 * A parser that will apply the parsers `p` and `q` in order and then
 * return the result of `q`.
 *
 * If `p` succeeds and `q` fails, this parser will backtrack to the
 * point where `p` was applied and fail non-fatally.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of the second.
 */

const rightB = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));
  if (qres.status === Ok) return qrep;
  const errors = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors);
  if (qres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));
  const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(qctx.index !== index, m, qctx, errors);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(qctx, error, index);
});
/**
 * A parser that executes the supplied parser `n` times, collecting the
 * successful results into an array.
 *
 * If `p` fails after initially succeeding once or more, this parser
 * will backtrack to the point where `p` was executed the first time and
 * will fail non-fatally.
 *
 * @param {Parser} p A parser to execute multiple times.
 * @param {number} n The number of times to execute the parser.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const repeatB = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));

    if (pres.status === Fail) {
      const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, pres.errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails non-fatally before `e` succeeds, this parser will
 * backtrack to the point where `p` was executed the first time and will
 * fail non-fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} e The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which will execute `e` and then `p` zero
 *     or more times until `e` succeeds.
 */

const untilB = (p, e, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  while (true) {
    const [ectx, eres] = e(context);
    context = ectx;
    if (eres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ectx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, eres.errors));
    if (eres.status === Ok) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));

    if (pres.status === Fail) {
      const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, eres.errors));
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser that executes a block of code in the form of a generator
 * function. Inside that function, parsers that are `yield`ed will be
 * executed and will evaluate to their results (which can then be
 * assigned to variables, etc.).
 *
 * If any of the yielded parsers fail,  this parser will backtrack to
 * the point where the first parser was executed and will fail
 * non-fatally.
 *
 * @param {function():*} g A generator function that takes no arguments
 *     and returns whatever should be used as the returned parser's
 *     result. This generator function can `yield` only `Parser`s;
 *     otherwise an error is thrown.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */

const blockB = (g, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const gen = g();
  const index = ctx.index;
  let errors = [];
  let nextValue;
  let context = ctx;
  let i = 0;

  while (true) {
    var _pres$errors2;

    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value);
     false && false;
    const [pctx, pres] = value(context);
    context = pctx;
    errors = ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));

    if (pres.status === Fail) {
      const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, errors);
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
    }

    nextValue = pres.value;
    i++;
  }
});
/**
 * A parser that executes its parsers in sequence and passes those
 * results to a function of the same arity as the number of parsers to
 * execute. The return value of that function becomes this parser's
 * result.
 *
 * If one of the parsers fails non-fatally after all of the earlier
 * parsers succeeded, this parser will backtrack to the point where the
 * very first parser was executed and will fail non-fatally.
 *
 * @param {...(Parser|function(...*):*)} args An array of parsers to be
 *     executed one at a time, in order, followed by a function which
 *     will receive as parameters the results of each parser. Its return
 *     value will become the result of this parser. A single function
 *     must be present and it must be the last parameter; all other
 *     parameters must be parsers.
 * @returns {Parser} A parser that will execute its parsers in sequence,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipeB = (...args) => {
  const ps = args.slice();
  const m = typeof ps[ps.length - 1] === 'string' ? ps.pop() : null;
  const fn = ps.pop();
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
     false && false;
     false && false;
    const index = ctx.index;
    const values = [];
    let context = ctx;
    let errors = [];

    for (const p of ps) {
      var _pres$errors3;

      const [pctx, pres] = p(context);
      context = pctx;
      errors = ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];
      if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));

      if (pres.status === Fail) {
        const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, errors);
        return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, fn(...values));
  });
};
/**
 * A parser which executes its pre, content, and post parsers in order
 * and results in the result of its content parser.
 *
 * If any parser fails non-fatally, this parser will backtrack to where
 * `s` was executed and fail non-fatally.
 *
 * @param {Parser} s The first parser to execute.
 * @param {Parser} e The last parser to execute.
 * @param {Parser} p The second parser to execute and whose result
 *     becomes the result of the new parser.
 * @param {string} [m] The error message to use if the parser fails.
 * @returns {Parser} A parser which executes `s`, `p`, and `e` in
 *     order and then returns the result of `p`.
 */

const betweenB = (s, e, p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  var _pres$errors4;

  const hasM = m != null;
   false && false;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [sctx, sres] = s(ctx);

  if (sres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(sres.status === Fatal);
    return fn(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
  }

  const [pctx, pres] = p(sctx);
  const errors = ((_pres$errors4 = pres.errors) === null || _pres$errors4 === void 0 ? void 0 : _pres$errors4.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(sres.errors, pres.errors) : [];
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, errors));

  if (pres.status === Fail) {
    const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(pctx.index !== index, m, pctx, errors);
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(pctx, error, index);
  }

  const [ectx, eres] = e(pctx);

  if (eres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ectx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, eres.errors)));
  }

  if (eres.status === Fail) {
    const error = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["berror"])(ectx.index !== index, m, ectx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, eres.errors));
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ectx, error, index);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ectx, pres.value);
});

/***/ }),

/***/ "./src/combinators/chaining.js":
/*!*************************************!*\
  !*** ./src/combinators/chaining.js ***!
  \*************************************/
/*! exports provided: join, compact, value, nth, first, second, third, fourth, fifth, map, apply, chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return compact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "value", function() { return value; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return nth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "first", function() { return first; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second", function() { return second; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "third", function() { return third; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return fourth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return fifth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return chain; });
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
  Fatal
} = kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"];
/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser which will execute `p` and return `p`'s results joined
 * together into a single string. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array of
 *     strings.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns a single
 *     string made from joining the elements of the array of strings
 *     returned by `p`.
 */

const join = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v.join(''));
});
/**
 * A parser which will execute `p` and return its results minus any
 * `null` or `undefined` results. This requires that `p` returns an
 * array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns its results
 *     minus any `null` or `undefined` results.
 */

const compact = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v.filter(x => x != null));
});
/**
 * A parser that executes `p` but, on success, returns `x` instead.
 *
 * @param {Parser} p The parser to apply. Its result is ignored.
 * @param {*} x The value that the new parser will result in if `p`
 *     succeeds.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will apply `p` but return `x` on
 *     success.
 */

const value = (p, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
});
/**
 * A parser that returns the `n`th element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser that results in an array.
 * @param {number} n The 0-based index of the result element to return.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the `n`th element of the
 *     result of `p`.
 */

const nth = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[n]);
});
/**
 * A parser that returns the first element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the first element of the
 *     result of `p`.
 */

const first = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[0]);
});
/**
 * A parser that returns the second element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the second element of the
 *     result of `p`.
 */

const second = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[1]);
});
/**
 * A parser that returns the third element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the third element of the
 *     result of `p`.
 */

const third = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[2]);
});
/**
 * A parser that returns the fourth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the fourth element of the
 *     result of `p`.
 */

const fourth = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[3]);
});
/**
 * A parser that returns the fifth element of array-producing parser
 * `p`.
 *
 * @param {Parser} p A parser whose result is an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser whose result is the fifth element of the
 *     result of `p`.
 */

const fifth = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v[4]);
});
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
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and succeed with that
 *     return value as its result.
 */

const map = (p, fn, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, fn(pres.value));
});
/**
 * A parser that applies the value returned by `q` to the function
 * returned by `p`.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * This is the same operation as `<*>` from Haskell's `Applicative`
 * class.
 *
 * @param {Parser} p A parser whose result will be passed to the
 *     function returned by `q`.
 * @param {Parser} q A parser which provides a function.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that applies `p` and `q` and results in
 *     the return value of the function returned by `q` when the value
 *     returned by `p` is passed into it.
 */

const apply = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, hasM ? merror : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
  }

  const fn = qres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(qctx, fn(pres.value));
});
/**
 * A parser that chains the result after applying its contained parser
 * to another parser returned by the supplied function. The parser
 * returns that result.
 *
 * This parser will fail fatally if the function-provided parser fails
 * after the other parser consumes input, even if that failure is
 * non-fatal.
 *
 * This is the same operation as the `Monad` class's `bind` operation
 * (generally written `>>=` in Haskell).
 *
 * @param {Parser} p The first parser to apply.
 * @param {function(*): Parser} fn A function that takes the result from
 *     the first parser's successful application as its sole argument.
 *     It uses this result to determine a second parser, which it
 *     returns.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will apply its contained parser,
 *     pass the result to the supplied function, and use that function's
 *     return value as a second parser to apply the input to.
 */

const chain = (p, fn, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const q = fn(pres.value);
   false && false;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, hasM ? merror : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
  }

  return qrep;
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: seq, left, right, block, many, many1, skip, sep, sep1, end, end1, repeat, between, until, pipe, assocL, assoc1L, assocR, assoc1R */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return seq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "left", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "right", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many", function() { return many; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return many1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return skip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return sep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sep1", function() { return sep1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "end1", function() { return end1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return repeat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
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
 * A parser that implements a sequence. Each supplied parser is executed
 * in order until either they all succeed or the first one fails. In the
 * former case, all results are merged into an array that becomes the
 * returned parser's result.
 *
 * This parser will fail fatally if any input was consumed before any of
 * its parsers fail, even if that failure itself was non-fatal.
 *
 * @param {...Parser|string} args The parsers to be executed. The last
 *     argument *may* be a string, in which case it becomes the expected
 *     error message in place of the collected expected error messages
 *     of the constituent parsers.
 * @returns {Parser} A parser that executes the supplied parsers one at
 *     a time, in order, and fails if any of those parsers fail.
 */


const seq = (...args) => {
  const ps = args.slice();
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const hasM = m != null;
     false && false;
    const values = [];
    const index = ctx.index;
    let errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : [];
    let context = ctx;

    for (const p of ps) {
      var _pres$errors;

      const [pctx, pres] = p(context);
      context = pctx;
      if (!hasM) errors = ((_pres$errors = pres.errors) === null || _pres$errors === void 0 ? void 0 : _pres$errors.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

      if (pres.status !== Ok) {
        const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || context.index !== index);
        return fn(context, errors);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
  });
};
/**
 * A parser that executes the parsers `p` and `q` in order and returns
 * the result of `p`. This is the same operation as the applicative `<*`
 * in Haskell.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and `q` and returns the
 *     result of `p`.
 */

const left = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) {
    const fn = pres.status === Fatal ? kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"] : kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"];
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, hasM ? merror : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(qctx, pres.value);
});
/**
 * A parser that executes the parsers `p` and `q` in order and returns
 * the result of `q`. This is the same operation as the applicative `*>`
 * in Haskell.
 *
 * This parser will fail fatally if `q` fails after `p` consumes input,
 * even if `q`'s failure was non-fatal.
 *
 * @param {Parser} p The first parser to execute.
 * @param {Parser} q The second parser to execute.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes both contained parsers and
 *     results in the value of the second.
 */

const right = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qctx.status === Fatal || qctx.index !== index);
    return fn(qctx, hasM ? merror : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors));
  }

  return qrep;
});
/**
 * A parser that executes a block of code in the form of a generator
 * function. Inside that function, parsers that are `yield`ed will be
 * executed and will evaluate to their results (which can then be
 * assigned to variables, etc.).
 *
 * If all parsers in the block succeed, `block` will succeed with the
 * value that the generator function returned.
 *
 * If any yielded parser fails after another yielded parser has consumed
 * input, this parser will fail fatally.
 *
 * Only parsers may be yielded in a block. Yielding anything else will
 * cause an error to be thrown.
 *
 * @param {function():*} g A generator function that takes no arguments
 *     and returns whatever should be used as the returned parser's
 *     result. This generator function can `yield` only `Parser`s;
 *     otherwise an error is thrown.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the generator function,
 *     executes parsers as they are yielded, and results in the return
 *     value of the generator.
 */

const block = (g, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const gen = g();
  const index = ctx.index;
  let errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : [];
  let nextValue;
  let context = ctx;
  let i = 0;

  while (true) {
    var _pres$errors2;

    const {
      value,
      done
    } = gen.next(nextValue);
    if (done) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value);
     false && false;
    const [pctx, pres] = value(context);
    context = pctx;
    if (!hasM) errors = ((_pres$errors2 = pres.errors) === null || _pres$errors2 === void 0 ? void 0 : _pres$errors2.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

    if (pres.status !== Ok) {
      const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
      return fn(pctx, errors);
    }

    nextValue = pres.value;
    i++;
  }
});
/**
 * A parser that executes `p` zero or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser cannot fail non-fatally; however, if `p` ever fails
 * fatally, then so will this parser.
 *
 * @param {Parser} p A parser to be executed zero or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const values = [];
  let context = ctx;

  while (true) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
    }

    if (pres.status === Fail) break;
    values.push(pres.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser that executes `p` one or more times until it fails,
 * collecting the results into an array that is returned.
 *
 * This parser can fail non-fatally if `p` does not succeed at least
 * once. It can fail fatally if `p` ever fails fatally.
 *
 * @param {Parser} p A parser to be executed one or more times.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes the supplied parser
 *     repeatedly until it fails. Its result will be an array of the
 *     successful results from the contained parser.
 */

const many1 = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  let context = pctx;
  const values = [pres.value];

  while (true) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    values.push(pres.value);
    if (context.index >= context.view.byteLength) break;
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser that executes `p` and discards any successful result while
 * still consuming input.
 *
 * @param {Parser} p The parser whose result is to be discarded.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will consume input as `p` does on
 *     success, but will produce no result.
 */

const skip = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, null);
});
/**
 * A parser that executes `p` zero or more times, executing `s` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sep = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
  }

  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;

    if (sres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
    }

    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sep'));
    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values, index);
});
/**
 * A parser that executes `p` one or more times, executing `s` in
 * between each. The results of `p` are gathered into an array and
 * returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const sep1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;

    if (sres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
    }

    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sep1'));
    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values, index);
});
/**
 * A parser that executes `p` zero or more times, executing `s` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail non-fatally, as matching `p` zero times is
 * valid. It can fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const end = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
  }

  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;

    if (sres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
    }

    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('end'));
    values.push(pres.value);
  }

  const [sctx, sres] = s({ ...context,
    index
  });

  if (sres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(sctx, values);
});
/**
 * A parser that executes `p` one or more times, executing `s` in
 * between each and optionally after the last match of `p`. The results
 * of `p` are gathered into an array and returned.
 *
 * This parser will not fail if `p` doesn't succeed at least once. It
 * will fail fatally if either `p` or `s` ever fail fatally.
 *
 * If `p` and `s` both succeed without consuming content, that would
 * cause an infinite loop. In this case, an exception is thrown instead.
 *
 * @param {Parser} p A parser that will match the desired content when
 *     applied to the input.
 * @param {Parser} s A parser that will match separators between the
 *     chunks of content.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that results in an array of all of the
 *     content parser results, discarding the separator parser results.
 */

const end1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;

    if (sres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
    }

    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('end1'));
    values.push(pres.value);
  }

  const [sctx, sres] = s({ ...context,
    index
  });

  if (sres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, hasM ? merror : sres.errors);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(sctx, values);
});
/**
 * A parser that executes the supplied parser `n` times, collecting the
 * successful results into an array.
 *
 * If `p` fails after any input has been consumed by a prior execution
 * of `p`, this parser will fail fatally.
 *
 * @param {Parser} p A parser to execute multiple times.
 * @param {number} n The number of times to execute the parser.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` `n` times and results in
 *     an array of all of the successful results of `p`.
 */

const repeat = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;

  for (const _ of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(n)) {
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status !== Ok) {
      const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
      return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser which executes its start, content, and end parsers in order
 * and results in the result of its content parser.
 *
 * If either `p` or `e` fails after a prior parser has consumed
 * input, this parser will fail fatally.
 *
 * @param {Parser} s The first parser to apply.
 * @param {Parser} e The last parser to apply.
 * @param {Parser} p The second parser to apply and whose result becomes
 *     the result of the new parser.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which applies its parsers in the correct
 *     order and then results in the result of its content parser.
 */

const between = (s, e, p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  var _pres$errors3;

  const hasM = m != null;
   false && false;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const [sctx, sres] = s(ctx);

  if (sres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(sres.status === Fatal);
    return fn(sctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : sres.errors);
  }

  const [pctx, pres] = p(sctx);
  const errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(sres.errors, pres.errors) : [];

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
    return fn(pctx, errors);
  }

  const [ectx, eres] = e(pctx);

  if (eres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(eres.status === Fatal || ectx.index !== index);
    return fn(ectx, hasM ? errors : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, eres.errors));
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ectx, pres.value);
});
/**
 * A parser which executes a content parser zero or more times until an
 * end parser is successful. This parser results in an array of all of
 * the successful content parser results. The end parser is executed
 * *first*, so the results of the two parsers will not overlap.
 *
 * If `p` fails before `e` succeeds but after prior executions of `p`
 * have consumed input, this parser will fail fatally.
 *
 * @param {Parser} p The content parser. Its results are pushed into an
 *     array and become the returned parser's result.
 * @param {Parser} e The end parser. Parsing ends when this parser
 *     succeeds. Its result is discarded.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will execute `p` zero or more times
 *     until `e` succeeds.
 */

const until = (p, e, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const index = ctx.index;
  const values = [];
  let context = ctx;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);

  while (true) {
    const [ectx, eres] = e(context);
    context = ectx;

    if (eres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ectx, hasM ? merror : eres.errors);
    }

    if (eres.status === Ok) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) {
      const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pctx.index !== index);
      return fn(pctx, hasM ? merror : Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, eres.errors));
    }

    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
});
/**
 * A parser that executes its parsers in sequence and passes those
 * results to a function of the same arity as the number of parsers to
 * execute. The return value of that function becomes this parser's
 * result.
 *
 * Note that, unlike `sequence`, `null` parser results are *not*
 * discarded. This ensures that the same number of arguments are passed
 * to `fn` no matter the results from the parsers.
 *
 * If one of the parsers fails after prior parsers have consumed input,
 * this parser will fail fatally.
 *
 * This parser is equivalent to the applicative lift operation, lifting
 * multi-parameter functions into the context of a parser. It acts like
 * `liftA2` if two parsers are passed in, `liftA3` if three are passed
 * in, etc.
 *
 * @param {...(Parser|function(...*):*|string)} args An array of parsers
 *     to be executed one at a time, in order, followed by a function
 *     which will receive as parameters the results of each parser. Its
 *     return value will become the result of this parser. A single
 *     function must be present and it must come after the parsers.
 *     Optionally, a string may be the last argument; if it is present,
 *     it replaces the default error message in the event that the
 *     parser fails.
 * @returns {Parser} A parser that will execute its parsers in order,
 *     feed the results to its function, and result in the function's
 *     return value.
 */

const pipe = (...args) => {
  const ps = args.slice();
  const m = typeof args[args.length - 1] === 'string' ? ps.pop() : null;
  const fn = ps.pop();
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
    const hasM = m != null;
     false && false;
     false && false;
    const index = ctx.index;
    const values = [];
    let context = ctx;
    let errors = hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : [];

    for (const p of ps) {
      var _pres$errors4;

      const [pctx, pres] = p(context);
      context = pctx;
      if (!hasM) errors = ((_pres$errors4 = pres.errors) === null || _pres$errors4 === void 0 ? void 0 : _pres$errors4.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, pres.errors) : [];

      if (pres.status !== Ok) {
        const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
        return fn(pctx, errors);
      }

      values.push(pres.value);
    }

    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, fn(...values));
  });
};
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
 * A parser that parses zero or more applications of `p`, each separated
 * by `o`. It results in the value obtained by left associative
 * application of the functions that are the `op` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `o`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` left associtively to the values
 *     that result from `p`.
 */


const assocL = (p, o, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
  }

  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;

    if (ores.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, hasM ? merror : ores.errors);
    }

    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
     false && false;
    ops.push(ores.value);
    values.push(pres.value);
    index = context.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value, index);
});
/**
 * A parser that parses one or more applications of `p`, each separated
 * by `o`. It results in the value obtained by left associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `o` fails fatally.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` left associtively to the values
 *     that result from `p`.
 */

const assoc1L = (p, o, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;

    if (ores.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, hasM ? merror : ores.errors);
    }

    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
     false && false;
    ops.push(ores.value);
    values.push(pres.value);
    index = context.index;
    i++;
  }

  let value = values[0];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length)) {
    value = ops[i](value, values[i + 1]);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value, index);
});
/**
 * A parser that parses zero or more applications of `p`, each separated
 * by `o`. It results in the value obtained by right associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * The parser does not fail unless one of its two parsers fails fatally.
 * If there are zero matches of `p`, then the default value `x` becomes
 * the result. If there is one match of `p` but no matches of `o`, then
 * that result of `p` becomes the overall result.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {*} x The default result if there are no matches of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` right associtively to the values
 *     that result from `p`.
 */

const assocR = (p, o, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status === Fatal) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
  }

  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;

    if (ores.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, hasM ? merror : ores.errors);
    }

    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
     false && false;
    ops.push(ores.value);
    values.push(pres.value);
    index = context.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value, index);
});
/**
 * A parser that parses one or more applications of `p`, each separated
 * by `o`. It results in the value obtained by right associative
 * application of the functions that are the `o` results to the results
 * of `p`.
 *
 * This parser will fail non-fatally if `p` doesn't succeed at least
 * once. Otherwise it can only fail fatally if `p` or `o` fails fatally.
 *
 * If any result of `o` is not a function, an error will be thrown.
 *
 * @param {Parser} p The content parser to match zero or more times.
 * @param {Parser} o The operation parser to match in between each
 *     application of `p`.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser which will match zero or more occurences
 *     of `p` separated by `o` and result in the value obtained by
 *     applying the functions from `o` right associtively to the values
 *     that result from `p`.
 */

const assoc1R = (p, o, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;

    if (ores.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, hasM ? merror : ores.errors);
    }

    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;

    if (pres.status === Fatal) {
      return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, hasM ? merror : pres.errors);
    }

    if (pres.status === Fail) break;
     false && false;
    ops.push(ores.value);
    values.push(pres.value);
    index = context.index;
    i++;
  }

  let value = values[values.length - 1];

  for (const i of Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["range"])(ops.length - 1, -1)) {
    value = ops[i](values[i], value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, value, index);
});

/***/ }),

/***/ "./src/core.js":
/*!*********************!*\
  !*** ./src/core.js ***!
  \*********************/
/*! exports provided: Status, context, parser, okReply, failReply, fatalReply, parse, status, succeeded, success, failure, run */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return Status; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "okReply", function() { return okReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "failReply", function() { return failReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fatalReply", function() { return fatalReply; });
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
 * A string representing the status of the last parsing operation.
 * @enum {string}
 */


const Status = {
  /** Indicates that the last parse was successful. */
  Ok: 'ok',

  /** Indicates that the last parse failed without consuming input. */
  Fail: 'fail',

  /** Indicates that the last parse failed and consumed input. */
  Fatal: 'fatal'
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
 * A typed array of any built-in kind.
 *
 * @typedef
 *   {(Uint8Array|Uint8ClampedArray|Uint16Array|Uint32Array|Int8Array|
 *   Int16Array|Int32Array|Float32Array|Float64Array)} TypedArray
 */

/**
 * Input text to be parsed.
 *
 * @typedef {(string|ArrayBuffer|TypedArray|DataView)} Input
 */

/**
 * Creates a new, empty parser context. This is not exported because a
 * new context is only created before parsing, in the `parse` function.
 * Any further contexts are derived from the context using {@link ok},
 * {@link error}, or {@link fatal}.
 *
 * @param {Input} input The input text.
 * @returns {Context} An empty parser context.
 */

function context(input) {
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

const parser = Object(_util__WEBPACK_IMPORTED_MODULE_1__["track"])(fn => fn);
/**
 * Produces a new reply indicating that a parse succeeded.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {*} [value=null] The new result of the parser application.
 * @param {number} [index=ctx.index] The updated index after the parser
 *     was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser succeeded.
 */

function okReply(ctx, value = null, index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Ok,
    value
  }];
}
/**
 * Produces a new reply indicating that a parse failed without consuming
 * input.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {ErrorList} [errors=[]] The errors associated with the context
 *     after the latest parser was applied.
 * @param {number} [index=ctx.index] The updated index after the latest
 *     parser was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser failed.
 */

function failReply(ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Fail,
    errors
  }];
}
/**
 * Produces a new reply indicating that a parse failed while consuming
 * input.
 *
 * @param {Context} ctx The context prior to the parser being applied.
 * @param {ErrorList} [errors=[] The errors associated with the context
 *     after the latest parser was applied.
 * @param {number} [index=ctx.index] The updated index after the latest
 *     parser was applied.
 * @returns {Reply} A new object representing the context and result
 *     after the latest parser failed.
 */

function fatalReply(ctx, errors = [], index = ctx.index) {
  return [{ ...ctx,
    index
  }, {
    status: Status.Fatal,
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
 * @param {Input} input The input text.
 * @returns {Reply} The final context after all parsers have been
 *     applied and the result of the final parser application.
 */

function parse(parser, input) {
  return parser(context(input));
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
  return succeeded(reply) ? null : Object(_error__WEBPACK_IMPORTED_MODULE_0__["formatErrors"])(reply);
}
/**
 * Applies a parser to input. Returns the parsed value if the parser
 * succeeds, or throws an exception with the parser's error message if
 * it fails.
 *
 * @param {Parser} parser The parser to be applied to the input. This
 *     can, as always, be a composition of an arbitrary number of
 *     parsers and combinators.
 * @param {Input} input The input text.
 * @returns {*} The result from the parser application, if the parser
 *     succeeds.
 * @throws {Error} If the parser fails. The error message will be a
 *     detailed record of where the error occurred.
 */

function run(parser, input) {
  const [reply, [_, result]] = Object(_util__WEBPACK_IMPORTED_MODULE_1__["dup"])(parser(context(input)));

  if (result.status === Status.Ok) {
    return result.value;
  }

  throw new Error(Object(_error__WEBPACK_IMPORTED_MODULE_0__["formatErrors"])(reply));
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
 * A string defining the type of an error.
 * @enum {string}
 */

const ErrorType = {
  /**
   * Error type representing an expected result. Produced by the vast
   * majority of parsers.
   */
  Expected: 'expected',

  /**
   * Error type representing a result that was not expected. Typically
   * produced by parsers such as `unexpected` and `notFollowedBy`.
   */
  Unexpected: 'unexpected',

  /**
   * Error type representing a generic error message. Typically produced
   * by parsers such as `fail` and `failFatally`.
   */
  Generic: 'generic',

  /**
   * Error type representing an error within another error. This is
   * generally used for an error that caused backtracking, where the
   * parent error is reported after backtracking.
   */
  Nested: 'nested',

  /**
   * Error type representing a nested error with its own separate error
   * message. This is produced specifically by the `compound` parser.
   */
  Compound: 'compound',

  /**
   * Error type representing some other kind of error message to be
   * displayed in a custom error formatter.
   */
  Other: 'other'
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
 * @returns {[LocalError]} A new error message of the generic type.
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
 * @returns {[LocalError]} A new parse error of the other type.
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
 * @returns {[NestedError]} A new nested error.
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
 * @returns {[CompoundError]} A new compound error.
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
 * @param {ErrorList} [errors1=[]] The first array of errors.
 * @param {ErrorList} [errors2=[]] The second array of errors.
 * @returns {ErrorList} A new array containing all of the errors from
 *     the first two arrays.
 */

function merge(errors1 = [], errors2 = []) {
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
 * @param {ErrorList} errors The errors being used to generate the
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
    const label = n.label ? `\n${sp}Could not parse ${n.label} because:\n\n` : `\n${sp}The parser backtracked after:\n\n`;
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
 * @param {number} [tabSize=8] A number whose multiples determine where
 *     tab stops lay.
 * @param {number} [maxWidth=72] The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {number} [indent=0] The number of spaces the message should be
 *     indented. This should be 0 and increased only for nested errors.
 * @returns {string} The formatted error message.
 */


function format(errors, index, view, tabSize = 8, maxWidth = 72, indent = 0) {
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
 * defaults to 8 in the default formatter) and max width (for the error
 * message itself; defaults to 72 in the default formatter).
 *
 * @param {Reply} reply The reply returned by the parser when the error
 *     happened.
 * @param {number} [tabSize] A number whose multiples define where tabs
 *     stop.
 * @param {number} [maxWidth] The maximum width of the line being
 *     displayed. If the line is longer than this, it will be truncated
 *     with ellipses added before and/or after as appropriate.
 * @param {Formatter} [formatter=format] The function to which the
 *     actual formatting is delegated.
 */

function formatErrors(reply, tabSize, maxWidth, formatter = format) {
  const [ctx, result] = reply;
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
/*! exports provided: alpha, any, char, charI, digit, eof, hex, letter, lower, noneof, octal, oneof, range, satisfy, upper, always, fail, fatal, alphaU, letterU, lowerU, newline, newlineU, regex, space, spaceU, spaces, spaces1, spaces1U, spacesU, upperU, all, anyString, string, stringI, alt, def, empty, not, opt, peek, applyB, attempt, betweenB, blockB, chainB, leftB, pipeB, repeatB, rightB, seqB, untilB, apply, chain, compact, fifth, first, fourth, join, map, nth, second, third, value, assoc1L, assoc1R, assocL, assocR, between, block, end, end1, left, many, many1, pipe, repeat, right, sep, sep1, seq, skip, until, Status, failReply, failure, fatalReply, okReply, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsers_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/char */ "./src/parsers/char.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["alpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "char", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["char"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "charI", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["charI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["digit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eof", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["eof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "letter", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["letter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lower", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["lower"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "noneof", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["noneof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "octal", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["octal"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneof", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["oneof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["range"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["satisfy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "upper", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["upper"]; });

/* harmony import */ var _parsers_misc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parsers/misc */ "./src/parsers/misc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "always", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["always"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["fail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return _parsers_misc__WEBPACK_IMPORTED_MODULE_1__["fatal"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["alt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["peek"]; });

/* harmony import */ var _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/backtracking */ "./src/combinators/backtracking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["applyB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["attempt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "betweenB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["betweenB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "blockB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["blockB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chainB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["chainB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leftB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["leftB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipeB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["pipeB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeatB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["repeatB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rightB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["rightB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seqB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["seqB"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "untilB", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["untilB"]; });

/* harmony import */ var _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinators/chaining */ "./src/combinators/chaining.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["fifth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["fourth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["nth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "second", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["second"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "third", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["third"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["value"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1L", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["assoc1L"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assoc1R", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["assoc1R"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocL", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["assocL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "assocR", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["assocR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["end"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "end1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["end1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "repeat", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["repeat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sep", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sep"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sep1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sep1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "seq", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["seq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "skip", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["skip"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "until", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["until"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Status", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["Status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failReply", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["failReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "failure", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["failure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fatalReply", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["fatalReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "okReply", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["okReply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["parse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["parser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "run", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["run"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "status", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["status"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "succeeded", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["succeeded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "success", function() { return _core__WEBPACK_IMPORTED_MODULE_8__["success"]; });

/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorType", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["ErrorType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compound", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["compound"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "expected", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["expected"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatErrors", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["formatErrors"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generic", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["generic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPosition", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["getPosition"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nested", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["nested"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "other", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["other"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unexpected", function() { return _error__WEBPACK_IMPORTED_MODULE_9__["unexpected"]; });

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
  noneof: array => 'none of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
  octal: 'an octal digit',
  oneof: array => 'one of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
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
  noneof: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.noneof(array)),
  octal: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.octal),
  oneof: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.oneof(array)),
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
/*! exports provided: char, charI, satisfy, range, any, eof, oneof, noneof, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "charI", function() { return charI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "satisfy", function() { return satisfy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "any", function() { return any; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eof", function() { return eof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneof", function() { return oneof; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noneof", function() { return noneof; });
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

const charParser = fn => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  return fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
});
/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if `c` is the next
 *     character in the input.
 */


const char = (c, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(ch => c === ch)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].char(c)));
});
/**
 * A parser that reads a single character from input and succeeds if
 * that character is `c`. This differs from `char` in that the
 * comparison done by this parser is case-insensitive.
 *
 * @param {string} c The character to compare the next character in the
 *     input to. If `c` is more than one character, this parser will
 *     throw an error.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if `c` (or its
 *     other-cased counterpart) is the next character in the input.
 */

const charI = (c, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].charI(c)));
});
/**
 * A parser that reads a single character and passes it to the provided
 * function. If the function returns `true`, this parser succeeds with
 * that character as the result. If the function returns `false`, this
 * parser fails and consumes no input.
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
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that reads a character and executes `fn`
 *     on it when applied to input.
 */

const satisfy = (fn, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  if (cres.status === Ok) return crep;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, cres.errors));
});
/**
 * A parser that reads a single character and determines whether it is
 * between (according to code points) characters `s` and `e`
 * (inclusive). If it is, the read character is the successful result,
 * and if it is not, the parser fails without consuming input.
 *
 * `s` and `e` are expected to be single characters. An error will be
 * thrown if they are not.
 *
 * @param {string} s The character that defines the start of the range
 *     of characters to match. It is included in that range.
 * @param {string} e The character that defines the end of the range of
 *     characters to match. It is included in that range.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the next input
 *     character is between `start` and `end` (inclusive).
 */

const range = (s, e, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;

  const fn = c => c >= s && c <= e;

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].range(s, e)));
});
/**
 * A parser that reads a single input character and then succeeds with
 * that character. Fails only if there is no input left to read.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches any character.
 */

const any = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const {
    index,
    view
  } = ctx;

  if (index >= view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].any));
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width);
});
/**
 * A parser that reads one character and succeeds if that character does
 * not exist (i.e., if the index is already at the end of the input).
 * Consumes nothing on either success or failure.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that matches the end of input.
 */

const eof = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const {
    index,
    view
  } = ctx;
  return index >= view.byteLength ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].eof));
});
/**
 * A parser that reads a character and compares it against each of the
 * characters in `cs`, which is either an array of characters or a
 * string. If the read character is among those characters, the parser
 * will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to be a member for
 *     the parser to succeed.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is one
 *     of the characters in `chars`.
 */

const oneof = (cs, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].oneof(arr)));
});
/**
 * A parser that reads a character and compares it against each of the
 * characters in `cs`, which is either an array of characters or a
 * string. If the read character is *not* among those characters, the
 * parser will succeed.
 *
 * @param {(string|string[])} cs The characters, either in an array or a
 *     string, in which the next input character has to not be a member
 *     for the parser to succeed.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is not
 *     one of the characters in `chars`.
 */

const noneof = (cs, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const {
    index,
    view
  } = ctx;
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
  const arr = [...cs];
  return arr.includes(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].noneof(arr))) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII digit.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     digit.
 */

const digit = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= '0' && c <= '9';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].digit));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a hexadecimal digit. This parser is not case sensitive.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     hexadecimal digit.
 */

const hex = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= '0' && c <= '9' || c >= 'a' && c <= 'f' || c >= 'A' && c <= 'F';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].hex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an octal digit.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     octal digit.
 */

const octal = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= '0' && c <= '7';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].octal));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     letter.
 */

const letter = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letter));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII alphanumeric character.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     alphanumeric character.
 */

const alpha = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alpha));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII uppercase letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     uppercase letter.
 */

const upper = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= 'A' && c <= 'Z';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upper));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is an ASCII lowercase letter.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     lowercase letter.
 */

const lower = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;

  const fn = c => c >= 'a' && c <= 'z';

  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(fn)(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lower));
});

/***/ }),

/***/ "./src/parsers/misc.js":
/*!*****************************!*\
  !*** ./src/parsers/misc.js ***!
  \*****************************/
/*! exports provided: fail, fatal, always */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fail", function() { return fail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fatal", function() { return fatal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "always", function() { return always; });
/* harmony import */ var kessel_assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kessel/assert */ "./src/assert.js");
/* harmony import */ var kessel_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kessel/core */ "./src/core.js");
/* harmony import */ var kessel_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kessel/error */ "./src/error.js");
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT



/** @typedef {import('kessel/core').Parser} Parser */

/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in.
 *
 * @param {string} m The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails with the supplied
 *     error message.
 */

const fail = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(m));
});
/**
 * A parser that fails without consuming input, setting the generic
 * error message to whatever is passed in. This signifies a fatal error,
 * one that cannot be recovered from without backtracking.
 *
 * @param {string} m The message used to create the generic error.
 * @returns {Parser} A parser that automatically fails fatally with the
 *     supplied error message.
 */

const fatal = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ctx, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["generic"])(m));
});
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

const always = x => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, x));

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
 * A parser that takes a regular expression object and matches it as far
 * as it can against the input at its current position.
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

const regexParser = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  const rest = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, view.byteLength - index, view);
  const match = rest.match(re);
  return match ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, match[0], index + Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringToView"])(match[0]).byteLength) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
});
/**
 * A parser that attempts to match the supplied regular expression to
 * the input text at the current location. If there is a match, any
 * matching text is returned as a successful result. No text is consumed
 * upon failure.
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
 *     the input text. If this is a string, it will be converted into a
 *     regular expression with no flags.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */


const regex = re => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(regex)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 *
 * @type {Parser}
 */

const letterU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLetter)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].letterU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 *
 * @type {Parser}
 */

const alphaU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reAlpha)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].alphaU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 *
 * @type {Parser}
 */

const upperU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUpper)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].upperU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 *
 * @type {Parser}
 */

const lowerU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLower)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].lowerU);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 *
 * @type {Parser}
 */

const space = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reSpace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space);
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 *
 * @type {Parser}
 */

const spaceU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUspace)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaceU);
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 *
 * @type {Parser}
 */

const spaces = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rpctx, _] = regexParser(reSpaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rpctx, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 *
 * @type {Parser}
 */

const spacesU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rpctx, _] = regexParser(reUspaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rpctx, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 *
 * @type {Parser}
 */

const spaces1 = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rpctx, rpres] = regexParser(reSpaces1)(ctx);
  return rpres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rpctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1);
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 *
 * @type {Parser}
 */

const spaces1U = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rpctx, rpres] = regexParser(reUspaces1)(ctx);
  return rpres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rpctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1U);
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
 *
 * @type {Parser}
 */

const newline = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reNewline)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline);
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
 *
 * @type {Parser}
 */

const newlineU = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rprep, [rpctx, rpres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUnewline)(ctx));
  return rpres.status === Ok ? rprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rpctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newlineU);
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
 * A parser that attempts to match a particular string from the current
 * position in the text. A string of characters equal in length to
 * `length` is read from input and passed to `fn`; if `fn` returns
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

const stringParser = (length, fn) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  if (length < 1) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, '');
  const {
    index,
    view
  } = ctx;
  if (index >= view.byteLength) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx);
  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChars"])(index, view, length);
  return Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(next) !== length || !fn(next) ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, next, index + width);
});
/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. The string match must be
 * exact (it is case-sensitive), and all UTF-8 characters are recognized
 * properly.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */


const string = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str === chars)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].string(str));
});
/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. This match is *not*
 * case-sensitive.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} str The string to compare against the next characters
 *     of the input.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */

const stringI = str => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(str), chars => str.toLowerCase() === chars.toLowerCase())(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].stringI(str));
});
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 *
 * @type {Parser}
 */

const all = Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const {
    index,
    view
  } = ctx;
  const width = view.byteLength - index;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["viewToString"])(index, width, view), index + width);
});
/**
 * A parser that reads a certain number of characters, using them (as a
 * string) as its result. The parser will fail if there are not that
 * many characters left to read.
 *
 * @param {number} n The number of characters to read.
 * @returns {Parser} A parser that reads that many characters and joins
 *     them into a string for its result.
 */

const anyString = n => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
   false && false;
  const [sprep, [spctx, spres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(n, () => true)(ctx));
  return spres.status === Ok ? sprep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(spctx, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anyString(n));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, enumerate, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate, track, ordinal, wordinal, stringify, articlify, replyFn, ferror, nerror, berror */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dup", function() { return dup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commaSeparate", function() { return commaSeparate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "track", function() { return track; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ordinal", function() { return ordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordinal", function() { return wordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "articlify", function() { return articlify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replyFn", function() { return replyFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ferror", function() { return ferror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nerror", function() { return nerror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "berror", function() { return berror; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/error.js");
/* istanbul ignore file */
// Copyright (c) 2020 Thomas J. Otterson
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT


/** @typedef {import('./core').Context} Context */

/** @typedef {import('./core').Result} Result */

/** @typedef {import('./core').Reply} Reply */

/** @typedef {import('./error').ErrorList} ErrorList */

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
const nums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const ones = ['zeroth', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth'];
const tens = ['twent', 'thirt', 'fort', 'fift', 'sixt', 'sevent', 'eight', 'ninet'];
const groups = ['hundred', 'thousand', 'million', 'billion', 'trillion', 'quadrillion'];
/**
 * Converts a number into its word-based ordinal form (i.e., `1` becomes
 * `'first'`, `1729` becomes `'one thousand seven hundred
 * twenty-ninth'`, etc.).
 *
 * @param {number} n The number to convert into an ordinal.
 * @returns {string} The same number in its word-based ordinal form.
 */

function wordinal(n) {
  if (n < 0 || n > Number.MAX_SAFE_INTEGER) {
    throw new Error(`Argument must be between 0 and ${Number.MAX_SAFE_INTEGER}`);
  }

  const mag = Math.floor(Math.log10(n));
  if (n < 20) return ones[n];

  if (mag === 1) {
    const i = Math.floor(n / 10) - 2;
    return n % 10 === 0 ? `${tens[i]}ieth` : `${tens[i]}y-${ones[n % 10]}`;
  }

  if (mag === 2) {
    const f = Math.floor(n / 10 ** mag);
    const x = n - f * 10 ** mag;
    return `${nums[f]} ${groups[0]}${x === 0 ? 'th' : ` ${wordinal(x)}`}`;
  }

  const g = mag % 3 + 1;
  const i = Math.floor(mag / 3);
  const f = Math.floor(n / 10 ** (mag - g + 1));

  const m = function mult(num) {
    if (num < 20) return nums[num];
    const rem = num % 10;

    if (num < 100) {
      return `${tens[Math.floor(num / 10) - 2]}y${rem === 0 ? '' : `-${nums[rem]}`}`;
    }

    const x = num - Math.floor(num / 100) * 100;
    return `${nums[Math.floor(num / 100)]} ${groups[0]}${x === 0 ? 'th' : ` ${mult(x)}`}`;
  }(f);

  const x = n - f * 10 ** (mag - g + 1);
  return `${m} ${groups[i]}${x === 0 ? 'th' : ` ${wordinal(x)}`}`;
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
    return _core__WEBPACK_IMPORTED_MODULE_0__["parser"].created(value) ? 'parser' : 'function';
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
} // --------------------------------------------------------------------
// Error utilities

/**
 * Returns the function used to create a failure reply. The condition
 * determines whether the reply will be fatal (`true`) or not (`false`).
 *
 * @param {boolean} condition Should be `true` for a fatal failure or
 *     `false` for a non-fatal failure.
 * @returns The reply function for fatal or non-fatal failures.
 */

function replyFn(condition) {
  return condition ? _core__WEBPACK_IMPORTED_MODULE_0__["fatalReply"] : _core__WEBPACK_IMPORTED_MODULE_0__["failReply"];
}
/**
 * Generates an error list for non-backtracked errors from underlying
 * parsers. The 'f' is for 'flat'; this function produces a non-nested
 * error whose message is based upon whether `m` exists or not.
 *
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list that does not take backtracking
 *     into account.
 */

function ferror(m, errors) {
  return m == null ? errors : Object(_error__WEBPACK_IMPORTED_MODULE_1__["expected"])(m);
}
/**
 * Generates an error list for backtracked errors from underlying
 * parsers. The 'n' is for nested; this function produces a nested
 * error that instead be a compound error if `m` exists.
 *
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {Context} ctx The context from the point where the underlying
 *     error occurred.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list that takes backtracking into
 *     account.
 */

function nerror(m, ctx, errors) {
  return m == null ? Object(_error__WEBPACK_IMPORTED_MODULE_1__["nested"])(ctx, errors) : Object(_error__WEBPACK_IMPORTED_MODULE_1__["compound"])(m, ctx, errors);
}
/**
 * Generates an error list that will only record backtracking
 * information if the provided condition is true.
 *
 * @param {boolean} cond If `true`, the new error list will include
 *     backtracking information.
 * @param {string} m The message used to create the new error. This will
 *     only be used if it's actually present.
 * @param {Context} ctx The context from the point where the underlying
 *     error occurred.
 * @param {ErrorList} errors The errors generated by the underlying
 *     parser.
 * @returns {ErrorList} A new error list.
 */

function berror(cond, m, ctx, errors) {
  return cond ? nerror(m, ctx, errors) : ferror(m, errors);
}

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsImFyZ1N0ckFyckZvcm1hdHRlciIsIm9yZEZvcm1hdHRlciIsIm9yZCIsIm9yZENoYXJGb3JtYXR0ZXIiLCJvcmRGbkZvcm1hdHRlciIsIm9yZE51bUZvcm1hdHRlciIsIm9yZFBhckZvcm1hdHRlciIsIm9yZFN0ckZvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJhc3NlcnRQYXJzZXJzIiwidmFsdWVzIiwiaSIsImVudW1lcmF0ZSIsIm9yZGluYWwiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJlcnJvcnMiLCJleHBlY3RlZCIsInAiLCJwcmVwIiwicGN0eCIsInByZXMiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsUmVwbHkiLCJmYWlsUmVwbHkiLCJvcHQiLCJyZXBseSIsIm9rUmVwbHkiLCJkZWYiLCJ4IiwiZmVycm9yIiwicGVlayIsImluZGV4IiwibmVycm9yIiwiZW1wdHkiLCJmbiIsInJlcGx5Rm4iLCJub3QiLCJ1bmRlZmluZWQiLCJhdHRlbXB0IiwiRXJyb3JUeXBlIiwiTmVzdGVkIiwiY29tcG91bmQiLCJzZXFCIiwiY29udGV4dCIsImVycm9yIiwiYmVycm9yIiwicHVzaCIsImNoYWluQiIsInEiLCJxcmVwIiwicWN0eCIsInFyZXMiLCJhcHBseUIiLCJsZWZ0QiIsInJpZ2h0QiIsInJlcGVhdEIiLCJuIiwiXyIsInJhbmdlIiwidW50aWxCIiwiZSIsImVjdHgiLCJlcmVzIiwiYmxvY2tCIiwiZyIsImdlbiIsIm5leHRWYWx1ZSIsImRvbmUiLCJuZXh0IiwicGlwZUIiLCJiZXR3ZWVuQiIsInMiLCJzY3R4Iiwic3JlcyIsImpvaW4iLCJ2IiwiY29tcGFjdCIsImZpbHRlciIsIm50aCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIm1hcCIsImFwcGx5IiwibWVycm9yIiwiY2hhaW4iLCJsb29wTWVzc2FnZSIsInNlcSIsImxlZnQiLCJyaWdodCIsImJsb2NrIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwIiwic2VwIiwiVHlwZUVycm9yIiwic2VwMSIsImVuZCIsImVuZDEiLCJyZXBlYXQiLCJiZXR3ZWVuIiwidW50aWwiLCJwaXBlIiwib3BGb3JtYXR0ZXIiLCJhc3NvY0wiLCJvIiwib3BzIiwib2N0eCIsIm9yZXMiLCJhc3NvYzFMIiwiYXNzb2NSIiwiYXNzb2MxUiIsImlzVHlwZWRBcnJheSIsIlVpbnQ4QXJyYXkiLCJVaW50OENsYW1wZWRBcnJheSIsIlVpbnQxNkFycmF5IiwiVWludDMyQXJyYXkiLCJJbnQ4QXJyYXkiLCJJbnQxNkFycmF5IiwiSW50MzJBcnJheSIsIkZsb2F0MzJBcnJheSIsIkZsb2F0NjRBcnJheSIsImlucHV0IiwibWVzc2FnZSIsInN0cmluZ1RvVmlldyIsIkRhdGFWaWV3IiwiYnVmZmVyIiwiQXJyYXlCdWZmZXIiLCJ0cmFjayIsInBhcnNlIiwic3VjY2VlZGVkIiwic3VjY2VzcyIsImZhaWx1cmUiLCJmb3JtYXRFcnJvcnMiLCJydW4iLCJyZXN1bHQiLCJ0YWIiLCJ6ZXJvV2lkdGgiLCJFeHBlY3RlZCIsIlVuZXhwZWN0ZWQiLCJHZW5lcmljIiwiQ29tcG91bmQiLCJPdGhlciIsImxhYmVsIiwidW5leHBlY3RlZCIsImdlbmVyaWMiLCJvdGhlciIsIm5lc3RlZCIsImVycm9yczEiLCJlcnJvcnMyIiwiaXNOZXdsaW5lIiwiYnl0ZSIsImdldFVpbnQ4IiwibmV3bGluZSIsIm5leHRCeXRlIiwidGhpcmRCeXRlIiwibmV4dENoYXJXaWR0aCIsImdldExpbmVJbmRleGVzIiwic3RhcnQiLCJsaW5lbm8iLCJnZXRDaGFySW5kZXgiLCJjaGFySW5kZXgiLCJieXRlSW5kZXgiLCJ0YWJpZnkiLCJsaW5lIiwidGFiU2l6ZSIsInRhYkluZGV4ZXMiLCJ0YWJNYXRjaCIsImV4ZWMiLCJvZmZzZXQiLCJwcmVJbmRleE9mZnNldCIsInRhYkluZGV4IiwiYWN0dWFsSW5kZXgiLCJzcGFjZUNvdW50Iiwic3Vic3RyaW5nIiwiY29sSW5kZXgiLCJnZXRDb2xOdW1iZXIiLCJtYXRjaGVzIiwibWF0Y2giLCJjb2xubyIsInNob3ciLCJtYXhXaWR0aCIsImluZGVudCIsInNwIiwibmV3Q29sbm8iLCJNYXRoIiwiY2VpbCIsImZsb29yIiwiZm9ybWF0TmVzdGVkIiwibmVzdGVkcyIsIm5lc3RlZE1zZ3MiLCJmb3JtYXQiLCJlbnN1cmVOZXdsaW5lcyIsInRleHQiLCJjb3VudCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiY29tbWFTZXBhcmF0ZSIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYWxwaGFVIiwiYW55IiwiYW55U3RyaW5nIiwiY2hhciIsInF1b3RlIiwiY2hhckkiLCJkaWdpdCIsImVvZiIsImhleCIsImxldHRlciIsImxldHRlclUiLCJsb3dlciIsImxvd2VyVSIsIm5ld2xpbmVVIiwibm9uZW9mIiwiYXJyYXkiLCJvY3RhbCIsIm9uZW9mIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInNwYWNlc1UiLCJzcGFjZXMxVSIsInNwYWNlVSIsInN0cmluZyIsInN0ciIsInN0cmluZ0kiLCJ1cHBlciIsInVwcGVyVSIsImV4cGVjdGVkcyIsImNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY3JlcCIsImNjdHgiLCJjcmVzIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJjcyIsImFyciIsImluY2x1ZGVzIiwiZmFpbCIsImZhdGFsIiwiYWx3YXlzIiwicmVMZXR0ZXIiLCJyZUFscGhhIiwicmVVcHBlciIsInJlTG93ZXIiLCJyZVNwYWNlIiwicmVVc3BhY2UiLCJyZVNwYWNlcyIsInJlVXNwYWNlcyIsInJlU3BhY2VzMSIsInJlVXNwYWNlczEiLCJyZU5ld2xpbmUiLCJyZVVuZXdsaW5lIiwicmVnZXhQYXJzZXIiLCJyZXN0IiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJyZWFuY2hvciIsIm5ld1NvdXJjZSIsInJwcmVwIiwicnBjdHgiLCJycHJlcyIsInN0cmluZ1BhcnNlciIsIm5leHRDaGFycyIsInNwcmVwIiwic3BjdHgiLCJzcHJlcyIsImNoYXJzIiwiYWxsIiwiZW5jb2RlciIsIlRleHRFbmNvZGVyIiwiZGVjb2RlciIsIlRleHREZWNvZGVyIiwic3RlcCIsImluY2x1c2l2ZSIsImFicyIsImZvcndhcmQiLCJjdXJyZW50IiwiZmluaXNoZWQiLCJpdGVyYWJsZSIsIml0ZXJhdG9yIiwiU3ltYm9sIiwiYnl0ZXMiLCJmcm9tIiwiZGVjb2RlIiwiZW5jb2RlIiwidmlld0xlbmd0aCIsIm1lc3NhZ2VzIiwibXNncyIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFkZCIsImhhcyIsImJpbmQiLCJzdWZmaXhlcyIsIm51bXMiLCJvbmVzIiwidGVucyIsImdyb3VwcyIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtYWciLCJsb2cxMCIsImYiLCJtdWx0IiwibnVtIiwicmVtIiwiZGVzY3JpcHRpb24iLCJKU09OIiwiYXJ0aWNsaWZ5IiwiY29uZGl0aW9uIiwiY29uZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQSxTQUFTLEdBQUdDLElBQUksSUFDM0JDLEtBQUssSUFBSyxZQUFXRCxJQUFLLFdBQVVFLHVEQUFTLENBQUNELEtBQUQsQ0FBUSxFQURoRDtBQUdQLE1BQU1FLGFBQWEsR0FBR0osU0FBUyxDQUFDLHdCQUFELENBQS9CO0FBQ0EsTUFBTUssV0FBVyxHQUFHTCxTQUFTLENBQUMsWUFBRCxDQUE3QjtBQUNBLE1BQU1NLFlBQVksR0FBR04sU0FBUyxDQUFDLHNCQUFELENBQTlCO0FBQ0EsTUFBTU8sWUFBWSxHQUFHUCxTQUFTLENBQUMsVUFBRCxDQUE5QjtBQUNBLE1BQU1RLFlBQVksR0FBR1IsU0FBUyxDQUFDLFVBQUQsQ0FBOUI7QUFDQSxNQUFNUyxlQUFlLEdBQUdULFNBQVMsQ0FBQyxvQ0FBRCxDQUFqQztBQUNBLE1BQU1VLGNBQWMsR0FBR1YsU0FBUyxDQUFDLGtDQUFELENBQWhDO0FBQ0EsTUFBTVcsWUFBWSxHQUFHWCxTQUFTLENBQUMsVUFBRCxDQUE5QjtBQUNBLE1BQU1ZLFlBQVksR0FBR1osU0FBUyxDQUFDLFVBQUQsQ0FBOUI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWEsWUFBWSxHQUFHLENBQUNaLElBQUQsRUFBT2EsS0FBSyxHQUFHLENBQWYsRUFBa0JDLFFBQVEsR0FBRyxLQUE3QixLQUF1Q2IsS0FBSyxJQUNyRSxZQUNDYSxRQUFRLEdBQUksR0FBRUMsc0RBQVEsQ0FBQ0YsS0FBRCxDQUFRLEdBQXRCLEdBQTJCLEVBQ3BDLGtCQUFpQmIsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENBQVEsRUFIN0M7QUFLQSxNQUFNZSxnQkFBZ0IsR0FBRyxDQUFDSCxLQUFLLEdBQUcsQ0FBVCxFQUFZQyxRQUFRLEdBQUcsS0FBdkIsS0FDOUJGLFlBQVksQ0FBQyx3QkFBRCxFQUEyQkMsS0FBM0IsRUFBa0NDLFFBQWxDLENBRFA7QUFFQSxNQUFNRyxjQUFjLEdBQUcsQ0FBQ0osS0FBSyxHQUFHLENBQVQsRUFBWUMsUUFBUSxHQUFHLEtBQXZCLEtBQzVCRixZQUFZLENBQUMsWUFBRCxFQUFlQyxLQUFmLEVBQXNCQyxRQUF0QixDQURQO0FBRUEsTUFBTUksZUFBZSxHQUFHLENBQUNMLEtBQUssR0FBRyxDQUFULEVBQVlDLFFBQVEsR0FBRyxLQUF2QixLQUM3QkYsWUFBWSxDQUFDLHNCQUFELEVBQXlCQyxLQUF6QixFQUFnQ0MsUUFBaEMsQ0FEUDtBQUVBLE1BQU1LLGVBQWUsR0FBRyxDQUFDTixLQUFLLEdBQUcsQ0FBVCxFQUFZQyxRQUFRLEdBQUcsS0FBdkIsS0FDN0JGLFlBQVksQ0FBQyxVQUFELEVBQWFDLEtBQWIsRUFBb0JDLFFBQXBCLENBRFA7QUFFQSxNQUFNTSxlQUFlLEdBQUcsQ0FBQ1AsS0FBSyxHQUFHLENBQVQsRUFBWUMsUUFBUSxHQUFHLEtBQXZCLEtBQzdCRixZQUFZLENBQUMsVUFBRCxFQUFhQyxLQUFiLEVBQW9CQyxRQUFwQixDQURQO0FBRUEsTUFBTU8sZUFBZSxHQUFHLENBQUNSLEtBQUssR0FBRyxDQUFULEVBQVlDLFFBQVEsR0FBRyxLQUF2QixLQUM3QkYsWUFBWSxDQUFDLFVBQUQsRUFBYUMsS0FBYixFQUFvQkMsUUFBcEIsQ0FEUDtBQUVBLE1BQU1RLGtCQUFrQixHQUFHLENBQUNULEtBQUssR0FBRyxDQUFULEVBQVlDLFFBQVEsR0FBRyxLQUF2QixLQUNoQ0YsWUFBWSxDQUFDLG9DQUFELEVBQXVDQyxLQUF2QyxFQUE4Q0MsUUFBOUMsQ0FEUDtBQUdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUyxZQUFZLEdBQUcsQ0FBQ3ZCLElBQUQsRUFBT3dCLEdBQVAsS0FBZXZCLEtBQUssSUFDN0MsWUFBV3VCLEdBQUksbUJBQWtCeEIsSUFBSyxXQUFVRSx1REFBUyxDQUFDRCxLQUFELENBQVEsRUFEN0Q7QUFHQSxNQUFNd0IsZ0JBQWdCLEdBQUdELEdBQUcsSUFDakNELFlBQVksQ0FBQyx3QkFBRCxFQUEyQkMsR0FBM0IsQ0FEUDtBQUVBLE1BQU1FLGNBQWMsR0FBR0YsR0FBRyxJQUFJRCxZQUFZLENBQUMsWUFBRCxFQUFlQyxHQUFmLENBQTFDO0FBQ0EsTUFBTUcsZUFBZSxHQUFHSCxHQUFHLElBQUlELFlBQVksQ0FBQyxVQUFELEVBQWFDLEdBQWIsQ0FBM0M7QUFDQSxNQUFNSSxlQUFlLEdBQUdKLEdBQUcsSUFBSUQsWUFBWSxDQUFDLFVBQUQsRUFBYUMsR0FBYixDQUEzQztBQUNBLE1BQU1LLGVBQWUsR0FBR0wsR0FBRyxJQUFJRCxZQUFZLENBQUMsVUFBRCxFQUFhQyxHQUFiLENBQTNDO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTTSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjlCLEtBQTFCLEVBQWlDRixTQUFqQyxFQUE0QztBQUMxQyxRQUFNLElBQUlpQyxLQUFKLENBQVcsSUFBR0QsSUFBSyxNQUFLaEMsU0FBUyxDQUFDRSxLQUFELENBQVEsRUFBekMsQ0FBTjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sU0FBU2dDLFVBQVQsQ0FBb0JGLElBQXBCLEVBQTBCOUIsS0FBMUIsRUFBaUNGLFNBQVMsR0FBR0ksYUFBN0MsRUFBNEQ7QUFDakUsTUFBSSxPQUFPRixLQUFQLEtBQWlCLFFBQWpCLElBQTZCaUMsd0RBQVUsQ0FBQ2pDLEtBQUQsQ0FBVixLQUFzQixDQUF2RCxFQUEwRDtBQUN4RDZCLGNBQVUsQ0FBQ0MsSUFBRCxFQUFPOUIsS0FBUCxFQUFjRixTQUFkLENBQVY7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTb0MsY0FBVCxDQUF3QkosSUFBeEIsRUFBOEI5QixLQUE5QixFQUFxQ0YsU0FBUyxHQUFHSyxXQUFqRCxFQUE4RDtBQUNuRSxNQUFJLE9BQU9ILEtBQVAsS0FBaUIsVUFBakIsSUFBK0JtQyw0Q0FBTSxDQUFDQyxPQUFQLENBQWVwQyxLQUFmLENBQW5DLEVBQTBEO0FBQ3hENkIsY0FBVSxDQUFDQyxJQUFELEVBQU85QixLQUFQLEVBQWNGLFNBQWQsQ0FBVjtBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVN1QyxpQkFBVCxDQUEyQlAsSUFBM0IsRUFBaUM5QixLQUFqQyxFQUF3Q0YsU0FBUyxHQUFHTSxZQUFwRCxFQUFrRTtBQUN2RSxNQUFJa0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqQixDQUEwQkMsSUFBMUIsQ0FBK0J6QyxLQUEvQixNQUEwQyw0QkFBOUMsRUFBNEU7QUFDMUU2QixjQUFVLENBQUNDLElBQUQsRUFBTzlCLEtBQVAsRUFBY0YsU0FBZCxDQUFWO0FBQ0Q7QUFDRjtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzRDLFlBQVQsQ0FBc0JaLElBQXRCLEVBQTRCOUIsS0FBNUIsRUFBbUNGLFNBQVMsR0FBR08sWUFBL0MsRUFBNkQ7QUFDbEUsTUFBSSxPQUFPTCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCNkIsVUFBVSxDQUFDQyxJQUFELEVBQU85QixLQUFQLEVBQWNGLFNBQWQsQ0FBVjtBQUNoQztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzZDLFdBQVQsQ0FBcUJiLElBQXJCLEVBQTJCOUIsS0FBM0IsRUFBa0NGLFNBQVMsR0FBR1EsWUFBOUMsRUFBNEQ7QUFDakUsTUFBSSxDQUFDc0MsS0FBSyxDQUFDQyxPQUFOLENBQWM3QyxLQUFkLENBQUwsRUFBMkI2QixVQUFVLENBQUNDLElBQUQsRUFBTzlCLEtBQVAsRUFBY0YsU0FBZCxDQUFWO0FBQzVCO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNnRCxtQkFBVCxDQUE2QmhCLElBQTdCLEVBQW1DOUIsS0FBbkMsRUFBMENGLFNBQVMsR0FBR1MsZUFBdEQsRUFBdUU7QUFDNUUsTUFBSSxFQUNGcUMsS0FBSyxDQUFDQyxPQUFOLENBQWM3QyxLQUFkLEtBQ0dBLEtBQUssQ0FBQytDLEtBQU4sQ0FBWUMsQ0FBQyxJQUFJLE9BQU9BLENBQVAsS0FBYSxRQUFiLElBQXlCZix3REFBVSxDQUFDZSxDQUFELENBQVYsS0FBa0IsQ0FBNUQsQ0FESCxJQUVHLE9BQU9oRCxLQUFQLEtBQWlCLFFBSGxCLENBQUosRUFJRztBQUNENkIsY0FBVSxDQUFDQyxJQUFELEVBQU85QixLQUFQLEVBQWNGLFNBQWQsQ0FBVjtBQUNEO0FBQ0Y7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNtRCxvQkFBVCxDQUE4Qm5CLElBQTlCLEVBQW9DOUIsS0FBcEMsRUFBMkNGLFNBQVMsR0FBR1UsY0FBdkQsRUFBdUU7QUFDNUUsTUFBSSxPQUFPUixLQUFQLEtBQWlCLFFBQWpCLElBQ0NzQyxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFFBQWpCLENBQTBCQyxJQUExQixDQUErQnpDLEtBQS9CLE1BQTBDLGlCQUQvQyxFQUNrRTtBQUNoRTZCLGNBQVUsQ0FBQ0MsSUFBRCxFQUFPOUIsS0FBUCxFQUFjRixTQUFkLENBQVY7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTb0QsWUFBVCxDQUFzQnBCLElBQXRCLEVBQTRCOUIsS0FBNUIsRUFBbUNGLFNBQVMsR0FBR1csWUFBL0MsRUFBNkQ7QUFDbEUsTUFBSSxPQUFPVCxLQUFQLEtBQWlCLFFBQXJCLEVBQStCNkIsVUFBVSxDQUFDQyxJQUFELEVBQU85QixLQUFQLEVBQWNGLFNBQWQsQ0FBVjtBQUNoQztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3FELFlBQVQsQ0FBc0JyQixJQUF0QixFQUE0QjlCLEtBQTVCLEVBQW1DRixTQUFTLEdBQUdZLFlBQS9DLEVBQTZEO0FBQ2xFLE1BQUksT0FBT1YsS0FBUCxLQUFpQixVQUFqQixJQUErQixDQUFDbUMsNENBQU0sQ0FBQ0MsT0FBUCxDQUFlcEMsS0FBZixDQUFwQyxFQUEyRDtBQUN6RDZCLGNBQVUsQ0FBQ0MsSUFBRCxFQUFPOUIsS0FBUCxFQUFjRixTQUFkLENBQVY7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNzRCxhQUFULENBQXVCdEIsSUFBdkIsRUFBNkJ1QixNQUE3QixFQUFxQztBQUMxQyxPQUFLLE1BQU0sQ0FBQ0MsQ0FBRCxFQUFJdEQsS0FBSixDQUFYLElBQXlCdUQsdURBQVMsQ0FBQ0YsTUFBRCxDQUFsQyxFQUE0QztBQUMxQ0YsZ0JBQVksQ0FBQ3JCLElBQUQsRUFBTzlCLEtBQVAsRUFBYzJCLGVBQWUsQ0FBQzZCLHFEQUFPLENBQUNGLENBQUMsR0FBRyxDQUFMLENBQVIsQ0FBN0IsQ0FBWjtBQUNEO0FBQ0YsQzs7Ozs7Ozs7Ozs7O0FDaE9EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFRyxJQUFGO0FBQU1DLE1BQU47QUFBWUM7QUFBWixJQUFzQkMsa0RBQTVCO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNQyxHQUFHLEdBQUcsQ0FBQyxHQUFHQyxJQUFKLEtBQWE7QUFDOUIsUUFBTUMsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsRUFBWDtBQUNBLFFBQU1DLENBQUMsR0FBRyxPQUFPSCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWYsQ0FBWCxLQUFpQyxRQUFqQyxHQUE0Q0gsRUFBRSxDQUFDSSxHQUFILEVBQTVDLEdBQXVELElBQWpFO0FBRUEsU0FBT2hDLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbkIsVUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssVUFBTSxJQUFJUCxLQUFWO0FBR0EsUUFBSVEsTUFBTSxHQUFHRixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQixFQUFsQzs7QUFFQSxTQUFLLE1BQU1RLENBQVgsSUFBZ0JWLEVBQWhCLEVBQW9CO0FBQ2xCLFlBQU0sQ0FBQ1csSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCQyx1REFBRyxDQUFDSixDQUFDLENBQUNMLEdBQUQsQ0FBRixDQUFoQztBQUNBLFVBQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU9pQixJQUFQO0FBRXhCLFVBQUksQ0FBQ0wsSUFBTCxFQUFXRSxNQUFNLEdBQUdRLDBEQUFLLENBQUNSLE1BQUQsRUFBU0ssSUFBSSxDQUFDTCxNQUFkLENBQWQ7QUFDWCxVQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQixPQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPSixNQUFQLENBQWpCO0FBQzVCOztBQUNELFdBQU9VLDZEQUFTLENBQUNiLEdBQUQsRUFBTUcsTUFBTixDQUFoQjtBQUNELEdBaEJZLENBQWI7QUFpQkQsQ0FyQk07QUF1QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1XLEdBQUcsR0FBRyxDQUFDVCxDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDekMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDZ0MsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCQyx1REFBRyxDQUFDSixDQUFDLENBQUNMLEdBQUQsQ0FBRixDQUFoQztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU9pQixJQUFQO0FBQ3hCLFFBQU1ILE1BQU0sR0FBR0YsSUFBSSxHQUFHRyw2REFBUSxDQUFDUCxDQUFELENBQVgsR0FBaUJXLElBQUksQ0FBQ0wsTUFBekM7QUFDQSxNQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQixPQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPSixNQUFQLENBQWpCLENBVGMsQ0FXekM7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBTVksS0FBSyxHQUFHQywyREFBTyxDQUFDVCxJQUFELEVBQU8sSUFBUCxDQUFyQjtBQUNBUSxPQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNaLE1BQVQsR0FBa0JBLE1BQWxCO0FBQ0EsU0FBT1ksS0FBUDtBQUNELENBbEJrQyxDQUE1QjtBQW9CUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1FLEdBQUcsR0FBRyxDQUFDWixDQUFELEVBQUlhLENBQUosRUFBT3JCLENBQVAsS0FBYTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDNUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDZ0MsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCQyx1REFBRyxDQUFDSixDQUFDLENBQUNMLEdBQUQsQ0FBRixDQUFoQztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU9pQixJQUFQO0FBQ3hCLE1BQUlFLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCLE9BQU8wQiwyREFBTyxDQUFDVCxJQUFELEVBQU9XLENBQVAsQ0FBZDtBQUMxQixTQUFPTiw4REFBVSxDQUFDTCxJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlXLElBQUksQ0FBQ0wsTUFBVCxDQUFiLENBQWpCO0FBQ0QsQ0FWcUMsQ0FBL0I7QUFZUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWlCLElBQUksR0FBRyxDQUFDZixDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDMUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTStDLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBQ0EsUUFBTSxDQUFDZCxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCO0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0IsT0FBTzJCLDJEQUFPLENBQUNULElBQUQsRUFBT0MsSUFBSSxDQUFDNUUsS0FBWixFQUFtQnlGLEtBQW5CLENBQWQ7O0FBQ3hCLE1BQUliLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBQ3hCLFdBQU91Qiw2REFBUyxDQUFDTixJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlXLElBQUksQ0FBQ0wsTUFBVCxDQUFiLEVBQStCa0IsS0FBL0IsQ0FBaEI7QUFDRCxHQVh5QyxDQVkxQztBQUNBOzs7QUFDQSxTQUFPUiw2REFBUyxDQUFDTixJQUFELEVBQU9lLDBEQUFNLENBQUN6QixDQUFELEVBQUlVLElBQUosRUFBVUMsSUFBSSxDQUFDTCxNQUFmLENBQWIsRUFBcUNrQixLQUFyQyxDQUFoQjtBQUNELENBZm1DLENBQTdCO0FBaUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1FLEtBQUssR0FBRyxDQUFDbEIsQ0FBRCxFQUFJUixDQUFKLEtBQVU5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzNDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU0sQ0FBQ2QsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0QjtBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQWhCLElBQXNCa0IsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBQXpDLEVBQWdELE9BQU9MLDJEQUFPLENBQUNULElBQUQsRUFBTyxJQUFQLENBQWQ7QUFDaEQsUUFBTWlCLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsU0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT1ksMERBQU0sQ0FBQ3RCLENBQUQsRUFBSVcsSUFBSSxDQUFDTCxNQUFULENBQWIsQ0FBVDtBQUNELENBWG9DLENBQTlCO0FBYVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11QixHQUFHLEdBQUcsQ0FBQ3JCLENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUN6QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFDQSxRQUFNLENBQUNkLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7QUFDQSxTQUFPUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFoQixHQUNId0IsNkRBQVMsQ0FBQ04sSUFBRCxFQUFPWSwwREFBTSxDQUFDdEIsQ0FBRCxFQUFJOEIsU0FBSixDQUFiLEVBQTZCTixLQUE3QixDQUROLEdBRUhMLDJEQUFPLENBQUNULElBQUQsRUFBTyxJQUFQLEVBQWFjLEtBQWIsQ0FGWDtBQUdELENBWGtDLENBQTVCLEM7Ozs7Ozs7Ozs7OztBQzlMUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFhQTtBQUNBO0FBQ0E7QUFXQSxNQUFNO0FBQUVoQyxJQUFGO0FBQU1DLE1BQU47QUFBWUM7QUFBWixJQUFzQkMsa0RBQTVCO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNb0MsT0FBTyxHQUFHLENBQUN2QixDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDN0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTStDLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBRUEsUUFBTSxDQUFDZixJQUFELEVBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQVAsSUFBdUJDLHVEQUFHLENBQUNKLENBQUMsQ0FBQ0wsR0FBRCxDQUFGLENBQWhDO0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0IsT0FBT2lCLElBQVA7O0FBQ3hCLE1BQUlFLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWhCLElBQXlCZ0IsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBQTVDLEVBQW1EO0FBQ2pELFdBQU9SLDZEQUFTLENBQUNOLElBQUQsRUFBT2UsMERBQU0sQ0FBQ3pCLENBQUQsRUFBSVUsSUFBSixFQUFVQyxJQUFJLENBQUNMLE1BQWYsQ0FBYixFQUFxQ2tCLEtBQXJDLENBQWhCO0FBQ0Q7O0FBQ0QsTUFBSXBCLElBQUosRUFBVTtBQUNSLFFBQUlPLElBQUksQ0FBQ0wsTUFBTCxDQUFZTCxNQUFaLEtBQXVCLENBQXZCLElBQTRCVSxJQUFJLENBQUNMLE1BQUwsQ0FBWSxDQUFaLEVBQWV4RSxJQUFmLEtBQXdCa0csc0RBQVMsQ0FBQ0MsTUFBbEUsRUFBMEU7QUFDeEUsWUFBTTtBQUFFOUIsV0FBRjtBQUFPRztBQUFQLFVBQWtCSyxJQUFJLENBQUNMLE1BQUwsQ0FBWSxDQUFaLENBQXhCO0FBQ0EsYUFBT1UsNkRBQVMsQ0FBQ04sSUFBRCxFQUFPd0IsNkRBQVEsQ0FBQ2xDLENBQUQsRUFBSUcsR0FBSixFQUFTRyxNQUFULENBQWYsRUFBaUNrQixLQUFqQyxDQUFoQjtBQUNEOztBQUNELFdBQU9SLDZEQUFTLENBQUNOLElBQUQsRUFBT0gsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFmLEVBQW9Cd0IsS0FBcEIsQ0FBaEI7QUFDRDs7QUFDRCxTQUFPUiw2REFBUyxDQUFDTixJQUFELEVBQU9DLElBQUksQ0FBQ0wsTUFBWixFQUFvQmtCLEtBQXBCLENBQWhCO0FBQ0QsQ0FyQnNDLENBQWhDO0FBdUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNVyxJQUFJLEdBQUcsQ0FBQyxHQUFHdEMsSUFBSixLQUFhO0FBQy9CLFFBQU1DLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLEVBQVg7QUFDQSxRQUFNQyxDQUFDLEdBQUcsT0FBT0YsRUFBRSxDQUFDQSxFQUFFLENBQUNHLE1BQUgsR0FBWSxDQUFiLENBQVQsS0FBNkIsUUFBN0IsR0FBd0NILEVBQUUsQ0FBQ0ksR0FBSCxFQUF4QyxHQUFtRCxJQUE3RDtBQUVBLFNBQU9oQywwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ25CRSxVQUFNLElBQUlQLEtBQVY7QUFHQSxVQUFNVixNQUFNLEdBQUcsRUFBZjtBQUNBLFVBQU1vQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQUlZLE9BQU8sR0FBR2pDLEdBQWQ7QUFDQSxRQUFJRyxNQUFNLEdBQUcsRUFBYjs7QUFFQSxTQUFLLE1BQU1FLENBQVgsSUFBZ0JWLEVBQWhCLEVBQW9CO0FBQUE7O0FBQ2xCLFlBQU0sQ0FBQ1ksSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsYUFBTyxHQUFHMUIsSUFBVjtBQUNBSixZQUFNLEdBQUcsaUJBQUFLLElBQUksQ0FBQ0wsTUFBTCw4REFBYUwsTUFBYixJQUFzQmEsMERBQUssQ0FBQ1IsTUFBRCxFQUFTSyxJQUFJLENBQUNMLE1BQWQsQ0FBM0IsR0FBbUQsRUFBNUQ7O0FBRUEsVUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsZUFBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT1ksMERBQU0sQ0FBQ3RCLENBQUQsRUFBSVcsSUFBSSxDQUFDTCxNQUFULENBQWIsQ0FBakI7QUFDRDs7QUFDRCxVQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUN4QixjQUFNNEMsS0FBSyxHQUFHQywwREFBTSxDQUFDNUIsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBQWhCLEVBQXVCeEIsQ0FBdkIsRUFBMEJVLElBQTFCLEVBQWdDSixNQUFoQyxDQUFwQjtBQUNBLGVBQU9VLDZEQUFTLENBQUNOLElBQUQsRUFBTzJCLEtBQVAsRUFBY2IsS0FBZCxDQUFoQjtBQUNEOztBQUNEcEMsWUFBTSxDQUFDbUQsSUFBUCxDQUFZNUIsSUFBSSxDQUFDNUUsS0FBakI7QUFDRDs7QUFDRCxXQUFPb0YsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVWhELE1BQVYsQ0FBZDtBQUNELEdBeEJZLENBQWI7QUF5QkQsQ0E3Qk07QUErQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTW9ELE1BQU0sR0FBRyxDQUFDaEMsQ0FBRCxFQUFJbUIsRUFBSixFQUFRM0IsQ0FBUixLQUFjOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNoRCxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUlwQyxLQUFWO0FBQ0FvQyxRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFFQSxRQUFNLENBQUNkLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT1ksMERBQU0sQ0FBQ3RCLENBQUQsRUFBSVcsSUFBSSxDQUFDTCxNQUFULENBQWIsQ0FBVDtBQUNEOztBQUVELFFBQU1tQyxDQUFDLEdBQUdkLEVBQUUsQ0FBQ2hCLElBQUksQ0FBQzVFLEtBQU4sQ0FBWjtBQUNBc0UsUUFBTSxJQUFJbkIsS0FBVjtBQUlBLFFBQU0sQ0FBQ3dELElBQUQsRUFBTyxDQUFDQyxJQUFELEVBQU9DLElBQVAsQ0FBUCxJQUF1QmhDLHVEQUFHLENBQUM2QixDQUFDLENBQUMvQixJQUFELENBQUYsQ0FBaEM7QUFDQSxNQUFJa0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU9rRCxJQUFQO0FBRXhCLFFBQU1wQyxNQUFNLEdBQUdRLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBcEI7QUFDQSxNQUFJc0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDNEIsSUFBRCxFQUFPckIsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSU0sTUFBSixDQUFiLENBQWpCO0FBQzNCLFFBQU0rQixLQUFLLEdBQUdDLDBEQUFNLENBQUNLLElBQUksQ0FBQ25CLEtBQUwsS0FBZUEsS0FBaEIsRUFBdUJ4QixDQUF2QixFQUEwQjJDLElBQTFCLEVBQWdDckMsTUFBaEMsQ0FBcEI7QUFDQSxTQUFPVSw2REFBUyxDQUFDMkIsSUFBRCxFQUFPTixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRCxDQTNCeUMsQ0FBbkM7QUE2QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1xQixNQUFNLEdBQUcsQ0FBQ3JDLENBQUQsRUFBSWlDLENBQUosRUFBT3pDLENBQVAsS0FBYTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDL0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTStDLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBRUEsUUFBTSxDQUFDZCxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlXLElBQUksQ0FBQ0wsTUFBVCxDQUFiLENBQVQ7QUFDRDs7QUFFRCxRQUFNLENBQUNxQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDL0IsSUFBRCxDQUF0QjtBQUNBLFFBQU1KLE1BQU0sR0FBR1EsMERBQUssQ0FBQ0gsSUFBSSxDQUFDTCxNQUFOLEVBQWNzQyxJQUFJLENBQUN0QyxNQUFuQixDQUFwQjtBQUNBLE1BQUlzQyxJQUFJLENBQUMvQixNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkIsT0FBT3FCLDhEQUFVLENBQUM0QixJQUFELEVBQU9yQiwwREFBTSxDQUFDdEIsQ0FBRCxFQUFJTSxNQUFKLENBQWIsQ0FBakI7O0FBQzNCLE1BQUlzQyxJQUFJLENBQUMvQixNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFDeEIsVUFBTTRDLEtBQUssR0FBR0MsMERBQU0sQ0FBQ0ssSUFBSSxDQUFDbkIsS0FBTCxLQUFlQSxLQUFoQixFQUF1QnhCLENBQXZCLEVBQTBCMkMsSUFBMUIsRUFBZ0NyQyxNQUFoQyxDQUFwQjtBQUNBLFdBQU9VLDZEQUFTLENBQUMyQixJQUFELEVBQU9OLEtBQVAsRUFBY2IsS0FBZCxDQUFoQjtBQUNEOztBQUVELFFBQU1HLEVBQUUsR0FBR2lCLElBQUksQ0FBQzdHLEtBQWhCO0FBQ0FzRSxRQUFNLElBQUlwQyxLQUFWO0FBR0EsU0FBT2tELDJEQUFPLENBQUN3QixJQUFELEVBQU9oQixFQUFFLENBQUNoQixJQUFJLENBQUM1RSxLQUFOLENBQVQsQ0FBZDtBQUNELENBNUJ3QyxDQUFsQztBQThCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNK0csS0FBSyxHQUFHLENBQUN0QyxDQUFELEVBQUlpQyxDQUFKLEVBQU96QyxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzlDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUVBLFFBQU0sQ0FBQ2QsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPWSwwREFBTSxDQUFDdEIsQ0FBRCxFQUFJVyxJQUFJLENBQUNMLE1BQVQsQ0FBYixDQUFUO0FBQ0Q7O0FBRUQsUUFBTSxDQUFDcUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQy9CLElBQUQsQ0FBdEI7QUFDQSxNQUFJa0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU8yQiwyREFBTyxDQUFDd0IsSUFBRCxFQUFPaEMsSUFBSSxDQUFDNUUsS0FBWixDQUFkO0FBRXhCLFFBQU11RSxNQUFNLEdBQUdRLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBcEI7QUFDQSxNQUFJc0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDNEIsSUFBRCxFQUFPckIsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSU0sTUFBSixDQUFiLENBQWpCO0FBRTNCLFFBQU0rQixLQUFLLEdBQUdDLDBEQUFNLENBQUNLLElBQUksQ0FBQ25CLEtBQUwsS0FBZUEsS0FBaEIsRUFBdUJ4QixDQUF2QixFQUEwQjJDLElBQTFCLEVBQWdDckMsTUFBaEMsQ0FBcEI7QUFDQSxTQUFPVSw2REFBUyxDQUFDMkIsSUFBRCxFQUFPTixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRCxDQXZCdUMsQ0FBakM7QUF5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXVCLE1BQU0sR0FBRyxDQUFDdkMsQ0FBRCxFQUFJaUMsQ0FBSixFQUFPekMsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUMvQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFFQSxRQUFNLENBQUNkLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT1ksMERBQU0sQ0FBQ3RCLENBQUQsRUFBSVcsSUFBSSxDQUFDTCxNQUFULENBQWIsQ0FBVDtBQUNEOztBQUVELFFBQU0sQ0FBQ29DLElBQUQsRUFBTyxDQUFDQyxJQUFELEVBQU9DLElBQVAsQ0FBUCxJQUF1QmhDLHVEQUFHLENBQUM2QixDQUFDLENBQUMvQixJQUFELENBQUYsQ0FBaEM7QUFDQSxNQUFJa0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCLE9BQU9rRCxJQUFQO0FBRXhCLFFBQU1wQyxNQUFNLEdBQUdRLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBcEI7QUFDQSxNQUFJc0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDNEIsSUFBRCxFQUFPckIsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSU0sTUFBSixDQUFiLENBQWpCO0FBRTNCLFFBQU0rQixLQUFLLEdBQUdDLDBEQUFNLENBQUNLLElBQUksQ0FBQ25CLEtBQUwsS0FBZUEsS0FBaEIsRUFBdUJ4QixDQUF2QixFQUEwQjJDLElBQTFCLEVBQWdDckMsTUFBaEMsQ0FBcEI7QUFDQSxTQUFPVSw2REFBUyxDQUFDMkIsSUFBRCxFQUFPTixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRCxDQXZCd0MsQ0FBbEM7QUF5QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNd0IsT0FBTyxHQUFHLENBQUN4QyxDQUFELEVBQUl5QyxDQUFKLEVBQU9qRCxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ2hELFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSXBCLEtBQVY7QUFDQW9CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU1wQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlnRCxPQUFPLEdBQUdqQyxHQUFkOztBQUVBLE9BQUssTUFBTStDLENBQVgsSUFBZ0JDLHlEQUFLLENBQUNGLENBQUQsQ0FBckIsRUFBMEI7QUFDeEIsVUFBTSxDQUFDdkMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHMUIsSUFBVjtBQUNBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlXLElBQUksQ0FBQ0wsTUFBVCxDQUFiLENBQWpCOztBQUMzQixRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUN4QixZQUFNNEMsS0FBSyxHQUFHQywwREFBTSxDQUFDNUIsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBQWhCLEVBQXVCeEIsQ0FBdkIsRUFBMEJVLElBQTFCLEVBQWdDQyxJQUFJLENBQUNMLE1BQXJDLENBQXBCO0FBQ0EsYUFBT1UsNkRBQVMsQ0FBQ04sSUFBRCxFQUFPMkIsS0FBUCxFQUFjYixLQUFkLENBQWhCO0FBQ0Q7O0FBQ0RwQyxVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNEOztBQUNELFNBQU9vRiwyREFBTyxDQUFDaUIsT0FBRCxFQUFVaEQsTUFBVixDQUFkO0FBQ0QsQ0F0QnlDLENBQW5DO0FBd0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNZ0UsTUFBTSxHQUFHLENBQUM1QyxDQUFELEVBQUk2QyxDQUFKLEVBQU9yRCxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQy9DLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU1wQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlnRCxPQUFPLEdBQUdqQyxHQUFkOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDbUQsSUFBRCxFQUFPQyxJQUFQLElBQWVGLENBQUMsQ0FBQ2pCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHa0IsSUFBVjtBQUNBLFFBQUlDLElBQUksQ0FBQzFDLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQixPQUFPcUIsOERBQVUsQ0FBQ3VDLElBQUQsRUFBT2hDLDBEQUFNLENBQUN0QixDQUFELEVBQUl1RCxJQUFJLENBQUNqRCxNQUFULENBQWIsQ0FBakI7QUFDM0IsUUFBSWlELElBQUksQ0FBQzFDLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUV4QixVQUFNLENBQUNrQixJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWO0FBQ0EsUUFBSUMsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkIsT0FBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT1ksMERBQU0sQ0FBQ3RCLENBQUQsRUFBSVcsSUFBSSxDQUFDTCxNQUFULENBQWIsQ0FBakI7O0FBQzNCLFFBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBQ3hCLFlBQU00QyxLQUFLLEdBQUdDLDBEQUFNLENBQ2xCNUIsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBREcsRUFDSXhCLENBREosRUFDT1UsSUFEUCxFQUNhSSwwREFBSyxDQUFDSCxJQUFJLENBQUNMLE1BQU4sRUFBY2lELElBQUksQ0FBQ2pELE1BQW5CLENBRGxCLENBQXBCO0FBR0EsYUFBT1UsNkRBQVMsQ0FBQ04sSUFBRCxFQUFPMkIsS0FBUCxFQUFjYixLQUFkLENBQWhCO0FBQ0Q7O0FBQ0RwQyxVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNEOztBQUNELFNBQU9vRiwyREFBTyxDQUFDaUIsT0FBRCxFQUFVaEQsTUFBVixDQUFkO0FBQ0QsQ0E3QndDLENBQWxDO0FBK0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1vRSxNQUFNLEdBQUcsQ0FBQ0MsQ0FBRCxFQUFJekQsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM1QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUlqQyxLQUFWO0FBQ0FpQyxRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNaUYsR0FBRyxHQUFHRCxDQUFDLEVBQWI7QUFDQSxRQUFNakMsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFDQSxNQUFJbEIsTUFBTSxHQUFHLEVBQWI7QUFDQSxNQUFJcUQsU0FBSjtBQUNBLE1BQUl2QixPQUFPLEdBQUdqQyxHQUFkO0FBQ0EsTUFBSWQsQ0FBQyxHQUFHLENBQVI7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFBQTs7QUFDWCxVQUFNO0FBQUV0RCxXQUFGO0FBQVM2SDtBQUFULFFBQWtCRixHQUFHLENBQUNHLElBQUosQ0FBU0YsU0FBVCxDQUF4QjtBQUNBLFFBQUlDLElBQUosRUFBVSxPQUFPekMsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVXJHLEtBQVYsQ0FBZDtBQUVWc0UsVUFBTSxJQUFJbkIsS0FBVjtBQUlBLFVBQU0sQ0FBQ3dCLElBQUQsRUFBT0MsSUFBUCxJQUFlNUUsS0FBSyxDQUFDcUcsT0FBRCxDQUExQjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWO0FBQ0FKLFVBQU0sR0FBRyxrQkFBQUssSUFBSSxDQUFDTCxNQUFMLGdFQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDUixNQUFELEVBQVNLLElBQUksQ0FBQ0wsTUFBZCxDQUEzQixHQUFtRCxFQUE1RDtBQUVBLFFBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlNLE1BQUosQ0FBYixDQUFqQjs7QUFDM0IsUUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFDeEIsWUFBTTRDLEtBQUssR0FBR0MsMERBQU0sQ0FBQzVCLElBQUksQ0FBQ2MsS0FBTCxLQUFlQSxLQUFoQixFQUF1QnhCLENBQXZCLEVBQTBCVSxJQUExQixFQUFnQ0osTUFBaEMsQ0FBcEI7QUFDQSxhQUFPVSw2REFBUyxDQUFDTixJQUFELEVBQU8yQixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRDs7QUFDRG1DLGFBQVMsR0FBR2hELElBQUksQ0FBQzVFLEtBQWpCO0FBQ0FzRCxLQUFDO0FBQ0Y7QUFDRixDQWpDcUMsQ0FBL0I7QUFtQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNeUUsS0FBSyxHQUFHLENBQUMsR0FBR2pFLElBQUosS0FBYTtBQUNoQyxRQUFNQyxFQUFFLEdBQUdELElBQUksQ0FBQ0UsS0FBTCxFQUFYO0FBQ0EsUUFBTUMsQ0FBQyxHQUFHLE9BQU9GLEVBQUUsQ0FBQ0EsRUFBRSxDQUFDRyxNQUFILEdBQVksQ0FBYixDQUFULEtBQTZCLFFBQTdCLEdBQXdDSCxFQUFFLENBQUNJLEdBQUgsRUFBeEMsR0FBbUQsSUFBN0Q7QUFDQSxRQUFNeUIsRUFBRSxHQUFHN0IsRUFBRSxDQUFDSSxHQUFILEVBQVg7QUFFQSxTQUFPaEMsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNuQkUsVUFBTSxJQUFJUCxLQUFWO0FBR0FPLFVBQU0sSUFBSXBDLEtBQVY7QUFFQSxVQUFNdUQsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFDQSxVQUFNcEMsTUFBTSxHQUFHLEVBQWY7QUFDQSxRQUFJZ0QsT0FBTyxHQUFHakMsR0FBZDtBQUNBLFFBQUlHLE1BQU0sR0FBRyxFQUFiOztBQUVBLFNBQUssTUFBTUUsQ0FBWCxJQUFnQlYsRUFBaEIsRUFBb0I7QUFBQTs7QUFDbEIsWUFBTSxDQUFDWSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxhQUFPLEdBQUcxQixJQUFWO0FBQ0FKLFlBQU0sR0FBRyxrQkFBQUssSUFBSSxDQUFDTCxNQUFMLGdFQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDUixNQUFELEVBQVNLLElBQUksQ0FBQ0wsTUFBZCxDQUEzQixHQUFtRCxFQUE1RDtBQUVBLFVBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlNLE1BQUosQ0FBYixDQUFqQjs7QUFDM0IsVUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFDeEIsY0FBTTRDLEtBQUssR0FBR0MsMERBQU0sQ0FBQzVCLElBQUksQ0FBQ2MsS0FBTCxLQUFlQSxLQUFoQixFQUF1QnhCLENBQXZCLEVBQTBCVSxJQUExQixFQUFnQ0osTUFBaEMsQ0FBcEI7QUFDQSxlQUFPVSw2REFBUyxDQUFDTixJQUFELEVBQU8yQixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRDs7QUFDRHBDLFlBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0Q7O0FBQ0QsV0FBT29GLDJEQUFPLENBQUNpQixPQUFELEVBQVVULEVBQUUsQ0FBQyxHQUFHdkMsTUFBSixDQUFaLENBQWQ7QUFDRCxHQXhCWSxDQUFiO0FBeUJELENBOUJNO0FBZ0NQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNMkUsUUFBUSxHQUFHLENBQUNDLENBQUQsRUFBSVgsQ0FBSixFQUFPN0MsQ0FBUCxFQUFVUixDQUFWLEtBQWdCOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUFBOztBQUNwRCxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFFQSxRQUFNLENBQUN5QyxJQUFELEVBQU9DLElBQVAsSUFBZUYsQ0FBQyxDQUFDN0QsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJK0QsSUFBSSxDQUFDckQsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNzQyxJQUFJLENBQUNyRCxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDc0MsSUFBRCxFQUFPM0MsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWtFLElBQUksQ0FBQzVELE1BQVQsQ0FBYixDQUFUO0FBQ0Q7O0FBRUQsUUFBTSxDQUFDSSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDeUQsSUFBRCxDQUF0QjtBQUNBLFFBQU0zRCxNQUFNLEdBQUcsa0JBQUFLLElBQUksQ0FBQ0wsTUFBTCxnRUFBYUwsTUFBYixJQUFzQmEsMERBQUssQ0FBQ29ELElBQUksQ0FBQzVELE1BQU4sRUFBY0ssSUFBSSxDQUFDTCxNQUFuQixDQUEzQixHQUF3RCxFQUF2RTtBQUNBLE1BQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCLE9BQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9ZLDBEQUFNLENBQUN0QixDQUFELEVBQUlNLE1BQUosQ0FBYixDQUFqQjs7QUFDM0IsTUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFDeEIsVUFBTTRDLEtBQUssR0FBR0MsMERBQU0sQ0FBQzVCLElBQUksQ0FBQ2MsS0FBTCxLQUFlQSxLQUFoQixFQUF1QnhCLENBQXZCLEVBQTBCVSxJQUExQixFQUFnQ0osTUFBaEMsQ0FBcEI7QUFDQSxXQUFPVSw2REFBUyxDQUFDTixJQUFELEVBQU8yQixLQUFQLEVBQWNiLEtBQWQsQ0FBaEI7QUFDRDs7QUFFRCxRQUFNLENBQUM4QixJQUFELEVBQU9DLElBQVAsSUFBZUYsQ0FBQyxDQUFDM0MsSUFBRCxDQUF0Qjs7QUFDQSxNQUFJNkMsSUFBSSxDQUFDMUMsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLFdBQU9xQiw4REFBVSxDQUFDdUMsSUFBRCxFQUFPaEMsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWMsMERBQUssQ0FBQ1IsTUFBRCxFQUFTaUQsSUFBSSxDQUFDakQsTUFBZCxDQUFULENBQWIsQ0FBakI7QUFDRDs7QUFDRCxNQUFJaUQsSUFBSSxDQUFDMUMsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBQ3hCLFVBQU00QyxLQUFLLEdBQUdDLDBEQUFNLENBQ2xCZ0IsSUFBSSxDQUFDOUIsS0FBTCxLQUFlQSxLQURHLEVBQ0l4QixDQURKLEVBQ09zRCxJQURQLEVBQ2F4QywwREFBSyxDQUFDUixNQUFELEVBQVNpRCxJQUFJLENBQUNqRCxNQUFkLENBRGxCLENBQXBCO0FBR0EsV0FBT1UsNkRBQVMsQ0FBQ3NDLElBQUQsRUFBT2pCLEtBQVAsRUFBY2IsS0FBZCxDQUFoQjtBQUNEOztBQUNELFNBQU9MLDJEQUFPLENBQUNtQyxJQUFELEVBQU8zQyxJQUFJLENBQUM1RSxLQUFaLENBQWQ7QUFDRCxDQW5DNkMsQ0FBdkMsQzs7Ozs7Ozs7Ozs7O0FDcmZQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBRUEsTUFBTTtBQUFFeUQsSUFBRjtBQUFNRTtBQUFOLElBQWdCQyxrREFBdEI7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNd0UsSUFBSSxHQUFHLENBQUMzRCxDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDMUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDaUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQlcsSUFBSSxDQUFDTCxNQUFqQyxDQUFUO0FBQ0Q7O0FBRUQsUUFBTThELENBQUMsR0FBR3pELElBQUksQ0FBQzVFLEtBQWY7QUFDQXNFLFFBQU0sSUFBSTNCLEtBQVY7QUFFQSxTQUFPeUMsMkRBQU8sQ0FBQ1QsSUFBRCxFQUFPMEQsQ0FBQyxDQUFDRCxJQUFGLENBQU8sRUFBUCxDQUFQLENBQWQ7QUFDRCxDQWhCbUMsQ0FBN0I7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNRSxPQUFPLEdBQUcsQ0FBQzdELENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM3QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNLENBQUNpQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQVQ7QUFDRDs7QUFFRCxRQUFNOEQsQ0FBQyxHQUFHekQsSUFBSSxDQUFDNUUsS0FBZjtBQUNBc0UsUUFBTSxJQUFJM0IsS0FBVjtBQUVBLFNBQU95QywyREFBTyxDQUFDVCxJQUFELEVBQU8wRCxDQUFDLENBQUNFLE1BQUYsQ0FBU2pELENBQUMsSUFBSUEsQ0FBQyxJQUFJLElBQW5CLENBQVAsQ0FBZDtBQUNELENBaEJzQyxDQUFoQztBQWtCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU10RixLQUFLLEdBQUcsQ0FBQ3lFLENBQUQsRUFBSWEsQ0FBSixFQUFPckIsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM5QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNLENBQUNpQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQVQ7QUFDRDs7QUFDRCxTQUFPYSwyREFBTyxDQUFDVCxJQUFELEVBQU9XLENBQVAsQ0FBZDtBQUNELENBWnVDLENBQWpDO0FBY1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNa0QsR0FBRyxHQUFHLENBQUMvRCxDQUFELEVBQUl5QyxDQUFKLEVBQU9qRCxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzVDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSXBCLEtBQVY7QUFDQW9CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0sQ0FBQ2lDLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT04sSUFBSSxHQUFHRyw2REFBUSxDQUFDUCxDQUFELENBQVgsR0FBaUJXLElBQUksQ0FBQ0wsTUFBakMsQ0FBVDtBQUNEOztBQUVELFFBQU04RCxDQUFDLEdBQUd6RCxJQUFJLENBQUM1RSxLQUFmO0FBQ0FzRSxRQUFNLElBQUkzQixLQUFWO0FBSUEsU0FBT3lDLDJEQUFPLENBQUNULElBQUQsRUFBTzBELENBQUMsQ0FBQ25CLENBQUQsQ0FBUixDQUFkO0FBQ0QsQ0FuQnFDLENBQS9CO0FBcUJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11QixLQUFLLEdBQUcsQ0FBQ2hFLENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUMzQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNLENBQUNpQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQVQ7QUFDRDs7QUFFRCxRQUFNOEQsQ0FBQyxHQUFHekQsSUFBSSxDQUFDNUUsS0FBZjtBQUNBc0UsUUFBTSxJQUFJM0IsS0FBVjtBQUVBLFNBQU95QywyREFBTyxDQUFDVCxJQUFELEVBQU8wRCxDQUFDLENBQUMsQ0FBRCxDQUFSLENBQWQ7QUFDRCxDQWhCb0MsQ0FBOUI7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUssTUFBTSxHQUFHLENBQUNqRSxDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDNUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDaUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQlcsSUFBSSxDQUFDTCxNQUFqQyxDQUFUO0FBQ0Q7O0FBRUQsUUFBTThELENBQUMsR0FBR3pELElBQUksQ0FBQzVFLEtBQWY7QUFDQXNFLFFBQU0sSUFBSTNCLEtBQVY7QUFFQSxTQUFPeUMsMkRBQU8sQ0FBQ1QsSUFBRCxFQUFPMEQsQ0FBQyxDQUFDLENBQUQsQ0FBUixDQUFkO0FBQ0QsQ0FoQnFDLENBQS9CO0FBa0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1NLEtBQUssR0FBRyxDQUFDbEUsQ0FBRCxFQUFJUixDQUFKLEtBQVU5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzNDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0sQ0FBQ2lDLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT04sSUFBSSxHQUFHRyw2REFBUSxDQUFDUCxDQUFELENBQVgsR0FBaUJXLElBQUksQ0FBQ0wsTUFBakMsQ0FBVDtBQUNEOztBQUVELFFBQU04RCxDQUFDLEdBQUd6RCxJQUFJLENBQUM1RSxLQUFmO0FBQ0FzRSxRQUFNLElBQUkzQixLQUFWO0FBRUEsU0FBT3lDLDJEQUFPLENBQUNULElBQUQsRUFBTzBELENBQUMsQ0FBQyxDQUFELENBQVIsQ0FBZDtBQUNELENBaEJvQyxDQUE5QjtBQWtCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNTyxNQUFNLEdBQUcsQ0FBQ25FLENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM1QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNLENBQUNpQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQVQ7QUFDRDs7QUFFRCxRQUFNOEQsQ0FBQyxHQUFHekQsSUFBSSxDQUFDNUUsS0FBZjtBQUNBc0UsUUFBTSxJQUFJM0IsS0FBVjtBQUVBLFNBQU95QywyREFBTyxDQUFDVCxJQUFELEVBQU8wRCxDQUFDLENBQUMsQ0FBRCxDQUFSLENBQWQ7QUFDRCxDQWhCcUMsQ0FBL0I7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTVEsS0FBSyxHQUFHLENBQUNwRSxDQUFELEVBQUlSLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDM0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDaUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQlcsSUFBSSxDQUFDTCxNQUFqQyxDQUFUO0FBQ0Q7O0FBRUQsUUFBTThELENBQUMsR0FBR3pELElBQUksQ0FBQzVFLEtBQWY7QUFDQXNFLFFBQU0sSUFBSTNCLEtBQVY7QUFFQSxTQUFPeUMsMkRBQU8sQ0FBQ1QsSUFBRCxFQUFPMEQsQ0FBQyxDQUFDLENBQUQsQ0FBUixDQUFkO0FBQ0QsQ0FoQm9DLENBQTlCO0FBa0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUyxHQUFHLEdBQUcsQ0FBQ3JFLENBQUQsRUFBSW1CLEVBQUosRUFBUTNCLENBQVIsS0FBYzlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDN0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBTSxJQUFJcEMsS0FBVjtBQUNBb0MsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDaUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQlcsSUFBSSxDQUFDTCxNQUFqQyxDQUFUO0FBQ0Q7O0FBQ0QsU0FBT2EsMkRBQU8sQ0FBQ1QsSUFBRCxFQUFPaUIsRUFBRSxDQUFDaEIsSUFBSSxDQUFDNUUsS0FBTixDQUFULENBQWQ7QUFDRCxDQWJzQyxDQUFoQztBQWVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0rSSxLQUFLLEdBQUcsQ0FBQ3RFLENBQUQsRUFBSWlDLENBQUosRUFBT3pDLENBQVAsS0FBYTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDOUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTStDLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBQ0EsUUFBTXVELE1BQU0sR0FBR3hFLDZEQUFRLENBQUNQLENBQUQsQ0FBdkI7QUFFQSxRQUFNLENBQUNVLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT04sSUFBSSxHQUFHMkUsTUFBSCxHQUFZcEUsSUFBSSxDQUFDTCxNQUE1QixDQUFUO0FBQ0Q7O0FBRUQsUUFBTSxDQUFDcUMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQy9CLElBQUQsQ0FBdEI7O0FBQ0EsTUFBSWtDLElBQUksQ0FBQy9CLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDZ0IsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQm5CLEtBQWhCLElBQXlCaUQsSUFBSSxDQUFDbkIsS0FBTCxLQUFlQSxLQUF6QyxDQUFsQjtBQUNBLFdBQU9HLEVBQUUsQ0FBQ2dCLElBQUQsRUFBT3ZDLElBQUksR0FBRzJFLE1BQUgsR0FBWWpFLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBNUIsQ0FBVDtBQUNEOztBQUVELFFBQU1xQixFQUFFLEdBQUdpQixJQUFJLENBQUM3RyxLQUFoQjtBQUNBc0UsUUFBTSxJQUFJcEMsS0FBVjtBQUdBLFNBQU9rRCwyREFBTyxDQUFDd0IsSUFBRCxFQUFPaEIsRUFBRSxDQUFDaEIsSUFBSSxDQUFDNUUsS0FBTixDQUFULENBQWQ7QUFDRCxDQTNCdUMsQ0FBakM7QUE2QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNaUosS0FBSyxHQUFHLENBQUN4RSxDQUFELEVBQUltQixFQUFKLEVBQVEzQixDQUFSLEtBQWM5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQy9DLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSXBDLEtBQVY7QUFDQW9DLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU11RCxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBVDtBQUNEOztBQUVELFFBQU1tQyxDQUFDLEdBQUdkLEVBQUUsQ0FBQ2hCLElBQUksQ0FBQzVFLEtBQU4sQ0FBWjtBQUNBc0UsUUFBTSxJQUFJbkIsS0FBVjtBQUlBLFFBQU0sQ0FBQ3dELElBQUQsRUFBTyxDQUFDQyxJQUFELEVBQU9DLElBQVAsQ0FBUCxJQUF1QmhDLHVEQUFHLENBQUM2QixDQUFDLENBQUMvQixJQUFELENBQUYsQ0FBaEM7O0FBQ0EsTUFBSWtDLElBQUksQ0FBQy9CLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDZ0IsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQm5CLEtBQWhCLElBQXlCaUQsSUFBSSxDQUFDbkIsS0FBTCxLQUFlQSxLQUF6QyxDQUFsQjtBQUNBLFdBQU9HLEVBQUUsQ0FBQ2dCLElBQUQsRUFBT3ZDLElBQUksR0FBRzJFLE1BQUgsR0FBWWpFLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBNUIsQ0FBVDtBQUNEOztBQUNELFNBQU9vQyxJQUFQO0FBQ0QsQ0EzQndDLENBQWxDLEM7Ozs7Ozs7Ozs7OztBQ2xZUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsTUFBTTtBQUFFbEQsSUFBRjtBQUFNQyxNQUFOO0FBQVlDO0FBQVosSUFBc0JDLGtEQUE1Qjs7QUFFQSxTQUFTc0YsV0FBVCxDQUFxQnBILElBQXJCLEVBQTJCO0FBQ3pCLFNBQVEsSUFBR0EsSUFBSyw2QkFBVCxHQUNILHFEQURKO0FBRUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTXFILEdBQUcsR0FBRyxDQUFDLEdBQUdyRixJQUFKLEtBQWE7QUFDOUIsUUFBTUMsRUFBRSxHQUFHRCxJQUFJLENBQUNFLEtBQUwsRUFBWDtBQUNBLFFBQU1DLENBQUMsR0FBRyxPQUFPSCxJQUFJLENBQUNBLElBQUksQ0FBQ0ksTUFBTCxHQUFjLENBQWYsQ0FBWCxLQUFpQyxRQUFqQyxHQUE0Q0gsRUFBRSxDQUFDSSxHQUFILEVBQTVDLEdBQXVELElBQWpFO0FBRUEsU0FBT2hDLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbkIsVUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssVUFBTSxJQUFJUCxLQUFWO0FBR0EsVUFBTVYsTUFBTSxHQUFHLEVBQWY7QUFDQSxVQUFNb0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFDQSxRQUFJbEIsTUFBTSxHQUFHRixJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQixFQUFsQztBQUNBLFFBQUlvQyxPQUFPLEdBQUdqQyxHQUFkOztBQUVBLFNBQUssTUFBTUssQ0FBWCxJQUFnQlYsRUFBaEIsRUFBb0I7QUFBQTs7QUFDbEIsWUFBTSxDQUFDWSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxhQUFPLEdBQUcxQixJQUFWO0FBQ0EsVUFBSSxDQUFDTixJQUFMLEVBQVdFLE1BQU0sR0FBRyxpQkFBQUssSUFBSSxDQUFDTCxNQUFMLDhEQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDUixNQUFELEVBQVNLLElBQUksQ0FBQ0wsTUFBZCxDQUEzQixHQUFtRCxFQUE1RDs7QUFFWCxVQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixjQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBaEIsSUFBeUIwQyxPQUFPLENBQUNaLEtBQVIsS0FBa0JBLEtBQTVDLENBQWxCO0FBQ0EsZUFBT0csRUFBRSxDQUFDUyxPQUFELEVBQVU5QixNQUFWLENBQVQ7QUFDRDs7QUFDRGxCLFlBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0Q7O0FBQ0QsV0FBT29GLDJEQUFPLENBQUNpQixPQUFELEVBQVVoRCxNQUFWLENBQWQ7QUFDRCxHQXZCWSxDQUFiO0FBd0JELENBNUJNO0FBOEJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNK0YsSUFBSSxHQUFHLENBQUMzRSxDQUFELEVBQUlpQyxDQUFKLEVBQU96QyxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzdDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU11RCxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQmxCLGtEQUFNLENBQUNILEVBQTNCLEVBQStCO0FBQzdCLFVBQU1tQyxFQUFFLEdBQUdoQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFoQixHQUF3QnFCLHNEQUF4QixHQUFxQ0MscURBQWhEO0FBQ0EsV0FBT1csRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQVQ7QUFDRDs7QUFFRCxRQUFNLENBQUNxQyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDL0IsSUFBRCxDQUF0Qjs7QUFDQSxNQUFJa0MsSUFBSSxDQUFDL0IsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNnQixJQUFJLENBQUMvQixNQUFMLEtBQWdCbkIsS0FBaEIsSUFBeUJpRCxJQUFJLENBQUNuQixLQUFMLEtBQWVBLEtBQXpDLENBQWxCO0FBQ0EsV0FBT0csRUFBRSxDQUFDZ0IsSUFBRCxFQUFPdkMsSUFBSSxHQUFHMkUsTUFBSCxHQUFZakUsMERBQUssQ0FBQ0gsSUFBSSxDQUFDTCxNQUFOLEVBQWNzQyxJQUFJLENBQUN0QyxNQUFuQixDQUE1QixDQUFUO0FBQ0Q7O0FBQ0QsU0FBT2EsMkRBQU8sQ0FBQ3dCLElBQUQsRUFBT2hDLElBQUksQ0FBQzVFLEtBQVosQ0FBZDtBQUNELENBdEJzQyxDQUFoQztBQXdCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXFKLEtBQUssR0FBRyxDQUFDNUUsQ0FBRCxFQUFJaUMsQ0FBSixFQUFPekMsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM5QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBbEI7QUFDQSxRQUFNdUQsTUFBTSxHQUFHeEUsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUF2QjtBQUVBLFFBQU0sQ0FBQ1UsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JsQixrREFBTSxDQUFDSCxFQUEzQixFQUErQjtBQUM3QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQVQ7QUFDRDs7QUFFRCxRQUFNLENBQUNvQyxJQUFELEVBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQVAsSUFBdUJoQyx1REFBRyxDQUFDNkIsQ0FBQyxDQUFDL0IsSUFBRCxDQUFGLENBQWhDOztBQUNBLE1BQUlrQyxJQUFJLENBQUMvQixNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2UsSUFBSSxDQUFDOUIsTUFBTCxLQUFnQm5CLEtBQWhCLElBQXlCaUQsSUFBSSxDQUFDbkIsS0FBTCxLQUFlQSxLQUF6QyxDQUFsQjtBQUNBLFdBQU9HLEVBQUUsQ0FBQ2dCLElBQUQsRUFBT3ZDLElBQUksR0FBRzJFLE1BQUgsR0FBWWpFLDBEQUFLLENBQUNILElBQUksQ0FBQ0wsTUFBTixFQUFjc0MsSUFBSSxDQUFDdEMsTUFBbkIsQ0FBNUIsQ0FBVDtBQUNEOztBQUNELFNBQU9vQyxJQUFQO0FBQ0QsQ0F0QnVDLENBQWpDO0FBd0JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0yQyxLQUFLLEdBQUcsQ0FBQzVCLENBQUQsRUFBSXpELENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDM0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJakMsS0FBVjtBQUNBaUMsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTWlGLEdBQUcsR0FBR0QsQ0FBQyxFQUFiO0FBQ0EsUUFBTWpDLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBQ0EsTUFBSWxCLE1BQU0sR0FBR0YsSUFBSSxHQUFHRyw2REFBUSxDQUFDUCxDQUFELENBQVgsR0FBaUIsRUFBbEM7QUFDQSxNQUFJMkQsU0FBSjtBQUNBLE1BQUl2QixPQUFPLEdBQUdqQyxHQUFkO0FBQ0EsTUFBSWQsQ0FBQyxHQUFHLENBQVI7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFBQTs7QUFDWCxVQUFNO0FBQUV0RCxXQUFGO0FBQVM2SDtBQUFULFFBQWtCRixHQUFHLENBQUNHLElBQUosQ0FBU0YsU0FBVCxDQUF4QjtBQUNBLFFBQUlDLElBQUosRUFBVSxPQUFPekMsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVXJHLEtBQVYsQ0FBZDtBQUVWc0UsVUFBTSxJQUFJbkIsS0FBVjtBQUlBLFVBQU0sQ0FBQ3dCLElBQUQsRUFBT0MsSUFBUCxJQUFlNUUsS0FBSyxDQUFDcUcsT0FBRCxDQUExQjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWO0FBQ0EsUUFBSSxDQUFDTixJQUFMLEVBQVdFLE1BQU0sR0FBRyxrQkFBQUssSUFBSSxDQUFDTCxNQUFMLGdFQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDUixNQUFELEVBQVNLLElBQUksQ0FBQ0wsTUFBZCxDQUEzQixHQUFtRCxFQUE1RDs7QUFFWCxRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixZQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBaEIsSUFBeUJnQixJQUFJLENBQUNjLEtBQUwsS0FBZUEsS0FBekMsQ0FBbEI7QUFDQSxhQUFPRyxFQUFFLENBQUNqQixJQUFELEVBQU9KLE1BQVAsQ0FBVDtBQUNEOztBQUNEcUQsYUFBUyxHQUFHaEQsSUFBSSxDQUFDNUUsS0FBakI7QUFDQXNELEtBQUM7QUFDRjtBQUNGLENBaENvQyxDQUE5QjtBQWtDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1pRyxJQUFJLEdBQUcsQ0FBQzlFLENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUMxQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNVyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlnRCxPQUFPLEdBQUdqQyxHQUFkOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDTyxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWOztBQUVBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFDMUJMLFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0EsUUFBSXFHLE9BQU8sQ0FBQ1osS0FBUixJQUFpQlksT0FBTyxDQUFDbUQsSUFBUixDQUFhQyxVQUFsQyxFQUE4QztBQUMvQzs7QUFDRCxTQUFPckUsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVWhELE1BQVYsQ0FBZDtBQUNELENBckJtQyxDQUE3QjtBQXVCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1xRyxLQUFLLEdBQUcsQ0FBQ2pGLENBQUQsRUFBSVIsQ0FBSixLQUFVOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUMzQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNc0csTUFBTSxHQUFHeEUsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUF2QjtBQUVBLFFBQU0sQ0FBQ1UsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQVQ7QUFDRDs7QUFFRCxNQUFJOEIsT0FBTyxHQUFHMUIsSUFBZDtBQUNBLFFBQU10QixNQUFNLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQzVFLEtBQU4sQ0FBZjs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYLFVBQU0sQ0FBQzJFLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUM0QixPQUFELENBQXRCO0FBQ0FBLFdBQU8sR0FBRzFCLElBQVY7O0FBRUEsUUFBSUMsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT04sSUFBSSxHQUFHMkUsTUFBSCxHQUFZcEUsSUFBSSxDQUFDTCxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBQzFCTCxVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNBLFFBQUlxRyxPQUFPLENBQUNaLEtBQVIsSUFBaUJZLE9BQU8sQ0FBQ21ELElBQVIsQ0FBYUMsVUFBbEMsRUFBOEM7QUFDL0M7O0FBQ0QsU0FBT3JFLDJEQUFPLENBQUNpQixPQUFELEVBQVVoRCxNQUFWLENBQWQ7QUFDRCxDQTdCb0MsQ0FBOUI7QUErQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXNHLElBQUksR0FBRyxDQUFDbEYsQ0FBRCxFQUFJUixDQUFKLEtBQVU5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzFDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0sQ0FBQ2lDLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ2pCLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQWpCLENBQWxCO0FBQ0EsV0FBT2lDLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT04sSUFBSSxHQUFHRyw2REFBUSxDQUFDUCxDQUFELENBQVgsR0FBaUJXLElBQUksQ0FBQ0wsTUFBakMsQ0FBVDtBQUNEOztBQUNELFNBQU9hLDJEQUFPLENBQUNULElBQUQsRUFBTyxJQUFQLENBQWQ7QUFDRCxDQVptQyxDQUE3QjtBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWlGLEdBQUcsR0FBRyxDQUFDbkYsQ0FBRCxFQUFJd0QsQ0FBSixFQUFPaEUsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM1QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxNQUFJK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBaEI7QUFDQSxRQUFNdUQsTUFBTSxHQUFHeEUsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUF2QjtBQUVBLFFBQU0sQ0FBQ1UsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixXQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsTUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEIsT0FBTzBCLDJEQUFPLENBQUNULElBQUQsRUFBTyxFQUFQLENBQWQ7QUFFMUIsUUFBTXRCLE1BQU0sR0FBRyxDQUFDdUIsSUFBSSxDQUFDNUUsS0FBTixDQUFmO0FBQ0EsTUFBSXFHLE9BQU8sR0FBRzFCLElBQWQ7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWGMsU0FBSyxHQUFHWSxPQUFPLENBQUNaLEtBQWhCO0FBRUEsVUFBTSxDQUFDeUMsSUFBRCxFQUFPQyxJQUFQLElBQWVGLENBQUMsQ0FBQzVCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHNkIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNyRCxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUNrRCxJQUFELEVBQU83RCxJQUFJLEdBQUcyRSxNQUFILEdBQVliLElBQUksQ0FBQzVELE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSTRELElBQUksQ0FBQ3JELE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQixVQUFNLENBQUNpQixJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQixRQUFJMkMsT0FBTyxDQUFDWixLQUFSLEtBQWtCQSxLQUF0QixFQUE2QixNQUFNLElBQUlvRSxTQUFKLENBQWNYLFdBQVcsQ0FBQyxLQUFELENBQXpCLENBQU47QUFDN0I3RixVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNEOztBQUNELFNBQU9vRiwyREFBTyxDQUFDaUIsT0FBRCxFQUFVaEQsTUFBVixFQUFrQm9DLEtBQWxCLENBQWQ7QUFDRCxDQXhDcUMsQ0FBL0I7QUEwQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNcUUsSUFBSSxHQUFHLENBQUNyRixDQUFELEVBQUl3RCxDQUFKLEVBQU9oRSxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzdDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLE1BQUkrQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFoQjtBQUNBLFFBQU11RCxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBVDtBQUNEOztBQUVELFFBQU1sQixNQUFNLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQzVFLEtBQU4sQ0FBZjtBQUNBLE1BQUlxRyxPQUFPLEdBQUcxQixJQUFkOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1hjLFNBQUssR0FBR1ksT0FBTyxDQUFDWixLQUFoQjtBQUVBLFVBQU0sQ0FBQ3lDLElBQUQsRUFBT0MsSUFBUCxJQUFlRixDQUFDLENBQUM1QixPQUFELENBQXRCO0FBQ0FBLFdBQU8sR0FBRzZCLElBQVY7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDckQsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDa0QsSUFBRCxFQUFPN0QsSUFBSSxHQUFHMkUsTUFBSCxHQUFZYixJQUFJLENBQUM1RCxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUk0RCxJQUFJLENBQUNyRCxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUIsVUFBTSxDQUFDaUIsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHMUIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUIsUUFBSTJDLE9BQU8sQ0FBQ1osS0FBUixLQUFrQkEsS0FBdEIsRUFBNkIsTUFBTSxJQUFJb0UsU0FBSixDQUFjWCxXQUFXLENBQUMsTUFBRCxDQUF6QixDQUFOO0FBQzdCN0YsVUFBTSxDQUFDbUQsSUFBUCxDQUFZNUIsSUFBSSxDQUFDNUUsS0FBakI7QUFDRDs7QUFDRCxTQUFPb0YsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVWhELE1BQVYsRUFBa0JvQyxLQUFsQixDQUFkO0FBQ0QsQ0F4Q3NDLENBQWhDO0FBMENQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTXNFLEdBQUcsR0FBRyxDQUFDdEYsQ0FBRCxFQUFJd0QsQ0FBSixFQUFPaEUsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM1QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxNQUFJK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBaEI7QUFDQSxRQUFNdUQsTUFBTSxHQUFHeEUsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUF2QjtBQUVBLFFBQU0sQ0FBQ1UsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixXQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsTUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEIsT0FBTzBCLDJEQUFPLENBQUNULElBQUQsRUFBTyxFQUFQLENBQWQ7QUFFMUIsUUFBTXRCLE1BQU0sR0FBRyxDQUFDdUIsSUFBSSxDQUFDNUUsS0FBTixDQUFmO0FBQ0EsTUFBSXFHLE9BQU8sR0FBRzFCLElBQWQ7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWGMsU0FBSyxHQUFHWSxPQUFPLENBQUNaLEtBQWhCO0FBRUEsVUFBTSxDQUFDeUMsSUFBRCxFQUFPQyxJQUFQLElBQWVGLENBQUMsQ0FBQzVCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHNkIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNyRCxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUNrRCxJQUFELEVBQU83RCxJQUFJLEdBQUcyRSxNQUFILEdBQVliLElBQUksQ0FBQzVELE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSTRELElBQUksQ0FBQ3JELE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQixVQUFNLENBQUNpQixJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQixRQUFJMkMsT0FBTyxDQUFDWixLQUFSLEtBQWtCQSxLQUF0QixFQUE2QixNQUFNLElBQUlvRSxTQUFKLENBQWNYLFdBQVcsQ0FBQyxLQUFELENBQXpCLENBQU47QUFDN0I3RixVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNEOztBQUNELFFBQU0sQ0FBQ2tJLElBQUQsRUFBT0MsSUFBUCxJQUFlRixDQUFDLENBQUMsRUFBRSxHQUFHNUIsT0FBTDtBQUFjWjtBQUFkLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSTBDLElBQUksQ0FBQ3JELE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixXQUFPcUIsOERBQVUsQ0FBQ2tELElBQUQsRUFBTzdELElBQUksR0FBRzJFLE1BQUgsR0FBWWIsSUFBSSxDQUFDNUQsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxTQUFPYSwyREFBTyxDQUFDOEMsSUFBRCxFQUFPN0UsTUFBUCxDQUFkO0FBQ0QsQ0E1Q3FDLENBQS9CO0FBOENQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTJHLElBQUksR0FBRyxDQUFDdkYsQ0FBRCxFQUFJd0QsQ0FBSixFQUFPaEUsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM3QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFNLElBQUluQixLQUFWO0FBQ0FtQixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxNQUFJK0MsS0FBSyxHQUFHckIsR0FBRyxDQUFDcUIsS0FBaEI7QUFDQSxRQUFNdUQsTUFBTSxHQUFHeEUsNkRBQVEsQ0FBQ1AsQ0FBRCxDQUF2QjtBQUVBLFFBQU0sQ0FBQ1UsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ0wsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJUSxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBakIsQ0FBbEI7QUFDQSxXQUFPaUMsRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQVQ7QUFDRDs7QUFFRCxRQUFNbEIsTUFBTSxHQUFHLENBQUN1QixJQUFJLENBQUM1RSxLQUFOLENBQWY7QUFDQSxNQUFJcUcsT0FBTyxHQUFHMUIsSUFBZDs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYYyxTQUFLLEdBQUdZLE9BQU8sQ0FBQ1osS0FBaEI7QUFFQSxVQUFNLENBQUN5QyxJQUFELEVBQU9DLElBQVAsSUFBZUYsQ0FBQyxDQUFDNUIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUc2QixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQ3JELE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ2tELElBQUQsRUFBTzdELElBQUksR0FBRzJFLE1BQUgsR0FBWWIsSUFBSSxDQUFDNUQsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJNEQsSUFBSSxDQUFDckQsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBRTFCLFVBQU0sQ0FBQ2lCLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUM0QixPQUFELENBQXRCO0FBQ0FBLFdBQU8sR0FBRzFCLElBQVY7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT04sSUFBSSxHQUFHMkUsTUFBSCxHQUFZcEUsSUFBSSxDQUFDTCxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBRTFCLFFBQUkyQyxPQUFPLENBQUNaLEtBQVIsS0FBa0JBLEtBQXRCLEVBQTZCLE1BQU0sSUFBSW9FLFNBQUosQ0FBY1gsV0FBVyxDQUFDLE1BQUQsQ0FBekIsQ0FBTjtBQUM3QjdGLFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0Q7O0FBQ0QsUUFBTSxDQUFDa0ksSUFBRCxFQUFPQyxJQUFQLElBQWVGLENBQUMsQ0FBQyxFQUFFLEdBQUc1QixPQUFMO0FBQWNaO0FBQWQsR0FBRCxDQUF0Qjs7QUFDQSxNQUFJMEMsSUFBSSxDQUFDckQsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLFdBQU9xQiw4REFBVSxDQUFDa0QsSUFBRCxFQUFPN0QsSUFBSSxHQUFHMkUsTUFBSCxHQUFZYixJQUFJLENBQUM1RCxNQUE1QixDQUFqQjtBQUNEOztBQUNELFNBQU9hLDJEQUFPLENBQUM4QyxJQUFELEVBQU83RSxNQUFQLENBQWQ7QUFDRCxDQTVDc0MsQ0FBaEM7QUE4Q1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNNEcsTUFBTSxHQUFHLENBQUN4RixDQUFELEVBQUl5QyxDQUFKLEVBQU9qRCxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQy9DLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSXBCLEtBQVY7QUFDQW9CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU1wQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlnRCxPQUFPLEdBQUdqQyxHQUFkOztBQUVBLE9BQUssTUFBTStDLENBQVgsSUFBZ0JDLHlEQUFLLENBQUNGLENBQUQsQ0FBckIsRUFBMEI7QUFDeEIsVUFBTSxDQUFDdkMsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHMUIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixZQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBaEIsSUFBeUJnQixJQUFJLENBQUNjLEtBQUwsS0FBZUEsS0FBekMsQ0FBbEI7QUFDQSxhQUFPRyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCVyxJQUFJLENBQUNMLE1BQWpDLENBQVQ7QUFDRDs7QUFDRGxCLFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0Q7O0FBQ0QsU0FBT29GLDJEQUFPLENBQUNpQixPQUFELEVBQVVoRCxNQUFWLENBQWQ7QUFDRCxDQXJCd0MsQ0FBbEM7QUF1QlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTZHLE9BQU8sR0FBRyxDQUFDakMsQ0FBRCxFQUFJWCxDQUFKLEVBQU83QyxDQUFQLEVBQVVSLENBQVYsS0FBZ0I5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQUE7O0FBQ25ELFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUVBLFFBQU0sQ0FBQ3lDLElBQUQsRUFBT0MsSUFBUCxJQUFlRixDQUFDLENBQUM3RCxHQUFELENBQXRCOztBQUNBLE1BQUkrRCxJQUFJLENBQUNyRCxNQUFMLEtBQWdCckIsRUFBcEIsRUFBd0I7QUFDdEIsVUFBTW1DLEVBQUUsR0FBR0MsMkRBQU8sQ0FBQ3NDLElBQUksQ0FBQ3JELE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNzQyxJQUFELEVBQU83RCxJQUFJLEdBQUdHLDZEQUFRLENBQUNQLENBQUQsQ0FBWCxHQUFpQmtFLElBQUksQ0FBQzVELE1BQWpDLENBQVQ7QUFDRDs7QUFFRCxRQUFNLENBQUNJLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUN5RCxJQUFELENBQXRCO0FBQ0EsUUFBTTNELE1BQU0sR0FBR0YsSUFBSSxHQUNmRyw2REFBUSxDQUFDUCxDQUFELENBRE8sR0FFZixrQkFBQVcsSUFBSSxDQUFDTCxNQUFMLGdFQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDb0QsSUFBSSxDQUFDNUQsTUFBTixFQUFjSyxJQUFJLENBQUNMLE1BQW5CLENBQTNCLEdBQXdELEVBRjVEOztBQUdBLE1BQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFoQixJQUF5QmdCLElBQUksQ0FBQ2MsS0FBTCxLQUFlQSxLQUF6QyxDQUFsQjtBQUNBLFdBQU9HLEVBQUUsQ0FBQ2pCLElBQUQsRUFBT0osTUFBUCxDQUFUO0FBQ0Q7O0FBRUQsUUFBTSxDQUFDZ0QsSUFBRCxFQUFPQyxJQUFQLElBQWVGLENBQUMsQ0FBQzNDLElBQUQsQ0FBdEI7O0FBQ0EsTUFBSTZDLElBQUksQ0FBQzFDLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixVQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDMkIsSUFBSSxDQUFDMUMsTUFBTCxLQUFnQm5CLEtBQWhCLElBQXlCNEQsSUFBSSxDQUFDOUIsS0FBTCxLQUFlQSxLQUF6QyxDQUFsQjtBQUNBLFdBQU9HLEVBQUUsQ0FBQzJCLElBQUQsRUFBT2xELElBQUksR0FBR0UsTUFBSCxHQUFZUSwwREFBSyxDQUFDUixNQUFELEVBQVNpRCxJQUFJLENBQUNqRCxNQUFkLENBQTVCLENBQVQ7QUFDRDs7QUFDRCxTQUFPYSwyREFBTyxDQUFDbUMsSUFBRCxFQUFPM0MsSUFBSSxDQUFDNUUsS0FBWixDQUFkO0FBQ0QsQ0EvQjRDLENBQXRDO0FBaUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNbUssS0FBSyxHQUFHLENBQUMxRixDQUFELEVBQUk2QyxDQUFKLEVBQU9yRCxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzlDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU0rQyxLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsQjtBQUNBLFFBQU1wQyxNQUFNLEdBQUcsRUFBZjtBQUNBLE1BQUlnRCxPQUFPLEdBQUdqQyxHQUFkO0FBQ0EsUUFBTTRFLE1BQU0sR0FBR3hFLDZEQUFRLENBQUNQLENBQUQsQ0FBdkI7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFNLENBQUNzRCxJQUFELEVBQU9DLElBQVAsSUFBZUYsQ0FBQyxDQUFDakIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUdrQixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQzFDLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ3VDLElBQUQsRUFBT2xELElBQUksR0FBRzJFLE1BQUgsR0FBWXhCLElBQUksQ0FBQ2pELE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSWlELElBQUksQ0FBQzFDLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUV4QixVQUFNLENBQUNrQixJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUN4QixZQUFNa0MsRUFBRSxHQUFHQywyREFBTyxDQUFDbEIsSUFBSSxDQUFDYyxLQUFMLEtBQWVBLEtBQWhCLENBQWxCO0FBQ0EsYUFBT0csRUFBRSxDQUFDakIsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlqRSwwREFBSyxDQUFDSCxJQUFJLENBQUNMLE1BQU4sRUFBY2lELElBQUksQ0FBQ2pELE1BQW5CLENBQTVCLENBQVQ7QUFDRDs7QUFDRGxCLFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0Q7O0FBQ0QsU0FBT29GLDJEQUFPLENBQUNpQixPQUFELEVBQVVoRCxNQUFWLENBQWQ7QUFDRCxDQWhDdUMsQ0FBakM7QUFrQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0rRyxJQUFJLEdBQUcsQ0FBQyxHQUFHdEcsSUFBSixLQUFhO0FBQy9CLFFBQU1DLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxLQUFMLEVBQVg7QUFDQSxRQUFNQyxDQUFDLEdBQUcsT0FBT0gsSUFBSSxDQUFDQSxJQUFJLENBQUNJLE1BQUwsR0FBYyxDQUFmLENBQVgsS0FBaUMsUUFBakMsR0FBNENILEVBQUUsQ0FBQ0ksR0FBSCxFQUE1QyxHQUF1RCxJQUFqRTtBQUNBLFFBQU15QixFQUFFLEdBQUc3QixFQUFFLENBQUNJLEdBQUgsRUFBWDtBQUVBLFNBQU9oQywwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ25CLFVBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFVBQU0sSUFBSVAsS0FBVjtBQUdBTyxVQUFNLElBQUlwQyxLQUFWO0FBRUEsVUFBTXVELEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWxCO0FBQ0EsVUFBTXBDLE1BQU0sR0FBRyxFQUFmO0FBQ0EsUUFBSWdELE9BQU8sR0FBR2pDLEdBQWQ7QUFDQSxRQUFJRyxNQUFNLEdBQUdGLElBQUksR0FBR0csNkRBQVEsQ0FBQ1AsQ0FBRCxDQUFYLEdBQWlCLEVBQWxDOztBQUVBLFNBQUssTUFBTVEsQ0FBWCxJQUFnQlYsRUFBaEIsRUFBb0I7QUFBQTs7QUFDbEIsWUFBTSxDQUFDWSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxhQUFPLEdBQUcxQixJQUFWO0FBQ0EsVUFBSSxDQUFDTixJQUFMLEVBQVdFLE1BQU0sR0FBRyxrQkFBQUssSUFBSSxDQUFDTCxNQUFMLGdFQUFhTCxNQUFiLElBQXNCYSwwREFBSyxDQUFDUixNQUFELEVBQVNLLElBQUksQ0FBQ0wsTUFBZCxDQUEzQixHQUFtRCxFQUE1RDs7QUFFWCxVQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QjtBQUN0QixjQUFNbUMsRUFBRSxHQUFHQywyREFBTyxDQUFDakIsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBaEIsSUFBeUJnQixJQUFJLENBQUNjLEtBQUwsS0FBZUEsS0FBekMsQ0FBbEI7QUFDQSxlQUFPRyxFQUFFLENBQUNqQixJQUFELEVBQU9KLE1BQVAsQ0FBVDtBQUNEOztBQUNEbEIsWUFBTSxDQUFDbUQsSUFBUCxDQUFZNUIsSUFBSSxDQUFDNUUsS0FBakI7QUFDRDs7QUFDRCxXQUFPb0YsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVVQsRUFBRSxDQUFDLEdBQUd2QyxNQUFKLENBQVosQ0FBZDtBQUNELEdBekJZLENBQWI7QUEwQkQsQ0EvQk07QUFpQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTZ0gsV0FBVCxDQUFxQjlJLEdBQXJCLEVBQTBCO0FBQ3hCLFNBQU92QixLQUFLLElBQUssWUFBV3VCLEdBQUksMENBQzlCdEIsNkRBQVMsQ0FBQ0QsS0FBRCxDQUNWLEVBRkQ7QUFHRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTXNLLE1BQU0sR0FBRyxDQUFDN0YsQ0FBRCxFQUFJOEYsQ0FBSixFQUFPakYsQ0FBUCxFQUFVckIsQ0FBVixLQUFnQjlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbEQsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBTSxJQUFJbkIsS0FBVjtBQUNBbUIsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTXNHLE1BQU0sR0FBR3hFLDZEQUFRLENBQUNQLENBQUQsQ0FBdkI7QUFFQSxRQUFNLENBQUNVLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNMLEdBQUQsQ0FBdEI7O0FBQ0EsTUFBSVEsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsV0FBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT04sSUFBSSxHQUFHMkUsTUFBSCxHQUFZcEUsSUFBSSxDQUFDTCxNQUE1QixDQUFqQjtBQUNEOztBQUNELE1BQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCLE9BQU8wQiwyREFBTyxDQUFDVCxJQUFELEVBQU9XLENBQVAsQ0FBZDtBQUUxQixRQUFNakMsTUFBTSxHQUFHLENBQUN1QixJQUFJLENBQUM1RSxLQUFOLENBQWY7QUFDQSxRQUFNd0ssR0FBRyxHQUFHLEVBQVo7QUFDQSxNQUFJbkUsT0FBTyxHQUFHMUIsSUFBZDtBQUNBLE1BQUljLEtBQUssR0FBR1ksT0FBTyxDQUFDWixLQUFwQjtBQUNBLE1BQUluQyxDQUFDLEdBQUcsQ0FBUjs7QUFFQSxTQUFPLElBQVAsRUFBYTtBQUNYLFVBQU0sQ0FBQ21ILElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUNsRSxPQUFELENBQXRCO0FBQ0FBLFdBQU8sR0FBR29FLElBQVY7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDNUYsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDeUYsSUFBRCxFQUFPcEcsSUFBSSxHQUFHMkUsTUFBSCxHQUFZMEIsSUFBSSxDQUFDbkcsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJbUcsSUFBSSxDQUFDNUYsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBRTFCLFVBQU0sQ0FBQ2lCLElBQUQsRUFBT0MsSUFBUCxJQUFlSCxDQUFDLENBQUM0QixPQUFELENBQXRCO0FBQ0FBLFdBQU8sR0FBRzFCLElBQVY7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDRSxNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUNMLElBQUQsRUFBT04sSUFBSSxHQUFHMkUsTUFBSCxHQUFZcEUsSUFBSSxDQUFDTCxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUlLLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnBCLElBQXBCLEVBQTBCO0FBRTFCWSxVQUFNLElBQUlwQyxLQUFWO0FBSUFzSSxPQUFHLENBQUNoRSxJQUFKLENBQVNrRSxJQUFJLENBQUMxSyxLQUFkO0FBQ0FxRCxVQUFNLENBQUNtRCxJQUFQLENBQVk1QixJQUFJLENBQUM1RSxLQUFqQjtBQUNBeUYsU0FBSyxHQUFHWSxPQUFPLENBQUNaLEtBQWhCO0FBQ0FuQyxLQUFDO0FBQ0Y7O0FBRUQsTUFBSXRELEtBQUssR0FBR3FELE1BQU0sQ0FBQyxDQUFELENBQWxCOztBQUNBLE9BQUssTUFBTUMsQ0FBWCxJQUFnQjhELHlEQUFLLENBQUNvRCxHQUFHLENBQUN0RyxNQUFMLENBQXJCLEVBQW1DO0FBQ2pDbEUsU0FBSyxHQUFHd0ssR0FBRyxDQUFDbEgsQ0FBRCxDQUFILENBQU90RCxLQUFQLEVBQWNxRCxNQUFNLENBQUNDLENBQUMsR0FBRyxDQUFMLENBQXBCLENBQVI7QUFDRDs7QUFDRCxTQUFPOEIsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVXJHLEtBQVYsRUFBaUJ5RixLQUFqQixDQUFkO0FBQ0QsQ0FuRDJDLENBQXJDO0FBcURQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNa0YsT0FBTyxHQUFHLENBQUNsRyxDQUFELEVBQUk4RixDQUFKLEVBQU90RyxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ2hELFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU1zRyxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBVDtBQUNEOztBQUVELFFBQU1sQixNQUFNLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQzVFLEtBQU4sQ0FBZjtBQUNBLFFBQU13SyxHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQUluRSxPQUFPLEdBQUcxQixJQUFkO0FBQ0EsTUFBSWMsS0FBSyxHQUFHWSxPQUFPLENBQUNaLEtBQXBCO0FBQ0EsTUFBSW5DLENBQUMsR0FBRyxDQUFSOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDbUgsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ2xFLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHb0UsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUM1RixNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUN5RixJQUFELEVBQU9wRyxJQUFJLEdBQUcyRSxNQUFILEdBQVkwQixJQUFJLENBQUNuRyxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUltRyxJQUFJLENBQUM1RixNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUIsVUFBTSxDQUFDaUIsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHMUIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUJZLFVBQU0sSUFBSXBDLEtBQVY7QUFJQXNJLE9BQUcsQ0FBQ2hFLElBQUosQ0FBU2tFLElBQUksQ0FBQzFLLEtBQWQ7QUFDQXFELFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0F5RixTQUFLLEdBQUdZLE9BQU8sQ0FBQ1osS0FBaEI7QUFDQW5DLEtBQUM7QUFDRjs7QUFFRCxNQUFJdEQsS0FBSyxHQUFHcUQsTUFBTSxDQUFDLENBQUQsQ0FBbEI7O0FBQ0EsT0FBSyxNQUFNQyxDQUFYLElBQWdCOEQseURBQUssQ0FBQ29ELEdBQUcsQ0FBQ3RHLE1BQUwsQ0FBckIsRUFBbUM7QUFDakNsRSxTQUFLLEdBQUd3SyxHQUFHLENBQUNsSCxDQUFELENBQUgsQ0FBT3RELEtBQVAsRUFBY3FELE1BQU0sQ0FBQ0MsQ0FBQyxHQUFHLENBQUwsQ0FBcEIsQ0FBUjtBQUNEOztBQUNELFNBQU84QiwyREFBTyxDQUFDaUIsT0FBRCxFQUFVckcsS0FBVixFQUFpQnlGLEtBQWpCLENBQWQ7QUFDRCxDQW5EeUMsQ0FBbkM7QUFxRFA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1tRixNQUFNLEdBQUcsQ0FBQ25HLENBQUQsRUFBSThGLENBQUosRUFBT2pGLENBQVAsRUFBVXJCLENBQVYsS0FBZ0I5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ2xELFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU1zRyxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLFdBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxNQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQixPQUFPMEIsMkRBQU8sQ0FBQ1QsSUFBRCxFQUFPVyxDQUFQLENBQWQ7QUFFMUIsUUFBTWpDLE1BQU0sR0FBRyxDQUFDdUIsSUFBSSxDQUFDNUUsS0FBTixDQUFmO0FBQ0EsUUFBTXdLLEdBQUcsR0FBRyxFQUFaO0FBQ0EsTUFBSW5FLE9BQU8sR0FBRzFCLElBQWQ7QUFDQSxNQUFJYyxLQUFLLEdBQUdZLE9BQU8sQ0FBQ1osS0FBcEI7QUFDQSxNQUFJbkMsQ0FBQyxHQUFHLENBQVI7O0FBRUEsU0FBTyxJQUFQLEVBQWE7QUFDWCxVQUFNLENBQUNtSCxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDbEUsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUdvRSxJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQzVGLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ3lGLElBQUQsRUFBT3BHLElBQUksR0FBRzJFLE1BQUgsR0FBWTBCLElBQUksQ0FBQ25HLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSW1HLElBQUksQ0FBQzVGLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQixVQUFNLENBQUNpQixJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDNEIsT0FBRCxDQUF0QjtBQUNBQSxXQUFPLEdBQUcxQixJQUFWOztBQUNBLFFBQUlDLElBQUksQ0FBQ0UsTUFBTCxLQUFnQm5CLEtBQXBCLEVBQTJCO0FBQ3pCLGFBQU9xQiw4REFBVSxDQUFDTCxJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBakI7QUFDRDs7QUFDRCxRQUFJSyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JwQixJQUFwQixFQUEwQjtBQUUxQlksVUFBTSxJQUFJcEMsS0FBVjtBQUlBc0ksT0FBRyxDQUFDaEUsSUFBSixDQUFTa0UsSUFBSSxDQUFDMUssS0FBZDtBQUNBcUQsVUFBTSxDQUFDbUQsSUFBUCxDQUFZNUIsSUFBSSxDQUFDNUUsS0FBakI7QUFDQXlGLFNBQUssR0FBR1ksT0FBTyxDQUFDWixLQUFoQjtBQUNBbkMsS0FBQztBQUNGOztBQUVELE1BQUl0RCxLQUFLLEdBQUdxRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ2EsTUFBUCxHQUFnQixDQUFqQixDQUFsQjs7QUFDQSxPQUFLLE1BQU1aLENBQVgsSUFBZ0I4RCx5REFBSyxDQUFDb0QsR0FBRyxDQUFDdEcsTUFBSixHQUFhLENBQWQsRUFBaUIsQ0FBQyxDQUFsQixDQUFyQixFQUEyQztBQUN6Q2xFLFNBQUssR0FBR3dLLEdBQUcsQ0FBQ2xILENBQUQsQ0FBSCxDQUFPRCxNQUFNLENBQUNDLENBQUQsQ0FBYixFQUFrQnRELEtBQWxCLENBQVI7QUFDRDs7QUFDRCxTQUFPb0YsMkRBQU8sQ0FBQ2lCLE9BQUQsRUFBVXJHLEtBQVYsRUFBaUJ5RixLQUFqQixDQUFkO0FBQ0QsQ0FuRDJDLENBQXJDO0FBcURQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNb0YsT0FBTyxHQUFHLENBQUNwRyxDQUFELEVBQUk4RixDQUFKLEVBQU90RyxDQUFQLEtBQWE5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ2hELFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQU0sSUFBSW5CLEtBQVY7QUFDQW1CLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU1zRyxNQUFNLEdBQUd4RSw2REFBUSxDQUFDUCxDQUFELENBQXZCO0FBRUEsUUFBTSxDQUFDVSxJQUFELEVBQU9DLElBQVAsSUFBZUgsQ0FBQyxDQUFDTCxHQUFELENBQXRCOztBQUNBLE1BQUlRLElBQUksQ0FBQ0UsTUFBTCxLQUFnQnJCLEVBQXBCLEVBQXdCO0FBQ3RCLFVBQU1tQyxFQUFFLEdBQUdDLDJEQUFPLENBQUNqQixJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFqQixDQUFsQjtBQUNBLFdBQU9pQyxFQUFFLENBQUNqQixJQUFELEVBQU9OLElBQUksR0FBRzJFLE1BQUgsR0FBWXBFLElBQUksQ0FBQ0wsTUFBNUIsQ0FBVDtBQUNEOztBQUVELFFBQU1sQixNQUFNLEdBQUcsQ0FBQ3VCLElBQUksQ0FBQzVFLEtBQU4sQ0FBZjtBQUNBLFFBQU13SyxHQUFHLEdBQUcsRUFBWjtBQUNBLE1BQUluRSxPQUFPLEdBQUcxQixJQUFkO0FBQ0EsTUFBSWMsS0FBSyxHQUFHWSxPQUFPLENBQUNaLEtBQXBCO0FBQ0EsTUFBSW5DLENBQUMsR0FBRyxDQUFSOztBQUVBLFNBQU8sSUFBUCxFQUFhO0FBQ1gsVUFBTSxDQUFDbUgsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQ2xFLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHb0UsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUM1RixNQUFMLEtBQWdCbkIsS0FBcEIsRUFBMkI7QUFDekIsYUFBT3FCLDhEQUFVLENBQUN5RixJQUFELEVBQU9wRyxJQUFJLEdBQUcyRSxNQUFILEdBQVkwQixJQUFJLENBQUNuRyxNQUE1QixDQUFqQjtBQUNEOztBQUNELFFBQUltRyxJQUFJLENBQUM1RixNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUIsVUFBTSxDQUFDaUIsSUFBRCxFQUFPQyxJQUFQLElBQWVILENBQUMsQ0FBQzRCLE9BQUQsQ0FBdEI7QUFDQUEsV0FBTyxHQUFHMUIsSUFBVjs7QUFDQSxRQUFJQyxJQUFJLENBQUNFLE1BQUwsS0FBZ0JuQixLQUFwQixFQUEyQjtBQUN6QixhQUFPcUIsOERBQVUsQ0FBQ0wsSUFBRCxFQUFPTixJQUFJLEdBQUcyRSxNQUFILEdBQVlwRSxJQUFJLENBQUNMLE1BQTVCLENBQWpCO0FBQ0Q7O0FBQ0QsUUFBSUssSUFBSSxDQUFDRSxNQUFMLEtBQWdCcEIsSUFBcEIsRUFBMEI7QUFFMUJZLFVBQU0sSUFBSXBDLEtBQVY7QUFJQXNJLE9BQUcsQ0FBQ2hFLElBQUosQ0FBU2tFLElBQUksQ0FBQzFLLEtBQWQ7QUFDQXFELFVBQU0sQ0FBQ21ELElBQVAsQ0FBWTVCLElBQUksQ0FBQzVFLEtBQWpCO0FBQ0F5RixTQUFLLEdBQUdZLE9BQU8sQ0FBQ1osS0FBaEI7QUFDQW5DLEtBQUM7QUFDRjs7QUFFRCxNQUFJdEQsS0FBSyxHQUFHcUQsTUFBTSxDQUFDQSxNQUFNLENBQUNhLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBbEI7O0FBQ0EsT0FBSyxNQUFNWixDQUFYLElBQWdCOEQseURBQUssQ0FBQ29ELEdBQUcsQ0FBQ3RHLE1BQUosR0FBYSxDQUFkLEVBQWlCLENBQUMsQ0FBbEIsQ0FBckIsRUFBMkM7QUFDekNsRSxTQUFLLEdBQUd3SyxHQUFHLENBQUNsSCxDQUFELENBQUgsQ0FBT0QsTUFBTSxDQUFDQyxDQUFELENBQWIsRUFBa0J0RCxLQUFsQixDQUFSO0FBQ0Q7O0FBQ0QsU0FBT29GLDJEQUFPLENBQUNpQixPQUFELEVBQVVyRyxLQUFWLEVBQWlCeUYsS0FBakIsQ0FBZDtBQUNELENBbkR5QyxDQUFuQyxDOzs7Ozs7Ozs7Ozs7QUMvZ0NQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNxRixZQUFULENBQXNCOUssS0FBdEIsRUFBNkI7QUFDM0IsU0FBT0EsS0FBSyxZQUFZK0ssVUFBakIsSUFDRi9LLEtBQUssWUFBWWdMLGlCQURmLElBRUZoTCxLQUFLLFlBQVlpTCxXQUZmLElBR0ZqTCxLQUFLLFlBQVlrTCxXQUhmLElBSUZsTCxLQUFLLFlBQVltTCxTQUpmLElBS0ZuTCxLQUFLLFlBQVlvTCxVQUxmLElBTUZwTCxLQUFLLFlBQVlxTCxVQU5mLElBT0ZyTCxLQUFLLFlBQVlzTCxZQVBmLElBUUZ0TCxLQUFLLFlBQVl1TCxZQVJ0QjtBQVNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU0zSCxNQUFNLEdBQUc7QUFDcEI7QUFDQUgsSUFBRSxFQUFFLElBRmdCOztBQUdwQjtBQUNBQyxNQUFJLEVBQUUsTUFKYzs7QUFLcEI7QUFDQUMsT0FBSyxFQUFFO0FBTmEsQ0FBZjtBQVNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMwQyxPQUFULENBQWlCbUYsS0FBakIsRUFBd0I7QUFDN0IsUUFBTUMsT0FBTyxHQUFHLDREQUNYLDRDQUEyQyxPQUFPRCxLQUFNLEVBRDdEOztBQUdBLFFBQU1oQyxJQUFJLEdBQUcsQ0FBQ2dDLEtBQUssSUFBSTtBQUNyQixRQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0I7QUFDN0IsYUFBT0UsMERBQVksQ0FBQ0YsS0FBRCxDQUFuQjtBQUNEOztBQUNELFFBQUlWLFlBQVksQ0FBQ1UsS0FBRCxDQUFoQixFQUF5QjtBQUN2QixhQUFPLElBQUlHLFFBQUosQ0FBYUgsS0FBSyxDQUFDSSxNQUFuQixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSUosS0FBSyxZQUFZSyxXQUFyQixFQUFrQztBQUNoQyxhQUFPLElBQUlGLFFBQUosQ0FBYUgsS0FBYixDQUFQO0FBQ0Q7O0FBQ0QsUUFBSUEsS0FBSyxZQUFZRyxRQUFyQixFQUErQjtBQUM3QixhQUFPSCxLQUFQO0FBQ0Q7O0FBQ0QsVUFBTSxJQUFJekosS0FBSixDQUFVMEosT0FBVixDQUFOO0FBQ0QsR0FkWSxFQWNWRCxLQWRVLENBQWI7O0FBZ0JBLFNBQU87QUFDTGhDLFFBREs7QUFFTC9ELFNBQUssRUFBRTtBQUZGLEdBQVA7QUFJRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNdEQsTUFBTSxHQUFHMkosbURBQUssQ0FBQ2xHLEVBQUUsSUFBSUEsRUFBUCxDQUFwQjtBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNSLE9BQVQsQ0FBaUJoQixHQUFqQixFQUFzQnBFLEtBQUssR0FBRyxJQUE5QixFQUFvQ3lGLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWhELEVBQXVEO0FBQzVELFNBQU8sQ0FBQyxFQUFFLEdBQUdyQixHQUFMO0FBQVVxQjtBQUFWLEdBQUQsRUFBb0I7QUFBRVgsVUFBTSxFQUFFbEIsTUFBTSxDQUFDSCxFQUFqQjtBQUFxQnpEO0FBQXJCLEdBQXBCLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTaUYsU0FBVCxDQUFtQmIsR0FBbkIsRUFBd0JHLE1BQU0sR0FBRyxFQUFqQyxFQUFxQ2tCLEtBQUssR0FBR3JCLEdBQUcsQ0FBQ3FCLEtBQWpELEVBQXdEO0FBQzdELFNBQU8sQ0FBQyxFQUFFLEdBQUdyQixHQUFMO0FBQVVxQjtBQUFWLEdBQUQsRUFBb0I7QUFBRVgsVUFBTSxFQUFFbEIsTUFBTSxDQUFDRixJQUFqQjtBQUF1QmE7QUFBdkIsR0FBcEIsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNTLFVBQVQsQ0FBb0JaLEdBQXBCLEVBQXlCRyxNQUFNLEdBQUcsRUFBbEMsRUFBc0NrQixLQUFLLEdBQUdyQixHQUFHLENBQUNxQixLQUFsRCxFQUF5RDtBQUM5RCxTQUFPLENBQUMsRUFBRSxHQUFHckIsR0FBTDtBQUFVcUI7QUFBVixHQUFELEVBQW9CO0FBQUVYLFVBQU0sRUFBRWxCLE1BQU0sQ0FBQ0QsS0FBakI7QUFBd0JZO0FBQXhCLEdBQXBCLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTd0gsS0FBVCxDQUFlNUosTUFBZixFQUF1QnFKLEtBQXZCLEVBQThCO0FBQ25DLFNBQU9ySixNQUFNLENBQUNrRSxPQUFPLENBQUNtRixLQUFELENBQVIsQ0FBYjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVMxRyxNQUFULENBQWdCSyxLQUFoQixFQUF1QjtBQUM1QixTQUFPQSxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNMLE1BQWhCO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTa0gsU0FBVCxDQUFtQjdHLEtBQW5CLEVBQTBCO0FBQy9CLFNBQU9BLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU0wsTUFBVCxLQUFvQmxCLE1BQU0sQ0FBQ0gsRUFBbEM7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTd0ksT0FBVCxDQUFpQjlHLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU82RyxTQUFTLENBQUM3RyxLQUFELENBQVQsR0FBbUJBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU25GLEtBQTVCLEdBQW9DLElBQTNDO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2tNLE9BQVQsQ0FBaUIvRyxLQUFqQixFQUF3QjtBQUM3QixTQUFPNkcsU0FBUyxDQUFDN0csS0FBRCxDQUFULEdBQW1CLElBQW5CLEdBQTBCZ0gsMkRBQVksQ0FBQ2hILEtBQUQsQ0FBN0M7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2lILEdBQVQsQ0FBYWpLLE1BQWIsRUFBcUJxSixLQUFyQixFQUE0QjtBQUNqQyxRQUFNLENBQUNyRyxLQUFELEVBQVEsQ0FBQ2dDLENBQUQsRUFBSWtGLE1BQUosQ0FBUixJQUF1QnhILGlEQUFHLENBQUMxQyxNQUFNLENBQUNrRSxPQUFPLENBQUNtRixLQUFELENBQVIsQ0FBUCxDQUFoQzs7QUFDQSxNQUFJYSxNQUFNLENBQUN2SCxNQUFQLEtBQWtCbEIsTUFBTSxDQUFDSCxFQUE3QixFQUFpQztBQUMvQixXQUFPNEksTUFBTSxDQUFDck0sS0FBZDtBQUNEOztBQUNELFFBQU0sSUFBSStCLEtBQUosQ0FBVW9LLDJEQUFZLENBQUNoSCxLQUFELENBQXRCLENBQU47QUFDRCxDOzs7Ozs7Ozs7Ozs7QUM1UkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7O0FBQ0E7O0FBRUEsTUFBTW1ILEdBQUcsR0FBRyxNQUFaO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLHFCQUFsQjtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU10RyxTQUFTLEdBQUc7QUFDdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRXVHLFVBQVEsRUFBRSxVQUxhOztBQU12QjtBQUNGO0FBQ0E7QUFDQTtBQUNFQyxZQUFVLEVBQUUsWUFWVzs7QUFXdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRUMsU0FBTyxFQUFFLFNBZmM7O0FBZ0J2QjtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0V4RyxRQUFNLEVBQUUsUUFyQmU7O0FBc0J2QjtBQUNGO0FBQ0E7QUFDQTtBQUNFeUcsVUFBUSxFQUFFLFVBMUJhOztBQTJCdkI7QUFDRjtBQUNBO0FBQ0E7QUFDRUMsT0FBSyxFQUFFO0FBL0JnQixDQUFsQjtBQWtDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNwSSxRQUFULENBQWtCcUksS0FBbEIsRUFBeUI7QUFDOUIsU0FBTyxDQUFDO0FBQUU5TSxRQUFJLEVBQUVrRyxTQUFTLENBQUN1RyxRQUFsQjtBQUE0Qks7QUFBNUIsR0FBRCxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsVUFBVCxDQUFvQkQsS0FBcEIsRUFBMkI7QUFDaEMsU0FBTyxDQUFDO0FBQUU5TSxRQUFJLEVBQUVrRyxTQUFTLENBQUN3RyxVQUFsQjtBQUE4Qkk7QUFBOUIsR0FBRCxDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNFLE9BQVQsQ0FBaUJGLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU8sQ0FBQztBQUFFOU0sUUFBSSxFQUFFa0csU0FBUyxDQUFDeUcsT0FBbEI7QUFBMkJHO0FBQTNCLEdBQUQsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0csS0FBVCxDQUFlSCxLQUFmLEVBQXNCO0FBQzNCLFNBQU8sQ0FBQztBQUFFOU0sUUFBSSxFQUFFa0csU0FBUyxDQUFDMkcsS0FBbEI7QUFBeUJDO0FBQXpCLEdBQUQsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNJLE1BQVQsQ0FBZ0I3SSxHQUFoQixFQUFxQkcsTUFBckIsRUFBNkI7QUFDbEMsU0FBT0EsTUFBTSxDQUFDTCxNQUFQLEtBQWtCLENBQWxCLElBQXVCSyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVV4RSxJQUFWLEtBQW1Ca0csU0FBUyxDQUFDQyxNQUFwRCxHQUNIM0IsTUFERyxHQUVILENBQUM7QUFBRXhFLFFBQUksRUFBRWtHLFNBQVMsQ0FBQ0MsTUFBbEI7QUFBMEI5QixPQUExQjtBQUErQkc7QUFBL0IsR0FBRCxDQUZKO0FBR0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNEIsUUFBVCxDQUFrQjBHLEtBQWxCLEVBQXlCekksR0FBekIsRUFBOEJHLE1BQTlCLEVBQXNDO0FBQzNDLFNBQU9BLE1BQU0sQ0FBQ0wsTUFBUCxLQUFrQixDQUFsQixJQUF1QkssTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVeEUsSUFBVixLQUFtQmtHLFNBQVMsQ0FBQ0MsTUFBcEQsR0FDSCxDQUFDO0FBQ0RuRyxRQUFJLEVBQUVrRyxTQUFTLENBQUMwRyxRQURmO0FBRUR2SSxPQUFHLEVBQUVHLE1BQU0sQ0FBQ0gsR0FGWDtBQUdERyxVQUFNLEVBQUVBLE1BQU0sQ0FBQ0EsTUFIZDtBQUlEc0k7QUFKQyxHQUFELENBREcsR0FPSCxDQUFDO0FBQUU5TSxRQUFJLEVBQUVrRyxTQUFTLENBQUMwRyxRQUFsQjtBQUE0QnZJLE9BQTVCO0FBQWlDRyxVQUFqQztBQUF5Q3NJO0FBQXpDLEdBQUQsQ0FQSjtBQVFEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTOUgsS0FBVCxDQUFlbUksT0FBTyxHQUFHLEVBQXpCLEVBQTZCQyxPQUFPLEdBQUcsRUFBdkMsRUFBMkM7QUFDaEQsU0FBTyxDQUFDLEdBQUdELE9BQUosRUFBYSxHQUFHQyxPQUFoQixDQUFQO0FBQ0QsQyxDQUVEO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsU0FBVCxDQUFtQjNILEtBQW5CLEVBQTBCK0QsSUFBMUIsRUFBZ0M7QUFDckMsUUFBTTZELElBQUksR0FBRzdELElBQUksQ0FBQzhELFFBQUwsQ0FBYzdILEtBQWQsQ0FBYjs7QUFDQSxNQUFJNEgsSUFBSSxLQUFLLElBQVQsSUFBaUJBLElBQUksS0FBSyxJQUExQixJQUFrQ0EsSUFBSSxLQUFLLElBQS9DLEVBQXFEO0FBQ25ELFdBQU87QUFBRUUsYUFBTyxFQUFFLElBQVg7QUFBaUI1RCxVQUFJLEVBQUU7QUFBdkIsS0FBUDtBQUNEOztBQUVELE1BQUkwRCxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQixRQUFJNUgsS0FBSyxHQUFHK0QsSUFBSSxDQUFDQyxVQUFMLEdBQWtCLENBQTlCLEVBQWlDO0FBQy9CLFlBQU0rRCxRQUFRLEdBQUdoRSxJQUFJLENBQUM4RCxRQUFMLENBQWM3SCxLQUFLLEdBQUcsQ0FBdEIsQ0FBakI7O0FBQ0EsVUFBSTRILElBQUksS0FBSyxJQUFULElBQWlCRyxRQUFRLEtBQUssSUFBbEMsRUFBd0M7QUFDdEMsZUFBTztBQUFFRCxpQkFBTyxFQUFFLElBQVg7QUFBaUI1RCxjQUFJLEVBQUU7QUFBdkIsU0FBUDtBQUNEO0FBQ0Y7O0FBQ0QsV0FBTztBQUFFNEQsYUFBTyxFQUFFLElBQVg7QUFBaUI1RCxVQUFJLEVBQUU7QUFBdkIsS0FBUDtBQUNEOztBQUVELE1BQUlsRSxLQUFLLEdBQUcrRCxJQUFJLENBQUNDLFVBQUwsR0FBa0IsQ0FBOUIsRUFBaUM7QUFDL0IsVUFBTStELFFBQVEsR0FBR2hFLElBQUksQ0FBQzhELFFBQUwsQ0FBYzdILEtBQUssR0FBRyxDQUF0QixDQUFqQjtBQUVBLFFBQUk0SCxJQUFJLEtBQUssSUFBVCxJQUFpQkcsUUFBUSxLQUFLLElBQWxDLEVBQXdDLE9BQU87QUFBRUQsYUFBTyxFQUFFLElBQVg7QUFBaUI1RCxVQUFJLEVBQUU7QUFBdkIsS0FBUDs7QUFDeEMsUUFBSWxFLEtBQUssR0FBRytELElBQUksQ0FBQ0MsVUFBTCxHQUFrQixDQUE5QixFQUFpQztBQUMvQixZQUFNZ0UsU0FBUyxHQUFHakUsSUFBSSxDQUFDOEQsUUFBTCxDQUFjN0gsS0FBSyxHQUFHLENBQXRCLENBQWxCOztBQUNBLFVBQUk0SCxJQUFJLEtBQUssSUFBVCxJQUFpQkcsUUFBUSxLQUFLLElBQTlCLEtBQ0VDLFNBQVMsS0FBSyxJQUFkLElBQXNCQSxTQUFTLEtBQUssSUFEdEMsQ0FBSixFQUNpRDtBQUMvQyxlQUFPO0FBQUVGLGlCQUFPLEVBQUUsSUFBWDtBQUFpQjVELGNBQUksRUFBRTtBQUF2QixTQUFQO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQU87QUFBRTRELFdBQU8sRUFBRSxLQUFYO0FBQWtCNUQsUUFBSSxFQUFFK0QsMkRBQWEsQ0FBQ2pJLEtBQUQsRUFBUStELElBQVI7QUFBckMsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTbUUsY0FBVCxDQUF3QmxJLEtBQXhCLEVBQStCK0QsSUFBL0IsRUFBcUM7QUFDMUMsTUFBSW9FLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLENBQWIsQ0FGMEMsQ0FFM0I7O0FBQ2YsTUFBSXZLLENBQUMsR0FBRyxDQUFSOztBQUVBLFNBQU9BLENBQUMsR0FBR2tHLElBQUksQ0FBQ0MsVUFBaEIsRUFBNEI7QUFDMUIsVUFBTTtBQUFFOEQsYUFBRjtBQUFXNUQ7QUFBWCxRQUFvQnlELFNBQVMsQ0FBQzlKLENBQUQsRUFBSWtHLElBQUosQ0FBbkM7O0FBQ0EsUUFBSStELE9BQUosRUFBYTtBQUNYLFVBQUlqSyxDQUFDLEdBQUdxRyxJQUFKLEdBQVdsRSxLQUFmLEVBQXNCO0FBQ3BCLGVBQU87QUFBRW1JLGVBQUY7QUFBUzdELGFBQUcsRUFBRXpHLENBQUMsR0FBRyxDQUFsQjtBQUFxQnVLO0FBQXJCLFNBQVA7QUFDRDs7QUFDREEsWUFBTTtBQUNORCxXQUFLLEdBQUd0SyxDQUFDLEdBQUdxRyxJQUFaO0FBQ0Q7O0FBQ0RyRyxLQUFDLElBQUlxRyxJQUFMO0FBQ0Q7O0FBQ0QsU0FBTztBQUFFaUUsU0FBRjtBQUFTN0QsT0FBRyxFQUFFUCxJQUFJLENBQUNDLFVBQUwsR0FBa0IsQ0FBaEM7QUFBbUNvRTtBQUFuQyxHQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsWUFBVCxDQUFzQnJJLEtBQXRCLEVBQTZCK0QsSUFBN0IsRUFBbUNvRSxLQUFuQyxFQUEwQztBQUMvQyxNQUFJRyxTQUFTLEdBQUcsQ0FBaEI7QUFDQSxNQUFJQyxTQUFTLEdBQUdKLEtBQWhCOztBQUNBLFNBQU9JLFNBQVMsR0FBR3ZJLEtBQVosSUFBcUJ1SSxTQUFTLEdBQUd4RSxJQUFJLENBQUNDLFVBQTdDLEVBQXlEO0FBQ3ZEdUUsYUFBUyxJQUFJTiwyREFBYSxDQUFDTSxTQUFELEVBQVl4RSxJQUFaLENBQTFCO0FBQ0F1RSxhQUFTO0FBQ1Y7O0FBQ0QsU0FBT0EsU0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTRSxNQUFULENBQWdCRixTQUFoQixFQUEyQkcsSUFBM0IsRUFBaUNDLE9BQWpDLEVBQTBDO0FBQy9DLFFBQU1DLFVBQVUsR0FBRyxFQUFuQjtBQUNBLE1BQUlDLFFBQVEsR0FBRy9CLEdBQUcsQ0FBQ2dDLElBQUosQ0FBU0osSUFBVCxDQUFmOztBQUNBLFNBQU9HLFFBQVEsS0FBSyxJQUFwQixFQUEwQjtBQUN4QkQsY0FBVSxDQUFDNUgsSUFBWCxDQUFnQjZILFFBQVEsQ0FBQzVJLEtBQXpCO0FBQ0E0SSxZQUFRLEdBQUcvQixHQUFHLENBQUNnQyxJQUFKLENBQVNKLElBQVQsQ0FBWDtBQUNELEdBTjhDLENBUS9DO0FBQ0E7OztBQUNBLE1BQUlLLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLENBQXJCO0FBQ0EsTUFBSW5DLE1BQU0sR0FBRzZCLElBQWI7O0FBRUEsT0FBSyxNQUFNTyxRQUFYLElBQXVCTCxVQUF2QixFQUFtQztBQUNqQyxVQUFNTSxXQUFXLEdBQUdELFFBQVEsR0FBR0YsTUFBL0I7QUFDQSxVQUFNSSxVQUFVLEdBQUdSLE9BQU8sR0FBR08sV0FBVyxHQUFHUCxPQUEzQzs7QUFDQSxRQUFJTyxXQUFXLEdBQUdYLFNBQVMsR0FBR1MsY0FBOUIsRUFBOEM7QUFDNUNBLG9CQUFjLElBQUlHLFVBQVUsR0FBRyxDQUEvQjtBQUNEOztBQUNESixVQUFNLElBQUlJLFVBQVUsR0FBRyxDQUF2QjtBQUNBdEMsVUFBTSxHQUFHQSxNQUFNLENBQUN1QyxTQUFQLENBQWlCLENBQWpCLEVBQW9CRixXQUFwQixJQUFtQyxJQUFJekUsTUFBSixDQUFXMEUsVUFBWCxDQUFuQyxHQUNMdEMsTUFBTSxDQUFDdUMsU0FBUCxDQUFpQkYsV0FBVyxHQUFHLENBQS9CLENBREo7QUFFRDs7QUFDRCxTQUFPO0FBQUVSLFFBQUksRUFBRTdCLE1BQVI7QUFBZ0J3QyxZQUFRLEVBQUVMLGNBQWMsR0FBR1Q7QUFBM0MsR0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNlLFlBQVQsQ0FBc0JELFFBQXRCLEVBQWdDWCxJQUFoQyxFQUFzQztBQUMzQyxNQUFJekksS0FBSyxHQUFHb0osUUFBWjtBQUNBLFFBQU1FLE9BQU8sR0FBRyxFQUFoQjtBQUVBLE1BQUlDLEtBQUssR0FBR3pDLFNBQVMsQ0FBQytCLElBQVYsQ0FBZUosSUFBZixDQUFaOztBQUNBLFNBQU9jLEtBQUssS0FBSyxJQUFqQixFQUF1QjtBQUNyQkQsV0FBTyxDQUFDdkksSUFBUixDQUFhd0ksS0FBSyxDQUFDdkosS0FBbkI7QUFDQSxRQUFJdUosS0FBSyxDQUFDdkosS0FBTixHQUFjQSxLQUFsQixFQUF5QkEsS0FBSztBQUM5QnVKLFNBQUssR0FBR3pDLFNBQVMsQ0FBQytCLElBQVYsQ0FBZUosSUFBZixDQUFSO0FBQ0Q7O0FBQ0QsU0FBTztBQUNMZSxTQUFLLEVBQUV4SixLQUFLLEdBQUcsQ0FEVjtBQUNhO0FBQ2xCdkIsVUFBTSxFQUFFakMsd0RBQVUsQ0FBQ2lNLElBQUQsQ0FBVixHQUFtQmEsT0FBTyxDQUFDN0s7QUFGOUIsR0FBUDtBQUlEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTZ0wsSUFBVCxDQUFjaEIsSUFBZCxFQUFvQmhLLE1BQXBCLEVBQTRCK0ssS0FBNUIsRUFBbUNFLFFBQW5DLEVBQTZDQyxNQUFNLEdBQUcsQ0FBdEQsRUFBeUQ7QUFDOUQsUUFBTUMsRUFBRSxHQUFHLElBQUlwRixNQUFKLENBQVdtRixNQUFYLENBQVgsQ0FEOEQsQ0FHOUQ7QUFDQTs7QUFDQSxNQUFJSCxLQUFLLElBQUlFLFFBQVQsSUFBcUJqTCxNQUFNLElBQUlpTCxRQUFuQyxFQUE2QztBQUMzQyxXQUFRLEdBQUVFLEVBQUcsR0FBRW5CLElBQUssS0FBSW1CLEVBQUcsR0FBRSxJQUFJcEYsTUFBSixDQUFXZ0YsS0FBSyxHQUFHLENBQW5CLENBQXNCLEdBQW5EO0FBQ0QsR0FQNkQsQ0FTOUQ7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUlBLEtBQUssSUFBSUUsUUFBUSxHQUFHLENBQXhCLEVBQTJCO0FBQ3pCLFdBQVEsR0FBRUUsRUFBRyxHQUFFbkIsSUFBSSxDQUFDVSxTQUFMLENBQWUsQ0FBZixFQUFrQk8sUUFBUSxHQUFHLENBQTdCLENBQWdDLFFBQU9FLEVBQUcsR0FDdkQsSUFBSXBGLE1BQUosQ0FBV2dGLEtBQUssR0FBRyxDQUFuQixDQUNELEdBRkQ7QUFHRCxHQWpCNkQsQ0FtQjlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLE1BQUlBLEtBQUssSUFBSS9LLE1BQU0sR0FBR2lMLFFBQVQsR0FBb0IsQ0FBakMsRUFBb0M7QUFDbEMsVUFBTXZCLEtBQUssR0FBRzFKLE1BQU0sR0FBR2lMLFFBQVQsR0FBb0IsQ0FBbEM7QUFDQSxVQUFNRyxRQUFRLEdBQUdMLEtBQUssSUFBSS9LLE1BQU0sR0FBR2lMLFFBQWIsQ0FBdEI7QUFDQSxXQUFRLEdBQUVFLEVBQUcsTUFBS25CLElBQUksQ0FBQ1UsU0FBTCxDQUFlaEIsS0FBZixDQUFzQixLQUFJeUIsRUFBRyxHQUFFLElBQUlwRixNQUFKLENBQVdxRixRQUFRLEdBQUcsQ0FBdEIsQ0FBeUIsR0FBMUU7QUFDRCxHQTVCNkQsQ0E4QjlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQU0xQixLQUFLLEdBQUdxQixLQUFLLEdBQUcsQ0FBUixHQUFZTSxJQUFJLENBQUNDLElBQUwsQ0FBVUwsUUFBUSxHQUFHLENBQXJCLENBQVosR0FBc0MsQ0FBcEQ7QUFDQSxRQUFNcEYsR0FBRyxHQUFHa0YsS0FBSyxHQUFHLENBQVIsR0FBWU0sSUFBSSxDQUFDRSxLQUFMLENBQVdOLFFBQVEsR0FBRyxDQUF0QixDQUFaLEdBQXVDLENBQW5EO0FBQ0EsU0FBUSxHQUFFRSxFQUFHLE1BQ1huQixJQUFJLENBQUNVLFNBQUwsQ0FBZWhCLEtBQWYsRUFBc0I3RCxHQUF0QixDQUNELFFBQU9zRixFQUFHLEdBQ1QsSUFBSXBGLE1BQUosQ0FBV3NGLElBQUksQ0FBQ0MsSUFBTCxDQUFVTCxRQUFRLEdBQUcsQ0FBckIsQ0FBWCxDQUNELEdBSkQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU08sWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0J4QixPQUEvQixFQUF3Q2dCLFFBQXhDLEVBQWtEQyxNQUFsRCxFQUEwRDtBQUN4RCxRQUFNQyxFQUFFLEdBQUcsSUFBSXBGLE1BQUosQ0FBV21GLE1BQVgsQ0FBWDtBQUNBLFFBQU1RLFVBQVUsR0FBR0QsT0FBTyxDQUFDN0csR0FBUixDQUFZNUIsQ0FBQyxJQUFJO0FBQ2xDLFVBQU07QUFBRXpCLFdBQUY7QUFBUytEO0FBQVQsUUFBa0J0QyxDQUFDLENBQUM5QyxHQUExQjtBQUNBLFVBQU15SSxLQUFLLEdBQUczRixDQUFDLENBQUMyRixLQUFGLEdBQ1QsS0FBSXdDLEVBQUcsbUJBQWtCbkksQ0FBQyxDQUFDMkYsS0FBTSxlQUR4QixHQUVULEtBQUl3QyxFQUFHLG1DQUZaO0FBR0EsV0FBT3hDLEtBQUssR0FBR2dELE1BQU0sQ0FBQzNJLENBQUMsQ0FBQzNDLE1BQUgsRUFBV2tCLEtBQVgsRUFBa0IrRCxJQUFsQixFQUF3QjJFLE9BQXhCLEVBQWlDZ0IsUUFBakMsRUFBMkNDLE1BQU0sR0FBRyxDQUFwRCxDQUFyQjtBQUNELEdBTmtCLENBQW5CO0FBT0EsU0FBT1EsVUFBVSxDQUFDeEgsSUFBWCxDQUFnQixFQUFoQixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFNBQVMwSCxjQUFULENBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDbkMsTUFBSTNELE1BQU0sR0FBRzBELElBQWI7O0FBQ0EsU0FBTzFELE1BQU0sQ0FBQ0EsTUFBTSxDQUFDbkksTUFBUCxHQUFnQixDQUFqQixDQUFOLEtBQThCLElBQXJDLEVBQTJDO0FBQ3pDbUksVUFBTSxHQUFHQSxNQUFNLENBQUN1QyxTQUFQLENBQWlCLENBQWpCLEVBQW9CdkMsTUFBTSxDQUFDbkksTUFBUCxHQUFnQixDQUFwQyxDQUFUO0FBQ0Q7O0FBQ0QsU0FBT21JLE1BQU0sR0FBRyxLQUFLcEMsTUFBTCxDQUFZK0YsS0FBWixDQUFoQjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxTQUFTSCxNQUFULENBQ0x0TCxNQURLLEVBQ0drQixLQURILEVBQ1UrRCxJQURWLEVBQ2dCMkUsT0FBTyxHQUFHLENBRDFCLEVBQzZCZ0IsUUFBUSxHQUFHLEVBRHhDLEVBQzRDQyxNQUFNLEdBQUcsQ0FEckQsRUFFTDtBQUNBLFFBQU07QUFBRXhCLFNBQUY7QUFBUzdELE9BQVQ7QUFBYzhEO0FBQWQsTUFBeUJGLGNBQWMsQ0FBQ2xJLEtBQUQsRUFBUStELElBQVIsQ0FBN0M7QUFDQSxRQUFNdUUsU0FBUyxHQUFHRCxZQUFZLENBQUNySSxLQUFELEVBQVErRCxJQUFSLEVBQWNvRSxLQUFkLENBQTlCO0FBQ0EsUUFBTXlCLEVBQUUsR0FBRyxJQUFJcEYsTUFBSixDQUFXbUYsTUFBWCxDQUFYO0FBRUEsUUFBTWEsT0FBTyxHQUFHQywwREFBWSxDQUFDdEMsS0FBRCxFQUFRN0QsR0FBRyxHQUFHNkQsS0FBTixHQUFjLENBQXRCLEVBQXlCcEUsSUFBekIsQ0FBNUI7QUFDQSxRQUFNO0FBQUVxRixZQUFGO0FBQVlYO0FBQVosTUFBcUJELE1BQU0sQ0FBQ0YsU0FBRCxFQUFZa0MsT0FBWixFQUFxQjlCLE9BQXJCLENBQWpDO0FBQ0EsUUFBTTtBQUFFYyxTQUFGO0FBQVMvSztBQUFULE1BQW9CNEssWUFBWSxDQUFDRCxRQUFELEVBQVdYLElBQVgsQ0FBdEM7QUFFQSxRQUFNaUMsUUFBUSxHQUFJLEdBQUVkLEVBQUcsd0JBQXVCeEIsTUFBTyxZQUFXb0IsS0FBTSxJQUF0RTtBQUNBLFFBQU1tQixPQUFPLEdBQUdsQixJQUFJLENBQUNoQixJQUFELEVBQU9oSyxNQUFQLEVBQWUrSyxLQUFmLEVBQXNCRSxRQUF0QixFQUFnQ0MsTUFBaEMsQ0FBcEI7QUFDQSxRQUFNckMsT0FBTyxHQUFHeEksTUFBTSxDQUFDOEwsSUFBUCxDQUFZL0osS0FBSyxJQUFJQSxLQUFLLENBQUN2RyxJQUFOLEtBQWVrRyxTQUFTLENBQUN5RyxPQUE5QyxDQUFoQjtBQUNBLFFBQU1JLFVBQVUsR0FBR3ZJLE1BQU0sQ0FBQzhMLElBQVAsQ0FBWS9KLEtBQUssSUFBSUEsS0FBSyxDQUFDdkcsSUFBTixLQUFla0csU0FBUyxDQUFDd0csVUFBOUMsQ0FBbkI7QUFDQSxRQUFNakksUUFBUSxHQUFHOEwsMkRBQWEsQ0FDNUIvTCxNQUFNLENBQUNnRSxNQUFQLENBQWNqQyxLQUFLLElBQUlBLEtBQUssQ0FBQ3ZHLElBQU4sS0FBZWtHLFNBQVMsQ0FBQ3VHLFFBQWhELEVBQ0cxRCxHQURILENBQ094QyxLQUFLLElBQUlBLEtBQUssQ0FBQ3VHLEtBRHRCLENBRDRCLENBQTlCO0FBS0EsUUFBTUksTUFBTSxHQUFHMUksTUFBTSxDQUFDZ0UsTUFBUCxDQUFjakMsS0FBSyxJQUFJQSxLQUFLLENBQUN2RyxJQUFOLEtBQWVrRyxTQUFTLENBQUNDLE1BQWhELENBQWY7QUFDQSxRQUFNQyxRQUFRLEdBQUc1QixNQUFNLENBQUNnRSxNQUFQLENBQWNqQyxLQUFLLElBQUlBLEtBQUssQ0FBQ3ZHLElBQU4sS0FBZWtHLFNBQVMsQ0FBQzBHLFFBQWhELENBQWpCO0FBRUEsUUFBTTRELFFBQVEsR0FBR3pELFVBQVUsR0FBSSxHQUFFdUMsRUFBRyxjQUFhdkMsVUFBVSxDQUFDRCxLQUFNLElBQXZDLEdBQTZDLEVBQXhFO0FBQ0EsUUFBTTJELE1BQU0sR0FBR2hNLFFBQVEsQ0FBQ04sTUFBVCxHQUFtQixHQUFFbUwsRUFBRyxZQUFXN0ssUUFBUyxJQUE1QyxHQUFrRCxFQUFqRTtBQUNBLFFBQU1pTSxVQUFVLEdBQUcxRCxPQUFPLEdBQUksR0FBRXNDLEVBQUcsR0FBRXRDLE9BQU8sQ0FBQ0YsS0FBTSxJQUF6QixHQUErQixFQUF6RDtBQUVBLFFBQU02RCxTQUFTLEdBQUdoQixZQUFZLENBQUN6QyxNQUFELEVBQVNrQixPQUFULEVBQWtCZ0IsUUFBbEIsRUFBNEJDLE1BQTVCLENBQTlCO0FBQ0EsUUFBTXVCLFdBQVcsR0FBR2pCLFlBQVksQ0FBQ3ZKLFFBQUQsRUFBV2dJLE9BQVgsRUFBb0JnQixRQUFwQixFQUE4QkMsTUFBOUIsQ0FBaEM7QUFFQSxRQUFNd0IsVUFBVSxHQUFHck0sTUFBTSxDQUFDTCxNQUFQLEtBQWtCLENBQWxCLEdBQXVCLEdBQUVtTCxFQUFHLG9CQUE1QixHQUFrRCxFQUFyRTtBQUNBLFFBQU13QixNQUFNLEdBQUdwTCxLQUFLLElBQUkrRCxJQUFJLENBQUNDLFVBQWQsR0FDVixHQUFFNEYsRUFBRyw4Q0FESyxHQUMyQyxFQUQxRDtBQUdBLFNBQU9TLGNBQWMsQ0FDbEIsR0FBRUssUUFBUyxPQUFNQyxPQUFRLEtBQUlHLFFBQVMsR0FBRUMsTUFBTyxHQUFFQyxVQUFXLEdBQUVHLFVBQVcsRUFBMUUsR0FDSyxHQUFFQyxNQUFPLEdBQUVGLFdBQVksR0FBRUQsU0FBVSxFQUZyQixFQUduQixDQUhtQixDQUFyQjtBQUtELEMsQ0FFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3ZFLFlBQVQsQ0FBc0JoSCxLQUF0QixFQUE2QmdKLE9BQTdCLEVBQXNDZ0IsUUFBdEMsRUFBZ0RyUCxTQUFTLEdBQUcrUCxNQUE1RCxFQUFvRTtBQUN6RSxRQUFNLENBQUN6TCxHQUFELEVBQU1pSSxNQUFOLElBQWdCbEgsS0FBdEI7QUFDQSxRQUFNO0FBQUVNLFNBQUY7QUFBUytEO0FBQVQsTUFBa0JwRixHQUF4QjtBQUNBLFNBQU90RSxTQUFTLENBQUN1TSxNQUFNLENBQUM5SCxNQUFSLEVBQWdCa0IsS0FBaEIsRUFBdUIrRCxJQUF2QixFQUE2QjJFLE9BQTdCLEVBQXNDZ0IsUUFBdEMsQ0FBaEI7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBUzJCLFdBQVQsQ0FBcUIxTSxHQUFyQixFQUEwQitKLE9BQU8sR0FBRyxDQUFwQyxFQUF1QztBQUM1QyxRQUFNO0FBQUUxSSxTQUFGO0FBQVMrRDtBQUFULE1BQWtCcEYsR0FBeEI7QUFDQSxRQUFNO0FBQUV3SixTQUFGO0FBQVM3RCxPQUFUO0FBQWM4RDtBQUFkLE1BQXlCRixjQUFjLENBQUNsSSxLQUFELEVBQVErRCxJQUFSLENBQTdDO0FBQ0EsUUFBTXVFLFNBQVMsR0FBR0QsWUFBWSxDQUFDckksS0FBRCxFQUFRK0QsSUFBUixFQUFjb0UsS0FBZCxDQUE5QjtBQUVBLFFBQU1xQyxPQUFPLEdBQUdDLDBEQUFZLENBQUN0QyxLQUFELEVBQVE3RCxHQUFHLEdBQUc2RCxLQUFOLEdBQWMsQ0FBdEIsRUFBeUJwRSxJQUF6QixDQUE1QjtBQUNBLFFBQU07QUFBRXFGLFlBQUY7QUFBWVg7QUFBWixNQUFxQkQsTUFBTSxDQUFDRixTQUFELEVBQVlrQyxPQUFaLEVBQXFCOUIsT0FBckIsQ0FBakM7QUFDQSxRQUFNO0FBQUVjLFNBQUY7QUFBUzlIO0FBQVQsTUFBZTJILFlBQVksQ0FBQ0QsUUFBRCxFQUFXWCxJQUFYLENBQWpDO0FBRUEsU0FBTztBQUFFQSxRQUFJLEVBQUVMLE1BQVI7QUFBZ0JrRCxVQUFNLEVBQUU5QjtBQUF4QixHQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDOXZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQWlCQTtBQUtBO0NBc0JBO0FBQ0E7O0FBRUE7QUFRQTtBQWFBO0NBb0NBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7QUNuSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVPLE1BQU0rQixPQUFPLEdBQUc7QUFDckJDLE9BQUssRUFBRSwyQkFEYztBQUVyQkMsUUFBTSxFQUFFLGtDQUZhO0FBR3JCQyxLQUFHLEVBQUUsZUFIZ0I7QUFJckJDLFdBQVMsRUFBRWxLLENBQUMsSUFBSyxlQUFjQSxDQUFFLGFBSlo7QUFLckJtSyxNQUFJLEVBQUVyTyxDQUFDLElBQUlzTyxtREFBSyxDQUFDdE8sQ0FBRCxDQUxLO0FBTXJCdU8sT0FBSyxFQUFFdk8sQ0FBQyxJQUFJc08sbURBQUssQ0FBQ3RPLENBQUQsQ0FOSTtBQU9yQndPLE9BQUssRUFBRSxTQVBjO0FBUXJCQyxLQUFHLEVBQUUsY0FSZ0I7QUFTckJDLEtBQUcsRUFBRSxxQkFUZ0I7QUFVckJDLFFBQU0sRUFBRSxVQVZhO0FBV3JCQyxTQUFPLEVBQUUsa0JBWFk7QUFZckJDLE9BQUssRUFBRSxvQkFaYztBQWFyQkMsUUFBTSxFQUFFLDRCQWJhO0FBY3JCdkUsU0FBTyxFQUFFLFdBZFk7QUFlckJ3RSxVQUFRLEVBQUUsbUJBZlc7QUFnQnJCQyxRQUFNLEVBQUVDLEtBQUssSUFBSSxhQUFhM0IsMkRBQWEsQ0FBQzJCLEtBQUssQ0FBQ25KLEdBQU4sQ0FBVTlGLENBQUMsSUFBSyxJQUFHQSxDQUFFLEdBQXJCLENBQUQsQ0FoQnRCO0FBaUJyQmtQLE9BQUssRUFBRSxnQkFqQmM7QUFrQnJCQyxPQUFLLEVBQUVGLEtBQUssSUFBSSxZQUFZM0IsMkRBQWEsQ0FBQzJCLEtBQUssQ0FBQ25KLEdBQU4sQ0FBVTlGLENBQUMsSUFBSyxJQUFHQSxDQUFFLEdBQXJCLENBQUQsQ0FsQnBCO0FBbUJyQm9FLE9BQUssRUFBRSxDQUFDd0csS0FBRCxFQUFRN0QsR0FBUixLQUFpQix3QkFBdUI2RCxLQUFNLFVBQVM3RCxHQUFJLEdBbkI3QztBQW9CckJxSSxPQUFLLEVBQUVDLEVBQUUsSUFBSyxxQkFBb0JBLEVBQUcsRUFwQmhCO0FBcUJyQkMsT0FBSyxFQUFFLHdCQXJCYztBQXNCckJDLFFBQU0sRUFBRSxvQ0F0QmE7QUF1QnJCQyxTQUFPLEVBQUUsbUNBdkJZO0FBd0JyQkMsU0FBTyxFQUFFLDRDQXhCWTtBQXlCckJDLFVBQVEsRUFBRSwyQ0F6Qlc7QUEwQnJCQyxRQUFNLEVBQUUsZ0NBMUJhO0FBMkJyQkMsUUFBTSxFQUFFQyxHQUFHLElBQUl2QixtREFBSyxDQUFDdUIsR0FBRCxDQTNCQztBQTRCckJDLFNBQU8sRUFBRUQsR0FBRyxJQUFJdkIsbURBQUssQ0FBQ3VCLEdBQUQsQ0E1QkE7QUE2QnJCRSxPQUFLLEVBQUUscUJBN0JjO0FBOEJyQkMsUUFBTSxFQUFFO0FBOUJhLENBQWhCO0FBaUNBLE1BQU1DLFNBQVMsR0FBRztBQUN2QmhDLE9BQUssRUFBRXpNLHVEQUFRLENBQUN3TSxPQUFPLENBQUNDLEtBQVQsQ0FEUTtBQUV2QkMsUUFBTSxFQUFFMU0sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ0UsTUFBVCxDQUZPO0FBR3ZCQyxLQUFHLEVBQUUzTSx1REFBUSxDQUFDd00sT0FBTyxDQUFDRyxHQUFULENBSFU7QUFJdkJDLFdBQVMsRUFBRWxLLENBQUMsSUFBSTFDLHVEQUFRLENBQUN3TSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JsSyxDQUFsQixDQUFELENBSkQ7QUFLdkJtSyxNQUFJLEVBQUVyTyxDQUFDLElBQUl3Qix1REFBUSxDQUFDd00sT0FBTyxDQUFDSyxJQUFSLENBQWFyTyxDQUFiLENBQUQsQ0FMSTtBQU12QnVPLE9BQUssRUFBRXZPLENBQUMsSUFBSXdCLHVEQUFRLENBQUN3TSxPQUFPLENBQUNPLEtBQVIsQ0FBY3ZPLENBQWQsQ0FBRCxDQU5HO0FBT3ZCd08sT0FBSyxFQUFFaE4sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ1EsS0FBVCxDQVBRO0FBUXZCQyxLQUFHLEVBQUVqTix1REFBUSxDQUFDd00sT0FBTyxDQUFDUyxHQUFULENBUlU7QUFTdkJDLEtBQUcsRUFBRWxOLHVEQUFRLENBQUN3TSxPQUFPLENBQUNVLEdBQVQsQ0FUVTtBQVV2QkMsUUFBTSxFQUFFbk4sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ1csTUFBVCxDQVZPO0FBV3ZCQyxTQUFPLEVBQUVwTix1REFBUSxDQUFDd00sT0FBTyxDQUFDWSxPQUFULENBWE07QUFZdkJDLE9BQUssRUFBRXJOLHVEQUFRLENBQUN3TSxPQUFPLENBQUNhLEtBQVQsQ0FaUTtBQWF2QkMsUUFBTSxFQUFFdE4sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ2MsTUFBVCxDQWJPO0FBY3ZCdkUsU0FBTyxFQUFFL0ksdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ3pELE9BQVQsQ0FkTTtBQWV2QndFLFVBQVEsRUFBRXZOLHVEQUFRLENBQUN3TSxPQUFPLENBQUNlLFFBQVQsQ0FmSztBQWdCdkJDLFFBQU0sRUFBRUMsS0FBSyxJQUFJek4sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ2dCLE1BQVIsQ0FBZUMsS0FBZixDQUFELENBaEJGO0FBaUJ2QkMsT0FBSyxFQUFFMU4sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ2tCLEtBQVQsQ0FqQlE7QUFrQnZCQyxPQUFLLEVBQUVGLEtBQUssSUFBSXpOLHVEQUFRLENBQUN3TSxPQUFPLENBQUNtQixLQUFSLENBQWNGLEtBQWQsQ0FBRCxDQWxCRDtBQW1CdkI3SyxPQUFLLEVBQUUsQ0FBQ3dHLEtBQUQsRUFBUTdELEdBQVIsS0FBZ0J2Rix1REFBUSxDQUFDd00sT0FBTyxDQUFDNUosS0FBUixDQUFjd0csS0FBZCxFQUFxQjdELEdBQXJCLENBQUQsQ0FuQlI7QUFvQnZCcUksT0FBSyxFQUFFQyxFQUFFLElBQUk3Tix1REFBUSxDQUFDd00sT0FBTyxDQUFDb0IsS0FBUixDQUFjQyxFQUFkLENBQUQsQ0FwQkU7QUFxQnZCQyxPQUFLLEVBQUU5Tix1REFBUSxDQUFDd00sT0FBTyxDQUFDc0IsS0FBVCxDQXJCUTtBQXNCdkJDLFFBQU0sRUFBRS9OLHVEQUFRLENBQUN3TSxPQUFPLENBQUN1QixNQUFULENBdEJPO0FBdUJ2QkMsU0FBTyxFQUFFaE8sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQ3dCLE9BQVQsQ0F2Qk07QUF3QnZCQyxTQUFPLEVBQUVqTyx1REFBUSxDQUFDd00sT0FBTyxDQUFDeUIsT0FBVCxDQXhCTTtBQXlCdkJDLFVBQVEsRUFBRWxPLHVEQUFRLENBQUN3TSxPQUFPLENBQUMwQixRQUFULENBekJLO0FBMEJ2QkMsUUFBTSxFQUFFbk8sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQzJCLE1BQVQsQ0ExQk87QUEyQnZCQyxRQUFNLEVBQUVDLEdBQUcsSUFBSXJPLHVEQUFRLENBQUN3TSxPQUFPLENBQUM0QixNQUFSLENBQWVDLEdBQWYsQ0FBRCxDQTNCQTtBQTRCdkJDLFNBQU8sRUFBRUQsR0FBRyxJQUFJck8sdURBQVEsQ0FBQ3dNLE9BQU8sQ0FBQzhCLE9BQVIsQ0FBZ0JELEdBQWhCLENBQUQsQ0E1QkQ7QUE2QnZCRSxPQUFLLEVBQUV2Tyx1REFBUSxDQUFDd00sT0FBTyxDQUFDK0IsS0FBVCxDQTdCUTtBQThCdkJDLFFBQU0sRUFBRXhPLHVEQUFRLENBQUN3TSxPQUFPLENBQUNnQyxNQUFUO0FBOUJPLENBQWxCLEM7Ozs7Ozs7Ozs7OztBQ3pDUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQVVBO0FBQ0E7QUFDQTtBQUVBLE1BQU07QUFBRXZQO0FBQUYsSUFBU0csa0RBQWY7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNc1AsVUFBVSxHQUFHdE4sRUFBRSxJQUFJekQsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNyQyxRQUFNO0FBQUVxQixTQUFGO0FBQVMrRDtBQUFULE1BQWtCcEYsR0FBeEI7QUFDQSxNQUFJcUIsS0FBSyxJQUFJK0QsSUFBSSxDQUFDQyxVQUFsQixFQUE4QixPQUFPeEUsNkRBQVMsQ0FBQ2IsR0FBRCxDQUFoQjtBQUU5QixRQUFNO0FBQUUrTyxTQUFGO0FBQVNyTDtBQUFULE1BQWtCc0wsNERBQVEsQ0FBQzNOLEtBQUQsRUFBUStELElBQVIsQ0FBaEM7QUFDQSxTQUFPNUQsRUFBRSxDQUFDa0MsSUFBRCxDQUFGLEdBQVcxQywyREFBTyxDQUFDaEIsR0FBRCxFQUFNMEQsSUFBTixFQUFZckMsS0FBSyxHQUFHME4sS0FBcEIsQ0FBbEIsR0FBK0NsTyw2REFBUyxDQUFDYixHQUFELENBQS9EO0FBQ0QsQ0FOOEIsQ0FBL0I7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1pTixJQUFJLEdBQUcsQ0FBQ3JPLENBQUQsRUFBSWlCLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDMUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJdEMsS0FBVjtBQUNBc0MsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDMlEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ00sRUFBRSxJQUFJeFEsQ0FBQyxLQUFLd1EsRUFBYixDQUFWLENBQTJCcFAsR0FBM0IsQ0FBRCxDQUFoQztBQUNBLFNBQU9tUCxJQUFJLENBQUN6TyxNQUFMLEtBQWdCckIsRUFBaEIsR0FDSDRQLElBREcsR0FFSHBPLDZEQUFTLENBQUNxTyxJQUFELEVBQU8vTiwwREFBTSxDQUFDdEIsQ0FBRCxFQUFJZ1AseURBQVMsQ0FBQzVCLElBQVYsQ0FBZXJPLENBQWYsQ0FBSixDQUFiLENBRmI7QUFHRCxDQVZtQyxDQUE3QjtBQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU11TyxLQUFLLEdBQUcsQ0FBQ3ZPLENBQUQsRUFBSWlCLENBQUosS0FBVTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDM0MsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJdEMsS0FBVjtBQUNBc0MsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDMlEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FDekNNLEVBQUUsSUFBSXhRLENBQUMsQ0FBQ3lRLFdBQUYsT0FBb0JELEVBQUUsQ0FBQ0MsV0FBSCxFQURlLENBQVYsQ0FFL0JyUCxHQUYrQixDQUFELENBQWhDO0FBR0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUNINFAsSUFERyxHQUVIcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDMUIsS0FBVixDQUFnQnZPLENBQWhCLENBQUosQ0FBYixDQUZiO0FBR0QsQ0Fab0MsQ0FBOUI7QUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0wUSxPQUFPLEdBQUcsQ0FBQzlOLEVBQUQsRUFBSzNCLENBQUwsS0FBVzlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDOUMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBTSxJQUFJcEMsS0FBVjtBQUNBb0MsUUFBQSxJQUFrQjVCLEtBQWxCO0FBRUEsUUFBTSxDQUFDMlEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsTUFBSW1QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFwQixFQUF3QixPQUFPNFAsSUFBUDtBQUN4QixTQUFPcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlzUCxJQUFJLENBQUNoUCxNQUFULENBQWIsQ0FBaEI7QUFDRCxDQVR1QyxDQUFqQztBQVdQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNNkMsS0FBSyxHQUFHLENBQUNhLENBQUQsRUFBSVgsQ0FBSixFQUFPckQsQ0FBUCxLQUFhOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM5QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUl0QyxLQUFWO0FBQ0FzQyxRQUFNLElBQUl0QyxLQUFWO0FBQ0FzQyxRQUFBLElBQWtCNUIsS0FBbEI7O0FBRUEsUUFBTWtELEVBQUUsR0FBRzVDLENBQUMsSUFBSUEsQ0FBQyxJQUFJaUYsQ0FBTCxJQUFVakYsQ0FBQyxJQUFJc0UsQ0FBL0I7O0FBQ0EsUUFBTSxDQUFDK0wsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUNINFAsSUFERyxHQUVIcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDN0wsS0FBVixDQUFnQmEsQ0FBaEIsRUFBbUJYLENBQW5CLENBQUosQ0FBYixDQUZiO0FBR0QsQ0FadUMsQ0FBakM7QUFjUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU02SixHQUFHLEdBQUdsTixDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3BDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU07QUFBRStDLFNBQUY7QUFBUytEO0FBQVQsTUFBa0JwRixHQUF4Qjs7QUFDQSxNQUFJcUIsS0FBSyxJQUFJK0QsSUFBSSxDQUFDQyxVQUFsQixFQUE4QjtBQUM1QixXQUFPeEUsNkRBQVMsQ0FBQ2IsR0FBRCxFQUFNbUIsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWdQLHlEQUFTLENBQUM5QixHQUFkLENBQVosQ0FBaEI7QUFDRDs7QUFFRCxRQUFNO0FBQUVnQyxTQUFGO0FBQVNyTDtBQUFULE1BQWtCc0wsNERBQVEsQ0FBQzNOLEtBQUQsRUFBUStELElBQVIsQ0FBaEM7QUFDQSxTQUFPcEUsMkRBQU8sQ0FBQ2hCLEdBQUQsRUFBTTBELElBQU4sRUFBWXJDLEtBQUssR0FBRzBOLEtBQXBCLENBQWQ7QUFDRCxDQVo2QixDQUF2QjtBQWNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNMUIsR0FBRyxHQUFHeE4sQ0FBQyxJQUFJOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNwQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNO0FBQUUrQyxTQUFGO0FBQVMrRDtBQUFULE1BQWtCcEYsR0FBeEI7QUFDQSxTQUFPcUIsS0FBSyxJQUFJK0QsSUFBSSxDQUFDQyxVQUFkLEdBQ0hyRSwyREFBTyxDQUFDaEIsR0FBRCxFQUFNLElBQU4sQ0FESixHQUVIYSw2REFBUyxDQUFDYixHQUFELEVBQU1tQiwwREFBTSxDQUFDdEIsQ0FBRCxFQUFJZ1AseURBQVMsQ0FBQ3hCLEdBQWQsQ0FBWixDQUZiO0FBR0QsQ0FUNkIsQ0FBdkI7QUFXUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1VLEtBQUssR0FBRyxDQUFDd0IsRUFBRCxFQUFLMVAsQ0FBTCxLQUFXOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUM1QyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFNLElBQUl4QixLQUFWO0FBQ0F3QixRQUFBLElBQWtCNUIsS0FBbEI7QUFFQSxRQUFNO0FBQUUrQyxTQUFGO0FBQVMrRDtBQUFULE1BQWtCcEYsR0FBeEI7QUFDQSxRQUFNO0FBQUUrTyxTQUFGO0FBQVNyTDtBQUFULE1BQWtCc0wsNERBQVEsQ0FBQzNOLEtBQUQsRUFBUStELElBQVIsQ0FBaEM7QUFDQSxRQUFNb0ssR0FBRyxHQUFHLENBQUMsR0FBR0QsRUFBSixDQUFaO0FBRUEsU0FBT0MsR0FBRyxDQUFDQyxRQUFKLENBQWEvTCxJQUFiLElBQ0gxQywyREFBTyxDQUFDaEIsR0FBRCxFQUFNMEQsSUFBTixFQUFZckMsS0FBSyxHQUFHME4sS0FBcEIsQ0FESixHQUVIbE8sNkRBQVMsQ0FBQ2IsR0FBRCxFQUFNbUIsMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWdQLHlEQUFTLENBQUNkLEtBQVYsQ0FBZ0J5QixHQUFoQixDQUFKLENBQVosQ0FGYjtBQUdELENBYnFDLENBQS9CO0FBZVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNNUIsTUFBTSxHQUFHLENBQUMyQixFQUFELEVBQUsxUCxDQUFMLEtBQVc5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzdDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQU0sSUFBSXhCLEtBQVY7QUFDQXdCLFFBQUEsSUFBa0I1QixLQUFsQjtBQUVBLFFBQU07QUFBRStDLFNBQUY7QUFBUytEO0FBQVQsTUFBa0JwRixHQUF4QjtBQUNBLFFBQU07QUFBRStPLFNBQUY7QUFBU3JMO0FBQVQsTUFBa0JzTCw0REFBUSxDQUFDM04sS0FBRCxFQUFRK0QsSUFBUixDQUFoQztBQUNBLFFBQU1vSyxHQUFHLEdBQUcsQ0FBQyxHQUFHRCxFQUFKLENBQVo7QUFFQSxTQUFPQyxHQUFHLENBQUNDLFFBQUosQ0FBYS9MLElBQWIsSUFDSDdDLDZEQUFTLENBQUNiLEdBQUQsRUFBTW1CLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDakIsTUFBVixDQUFpQjRCLEdBQWpCLENBQUosQ0FBWixDQUROLEdBRUh4TywyREFBTyxDQUFDaEIsR0FBRCxFQUFNMEQsSUFBTixFQUFZckMsS0FBSyxHQUFHME4sS0FBcEIsQ0FGWDtBQUdELENBYnNDLENBQWhDO0FBZVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0zQixLQUFLLEdBQUd2TixDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3RDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQUEsSUFBa0I1QixLQUFsQjs7QUFFQSxRQUFNa0QsRUFBRSxHQUFHNUMsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDcVEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUFxQjRQLElBQXJCLEdBQTRCcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDekIsS0FBZCxDQUFiLENBQTVDO0FBQ0QsQ0FSK0IsQ0FBekI7QUFVUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUUsR0FBRyxHQUFHek4sQ0FBQyxJQUFJOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNwQyxRQUFNQyxJQUFJLEdBQUdKLENBQUMsSUFBSSxJQUFsQjtBQUVBSyxRQUFBLElBQWtCNUIsS0FBbEI7O0FBRUEsUUFBTWtELEVBQUUsR0FBRzVDLENBQUMsSUFBSUEsQ0FBQyxJQUFJLEdBQUwsSUFBWUEsQ0FBQyxJQUFJLEdBQWpCLElBQ1hBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUROLElBRVhBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUZ0Qjs7QUFHQSxRQUFNLENBQUNxUSxJQUFELEVBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQVAsSUFBdUIxTyx1REFBRyxDQUFDcU8sVUFBVSxDQUFDdE4sRUFBRCxDQUFWLENBQWV4QixHQUFmLENBQUQsQ0FBaEM7QUFDQSxTQUFPbVAsSUFBSSxDQUFDek8sTUFBTCxLQUFnQnJCLEVBQWhCLEdBQXFCNFAsSUFBckIsR0FBNEJwTyw2REFBUyxDQUFDcU8sSUFBRCxFQUFPL04sMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWdQLHlEQUFTLENBQUN2QixHQUFkLENBQWIsQ0FBNUM7QUFDRCxDQVY2QixDQUF2QjtBQVlQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUSxLQUFLLEdBQUdqTyxDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3RDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQUEsSUFBa0I1QixLQUFsQjs7QUFFQSxRQUFNa0QsRUFBRSxHQUFHNUMsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDcVEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUFxQjRQLElBQXJCLEdBQTRCcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDZixLQUFkLENBQWIsQ0FBNUM7QUFDRCxDQVIrQixDQUF6QjtBQVVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUCxNQUFNLEdBQUcxTixDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3ZDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQUEsSUFBa0I1QixLQUFsQjs7QUFFQSxRQUFNa0QsRUFBRSxHQUFHNUMsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakIsSUFBd0JBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUF6RDs7QUFDQSxRQUFNLENBQUNxUSxJQUFELEVBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQVAsSUFBdUIxTyx1REFBRyxDQUFDcU8sVUFBVSxDQUFDdE4sRUFBRCxDQUFWLENBQWV4QixHQUFmLENBQUQsQ0FBaEM7QUFDQSxTQUFPbVAsSUFBSSxDQUFDek8sTUFBTCxLQUFnQnJCLEVBQWhCLEdBQ0g0UCxJQURHLEdBRUhwTyw2REFBUyxDQUFDcU8sSUFBRCxFQUFPL04sMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWdQLHlEQUFTLENBQUN0QixNQUFkLENBQWIsQ0FGYjtBQUdELENBVmdDLENBQTFCO0FBWVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1WLEtBQUssR0FBR2hOLENBQUMsSUFBSTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDdEMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBQSxJQUFrQjVCLEtBQWxCOztBQUVBLFFBQU1rRCxFQUFFLEdBQUc1QyxDQUFDLElBQUlBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQixJQUNYQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FETixJQUVYQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FGdEI7O0FBR0EsUUFBTSxDQUFDcVEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUFxQjRQLElBQXJCLEdBQTRCcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDaEMsS0FBZCxDQUFiLENBQTVDO0FBQ0QsQ0FWK0IsQ0FBekI7QUFZUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTThCLEtBQUssR0FBRzlPLENBQUMsSUFBSTlCLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDdEMsUUFBTUMsSUFBSSxHQUFHSixDQUFDLElBQUksSUFBbEI7QUFFQUssUUFBQSxJQUFrQjVCLEtBQWxCOztBQUVBLFFBQU1rRCxFQUFFLEdBQUc1QyxDQUFDLElBQUlBLENBQUMsSUFBSSxHQUFMLElBQVlBLENBQUMsSUFBSSxHQUFqQzs7QUFDQSxRQUFNLENBQUNxUSxJQUFELEVBQU8sQ0FBQ0MsSUFBRCxFQUFPQyxJQUFQLENBQVAsSUFBdUIxTyx1REFBRyxDQUFDcU8sVUFBVSxDQUFDdE4sRUFBRCxDQUFWLENBQWV4QixHQUFmLENBQUQsQ0FBaEM7QUFDQSxTQUFPbVAsSUFBSSxDQUFDek8sTUFBTCxLQUFnQnJCLEVBQWhCLEdBQXFCNFAsSUFBckIsR0FBNEJwTyw2REFBUyxDQUFDcU8sSUFBRCxFQUFPL04sMERBQU0sQ0FBQ3RCLENBQUQsRUFBSWdQLHlEQUFTLENBQUNGLEtBQWQsQ0FBYixDQUE1QztBQUNELENBUitCLENBQXpCO0FBVVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1sQixLQUFLLEdBQUc1TixDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3RDLFFBQU1DLElBQUksR0FBR0osQ0FBQyxJQUFJLElBQWxCO0FBRUFLLFFBQUEsSUFBa0I1QixLQUFsQjs7QUFFQSxRQUFNa0QsRUFBRSxHQUFHNUMsQ0FBQyxJQUFJQSxDQUFDLElBQUksR0FBTCxJQUFZQSxDQUFDLElBQUksR0FBakM7O0FBQ0EsUUFBTSxDQUFDcVEsSUFBRCxFQUFPLENBQUNDLElBQUQsRUFBT0MsSUFBUCxDQUFQLElBQXVCMU8sdURBQUcsQ0FBQ3FPLFVBQVUsQ0FBQ3ROLEVBQUQsQ0FBVixDQUFleEIsR0FBZixDQUFELENBQWhDO0FBQ0EsU0FBT21QLElBQUksQ0FBQ3pPLE1BQUwsS0FBZ0JyQixFQUFoQixHQUFxQjRQLElBQXJCLEdBQTRCcE8sNkRBQVMsQ0FBQ3FPLElBQUQsRUFBTy9OLDBEQUFNLENBQUN0QixDQUFELEVBQUlnUCx5REFBUyxDQUFDcEIsS0FBZCxDQUFiLENBQTVDO0FBQ0QsQ0FSK0IsQ0FBekIsQzs7Ozs7Ozs7Ozs7O0FDdFlQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1pQyxJQUFJLEdBQUc3UCxDQUFDLElBQUk5QiwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3JDRSxRQUFNLElBQUk1QixLQUFWO0FBQ0EsU0FBT3VDLDZEQUFTLENBQUNiLEdBQUQsRUFBTTJJLDREQUFPLENBQUM5SSxDQUFELENBQWIsQ0FBaEI7QUFDRCxDQUg4QixDQUF4QjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNOFAsS0FBSyxHQUFHOVAsQ0FBQyxJQUFJOUIsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUN0Q0UsUUFBTSxJQUFJNUIsS0FBVjtBQUNBLFNBQU9zQyw4REFBVSxDQUFDWixHQUFELEVBQU0ySSw0REFBTyxDQUFDOUksQ0FBRCxDQUFiLENBQWpCO0FBQ0QsQ0FIK0IsQ0FBekI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNK1AsTUFBTSxHQUFHMU8sQ0FBQyxJQUFJbkQsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSWdCLDJEQUFPLENBQUNoQixHQUFELEVBQU1rQixDQUFOLENBQWYsQ0FBMUIsQzs7Ozs7Ozs7Ozs7O0FDbkRQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUU3QjtBQUFGLElBQVNHLGtEQUFmO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBQ0EsTUFBTXFRLFFBQVEsR0FBRyxrQkFBakI7QUFDQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcsNEJBQWhCO0FBQ0E7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHLDRCQUFoQjtBQUNBOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxpQkFBaEI7QUFDQTs7QUFDQSxNQUFNQyxPQUFPLEdBQUcscUJBQWhCO0FBQ0E7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLDRCQUFqQjtBQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxhQUFqQjtBQUNBOztBQUNBLE1BQU1DLFNBQVMsR0FBRyxvQkFBbEI7QUFDQTs7QUFDQSxNQUFNQyxTQUFTLEdBQUcsYUFBbEI7QUFDQTs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsb0JBQW5CO0FBQ0E7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHLGlCQUFsQjtBQUNBOztBQUNBLE1BQU1DLFVBQVUsR0FBRyxxQ0FBbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUMsV0FBVyxHQUFHeEMsRUFBRSxJQUFJbFEsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUN0QyxRQUFNO0FBQUVxQixTQUFGO0FBQVMrRDtBQUFULE1BQWtCcEYsR0FBeEI7QUFDQSxRQUFNMFEsSUFBSSxHQUFHNUUsZ0VBQVksQ0FBQ3pLLEtBQUQsRUFBUStELElBQUksQ0FBQ0MsVUFBTCxHQUFrQmhFLEtBQTFCLEVBQWlDK0QsSUFBakMsQ0FBekI7QUFFQSxRQUFNd0YsS0FBSyxHQUFHOEYsSUFBSSxDQUFDOUYsS0FBTCxDQUFXcUQsRUFBWCxDQUFkO0FBQ0EsU0FBT3JELEtBQUssR0FDUjVKLDJEQUFPLENBQUNoQixHQUFELEVBQU00SyxLQUFLLENBQUMsQ0FBRCxDQUFYLEVBQWdCdkosS0FBSyxHQUFHaUcsZ0VBQVksQ0FBQ3NELEtBQUssQ0FBQyxDQUFELENBQU4sQ0FBWixDQUF1QnZGLFVBQS9DLENBREMsR0FFUnhFLDZEQUFTLENBQUNiLEdBQUQsQ0FGYjtBQUdELENBUitCLENBQWhDO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxNQUFNZ08sS0FBSyxHQUFHQyxFQUFFLElBQUlsUSwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3ZDRSxRQUFNLElBQUlyQixLQUFWLENBRHVDLENBR3ZDOztBQUNBLE1BQUltUCxLQUFLLEdBQUcsT0FBT0MsRUFBUCxLQUFjLFFBQWQsR0FBeUIsSUFBSTBDLE1BQUosQ0FBVzFDLEVBQVgsQ0FBekIsR0FBMENBLEVBQXRELENBSnVDLENBTXZDOztBQUNBLFFBQU07QUFBRTJDLFVBQUY7QUFBVUM7QUFBVixNQUFvQjdDLEtBQTFCO0FBQ0EsUUFBTThDLFFBQVEsR0FBR0YsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLEdBQS9COztBQUNBLE1BQUlFLFFBQUosRUFBYztBQUNaLFVBQU1DLFNBQVMsR0FBRyxNQUFNSCxNQUF4QjtBQUNBNUMsU0FBSyxHQUFHLElBQUkyQyxNQUFKLENBQVdJLFNBQVgsRUFBc0JGLEtBQXRCLENBQVI7QUFDRDs7QUFFRCxRQUFNLENBQUNHLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQnpRLHVEQUFHLENBQUNnUSxXQUFXLENBQUN6QyxLQUFELENBQVgsQ0FBbUJoTyxHQUFuQixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUNiLEtBQVYsQ0FBZ0JBLEtBQWhCLENBQVIsQ0FBOUM7QUFDRCxDQWhCZ0MsQ0FBMUI7QUFrQlA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTVIsT0FBTyxHQUFHelAsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNuQyxRQUFNLENBQUNnUixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJ6USx1REFBRyxDQUFDZ1EsV0FBVyxDQUFDWixRQUFELENBQVgsQ0FBc0I3UCxHQUF0QixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUNyQixPQUFsQixDQUE5QztBQUNELENBSDRCLENBQXRCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTVYsTUFBTSxHQUFHL08sMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNnUixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJ6USx1REFBRyxDQUFDZ1EsV0FBVyxDQUFDWCxPQUFELENBQVgsQ0FBcUI5UCxHQUFyQixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUMvQixNQUFsQixDQUE5QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNOEIsTUFBTSxHQUFHN1EsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNnUixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJ6USx1REFBRyxDQUFDZ1EsV0FBVyxDQUFDVixPQUFELENBQVgsQ0FBcUIvUCxHQUFyQixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUNELE1BQWxCLENBQTlDO0FBQ0QsQ0FIMkIsQ0FBckI7QUFLUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNbEIsTUFBTSxHQUFHM1AsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNsQyxRQUFNLENBQUNnUixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJ6USx1REFBRyxDQUFDZ1EsV0FBVyxDQUFDVCxPQUFELENBQVgsQ0FBcUJoUSxHQUFyQixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUNuQixNQUFsQixDQUE5QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNUSxLQUFLLEdBQUduUSwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ2pDLFFBQU0sQ0FBQ2dSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQnpRLHVEQUFHLENBQUNnUSxXQUFXLENBQUNSLE9BQUQsQ0FBWCxDQUFxQmpRLEdBQXJCLENBQUQsQ0FBbkM7QUFDQSxTQUFPa1IsS0FBSyxDQUFDeFEsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCMlIsS0FBdEIsR0FBOEJuUSw2REFBUyxDQUFDb1EsS0FBRCxFQUFRcEMseURBQVMsQ0FBQ1gsS0FBbEIsQ0FBOUM7QUFDRCxDQUgwQixDQUFwQjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1LLE1BQU0sR0FBR3hRLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbEMsUUFBTSxDQUFDZ1IsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCelEsdURBQUcsQ0FBQ2dRLFdBQVcsQ0FBQ1AsUUFBRCxDQUFYLENBQXNCbFEsR0FBdEIsQ0FBRCxDQUFuQztBQUNBLFNBQU9rUixLQUFLLENBQUN4USxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0IyUixLQUF0QixHQUE4Qm5RLDZEQUFTLENBQUNvUSxLQUFELEVBQVFwQyx5REFBUyxDQUFDTixNQUFsQixDQUE5QztBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1KLE1BQU0sR0FBR3BRLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbEMsUUFBTSxDQUFDaVIsS0FBRCxFQUFRbE8sQ0FBUixJQUFhME4sV0FBVyxDQUFDTixRQUFELENBQVgsQ0FBc0JuUSxHQUF0QixDQUFuQjtBQUNBLFNBQU9nQiwyREFBTyxDQUFDaVEsS0FBRCxFQUFRLElBQVIsQ0FBZDtBQUNELENBSDJCLENBQXJCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU01QyxPQUFPLEdBQUd0USwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ25DLFFBQU0sQ0FBQ2lSLEtBQUQsRUFBUWxPLENBQVIsSUFBYTBOLFdBQVcsQ0FBQ0wsU0FBRCxDQUFYLENBQXVCcFEsR0FBdkIsQ0FBbkI7QUFDQSxTQUFPZ0IsMkRBQU8sQ0FBQ2lRLEtBQUQsRUFBUSxJQUFSLENBQWQ7QUFDRCxDQUg0QixDQUF0QjtBQUtQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTdDLE9BQU8sR0FBR3JRLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDbkMsUUFBTSxDQUFDaVIsS0FBRCxFQUFRQyxLQUFSLElBQWlCVCxXQUFXLENBQUNKLFNBQUQsQ0FBWCxDQUF1QnJRLEdBQXZCLENBQXZCO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUNIMkIsMkRBQU8sQ0FBQ2lRLEtBQUQsRUFBUSxJQUFSLENBREosR0FFSHBRLDZEQUFTLENBQUNvUSxLQUFELEVBQVFwQyx5REFBUyxDQUFDVCxPQUFsQixDQUZiO0FBR0QsQ0FMNEIsQ0FBdEI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU1FLFFBQVEsR0FBR3ZRLDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDcEMsUUFBTSxDQUFDaVIsS0FBRCxFQUFRQyxLQUFSLElBQWlCVCxXQUFXLENBQUNILFVBQUQsQ0FBWCxDQUF3QnRRLEdBQXhCLENBQXZCO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUNIMkIsMkRBQU8sQ0FBQ2lRLEtBQUQsRUFBUSxJQUFSLENBREosR0FFSHBRLDZEQUFTLENBQUNvUSxLQUFELEVBQVFwQyx5REFBUyxDQUFDUCxRQUFsQixDQUZiO0FBR0QsQ0FMNkIsQ0FBdkI7QUFPUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxNQUFNbkYsT0FBTyxHQUFHcEwsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNuQyxRQUFNLENBQUNnUixLQUFELEVBQVEsQ0FBQ0MsS0FBRCxFQUFRQyxLQUFSLENBQVIsSUFBMEJ6USx1REFBRyxDQUFDZ1EsV0FBVyxDQUFDRixTQUFELENBQVgsQ0FBdUJ2USxHQUF2QixDQUFELENBQW5DO0FBQ0EsU0FBT2tSLEtBQUssQ0FBQ3hRLE1BQU4sS0FBaUJyQixFQUFqQixHQUFzQjJSLEtBQXRCLEdBQThCblEsNkRBQVMsQ0FBQ29RLEtBQUQsRUFBUXBDLHlEQUFTLENBQUMxRixPQUFsQixDQUE5QztBQUNELENBSDRCLENBQXRCO0FBS1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU13RSxRQUFRLEdBQUc1UCwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3BDLFFBQU0sQ0FBQ2dSLEtBQUQsRUFBUSxDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBUixJQUEwQnpRLHVEQUFHLENBQUNnUSxXQUFXLENBQUNELFVBQUQsQ0FBWCxDQUF3QnhRLEdBQXhCLENBQUQsQ0FBbkM7QUFDQSxTQUFPa1IsS0FBSyxDQUFDeFEsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCMlIsS0FBdEIsR0FBOEJuUSw2REFBUyxDQUFDb1EsS0FBRCxFQUFRcEMseURBQVMsQ0FBQ2xCLFFBQWxCLENBQTlDO0FBQ0QsQ0FINkIsQ0FBdkIsQzs7Ozs7Ozs7Ozs7O0FDNVJQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNO0FBQUV0TztBQUFGLElBQVNHLGtEQUFmO0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNMlIsWUFBWSxHQUFHLENBQUNyUixNQUFELEVBQVMwQixFQUFULEtBQWdCekQsMERBQU0sQ0FBQ2lDLEdBQUcsSUFBSTtBQUNqRCxNQUFJRixNQUFNLEdBQUcsQ0FBYixFQUFnQixPQUFPa0IsMkRBQU8sQ0FBQ2hCLEdBQUQsRUFBTSxFQUFOLENBQWQ7QUFFaEIsUUFBTTtBQUFFcUIsU0FBRjtBQUFTK0Q7QUFBVCxNQUFrQnBGLEdBQXhCO0FBQ0EsTUFBSXFCLEtBQUssSUFBSStELElBQUksQ0FBQ0MsVUFBbEIsRUFBOEIsT0FBT3hFLDZEQUFTLENBQUNiLEdBQUQsQ0FBaEI7QUFFOUIsUUFBTTtBQUFFK08sU0FBRjtBQUFTckw7QUFBVCxNQUFrQjBOLDZEQUFTLENBQUMvUCxLQUFELEVBQVErRCxJQUFSLEVBQWN0RixNQUFkLENBQWpDO0FBQ0EsU0FBT2pDLDhEQUFVLENBQUM2RixJQUFELENBQVYsS0FBcUI1RCxNQUFyQixJQUErQixDQUFDMEIsRUFBRSxDQUFDa0MsSUFBRCxDQUFsQyxHQUNIN0MsNkRBQVMsQ0FBQ2IsR0FBRCxDQUROLEdBRUhnQiwyREFBTyxDQUFDaEIsR0FBRCxFQUFNMEQsSUFBTixFQUFZckMsS0FBSyxHQUFHME4sS0FBcEIsQ0FGWDtBQUdELENBVjBDLENBQTNDO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ08sTUFBTVAsTUFBTSxHQUFHQyxHQUFHLElBQUkxUSwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQ3pDRSxRQUFNLElBQUk1QixLQUFWO0FBRUEsUUFBTSxDQUFDK1MsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCOVEsdURBQUcsQ0FBQzBRLFlBQVksQ0FDOUN0VCw4REFBVSxDQUFDNFEsR0FBRCxDQURvQyxFQUM3QitDLEtBQUssSUFBSS9DLEdBQUcsS0FBSytDLEtBRFksQ0FBWixDQUVsQ3hSLEdBRmtDLENBQUQsQ0FBbkM7QUFHQSxTQUFPdVIsS0FBSyxDQUFDN1EsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCZ1MsS0FBdEIsR0FBOEJ4USw2REFBUyxDQUFDeVEsS0FBRCxFQUFRekMseURBQVMsQ0FBQ0wsTUFBVixDQUFpQkMsR0FBakIsQ0FBUixDQUE5QztBQUNELENBUGtDLENBQTVCO0FBU1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUMsT0FBTyxHQUFHRCxHQUFHLElBQUkxUSwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzFDRSxRQUFNLElBQUk1QixLQUFWO0FBRUEsUUFBTSxDQUFDK1MsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCOVEsdURBQUcsQ0FBQzBRLFlBQVksQ0FDOUN0VCw4REFBVSxDQUFDNFEsR0FBRCxDQURvQyxFQUM3QitDLEtBQUssSUFBSS9DLEdBQUcsQ0FBQ1ksV0FBSixPQUFzQm1DLEtBQUssQ0FBQ25DLFdBQU4sRUFERixDQUFaLENBRWxDclAsR0FGa0MsQ0FBRCxDQUFuQztBQUdBLFNBQU91UixLQUFLLENBQUM3USxNQUFOLEtBQWlCckIsRUFBakIsR0FBc0JnUyxLQUF0QixHQUE4QnhRLDZEQUFTLENBQUN5USxLQUFELEVBQVF6Qyx5REFBUyxDQUFDSCxPQUFWLENBQWtCRCxHQUFsQixDQUFSLENBQTlDO0FBQ0QsQ0FQbUMsQ0FBN0I7QUFTUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTWdELEdBQUcsR0FBRzFULDBEQUFNLENBQUNpQyxHQUFHLElBQUk7QUFDL0IsUUFBTTtBQUFFcUIsU0FBRjtBQUFTK0Q7QUFBVCxNQUFrQnBGLEdBQXhCO0FBQ0EsUUFBTStPLEtBQUssR0FBRzNKLElBQUksQ0FBQ0MsVUFBTCxHQUFrQmhFLEtBQWhDO0FBQ0EsU0FBT0wsMkRBQU8sQ0FBQ2hCLEdBQUQsRUFBTThMLGdFQUFZLENBQUN6SyxLQUFELEVBQVEwTixLQUFSLEVBQWUzSixJQUFmLENBQWxCLEVBQXdDL0QsS0FBSyxHQUFHME4sS0FBaEQsQ0FBZDtBQUNELENBSndCLENBQWxCO0FBTVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLE1BQU0vQixTQUFTLEdBQUdsSyxDQUFDLElBQUkvRSwwREFBTSxDQUFDaUMsR0FBRyxJQUFJO0FBQzFDRSxRQUFNLElBQUlwQixLQUFWO0FBRUEsUUFBTSxDQUFDdVMsS0FBRCxFQUFRLENBQUNDLEtBQUQsRUFBUUMsS0FBUixDQUFSLElBQTBCOVEsdURBQUcsQ0FBQzBRLFlBQVksQ0FBQ3JPLENBQUQsRUFBSSxNQUFNLElBQVYsQ0FBWixDQUE0QjlDLEdBQTVCLENBQUQsQ0FBbkM7QUFDQSxTQUFPdVIsS0FBSyxDQUFDN1EsTUFBTixLQUFpQnJCLEVBQWpCLEdBQXNCZ1MsS0FBdEIsR0FBOEJ4USw2REFBUyxDQUFDeVEsS0FBRCxFQUFRekMseURBQVMsQ0FBQzdCLFNBQVYsQ0FBb0JsSyxDQUFwQixDQUFSLENBQTlDO0FBQ0QsQ0FMbUMsQ0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDN0dQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTTRPLE9BQU8sR0FBRyxJQUFJQyxXQUFKLEVBQWhCO0FBRVA7QUFDQTtBQUNBOztBQUNPLE1BQU1DLE9BQU8sR0FBRyxJQUFJQyxXQUFKLEVBQWhCO0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxVQUFVN08sS0FBVixDQUFnQndHLEtBQWhCLEVBQXVCN0QsR0FBdkIsRUFBNEJtTSxJQUE1QixFQUFrQ0MsU0FBbEMsRUFBNkM7QUFDbEQsUUFBTWxPLENBQUMsR0FBRyxPQUFPOEIsR0FBUCxLQUFlLFFBQWYsR0FBMEI2RCxLQUExQixHQUFrQyxDQUE1QztBQUNBLFFBQU10RyxDQUFDLEdBQUcsT0FBT3lDLEdBQVAsS0FBZSxRQUFmLEdBQTBCQSxHQUExQixHQUFnQzZELEtBQTFDO0FBQ0EsUUFBTW5KLENBQUMsR0FBRyxPQUFPeVIsSUFBUCxLQUFnQixRQUFoQixHQUEyQkEsSUFBSSxLQUFLLENBQVQsR0FBYSxDQUFiLEdBQWlCM0csSUFBSSxDQUFDNkcsR0FBTCxDQUFTRixJQUFULENBQTVDLEdBQTZELENBQXZFO0FBQ0EsUUFBTTVTLENBQUMsR0FBRyxPQUFPNFMsSUFBUCxLQUFnQixRQUFoQixHQUNOLENBQUMsQ0FBQ0MsU0FESSxHQUNRLE9BQU9wTSxHQUFQLEtBQWUsUUFBZixHQUNaLENBQUMsQ0FBQ21NLElBRFUsR0FDSCxDQUFDLENBQUNuTSxHQUZqQjtBQUlBLFFBQU1zTSxPQUFPLEdBQUdwTyxDQUFDLEdBQUdYLENBQXBCO0FBQ0EsTUFBSWdQLE9BQU8sR0FBR3JPLENBQWQ7O0FBRUEsUUFBTXNPLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQUlGLE9BQUosRUFBYTtBQUNYLGFBQU8vUyxDQUFDLEdBQUdnVCxPQUFPLEdBQUdoUCxDQUFiLEdBQWlCZ1AsT0FBTyxJQUFJaFAsQ0FBcEM7QUFDRDs7QUFDRCxXQUFPaEUsQ0FBQyxHQUFHZ1QsT0FBTyxHQUFHaFAsQ0FBYixHQUFpQmdQLE9BQU8sSUFBSWhQLENBQXBDO0FBQ0QsR0FMRDtBQU9BOzs7QUFDQSxTQUFPLENBQUNpUCxRQUFRLEVBQWhCLEVBQW9CO0FBQ2xCLFVBQU1ELE9BQU47QUFDQUEsV0FBTyxHQUFHRCxPQUFPLEdBQUdDLE9BQU8sR0FBRzdSLENBQWIsR0FBaUI2UixPQUFPLEdBQUc3UixDQUE1QztBQUNEO0FBQ0Q7O0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sVUFBVWxCLFNBQVYsQ0FBb0JpVCxRQUFwQixFQUE4QjtBQUNuQyxRQUFNQyxRQUFRLEdBQUdELFFBQVEsQ0FBQ0UsTUFBTSxDQUFDRCxRQUFSLENBQVIsRUFBakI7QUFDQSxNQUFJcEssTUFBTSxHQUFHb0ssUUFBUSxDQUFDM08sSUFBVCxFQUFiO0FBQ0EsTUFBSXJDLEtBQUssR0FBRyxDQUFaOztBQUVBLFNBQU8sQ0FBQzRHLE1BQU0sQ0FBQ3hFLElBQWYsRUFBcUI7QUFDbkIsVUFBTSxDQUFDcEMsS0FBSyxFQUFOLEVBQVU0RyxNQUFNLENBQUNyTSxLQUFqQixDQUFOO0FBQ0FxTSxVQUFNLEdBQUdvSyxRQUFRLENBQUMzTyxJQUFULEVBQVQ7QUFDRDtBQUNGO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNvSSxZQUFULENBQXNCekssS0FBdEIsRUFBNkJ2QixNQUE3QixFQUFxQ3NGLElBQXJDLEVBQTJDO0FBQ2hELFFBQU1tTixLQUFLLEdBQUc1TCxVQUFVLENBQUM2TCxJQUFYLENBQ1o7QUFBRTFTO0FBQUYsR0FEWSxFQUVaLENBQUNpRCxDQUFELEVBQUk3RCxDQUFKLEtBQVVrRyxJQUFJLENBQUM4RCxRQUFMLENBQWM3SCxLQUFLLEdBQUduQyxDQUF0QixDQUZFLENBQWQ7QUFJQSxTQUFPMFMsT0FBTyxDQUFDYSxNQUFSLENBQWVGLEtBQWYsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2pMLFlBQVQsQ0FBc0JtSCxHQUF0QixFQUEyQjtBQUNoQyxTQUFPLElBQUlsSCxRQUFKLENBQWFtSyxPQUFPLENBQUNnQixNQUFSLENBQWVqRSxHQUFmLEVBQW9CakgsTUFBakMsQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTM0osVUFBVCxDQUFvQjRRLEdBQXBCLEVBQXlCO0FBQzlCLFNBQU8sQ0FBQyxHQUFHQSxHQUFKLEVBQVMzTyxNQUFoQjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU3dKLGFBQVQsQ0FBdUJqSSxLQUF2QixFQUE4QitELElBQTlCLEVBQW9DO0FBQ3pDLFFBQU02RCxJQUFJLEdBQUc3RCxJQUFJLENBQUM4RCxRQUFMLENBQWM3SCxLQUFkLENBQWI7QUFDQSxNQUFJLENBQUM0SCxJQUFJLEdBQUcsSUFBUixLQUFpQixDQUFqQixLQUF1QixDQUEzQixFQUE4QixPQUFPLENBQVA7QUFDOUIsTUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBUixLQUFpQixDQUFqQixLQUF1QixLQUEzQixFQUFrQyxPQUFPLENBQVA7QUFDbEMsTUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBUixLQUFpQixDQUFqQixLQUF1QixNQUEzQixFQUFtQyxPQUFPLENBQVA7QUFDbkMsTUFBSSxDQUFDQSxJQUFJLEdBQUcsSUFBUixLQUFpQixDQUFqQixLQUF1QixNQUEzQixFQUFtQyxPQUFPLENBQVAsQ0FMTSxDQU16QztBQUNBOztBQUNBLFNBQU8sQ0FBUDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTK0YsUUFBVCxDQUFrQjNOLEtBQWxCLEVBQXlCK0QsSUFBekIsRUFBK0I7QUFDcEMsUUFBTTJKLEtBQUssR0FBR3pGLGFBQWEsQ0FBQ2pJLEtBQUQsRUFBUStELElBQVIsQ0FBM0I7QUFDQSxTQUFPO0FBQUUySixTQUFGO0FBQVNyTCxRQUFJLEVBQUVvSSxZQUFZLENBQUN6SyxLQUFELEVBQVEwTixLQUFSLEVBQWUzSixJQUFmO0FBQTNCLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dNLFNBQVQsQ0FBbUIvUCxLQUFuQixFQUEwQitELElBQTFCLEVBQWdDd0csS0FBaEMsRUFBdUM7QUFDNUMsUUFBTStHLFVBQVUsR0FBR3ZOLElBQUksQ0FBQ0MsVUFBeEI7QUFDQSxNQUFJMEosS0FBSyxHQUFHLENBQVo7O0FBRUEsT0FBSyxNQUFNaE0sQ0FBWCxJQUFnQkMsS0FBSyxDQUFDNEksS0FBRCxDQUFyQixFQUE4QjtBQUM1QixVQUFNMU0sQ0FBQyxHQUFHbUMsS0FBSyxHQUFHME4sS0FBbEI7QUFDQSxRQUFJN1AsQ0FBQyxJQUFJeVQsVUFBVCxFQUFxQjtBQUNyQjVELFNBQUssSUFBSXpGLGFBQWEsQ0FBQ3BLLENBQUQsRUFBSWtHLElBQUosQ0FBdEI7QUFDRDs7QUFDRCxNQUFJL0QsS0FBSyxHQUFHME4sS0FBUixJQUFpQjRELFVBQXJCLEVBQWlDO0FBQy9CNUQsU0FBSyxHQUFHNEQsVUFBVSxHQUFHdFIsS0FBckI7QUFDRDs7QUFDRCxTQUFPO0FBQUUwTixTQUFGO0FBQVNyTCxRQUFJLEVBQUVvSSxZQUFZLENBQUN6SyxLQUFELEVBQVEwTixLQUFSLEVBQWUzSixJQUFmO0FBQTNCLEdBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTOEgsS0FBVCxDQUFldUIsR0FBZixFQUFvQjtBQUN6QixTQUFRLElBQUdBLEdBQUksR0FBZjtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNoTyxHQUFULENBQWE3RSxLQUFiLEVBQW9CO0FBQ3pCLFNBQU8sQ0FBQ0EsS0FBRCxFQUFRQSxLQUFSLENBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNzUSxhQUFULENBQXVCMEcsUUFBdkIsRUFBaUM7QUFDdEMsVUFBUUEsUUFBUSxDQUFDOVMsTUFBakI7QUFDRSxTQUFLLENBQUw7QUFBUSxhQUFPLEVBQVA7O0FBQ1IsU0FBSyxDQUFMO0FBQVEsYUFBTzhTLFFBQVEsQ0FBQyxDQUFELENBQWY7O0FBQ1IsU0FBSyxDQUFMO0FBQVEsYUFBT0EsUUFBUSxDQUFDNU8sSUFBVCxDQUFjLE1BQWQsQ0FBUDs7QUFDUjtBQUFTO0FBQ1AsY0FBTTZPLElBQUksR0FBR0QsUUFBUSxDQUFDaFQsS0FBVCxFQUFiO0FBQ0EsY0FBTWtULElBQUksR0FBR0QsSUFBSSxDQUFDOVMsR0FBTCxFQUFiO0FBQ0EsZUFBUSxHQUFFOFMsSUFBSSxDQUFDN08sSUFBTCxDQUFVLElBQVYsQ0FBZ0IsUUFBTzhPLElBQUssRUFBdEM7QUFDRDtBQVJIO0FBVUQ7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNwTCxLQUFULENBQWVsRyxFQUFmLEVBQW1CdVIsSUFBSSxHQUFHLFNBQTFCLEVBQXFDO0FBQzFDLFFBQU1DLE9BQU8sR0FBRyxJQUFJQyxPQUFKLEVBQWhCO0FBRUEsU0FBTy9VLE1BQU0sQ0FBQ2dWLGNBQVAsQ0FDTCxDQUFDLEdBQUd4VCxJQUFKLEtBQWE7QUFDWCxVQUFNMUIsT0FBTyxHQUFHd0QsRUFBRSxDQUFDLEdBQUc5QixJQUFKLENBQWxCO0FBQ0FzVCxXQUFPLENBQUNHLEdBQVIsQ0FBWW5WLE9BQVo7QUFDQSxXQUFPQSxPQUFQO0FBQ0QsR0FMSSxFQU1MK1UsSUFOSyxFQU9MO0FBQUVuWCxTQUFLLEVBQUVvWCxPQUFPLENBQUNJLEdBQVIsQ0FBWUMsSUFBWixDQUFpQkwsT0FBakI7QUFBVCxHQVBLLENBQVA7QUFTRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVM1VCxPQUFULENBQWlCMEQsQ0FBakIsRUFBb0I7QUFBQTs7QUFDekIsUUFBTXdRLFFBQVEsR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQUFqQjtBQUNBLFFBQU1yUCxDQUFDLEdBQUduQixDQUFDLEdBQUcsR0FBZDtBQUNBLFNBQU9BLENBQUMseUJBQUl3USxRQUFRLENBQUMsQ0FBQ3JQLENBQUMsR0FBRyxFQUFMLElBQVcsRUFBWixDQUFaLGlEQUErQnFQLFFBQVEsQ0FBQ3JQLENBQUQsQ0FBdkMsdUNBQThDcVAsUUFBUSxDQUFDLENBQUQsQ0FBdEQsQ0FBUjtBQUNEO0FBRUQsTUFBTUMsSUFBSSxHQUFHLENBQ1gsTUFEVyxFQUNILEtBREcsRUFDSSxLQURKLEVBQ1csT0FEWCxFQUNvQixNQURwQixFQUM0QixNQUQ1QixFQUNvQyxLQURwQyxFQUMyQyxPQUQzQyxFQUNvRCxPQURwRCxFQUVYLE1BRlcsRUFFSCxLQUZHLEVBRUksUUFGSixFQUVjLFFBRmQsRUFFd0IsVUFGeEIsRUFFb0MsVUFGcEMsRUFFZ0QsU0FGaEQsRUFHWCxTQUhXLEVBR0EsV0FIQSxFQUdhLFVBSGIsRUFHeUIsVUFIekIsQ0FBYjtBQUtBLE1BQU1DLElBQUksR0FBRyxDQUNYLFFBRFcsRUFDRCxPQURDLEVBQ1EsUUFEUixFQUNrQixPQURsQixFQUMyQixRQUQzQixFQUNxQyxPQURyQyxFQUM4QyxPQUQ5QyxFQUN1RCxTQUR2RCxFQUVYLFFBRlcsRUFFRCxPQUZDLEVBRVEsT0FGUixFQUVpQixVQUZqQixFQUU2QixTQUY3QixFQUV3QyxZQUZ4QyxFQUdYLFlBSFcsRUFHRyxXQUhILEVBR2dCLFdBSGhCLEVBRzZCLGFBSDdCLEVBRzRDLFlBSDVDLEVBSVgsWUFKVyxDQUFiO0FBTUEsTUFBTUMsSUFBSSxHQUFHLENBQ1gsT0FEVyxFQUNGLE9BREUsRUFDTyxNQURQLEVBQ2UsTUFEZixFQUN1QixNQUR2QixFQUMrQixRQUQvQixFQUN5QyxPQUR6QyxFQUNrRCxPQURsRCxDQUFiO0FBR0EsTUFBTUMsTUFBTSxHQUFHLENBQ2IsU0FEYSxFQUNGLFVBREUsRUFDVSxTQURWLEVBQ3FCLFNBRHJCLEVBQ2dDLFVBRGhDLEVBQzRDLGFBRDVDLENBQWY7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNoWCxRQUFULENBQWtCb0csQ0FBbEIsRUFBcUI7QUFDMUIsTUFBSUEsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxHQUFHNlEsTUFBTSxDQUFDQyxnQkFBeEIsRUFBMEM7QUFDeEMsVUFBTSxJQUFJalcsS0FBSixDQUFXLGtDQUFpQ2dXLE1BQU0sQ0FBQ0MsZ0JBQWlCLEVBQXBFLENBQU47QUFDRDs7QUFDRCxRQUFNQyxHQUFHLEdBQUcxSSxJQUFJLENBQUNFLEtBQUwsQ0FBV0YsSUFBSSxDQUFDMkksS0FBTCxDQUFXaFIsQ0FBWCxDQUFYLENBQVo7QUFFQSxNQUFJQSxDQUFDLEdBQUcsRUFBUixFQUFZLE9BQU8wUSxJQUFJLENBQUMxUSxDQUFELENBQVg7O0FBQ1osTUFBSStRLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYixVQUFNM1UsQ0FBQyxHQUFHaU0sSUFBSSxDQUFDRSxLQUFMLENBQVd2SSxDQUFDLEdBQUcsRUFBZixJQUFxQixDQUEvQjtBQUNBLFdBQU9BLENBQUMsR0FBRyxFQUFKLEtBQVcsQ0FBWCxHQUFnQixHQUFFMlEsSUFBSSxDQUFDdlUsQ0FBRCxDQUFJLE1BQTFCLEdBQW1DLEdBQUV1VSxJQUFJLENBQUN2VSxDQUFELENBQUksS0FBSXNVLElBQUksQ0FBQzFRLENBQUMsR0FBRyxFQUFMLENBQVMsRUFBckU7QUFDRDs7QUFDRCxNQUFJK1EsR0FBRyxLQUFLLENBQVosRUFBZTtBQUNiLFVBQU1FLENBQUMsR0FBRzVJLElBQUksQ0FBQ0UsS0FBTCxDQUFXdkksQ0FBQyxHQUFHLE1BQU0rUSxHQUFyQixDQUFWO0FBQ0EsVUFBTTNTLENBQUMsR0FBRzRCLENBQUMsR0FBR2lSLENBQUMsR0FBRyxNQUFNRixHQUF4QjtBQUNBLFdBQVEsR0FBRU4sSUFBSSxDQUFDUSxDQUFELENBQUksSUFBR0wsTUFBTSxDQUFDLENBQUQsQ0FBSSxHQUFFeFMsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUd4RSxRQUFRLENBQUN3RSxDQUFELENBQUksRUFBRSxFQUFwRTtBQUNEOztBQUVELFFBQU1vQyxDQUFDLEdBQUd1USxHQUFHLEdBQUcsQ0FBTixHQUFVLENBQXBCO0FBQ0EsUUFBTTNVLENBQUMsR0FBR2lNLElBQUksQ0FBQ0UsS0FBTCxDQUFXd0ksR0FBRyxHQUFHLENBQWpCLENBQVY7QUFDQSxRQUFNRSxDQUFDLEdBQUc1SSxJQUFJLENBQUNFLEtBQUwsQ0FBV3ZJLENBQUMsR0FBRyxPQUFPK1EsR0FBRyxHQUFHdlEsQ0FBTixHQUFVLENBQWpCLENBQWYsQ0FBVjs7QUFDQSxRQUFNekQsQ0FBQyxHQUFJLFNBQVNtVSxJQUFULENBQWNDLEdBQWQsRUFBbUI7QUFDNUIsUUFBSUEsR0FBRyxHQUFHLEVBQVYsRUFBYyxPQUFPVixJQUFJLENBQUNVLEdBQUQsQ0FBWDtBQUVkLFVBQU1DLEdBQUcsR0FBR0QsR0FBRyxHQUFHLEVBQWxCOztBQUNBLFFBQUlBLEdBQUcsR0FBRyxHQUFWLEVBQWU7QUFDYixhQUFRLEdBQUVSLElBQUksQ0FBQ3RJLElBQUksQ0FBQ0UsS0FBTCxDQUFXNEksR0FBRyxHQUFHLEVBQWpCLElBQXVCLENBQXhCLENBQTJCLElBQ3ZDQyxHQUFHLEtBQUssQ0FBUixHQUFZLEVBQVosR0FBa0IsSUFBR1gsSUFBSSxDQUFDVyxHQUFELENBQU0sRUFDaEMsRUFGRDtBQUdEOztBQUVELFVBQU1oVCxDQUFDLEdBQUcrUyxHQUFHLEdBQUc5SSxJQUFJLENBQUNFLEtBQUwsQ0FBVzRJLEdBQUcsR0FBRyxHQUFqQixJQUF3QixHQUF4QztBQUNBLFdBQVEsR0FBRVYsSUFBSSxDQUFDcEksSUFBSSxDQUFDRSxLQUFMLENBQVc0SSxHQUFHLEdBQUcsR0FBakIsQ0FBRCxDQUF3QixJQUFHUCxNQUFNLENBQUMsQ0FBRCxDQUFJLEdBQ2pEeFMsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUc4UyxJQUFJLENBQUM5UyxDQUFELENBQUksRUFDOUIsRUFGRDtBQUdELEdBZFUsQ0FjVDZTLENBZFMsQ0FBWDs7QUFlQSxRQUFNN1MsQ0FBQyxHQUFHNEIsQ0FBQyxHQUFHaVIsQ0FBQyxHQUFHLE9BQU9GLEdBQUcsR0FBR3ZRLENBQU4sR0FBVSxDQUFqQixDQUFsQjtBQUNBLFNBQVEsR0FBRXpELENBQUUsSUFBRzZULE1BQU0sQ0FBQ3hVLENBQUQsQ0FBSSxHQUFFZ0MsQ0FBQyxLQUFLLENBQU4sR0FBVSxJQUFWLEdBQWtCLElBQUd4RSxRQUFRLENBQUN3RSxDQUFELENBQUksRUFBRSxFQUE5RDtBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTckYsU0FBVCxDQUFtQkQsS0FBbkIsRUFBMEI7QUFDL0IsTUFBSUEsS0FBSyxLQUFLK0YsU0FBZCxFQUF5QixPQUFPLFdBQVA7O0FBQ3pCLE1BQUksT0FBTy9GLEtBQVAsS0FBaUIsVUFBckIsRUFBaUM7QUFDL0IsV0FBT21DLDRDQUFNLENBQUNDLE9BQVAsQ0FBZXBDLEtBQWYsSUFBd0IsUUFBeEIsR0FBbUMsVUFBMUM7QUFDRDs7QUFDRCxNQUFJLE9BQU9BLEtBQVAsS0FBaUIsUUFBckIsRUFBK0IsT0FBUSxVQUFTQSxLQUFLLENBQUN1WSxXQUFZLEdBQW5DO0FBQy9CLFNBQU9DLElBQUksQ0FBQ3ZZLFNBQUwsQ0FBZUQsS0FBZixDQUFQO0FBQ0Q7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTeVksU0FBVCxDQUFtQjVGLEdBQW5CLEVBQXdCO0FBQzdCLFNBQU8sYUFBYWdCLFFBQWIsQ0FBc0JoQixHQUFHLENBQUMsQ0FBRCxDQUF6QixJQUFpQyxNQUFLQSxHQUFJLEVBQTFDLEdBQStDLEtBQUlBLEdBQUksRUFBOUQ7QUFDRCxDLENBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNoTixPQUFULENBQWlCNlMsU0FBakIsRUFBNEI7QUFDakMsU0FBT0EsU0FBUyxHQUFHMVQsZ0RBQUgsR0FBZ0JDLCtDQUFoQztBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNNLE1BQVQsQ0FBZ0J0QixDQUFoQixFQUFtQk0sTUFBbkIsRUFBMkI7QUFDaEMsU0FBT04sQ0FBQyxJQUFJLElBQUwsR0FBWU0sTUFBWixHQUFxQkMsdURBQVEsQ0FBQ1AsQ0FBRCxDQUFwQztBQUNEO0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTeUIsTUFBVCxDQUFnQnpCLENBQWhCLEVBQW1CRyxHQUFuQixFQUF3QkcsTUFBeEIsRUFBZ0M7QUFDckMsU0FBT04sQ0FBQyxJQUFJLElBQUwsR0FBWWdKLHFEQUFNLENBQUM3SSxHQUFELEVBQU1HLE1BQU4sQ0FBbEIsR0FBa0M0Qix1REFBUSxDQUFDbEMsQ0FBRCxFQUFJRyxHQUFKLEVBQVNHLE1BQVQsQ0FBakQ7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dDLE1BQVQsQ0FBZ0JvUyxJQUFoQixFQUFzQjFVLENBQXRCLEVBQXlCRyxHQUF6QixFQUE4QkcsTUFBOUIsRUFBc0M7QUFDM0MsU0FBT29VLElBQUksR0FBR2pULE1BQU0sQ0FBQ3pCLENBQUQsRUFBSUcsR0FBSixFQUFTRyxNQUFULENBQVQsR0FBNEJnQixNQUFNLENBQUN0QixDQUFELEVBQUlNLE1BQUosQ0FBN0M7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5ub2Fzc2VydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGVudW1lcmF0ZSwgb3JkaW5hbCwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJy4vdXRpbCdcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZm9ybWF0dGVyID0gdHlwZSA9PlxuICB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuY29uc3QgY2hhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycpXG5jb25zdCBmbkZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBmdW5jdGlvbicpXG5jb25zdCBnZW5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJylcbmNvbnN0IHN0ckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBzdHJpbmcnKVxuY29uc3QgYXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhbiBhcnJheScpXG5jb25zdCBzdHJBcnJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnKVxuY29uc3Qgc3RyUmVnRm9ybXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGEgcmVndWxhciBleHByZXNzaW9uJylcbmNvbnN0IG51bUZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBudW1iZXInKVxuY29uc3QgcGFyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHBhcnNlcicpXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUgYW5kIGEgcG9zaXRpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHBhcmFtIHtzdHJpbmd9IFtvcmRlcl0gVGhlIHBvc2l0aW9uIG9mIHRoZSB2YWx1ZSB3aXRoaW4gYW4gYXJndW1lbnRcbiAqICAgICBsaXN0LlxuICogQHBhcmFtIHtib29sZWFufSBbbXVsdGlwbGVdIEluZGljYXRlcyB3aGV0aGVyIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmVcbiAqICAgICBhcmd1bWVudCBpbiB0aGUgZnVuY3Rpb24gd2hvc2UgZXJyb3IgaXMgYmVpbmcgZm9ybWF0dGVkLiBJZiB0aGlzXG4gKiAgICAgaXMgZmFsc2UsIHRoZSBgb3JkZXJgIHdpbGwgYmUgaWdub3JlZC5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbigqKTpzdHJpbmd9IEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgdmFsdWUgb2YgYW55XG4gKiAgICAgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBhcmdGb3JtYXR0ZXIgPSAodHlwZSwgb3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PiB2YWx1ZSA9PlxuICBgZXhwZWN0ZWQgJHtcbiAgICBtdWx0aXBsZSA/IGAke3dvcmRpbmFsKG9yZGVyKX0gYCA6ICcnXG4gIH1hcmd1bWVudCB0byBiZSAke3R5cGV9OyBmb3VuZCAke3N0cmluZ2lmeSh2YWx1ZSl9YFxuXG5leHBvcnQgY29uc3QgYXJnQ2hhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBvbmUtY2hhcmFjdGVyIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdGbkZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdHZW5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZ2VuZXJhdG9yIGZ1bmN0aW9uJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ051bUZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBudW1iZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnUGFyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1N0ckFyckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBzdHJpbmcgb3IgYW4gYXJyYXkgb2YgY2hhcmFjdGVycycsIG9yZGVyLCBtdWx0aXBsZSlcblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBmb3JtYXR0ZXIgZnVuY3Rpb24gb3V0IG9mIGEgdHlwZSBhbmQgYSBwb3NpdGlvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZSBUaGUgdHlwZSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gb3JkIFRoZSBwb3NpdGlvbiBvZiB0aGUgdmFsdWUgd2l0aGluIGFhbiBhcmd1bWVudFxuICogICAgIGxpc3QsIGEgYmxvY2sgb2YgY29kZSwgZXRjLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG9yZEZvcm1hdHRlciA9ICh0eXBlLCBvcmQpID0+IHZhbHVlID0+XG4gIGBleHBlY3RlZCAke29yZH0gYXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IG9yZENoYXJGb3JtYXR0ZXIgPSBvcmQgPT5cbiAgb3JkRm9ybWF0dGVyKCdhIG9uZS1jaGFyYWN0ZXIgc3RyaW5nJywgb3JkKVxuZXhwb3J0IGNvbnN0IG9yZEZuRm9ybWF0dGVyID0gb3JkID0+IG9yZEZvcm1hdHRlcignYSBmdW5jdGlvbicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmROdW1Gb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIG51bWJlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRQYXJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHBhcnNlcicsIG9yZClcbmV4cG9ydCBjb25zdCBvcmRTdHJGb3JtYXR0ZXIgPSBvcmQgPT4gb3JkRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZClcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOnN0cmluZ30gZm9ybWF0dGVyXG4gKi9cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzaW5nbGUtY2hhcmFjdGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBub24tcGFyc2VyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBmbkZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IHBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbkZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBhcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHNpbmdsZS1jaGFyYWN0ZXJcbiAqIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XG4gIGlmICghKFxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gbnVtRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGFuIGFycmF5IGNvbnRhaW5zIG9ubHkgcGFyc2Vycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geypbXX0gdmFsdWVzIFRoZSBhcnJheSBvZiB2YWx1ZXMgYmVpbmcgY2hlY2tlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydFBhcnNlcnMobmFtZSwgdmFsdWVzKSB7XG4gIGZvciAoY29uc3QgW2ksIHZhbHVlXSBvZiBlbnVtZXJhdGUodmFsdWVzKSkge1xuICAgIGFzc2VydFBhcnNlcihuYW1lLCB2YWx1ZSwgb3JkUGFyRm9ybWF0dGVyKG9yZGluYWwoaSArIDEpKSlcbiAgfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIG5lcnJvciwgcmVwbHlGbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBwYXJzZXJzIG9uZSBhdCBhIHRpbWUgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmVcbiAqIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBPbiBmYWlsdXJlIChmYXRhbCBvciBvdGhlcndpc2UpLCBlcnJvclxuICogbWVzc2FnZXMgZnJvbSBhbGwgcGFyc2VycyB0aGF0IGhhZCBmYWlsZWQgYXJlIG1lcmdlZCBpbnRvIGBhbHRgJ3NcbiAqIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBleGVjdXRlLCBvbmUgYXQgYSB0aW1lLFxuICogICAgIHVudGlsIG9uZSBzdWNjZWVkcywgb25lIGZhaWxzIGZhdGFsbHksIG9yIGFsbCBmYWlsLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgaXRzIGNvbnRhaW5lZCBwYXJzZXJzIHVudGlsXG4gKiAgICAgb25lIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3QgYWx0ID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdhbHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuXG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBlcnJvcnMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyLCBzdWNjZWVkaW5nIHdoZXRoZXIgaXRcbiAqIGZhaWxzIG9yIG5vdCBidXQgb25seSBjb25zdW1pbmcgaW5wdXQgaWYgaXQgc3VjY2VlZHMuIFRoaXMgcGFyc2VyXG4gKiB3aWxsIG9ubHkgZmFpbCBpZiBpdHMgc3VwcGxpZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciBmb3Igb3B0aW9uYWwgY29udGVudCB0byBiZSBleGVjdXRlZCBhbmRcbiAqICAgICB0aGVuIGhhdmUgaXRzIHJlc3VsdCBpZ25vcmVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgIGZhaWxzLlxuICogQHJldHVybiB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIHdpdGggbm8gcmVzdWx0IHVubGVzcyBpdHNcbiAqICAgICBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuIFRoaXMgcGFyc2VyIGNvbnN1bWVzIHRleHQgb25seSBpZlxuICogICAgIGl0cyBjb250YWluZWQgcGFyc2VyIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgb3B0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignb3B0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGNvbnN0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcblxuICAvLyBJZiB0aGUgb3B0aW9uYWwgcGFyc2VyIGZhaWxzLCB3ZSBhZGQgdGhlIGVycm9yIG1lc3NhZ2UgZXZlbiB0aG91Z2hcbiAgLy8gdGhlIGVuZCByZXN1bHQgb2YgYG9wdGAgaXMgc3VjY2Vzcy4gVGhpcyBsZXRzIHNlcXVlbmNpbmcgcGFyc2Vyc1xuICAvLyBhZGQgdGhlIG9wdCBwYXJzZXIncyBleHBlY3RlZCB0byBlcnJvciBtZXNzYWdlcyBpZiBhIGxhdGVyIHBhcnNlclxuICAvLyBpbiB0aGUgc2VxdWVuY2UgZmFpbHMuXG4gIGNvbnN0IHJlcGx5ID0gb2tSZXBseShwY3R4LCBudWxsKVxuICByZXBseVsxXS5lcnJvcnMgPSBlcnJvcnNcbiAgcmV0dXJuIHJlcGx5XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgZWl0aGVyIHdpdGggdGhlIHN1cHBsaWVkIHBhcnNlcidzIHN1Y2Nlc3NmdWxcbiAqIHJlc3VsdCBvciBlbHNlIChpZiB0aGF0IHBhcnNlciBmYWlscykgdGhlIHN1cHBsaWVkIGRlZmF1bHQgdmFsdWUgYHhgLlxuICogVGhpcyBwYXJzZXIgb25seSBmYWlscyBpZiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0IGlmIGl0IHN1Y2NlZWRzLlxuICogQHBhcmFtIHsqfSB4IEEgdmFsdWUgd2hpY2ggd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXIncyByZXN1bHQgaWYgdGhlXG4gKiAgICAgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggcmVzdWx0cyBpbiBlaXRoZXIgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlcidzIHN1Y2Nlc3NmdWwgcmVzdWx0IG9yIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGRlZiA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2RlZicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdkZWYnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG4gIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC5cbiAqIFN1Y2Nlc3Mgb3IgZmFpbHVyZSBhcmUgc3RpbGwgcmV0dXJuZWQsIHRob3VnaCBmYXRhbCBmYWlsdXJlIGlzXG4gKiBjb252ZXJ0ZWQgdG8gbm9uLWZhdGFsIGR1ZSB0byB0aGUgZmFjdCB0aGF0IG5vIGlucHV0IGlzIGNvbnN1bWVkLlxuICpcbiAqIElmIHRoZSBjb25zaXR1ZW50IHBhcnNlciBmYWlscyBmYXRhbGx5LCBhIG5lc3RlZCBlcnJvciBtZXNzYWdlIHdpbGxcbiAqIGJlIGNyZWF0ZWQgdG8gdHJhY2sgdGhlIGFjdHVhbCBlcnJvciBjYXVzZSBiZWZvcmUgdGhpcyBwYXJzZXJcbiAqIGF1dG9tYXRpY2FsbHkgYmFja3RyYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgb3IgZmFpbHNcbiAqICAgICB3aXRoIGl0LCBidXQgd2hpY2ggY29uc3VtZXMgbm8gaW5wdXQgZWl0aGVyIHdheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBlZWsgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdwZWVrJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3BlZWsnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBva1JlcGx5KHBjdHgsIHByZXMudmFsdWUsIGluZGV4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIC8vIFRoaXMgcGFyc2VyIGltcGxlbWVudHMgYXV0b21hdGljIGJhY2t0cmFja2luZywgc28gaWYgaXRzIHBhcnNlclxuICAvLyBmYWlscyBmYXRhbGx5LCBpdCBoYXMgdG8gdHJhY2sgdGhhdCB0aHJvdWdoIGEgbmVzdGVkIGVycm9yXG4gIHJldHVybiBmYWlsUmVwbHkocGN0eCwgbmVycm9yKG0sIHBjdHgsIHByZXMuZXJyb3JzKSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHByb3ZpZGVkIHBhcnNlciBzdWNjZWVkcyBidXQgZG9lcyBub3RcbiAqIGNvbnN1bWUgaW5wdXQuIElmIHRoZSBwYXJzZXIgc3VjY2VlZHMgYW55IG90aGVyIHdheSBvciBmYWlscywgdGhpc1xuICogcGFyc2VyIHRyYW5zcGFyZW50bHkgcGFzc2VzIHRoYXQgcmVzdWx0IGFsb25nLlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlIG9uIGZhaWx1cmUgaWYgdGhhdFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgc3VjY2VzcyB3aXRoIGlucHV0IGNvbnN1bWVkLiBBbiBlcnJvciBtZXNzYWdlXG4gKiBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXMgdGhlIG9wdGlvbmFsXG4gKiBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGZhaWxzIGlmIGBwYCBwYXNzZXMgYnV0IGNvbnN1bWVzXG4gKiAgICAgaW5wdXQsIG9yIG90aGVyd2lzZSBwYXNzZXMgdGhlIHJlc3VsdCB0aHJvdWdoLlxuICovXG5leHBvcnQgY29uc3QgZW1wdHkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbXB0eScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbXB0eScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPayAmJiBwY3R4LmluZGV4ID09PSBpbmRleCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbiAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHN1cHBsaWVkIHBhcnNlciBmYWlscywgYnV0IHdoaWNoIGRvZXNcbiAqIG5vdCBjb25zdW1lIGlucHV0LiBJZiBgcGAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyLCBieSBkZWZhdWx0LCBwcm9kdWNlcyBubyBlcnJvciBtZXNzYWdlcyBvbiBmYWlsdXJlLiBBblxuICogZXJyb3IgbWVzc2FnZSBjYW4gYmUgc3BlY2lmaWVkIGJ5IHBhc3NpbmcgdGhlIGV4cGVjdGVkIG1lc3NhZ2UgaW4gYXNcbiAqIHRoZSBvcHRpb25hbCBzZWNvbmQgcGFyYW1ldGVyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIHdoZW4gaXRcbiAqICAgICBmYWlscywgYnV0IGRvZXMgbm90IGNoYW5nZSB0aGUgcGFyc2VyIGNvbnRleHQsIHdoZXRoZXIgb3Igbm90IGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICovXG5leHBvcnQgY29uc3Qgbm90ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbm90JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ25vdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgcmV0dXJuIHByZXMuc3RhdHVzID09PSBPa1xuICAgID8gZmFpbFJlcGx5KHBjdHgsIGZlcnJvcihtLCB1bmRlZmluZWQpLCBpbmRleClcbiAgICA6IG9rUmVwbHkocGN0eCwgbnVsbCwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ0dlbkZvcm1hdHRlcixcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbkZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxuICBmb3JtYXR0ZXIsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBjb21wb3VuZCwgRXJyb3JUeXBlLCBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQge1xuICBiZXJyb3IsXG4gIGR1cCxcbiAgZmVycm9yLFxuICBuZXJyb3IsXG4gIHJhbmdlLFxuICByZXBseUZuLFxuICBzdHJpbmdpZnksXG4gIHdvcmRpbmFsLFxufSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYmFja3RyYWNrcyB3aGVuIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkgYW5kXG4gKiB0cmFuc2Zvcm1zIHRoYXQgZmF0YWwgZmFpbHVyZSBpbnRvIGEgbm9uLWZhdGFsIG9uZS5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGUgZmV3IHdheXMgdG8gY2F1c2UgYSBjb250YWluZWQgcGFyc2VyIHRvIGJhY2t0cmFja1xuICogYWZ0ZXIgYSBmYXRhbCBmYWlsdXJlIChgcGVla2AgYWxzbyBkb2VzIHRoYXQgYXMgYSBzaWRlIGVmZmVjdCwgZXRjLikuXG4gKiBBbGwgb2YgdGhlIGBCYCBiYWNrdHJhY2tpbmcgcGFyc2VycyBiYWNrdHJhY2sgb25seSBpZiB0aGUgZmF0YWxcbiAqIGZhaWx1cmUgd2FzIGNhdXNlZCBieSBhIGNvbnRhaW5lZCBwYXJzZXIncyBub24tZmF0YWwgZmFpbHVyZS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIGZhdGFsIGZhaWx1cmVzIHdpbGwgYmUgY29udmVydGVkXG4gKiAgICAgaW50byBub24tZmF0YWwgZmFpbHVyZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuIElmIHRoZSBwYXJzZXIgYmFja3RyYWNrcywgdGhpcyBpbnN0ZWFkIGJlY29tZXMgdGhlIHRleHQgb2ZcbiAqICAgICB0aGUgZ2VuZXJhdGVkIGNvbXBvdW5kIGVycm9yIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGNhbm5vdCBmYWlsIGZhdGFsbHkuIElmIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIgZmFpbHMgZmF0YWxseSwgdGhpcyBvbmUgd2lsbCBpbnN0ZWFkIGZhaWwgbm9uLWZhdGFsbHkuXG4gKi9cbmV4cG9ydCBjb25zdCBhdHRlbXB0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXR0ZW1wdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhdHRlbXB0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3ByZXAsIFtwY3R4LCBwcmVzXV0gPSBkdXAocChjdHgpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcHJlcFxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBuZXJyb3IobSwgcGN0eCwgcHJlcy5lcnJvcnMpLCBpbmRleClcbiAgfVxuICBpZiAoaGFzTSkge1xuICAgIGlmIChwcmVzLmVycm9ycy5sZW5ndGggPT09IDEgJiYgcHJlcy5lcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZCkge1xuICAgICAgY29uc3QgeyBjdHgsIGVycm9ycyB9ID0gcHJlcy5lcnJvcnNbMF1cbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgY29tcG91bmQobSwgY3R4LCBlcnJvcnMpLCBpbmRleClcbiAgICB9XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBleHBlY3RlZChtKSwgaW5kZXgpXG4gIH1cbiAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBwcmVzLmVycm9ycywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBwcyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgKG9yIGNvbXBvdW5kIGVycm9yIG1lc3NhZ2UsIGluIHRoZSBjYXNlIG9mXG4gKiAgICAgYmFja3RyYWNraW5nIGhhcHBlbmluZykgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvclxuICogICAgIG1lc3NhZ2VzIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIHBzW3BzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT5cbiAgICAgIGFzc2VydFBhcnNlcignc2VxQicsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgYXJncy5sZW5ndGggPiAxKSkpXG5cbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICAgIH1cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogSWYgdGhlIHBhcnNlciByZXR1cm5lZCBieSBgZm5gIGZhaWxzIG5vbi1mYXRhbGx5IGFmdGVyIGBwYCBzdWNjZWVkcyxcbiAqIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIGFuZFxuICogd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAsIHBhc3MgdGhlIHJlc3VsdCB0b1xuICogICAgIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3MgcmV0dXJuIHZhbHVlIGFzIGFcbiAqICAgICBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbkIgPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW5CJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2NoYWluQicsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjaGFpbkInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW5CJywgcSwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgcGFyc2VyJyksXG4gIClcblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcXJlcFxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGFwcGxpZXMgdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBxYCB0byB0aGUgZnVuY3Rpb25cbiAqIHJldHVybmVkIGJ5IGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgcGFzc2VkIHRvIHRoZVxuICogICAgIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIEEgcGFyc2VyIHdoaWNoIHByb3ZpZGVzIGEgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmVzdWx0cyBpblxuICogICAgIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYCB3aGVuIHRoZSB2YWx1ZVxuICogICAgIHJldHVybmVkIGJ5IGBwYCBpcyBwYXNzZWQgaW50byBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5QiA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5QicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHlCJywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2FwcGx5QicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVycm9yLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IGZuID0gcXJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgJ2FwcGx5QicsIGZuLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBmdW5jdGlvbicpLFxuICApXG4gIHJldHVybiBva1JlcGx5KHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHRoZW5cbiAqIHJldHVybiB0aGUgcmVzdWx0IG9mIGBwYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiB0aGUgZmlyc3QuXG4gKi9cbmV4cG9ydCBjb25zdCBsZWZ0QiA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnRCJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0QicsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdsZWZ0QicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rUmVwbHkocWN0eCwgcHJlcy52YWx1ZSlcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHRoZW5cbiAqIHJldHVybiB0aGUgcmVzdWx0IG9mIGBxYC5cbiAqXG4gKiBJZiBgcGAgc3VjY2VlZHMgYW5kIGBxYCBmYWlscywgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlXG4gKiBwb2ludCB3aGVyZSBgcGAgd2FzIGFwcGxpZWQgYW5kIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlc3VsdCBvZiB0aGUgc2Vjb25kLlxuICovXG5leHBvcnQgY29uc3QgcmlnaHRCID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHRCJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodEInLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmlnaHRCJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHFyZXBcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuXG4gIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLCBjb2xsZWN0aW5nIHRoZVxuICogc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIGZhaWxzIGFmdGVyIGluaXRpYWxseSBzdWNjZWVkaW5nIG9uY2Ugb3IgbW9yZSwgdGhpcyBwYXJzZXJcbiAqIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIHRoZSBmaXJzdCB0aW1lIGFuZFxuICogd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGV4ZWN1dGUgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGV4ZWN1dGUgdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXRCID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmVwZWF0QicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcigncmVwZWF0QicsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyZXBlYXRCJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBwcmVzLmVycm9ycylcbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIGBlYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgd2lsbFxuICogYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIHRoZSBmaXJzdCB0aW1lIGFuZCB3aWxsXG4gKiBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgZWAgYW5kIHRoZW4gYHBgIHplcm9cbiAqICAgICBvciBtb3JlIHRpbWVzIHVudGlsIGBlYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsQiA9IChwLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsQicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndW50aWxCJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VudGlsQicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBlY3R4XG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgZmVycm9yKG0sIGVyZXMuZXJyb3JzKSlcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKFxuICAgICAgICBwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIGVyZXMuZXJyb3JzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGcgQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBubyBhcmd1bWVudHNcbiAqICAgICBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3NcbiAqICAgICByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHkgYFBhcnNlcmBzO1xuICogICAgIG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9ja0IgPSAoZywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0R2VuRnVuY3Rpb24oJ2Jsb2NrQicsIGcsIGFyZ0dlbkZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdibG9ja0InLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgZ2VuID0gZygpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jsb2NrQicsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgd29yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgcGlwZUIgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIHBzW3BzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PiBhc3NlcnRQYXJzZXIoXG4gICAgICAncGlwZUInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpLFxuICAgICkpXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlQicsIGZuLCBhcmdGbkZvcm1hdHRlcihwcy5sZW5ndGggKyAxLCB0cnVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBwcmUsIGNvbnRlbnQsIGFuZCBwb3N0IHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGFueSBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHksIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHdoZXJlXG4gKiBgc2Agd2FzIGV4ZWN1dGVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBzIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlIFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGBzYCwgYHBgLCBhbmQgYGVgIGluXG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJldHdlZW5CID0gKHMsIGUsIHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbkInLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW5CJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiZXR3ZWVuQicsIHAsIGFyZ1BhckZvcm1hdHRlcigzLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiZXR3ZWVuQicsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY3R4KVxuICBpZiAoc3Jlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHNyZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4oc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoc2N0eClcbiAgY29uc3QgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHNyZXMuZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUocGN0eClcbiAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KGVjdHgsIGZlcnJvcihtLCBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSkpXG4gIH1cbiAgaWYgKGVyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IoXG4gICAgICBlY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgZWN0eCwgbWVyZ2UoZXJyb3JzLCBlcmVzLmVycm9ycyksXG4gICAgKVxuICAgIHJldHVybiBmYWlsUmVwbHkoZWN0eCwgZXJyb3IsIGluZGV4KVxuICB9XG4gIHJldHVybiBva1JlcGx5KGVjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEFycmF5LFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgcmVwbHlGbiB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCBhbmQgcmV0dXJuIGBwYCdzIHJlc3VsdHMgam9pbmVkXG4gKiB0b2dldGhlciBpbnRvIGEgc2luZ2xlIHN0cmluZy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkgb2ZcbiAqICAgICBzdHJpbmdzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgYSBzaW5nbGVcbiAqICAgICBzdHJpbmcgbWFkZSBmcm9tIGpvaW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBhcnJheSBvZiBzdHJpbmdzXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgam9pbiA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2pvaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnam9pbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdqb2luJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmpvaW4oJycpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gaXRzIHJlc3VsdHMgbWludXMgYW55XG4gKiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgcmV0dXJucyBpdHMgcmVzdWx0c1xuICogICAgIG1pbnVzIGFueSBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjb21wYWN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NvbXBhY3QnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnY29tcGFjdCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdi5maWx0ZXIoeCA9PiB4ICE9IG51bGwpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBidXQsIG9uIHN1Y2Nlc3MsIHJldHVybnMgYHhgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS4gSXRzIHJlc3VsdCBpcyBpZ25vcmVkLlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0aGF0IHRoZSBuZXcgcGFyc2VyIHdpbGwgcmVzdWx0IGluIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IGBwYCBidXQgcmV0dXJuIGB4YCBvblxuICogICAgIHN1Y2Nlc3MuXG4gKi9cbmV4cG9ydCBjb25zdCB2YWx1ZSA9IChwLCB4LCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3ZhbHVlJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3ZhbHVlJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgeClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBgbmB0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgMC1iYXNlZCBpbmRleCBvZiB0aGUgcmVzdWx0IGVsZW1lbnQgdG8gcmV0dXJuLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBgbmB0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBudGggPSAocCwgbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdudGgnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ250aCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdudGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheShcbiAgICAnbnRoJywgdiwgZm9ybWF0dGVyKCdmaXJzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSxcbiAgKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbbl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpcnN0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZpcnN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzBdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIHNlY29uZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHNlY29uZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZWNvbmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2Vjb25kJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3NlY29uZCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdlsxXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSB0aGlyZCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIHRoaXJkIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHRoaXJkID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndGhpcmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndGhpcmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgndGhpcmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmb3VydGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZm91cnRoJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzNdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlmdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlmdGggPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaWZ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmaWZ0aCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmaWZ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdls0XSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYW5kIHBhc3NlcyBpdHMgcmVzdWx0IHRvXG4gKiB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoZVxuICogcmVzdWx0LlxuICpcbiAqIFRoaXMgaXMgdGhlIGBmbWFwYCBvcGVyYXRpb24gZnJvbSBIYXNrZWxsJ3MgYEZ1bmN0b3JgIGNsYXNzLiBJdCdzXG4gKiB1c2VkIGFzIGEgYmFzaXMgZm9yIGxpZnRpbmcgZnVuY3Rpb25zIGludG8gYSBQYXJzZXIgY29udGV4dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKToqfSBmbiBBIG1hcHBpbmcgZnVuY3Rpb24gdGhhdCBpcyBwYXNzZWQgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYCBhbmQgd2hvc2UgcmV0dXJuIHZhbHVlIHdpbGwgYmUgdGhlIHJlc3VsdCBvZiB0aGVcbiAqICAgICBjcmVhdGVkIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHN1Y2NlZWQgd2l0aCB0aGF0XG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBtYXAgPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ21hcCcsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYXAnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXBwbHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYXBwbHknLCBmbiwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIHRoZSBmdW5jdGlvbi1wcm92aWRlZCBwYXJzZXIgZmFpbHNcbiAqIGFmdGVyIHRoZSBvdGhlciBwYXJzZXIgY29uc3VtZXMgaW5wdXQsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGlzXG4gKiBub24tZmF0YWwuXG4gKlxuICogVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGBNb25hZGAgY2xhc3MncyBgYmluZGAgb3BlcmF0aW9uXG4gKiAoZ2VuZXJhbGx5IHdyaXR0ZW4gYD4+PWAgaW4gSGFza2VsbCkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6IFBhcnNlcn0gZm4gQSBmdW5jdGlvbiB0aGF0IHRha2VzIHRoZSByZXN1bHQgZnJvbVxuICogICAgIHRoZSBmaXJzdCBwYXJzZXIncyBzdWNjZXNzZnVsIGFwcGxpY2F0aW9uIGFzIGl0cyBzb2xlIGFyZ3VtZW50LlxuICogICAgIEl0IHVzZXMgdGhpcyByZXN1bHQgdG8gZGV0ZXJtaW5lIGEgc2Vjb25kIHBhcnNlciwgd2hpY2ggaXRcbiAqICAgICByZXR1cm5zLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBhcHBseSBpdHMgY29udGFpbmVkIHBhcnNlcixcbiAqICAgICBwYXNzIHRoZSByZXN1bHQgdG8gdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZSBhcyBhIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgdGhlIGlucHV0IHRvLlxuICovXG5leHBvcnQgY29uc3QgY2hhaW4gPSAocCwgZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY2hhaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignY2hhaW4nLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnY2hhaW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbicsIHEsIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBxcmVwXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ0dlbkZvcm1hdHRlcixcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydEdlbkZ1bmN0aW9uLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFBhcnNlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCByYW5nZSwgcmVwbHlGbiwgc3RyaW5naWZ5LCB3b3JkaW5hbCB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbmZ1bmN0aW9uIGxvb3BNZXNzYWdlKG5hbWUpIHtcbiAgcmV0dXJuIGBbJHtuYW1lfV06IGluZmluaXRlIGxvb3AgZGV0ZWN0ZWQ7IGBcbiAgICArICduZWl0aGVyIGNvbnRlbnQgbm9yIHNlcGFyYXRvciBwYXJzZXIgY29uc3VtZWQgaW5wdXQnXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGFueSBpbnB1dCB3YXMgY29uc3VtZWQgYmVmb3JlIGFueSBvZlxuICogaXRzIHBhcnNlcnMgZmFpbCwgZXZlbiBpZiB0aGF0IGZhaWx1cmUgaXRzZWxmIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzXG4gKiAgICAgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3Qgc2VxID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdzZXEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpKSlcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgY29udGV4dC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihjb250ZXh0LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcGAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgPCpgXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGVmdCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGVmdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGZuID0gcHJlcy5zdGF0dXMgPT09IEZhdGFsID8gZmF0YWxSZXBseSA6IGZhaWxSZXBseVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCByZXR1cm5zXG4gKiB0aGUgcmVzdWx0IG9mIGBxYC4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGFwcGxpY2F0aXZlIGAqPmBcbiAqIGluIEhhc2tlbGwuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3JpZ2h0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxY3R4LnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBxcmVwXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGEgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkIHdpbGwgYmVcbiAqIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuIGJlXG4gKiBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFsbCBwYXJzZXJzIGluIHRoZSBibG9jayBzdWNjZWVkLCBgYmxvY2tgIHdpbGwgc3VjY2VlZCB3aXRoIHRoZVxuICogdmFsdWUgdGhhdCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIHJldHVybmVkLlxuICpcbiAqIElmIGFueSB5aWVsZGVkIHBhcnNlciBmYWlscyBhZnRlciBhbm90aGVyIHlpZWxkZWQgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIE9ubHkgcGFyc2VycyBtYXkgYmUgeWllbGRlZCBpbiBhIGJsb2NrLiBZaWVsZGluZyBhbnl0aGluZyBlbHNlIHdpbGxcbiAqIGNhdXNlIGFuIGVycm9yIHRvIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCk6Kn0gZyBBIGdlbmVyYXRvciBmdW5jdGlvbiB0aGF0IHRha2VzIG5vIGFyZ3VtZW50c1xuICogICAgIGFuZCByZXR1cm5zIHdoYXRldmVyIHNob3VsZCBiZSB1c2VkIGFzIHRoZSByZXR1cm5lZCBwYXJzZXInc1xuICogICAgIHJlc3VsdC4gVGhpcyBnZW5lcmF0b3IgZnVuY3Rpb24gY2FuIGB5aWVsZGAgb25seSBgUGFyc2VyYHM7XG4gKiAgICAgb3RoZXJ3aXNlIGFuIGVycm9yIGlzIHRocm93bi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBleGVjdXRlcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIGluIHRoZSByZXR1cm5cbiAqICAgICB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmxvY2sgPSAoZywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0R2VuRnVuY3Rpb24oJ2Jsb2NrJywgZywgYXJnR2VuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2Jsb2NrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGdlbiA9IGcoKVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogW11cbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibG9jaycsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgd29yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgbmV4dFZhbHVlID0gcHJlcy52YWx1ZVxuICAgIGkrK1xuICB9XG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBmYWlsIG5vbi1mYXRhbGx5OyBob3dldmVyLCBpZiBgcGAgZXZlciBmYWlsc1xuICogZmF0YWxseSwgdGhlbiBzbyB3aWxsIHRoaXMgcGFyc2VyLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hbnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW4gZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lcyBub3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBgcGAgZXZlciBmYWlscyBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGJlIGV4ZWN1dGVkIG9uZSBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyXG4gKiAgICAgcmVwZWF0ZWRseSB1bnRpbCBpdCBmYWlscy4gSXRzIHJlc3VsdCB3aWxsIGJlIGFuIGFycmF5IG9mIHRoZVxuICogICAgIHN1Y2Nlc3NmdWwgcmVzdWx0cyBmcm9tIHRoZSBjb250YWluZWQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgbWFueTEgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdtYW55MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYW55MScsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG5cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGlmIChjb250ZXh0LmluZGV4ID49IGNvbnRleHQudmlldy5ieXRlTGVuZ3RoKSBicmVha1xuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGRpc2NhcmRzIGFueSBzdWNjZXNzZnVsIHJlc3VsdCB3aGlsZVxuICogc3RpbGwgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRvIGJlIGRpc2NhcmRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBjb25zdW1lIGlucHV0IGFzIGBwYCBkb2VzIG9uXG4gKiAgICAgc3VjY2VzcywgYnV0IHdpbGwgcHJvZHVjZSBubyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBza2lwID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2tpcCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdza2lwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXAnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcDEgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXAxJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlcDEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ3NlcDEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBub24tZmF0YWxseSwgYXMgbWF0Y2hpbmcgYHBgIHplcm8gdGltZXMgaXNcbiAqIHZhbGlkLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmQgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbmQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZCcsIHMsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCBbXSlcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcblxuICAgIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY29udGV4dClcbiAgICBjb250ZXh0ID0gc2N0eFxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBpZiAoY29udGV4dC5pbmRleCA9PT0gaW5kZXgpIHRocm93IG5ldyBUeXBlRXJyb3IobG9vcE1lc3NhZ2UoJ2VuZCcpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoc2N0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgZW5kMSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZDEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZDEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZW5kMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kMScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyh7IC4uLmNvbnRleHQsIGluZGV4IH0pXG4gIGlmIChzcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoc2N0eCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgYG5gIHRpbWVzLCBjb2xsZWN0aW5nIHRoZVxuICogc3VjY2Vzc2Z1bCByZXN1bHRzIGludG8gYW4gYXJyYXkuXG4gKlxuICogSWYgYHBgIGZhaWxzIGFmdGVyIGFueSBpbnB1dCBoYXMgYmVlbiBjb25zdW1lZCBieSBhIHByaW9yIGV4ZWN1dGlvblxuICogb2YgYHBgLCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBgbmAgdGltZXMgYW5kIHJlc3VsdHMgaW5cbiAqICAgICBhbiBhcnJheSBvZiBhbGwgb2YgdGhlIHN1Y2Nlc3NmdWwgcmVzdWx0cyBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCByZXBlYXQgPSAocCwgbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyZXBlYXQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ3JlcGVhdCcsIG4sIGFyZ051bUZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyZXBlYXQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UobikpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHN0YXJ0LCBjb250ZW50LCBhbmQgZW5kIHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGVpdGhlciBgcGAgb3IgYGVgIGZhaWxzIGFmdGVyIGEgcHJpb3IgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBzIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHMsIGUsIHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHMsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIGFyZ1BhckZvcm1hdHRlcigzLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiZXR3ZWVuJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjdHgpXG4gIGlmIChzcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oc3Jlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihzY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBzcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoc2N0eClcbiAgY29uc3QgZXJyb3JzID0gaGFzTVxuICAgID8gZXhwZWN0ZWQobSlcbiAgICA6IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShzcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUocGN0eClcbiAgaWYgKGVyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihlcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgZWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKGVjdHgsIGhhc00gPyBlcnJvcnMgOiBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShlY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBiZWZvcmUgYGVgIHN1Y2NlZWRzIGJ1dCBhZnRlciBwcmlvciBleGVjdXRpb25zIG9mIGBwYFxuICogaGF2ZSBjb25zdW1lZCBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIHplcm8gb3IgbW9yZSB0aW1lc1xuICogICAgIHVudGlsIGBlYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gKHAsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndW50aWwnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VudGlsJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IGVjdHhcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShlY3R4LCBoYXNNID8gbWVycm9yIDogZXJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChlcmVzLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBtZXJnZShwcmVzLmVycm9ycywgZXJlcy5lcnJvcnMpKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzIHRob3NlXG4gKiByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZiBwYXJzZXJzIHRvXG4gKiBleGVjdXRlLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGlzIHBhcnNlcidzXG4gKiByZXN1bHQuXG4gKlxuICogTm90ZSB0aGF0LCB1bmxpa2UgYHNlcXVlbmNlYCwgYG51bGxgIHBhcnNlciByZXN1bHRzIGFyZSAqbm90KlxuICogZGlzY2FyZGVkLiBUaGlzIGVuc3VyZXMgdGhhdCB0aGUgc2FtZSBudW1iZXIgb2YgYXJndW1lbnRzIGFyZSBwYXNzZWRcbiAqIHRvIGBmbmAgbm8gbWF0dGVyIHRoZSByZXN1bHRzIGZyb20gdGhlIHBhcnNlcnMuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIGFmdGVyIHByaW9yIHBhcnNlcnMgaGF2ZSBjb25zdW1lZCBpbnB1dCxcbiAqIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIFRoaXMgcGFyc2VyIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGFwcGxpY2F0aXZlIGxpZnQgb3BlcmF0aW9uLCBsaWZ0aW5nXG4gKiBtdWx0aS1wYXJhbWV0ZXIgZnVuY3Rpb25zIGludG8gdGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIEl0IGFjdHMgbGlrZVxuICogYGxpZnRBMmAgaWYgdHdvIHBhcnNlcnMgYXJlIHBhc3NlZCBpbiwgYGxpZnRBM2AgaWYgdGhyZWUgYXJlIHBhc3NlZFxuICogaW4sIGV0Yy5cbiAqXG4gKiBAcGFyYW0gey4uLihQYXJzZXJ8ZnVuY3Rpb24oLi4uKik6KnxzdHJpbmcpfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnNcbiAqICAgICB0byBiZSBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvblxuICogICAgIHdoaWNoIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHNcbiAqICAgICByZXR1cm4gdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGVcbiAqICAgICBmdW5jdGlvbiBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgY29tZSBhZnRlciB0aGUgcGFyc2Vycy5cbiAqICAgICBPcHRpb25hbGx5LCBhIHN0cmluZyBtYXkgYmUgdGhlIGxhc3QgYXJndW1lbnQ7IGlmIGl0IGlzIHByZXNlbnQsXG4gKiAgICAgaXQgcmVwbGFjZXMgdGhlIGRlZmF1bHQgZXJyb3IgbWVzc2FnZSBpbiB0aGUgZXZlbnQgdGhhdCB0aGVcbiAqICAgICBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgZXhlY3V0ZSBpdHMgcGFyc2VycyBpbiBvcmRlcixcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHBpcGUgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT4gYXNzZXJ0UGFyc2VyKFxuICAgICAgJ3BpcGUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpLFxuICAgICkpXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdwaXBlJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKHBzLmxlbmd0aCArIDEsIHRydWUpKVxuXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGxldCBjb250ZXh0ID0gY3R4XG4gICAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogUHJpdmF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhc3NlcnRpb24gbWVzc2FnZXMgYWJvdXQgb3AgcGFyc2Vyc1xuICogbm90IHJldHVybmluZyBmdW5jdGlvbnNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gb3JkIFRoZSBudW1iZXIgb2YgdGhlIG9wIHBhcnNlciB0aGF0IGZhaWxzIHRvIHByb2R1Y2VcbiAqICAgICBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBbiBhcHByb3ByaWF0ZSBhc3NlcnRpb24gZmFpbHVyZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBvcEZvcm1hdHRlcihvcmQpIHtcbiAgcmV0dXJuIHZhbHVlID0+IGBleHBlY3RlZCAke29yZH0gb3AgcGFyc2VyIHRvIHJldHVybiBhIGZ1bmN0aW9uOyBmb3VuZCAke1xuICAgIHN0cmluZ2lmeSh2YWx1ZSlcbiAgfWBcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY0wgPSAocCwgbywgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY0wnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jTCcsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvY0wnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY0wnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvYzFMID0gKHAsIG8sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXNzb2MxTCcsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvYzFMJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb2N0eCwgb3Jlc10gPSBvKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG9jdHhcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShvY3R4LCBoYXNNID8gbWVycm9yIDogb3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ2Fzc29jMUwnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1swXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZSwgdmFsdWVzW2kgKyAxXSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIHplcm8gb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9gLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSByaWdodCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9gIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGUgcGFyc2VyIGRvZXMgbm90IGZhaWwgdW5sZXNzIG9uZSBvZiBpdHMgdHdvIHBhcnNlcnMgZmFpbHMgZmF0YWxseS5cbiAqIElmIHRoZXJlIGFyZSB6ZXJvIG1hdGNoZXMgb2YgYHBgLCB0aGVuIHRoZSBkZWZhdWx0IHZhbHVlIGB4YCBiZWNvbWVzXG4gKiB0aGUgcmVzdWx0LiBJZiB0aGVyZSBpcyBvbmUgbWF0Y2ggb2YgYHBgIGJ1dCBubyBtYXRjaGVzIG9mIGBvYCwgdGhlblxuICogdGhhdCByZXN1bHQgb2YgYHBgIGJlY29tZXMgdGhlIG92ZXJhbGwgcmVzdWx0LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHsqfSB4IFRoZSBkZWZhdWx0IHJlc3VsdCBpZiB0aGVyZSBhcmUgbm8gbWF0Y2hlcyBvZiBgcGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb2AgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9gIHJpZ2h0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBhc3NvY1IgPSAocCwgbywgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhc3NvY1InLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jUicsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhc3NvY1InLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvY1InLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgYXNzb2MxUiA9IChwLCBvLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Fzc29jMVInLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXNzb2MxUicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdhc3NvYzFSJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZm9ybWF0RXJyb3JzIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGR1cCwgc3RyaW5nVG9WaWV3LCB0cmFjayB9IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3IuanMnKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgaW5wdXQgdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2Ygb25lIG9mIHRoZSB0eXBlc1xuICogb2YgdHlwZWQgYXJyYXlzLlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHRlc3QuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gV2hldGhlciBvciBub3QgYHZhbHVlYCBpcyBhIHR5cGVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBpc1R5cGVkQXJyYXkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgVWludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDhDbGFtcGVkQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQxNkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0NjRBcnJheVxufVxuXG4vKipcbiAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgc3RhdHVzIG9mIHRoZSBsYXN0IHBhcnNpbmcgb3BlcmF0aW9uLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IFN0YXR1cyA9IHtcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIHdhcyBzdWNjZXNzZnVsLiAqL1xuICBPazogJ29rJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZyBpbnB1dC4gKi9cbiAgRmFpbDogJ2ZhaWwnLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIGFuZCBjb25zdW1lZCBpbnB1dC4gKi9cbiAgRmF0YWw6ICdmYXRhbCcsXG59XG5cbi8qKlxuICogVGhlIGNvbnRleHQgb2YgYSBwYXJzZXIuIFRoaXMgb2JqZWN0IGNvbnRhaW5zIHRoZSBpbnB1dCB0ZXh0IGFuZCBhXG4gKiBwb2ludGVyIHRvIHRoZSBjdXJyZW50IGxvY2F0aW9uIHdpdGhpbiBpdC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb250ZXh0XG4gKiBAcHJvcGVydHkge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgd2hlcmUgdGhlXG4gKiAgICAgbmV4dCBwYXJzaW5nIG9wZXJhdGlvbiB3aWxsIHRha2UgcGxhY2UgKG9yIHdoZXJlIHRoZSBsYXN0IG9uZVxuICogICAgIHJlc3VsdGVkIGluIGFuIGVycm9yKS5cbiAqL1xuXG4vKipcbiAqIEEgcmVzdWx0IGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIHN1Y2Nlc3NmdWwgb3Igbm90LiBUaGlzIGlzXG4gKiBlc3NlbnRpYWxseSBhIHVuaW9uIG9mIHN1Y2Nlc3NmdWwgdmFsdWUgYW5kIGZhaWx1cmUgZXJyb3IsIHdpdGggdGhlXG4gKiBgc3RhdHVzYCBwcm9wZXJ0eSB0byBkZXRlcm1pbmUgd2hpY2ggaXMgdmFsaWQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gUmVzdWx0XG4gKiBAcHJvcGVydHkge1N0YXR1c30gc3RhdHVzIFRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgYXR0ZW1wdGVkIHBhcnNlIG9mXG4gKiAgICAgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkgeyp9IHZhbHVlIFRoZSB2YWx1ZSBvZiBhIHN1Y2Nlc3NmdWwgcGFyc2UuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZFxuICogICAgIGR1cmluZyBhbiB1bnN1Y2Nlc3NmdWwgcGFyc2UuXG4gKi9cblxuLyoqXG4gKiBUaGUgb2JqZWN0IHRoYXQgaXMgcmV0dXJuZWQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgaW5jbHVkaW5nIHRoZVxuICogY29udGV4dCBhbmQgdGhlIHJlc3VsdC5cbiAqIEB0eXBlZGVmIHtbQ29udGV4dCwgUmVzdWx0XX0gUmVwbHlcbiAqL1xuXG4vKipcbiAqIEEgdHlwZWQgYXJyYXkgb2YgYW55IGJ1aWx0LWluIGtpbmQuXG4gKlxuICogQHR5cGVkZWZcbiAqICAgeyhVaW50OEFycmF5fFVpbnQ4Q2xhbXBlZEFycmF5fFVpbnQxNkFycmF5fFVpbnQzMkFycmF5fEludDhBcnJheXxcbiAqICAgSW50MTZBcnJheXxJbnQzMkFycmF5fEZsb2F0MzJBcnJheXxGbG9hdDY0QXJyYXkpfSBUeXBlZEFycmF5XG4gKi9cblxuLyoqXG4gKiBJbnB1dCB0ZXh0IHRvIGJlIHBhcnNlZC5cbiAqXG4gKiBAdHlwZWRlZiB7KHN0cmluZ3xBcnJheUJ1ZmZlcnxUeXBlZEFycmF5fERhdGFWaWV3KX0gSW5wdXRcbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcsIGVtcHR5IHBhcnNlciBjb250ZXh0LiBUaGlzIGlzIG5vdCBleHBvcnRlZCBiZWNhdXNlIGFcbiAqIG5ldyBjb250ZXh0IGlzIG9ubHkgY3JlYXRlZCBiZWZvcmUgcGFyc2luZywgaW4gdGhlIGBwYXJzZWAgZnVuY3Rpb24uXG4gKiBBbnkgZnVydGhlciBjb250ZXh0cyBhcmUgZGVyaXZlZCBmcm9tIHRoZSBjb250ZXh0IHVzaW5nIHtAbGluayBva30sXG4gKiB7QGxpbmsgZXJyb3J9LCBvciB7QGxpbmsgZmF0YWx9LlxuICpcbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0NvbnRleHR9IEFuIGVtcHR5IHBhcnNlciBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29udGV4dChpbnB1dCkge1xuICBjb25zdCBtZXNzYWdlID0gJ1BhcnNlciBpbnB1dCBtdXN0IGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LCBhbiBhcnJheSAnXG4gICAgKyBgYnVmZmVyLCBvciBhIGRhdGEgdmlldzsgcGFyc2VyIGlucHV0IHdhcyAke3R5cGVvZiBpbnB1dH1gXG5cbiAgY29uc3QgdmlldyA9IChpbnB1dCA9PiB7XG4gICAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBzdHJpbmdUb1ZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpc1R5cGVkQXJyYXkoaW5wdXQpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0LmJ1ZmZlcilcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGFWaWV3KSB7XG4gICAgICByZXR1cm4gaW5wdXRcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH0pKGlucHV0KVxuXG4gIHJldHVybiB7XG4gICAgdmlldyxcbiAgICBpbmRleDogMCxcbiAgfVxufVxuXG4vKipcbiAqIEEgcGFyc2luZyBmdW5jdGlvbi4gVGhpcyBpcyBzaW1wbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgcGFyc2VyXG4gKiBjb250ZXh0LCB1cGRhdGVzIGl0IHNvbWVob3cgKGdlbmVyYWxseSBieSByZWFkaW5nIGEgY2hhcmFjdGVyKSwgYW5kXG4gKiByZXR1cm5zIHRoZSB1cGRhdGVkIGNvbnRleHQuXG4gKlxuICogQGNhbGxiYWNrIFBhcnNlclxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYmVmb3JlIHRoZSBwYXJzZXIgaXMgcnVuLlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgdXBkYXRlZCBjb250ZXh0IGFmdGVyIHRoZSBwYXJzZXIgaXMgYXBwbGllZCBhbmRcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoYXQgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgUGFyc2VyYC4gVGhpcyBmYWN0b3J5IHNpbXBseSB0YWtlcyBhIHBhcnNlciBmdW5jdGlvblxuICogYW5kIHJldHVybnMgdGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uOyB0aGUgcHVycG9zZSBvZiB0aGUgZmFjdG9yeSBpc1xuICogdG8gdHJhY2sgcGFyc2VycyB0aGF0IGl0IGhhcyBjcmVhdGVkLlxuICpcbiAqIElmIGFzc2VydGlvbnMgYXJlIGVuYWJsZWQsIHRoaXMgd2lsbCBtZWFuIHRoYXQgYW55IHBhcnNlciBjb21iaW5hdG9yXG4gKiB3aWxsIGFzc2VydCB0aGF0IHRoZSBwYXJzZXIgdGhhdCBpcyBwYXNzZWQgdG8gaXQgd2FzIGNyZWF0ZWQgYnkgdGhpc1xuICogZmFjdG9yeSBmdW5jdGlvbi4gQW55IG90aGVyIHdpbGwgY2F1c2UgYW4gZXhjZXB0aW9uIHRvIGJlIHRocm93bixcbiAqIGV2ZW4gaWYgaXQgYWNjZXB0cyB0aGUgcmlnaHQga2luZCBvZiBhcmd1bWVudCBhbmQgcmV0dXJucyB0aGUgcHJvcGVyXG4gKiByZXR1cm4gdmFsdWUuIElmIGFzc2VydGlvbnMgYXJlIG5vdCBlbmFibGVkLCB0aGlzIGNoZWNrIHdpbGwgbm90IGJlXG4gKiBkb25lLlxuICpcbiAqIEV2ZXJ5IHBhcnNlciBpbiB0aGlzIGxpYnJhcnkgaXMgY3JlYXRlZCB3aXRoIGBtYWtlUGFyc2VyYCwgc28gYW55IG9mXG4gKiB0aG9zZSBvciBhbnkgcGFyc2VyIGNvbXBvc2VkIGZyb20gdGhvc2Ugd2lsbCB3b3JrIGF1dG9tYXRpY2FsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IGZuIEEgcGFyc2VyIGZ1bmN0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gVGhlIHNhbWUgcGFyc2VyIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgY29uc3QgcGFyc2VyID0gdHJhY2soZm4gPT4gZm4pXG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2Ugc3VjY2VlZGVkLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7Kn0gW3ZhbHVlPW51bGxdIFRoZSBuZXcgcmVzdWx0IG9mIHRoZSBwYXJzZXIgYXBwbGljYXRpb24uXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIHBhcnNlclxuICogICAgIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBzdWNjZWVkZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBva1JlcGx5KGN0eCwgdmFsdWUgPSBudWxsLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLk9rLCB2YWx1ZSB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aXRob3V0IGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W11dIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZXh0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmFpbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdoaWxlIGNvbnN1bWluZ1xuICogaW5wdXQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnM9W10gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRleHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYXRhbFJlcGx5KGN0eCwgZXJyb3JzID0gW10sIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuRmF0YWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFRoaXMgaW5wdXQgY2FuIGJlIGEgc3RyaW5nLCBhIHR5cGVkIGFycmF5LFxuICogYW4gYXJyYXkgYnVmZmVyLCBvciBhIGRhdGEgdmlldy4gVGhlIHJldHVybiB2YWx1ZSBpcyB0aGUgZmluYWwgcGFyc2VyXG4gKiBjb250ZXh0IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgYWZ0ZXIgYmVpbmcgcnVuLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge1JlcGx5fSBUaGUgZmluYWwgY29udGV4dCBhZnRlciBhbGwgcGFyc2VycyBoYXZlIGJlZW5cbiAqICAgICBhcHBsaWVkIGFuZCB0aGUgcmVzdWx0IG9mIHRoZSBmaW5hbCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZShwYXJzZXIsIGlucHV0KSB7XG4gIHJldHVybiBwYXJzZXIoY29udGV4dChpbnB1dCkpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtTdGF0dXN9IFRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhdHVzKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXNcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gaW52b2NhdGlvbiBvZiBgcGFyc2VgIHdhcyBzdWNjZXNzZnVsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge2Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcGFyc2VyIHN1Y2NlZWRlZCBvciBgZmFsc2VgIGlmIGl0XG4gKiAgICAgZGlkIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZChyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzID09PSBTdGF0dXMuT2tcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgcmVzdWx0IGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuIElmIHRoZSBwYXJzZXJcbiAqIGRpZCBub3Qgc3VjY2VlZCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBOb3RlIHRoYXQgYG51bGxgIGlzIGEgcG9zc2libGUgcmVzdWx0IGZyb20gc29tZSBpbmRpdmlkdWFsIHBhcnNlcnNcbiAqIChgc2tpcGAsIGBsb29rQWhlYWRgLCBldGMuKS4gVGhlIHByb3BlciB3YXkgdG8gdGVsbCBpZiBhIHBhcnNlclxuICogc3VjY2VlZGVkIGluIHRoZSBmaXJzdCBwbGFjZSBpcyB0byB1c2UgYHN1Y2NlZWRlZGAuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdGluZyB2YWx1ZSBmcm9tIHRoZSBwYXJzZSBpZiBpdCB3YXMgc3VjY2Vzc2Z1bCxcbiAqICAgICBvciBgbnVsbGAgaWYgaXQgd2FzIG5vdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3MocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyByZXBseVsxXS52YWx1ZSA6IG51bGxcbn1cblxuLyoqXG4gKiBFeHRyYWN0cyB0aGUgZXJyb3IgbWVzc2FnZSBhcyBhIHN0cmluZyBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBhblxuICogdW5zdWNjZXNzZnVsIGludm9jYXRpb24gb2YgYHBhcnNlYC4gSWYgdGhlIHBhcnNlciB3YXMgYWN0dWFsbHlcbiAqIHN1Y2Nlc3NmdWwsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIGZvcm1hdHRlZCBzdHJpbmcgZGV0YWlsaW5nIHRoZSBjaXJjdW1zdGFuY2VzIG9mXG4gKiAgICAgdGhlIHBhcnNlciBmYWlsdXJlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmFpbHVyZShyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IG51bGwgOiBmb3JtYXRFcnJvcnMocmVwbHkpXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gUmV0dXJucyB0aGUgcGFyc2VkIHZhbHVlIGlmIHRoZSBwYXJzZXJcbiAqIHN1Y2NlZWRzLCBvciB0aHJvd3MgYW4gZXhjZXB0aW9uIHdpdGggdGhlIHBhcnNlcidzIGVycm9yIG1lc3NhZ2UgaWZcbiAqIGl0IGZhaWxzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwYXJzZXIgVGhlIHBhcnNlciB0byBiZSBhcHBsaWVkIHRvIHRoZSBpbnB1dC4gVGhpc1xuICogICAgIGNhbiwgYXMgYWx3YXlzLCBiZSBhIGNvbXBvc2l0aW9uIG9mIGFuIGFyYml0cmFyeSBudW1iZXIgb2ZcbiAqICAgICBwYXJzZXJzIGFuZCBjb21iaW5hdG9ycy5cbiAqIEBwYXJhbSB7SW5wdXR9IGlucHV0IFRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHQgZnJvbSB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLCBpZiB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAdGhyb3dzIHtFcnJvcn0gSWYgdGhlIHBhcnNlciBmYWlscy4gVGhlIGVycm9yIG1lc3NhZ2Ugd2lsbCBiZSBhXG4gKiAgICAgZGV0YWlsZWQgcmVjb3JkIG9mIHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJ1bihwYXJzZXIsIGlucHV0KSB7XG4gIGNvbnN0IFtyZXBseSwgW18sIHJlc3VsdF1dID0gZHVwKHBhcnNlcihjb250ZXh0KGlucHV0KSkpXG4gIGlmIChyZXN1bHQuc3RhdHVzID09PSBTdGF0dXMuT2spIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlXG4gIH1cbiAgdGhyb3cgbmV3IEVycm9yKGZvcm1hdEVycm9ycyhyZXBseSkpXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBjaGFyTGVuZ3RoLFxuICBjb21tYVNlcGFyYXRlLFxuICBuZXh0Q2hhcldpZHRoLFxuICB2aWV3VG9TdHJpbmcsXG59IGZyb20gJy4vdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5SZXN1bHR9IFJlc3VsdCAqL1xuXG5jb25zdCB0YWIgPSAvXFx0L2d1XG5jb25zdCB6ZXJvV2lkdGggPSAvKD86XFxwe01ufXxcXHB7Q2Z9KS9ndVxuXG4vKipcbiAqIEEgc3RyaW5nIGRlZmluaW5nIHRoZSB0eXBlIG9mIGFuIGVycm9yLlxuICogQGVudW0ge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEVycm9yVHlwZSA9IHtcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGV4cGVjdGVkIHJlc3VsdC4gUHJvZHVjZWQgYnkgdGhlIHZhc3RcbiAgICogbWFqb3JpdHkgb2YgcGFyc2Vycy5cbiAgICovXG4gIEV4cGVjdGVkOiAnZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSByZXN1bHQgdGhhdCB3YXMgbm90IGV4cGVjdGVkLiBUeXBpY2FsbHlcbiAgICogcHJvZHVjZWQgYnkgcGFyc2VycyBzdWNoIGFzIGB1bmV4cGVjdGVkYCBhbmQgYG5vdEZvbGxvd2VkQnlgLlxuICAgKi9cbiAgVW5leHBlY3RlZDogJ3VuZXhwZWN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFR5cGljYWxseSBwcm9kdWNlZFxuICAgKiBieSBwYXJzZXJzIHN1Y2ggYXMgYGZhaWxgIGFuZCBgZmFpbEZhdGFsbHlgLlxuICAgKi9cbiAgR2VuZXJpYzogJ2dlbmVyaWMnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXJyb3Igd2l0aGluIGFub3RoZXIgZXJyb3IuIFRoaXMgaXNcbiAgICogZ2VuZXJhbGx5IHVzZWQgZm9yIGFuIGVycm9yIHRoYXQgY2F1c2VkIGJhY2t0cmFja2luZywgd2hlcmUgdGhlXG4gICAqIHBhcmVudCBlcnJvciBpcyByZXBvcnRlZCBhZnRlciBiYWNrdHJhY2tpbmcuXG4gICAqL1xuICBOZXN0ZWQ6ICduZXN0ZWQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYSBuZXN0ZWQgZXJyb3Igd2l0aCBpdHMgb3duIHNlcGFyYXRlIGVycm9yXG4gICAqIG1lc3NhZ2UuIFRoaXMgaXMgcHJvZHVjZWQgc3BlY2lmaWNhbGx5IGJ5IHRoZSBgY29tcG91bmRgIHBhcnNlci5cbiAgICovXG4gIENvbXBvdW5kOiAnY29tcG91bmQnLFxuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgc29tZSBvdGhlciBraW5kIG9mIGVycm9yIG1lc3NhZ2UgdG8gYmVcbiAgICogZGlzcGxheWVkIGluIGEgY3VzdG9tIGVycm9yIGZvcm1hdHRlci5cbiAgICovXG4gIE90aGVyOiAnb3RoZXInLFxufVxuXG4vKipcbiAqIEEgbGlzdCBvZiBlcnJvcnMuIFRoaXMgY2FuIGNvbnNpc3Qgb2YgYW55IGVycm9yIG1lc3NhZ2VzIHRoYXQgYXBwbHlcbiAqIHRvIGEgcGFydGljdWxhciBpbmRleCBvciBuZXN0ZWQvY29tcG91bmQgZXJyb3JzIHRoYXQgcG9pbnQgYmFjayB0b1xuICogdGhlIHNhbWUgaW5kZXggYnV0IGFwcGx5IHRvIGEgZGlmZmVyZW50IG9uZS5cbiAqIEB0eXBlZGVmIHsoTmVzdGVkRXJyb3J8Q29tcG91bmRFcnJvcnxMb2NhbEVycm9yKVtdfSBFcnJvckxpc3RcbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBhdCB0aGUgbG9jYXRpb24gcmVmZXJyZWQgdG8gYnkgdGhlIGN1cnJlbnRcbiAqIGNvbnRleHQuIFRoZSB0eXBlIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIHdoZXJlIHRoZSBsYWJlbCBzaG91bGQgYmVcbiAqIHBvc2l0aW9uZWQgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTG9jYWxFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoZSBlcnJvci5cbiAqL1xuXG4vKipcbiAqIEFuIGVycm9yIHRoYXQgaGFwcGVucyBpbiBhIGRpZmZlcmVudCBsb2NhdGlvbiB0aGFuIHRoZSBvbmUgcmVmZXJyZWRcbiAqIHRvIGJ5IHRoZSBjdXJyZW50IGNvbnRleHQuIFRoZSBtb3N0IHR5cGljYWwgcmVhc29uIGZvciB0aGlzIGhhcHBlbmluZ1xuICogaXMgYmFja3RyYWNraW5nOyB0aGUgbG9jYWwgZXJyb3IgY2FuIHRyYWNrIHRoZSBjdXJyZW50XG4gKiAocG9zdC1iYWNrdHJhY2spIGxvY2F0aW9uIHdoaWxlIHRoZSBuZXN0ZWQgZXJyb3IgcmV0YWlucyBpbmZvcm10aW9uXG4gKiBmcm9tIHRoZSBlcnJvciB0aGF0IGNhdXNlZCB0aGUgYmFja3RyYWNraW5nIGluIHRoZSBmaXJzdCBwbGFjZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXN0ZWRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLk5lc3RlZGAuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIEEgbmVzdGVkIGVycm9yIHRoYXQgaGFzIGl0cyBvd24gbGFiZWwuIFRoaXMgaXMgc2ltcGx5IGZvciBwcm9kdWNpbmdcbiAqIG5pY2VyIGVycm9yIG1lc3NhZ2VzOyB0aGlzIGVycm9yIGlzIHR5cGljYWxseSBvbmx5IHByb2R1Y2VkIGJ5IHRoZVxuICogYGJhY2tsYWJlbGAgcGFyc2VyLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbXBvdW5kRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5Db21wb3VuZGAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXNzb2NpYXRlZCB3aXRoIHRoaXMgZXJyb3IuIFRoaXNcbiAqICAgICBpcyB0eXBpY2FsbHkgdXNlZCBhcyBhIHNvcnQgb2YgaGVhZGVyIG92ZXIgdGhlIG5lc3RlZCBtZXNzYWdlc1xuICogICAgIHVuZGVyIHRoaXMgY29tcG91bmQgZXJyb3IuXG4gKiBAcHJvcGVydHkge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgdGltZSB0aGF0IHRoZSBvcmlnaW5hbFxuICogICAgIGVycm9yIG9jY3VycmVkLiBUaGlzIGNhbiAoYW5kIHByb2JhYmx5IHdpbGwpIGJlIGRpZmZlcmVudCBmcm9tXG4gKiAgICAgdGhlIGN1cnJlbnQgY29udGV4dC5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIGxvY2F0aW9uIGRlcml2ZWQgZnJvbSBgY3R4YC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgZXJyb3IgbGlzdCBjb250YWluaW5nIG9uZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuRXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuIEl0IGlzIGV4cGVjdGVkIHRoYXQgb25lIGFycmF5IG9mXG4gKiBlcnJvciBtZXNzYWdlcyBtYXkgaGF2ZSBtdWx0aXBsZSB1bmV4cGVjdGVkIGVycm9ycywgYnV0IG9ubHkgdGhlXG4gKiBmaXJzdCB3aWxsIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZm91bmQgYnV0IHdhc1xuICogICAgIG5vdCBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIHVuZXhwZWN0ZWQgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5VbmV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBnZW5lcmljIGVycm9yIG1lc3NhZ2UuIFRoZXJlIGNhbiBiZSBtb3JlIHRoYW4gb25lIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgaW4gYW4gYXJyYXkgb2YgZXJyb3IgbWVzc2FnZXMsIGJ1dCBvbmx5IHRoZSBmaXJzdCB3aWxsXG4gKiBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgZ2VuZXJpYyBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBnZW5lcmljIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmljKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuR2VuZXJpYywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG90aGVyIGVycm9yLiBUaGVzZSBlcnJvcnMgYXJlIG5vdCBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHRcbiAqIGZvcm1hdHRlciBhdCBhbGwgYW5kIGFyZSBvbmx5IHVzZWZ1bCBmb3IgY3VzdG9tIGZvcm1hdHRlcnMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBvdGhlciBlcnJvcidzIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBwYXJzZSBlcnJvciBvZiB0aGUgb3RoZXIgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG90aGVyKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuT3RoZXIsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5lc3RlZCBlcnJvci4gVGhpcyB0YWtlcyBhbiBlcnJvciBsaXN0IGFuZCB3cmFwcyBpdCB3aXRoXG4gKiBjb250ZXh0IGluZm9ybWF0aW9uLiBJZiB0aGUgc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlXG4gKiBuZXN0ZWQgZXJyb3IsIHRoYXQgZXJyb3IgaXMgc2ltcGx5IHJldHVybmVkOyBhIHNpbmdsZSBuZXN0ZWQgZXJyb3JcbiAqIHdpbGwgbm90IGJlIG5lc3RlZCBpbiBhbm90aGVyIG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIG5lc3RlZCBlcnJvclxuICogICAgIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tOZXN0ZWRFcnJvcl19IEEgbmV3IG5lc3RlZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lc3RlZChjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gZXJyb3JzXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuTmVzdGVkLCBjdHgsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgY29tcG91bmQgZXJyb3IuIFRoaXMgd3JhcHMgYW4gZXJyb3IgbGlzdCBqdXN0IGFzIGFcbiAqIG5lc3RlZCBlcnJvciBkb2VzLCBleGNlcHQgaXQgYWxzbyBhdHRhY2hlcyBhIG1lc3NhZ2UgdG8gaXQuIElmIHRoZVxuICogc3VwcGxpZWQgZXJyb3IgbGlzdCBpcyBqdXN0IGEgc2luZ2xlIG5lc3RlZCBlcnJvciwgaXRzIGluZm9ybWF0aW9uIGlzXG4gKiB1c2VkIHRvIGNyZWF0ZSBhIG5ldyBjb21wb3VuZCBlcnJvciB3aXRob3V0IGFueSBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGF0dGFjaGVkIHRvIHRoZSBuZXN0ZWQgZXJyb3IuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBhdCB0aGUgcG9pbnQgd2hlcmUgdGhlIGNvbXBvdW5kXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7W0NvbXBvdW5kRXJyb3JdfSBBIG5ldyBjb21wb3VuZCBlcnJvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvdW5kKGxhYmVsLCBjdHgsIGVycm9ycykge1xuICByZXR1cm4gZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBlcnJvcnNbMF0udHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZFxuICAgID8gW3tcbiAgICAgIHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCxcbiAgICAgIGN0eDogZXJyb3JzLmN0eCxcbiAgICAgIGVycm9yczogZXJyb3JzLmVycm9ycyxcbiAgICAgIGxhYmVsLFxuICAgIH1dXG4gICAgOiBbeyB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsIGN0eCwgZXJyb3JzLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIE1lcmdlcyB0d28gYXJyYXlzIG9mIGVycm9ycy5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczE9W11dIFRoZSBmaXJzdCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9yczI9W11dIFRoZSBzZWNvbmQgYXJyYXkgb2YgZXJyb3JzLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgYXJyYXkgY29udGFpbmluZyBhbGwgb2YgdGhlIGVycm9ycyBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHR3byBhcnJheXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShlcnJvcnMxID0gW10sIGVycm9yczIgPSBbXSkge1xuICByZXR1cm4gWy4uLmVycm9yczEsIC4uLmVycm9yczJdXG59XG5cbi8vICNyZWdpb24gRm9ybWF0dGluZyB1dGlsaXR5IGZ1bmN0aW9uc1xuXG4vLyAjcmVnaW9uIFR5cGVkZWZzIGZvciBvYmplY3QgcmV0dXJuIHR5cGVzXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGV2YWx1YXRpb24gb2YgYSBieXRlIHRvIHNlZVxuICogaWYgaXQgaXMgKG9yIHN0YXJ0cykgYSBuZXdsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5ld2xpbmVJbmZvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IG5ld2xpbmUgSW5kaWNhdGVzIHdoZXRoZXIgdGhlIHNjYW5uZWQgYnl0ZSB3YXNcbiAqICAgICBlaXRoZXIgYSBuZXdsaW5lIG9yIHRoZSBiZWdpbm5pbmcgb2YgYSBtdWx0aS1ieXRlIG5ld2xpbmUuXG4gKiBAcHJvcGVydHkge251bWJlcn0gc2tpcCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRoYXQgdGhlIG5leHQgY2hhcmFjdGVyXG4gKiAgICAgY29udGFpbnMuIFRoaXMgaXMgcmV0dXJuZWQgYWNjdXJhdGVseSB3aGV0aGVyIG9yIG5vdCB0aGF0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGEgbmV3bGluZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydCBhbmQgZW5kIGluZGV4ZXMgb2YgYVxuICogbGluZSB3aXRoaW4gYSBkYXRhIHZpZXcsIGFzIHdlbGwgYXMgdGhlIG51bWJlciBvZiB0aGF0IGxpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTGluZUluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBmaXJzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGFsd2F5cyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIHRoZSBkYXRhIHZpZXcgaXRzZWxmLCBvciB0aGUgZmlyc3QgYnl0ZSBhZnRlciBhIG5ld2xpbmVcbiAqICAgICBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gZW5kIFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyBvZiB0aGUgbGFzdFxuICogICAgIGJ5dGUgb2YgdGhlIGxhc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBlaXRoZXIgdGhlIGxhc3RcbiAqICAgICBieXRlIGluIHRoZSBkYXRhIHZpZXcgb3IgdGhlIGJ5dGUgaW1tZWRpYXRlbHkgcHJlY2VkaW5nIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgYSBuZXdsaW5lIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lbm8gVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIGJvdW5kZWQgYnlcbiAqICAgICBpbmRleGVzIGBzdGFydGAgYW5kIGBlbmRgLiBUaGlzIG51bWJlciBpcyAxLWJhc2VkLCBhcyBpdCBpcyB1c2VkXG4gKiAgICAgZm9yIGRpc3BsYXkgb2YgYW4gZXJyb3IgcG9zaXRpb24gaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyB0aGUgYWRqdXN0ZWQgbGluZSBhbmQgY29sdW1uIGluZGV4IHRoYXQgcmVzdWx0c1xuICogZnJvbSB0YWIgZXhwYW5zaW9uLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFRhYmJlZExpbmVJbmZvXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbGluZSBUaGUgc3RyaW5nIG9mIHRleHQgcmVwcmVzZW50aW5nIG9uZSBsaW5lLFxuICogICAgIHdpdGggdGFiIGNoYXJhY3RlcnMgcmVwbGFjZWQgYnkgdGhlIGFwcHJvcHJpYXRlIG51bWJlciBvZiBzcGFjZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sSW5kZXggVGhlIGNoYXJhY3RlciBpbmRleCBwYXNzZWQgaW50byB0aGVcbiAqICAgICBmdW5jdGlvbiwgYWRqdXN0ZWQgYnkgdGhlIGRpZmZlcmVuY2UgaW4gd2lkdGggYmV0d2VlbiB0YWJzIGFuZFxuICogICAgIHRoZSBzcGFjZXMgdXNlZCB0byByZXBsYWNlIHRoZW0uXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFuaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBjb2x1bW4gaW5kZXggYW5kIGxpbmVcbiAqIGxlbmd0aCBhZnRlciBhY2NvdW50aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29sSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gY29sbm8gVGhlIGFkanVzdGVkIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlclxuICogICAgIHBvaW50ZWQgdG8gYnkgdGhlIGBjaGFySW5kZXhgIHBhcmFtZXRlci4gVGhpcyBpcyBhZGp1c3RlZCBieSBhbnlcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdGhhdCBtYXkgYXBwZWFyIGluIHRoZSBsaW5lIGFuZCBpcyB0dXJuZWRcbiAqICAgICBpbnRvIGEgMS1iYXNlZCBudW1iZXIgZm9yIGRpc3BsYXkgaW4gdGhlIGVycm9yIG1lc3NhZ2UuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvclxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhpcyBpcyByZXR1cm5lZCBzb2xlbHkgdG8gYmUgcGFzc2VkIGludG9cbiAqICAgICBvdGhlciBmdW5jdGlvbnMgd2hvIHRoZW4gd29uJ3QgaGF2ZSB0byByZWNhbGN1bGF0ZSB0aGUgd2lkdGggb2ZcbiAqICAgICB0aGUgbGluZSBhY2NvdW50aW5nIGZvciB0aG9zZSBzYW1lIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqL1xuXG4vKipcbiAgKiBPYmplY3QgY29udGFpbmluZyBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycy5cbiAgKlxuICAqIEB0eXBlZGVmIHtvYmplY3R9IFBvc2l0aW9uXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmUgVGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG8gYnlcbiAgKiAgICAgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldy5cbiAgKiBAcHJvcGVydHkge251bWJlcn0gY29sdW1uIFRoZSBjb2x1bW4gbnVtYmVyIG9mIHRoZSBieXRlIHBvaW50ZWQgdG9cbiAgKiAgICAgYnkgdGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldywgYWRqdXN0ZWQgZm9yIGNoYXJhY3RlciB3aWR0aCBhbmRcbiAgKiAgICAgdGFiIHNpemUuXG4gICovXG5cbi8qKlxuICogQSBmdW5jdGlvbiBjYWxsZWQgYnkgYGZvcm1hdEVycm9yc2AgdG8gZG8gdGhlIGFjdHVhbCBmb3JtYXR0aW5nLiBBXG4gKiBkZWZhdWx0IGZvcm1hdHRlciBmdW5jdGlvbiBpcyBwcm92aWRlZCBidXQgY2FuIGJlIHJlcGxhY2VkIGlmXG4gKiBkZXNpcmVkLlxuICpcbiAqIEBjYWxsYmFjayBGb3JtYXR0ZXJcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGVycm9ycyBiZWluZyB1c2VkIHRvIGdlbmVyYXRlIHRoZVxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiBgdmlld2Agb2YgdGhlIGJ5dGUgd2hlcmUgdGhlXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gZGlzcGxheSB3aWR0aCBvZiB0aGUgbGluZSB3aGVyZVxuICogICAgIHRoZSBlcnJvciBvY2N1cnJlZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZVxuICogICAgIHRydW5jYXRlZCB3aXRoIGVsbGlwc2VzIGJlZm9yZSBhbmQvb3IgYWZ0ZXIuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIG11bHRpLWxpbmUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgY2hhcmFjdGVyIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgc3VwcGxpZWRcbiAqIHZpZXcgaXMgYSBuZXdsaW5lLiBBbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllcyBpcyByZXR1cm5lZDtcbiAqIGBuZXdsaW5lYCBpcyBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGF0IGNoYXJhY3RlciBpcyBhXG4gKiBuZXdsaW5lOyBgc2tpcGAgaXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgKGFuZCB0aGVyZWZvcmUgaG93IG1hbnlcbiAqIGJ5dGVzIHRvIHNraXAgdW50aWwgdGhlIG5leHQgY2hhcmFjdGVyIHRvIGNoZWNrKS5cbiAqXG4gKiBBbGwgVW5pY29kZSBuZXdsaW5lcyAoQ1IsIExGLCBGRiwgVlQsIE5FTCwgTFMsIGFuZCBQUykgYXJlIGhhbmRsZWQsXG4gKiBhbG9uZyB3aXRoIHRoZSBtdWx0aS1jaGFyYWN0ZXIgbmV3bGluZSBDUitMRi5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGludG8gYHZpZXdgIGluZGljYXRpbmcgdGhlIGJ5dGUgdG9cbiAqICAgICBjaGVjayB0byBzZWUgaWYgaXQncyBhIG5ld2xpbmUuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXdsaW5lSW5mb30gTmV3bGluZSBpbmZvcm1hdGlvbiBhYm91dCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNOZXdsaW5lKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoYnl0ZSA9PT0gMHgwYSB8fCBieXRlID09PSAweDBiIHx8IGJ5dGUgPT09IDB4MGMpIHtcbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChieXRlID09PSAweDBkKSB7XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcbiAgICAgIGlmIChieXRlID09PSAweDBkICYmIG5leHRCeXRlID09PSAweDBhKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAxIH1cbiAgfVxuXG4gIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuXG4gICAgaWYgKGJ5dGUgPT09IDB4YzIgJiYgbmV4dEJ5dGUgPT09IDB4ODUpIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDIgfVxuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDIpIHtcbiAgICAgIGNvbnN0IHRoaXJkQnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAyKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4ZTIgJiYgbmV4dEJ5dGUgPT09IDB4ODBcbiAgICAgICAgJiYgKHRoaXJkQnl0ZSA9PT0gMHhhOCB8fCB0aGlyZEJ5dGUgPT09IDB4YTkpKSB7XG4gICAgICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDMgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IG5ld2xpbmU6IGZhbHNlLCBza2lwOiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZyBpbmRleGVzIG9mIHRoZSBsaW5lIGluIHRoZSBnaXZlblxuICogdmlldyB0aGF0IGNvbnRhaW5zIHRoZSBieXRlIHBvaW50ZWQgYXQgYnkgYGluZGV4YC4gSXQgZG9lcyB0aGlzIGJ5XG4gKiBkZXRlcm1pbmluZyB3aGVyZSBuZXdsaW5lcyBhcmUgYW5kIHRoZW4gZmlndXJpbmcgb3V0IHdoaWNoIG9uZXMgY29tZVxuICogY2xvc2VzdCBiZWZvcmUgYW5kIGFmdGVyIHRoZSBpbmRleC4gVGhlIG51bWJlciBvZiBuZXdsaW5lcyB0aGF0IGNhbWVcbiAqIGJlZm9yZSB0aGUgaW5kZXggKGFuZCB0aGVyZWZvcmUgdGhlIGxpbmUgbnVtYmVyIG9mIHRoZSBsaW5lIHdpdGggdGhlXG4gKiBpbmRleCkgaXMgYWxzbyBjb3VudGVkLlxuICpcbiAqIFJldHVybnMgYW4gb2JqZWN0IHdpdGggdGhyZWUgcHJvcGVydGllczogYHN0YXJ0YCBpcyB0aGUgaW5kZXggb2YgdGhlXG4gKiBmaXJzdCBieXRlIG9mIHRoZSBsaW5lLCBgZW5kYCBpcyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgYnl0ZSBvZiB0aGVcbiAqIGxpbmUgKG5vdCBjb3VudGluZyB0aGUgbmV3bGluZSksIGFuZCBgbGluZW5vYCBpcyB0aGUgbGluZSBudW1iZXJcbiAqIHdoZXJlIHRoZSBpbmRleCBhcHBlYXJzLiBgbGluZW5vYCBpcyAxLWluZGV4ZWQgc2luY2UgaXQgaXMgbWVhbnQgZm9yXG4gKiBkaXNwbGF5IGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGxpbmVcbiAqICAgICBpbmRleCBpbmZvcm1hdGlvbiBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TGluZUluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmdcbiAqICAgICBpbmRleGVzIG9mIHRoZSBsaW5lIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpIHtcbiAgbGV0IHN0YXJ0ID0gMFxuICBsZXQgbGluZW5vID0gMSAvLyAxLWJhc2VkXG4gIGxldCBpID0gMFxuXG4gIHdoaWxlIChpIDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgY29uc3QgeyBuZXdsaW5lLCBza2lwIH0gPSBpc05ld2xpbmUoaSwgdmlldylcbiAgICBpZiAobmV3bGluZSkge1xuICAgICAgaWYgKGkgKyBza2lwID4gaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIHsgc3RhcnQsIGVuZDogaSAtIDEsIGxpbmVubyB9XG4gICAgICB9XG4gICAgICBsaW5lbm8rK1xuICAgICAgc3RhcnQgPSBpICsgc2tpcFxuICAgIH1cbiAgICBpICs9IHNraXBcbiAgfVxuICByZXR1cm4geyBzdGFydCwgZW5kOiB2aWV3LmJ5dGVMZW5ndGggLSAxLCBsaW5lbm8gfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGNoYXJhY3RlciBpbmRleCAoYXMgb3Bwb3NlZCB0byBieXRlIGluZGV4KSB3aXRoaW4gYVxuICogc2luZ2xlIGxpbmUgb2YgdGV4dCBvZiB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgdG8gYnkgYGluZGV4YCB3aXRoaW5cbiAqIGB2aWV3YC4gVGhlIGBzdGFydGAgcGFyYW1ldGVyIHNldHMgdGhlIGZpcnN0IGJ5dGUgb2YgYSBcImxpbmVcIiB3aXRoaW5cbiAqIHRoZSB2aWV3IGFuZCBjYW4gYmUgY2FsY3VsYXRlZCB3aXRoIHtAbGluayBnZXRMaW5lSW5kZXhlc30gYWJvdmUuXG4gKlxuICogSW4gbGluZXMgd2l0aCBvbmx5IHNpbmdsZS1ieXRlIGNoYXJhY3RlcnMsIHRoZSBjaGFyYWN0ZXIgaW5kZXggd2lsbFxuICogYWx3YXlzIGJlIHRoZSBzYW1lIGFzIGBpbmRleCAtIHN0YXJ0YC4gVGhlIHB1cnBvc2Ugb2YgdGhpcyBmdW5jdGlvblxuICogaXMgdG8gYWRqdXN0IHdoZW4gbXVsdGktYnl0ZSBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgaW4gYHZpZXdgIHdob3NlIGNoYXJhY3RlclxuICogICAgIGluZGV4IGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggb2YgdGhlIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBpbmRleCwgd2l0aGluIGEgc2luZ2xlIGxpbmUgb2YgdGV4dCwgb2YgdGhlXG4gKiAgICAgY2hhcmFjdGVyIHdob3NlIGZpcnN0IGJ5dGUgaXMgYmVpbmcgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydCkge1xuICBsZXQgY2hhckluZGV4ID0gMFxuICBsZXQgYnl0ZUluZGV4ID0gc3RhcnRcbiAgd2hpbGUgKGJ5dGVJbmRleCA8IGluZGV4ICYmIGJ5dGVJbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGJ5dGVJbmRleCArPSBuZXh0Q2hhcldpZHRoKGJ5dGVJbmRleCwgdmlldylcbiAgICBjaGFySW5kZXgrK1xuICB9XG4gIHJldHVybiBjaGFySW5kZXhcbn1cblxuLyoqXG4gKiBFeHBhbmRzIHRhYnMgaW50byBzcGFjZXMgYW5kIGNhbGN1bGF0ZXMgdGhlIGNvbHVtbiBpbmRleCBvZiB0aGVcbiAqIGluZGV4ZWQgY2hhcmFjdGVyIGFkanVzdGluZyBmb3IgdGhvc2Ugc3BhY2VzLiBUaGUgbnVtYmVyIG9mIHNwYWNlcyBpblxuICogZWFjaCB0YWIgY2FuIGJlIHNwZWNpZmllZCB3aXRoIGB0YWJTaXplYC5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzOiBgbGluZWAgaXMgdGhlXG4gKiBpbnB1dCBsaW5lIHdpdGggdGFicyBleHBhbmRlZCBpbnRvIHNwYWNlcywgYW5kIGBjb2xJbmRleGAgaXMgdGhlXG4gKiBpbmRleCBvZiB0aGUgY29sdW1uIHRoYXQgaGFzIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCBhdCBieSB0aGVcbiAqIGNoYXJhY3RlciBpbmRleC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY2hhckluZGV4IFRoZSBpbmRleCBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXRcbiAqICAgICB3aXRoaW4gdGhlIGxpbmUuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIHRhYmlmaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgVGhlIG1heGltdW0gbnVtYmVyIG9mIHNwYWNlcyB0aGF0IGNhbiByZXBsYWNlXG4gKiAgICAgYSB0YWIuIE5vdGUgdGhhdCB0YWJzIGFyZSB0cmVhdGVkIGFzIHN0b3BzOyB0aGV5IHdpbGwgYmUgb2ZcbiAqICAgICB2YXJ5aW5nIHNpemVzIHRoYXQgcmVzdWx0cyBpbiB0aGVtIGFsd2F5cyBlbmRpbmcgYXQgYSBjb2x1bW4gdGhhdFxuICogICAgIGlzIGEgbXVsdGlwbGUgb2YgYHRhYlNpemVgLlxuICogQHJldHVybnMge1RhYmJlZExpbmVJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbGluZSBhZnRlciByZXBsYWNpbmdcbiAqICAgICB0YWJzIHdpdGggc3BhY2VzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdGFiaWZ5KGNoYXJJbmRleCwgbGluZSwgdGFiU2l6ZSkge1xuICBjb25zdCB0YWJJbmRleGVzID0gW11cbiAgbGV0IHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgd2hpbGUgKHRhYk1hdGNoICE9PSBudWxsKSB7XG4gICAgdGFiSW5kZXhlcy5wdXNoKHRhYk1hdGNoLmluZGV4KVxuICAgIHRhYk1hdGNoID0gdGFiLmV4ZWMobGluZSlcbiAgfVxuXG4gIC8vIHJlcGxhY2UgZWFjaCB0YWIgd2l0aCB0aGUgY29yZWN0IG51bWJlciBvZiBzcGFjZXMsIHNoaWZ0aW5nIHRoZVxuICAvLyByZW1haW5pbmcgaW5kZXhlcyBieSB0aGF0IGFtb3VudFxuICBsZXQgb2Zmc2V0ID0gMFxuICBsZXQgcHJlSW5kZXhPZmZzZXQgPSAwXG4gIGxldCByZXN1bHQgPSBsaW5lXG5cbiAgZm9yIChjb25zdCB0YWJJbmRleCBvZiB0YWJJbmRleGVzKSB7XG4gICAgY29uc3QgYWN0dWFsSW5kZXggPSB0YWJJbmRleCArIG9mZnNldFxuICAgIGNvbnN0IHNwYWNlQ291bnQgPSB0YWJTaXplIC0gYWN0dWFsSW5kZXggJSB0YWJTaXplXG4gICAgaWYgKGFjdHVhbEluZGV4IDwgY2hhckluZGV4ICsgcHJlSW5kZXhPZmZzZXQpIHtcbiAgICAgIHByZUluZGV4T2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgfVxuICAgIG9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgYWN0dWFsSW5kZXgpICsgJyAnLnJlcGVhdChzcGFjZUNvdW50KVxuICAgICAgKyByZXN1bHQuc3Vic3RyaW5nKGFjdHVhbEluZGV4ICsgMSlcbiAgfVxuICByZXR1cm4geyBsaW5lOiByZXN1bHQsIGNvbEluZGV4OiBwcmVJbmRleE9mZnNldCArIGNoYXJJbmRleCB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgZmluYWwgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgdG9cbiAqIGJ5IHRoZSBjb2x1bW4gaW5kZXguIFRoaXMgY29sdW1uIG51bWJlciBpcyAxLWJhc2VkIChmb3IgZGlzcGxheSwgdGhlXG4gKiBzYW1lIGFzIHRoZSBsaW5lIG51bWJlciBmcm9tIGBnZXRMaW5lSW5kZXhlc2ApIGFuZCBpcyBhZGp1c3RlZCBmb3JcbiAqIHplcm8td2lkdGggY2hhcmFjdGVycyBzdWNoIGFzIGZvcm1hdHRpbmcgY2hhcmFjdGVycyBhbmQgbm9uLXNwYWNpbmdcbiAqIG1hcmtzLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IG9mIHR3byBwcm9wZXRpZXM6IGBjb2xub2AgaXMgdGhlXG4gKiAxLWluZGV4ZWQgY29sdW1uIG51bWJlciwgYW5kIGBsZW5ndGhgIGlzIHRoZSBsZW5ndGggb2YgdGhlIGxpbmVcbiAqIGFkanVzdGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGUgbGF0dGVyIGlzIHByb3ZpZGVkIHNvIGl0XG4gKiBkb2Vzbid0IGhhdmUgdG8gYmUgcmVjYWxjdWxhdGVkIGJ5IGBzaG93YC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gY29sSW5kZXggVGhlIGluZGV4IG9mIHRoZSBjb2x1bW4gd2l0aGluIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgY2hhcmFjdGVyIGJlaW5nIHBvaW50ZWQgYXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IHBvdGVudGlhbGx5IGNvbnRhaW5pbmdcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgdG8gYWNjb3VudCBmb3IuXG4gKiBAcmV0dXJucyB7Q29sSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgbGluZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSkge1xuICBsZXQgaW5kZXggPSBjb2xJbmRleFxuICBjb25zdCBtYXRjaGVzID0gW11cblxuICBsZXQgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB3aGlsZSAobWF0Y2ggIT09IG51bGwpIHtcbiAgICBtYXRjaGVzLnB1c2gobWF0Y2guaW5kZXgpXG4gICAgaWYgKG1hdGNoLmluZGV4IDwgaW5kZXgpIGluZGV4LS1cbiAgICBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBjb2xubzogaW5kZXggKyAxLCAvLyAxLWJhc2VkXG4gICAgbGVuZ3RoOiBjaGFyTGVuZ3RoKGxpbmUpIC0gbWF0Y2hlcy5sZW5ndGgsXG4gIH1cbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYSBzdHJpbmcgY29udGFpbmluZyBvbmUgbGluZSB0aGF0IGlzIHRoZSB0ZXh0IGF0IGFuZCBhcm91bmRcbiAqIHRoZSBjb2x1bW4gdG8gYmUgZGlzcGxheWVkLCBhbmQgb25lIGxpbmUgdGhhdCBpcyBhIGNhcmV0IHBvaW50aW5nIHRvXG4gKiB0aGF0IHBhcnRpY3VsYXIgY29sdW1uLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gYWRkcyBlbGxpcHNlcyBhcyBuZWVkZWQgdG8gdGhlIGZyb250IGFuZC9vciB0aGUgYmFjayBvZlxuICogdGhlIGxpbmUgaW4gb3JkZXIgdG8gZ2V0IHRoZSBjb2x1bW4gaW50byB0aGUgdmlzaWJsZSBhcmVhLCBiYXNlZCBvblxuICogdGhlIGBtYXhXaWR0aGAgb2YgdGhlIGxpbmUgdG8gZGlzcGxheS4gVGhlIGBsZW5ndGhgIHBhcmFtZXRlciBpcyB0aGVcbiAqIGBsZW5ndGhgIHJldHVybmVkIGJ5IGBnZXRDb2xOdW1iZXJgIGFuZCBpcyBoZXJlIGp1c3QgdG8gYXZvaWQgaGF2aW5nXG4gKiB0byByZWNhbGN1bGF0ZSBpdCBpbiB0aGlzIGZ1bmN0aW9uIHdoZW4gaXQgYWxyZWFkeSBuZWVkZWQgdG8gYmVcbiAqIGNhbGN1bGF0ZWQgaW4gdGhlIG90aGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3IgdGFicyBhbmRcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKiBAcGFyYW0ge251bWJlcn0gY29sbm8gVGhlIGNvbHVtbiBudW1iZXIgd2hlcmUgdGhlIGNhcmV0IHNob3VsZCBwb2ludC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgcG90ZW50aWFsbHkgdHJ1bmNhdGVkIGxpbmUgb2YgdGV4dCwgZm9sbG93ZWQgYnlcbiAqICAgICBhbm90aGVyIGxpbmUgY29udGFpbmluZyBhIGNhcmV0IHBvaW50aW5nIGF0IHRoZSBkZXNpZ25hdGVkXG4gKiAgICAgY29sdW1uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50ID0gMCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIC8vIEZpcnN0IGNhc2U6IHRoZSBsaW5lIGlzIHNob3J0ZXIgdGhhbiBtYXhXaWR0aC4gRGlzcGxheSB0aGUgbGluZVxuICAvLyB3aXRoIHRoZSBjYXJldCBwb3NpdGlvbmVkIGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggJiYgbGVuZ3RoIDw9IG1heFdpZHRoKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZX1cXG4ke3NwfSR7JyAnLnJlcGVhdChjb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBTZWNvbmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgdG8gYSBjaGFyYWN0ZXIgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuXG4gIC8vIERpc3BsYXkgdGhlIGZpcnN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBhZnRlciBpdCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBpZiAoY29sbm8gPD0gbWF4V2lkdGggLSAzKSB7XG4gICAgcmV0dXJuIGAke3NwfSR7bGluZS5zdWJzdHJpbmcoMCwgbWF4V2lkdGggLSAzKX0uLi5cXG4ke3NwfSR7XG4gICAgICAnICcucmVwZWF0KGNvbG5vIC0gMSlcbiAgICB9XmBcbiAgfVxuXG4gIC8vIFRoaXJkIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIGF0IGEgY2hhcmFjdGVyIHRoYXQgaXMgbm90IGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKVxuICAvLyBjaGFyYWN0ZXJzIGJ1dCBpcyBpbiB0aGUgbGFzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBEaXNwbGF5XG4gIC8vIHRoZSBsYXN0IHBhcnQgb2YgdGhlIGxpbmUgd2l0aCBgLi4uYCBiZWZvcmUgaXQsIGNhbGN1bGF0ZSBhIG5ld1xuICAvLyBwb3NpdGlvbiBmb3IgdGhlIGNhcmV0LCBhbmQgcG9zaXRpb24gaXQgYmVsb3cgdGhlIGxpbmUuXG4gIGlmIChjb2xubyA+PSBsZW5ndGggLSBtYXhXaWR0aCArIDMpIHtcbiAgICBjb25zdCBzdGFydCA9IGxlbmd0aCAtIG1heFdpZHRoICsgM1xuICAgIGNvbnN0IG5ld0NvbG5vID0gY29sbm8gLSAobGVuZ3RoIC0gbWF4V2lkdGgpXG4gICAgcmV0dXJuIGAke3NwfS4uLiR7bGluZS5zdWJzdHJpbmcoc3RhcnQpfVxcbiR7c3B9JHsnICcucmVwZWF0KG5ld0NvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIEZpbmFsIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIG1heFdpZHRoIC0gMyBhbmQgdGhlIGNhcmV0XG4gIC8vIGRvZXMgbm90IHBvaW50IHRvIGEgY2hhcmFjdGVyIHdpdGhpbiBlaXRoZXIgdGhlIGZpcnN0IG9yIGxhc3RcbiAgLy8gKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gU2hpZnQgdGhlIGxpbmUgdG8gbWFrZSB0aGUgY2FyZXQgcG9pbnRcbiAgLy8gYXQgdGhlIG1pZGRsZSBvZiBpdCwgYWRkIGAuLi5gIHRvIHRoZSBzdGFydCAqYW5kKiBlbmQsIGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGNvbnN0IHN0YXJ0ID0gY29sbm8gLSAxIC0gTWF0aC5jZWlsKG1heFdpZHRoIC8gMikgKyAzXG4gIGNvbnN0IGVuZCA9IGNvbG5vIC0gMSArIE1hdGguZmxvb3IobWF4V2lkdGggLyAyKSAtIDNcbiAgcmV0dXJuIGAke3NwfS4uLiR7XG4gICAgbGluZS5zdWJzdHJpbmcoc3RhcnQsIGVuZClcbiAgfS4uLlxcbiR7c3B9JHtcbiAgICAnICcucmVwZWF0KE1hdGguY2VpbChtYXhXaWR0aCAvIDIpKVxuICB9XmBcbn1cblxuLyoqXG4gKiBGb3JtYXRzIGEgc2V0IG9mIG5lc3RlZCAob3IgY29tcG91bmQpIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIEBwYXJhbSB7KE5lc3RlZEVycm9yW118Q29tcG91bmRFcnJvcltdKX0gbmVzdGVkcyBBbiBhcnJheSBvZiBlaXRoZXJcbiAqICAgICBuZXN0ZWQgb3IgY29tcG91bmQgZXJyb3JzIHRvIGZvcm1hdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmUgdGFiXG4gKiAgICAgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRlbnQgVGhlIG51bWJlciBvZiBzcGFjZXMgdG8gaW5kZW50IHRoZSBlcnJvclxuICogICAgIG1lc3NhZ2UuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIG5lc3RlZCBlcnJvciBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBmb3JtYXROZXN0ZWQobmVzdGVkcywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCkge1xuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuICBjb25zdCBuZXN0ZWRNc2dzID0gbmVzdGVkcy5tYXAobiA9PiB7XG4gICAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gbi5jdHhcbiAgICBjb25zdCBsYWJlbCA9IG4ubGFiZWxcbiAgICAgID8gYFxcbiR7c3B9Q291bGQgbm90IHBhcnNlICR7bi5sYWJlbH0gYmVjYXVzZTpcXG5cXG5gXG4gICAgICA6IGBcXG4ke3NwfVRoZSBwYXJzZXIgYmFja3RyYWNrZWQgYWZ0ZXI6XFxuXFxuYFxuICAgIHJldHVybiBsYWJlbCArIGZvcm1hdChuLmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQgKyAyKVxuICB9KVxuICByZXR1cm4gbmVzdGVkTXNncy5qb2luKCcnKVxufVxuXG4vKipcbiAqIEVuc3VyZXMgdGhhdCBhIHN0cmluZyBlbmRzIHdpdGggYSBjZXJ0YWluIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgc3RyaW5nIHRoYXQgaXMgc3VwcG9zZWQgdG8gaGF2ZSBhIGNlcnRhaW5cbiAqICAgICBudW1iZXIgb2YgbmV3bGluZXMgYXQgdGhlIGVuZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBidXQgd2l0aCBgY291bnRgIG5ld2xpbmVzIGF0IHRoZVxuICogICAgIGVuZC5cbiAqL1xuZnVuY3Rpb24gZW5zdXJlTmV3bGluZXModGV4dCwgY291bnQpIHtcbiAgbGV0IHJlc3VsdCA9IHRleHRcbiAgd2hpbGUgKHJlc3VsdFtyZXN1bHQubGVuZ3RoIC0gMV0gPT09ICdcXG4nKSB7XG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCByZXN1bHQubGVuZ3RoIC0gMSlcbiAgfVxuICByZXR1cm4gcmVzdWx0ICsgJ1xcbicucmVwZWF0KGNvdW50KVxufVxuXG4vKipcbiAqIFRoZSBkZWZhdWx0IGZvcm1hdHRlciBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgc3RyaW5nIHRoYXQgaGFzIHRoZSBmb2xsb3dpbmcgcGFydHM6XG4gKlxuICogMS4gQSBwb3NpdGlvbiBsaW5lIHRoYXQgZ2l2ZXMgdGhlIGxpbmUgbnVtYmVyIGFuZCBjb2x1bW4gbnVtYmVyIHdoZXJlXG4gKiAgICB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAyLiBBIHZpc3VhbCByZXByZXNlbnRhdGlvbiBvZiB0aGUgZXJyb3IgbG9jYXRpb24uIFRoaXMgcGFydCBnZW5lcmF0ZXNcbiAqICAgIHR3byBsaW5lcyBpbiB0aGUgZXJyb3IgbWVzc2FnZS4gVGhlIGZpcnN0IGlzIGVpdGhlciB0aGUgZW50aXJlXG4gKiAgICBpbnB1dCBsaW5lIG9yLCBpZiB0aGF0J3MgdG9vIGxvbmcsIGEgcG9ydGlvbiBvZiB0aGUgaW5wdXQgbGluZVxuICogICAgc3RhcnRlZCBhbmQvb3IgZW5kZWQgd2l0aCBlbGxpcHNlcyB0aGF0IGNvbnRhaW5zIHRoZSBlcnJvclxuICogICAgbG9jYXRpb24uIFRoZSBzZWNvbmQgaXMgYSBjYXJldCBwb3NpdGlvbmVkIHVuZGVybmVhdGggdGhlIGxvY2F0aW9uXG4gKiAgICBpbiB0aGUgZmlyc3QgbGluZSB0aGF0IHNob3dzIGV4YWN0bHkgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMy4gVGhlIGZpcnN0IHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSwgaWYgYW55LlxuICogNC4gQWxsIG9mIHRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlcyAoaWYgYW55KSwgc2VwYXJhdGVkIGJ5ICdvcicgYW5kXG4gKiAgICBjb21tbWFzIGFzIGFwcHJvcHJpYXRlIGZvciB0aGUgbnVtYmVyIG9mIG1lc3NhZ2VzLlxuICogNS4gVGhlIGZpcnN0IG9mIHRoZSBnZW5lcmljIG1lc3NhZ2VzLCBpZiBhbnkuXG4gKlxuICogVGhlIHBvc2l0aW9uIG9mIHRoZSBlcnJvciBpcyBpbmRpY2F0ZWQgYnkgdGhlIGBpbmRleGAgcGFyYW1ldGVyLFxuICogd2hpY2ggaXMgdGhlIGluZGV4IHdpdGhpbiB0aGUgYXJyYXkgb2YgYnl0ZXMgaW4gYHZpZXdgIHdoZXJlIHRoZVxuICogZXJyb3Igb2NjdXJyZWQuIFRoZSBjYWxjdWxhdGlvbiBvZiBsaW5lIGFuZCBjb2x1bW4gbnVtYmVyIGZyb20gdGhpc1xuICogZmxhdCBhcnJheSBvZiBieXRlcyB0YWtlcyB0aGUgZm9sbG93aW5nIGludG8gYWNjb3VudDpcbiAqXG4gKiAqIE11bHRpLWJ5dGUgY2hhcmFjdGVycyAoZXZlcnl0aGluZyBpcyBVVEYtOCBhd2FyZSwgc28gY2hhcmFjdGVycyBjYW5cbiAqICAgYmUgMSwgMiwgMywgb3IgNCBieXRlcyBsb25nKVxuICogKiBNdWx0aS1jaGFyYWN0ZXIgYW5kIHNpbmdsZS1jaGFyYWN0ZXIgbXVsdGktYnl0ZSBsaW5lIGVuZGluZ3NcbiAqICogVGFicywgd2hpY2ggYXJlIGV4cGFuZGVkIGludG8gYSBudW1iZXIgb2Ygc3BhY2VzIHNldCBieSB0aGVcbiAqICAgYHRhYlNpemVgIHBhcmFtZXRlclxuICogKiBaZXJvLXdpZHRoIGNoYXJhY3RlcnMsIHN1Y2ggYXMgemVyby13aWR0aCBzcGFjZXMgYW5kIGpvaW5lcnMsIFJUTFxuICogICBvciBMVFIgZm9ybWF0dGluZyBjaGFyYWN0ZXJzLCBhbmQgZGlhY3JpdGljcyAoSGVicmV3IG9yIFRoYWkgdm93ZWxcbiAqICAgbWFya3MsIHVtbGF1dHMgb3ZlciBMYXRpbiBjaGFyYWN0ZXJzLCBldGMuKVxuICpcbiAqIFRoZSBvdXRwdXQgaXMgYSBzaW5nbGUgc3RyaW5nIHRoYXQgY29udGFpbnMgdGhlIDUgZWxlbWVudHMgYWJvdmUuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHR3byBsaW5lcyBvZiBjb2RlIHVzZXMgYHN0cmluZ1RvVmlld2AsIGFuIGludGVybmFsXG4gKiB1dGlsaXR5IGZ1bmN0aW9uIHRoYXQsIGFzIGl0cyBuYW1lIHN1Z2dlc3RzLCB0dXJucyBhIHN0cmluZyBpbnRvIGFcbiAqIFVURi04IGRhdGEgdmlldy4gSXQncyBjYWxsZWQgYnkgYHBhcnNlYCBpdHNlbGYsIHNvIGluIHJlYWwgd29ybGRcbiAqIHVzYWdlLCBpdCdzIG5vdCBuZWNlc3NhcnkgdG8ga25vdy5cbiAqXG4gKiBgYGBcbiAqIGNvbnN0IHZpZXcgPSBzdHJpbmdUb1ZpZXcoJ1xcdE9ub21hdG9wb2VpYVxcdFxcdFxcdFxcdOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4hycpXG4gKiBjb25zdCBtZXNzYWdlID0gZm9ybWF0KFtleHBlY3RlZCgnYSBkaWdpdCcpXSwgMjksIHZpZXcsIDQsIDcyKVxuICogYGBgXG4gKlxuICogRnJvbSB0aGlzIGNhbGwgdG8gYGZvcm1hdGAsIHRoZSBmb2xsb3dpbmcgbXVsdGktbGluZSBzdHJpbmcgd2lsbCBiZVxuICogcHJvZHVjZWQ6XG4gKlxuICogYGBgXG4gKiBQYXJzZSBlcnJvciBhdCAobGluZSAxLCBjb2x1bW4gMzcpOlxuICpcbiAqICAgICBPbm9tYXRvcG9laWEgICAgICAgICAgICAgICAg4LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBeXG4gKiBFeHBlY3RlZCBhIGRpZ2l0XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0byBiZSBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IGluIHRoZSB2aWV3IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZXRlcm1pbmUgd2hlcmVcbiAqICAgICB0YWIgc3RvcHMgbGF5LlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aD03Ml0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRlbnQ9MF0gVGhlIG51bWJlciBvZiBzcGFjZXMgdGhlIG1lc3NhZ2Ugc2hvdWxkIGJlXG4gKiAgICAgaW5kZW50ZWQuIFRoaXMgc2hvdWxkIGJlIDAgYW5kIGluY3JlYXNlZCBvbmx5IGZvciBuZXN0ZWQgZXJyb3JzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KFxuICBlcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplID0gOCwgbWF4V2lkdGggPSA3MiwgaW5kZW50ID0gMCxcbikge1xuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBsZW5ndGggfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICBjb25zdCBwb3NpdGlvbiA9IGAke3NwfVBhcnNlIGVycm9yIGF0IChsaW5lICR7bGluZW5vfSwgY29sdW1uICR7Y29sbm99KTpgXG4gIGNvbnN0IGRpc3BsYXkgPSBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGdlbmVyaWMgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuR2VuZXJpYylcbiAgY29uc3QgdW5leHBlY3RlZCA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5VbmV4cGVjdGVkKVxuICBjb25zdCBleHBlY3RlZCA9IGNvbW1hU2VwYXJhdGUoXG4gICAgZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuRXhwZWN0ZWQpXG4gICAgICAubWFwKGVycm9yID0+IGVycm9yLmxhYmVsKSxcbiAgKVxuXG4gIGNvbnN0IG5lc3RlZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLk5lc3RlZClcbiAgY29uc3QgY29tcG91bmQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5Db21wb3VuZClcblxuICBjb25zdCB1bmV4cE1zZyA9IHVuZXhwZWN0ZWQgPyBgJHtzcH1VbmV4cGVjdGVkICR7dW5leHBlY3RlZC5sYWJlbH1cXG5gIDogJydcbiAgY29uc3QgZXhwTXNnID0gZXhwZWN0ZWQubGVuZ3RoID8gYCR7c3B9RXhwZWN0ZWQgJHtleHBlY3RlZH1cXG5gIDogJydcbiAgY29uc3QgZ2VuZXJpY01zZyA9IGdlbmVyaWMgPyBgJHtzcH0ke2dlbmVyaWMubGFiZWx9XFxuYCA6ICcnXG5cbiAgY29uc3QgbmVzdGVkTXNnID0gZm9ybWF0TmVzdGVkKG5lc3RlZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgY29tcG91bmRNc2cgPSBmb3JtYXROZXN0ZWQoY29tcG91bmQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG5cbiAgY29uc3QgdW5rbm93bk1zZyA9IGVycm9ycy5sZW5ndGggPT09IDAgPyBgJHtzcH1Vbmtub3duIGVycm9yKHMpXFxuYCA6ICcnXG4gIGNvbnN0IGVvZk1zZyA9IGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gYCR7c3B9Tm90ZTogZmFpbHVyZSBvY2N1cnJlZCBhdCB0aGUgZW5kIG9mIGlucHV0XFxuYCA6ICcnXG5cbiAgcmV0dXJuIGVuc3VyZU5ld2xpbmVzKFxuICAgIGAke3Bvc2l0aW9ufVxcblxcbiR7ZGlzcGxheX1cXG4ke3VuZXhwTXNnfSR7ZXhwTXNnfSR7Z2VuZXJpY01zZ30ke3Vua25vd25Nc2d9YFxuICAgICAgKyBgJHtlb2ZNc2d9JHtjb21wb3VuZE1zZ30ke25lc3RlZE1zZ31gLFxuICAgIDIsXG4gIClcbn1cblxuLy8gI2VuZHJlZ2lvblxuXG4vKipcbiAqIEFjY2VwdHMgYSBwYXJzZXIgY29udGV4dCBhbmQgcHJvZHVjZXMgYW4gZXJyb3IgbWVzc2FnZSBmcm9tIGl0LlxuICpcbiAqIEEgZGVmYXVsdCBmb3JtYXR0ZXIgaXMgcHJvdmlkZWQgYnV0IGFuIGFsdGVybmF0ZSBvbmUgY2FuIGJlIHBhc3NlZFxuICogaW4uIFRoZSBzYW1lIGdvZXMgZm9yIHRhYiBzaXplICh1c2VkIHRvIGV4cGFuZCB0YWJzIGluIHBhcnNlZCB0ZXh0O1xuICogZGVmYXVsdHMgdG8gOCBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpIGFuZCBtYXggd2lkdGggKGZvciB0aGUgZXJyb3JcbiAqIG1lc3NhZ2UgaXRzZWxmOyBkZWZhdWx0cyB0byA3MiBpbiB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIpLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSByZXBseSByZXR1cm5lZCBieSB0aGUgcGFyc2VyIHdoZW4gdGhlIGVycm9yXG4gKiAgICAgaGFwcGVuZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemVdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmUgdGFic1xuICogICAgIHN0b3AuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge0Zvcm1hdHRlcn0gW2Zvcm1hdHRlcj1mb3JtYXRdIFRoZSBmdW5jdGlvbiB0byB3aGljaCB0aGVcbiAqICAgICBhY3R1YWwgZm9ybWF0dGluZyBpcyBkZWxlZ2F0ZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRFcnJvcnMocmVwbHksIHRhYlNpemUsIG1heFdpZHRoLCBmb3JtYXR0ZXIgPSBmb3JtYXQpIHtcbiAgY29uc3QgW2N0eCwgcmVzdWx0XSA9IHJlcGx5XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICByZXR1cm4gZm9ybWF0dGVyKHJlc3VsdC5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aClcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBwb3NpdGlvbiBvZiB0aGUgbmV4dCBieXRlIG9mIHRoZSBzdXBwbGllZCBjb250ZXh0LiBUaGVcbiAqIHBvc2l0aW9uIGlzIGFuIG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmAgcHJvcGVydGllcyB0aGF0IGFyZVxuICogdGhlIDEtYmFzZWQgbGluZSBhbmQgY29sdW1uIG51bWJlcnMgb2YgdGhlIGJ5dGUgYXQgdGhlIGNvbnRleHQnc1xuICogaW5kZXggd2l0aGluIHRoZSBjb250ZXh0J3MgZGF0YSB2aWV3LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHdob3NlIGN1cnJlbnQgcG9zaXRpb24gaXMgYmVpbmdcbiAqICAgICBjYWxjdWxhdGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplPThdIEEgbnVtYmVyIHdob3NlIG11bHRpcGxlcyBkZWZpbmUgd2hlcmVcbiAqICAgICB0YWJzIHN0b3AuIFRoZSBjdXJyZW50IHBvc2l0aW9uJ3MgY29sdW1uIG51bWJlciBpcyBhZGp1c3RlZCBiYXNlZFxuICogICAgIG9uIHRoaXMgcGFyYW1ldGVyIHdoZW4gdGFiIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKiBAcmV0dXJucyB7UG9zaXRpb259IEEgdHdvLXByb3BlcnR5IG9iamVjdCB3aXRoIGBsaW5lYCBhbmQgYGNvbHVtbmBcbiAqICAgICBwcm9wZXJ0aWVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb24oY3R4LCB0YWJTaXplID0gOCkge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgXyB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIHJldHVybiB7IGxpbmU6IGxpbmVubywgY29sdW1uOiBjb2xubyB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSU1xuXG5leHBvcnQge1xuICBhbHBoYSxcbiAgYW55LFxuICBjaGFyLFxuICBjaGFySSxcbiAgZGlnaXQsXG4gIGVvZixcbiAgaGV4LFxuICBsZXR0ZXIsXG4gIGxvd2VyLFxuICBub25lb2YsXG4gIG9jdGFsLFxuICBvbmVvZixcbiAgcmFuZ2UsXG4gIHNhdGlzZnksXG4gIHVwcGVyLFxufSBmcm9tICcuL3BhcnNlcnMvY2hhcidcbmV4cG9ydCB7XG4gIGFsd2F5cyxcbiAgZmFpbCxcbiAgZmF0YWwsXG59IGZyb20gJy4vcGFyc2Vycy9taXNjJ1xuZXhwb3J0IHtcbiAgYWxwaGFVLFxuICBsZXR0ZXJVLFxuICBsb3dlclUsXG4gIG5ld2xpbmUsXG4gIG5ld2xpbmVVLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlVSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICBzcGFjZXMxVSxcbiAgc3BhY2VzVSxcbiAgdXBwZXJVLFxufSBmcm9tICcuL3BhcnNlcnMvcmVnZXgnXG5leHBvcnQge1xuICBhbGwsXG4gIGFueVN0cmluZyxcbiAgc3RyaW5nLFxuICBzdHJpbmdJLFxufSBmcm9tICcuL3BhcnNlcnMvc3RyaW5nJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gQ09NQklOQVRPUlNcblxuZXhwb3J0IHtcbiAgYWx0LFxuICBkZWYsXG4gIGVtcHR5LFxuICBub3QsXG4gIG9wdCxcbiAgcGVlayxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZSdcbmV4cG9ydCB7XG4gIGFwcGx5QixcbiAgYXR0ZW1wdCxcbiAgYmV0d2VlbkIsXG4gIGJsb2NrQixcbiAgY2hhaW5CLFxuICBsZWZ0QixcbiAgcGlwZUIsXG4gIHJlcGVhdEIsXG4gIHJpZ2h0QixcbiAgc2VxQixcbiAgdW50aWxCLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2JhY2t0cmFja2luZydcbmV4cG9ydCB7XG4gIGFwcGx5LFxuICBjaGFpbixcbiAgY29tcGFjdCxcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIG1hcCxcbiAgbnRoLFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICB2YWx1ZSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jaGFpbmluZydcbmV4cG9ydCB7XG4gIGFzc29jMUwsXG4gIGFzc29jMVIsXG4gIGFzc29jTCxcbiAgYXNzb2NSLFxuICBiZXR3ZWVuLFxuICBibG9jayxcbiAgZW5kLFxuICBlbmQxLFxuICBsZWZ0LFxuICBtYW55LFxuICBtYW55MSxcbiAgcGlwZSxcbiAgcmVwZWF0LFxuICByaWdodCxcbiAgc2VwLFxuICBzZXAxLFxuICBzZXEsXG4gIHNraXAsXG4gIHVudGlsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL3NlcXVlbmNlJ1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gUEFSU0VSIFRPT0xTIEFORCBVVElMSVRJRVNcblxuZXhwb3J0IHtcbiAgU3RhdHVzLFxuICBmYWlsUmVwbHksXG4gIGZhaWx1cmUsXG4gIGZhdGFsUmVwbHksXG4gIG9rUmVwbHksXG4gIHBhcnNlLFxuICBwYXJzZXIsXG4gIHJ1bixcbiAgc3RhdHVzLFxuICBzdWNjZWVkZWQsXG4gIHN1Y2Nlc3MsXG59IGZyb20gJy4vY29yZSdcbmV4cG9ydCB7XG4gIEVycm9yVHlwZSxcbiAgY29tcG91bmQsXG4gIGV4cGVjdGVkLFxuICBmb3JtYXRFcnJvcnMsXG4gIGdlbmVyaWMsXG4gIGdldFBvc2l0aW9uLFxuICBtZXJnZSxcbiAgbmVzdGVkLFxuICBvdGhlcixcbiAgdW5leHBlY3RlZCxcbn0gZnJvbSAnLi9lcnJvcidcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGV4cGVjdGVkIH0gZnJvbSAnLi9lcnJvcidcbmltcG9ydCB7IGNvbW1hU2VwYXJhdGUsIHF1b3RlIH0gZnJvbSAnLi91dGlsJ1xuXG5leHBvcnQgY29uc3Qgc3RyaW5ncyA9IHtcbiAgYWxwaGE6ICdhbiBhbHBoYW51bWVyaWMgY2hhcmFjdGVyJyxcbiAgYWxwaGFVOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbnk6ICdhbnkgY2hhcmFjdGVyJyxcbiAgYW55U3RyaW5nOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxuICBjaGFyOiBjID0+IHF1b3RlKGMpLFxuICBjaGFySTogYyA9PiBxdW90ZShjKSxcbiAgZGlnaXQ6ICdhIGRpZ2l0JyxcbiAgZW9mOiAnZW5kIG9mIGlucHV0JyxcbiAgaGV4OiAnYSBoZXhhZGVjaW1hbCBkaWdpdCcsXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcbiAgbGV0dGVyVTogJ2EgVW5pY29kZSBsZXR0ZXInLFxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXG4gIGxvd2VyVTogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgbmV3bGluZTogJ2EgbmV3bGluZScsXG4gIG5ld2xpbmVVOiAnYSBVbmljb2RlIG5ld2xpbmUnLFxuICBub25lb2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIG9jdGFsOiAnYW4gb2N0YWwgZGlnaXQnLFxuICBvbmVvZjogYXJyYXkgPT4gJ29uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzVTogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHNwYWNlczFVOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZVU6ICdhIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzdHJpbmc6IHN0ciA9PiBxdW90ZShzdHIpLFxuICBzdHJpbmdJOiBzdHIgPT4gcXVvdGUoc3RyKSxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXBwZXJVOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFscGhhVTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYVUpLFxuICBhbnk6IGV4cGVjdGVkKHN0cmluZ3MuYW55KSxcbiAgYW55U3RyaW5nOiBuID0+IGV4cGVjdGVkKHN0cmluZ3MuYW55U3RyaW5nKG4pKSxcbiAgY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXIoYykpLFxuICBjaGFySTogYyA9PiBleHBlY3RlZChzdHJpbmdzLmNoYXJJKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsZXR0ZXJVOiBleHBlY3RlZChzdHJpbmdzLmxldHRlclUpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIGxvd2VyVTogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlclUpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBuZXdsaW5lVTogZXhwZWN0ZWQoc3RyaW5ncy5uZXdsaW5lVSksXG4gIG5vbmVvZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lb2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICBvbmVvZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5vbmVvZihhcnJheSkpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZSksXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxuICBzcGFjZXNVOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlc1UpLFxuICBzcGFjZXMxVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxVSksXG4gIHNwYWNlVTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZVUpLFxuICBzdHJpbmc6IHN0ciA9PiBleHBlY3RlZChzdHJpbmdzLnN0cmluZyhzdHIpKSxcbiAgc3RyaW5nSTogc3RyID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyaW5nSShzdHIpKSxcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxuICB1cHBlclU6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXJVKSxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0NoYXJGb3JtYXR0ZXIsXG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdTdHJBcnJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0Q2hhcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGR1cCwgZmVycm9yLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBjaGFyUGFyc2VyID0gZm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGZuKG5leHQpID8gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZmFpbFJlcGx5KGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gKGMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXInLCBjLCBhcmdDaGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NoYXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihjaCA9PiBjID09PSBjaCkoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgID8gY3JlcFxuICAgIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuY2hhcihjKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kIHN1Y2NlZWRzIGlmXG4gKiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0IHRoZVxuICogY29tcGFyaXNvbiBkb25lIGJ5IHRoaXMgcGFyc2VyIGlzIGNhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgdGhyb3cgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgKG9yIGl0c1xuICogICAgIG90aGVyLWNhc2VkIGNvdW50ZXJwYXJ0KSBpcyB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhckkgPSAoYywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcignY2hhckknLCBjLCBhcmdDaGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NoYXJJJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoXG4gICAgY2ggPT4gYy50b0xvd2VyQ2FzZSgpID09PSBjaC50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGNyZXBcbiAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmNoYXJJKGMpKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGUgcHJvdmlkZWRcbiAqIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoaXNcbiAqIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSAoZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NhdGlzZnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgaWYgKGNyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIGNyZXBcbiAgcmV0dXJuIGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgY3Jlcy5lcnJvcnMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzXG4gKiBiZXR3ZWVuIChhY2NvcmRpbmcgdG8gY29kZSBwb2ludHMpIGNoYXJhY3RlcnMgYHNgIGFuZCBgZWBcbiAqIChpbmNsdXNpdmUpLiBJZiBpdCBpcywgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIHRoZSBzdWNjZXNzZnVsIHJlc3VsdCxcbiAqIGFuZCBpZiBpdCBpcyBub3QsIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogYHNgIGFuZCBgZWAgYXJlIGV4cGVjdGVkIHRvIGJlIHNpbmdsZSBjaGFyYWN0ZXJzLiBBbiBlcnJvciB3aWxsIGJlXG4gKiB0aHJvd24gaWYgdGhleSBhcmUgbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGUgcmFuZ2VcbiAqICAgICBvZiBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGUgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2Ugb2ZcbiAqICAgICBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIG5leHQgaW5wdXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHMsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgcywgYXJnQ2hhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgZSwgYXJnQ2hhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyYW5nZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSBzICYmIGMgPD0gZVxuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBjcmVwXG4gICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5yYW5nZShzLCBlKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgaW5wdXQgY2hhcmFjdGVyIGFuZCB0aGVuIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyLiBGYWlscyBvbmx5IGlmIHRoZXJlIGlzIG5vIGlucHV0IGxlZnQgdG8gcmVhZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IG1hdGNoZXMgYW55IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2FueScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYW55KSlcbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgZG9lc1xuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBtYXRjaGVzIHRoZSBlbmQgb2YgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBlb2YgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlb2YnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gb2tSZXBseShjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmVvZikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxuICogd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBiZSBhIG1lbWJlciBmb3JcbiAqICAgICB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBvbmVcbiAqICAgICBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3Qgb25lb2YgPSAoY3MsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ29uZW9mJywgY3MsIGFyZ1N0ckFyckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdvbmVvZicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbiAgICA6IGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMub25lb2YoYXJyKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXG4gKiBwYXJzZXIgd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBub3QgYmUgYSBtZW1iZXJcbiAqICAgICBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub25lb2YgPSAoY3MsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVvZicsIGNzLCBhcmdTdHJBcnJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm9uZW9mJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMubm9uZW9mKGFycikpKVxuICAgIDogb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGRpZ2l0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZGlnaXQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5kaWdpdCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgaGV4YWRlY2ltYWwgZGlnaXQuIFRoaXMgcGFyc2VyIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgaGV4YWRlY2ltYWwgZGlnaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdoZXgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuaGV4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnb2N0YWwnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5vY3RhbCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGV0dGVyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGNyZXBcbiAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmxldHRlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhbHBoYScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5hbHBoYSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICB1cHBlcmNhc2UgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgdXBwZXIgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1cHBlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rID8gY3JlcCA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVwcGVyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbG93ZXJjYXNlIGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbG93ZXJjYXNlIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbG93ZXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5sb3dlcikpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWwgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsJywgbSlcbiAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGdlbmVyaWMobSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLiBUaGlzIHNpZ25pZmllcyBhIGZhdGFsIGVycm9yLFxuICogb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmF0YWwgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYXRhbCcsIG0pXG4gIHJldHVybiBmYXRhbFJlcGx5KGN0eCwgZ2VuZXJpYyhtKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIHN1cHBsaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc2VydmVzIGFzIGEgcHJpbWl0aXZlIGZvciBib3RoIG1vbmFkcyBhbmQgYXBwbGljYXRpdmVzLiBJblxuICogSGFza2VsbCB0ZXJtcywgdGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGJvdGggYHB1cmVgIGluIHRoZVxuICogYEFwcGxpY2F0aXZlYCBjbGFzcyBhbmQgYHJldHVybmAgaW4gdGhlIGBNb25hZGAgY2xhc3MuXG4gKlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGxpZnRzIGFuIGFyYml0cmFyeSB2YWx1ZSBpbnRvIGEgUGFyc2VyIGNvbnRleHQsXG4gKiB0dXJuaW5nIGl0IGludG8gYSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB3aWxsIHJlc3VsdCB3aGVuIHRoaXMgcGFyc2VyIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IHBhcnNlcihjdHggPT4gb2tSZXBseShjdHgsIHgpKVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nT3JSZWdFeHAgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBzdHJpbmdUb1ZpZXcsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLy8gQWxsIG9mIHRoZSByZWd1bGFyIGV4cHJlc3Npb25zIHVzZWQgaW4gdGhlIGRlcml2ZWQgcmVnZXggcGFyc2Vycy5cbi8vIFRoZXNlIGFyZSBoZXJlIHRvIGNyZWF0ZSBhbmQgY29tcGlsZSB0aGVtIG9uY2UsIHVwb24gaW5pdGlhbCBsb2FkLCB0b1xuLy8gc3BlZWQgcGFyc2luZyBsYXRlci5cblxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMZXR0ZXIgPSAvXlxccHtBbHBoYWJldGljfS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBvciBudW1iZXIgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVBbHBoYSA9IC9eKD86XFxwe0FscGhhYmV0aWN9fFxccHtOfSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXBwZXIgPSAvXig/OlxccHtVcHBlcmNhc2V9fFxccHtMdH0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbG93ZXJjYXNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTG93ZXIgPSAvXlxccHtMb3dlcmNhc2V9L3Vcbi8qKiBNYXRjaGVzIGEgc2luZ2xlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlU3BhY2UgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx0IF0pL1xuLyoqIE1hdGNoZXMgYSBzaW5nbGUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlVXNwYWNlID0gL14oPzpcXHJcXG58XFxwe1doaXRlX1NwYWNlfSkvdVxuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlcyA9IC9eW1xcclxcblxcdCBdKi9cbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlcyA9IC9eXFxwe1doaXRlX1NwYWNlfSovdVxuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzMSA9IC9eW1xcclxcblxcdCBdKy9cbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzMSA9IC9eXFxwe1doaXRlX1NwYWNlfSsvdVxuLyoqIE1hdGNoZXMgYW55IGNvbnZlbnRpb25hbCBuZXdsaW5lIChcXHIsIFxcbiwgb3IgXFxyXFxuKS4gKi9cbmNvbnN0IHJlTmV3bGluZSA9IC9eKD86XFxyXFxufFxccnxcXG4pL1xuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBuZXdsaW5lIGNoYXJhY3RlciwgcGx1cyBcXHJcXG4uICovXG5jb25zdCByZVVuZXdsaW5lID0gL14oPzpcXHJcXG58W1xcclxcblxcdTAwODVcXHUyMDI4XFx1MjAyOV0pL3VcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHRha2VzIGEgcmVndWxhciBleHByZXNzaW9uIG9iamVjdCBhbmQgbWF0Y2hlcyBpdCBhcyBmYXJcbiAqIGFzIGl0IGNhbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgdGhlIHJlZ2V4IGJlZ2lucyB3aXRoIGEgYF5gIC4gVGhlIGBnYCBmbGFnIGlzXG4gKiBpZ25vcmVkIGluIHRoYXQgb25seSB0aGUgZmlyc3QgbWF0Y2ggaXMgcHJvY2Vzc2VkIGFuZCByZXR1cm5lZC4gVGhpc1xuICogZW5zdXJlcyB0aGF0IHRoZSBtYXRjaCBpcyBvbmx5IGFnYWluc3QgdGhlIHRleHQgZGlyZWN0bHkgYXQgdGhlXG4gKiBjdXJyZW50IHBvaW50ZXIgbG9jYXRpb24uXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdXNlZCB0byBtYXRjaCBhZ2FpbnN0IHRoZVxuICogICAgIGlucHV0IHRleHQgc3RhcnRpbmcgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5jb25zdCByZWdleFBhcnNlciA9IHJlID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgcmVzdCA9IHZpZXdUb1N0cmluZyhpbmRleCwgdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXgsIHZpZXcpXG5cbiAgY29uc3QgbWF0Y2ggPSByZXN0Lm1hdGNoKHJlKVxuICByZXR1cm4gbWF0Y2hcbiAgICA/IG9rUmVwbHkoY3R4LCBtYXRjaFswXSwgaW5kZXggKyBzdHJpbmdUb1ZpZXcobWF0Y2hbMF0pLmJ5dGVMZW5ndGgpXG4gICAgOiBmYWlsUmVwbHkoY3R4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSBzdXBwbGllZCByZWd1bGFyIGV4cHJlc3Npb24gdG9cbiAqIHRoZSBpbnB1dCB0ZXh0IGF0IHRoZSBjdXJyZW50IGxvY2F0aW9uLiBJZiB0aGVyZSBpcyBhIG1hdGNoLCBhbnlcbiAqIG1hdGNoaW5nIHRleHQgaXMgcmV0dXJuZWQgYXMgYSBzdWNjZXNzZnVsIHJlc3VsdC4gTm8gdGV4dCBpcyBjb25zdW1lZFxuICogdXBvbiBmYWlsdXJlLlxuICpcbiAqIEEgc3RyaW5nIGNhbiBiZSBwYXNzZWQgdG8gdGhpcyBwYXJzZXIuIElmIG9uZSBpcywgaXQgaXMgY29udmVydGVkXG4gKiBpbnRvIGEgcmVndWxhciBleHByZXNzaW9uIHdpdGhvdXQgZmxhZ3MuXG4gKlxuICogSWYgYSBzdGFydCBhbmNob3IgKF4pIGlzIG5vdCBpbmNsdWRlZCwgb25lIHdpbGwgYmUgYWRkZWQuIElmIHRoZSBgZ2BcbiAqIGZsYWcgaXMgaW5jbHVkZWQsIGl0J2xsIGZ1bmN0aW9uYWxseSBiZSBpZ25vcmVkIGFzIG9ubHkgdGhlIGZpcnN0XG4gKiBtYXRjaCB3aWxsIGJlIGNvbnNpZGVyZWQgYW55d2F5LiBUaGVzZSB0d28gcnVsZXMgZW5zdXJlIHRoYXQgdGhlXG4gKiBtYXRjaCBpcyBvbmx5IGF0dGVtcHRlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIHRoZSBjdXJyZW50IHRleHQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfFJlZ0V4cCl9IHJlIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvIGFcbiAqICAgICByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IHJlID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgcmUpXG5cbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgcmUgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyZSkgOiByZVxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5yZWdleChyZWdleCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBsZXR0ZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTGV0dGVyKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubGV0dGVyVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbHBoYVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVBbHBoYSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLmFscGhhVSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgZWl0aGVyIGFuIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpc1xuICogdXBwZXJjYXNlIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgVXBwZXJjYXNlYCBwcm9wZXJ0eSBhbmQgaXMgdGl0bGVjYXNlXG4gKiBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYExldHRlciwgVGl0bGVjYXNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3QgdXBwZXJVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rID8gcnByZXAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy51cHBlclUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxvd2VyKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubG93ZXJVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwcmVwLCBbcnBjdHgsIHJwcmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLnNwYWNlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcbiAqIHB1cnBvc2Ugb2YgdGhpcyBwYXJzZXIgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBXaGl0ZV9TcGFjZWAgcHJvcGVydHkuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxuICogYXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2Ygd2hpdGVzcGFjZS5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VVID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuc3BhY2VVKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycGN0eCwgX10gPSByZWdleFBhcnNlcihyZVNwYWNlcykoY3R4KVxuICByZXR1cm4gb2tSZXBseShycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cbiAqIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZVxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcbiAqIHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlc1UgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBfXSA9IHJlZ2V4UGFyc2VyKHJlVXNwYWNlcykoY3R4KVxuICByZXR1cm4gb2tSZXBseShycGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHR5cGUge1BhcnNlcn1cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rUmVwbHkocnBjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkocnBjdHgsIGV4cGVjdGVkcy5zcGFjZXMxKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAdHlwZSB7UGFyc2VyfVxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzMVUgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JwY3R4LCBycHJlc10gPSByZWdleFBhcnNlcihyZVVzcGFjZXMxKShjdHgpXG4gIHJldHVybiBycHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBva1JlcGx5KHJwY3R4LCBudWxsKVxuICAgIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMuc3BhY2VzMVUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtycHJlcCwgW3JwY3R4LCBycHJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJwcmVzLnN0YXR1cyA9PT0gT2sgPyBycHJlcCA6IGZhaWxSZXBseShycGN0eCwgZXhwZWN0ZWRzLm5ld2xpbmUpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIGluIFVuaWNvZGUgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXG4gKiAqIGBMU2AgKGxpbmUgc2VwYXJhdG9yLCBgVSsyMDI4YClcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXG4gKlxuICogVGhpcyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIGBcXGZgIG9yIGBcXHZgLCB3aGljaCB3aGlsZSBiZWluZ1xuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lVSA9IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcnByZXAsIFtycGN0eCwgcnByZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZVVuZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnByZXMuc3RhdHVzID09PSBPayA/IHJwcmVwIDogZmFpbFJlcGx5KHJwY3R4LCBleHBlY3RlZHMubmV3bGluZVUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0TnVtYmVyLCBhc3NlcnRTdHJpbmcgfSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZHVwLCBuZXh0Q2hhcnMsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGUgY3VycmVudFxuICogcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoIHRvXG4gKiBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBzdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2tSZXBseShjdHgsICcnKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgpXG4gICAgOiBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBpbnB1dFxuICogYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGUgc3RyaW5nIG1hdGNoIG11c3QgYmVcbiAqIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmUgcmVjb2duaXplZFxuICogcHJvcGVybHkuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3Qgc3RyaW5nID0gc3RyID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHJpbmcnLCBzdHIpXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyID09PSBjaGFycyxcbiAgKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbFJlcGx5KHNwY3R4LCBleHBlY3RlZHMuc3RyaW5nKHN0cikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgaW5wdXRcbiAqIGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBjb21wYXJlIGFnYWluc3QgdGhlIG5leHQgY2hhcmFjdGVyc1xuICogICAgIG9mIHRoZSBpbnB1dC5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBzdXBwbGllZCBzdHJpbmdcbiAqICAgICBjYXNlLWluc2Vuc2l0aXZlbHkgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmluZ0kgPSBzdHIgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cmluZ0knLCBzdHIpXG5cbiAgY29uc3QgW3NwcmVwLCBbc3BjdHgsIHNwcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgoc3RyKSwgY2hhcnMgPT4gc3RyLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIHNwcmVzLnN0YXR1cyA9PT0gT2sgPyBzcHJlcCA6IGZhaWxSZXBseShzcGN0eCwgZXhwZWN0ZWRzLnN0cmluZ0koc3RyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB0aGUgcmVtYWluZGVyIG9mIHRoZSBpbnB1dCB0ZXh0IGFuZCByZXN1bHRzIGluXG4gKiB0aGF0IHRleHQuIFN1Y2NlZWRzIGlmIGFscmVhZHkgYXQgRU9GLCByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nLlxuICpcbiAqIEB0eXBlIHtQYXJzZXJ9XG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rUmVwbHkoY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nIHRoZW0gKGFzIGFcbiAqIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlIG5vdCB0aGF0XG4gKiBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlTdHJpbmcgPSBuID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdhbnlTdHJpbmcnLCBuKVxuXG4gIGNvbnN0IFtzcHJlcCwgW3NwY3R4LCBzcHJlc11dID0gZHVwKHN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShjdHgpKVxuICByZXR1cm4gc3ByZXMuc3RhdHVzID09PSBPayA/IHNwcmVwIDogZmFpbFJlcGx5KHNwY3R4LCBleHBlY3RlZHMuYW55U3RyaW5nKG4pKVxufSlcbiIsIi8qIGlzdGFuYnVsIGlnbm9yZSBmaWxlICovXG4vLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNvbXBvdW5kLCBleHBlY3RlZCwgbmVzdGVkIH0gZnJvbSAnLi9lcnJvcidcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLkNvbnRleHR9IENvbnRleHQgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUnKS5SZXN1bHR9IFJlc3VsdCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlcGx5fSBSZXBseSAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vZXJyb3InKS5FcnJvckxpc3R9IEVycm9yTGlzdCAqL1xuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVQ1MtMiBzdHJpbmcgaW50byBhIFVpbnQ4QXJyYXkgb2YgVVRGLTggYnl0ZXMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKClcblxuLyoqXG4gKiBUcmFuc2xhdGVzIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcyBpbnRvIGEgVUNTLTIgc3RyaW5nLlxuICovXG5leHBvcnQgY29uc3QgZGVjb2RlciA9IG5ldyBUZXh0RGVjb2RlcigpXG5cbi8qKlxuICogQW4gaXRlcmF0b3IgdGhhdCBjb3ZlcnMgYSByYW5nZSBmcm9tIGEgc3RhcnRpbmcgdmFsdWUgdG8gYW4gZW5kaW5nXG4gKiB2YWx1ZSwgc3RlcHBpbmcgYnkgYSBjZXJ0YWluIHZhbHVlIGJldHdlZW4gZWFjaC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PTBdIFRoZSBmaXJzdCBudW1iZXIgb2YgdGhlIHJhbmdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGVuZCBUaGUgbGFzdCBudW1iZXIgb2YgdGhlIHJhbmdlLiBCeSBkZWZhdWx0IHRoaXNcbiAqICAgICBudW1iZXIgZm9ybXMgdGhlIHVwcGVyIGJvdW5kIG9mIHRoZSByYW5nZSB3aXRob3V0IGJlaW5nIGluY2x1ZGVkXG4gKiAgICAgaW4gaXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0ZXA9MV0gVGhlIG51bWJlciB0byBpbmNyZWFzZSB0aGUgeWllbGRlZCB2YWx1ZSBieVxuICogICAgIGR1cmluZyBlYWNoIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luY2x1c2l2ZT1mYWxzZV0gRGV0ZXJtaW5lcyB3aGV0aGVyIGBlbmRgIHNob3VsZCBiZVxuICogICAgIGluY2x1ZGVkIGFzIHBhcnQgb2YgdGhlIHJhbmdlLlxuICogQHlpZWxkcyB7bnVtYmVyfSBUaGUgdmFsdWVzIHRoYXQgbWFrZSB1cCB0aGUgcmFuZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqcmFuZ2Uoc3RhcnQsIGVuZCwgc3RlcCwgaW5jbHVzaXZlKSB7XG4gIGNvbnN0IHMgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IHN0YXJ0IDogMFxuICBjb25zdCBlID0gdHlwZW9mIGVuZCA9PT0gJ251bWJlcicgPyBlbmQgOiBzdGFydFxuICBjb25zdCBwID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInID8gc3RlcCA9PT0gMCA/IDEgOiBNYXRoLmFicyhzdGVwKSA6IDFcbiAgY29uc3QgaSA9IHR5cGVvZiBzdGVwID09PSAnbnVtYmVyJ1xuICAgID8gISFpbmNsdXNpdmUgOiB0eXBlb2YgZW5kID09PSAnbnVtYmVyJ1xuICAgICAgPyAhIXN0ZXAgOiAhIWVuZFxuXG4gIGNvbnN0IGZvcndhcmQgPSBzIDwgZVxuICBsZXQgY3VycmVudCA9IHNcblxuICBjb25zdCBmaW5pc2hlZCA9ICgpID0+IHtcbiAgICBpZiAoZm9yd2FyZCkge1xuICAgICAgcmV0dXJuIGkgPyBjdXJyZW50ID4gZSA6IGN1cnJlbnQgPj0gZVxuICAgIH1cbiAgICByZXR1cm4gaSA/IGN1cnJlbnQgPCBlIDogY3VycmVudCA8PSBlXG4gIH1cblxuICAvKiBlc2xpbnQtZGlzYWJsZSByZXF1aXJlLWF0b21pYy11cGRhdGVzICovXG4gIHdoaWxlICghZmluaXNoZWQoKSkge1xuICAgIHlpZWxkIGN1cnJlbnRcbiAgICBjdXJyZW50ID0gZm9yd2FyZCA/IGN1cnJlbnQgKyBwIDogY3VycmVudCAtIHBcbiAgfVxuICAvKiBlc2xpbnQtZW5hYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbn1cblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IHBhaXJzIHZhbHVlcyBpbiBhbiBpdGVyYWJsZSB3aXRoIHRoZWlyIGluZGV4ZXMgaW4gYVxuICogc2VyaWVzIG9mIHR3by1lbGVtZW50IGFycmF5cy4gVGhlIGZpcnN0IGFycmF5IGVsZW1lbnQgaXMgdGhlIGluZGV4O1xuICogdGhlIHNlY29uZCBpcyB0aGUgdmFsdWUgZnJvbSB0aGUgaXRlcmFibGUuXG4gKlxuICogRm9yIGFycmF5cywgdGhpcyBjYW4gYmUgZG9uZSB3aXRoIGBhcnJheS5lbnRyaWVzKClgLCB3aGljaCBwcm9kdWNlc1xuICogdHdvLWVsZW1lbnQgYXJyYXlzIGluIHRoZSBzYW1lIGZvcm1hdC4gSG93ZXZlciwgdGhpcyBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uIHdpbGwgd29yayB3aXRoIGFueSBraW5kIG9mIG9iamVjdCBpbXBsZW1lbnRpbmcgdGhlXG4gKiBgSXRlcmFibGVgIGludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge0l0ZXJhYmxlfSBpdGVyYWJsZSBBbiBpdGVyYWJsZSBvYmplY3Qgd2hvc2UgZWxlbWVudHMgd2lsbFxuICogICAgIGJlIHBhaXJlZCB3aXRoIHRoZWlyIGluZGV4ZXMuXG4gKiBAeWllbGRzIHtbbnVtYmVyLCAqXX0gVGhlIGl0ZXJhYmxlJ3MgdmFsdWVzLCBwYWlyZWQgd2l0aCB0aGVpclxuICogICAgIGluZGV4ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiAqZW51bWVyYXRlKGl0ZXJhYmxlKSB7XG4gIGNvbnN0IGl0ZXJhdG9yID0gaXRlcmFibGVbU3ltYm9sLml0ZXJhdG9yXSgpXG4gIGxldCByZXN1bHQgPSBpdGVyYXRvci5uZXh0KClcbiAgbGV0IGluZGV4ID0gMFxuXG4gIHdoaWxlICghcmVzdWx0LmRvbmUpIHtcbiAgICB5aWVsZCBbaW5kZXgrKywgcmVzdWx0LnZhbHVlXVxuICAgIHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBhIHBvcnRpb24gb2YgYSBVVEYtOCBkYXRhIHZpZXcgYXMgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB0byBiZSB0aGUgZmlyc3QgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIG51bWJlciBvZiBieXRlcyB0byBpbmNsdWRlIGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dCBmcm9tIHdoaWNoXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBzdHJpbmcgaXMgdGFrZW4uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBIFVDUy0yIChyZWd1bGFyIEphdmFTY3JpcHQgc3RyaW5nKSByZXByZXNlbnRhdGlvblxuICogICAgIG9mIHRoZSBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoZSBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB2aWV3VG9TdHJpbmcoaW5kZXgsIGxlbmd0aCwgdmlldykge1xuICBjb25zdCBieXRlcyA9IFVpbnQ4QXJyYXkuZnJvbShcbiAgICB7IGxlbmd0aCB9LFxuICAgIChfLCBpKSA9PiB2aWV3LmdldFVpbnQ4KGluZGV4ICsgaSksXG4gIClcbiAgcmV0dXJuIGRlY29kZXIuZGVjb2RlKGJ5dGVzKVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBVVEYtOCBkYXRhIHZpZXcgb2YgYSBVQ1MtMiBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGVuY29kZSBpbnRvIGEgVVRGLTggZGF0YSB2aWV3LlxuICogQHJldHVybnMge0RhdGFWaWV3fSBBIGRhdGEgdmlldyBvdmVyIHRoZSBVVEYtOCBieXRlcyBvZiB0aGUgaW5wdXRcbiAqICAgICBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdUb1ZpZXcoc3RyKSB7XG4gIHJldHVybiBuZXcgRGF0YVZpZXcoZW5jb2Rlci5lbmNvZGUoc3RyKS5idWZmZXIpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gYSBzdHJpbmcuIFRoaXMgY2FuIGRpZmZlclxuICogZnJvbSB0aGUgbnVtYmVyIG9mIFVDUy0yIGNoYXJhY3RlcnMgaW4gdGhlIHNhbWUgc3RyaW5nLCBtZWFuaW5nIHRoaXNcbiAqIHZhbHVlIGNhbiBkaWZmZXIgZnJvbSB0aGUgYGxlbmd0aGAgcHJvcGVydHkgb2YgdGhlIHNhbWUgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyBvZiB3aGljaCB0byBnZXQgdGhlIGNoYXJhY3RlciBsZW5ndGguXG4gKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiB0aGF0IHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoYXJMZW5ndGgoc3RyKSB7XG4gIHJldHVybiBbLi4uc3RyXS5sZW5ndGhcbn1cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIGN1cnJlbnRseSBpbmRleGVkIGluIHRoZSB2aWV3LFxuICogYmFzZWQgb24gdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgd2l0aGluIHRoZSB2aWV3IHRoYXQgaXNcbiAqICAgICB0aGUgZmlyc3QgKGFuZCBwZXJoYXBzIG9ubHkpIGJ5dGUgb2YgdGhlIG5leHQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7KDF8MnwzfDQpfSBUaGUgbnVtYmVyIG9mIGJ5dGVzIGNvbnRhaW5lZCBpbiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmICgoYnl0ZSAmIDB4ODApID4+IDcgPT09IDApIHJldHVybiAxXG4gIGlmICgoYnl0ZSAmIDB4ZTApID4+IDUgPT09IDBiMTEwKSByZXR1cm4gMlxuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTApIHJldHVybiAzXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMSkgcmV0dXJuIDRcbiAgLy8gSG9wZWZ1bGx5IHNob3VsZG4ndCBoYXBwZW4sIGJ1dCBoZXJlIGluIGNhc2Ugb25lIG9mIHRob3NlIGhpZ2hcbiAgLy8gYXNjaWkgY29kZXMgaXMgdXNlZFxuICByZXR1cm4gMVxufVxuXG4vKipcbiAqIENvbnRhaW5zIGluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcihzKSBpbiB0aGUgZGF0YSB2aWV3LlxuICpcbiAqIEB0eXBlZGVmIE5leHRDaGFySW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHdpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcmV0dXJuZWQgY2hhcmFjdGVyKHMpLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IG5leHQgVGhlIG5leHQgY2hhcmFjdGVyKHMpLlxuICovXG5cbi8qKlxuICogUmV0dXJucyB0aGUgY2hhcmFjdGVyIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uIHdpdGhpbiB0aGUgZGF0YSB2aWV3LlxuICogVGhpcyBjaGFyYWN0ZXIgbWF5IGJlIGEgMS0sIDItLCAzLSwgb3IgNC1ieXRlIGNoYXJhY3RlciBkZXBlbmRpbmcgb25cbiAqIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFyKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IHdpZHRoID0gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldylcbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBuZXh0IGBjb3VudGAgY2hhcmFjdGVycyBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvblxuICogd2l0aGluIHRoZSB2aWV3LiBFYWNoIG9mIHRoZXNlIGNoYXJhY3RlcnMgbWF5IGJlIDEtLCAyLSwgMy0sIG9yXG4gKiA0LWJ5dGUgY2hhcmFjdGVycyBkZXBlbmRpbmcgb24gdGhlIHZhbHVlcyBvZiB0aGVpciBmaXJzdCBieXRlcy4gSWZcbiAqIHRoZXJlIGFyZSBub3QgZW5vdWdoIGNoYXJhY3RlcnMgbGVmdCwgdGhvc2UgcmVtYWluaW5nIHdpbGwgYmVcbiAqIHJldHVybmVkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGZpcnN0IGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJldHVybi5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJzKGluZGV4LCB2aWV3LCBjb3VudCkge1xuICBjb25zdCB2aWV3TGVuZ3RoID0gdmlldy5ieXRlTGVuZ3RoXG4gIGxldCB3aWR0aCA9IDBcblxuICBmb3IgKGNvbnN0IF8gb2YgcmFuZ2UoY291bnQpKSB7XG4gICAgY29uc3QgaSA9IGluZGV4ICsgd2lkdGhcbiAgICBpZiAoaSA+PSB2aWV3TGVuZ3RoKSBicmVha1xuICAgIHdpZHRoICs9IG5leHRDaGFyV2lkdGgoaSwgdmlldylcbiAgfVxuICBpZiAoaW5kZXggKyB3aWR0aCA+PSB2aWV3TGVuZ3RoKSB7XG4gICAgd2lkdGggPSB2aWV3TGVuZ3RoIC0gaW5kZXhcbiAgfVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFN1cnJvdW5kcyB0aGUgc3VwcGxpZWQgc3RyaW5nIGluIHNpbmdsZSBxdW90ZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHN1cnJvdW5kIGluIHNpbmdsZSBxdW90ZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGxlZCBhbmQgdHJhaWxlZCBieSBzaW5nbGUgcXVvdGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcXVvdGUoc3RyKSB7XG4gIHJldHVybiBgJyR7c3RyfSdgXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBhcnJheSBvZiB0d28gY29waWVzIG9mIHRoZSBwcm92aWRlZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNvcnQgb2YgZW11bGF0ZXMgKmFzLXBhdHRlcm5zKiBpbiBhIGxpbWl0ZWQgd2F5IGluIEphdmFTY3JpcHQuXG4gKiBJbiBsYW5ndWFnZXMgbGlrZSBIYXNrZWxsIGFuZCBNTCwgd2hlbiBwYXR0ZXJuIG1hdGNoaW5nIGlzIGRvbmUsXG4gKiB0aGVyZSBpcyBhIGNvbnN0cnVjdCB0byBiZSBhYmxlIHRvIHJldGFpbiBhIGxhcmdlciBwYXJ0IG9mIHRoZVxuICogZGVzdHJ1Y3R1cmVkIHBhdHRlcm4gd2hpbGUgYWxzbyBicmVha2luZyBpdCBkb3duIGZ1cnRoZXIuIEluIEhhc2tlbGwsXG4gKlxuICogYGBgaGFza2VsbFxuICogKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogd2lsbCBhc3NpZ24gYDFgIHRvIGBoZWFkYCwgYW5kIGBbMiwgMywgNCwgNV1gIHRvIGB0YWlsYC4gVGhpcyBjYW4gYmVcbiAqIGRvbmUgaW4gSmF2YVNjcmlwdCBhcyB3ZWxsLCBsaWtlIHRoaXM6XG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW2hlYWQsIC4uLnRhaWxdID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBIb3dldmVyLCBIYXNrZWxsIGNhbiBnbyBmYXJ0aGVyOiBpdCBjYW4gYWxzbyBhc3NpZ24gdGhlIGVudGlyZSBsaXN0XG4gKiBhcyBhIHdob2xlIHRvIGFub3RoZXIgdmFyaWFibGUgd2hpbGUgc3RpbGwgYXNzaWduaW5nIGl0cyBlbGVtZW50cyBhc1xuICogYWJvdmUuIEl0J3MgZG9uZSBsaWtlIHRoaXM6XG4gKlxuICogYGBgaGFza2VsbFxuICogbGlzdCBAIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIFRoaXMgd2lsbCwgaW4gYWRkaXRpb24gdG8gdGhlIGFzc2lnbm1lbnRzIGFib3ZlLCBhc3NpZ24gYFsxLCAyLCAzLCA0LFxuICogNV1gIHRvIGBsaXN0YC4gVGhlIGBAYCBzaWduIGlzIHJlYWQgKmFzKiwgYW5kIHRoaXMgY29uc3RydWN0IGlzXG4gKiBjYWxsZWQgYW4gKmFzLXBhdHRlcm4qIChwZXJoYXBzIGJlY2F1c2UgdGhlIE1MIHdheSBvZiBkb2luZyBpdCB1c2VzXG4gKiB0aGUgYGFzYCBrZXl3b3JkIGluc3RlYWQgb2YgdGhlIGBAYCBzeW1ib2wpLlxuICpcbiAqIFRoZXJlIGlzIG5vIGZhY2lsaXR5IHRvIGRvIHRoaXMgaW4gSmF2YVNjcmlwdC4gQnV0IHRoZXJlIGFyZSBtYW55XG4gKiBwbGFjZXMgaW4gdGhpcyBsaWJyYXJ5IHdoZXJlIGEgYFJlcGx5YCBpcyBkZXNjdHVyY3R1cmVkIGludG8gaXRzXG4gKiBgQ29udGV4dGAgYW5kIGBSZXN1bHRgIGVsZW1lbnRzLCB5ZXQgdGhlcmUgaXMgYSBuZWVkIHRvIGNvbmRpdGlvbmFsbHlcbiAqIHVzZSB0aGUgZW50aXJlIGBSZXBseWAgYXMgd2VsbCAobm9ybWFsbHkgdG8gcmV0dXJuIGl0IGlmIHNvbWVcbiAqIGNvbmRpdGlvbiBpcyBtZXQpLiBSYXRoZXIgdGhhbiBjcmVhdGUgYSBuZXcgYFJlcGx5YCBmcm9tIHRoZXNlIHBhcnRzLFxuICogYHR3aW5gIGNhbiBiZSB1c2VkIHRvIGR1cGxpY2F0ZSB0aGUgcmVmZXJlbmNlcyB0byB0aGUgYFJlcGx5YC4gVGhlblxuICogb25seSAqb25lKiBvZiB0aGUgZHVwbGljYXRlIHJlZmVyZW5jZXMgY2FuIGJlIGRlc3RydWN0dXJlZCwgd2hpbGUgdGhlXG4gKiBvdGhlciBvbmUgaXMgcmV0YWluZWQgYXMgYSB3aG9sZS5cbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbcmVwbHksIFtjb250ZXh0LCByZXN1bHRdXSA9IHR3aW4ocGFyc2VyKGN0eCkpXG4gKiBgYGBcbiAqXG4gKiBBcy1wYXR0ZXJucyBjYW4gYmUgdXNlZCBvbiBwaWVjZXMgb2YgYSBwYXR0ZXJuIGluc3RlYWQgb2YgdGhlIGVudGlyZVxuICogcGF0dGVybiwgYW5kIGB0d2luYCBjYW5ub3QgZG8gdGhhdC4gQnV0IGl0IHNlcnZlcyBmb3Igd2hhdCBpcyBuZWVkZWRcbiAqIGluIEtlc3NlbC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSB2YWx1ZSBBIHJlcGx5IHRoYXQgbmVlZHMgdG8gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlXG4gKiAgICAgbWFpbnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIHdob2xlLlxuICogQHJldHVybnMge1tSZXBseSwgUmVwbHldfSBBbiBhcnJheSBjb250YWluaW5nIHR3byBjb3BpZXMgb2YgdGhlXG4gKiAgICAgcmVwbHkuIE9uZSBjYW4gYmUgZGVzdHJ1Y3R1cmVkIHdoaWxlIHRoZSBvdGhlciBpcyByZXRhaW5lZCB3aG9sZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGR1cCh2YWx1ZSkge1xuICByZXR1cm4gW3ZhbHVlLCB2YWx1ZV1cbn1cblxuLyoqXG4gKiBDb21tYS1zZXBhcmF0ZXMgKGFzIG5lZWRlZCkgdGhlIHN0cmluZ3MgaW4gdGhlIHByb3ZpZGVkIGFycmF5LiBJZlxuICogdGhlIGFycmF5IGlzIGVtcHR5LCB0aGUgcmVzdWx0IHdpbGwgYmUgYW4gZW1wdHkgc3RyaW5nOyBpZiB0aGUgYXJyYXlcbiAqIGhhcyBvbmx5IG9uZSBlbGVtZW50LCB0aGF0IGVsZW1lbnQgd2lsbCBiZSByZXR1cm5lZC4gSWYgdGhlIGFycmF5IGhhc1xuICogdHdvIGVsZW1lbnRzLCB0aGV5IHdpbGwgYmUgam9pbmVkIHdpdGggJyBvciAnIGJldHdlZW4gdGhlbS4gSWYgdGhlXG4gKiBhcnJheSBpcyBsb25nZXIgdGhhbiB0aGF0LCBhbGwgZWxlbWVudHMgd2lsbCBiZSBjb21tYS1zZXBhcmF0ZWQgd2l0aFxuICogYW4gYWRkaXRpb25hbCAnb3InIGJldHdlZW4gdGhlIGxhc3QgdHdvIGVsZW1lbnRzIChPeGZvcmQgY29tbWFcbiAqIHN0eWxlKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBtZXNzYWdlcyBUaGUgc3RyaW5ncyB0aGF0IG5lZWQgdG8gYmUgam9pbmVkIGludG9cbiAqICAgICBhIGNvbW1hLXNlcGFyYXRlZCBzdHJpbmcuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgbWVzc2FnZXMgam9pbmVkIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tbWFTZXBhcmF0ZShtZXNzYWdlcykge1xuICBzd2l0Y2ggKG1lc3NhZ2VzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuICcnXG4gICAgY2FzZSAxOiByZXR1cm4gbWVzc2FnZXNbMF1cbiAgICBjYXNlIDI6IHJldHVybiBtZXNzYWdlcy5qb2luKCcgb3IgJylcbiAgICBkZWZhdWx0OiB7XG4gICAgICBjb25zdCBtc2dzID0gbWVzc2FnZXMuc2xpY2UoKVxuICAgICAgY29uc3QgbGFzdCA9IG1zZ3MucG9wKClcbiAgICAgIHJldHVybiBgJHttc2dzLmpvaW4oJywgJyl9LCBvciAke2xhc3R9YFxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIEF1Z21lbnRzIGEgZmFjdG9yeSBmdW5jdGlvbiB0byBiZSBhYmxlIHRvIGRldGVybWluZSB3aGV0aGVyIGl0XG4gKiBjcmVhdGVkIGFuIGFyYml0cmFyeSBvYmplY3QuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIGlzIGFzc2lnbmVkIGFuXG4gKiBhZGRpdGlvbmFsIHByb3BlcnR5IChieSBkZWZhdWx0IG5hbWVkIGBjcmVhdGVkYCwgY2FuIGJlIGNoYW5nZWQgYnlcbiAqIHBhc3NpbmcgaW4gdGhlIGBwcm9wYCBhcmd1bWVudCkgd2hpY2ggaXMgYSBmdW5jdGlvbiB0aGF0IHRha2VzIGFuXG4gKiBvYmplY3QgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZSBmYWN0b3J5IGNyZWF0ZWQgaXQgb3IgYGZhbHNlYCBpZiBpdFxuICogZGlkIG5vdC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmbiBUaGUgZmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgYXVnbWVudGVkIHdpdGhcbiAqICAgICB0aGUgbmV3IHByb3BlcnR5LlxuICogQHBhcmFtIHtzdHJpbmd8c3ltYm9sfSBbcHJvcD0nY3JlYXRlZCddIFRoZSBwcm9wZXJ0eSB0aGF0IHdpbGwgYmVcbiAqICAgICBhZGRlZCB0byB0aGUgZmFjdG9yeSBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtmdW5jdGlvbn0gVGhlIGF1Z21lbnRlZCBmYWN0b3J5IGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhY2soZm4sIHByb3AgPSAnY3JlYXRlZCcpIHtcbiAgY29uc3QgdHJhY2tlZCA9IG5ldyBXZWFrU2V0KClcblxuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KFxuICAgICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBjcmVhdGVkID0gZm4oLi4uYXJncylcbiAgICAgIHRyYWNrZWQuYWRkKGNyZWF0ZWQpXG4gICAgICByZXR1cm4gY3JlYXRlZFxuICAgIH0sXG4gICAgcHJvcCxcbiAgICB7IHZhbHVlOiB0cmFja2VkLmhhcy5iaW5kKHRyYWNrZWQpIH0sXG4gIClcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciB0byBpdHMgc3RyaW5nIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcbiAqIGAnMXN0J2AsIGAxNzI5YCBiZWNvbWVzIGAnMTcyOXRoJ2AsIGV0Yy4pXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgb3JkaW5hbCBmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3JkaW5hbChuKSB7XG4gIGNvbnN0IHN1ZmZpeGVzID0gWyd0aCcsICdzdCcsICduZCcsICdyZCddXG4gIGNvbnN0IHYgPSBuICUgMTAwXG4gIHJldHVybiBuICsgKHN1ZmZpeGVzWyh2IC0gMjApICUgMTBdID8/IHN1ZmZpeGVzW3ZdID8/IHN1ZmZpeGVzWzBdKVxufVxuXG5jb25zdCBudW1zID0gW1xuICAnemVybycsICdvbmUnLCAndHdvJywgJ3RocmVlJywgJ2ZvdXInLCAnZml2ZScsICdzaXgnLCAnc2V2ZW4nLCAnZWlnaHQnLFxuICAnbmluZScsICd0ZW4nLCAnZWxldmVuJywgJ3R3ZWx2ZScsICd0aGlydGVlbicsICdmb3VydGVlbicsICdmaWZ0ZWVuJyxcbiAgJ3NpeHRlZW4nLCAnc2V2ZW50ZWVuJywgJ2VpZ2h0ZWVuJywgJ25pbmV0ZWVuJyxcbl1cbmNvbnN0IG9uZXMgPSBbXG4gICd6ZXJvdGgnLCAnZmlyc3QnLCAnc2Vjb25kJywgJ3RoaXJkJywgJ2ZvdXJ0aCcsICdmaWZ0aCcsICdzaXh0aCcsICdzZXZlbnRoJyxcbiAgJ2VpZ2h0aCcsICduaW50aCcsICd0ZW50aCcsICdlbGV2ZW50aCcsICd0d2VsZnRoJywgJ3RoaXJ0ZWVudGgnLFxuICAnZm91cnRlZW50aCcsICdmaWZ0ZWVudGgnLCAnc2l4dGVlbnRoJywgJ3NldmVudGVlbnRoJywgJ2VpZ2h0ZWVudGgnLFxuICAnbmluZXRlZW50aCcsXG5dXG5jb25zdCB0ZW5zID0gW1xuICAndHdlbnQnLCAndGhpcnQnLCAnZm9ydCcsICdmaWZ0JywgJ3NpeHQnLCAnc2V2ZW50JywgJ2VpZ2h0JywgJ25pbmV0Jyxcbl1cbmNvbnN0IGdyb3VwcyA9IFtcbiAgJ2h1bmRyZWQnLCAndGhvdXNhbmQnLCAnbWlsbGlvbicsICdiaWxsaW9uJywgJ3RyaWxsaW9uJywgJ3F1YWRyaWxsaW9uJyxcbl1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIG51bWJlciBpbnRvIGl0cyB3b3JkLWJhc2VkIG9yZGluYWwgZm9ybSAoaS5lLiwgYDFgIGJlY29tZXNcbiAqIGAnZmlyc3QnYCwgYDE3MjlgIGJlY29tZXMgYCdvbmUgdGhvdXNhbmQgc2V2ZW4gaHVuZHJlZFxuICogdHdlbnR5LW5pbnRoJ2AsIGV0Yy4pLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgdG8gY29udmVydCBpbnRvIGFuIG9yZGluYWwuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBudW1iZXIgaW4gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd29yZGluYWwobikge1xuICBpZiAobiA8IDAgfHwgbiA+IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBBcmd1bWVudCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgJHtOdW1iZXIuTUFYX1NBRkVfSU5URUdFUn1gKVxuICB9XG4gIGNvbnN0IG1hZyA9IE1hdGguZmxvb3IoTWF0aC5sb2cxMChuKSlcblxuICBpZiAobiA8IDIwKSByZXR1cm4gb25lc1tuXVxuICBpZiAobWFnID09PSAxKSB7XG4gICAgY29uc3QgaSA9IE1hdGguZmxvb3IobiAvIDEwKSAtIDJcbiAgICByZXR1cm4gbiAlIDEwID09PSAwID8gYCR7dGVuc1tpXX1pZXRoYCA6IGAke3RlbnNbaV19eS0ke29uZXNbbiAlIDEwXX1gXG4gIH1cbiAgaWYgKG1hZyA9PT0gMikge1xuICAgIGNvbnN0IGYgPSBNYXRoLmZsb29yKG4gLyAxMCAqKiBtYWcpXG4gICAgY29uc3QgeCA9IG4gLSBmICogMTAgKiogbWFnXG4gICAgcmV0dXJuIGAke251bXNbZl19ICR7Z3JvdXBzWzBdfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG4gIH1cblxuICBjb25zdCBnID0gbWFnICUgMyArIDFcbiAgY29uc3QgaSA9IE1hdGguZmxvb3IobWFnIC8gMylcbiAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIChtYWcgLSBnICsgMSkpXG4gIGNvbnN0IG0gPSAoZnVuY3Rpb24gbXVsdChudW0pIHtcbiAgICBpZiAobnVtIDwgMjApIHJldHVybiBudW1zW251bV1cblxuICAgIGNvbnN0IHJlbSA9IG51bSAlIDEwXG4gICAgaWYgKG51bSA8IDEwMCkge1xuICAgICAgcmV0dXJuIGAke3RlbnNbTWF0aC5mbG9vcihudW0gLyAxMCkgLSAyXX15JHtcbiAgICAgICAgcmVtID09PSAwID8gJycgOiBgLSR7bnVtc1tyZW1dfWBcbiAgICAgIH1gXG4gICAgfVxuXG4gICAgY29uc3QgeCA9IG51bSAtIE1hdGguZmxvb3IobnVtIC8gMTAwKSAqIDEwMFxuICAgIHJldHVybiBgJHtudW1zW01hdGguZmxvb3IobnVtIC8gMTAwKV19ICR7Z3JvdXBzWzBdfSR7XG4gICAgICB4ID09PSAwID8gJ3RoJyA6IGAgJHttdWx0KHgpfWBcbiAgICB9YFxuICB9KGYpKVxuICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiAobWFnIC0gZyArIDEpXG4gIHJldHVybiBgJHttfSAke2dyb3Vwc1tpXX0ke3ggPT09IDAgPyAndGgnIDogYCAke3dvcmRpbmFsKHgpfWB9YFxufVxuXG4vKipcbiAqIFJldHVybnMgYSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiBhIHZhbHVlLiBUaGlzIHdpbGwgbW9zdFxuICogb2Z0ZW4gYmUgdGhlIG91dHB1dCBmcm9tIGBKU09OLnN0cmluZ2lmeSgpYCwgdGhvdWdoIHJlcHJlc2VudGF0aW9uc1xuICogYXJlIGFsc28gaW5jbHVkZWQgZm9yIHR5cGVzIHRoYXQgZnVuY3Rpb24gZG9lc24ndCBzdXBwb3J0LlxuICpcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIHR1cm4gaW50byBhIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgcmVhc29uYWJsZSBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5naWZ5KHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gJ3VuZGVmaW5lZCdcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBwYXJzZXIuY3JlYXRlZCh2YWx1ZSkgPyAncGFyc2VyJyA6ICdmdW5jdGlvbidcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3ltYm9sJykgcmV0dXJuIGBTeW1ib2woJHt2YWx1ZS5kZXNjcmlwdGlvbn0pYFxuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFsdWUpXG59XG5cbi8qKlxuICogQWRkcyB0aGUgYXBwcm9wcmlhdGUgaW5kZWZpbml0ZSBhcnRpY2xlICgnYScgb3IgJ2FuJykgdG8gYSB3b3JkIGJhc2VkXG4gKiBvbiBpdHMgZmlyc3QgbGV0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBwcmVwZW5kIGFuIGFydGljbGUgdG8uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc3RyaW5nIHdpdGggdGhlIHByZXBlbmRlZCBhcnRpY2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXJ0aWNsaWZ5KHN0cikge1xuICByZXR1cm4gJ2FlaW91QUVJT1UnLmluY2x1ZGVzKHN0clswXSkgPyBgYW4gJHtzdHJ9YCA6IGBhICR7c3RyfWBcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVycm9yIHV0aWxpdGllc1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgZmFpbHVyZSByZXBseS4gVGhlIGNvbmRpdGlvblxuICogZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXBseSB3aWxsIGJlIGZhdGFsIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb24gU2hvdWxkIGJlIGB0cnVlYCBmb3IgYSBmYXRhbCBmYWlsdXJlIG9yXG4gKiAgICAgYGZhbHNlYCBmb3IgYSBub24tZmF0YWwgZmFpbHVyZS5cbiAqIEByZXR1cm5zIFRoZSByZXBseSBmdW5jdGlvbiBmb3IgZmF0YWwgb3Igbm9uLWZhdGFsIGZhaWx1cmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbHlGbihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3Igbm9uLWJhY2t0cmFja2VkIGVycm9ycyBmcm9tIHVuZGVybHlpbmdcbiAqIHBhcnNlcnMuIFRoZSAnZicgaXMgZm9yICdmbGF0JzsgdGhpcyBmdW5jdGlvbiBwcm9kdWNlcyBhIG5vbi1uZXN0ZWRcbiAqIGVycm9yIHdob3NlIG1lc3NhZ2UgaXMgYmFzZWQgdXBvbiB3aGV0aGVyIGBtYCBleGlzdHMgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdCB0aGF0IGRvZXMgbm90IHRha2UgYmFja3RyYWNraW5nXG4gKiAgICAgaW50byBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVycm9yKG0sIGVycm9ycykge1xuICByZXR1cm4gbSA9PSBudWxsID8gZXJyb3JzIDogZXhwZWN0ZWQobSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3IgYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy4gVGhlICduJyBpcyBmb3IgbmVzdGVkOyB0aGlzIGZ1bmN0aW9uIHByb2R1Y2VzIGEgbmVzdGVkXG4gKiBlcnJvciB0aGF0IGluc3RlYWQgYmUgYSBjb21wb3VuZCBlcnJvciBpZiBgbWAgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCB0YWtlcyBiYWNrdHJhY2tpbmcgaW50b1xuICogICAgIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIG0gPT0gbnVsbCA/IG5lc3RlZChjdHgsIGVycm9ycykgOiBjb21wb3VuZChtLCBjdHgsIGVycm9ycylcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCB0aGF0IHdpbGwgb25seSByZWNvcmQgYmFja3RyYWNraW5nXG4gKiBpbmZvcm1hdGlvbiBpZiB0aGUgcHJvdmlkZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kIElmIGB0cnVlYCwgdGhlIG5ldyBlcnJvciBsaXN0IHdpbGwgaW5jbHVkZVxuICogICAgIGJhY2t0cmFja2luZyBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXJyb3IoY29uZCwgbSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGNvbmQgPyBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIDogZmVycm9yKG0sIGVycm9ycylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=