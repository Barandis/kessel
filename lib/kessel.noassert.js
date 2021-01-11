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
/*! exports provided: formatter, argFormatter, argCharFormatter, argFnFormatter, argGenFormatter, argNumFormatter, argParFormatter, argStrFormatter, argStrArrFormatter, argStrRegFormatter, assertChar, assertFunction, assertGenFunction, assertString, assertArray, assertStringOrArray, assertStringOrRegExp, assertNumber, assertParser */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "argStrRegFormatter", function() { return argStrRegFormatter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertChar", function() { return assertChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertFunction", function() { return assertFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertGenFunction", function() { return assertGenFunction; });
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
const argStrRegFormatter = (order = 1, multiple = false) => argFormatter('a string or a regular expression', order, multiple);
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
  const errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors);
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
/*! exports provided: attempt, bseq, bchain, bapply, bleft, bright, bcount, buntil, bblock, bpipe, bbetween */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return attempt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bseq", function() { return bseq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bchain", function() { return bchain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bapply", function() { return bapply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bleft", function() { return bleft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bright", function() { return bright; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bcount", function() { return bcount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buntil", function() { return buntil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bblock", function() { return bblock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bpipe", function() { return bpipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bbetween", function() { return bbetween; });
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

const bseq = (...args) => {
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

const bchain = (p, fn, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bapply = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bleft = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bright = (p, q, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bcount = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const buntil = (p, e, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bblock = (g, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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

const bpipe = (...args) => {
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

const bbetween = (s, e, p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
/*! exports provided: join, flat, compact, value, nth, first, second, third, fourth, fifth, map, apply, chain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return flat; });
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v.join(''));
});
/**
 * A parser which will execute `p` and return its result with all
 * internal arrays flattened into a single-level array. This requires
 * that `p` return an array; an error will be thrown if it does not.
 *
 * @param {Parser} p A parser that is expected to return an array.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that executes `p` and returns a
 *     single-level array made by flattening the elements of the array
 *     returned by `p`.
 */

const flat = (p, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const v = pres.value;
   false && false;
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, v.flat(Infinity));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors)));
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const q = fn(pres.value);
   false && false;
  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors)));
  }

  return qrep;
});

/***/ }),

/***/ "./src/combinators/sequence.js":
/*!*************************************!*\
  !*** ./src/combinators/sequence.js ***!
  \*************************************/
/*! exports provided: seq, left, right, block, many, many1, skip, sepby, sepby1, endby, endby1, count, between, until, pipe, lassoc, lassoc1, rassoc, rassoc1 */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepby", function() { return sepby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sepby1", function() { return sepby1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endby", function() { return endby; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endby1", function() { return endby1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "count", function() { return count; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "between", function() { return between; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "until", function() { return until; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return pipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lassoc", function() { return lassoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lassoc1", function() { return lassoc1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rassoc", function() { return rassoc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rassoc1", function() { return rassoc1; });
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
    let errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, []);
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) {
    const fn = pres.status === Fatal ? kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"] : kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"];
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qctx, qres] = q(pctx);

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qres.status === Fatal || qctx.index !== index);
    return fn(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors)));
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== kessel_core__WEBPACK_IMPORTED_MODULE_1__["Status"].Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const [qrep, [qctx, qres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(q(pctx));

  if (qres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(qctx.status === Fatal || qctx.index !== index);
    return fn(qctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, qres.errors)));
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
  let errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, []);
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
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  let context = pctx;
  const values = [pres.value];

  while (true) {
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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

const sepby = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const [pctx, pres] = p(ctx);
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;
    if (sres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepby'));
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

const sepby1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;
    if (sres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('sepby1'));
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

const endby = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const [pctx, pres] = p(ctx);
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, []);
  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;
    if (sres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('endby'));
    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
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

const endby1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  let index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const values = [pres.value];
  let context = pctx;

  while (true) {
    index = context.index;
    const [sctx, sres] = s(context);
    context = sctx;
    if (sres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
    if (sres.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
    if (pres.status === Fail) break;
    if (context.index === index) throw new TypeError(loopMessage('endby1'));
    values.push(pres.value);
  }

  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(context, values);
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

const count = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
      return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
    return fn(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, sres.errors));
  }

  const [pctx, pres] = p(sctx);
  const errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ((_pres$errors3 = pres.errors) === null || _pres$errors3 === void 0 ? void 0 : _pres$errors3.length) ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(sres.errors, pres.errors) : []);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal || pctx.index !== index);
    return fn(pctx, errors);
  }

  const [ectx, eres] = e(pctx);

  if (eres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(eres.status === Fatal || ectx.index !== index);
    return fn(ectx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(errors, eres.errors)));
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

  while (true) {
    const [ectx, eres] = e(context);
    context = ectx;
    if (eres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(ectx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, eres.errors));
    if (eres.status === Ok) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));

    if (pres.status === Fail) {
      const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pctx.index !== index);
      return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["merge"])(pres.errors, eres.errors)));
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
    let errors = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, []);

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


const lassoc = (p, o, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;
    if (ores.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ores.errors));
    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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

const lassoc1 = (p, o, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;
    if (ores.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ores.errors));
    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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

const rassoc = (p, o, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);
  if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  if (pres.status === Fail) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(pctx, x);
  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;
    if (ores.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ores.errors));
    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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

const rassoc1 = (p, o, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
   false && false;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const values = [pres.value];
  const ops = [];
  let context = pctx;
  let index = context.index;
  let i = 0;

  while (true) {
    const [octx, ores] = o(context);
    context = octx;
    if (ores.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(octx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, ores.errors));
    if (ores.status === Fail) break;
    const [pctx, pres] = p(context);
    context = pctx;
    if (pres.status === Fatal) return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["fatalReply"])(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
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
/*! exports provided: alpha, any, char, digit, eof, hex, ichar, letter, lower, noneof, octal, oneof, range, satisfy, upper, always, fail, fatal, newline, regex, space, spaces, spaces1, ualpha, uletter, ulower, unewline, uspace, uspaces, uspaces1, uupper, all, anystr, istr, str, alt, def, empty, not, opt, peek, attempt, bapply, bbetween, bblock, bchain, bcount, bleft, bpipe, bright, bseq, buntil, apply, chain, compact, fifth, first, flat, fourth, join, map, nth, second, third, value, between, block, count, endby, endby1, lassoc, lassoc1, left, many, many1, pipe, rassoc, rassoc1, right, sepby, sepby1, seq, skip, until, Status, failReply, failure, fatalReply, okReply, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parsers_char__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parsers/char */ "./src/parsers/char.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alpha", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["alpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "any", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["any"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "char", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["char"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "digit", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["digit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eof", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["eof"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hex", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["hex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ichar", function() { return _parsers_char__WEBPACK_IMPORTED_MODULE_0__["ichar"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "newline", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["newline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["regex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "space", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["space"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaces", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "spaces1", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["spaces1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ualpha", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["ualpha"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uletter", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["uletter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ulower", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["ulower"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "unewline", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["unewline"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uspace", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["uspace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uspaces", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["uspaces"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uspaces1", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["uspaces1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uupper", function() { return _parsers_regex__WEBPACK_IMPORTED_MODULE_2__["uupper"]; });

/* harmony import */ var _parsers_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parsers/string */ "./src/parsers/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "all", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["all"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "anystr", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["anystr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "istr", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["istr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "str", function() { return _parsers_string__WEBPACK_IMPORTED_MODULE_3__["str"]; });

/* harmony import */ var _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combinators/alternative */ "./src/combinators/alternative.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "alt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["alt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "def", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["def"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["empty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "not", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["not"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "opt", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["opt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "peek", function() { return _combinators_alternative__WEBPACK_IMPORTED_MODULE_4__["peek"]; });

/* harmony import */ var _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combinators/backtracking */ "./src/combinators/backtracking.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attempt", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["attempt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bapply", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bapply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bbetween", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bbetween"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bblock", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bblock"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bchain", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bchain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bcount", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bcount"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bleft", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bleft"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bpipe", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bpipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bright", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bright"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bseq", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["bseq"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "buntil", function() { return _combinators_backtracking__WEBPACK_IMPORTED_MODULE_5__["buntil"]; });

/* harmony import */ var _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combinators/chaining */ "./src/combinators/chaining.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["apply"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "chain", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["chain"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "compact", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["compact"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fifth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["fifth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "first", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["first"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flat", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["flat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["fourth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["join"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "map", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["map"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nth", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["nth"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "second", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["second"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "third", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["third"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "value", function() { return _combinators_chaining__WEBPACK_IMPORTED_MODULE_6__["value"]; });

/* harmony import */ var _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./combinators/sequence */ "./src/combinators/sequence.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "between", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["between"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "block", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["block"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["count"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endby", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["endby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "endby1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["endby1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lassoc", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["lassoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lassoc1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["lassoc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "left", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["left"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "many1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["many1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pipe", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["pipe"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rassoc", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["rassoc"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rassoc1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["rassoc1"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "right", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["right"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepby", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sepby"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sepby1", function() { return _combinators_sequence__WEBPACK_IMPORTED_MODULE_7__["sepby1"]; });

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
  any: 'any character',
  anystr: n => `a string of ${n} characters`,
  char: c => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(c),
  digit: 'a digit',
  eof: 'end of input',
  hex: 'a hexadecimal digit',
  ichar: c => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(c),
  istr: s => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(s),
  letter: 'a letter',
  lower: 'a lowercase letter',
  newline: 'a newline',
  noneof: array => 'none of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
  octal: 'an octal digit',
  oneof: array => 'one of ' + Object(_util__WEBPACK_IMPORTED_MODULE_1__["commaSeparate"])(array.map(c => `'${c}'`)),
  range: (start, end) => `a character between '${start}' and '${end}'`,
  regex: re => `a string matching ${re}`,
  space: 'a whitespace character',
  spaces: 'zero or more whitespace characters',
  spaces1: 'one or more whitespace characters',
  str: s => Object(_util__WEBPACK_IMPORTED_MODULE_1__["quote"])(s),
  ualpha: 'a Unicode alphanumeric character',
  uletter: 'a Unicode letter',
  ulower: 'a Unicode lowercase letter',
  unewline: 'a Unicode newline',
  upper: 'an uppercase letter',
  uspace: 'a Unicode whitespace character',
  uspaces: 'zero or more Unicode whitespace characters',
  uspaces1: 'one or more Unicode whitespace characters',
  uupper: 'a Unicode uppercase letter'
};
const expecteds = {
  alpha: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.alpha),
  any: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.any),
  anystr: n => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.anystr(n)),
  char: c => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.char(c)),
  digit: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.digit),
  eof: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.eof),
  hex: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.hex),
  ichar: c => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.ichar(c)),
  istr: s => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.istr(s)),
  letter: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.letter),
  lower: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.lower),
  newline: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.newline),
  noneof: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.noneof(array)),
  octal: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.octal),
  oneof: array => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.oneof(array)),
  range: (start, end) => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.range(start, end)),
  regex: re => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.regex(re)),
  space: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.space),
  spaces: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaces),
  spaces1: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.spaces1),
  str: s => Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.str(s)),
  ualpha: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.ualpha),
  uletter: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.uletter),
  ulower: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.ulower),
  unewline: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.unewline),
  upper: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.upper),
  uspace: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.uspace),
  uspaces: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.uspaces),
  uspaces1: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.uspaces1),
  uupper: Object(_error__WEBPACK_IMPORTED_MODULE_0__["expected"])(strings.uupper)
};

/***/ }),

/***/ "./src/parsers/char.js":
/*!*****************************!*\
  !*** ./src/parsers/char.js ***!
  \*****************************/
/*! exports provided: char, ichar, satisfy, range, any, eof, oneof, noneof, digit, hex, octal, letter, alpha, upper, lower */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "char", function() { return char; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ichar", function() { return ichar; });
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

const ichar = (c, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [crep, [cctx, cres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(charParser(ch => c.toLowerCase() === ch.toLowerCase())(ctx));
  return cres.status === Ok ? crep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(cctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ichar(c)));
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
  const arr = [...cs];
  const {
    index,
    view
  } = ctx;

  if (index >= view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].oneof(arr)));
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
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
  const arr = [...cs];
  const {
    index,
    view
  } = ctx;

  if (index >= view.byteLength) {
    return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(ctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].noneof(arr)));
  }

  const {
    width,
    next
  } = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["nextChar"])(index, view);
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
/*! exports provided: regex, uletter, ualpha, uupper, ulower, space, uspace, spaces, uspaces, spaces1, uspaces1, newline, unewline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uletter", function() { return uletter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ualpha", function() { return ualpha; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uupper", function() { return uupper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ulower", function() { return ulower; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "space", function() { return space; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspace", function() { return uspace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaces", function() { return spaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspaces", function() { return uspaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaces1", function() { return spaces1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uspaces1", function() { return uspaces1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newline", function() { return newline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unewline", function() { return unewline; });
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
 * @param {(string|RegExp)} r The regular expression to match against
 *     the input text. If this is a string, it will be converted into a
 *     regular expression with no flags.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that attempts to match the regular
 *     expression against the input at its current position and succeeds
 *     if a match is found.
 */


const regex = (r, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false; // First, convert to a regular expression if it's a string

  let regex = typeof r === 'string' ? new RegExp(r) : r; // Next, make sure the regular expression starts with a ^ anchor

  const {
    source,
    flags
  } = regex;
  const reanchor = source[0] !== '^';

  if (reanchor) {
    const newSource = '^' + source;
    regex = new RegExp(newSource, flags);
  }

  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(regex)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].regex(regex)));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a letter. A letter for this purpose is any character with the
 * Unicode `Alphabetic` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     letter.
 */

const uletter = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLetter)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uletter));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is alphanumeric. A character is alphanumeric if it has either the
 * Unicode `Alphabetic` property or the Unicode `Number` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     alphanumeric character.
 */

const ualpha = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reAlpha)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ualpha));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is either an uppercase or titlecase letter. A character is
 * uppercase if it has the Unicode `Uppercase` property and is titlecase
 * if it has the Unicode `Letter, Titlecase` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     uppercase letter.
 */

const uupper = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUpper)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uupper));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a lowercase letter. A character is lowercase if it has the
 * Unicode `Lowercase` property.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     lowercase letter.
 */

const ulower = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reLower)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].ulower));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. Whitespace characters this parser
 * recognizes are space, tab, and any conventional newline (`\r`, `\n`,
 * or `\r\n`).
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     ASCII whitespace character.
 */

const space = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reSpace)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].space));
});
/**
 * A parser that reads a character and succeeds with that character if
 * it is a whitespace character. A character is whitespace for the
 * purpose of this parser if it has the Unicode `White_Space` property.
 *
 * This parser will also recognize the two-character combination `\r\n`
 * as a single instance of whitespace.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     Unicode whitespace character.
 */

const uspace = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUspace)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uspace));
});
/**
 * A parser that reads zero or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser
 * always succeeds; even zero whitespaces is enough to make it succeed,
 * though it will not move the index in that case. This parser skips the
 * whitespace and does not produde a result.
 *
 * @returns {Parser} A parser that always succeeds and skips over any
 *     number of ASCII whitespace characters.
 */

const spaces = () => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rctx, _] = regexParser(reSpaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null);
});
/**
 * A parser that reads zero or more Unicode whitespace characters at the
 * current position in the input. This parser always succeeds; even zero
 * whitespaces is enough to make it succeed, though it will not move the
 * index in that case. This parser skips the whitespace and does not
 * produde a result.
 *
 * @returns {Parser} A parser that always succeeds and skips over any
 *     number of Unicode whitespace characters.
 */

const uspaces = () => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const [rctx, _] = regexParser(reUspaces)(ctx);
  return Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null);
});
/**
 * A parser that reads one or more whitespace characters (space, `\t`,
 * `\r`, or `\n`) at the current position in the input. This parser will
 * only fail if there is not at least one whitespace character read. On
 * success, it skips the whitespace and does not produde a result.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that skips one or more ASCII whitespace
 *     characters.
 */

const spaces1 = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rctx, rres] = regexParser(reSpaces1)(ctx);
  return rres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].spaces1));
});
/**
 * A parser that reads one or more Unicode whitespace characters at the
 * current position in the input. This parser will only fail if there is
 * not at least one whitespace character read. On success, it skips the
 * whitespace and does not produde a result.
 *
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that skips one or more Unicode whitespace
 *     characters.
 */

const uspaces1 = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rctx, rres] = regexParser(reUspaces1)(ctx);
  return rres.status === Ok ? Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["okReply"])(rctx, null) : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].uspaces1));
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
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is an
 *     ASCII newline.
 */

const newline = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reNewline)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].newline));
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
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that succeeds if the next character is a
 *     Unicode newline.
 */

const unewline = m => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
  const [rrep, [rctx, rres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(regexParser(reUnewline)(ctx));
  return rres.status === Ok ? rrep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(rctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].unewline));
});

/***/ }),

/***/ "./src/parsers/string.js":
/*!*******************************!*\
  !*** ./src/parsers/string.js ***!
  \*******************************/
/*! exports provided: str, istr, all, anystr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "str", function() { return str; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "istr", function() { return istr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "anystr", function() { return anystr; });
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
 * If `s` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} s The string to compare against the next characters
 *     of the input.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     matches the next characters in the input.
 */


const str = (s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(s), chars => s === chars)(ctx));
  return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].str(s)));
});
/**
 * A parser that reads a string from the current location in the input
 * and matches it against its supplied string. This match is *not*
 * case-sensitive.
 *
 * If `str` is empty, the parser will automatically succeed. If it is
 * longer than the remaining input, the parser will automatically fail.
 *
 * @param {string} s The string to compare against the next characters
 *     of the input.
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that will succeed if the supplied string
 *     case-insensitively matches the next characters in the input.
 */

const istr = (s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["charLength"])(s), chars => s.toLowerCase() === chars.toLowerCase())(ctx));
  return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].istr(s)));
});
/**
 * A parser that reads the remainder of the input text and results in
 * that text. Succeeds if already at EOF, resulting in an empty string.
 *
 * @returns {Parser} A parser that will always succeed and returns the
 *     remainder of the input.
 */

const all = () => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
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
 * @param {string} [m] The expected error message to use if the parser
 *     fails.
 * @returns {Parser} A parser that reads that many characters and joins
 *     them into a string for its result.
 */

const anystr = (n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   false && false;
   false && false;
  const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(n, () => true)(ctx));
  return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anystr(n)));
});

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! exports provided: encoder, decoder, range, viewToString, stringToView, charLength, nextCharWidth, nextChar, nextChars, quote, dup, commaSeparate, track, wordinal, stringify, replyFn, ferror, nerror, berror */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wordinal", function() { return wordinal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringify", function() { return stringify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replyFn", function() { return replyFn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ferror", function() { return ferror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nerror", function() { return nerror; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "berror", function() { return berror; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/core.js");
/* harmony import */ var _error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error */ "./src/error.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsImFyZ1N0ckFyckZvcm1hdHRlciIsImFyZ1N0clJlZ0Zvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJlcnJvcnMiLCJleHBlY3RlZCIsInAiLCJwcmVwIiwicGN0eCIsInByZXMiLCJkdXAiLCJzdGF0dXMiLCJtZXJnZSIsImZhdGFsUmVwbHkiLCJmYWlsUmVwbHkiLCJvcHQiLCJmZXJyb3IiLCJyZXBseSIsIm9rUmVwbHkiLCJkZWYiLCJ4IiwicGVlayIsImluZGV4IiwibmVycm9yIiwiZW1wdHkiLCJmbiIsInJlcGx5Rm4iLCJub3QiLCJ1bmRlZmluZWQiLCJhdHRlbXB0IiwiRXJyb3JUeXBlIiwiTmVzdGVkIiwiY29tcG91bmQiLCJic2VxIiwidmFsdWVzIiwiY29udGV4dCIsImVycm9yIiwiYmVycm9yIiwicHVzaCIsImJjaGFpbiIsInEiLCJxcmVwIiwicWN0eCIsInFyZXMiLCJiYXBwbHkiLCJibGVmdCIsImJyaWdodCIsImJjb3VudCIsIm4iLCJfIiwicmFuZ2UiLCJidW50aWwiLCJlIiwiZWN0eCIsImVyZXMiLCJiYmxvY2siLCJnIiwiZ2VuIiwibmV4dFZhbHVlIiwiaSIsImRvbmUiLCJuZXh0IiwiYnBpcGUiLCJiYmV0d2VlbiIsInMiLCJzY3R4Iiwic3JlcyIsImpvaW4iLCJ2IiwiZmxhdCIsIkluZmluaXR5IiwiY29tcGFjdCIsImZpbHRlciIsIm50aCIsImZpcnN0Iiwic2Vjb25kIiwidGhpcmQiLCJmb3VydGgiLCJmaWZ0aCIsIm1hcCIsImFwcGx5IiwiY2hhaW4iLCJsb29wTWVzc2FnZSIsInNlcSIsImxlZnQiLCJyaWdodCIsImJsb2NrIiwibWFueSIsInZpZXciLCJieXRlTGVuZ3RoIiwibWFueTEiLCJza2lwIiwic2VwYnkiLCJUeXBlRXJyb3IiLCJzZXBieTEiLCJlbmRieSIsImVuZGJ5MSIsImNvdW50IiwiYmV0d2VlbiIsInVudGlsIiwicGlwZSIsIm9wRm9ybWF0dGVyIiwib3JkIiwibGFzc29jIiwibyIsIm9wcyIsIm9jdHgiLCJvcmVzIiwibGFzc29jMSIsInJhc3NvYyIsInJhc3NvYzEiLCJpc1R5cGVkQXJyYXkiLCJVaW50OEFycmF5IiwiVWludDhDbGFtcGVkQXJyYXkiLCJVaW50MTZBcnJheSIsIlVpbnQzMkFycmF5IiwiSW50OEFycmF5IiwiSW50MTZBcnJheSIsIkludDMyQXJyYXkiLCJGbG9hdDMyQXJyYXkiLCJGbG9hdDY0QXJyYXkiLCJpbnB1dCIsIm1lc3NhZ2UiLCJzdHJpbmdUb1ZpZXciLCJEYXRhVmlldyIsImJ1ZmZlciIsIkFycmF5QnVmZmVyIiwidHJhY2siLCJwYXJzZSIsInN1Y2NlZWRlZCIsInN1Y2Nlc3MiLCJmYWlsdXJlIiwiZm9ybWF0RXJyb3JzIiwicnVuIiwicmVzdWx0IiwidGFiIiwiemVyb1dpZHRoIiwiRXhwZWN0ZWQiLCJVbmV4cGVjdGVkIiwiR2VuZXJpYyIsIkNvbXBvdW5kIiwiT3RoZXIiLCJsYWJlbCIsInVuZXhwZWN0ZWQiLCJnZW5lcmljIiwib3RoZXIiLCJuZXN0ZWQiLCJlcnJvcnMxIiwiZXJyb3JzMiIsImlzTmV3bGluZSIsImJ5dGUiLCJnZXRVaW50OCIsIm5ld2xpbmUiLCJuZXh0Qnl0ZSIsInRoaXJkQnl0ZSIsIm5leHRDaGFyV2lkdGgiLCJnZXRMaW5lSW5kZXhlcyIsInN0YXJ0IiwibGluZW5vIiwiZW5kIiwiZ2V0Q2hhckluZGV4IiwiY2hhckluZGV4IiwiYnl0ZUluZGV4IiwidGFiaWZ5IiwibGluZSIsInRhYlNpemUiLCJ0YWJJbmRleGVzIiwidGFiTWF0Y2giLCJleGVjIiwib2Zmc2V0IiwicHJlSW5kZXhPZmZzZXQiLCJ0YWJJbmRleCIsImFjdHVhbEluZGV4Iiwic3BhY2VDb3VudCIsInN1YnN0cmluZyIsInJlcGVhdCIsImNvbEluZGV4IiwiZ2V0Q29sTnVtYmVyIiwibWF0Y2hlcyIsIm1hdGNoIiwiY29sbm8iLCJzaG93IiwibWF4V2lkdGgiLCJpbmRlbnQiLCJzcCIsIm5ld0NvbG5vIiwiTWF0aCIsImNlaWwiLCJmbG9vciIsImZvcm1hdE5lc3RlZCIsIm5lc3RlZHMiLCJuZXN0ZWRNc2dzIiwiZm9ybWF0IiwiZW5zdXJlTmV3bGluZXMiLCJ0ZXh0IiwicmF3TGluZSIsInZpZXdUb1N0cmluZyIsInBvc2l0aW9uIiwiZGlzcGxheSIsImZpbmQiLCJjb21tYVNlcGFyYXRlIiwidW5leHBNc2ciLCJleHBNc2ciLCJnZW5lcmljTXNnIiwibmVzdGVkTXNnIiwiY29tcG91bmRNc2ciLCJ1bmtub3duTXNnIiwiZW9mTXNnIiwiZ2V0UG9zaXRpb24iLCJjb2x1bW4iLCJzdHJpbmdzIiwiYWxwaGEiLCJhbnkiLCJhbnlzdHIiLCJjaGFyIiwicXVvdGUiLCJkaWdpdCIsImVvZiIsImhleCIsImljaGFyIiwiaXN0ciIsImxldHRlciIsImxvd2VyIiwibm9uZW9mIiwiYXJyYXkiLCJvY3RhbCIsIm9uZW9mIiwicmVnZXgiLCJyZSIsInNwYWNlIiwic3BhY2VzIiwic3BhY2VzMSIsInN0ciIsInVhbHBoYSIsInVsZXR0ZXIiLCJ1bG93ZXIiLCJ1bmV3bGluZSIsInVwcGVyIiwidXNwYWNlIiwidXNwYWNlcyIsInVzcGFjZXMxIiwidXVwcGVyIiwiZXhwZWN0ZWRzIiwiY2hhclBhcnNlciIsIndpZHRoIiwibmV4dENoYXIiLCJjcmVwIiwiY2N0eCIsImNyZXMiLCJjaCIsInRvTG93ZXJDYXNlIiwic2F0aXNmeSIsImNzIiwiYXJyIiwiaW5jbHVkZXMiLCJmYWlsIiwiZmF0YWwiLCJhbHdheXMiLCJyZUxldHRlciIsInJlQWxwaGEiLCJyZVVwcGVyIiwicmVMb3dlciIsInJlU3BhY2UiLCJyZVVzcGFjZSIsInJlU3BhY2VzIiwicmVVc3BhY2VzIiwicmVTcGFjZXMxIiwicmVVc3BhY2VzMSIsInJlTmV3bGluZSIsInJlVW5ld2xpbmUiLCJyZWdleFBhcnNlciIsInJlc3QiLCJyIiwiUmVnRXhwIiwic291cmNlIiwiZmxhZ3MiLCJyZWFuY2hvciIsIm5ld1NvdXJjZSIsInJyZXAiLCJyY3R4IiwicnJlcyIsInN0cmluZ1BhcnNlciIsIm5leHRDaGFycyIsInNyZXAiLCJjaGFycyIsImFsbCIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsImRlY29kZXIiLCJUZXh0RGVjb2RlciIsInN0ZXAiLCJpbmNsdXNpdmUiLCJhYnMiLCJmb3J3YXJkIiwiY3VycmVudCIsImZpbmlzaGVkIiwiYnl0ZXMiLCJmcm9tIiwiZGVjb2RlIiwiZW5jb2RlIiwidmlld0xlbmd0aCIsIm1lc3NhZ2VzIiwibXNncyIsImxhc3QiLCJwcm9wIiwidHJhY2tlZCIsIldlYWtTZXQiLCJkZWZpbmVQcm9wZXJ0eSIsImFkZCIsImhhcyIsImJpbmQiLCJudW1zIiwib25lcyIsInRlbnMiLCJncm91cHMiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwibWFnIiwibG9nMTAiLCJmIiwibXVsdCIsIm51bSIsInJlbSIsImRlc2NyaXB0aW9uIiwiSlNPTiIsImNvbmRpdGlvbiIsImNvbmQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUN6QixDQUFELEVBQUlHLEdBQUosRUFBU0csTUFBVCxDQUFULEdBQTRCWSxNQUFNLENBQUNsQixDQUFELEVBQUlNLE1BQUosQ0FBN0M7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5ub2Fzc2VydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIHN0cmluZ2lmeSwgd29yZGluYWwgfSBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdHRlciA9IHR5cGUgPT5cbiAgdmFsdWUgPT4gYGV4cGVjdGVkICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmNvbnN0IGNoYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnKVxuY29uc3QgZm5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nKVxuY29uc3QgZ2VuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicpXG5jb25zdCBzdHJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nJylcbmNvbnN0IGFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYW4gYXJyYXknKVxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcbmNvbnN0IHN0clJlZ0Zvcm10dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicpXG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgbnVtYmVyJylcbmNvbnN0IHBhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlIGFuZCBhIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJdIFRoZSBwb3NpdGlvbiBvZiB0aGUgdmFsdWUgd2l0aGluIGFuIGFyZ3VtZW50XG4gKiAgICAgbGlzdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW211bHRpcGxlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGVyZSBpcyBtb3JlIHRoYW4gb25lXG4gKiAgICAgYXJndW1lbnQgaW4gdGhlIGZ1bmN0aW9uIHdob3NlIGVycm9yIGlzIGJlaW5nIGZvcm1hdHRlZC4gSWYgdGhpc1xuICogICAgIGlzIGZhbHNlLCB0aGUgYG9yZGVyYCB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgYXJnRm9ybWF0dGVyID0gKHR5cGUsIG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7XG4gICAgbXVsdGlwbGUgPyBgJHt3b3JkaW5hbChvcmRlcil9IGAgOiAnJ1xuICB9YXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IGFyZ0NoYXJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnRm5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnR2VuRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdOdW1Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1BhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBwYXJzZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnU3RyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJBcnJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnU3RyUmVnRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicsIG9yZGVyLCBtdWx0aXBsZSlcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOnN0cmluZ30gZm9ybWF0dGVyXG4gKi9cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzaW5nbGUtY2hhcmFjdGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBub24tcGFyc2VyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBmbkZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IHBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbkZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBhcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHNpbmdsZS1jaGFyYWN0ZXJcbiAqIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XG4gIGlmICghKFxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gbnVtRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgbmVycm9yLCByZXBseUZuIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHBhcnNlcnMgb25lIGF0IGEgdGltZSB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZVxuICogZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIE9uIGZhaWx1cmUgKGZhdGFsIG9yIG90aGVyd2lzZSksIGVycm9yXG4gKiBtZXNzYWdlcyBmcm9tIGFsbCBwYXJzZXJzIHRoYXQgaGFkIGZhaWxlZCBhcmUgbWVyZ2VkIGludG8gYGFsdGAnc1xuICogZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGV4ZWN1dGUsIG9uZSBhdCBhIHRpbWUsXG4gKiAgICAgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ2FsdCcsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG5cbiAgICAgIGlmICghaGFzTSkgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycylcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGVycm9ycylcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlciBpdFxuICogZmFpbHMgb3Igbm90IGJ1dCBvbmx5IGNvbnN1bWluZyBpbnB1dCBpZiBpdCBzdWNjZWVkcy4gVGhpcyBwYXJzZXJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIGZvciBvcHRpb25hbCBjb250ZW50IHRvIGJlIGV4ZWN1dGVkIGFuZFxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJuIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgd2l0aCBubyByZXN1bHQgdW5sZXNzIGl0c1xuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5IGlmXG4gKiAgICAgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdvcHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnb3B0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgY29uc3QgZXJyb3JzID0gZmVycm9yKG0sIHByZXMuZXJyb3JzKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBlcnJvcnMpXG5cbiAgLy8gSWYgdGhlIG9wdGlvbmFsIHBhcnNlciBmYWlscywgd2UgYWRkIHRoZSBlcnJvciBtZXNzYWdlIGV2ZW4gdGhvdWdoXG4gIC8vIHRoZSBlbmQgcmVzdWx0IG9mIGBvcHRgIGlzIHN1Y2Nlc3MuIFRoaXMgbGV0cyBzZXF1ZW5jaW5nIHBhcnNlcnNcbiAgLy8gYWRkIHRoZSBvcHQgcGFyc2VyJ3MgZXhwZWN0ZWQgdG8gZXJyb3IgbWVzc2FnZXMgaWYgYSBsYXRlciBwYXJzZXJcbiAgLy8gaW4gdGhlIHNlcXVlbmNlIGZhaWxzLlxuICBjb25zdCByZXBseSA9IG9rUmVwbHkocGN0eCwgbnVsbClcbiAgcmVwbHlbMV0uZXJyb3JzID0gZXJyb3JzXG4gIHJldHVybiByZXBseVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGVpdGhlciB3aXRoIHRoZSBzdXBwbGllZCBwYXJzZXIncyBzdWNjZXNzZnVsXG4gKiByZXN1bHQgb3IgZWxzZSAoaWYgdGhhdCBwYXJzZXIgZmFpbHMpIHRoZSBzdXBwbGllZCBkZWZhdWx0IHZhbHVlIGB4YC5cbiAqIFRoaXMgcGFyc2VyIG9ubHkgZmFpbHMgaWYgaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSB0aGUgY3JlYXRlZCBwYXJzZXInc1xuICogICAgIHJlc3VsdCBpZiBpdCBzdWNjZWVkcy5cbiAqIEBwYXJhbSB7Kn0geCBBIHZhbHVlIHdoaWNoIHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3MgcmVzdWx0IGlmIHRoZVxuICogICAgIHN1cHBsaWVkIHBhcnNlciBmYWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHJlc3VsdHMgaW4gZWl0aGVyIGl0cyBjb250YWluZWRcbiAqICAgICBwYXJzZXIncyBzdWNjZXNzZnVsIHJlc3VsdCBvciB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWYgPSAocCwgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdkZWYnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZGVmJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKiBTdWNjZXNzIG9yIGZhaWx1cmUgYXJlIHN0aWxsIHJldHVybmVkLCB0aG91Z2ggZmF0YWwgZmFpbHVyZSBpc1xuICogY29udmVydGVkIHRvIG5vbi1mYXRhbCBkdWUgdG8gdGhlIGZhY3QgdGhhdCBubyBpbnB1dCBpcyBjb25zdW1lZC5cbiAqXG4gKiBJZiB0aGUgY29uc2l0dWVudCBwYXJzZXIgZmFpbHMgZmF0YWxseSwgYSBuZXN0ZWQgZXJyb3IgbWVzc2FnZSB3aWxsXG4gKiBiZSBjcmVhdGVkIHRvIHRyYWNrIHRoZSBhY3R1YWwgZXJyb3IgY2F1c2UgYmVmb3JlIHRoaXMgcGFyc2VyXG4gKiBhdXRvbWF0aWNhbGx5IGJhY2t0cmFja3MuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBiZSBleGVjdXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIHN1Y2NlZWRzIG9yIGZhaWxzXG4gKiAgICAgd2l0aCBpdCwgYnV0IHdoaWNoIGNvbnN1bWVzIG5vIGlucHV0IGVpdGhlciB3YXkuXG4gKi9cbmV4cG9ydCBjb25zdCBwZWVrID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncGVlaycsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdwZWVrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2tSZXBseShwY3R4LCBwcmVzLnZhbHVlLCBpbmRleClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpLCBpbmRleClcbiAgfVxuICAvLyBUaGlzIHBhcnNlciBpbXBsZW1lbnRzIGF1dG9tYXRpYyBiYWNrdHJhY2tpbmcsIHNvIGlmIGl0cyBwYXJzZXJcbiAgLy8gZmFpbHMgZmF0YWxseSwgaXQgaGFzIHRvIHRyYWNrIHRoYXQgdGhyb3VnaCBhIG5lc3RlZCBlcnJvclxuICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIG5lcnJvcihtLCBwY3R4LCBwcmVzLmVycm9ycyksIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBwcm92aWRlZCBwYXJzZXIgc3VjY2VlZHMgYnV0IGRvZXMgbm90XG4gKiBjb25zdW1lIGlucHV0LiBJZiB0aGUgcGFyc2VyIHN1Y2NlZWRzIGFueSBvdGhlciB3YXkgb3IgZmFpbHMsIHRoaXNcbiAqIHBhcnNlciB0cmFuc3BhcmVudGx5IHBhc3NlcyB0aGF0IHJlc3VsdCBhbG9uZy5cbiAqXG4gKiBUaGlzIHBhcnNlciwgYnkgZGVmYXVsdCwgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZSBvbiBmYWlsdXJlIGlmIHRoYXRcbiAqIGZhaWx1cmUgd2FzIGNhdXNlZCBieSBhIHN1Y2Nlc3Mgd2l0aCBpbnB1dCBjb25zdW1lZC4gQW4gZXJyb3IgbWVzc2FnZVxuICogY2FuIGJlIHNwZWNpZmllZCBieSBwYXNzaW5nIHRoZSBleHBlY3RlZCBtZXNzYWdlIGluIGFzIHRoZSBvcHRpb25hbFxuICogc2Vjb25kIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBmYWlscyBpZiBgcGAgcGFzc2VzIGJ1dCBjb25zdW1lc1xuICogICAgIGlucHV0LCBvciBvdGhlcndpc2UgcGFzc2VzIHRoZSByZXN1bHQgdGhyb3VnaC5cbiAqL1xuZXhwb3J0IGNvbnN0IGVtcHR5ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW1wdHknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZW1wdHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2sgJiYgcGN0eC5pbmRleCA9PT0gaW5kZXgpIHJldHVybiBva1JlcGx5KHBjdHgsIG51bGwpXG4gIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBzdXBwbGllZCBwYXJzZXIgZmFpbHMsIGJ1dCB3aGljaCBkb2VzXG4gKiBub3QgY29uc3VtZSBpbnB1dC4gSWYgYHBgIHN1Y2NlZWRzLCB0aGlzIHBhcnNlciBmYWlscyBub24tZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciwgYnkgZGVmYXVsdCwgcHJvZHVjZXMgbm8gZXJyb3IgbWVzc2FnZXMgb24gZmFpbHVyZS4gQW5cbiAqIGVycm9yIG1lc3NhZ2UgY2FuIGJlIHNwZWNpZmllZCBieSBwYXNzaW5nIHRoZSBleHBlY3RlZCBtZXNzYWdlIGluIGFzXG4gKiB0aGUgb3B0aW9uYWwgc2Vjb25kIHBhcmFtZXRlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyB3aGVuIGl0XG4gKiAgICAgZmFpbHMsIGJ1dCBkb2VzIG5vdCBjaGFuZ2UgdGhlIHBhcnNlciBjb250ZXh0LCB3aGV0aGVyIG9yIG5vdCBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ25vdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdub3QnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIHJldHVybiBwcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGZhaWxSZXBseShwY3R4LCBmZXJyb3IobSwgdW5kZWZpbmVkKSwgaW5kZXgpXG4gICAgOiBva1JlcGx5KHBjdHgsIG51bGwsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdHZW5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5GdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBmYXRhbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIEVycm9yVHlwZSwgZXhwZWN0ZWQsIG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHtcbiAgYmVycm9yLFxuICBkdXAsXG4gIGZlcnJvcixcbiAgbmVycm9yLFxuICByYW5nZSxcbiAgcmVwbHlGbixcbiAgc3RyaW5naWZ5LFxuICB3b3JkaW5hbCxcbn0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGJhY2t0cmFja3Mgd2hlbiBpdHMgY29udGFpbmVkIHBhcnNlciBmYWlscyBmYXRhbGx5IGFuZFxuICogdHJhbnNmb3JtcyB0aGF0IGZhdGFsIGZhaWx1cmUgaW50byBhIG5vbi1mYXRhbCBvbmUuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhlIGZldyB3YXlzIHRvIGNhdXNlIGEgY29udGFpbmVkIHBhcnNlciB0byBiYWNrdHJhY2tcbiAqIGFmdGVyIGEgZmF0YWwgZmFpbHVyZSAoYHBlZWtgIGFsc28gZG9lcyB0aGF0IGFzIGEgc2lkZSBlZmZlY3QsIGV0Yy4pLlxuICogQWxsIG9mIHRoZSBgQmAgYmFja3RyYWNraW5nIHBhcnNlcnMgYmFja3RyYWNrIG9ubHkgaWYgdGhlIGZhdGFsXG4gKiBmYWlsdXJlIHdhcyBjYXVzZWQgYnkgYSBjb250YWluZWQgcGFyc2VyJ3Mgbm9uLWZhdGFsIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB3aG9zZSBmYXRhbCBmYWlsdXJlcyB3aWxsIGJlIGNvbnZlcnRlZFxuICogICAgIGludG8gbm9uLWZhdGFsIGZhaWx1cmVzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLiBJZiB0aGUgcGFyc2VyIGJhY2t0cmFja3MsIHRoaXMgaW5zdGVhZCBiZWNvbWVzIHRoZSB0ZXh0IG9mXG4gKiAgICAgdGhlIGdlbmVyYXRlZCBjb21wb3VuZCBlcnJvciBtZXNzYWdlLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBjYW5ub3QgZmFpbCBmYXRhbGx5LiBJZiBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyIGZhaWxzIGZhdGFsbHksIHRoaXMgb25lIHdpbGwgaW5zdGVhZCBmYWlsIG5vbi1mYXRhbGx5LlxuICovXG5leHBvcnQgY29uc3QgYXR0ZW1wdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2F0dGVtcHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXR0ZW1wdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgbmVycm9yKG0sIHBjdHgsIHByZXMuZXJyb3JzKSwgaW5kZXgpXG4gIH1cbiAgaWYgKGhhc00pIHtcbiAgICBpZiAocHJlcy5lcnJvcnMubGVuZ3RoID09PSAxICYmIHByZXMuZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpIHtcbiAgICAgIGNvbnN0IHsgY3R4LCBlcnJvcnMgfSA9IHByZXMuZXJyb3JzWzBdXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGNvbXBvdW5kKG0sIGN0eCwgZXJyb3JzKSwgaW5kZXgpXG4gICAgfVxuICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXhwZWN0ZWQobSksIGluZGV4KVxuICB9XG4gIHJldHVybiBmYWlsUmVwbHkocGN0eCwgcHJlcy5lcnJvcnMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmUgZmFpbHMuIEluIHRoZVxuICogZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXMgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5IGFmdGVyIGFsbCBvZiB0aGUgZWFybGllclxuICogcGFyc2VycyBzdWNjZWVkZWQsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSB0aGVcbiAqIHZlcnkgZmlyc3QgcGFyc2VyIHdhcyBleGVjdXRlZCBhbmQgd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gcHMgVGhlIHBhcnNlcnMgdG8gYmUgZXhlY3V0ZWQuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIChvciBjb21wb3VuZCBlcnJvciBtZXNzYWdlLCBpbiB0aGUgY2FzZSBvZlxuICogICAgIGJhY2t0cmFja2luZyBoYXBwZW5pbmcpIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3JcbiAqICAgICBtZXNzYWdlcyBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0XG4gKiAgICAgYSB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBic2VxID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBwc1twcy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ2JzZXEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIGFyZ3MubGVuZ3RoID4gMSkpKVxuXG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGxldCBjb250ZXh0ID0gY3R4XG4gICAgbGV0IGVycm9ycyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgICB9XG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG4gIH0pXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBjaGFpbnMgdGhlIHJlc3VsdCBhZnRlciBhcHBseWluZyBpdHMgY29udGFpbmVkIHBhcnNlclxuICogdG8gYW5vdGhlciBwYXJzZXIgcmV0dXJuZWQgYnkgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLiBUaGUgcGFyc2VyXG4gKiByZXR1cm5zIHRoYXQgcmVzdWx0LlxuICpcbiAqIElmIHRoZSBwYXJzZXIgcmV0dXJuZWQgYnkgYGZuYCBmYWlscyBub24tZmF0YWxseSBhZnRlciBgcGAgc3VjY2VlZHMsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCBhbmRcbiAqIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgLCBwYXNzIHRoZSByZXN1bHQgdG9cbiAqICAgICB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzIHJldHVybiB2YWx1ZSBhcyBhXG4gKiAgICAgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICovXG5leHBvcnQgY29uc3QgYmNoYWluID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JjaGFpbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdiY2hhaW4nLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmNoYWluJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgcSA9IGZuKHByZXMudmFsdWUpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoXG4gICAgJ2JjaGFpbicsIHEsIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHFyZXBcblxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICBjb25zdCBlcnJvciA9IGJlcnJvcihxY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVycm9yLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJlc3VsdHMgaW5cbiAqICAgICB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAgd2hlbiB0aGUgdmFsdWVcbiAqICAgICByZXR1cm5lZCBieSBgcGAgaXMgcGFzc2VkIGludG8gaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBiYXBwbHkgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYXBwbHknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JhcHBseScsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiYXBwbHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHFjdHguaW5kZXggIT09IGluZGV4LCBtLCBxY3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdiYXBwbHknLCBmbiwgZm9ybWF0dGVyKCdzZWNvbmQgYXJndW1lbnQgdG8gcmV0dXJuIGEgZnVuY3Rpb24nKSxcbiAgKVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCB0aGVuXG4gKiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcGAuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIGZpcnN0LlxuICovXG5leHBvcnQgY29uc3QgYmxlZnQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdibGVmdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxlZnQnLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmxlZnQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBva1JlcGx5KHFjdHgsIHByZXMudmFsdWUpXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcblxuICBjb25zdCBlcnJvciA9IGJlcnJvcihxY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVycm9yLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB3aWxsIGFwcGx5IHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCB0aGVuXG4gKiByZXR1cm4gdGhlIHJlc3VsdCBvZiBgcWAuXG4gKlxuICogSWYgYHBgIHN1Y2NlZWRzIGFuZCBgcWAgZmFpbHMsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZVxuICogcG9pbnQgd2hlcmUgYHBgIHdhcyBhcHBsaWVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIGBxYCBhbmQgcmV0dXJucyB0aGVcbiAqICAgICByZXN1bHQgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJyaWdodCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JyaWdodCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYnJpZ2h0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JyaWdodCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcblxuICBjb25zdCBlcnJvciA9IGJlcnJvcihxY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcWN0eCwgZXJyb3JzKVxuICByZXR1cm4gZmFpbFJlcGx5KHFjdHgsIGVycm9yLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGBuYCB0aW1lcywgY29sbGVjdGluZyB0aGVcbiAqIHN1Y2Nlc3NmdWwgcmVzdWx0cyBpbnRvIGFuIGFycmF5LlxuICpcbiAqIElmIGBwYCBmYWlscyBhZnRlciBpbml0aWFsbHkgc3VjY2VlZGluZyBvbmNlIG9yIG1vcmUsIHRoaXMgcGFyc2VyXG4gKiB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmRcbiAqIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBleGVjdXRlIG11bHRpcGxlIHRpbWVzLlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiB0aW1lcyB0byBleGVjdXRlIHRoZSBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYG5gIHRpbWVzIGFuZCByZXN1bHRzIGluXG4gKiAgICAgYW4gYXJyYXkgb2YgYWxsIG9mIHRoZSBzdWNjZXNzZnVsIHJlc3VsdHMgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgYmNvdW50ID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmNvdW50JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdiY291bnQnLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmNvdW50JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBwcmVzLmVycm9ycylcbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgbm9uLWZhdGFsbHkgYmVmb3JlIGBlYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgd2lsbFxuICogYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSBgcGAgd2FzIGV4ZWN1dGVkIHRoZSBmaXJzdCB0aW1lIGFuZCB3aWxsXG4gKiBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgZWAgYW5kIHRoZW4gYHBgIHplcm9cbiAqICAgICBvciBtb3JlIHRpbWVzIHVudGlsIGBlYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGJ1bnRpbCA9IChwLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2J1bnRpbCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYnVudGlsJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2J1bnRpbCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBlY3R4XG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgZmVycm9yKG0sIGVyZXMuZXJyb3JzKSlcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKFxuICAgICAgICBwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgbWVyZ2UocHJlcy5lcnJvcnMsIGVyZXMuZXJyb3JzKSxcbiAgICAgIClcbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYW55IG9mIHRoZSB5aWVsZGVkIHBhcnNlcnMgZmFpbCwgIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvXG4gKiB0aGUgcG9pbnQgd2hlcmUgdGhlIGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbFxuICogbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGcgQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBubyBhcmd1bWVudHNcbiAqICAgICBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3NcbiAqICAgICByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHkgYFBhcnNlcmBzO1xuICogICAgIG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBiYmxvY2sgPSAoZywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0R2VuRnVuY3Rpb24oJ2JibG9jaycsIGcsIGFyZ0dlbkZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiYmxvY2snLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgZ2VuID0gZygpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBbXVxuICBsZXQgbmV4dFZhbHVlXG4gIGxldCBjb250ZXh0ID0gY3R4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgZG9uZSB9ID0gZ2VuLm5leHQobmV4dFZhbHVlKVxuICAgIGlmIChkb25lKSByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSlcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JibG9jaycsIHZhbHVlLCB2ID0+IGBleHBlY3RlZCAke1xuICAgICAgd29yZGluYWwoaSArIDEpXG4gICAgfSB5aWVsZCB0byBiZSB0byBhIHBhcnNlcjsgZm91bmQgJHtzdHJpbmdpZnkodil9YClcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHZhbHVlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgZXJyb3JzKVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlIGFuZCBwYXNzZXMgdGhvc2VcbiAqIHJlc3VsdHMgdG8gYSBmdW5jdGlvbiBvZiB0aGUgc2FtZSBhcml0eSBhcyB0aGUgbnVtYmVyIG9mIHBhcnNlcnMgdG9cbiAqIGV4ZWN1dGUuIFRoZSByZXR1cm4gdmFsdWUgb2YgdGhhdCBmdW5jdGlvbiBiZWNvbWVzIHRoaXMgcGFyc2VyJ3NcbiAqIHJlc3VsdC5cbiAqXG4gKiBJZiBvbmUgb2YgdGhlIHBhcnNlcnMgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYWxsIG9mIHRoZSBlYXJsaWVyXG4gKiBwYXJzZXJzIHN1Y2NlZWRlZCwgdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIHRoZVxuICogdmVyeSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOiopfSBhcmdzIEFuIGFycmF5IG9mIHBhcnNlcnMgdG8gYmVcbiAqICAgICBleGVjdXRlZCBvbmUgYXQgYSB0aW1lLCBpbiBvcmRlciwgZm9sbG93ZWQgYnkgYSBmdW5jdGlvbiB3aGljaFxuICogICAgIHdpbGwgcmVjZWl2ZSBhcyBwYXJhbWV0ZXJzIHRoZSByZXN1bHRzIG9mIGVhY2ggcGFyc2VyLiBJdHMgcmV0dXJuXG4gKiAgICAgdmFsdWUgd2lsbCBiZWNvbWUgdGhlIHJlc3VsdCBvZiB0aGlzIHBhcnNlci4gQSBzaW5nbGUgZnVuY3Rpb25cbiAqICAgICBtdXN0IGJlIHByZXNlbnQgYW5kIGl0IG11c3QgYmUgdGhlIGxhc3QgcGFyYW1ldGVyOyBhbGwgb3RoZXJcbiAqICAgICBwYXJhbWV0ZXJzIG11c3QgYmUgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBleGVjdXRlIGl0cyBwYXJzZXJzIGluIHNlcXVlbmNlLFxuICogICAgIGZlZWQgdGhlIHJlc3VsdHMgdG8gaXRzIGZ1bmN0aW9uLCBhbmQgcmVzdWx0IGluIHRoZSBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgYnBpcGUgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIHBzW3BzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuICBjb25zdCBmbiA9IHBzLnBvcCgpXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PiBhc3NlcnRQYXJzZXIoXG4gICAgICAnYnBpcGUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoaSArIDEsIHRydWUpLFxuICAgICkpXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdicGlwZScsIGZuLCBhcmdGbkZvcm1hdHRlcihwcy5sZW5ndGggKyAxLCB0cnVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gICAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBwcmUsIGNvbnRlbnQsIGFuZCBwb3N0IHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGFueSBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHksIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHdoZXJlXG4gKiBgc2Agd2FzIGV4ZWN1dGVkIGFuZCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBzIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlIFRoZSBsYXN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZSBhbmQgd2hvc2UgcmVzdWx0XG4gKiAgICAgYmVjb21lcyB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGBzYCwgYHBgLCBhbmQgYGVgIGluXG4gKiAgICAgb3JkZXIgYW5kIHRoZW4gcmV0dXJucyB0aGUgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJiZXR3ZWVuID0gKHMsIGUsIHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmJldHdlZW4nLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JiZXR3ZWVuJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYmV0d2VlbicsIHAsIGFyZ1BhckZvcm1hdHRlcigzLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiYmV0d2VlbicsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY3R4KVxuICBpZiAoc3Jlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHNyZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4oc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoc2N0eClcbiAgY29uc3QgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHNyZXMuZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgfVxuXG4gIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUocGN0eClcbiAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KGVjdHgsIGZlcnJvcihtLCBtZXJnZShlcnJvcnMsIGVyZXMuZXJyb3JzKSkpXG4gIH1cbiAgaWYgKGVyZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgY29uc3QgZXJyb3IgPSBiZXJyb3IoXG4gICAgICBlY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgZWN0eCwgbWVyZ2UoZXJyb3JzLCBlcmVzLmVycm9ycyksXG4gICAgKVxuICAgIHJldHVybiBmYWlsUmVwbHkoZWN0eCwgZXJyb3IsIGluZGV4KVxuICB9XG4gIHJldHVybiBva1JlcGx5KGVjdHgsIHByZXMudmFsdWUpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnRm5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEFycmF5LFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgZm9ybWF0dGVyLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIHJlcGx5Rm4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBgcGAncyByZXN1bHRzIGpvaW5lZFxuICogdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgcmVxdWlyZXMgdGhhdCBgcGAgcmV0dXJucyBhblxuICogYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGEgc2luZ2xlXG4gKiAgICAgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgb2Ygc3RyaW5nc1xuICogICAgIHJldHVybmVkIGJ5IGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdqb2luJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2pvaW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdqb2luJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmpvaW4oJycpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gaXRzIHJlc3VsdCB3aXRoIGFsbFxuICogaW50ZXJuYWwgYXJyYXlzIGZsYXR0ZW5lZCBpbnRvIGEgc2luZ2xlLWxldmVsIGFycmF5LiBUaGlzIHJlcXVpcmVzXG4gKiB0aGF0IGBwYCByZXR1cm4gYW4gYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgYVxuICogICAgIHNpbmdsZS1sZXZlbCBhcnJheSBtYWRlIGJ5IGZsYXR0ZW5pbmcgdGhlIGVsZW1lbnRzIG9mIHRoZSBhcnJheVxuICogICAgIHJldHVybmVkIGJ5IGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZsYXQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmbGF0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZsYXQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmbGF0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmZsYXQoSW5maW5pdHkpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIGFuZCByZXR1cm4gaXRzIHJlc3VsdHMgbWludXMgYW55XG4gKiBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy4gVGhpcyByZXF1aXJlcyB0aGF0IGBwYCByZXR1cm5zIGFuXG4gKiBhcnJheTsgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24gaWYgaXQgZG9lcyBub3QuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCBpcyBleHBlY3RlZCB0byByZXR1cm4gYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgcmV0dXJucyBpdHMgcmVzdWx0c1xuICogICAgIG1pbnVzIGFueSBgbnVsbGAgb3IgYHVuZGVmaW5lZGAgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvbXBhY3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjb21wYWN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NvbXBhY3QnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdjb21wYWN0JywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2LmZpbHRlcih4ID0+IHggIT0gbnVsbCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGJ1dCwgb24gc3VjY2VzcywgcmV0dXJucyBgeGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHRvIGFwcGx5LiBJdHMgcmVzdWx0IGlzIGlnbm9yZWQuXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRoYXQgdGhlIG5ldyBwYXJzZXIgd2lsbCByZXN1bHQgaW4gaWYgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYXBwbHkgYHBgIGJ1dCByZXR1cm4gYHhgIG9uXG4gKiAgICAgc3VjY2Vzcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHZhbHVlID0gKHAsIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndmFsdWUnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndmFsdWUnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgYG5gdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheShcbiAgICAnbnRoJywgdiwgZm9ybWF0dGVyKCdmaXJzdCBhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSxcbiAgKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbbl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaXJzdCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaXJzdCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpcnN0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpcnN0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlyc3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgc2Vjb25kIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlY29uZCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzZWNvbmQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdzZWNvbmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgdGhpcmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCB0aGlyZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3RoaXJkJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgndGhpcmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMl0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZm91cnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvdXJ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZvdXJ0aCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmb3VydGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmb3VydGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbM10pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgZmlmdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBmaWZ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmaWZ0aCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2ZpZnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ZpZnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbNF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzIHJlc3VsdCB0b1xuICogdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBgZm1hcGAgb3BlcmF0aW9uIGZyb20gSGFza2VsbCdzIGBGdW5jdG9yYCBjbGFzcy4gSXQnc1xuICogdXNlZCBhcyBhIGJhc2lzIGZvciBsaWZ0aW5nIGZ1bmN0aW9ucyBpbnRvIGEgUGFyc2VyIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdtYXAnLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbWFwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShwY3R4LCBmbihwcmVzLnZhbHVlKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhcHBsaWVzIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcWAgdG8gdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBieSBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIGA8Kj5gIGZyb20gSGFza2VsbCdzIGBBcHBsaWNhdGl2ZWBcbiAqIGNsYXNzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCB3aWxsIGJlIHBhc3NlZCB0byB0aGVcbiAqICAgICBmdW5jdGlvbiByZXR1cm5lZCBieSBgcWAuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBBIHBhcnNlciB3aGljaCBwcm92aWRlcyBhIGZ1bmN0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYXBwbHkgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhcHBseScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYXBwbHknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBmZXJyb3IobSwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSkpXG4gIH1cblxuICBjb25zdCBmbiA9IHFyZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICdhcHBseScsIGZuLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBmdW5jdGlvbicpLFxuICApXG4gIHJldHVybiBva1JlcGx5KHFjdHgsIGZuKHByZXMudmFsdWUpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGNoYWlucyB0aGUgcmVzdWx0IGFmdGVyIGFwcGx5aW5nIGl0cyBjb250YWluZWQgcGFyc2VyXG4gKiB0byBhbm90aGVyIHBhcnNlciByZXR1cm5lZCBieSB0aGUgc3VwcGxpZWQgZnVuY3Rpb24uIFRoZSBwYXJzZXJcbiAqIHJldHVybnMgdGhhdCByZXN1bHQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgdGhlIGZ1bmN0aW9uLXByb3ZpZGVkIHBhcnNlciBmYWlsc1xuICogYWZ0ZXIgdGhlIG90aGVyIHBhcnNlciBjb25zdW1lcyBpbnB1dCwgZXZlbiBpZiB0aGF0IGZhaWx1cmUgaXNcbiAqIG5vbi1mYXRhbC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYE1vbmFkYCBjbGFzcydzIGBiaW5kYCBvcGVyYXRpb25cbiAqIChnZW5lcmFsbHkgd3JpdHRlbiBgPj49YCBpbiBIYXNrZWxsKS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCB1c2UgdGhhdCBmdW5jdGlvbidzXG4gKiAgICAgcmV0dXJuIHZhbHVlIGFzIGEgc2Vjb25kIHBhcnNlciB0byBhcHBseSB0aGUgaW5wdXQgdG8uXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFpbiA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdjaGFpbicsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdjaGFpbicsIGZuLCBhcmdGbkZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjaGFpbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdjaGFpbicsIHEsIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIHBhcnNlcicpLFxuICApXG5cbiAgY29uc3QgW3FyZXAsIFtxY3R4LCBxcmVzXV0gPSBkdXAocShwY3R4KSlcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGZlcnJvcihtLCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKSlcbiAgfVxuICByZXR1cm4gcXJlcFxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdHZW5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5GdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IG1lcmdlIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIHJhbmdlLCByZXBseUZuLCBzdHJpbmdpZnksIHdvcmRpbmFsIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuZnVuY3Rpb24gbG9vcE1lc3NhZ2UobmFtZSkge1xuICByZXR1cm4gYFske25hbWV9XTogaW5maW5pdGUgbG9vcCBkZXRlY3RlZDsgYFxuICAgICsgJ25laXRoZXIgY29udGVudCBub3Igc2VwYXJhdG9yIHBhcnNlciBjb25zdW1lZCBpbnB1dCdcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGltcGxlbWVudHMgYSBzZXF1ZW5jZS4gRWFjaCBzdXBwbGllZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqIGluIG9yZGVyIHVudGlsIGVpdGhlciB0aGV5IGFsbCBzdWNjZWVkIG9yIHRoZSBmaXJzdCBvbmUgZmFpbHMuIEluIHRoZVxuICogZm9ybWVyIGNhc2UsIGFsbCByZXN1bHRzIGFyZSBtZXJnZWQgaW50byBhbiBhcnJheSB0aGF0IGJlY29tZXMgdGhlXG4gKiByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYW55IGlucHV0IHdhcyBjb25zdW1lZCBiZWZvcmUgYW55IG9mXG4gKiBpdHMgcGFyc2VycyBmYWlsLCBldmVuIGlmIHRoYXQgZmFpbHVyZSBpdHNlbGYgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IGFyZ3MgVGhlIHBhcnNlcnMgdG8gYmUgZXhlY3V0ZWQuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlcnMgb25lIGF0XG4gKiAgICAgYSB0aW1lLCBpbiBvcmRlciwgYW5kIGZhaWxzIGlmIGFueSBvZiB0aG9zZSBwYXJzZXJzIGZhaWwuXG4gKi9cbmV4cG9ydCBjb25zdCBzZXEgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ3NlcScsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGxldCBlcnJvcnMgPSBmZXJyb3IobSwgW10pXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGlmICghaGFzTSkgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IGNvbnRleHQuaW5kZXggIT09IGluZGV4KVxuICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgZXJyb3JzKVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHJldHVybnNcbiAqIHRoZSByZXN1bHQgb2YgYHBgLiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYXBwbGljYXRpdmUgYDwqYFxuICogaW4gSGFza2VsbC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBgcWAgZmFpbHMgYWZ0ZXIgYHBgIGNvbnN1bWVzIGlucHV0LFxuICogZXZlbiBpZiBgcWAncyBmYWlsdXJlIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xlZnQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICBjb25zdCBmbiA9IHByZXMuc3RhdHVzID09PSBGYXRhbCA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxY3R4LCBxcmVzXSA9IHEocGN0eClcbiAgaWYgKHFyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihxcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcWN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgcmV0dXJuIGZuKHFjdHgsIGZlcnJvcihtLCBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShxY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBwYXJzZXJzIGBwYCBhbmQgYHFgIGluIG9yZGVyIGFuZCByZXR1cm5zXG4gKiB0aGUgcmVzdWx0IG9mIGBxYC4gVGhpcyBpcyB0aGUgc2FtZSBvcGVyYXRpb24gYXMgdGhlIGFwcGxpY2F0aXZlIGAqPmBcbiAqIGluIEhhc2tlbGwuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkgaWYgYHFgIGZhaWxzIGFmdGVyIGBwYCBjb25zdW1lcyBpbnB1dCxcbiAqIGV2ZW4gaWYgYHFgJ3MgZmFpbHVyZSB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBxIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGJvdGggY29udGFpbmVkIHBhcnNlcnMgYW5kXG4gKiAgICAgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2YgdGhlIHNlY29uZC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJpZ2h0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmlnaHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3JpZ2h0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gU3RhdHVzLk9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocWN0eC5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBmZXJyb3IobSwgbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSkpXG4gIH1cbiAgcmV0dXJuIHFyZXBcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBhIGJsb2NrIG9mIGNvZGUgaW4gdGhlIGZvcm0gb2YgYSBnZW5lcmF0b3JcbiAqIGZ1bmN0aW9uLiBJbnNpZGUgdGhhdCBmdW5jdGlvbiwgcGFyc2VycyB0aGF0IGFyZSBgeWllbGRgZWQgd2lsbCBiZVxuICogZXhlY3V0ZWQgYW5kIHdpbGwgZXZhbHVhdGUgdG8gdGhlaXIgcmVzdWx0cyAod2hpY2ggY2FuIHRoZW4gYmVcbiAqIGFzc2lnbmVkIHRvIHZhcmlhYmxlcywgZXRjLikuXG4gKlxuICogSWYgYWxsIHBhcnNlcnMgaW4gdGhlIGJsb2NrIHN1Y2NlZWQsIGBibG9ja2Agd2lsbCBzdWNjZWVkIHdpdGggdGhlXG4gKiB2YWx1ZSB0aGF0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gcmV0dXJuZWQuXG4gKlxuICogSWYgYW55IHlpZWxkZWQgcGFyc2VyIGZhaWxzIGFmdGVyIGFub3RoZXIgeWllbGRlZCBwYXJzZXIgaGFzIGNvbnN1bWVkXG4gKiBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogT25seSBwYXJzZXJzIG1heSBiZSB5aWVsZGVkIGluIGEgYmxvY2suIFlpZWxkaW5nIGFueXRoaW5nIGVsc2Ugd2lsbFxuICogY2F1c2UgYW4gZXJyb3IgdG8gYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRzXG4gKiAgICAgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5IGBQYXJzZXJgcztcbiAqICAgICBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLFxuICogICAgIGV4ZWN1dGVzIHBhcnNlcnMgYXMgdGhleSBhcmUgeWllbGRlZCwgYW5kIHJlc3VsdHMgaW4gdGhlIHJldHVyblxuICogICAgIHZhbHVlIG9mIHRoZSBnZW5lcmF0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBibG9jayA9IChnLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRHZW5GdW5jdGlvbignYmxvY2snLCBnLCBhcmdHZW5Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmxvY2snLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgZ2VuID0gZygpXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGxldCBlcnJvcnMgPSBmZXJyb3IobSwgW10pXG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IGNvbnRleHQgPSBjdHhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXG4gICAgaWYgKGRvbmUpIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIHdvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSB2YWx1ZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZmFpbCBub24tZmF0YWxseTsgaG93ZXZlciwgaWYgYHBgIGV2ZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZW4gc28gd2lsbCB0aGlzIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBleGVjdXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYW55JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPj0gY29udGV4dC52aWV3LmJ5dGVMZW5ndGgpIGJyZWFrXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcyB1bnRpbCBpdCBmYWlscyxcbiAqIGNvbGxlY3RpbmcgdGhlIHJlc3VsdHMgaW50byBhbiBhcnJheSB0aGF0IGlzIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbiBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2VzIG5vdCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGBwYCBldmVyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQgb25lIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55MSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hbnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ21hbnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBkaXNjYXJkcyBhbnkgc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGVcbiAqIHN0aWxsIGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBgcGAgZG9lcyBvblxuICogICAgIHN1Y2Nlc3MsIGJ1dCB3aWxsIHByb2R1Y2Ugbm8gcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc2tpcCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXAnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2tpcCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgemVybyBvciBtb3JlIHRpbWVzLCBleGVjdXRpbmcgYHNgIGluXG4gKiBiZXR3ZWVuIGVhY2guIFRoZSByZXN1bHRzIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmRcbiAqIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwYnkgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBieScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnknLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwYnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBmZXJyb3IobSwgc3Jlcy5lcnJvcnMpKVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBieScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaC4gVGhlIHJlc3VsdHMgb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZFxuICogcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwYnkxID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBieTEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwYnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnc2VwYnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaCBhbmQgb3B0aW9uYWxseSBhZnRlciB0aGUgbGFzdCBtYXRjaCBvZiBgcGAuIFRoZSByZXN1bHRzXG4gKiBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgbm9uLWZhdGFsbHksIGFzIG1hdGNoaW5nIGBwYCB6ZXJvIHRpbWVzIGlzXG4gKiB2YWxpZC4gSXQgY2FuIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgZW5kYnkgPSAocCwgcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbmRieScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kYnknLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZW5kYnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgbGV0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBmZXJyb3IobSwgc3Jlcy5lcnJvcnMpKVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdlbmRieScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBvbmUgb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3QgZW5kYnkxID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kYnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbmRieTEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZW5kYnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgZmVycm9yKG0sIHNyZXMuZXJyb3JzKSlcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kYnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgYW55IGlucHV0IGhhcyBiZWVuIGNvbnN1bWVkIGJ5IGEgcHJpb3IgZXhlY3V0aW9uXG4gKiBvZiBgcGAsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGV4ZWN1dGUgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGV4ZWN1dGUgdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50ID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY291bnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2NvdW50JywgbiwgYXJnTnVtRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NvdW50JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIH1cbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgaXRzIHN0YXJ0LCBjb250ZW50LCBhbmQgZW5kIHBhcnNlcnMgaW4gb3JkZXJcbiAqIGFuZCByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICpcbiAqIElmIGVpdGhlciBgcGAgb3IgYGVgIGZhaWxzIGFmdGVyIGEgcHJpb3IgcGFyc2VyIGhhcyBjb25zdW1lZFxuICogaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBzIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgbGFzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgc2Vjb25kIHBhcnNlciB0byBhcHBseSBhbmQgd2hvc2UgcmVzdWx0IGJlY29tZXNcbiAqICAgICB0aGUgcmVzdWx0IG9mIHRoZSBuZXcgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggYXBwbGllcyBpdHMgcGFyc2VycyBpbiB0aGUgY29ycmVjdFxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJlc3VsdHMgaW4gdGhlIHJlc3VsdCBvZiBpdHMgY29udGVudCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBiZXR3ZWVuID0gKHMsIGUsIHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHMsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmV0d2VlbicsIHAsIGFyZ1BhckZvcm1hdHRlcigzLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdiZXR3ZWVuJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjdHgpXG4gIGlmIChzcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oc3Jlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihzY3R4LCBmZXJyb3IobSwgc3Jlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChzY3R4KVxuICBjb25zdCBlcnJvcnMgPSBmZXJyb3IoXG4gICAgbSwgcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKHNyZXMuZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXSxcbiAgKVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocGN0eCwgZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShwY3R4KVxuICBpZiAoZXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKGVyZXMuc3RhdHVzID09PSBGYXRhbCB8fCBlY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4oZWN0eCwgZmVycm9yKG0sIG1lcmdlKGVycm9ycywgZXJlcy5lcnJvcnMpKSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShlY3R4LCBwcmVzLnZhbHVlKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBhIGNvbnRlbnQgcGFyc2VyIHplcm8gb3IgbW9yZSB0aW1lcyB1bnRpbCBhblxuICogZW5kIHBhcnNlciBpcyBzdWNjZXNzZnVsLiBUaGlzIHBhcnNlciByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZlxuICogdGhlIHN1Y2Nlc3NmdWwgY29udGVudCBwYXJzZXIgcmVzdWx0cy4gVGhlIGVuZCBwYXJzZXIgaXMgZXhlY3V0ZWRcbiAqICpmaXJzdCosIHNvIHRoZSByZXN1bHRzIG9mIHRoZSB0d28gcGFyc2VycyB3aWxsIG5vdCBvdmVybGFwLlxuICpcbiAqIElmIGBwYCBmYWlscyBiZWZvcmUgYGVgIHN1Y2NlZWRzIGJ1dCBhZnRlciBwcmlvciBleGVjdXRpb25zIG9mIGBwYFxuICogaGF2ZSBjb25zdW1lZCBpbnB1dCwgdGhpcyBwYXJzZXIgd2lsbCBmYWlsIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyLiBJdHMgcmVzdWx0cyBhcmUgcHVzaGVkIGludG8gYW5cbiAqICAgICBhcnJheSBhbmQgYmVjb21lIHRoZSByZXR1cm5lZCBwYXJzZXIncyByZXN1bHQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgZW5kIHBhcnNlci4gUGFyc2luZyBlbmRzIHdoZW4gdGhpcyBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy4gSXRzIHJlc3VsdCBpcyBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYHBgIHplcm8gb3IgbW9yZSB0aW1lc1xuICogICAgIHVudGlsIGBlYCBzdWNjZWVkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVudGlsID0gKHAsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigndW50aWwnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgZSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VudGlsJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKGNvbnRleHQpXG4gICAgY29udGV4dCA9IGVjdHhcbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShlY3R4LCBmZXJyb3IobSwgZXJlcy5lcnJvcnMpKVxuICAgIGlmIChlcmVzLnN0YXR1cyA9PT0gT2spIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBtZXJnZShwcmVzLmVycm9ycywgZXJlcy5lcnJvcnMpKSlcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3NlcyB0aG9zZVxuICogcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2YgcGFyc2VycyB0b1xuICogZXhlY3V0ZS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhpcyBwYXJzZXInc1xuICogcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBhZnRlciBwcmlvciBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBpcyBlcXVpdmFsZW50IHRvIHRoZSBhcHBsaWNhdGl2ZSBsaWZ0IG9wZXJhdGlvbiwgbGlmdGluZ1xuICogbXVsdGktcGFyYW1ldGVyIGZ1bmN0aW9ucyBpbnRvIHRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBJdCBhY3RzIGxpa2VcbiAqIGBsaWZ0QTJgIGlmIHR3byBwYXJzZXJzIGFyZSBwYXNzZWQgaW4sIGBsaWZ0QTNgIGlmIHRocmVlIGFyZSBwYXNzZWRcbiAqIGluLCBldGMuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOip8c3RyaW5nKX0gYXJncyBBbiBhcnJheSBvZiBwYXJzZXJzXG4gKiAgICAgdG8gYmUgZXhlY3V0ZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb25cbiAqICAgICB3aGljaCB3aWxsIHJlY2VpdmUgYXMgcGFyYW1ldGVycyB0aGUgcmVzdWx0cyBvZiBlYWNoIHBhcnNlci4gSXRzXG4gKiAgICAgcmV0dXJuIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhpcyBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGNvbWUgYWZ0ZXIgdGhlIHBhcnNlcnMuXG4gKiAgICAgT3B0aW9uYWxseSwgYSBzdHJpbmcgbWF5IGJlIHRoZSBsYXN0IGFyZ3VtZW50OyBpZiBpdCBpcyBwcmVzZW50LFxuICogICAgIGl0IHJlcGxhY2VzIHRoZSBkZWZhdWx0IGVycm9yIG1lc3NhZ2UgaW4gdGhlIGV2ZW50IHRoYXQgdGhlXG4gKiAgICAgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgaXRzIHBhcnNlcnMgaW4gb3JkZXIsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+IGFzc2VydFBhcnNlcihcbiAgICAgICdwaXBlJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSxcbiAgICApKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBhcmdGbkZvcm1hdHRlcihwcy5sZW5ndGggKyAxLCB0cnVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBmZXJyb3IobSwgW10pXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICAgIGNvbnRleHQgPSBwY3R4XG4gICAgICBpZiAoIWhhc00pIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgICAgcmV0dXJuIGZuKHBjdHgsIGVycm9ycylcbiAgICAgIH1cbiAgICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgfVxuICAgIHJldHVybiBva1JlcGx5KGNvbnRleHQsIGZuKC4uLnZhbHVlcykpXG4gIH0pXG59XG5cbi8qKlxuICogUHJpdmF0ZSBmb3JtYXR0aW5nIGZ1bmN0aW9uIGZvciBhc3NlcnRpb24gbWVzc2FnZXMgYWJvdXQgb3AgcGFyc2Vyc1xuICogbm90IHJldHVybmluZyBmdW5jdGlvbnNcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gb3JkIFRoZSBudW1iZXIgb2YgdGhlIG9wIHBhcnNlciB0aGF0IGZhaWxzIHRvIHByb2R1Y2VcbiAqICAgICBhIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBBbiBhcHByb3ByaWF0ZSBhc3NlcnRpb24gZmFpbHVyZSBtZXNzYWdlLlxuICovXG5mdW5jdGlvbiBvcEZvcm1hdHRlcihvcmQpIHtcbiAgcmV0dXJuIHZhbHVlID0+IGBleHBlY3RlZCAke29yZH0gb3AgcGFyc2VyIHRvIHJldHVybiBhIGZ1bmN0aW9uOyBmb3VuZCAke1xuICAgIHN0cmluZ2lmeSh2YWx1ZSlcbiAgfWBcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9wYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCBsZWZ0IGFzc29jaXRpdmVseSB0byB0aGUgdmFsdWVzXG4gKiAgICAgdGhhdCByZXN1bHQgZnJvbSBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBsYXNzb2MgPSAocCwgbywgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYXNzb2MnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xhc3NvYycsIG8sIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdsYXNzb2MnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgeClcblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb2N0eCwgb3Jlc10gPSBvKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG9jdHhcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShvY3R4LCBmZXJyb3IobSwgb3Jlcy5lcnJvcnMpKVxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdsYXNzb2MnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpKVxuXG4gICAgb3BzLnB1c2gob3Jlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzWzBdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlLCB2YWx1ZXNbaSArIDFdKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgbGVmdCBhc3NvY2lhdGl2ZVxuICogYXBwbGljYXRpb24gb2YgdGhlIGZ1bmN0aW9ucyB0aGF0IGFyZSB0aGUgYG9gIHJlc3VsdHMgdG8gdGhlIHJlc3VsdHNcbiAqIG9mIGBwYC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgbm9uLWZhdGFsbHkgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdFxuICogb25jZS4gT3RoZXJ3aXNlIGl0IGNhbiBvbmx5IGZhaWwgZmF0YWxseSBpZiBgcGAgb3IgYG9gIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb2AgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gbyBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIG1hdGNoIHplcm8gb3IgbW9yZSBvY2N1cmVuY2VzXG4gKiAgICAgb2YgYHBgIHNlcGFyYXRlZCBieSBgb2AgYW5kIHJlc3VsdCBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnlcbiAqICAgICBhcHBseWluZyB0aGUgZnVuY3Rpb25zIGZyb20gYG9gIGxlZnQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxhc3NvYzEgPSAocCwgbywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYXNzb2MxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYXNzb2MxJywgbywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xhc3NvYzEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgZmVycm9yKG0sIG9yZXMuZXJyb3JzKSlcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdsYXNzb2MxJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmFzc29jID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmFzc29jJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmFzc29jJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgZmVycm9yKG0sIG9yZXMuZXJyb3JzKSlcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncmFzc29jJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSlcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgb25lIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBmYWlsIG5vbi1mYXRhbGx5IGlmIGBwYCBkb2Vzbid0IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIE90aGVyd2lzZSBpdCBjYW4gb25seSBmYWlsIGZhdGFsbHkgaWYgYHBgIG9yIGBvYCBmYWlscyBmYXRhbGx5LlxuICpcbiAqIElmIGFueSByZXN1bHQgb2YgYG9gIGlzIG5vdCBhIGZ1bmN0aW9uLCBhbiBlcnJvciB3aWxsIGJlIHRocm93bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIgdG8gbWF0Y2ggemVybyBvciBtb3JlIHRpbWVzLlxuICogQHBhcmFtIHtQYXJzZXJ9IG8gVGhlIG9wZXJhdGlvbiBwYXJzZXIgdG8gbWF0Y2ggaW4gYmV0d2VlbiBlYWNoXG4gKiAgICAgYXBwbGljYXRpb24gb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmFzc29jMSA9IChwLCBvLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3Jhc3NvYzEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3Jhc3NvYzEnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmFzc29jMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cbiAgY29uc3Qgb3BzID0gW11cbiAgbGV0IGNvbnRleHQgPSBwY3R4XG4gIGxldCBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbb2N0eCwgb3Jlc10gPSBvKGNvbnRleHQpXG4gICAgY29udGV4dCA9IG9jdHhcbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShvY3R4LCBmZXJyb3IobSwgb3Jlcy5lcnJvcnMpKVxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKFxuICAgICAgJ3Jhc3NvYzEnLCBvcmVzLnZhbHVlLCBvcEZvcm1hdHRlcih3b3JkaW5hbChpICsgMSkpLFxuICAgIClcblxuICAgIG9wcy5wdXNoKG9yZXMudmFsdWUpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpbmRleCA9IGNvbnRleHQuaW5kZXhcbiAgICBpKytcbiAgfVxuXG4gIGxldCB2YWx1ZSA9IHZhbHVlc1t2YWx1ZXMubGVuZ3RoIC0gMV1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGggLSAxLCAtMSkpIHtcbiAgICB2YWx1ZSA9IG9wc1tpXSh2YWx1ZXNbaV0sIHZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBmb3JtYXRFcnJvcnMgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgZHVwLCBzdHJpbmdUb1ZpZXcsIHRyYWNrIH0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvci5qcycpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBpbnB1dCB2YWx1ZSBpcyBhbiBpbnN0YW5jZSBvZiBvbmUgb2YgdGhlIHR5cGVzXG4gKiBvZiB0eXBlZCBhcnJheXMuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdGVzdC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBXaGV0aGVyIG9yIG5vdCBgdmFsdWVgIGlzIGEgdHlwZWQgYXJyYXkuXG4gKi9cbmZ1bmN0aW9uIGlzVHlwZWRBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBVaW50OEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBJbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDE2QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQ2NEFycmF5XG59XG5cbi8qKlxuICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBzdGF0dXMgb2YgdGhlIGxhc3QgcGFyc2luZyBvcGVyYXRpb24uXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgU3RhdHVzID0ge1xuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2Ugd2FzIHN1Y2Nlc3NmdWwuICovXG4gIE9rOiAnb2snLFxuICAvKiogSW5kaWNhdGVzIHRoYXQgdGhlIGxhc3QgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LiAqL1xuICBGYWlsOiAnZmFpbCcsXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgYW5kIGNvbnN1bWVkIGlucHV0LiAqL1xuICBGYXRhbDogJ2ZhdGFsJyxcbn1cblxuLyoqXG4gKiBUaGUgY29udGV4dCBvZiBhIHBhcnNlci4gVGhpcyBvYmplY3QgY29udGFpbnMgdGhlIGlucHV0IHRleHQgYW5kIGFcbiAqIHBvaW50ZXIgdG8gdGhlIGN1cnJlbnQgbG9jYXRpb24gd2l0aGluIGl0LlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbnRleHRcbiAqIEBwcm9wZXJ0eSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIGRhdGEgdmlldyB3aGVyZSB0aGVcbiAqICAgICBuZXh0IHBhcnNpbmcgb3BlcmF0aW9uIHdpbGwgdGFrZSBwbGFjZSAob3Igd2hlcmUgdGhlIGxhc3Qgb25lXG4gKiAgICAgcmVzdWx0ZWQgaW4gYW4gZXJyb3IpLlxuICovXG5cbi8qKlxuICogQSByZXN1bHQgZnJvbSBhIHBhcnNlciBhcHBsaWNhdGlvbiwgc3VjY2Vzc2Z1bCBvciBub3QuIFRoaXMgaXNcbiAqIGVzc2VudGlhbGx5IGEgdW5pb24gb2Ygc3VjY2Vzc2Z1bCB2YWx1ZSBhbmQgZmFpbHVyZSBlcnJvciwgd2l0aCB0aGVcbiAqIGBzdGF0dXNgIHByb3BlcnR5IHRvIGRldGVybWluZSB3aGljaCBpcyB2YWxpZC5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBSZXN1bHRcbiAqIEBwcm9wZXJ0eSB7U3RhdHVzfSBzdGF0dXMgVGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBhdHRlbXB0ZWQgcGFyc2Ugb2ZcbiAqICAgICB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwcm9wZXJ0eSB7Kn0gdmFsdWUgVGhlIHZhbHVlIG9mIGEgc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqIEBwcm9wZXJ0eSB7RXJyb3JMaXN0fSBlcnJvcnMgQSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkXG4gKiAgICAgZHVyaW5nIGFuIHVuc3VjY2Vzc2Z1bCBwYXJzZS5cbiAqL1xuXG4vKipcbiAqIFRoZSBvYmplY3QgdGhhdCBpcyByZXR1cm5lZCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBpbmNsdWRpbmcgdGhlXG4gKiBjb250ZXh0IGFuZCB0aGUgcmVzdWx0LlxuICogQHR5cGVkZWYge1tDb250ZXh0LCBSZXN1bHRdfSBSZXBseVxuICovXG5cbi8qKlxuICogQSB0eXBlZCBhcnJheSBvZiBhbnkgYnVpbHQtaW4ga2luZC5cbiAqXG4gKiBAdHlwZWRlZlxuICogICB7KFVpbnQ4QXJyYXl8VWludDhDbGFtcGVkQXJyYXl8VWludDE2QXJyYXl8VWludDMyQXJyYXl8SW50OEFycmF5fFxuICogICBJbnQxNkFycmF5fEludDMyQXJyYXl8RmxvYXQzMkFycmF5fEZsb2F0NjRBcnJheSl9IFR5cGVkQXJyYXlcbiAqL1xuXG4vKipcbiAqIElucHV0IHRleHQgdG8gYmUgcGFyc2VkLlxuICpcbiAqIEB0eXBlZGVmIHsoc3RyaW5nfEFycmF5QnVmZmVyfFR5cGVkQXJyYXl8RGF0YVZpZXcpfSBJbnB1dFxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldywgZW1wdHkgcGFyc2VyIGNvbnRleHQuIFRoaXMgaXMgbm90IGV4cG9ydGVkIGJlY2F1c2UgYVxuICogbmV3IGNvbnRleHQgaXMgb25seSBjcmVhdGVkIGJlZm9yZSBwYXJzaW5nLCBpbiB0aGUgYHBhcnNlYCBmdW5jdGlvbi5cbiAqIEFueSBmdXJ0aGVyIGNvbnRleHRzIGFyZSBkZXJpdmVkIGZyb20gdGhlIGNvbnRleHQgdXNpbmcge0BsaW5rIG9rfSxcbiAqIHtAbGluayBlcnJvcn0sIG9yIHtAbGluayBmYXRhbH0uXG4gKlxuICogQHBhcmFtIHtJbnB1dH0gaW5wdXQgVGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7Q29udGV4dH0gQW4gZW1wdHkgcGFyc2VyIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb250ZXh0KGlucHV0KSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSAnUGFyc2VyIGlucHV0IG11c3QgYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksIGFuIGFycmF5ICdcbiAgICArIGBidWZmZXIsIG9yIGEgZGF0YSB2aWV3OyBwYXJzZXIgaW5wdXQgd2FzICR7dHlwZW9mIGlucHV0fWBcblxuICBjb25zdCB2aWV3ID0gKGlucHV0ID0+IHtcbiAgICBpZiAodHlwZW9mIGlucHV0ID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIHN0cmluZ1RvVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlzVHlwZWRBcnJheShpbnB1dCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0YVZpZXcoaW5wdXQuYnVmZmVyKVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dClcbiAgICB9XG4gICAgaWYgKGlucHV0IGluc3RhbmNlb2YgRGF0YVZpZXcpIHtcbiAgICAgIHJldHVybiBpbnB1dFxuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfSkoaW5wdXQpXG5cbiAgcmV0dXJuIHtcbiAgICB2aWV3LFxuICAgIGluZGV4OiAwLFxuICB9XG59XG5cbi8qKlxuICogQSBwYXJzaW5nIGZ1bmN0aW9uLiBUaGlzIGlzIHNpbXBseSBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYSBwYXJzZXJcbiAqIGNvbnRleHQsIHVwZGF0ZXMgaXQgc29tZWhvdyAoZ2VuZXJhbGx5IGJ5IHJlYWRpbmcgYSBjaGFyYWN0ZXIpLCBhbmRcbiAqIHJldHVybnMgdGhlIHVwZGF0ZWQgY29udGV4dC5cbiAqXG4gKiBAY2FsbGJhY2sgUGFyc2VyXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBiZWZvcmUgdGhlIHBhcnNlciBpcyBydW4uXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSB1cGRhdGVkIGNvbnRleHQgYWZ0ZXIgdGhlIHBhcnNlciBpcyBhcHBsaWVkIGFuZFxuICogICAgIHRoZSByZXN1bHQgb2YgdGhhdCBwYXJzZXIgYXBwbGljYXRpb24uXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGBQYXJzZXJgLiBUaGlzIGZhY3Rvcnkgc2ltcGx5IHRha2VzIGEgcGFyc2VyIGZ1bmN0aW9uXG4gKiBhbmQgcmV0dXJucyB0aGUgc2FtZSBwYXJzZXIgZnVuY3Rpb247IHRoZSBwdXJwb3NlIG9mIHRoZSBmYWN0b3J5IGlzXG4gKiB0byB0cmFjayBwYXJzZXJzIHRoYXQgaXQgaGFzIGNyZWF0ZWQuXG4gKlxuICogSWYgYXNzZXJ0aW9ucyBhcmUgZW5hYmxlZCwgdGhpcyB3aWxsIG1lYW4gdGhhdCBhbnkgcGFyc2VyIGNvbWJpbmF0b3JcbiAqIHdpbGwgYXNzZXJ0IHRoYXQgdGhlIHBhcnNlciB0aGF0IGlzIHBhc3NlZCB0byBpdCB3YXMgY3JlYXRlZCBieSB0aGlzXG4gKiBmYWN0b3J5IGZ1bmN0aW9uLiBBbnkgb3RoZXIgd2lsbCBjYXVzZSBhbiBleGNlcHRpb24gdG8gYmUgdGhyb3duLFxuICogZXZlbiBpZiBpdCBhY2NlcHRzIHRoZSByaWdodCBraW5kIG9mIGFyZ3VtZW50IGFuZCByZXR1cm5zIHRoZSBwcm9wZXJcbiAqIHJldHVybiB2YWx1ZS4gSWYgYXNzZXJ0aW9ucyBhcmUgbm90IGVuYWJsZWQsIHRoaXMgY2hlY2sgd2lsbCBub3QgYmVcbiAqIGRvbmUuXG4gKlxuICogRXZlcnkgcGFyc2VyIGluIHRoaXMgbGlicmFyeSBpcyBjcmVhdGVkIHdpdGggYG1ha2VQYXJzZXJgLCBzbyBhbnkgb2ZcbiAqIHRob3NlIG9yIGFueSBwYXJzZXIgY29tcG9zZWQgZnJvbSB0aG9zZSB3aWxsIHdvcmsgYXV0b21hdGljYWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gZm4gQSBwYXJzZXIgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBUaGUgc2FtZSBwYXJzZXIgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBwYXJzZXIgPSB0cmFjayhmbiA9PiBmbilcblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyByZXBseSBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBzdWNjZWVkZWQuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgcHJpb3IgdG8gdGhlIHBhcnNlciBiZWluZyBhcHBsaWVkLlxuICogQHBhcmFtIHsqfSBbdmFsdWU9bnVsbF0gVGhlIG5ldyByZXN1bHQgb2YgdGhlIHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgcGFyc2VyXG4gKiAgICAgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHN1Y2NlZWRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9rUmVwbHkoY3R4LCB2YWx1ZSA9IG51bGwsIGluZGV4ID0gY3R4LmluZGV4KSB7XG4gIHJldHVybiBbeyAuLi5jdHgsIGluZGV4IH0sIHsgc3RhdHVzOiBTdGF0dXMuT2ssIHZhbHVlIH1dXG59XG5cbi8qKlxuICogUHJvZHVjZXMgYSBuZXcgcmVwbHkgaW5kaWNhdGluZyB0aGF0IGEgcGFyc2UgZmFpbGVkIHdpdGhvdXQgY29uc3VtaW5nXG4gKiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9ycz1bXV0gVGhlIGVycm9ycyBhc3NvY2lhdGVkIHdpdGggdGhlIGNvbnRleHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZXg9Y3R4LmluZGV4XSBUaGUgdXBkYXRlZCBpbmRleCBhZnRlciB0aGUgbGF0ZXN0XG4gKiAgICAgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHJldHVybnMge1JlcGx5fSBBIG5ldyBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBjb250ZXh0IGFuZCByZXN1bHRcbiAqICAgICBhZnRlciB0aGUgbGF0ZXN0IHBhcnNlciBmYWlsZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWlsUmVwbHkoY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYWlsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyByZXBseSBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2hpbGUgY29uc3VtaW5nXG4gKiBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gW2Vycm9ycz1bXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udGV4dFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhdGFsUmVwbHkoY3R4LCBlcnJvcnMgPSBbXSwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5GYXRhbCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQXBwbGllcyBhIHBhcnNlciB0byBpbnB1dC4gVGhpcyBpbnB1dCBjYW4gYmUgYSBzdHJpbmcsIGEgdHlwZWQgYXJyYXksXG4gKiBhbiBhcnJheSBidWZmZXIsIG9yIGEgZGF0YSB2aWV3LiBUaGUgcmV0dXJuIHZhbHVlIGlzIHRoZSBmaW5hbCBwYXJzZXJcbiAqIGNvbnRleHQgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciBhZnRlciBiZWluZyBydW4uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxuICogQHBhcmFtIHtJbnB1dH0gaW5wdXQgVGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IFRoZSBmaW5hbCBjb250ZXh0IGFmdGVyIGFsbCBwYXJzZXJzIGhhdmUgYmVlblxuICogICAgIGFwcGxpZWQgYW5kIHRoZSByZXN1bHQgb2YgdGhlIGZpbmFsIHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlKHBhcnNlciwgaW5wdXQpIHtcbiAgcmV0dXJuIHBhcnNlcihjb250ZXh0KGlucHV0KSlcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBzdGF0dXMgb2YgdGhlIGdpdmVuIHJlcGx5LlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge1N0YXR1c30gVGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGF0dXMocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1c1xufVxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBpbnZvY2F0aW9uIG9mIGBwYXJzZWAgd2FzIHN1Y2Nlc3NmdWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBwYXJzZXIgc3VjY2VlZGVkIG9yIGBmYWxzZWAgaWYgaXRcbiAqICAgICBkaWQgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VlZGVkKHJlcGx5KSB7XG4gIHJldHVybiByZXBseVsxXS5zdGF0dXMgPT09IFN0YXR1cy5Pa1xufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSByZXN1bHQgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC4gSWYgdGhlIHBhcnNlclxuICogZGlkIG5vdCBzdWNjZWVkLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIE5vdGUgdGhhdCBgbnVsbGAgaXMgYSBwb3NzaWJsZSByZXN1bHQgZnJvbSBzb21lIGluZGl2aWR1YWwgcGFyc2Vyc1xuICogKGBza2lwYCwgYGxvb2tBaGVhZGAsIGV0Yy4pLiBUaGUgcHJvcGVyIHdheSB0byB0ZWxsIGlmIGEgcGFyc2VyXG4gKiBzdWNjZWVkZWQgaW4gdGhlIGZpcnN0IHBsYWNlIGlzIHRvIHVzZSBgc3VjY2VlZGVkYC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0aW5nIHZhbHVlIGZyb20gdGhlIHBhcnNlIGlmIGl0IHdhcyBzdWNjZXNzZnVsLFxuICogICAgIG9yIGBudWxsYCBpZiBpdCB3YXMgbm90LlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VzcyhyZXBseSkge1xuICByZXR1cm4gc3VjY2VlZGVkKHJlcGx5KSA/IHJlcGx5WzFdLnZhbHVlIDogbnVsbFxufVxuXG4vKipcbiAqIEV4dHJhY3RzIHRoZSBlcnJvciBtZXNzYWdlIGFzIGEgc3RyaW5nIGZyb20gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGFuXG4gKiB1bnN1Y2Nlc3NmdWwgaW52b2NhdGlvbiBvZiBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyIHdhcyBhY3R1YWxseVxuICogc3VjY2Vzc2Z1bCwgdGhpcyB3aWxsIHJldHVybiBgbnVsbGAgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgZm9ybWF0dGVkIHN0cmluZyBkZXRhaWxpbmcgdGhlIGNpcmN1bXN0YW5jZXMgb2ZcbiAqICAgICB0aGUgcGFyc2VyIGZhaWx1cmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmYWlsdXJlKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gbnVsbCA6IGZvcm1hdEVycm9ycyhyZXBseSlcbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBSZXR1cm5zIHRoZSBwYXJzZWQgdmFsdWUgaWYgdGhlIHBhcnNlclxuICogc3VjY2VlZHMsIG9yIHRocm93cyBhbiBleGNlcHRpb24gd2l0aCB0aGUgcGFyc2VyJ3MgZXJyb3IgbWVzc2FnZSBpZlxuICogaXQgZmFpbHMuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHBhcnNlciBUaGUgcGFyc2VyIHRvIGJlIGFwcGxpZWQgdG8gdGhlIGlucHV0LiBUaGlzXG4gKiAgICAgY2FuLCBhcyBhbHdheXMsIGJlIGEgY29tcG9zaXRpb24gb2YgYW4gYXJiaXRyYXJ5IG51bWJlciBvZlxuICogICAgIHBhcnNlcnMgYW5kIGNvbWJpbmF0b3JzLlxuICogQHBhcmFtIHtJbnB1dH0gaW5wdXQgVGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHJlc3VsdCBmcm9tIHRoZSBwYXJzZXIgYXBwbGljYXRpb24sIGlmIHRoZSBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy5cbiAqIEB0aHJvd3Mge0Vycm9yfSBJZiB0aGUgcGFyc2VyIGZhaWxzLiBUaGUgZXJyb3IgbWVzc2FnZSB3aWxsIGJlIGFcbiAqICAgICBkZXRhaWxlZCByZWNvcmQgb2Ygd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcnVuKHBhcnNlciwgaW5wdXQpIHtcbiAgY29uc3QgW3JlcGx5LCBbXywgcmVzdWx0XV0gPSBkdXAocGFyc2VyKGNvbnRleHQoaW5wdXQpKSlcbiAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IFN0YXR1cy5Paykge1xuICAgIHJldHVybiByZXN1bHQudmFsdWVcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoZm9ybWF0RXJyb3JzKHJlcGx5KSlcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGNoYXJMZW5ndGgsXG4gIGNvbW1hU2VwYXJhdGUsXG4gIG5leHRDaGFyV2lkdGgsXG4gIHZpZXdUb1N0cmluZyxcbn0gZnJvbSAnLi91dGlsJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZS5qcycpLlJlc3VsdH0gUmVzdWx0ICovXG5cbmNvbnN0IHRhYiA9IC9cXHQvZ3VcbmNvbnN0IHplcm9XaWR0aCA9IC8oPzpcXHB7TW59fFxccHtDZn0pL2d1XG5cbi8qKlxuICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHR5cGUgb2YgYW4gZXJyb3IuXG4gKiBAZW51bSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRXJyb3JUeXBlID0ge1xuICAvKipcbiAgICogRXJyb3IgdHlwZSByZXByZXNlbnRpbmcgYW4gZXhwZWN0ZWQgcmVzdWx0LiBQcm9kdWNlZCBieSB0aGUgdmFzdFxuICAgKiBtYWpvcml0eSBvZiBwYXJzZXJzLlxuICAgKi9cbiAgRXhwZWN0ZWQ6ICdleHBlY3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIHJlc3VsdCB0aGF0IHdhcyBub3QgZXhwZWN0ZWQuIFR5cGljYWxseVxuICAgKiBwcm9kdWNlZCBieSBwYXJzZXJzIHN1Y2ggYXMgYHVuZXhwZWN0ZWRgIGFuZCBgbm90Rm9sbG93ZWRCeWAuXG4gICAqL1xuICBVbmV4cGVjdGVkOiAndW5leHBlY3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVHlwaWNhbGx5IHByb2R1Y2VkXG4gICAqIGJ5IHBhcnNlcnMgc3VjaCBhcyBgZmFpbGAgYW5kIGBmYWlsRmF0YWxseWAuXG4gICAqL1xuICBHZW5lcmljOiAnZ2VuZXJpYycsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBlcnJvciB3aXRoaW4gYW5vdGhlciBlcnJvci4gVGhpcyBpc1xuICAgKiBnZW5lcmFsbHkgdXNlZCBmb3IgYW4gZXJyb3IgdGhhdCBjYXVzZWQgYmFja3RyYWNraW5nLCB3aGVyZSB0aGVcbiAgICogcGFyZW50IGVycm9yIGlzIHJlcG9ydGVkIGFmdGVyIGJhY2t0cmFja2luZy5cbiAgICovXG4gIE5lc3RlZDogJ25lc3RlZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhIG5lc3RlZCBlcnJvciB3aXRoIGl0cyBvd24gc2VwYXJhdGUgZXJyb3JcbiAgICogbWVzc2FnZS4gVGhpcyBpcyBwcm9kdWNlZCBzcGVjaWZpY2FsbHkgYnkgdGhlIGBjb21wb3VuZGAgcGFyc2VyLlxuICAgKi9cbiAgQ29tcG91bmQ6ICdjb21wb3VuZCcsXG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBzb21lIG90aGVyIGtpbmQgb2YgZXJyb3IgbWVzc2FnZSB0byBiZVxuICAgKiBkaXNwbGF5ZWQgaW4gYSBjdXN0b20gZXJyb3IgZm9ybWF0dGVyLlxuICAgKi9cbiAgT3RoZXI6ICdvdGhlcicsXG59XG5cbi8qKlxuICogQSBsaXN0IG9mIGVycm9ycy4gVGhpcyBjYW4gY29uc2lzdCBvZiBhbnkgZXJyb3IgbWVzc2FnZXMgdGhhdCBhcHBseVxuICogdG8gYSBwYXJ0aWN1bGFyIGluZGV4IG9yIG5lc3RlZC9jb21wb3VuZCBlcnJvcnMgdGhhdCBwb2ludCBiYWNrIHRvXG4gKiB0aGUgc2FtZSBpbmRleCBidXQgYXBwbHkgdG8gYSBkaWZmZXJlbnQgb25lLlxuICogQHR5cGVkZWYgeyhOZXN0ZWRFcnJvcnxDb21wb3VuZEVycm9yfExvY2FsRXJyb3IpW119IEVycm9yTGlzdFxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGF0IHRoZSBsb2NhdGlvbiByZWZlcnJlZCB0byBieSB0aGUgY3VycmVudFxuICogY29udGV4dC4gVGhlIHR5cGUgaXMgdXNlZCB0byBkZXRlcm1pbmUgd2hlcmUgdGhlIGxhYmVsIHNob3VsZCBiZVxuICogcG9zaXRpb25lZCBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2NhbEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhlIGVycm9yLlxuICovXG5cbi8qKlxuICogQW4gZXJyb3IgdGhhdCBoYXBwZW5zIGluIGEgZGlmZmVyZW50IGxvY2F0aW9uIHRoYW4gdGhlIG9uZSByZWZlcnJlZFxuICogdG8gYnkgdGhlIGN1cnJlbnQgY29udGV4dC4gVGhlIG1vc3QgdHlwaWNhbCByZWFzb24gZm9yIHRoaXMgaGFwcGVuaW5nXG4gKiBpcyBiYWNrdHJhY2tpbmc7IHRoZSBsb2NhbCBlcnJvciBjYW4gdHJhY2sgdGhlIGN1cnJlbnRcbiAqIChwb3N0LWJhY2t0cmFjaykgbG9jYXRpb24gd2hpbGUgdGhlIG5lc3RlZCBlcnJvciByZXRhaW5zIGluZm9ybXRpb25cbiAqIGZyb20gdGhlIGVycm9yIHRoYXQgY2F1c2VkIHRoZSBiYWNrdHJhY2tpbmcgaW4gdGhlIGZpcnN0IHBsYWNlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE5lc3RlZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuTmVzdGVkYC5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQSBuZXN0ZWQgZXJyb3IgdGhhdCBoYXMgaXRzIG93biBsYWJlbC4gVGhpcyBpcyBzaW1wbHkgZm9yIHByb2R1Y2luZ1xuICogbmljZXIgZXJyb3IgbWVzc2FnZXM7IHRoaXMgZXJyb3IgaXMgdHlwaWNhbGx5IG9ubHkgcHJvZHVjZWQgYnkgdGhlXG4gKiBgYmFja2xhYmVsYCBwYXJzZXIuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29tcG91bmRFcnJvclxuICogQHByb3BlcnR5IHtFcnJvclR5cGV9IHR5cGUgVGhlIGVycm9yIHR5cGUuIFRoaXMgd2lsbCBhbHdheXMgYmVcbiAqICAgICBgRXJyb3JUeXBlLkNvbXBvdW5kYC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhc3NvY2lhdGVkIHdpdGggdGhpcyBlcnJvci4gVGhpc1xuICogICAgIGlzIHR5cGljYWxseSB1c2VkIGFzIGEgc29ydCBvZiBoZWFkZXIgb3ZlciB0aGUgbmVzdGVkIG1lc3NhZ2VzXG4gKiAgICAgdW5kZXIgdGhpcyBjb21wb3VuZCBlcnJvci5cbiAqIEBwcm9wZXJ0eSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSB0aW1lIHRoYXQgdGhlIG9yaWdpbmFsXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuIFRoaXMgY2FuIChhbmQgcHJvYmFibHkgd2lsbCkgYmUgZGlmZmVyZW50IGZyb21cbiAqICAgICB0aGUgY3VycmVudCBjb250ZXh0LlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgbG9jYXRpb24gZGVyaXZlZCBmcm9tIGBjdHhgLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBlcnJvciBsaXN0IGNvbnRhaW5pbmcgb25lIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGRlc2NyaWJpbmcgd2hhdCB3YXMgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSBleHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhwZWN0ZWQobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5FeHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIHVuZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS4gSXQgaXMgZXhwZWN0ZWQgdGhhdCBvbmUgYXJyYXkgb2ZcbiAqIGVycm9yIG1lc3NhZ2VzIG1heSBoYXZlIG11bHRpcGxlIHVuZXhwZWN0ZWQgZXJyb3JzLCBidXQgb25seSB0aGVcbiAqIGZpcnN0IHdpbGwgYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBmb3VuZCBidXQgd2FzXG4gKiAgICAgbm90IGV4cGVjdGVkLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgdW5leHBlY3RlZCB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdW5leHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLlVuZXhwZWN0ZWQsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIGdlbmVyaWMgZXJyb3IgbWVzc2FnZS4gVGhlcmUgY2FuIGJlIG1vcmUgdGhhbiBvbmUgZ2VuZXJpY1xuICogZXJyb3IgbWVzc2FnZSBpbiBhbiBhcnJheSBvZiBlcnJvciBtZXNzYWdlcywgYnV0IG9ubHkgdGhlIGZpcnN0IHdpbGxcbiAqIGJlIGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdCBmb3JtYXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIFRoZSBnZW5lcmljIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGdlbmVyaWMgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyaWMobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5HZW5lcmljLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb3RoZXIgZXJyb3IuIFRoZXNlIGVycm9ycyBhcmUgbm90IGRpc3BsYXllZCBieSB0aGUgZGVmYXVsdFxuICogZm9ybWF0dGVyIGF0IGFsbCBhbmQgYXJlIG9ubHkgdXNlZnVsIGZvciBjdXN0b20gZm9ybWF0dGVycy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG90aGVyIGVycm9yJ3MgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IHBhcnNlIGVycm9yIG9mIHRoZSBvdGhlciB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3RoZXIobGFiZWwpIHtcbiAgcmV0dXJuIFt7IHR5cGU6IEVycm9yVHlwZS5PdGhlciwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmVzdGVkIGVycm9yLiBUaGlzIHRha2VzIGFuIGVycm9yIGxpc3QgYW5kIHdyYXBzIGl0IHdpdGhcbiAqIGNvbnRleHQgaW5mb3JtYXRpb24uIElmIHRoZSBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGVcbiAqIG5lc3RlZCBlcnJvciwgdGhhdCBlcnJvciBpcyBzaW1wbHkgcmV0dXJuZWQ7IGEgc2luZ2xlIG5lc3RlZCBlcnJvclxuICogd2lsbCBub3QgYmUgbmVzdGVkIGluIGFub3RoZXIgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgbmVzdGVkIGVycm9yXG4gKiAgICAgb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBsaXN0IG9mIGVycm9ycyB0aGF0IG9jY3VycmVkIGF0IHRoZVxuICogICAgIHBvc2l0aW9uIHBvaW50ZWQgdG8gYnkgdGhlIGdpdmVuIGNvbnRleHQuXG4gKiBAcmV0dXJucyB7W05lc3RlZEVycm9yXX0gQSBuZXcgbmVzdGVkIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmVzdGVkKGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBlcnJvcnNcbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5OZXN0ZWQsIGN0eCwgZXJyb3JzIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBjb21wb3VuZCBlcnJvci4gVGhpcyB3cmFwcyBhbiBlcnJvciBsaXN0IGp1c3QgYXMgYVxuICogbmVzdGVkIGVycm9yIGRvZXMsIGV4Y2VwdCBpdCBhbHNvIGF0dGFjaGVzIGEgbWVzc2FnZSB0byBpdC4gSWYgdGhlXG4gKiBzdXBwbGllZCBlcnJvciBsaXN0IGlzIGp1c3QgYSBzaW5nbGUgbmVzdGVkIGVycm9yLCBpdHMgaW5mb3JtYXRpb24gaXNcbiAqIHVzZWQgdG8gY3JlYXRlIGEgbmV3IGNvbXBvdW5kIGVycm9yIHdpdGhvdXQgYW55IG5lc3RlZCBlcnJvci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgYXR0YWNoZWQgdG8gdGhlIG5lc3RlZCBlcnJvci5cbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGF0IHRoZSBwb2ludCB3aGVyZSB0aGUgY29tcG91bmRcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gY29udGV4dC5cbiAqIEByZXR1cm5zIHtbQ29tcG91bmRFcnJvcl19IEEgbmV3IGNvbXBvdW5kIGVycm9yLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29tcG91bmQobGFiZWwsIGN0eCwgZXJyb3JzKSB7XG4gIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAxICYmIGVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkXG4gICAgPyBbe1xuICAgICAgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLFxuICAgICAgY3R4OiBlcnJvcnMuY3R4LFxuICAgICAgZXJyb3JzOiBlcnJvcnMuZXJyb3JzLFxuICAgICAgbGFiZWwsXG4gICAgfV1cbiAgICA6IFt7IHR5cGU6IEVycm9yVHlwZS5Db21wb3VuZCwgY3R4LCBlcnJvcnMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogTWVyZ2VzIHR3byBhcnJheXMgb2YgZXJyb3JzLlxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzMT1bXV0gVGhlIGZpcnN0IGFycmF5IG9mIGVycm9ycy5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzMj1bXV0gVGhlIHNlY29uZCBhcnJheSBvZiBlcnJvcnMuXG4gKiBAcmV0dXJucyB7RXJyb3JMaXN0fSBBIG5ldyBhcnJheSBjb250YWluaW5nIGFsbCBvZiB0aGUgZXJyb3JzIGZyb21cbiAqICAgICB0aGUgZmlyc3QgdHdvIGFycmF5cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGVycm9yczEgPSBbXSwgZXJyb3JzMiA9IFtdKSB7XG4gIHJldHVybiBbLi4uZXJyb3JzMSwgLi4uZXJyb3JzMl1cbn1cblxuLy8gI3JlZ2lvbiBGb3JtYXR0aW5nIHV0aWxpdHkgZnVuY3Rpb25zXG5cbi8vICNyZWdpb24gVHlwZWRlZnMgZm9yIG9iamVjdCByZXR1cm4gdHlwZXNcblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZXZhbHVhdGlvbiBvZiBhIGJ5dGUgdG8gc2VlXG4gKiBpZiBpdCBpcyAob3Igc3RhcnRzKSBhIG5ld2xpbmUuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmV3bGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gbmV3bGluZSBJbmRpY2F0ZXMgd2hldGhlciB0aGUgc2Nhbm5lZCBieXRlIHdhc1xuICogICAgIGVpdGhlciBhIG5ld2xpbmUgb3IgdGhlIGJlZ2lubmluZyBvZiBhIG11bHRpLWJ5dGUgbmV3bGluZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBza2lwIFRoZSBudW1iZXIgb2YgYnl0ZXMgdGhhdCB0aGUgbmV4dCBjaGFyYWN0ZXJcbiAqICAgICBjb250YWlucy4gVGhpcyBpcyByZXR1cm5lZCBhY2N1cmF0ZWx5IHdoZXRoZXIgb3Igbm90IHRoYXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYSBuZXdsaW5lLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHN0YXJ0IGFuZCBlbmQgaW5kZXhlcyBvZiBhXG4gKiBsaW5lIHdpdGhpbiBhIGRhdGEgdmlldywgYXMgd2VsbCBhcyB0aGUgbnVtYmVyIG9mIHRoYXQgbGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMaW5lSW5kZXhJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGZpcnN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgYWx3YXlzIHRoZSBmaXJzdFxuICogICAgIGJ5dGUgb2YgdGhlIGRhdGEgdmlldyBpdHNlbGYsIG9yIHRoZSBmaXJzdCBieXRlIGFmdGVyIGEgbmV3bGluZVxuICogICAgIGNoYXJhY3Rlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBlbmQgVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IG9mIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgbGFzdCBjaGFyYWN0ZXIgaW4gYSBsaW5lLiBUaGlzIGlzIGVpdGhlciB0aGUgbGFzdFxuICogICAgIGJ5dGUgaW4gdGhlIGRhdGEgdmlldyBvciB0aGUgYnl0ZSBpbW1lZGlhdGVseSBwcmVjZWRpbmcgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiBhIG5ld2xpbmUgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxpbmVubyBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgYm91bmRlZCBieVxuICogICAgIGluZGV4ZXMgYHN0YXJ0YCBhbmQgYGVuZGAuIFRoaXMgbnVtYmVyIGlzIDEtYmFzZWQsIGFzIGl0IGlzIHVzZWRcbiAqICAgICBmb3IgZGlzcGxheSBvZiBhbiBlcnJvciBwb3NpdGlvbiBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIHRoZSBhZGp1c3RlZCBsaW5lIGFuZCBjb2x1bW4gaW5kZXggdGhhdCByZXN1bHRzXG4gKiBmcm9tIHRhYiBleHBhbnNpb24uXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gVGFiYmVkTGluZUluZm9cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBsaW5lIFRoZSBzdHJpbmcgb2YgdGV4dCByZXByZXNlbnRpbmcgb25lIGxpbmUsXG4gKiAgICAgd2l0aCB0YWIgY2hhcmFjdGVycyByZXBsYWNlZCBieSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIHNwYWNlcy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgY2hhcmFjdGVyIGluZGV4IHBhc3NlZCBpbnRvIHRoZVxuICogICAgIGZ1bmN0aW9uLCBhZGp1c3RlZCBieSB0aGUgZGlmZmVyZW5jZSBpbiB3aWR0aCBiZXR3ZWVuIHRhYnMgYW5kXG4gKiAgICAgdGhlIHNwYWNlcyB1c2VkIHRvIHJlcGxhY2UgdGhlbS5cbiAqL1xuXG4vKipcbiAqIE9iamVjdCBjb250YW5pbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGNvbHVtbiBpbmRleCBhbmQgbGluZVxuICogbGVuZ3RoIGFmdGVyIGFjY291bnRpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb2xJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2xubyBUaGUgYWRqdXN0ZWQgY29sdW1uIG51bWJlciBvZiB0aGUgY2hhcmFjdGVyXG4gKiAgICAgcG9pbnRlZCB0byBieSB0aGUgYGNoYXJJbmRleGAgcGFyYW1ldGVyLiBUaGlzIGlzIGFkanVzdGVkIGJ5IGFueVxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0aGF0IG1heSBhcHBlYXIgaW4gdGhlIGxpbmUgYW5kIGlzIHR1cm5lZFxuICogICAgIGludG8gYSAxLWJhc2VkIG51bWJlciBmb3IgZGlzcGxheSBpbiB0aGUgZXJyb3IgbWVzc2FnZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLiBUaGlzIGlzIHJldHVybmVkIHNvbGVseSB0byBiZSBwYXNzZWQgaW50b1xuICogICAgIG90aGVyIGZ1bmN0aW9ucyB3aG8gdGhlbiB3b24ndCBoYXZlIHRvIHJlY2FsY3VsYXRlIHRoZSB3aWR0aCBvZlxuICogICAgIHRoZSBsaW5lIGFjY291bnRpbmcgZm9yIHRob3NlIHNhbWUgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICovXG5cbi8qKlxuICAqIE9iamVjdCBjb250YWluaW5nIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzLlxuICAqXG4gICogQHR5cGVkZWYge29iamVjdH0gUG9zaXRpb25cbiAgKiBAcHJvcGVydHkge251bWJlcn0gbGluZSBUaGUgbGluZSBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0byBieVxuICAqICAgICB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LlxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBjb2x1bW4gVGhlIGNvbHVtbiBudW1iZXIgb2YgdGhlIGJ5dGUgcG9pbnRlZCB0b1xuICAqICAgICBieSB0aGUgaW5kZXggd2l0aGluIHRoZSB2aWV3LCBhZGp1c3RlZCBmb3IgY2hhcmFjdGVyIHdpZHRoIGFuZFxuICAqICAgICB0YWIgc2l6ZS5cbiAgKi9cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIGNhbGxlZCBieSBgZm9ybWF0RXJyb3JzYCB0byBkbyB0aGUgYWN0dWFsIGZvcm1hdHRpbmcuIEFcbiAqIGRlZmF1bHQgZm9ybWF0dGVyIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGJ1dCBjYW4gYmUgcmVwbGFjZWQgaWZcbiAqIGRlc2lyZWQuXG4gKlxuICogQGNhbGxiYWNrIEZvcm1hdHRlclxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGJlaW5nIHVzZWQgdG8gZ2VuZXJhdGUgdGhlXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIGB2aWV3YCBvZiB0aGUgYnl0ZSB3aGVyZSB0aGVcbiAqICAgICBlcnJvciBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSBkaXNwbGF5IHdpZHRoIG9mIHRoZSBsaW5lIHdoZXJlXG4gKiAgICAgdGhlIGVycm9yIG9jY3VycmVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlXG4gKiAgICAgdHJ1bmNhdGVkIHdpdGggZWxsaXBzZXMgYmVmb3JlIGFuZC9vciBhZnRlci5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgbXVsdGktbGluZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGdpdmVuIGluZGV4IGluIHRoZSBzdXBwbGllZFxuICogdmlldyBpcyBhIG5ld2xpbmUuIEFuIG9iamVjdCB3aXRoIHR3byBwcm9wZXJ0aWVzIGlzIHJldHVybmVkO1xuICogYG5ld2xpbmVgIGlzIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoYXQgY2hhcmFjdGVyIGlzIGFcbiAqIG5ld2xpbmU7IGBza2lwYCBpcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciAoYW5kIHRoZXJlZm9yZSBob3cgbWFueVxuICogYnl0ZXMgdG8gc2tpcCB1bnRpbCB0aGUgbmV4dCBjaGFyYWN0ZXIgdG8gY2hlY2spLlxuICpcbiAqIEFsbCBVbmljb2RlIG5ld2xpbmVzIChDUiwgTEYsIEZGLCBWVCwgTkVMLCBMUywgYW5kIFBTKSBhcmUgaGFuZGxlZCxcbiAqIGFsb25nIHdpdGggdGhlIG11bHRpLWNoYXJhY3RlciBuZXdsaW5lIENSK0xGLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW50byBgdmlld2AgaW5kaWNhdGluZyB0aGUgYnl0ZSB0b1xuICogICAgIGNoZWNrIHRvIHNlZSBpZiBpdCdzIGEgbmV3bGluZS5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge05ld2xpbmVJbmZvfSBOZXdsaW5lIGluZm9ybWF0aW9uIGFib3V0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc05ld2xpbmUoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXgpXG4gIGlmIChieXRlID09PSAweDBhIHx8IGJ5dGUgPT09IDB4MGIgfHwgYnl0ZSA9PT0gMHgwYykge1xuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGJ5dGUgPT09IDB4MGQpIHtcbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgICBjb25zdCBuZXh0Qnl0ZSA9IHZpZXcuZ2V0VWludDgoaW5kZXggKyAxKVxuICAgICAgaWYgKGJ5dGUgPT09IDB4MGQgJiYgbmV4dEJ5dGUgPT09IDB4MGEpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IG5ld2xpbmU6IHRydWUsIHNraXA6IDEgfVxuICB9XG5cbiAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMSkge1xuICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG5cbiAgICBpZiAoYnl0ZSA9PT0gMHhjMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4NSkgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMiB9XG4gICAgaWYgKGluZGV4IDwgdmlldy5ieXRlTGVuZ3RoIC0gMikge1xuICAgICAgY29uc3QgdGhpcmRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDIpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHhlMiAmJiBuZXh0Qnl0ZSA9PT0gMHg4MFxuICAgICAgICAmJiAodGhpcmRCeXRlID09PSAweGE4IHx8IHRoaXJkQnl0ZSA9PT0gMHhhOSkpIHtcbiAgICAgICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMyB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgbmV3bGluZTogZmFsc2UsIHNraXA6IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBzdGFydGluZyBhbmQgZW5kaW5nIGluZGV4ZXMgb2YgdGhlIGxpbmUgaW4gdGhlIGdpdmVuXG4gKiB2aWV3IHRoYXQgY29udGFpbnMgdGhlIGJ5dGUgcG9pbnRlZCBhdCBieSBgaW5kZXhgLiBJdCBkb2VzIHRoaXMgYnlcbiAqIGRldGVybWluaW5nIHdoZXJlIG5ld2xpbmVzIGFyZSBhbmQgdGhlbiBmaWd1cmluZyBvdXQgd2hpY2ggb25lcyBjb21lXG4gKiBjbG9zZXN0IGJlZm9yZSBhbmQgYWZ0ZXIgdGhlIGluZGV4LiBUaGUgbnVtYmVyIG9mIG5ld2xpbmVzIHRoYXQgY2FtZVxuICogYmVmb3JlIHRoZSBpbmRleCAoYW5kIHRoZXJlZm9yZSB0aGUgbGluZSBudW1iZXIgb2YgdGhlIGxpbmUgd2l0aCB0aGVcbiAqIGluZGV4KSBpcyBhbHNvIGNvdW50ZWQuXG4gKlxuICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCB0aHJlZSBwcm9wZXJ0aWVzOiBgc3RhcnRgIGlzIHRoZSBpbmRleCBvZiB0aGVcbiAqIGZpcnN0IGJ5dGUgb2YgdGhlIGxpbmUsIGBlbmRgIGlzIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBieXRlIG9mIHRoZVxuICogbGluZSAobm90IGNvdW50aW5nIHRoZSBuZXdsaW5lKSwgYW5kIGBsaW5lbm9gIGlzIHRoZSBsaW5lIG51bWJlclxuICogd2hlcmUgdGhlIGluZGV4IGFwcGVhcnMuIGBsaW5lbm9gIGlzIDEtaW5kZXhlZCBzaW5jZSBpdCBpcyBtZWFudCBmb3JcbiAqIGRpc3BsYXkgaW4gdGhlIGZpbmFsIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgbGluZVxuICogICAgIGluZGV4IGluZm9ybWF0aW9uIGlzIGJlaW5nIGRldGVybWluZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtMaW5lSW5kZXhJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnRpbmcgYW5kIGVuZGluZ1xuICogICAgIGluZGV4ZXMgb2YgdGhlIGxpbmUgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldykge1xuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBsaW5lbm8gPSAxIC8vIDEtYmFzZWRcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKGkgPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBjb25zdCB7IG5ld2xpbmUsIHNraXAgfSA9IGlzTmV3bGluZShpLCB2aWV3KVxuICAgIGlmIChuZXdsaW5lKSB7XG4gICAgICBpZiAoaSArIHNraXAgPiBpbmRleCkge1xuICAgICAgICByZXR1cm4geyBzdGFydCwgZW5kOiBpIC0gMSwgbGluZW5vIH1cbiAgICAgIH1cbiAgICAgIGxpbmVubysrXG4gICAgICBzdGFydCA9IGkgKyBza2lwXG4gICAgfVxuICAgIGkgKz0gc2tpcFxuICB9XG4gIHJldHVybiB7IHN0YXJ0LCBlbmQ6IHZpZXcuYnl0ZUxlbmd0aCAtIDEsIGxpbmVubyB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgY2hhcmFjdGVyIGluZGV4IChhcyBvcHBvc2VkIHRvIGJ5dGUgaW5kZXgpIHdpdGhpbiBhXG4gKiBzaW5nbGUgbGluZSBvZiB0ZXh0IG9mIHRoZSBjaGFyYWN0ZXIgcG9pbnRlZCB0byBieSBgaW5kZXhgIHdpdGhpblxuICogYHZpZXdgLiBUaGUgYHN0YXJ0YCBwYXJhbWV0ZXIgc2V0cyB0aGUgZmlyc3QgYnl0ZSBvZiBhIFwibGluZVwiIHdpdGhpblxuICogdGhlIHZpZXcgYW5kIGNhbiBiZSBjYWxjdWxhdGVkIHdpdGgge0BsaW5rIGdldExpbmVJbmRleGVzfSBhYm92ZS5cbiAqXG4gKiBJbiBsaW5lcyB3aXRoIG9ubHkgc2luZ2xlLWJ5dGUgY2hhcmFjdGVycywgdGhlIGNoYXJhY3RlciBpbmRleCB3aWxsXG4gKiBhbHdheXMgYmUgdGhlIHNhbWUgYXMgYGluZGV4IC0gc3RhcnRgLiBUaGUgcHVycG9zZSBvZiB0aGlzIGZ1bmN0aW9uXG4gKiBpcyB0byBhZGp1c3Qgd2hlbiBtdWx0aS1ieXRlIGNoYXJhY3RlcnMgYXJlIHByZXNlbnQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSBpbiBgdmlld2Agd2hvc2UgY2hhcmFjdGVyXG4gKiAgICAgaW5kZXggaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IFRoZSBpbmRleCBvZiB0aGUgZmlyc3QgYnl0ZSBvZiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGJ5dGUgcG9pbnRlZCB0byBieSBgaW5kZXhgLlxuICogQHJldHVybnMge251bWJlcn0gVGhlIGluZGV4LCB3aXRoaW4gYSBzaW5nbGUgbGluZSBvZiB0ZXh0LCBvZiB0aGVcbiAqICAgICBjaGFyYWN0ZXIgd2hvc2UgZmlyc3QgYnl0ZSBpcyBiZWluZyBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KSB7XG4gIGxldCBjaGFySW5kZXggPSAwXG4gIGxldCBieXRlSW5kZXggPSBzdGFydFxuICB3aGlsZSAoYnl0ZUluZGV4IDwgaW5kZXggJiYgYnl0ZUluZGV4IDwgdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgYnl0ZUluZGV4ICs9IG5leHRDaGFyV2lkdGgoYnl0ZUluZGV4LCB2aWV3KVxuICAgIGNoYXJJbmRleCsrXG4gIH1cbiAgcmV0dXJuIGNoYXJJbmRleFxufVxuXG4vKipcbiAqIEV4cGFuZHMgdGFicyBpbnRvIHNwYWNlcyBhbmQgY2FsY3VsYXRlcyB0aGUgY29sdW1uIGluZGV4IG9mIHRoZVxuICogaW5kZXhlZCBjaGFyYWN0ZXIgYWRqdXN0aW5nIGZvciB0aG9zZSBzcGFjZXMuIFRoZSBudW1iZXIgb2Ygc3BhY2VzIGluXG4gKiBlYWNoIHRhYiBjYW4gYmUgc3BlY2lmaWVkIHdpdGggYHRhYlNpemVgLlxuICpcbiAqIFRoZSByZXR1cm4gdmFsdWUgaXMgYW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXM6IGBsaW5lYCBpcyB0aGVcbiAqIGlucHV0IGxpbmUgd2l0aCB0YWJzIGV4cGFuZGVkIGludG8gc3BhY2VzLCBhbmQgYGNvbEluZGV4YCBpcyB0aGVcbiAqIGluZGV4IG9mIHRoZSBjb2x1bW4gdGhhdCBoYXMgdGhlIGNoYXJhY3RlciBwb2ludGVkIGF0IGJ5IHRoZVxuICogY2hhcmFjdGVyIGluZGV4LlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjaGFySW5kZXggVGhlIGluZGV4IG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdFxuICogICAgIHdpdGhpbiB0aGUgbGluZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgYmVpbmcgdGFiaWZpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBUaGUgbWF4aW11bSBudW1iZXIgb2Ygc3BhY2VzIHRoYXQgY2FuIHJlcGxhY2VcbiAqICAgICBhIHRhYi4gTm90ZSB0aGF0IHRhYnMgYXJlIHRyZWF0ZWQgYXMgc3RvcHM7IHRoZXkgd2lsbCBiZSBvZlxuICogICAgIHZhcnlpbmcgc2l6ZXMgdGhhdCByZXN1bHRzIGluIHRoZW0gYWx3YXlzIGVuZGluZyBhdCBhIGNvbHVtbiB0aGF0XG4gKiAgICAgaXMgYSBtdWx0aXBsZSBvZiBgdGFiU2l6ZWAuXG4gKiBAcmV0dXJucyB7VGFiYmVkTGluZUluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBsaW5lIGFmdGVyIHJlcGxhY2luZ1xuICogICAgIHRhYnMgd2l0aCBzcGFjZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0YWJpZnkoY2hhckluZGV4LCBsaW5lLCB0YWJTaXplKSB7XG4gIGNvbnN0IHRhYkluZGV4ZXMgPSBbXVxuICBsZXQgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB3aGlsZSAodGFiTWF0Y2ggIT09IG51bGwpIHtcbiAgICB0YWJJbmRleGVzLnB1c2godGFiTWF0Y2guaW5kZXgpXG4gICAgdGFiTWF0Y2ggPSB0YWIuZXhlYyhsaW5lKVxuICB9XG5cbiAgLy8gcmVwbGFjZSBlYWNoIHRhYiB3aXRoIHRoZSBjb3JlY3QgbnVtYmVyIG9mIHNwYWNlcywgc2hpZnRpbmcgdGhlXG4gIC8vIHJlbWFpbmluZyBpbmRleGVzIGJ5IHRoYXQgYW1vdW50XG4gIGxldCBvZmZzZXQgPSAwXG4gIGxldCBwcmVJbmRleE9mZnNldCA9IDBcbiAgbGV0IHJlc3VsdCA9IGxpbmVcblxuICBmb3IgKGNvbnN0IHRhYkluZGV4IG9mIHRhYkluZGV4ZXMpIHtcbiAgICBjb25zdCBhY3R1YWxJbmRleCA9IHRhYkluZGV4ICsgb2Zmc2V0XG4gICAgY29uc3Qgc3BhY2VDb3VudCA9IHRhYlNpemUgLSBhY3R1YWxJbmRleCAlIHRhYlNpemVcbiAgICBpZiAoYWN0dWFsSW5kZXggPCBjaGFySW5kZXggKyBwcmVJbmRleE9mZnNldCkge1xuICAgICAgcHJlSW5kZXhPZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICB9XG4gICAgb2Zmc2V0ICs9IHNwYWNlQ291bnQgLSAxXG4gICAgcmVzdWx0ID0gcmVzdWx0LnN1YnN0cmluZygwLCBhY3R1YWxJbmRleCkgKyAnICcucmVwZWF0KHNwYWNlQ291bnQpXG4gICAgICArIHJlc3VsdC5zdWJzdHJpbmcoYWN0dWFsSW5kZXggKyAxKVxuICB9XG4gIHJldHVybiB7IGxpbmU6IHJlc3VsdCwgY29sSW5kZXg6IHByZUluZGV4T2Zmc2V0ICsgY2hhckluZGV4IH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBmaW5hbCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCB0b1xuICogYnkgdGhlIGNvbHVtbiBpbmRleC4gVGhpcyBjb2x1bW4gbnVtYmVyIGlzIDEtYmFzZWQgKGZvciBkaXNwbGF5LCB0aGVcbiAqIHNhbWUgYXMgdGhlIGxpbmUgbnVtYmVyIGZyb20gYGdldExpbmVJbmRleGVzYCkgYW5kIGlzIGFkanVzdGVkIGZvclxuICogemVyby13aWR0aCBjaGFyYWN0ZXJzIHN1Y2ggYXMgZm9ybWF0dGluZyBjaGFyYWN0ZXJzIGFuZCBub24tc3BhY2luZ1xuICogbWFya3MuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgb2YgdHdvIHByb3BldGllczogYGNvbG5vYCBpcyB0aGVcbiAqIDEtaW5kZXhlZCBjb2x1bW4gbnVtYmVyLCBhbmQgYGxlbmd0aGAgaXMgdGhlIGxlbmd0aCBvZiB0aGUgbGluZVxuICogYWRqdXN0aW5nIGZvciB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoZSBsYXR0ZXIgaXMgcHJvdmlkZWQgc28gaXRcbiAqIGRvZXNuJ3QgaGF2ZSB0byBiZSByZWNhbGN1bGF0ZWQgYnkgYHNob3dgLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNvbHVtbiB3aXRoaW4gdGhlIGxpbmVcbiAqICAgICBjb250YWluaW5nIHRoZSBjaGFyYWN0ZXIgYmVpbmcgcG9pbnRlZCBhdC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsaW5lIFRoZSBsaW5lIG9mIHRleHQgcG90ZW50aWFsbHkgY29udGFpbmluZ1xuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycyB0byBhY2NvdW50IGZvci5cbiAqIEByZXR1cm5zIHtDb2xJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBhZGp1c3RlZCBsaW5lLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKSB7XG4gIGxldCBpbmRleCA9IGNvbEluZGV4XG4gIGNvbnN0IG1hdGNoZXMgPSBbXVxuXG4gIGxldCBtYXRjaCA9IHplcm9XaWR0aC5leGVjKGxpbmUpXG4gIHdoaWxlIChtYXRjaCAhPT0gbnVsbCkge1xuICAgIG1hdGNoZXMucHVzaChtYXRjaC5pbmRleClcbiAgICBpZiAobWF0Y2guaW5kZXggPCBpbmRleCkgaW5kZXgtLVxuICAgIG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgfVxuICByZXR1cm4ge1xuICAgIGNvbG5vOiBpbmRleCArIDEsIC8vIDEtYmFzZWRcbiAgICBsZW5ndGg6IGNoYXJMZW5ndGgobGluZSkgLSBtYXRjaGVzLmxlbmd0aCxcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIHN0cmluZyBjb250YWluaW5nIG9uZSBsaW5lIHRoYXQgaXMgdGhlIHRleHQgYXQgYW5kIGFyb3VuZFxuICogdGhlIGNvbHVtbiB0byBiZSBkaXNwbGF5ZWQsIGFuZCBvbmUgbGluZSB0aGF0IGlzIGEgY2FyZXQgcG9pbnRpbmcgdG9cbiAqIHRoYXQgcGFydGljdWxhciBjb2x1bW4uXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhZGRzIGVsbGlwc2VzIGFzIG5lZWRlZCB0byB0aGUgZnJvbnQgYW5kL29yIHRoZSBiYWNrIG9mXG4gKiB0aGUgbGluZSBpbiBvcmRlciB0byBnZXQgdGhlIGNvbHVtbiBpbnRvIHRoZSB2aXNpYmxlIGFyZWEsIGJhc2VkIG9uXG4gKiB0aGUgYG1heFdpZHRoYCBvZiB0aGUgbGluZSB0byBkaXNwbGF5LiBUaGUgYGxlbmd0aGAgcGFyYW1ldGVyIGlzIHRoZVxuICogYGxlbmd0aGAgcmV0dXJuZWQgYnkgYGdldENvbE51bWJlcmAgYW5kIGlzIGhlcmUganVzdCB0byBhdm9pZCBoYXZpbmdcbiAqIHRvIHJlY2FsY3VsYXRlIGl0IGluIHRoaXMgZnVuY3Rpb24gd2hlbiBpdCBhbHJlYWR5IG5lZWRlZCB0byBiZVxuICogY2FsY3VsYXRlZCBpbiB0aGUgb3RoZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyBmb3JtYXR0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBsZW5ndGggb2YgdGhlIGxpbmUsIGFkanVzdGVkIGZvciB0YWJzIGFuZFxuICogICAgIHplcm8td2lkdGggY2hhcmFjdGVycy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb2xubyBUaGUgY29sdW1uIG51bWJlciB3aGVyZSB0aGUgY2FyZXQgc2hvdWxkIHBvaW50LlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBwb3RlbnRpYWxseSB0cnVuY2F0ZWQgbGluZSBvZiB0ZXh0LCBmb2xsb3dlZCBieVxuICogICAgIGFub3RoZXIgbGluZSBjb250YWluaW5nIGEgY2FyZXQgcG9pbnRpbmcgYXQgdGhlIGRlc2lnbmF0ZWRcbiAqICAgICBjb2x1bW4uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzaG93KGxpbmUsIGxlbmd0aCwgY29sbm8sIG1heFdpZHRoLCBpbmRlbnQgPSAwKSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG5cbiAgLy8gRmlyc3QgY2FzZTogdGhlIGxpbmUgaXMgc2hvcnRlciB0aGFuIG1heFdpZHRoLiBEaXNwbGF5IHRoZSBsaW5lXG4gIC8vIHdpdGggdGhlIGNhcmV0IHBvc2l0aW9uZWQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAmJiBsZW5ndGggPD0gbWF4V2lkdGgpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lfVxcbiR7c3B9JHsnICcucmVwZWF0KGNvbG5vIC0gMSl9XmBcbiAgfVxuXG4gIC8vIFNlY29uZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyB0byBhIGNoYXJhY3RlciBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy5cbiAgLy8gRGlzcGxheSB0aGUgZmlyc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGFmdGVyIGl0IGFuZCBwb3NpdGlvblxuICAvLyB0aGUgY2FyZXQgYmVsb3cgaXQuXG4gIGlmIChjb2xubyA8PSBtYXhXaWR0aCAtIDMpIHtcbiAgICByZXR1cm4gYCR7c3B9JHtsaW5lLnN1YnN0cmluZygwLCBtYXhXaWR0aCAtIDMpfS4uLlxcbiR7c3B9JHtcbiAgICAgICcgJy5yZXBlYXQoY29sbm8gLSAxKVxuICAgIH1eYFxuICB9XG5cbiAgLy8gVGhpcmQgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gKG1heFdpZHRoIC0gMykgYW5kIHRoZSBjYXJldFxuICAvLyBwb2ludHMgYXQgYSBjaGFyYWN0ZXIgdGhhdCBpcyBub3QgaW4gdGhlIGZpcnN0IChtYXhXaWR0aCAtIDMpXG4gIC8vIGNoYXJhY3RlcnMgYnV0IGlzIGluIHRoZSBsYXN0IChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIERpc3BsYXlcbiAgLy8gdGhlIGxhc3QgcGFydCBvZiB0aGUgbGluZSB3aXRoIGAuLi5gIGJlZm9yZSBpdCwgY2FsY3VsYXRlIGEgbmV3XG4gIC8vIHBvc2l0aW9uIGZvciB0aGUgY2FyZXQsIGFuZCBwb3NpdGlvbiBpdCBiZWxvdyB0aGUgbGluZS5cbiAgaWYgKGNvbG5vID49IGxlbmd0aCAtIG1heFdpZHRoICsgMykge1xuICAgIGNvbnN0IHN0YXJ0ID0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzXG4gICAgY29uc3QgbmV3Q29sbm8gPSBjb2xubyAtIChsZW5ndGggLSBtYXhXaWR0aClcbiAgICByZXR1cm4gYCR7c3B9Li4uJHtsaW5lLnN1YnN0cmluZyhzdGFydCl9XFxuJHtzcH0keycgJy5yZXBlYXQobmV3Q29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gRmluYWwgY2FzZTogdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gbWF4V2lkdGggLSAzIGFuZCB0aGUgY2FyZXRcbiAgLy8gZG9lcyBub3QgcG9pbnQgdG8gYSBjaGFyYWN0ZXIgd2l0aGluIGVpdGhlciB0aGUgZmlyc3Qgb3IgbGFzdFxuICAvLyAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLiBTaGlmdCB0aGUgbGluZSB0byBtYWtlIHRoZSBjYXJldCBwb2ludFxuICAvLyBhdCB0aGUgbWlkZGxlIG9mIGl0LCBhZGQgYC4uLmAgdG8gdGhlIHN0YXJ0ICphbmQqIGVuZCwgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgY29uc3Qgc3RhcnQgPSBjb2xubyAtIDEgLSBNYXRoLmNlaWwobWF4V2lkdGggLyAyKSArIDNcbiAgY29uc3QgZW5kID0gY29sbm8gLSAxICsgTWF0aC5mbG9vcihtYXhXaWR0aCAvIDIpIC0gM1xuICByZXR1cm4gYCR7c3B9Li4uJHtcbiAgICBsaW5lLnN1YnN0cmluZyhzdGFydCwgZW5kKVxuICB9Li4uXFxuJHtzcH0ke1xuICAgICcgJy5yZXBlYXQoTWF0aC5jZWlsKG1heFdpZHRoIC8gMikpXG4gIH1eYFxufVxuXG4vKipcbiAqIEZvcm1hdHMgYSBzZXQgb2YgbmVzdGVkIChvciBjb21wb3VuZCkgZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsoTmVzdGVkRXJyb3JbXXxDb21wb3VuZEVycm9yW10pfSBuZXN0ZWRzIEFuIGFycmF5IG9mIGVpdGhlclxuICogICAgIG5lc3RlZCBvciBjb21wb3VuZCBlcnJvcnMgdG8gZm9ybWF0LlxuICogQHBhcmFtIHtudW1iZXJ9IHRhYlNpemUgQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZSB0YWJcbiAqICAgICBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGVudCBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0byBpbmRlbnQgdGhlIGVycm9yXG4gKiAgICAgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgbmVzdGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmZ1bmN0aW9uIGZvcm1hdE5lc3RlZChuZXN0ZWRzLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KSB7XG4gIGNvbnN0IHNwID0gJyAnLnJlcGVhdChpbmRlbnQpXG4gIGNvbnN0IG5lc3RlZE1zZ3MgPSBuZXN0ZWRzLm1hcChuID0+IHtcbiAgICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBuLmN0eFxuICAgIGNvbnN0IGxhYmVsID0gbi5sYWJlbFxuICAgICAgPyBgXFxuJHtzcH1Db3VsZCBub3QgcGFyc2UgJHtuLmxhYmVsfSBiZWNhdXNlOlxcblxcbmBcbiAgICAgIDogYFxcbiR7c3B9VGhlIHBhcnNlciBiYWNrdHJhY2tlZCBhZnRlcjpcXG5cXG5gXG4gICAgcmV0dXJuIGxhYmVsICsgZm9ybWF0KG4uZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudCArIDIpXG4gIH0pXG4gIHJldHVybiBuZXN0ZWRNc2dzLmpvaW4oJycpXG59XG5cbi8qKlxuICogRW5zdXJlcyB0aGF0IGEgc3RyaW5nIGVuZHMgd2l0aCBhIGNlcnRhaW4gbnVtYmVyIG9mIG5ld2xpbmVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IFRoZSBzdHJpbmcgdGhhdCBpcyBzdXBwb3NlZCB0byBoYXZlIGEgY2VydGFpblxuICogICAgIG51bWJlciBvZiBuZXdsaW5lcyBhdCB0aGUgZW5kLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgbmV3bGluZXMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgc2FtZSBzdHJpbmcsIGJ1dCB3aXRoIGBjb3VudGAgbmV3bGluZXMgYXQgdGhlXG4gKiAgICAgZW5kLlxuICovXG5mdW5jdGlvbiBlbnN1cmVOZXdsaW5lcyh0ZXh0LCBjb3VudCkge1xuICBsZXQgcmVzdWx0ID0gdGV4dFxuICB3aGlsZSAocmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSA9PT0gJ1xcbicpIHtcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIHJlc3VsdC5sZW5ndGggLSAxKVxuICB9XG4gIHJldHVybiByZXN1bHQgKyAnXFxuJy5yZXBlYXQoY291bnQpXG59XG5cbi8qKlxuICogVGhlIGRlZmF1bHQgZm9ybWF0dGVyIGZvciBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgYSBzdHJpbmcgdGhhdCBoYXMgdGhlIGZvbGxvd2luZyBwYXJ0czpcbiAqXG4gKiAxLiBBIHBvc2l0aW9uIGxpbmUgdGhhdCBnaXZlcyB0aGUgbGluZSBudW1iZXIgYW5kIGNvbHVtbiBudW1iZXIgd2hlcmVcbiAqICAgIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDIuIEEgdmlzdWFsIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBlcnJvciBsb2NhdGlvbi4gVGhpcyBwYXJ0IGdlbmVyYXRlc1xuICogICAgdHdvIGxpbmVzIGluIHRoZSBlcnJvciBtZXNzYWdlLiBUaGUgZmlyc3QgaXMgZWl0aGVyIHRoZSBlbnRpcmVcbiAqICAgIGlucHV0IGxpbmUgb3IsIGlmIHRoYXQncyB0b28gbG9uZywgYSBwb3J0aW9uIG9mIHRoZSBpbnB1dCBsaW5lXG4gKiAgICBzdGFydGVkIGFuZC9vciBlbmRlZCB3aXRoIGVsbGlwc2VzIHRoYXQgY29udGFpbnMgdGhlIGVycm9yXG4gKiAgICBsb2NhdGlvbi4gVGhlIHNlY29uZCBpcyBhIGNhcmV0IHBvc2l0aW9uZWQgdW5kZXJuZWF0aCB0aGUgbG9jYXRpb25cbiAqICAgIGluIHRoZSBmaXJzdCBsaW5lIHRoYXQgc2hvd3MgZXhhY3RseSB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiAzLiBUaGUgZmlyc3QgdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLCBpZiBhbnkuXG4gKiA0LiBBbGwgb2YgdGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2VzIChpZiBhbnkpLCBzZXBhcmF0ZWQgYnkgJ29yJyBhbmRcbiAqICAgIGNvbW1tYXMgYXMgYXBwcm9wcmlhdGUgZm9yIHRoZSBudW1iZXIgb2YgbWVzc2FnZXMuXG4gKiA1LiBUaGUgZmlyc3Qgb2YgdGhlIGdlbmVyaWMgbWVzc2FnZXMsIGlmIGFueS5cbiAqXG4gKiBUaGUgcG9zaXRpb24gb2YgdGhlIGVycm9yIGlzIGluZGljYXRlZCBieSB0aGUgYGluZGV4YCBwYXJhbWV0ZXIsXG4gKiB3aGljaCBpcyB0aGUgaW5kZXggd2l0aGluIHRoZSBhcnJheSBvZiBieXRlcyBpbiBgdmlld2Agd2hlcmUgdGhlXG4gKiBlcnJvciBvY2N1cnJlZC4gVGhlIGNhbGN1bGF0aW9uIG9mIGxpbmUgYW5kIGNvbHVtbiBudW1iZXIgZnJvbSB0aGlzXG4gKiBmbGF0IGFycmF5IG9mIGJ5dGVzIHRha2VzIHRoZSBmb2xsb3dpbmcgaW50byBhY2NvdW50OlxuICpcbiAqICogTXVsdGktYnl0ZSBjaGFyYWN0ZXJzIChldmVyeXRoaW5nIGlzIFVURi04IGF3YXJlLCBzbyBjaGFyYWN0ZXJzIGNhblxuICogICBiZSAxLCAyLCAzLCBvciA0IGJ5dGVzIGxvbmcpXG4gKiAqIE11bHRpLWNoYXJhY3RlciBhbmQgc2luZ2xlLWNoYXJhY3RlciBtdWx0aS1ieXRlIGxpbmUgZW5kaW5nc1xuICogKiBUYWJzLCB3aGljaCBhcmUgZXhwYW5kZWQgaW50byBhIG51bWJlciBvZiBzcGFjZXMgc2V0IGJ5IHRoZVxuICogICBgdGFiU2l6ZWAgcGFyYW1ldGVyXG4gKiAqIFplcm8td2lkdGggY2hhcmFjdGVycywgc3VjaCBhcyB6ZXJvLXdpZHRoIHNwYWNlcyBhbmQgam9pbmVycywgUlRMXG4gKiAgIG9yIExUUiBmb3JtYXR0aW5nIGNoYXJhY3RlcnMsIGFuZCBkaWFjcml0aWNzIChIZWJyZXcgb3IgVGhhaSB2b3dlbFxuICogICBtYXJrcywgdW1sYXV0cyBvdmVyIExhdGluIGNoYXJhY3RlcnMsIGV0Yy4pXG4gKlxuICogVGhlIG91dHB1dCBpcyBhIHNpbmdsZSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgNSBlbGVtZW50cyBhYm92ZS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgdHdvIGxpbmVzIG9mIGNvZGUgdXNlcyBgc3RyaW5nVG9WaWV3YCwgYW4gaW50ZXJuYWxcbiAqIHV0aWxpdHkgZnVuY3Rpb24gdGhhdCwgYXMgaXRzIG5hbWUgc3VnZ2VzdHMsIHR1cm5zIGEgc3RyaW5nIGludG8gYVxuICogVVRGLTggZGF0YSB2aWV3LiBJdCdzIGNhbGxlZCBieSBgcGFyc2VgIGl0c2VsZiwgc28gaW4gcmVhbCB3b3JsZFxuICogdXNhZ2UsIGl0J3Mgbm90IG5lY2Vzc2FyeSB0byBrbm93LlxuICpcbiAqIGBgYFxuICogY29uc3QgdmlldyA9IHN0cmluZ1RvVmlldygnXFx0T25vbWF0b3BvZWlhXFx0XFx0XFx0XFx04LiE4Liz4LmA4Lil4Li14Lii4LiZ4LmA4Liq4Li14Lii4LiHJylcbiAqIGNvbnN0IG1lc3NhZ2UgPSBmb3JtYXQoW2V4cGVjdGVkKCdhIGRpZ2l0JyldLCAyOSwgdmlldywgNCwgNzIpXG4gKiBgYGBcbiAqXG4gKiBGcm9tIHRoaXMgY2FsbCB0byBgZm9ybWF0YCwgdGhlIGZvbGxvd2luZyBtdWx0aS1saW5lIHN0cmluZyB3aWxsIGJlXG4gKiBwcm9kdWNlZDpcbiAqXG4gKiBgYGBcbiAqIFBhcnNlIGVycm9yIGF0IChsaW5lIDEsIGNvbHVtbiAzNyk6XG4gKlxuICogICAgIE9ub21hdG9wb2VpYSAgICAgICAgICAgICAgICDguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIdcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF5cbiAqIEV4cGVjdGVkIGEgZGlnaXRcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRvIGJlIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggaW4gdGhlIHZpZXcgd2hlcmUgdGhlIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRldGVybWluZSB3aGVyZVxuICogICAgIHRhYiBzdG9wcyBsYXkuXG4gKiBAcGFyYW0ge251bWJlcn0gW21heFdpZHRoPTcyXSBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGVudD0wXSBUaGUgbnVtYmVyIG9mIHNwYWNlcyB0aGUgbWVzc2FnZSBzaG91bGQgYmVcbiAqICAgICBpbmRlbnRlZC4gVGhpcyBzaG91bGQgYmUgMCBhbmQgaW5jcmVhc2VkIG9ubHkgZm9yIG5lc3RlZCBlcnJvcnMuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBUaGUgZm9ybWF0dGVkIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQoXG4gIGVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUgPSA4LCBtYXhXaWR0aCA9IDcyLCBpbmRlbnQgPSAwLFxuKSB7XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIGxlbmd0aCB9ID0gZ2V0Q29sTnVtYmVyKGNvbEluZGV4LCBsaW5lKVxuXG4gIGNvbnN0IHBvc2l0aW9uID0gYCR7c3B9UGFyc2UgZXJyb3IgYXQgKGxpbmUgJHtsaW5lbm99LCBjb2x1bW4gJHtjb2xub30pOmBcbiAgY29uc3QgZGlzcGxheSA9IHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudClcbiAgY29uc3QgZ2VuZXJpYyA9IGVycm9ycy5maW5kKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5HZW5lcmljKVxuICBjb25zdCB1bmV4cGVjdGVkID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLlVuZXhwZWN0ZWQpXG4gIGNvbnN0IGV4cGVjdGVkID0gY29tbWFTZXBhcmF0ZShcbiAgICBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5FeHBlY3RlZClcbiAgICAgIC5tYXAoZXJyb3IgPT4gZXJyb3IubGFiZWwpLFxuICApXG5cbiAgY29uc3QgbmVzdGVkID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKVxuICBjb25zdCBjb21wb3VuZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkNvbXBvdW5kKVxuXG4gIGNvbnN0IHVuZXhwTXNnID0gdW5leHBlY3RlZCA/IGAke3NwfVVuZXhwZWN0ZWQgJHt1bmV4cGVjdGVkLmxhYmVsfVxcbmAgOiAnJ1xuICBjb25zdCBleHBNc2cgPSBleHBlY3RlZC5sZW5ndGggPyBgJHtzcH1FeHBlY3RlZCAke2V4cGVjdGVkfVxcbmAgOiAnJ1xuICBjb25zdCBnZW5lcmljTXNnID0gZ2VuZXJpYyA/IGAke3NwfSR7Z2VuZXJpYy5sYWJlbH1cXG5gIDogJydcblxuICBjb25zdCBuZXN0ZWRNc2cgPSBmb3JtYXROZXN0ZWQobmVzdGVkLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBjb21wb3VuZE1zZyA9IGZvcm1hdE5lc3RlZChjb21wb3VuZCwgdGFiU2l6ZSwgbWF4V2lkdGgsIGluZGVudClcblxuICBjb25zdCB1bmtub3duTXNnID0gZXJyb3JzLmxlbmd0aCA9PT0gMCA/IGAke3NwfVVua25vd24gZXJyb3IocylcXG5gIDogJydcbiAgY29uc3QgZW9mTXNnID0gaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoXG4gICAgPyBgJHtzcH1Ob3RlOiBmYWlsdXJlIG9jY3VycmVkIGF0IHRoZSBlbmQgb2YgaW5wdXRcXG5gIDogJydcblxuICByZXR1cm4gZW5zdXJlTmV3bGluZXMoXG4gICAgYCR7cG9zaXRpb259XFxuXFxuJHtkaXNwbGF5fVxcbiR7dW5leHBNc2d9JHtleHBNc2d9JHtnZW5lcmljTXNnfSR7dW5rbm93bk1zZ31gXG4gICAgICArIGAke2VvZk1zZ30ke2NvbXBvdW5kTXNnfSR7bmVzdGVkTXNnfWAsXG4gICAgMixcbiAgKVxufVxuXG4vLyAjZW5kcmVnaW9uXG5cbi8qKlxuICogQWNjZXB0cyBhIHBhcnNlciBjb250ZXh0IGFuZCBwcm9kdWNlcyBhbiBlcnJvciBtZXNzYWdlIGZyb20gaXQuXG4gKlxuICogQSBkZWZhdWx0IGZvcm1hdHRlciBpcyBwcm92aWRlZCBidXQgYW4gYWx0ZXJuYXRlIG9uZSBjYW4gYmUgcGFzc2VkXG4gKiBpbi4gVGhlIHNhbWUgZ29lcyBmb3IgdGFiIHNpemUgKHVzZWQgdG8gZXhwYW5kIHRhYnMgaW4gcGFyc2VkIHRleHQ7XG4gKiBkZWZhdWx0cyB0byA4IGluIHRoZSBkZWZhdWx0IGZvcm1hdHRlcikgYW5kIG1heCB3aWR0aCAoZm9yIHRoZSBlcnJvclxuICogbWVzc2FnZSBpdHNlbGY7IGRlZmF1bHRzIHRvIDcyIGluIHRoZSBkZWZhdWx0IGZvcm1hdHRlcikuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIHJlcGx5IHJldHVybmVkIGJ5IHRoZSBwYXJzZXIgd2hlbiB0aGUgZXJyb3JcbiAqICAgICBoYXBwZW5lZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZV0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZSB0YWJzXG4gKiAgICAgc3RvcC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4V2lkdGhdIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7Rm9ybWF0dGVyfSBbZm9ybWF0dGVyPWZvcm1hdF0gVGhlIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZVxuICogICAgIGFjdHVhbCBmb3JtYXR0aW5nIGlzIGRlbGVnYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdEVycm9ycyhyZXBseSwgdGFiU2l6ZSwgbWF4V2lkdGgsIGZvcm1hdHRlciA9IGZvcm1hdCkge1xuICBjb25zdCBbY3R4LCByZXN1bHRdID0gcmVwbHlcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIHJldHVybiBmb3JtYXR0ZXIocmVzdWx0LmVycm9ycywgaW5kZXgsIHZpZXcsIHRhYlNpemUsIG1heFdpZHRoKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IGJ5dGUgb2YgdGhlIHN1cHBsaWVkIGNvbnRleHQuIFRoZVxuICogcG9zaXRpb24gaXMgYW4gb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYCBwcm9wZXJ0aWVzIHRoYXQgYXJlXG4gKiB0aGUgMS1iYXNlZCBsaW5lIGFuZCBjb2x1bW4gbnVtYmVycyBvZiB0aGUgYnl0ZSBhdCB0aGUgY29udGV4dCdzXG4gKiBpbmRleCB3aXRoaW4gdGhlIGNvbnRleHQncyBkYXRhIHZpZXcuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgd2hvc2UgY3VycmVudCBwb3NpdGlvbiBpcyBiZWluZ1xuICogICAgIGNhbGN1bGF0ZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW3RhYlNpemU9OF0gQSBudW1iZXIgd2hvc2UgbXVsdGlwbGVzIGRlZmluZSB3aGVyZVxuICogICAgIHRhYnMgc3RvcC4gVGhlIGN1cnJlbnQgcG9zaXRpb24ncyBjb2x1bW4gbnVtYmVyIGlzIGFkanVzdGVkIGJhc2VkXG4gKiAgICAgb24gdGhpcyBwYXJhbWV0ZXIgd2hlbiB0YWIgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqIEByZXR1cm5zIHtQb3NpdGlvbn0gQSB0d28tcHJvcGVydHkgb2JqZWN0IHdpdGggYGxpbmVgIGFuZCBgY29sdW1uYFxuICogICAgIHByb3BlcnRpZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRQb3NpdGlvbihjdHgsIHRhYlNpemUgPSA4KSB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHN0YXJ0LCBlbmQsIGxpbmVubyB9ID0gZ2V0TGluZUluZGV4ZXMoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGNoYXJJbmRleCA9IGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpXG5cbiAgY29uc3QgcmF3TGluZSA9IHZpZXdUb1N0cmluZyhzdGFydCwgZW5kIC0gc3RhcnQgKyAxLCB2aWV3KVxuICBjb25zdCB7IGNvbEluZGV4LCBsaW5lIH0gPSB0YWJpZnkoY2hhckluZGV4LCByYXdMaW5lLCB0YWJTaXplKVxuICBjb25zdCB7IGNvbG5vLCBfIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXG5cbiAgcmV0dXJuIHsgbGluZTogbGluZW5vLCBjb2x1bW46IGNvbG5vIH1cbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQQVJTRVJTXG5cbmV4cG9ydCB7XG4gIGFscGhhLFxuICBhbnksXG4gIGNoYXIsXG4gIGRpZ2l0LFxuICBlb2YsXG4gIGhleCxcbiAgaWNoYXIsXG4gIGxldHRlcixcbiAgbG93ZXIsXG4gIG5vbmVvZixcbiAgb2N0YWwsXG4gIG9uZW9mLFxuICByYW5nZSxcbiAgc2F0aXNmeSxcbiAgdXBwZXIsXG59IGZyb20gJy4vcGFyc2Vycy9jaGFyJ1xuZXhwb3J0IHtcbiAgYWx3YXlzLFxuICBmYWlsLFxuICBmYXRhbCxcbn0gZnJvbSAnLi9wYXJzZXJzL21pc2MnXG5leHBvcnQge1xuICBuZXdsaW5lLFxuICByZWdleCxcbiAgc3BhY2UsXG4gIHNwYWNlcyxcbiAgc3BhY2VzMSxcbiAgdWFscGhhLFxuICB1bGV0dGVyLFxuICB1bG93ZXIsXG4gIHVuZXdsaW5lLFxuICB1c3BhY2UsXG4gIHVzcGFjZXMsXG4gIHVzcGFjZXMxLFxuICB1dXBwZXIsXG59IGZyb20gJy4vcGFyc2Vycy9yZWdleCdcbmV4cG9ydCB7XG4gIGFsbCxcbiAgYW55c3RyLFxuICBpc3RyLFxuICBzdHIsXG59IGZyb20gJy4vcGFyc2Vycy9zdHJpbmcnXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBDT01CSU5BVE9SU1xuXG5leHBvcnQge1xuICBhbHQsXG4gIGRlZixcbiAgZW1wdHksXG4gIG5vdCxcbiAgb3B0LFxuICBwZWVrLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2FsdGVybmF0aXZlJ1xuZXhwb3J0IHtcbiAgYXR0ZW1wdCxcbiAgYmFwcGx5LFxuICBiYmV0d2VlbixcbiAgYmJsb2NrLFxuICBiY2hhaW4sXG4gIGJjb3VudCxcbiAgYmxlZnQsXG4gIGJwaXBlLFxuICBicmlnaHQsXG4gIGJzZXEsXG4gIGJ1bnRpbCxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9iYWNrdHJhY2tpbmcnXG5leHBvcnQge1xuICBhcHBseSxcbiAgY2hhaW4sXG4gIGNvbXBhY3QsXG4gIGZpZnRoLFxuICBmaXJzdCxcbiAgZmxhdCxcbiAgZm91cnRoLFxuICBqb2luLFxuICBtYXAsXG4gIG50aCxcbiAgc2Vjb25kLFxuICB0aGlyZCxcbiAgdmFsdWUsXG59IGZyb20gJy4vY29tYmluYXRvcnMvY2hhaW5pbmcnXG5leHBvcnQge1xuICBiZXR3ZWVuLFxuICBibG9jayxcbiAgY291bnQsXG4gIGVuZGJ5LFxuICBlbmRieTEsXG4gIGxhc3NvYyxcbiAgbGFzc29jMSxcbiAgbGVmdCxcbiAgbWFueSxcbiAgbWFueTEsXG4gIHBpcGUsXG4gIHJhc3NvYyxcbiAgcmFzc29jMSxcbiAgcmlnaHQsXG4gIHNlcGJ5LFxuICBzZXBieTEsXG4gIHNlcSxcbiAgc2tpcCxcbiAgdW50aWwsXG59IGZyb20gJy4vY29tYmluYXRvcnMvc2VxdWVuY2UnXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBQQVJTRVIgVE9PTFMgQU5EIFVUSUxJVElFU1xuXG5leHBvcnQge1xuICBTdGF0dXMsXG4gIGZhaWxSZXBseSxcbiAgZmFpbHVyZSxcbiAgZmF0YWxSZXBseSxcbiAgb2tSZXBseSxcbiAgcGFyc2UsXG4gIHBhcnNlcixcbiAgcnVuLFxuICBzdGF0dXMsXG4gIHN1Y2NlZWRlZCxcbiAgc3VjY2Vzcyxcbn0gZnJvbSAnLi9jb3JlJ1xuZXhwb3J0IHtcbiAgRXJyb3JUeXBlLFxuICBjb21wb3VuZCxcbiAgZXhwZWN0ZWQsXG4gIGZvcm1hdEVycm9ycyxcbiAgZ2VuZXJpYyxcbiAgZ2V0UG9zaXRpb24sXG4gIG1lcmdlLFxuICBuZXN0ZWQsXG4gIG90aGVyLFxuICB1bmV4cGVjdGVkLFxufSBmcm9tICcuL2Vycm9yJ1xuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgZXhwZWN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuaW1wb3J0IHsgY29tbWFTZXBhcmF0ZSwgcXVvdGUgfSBmcm9tICcuL3V0aWwnXG5cbmV4cG9ydCBjb25zdCBzdHJpbmdzID0ge1xuICBhbHBoYTogJ2FuIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICBhbnk6ICdhbnkgY2hhcmFjdGVyJyxcbiAgYW55c3RyOiBuID0+IGBhIHN0cmluZyBvZiAke259IGNoYXJhY3RlcnNgLFxuICBjaGFyOiBjID0+IHF1b3RlKGMpLFxuICBkaWdpdDogJ2EgZGlnaXQnLFxuICBlb2Y6ICdlbmQgb2YgaW5wdXQnLFxuICBoZXg6ICdhIGhleGFkZWNpbWFsIGRpZ2l0JyxcbiAgaWNoYXI6IGMgPT4gcXVvdGUoYyksXG4gIGlzdHI6IHMgPT4gcXVvdGUocyksXG4gIGxldHRlcjogJ2EgbGV0dGVyJyxcbiAgbG93ZXI6ICdhIGxvd2VyY2FzZSBsZXR0ZXInLFxuICBuZXdsaW5lOiAnYSBuZXdsaW5lJyxcbiAgbm9uZW9mOiBhcnJheSA9PiAnbm9uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICBvY3RhbDogJ2FuIG9jdGFsIGRpZ2l0JyxcbiAgb25lb2Y6IGFycmF5ID0+ICdvbmUgb2YgJyArIGNvbW1hU2VwYXJhdGUoYXJyYXkubWFwKGMgPT4gYCcke2N9J2ApKSxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBgYSBjaGFyYWN0ZXIgYmV0d2VlbiAnJHtzdGFydH0nIGFuZCAnJHtlbmR9J2AsXG4gIHJlZ2V4OiByZSA9PiBgYSBzdHJpbmcgbWF0Y2hpbmcgJHtyZX1gLFxuICBzcGFjZTogJ2Egd2hpdGVzcGFjZSBjaGFyYWN0ZXInLFxuICBzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3BhY2VzMTogJ29uZSBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHN0cjogcyA9PiBxdW90ZShzKSxcbiAgdWFscGhhOiAnYSBVbmljb2RlIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXInLFxuICB1bGV0dGVyOiAnYSBVbmljb2RlIGxldHRlcicsXG4gIHVsb3dlcjogJ2EgVW5pY29kZSBsb3dlcmNhc2UgbGV0dGVyJyxcbiAgdW5ld2xpbmU6ICdhIFVuaWNvZGUgbmV3bGluZScsXG4gIHVwcGVyOiAnYW4gdXBwZXJjYXNlIGxldHRlcicsXG4gIHVzcGFjZTogJ2EgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHVzcGFjZXM6ICd6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICB1c3BhY2VzMTogJ29uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgdXVwcGVyOiAnYSBVbmljb2RlIHVwcGVyY2FzZSBsZXR0ZXInLFxufVxuXG5leHBvcnQgY29uc3QgZXhwZWN0ZWRzID0ge1xuICBhbHBoYTogZXhwZWN0ZWQoc3RyaW5ncy5hbHBoYSksXG4gIGFueTogZXhwZWN0ZWQoc3RyaW5ncy5hbnkpLFxuICBhbnlzdHI6IG4gPT4gZXhwZWN0ZWQoc3RyaW5ncy5hbnlzdHIobikpLFxuICBjaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuY2hhcihjKSksXG4gIGRpZ2l0OiBleHBlY3RlZChzdHJpbmdzLmRpZ2l0KSxcbiAgZW9mOiBleHBlY3RlZChzdHJpbmdzLmVvZiksXG4gIGhleDogZXhwZWN0ZWQoc3RyaW5ncy5oZXgpLFxuICBpY2hhcjogYyA9PiBleHBlY3RlZChzdHJpbmdzLmljaGFyKGMpKSxcbiAgaXN0cjogcyA9PiBleHBlY3RlZChzdHJpbmdzLmlzdHIocykpLFxuICBsZXR0ZXI6IGV4cGVjdGVkKHN0cmluZ3MubGV0dGVyKSxcbiAgbG93ZXI6IGV4cGVjdGVkKHN0cmluZ3MubG93ZXIpLFxuICBuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLm5ld2xpbmUpLFxuICBub25lb2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3Mubm9uZW9mKGFycmF5KSksXG4gIG9jdGFsOiBleHBlY3RlZChzdHJpbmdzLm9jdGFsKSxcbiAgb25lb2Y6IGFycmF5ID0+IGV4cGVjdGVkKHN0cmluZ3Mub25lb2YoYXJyYXkpKSxcbiAgcmFuZ2U6IChzdGFydCwgZW5kKSA9PiBleHBlY3RlZChzdHJpbmdzLnJhbmdlKHN0YXJ0LCBlbmQpKSxcbiAgcmVnZXg6IHJlID0+IGV4cGVjdGVkKHN0cmluZ3MucmVnZXgocmUpKSxcbiAgc3BhY2U6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2UpLFxuICBzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3Muc3BhY2VzKSxcbiAgc3BhY2VzMTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMxKSxcbiAgc3RyOiBzID0+IGV4cGVjdGVkKHN0cmluZ3Muc3RyKHMpKSxcbiAgdWFscGhhOiBleHBlY3RlZChzdHJpbmdzLnVhbHBoYSksXG4gIHVsZXR0ZXI6IGV4cGVjdGVkKHN0cmluZ3MudWxldHRlciksXG4gIHVsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy51bG93ZXIpLFxuICB1bmV3bGluZTogZXhwZWN0ZWQoc3RyaW5ncy51bmV3bGluZSksXG4gIHVwcGVyOiBleHBlY3RlZChzdHJpbmdzLnVwcGVyKSxcbiAgdXNwYWNlOiBleHBlY3RlZChzdHJpbmdzLnVzcGFjZSksXG4gIHVzcGFjZXM6IGV4cGVjdGVkKHN0cmluZ3MudXNwYWNlcyksXG4gIHVzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnVzcGFjZXMxKSxcbiAgdXVwcGVyOiBleHBlY3RlZChzdHJpbmdzLnV1cHBlciksXG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdDaGFyRm9ybWF0dGVyLFxuICBhcmdGbkZvcm1hdHRlcixcbiAgYXJnU3RyQXJyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydENoYXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRTdHJpbmcsXG4gIGFzc2VydFN0cmluZ09yQXJyYXksXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgbmV4dENoYXIgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIsIGZlZWRzIGl0IHRvIGEgZnVuY3Rpb24sIGFuZFxuICogc3VjY2VlZHMgb3IgZmFpbHMgYmFzZWQgb24gdGhlIHJldHVybiB2YWx1ZS5cbiAqXG4gKiBUaGVyZSBpc24ndCBhbnl0aGluZyBoZXJlIHRoYXQgY291bGRuJ3QgYmUgd3JpdHRlbiB3aXRoXG4gKiBgU3RyaW5nUGFyc2VyYCBpbnN0ZWFkLCBidXQgd2hlbiB3b3JraW5nIHdpdGggc2luZ2xlIGNoYXJhY3RlcnMgdGhlcmVcbiAqIGFyZSBjZXJ0YWluIGFzc3VtcHRpb25zIHRoYXQgY2FuIGJlIG1hZGUgKHN1Y2ggYXMgdGhlIG51bWJlciBvZlxuICogY2hhcmFjdGVycyB0aGF0IGhhdmUgdG8gYmUgcmVhZCBmcm9tIHRoZSBpbnB1dCB2aWV3KSB0aGF0IGFsbG93IGl0IHRvXG4gKiBiZSBhIGxpdHRsZSBtb3JlIGVmZmljaWVudC5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuY29uc3QgY2hhclBhcnNlciA9IGZuID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkgcmV0dXJuIGZhaWxSZXBseShjdHgpXG5cbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIHJldHVybiBmbihuZXh0KSA/IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKSA6IGZhaWxSZXBseShjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kIHN1Y2NlZWRzIGlmXG4gKiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgdGhyb3cgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgaXMgdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgY2hhciA9IChjLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdjaGFyJywgYywgYXJnQ2hhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjaGFyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoY2ggPT4gYyA9PT0gY2gpKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGNyZXBcbiAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmNoYXIoYykpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBmcm9tIGlucHV0IGFuZCBzdWNjZWVkcyBpZlxuICogdGhhdCBjaGFyYWN0ZXIgaXMgYGNgLiBUaGlzIGRpZmZlcnMgZnJvbSBgY2hhcmAgaW4gdGhhdCB0aGVcbiAqIGNvbXBhcmlzb24gZG9uZSBieSB0aGlzIHBhcnNlciBpcyBjYXNlLWluc2Vuc2l0aXZlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjIFRoZSBjaGFyYWN0ZXIgdG8gY29tcGFyZSB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgaW5wdXQgdG8uIElmIGBjYCBpcyBtb3JlIHRoYW4gb25lIGNoYXJhY3RlciwgdGhpcyBwYXJzZXIgd2lsbFxuICogICAgIHRocm93IGFuIGVycm9yLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgYGNgIChvciBpdHNcbiAqICAgICBvdGhlci1jYXNlZCBjb3VudGVycGFydCkgaXMgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGljaGFyID0gKGMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2ljaGFyJywgYywgYXJnQ2hhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdpY2hhcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKFxuICAgIGNoID0+IGMudG9Mb3dlckNhc2UoKSA9PT0gY2gudG9Mb3dlckNhc2UoKSxcbiAgKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBjcmVwXG4gICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5pY2hhcihjKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGFuZCBwYXNzZXMgaXQgdG8gdGhlIHByb3ZpZGVkXG4gKiBmdW5jdGlvbi4gSWYgdGhlIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGlzIHBhcnNlciBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3RlciBhcyB0aGUgcmVzdWx0LiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLCB0aGlzXG4gKiBwYXJzZXIgZmFpbHMgYW5kIGNvbnN1bWVzIG5vIGlucHV0LlxuICpcbiAqIFRoaXMgcGFyc2VyIGNhbm5vdCBkZXRlcm1pbmUgdGhlIGNhdXNlIGZvciBhbiBlcnJvciBzaW5jZSBpdCdzIG5vdFxuICogZmVhc2libGUgdG8gaGF2ZSBpdCBhbmFseXplIHRoZSBmdW5jdGlvbiB0byBzZWUgd2hhdCBpdCBleHBlY3RzIHRvXG4gKiBtYXRjaCwgc28gbm8gZXJyb3IgbWVzc2FnZSBpcyBwcm92aWRlZCBvbiBmYWlsdXJlLiBVc2VcbiAqIGBsYWJlbChzYXRpc2Z5KGZuKSwgbXNnKWAgb3IgdGhlIGVxdWl2YWxlbnQgYHNhdGlzZnlMKGZuLCBtc2cpYCB0b1xuICogYWRkIGFuIGFwcHJvcHJpYXRlIGVycm9yIG1lc3NhZ2UuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOmJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIG5leHRcbiAqICAgICBjaGFyYWN0ZXIgaXMgcGFzc2VkOyBpZiBpdCByZXR1cm5zIGB0cnVlYCwgdGhlIHBhcnNlciBzdWNjZWVkc1xuICogICAgIGFuZCBpZiBpdCByZXR1cm5zIGBmYWxzZWAgdGhlIHBhcnNlciBmYWlscy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGV4ZWN1dGVzIGBmbmBcbiAqICAgICBvbiBpdCB3aGVuIGFwcGxpZWQgdG8gaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzYXRpc2Z5ID0gKGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignc2F0aXNmeScsIGZuLCBhcmdGbkZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzYXRpc2Z5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIGlmIChjcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBjcmVwXG4gIHJldHVybiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGNyZXMuZXJyb3JzKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIGRldGVybWluZXMgd2hldGhlciBpdCBpc1xuICogYmV0d2VlbiAoYWNjb3JkaW5nIHRvIGNvZGUgcG9pbnRzKSBjaGFyYWN0ZXJzIGBzYCBhbmQgYGVgXG4gKiAoaW5jbHVzaXZlKS4gSWYgaXQgaXMsIHRoZSByZWFkIGNoYXJhY3RlciBpcyB0aGUgc3VjY2Vzc2Z1bCByZXN1bHQsXG4gKiBhbmQgaWYgaXQgaXMgbm90LCB0aGUgcGFyc2VyIGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICpcbiAqIGBzYCBhbmQgYGVgIGFyZSBleHBlY3RlZCB0byBiZSBzaW5nbGUgY2hhcmFjdGVycy4gQW4gZXJyb3Igd2lsbCBiZVxuICogdGhyb3duIGlmIHRoZXkgYXJlIG5vdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgY2hhcmFjdGVyIHRoYXQgZGVmaW5lcyB0aGUgc3RhcnQgb2YgdGhlIHJhbmdlXG4gKiAgICAgb2YgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBlIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBlbmQgb2YgdGhlIHJhbmdlIG9mXG4gKiAgICAgY2hhcmFjdGVycyB0byBtYXRjaC4gSXQgaXMgaW5jbHVkZWQgaW4gdGhhdCByYW5nZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIHRoZSBuZXh0IGlucHV0XG4gKiAgICAgY2hhcmFjdGVyIGlzIGJldHdlZW4gYHN0YXJ0YCBhbmQgYGVuZGAgKGluY2x1c2l2ZSkuXG4gKi9cbmV4cG9ydCBjb25zdCByYW5nZSA9IChzLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIHMsIGFyZ0NoYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRDaGFyKCdyYW5nZScsIGUsIGFyZ0NoYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmFuZ2UnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gcyAmJiBjIDw9IGVcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgID8gY3JlcFxuICAgIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMucmFuZ2UocywgZSkpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGlucHV0IGNoYXJhY3RlciBhbmQgdGhlbiBzdWNjZWVkcyB3aXRoXG4gKiB0aGF0IGNoYXJhY3Rlci4gRmFpbHMgb25seSBpZiB0aGVyZSBpcyBubyBpbnB1dCBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBtYXRjaGVzIGFueSBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnkgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhbnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmFueSkpXG4gIH1cblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoYXQgY2hhcmFjdGVyIGRvZXNcbiAqIG5vdCBleGlzdCAoaS5lLiwgaWYgdGhlIGluZGV4IGlzIGFscmVhZHkgYXQgdGhlIGVuZCBvZiB0aGUgaW5wdXQpLlxuICogQ29uc3VtZXMgbm90aGluZyBvbiBlaXRoZXIgc3VjY2VzcyBvciBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgbWF0Y2hlcyB0aGUgZW5kIG9mIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgZW9mID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZW9mJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIHJldHVybiBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICA/IG9rUmVwbHkoY3R4LCBudWxsKVxuICAgIDogZmFpbFJlcGx5KGN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5lb2YpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBjb21wYXJlcyBpdCBhZ2FpbnN0IGVhY2ggb2YgdGhlXG4gKiBjaGFyYWN0ZXJzIGluIGBjc2AsIHdoaWNoIGlzIGVpdGhlciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzIG9yIGFcbiAqIHN0cmluZy4gSWYgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIGFtb25nIHRob3NlIGNoYXJhY3RlcnMsIHRoZSBwYXJzZXJcbiAqIHdpbGwgc3VjY2VlZC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8c3RyaW5nW10pfSBjcyBUaGUgY2hhcmFjdGVycywgZWl0aGVyIGluIGFuIGFycmF5IG9yIGFcbiAqICAgICBzdHJpbmcsIGluIHdoaWNoIHRoZSBuZXh0IGlucHV0IGNoYXJhY3RlciBoYXMgdG8gYmUgYSBtZW1iZXIgZm9yXG4gKiAgICAgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgb25lXG4gKiAgICAgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9uZW9mID0gKGNzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPckFycmF5KCdvbmVvZicsIGNzLCBhcmdTdHJBcnJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnb25lb2YnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLm9uZW9mKGFycikpKVxuICB9XG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxuICAgIDogZmFpbFJlcGx5KGN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5vbmVvZihhcnIpKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgY29tcGFyZXMgaXQgYWdhaW5zdCBlYWNoIG9mIHRoZVxuICogY2hhcmFjdGVycyBpbiBgY3NgLCB3aGljaCBpcyBlaXRoZXIgYW4gYXJyYXkgb2YgY2hhcmFjdGVycyBvciBhXG4gKiBzdHJpbmcuIElmIHRoZSByZWFkIGNoYXJhY3RlciBpcyAqbm90KiBhbW9uZyB0aG9zZSBjaGFyYWN0ZXJzLCB0aGVcbiAqIHBhcnNlciB3aWxsIHN1Y2NlZWQuXG4gKlxuICogQHBhcmFtIHsoc3RyaW5nfHN0cmluZ1tdKX0gY3MgVGhlIGNoYXJhY3RlcnMsIGVpdGhlciBpbiBhbiBhcnJheSBvciBhXG4gKiAgICAgc3RyaW5nLCBpbiB3aGljaCB0aGUgbmV4dCBpbnB1dCBjaGFyYWN0ZXIgaGFzIHRvIG5vdCBiZSBhIG1lbWJlclxuICogICAgIGZvciB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBub3RcbiAqICAgICBvbmUgb2YgdGhlIGNoYXJhY3RlcnMgaW4gYGNoYXJzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vbmVvZiA9IChjcywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JBcnJheSgnbm9uZW9mJywgY3MsIGFyZ1N0ckFyckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdub25lb2YnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgaWYgKGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLm5vbmVvZihhcnIpKSlcbiAgfVxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLm5vbmVvZihhcnIpKSlcbiAgICA6IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBkaWdpdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgZGlnaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBkaWdpdCA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2RpZ2l0JywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuZGlnaXQpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGhleGFkZWNpbWFsIGRpZ2l0LiBUaGlzIHBhcnNlciBpcyBub3QgY2FzZSBzZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGhleGFkZWNpbWFsIGRpZ2l0LlxuICovXG5leHBvcnQgY29uc3QgaGV4ID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnaGV4JywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gICAgfHwgYyA+PSAnYScgJiYgYyA8PSAnZidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdGJ1xuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rID8gY3JlcCA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmhleCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIG9jdGFsIGRpZ2l0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgb2N0YWwgZGlnaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBvY3RhbCA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ29jdGFsJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJzAnICYmIGMgPD0gJzcnXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMub2N0YWwpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxldHRlciA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xldHRlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6JyB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBjcmVwXG4gICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5sZXR0ZXIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgYWxwaGFudW1lcmljIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGFscGhhID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYWxwaGEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgICB8fCBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICAgIHx8IGMgPj0gJzAnICYmIGMgPD0gJzknXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYWxwaGEpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhbiBBU0NJSSB1cHBlcmNhc2UgbGV0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgdXBwZXJjYXNlIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVwcGVyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndXBwZXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnQScgJiYgYyA8PSAnWidcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51cHBlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGxvd2VyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGxvd2VyY2FzZSBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBsb3dlciA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xvd2VyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMubG93ZXIpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGFzc2VydFN0cmluZyB9IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZ2VuZXJpYyB9IGZyb20gJ2tlc3NlbC9lcnJvcidcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyB3aXRoIHRoZSBzdXBwbGllZFxuICogICAgIGVycm9yIG1lc3NhZ2UuXG4gKi9cbmV4cG9ydCBjb25zdCBmYWlsID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmFpbCcsIG0pXG4gIHJldHVybiBmYWlsUmVwbHkoY3R4LCBnZW5lcmljKG0pKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGZhaWxzIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LCBzZXR0aW5nIHRoZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIHRvIHdoYXRldmVyIGlzIHBhc3NlZCBpbi4gVGhpcyBzaWduaWZpZXMgYSBmYXRhbCBlcnJvcixcbiAqIG9uZSB0aGF0IGNhbm5vdCBiZSByZWNvdmVyZWQgZnJvbSB3aXRob3V0IGJhY2t0cmFja2luZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbSBUaGUgbWVzc2FnZSB1c2VkIHRvIGNyZWF0ZSB0aGUgZ2VuZXJpYyBlcnJvci5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXV0b21hdGljYWxseSBmYWlscyBmYXRhbGx5IHdpdGggdGhlXG4gKiAgICAgc3VwcGxpZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhdGFsID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnZmF0YWwnLCBtKVxuICByZXR1cm4gZmF0YWxSZXBseShjdHgsIGdlbmVyaWMobSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGFsd2F5cyBzdWNjZWVkcyB3aXRoIHRoZSBzdXBwbGllZCB2YWx1ZS5cbiAqXG4gKiBUaGlzIHNlcnZlcyBhcyBhIHByaW1pdGl2ZSBmb3IgYm90aCBtb25hZHMgYW5kIGFwcGxpY2F0aXZlcy4gSW5cbiAqIEhhc2tlbGwgdGVybXMsIHRoaXMgZnVuY3Rpb24gcmVwcmVzZW50cyBib3RoIGBwdXJlYCBpbiB0aGVcbiAqIGBBcHBsaWNhdGl2ZWAgY2xhc3MgYW5kIGByZXR1cm5gIGluIHRoZSBgTW9uYWRgIGNsYXNzLlxuICpcbiAqIEluIG90aGVyIHdvcmRzLCBpdCBsaWZ0cyBhbiBhcmJpdHJhcnkgdmFsdWUgaW50byBhIFBhcnNlciBjb250ZXh0LFxuICogdHVybmluZyBpdCBpbnRvIGEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGF0IHZhbHVlLlxuICpcbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgd2lsbCByZXN1bHQgd2hlbiB0aGlzIHBhcnNlciBpcyBhcHBsaWVkLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgd2l0aCBgdmFsdWVgLlxuICovXG5leHBvcnQgY29uc3QgYWx3YXlzID0geCA9PiBwYXJzZXIoY3R4ID0+IG9rUmVwbHkoY3R4LCB4KSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXJnU3RyUmVnRm9ybWF0dGVyLFxuICBhc3NlcnRTdHJpbmcsXG4gIGFzc2VydFN0cmluZ09yUmVnRXhwLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgZHVwLCBmZXJyb3IsIHN0cmluZ1RvVmlldywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vLyBBbGwgb2YgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdXNlZCBpbiB0aGUgZGVyaXZlZCByZWdleCBwYXJzZXJzLlxuLy8gVGhlc2UgYXJlIGhlcmUgdG8gY3JlYXRlIGFuZCBjb21waWxlIHRoZW0gb25jZSwgdXBvbiBpbml0aWFsIGxvYWQsIHRvXG4vLyBzcGVlZCBwYXJzaW5nIGxhdGVyLlxuXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxldHRlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxldHRlciA9IC9eXFxwe0FscGhhYmV0aWN9L3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIG9yIG51bWJlciBjaGFyYWN0ZXIuICovXG5jb25zdCByZUFscGhhID0gL14oPzpcXHB7QWxwaGFiZXRpY318XFxwe059KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIHVwcGVyY2FzZSBvciB0aXRsZWNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVcHBlciA9IC9eKD86XFxwe1VwcGVyY2FzZX18XFxwe0x0fSkvdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsb3dlcmNhc2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVMb3dlciA9IC9eXFxwe0xvd2VyY2FzZX0vdVxuLyoqIE1hdGNoZXMgYSBzaW5nbGUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVTcGFjZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHQgXSkvXG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiAqL1xuY29uc3QgcmVVc3BhY2UgPSAvXig/OlxcclxcbnxcXHB7V2hpdGVfU3BhY2V9KS91XG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgY29udmVudGlvbmFsIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlU3BhY2VzID0gL15bXFxyXFxuXFx0IF0qL1xuLyoqIE1hdGNoZXMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVVc3BhY2VzID0gL15cXHB7V2hpdGVfU3BhY2V9Ki91XG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMxID0gL15bXFxyXFxuXFx0IF0rL1xuLyoqIE1hdGNoZXMgb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMxID0gL15cXHB7V2hpdGVfU3BhY2V9Ky91XG4vKiogTWF0Y2hlcyBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKFxcciwgXFxuLCBvciBcXHJcXG4pLiAqL1xuY29uc3QgcmVOZXdsaW5lID0gL14oPzpcXHJcXG58XFxyfFxcbikvXG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIG5ld2xpbmUgY2hhcmFjdGVyLCBwbHVzIFxcclxcbi4gKi9cbmNvbnN0IHJlVW5ld2xpbmUgPSAvXig/OlxcclxcbnxbXFxyXFxuXFx1MDA4NVxcdTIwMjhcXHUyMDI5XSkvdVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgdGFrZXMgYSByZWd1bGFyIGV4cHJlc3Npb24gb2JqZWN0IGFuZCBtYXRjaGVzIGl0IGFzIGZhclxuICogYXMgaXQgY2FuIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICpcbiAqIEl0IGlzIGFzc3VtZWQgdGhhdCB0aGUgcmVnZXggYmVnaW5zIHdpdGggYSBgXmAgLiBUaGUgYGdgIGZsYWcgaXNcbiAqIGlnbm9yZWQgaW4gdGhhdCBvbmx5IHRoZSBmaXJzdCBtYXRjaCBpcyBwcm9jZXNzZWQgYW5kIHJldHVybmVkLiBUaGlzXG4gKiBlbnN1cmVzIHRoYXQgdGhlIG1hdGNoIGlzIG9ubHkgYWdhaW5zdCB0aGUgdGV4dCBkaXJlY3RseSBhdCB0aGVcbiAqIGN1cnJlbnQgcG9pbnRlciBsb2NhdGlvbi5cbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcmUgVGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiB1c2VkIHRvIG1hdGNoIGFnYWluc3QgdGhlXG4gKiAgICAgaW5wdXQgdGV4dCBzdGFydGluZyBhdCBpdHMgY3VycmVudCBwb3NpdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmNvbnN0IHJlZ2V4UGFyc2VyID0gcmUgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCByZXN0ID0gdmlld1RvU3RyaW5nKGluZGV4LCB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleCwgdmlldylcblxuICBjb25zdCBtYXRjaCA9IHJlc3QubWF0Y2gocmUpXG4gIHJldHVybiBtYXRjaFxuICAgID8gb2tSZXBseShjdHgsIG1hdGNoWzBdLCBpbmRleCArIHN0cmluZ1RvVmlldyhtYXRjaFswXSkuYnl0ZUxlbmd0aClcbiAgICA6IGZhaWxSZXBseShjdHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHN1cHBsaWVkIHJlZ3VsYXIgZXhwcmVzc2lvbiB0b1xuICogdGhlIGlucHV0IHRleHQgYXQgdGhlIGN1cnJlbnQgbG9jYXRpb24uIElmIHRoZXJlIGlzIGEgbWF0Y2gsIGFueVxuICogbWF0Y2hpbmcgdGV4dCBpcyByZXR1cm5lZCBhcyBhIHN1Y2Nlc3NmdWwgcmVzdWx0LiBObyB0ZXh0IGlzIGNvbnN1bWVkXG4gKiB1cG9uIGZhaWx1cmUuXG4gKlxuICogQSBzdHJpbmcgY2FuIGJlIHBhc3NlZCB0byB0aGlzIHBhcnNlci4gSWYgb25lIGlzLCBpdCBpcyBjb252ZXJ0ZWRcbiAqIGludG8gYSByZWd1bGFyIGV4cHJlc3Npb24gd2l0aG91dCBmbGFncy5cbiAqXG4gKiBJZiBhIHN0YXJ0IGFuY2hvciAoXikgaXMgbm90IGluY2x1ZGVkLCBvbmUgd2lsbCBiZSBhZGRlZC4gSWYgdGhlIGBnYFxuICogZmxhZyBpcyBpbmNsdWRlZCwgaXQnbGwgZnVuY3Rpb25hbGx5IGJlIGlnbm9yZWQgYXMgb25seSB0aGUgZmlyc3RcbiAqIG1hdGNoIHdpbGwgYmUgY29uc2lkZXJlZCBhbnl3YXkuIFRoZXNlIHR3byBydWxlcyBlbnN1cmUgdGhhdCB0aGVcbiAqIG1hdGNoIGlzIG9ubHkgYXR0ZW1wdGVkIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgdGV4dC5cbiAqXG4gKiBAcGFyYW0geyhzdHJpbmd8UmVnRXhwKX0gciBUaGUgcmVndWxhciBleHByZXNzaW9uIHRvIG1hdGNoIGFnYWluc3RcbiAqICAgICB0aGUgaW5wdXQgdGV4dC4gSWYgdGhpcyBpcyBhIHN0cmluZywgaXQgd2lsbCBiZSBjb252ZXJ0ZWQgaW50byBhXG4gKiAgICAgcmVndWxhciBleHByZXNzaW9uIHdpdGggbm8gZmxhZ3MuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIHRoZSByZWd1bGFyXG4gKiAgICAgZXhwcmVzc2lvbiBhZ2FpbnN0IHRoZSBpbnB1dCBhdCBpdHMgY3VycmVudCBwb3NpdGlvbiBhbmQgc3VjY2VlZHNcbiAqICAgICBpZiBhIG1hdGNoIGlzIGZvdW5kLlxuICovXG5leHBvcnQgY29uc3QgcmVnZXggPSAociwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nT3JSZWdFeHAoJ3JlZ2V4JywgciwgYXJnU3RyUmVnRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3JlZ2V4JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIC8vIEZpcnN0LCBjb252ZXJ0IHRvIGEgcmVndWxhciBleHByZXNzaW9uIGlmIGl0J3MgYSBzdHJpbmdcbiAgbGV0IHJlZ2V4ID0gdHlwZW9mIHIgPT09ICdzdHJpbmcnID8gbmV3IFJlZ0V4cChyKSA6IHJcblxuICAvLyBOZXh0LCBtYWtlIHN1cmUgdGhlIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdGFydHMgd2l0aCBhIF4gYW5jaG9yXG4gIGNvbnN0IHsgc291cmNlLCBmbGFncyB9ID0gcmVnZXhcbiAgY29uc3QgcmVhbmNob3IgPSBzb3VyY2VbMF0gIT09ICdeJ1xuICBpZiAocmVhbmNob3IpIHtcbiAgICBjb25zdCBuZXdTb3VyY2UgPSAnXicgKyBzb3VyY2VcbiAgICByZWdleCA9IG5ldyBSZWdFeHAobmV3U291cmNlLCBmbGFncylcbiAgfVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlZ2V4KShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5yZWdleChyZWdleCkpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIGxldHRlci4gQSBsZXR0ZXIgZm9yIHRoaXMgcHVycG9zZSBpcyBhbnkgY2hhcmFjdGVyIHdpdGggdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgdWxldHRlciA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VsZXR0ZXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxldHRlcikoY3R4KSlcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcnJlcFxuICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudWxldHRlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFscGhhbnVtZXJpYy4gQSBjaGFyYWN0ZXIgaXMgYWxwaGFudW1lcmljIGlmIGl0IGhhcyBlaXRoZXIgdGhlXG4gKiBVbmljb2RlIGBBbHBoYWJldGljYCBwcm9wZXJ0eSBvciB0aGUgVW5pY29kZSBgTnVtYmVyYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhblxuICogICAgIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1YWxwaGEgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1YWxwaGEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUFscGhhKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51YWxwaGEpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBlaXRoZXIgYW4gdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBsZXR0ZXIuIEEgY2hhcmFjdGVyIGlzXG4gKiB1cHBlcmNhc2UgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBVcHBlcmNhc2VgIHByb3BlcnR5IGFuZCBpcyB0aXRsZWNhc2VcbiAqIGlmIGl0IGhhcyB0aGUgVW5pY29kZSBgTGV0dGVyLCBUaXRsZWNhc2VgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgdXBwZXJjYXNlIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHV1cHBlciA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3V1cHBlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXBwZXIpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHJyZXBcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnV1cHBlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbG93ZXJjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXMgbG93ZXJjYXNlIGlmIGl0IGhhcyB0aGVcbiAqIFVuaWNvZGUgYExvd2VyY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIGxvd2VyY2FzZSBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1bG93ZXIgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1bG93ZXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZUxvd2VyKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51bG93ZXIpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgdGhpcyBwYXJzZXJcbiAqIHJlY29nbml6ZXMgYXJlIHNwYWNlLCB0YWIsIGFuZCBhbnkgY29udmVudGlvbmFsIG5ld2xpbmUgKGBcXHJgLCBgXFxuYCxcbiAqIG9yIGBcXHJcXG5gKS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhblxuICogICAgIEFTQ0lJIHdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2UgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzcGFjZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlU3BhY2UpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2sgPyBycmVwIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuc3BhY2UpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyB3aXRoIHRoYXQgY2hhcmFjdGVyIGlmXG4gKiBpdCBpcyBhIHdoaXRlc3BhY2UgY2hhcmFjdGVyLiBBIGNoYXJhY3RlciBpcyB3aGl0ZXNwYWNlIGZvciB0aGVcbiAqIHB1cnBvc2Ugb2YgdGhpcyBwYXJzZXIgaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBXaGl0ZV9TcGFjZWAgcHJvcGVydHkuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBhbHNvIHJlY29nbml6ZSB0aGUgdHdvLWNoYXJhY3RlciBjb21iaW5hdGlvbiBgXFxyXFxuYFxuICogYXMgYSBzaW5nbGUgaW5zdGFuY2Ugb2Ygd2hpdGVzcGFjZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzcGFjZSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VzcGFjZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlVXNwYWNlKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51c3BhY2UpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHplcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlclxuICogYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm8gd2hpdGVzcGFjZXMgaXMgZW5vdWdoIHRvIG1ha2UgaXQgc3VjY2VlZCxcbiAqIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZSBpbmRleCBpbiB0aGF0IGNhc2UuIFRoaXMgcGFyc2VyIHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyBhbmQgc2tpcHMgb3ZlciBhbnlcbiAqICAgICBudW1iZXIgb2YgQVNDSUkgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgY29uc3Qgc3BhY2VzID0gKCkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IFtyY3R4LCBfXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzKShjdHgpXG4gIHJldHVybiBva1JlcGx5KHJjdHgsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIGFsd2F5cyBzdWNjZWVkczsgZXZlbiB6ZXJvXG4gKiB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLCB0aG91Z2ggaXQgd2lsbCBub3QgbW92ZSB0aGVcbiAqIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90XG4gKiBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIGFuZCBza2lwcyBvdmVyIGFueVxuICogICAgIG51bWJlciBvZiBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IHVzcGFjZXMgPSAoKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzKShjdHgpXG4gIHJldHVybiBva1JlcGx5KHJjdHgsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIChzcGFjZSwgYFxcdGAsXG4gKiBgXFxyYCwgb3IgYFxcbmApIGF0IHRoZSBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgd2lsbFxuICogb25seSBmYWlsIGlmIHRoZXJlIGlzIG5vdCBhdCBsZWFzdCBvbmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIgcmVhZC4gT25cbiAqIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZSB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc2tpcHMgb25lIG9yIG1vcmUgQVNDSUkgd2hpdGVzcGFjZVxuICogICAgIGNoYXJhY3RlcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMxID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc3BhY2VzMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtyY3R4LCBycmVzXSA9IHJlZ2V4UGFyc2VyKHJlU3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBva1JlcGx5KHJjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5zcGFjZXMxKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyBhdCB0aGVcbiAqIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsIG9ubHkgZmFpbCBpZiB0aGVyZSBpc1xuICogbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPbiBzdWNjZXNzLCBpdCBza2lwcyB0aGVcbiAqIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBza2lwcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2VcbiAqICAgICBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgY29uc3QgdXNwYWNlczEgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1c3BhY2VzMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtyY3R4LCBycmVzXSA9IHJlZ2V4UGFyc2VyKHJlVXNwYWNlczEpKGN0eClcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgID8gb2tSZXBseShyY3R4LCBudWxsKVxuICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudXNwYWNlczEpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXNcbiAqIGEgbmV3bGluZS4gSWYgdGhhdCBuZXdsaW5lIGlzIGEgY2FycmlhZ2UgcmV0dXJuLCBpdCB3aWxsIGFsc28gcmVhZFxuICogdGhlIG5leHQgY2hhcmFjdGVyIGFuZCBpbmNsdWRlIGl0IGluIHRoZSByZXN1bHQgaWYgaXQgaXMgYSBsaW5lIGZlZWQuXG4gKiBOZXdsaW5lcyB0aGlzIHBhcnNlciByZWNvZ25pemVzIGFyZSBhbnkgb2YgdGhlIGZvbGxvd2luZ1xuICogY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICpcbiAqIE5vIGNoYXJhY3RlcnMgd2lsbCBiZSBjb25zdW1lZCBvbiBmYWlsdXJlLCBldmVuIGluIHRoZSBjYXNlIG9mXG4gKiBgXFxyXFxuYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhblxuICogICAgIEFTQ0lJIG5ld2xpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCBuZXdsaW5lID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbmV3bGluZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcnJlcFxuICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMubmV3bGluZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIGluIFVuaWNvZGUgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nIGNoYXJhY3RlcnMvY29tYmluYXRpb25zOlxuICpcbiAqICogYExGYCAobGluZSBmZWVkLCBgVSswMDBBYCBvciBgXFxuYClcbiAqICogYENSYCAoY2FycmlhZ2UgcmV0dXJuLCBgVSswMDBEYCBvciBgXFxyYClcbiAqICogYENSK0xGYCAoYENSYCBmb2xsb3dlZCBieSBgTEZgLCBgXFxyXFxuYClcbiAqICogYE5FTGAgKG5leHQgbGluZSwgYFUrMDA4NWApXG4gKiAqIGBMU2AgKGxpbmUgc2VwYXJhdG9yLCBgVSsyMDI4YClcbiAqICogYFBTYCAocGFyYWdyYXBoIHNlcGFyYXRvciwgYFUrMjAyOWApXG4gKlxuICogVGhpcyBkb2VzIG5vdCBpbmNsdWRlIHRoZSBjaGFyYWN0ZXJzIGBcXGZgIG9yIGBcXHZgLCB3aGljaCB3aGlsZSBiZWluZ1xuICogdmVydGljYWwgc2VwYXJhdG9ycywgYXJlbid0IHJlYWxseSBuZXdsaW5lcyBpbiB0aGUgdHJhZGl0aW9uYWwgc2Vuc2UuXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBVbmljb2RlIG5ld2xpbmUuXG4gKi9cbmV4cG9ydCBjb25zdCB1bmV3bGluZSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VuZXdsaW5lJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVbmV3bGluZSkoY3R4KSlcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcnJlcFxuICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudW5ld2xpbmUpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnROdW1iZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGNoYXJMZW5ndGgsIGR1cCwgZmVycm9yLCBuZXh0Q2hhcnMsIHZpZXdUb1N0cmluZyB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGF0dGVtcHRzIHRvIG1hdGNoIGEgcGFydGljdWxhciBzdHJpbmcgZnJvbSB0aGUgY3VycmVudFxuICogcG9zaXRpb24gaW4gdGhlIHRleHQuIEEgc3RyaW5nIG9mIGNoYXJhY3RlcnMgZXF1YWwgaW4gbGVuZ3RoIHRvXG4gKiBgbGVuZ3RoYCBpcyByZWFkIGZyb20gaW5wdXQgYW5kIHBhc3NlZCB0byBgZm5gOyBpZiBgZm5gIHJldHVybnNcbiAqIGB0cnVlYCwgdGhlbiB0aGUgcGFyc2VyIHN1Y2NlZWRzLlxuICpcbiAqIFRoaXMgcGFyc2VyIGFsd2F5cyBmYWlscyBpZiB0aGVyZSBhcmUgbGVzcyB0aGFuIGBsZW5ndGhgIGNoYXJhY3RlcnNcbiAqIGxlZnQgaW4gdGhlIGlucHV0LiBJdCB3aWxsIGFsd2F5cyBwYXNzIGlmIGBsZW5ndGhgIGlzIDAuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdGhhdCB0aGUgcGFyc2VyXG4gKiAgICAgc2hvdWxkIHJlYWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6IGJvb2xlYW59IGZuIEEgZnVuY3Rpb24gdG8gd2hpY2ggdGhlIHJlYWRcbiAqICAgICBzdHJpbmcgaXMgcGFzc2VkLiBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSByZWFkIHN0cmluZyBwYXNzZXNcbiAqICAgICB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uLlxuICovXG5jb25zdCBzdHJpbmdQYXJzZXIgPSAobGVuZ3RoLCBmbikgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGlmIChsZW5ndGggPCAxKSByZXR1cm4gb2tSZXBseShjdHgsICcnKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGxlbmd0aClcbiAgcmV0dXJuIGNoYXJMZW5ndGgobmV4dCkgIT09IGxlbmd0aCB8fCAhZm4obmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgpXG4gICAgOiBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50IGxvY2F0aW9uIGluIHRoZSBpbnB1dFxuICogYW5kIG1hdGNoZXMgaXQgYWdhaW5zdCBpdHMgc3VwcGxpZWQgc3RyaW5nLiBUaGUgc3RyaW5nIG1hdGNoIG11c3QgYmVcbiAqIGV4YWN0IChpdCBpcyBjYXNlLXNlbnNpdGl2ZSksIGFuZCBhbGwgVVRGLTggY2hhcmFjdGVycyBhcmUgcmVjb2duaXplZFxuICogcHJvcGVybHkuXG4gKlxuICogSWYgYHNgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBzdHIgPSAocywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdzdHInLCBzLCBhcmdTdHJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtzcmVwLCBbc2N0eCwgc3Jlc11dID0gZHVwKHN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHMpLCBjaGFycyA9PiBzID09PSBjaGFycyxcbiAgKShjdHgpKVxuICByZXR1cm4gc3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBzcmVwXG4gICAgOiBmYWlsUmVwbHkoc2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5zdHIocykpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoaXMgbWF0Y2ggaXMgKm5vdCpcbiAqIGNhc2Utc2Vuc2l0aXZlLlxuICpcbiAqIElmIGBzdHJgIGlzIGVtcHR5LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBzdWNjZWVkLiBJZiBpdCBpc1xuICogbG9uZ2VyIHRoYW4gdGhlIHJlbWFpbmluZyBpbnB1dCwgdGhlIHBhcnNlciB3aWxsIGF1dG9tYXRpY2FsbHkgZmFpbC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcyBUaGUgc3RyaW5nIHRvIGNvbXBhcmUgYWdhaW5zdCB0aGUgbmV4dCBjaGFyYWN0ZXJzXG4gKiAgICAgb2YgdGhlIGlucHV0LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIHN1cHBsaWVkIHN0cmluZ1xuICogICAgIGNhc2UtaW5zZW5zaXRpdmVseSBtYXRjaGVzIHRoZSBuZXh0IGNoYXJhY3RlcnMgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgaXN0ciA9IChzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ2lzdHInLCBzLCBhcmdTdHJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnaXN0cicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbc3JlcCwgW3NjdHgsIHNyZXNdXSA9IGR1cChzdHJpbmdQYXJzZXIoXG4gICAgY2hhckxlbmd0aChzKSwgY2hhcnMgPT4gcy50b0xvd2VyQ2FzZSgpID09PSBjaGFycy50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBzcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHNyZXBcbiAgICA6IGZhaWxSZXBseShzY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmlzdHIocykpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIHRoZSByZW1haW5kZXIgb2YgdGhlIGlucHV0IHRleHQgYW5kIHJlc3VsdHMgaW5cbiAqIHRoYXQgdGV4dC4gU3VjY2VlZHMgaWYgYWxyZWFkeSBhdCBFT0YsIHJlc3VsdGluZyBpbiBhbiBlbXB0eSBzdHJpbmcuXG4gKlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGFsd2F5cyBzdWNjZWVkIGFuZCByZXR1cm5zIHRoZVxuICogICAgIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbGwgPSAoKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHdpZHRoID0gdmlldy5ieXRlTGVuZ3RoIC0gaW5kZXhcbiAgcmV0dXJuIG9rUmVwbHkoY3R4LCB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSwgaW5kZXggKyB3aWR0aClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNlcnRhaW4gbnVtYmVyIG9mIGNoYXJhY3RlcnMsIHVzaW5nIHRoZW0gKGFzIGFcbiAqIHN0cmluZykgYXMgaXRzIHJlc3VsdC4gVGhlIHBhcnNlciB3aWxsIGZhaWwgaWYgdGhlcmUgYXJlIG5vdCB0aGF0XG4gKiBtYW55IGNoYXJhY3RlcnMgbGVmdCB0byByZWFkLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZWFkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyB0aGF0IG1hbnkgY2hhcmFjdGVycyBhbmQgam9pbnNcbiAqICAgICB0aGVtIGludG8gYSBzdHJpbmcgZm9yIGl0cyByZXN1bHQuXG4gKi9cbmV4cG9ydCBjb25zdCBhbnlzdHIgPSAobiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdhbnlzdHInLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYW55c3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtzcmVwLCBbc2N0eCwgc3Jlc11dID0gZHVwKHN0cmluZ1BhcnNlcihuLCAoKSA9PiB0cnVlKShjdHgpKVxuICByZXR1cm4gc3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBzcmVwXG4gICAgOiBmYWlsUmVwbHkoc2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5hbnlzdHIobikpKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIGV4cGVjdGVkLCBuZXN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVwbHl9IFJlcGx5ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvcicpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzIGludG8gYSBVQ1MtMiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhbiBlbmRpbmdcbiAqIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBwb3J0aW9uIG9mIGEgVVRGLTggZGF0YSB2aWV3IGFzIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGJ5dGUgdG8gYmUgdGhlIGZpcnN0IGluIHRoZVxuICogICAgIGdlbmVyYXRlZCBzdHJpbmcuXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgYnl0ZXMgdG8gaW5jbHVkZSBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQgZnJvbSB3aGljaFxuICogICAgIHRoZSBnZW5lcmF0ZWQgc3RyaW5nIGlzIHRha2VuLlxuICogQHJldHVybnMge3N0cmluZ30gQSBVQ1MtMiAocmVndWxhciBKYXZhU2NyaXB0IHN0cmluZykgcmVwcmVzZW50YXRpb25cbiAqICAgICBvZiB0aGUgVVRGLTggY2hhcmFjdGVycyBpbiB0aGUgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlld1RvU3RyaW5nKGluZGV4LCBsZW5ndGgsIHZpZXcpIHtcbiAgY29uc3QgYnl0ZXMgPSBVaW50OEFycmF5LmZyb20oXG4gICAgeyBsZW5ndGggfSxcbiAgICAoXywgaSkgPT4gdmlldy5nZXRVaW50OChpbmRleCArIGkpLFxuICApXG4gIHJldHVybiBkZWNvZGVyLmRlY29kZShieXRlcylcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgVVRGLTggZGF0YSB2aWV3IG9mIGEgVUNTLTIgc3RyaW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBlbmNvZGUgaW50byBhIFVURi04IGRhdGEgdmlldy5cbiAqIEByZXR1cm5zIHtEYXRhVmlld30gQSBkYXRhIHZpZXcgb3ZlciB0aGUgVVRGLTggYnl0ZXMgb2YgdGhlIGlucHV0XG4gKiAgICAgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RyaW5nVG9WaWV3KHN0cikge1xuICByZXR1cm4gbmV3IERhdGFWaWV3KGVuY29kZXIuZW5jb2RlKHN0cikuYnVmZmVyKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIGEgc3RyaW5nLiBUaGlzIGNhbiBkaWZmZXJcbiAqIGZyb20gdGhlIG51bWJlciBvZiBVQ1MtMiBjaGFyYWN0ZXJzIGluIHRoZSBzYW1lIHN0cmluZywgbWVhbmluZyB0aGlzXG4gKiB2YWx1ZSBjYW4gZGlmZmVyIGZyb20gdGhlIGBsZW5ndGhgIHByb3BlcnR5IG9mIHRoZSBzYW1lIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgb2Ygd2hpY2ggdG8gZ2V0IHRoZSBjaGFyYWN0ZXIgbGVuZ3RoLlxuICogQHJldHVybiB7bnVtYmVyfSBUaGUgbnVtYmVyIG9mIFVURi04IGNoYXJhY3RlcnMgaW4gdGhhdCBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGFyTGVuZ3RoKHN0cikge1xuICByZXR1cm4gWy4uLnN0cl0ubGVuZ3RoXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB0aGUgd2lkdGggb2YgdGhlIGNoYXJhY3RlciBjdXJyZW50bHkgaW5kZXhlZCBpbiB0aGUgdmlldyxcbiAqIGJhc2VkIG9uIHRoZSB2YWx1ZSBvZiBpdHMgZmlyc3QgYnl0ZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHdpdGhpbiB0aGUgdmlldyB0aGF0IGlzXG4gKiAgICAgdGhlIGZpcnN0IChhbmQgcGVyaGFwcyBvbmx5KSBieXRlIG9mIHRoZSBuZXh0IGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHJldHVybnMgeygxfDJ8M3w0KX0gVGhlIG51bWJlciBvZiBieXRlcyBjb250YWluZWQgaW4gdGhlIGNoYXJhY3RlclxuICogICAgIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIGJ5dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4KVxuICBpZiAoKGJ5dGUgJiAweDgwKSA+PiA3ID09PSAwKSByZXR1cm4gMVxuICBpZiAoKGJ5dGUgJiAweGUwKSA+PiA1ID09PSAwYjExMCkgcmV0dXJuIDJcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTEwKSByZXR1cm4gM1xuICBpZiAoKGJ5dGUgJiAweGYwKSA+PiA0ID09PSAwYjExMTEpIHJldHVybiA0XG4gIC8vIEhvcGVmdWxseSBzaG91bGRuJ3QgaGFwcGVuLCBidXQgaGVyZSBpbiBjYXNlIG9uZSBvZiB0aG9zZSBoaWdoXG4gIC8vIGFzY2lpIGNvZGVzIGlzIHVzZWRcbiAgcmV0dXJuIDFcbn1cblxuLyoqXG4gKiBDb250YWlucyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIocykgaW4gdGhlIGRhdGEgdmlldy5cbiAqXG4gKiBAdHlwZWRlZiBOZXh0Q2hhckluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggb2YgdGhlIHJldHVybmVkIGNoYXJhY3RlcihzKS5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBuZXh0IFRoZSBuZXh0IGNoYXJhY3RlcihzKS5cbiAqL1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGNoYXJhY3RlciBhdCB0aGUgaW5kZXhlZCBwb3NpdGlvbiB3aXRoaW4gdGhlIGRhdGEgdmlldy5cbiAqIFRoaXMgY2hhcmFjdGVyIG1heSBiZSBhIDEtLCAyLSwgMy0sIG9yIDQtYnl0ZSBjaGFyYWN0ZXIgZGVwZW5kaW5nIG9uXG4gKiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHtOZXh0Q2hhckluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcihpbmRleCwgdmlldykge1xuICBjb25zdCB3aWR0aCA9IG5leHRDaGFyV2lkdGgoaW5kZXgsIHZpZXcpXG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbmV4dCBgY291bnRgIGNoYXJhY3RlcnMgc3RhcnRpbmcgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb25cbiAqIHdpdGhpbiB0aGUgdmlldy4gRWFjaCBvZiB0aGVzZSBjaGFyYWN0ZXJzIG1heSBiZSAxLSwgMi0sIDMtLCBvclxuICogNC1ieXRlIGNoYXJhY3RlcnMgZGVwZW5kaW5nIG9uIHRoZSB2YWx1ZXMgb2YgdGhlaXIgZmlyc3QgYnl0ZXMuIElmXG4gKiB0aGVyZSBhcmUgbm90IGVub3VnaCBjaGFyYWN0ZXJzIGxlZnQsIHRob3NlIHJlbWFpbmluZyB3aWxsIGJlXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgdmlldyBvZiB0aGUgZmlyc3QgYnl0ZSBvZlxuICogICAgIHRoZSBmaXJzdCBkZXNpcmVkIGNoYXJhY3Rlci5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0LlxuICogQHBhcmFtIHtudW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0byByZXR1cm4uXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZVxuICogICAgIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5leHRDaGFycyhpbmRleCwgdmlldywgY291bnQpIHtcbiAgY29uc3Qgdmlld0xlbmd0aCA9IHZpZXcuYnl0ZUxlbmd0aFxuICBsZXQgd2lkdGggPSAwXG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKGNvdW50KSkge1xuICAgIGNvbnN0IGkgPSBpbmRleCArIHdpZHRoXG4gICAgaWYgKGkgPj0gdmlld0xlbmd0aCkgYnJlYWtcbiAgICB3aWR0aCArPSBuZXh0Q2hhcldpZHRoKGksIHZpZXcpXG4gIH1cbiAgaWYgKGluZGV4ICsgd2lkdGggPj0gdmlld0xlbmd0aCkge1xuICAgIHdpZHRoID0gdmlld0xlbmd0aCAtIGluZGV4XG4gIH1cbiAgcmV0dXJuIHsgd2lkdGgsIG5leHQ6IHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpIH1cbn1cblxuLyoqXG4gKiBTdXJyb3VuZHMgdGhlIHN1cHBsaWVkIHN0cmluZyBpbiBzaW5nbGUgcXVvdGVzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byBzdXJyb3VuZCBpbiBzaW5nbGUgcXVvdGVzLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgc3RyaW5nLCBsZWQgYW5kIHRyYWlsZWQgYnkgc2luZ2xlIHF1b3Rlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHF1b3RlKHN0cikge1xuICByZXR1cm4gYCcke3N0cn0nYFxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgb2YgdHdvIGNvcGllcyBvZiB0aGUgcHJvdmlkZWQgdmFsdWUuXG4gKlxuICogVGhpcyBzb3J0IG9mIGVtdWxhdGVzICphcy1wYXR0ZXJucyogaW4gYSBsaW1pdGVkIHdheSBpbiBKYXZhU2NyaXB0LlxuICogSW4gbGFuZ3VhZ2VzIGxpa2UgSGFza2VsbCBhbmQgTUwsIHdoZW4gcGF0dGVybiBtYXRjaGluZyBpcyBkb25lLFxuICogdGhlcmUgaXMgYSBjb25zdHJ1Y3QgdG8gYmUgYWJsZSB0byByZXRhaW4gYSBsYXJnZXIgcGFydCBvZiB0aGVcbiAqIGRlc3RydWN0dXJlZCBwYXR0ZXJuIHdoaWxlIGFsc28gYnJlYWtpbmcgaXQgZG93biBmdXJ0aGVyLiBJbiBIYXNrZWxsLFxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIChoZWFkIDogdGFpbCkgPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIHdpbGwgYXNzaWduIGAxYCB0byBgaGVhZGAsIGFuZCBgWzIsIDMsIDQsIDVdYCB0byBgdGFpbGAuIFRoaXMgY2FuIGJlXG4gKiBkb25lIGluIEphdmFTY3JpcHQgYXMgd2VsbCwgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtoZWFkLCAuLi50YWlsXSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogSG93ZXZlciwgSGFza2VsbCBjYW4gZ28gZmFydGhlcjogaXQgY2FuIGFsc28gYXNzaWduIHRoZSBlbnRpcmUgbGlzdFxuICogYXMgYSB3aG9sZSB0byBhbm90aGVyIHZhcmlhYmxlIHdoaWxlIHN0aWxsIGFzc2lnbmluZyBpdHMgZWxlbWVudHMgYXNcbiAqIGFib3ZlLiBJdCdzIGRvbmUgbGlrZSB0aGlzOlxuICpcbiAqIGBgYGhhc2tlbGxcbiAqIGxpc3QgQCAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiBUaGlzIHdpbGwsIGluIGFkZGl0aW9uIHRvIHRoZSBhc3NpZ25tZW50cyBhYm92ZSwgYXNzaWduIGBbMSwgMiwgMywgNCxcbiAqIDVdYCB0byBgbGlzdGAuIFRoZSBgQGAgc2lnbiBpcyByZWFkICphcyosIGFuZCB0aGlzIGNvbnN0cnVjdCBpc1xuICogY2FsbGVkIGFuICphcy1wYXR0ZXJuKiAocGVyaGFwcyBiZWNhdXNlIHRoZSBNTCB3YXkgb2YgZG9pbmcgaXQgdXNlc1xuICogdGhlIGBhc2Aga2V5d29yZCBpbnN0ZWFkIG9mIHRoZSBgQGAgc3ltYm9sKS5cbiAqXG4gKiBUaGVyZSBpcyBubyBmYWNpbGl0eSB0byBkbyB0aGlzIGluIEphdmFTY3JpcHQuIEJ1dCB0aGVyZSBhcmUgbWFueVxuICogcGxhY2VzIGluIHRoaXMgbGlicmFyeSB3aGVyZSBhIGBSZXBseWAgaXMgZGVzY3R1cmN0dXJlZCBpbnRvIGl0c1xuICogYENvbnRleHRgIGFuZCBgUmVzdWx0YCBlbGVtZW50cywgeWV0IHRoZXJlIGlzIGEgbmVlZCB0byBjb25kaXRpb25hbGx5XG4gKiB1c2UgdGhlIGVudGlyZSBgUmVwbHlgIGFzIHdlbGwgKG5vcm1hbGx5IHRvIHJldHVybiBpdCBpZiBzb21lXG4gKiBjb25kaXRpb24gaXMgbWV0KS4gUmF0aGVyIHRoYW4gY3JlYXRlIGEgbmV3IGBSZXBseWAgZnJvbSB0aGVzZSBwYXJ0cyxcbiAqIGB0d2luYCBjYW4gYmUgdXNlZCB0byBkdXBsaWNhdGUgdGhlIHJlZmVyZW5jZXMgdG8gdGhlIGBSZXBseWAuIFRoZW5cbiAqIG9ubHkgKm9uZSogb2YgdGhlIGR1cGxpY2F0ZSByZWZlcmVuY2VzIGNhbiBiZSBkZXN0cnVjdHVyZWQsIHdoaWxlIHRoZVxuICogb3RoZXIgb25lIGlzIHJldGFpbmVkIGFzIGEgd2hvbGUuXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICogY29uc3QgW3JlcGx5LCBbY29udGV4dCwgcmVzdWx0XV0gPSB0d2luKHBhcnNlcihjdHgpKVxuICogYGBgXG4gKlxuICogQXMtcGF0dGVybnMgY2FuIGJlIHVzZWQgb24gcGllY2VzIG9mIGEgcGF0dGVybiBpbnN0ZWFkIG9mIHRoZSBlbnRpcmVcbiAqIHBhdHRlcm4sIGFuZCBgdHdpbmAgY2Fubm90IGRvIHRoYXQuIEJ1dCBpdCBzZXJ2ZXMgZm9yIHdoYXQgaXMgbmVlZGVkXG4gKiBpbiBLZXNzZWwuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gdmFsdWUgQSByZXBseSB0aGF0IG5lZWRzIHRvIGJlIGRlc3RydWN0dXJlZCB3aGlsZVxuICogICAgIG1haW50YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSB3aG9sZS5cbiAqIEByZXR1cm5zIHtbUmVwbHksIFJlcGx5XX0gQW4gYXJyYXkgY29udGFpbmluZyB0d28gY29waWVzIG9mIHRoZVxuICogICAgIHJlcGx5LiBPbmUgY2FuIGJlIGRlc3RydWN0dXJlZCB3aGlsZSB0aGUgb3RoZXIgaXMgcmV0YWluZWQgd2hvbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXAodmFsdWUpIHtcbiAgcmV0dXJuIFt2YWx1ZSwgdmFsdWVdXG59XG5cbi8qKlxuICogQ29tbWEtc2VwYXJhdGVzIChhcyBuZWVkZWQpIHRoZSBzdHJpbmdzIGluIHRoZSBwcm92aWRlZCBhcnJheS4gSWZcbiAqIHRoZSBhcnJheSBpcyBlbXB0eSwgdGhlIHJlc3VsdCB3aWxsIGJlIGFuIGVtcHR5IHN0cmluZzsgaWYgdGhlIGFycmF5XG4gKiBoYXMgb25seSBvbmUgZWxlbWVudCwgdGhhdCBlbGVtZW50IHdpbGwgYmUgcmV0dXJuZWQuIElmIHRoZSBhcnJheSBoYXNcbiAqIHR3byBlbGVtZW50cywgdGhleSB3aWxsIGJlIGpvaW5lZCB3aXRoICcgb3IgJyBiZXR3ZWVuIHRoZW0uIElmIHRoZVxuICogYXJyYXkgaXMgbG9uZ2VyIHRoYW4gdGhhdCwgYWxsIGVsZW1lbnRzIHdpbGwgYmUgY29tbWEtc2VwYXJhdGVkIHdpdGhcbiAqIGFuIGFkZGl0aW9uYWwgJ29yJyBiZXR3ZWVuIHRoZSBsYXN0IHR3byBlbGVtZW50cyAoT3hmb3JkIGNvbW1hXG4gKiBzdHlsZSkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmdbXX0gbWVzc2FnZXMgVGhlIHN0cmluZ3MgdGhhdCBuZWVkIHRvIGJlIGpvaW5lZCBpbnRvXG4gKiAgICAgYSBjb21tYS1zZXBhcmF0ZWQgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1lc3NhZ2VzIGpvaW5lZCBpbnRvIGEgc2luZ2xlIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbW1hU2VwYXJhdGUobWVzc2FnZXMpIHtcbiAgc3dpdGNoIChtZXNzYWdlcy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiAnJ1xuICAgIGNhc2UgMTogcmV0dXJuIG1lc3NhZ2VzWzBdXG4gICAgY2FzZSAyOiByZXR1cm4gbWVzc2FnZXMuam9pbignIG9yICcpXG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgbXNncyA9IG1lc3NhZ2VzLnNsaWNlKClcbiAgICAgIGNvbnN0IGxhc3QgPSBtc2dzLnBvcCgpXG4gICAgICByZXR1cm4gYCR7bXNncy5qb2luKCcsICcpfSwgb3IgJHtsYXN0fWBcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBBdWdtZW50cyBhIGZhY3RvcnkgZnVuY3Rpb24gdG8gYmUgYWJsZSB0byBkZXRlcm1pbmUgd2hldGhlciBpdFxuICogY3JlYXRlZCBhbiBhcmJpdHJhcnkgb2JqZWN0LiBUaGUgZmFjdG9yeSBmdW5jdGlvbiBpcyBhc3NpZ25lZCBhblxuICogYWRkaXRpb25hbCBwcm9wZXJ0eSAoYnkgZGVmYXVsdCBuYW1lZCBgY3JlYXRlZGAsIGNhbiBiZSBjaGFuZ2VkIGJ5XG4gKiBwYXNzaW5nIGluIHRoZSBgcHJvcGAgYXJndW1lbnQpIHdoaWNoIGlzIGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhblxuICogb2JqZWN0IGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmFjdG9yeSBjcmVhdGVkIGl0IG9yIGBmYWxzZWAgaWYgaXRcbiAqIGRpZCBub3QuXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gZm4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGF1Z21lbnRlZCB3aXRoXG4gKiAgICAgdGhlIG5ldyBwcm9wZXJ0eS5cbiAqIEBwYXJhbSB7c3RyaW5nfHN5bWJvbH0gW3Byb3A9J2NyZWF0ZWQnXSBUaGUgcHJvcGVydHkgdGhhdCB3aWxsIGJlXG4gKiAgICAgYWRkZWQgdG8gdGhlIGZhY3RvcnkgZnVuY3Rpb24uXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb259IFRoZSBhdWdtZW50ZWQgZmFjdG9yeSBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYWNrKGZuLCBwcm9wID0gJ2NyZWF0ZWQnKSB7XG4gIGNvbnN0IHRyYWNrZWQgPSBuZXcgV2Vha1NldCgpXG5cbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShcbiAgICAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgY3JlYXRlZCA9IGZuKC4uLmFyZ3MpXG4gICAgICB0cmFja2VkLmFkZChjcmVhdGVkKVxuICAgICAgcmV0dXJuIGNyZWF0ZWRcbiAgICB9LFxuICAgIHByb3AsXG4gICAgeyB2YWx1ZTogdHJhY2tlZC5oYXMuYmluZCh0cmFja2VkKSB9LFxuICApXG59XG5cbmNvbnN0IG51bXMgPSBbXG4gICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsXG4gICduaW5lJywgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLFxuICAnc2l4dGVlbicsICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuXVxuY29uc3Qgb25lcyA9IFtcbiAgJ3plcm90aCcsICdmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJywgJ3NldmVudGgnLFxuICAnZWlnaHRoJywgJ25pbnRoJywgJ3RlbnRoJywgJ2VsZXZlbnRoJywgJ3R3ZWxmdGgnLCAndGhpcnRlZW50aCcsXG4gICdmb3VydGVlbnRoJywgJ2ZpZnRlZW50aCcsICdzaXh0ZWVudGgnLCAnc2V2ZW50ZWVudGgnLCAnZWlnaHRlZW50aCcsXG4gICduaW5ldGVlbnRoJyxcbl1cbmNvbnN0IHRlbnMgPSBbXG4gICd0d2VudCcsICd0aGlydCcsICdmb3J0JywgJ2ZpZnQnLCAnc2l4dCcsICdzZXZlbnQnLCAnZWlnaHQnLCAnbmluZXQnLFxuXVxuY29uc3QgZ3JvdXBzID0gW1xuICAnaHVuZHJlZCcsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuXVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCdmaXJzdCdgLCBgMTcyOWAgYmVjb21lcyBgJ29uZSB0aG91c2FuZCBzZXZlbiBodW5kcmVkXG4gKiB0d2VudHktbmludGgnYCwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3JkaW5hbChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke051bWJlci5NQVhfU0FGRV9JTlRFR0VSfWApXG4gIH1cbiAgY29uc3QgbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKVxuXG4gIGlmIChuIDwgMjApIHJldHVybiBvbmVzW25dXG4gIGlmIChtYWcgPT09IDEpIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihuIC8gMTApIC0gMlxuICAgIHJldHVybiBuICUgMTAgPT09IDAgPyBgJHt0ZW5zW2ldfWlldGhgIDogYCR7dGVuc1tpXX15LSR7b25lc1tuICUgMTBdfWBcbiAgfVxuICBpZiAobWFnID09PSAyKSB7XG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIG1hZylcbiAgICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiBtYWdcbiAgICByZXR1cm4gYCR7bnVtc1tmXX0gJHtncm91cHNbMF19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbiAgfVxuXG4gIGNvbnN0IGcgPSBtYWcgJSAzICsgMVxuICBjb25zdCBpID0gTWF0aC5mbG9vcihtYWcgLyAzKVxuICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogKG1hZyAtIGcgKyAxKSlcbiAgY29uc3QgbSA9IChmdW5jdGlvbiBtdWx0KG51bSkge1xuICAgIGlmIChudW0gPCAyMCkgcmV0dXJuIG51bXNbbnVtXVxuXG4gICAgY29uc3QgcmVtID0gbnVtICUgMTBcbiAgICBpZiAobnVtIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYCR7dGVuc1tNYXRoLmZsb29yKG51bSAvIDEwKSAtIDJdfXkke1xuICAgICAgICByZW0gPT09IDAgPyAnJyA6IGAtJHtudW1zW3JlbV19YFxuICAgICAgfWBcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gbnVtIC0gTWF0aC5mbG9vcihudW0gLyAxMDApICogMTAwXG4gICAgcmV0dXJuIGAke251bXNbTWF0aC5mbG9vcihudW0gLyAxMDApXX0gJHtncm91cHNbMF19JHtcbiAgICAgIHggPT09IDAgPyAndGgnIDogYCAke211bHQoeCl9YFxuICAgIH1gXG4gIH0oZikpXG4gIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIChtYWcgLSBnICsgMSlcbiAgcmV0dXJuIGAke219ICR7Z3JvdXBzW2ldfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEVycm9yIHV0aWxpdGllc1xuXG4vKipcbiAqIFJldHVybnMgdGhlIGZ1bmN0aW9uIHVzZWQgdG8gY3JlYXRlIGEgZmFpbHVyZSByZXBseS4gVGhlIGNvbmRpdGlvblxuICogZGV0ZXJtaW5lcyB3aGV0aGVyIHRoZSByZXBseSB3aWxsIGJlIGZhdGFsIChgdHJ1ZWApIG9yIG5vdCAoYGZhbHNlYCkuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kaXRpb24gU2hvdWxkIGJlIGB0cnVlYCBmb3IgYSBmYXRhbCBmYWlsdXJlIG9yXG4gKiAgICAgYGZhbHNlYCBmb3IgYSBub24tZmF0YWwgZmFpbHVyZS5cbiAqIEByZXR1cm5zIFRoZSByZXBseSBmdW5jdGlvbiBmb3IgZmF0YWwgb3Igbm9uLWZhdGFsIGZhaWx1cmVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVwbHlGbihjb25kaXRpb24pIHtcbiAgcmV0dXJuIGNvbmRpdGlvbiA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3Igbm9uLWJhY2t0cmFja2VkIGVycm9ycyBmcm9tIHVuZGVybHlpbmdcbiAqIHBhcnNlcnMuIFRoZSAnZicgaXMgZm9yICdmbGF0JzsgdGhpcyBmdW5jdGlvbiBwcm9kdWNlcyBhIG5vbi1uZXN0ZWRcbiAqIGVycm9yIHdob3NlIG1lc3NhZ2UgaXMgYmFzZWQgdXBvbiB3aGV0aGVyIGBtYCBleGlzdHMgb3Igbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdCB0aGF0IGRvZXMgbm90IHRha2UgYmFja3RyYWNraW5nXG4gKiAgICAgaW50byBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmVycm9yKG0sIGVycm9ycykge1xuICByZXR1cm4gbSA9PSBudWxsID8gZXJyb3JzIDogZXhwZWN0ZWQobSlcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCBmb3IgYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy4gVGhlICduJyBpcyBmb3IgbmVzdGVkOyB0aGlzIGZ1bmN0aW9uIHByb2R1Y2VzIGEgbmVzdGVkXG4gKiBlcnJvciB0aGF0IGluc3RlYWQgYmUgYSBjb21wb3VuZCBlcnJvciBpZiBgbWAgZXhpc3RzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QgdGhhdCB0YWtlcyBiYWNrdHJhY2tpbmcgaW50b1xuICogICAgIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIG0gPT0gbnVsbCA/IG5lc3RlZChjdHgsIGVycm9ycykgOiBjb21wb3VuZChtLCBjdHgsIGVycm9ycylcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgYW4gZXJyb3IgbGlzdCB0aGF0IHdpbGwgb25seSByZWNvcmQgYmFja3RyYWNraW5nXG4gKiBpbmZvcm1hdGlvbiBpZiB0aGUgcHJvdmlkZWQgY29uZGl0aW9uIGlzIHRydWUuXG4gKlxuICogQHBhcmFtIHtib29sZWFufSBjb25kIElmIGB0cnVlYCwgdGhlIG5ldyBlcnJvciBsaXN0IHdpbGwgaW5jbHVkZVxuICogICAgIGJhY2t0cmFja2luZyBpbmZvcm1hdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBuZXcgZXJyb3IuIFRoaXMgd2lsbFxuICogICAgIG9ubHkgYmUgdXNlZCBpZiBpdCdzIGFjdHVhbGx5IHByZXNlbnQuXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBmcm9tIHRoZSBwb2ludCB3aGVyZSB0aGUgdW5kZXJseWluZ1xuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgZXJyb3JzIGdlbmVyYXRlZCBieSB0aGUgdW5kZXJseWluZ1xuICogICAgIHBhcnNlci5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGVycm9yIGxpc3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBiZXJyb3IoY29uZCwgbSwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGNvbmQgPyBuZXJyb3IobSwgY3R4LCBlcnJvcnMpIDogZmVycm9yKG0sIGVycm9ycylcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=