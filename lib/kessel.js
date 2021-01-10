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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('alt', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('opt', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('opt', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('def', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('def', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('peek', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('peek', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('empty', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('empty', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('not', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('not', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('attempt', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('attempt', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bseq', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, args.length > 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bchain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('bchain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bchain', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const index = ctx.index;
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, pres.errors));
  }

  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bchain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a parser'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bapply', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bapply', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bapply', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('bapply', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a function'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bleft', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bleft', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bleft', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bright', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bright', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bright', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bcount', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('bcount', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bcount', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('buntil', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('buntil', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('buntil', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertGenFunction"])('bblock', g, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argGenFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bblock', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bblock', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bpipe', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('bpipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(ps.length + 1, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bbetween', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bbetween', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('bbetween', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(3, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('bbetween', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('join', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('join', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('join', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('compact', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('compact', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('compact', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('value', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('value', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('nth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('nth', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('nth', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('nth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('first argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('first', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('first', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('first', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('second', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('second', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('second', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('third', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('third', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('third', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fourth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fourth', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fourth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('fifth', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fifth', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m) : pres.errors);
  }

  const v = pres.value;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertArray"])('fifth', v, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('argument to return an array'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('map', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('map', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('map', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('apply', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('apply', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('apply', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a function'));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('chain', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('chain', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
  const index = ctx.index;
  const merror = Object(kessel_error__WEBPACK_IMPORTED_MODULE_2__["expected"])(m);
  const [pctx, pres] = p(ctx);

  if (pres.status !== Ok) {
    const fn = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["replyFn"])(pres.status === Fatal);
    return fn(pctx, hasM ? merror : pres.errors);
  }

  const q = fn(pres.value);
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('chain', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["formatter"])('second argument to return a parser'));
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('seq', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('left', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('left', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('right', q, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('right', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertGenFunction"])('block', g, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argGenFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('block', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('block', value, v => `expected ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)} yield to be to a parser; found ${Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["stringify"])(v)}`);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('many', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('many1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('many1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('skip', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('skip', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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

const sepby = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sepby', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('sepby1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('sepby1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('endby', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
    if (context.index === index) throw new TypeError(loopMessage('endby'));
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

const endby1 = (p, s, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('endby1', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('endby1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
    if (context.index === index) throw new TypeError(loopMessage('endby1'));
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

const count = (p, n, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('count', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('count', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('count', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('between', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(3, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('between', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('until', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('until', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('until', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
     true && ps.forEach((p, i) => Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('pipe', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(i + 1, true)));
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('pipe', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(ps.length + 1, true));
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


const lassoc = (p, o, x, m) => Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["parser"])(ctx => {
  const hasM = m != null;
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lassoc', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lassoc', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('lassoc', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('lassoc', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lassoc1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('lassoc1', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('lassoc1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('lassoc1', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rassoc', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rassoc', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('rassoc', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(4, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('rassoc', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rassoc1', p, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertParser"])('rassoc1', o, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argParFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('rassoc1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));
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
     true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('rassoc1', ores.value, opFormatter(Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["wordinal"])(i + 1)));
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
/*! exports provided: alpha, any, char, digit, eof, hex, ichar, letter, lower, noneof, octal, oneof, range, satisfy, upper, always, fail, fatal, newline, regex, space, spaces, spaces1, ualpha, uletter, ulower, unewline, uspace, uspaces, uspaces1, uupper, all, anystr, istr, str, alt, def, empty, not, opt, peek, attempt, bapply, bbetween, bblock, bchain, bcount, bleft, bpipe, bright, bseq, buntil, apply, chain, compact, fifth, first, fourth, join, map, nth, second, third, value, between, block, count, endby, endby1, lassoc, lassoc1, left, many, many1, pipe, rassoc, rassoc1, right, sepby, sepby1, seq, skip, until, Status, failReply, failure, fatalReply, okReply, parse, parser, run, status, succeeded, success, ErrorType, compound, expected, formatErrors, generic, getPosition, merge, nested, other, unexpected */
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('char', c, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('char', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('ichar', c, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ichar', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertFunction"])('satisfy', fn, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argFnFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('satisfy', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(1, true));
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertChar"])('range', e, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argCharFormatter"])(2, true));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('range', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(3, true));

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('any', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('eof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('oneof', cs, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrArrFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('oneof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrArray"])('noneof', cs, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrArrFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('noneof', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('digit', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('hex', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('octal', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('letter', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('alpha', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('upper', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('lower', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());

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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fail', m);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('fatal', m);
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertStringOrRegExp"])('regex', r, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrRegFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('regex', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true)); // First, convert to a regular expression if it's a string

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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uletter', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ualpha', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uupper', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('ulower', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('space', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uspace', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('spaces1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('uspaces1', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('newline', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('unewline', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])());
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('str', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('str', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('istr', s, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('istr', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
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
   true && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertNumber"])('anystr', n, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argNumFormatter"])(1, hasM));
   true && hasM && Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["assertString"])('anystr', m, Object(kessel_assert__WEBPACK_IMPORTED_MODULE_0__["argStrFormatter"])(2, true));
  const [srep, [sctx, sres]] = Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["dup"])(stringParser(n, () => true)(ctx));
  return sres.status === Ok ? srep : Object(kessel_core__WEBPACK_IMPORTED_MODULE_1__["failReply"])(sctx, Object(kessel_util__WEBPACK_IMPORTED_MODULE_3__["ferror"])(m, kessel_messages__WEBPACK_IMPORTED_MODULE_2__["expecteds"].anystr(n)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZXNzZWwvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL2tlc3NlbC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvYXNzZXJ0LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9hbHRlcm5hdGl2ZS5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvYmFja3RyYWNraW5nLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9jb21iaW5hdG9ycy9jaGFpbmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvY29tYmluYXRvcnMvc2VxdWVuY2UuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2NvcmUuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL2Vycm9yLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvbWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8va2Vzc2VsLy4vc3JjL3BhcnNlcnMvY2hhci5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvcGFyc2Vycy9taXNjLmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3JlZ2V4LmpzIiwid2VicGFjazovL2tlc3NlbC8uL3NyYy9wYXJzZXJzL3N0cmluZy5qcyIsIndlYnBhY2s6Ly9rZXNzZWwvLi9zcmMvdXRpbC5qcyJdLCJuYW1lcyI6WyJmb3JtYXR0ZXIiLCJ0eXBlIiwidmFsdWUiLCJzdHJpbmdpZnkiLCJjaGFyRm9ybWF0dGVyIiwiZm5Gb3JtYXR0ZXIiLCJnZW5Gb3JtYXR0ZXIiLCJzdHJGb3JtYXR0ZXIiLCJhcnJGb3JtYXR0ZXIiLCJzdHJBcnJGb3JtYXR0ZXIiLCJzdHJSZWdGb3JtdHRlciIsIm51bUZvcm1hdHRlciIsInBhckZvcm1hdHRlciIsImFyZ0Zvcm1hdHRlciIsIm9yZGVyIiwibXVsdGlwbGUiLCJ3b3JkaW5hbCIsImFyZ0NoYXJGb3JtYXR0ZXIiLCJhcmdGbkZvcm1hdHRlciIsImFyZ0dlbkZvcm1hdHRlciIsImFyZ051bUZvcm1hdHRlciIsImFyZ1BhckZvcm1hdHRlciIsImFyZ1N0ckZvcm1hdHRlciIsImFyZ1N0ckFyckZvcm1hdHRlciIsImFyZ1N0clJlZ0Zvcm1hdHRlciIsImZhaWxBc3NlcnQiLCJuYW1lIiwiRXJyb3IiLCJhc3NlcnRDaGFyIiwiY2hhckxlbmd0aCIsImFzc2VydEZ1bmN0aW9uIiwicGFyc2VyIiwiY3JlYXRlZCIsImFzc2VydEdlbkZ1bmN0aW9uIiwiT2JqZWN0IiwicHJvdG90eXBlIiwidG9TdHJpbmciLCJjYWxsIiwiYXNzZXJ0U3RyaW5nIiwiYXNzZXJ0QXJyYXkiLCJBcnJheSIsImlzQXJyYXkiLCJhc3NlcnRTdHJpbmdPckFycmF5IiwiZXZlcnkiLCJjIiwiYXNzZXJ0U3RyaW5nT3JSZWdFeHAiLCJhc3NlcnROdW1iZXIiLCJhc3NlcnRQYXJzZXIiLCJPayIsIkZhaWwiLCJGYXRhbCIsIlN0YXR1cyIsImFsdCIsImFyZ3MiLCJwcyIsInNsaWNlIiwibSIsImxlbmd0aCIsInBvcCIsImN0eCIsImhhc00iLCJBU1NFUlQiLCJmb3JFYWNoIiwicCIsImkiLCJlcnJvcnMiLCJleHBlY3RlZCIsInByZXAiLCJwY3R4IiwicHJlcyIsImR1cCIsInN0YXR1cyIsIm1lcmdlIiwiZmF0YWxSZXBseSIsImZhaWxSZXBseSIsIm9wdCIsInJlcGx5Iiwib2tSZXBseSIsImRlZiIsIngiLCJmZXJyb3IiLCJwZWVrIiwiaW5kZXgiLCJuZXJyb3IiLCJlbXB0eSIsImZuIiwicmVwbHlGbiIsIm5vdCIsInVuZGVmaW5lZCIsImF0dGVtcHQiLCJFcnJvclR5cGUiLCJOZXN0ZWQiLCJjb21wb3VuZCIsImJzZXEiLCJ2YWx1ZXMiLCJjb250ZXh0IiwiZXJyb3IiLCJiZXJyb3IiLCJwdXNoIiwiYmNoYWluIiwicSIsInFyZXAiLCJxY3R4IiwicXJlcyIsImJhcHBseSIsImJsZWZ0IiwiYnJpZ2h0IiwiYmNvdW50IiwibiIsIl8iLCJyYW5nZSIsImJ1bnRpbCIsImUiLCJlY3R4IiwiZXJlcyIsImJibG9jayIsImciLCJnZW4iLCJuZXh0VmFsdWUiLCJkb25lIiwibmV4dCIsInYiLCJicGlwZSIsImJiZXR3ZWVuIiwicyIsInNjdHgiLCJzcmVzIiwiam9pbiIsImNvbXBhY3QiLCJmaWx0ZXIiLCJudGgiLCJmaXJzdCIsInNlY29uZCIsInRoaXJkIiwiZm91cnRoIiwiZmlmdGgiLCJtYXAiLCJhcHBseSIsIm1lcnJvciIsImNoYWluIiwibG9vcE1lc3NhZ2UiLCJzZXEiLCJsZWZ0IiwicmlnaHQiLCJibG9jayIsIm1hbnkiLCJ2aWV3IiwiYnl0ZUxlbmd0aCIsIm1hbnkxIiwic2tpcCIsInNlcGJ5IiwiVHlwZUVycm9yIiwic2VwYnkxIiwiZW5kYnkiLCJlbmRieTEiLCJjb3VudCIsImJldHdlZW4iLCJ1bnRpbCIsInBpcGUiLCJvcEZvcm1hdHRlciIsIm9yZCIsImxhc3NvYyIsIm8iLCJvcHMiLCJvY3R4Iiwib3JlcyIsImxhc3NvYzEiLCJyYXNzb2MiLCJyYXNzb2MxIiwiaXNUeXBlZEFycmF5IiwiVWludDhBcnJheSIsIlVpbnQ4Q2xhbXBlZEFycmF5IiwiVWludDE2QXJyYXkiLCJVaW50MzJBcnJheSIsIkludDhBcnJheSIsIkludDE2QXJyYXkiLCJJbnQzMkFycmF5IiwiRmxvYXQzMkFycmF5IiwiRmxvYXQ2NEFycmF5IiwiaW5wdXQiLCJtZXNzYWdlIiwic3RyaW5nVG9WaWV3IiwiRGF0YVZpZXciLCJidWZmZXIiLCJBcnJheUJ1ZmZlciIsInRyYWNrIiwicGFyc2UiLCJzdWNjZWVkZWQiLCJzdWNjZXNzIiwiZmFpbHVyZSIsImZvcm1hdEVycm9ycyIsInJ1biIsInJlc3VsdCIsInRhYiIsInplcm9XaWR0aCIsIkV4cGVjdGVkIiwiVW5leHBlY3RlZCIsIkdlbmVyaWMiLCJDb21wb3VuZCIsIk90aGVyIiwibGFiZWwiLCJ1bmV4cGVjdGVkIiwiZ2VuZXJpYyIsIm90aGVyIiwibmVzdGVkIiwiZXJyb3JzMSIsImVycm9yczIiLCJpc05ld2xpbmUiLCJieXRlIiwiZ2V0VWludDgiLCJuZXdsaW5lIiwibmV4dEJ5dGUiLCJ0aGlyZEJ5dGUiLCJuZXh0Q2hhcldpZHRoIiwiZ2V0TGluZUluZGV4ZXMiLCJzdGFydCIsImxpbmVubyIsImVuZCIsImdldENoYXJJbmRleCIsImNoYXJJbmRleCIsImJ5dGVJbmRleCIsInRhYmlmeSIsImxpbmUiLCJ0YWJTaXplIiwidGFiSW5kZXhlcyIsInRhYk1hdGNoIiwiZXhlYyIsIm9mZnNldCIsInByZUluZGV4T2Zmc2V0IiwidGFiSW5kZXgiLCJhY3R1YWxJbmRleCIsInNwYWNlQ291bnQiLCJzdWJzdHJpbmciLCJyZXBlYXQiLCJjb2xJbmRleCIsImdldENvbE51bWJlciIsIm1hdGNoZXMiLCJtYXRjaCIsImNvbG5vIiwic2hvdyIsIm1heFdpZHRoIiwiaW5kZW50Iiwic3AiLCJuZXdDb2xubyIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJmb3JtYXROZXN0ZWQiLCJuZXN0ZWRzIiwibmVzdGVkTXNncyIsImZvcm1hdCIsImVuc3VyZU5ld2xpbmVzIiwidGV4dCIsInJhd0xpbmUiLCJ2aWV3VG9TdHJpbmciLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJmaW5kIiwiY29tbWFTZXBhcmF0ZSIsInVuZXhwTXNnIiwiZXhwTXNnIiwiZ2VuZXJpY01zZyIsIm5lc3RlZE1zZyIsImNvbXBvdW5kTXNnIiwidW5rbm93bk1zZyIsImVvZk1zZyIsImdldFBvc2l0aW9uIiwiY29sdW1uIiwic3RyaW5ncyIsImFscGhhIiwiYW55IiwiYW55c3RyIiwiY2hhciIsInF1b3RlIiwiZGlnaXQiLCJlb2YiLCJoZXgiLCJpY2hhciIsImlzdHIiLCJsZXR0ZXIiLCJsb3dlciIsIm5vbmVvZiIsImFycmF5Iiwib2N0YWwiLCJvbmVvZiIsInJlZ2V4IiwicmUiLCJzcGFjZSIsInNwYWNlcyIsInNwYWNlczEiLCJzdHIiLCJ1YWxwaGEiLCJ1bGV0dGVyIiwidWxvd2VyIiwidW5ld2xpbmUiLCJ1cHBlciIsInVzcGFjZSIsInVzcGFjZXMiLCJ1c3BhY2VzMSIsInV1cHBlciIsImV4cGVjdGVkcyIsImNoYXJQYXJzZXIiLCJ3aWR0aCIsIm5leHRDaGFyIiwiY3JlcCIsImNjdHgiLCJjcmVzIiwiY2giLCJ0b0xvd2VyQ2FzZSIsInNhdGlzZnkiLCJjcyIsImFyciIsImluY2x1ZGVzIiwiZmFpbCIsImZhdGFsIiwiYWx3YXlzIiwicmVMZXR0ZXIiLCJyZUFscGhhIiwicmVVcHBlciIsInJlTG93ZXIiLCJyZVNwYWNlIiwicmVVc3BhY2UiLCJyZVNwYWNlcyIsInJlVXNwYWNlcyIsInJlU3BhY2VzMSIsInJlVXNwYWNlczEiLCJyZU5ld2xpbmUiLCJyZVVuZXdsaW5lIiwicmVnZXhQYXJzZXIiLCJyZXN0IiwiciIsIlJlZ0V4cCIsInNvdXJjZSIsImZsYWdzIiwicmVhbmNob3IiLCJuZXdTb3VyY2UiLCJycmVwIiwicmN0eCIsInJyZXMiLCJzdHJpbmdQYXJzZXIiLCJuZXh0Q2hhcnMiLCJzcmVwIiwiY2hhcnMiLCJhbGwiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJkZWNvZGVyIiwiVGV4dERlY29kZXIiLCJzdGVwIiwiaW5jbHVzaXZlIiwiYWJzIiwiZm9yd2FyZCIsImN1cnJlbnQiLCJmaW5pc2hlZCIsImVudW1lcmF0ZSIsIml0ZXJhYmxlIiwiaXRlcmF0b3IiLCJTeW1ib2wiLCJieXRlcyIsImZyb20iLCJkZWNvZGUiLCJlbmNvZGUiLCJ2aWV3TGVuZ3RoIiwibWVzc2FnZXMiLCJtc2dzIiwibGFzdCIsInByb3AiLCJ0cmFja2VkIiwiV2Vha1NldCIsImRlZmluZVByb3BlcnR5IiwiYWRkIiwiaGFzIiwiYmluZCIsIm9yZGluYWwiLCJzdWZmaXhlcyIsIm51bXMiLCJvbmVzIiwidGVucyIsImdyb3VwcyIsIk51bWJlciIsIk1BWF9TQUZFX0lOVEVHRVIiLCJtYWciLCJsb2cxMCIsImYiLCJtdWx0IiwibnVtIiwicmVtIiwiZGVzY3JpcHRpb24iLCJKU09OIiwi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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNPLFNBQVNnQyxNQUFULENBQWdCc1MsSUFBaEIsRUFBc0IvVSxDQUF0QixFQUF5QkcsR0FBekIsRUFBOEJNLE1BQTlCLEVBQXNDO0FBQzNDLFNBQU9zVSxJQUFJLEdBQUdwVCxNQUFNLENBQUMzQixDQUFELEVBQUlHLEdBQUosRUFBU00sTUFBVCxDQUFULEdBQTRCZSxNQUFNLENBQUN4QixDQUFELEVBQUlTLE1BQUosQ0FBN0M7QUFDRCxDIiwiZmlsZSI6Imtlc3NlbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImtlc3NlbFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJrZXNzZWxcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IHBhcnNlciB9IGZyb20gJy4vY29yZSdcbmltcG9ydCB7IGNoYXJMZW5ndGgsIHN0cmluZ2lmeSwgd29yZGluYWwgfSBmcm9tICcuL3V0aWwnXG5cbi8qKlxuICogR2VuZXJhdGVzIGEgZm9ybWF0dGVyIGZ1bmN0aW9uIG91dCBvZiBhIHR5cGUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgVGhlIHR5cGUgdGhhdCB0aGUgdmFsdWUgc2hvdWxkIGJlLlxuICogQHJldHVybnMge2Z1bmN0aW9uKCopOnN0cmluZ30gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB2YWx1ZSBvZiBhbnlcbiAqICAgICB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZvcm1hdHRlciA9IHR5cGUgPT5cbiAgdmFsdWUgPT4gYGV4cGVjdGVkICR7dHlwZX07IGZvdW5kICR7c3RyaW5naWZ5KHZhbHVlKX1gXG5cbmNvbnN0IGNoYXJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnKVxuY29uc3QgZm5Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nKVxuY29uc3QgZ2VuRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicpXG5jb25zdCBzdHJGb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2Egc3RyaW5nJylcbmNvbnN0IGFyckZvcm1hdHRlciA9IGZvcm1hdHRlcignYW4gYXJyYXknKVxuY29uc3Qgc3RyQXJyRm9ybWF0dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhbiBhcnJheSBvZiBjaGFyYWN0ZXJzJylcbmNvbnN0IHN0clJlZ0Zvcm10dGVyID0gZm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicpXG5jb25zdCBudW1Gb3JtYXR0ZXIgPSBmb3JtYXR0ZXIoJ2EgbnVtYmVyJylcbmNvbnN0IHBhckZvcm1hdHRlciA9IGZvcm1hdHRlcignYSBwYXJzZXInKVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhIGZvcm1hdHRlciBmdW5jdGlvbiBvdXQgb2YgYSB0eXBlIGFuZCBhIHBvc2l0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFRoZSB0eXBlIHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3JkZXJdIFRoZSBwb3NpdGlvbiBvZiB0aGUgdmFsdWUgd2l0aGluIGFuIGFyZ3VtZW50XG4gKiAgICAgbGlzdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW211bHRpcGxlXSBJbmRpY2F0ZXMgd2hldGhlciB0aGVyZSBpcyBtb3JlIHRoYW4gb25lXG4gKiAgICAgYXJndW1lbnQgaW4gdGhlIGZ1bmN0aW9uIHdob3NlIGVycm9yIGlzIGJlaW5nIGZvcm1hdHRlZC4gSWYgdGhpc1xuICogICAgIGlzIGZhbHNlLCB0aGUgYG9yZGVyYCB3aWxsIGJlIGlnbm9yZWQuXG4gKiBAcmV0dXJucyB7ZnVuY3Rpb24oKik6c3RyaW5nfSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhIHZhbHVlIG9mIGFueVxuICogICAgIHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgYXJnRm9ybWF0dGVyID0gKHR5cGUsIG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT4gdmFsdWUgPT5cbiAgYGV4cGVjdGVkICR7XG4gICAgbXVsdGlwbGUgPyBgJHt3b3JkaW5hbChvcmRlcil9IGAgOiAnJ1xuICB9YXJndW1lbnQgdG8gYmUgJHt0eXBlfTsgZm91bmQgJHtzdHJpbmdpZnkodmFsdWUpfWBcblxuZXhwb3J0IGNvbnN0IGFyZ0NoYXJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egb25lLWNoYXJhY3RlciBzdHJpbmcnLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnRm5Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgZnVuY3Rpb24nLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnR2VuRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIGdlbmVyYXRvciBmdW5jdGlvbicsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdOdW1Gb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2EgbnVtYmVyJywgb3JkZXIsIG11bHRpcGxlKVxuZXhwb3J0IGNvbnN0IGFyZ1BhckZvcm1hdHRlciA9IChvcmRlciA9IDEsIG11bHRpcGxlID0gZmFsc2UpID0+XG4gIGFyZ0Zvcm1hdHRlcignYSBwYXJzZXInLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnU3RyRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHN0cmluZycsIG9yZGVyLCBtdWx0aXBsZSlcbmV4cG9ydCBjb25zdCBhcmdTdHJBcnJGb3JtYXR0ZXIgPSAob3JkZXIgPSAxLCBtdWx0aXBsZSA9IGZhbHNlKSA9PlxuICBhcmdGb3JtYXR0ZXIoJ2Egc3RyaW5nIG9yIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMnLCBvcmRlciwgbXVsdGlwbGUpXG5leHBvcnQgY29uc3QgYXJnU3RyUmVnRm9ybWF0dGVyID0gKG9yZGVyID0gMSwgbXVsdGlwbGUgPSBmYWxzZSkgPT5cbiAgYXJnRm9ybWF0dGVyKCdhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbicsIG9yZGVyLCBtdWx0aXBsZSlcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWx1ZVxuICogQHBhcmFtIHtmdW5jdGlvbihzdHJpbmcpOnN0cmluZ30gZm9ybWF0dGVyXG4gKi9cbmZ1bmN0aW9uIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcikge1xuICB0aHJvdyBuZXcgRXJyb3IoYFske25hbWV9XTogJHtmb3JtYXR0ZXIodmFsdWUpfWApXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBzaW5nbGUtY2hhcmFjdGVyIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRDaGFyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBjaGFyRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIHx8IGNoYXJMZW5ndGgodmFsdWUpICE9PSAxKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBub24tcGFyc2VyIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBmbkZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnZnVuY3Rpb24nIHx8IHBhcnNlci5jcmVhdGVkKHZhbHVlKSkge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgZ2VuZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEdlbkZ1bmN0aW9uKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBnZW5Gb3JtYXR0ZXIpIHtcbiAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgIT09ICdbb2JqZWN0IEdlbmVyYXRvckZ1bmN0aW9uXScpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmcobmFtZSwgdmFsdWUsIGZvcm1hdHRlciA9IHN0ckZvcm1hdHRlcikge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGFuIGFycmF5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEFycmF5KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBhcnJGb3JtYXR0ZXIpIHtcbiAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgc3RyaW5nIG9yIGFuIGFycmF5IG9mIHNpbmdsZS1jaGFyYWN0ZXJcbiAqIHN0cmluZ3MuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0U3RyaW5nT3JBcnJheShuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyQXJyRm9ybWF0dGVyKSB7XG4gIGlmICghKFxuICAgIEFycmF5LmlzQXJyYXkodmFsdWUpXG4gICAgJiYgdmFsdWUuZXZlcnkoYyA9PiB0eXBlb2YgYyA9PT0gJ3N0cmluZycgJiYgY2hhckxlbmd0aChjKSA9PT0gMSlcbiAgICB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICkpIHtcbiAgICBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG4gIH1cbn1cblxuLyoqXG4gKiBBc3NlcnRzIHRoYXQgYSB2YWx1ZSBpcyBhIHN0cmluZyBvciBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZnVuY3Rpb24gbWFraW5nIHRoZSBhc3NlcnRpb24uXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSBiZWluZyBjaGVja2VkLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTpzdHJpbmd9IFtmb3JtYXR0ZXJdIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGFcbiAqICAgICB2YWx1ZSBvZiBhbnkgdHlwZSBhbmQgcmV0dXJucyBhIHN0cmluZyBpbmNvcnBvcmF0aW5nIHRoYXQgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhc3NlcnRTdHJpbmdPclJlZ0V4cChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gc3RyUmVnRm9ybXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZydcbiAgICAmJiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsdWUpICE9PSAnW29iamVjdCBSZWdFeHBdJykge1xuICAgIGZhaWxBc3NlcnQobmFtZSwgdmFsdWUsIGZvcm1hdHRlcilcbiAgfVxufVxuXG4vKipcbiAqIEFzc2VydHMgdGhhdCBhIHZhbHVlIGlzIGEgbnVtYmVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSBmdW5jdGlvbiBtYWtpbmcgdGhlIGFzc2VydGlvbi5cbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIGJlaW5nIGNoZWNrZWQuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOnN0cmluZ30gW2Zvcm1hdHRlcl0gQSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYVxuICogICAgIHZhbHVlIG9mIGFueSB0eXBlIGFuZCByZXR1cm5zIGEgc3RyaW5nIGluY29ycG9yYXRpbmcgdGhhdCB2YWx1ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydE51bWJlcihuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyID0gbnVtRm9ybWF0dGVyKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdudW1iZXInKSBmYWlsQXNzZXJ0KG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIpXG59XG5cbi8qKlxuICogQXNzZXJ0cyB0aGF0IGEgdmFsdWUgaXMgYSBwYXJzZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIGZ1bmN0aW9uIG1ha2luZyB0aGUgYXNzZXJ0aW9uLlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgYmVpbmcgY2hlY2tlZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6c3RyaW5nfSBbZm9ybWF0dGVyXSBBIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyBhXG4gKiAgICAgdmFsdWUgb2YgYW55IHR5cGUgYW5kIHJldHVybnMgYSBzdHJpbmcgaW5jb3Jwb3JhdGluZyB0aGF0IHZhbHVlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gYXNzZXJ0UGFyc2VyKG5hbWUsIHZhbHVlLCBmb3JtYXR0ZXIgPSBwYXJGb3JtYXR0ZXIpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ2Z1bmN0aW9uJyB8fCAhcGFyc2VyLmNyZWF0ZWQodmFsdWUpKSB7XG4gICAgZmFpbEFzc2VydChuYW1lLCB2YWx1ZSwgZm9ybWF0dGVyKVxuICB9XG59XG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdQYXJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIGZhdGFsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgbmVycm9yLCByZXBseUZuIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2ssIEZhaWwsIEZhdGFsIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHBhcnNlcnMgb25lIGF0IGEgdGltZSB1bnRpbCBvbmUgc3VjY2VlZHMsIG9uZVxuICogZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIE9uIGZhaWx1cmUgKGZhdGFsIG9yIG90aGVyd2lzZSksIGVycm9yXG4gKiBtZXNzYWdlcyBmcm9tIGFsbCBwYXJzZXJzIHRoYXQgaGFkIGZhaWxlZCBhcmUgbWVyZ2VkIGludG8gYGFsdGAnc1xuICogZXJyb3IgbWVzc2FnZXMuXG4gKlxuICogQHBhcmFtIHsuLi5QYXJzZXJ8c3RyaW5nfSBhcmdzIFRoZSBwYXJzZXJzIHRvIGV4ZWN1dGUsIG9uZSBhdCBhIHRpbWUsXG4gKiAgICAgdW50aWwgb25lIHN1Y2NlZWRzLCBvbmUgZmFpbHMgZmF0YWxseSwgb3IgYWxsIGZhaWwuIFRoZSBsYXN0XG4gKiAgICAgYXJndW1lbnQgKm1heSogYmUgYSBzdHJpbmcsIGluIHdoaWNoIGNhc2UgaXQgYmVjb21lcyB0aGUgZXhwZWN0ZWRcbiAqICAgICBlcnJvciBtZXNzYWdlIGluIHBsYWNlIG9mIHRoZSBjb2xsZWN0ZWQgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXNcbiAqICAgICBvZiB0aGUgY29uc3RpdHVlbnQgcGFyc2Vycy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBpdHMgY29udGFpbmVkIHBhcnNlcnMgdW50aWxcbiAqICAgICBvbmUgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHQgPSAoLi4uYXJncykgPT4ge1xuICBjb25zdCBwcyA9IGFyZ3Muc2xpY2UoKVxuICBjb25zdCBtID0gdHlwZW9mIGFyZ3NbYXJncy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+XG4gICAgICBhc3NlcnRQYXJzZXIoJ2FsdCcsIHAsIGFyZ1BhckZvcm1hdHRlcihpICsgMSwgdHJ1ZSkpKVxuXG4gICAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG5cbiAgICBmb3IgKGNvbnN0IHAgb2YgcHMpIHtcbiAgICAgIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG5cbiAgICAgIGlmICghaGFzTSkgZXJyb3JzID0gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycylcbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGVycm9ycylcbiAgICB9XG4gICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGVycm9ycylcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXIsIHN1Y2NlZWRpbmcgd2hldGhlciBpdFxuICogZmFpbHMgb3Igbm90IGJ1dCBvbmx5IGNvbnN1bWluZyBpbnB1dCBpZiBpdCBzdWNjZWVkcy4gVGhpcyBwYXJzZXJcbiAqIHdpbGwgb25seSBmYWlsIGlmIGl0cyBzdXBwbGllZCBwYXJzZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIGZvciBvcHRpb25hbCBjb250ZW50IHRvIGJlIGV4ZWN1dGVkIGFuZFxuICogICAgIHRoZW4gaGF2ZSBpdHMgcmVzdWx0IGlnbm9yZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiBgcGAgZmFpbHMuXG4gKiBAcmV0dXJuIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgd2l0aCBubyByZXN1bHQgdW5sZXNzIGl0c1xuICogICAgIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseS4gVGhpcyBwYXJzZXIgY29uc3VtZXMgdGV4dCBvbmx5IGlmXG4gKiAgICAgaXRzIGNvbnRhaW5lZCBwYXJzZXIgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBvcHQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdvcHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnb3B0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwcmVwLCBbcGN0eCwgcHJlc11dID0gZHVwKHAoY3R4KSlcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIHByZXBcbiAgY29uc3QgZXJyb3JzID0gaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnNcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZXJyb3JzKVxuXG4gIC8vIElmIHRoZSBvcHRpb25hbCBwYXJzZXIgZmFpbHMsIHdlIGFkZCB0aGUgZXJyb3IgbWVzc2FnZSBldmVuIHRob3VnaFxuICAvLyB0aGUgZW5kIHJlc3VsdCBvZiBgb3B0YCBpcyBzdWNjZXNzLiBUaGlzIGxldHMgc2VxdWVuY2luZyBwYXJzZXJzXG4gIC8vIGFkZCB0aGUgb3B0IHBhcnNlcidzIGV4cGVjdGVkIHRvIGVycm9yIG1lc3NhZ2VzIGlmIGEgbGF0ZXIgcGFyc2VyXG4gIC8vIGluIHRoZSBzZXF1ZW5jZSBmYWlscy5cbiAgY29uc3QgcmVwbHkgPSBva1JlcGx5KHBjdHgsIG51bGwpXG4gIHJlcGx5WzFdLmVycm9ycyA9IGVycm9yc1xuICByZXR1cm4gcmVwbHlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBlaXRoZXIgd2l0aCB0aGUgc3VwcGxpZWQgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bFxuICogcmVzdWx0IG9yIGVsc2UgKGlmIHRoYXQgcGFyc2VyIGZhaWxzKSB0aGUgc3VwcGxpZWQgZGVmYXVsdCB2YWx1ZSBgeGAuXG4gKiBUaGlzIHBhcnNlciBvbmx5IGZhaWxzIGlmIGl0cyBjb250YWluZWQgcGFyc2VyIGZhaWxzIGZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IHdpbGwgYmUgdGhlIGNyZWF0ZWQgcGFyc2VyJ3NcbiAqICAgICByZXN1bHQgaWYgaXQgc3VjY2VlZHMuXG4gKiBAcGFyYW0geyp9IHggQSB2YWx1ZSB3aGljaCB3aWxsIGJlIHRoZSBjcmVhdGVkIHBhcnNlcidzIHJlc3VsdCBpZiB0aGVcbiAqICAgICBzdXBwbGllZCBwYXJzZXIgZmFpbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCByZXN1bHRzIGluIGVpdGhlciBpdHMgY29udGFpbmVkXG4gKiAgICAgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCByZXN1bHQgb3IgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICovXG5leHBvcnQgY29uc3QgZGVmID0gKHAsIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZGVmJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2RlZicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgeClcbiAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VyIHdpdGhvdXQgY29uc3VtaW5nIGlucHV0LlxuICogU3VjY2VzcyBvciBmYWlsdXJlIGFyZSBzdGlsbCByZXR1cm5lZCwgdGhvdWdoIGZhdGFsIGZhaWx1cmUgaXNcbiAqIGNvbnZlcnRlZCB0byBub24tZmF0YWwgZHVlIHRvIHRoZSBmYWN0IHRoYXQgbm8gaW5wdXQgaXMgY29uc3VtZWQuXG4gKlxuICogSWYgdGhlIGNvbnNpdHVlbnQgcGFyc2VyIGZhaWxzIGZhdGFsbHksIGEgbmVzdGVkIGVycm9yIG1lc3NhZ2Ugd2lsbFxuICogYmUgY3JlYXRlZCB0byB0cmFjayB0aGUgYWN0dWFsIGVycm9yIGNhdXNlIGJlZm9yZSB0aGlzIHBhcnNlclxuICogYXV0b21hdGljYWxseSBiYWNrdHJhY2tzLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYmUgZXhlY3V0ZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFwcGxpZXMgYHBgIGFuZCBzdWNjZWVkcyBvciBmYWlsc1xuICogICAgIHdpdGggaXQsIGJ1dCB3aGljaCBjb25zdW1lcyBubyBpbnB1dCBlaXRoZXIgd2F5LlxuICovXG5leHBvcnQgY29uc3QgcGVlayA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3BlZWsnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncGVlaycsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIG9rUmVwbHkocGN0eCwgcHJlcy52YWx1ZSwgaW5kZXgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSwgaW5kZXgpXG4gIH1cbiAgLy8gVGhpcyBwYXJzZXIgaW1wbGVtZW50cyBhdXRvbWF0aWMgYmFja3RyYWNraW5nLCBzbyBpZiBpdHMgcGFyc2VyXG4gIC8vIGZhaWxzIGZhdGFsbHksIGl0IGhhcyB0byB0cmFjayB0aGF0IHRocm91Z2ggYSBuZXN0ZWQgZXJyb3JcbiAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBuZXJyb3IobSwgcGN0eCwgcHJlcy5lcnJvcnMpLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgcHJvdmlkZWQgcGFyc2VyIHN1Y2NlZWRzIGJ1dCBkb2VzIG5vdFxuICogY29uc3VtZSBpbnB1dC4gSWYgdGhlIHBhcnNlciBzdWNjZWVkcyBhbnkgb3RoZXIgd2F5IG9yIGZhaWxzLCB0aGlzXG4gKiBwYXJzZXIgdHJhbnNwYXJlbnRseSBwYXNzZXMgdGhhdCByZXN1bHQgYWxvbmcuXG4gKlxuICogVGhpcyBwYXJzZXIsIGJ5IGRlZmF1bHQsIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2Ugb24gZmFpbHVyZSBpZiB0aGF0XG4gKiBmYWlsdXJlIHdhcyBjYXVzZWQgYnkgYSBzdWNjZXNzIHdpdGggaW5wdXQgY29uc3VtZWQuIEFuIGVycm9yIG1lc3NhZ2VcbiAqIGNhbiBiZSBzcGVjaWZpZWQgYnkgcGFzc2luZyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSBpbiBhcyB0aGUgb3B0aW9uYWxcbiAqIHNlY29uZCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggZmFpbHMgaWYgYHBgIHBhc3NlcyBidXQgY29uc3VtZXNcbiAqICAgICBpbnB1dCwgb3Igb3RoZXJ3aXNlIHBhc3NlcyB0aGUgcmVzdWx0IHRocm91Z2guXG4gKi9cbmV4cG9ydCBjb25zdCBlbXB0eSA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VtcHR5JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2VtcHR5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IE9rICYmIHBjdHguaW5kZXggPT09IGluZGV4KSByZXR1cm4gb2tSZXBseShwY3R4LCBudWxsKVxuICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgc3VwcGxpZWQgcGFyc2VyIGZhaWxzLCBidXQgd2hpY2ggZG9lc1xuICogbm90IGNvbnN1bWUgaW5wdXQuIElmIGBwYCBzdWNjZWVkcywgdGhpcyBwYXJzZXIgZmFpbHMgbm9uLWZhdGFsbHkuXG4gKlxuICogVGhpcyBwYXJzZXIsIGJ5IGRlZmF1bHQsIHByb2R1Y2VzIG5vIGVycm9yIG1lc3NhZ2VzIG9uIGZhaWx1cmUuIEFuXG4gKiBlcnJvciBtZXNzYWdlIGNhbiBiZSBzcGVjaWZpZWQgYnkgcGFzc2luZyB0aGUgZXhwZWN0ZWQgbWVzc2FnZSBpbiBhc1xuICogdGhlIG9wdGlvbmFsIHNlY29uZCBwYXJhbWV0ZXIuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIGBwYFxuICogICAgIHN1Y2NlZWRzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhcHBsaWVzIGBwYCBhbmQgc3VjY2VlZHMgd2hlbiBpdFxuICogICAgIGZhaWxzLCBidXQgZG9lcyBub3QgY2hhbmdlIHRoZSBwYXJzZXIgY29udGV4dCwgd2hldGhlciBvciBub3QgYHBgXG4gKiAgICAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBub3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdub3QnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm90JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICByZXR1cm4gcHJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBmYWlsUmVwbHkocGN0eCwgZmVycm9yKG0sIHVuZGVmaW5lZCksIGluZGV4KVxuICAgIDogb2tSZXBseShwY3R4LCBudWxsLCBpbmRleClcbn0pXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQge1xuICBhcmdGbkZvcm1hdHRlcixcbiAgYXJnR2VuRm9ybWF0dGVyLFxuICBhcmdOdW1Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRGdW5jdGlvbixcbiAgYXNzZXJ0R2VuRnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG4gIGZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGNvbXBvdW5kLCBFcnJvclR5cGUsIGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7XG4gIGJlcnJvcixcbiAgZHVwLFxuICBmZXJyb3IsXG4gIG5lcnJvcixcbiAgcmFuZ2UsXG4gIHJlcGx5Rm4sXG4gIHN0cmluZ2lmeSxcbiAgd29yZGluYWwsXG59IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rLCBGYWlsLCBGYXRhbCB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBiYWNrdHJhY2tzIHdoZW4gaXRzIGNvbnRhaW5lZCBwYXJzZXIgZmFpbHMgZmF0YWxseSBhbmRcbiAqIHRyYW5zZm9ybXMgdGhhdCBmYXRhbCBmYWlsdXJlIGludG8gYSBub24tZmF0YWwgb25lLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoZSBmZXcgd2F5cyB0byBjYXVzZSBhIGNvbnRhaW5lZCBwYXJzZXIgdG8gYmFja3RyYWNrXG4gKiBhZnRlciBhIGZhdGFsIGZhaWx1cmUgKGBwZWVrYCBhbHNvIGRvZXMgdGhhdCBhcyBhIHNpZGUgZWZmZWN0LCBldGMuKS5cbiAqIEFsbCBvZiB0aGUgYEJgIGJhY2t0cmFja2luZyBwYXJzZXJzIGJhY2t0cmFjayBvbmx5IGlmIHRoZSBmYXRhbFxuICogZmFpbHVyZSB3YXMgY2F1c2VkIGJ5IGEgY29udGFpbmVkIHBhcnNlcidzIG5vbi1mYXRhbCBmYWlsdXJlLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgd2hvc2UgZmF0YWwgZmFpbHVyZXMgd2lsbCBiZSBjb252ZXJ0ZWRcbiAqICAgICBpbnRvIG5vbi1mYXRhbCBmYWlsdXJlcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy4gSWYgdGhlIHBhcnNlciBiYWNrdHJhY2tzLCB0aGlzIGluc3RlYWQgYmVjb21lcyB0aGUgdGV4dCBvZlxuICogICAgIHRoZSBnZW5lcmF0ZWQgY29tcG91bmQgZXJyb3IgbWVzc2FnZS5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgY2Fubm90IGZhaWwgZmF0YWxseS4gSWYgaXRzIGNvbnRhaW5lZFxuICogICAgIHBhcnNlciBmYWlscyBmYXRhbGx5LCB0aGlzIG9uZSB3aWxsIGluc3RlYWQgZmFpbCBub24tZmF0YWxseS5cbiAqL1xuZXhwb3J0IGNvbnN0IGF0dGVtcHQgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdhdHRlbXB0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2F0dGVtcHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcHJlcCwgW3BjdHgsIHByZXNdXSA9IGR1cChwKGN0eCkpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBwcmVwXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpIHtcbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIG5lcnJvcihtLCBwY3R4LCBwcmVzLmVycm9ycyksIGluZGV4KVxuICB9XG4gIGlmIChoYXNNKSB7XG4gICAgaWYgKHByZXMuZXJyb3JzLmxlbmd0aCA9PT0gMSAmJiBwcmVzLmVycm9yc1swXS50eXBlID09PSBFcnJvclR5cGUuTmVzdGVkKSB7XG4gICAgICBjb25zdCB7IGN0eCwgZXJyb3JzIH0gPSBwcmVzLmVycm9yc1swXVxuICAgICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBjb21wb3VuZChtLCBjdHgsIGVycm9ycyksIGluZGV4KVxuICAgIH1cbiAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGV4cGVjdGVkKG0pLCBpbmRleClcbiAgfVxuICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIHByZXMuZXJyb3JzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBpbXBsZW1lbnRzIGEgc2VxdWVuY2UuIEVhY2ggc3VwcGxpZWQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiBpbiBvcmRlciB1bnRpbCBlaXRoZXIgdGhleSBhbGwgc3VjY2VlZCBvciB0aGUgZmlyc3Qgb25lIGZhaWxzLiBJbiB0aGVcbiAqIGZvcm1lciBjYXNlLCBhbGwgcmVzdWx0cyBhcmUgbWVyZ2VkIGludG8gYW4gYXJyYXkgdGhhdCBiZWNvbWVzIHRoZVxuICogcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBub24tZmF0YWxseSBhZnRlciBhbGwgb2YgdGhlIGVhcmxpZXJcbiAqIHBhcnNlcnMgc3VjY2VlZGVkLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgdGhlXG4gKiB2ZXJ5IGZpcnN0IHBhcnNlciB3YXMgZXhlY3V0ZWQgYW5kIHdpbGwgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0gey4uLlBhcnNlcnxzdHJpbmd9IHBzIFRoZSBwYXJzZXJzIHRvIGJlIGV4ZWN1dGVkLiBUaGUgbGFzdFxuICogICAgIGFyZ3VtZW50ICptYXkqIGJlIGEgc3RyaW5nLCBpbiB3aGljaCBjYXNlIGl0IGJlY29tZXMgdGhlIGV4cGVjdGVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZSAob3IgY29tcG91bmQgZXJyb3IgbWVzc2FnZSwgaW4gdGhlIGNhc2Ugb2ZcbiAqICAgICBiYWNrdHJhY2tpbmcgaGFwcGVuaW5nKSBpbiBwbGFjZSBvZiB0aGUgY29sbGVjdGVkIGV4cGVjdGVkIGVycm9yXG4gKiAgICAgbWVzc2FnZXMgb2YgdGhlIGNvbnN0aXR1ZW50IHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJzIG9uZSBhdFxuICogICAgIGEgdGltZSwgaW4gb3JkZXIsIGFuZCBmYWlscyBpZiBhbnkgb2YgdGhvc2UgcGFyc2VycyBmYWlsLlxuICovXG5leHBvcnQgY29uc3QgYnNlcSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgcHNbcHMubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG5cbiAgcmV0dXJuIHBhcnNlcihjdHggPT4ge1xuICAgIEFTU0VSVCAmJiBwcy5mb3JFYWNoKChwLCBpKSA9PlxuICAgICAgYXNzZXJ0UGFyc2VyKCdic2VxJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCBhcmdzLmxlbmd0aCA+IDEpKSlcblxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICAgICAgfVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBlcnJvcnMpXG4gICAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZCBwYXJzZXJcbiAqIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlIHBhcnNlclxuICogcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBJZiB0aGUgcGFyc2VyIHJldHVybmVkIGJ5IGBmbmAgZmFpbHMgbm9uLWZhdGFsbHkgYWZ0ZXIgYHBgIHN1Y2NlZWRzLFxuICogdGhpcyBwYXJzZXIgd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtmdW5jdGlvbigqKTogUGFyc2VyfSBmbiBBIGZ1bmN0aW9uIHRoYXQgdGFrZXMgdGhlIHJlc3VsdCBmcm9tXG4gKiAgICAgdGhlIGZpcnN0IHBhcnNlcidzIHN1Y2Nlc3NmdWwgYXBwbGljYXRpb24gYXMgaXRzIHNvbGUgYXJndW1lbnQuXG4gKiAgICAgSXQgdXNlcyB0aGlzIHJlc3VsdCB0byBkZXRlcm1pbmUgYSBzZWNvbmQgcGFyc2VyLCB3aGljaCBpdFxuICogICAgIHJldHVybnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCwgcGFzcyB0aGUgcmVzdWx0IHRvXG4gKiAgICAgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uLCBhbmQgdXNlIHRoYXQgZnVuY3Rpb24ncyByZXR1cm4gdmFsdWUgYXMgYVxuICogICAgIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJjaGFpbiA9IChwLCBmbiwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiY2hhaW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignYmNoYWluJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JjaGFpbicsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgZmVycm9yKG0sIHByZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IHEgPSBmbihwcmVzLnZhbHVlKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKFxuICAgICdiY2hhaW4nLCBxLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSxcbiAgKVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gT2spIHJldHVybiBxcmVwXG5cbiAgY29uc3QgZXJyb3JzID0gbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhdGFsKSByZXR1cm4gZmF0YWxSZXBseShxY3R4LCBmZXJyb3IobSwgZXJyb3JzKSlcbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHFgIHRvIHRoZSBmdW5jdGlvblxuICogcmV0dXJuZWQgYnkgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gKiAgICAgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgQSBwYXJzZXIgd2hpY2ggcHJvdmlkZXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCBhbmQgYHFgIGFuZCByZXN1bHRzIGluXG4gKiAgICAgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgIHdoZW4gdGhlIHZhbHVlXG4gKiAgICAgcmV0dXJuZWQgYnkgYHBgIGlzIHBhc3NlZCBpbnRvIGl0LlxuICovXG5leHBvcnQgY29uc3QgYmFwcGx5ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmFwcGx5JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYXBwbHknLCBxLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmFwcGx5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBjb25zdCBlcnJvcnMgPSBtZXJnZShwcmVzLmVycm9ycywgcXJlcy5lcnJvcnMpXG4gIGlmIChxcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHFjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICBjb25zdCBlcnJvciA9IGJlcnJvcihxY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcWN0eCwgZXJyb3JzKVxuICAgIHJldHVybiBmYWlsUmVwbHkocWN0eCwgZXJyb3IsIGluZGV4KVxuICB9XG5cbiAgY29uc3QgZm4gPSBxcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAnYmFwcGx5JywgZm4sIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rUmVwbHkocWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHBgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIHRoZSBmaXJzdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsZWZ0ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxlZnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JsZWZ0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2JsZWZ0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBmZXJyb3IobSwgcHJlcy5lcnJvcnMpKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gb2tSZXBseShxY3R4LCBwcmVzLnZhbHVlKVxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG5cbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgdGhlblxuICogcmV0dXJuIHRoZSByZXN1bHQgb2YgYHFgLlxuICpcbiAqIElmIGBwYCBzdWNjZWVkcyBhbmQgYHFgIGZhaWxzLCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB0aGVcbiAqIHBvaW50IHdoZXJlIGBwYCB3YXMgYXBwbGllZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCBicmlnaHQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdicmlnaHQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JyaWdodCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdicmlnaHQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcXJlcCwgW3FjdHgsIHFyZXNdXSA9IGR1cChxKHBjdHgpKVxuICBpZiAocXJlcy5zdGF0dXMgPT09IE9rKSByZXR1cm4gcXJlcFxuXG4gIGNvbnN0IGVycm9ycyA9IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycylcbiAgaWYgKHFyZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocWN0eCwgZmVycm9yKG0sIGVycm9ycykpXG5cbiAgY29uc3QgZXJyb3IgPSBiZXJyb3IocWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHFjdHgsIGVycm9ycylcbiAgcmV0dXJuIGZhaWxSZXBseShxY3R4LCBlcnJvciwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgaW5pdGlhbGx5IHN1Y2NlZWRpbmcgb25jZSBvciBtb3JlLCB0aGlzIHBhcnNlclxuICogd2lsbCBiYWNrdHJhY2sgdG8gdGhlIHBvaW50IHdoZXJlIGBwYCB3YXMgZXhlY3V0ZWQgdGhlIGZpcnN0IHRpbWUgYW5kXG4gKiB3aWxsIGZhaWwgbm9uLWZhdGFsbHkuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdG8gZXhlY3V0ZSBtdWx0aXBsZSB0aW1lcy5cbiAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gZXhlY3V0ZSB0aGUgcGFyc2VyLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGJjb3VudCA9IChwLCBuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2Jjb3VudCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydE51bWJlcignYmNvdW50JywgbiwgYXJnTnVtRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2Jjb3VudCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShuKSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihwY3R4LmluZGV4ICE9PSBpbmRleCwgbSwgcGN0eCwgcHJlcy5lcnJvcnMpXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGEgY29udGVudCBwYXJzZXIgemVybyBvciBtb3JlIHRpbWVzIHVudGlsIGFuXG4gKiBlbmQgcGFyc2VyIGlzIHN1Y2Nlc3NmdWwuIFRoaXMgcGFyc2VyIHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mXG4gKiB0aGUgc3VjY2Vzc2Z1bCBjb250ZW50IHBhcnNlciByZXN1bHRzLiBUaGUgZW5kIHBhcnNlciBpcyBleGVjdXRlZFxuICogKmZpcnN0Kiwgc28gdGhlIHJlc3VsdHMgb2YgdGhlIHR3byBwYXJzZXJzIHdpbGwgbm90IG92ZXJsYXAuXG4gKlxuICogSWYgYHBgIGZhaWxzIG5vbi1mYXRhbGx5IGJlZm9yZSBgZWAgc3VjY2VlZHMsIHRoaXMgcGFyc2VyIHdpbGxcbiAqIGJhY2t0cmFjayB0byB0aGUgcG9pbnQgd2hlcmUgYHBgIHdhcyBleGVjdXRlZCB0aGUgZmlyc3QgdGltZSBhbmQgd2lsbFxuICogZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgY29udGVudCBwYXJzZXIuIEl0cyByZXN1bHRzIGFyZSBwdXNoZWQgaW50byBhblxuICogICAgIGFycmF5IGFuZCBiZWNvbWUgdGhlIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBlIFRoZSBlbmQgcGFyc2VyLiBQYXJzaW5nIGVuZHMgd2hlbiB0aGlzIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLiBJdHMgcmVzdWx0IGlzIGRpc2NhcmRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGV4ZWN1dGUgYGVgIGFuZCB0aGVuIGBwYCB6ZXJvXG4gKiAgICAgb3IgbW9yZSB0aW1lcyB1bnRpbCBgZWAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCBidW50aWwgPSAocCwgZSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdidW50aWwnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2J1bnRpbCcsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdidW50aWwnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgdmFsdWVzID0gW11cbiAgbGV0IGNvbnRleHQgPSBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtlY3R4LCBlcmVzXSA9IGUoY29udGV4dClcbiAgICBjb250ZXh0ID0gZWN0eFxuICAgIGlmIChlcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KGVjdHgsIGZlcnJvcihtLCBlcmVzLmVycm9ycykpXG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBPaykgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBwcmVzLmVycm9ycykpXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICBjb25zdCBlcnJvciA9IGJlcnJvcihcbiAgICAgICAgcGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIG1lcmdlKHByZXMuZXJyb3JzLCBlcmVzLmVycm9ycyksXG4gICAgICApXG4gICAgICByZXR1cm4gZmFpbFJlcGx5KHBjdHgsIGVycm9yLCBpbmRleClcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYSBibG9jayBvZiBjb2RlIGluIHRoZSBmb3JtIG9mIGEgZ2VuZXJhdG9yXG4gKiBmdW5jdGlvbi4gSW5zaWRlIHRoYXQgZnVuY3Rpb24sIHBhcnNlcnMgdGhhdCBhcmUgYHlpZWxkYGVkIHdpbGwgYmVcbiAqIGV4ZWN1dGVkIGFuZCB3aWxsIGV2YWx1YXRlIHRvIHRoZWlyIHJlc3VsdHMgKHdoaWNoIGNhbiB0aGVuIGJlXG4gKiBhc3NpZ25lZCB0byB2YXJpYWJsZXMsIGV0Yy4pLlxuICpcbiAqIElmIGFueSBvZiB0aGUgeWllbGRlZCBwYXJzZXJzIGZhaWwsICB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0b1xuICogdGhlIHBvaW50IHdoZXJlIHRoZSBmaXJzdCBwYXJzZXIgd2FzIGV4ZWN1dGVkIGFuZCB3aWxsIGZhaWxcbiAqIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKToqfSBnIEEgZ2VuZXJhdG9yIGZ1bmN0aW9uIHRoYXQgdGFrZXMgbm8gYXJndW1lbnRzXG4gKiAgICAgYW5kIHJldHVybnMgd2hhdGV2ZXIgc2hvdWxkIGJlIHVzZWQgYXMgdGhlIHJldHVybmVkIHBhcnNlcidzXG4gKiAgICAgcmVzdWx0LiBUaGlzIGdlbmVyYXRvciBmdW5jdGlvbiBjYW4gYHlpZWxkYCBvbmx5IGBQYXJzZXJgcztcbiAqICAgICBvdGhlcndpc2UgYW4gZXJyb3IgaXMgdGhyb3duLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlciBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIGdlbmVyYXRvciBmdW5jdGlvbixcbiAqICAgICBleGVjdXRlcyBwYXJzZXJzIGFzIHRoZXkgYXJlIHlpZWxkZWQsIGFuZCByZXN1bHRzIGluIHRoZSByZXR1cm5cbiAqICAgICB2YWx1ZSBvZiB0aGUgZ2VuZXJhdG9yLlxuICovXG5leHBvcnQgY29uc3QgYmJsb2NrID0gKGcsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydEdlbkZ1bmN0aW9uKCdiYmxvY2snLCBnLCBhcmdHZW5Gb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmJsb2NrJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IGdlbiA9IGcoKVxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBsZXQgZXJyb3JzID0gW11cbiAgbGV0IG5leHRWYWx1ZVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIGRvbmUgfSA9IGdlbi5uZXh0KG5leHRWYWx1ZSlcbiAgICBpZiAoZG9uZSkgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUpXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIHdvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSB2YWx1ZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgICAgY29uc3QgZXJyb3IgPSBiZXJyb3IocGN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIHBjdHgsIGVycm9ycylcbiAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgIH1cbiAgICBuZXh0VmFsdWUgPSBwcmVzLnZhbHVlXG4gICAgaSsrXG4gIH1cbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSBhbmQgcGFzc2VzIHRob3NlXG4gKiByZXN1bHRzIHRvIGEgZnVuY3Rpb24gb2YgdGhlIHNhbWUgYXJpdHkgYXMgdGhlIG51bWJlciBvZiBwYXJzZXJzIHRvXG4gKiBleGVjdXRlLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGlzIHBhcnNlcidzXG4gKiByZXN1bHQuXG4gKlxuICogSWYgb25lIG9mIHRoZSBwYXJzZXJzIGZhaWxzIG5vbi1mYXRhbGx5IGFmdGVyIGFsbCBvZiB0aGUgZWFybGllclxuICogcGFyc2VycyBzdWNjZWVkZWQsIHRoaXMgcGFyc2VyIHdpbGwgYmFja3RyYWNrIHRvIHRoZSBwb2ludCB3aGVyZSB0aGVcbiAqIHZlcnkgZmlyc3QgcGFyc2VyIHdhcyBleGVjdXRlZCBhbmQgd2lsbCBmYWlsIG5vbi1mYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7Li4uKFBhcnNlcnxmdW5jdGlvbiguLi4qKToqKX0gYXJncyBBbiBhcnJheSBvZiBwYXJzZXJzIHRvIGJlXG4gKiAgICAgZXhlY3V0ZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb24gd2hpY2hcbiAqICAgICB3aWxsIHJlY2VpdmUgYXMgcGFyYW1ldGVycyB0aGUgcmVzdWx0cyBvZiBlYWNoIHBhcnNlci4gSXRzIHJldHVyblxuICogICAgIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhpcyBwYXJzZXIuIEEgc2luZ2xlIGZ1bmN0aW9uXG4gKiAgICAgbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGJlIHRoZSBsYXN0IHBhcmFtZXRlcjsgYWxsIG90aGVyXG4gKiAgICAgcGFyYW1ldGVycyBtdXN0IGJlIHBhcnNlcnMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgZXhlY3V0ZSBpdHMgcGFyc2VycyBpbiBzZXF1ZW5jZSxcbiAqICAgICBmZWVkIHRoZSByZXN1bHRzIHRvIGl0cyBmdW5jdGlvbiwgYW5kIHJlc3VsdCBpbiB0aGUgZnVuY3Rpb24nc1xuICogICAgIHJldHVybiB2YWx1ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGJwaXBlID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBwc1twcy5sZW5ndGggLSAxXSA9PT0gJ3N0cmluZycgPyBwcy5wb3AoKSA6IG51bGxcbiAgY29uc3QgZm4gPSBwcy5wb3AoKVxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT4gYXNzZXJ0UGFyc2VyKFxuICAgICAgJ2JwaXBlJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSxcbiAgICApKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbignYnBpcGUnLCBmbiwgYXJnRm5Gb3JtYXR0ZXIocHMubGVuZ3RoICsgMSwgdHJ1ZSkpXG5cbiAgICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICAgIGNvbnN0IHZhbHVlcyA9IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcbiAgICBsZXQgZXJyb3JzID0gW11cblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShlcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG5cbiAgICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGZlcnJvcihtLCBlcnJvcnMpKVxuICAgICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBlcnJvcnMpXG4gICAgICAgIHJldHVybiBmYWlsUmVwbHkocGN0eCwgZXJyb3IsIGluZGV4KVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgZm4oLi4udmFsdWVzKSlcbiAgfSlcbn1cblxuLyoqXG4gKiBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBpdHMgcHJlLCBjb250ZW50LCBhbmQgcG9zdCBwYXJzZXJzIGluIG9yZGVyXG4gKiBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBJZiBhbnkgcGFyc2VyIGZhaWxzIG5vbi1mYXRhbGx5LCB0aGlzIHBhcnNlciB3aWxsIGJhY2t0cmFjayB0byB3aGVyZVxuICogYHNgIHdhcyBleGVjdXRlZCBhbmQgZmFpbCBub24tZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gZSBUaGUgbGFzdCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBzZWNvbmQgcGFyc2VyIHRvIGV4ZWN1dGUgYW5kIHdob3NlIHJlc3VsdFxuICogICAgIGJlY29tZXMgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCBleGVjdXRlcyBgc2AsIGBwYCwgYW5kIGBlYCBpblxuICogICAgIG9yZGVyIGFuZCB0aGVuIHJldHVybnMgdGhlIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBiYmV0d2VlbiA9IChzLCBlLCBwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JiZXR3ZWVuJywgcywgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdiYmV0d2VlbicsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmJldHdlZW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmJldHdlZW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoNCwgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcblxuICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGN0eClcbiAgaWYgKHNyZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihzcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHNjdHgsIGZlcnJvcihtLCBzcmVzLmVycm9ycykpXG4gIH1cblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKHNjdHgpXG4gIGNvbnN0IGVycm9ycyA9IHByZXMuZXJyb3JzPy5sZW5ndGggPyBtZXJnZShzcmVzLmVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgZmVycm9yKG0sIGVycm9ycykpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGNvbnN0IGVycm9yID0gYmVycm9yKHBjdHguaW5kZXggIT09IGluZGV4LCBtLCBwY3R4LCBlcnJvcnMpXG4gICAgcmV0dXJuIGZhaWxSZXBseShwY3R4LCBlcnJvciwgaW5kZXgpXG4gIH1cblxuICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKHBjdHgpXG4gIGlmIChlcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShlY3R4LCBmZXJyb3IobSwgbWVyZ2UoZXJyb3JzLCBlcmVzLmVycm9ycykpKVxuICB9XG4gIGlmIChlcmVzLnN0YXR1cyA9PT0gRmFpbCkge1xuICAgIGNvbnN0IGVycm9yID0gYmVycm9yKFxuICAgICAgZWN0eC5pbmRleCAhPT0gaW5kZXgsIG0sIGVjdHgsIG1lcmdlKGVycm9ycywgZXJlcy5lcnJvcnMpLFxuICAgIClcbiAgICByZXR1cm4gZmFpbFJlcGx5KGVjdHgsIGVycm9yLCBpbmRleClcbiAgfVxuICByZXR1cm4gb2tSZXBseShlY3R4LCBwcmVzLnZhbHVlKVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdOdW1Gb3JtYXR0ZXIsXG4gIGFyZ1BhckZvcm1hdHRlcixcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhc3NlcnRBcnJheSxcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0UGFyc2VyLFxuICBhc3NlcnRTdHJpbmcsXG4gIGZvcm1hdHRlcixcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZCwgbWVyZ2UgfSBmcm9tICdrZXNzZWwvZXJyb3InXG5pbXBvcnQgeyBkdXAsIHJlcGx5Rm4gfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPaywgRmF0YWwgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIHdpbGwgZXhlY3V0ZSBgcGAgYW5kIHJldHVybiBgcGAncyByZXN1bHRzIGpvaW5lZFxuICogdG9nZXRoZXIgaW50byBhIHNpbmdsZSBzdHJpbmcuIFRoaXMgcmVxdWlyZXMgdGhhdCBgcGAgcmV0dXJucyBhblxuICogYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5IG9mXG4gKiAgICAgc3RyaW5ncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCByZXR1cm5zIGEgc2luZ2xlXG4gKiAgICAgc3RyaW5nIG1hZGUgZnJvbSBqb2luaW5nIHRoZSBlbGVtZW50cyBvZiB0aGUgYXJyYXkgb2Ygc3RyaW5nc1xuICogICAgIHJldHVybmVkIGJ5IGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGpvaW4gPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdqb2luJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2pvaW4nLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnam9pbicsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdi5qb2luKCcnKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCBhbmQgcmV0dXJuIGl0cyByZXN1bHRzIG1pbnVzIGFueVxuICogYG51bGxgIG9yIGB1bmRlZmluZWRgIHJlc3VsdHMuIFRoaXMgcmVxdWlyZXMgdGhhdCBgcGAgcmV0dXJucyBhblxuICogYXJyYXk7IGFuIGVycm9yIHdpbGwgYmUgdGhyb3duIGlmIGl0IGRvZXMgbm90LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgaXMgZXhwZWN0ZWQgdG8gcmV0dXJuIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYW5kIHJldHVybnMgaXRzIHJlc3VsdHNcbiAqICAgICBtaW51cyBhbnkgYG51bGxgIG9yIGB1bmRlZmluZWRgIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBjb21wYWN0ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY29tcGFjdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdjb21wYWN0JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2NvbXBhY3QnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHYuZmlsdGVyKHggPT4geCAhPSBudWxsKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgYnV0LCBvbiBzdWNjZXNzLCByZXR1cm5zIGB4YCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBwYXJzZXIgdG8gYXBwbHkuIEl0cyByZXN1bHQgaXMgaWdub3JlZC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdGhhdCB0aGUgbmV3IHBhcnNlciB3aWxsIHJlc3VsdCBpbiBpZiBgcGBcbiAqICAgICBzdWNjZWVkcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBhcHBseSBgcGAgYnV0IHJldHVybiBgeGAgb25cbiAqICAgICBzdWNjZXNzLlxuICovXG5leHBvcnQgY29uc3QgdmFsdWUgPSAocCwgeCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd2YWx1ZScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd2YWx1ZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgYG5gdGggZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5LlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIDAtYmFzZWQgaW5kZXggb2YgdGhlIHJlc3VsdCBlbGVtZW50IHRvIHJldHVybi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgYG5gdGggZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgbnRoID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbnRoJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0TnVtYmVyKCdudGgnLCBuLCBhcmdOdW1Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoXG4gICAgJ250aCcsIHYsIGZvcm1hdHRlcignZmlyc3QgYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JyksXG4gIClcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2W25dKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgYXJyYXktcHJvZHVjaW5nIHBhcnNlclxuICogYHBgLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyBhbiBhcnJheS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3QgZmlyc3QgPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmaXJzdCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdmaXJzdCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdmaXJzdCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdlswXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBzZWNvbmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSBzZWNvbmQgZWxlbWVudCBvZiB0aGVcbiAqICAgICByZXN1bHQgb2YgYHBgLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2Vjb25kJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlY29uZCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdiA9IHByZXMudmFsdWVcbiAgQVNTRVJUICYmIGFzc2VydEFycmF5KCdzZWNvbmQnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbMV0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmV0dXJucyB0aGUgdGhpcmQgZWxlbWVudCBvZiBhcnJheS1wcm9kdWNpbmcgcGFyc2VyXG4gKiBgcGAuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIGFuIGFycmF5LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hvc2UgcmVzdWx0IGlzIHRoZSB0aGlyZCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCB0aGlyZCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3RoaXJkJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3RoaXJkJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ3RoaXJkJywgdiwgZm9ybWF0dGVyKCdhcmd1bWVudCB0byByZXR1cm4gYW4gYXJyYXknKSlcblxuICByZXR1cm4gb2tSZXBseShwY3R4LCB2WzJdKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJldHVybnMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZvdXJ0aCBlbGVtZW50IG9mIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAuXG4gKi9cbmV4cG9ydCBjb25zdCBmb3VydGggPSAocCwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdmb3VydGgnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZm91cnRoJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCB2ID0gcHJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0QXJyYXkoJ2ZvdXJ0aCcsIHYsIGZvcm1hdHRlcignYXJndW1lbnQgdG8gcmV0dXJuIGFuIGFycmF5JykpXG5cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgdlszXSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoZSBmaWZ0aCBlbGVtZW50IG9mIGFycmF5LXByb2R1Y2luZyBwYXJzZXJcbiAqIGBwYC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgYW4gYXJyYXkuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aG9zZSByZXN1bHQgaXMgdGhlIGZpZnRoIGVsZW1lbnQgb2YgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGZpZnRoID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZmlmdGgnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZmlmdGgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHYgPSBwcmVzLnZhbHVlXG4gIEFTU0VSVCAmJiBhc3NlcnRBcnJheSgnZmlmdGgnLCB2LCBmb3JtYXR0ZXIoJ2FyZ3VtZW50IHRvIHJldHVybiBhbiBhcnJheScpKVxuXG4gIHJldHVybiBva1JlcGx5KHBjdHgsIHZbNF0pXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgc3VwcGxpZWQgcGFyc2VyIGFuZCBwYXNzZXMgaXRzIHJlc3VsdCB0b1xuICogdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgcmV0dXJuIHZhbHVlIG9mIHRoYXQgZnVuY3Rpb24gYmVjb21lcyB0aGVcbiAqIHJlc3VsdC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBgZm1hcGAgb3BlcmF0aW9uIGZyb20gSGFza2VsbCdzIGBGdW5jdG9yYCBjbGFzcy4gSXQnc1xuICogdXNlZCBhcyBhIGJhc2lzIGZvciBsaWZ0aW5nIGZ1bmN0aW9ucyBpbnRvIGEgUGFyc2VyIGNvbnRleHQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHBhcnNlciB0byBhcHBseS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oKik6Kn0gZm4gQSBtYXBwaW5nIGZ1bmN0aW9uIHRoYXQgaXMgcGFzc2VkIHRoZVxuICogICAgIHJlc3VsdCBvZiBgcGAgYW5kIHdob3NlIHJldHVybiB2YWx1ZSB3aWxsIGJlIHRoZSByZXN1bHQgb2YgdGhlXG4gKiAgICAgY3JlYXRlZCBwYXJzZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB3aGljaCB3aWxsIGFwcGx5IGl0cyBjb250YWluZWQgcGFyc2VyLFxuICogICAgIHBhc3MgdGhlIHJlc3VsdCB0byB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGFuZCBzdWNjZWVkIHdpdGggdGhhdFxuICogICAgIHJldHVybiB2YWx1ZSBhcyBpdHMgcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3QgbWFwID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ21hcCcsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdtYXAnLCBmbiwgYXJnRm5Gb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbWFwJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocGN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXBwbGllcyB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYHFgIHRvIHRoZSBmdW5jdGlvblxuICogcmV0dXJuZWQgYnkgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyBgPCo+YCBmcm9tIEhhc2tlbGwncyBgQXBwbGljYXRpdmVgXG4gKiBjbGFzcy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB3aG9zZSByZXN1bHQgd2lsbCBiZSBwYXNzZWQgdG8gdGhlXG4gKiAgICAgZnVuY3Rpb24gcmV0dXJuZWQgYnkgYHFgLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgQSBwYXJzZXIgd2hpY2ggcHJvdmlkZXMgYSBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXBwbGllcyBgcGAgYW5kIGBxYCBhbmQgcmVzdWx0cyBpblxuICogICAgIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIGZ1bmN0aW9uIHJldHVybmVkIGJ5IGBxYCB3aGVuIHRoZSB2YWx1ZVxuICogICAgIHJldHVybmVkIGJ5IGBwYCBpcyBwYXNzZWQgaW50byBpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFwcGx5ID0gKHAsIHEsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYXBwbHknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2FwcGx5JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2FwcGx5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcWN0eCwgcXJlc10gPSBxKHBjdHgpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbiAgfVxuXG4gIGNvbnN0IGZuID0gcXJlcy52YWx1ZVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgJ2FwcGx5JywgZm4sIGZvcm1hdHRlcignc2Vjb25kIGFyZ3VtZW50IHRvIHJldHVybiBhIGZ1bmN0aW9uJyksXG4gIClcbiAgcmV0dXJuIG9rUmVwbHkocWN0eCwgZm4ocHJlcy52YWx1ZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgY2hhaW5zIHRoZSByZXN1bHQgYWZ0ZXIgYXBwbHlpbmcgaXRzIGNvbnRhaW5lZCBwYXJzZXJcbiAqIHRvIGFub3RoZXIgcGFyc2VyIHJldHVybmVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gVGhlIHBhcnNlclxuICogcmV0dXJucyB0aGF0IHJlc3VsdC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiB0aGUgZnVuY3Rpb24tcHJvdmlkZWQgcGFyc2VyIGZhaWxzXG4gKiBhZnRlciB0aGUgb3RoZXIgcGFyc2VyIGNvbnN1bWVzIGlucHV0LCBldmVuIGlmIHRoYXQgZmFpbHVyZSBpc1xuICogbm9uLWZhdGFsLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBgTW9uYWRgIGNsYXNzJ3MgYGJpbmRgIG9wZXJhdGlvblxuICogKGdlbmVyYWxseSB3cml0dGVuIGA+Pj1gIGluIEhhc2tlbGwpLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBmaXJzdCBwYXJzZXIgdG8gYXBwbHkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKCopOiBQYXJzZXJ9IGZuIEEgZnVuY3Rpb24gdGhhdCB0YWtlcyB0aGUgcmVzdWx0IGZyb21cbiAqICAgICB0aGUgZmlyc3QgcGFyc2VyJ3Mgc3VjY2Vzc2Z1bCBhcHBsaWNhdGlvbiBhcyBpdHMgc29sZSBhcmd1bWVudC5cbiAqICAgICBJdCB1c2VzIHRoaXMgcmVzdWx0IHRvIGRldGVybWluZSBhIHNlY29uZCBwYXJzZXIsIHdoaWNoIGl0XG4gKiAgICAgcmV0dXJucy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgYXBwbHkgaXRzIGNvbnRhaW5lZCBwYXJzZXIsXG4gKiAgICAgcGFzcyB0aGUgcmVzdWx0IHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbiwgYW5kIHVzZSB0aGF0IGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUgYXMgYSBzZWNvbmQgcGFyc2VyIHRvIGFwcGx5IHRoZSBpbnB1dCB0by5cbiAqL1xuZXhwb3J0IGNvbnN0IGNoYWluID0gKHAsIGZuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2NoYWluJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oJ2NoYWluJywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NoYWluJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsKVxuICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBxID0gZm4ocHJlcy52YWx1ZSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcihcbiAgICAnY2hhaW4nLCBxLCBmb3JtYXR0ZXIoJ3NlY29uZCBhcmd1bWVudCB0byByZXR1cm4gYSBwYXJzZXInKSxcbiAgKVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gcXJlcFxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdHZW5Gb3JtYXR0ZXIsXG4gIGFyZ051bUZvcm1hdHRlcixcbiAgYXJnUGFyRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydEZ1bmN0aW9uLFxuICBhc3NlcnRHZW5GdW5jdGlvbixcbiAgYXNzZXJ0TnVtYmVyLFxuICBhc3NlcnRQYXJzZXIsXG4gIGFzc2VydFN0cmluZyxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkLCBtZXJnZSB9IGZyb20gJ2tlc3NlbC9lcnJvcidcbmltcG9ydCB7IGR1cCwgcmFuZ2UsIHJlcGx5Rm4sIHN0cmluZ2lmeSwgd29yZGluYWwgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuY29uc3QgeyBPaywgRmFpbCwgRmF0YWwgfSA9IFN0YXR1c1xuXG5mdW5jdGlvbiBsb29wTWVzc2FnZShuYW1lKSB7XG4gIHJldHVybiBgWyR7bmFtZX1dOiBpbmZpbml0ZSBsb29wIGRldGVjdGVkOyBgXG4gICAgKyAnbmVpdGhlciBjb250ZW50IG5vciBzZXBhcmF0b3IgcGFyc2VyIGNvbnN1bWVkIGlucHV0J1xufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgaW1wbGVtZW50cyBhIHNlcXVlbmNlLiBFYWNoIHN1cHBsaWVkIHBhcnNlciBpcyBleGVjdXRlZFxuICogaW4gb3JkZXIgdW50aWwgZWl0aGVyIHRoZXkgYWxsIHN1Y2NlZWQgb3IgdGhlIGZpcnN0IG9uZSBmYWlscy4gSW4gdGhlXG4gKiBmb3JtZXIgY2FzZSwgYWxsIHJlc3VsdHMgYXJlIG1lcmdlZCBpbnRvIGFuIGFycmF5IHRoYXQgYmVjb21lcyB0aGVcbiAqIHJldHVybmVkIHBhcnNlcidzIHJlc3VsdC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBhbnkgaW5wdXQgd2FzIGNvbnN1bWVkIGJlZm9yZSBhbnkgb2ZcbiAqIGl0cyBwYXJzZXJzIGZhaWwsIGV2ZW4gaWYgdGhhdCBmYWlsdXJlIGl0c2VsZiB3YXMgbm9uLWZhdGFsLlxuICpcbiAqIEBwYXJhbSB7Li4uUGFyc2VyfHN0cmluZ30gYXJncyBUaGUgcGFyc2VycyB0byBiZSBleGVjdXRlZC4gVGhlIGxhc3RcbiAqICAgICBhcmd1bWVudCAqbWF5KiBiZSBhIHN0cmluZywgaW4gd2hpY2ggY2FzZSBpdCBiZWNvbWVzIHRoZSBleHBlY3RlZFxuICogICAgIGVycm9yIG1lc3NhZ2UgaW4gcGxhY2Ugb2YgdGhlIGNvbGxlY3RlZCBleHBlY3RlZCBlcnJvciBtZXNzYWdlc1xuICogICAgIG9mIHRoZSBjb25zdGl0dWVudCBwYXJzZXJzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgc3VwcGxpZWQgcGFyc2VycyBvbmUgYXRcbiAqICAgICBhIHRpbWUsIGluIG9yZGVyLCBhbmQgZmFpbHMgaWYgYW55IG9mIHRob3NlIHBhcnNlcnMgZmFpbC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcSA9ICguLi5hcmdzKSA9PiB7XG4gIGNvbnN0IHBzID0gYXJncy5zbGljZSgpXG4gIGNvbnN0IG0gPSB0eXBlb2YgYXJnc1thcmdzLmxlbmd0aCAtIDFdID09PSAnc3RyaW5nJyA/IHBzLnBvcCgpIDogbnVsbFxuXG4gIHJldHVybiBwYXJzZXIoY3R4ID0+IHtcbiAgICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgICBBU1NFUlQgJiYgcHMuZm9yRWFjaCgocCwgaSkgPT5cbiAgICAgIGFzc2VydFBhcnNlcignc2VxJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSkpXG5cbiAgICBjb25zdCB2YWx1ZXMgPSBbXVxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG4gICAgbGV0IGNvbnRleHQgPSBjdHhcblxuICAgIGZvciAoY29uc3QgcCBvZiBwcykge1xuICAgICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgICAgY29udGV4dCA9IHBjdHhcbiAgICAgIGlmICghaGFzTSkgZXJyb3JzID0gcHJlcy5lcnJvcnM/Lmxlbmd0aCA/IG1lcmdlKGVycm9ycywgcHJlcy5lcnJvcnMpIDogW11cblxuICAgICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IGNvbnRleHQuaW5kZXggIT09IGluZGV4KVxuICAgICAgICByZXR1cm4gZm4oY29udGV4dCwgZXJyb3JzKVxuICAgICAgfVxuICAgICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzKVxuICB9KVxufVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHBhcnNlcnMgYHBgIGFuZCBgcWAgaW4gb3JkZXIgYW5kIHJldHVybnNcbiAqIHRoZSByZXN1bHQgb2YgYHBgLiBUaGlzIGlzIHRoZSBzYW1lIG9wZXJhdGlvbiBhcyB0aGUgYXBwbGljYXRpdmUgYDwqYFxuICogaW4gSGFza2VsbC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseSBpZiBgcWAgZmFpbHMgYWZ0ZXIgYHBgIGNvbnN1bWVzIGlucHV0LFxuICogZXZlbiBpZiBgcWAncyBmYWlsdXJlIHdhcyBub24tZmF0YWwuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGZpcnN0IHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtQYXJzZXJ9IHEgVGhlIHNlY29uZCBwYXJzZXIgdG8gZXhlY3V0ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBgcWAgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVzdWx0IG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGxlZnQgPSAocCwgcSwgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsZWZ0JywgcSwgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2xlZnQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBTdGF0dXMuT2spIHtcbiAgICBjb25zdCBmbiA9IHByZXMuc3RhdHVzID09PSBGYXRhbCA/IGZhdGFsUmVwbHkgOiBmYWlsUmVwbHlcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgW3FjdHgsIHFyZXNdID0gcShwY3R4KVxuICBpZiAocXJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHFyZXMuc3RhdHVzID09PSBGYXRhbCB8fCBxY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICByZXR1cm4gZm4ocWN0eCwgaGFzTSA/IG1lcnJvciA6IG1lcmdlKHByZXMuZXJyb3JzLCBxcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkocWN0eCwgcHJlcy52YWx1ZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyB0aGUgcGFyc2VycyBgcGAgYW5kIGBxYCBpbiBvcmRlciBhbmQgcmV0dXJuc1xuICogdGhlIHJlc3VsdCBvZiBgcWAuIFRoaXMgaXMgdGhlIHNhbWUgb3BlcmF0aW9uIGFzIHRoZSBhcHBsaWNhdGl2ZSBgKj5gXG4gKiBpbiBIYXNrZWxsLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5IGlmIGBxYCBmYWlscyBhZnRlciBgcGAgY29uc3VtZXMgaW5wdXQsXG4gKiBldmVuIGlmIGBxYCdzIGZhaWx1cmUgd2FzIG5vbi1mYXRhbC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgZmlyc3QgcGFyc2VyIHRvIGV4ZWN1dGUuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcSBUaGUgc2Vjb25kIHBhcnNlciB0byBleGVjdXRlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBib3RoIGNvbnRhaW5lZCBwYXJzZXJzIGFuZFxuICogICAgIHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9mIHRoZSBzZWNvbmQuXG4gKi9cbmV4cG9ydCBjb25zdCByaWdodCA9IChwLCBxLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3JpZ2h0JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyaWdodCcsIHEsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyaWdodCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IFN0YXR1cy5Paykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IFtxcmVwLCBbcWN0eCwgcXJlc11dID0gZHVwKHEocGN0eCkpXG4gIGlmIChxcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocWN0eC5zdGF0dXMgPT09IEZhdGFsIHx8IHFjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihxY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIHFyZXMuZXJyb3JzKSlcbiAgfVxuICByZXR1cm4gcXJlcFxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGEgYmxvY2sgb2YgY29kZSBpbiB0aGUgZm9ybSBvZiBhIGdlbmVyYXRvclxuICogZnVuY3Rpb24uIEluc2lkZSB0aGF0IGZ1bmN0aW9uLCBwYXJzZXJzIHRoYXQgYXJlIGB5aWVsZGBlZCB3aWxsIGJlXG4gKiBleGVjdXRlZCBhbmQgd2lsbCBldmFsdWF0ZSB0byB0aGVpciByZXN1bHRzICh3aGljaCBjYW4gdGhlbiBiZVxuICogYXNzaWduZWQgdG8gdmFyaWFibGVzLCBldGMuKS5cbiAqXG4gKiBJZiBhbGwgcGFyc2VycyBpbiB0aGUgYmxvY2sgc3VjY2VlZCwgYGJsb2NrYCB3aWxsIHN1Y2NlZWQgd2l0aCB0aGVcbiAqIHZhbHVlIHRoYXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiByZXR1cm5lZC5cbiAqXG4gKiBJZiBhbnkgeWllbGRlZCBwYXJzZXIgZmFpbHMgYWZ0ZXIgYW5vdGhlciB5aWVsZGVkIHBhcnNlciBoYXMgY29uc3VtZWRcbiAqIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBPbmx5IHBhcnNlcnMgbWF5IGJlIHlpZWxkZWQgaW4gYSBibG9jay4gWWllbGRpbmcgYW55dGhpbmcgZWxzZSB3aWxsXG4gKiBjYXVzZSBhbiBlcnJvciB0byBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbigpOip9IGcgQSBnZW5lcmF0b3IgZnVuY3Rpb24gdGhhdCB0YWtlcyBubyBhcmd1bWVudHNcbiAqICAgICBhbmQgcmV0dXJucyB3aGF0ZXZlciBzaG91bGQgYmUgdXNlZCBhcyB0aGUgcmV0dXJuZWQgcGFyc2VyJ3NcbiAqICAgICByZXN1bHQuIFRoaXMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGNhbiBgeWllbGRgIG9ubHkgYFBhcnNlcmBzO1xuICogICAgIG90aGVyd2lzZSBhbiBlcnJvciBpcyB0aHJvd24uXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sXG4gKiAgICAgZXhlY3V0ZXMgcGFyc2VycyBhcyB0aGV5IGFyZSB5aWVsZGVkLCBhbmQgcmVzdWx0cyBpbiB0aGUgcmV0dXJuXG4gKiAgICAgdmFsdWUgb2YgdGhlIGdlbmVyYXRvci5cbiAqL1xuZXhwb3J0IGNvbnN0IGJsb2NrID0gKGcsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydEdlbkZ1bmN0aW9uKCdibG9jaycsIGcsIGFyZ0dlbkZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdibG9jaycsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBnZW4gPSBnKClcbiAgY29uc3QgaW5kZXggPSBjdHguaW5kZXhcbiAgbGV0IGVycm9ycyA9IGhhc00gPyBleHBlY3RlZChtKSA6IFtdXG4gIGxldCBuZXh0VmFsdWVcbiAgbGV0IGNvbnRleHQgPSBjdHhcbiAgbGV0IGkgPSAwXG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBkb25lIH0gPSBnZW4ubmV4dChuZXh0VmFsdWUpXG4gICAgaWYgKGRvbmUpIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlKVxuXG4gICAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignYmxvY2snLCB2YWx1ZSwgdiA9PiBgZXhwZWN0ZWQgJHtcbiAgICAgIHdvcmRpbmFsKGkgKyAxKVxuICAgIH0geWllbGQgdG8gYmUgdG8gYSBwYXJzZXI7IGZvdW5kICR7c3RyaW5naWZ5KHYpfWApXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSB2YWx1ZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgfVxuICAgIG5leHRWYWx1ZSA9IHByZXMudmFsdWVcbiAgICBpKytcbiAgfVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgaXQgZmFpbHMsXG4gKiBjb2xsZWN0aW5nIHRoZSByZXN1bHRzIGludG8gYW4gYXJyYXkgdGhhdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciBjYW5ub3QgZmFpbCBub24tZmF0YWxseTsgaG93ZXZlciwgaWYgYHBgIGV2ZXIgZmFpbHNcbiAqIGZhdGFsbHksIHRoZW4gc28gd2lsbCB0aGlzIHBhcnNlci5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBleGVjdXRlZCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGV4ZWN1dGVzIHRoZSBzdXBwbGllZCBwYXJzZXJcbiAqICAgICByZXBlYXRlZGx5IHVudGlsIGl0IGZhaWxzLiBJdHMgcmVzdWx0IHdpbGwgYmUgYW4gYXJyYXkgb2YgdGhlXG4gKiAgICAgc3VjY2Vzc2Z1bCByZXN1bHRzIGZyb20gdGhlIGNvbnRhaW5lZCBwYXJzZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtYW55ID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdtYW55JywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcblxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIG9uZSBvciBtb3JlIHRpbWVzIHVudGlsIGl0IGZhaWxzLFxuICogY29sbGVjdGluZyB0aGUgcmVzdWx0cyBpbnRvIGFuIGFycmF5IHRoYXQgaXMgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2FuIGZhaWwgbm9uLWZhdGFsbHkgaWYgYHBgIGRvZXMgbm90IHN1Y2NlZWQgYXQgbGVhc3RcbiAqIG9uY2UuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgYHBgIGV2ZXIgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0byBiZSBleGVjdXRlZCBvbmUgb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlclxuICogICAgIHJlcGVhdGVkbHkgdW50aWwgaXQgZmFpbHMuIEl0cyByZXN1bHQgd2lsbCBiZSBhbiBhcnJheSBvZiB0aGVcbiAqICAgICBzdWNjZXNzZnVsIHJlc3VsdHMgZnJvbSB0aGUgY29udGFpbmVkIHBhcnNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1hbnkxID0gKHAsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbWFueTEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbWFueTEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBjb25zdCB2YWx1ZXMgPSBbcHJlcy52YWx1ZV1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuXG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgICBpZiAoY29udGV4dC5pbmRleCA+PSBjb250ZXh0LnZpZXcuYnl0ZUxlbmd0aCkgYnJlYWtcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGFuZCBkaXNjYXJkcyBhbnkgc3VjY2Vzc2Z1bCByZXN1bHQgd2hpbGVcbiAqIHN0aWxsIGNvbnN1bWluZyBpbnB1dC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBUaGUgcGFyc2VyIHdob3NlIHJlc3VsdCBpcyB0byBiZSBkaXNjYXJkZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgY29uc3VtZSBpbnB1dCBhcyBgcGAgZG9lcyBvblxuICogICAgIHN1Y2Nlc3MsIGJ1dCB3aWxsIHByb2R1Y2Ugbm8gcmVzdWx0LlxuICovXG5leHBvcnQgY29uc3Qgc2tpcCA9IChwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NraXAnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2tpcCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBleHBlY3RlZChtKSA6IHByZXMuZXJyb3JzKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHBjdHgsIG51bGwpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoLiBUaGUgcmVzdWx0cyBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kXG4gKiByZXR1cm5lZC5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIG5vdCBmYWlsIG5vbi1mYXRhbGx5LCBhcyBtYXRjaGluZyBgcGAgemVybyB0aW1lcyBpc1xuICogdmFsaWQuIEl0IGNhbiBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlcGJ5ID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnknLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3NlcGJ5JywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NlcGJ5JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgcmV0dXJuIG9rUmVwbHkocGN0eCwgW10pXG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBieScpKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWVzLCBpbmRleClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaC4gVGhlIHJlc3VsdHMgb2YgYHBgIGFyZSBnYXRoZXJlZCBpbnRvIGFuIGFycmF5IGFuZFxuICogcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0IG9uY2UuIEl0XG4gKiB3aWxsIGZhaWwgZmF0YWxseSBpZiBlaXRoZXIgYHBgIG9yIGBzYCBldmVyIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBJZiBgcGAgYW5kIGBzYCBib3RoIHN1Y2NlZWQgd2l0aG91dCBjb25zdW1pbmcgY29udGVudCwgdGhhdCB3b3VsZFxuICogY2F1c2UgYW4gaW5maW5pdGUgbG9vcC4gSW4gdGhpcyBjYXNlLCBhbiBleGNlcHRpb24gaXMgdGhyb3duIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHRoZSBkZXNpcmVkIGNvbnRlbnQgd2hlblxuICogICAgIGFwcGxpZWQgdG8gdGhlIGlucHV0LlxuICogQHBhcmFtIHtQYXJzZXJ9IHMgQSBwYXJzZXIgdGhhdCB3aWxsIG1hdGNoIHNlcGFyYXRvcnMgYmV0d2VlbiB0aGVcbiAqICAgICBjaHVua3Mgb2YgY29udGVudC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2YgdGhlXG4gKiAgICAgY29udGVudCBwYXJzZXIgcmVzdWx0cywgZGlzY2FyZGluZyB0aGUgc2VwYXJhdG9yIHBhcnNlciByZXN1bHRzLlxuICovXG5leHBvcnQgY29uc3Qgc2VwYnkxID0gKHAsIHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignc2VwYnkxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdzZXBieTEnLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnc2VwYnkxJywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGxldCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG5cbiAgICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHNjdHhcbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShzY3R4LCBoYXNNID8gbWVycm9yIDogc3Jlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChzcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY29udGV4dClcbiAgICBjb250ZXh0ID0gcGN0eFxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgaWYgKGNvbnRleHQuaW5kZXggPT09IGluZGV4KSB0aHJvdyBuZXcgVHlwZUVycm9yKGxvb3BNZXNzYWdlKCdzZXBieTEnKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIHJldHVybiBva1JlcGx5KGNvbnRleHQsIHZhbHVlcywgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIHplcm8gb3IgbW9yZSB0aW1lcywgZXhlY3V0aW5nIGBzYCBpblxuICogYmV0d2VlbiBlYWNoIGFuZCBvcHRpb25hbGx5IGFmdGVyIHRoZSBsYXN0IG1hdGNoIG9mIGBwYC4gVGhlIHJlc3VsdHNcbiAqIG9mIGBwYCBhcmUgZ2F0aGVyZWQgaW50byBhbiBhcnJheSBhbmQgcmV0dXJuZWQuXG4gKlxuICogVGhpcyBwYXJzZXIgd2lsbCBub3QgZmFpbCBub24tZmF0YWxseSwgYXMgbWF0Y2hpbmcgYHBgIHplcm8gdGltZXMgaXNcbiAqIHZhbGlkLiBJdCBjYW4gZmFpbCBmYXRhbGx5IGlmIGVpdGhlciBgcGAgb3IgYHNgIGV2ZXIgZmFpbCBmYXRhbGx5LlxuICpcbiAqIElmIGBwYCBhbmQgYHNgIGJvdGggc3VjY2VlZCB3aXRob3V0IGNvbnN1bWluZyBjb250ZW50LCB0aGF0IHdvdWxkXG4gKiBjYXVzZSBhbiBpbmZpbml0ZSBsb29wLiBJbiB0aGlzIGNhc2UsIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcCBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggdGhlIGRlc2lyZWQgY29udGVudCB3aGVuXG4gKiAgICAgYXBwbGllZCB0byB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBBIHBhcnNlciB0aGF0IHdpbGwgbWF0Y2ggc2VwYXJhdG9ycyBiZXR3ZWVuIHRoZVxuICogICAgIGNodW5rcyBvZiBjb250ZW50LlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZXN1bHRzIGluIGFuIGFycmF5IG9mIGFsbCBvZiB0aGVcbiAqICAgICBjb250ZW50IHBhcnNlciByZXN1bHRzLCBkaXNjYXJkaW5nIHRoZSBzZXBhcmF0b3IgcGFyc2VyIHJlc3VsdHMuXG4gKi9cbmV4cG9ydCBjb25zdCBlbmRieSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZGJ5JywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdlbmRieScsIHMsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlbmRieScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHJldHVybiBva1JlcGx5KHBjdHgsIFtdKVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kYnknKSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICB9XG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoeyAuLi5jb250ZXh0LCBpbmRleCB9KVxuICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICB9XG4gIHJldHVybiBva1JlcGx5KHNjdHgsIHZhbHVlcylcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBleGVjdXRlcyBgcGAgb25lIG9yIG1vcmUgdGltZXMsIGV4ZWN1dGluZyBgc2AgaW5cbiAqIGJldHdlZW4gZWFjaCBhbmQgb3B0aW9uYWxseSBhZnRlciB0aGUgbGFzdCBtYXRjaCBvZiBgcGAuIFRoZSByZXN1bHRzXG4gKiBvZiBgcGAgYXJlIGdhdGhlcmVkIGludG8gYW4gYXJyYXkgYW5kIHJldHVybmVkLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgbm90IGZhaWwgaWYgYHBgIGRvZXNuJ3Qgc3VjY2VlZCBhdCBsZWFzdCBvbmNlLiBJdFxuICogd2lsbCBmYWlsIGZhdGFsbHkgaWYgZWl0aGVyIGBwYCBvciBgc2AgZXZlciBmYWlsIGZhdGFsbHkuXG4gKlxuICogSWYgYHBgIGFuZCBgc2AgYm90aCBzdWNjZWVkIHdpdGhvdXQgY29uc3VtaW5nIGNvbnRlbnQsIHRoYXQgd291bGRcbiAqIGNhdXNlIGFuIGluZmluaXRlIGxvb3AuIEluIHRoaXMgY2FzZSwgYW4gZXhjZXB0aW9uIGlzIHRocm93biBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCB0aGUgZGVzaXJlZCBjb250ZW50IHdoZW5cbiAqICAgICBhcHBsaWVkIHRvIHRoZSBpbnB1dC5cbiAqIEBwYXJhbSB7UGFyc2VyfSBzIEEgcGFyc2VyIHRoYXQgd2lsbCBtYXRjaCBzZXBhcmF0b3JzIGJldHdlZW4gdGhlXG4gKiAgICAgY2h1bmtzIG9mIGNvbnRlbnQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlc3VsdHMgaW4gYW4gYXJyYXkgb2YgYWxsIG9mIHRoZVxuICogICAgIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMsIGRpc2NhcmRpbmcgdGhlIHNlcGFyYXRvciBwYXJzZXIgcmVzdWx0cy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuZGJ5MSA9IChwLCBzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2VuZGJ5MScsIHAsIGFyZ1BhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignZW5kYnkxJywgcywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2VuZGJ5MScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBsZXQgaW5kZXggPSBjdHguaW5kZXhcbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBsZXQgY29udGV4dCA9IHBjdHhcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuXG4gICAgY29uc3QgW3NjdHgsIHNyZXNdID0gcyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBzY3R4XG4gICAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoc2N0eCwgaGFzTSA/IG1lcnJvciA6IHNyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoc3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIGlmIChjb250ZXh0LmluZGV4ID09PSBpbmRleCkgdGhyb3cgbmV3IFR5cGVFcnJvcihsb29wTWVzc2FnZSgnZW5kYnkxJykpXG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICBjb25zdCBbc2N0eCwgc3Jlc10gPSBzKHsgLi4uY29udGV4dCwgaW5kZXggfSlcbiAgaWYgKHNyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgIHJldHVybiBmYXRhbFJlcGx5KHNjdHgsIGhhc00gPyBtZXJyb3IgOiBzcmVzLmVycm9ycylcbiAgfVxuICByZXR1cm4gb2tSZXBseShzY3R4LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgdGhlIHN1cHBsaWVkIHBhcnNlciBgbmAgdGltZXMsIGNvbGxlY3RpbmcgdGhlXG4gKiBzdWNjZXNzZnVsIHJlc3VsdHMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYWZ0ZXIgYW55IGlucHV0IGhhcyBiZWVuIGNvbnN1bWVkIGJ5IGEgcHJpb3IgZXhlY3V0aW9uXG4gKiBvZiBgcGAsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIEEgcGFyc2VyIHRvIGV4ZWN1dGUgbXVsdGlwbGUgdGltZXMuXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIHRpbWVzIHRvIGV4ZWN1dGUgdGhlIHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgYHBgIGBuYCB0aW1lcyBhbmQgcmVzdWx0cyBpblxuICogICAgIGFuIGFycmF5IG9mIGFsbCBvZiB0aGUgc3VjY2Vzc2Z1bCByZXN1bHRzIG9mIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IGNvdW50ID0gKHAsIG4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignY291bnQnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2NvdW50JywgbiwgYXJnTnVtRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NvdW50JywgbSwgYXJnU3RyRm9ybWF0dGVyKDMsIHRydWUpKVxuXG4gIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gIGNvbnN0IHZhbHVlcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gY3R4XG5cbiAgZm9yIChjb25zdCBfIG9mIHJhbmdlKG4pKSB7XG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbCB8fCBwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gZXhwZWN0ZWQobSkgOiBwcmVzLmVycm9ycylcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHdoaWNoIGV4ZWN1dGVzIGl0cyBzdGFydCwgY29udGVudCwgYW5kIGVuZCBwYXJzZXJzIGluIG9yZGVyXG4gKiBhbmQgcmVzdWx0cyBpbiB0aGUgcmVzdWx0IG9mIGl0cyBjb250ZW50IHBhcnNlci5cbiAqXG4gKiBJZiBlaXRoZXIgYHBgIG9yIGBlYCBmYWlscyBhZnRlciBhIHByaW9yIHBhcnNlciBoYXMgY29uc3VtZWRcbiAqIGlucHV0LCB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcyBUaGUgZmlyc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGxhc3QgcGFyc2VyIHRvIGFwcGx5LlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIHNlY29uZCBwYXJzZXIgdG8gYXBwbHkgYW5kIHdob3NlIHJlc3VsdCBiZWNvbWVzXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGUgbmV3IHBhcnNlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIGFwcGxpZXMgaXRzIHBhcnNlcnMgaW4gdGhlIGNvcnJlY3RcbiAqICAgICBvcmRlciBhbmQgdGhlbiByZXN1bHRzIGluIHRoZSByZXN1bHQgb2YgaXRzIGNvbnRlbnQgcGFyc2VyLlxuICovXG5leHBvcnQgY29uc3QgYmV0d2VlbiA9IChzLCBlLCBwLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBzLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBlLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2JldHdlZW4nLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnYmV0d2VlbicsIG0sIGFyZ1N0ckZvcm1hdHRlcig0LCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuXG4gIGNvbnN0IFtzY3R4LCBzcmVzXSA9IHMoY3R4KVxuICBpZiAoc3Jlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHNyZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4oc2N0eCwgaGFzTSA/IGV4cGVjdGVkKG0pIDogc3Jlcy5lcnJvcnMpXG4gIH1cblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKHNjdHgpXG4gIGNvbnN0IGVycm9ycyA9IGhhc01cbiAgICA/IGV4cGVjdGVkKG0pXG4gICAgOiBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2Uoc3Jlcy5lcnJvcnMsIHByZXMuZXJyb3JzKSA6IFtdXG4gIGlmIChwcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4ocHJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IHBjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gIH1cblxuICBjb25zdCBbZWN0eCwgZXJlc10gPSBlKHBjdHgpXG4gIGlmIChlcmVzLnN0YXR1cyAhPT0gT2spIHtcbiAgICBjb25zdCBmbiA9IHJlcGx5Rm4oZXJlcy5zdGF0dXMgPT09IEZhdGFsIHx8IGVjdHguaW5kZXggIT09IGluZGV4KVxuICAgIHJldHVybiBmbihlY3R4LCBoYXNNID8gZXJyb3JzIDogbWVyZ2UoZXJyb3JzLCBlcmVzLmVycm9ycykpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoZWN0eCwgcHJlcy52YWx1ZSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggZXhlY3V0ZXMgYSBjb250ZW50IHBhcnNlciB6ZXJvIG9yIG1vcmUgdGltZXMgdW50aWwgYW5cbiAqIGVuZCBwYXJzZXIgaXMgc3VjY2Vzc2Z1bC4gVGhpcyBwYXJzZXIgcmVzdWx0cyBpbiBhbiBhcnJheSBvZiBhbGwgb2ZcbiAqIHRoZSBzdWNjZXNzZnVsIGNvbnRlbnQgcGFyc2VyIHJlc3VsdHMuIFRoZSBlbmQgcGFyc2VyIGlzIGV4ZWN1dGVkXG4gKiAqZmlyc3QqLCBzbyB0aGUgcmVzdWx0cyBvZiB0aGUgdHdvIHBhcnNlcnMgd2lsbCBub3Qgb3ZlcmxhcC5cbiAqXG4gKiBJZiBgcGAgZmFpbHMgYmVmb3JlIGBlYCBzdWNjZWVkcyBidXQgYWZ0ZXIgcHJpb3IgZXhlY3V0aW9ucyBvZiBgcGBcbiAqIGhhdmUgY29uc3VtZWQgaW5wdXQsIHRoaXMgcGFyc2VyIHdpbGwgZmFpbCBmYXRhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlci4gSXRzIHJlc3VsdHMgYXJlIHB1c2hlZCBpbnRvIGFuXG4gKiAgICAgYXJyYXkgYW5kIGJlY29tZSB0aGUgcmV0dXJuZWQgcGFyc2VyJ3MgcmVzdWx0LlxuICogQHBhcmFtIHtQYXJzZXJ9IGUgVGhlIGVuZCBwYXJzZXIuIFBhcnNpbmcgZW5kcyB3aGVuIHRoaXMgcGFyc2VyXG4gKiAgICAgc3VjY2VlZHMuIEl0cyByZXN1bHQgaXMgZGlzY2FyZGVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBleGVjdXRlIGBwYCB6ZXJvIG9yIG1vcmUgdGltZXNcbiAqICAgICB1bnRpbCBgZWAgc3VjY2VlZHMuXG4gKi9cbmV4cG9ydCBjb25zdCB1bnRpbCA9IChwLCBlLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ3VudGlsJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCd1bnRpbCcsIGUsIGFyZ1BhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1bnRpbCcsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBpbmRleCA9IGN0eC5pbmRleFxuICBjb25zdCB2YWx1ZXMgPSBbXVxuICBsZXQgY29udGV4dCA9IGN0eFxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW2VjdHgsIGVyZXNdID0gZShjb250ZXh0KVxuICAgIGNvbnRleHQgPSBlY3R4XG4gICAgaWYgKGVyZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkoZWN0eCwgaGFzTSA/IG1lcnJvciA6IGVyZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAoZXJlcy5zdGF0dXMgPT09IE9rKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIHtcbiAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwY3R4LmluZGV4ICE9PSBpbmRleClcbiAgICAgIHJldHVybiBmbihwY3R4LCBoYXNNID8gbWVycm9yIDogbWVyZ2UocHJlcy5lcnJvcnMsIGVyZXMuZXJyb3JzKSlcbiAgICB9XG4gICAgdmFsdWVzLnB1c2gocHJlcy52YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZXMpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZXhlY3V0ZXMgaXRzIHBhcnNlcnMgaW4gc2VxdWVuY2UgYW5kIHBhc3NlcyB0aG9zZVxuICogcmVzdWx0cyB0byBhIGZ1bmN0aW9uIG9mIHRoZSBzYW1lIGFyaXR5IGFzIHRoZSBudW1iZXIgb2YgcGFyc2VycyB0b1xuICogZXhlY3V0ZS4gVGhlIHJldHVybiB2YWx1ZSBvZiB0aGF0IGZ1bmN0aW9uIGJlY29tZXMgdGhpcyBwYXJzZXInc1xuICogcmVzdWx0LlxuICpcbiAqIE5vdGUgdGhhdCwgdW5saWtlIGBzZXF1ZW5jZWAsIGBudWxsYCBwYXJzZXIgcmVzdWx0cyBhcmUgKm5vdCpcbiAqIGRpc2NhcmRlZC4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlIHNhbWUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcGFzc2VkXG4gKiB0byBgZm5gIG5vIG1hdHRlciB0aGUgcmVzdWx0cyBmcm9tIHRoZSBwYXJzZXJzLlxuICpcbiAqIElmIG9uZSBvZiB0aGUgcGFyc2VycyBmYWlscyBhZnRlciBwcmlvciBwYXJzZXJzIGhhdmUgY29uc3VtZWQgaW5wdXQsXG4gKiB0aGlzIHBhcnNlciB3aWxsIGZhaWwgZmF0YWxseS5cbiAqXG4gKiBUaGlzIHBhcnNlciBpcyBlcXVpdmFsZW50IHRvIHRoZSBhcHBsaWNhdGl2ZSBsaWZ0IG9wZXJhdGlvbiwgbGlmdGluZ1xuICogbXVsdGktcGFyYW1ldGVyIGZ1bmN0aW9ucyBpbnRvIHRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBJdCBhY3RzIGxpa2VcbiAqIGBsaWZ0QTJgIGlmIHR3byBwYXJzZXJzIGFyZSBwYXNzZWQgaW4sIGBsaWZ0QTNgIGlmIHRocmVlIGFyZSBwYXNzZWRcbiAqIGluLCBldGMuXG4gKlxuICogQHBhcmFtIHsuLi4oUGFyc2VyfGZ1bmN0aW9uKC4uLiopOip8c3RyaW5nKX0gYXJncyBBbiBhcnJheSBvZiBwYXJzZXJzXG4gKiAgICAgdG8gYmUgZXhlY3V0ZWQgb25lIGF0IGEgdGltZSwgaW4gb3JkZXIsIGZvbGxvd2VkIGJ5IGEgZnVuY3Rpb25cbiAqICAgICB3aGljaCB3aWxsIHJlY2VpdmUgYXMgcGFyYW1ldGVycyB0aGUgcmVzdWx0cyBvZiBlYWNoIHBhcnNlci4gSXRzXG4gKiAgICAgcmV0dXJuIHZhbHVlIHdpbGwgYmVjb21lIHRoZSByZXN1bHQgb2YgdGhpcyBwYXJzZXIuIEEgc2luZ2xlXG4gKiAgICAgZnVuY3Rpb24gbXVzdCBiZSBwcmVzZW50IGFuZCBpdCBtdXN0IGNvbWUgYWZ0ZXIgdGhlIHBhcnNlcnMuXG4gKiAgICAgT3B0aW9uYWxseSwgYSBzdHJpbmcgbWF5IGJlIHRoZSBsYXN0IGFyZ3VtZW50OyBpZiBpdCBpcyBwcmVzZW50LFxuICogICAgIGl0IHJlcGxhY2VzIHRoZSBkZWZhdWx0IGVycm9yIG1lc3NhZ2UgaW4gdGhlIGV2ZW50IHRoYXQgdGhlXG4gKiAgICAgcGFyc2VyIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIGV4ZWN1dGUgaXRzIHBhcnNlcnMgaW4gb3JkZXIsXG4gKiAgICAgZmVlZCB0aGUgcmVzdWx0cyB0byBpdHMgZnVuY3Rpb24sIGFuZCByZXN1bHQgaW4gdGhlIGZ1bmN0aW9uJ3NcbiAqICAgICByZXR1cm4gdmFsdWUuXG4gKi9cbmV4cG9ydCBjb25zdCBwaXBlID0gKC4uLmFyZ3MpID0+IHtcbiAgY29uc3QgcHMgPSBhcmdzLnNsaWNlKClcbiAgY29uc3QgbSA9IHR5cGVvZiBhcmdzW2FyZ3MubGVuZ3RoIC0gMV0gPT09ICdzdHJpbmcnID8gcHMucG9wKCkgOiBudWxsXG4gIGNvbnN0IGZuID0gcHMucG9wKClcblxuICByZXR1cm4gcGFyc2VyKGN0eCA9PiB7XG4gICAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gICAgQVNTRVJUICYmIHBzLmZvckVhY2goKHAsIGkpID0+IGFzc2VydFBhcnNlcihcbiAgICAgICdwaXBlJywgcCwgYXJnUGFyRm9ybWF0dGVyKGkgKyAxLCB0cnVlKSxcbiAgICApKVxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbigncGlwZScsIGZuLCBhcmdGbkZvcm1hdHRlcihwcy5sZW5ndGggKyAxLCB0cnVlKSlcblxuICAgIGNvbnN0IGluZGV4ID0gY3R4LmluZGV4XG4gICAgY29uc3QgdmFsdWVzID0gW11cbiAgICBsZXQgY29udGV4dCA9IGN0eFxuICAgIGxldCBlcnJvcnMgPSBoYXNNID8gZXhwZWN0ZWQobSkgOiBbXVxuXG4gICAgZm9yIChjb25zdCBwIG9mIHBzKSB7XG4gICAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgICBjb250ZXh0ID0gcGN0eFxuICAgICAgaWYgKCFoYXNNKSBlcnJvcnMgPSBwcmVzLmVycm9ycz8ubGVuZ3RoID8gbWVyZ2UoZXJyb3JzLCBwcmVzLmVycm9ycykgOiBbXVxuXG4gICAgICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwgfHwgcGN0eC5pbmRleCAhPT0gaW5kZXgpXG4gICAgICAgIHJldHVybiBmbihwY3R4LCBlcnJvcnMpXG4gICAgICB9XG4gICAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gb2tSZXBseShjb250ZXh0LCBmbiguLi52YWx1ZXMpKVxuICB9KVxufVxuXG4vKipcbiAqIFByaXZhdGUgZm9ybWF0dGluZyBmdW5jdGlvbiBmb3IgYXNzZXJ0aW9uIG1lc3NhZ2VzIGFib3V0IG9wIHBhcnNlcnNcbiAqIG5vdCByZXR1cm5pbmcgZnVuY3Rpb25zXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG9yZCBUaGUgbnVtYmVyIG9mIHRoZSBvcCBwYXJzZXIgdGhhdCBmYWlscyB0byBwcm9kdWNlXG4gKiAgICAgYSBmdW5jdGlvblxuICogQHJldHVybnMge3N0cmluZ30gQW4gYXBwcm9wcmlhdGUgYXNzZXJ0aW9uIGZhaWx1cmUgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gb3BGb3JtYXR0ZXIob3JkKSB7XG4gIHJldHVybiB2YWx1ZSA9PiBgZXhwZWN0ZWQgJHtvcmR9IG9wIHBhcnNlciB0byByZXR1cm4gYSBmdW5jdGlvbjsgZm91bmQgJHtcbiAgICBzdHJpbmdpZnkodmFsdWUpXG4gIH1gXG59XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBwYXJzZXMgemVybyBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IGxlZnQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvcGAgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoZSBwYXJzZXIgZG9lcyBub3QgZmFpbCB1bmxlc3Mgb25lIG9mIGl0cyB0d28gcGFyc2VycyBmYWlscyBmYXRhbGx5LlxuICogSWYgdGhlcmUgYXJlIHplcm8gbWF0Y2hlcyBvZiBgcGAsIHRoZW4gdGhlIGRlZmF1bHQgdmFsdWUgYHhgIGJlY29tZXNcbiAqIHRoZSByZXN1bHQuIElmIHRoZXJlIGlzIG9uZSBtYXRjaCBvZiBgcGAgYnV0IG5vIG1hdGNoZXMgb2YgYG9gLCB0aGVuXG4gKiB0aGF0IHJlc3VsdCBvZiBgcGAgYmVjb21lcyB0aGUgb3ZlcmFsbCByZXN1bHQuXG4gKlxuICogSWYgYW55IHJlc3VsdCBvZiBgb2AgaXMgbm90IGEgZnVuY3Rpb24sIGFuIGVycm9yIHdpbGwgYmUgdGhyb3duLlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBwIFRoZSBjb250ZW50IHBhcnNlciB0byBtYXRjaCB6ZXJvIG9yIG1vcmUgdGltZXMuXG4gKiBAcGFyYW0ge1BhcnNlcn0gbyBUaGUgb3BlcmF0aW9uIHBhcnNlciB0byBtYXRjaCBpbiBiZXR3ZWVuIGVhY2hcbiAqICAgICBhcHBsaWNhdGlvbiBvZiBgcGAuXG4gKiBAcGFyYW0geyp9IHggVGhlIGRlZmF1bHQgcmVzdWx0IGlmIHRoZXJlIGFyZSBubyBtYXRjaGVzIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGFzc29jID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcignbGFzc29jJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdsYXNzb2MnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGFzc29jJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAnbGFzc29jJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyBvbmUgb3IgbW9yZSBhcHBsaWNhdGlvbnMgb2YgYHBgLCBlYWNoIHNlcGFyYXRlZFxuICogYnkgYG9gLiBJdCByZXN1bHRzIGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieSBsZWZ0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb2AgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgbGVmdCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgbGFzc29jMSA9IChwLCBvLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xhc3NvYzEnLCBwLCBhcmdQYXJGb3JtYXR0ZXIoMSwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBhc3NlcnRQYXJzZXIoJ2xhc3NvYzEnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGFzc29jMScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBtZXJyb3IgPSBleHBlY3RlZChtKVxuXG4gIGNvbnN0IFtwY3R4LCBwcmVzXSA9IHAoY3R4KVxuICBpZiAocHJlcy5zdGF0dXMgIT09IE9rKSB7XG4gICAgY29uc3QgZm4gPSByZXBseUZuKHByZXMuc3RhdHVzID09PSBGYXRhbClcbiAgICByZXR1cm4gZm4ocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICB9XG5cbiAgY29uc3QgdmFsdWVzID0gW3ByZXMudmFsdWVdXG4gIGNvbnN0IG9wcyA9IFtdXG4gIGxldCBjb250ZXh0ID0gcGN0eFxuICBsZXQgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gIGxldCBpID0gMFxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgY29uc3QgW29jdHgsIG9yZXNdID0gbyhjb250ZXh0KVxuICAgIGNvbnRleHQgPSBvY3R4XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkob2N0eCwgaGFzTSA/IG1lcnJvciA6IG9yZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAob3Jlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGNvbnRleHQpXG4gICAgY29udGV4dCA9IHBjdHhcbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhdGFsKSB7XG4gICAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gICAgfVxuICAgIGlmIChwcmVzLnN0YXR1cyA9PT0gRmFpbCkgYnJlYWtcblxuICAgIEFTU0VSVCAmJiBhc3NlcnRGdW5jdGlvbihcbiAgICAgICdsYXNzb2MxJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbMF1cbiAgZm9yIChjb25zdCBpIG9mIHJhbmdlKG9wcy5sZW5ndGgpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWUsIHZhbHVlc1tpICsgMV0pXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHBhcnNlcyB6ZXJvIG9yIG1vcmUgYXBwbGljYXRpb25zIG9mIGBwYCwgZWFjaCBzZXBhcmF0ZWRcbiAqIGJ5IGBvYC4gSXQgcmVzdWx0cyBpbiB0aGUgdmFsdWUgb2J0YWluZWQgYnkgcmlnaHQgYXNzb2NpYXRpdmVcbiAqIGFwcGxpY2F0aW9uIG9mIHRoZSBmdW5jdGlvbnMgdGhhdCBhcmUgdGhlIGBvYCByZXN1bHRzIHRvIHRoZSByZXN1bHRzXG4gKiBvZiBgcGAuXG4gKlxuICogVGhlIHBhcnNlciBkb2VzIG5vdCBmYWlsIHVubGVzcyBvbmUgb2YgaXRzIHR3byBwYXJzZXJzIGZhaWxzIGZhdGFsbHkuXG4gKiBJZiB0aGVyZSBhcmUgemVybyBtYXRjaGVzIG9mIGBwYCwgdGhlbiB0aGUgZGVmYXVsdCB2YWx1ZSBgeGAgYmVjb21lc1xuICogdGhlIHJlc3VsdC4gSWYgdGhlcmUgaXMgb25lIG1hdGNoIG9mIGBwYCBidXQgbm8gbWF0Y2hlcyBvZiBgb2AsIHRoZW5cbiAqIHRoYXQgcmVzdWx0IG9mIGBwYCBiZWNvbWVzIHRoZSBvdmVyYWxsIHJlc3VsdC5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgZGVmYXVsdCByZXN1bHQgaWYgdGhlcmUgYXJlIG5vIG1hdGNoZXMgb2YgYHBgLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgd2hpY2ggd2lsbCBtYXRjaCB6ZXJvIG9yIG1vcmUgb2NjdXJlbmNlc1xuICogICAgIG9mIGBwYCBzZXBhcmF0ZWQgYnkgYG9gIGFuZCByZXN1bHQgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5XG4gKiAgICAgYXBwbHlpbmcgdGhlIGZ1bmN0aW9ucyBmcm9tIGBvYCByaWdodCBhc3NvY2l0aXZlbHkgdG8gdGhlIHZhbHVlc1xuICogICAgIHRoYXQgcmVzdWx0IGZyb20gYHBgLlxuICovXG5leHBvcnQgY29uc3QgcmFzc29jID0gKHAsIG8sIHgsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFBhcnNlcigncmFzc29jJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MnLCBvLCBhcmdQYXJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmFzc29jJywgbSwgYXJnU3RyRm9ybWF0dGVyKDQsIHRydWUpKVxuXG4gIGNvbnN0IG1lcnJvciA9IGV4cGVjdGVkKG0pXG5cbiAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjdHgpXG4gIGlmIChwcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICByZXR1cm4gZmF0YWxSZXBseShwY3R4LCBoYXNNID8gbWVycm9yIDogcHJlcy5lcnJvcnMpXG4gIH1cbiAgaWYgKHByZXMuc3RhdHVzID09PSBGYWlsKSByZXR1cm4gb2tSZXBseShwY3R4LCB4KVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAncmFzc29jJywgb3Jlcy52YWx1ZSwgb3BGb3JtYXR0ZXIod29yZGluYWwoaSArIDEpKSxcbiAgICApXG5cbiAgICBvcHMucHVzaChvcmVzLnZhbHVlKVxuICAgIHZhbHVlcy5wdXNoKHByZXMudmFsdWUpXG4gICAgaW5kZXggPSBjb250ZXh0LmluZGV4XG4gICAgaSsrXG4gIH1cblxuICBsZXQgdmFsdWUgPSB2YWx1ZXNbdmFsdWVzLmxlbmd0aCAtIDFdXG4gIGZvciAoY29uc3QgaSBvZiByYW5nZShvcHMubGVuZ3RoIC0gMSwgLTEpKSB7XG4gICAgdmFsdWUgPSBvcHNbaV0odmFsdWVzW2ldLCB2YWx1ZSlcbiAgfVxuICByZXR1cm4gb2tSZXBseShjb250ZXh0LCB2YWx1ZSwgaW5kZXgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcGFyc2VzIG9uZSBvciBtb3JlIGFwcGxpY2F0aW9ucyBvZiBgcGAsIGVhY2ggc2VwYXJhdGVkXG4gKiBieSBgb2AuIEl0IHJlc3VsdHMgaW4gdGhlIHZhbHVlIG9idGFpbmVkIGJ5IHJpZ2h0IGFzc29jaWF0aXZlXG4gKiBhcHBsaWNhdGlvbiBvZiB0aGUgZnVuY3Rpb25zIHRoYXQgYXJlIHRoZSBgb2AgcmVzdWx0cyB0byB0aGUgcmVzdWx0c1xuICogb2YgYHBgLlxuICpcbiAqIFRoaXMgcGFyc2VyIHdpbGwgZmFpbCBub24tZmF0YWxseSBpZiBgcGAgZG9lc24ndCBzdWNjZWVkIGF0IGxlYXN0XG4gKiBvbmNlLiBPdGhlcndpc2UgaXQgY2FuIG9ubHkgZmFpbCBmYXRhbGx5IGlmIGBwYCBvciBgb2AgZmFpbHMgZmF0YWxseS5cbiAqXG4gKiBJZiBhbnkgcmVzdWx0IG9mIGBvYCBpcyBub3QgYSBmdW5jdGlvbiwgYW4gZXJyb3Igd2lsbCBiZSB0aHJvd24uXG4gKlxuICogQHBhcmFtIHtQYXJzZXJ9IHAgVGhlIGNvbnRlbnQgcGFyc2VyIHRvIG1hdGNoIHplcm8gb3IgbW9yZSB0aW1lcy5cbiAqIEBwYXJhbSB7UGFyc2VyfSBvIFRoZSBvcGVyYXRpb24gcGFyc2VyIHRvIG1hdGNoIGluIGJldHdlZW4gZWFjaFxuICogICAgIGFwcGxpY2F0aW9uIG9mIGBwYC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHdoaWNoIHdpbGwgbWF0Y2ggemVybyBvciBtb3JlIG9jY3VyZW5jZXNcbiAqICAgICBvZiBgcGAgc2VwYXJhdGVkIGJ5IGBvYCBhbmQgcmVzdWx0IGluIHRoZSB2YWx1ZSBvYnRhaW5lZCBieVxuICogICAgIGFwcGx5aW5nIHRoZSBmdW5jdGlvbnMgZnJvbSBgb2AgcmlnaHQgYXNzb2NpdGl2ZWx5IHRvIHRoZSB2YWx1ZXNcbiAqICAgICB0aGF0IHJlc3VsdCBmcm9tIGBwYC5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhc3NvYzEgPSAocCwgbywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MxJywgcCwgYXJnUGFyRm9ybWF0dGVyKDEsIHRydWUpKVxuICBBU1NFUlQgJiYgYXNzZXJ0UGFyc2VyKCdyYXNzb2MxJywgbywgYXJnUGFyRm9ybWF0dGVyKDIsIHRydWUpKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3Jhc3NvYzEnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMywgdHJ1ZSkpXG5cbiAgY29uc3QgbWVycm9yID0gZXhwZWN0ZWQobSlcblxuICBjb25zdCBbcGN0eCwgcHJlc10gPSBwKGN0eClcbiAgaWYgKHByZXMuc3RhdHVzICE9PSBPaykge1xuICAgIGNvbnN0IGZuID0gcmVwbHlGbihwcmVzLnN0YXR1cyA9PT0gRmF0YWwpXG4gICAgcmV0dXJuIGZuKHBjdHgsIGhhc00gPyBtZXJyb3IgOiBwcmVzLmVycm9ycylcbiAgfVxuXG4gIGNvbnN0IHZhbHVlcyA9IFtwcmVzLnZhbHVlXVxuICBjb25zdCBvcHMgPSBbXVxuICBsZXQgY29udGV4dCA9IHBjdHhcbiAgbGV0IGluZGV4ID0gY29udGV4dC5pbmRleFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGNvbnN0IFtvY3R4LCBvcmVzXSA9IG8oY29udGV4dClcbiAgICBjb250ZXh0ID0gb2N0eFxuICAgIGlmIChvcmVzLnN0YXR1cyA9PT0gRmF0YWwpIHtcbiAgICAgIHJldHVybiBmYXRhbFJlcGx5KG9jdHgsIGhhc00gPyBtZXJyb3IgOiBvcmVzLmVycm9ycylcbiAgICB9XG4gICAgaWYgKG9yZXMuc3RhdHVzID09PSBGYWlsKSBicmVha1xuXG4gICAgY29uc3QgW3BjdHgsIHByZXNdID0gcChjb250ZXh0KVxuICAgIGNvbnRleHQgPSBwY3R4XG4gICAgaWYgKHByZXMuc3RhdHVzID09PSBGYXRhbCkge1xuICAgICAgcmV0dXJuIGZhdGFsUmVwbHkocGN0eCwgaGFzTSA/IG1lcnJvciA6IHByZXMuZXJyb3JzKVxuICAgIH1cbiAgICBpZiAocHJlcy5zdGF0dXMgPT09IEZhaWwpIGJyZWFrXG5cbiAgICBBU1NFUlQgJiYgYXNzZXJ0RnVuY3Rpb24oXG4gICAgICAncmFzc29jMScsIG9yZXMudmFsdWUsIG9wRm9ybWF0dGVyKHdvcmRpbmFsKGkgKyAxKSksXG4gICAgKVxuXG4gICAgb3BzLnB1c2gob3Jlcy52YWx1ZSlcbiAgICB2YWx1ZXMucHVzaChwcmVzLnZhbHVlKVxuICAgIGluZGV4ID0gY29udGV4dC5pbmRleFxuICAgIGkrK1xuICB9XG5cbiAgbGV0IHZhbHVlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXVxuICBmb3IgKGNvbnN0IGkgb2YgcmFuZ2Uob3BzLmxlbmd0aCAtIDEsIC0xKSkge1xuICAgIHZhbHVlID0gb3BzW2ldKHZhbHVlc1tpXSwgdmFsdWUpXG4gIH1cbiAgcmV0dXJuIG9rUmVwbHkoY29udGV4dCwgdmFsdWUsIGluZGV4KVxufSlcbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZvcm1hdEVycm9ycyB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBkdXAsIHN0cmluZ1RvVmlldywgdHJhY2sgfSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2Vycm9yLmpzJykuRXJyb3JMaXN0fSBFcnJvckxpc3QgKi9cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGlucHV0IHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIG9uZSBvZiB0aGUgdHlwZXNcbiAqIG9mIHR5cGVkIGFycmF5cy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybnMge2Jvb2xlYW59IFdoZXRoZXIgb3Igbm90IGB2YWx1ZWAgaXMgYSB0eXBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gaXNUeXBlZEFycmF5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIFVpbnQ4Q2xhbXBlZEFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBVaW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgVWludDMyQXJyYXlcbiAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIEludDhBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MTZBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgSW50MzJBcnJheVxuICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRmxvYXQzMkFycmF5XG4gICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcbn1cblxuLyoqXG4gKiBBIHN0cmluZyByZXByZXNlbnRpbmcgdGhlIHN0YXR1cyBvZiB0aGUgbGFzdCBwYXJzaW5nIG9wZXJhdGlvbi5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBTdGF0dXMgPSB7XG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSB3YXMgc3VjY2Vzc2Z1bC4gKi9cbiAgT2s6ICdvaycsXG4gIC8qKiBJbmRpY2F0ZXMgdGhhdCB0aGUgbGFzdCBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuICovXG4gIEZhaWw6ICdmYWlsJyxcbiAgLyoqIEluZGljYXRlcyB0aGF0IHRoZSBsYXN0IHBhcnNlIGZhaWxlZCBhbmQgY29uc3VtZWQgaW5wdXQuICovXG4gIEZhdGFsOiAnZmF0YWwnLFxufVxuXG4vKipcbiAqIFRoZSBjb250ZXh0IG9mIGEgcGFyc2VyLiBUaGlzIG9iamVjdCBjb250YWlucyB0aGUgaW5wdXQgdGV4dCBhbmQgYVxuICogcG9pbnRlciB0byB0aGUgY3VycmVudCBsb2NhdGlvbiB3aXRoaW4gaXQuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gQ29udGV4dFxuICogQHByb3BlcnR5IHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gaW5kZXggVGhlIGluZGV4IHdpdGhpbiB0aGUgZGF0YSB2aWV3IHdoZXJlIHRoZVxuICogICAgIG5leHQgcGFyc2luZyBvcGVyYXRpb24gd2lsbCB0YWtlIHBsYWNlIChvciB3aGVyZSB0aGUgbGFzdCBvbmVcbiAqICAgICByZXN1bHRlZCBpbiBhbiBlcnJvcikuXG4gKi9cblxuLyoqXG4gKiBBIHJlc3VsdCBmcm9tIGEgcGFyc2VyIGFwcGxpY2F0aW9uLCBzdWNjZXNzZnVsIG9yIG5vdC4gVGhpcyBpc1xuICogZXNzZW50aWFsbHkgYSB1bmlvbiBvZiBzdWNjZXNzZnVsIHZhbHVlIGFuZCBmYWlsdXJlIGVycm9yLCB3aXRoIHRoZVxuICogYHN0YXR1c2AgcHJvcGVydHkgdG8gZGV0ZXJtaW5lIHdoaWNoIGlzIHZhbGlkLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IFJlc3VsdFxuICogQHByb3BlcnR5IHtTdGF0dXN9IHN0YXR1cyBUaGUgc3RhdHVzIG9mIHRoZSBsYXN0IGF0dGVtcHRlZCBwYXJzZSBvZlxuICogICAgIHRoZSBpbnB1dCB0ZXh0LlxuICogQHByb3BlcnR5IHsqfSB2YWx1ZSBUaGUgdmFsdWUgb2YgYSBzdWNjZXNzZnVsIHBhcnNlLlxuICogQHByb3BlcnR5IHtFcnJvckxpc3R9IGVycm9ycyBBIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWRcbiAqICAgICBkdXJpbmcgYW4gdW5zdWNjZXNzZnVsIHBhcnNlLlxuICovXG5cbi8qKlxuICogVGhlIG9iamVjdCB0aGF0IGlzIHJldHVybmVkIGZyb20gYSBwYXJzZXIgYXBwbGljYXRpb24sIGluY2x1ZGluZyB0aGVcbiAqIGNvbnRleHQgYW5kIHRoZSByZXN1bHQuXG4gKiBAdHlwZWRlZiB7W0NvbnRleHQsIFJlc3VsdF19IFJlcGx5XG4gKi9cblxuLyoqXG4gKiBBIHR5cGVkIGFycmF5IG9mIGFueSBidWlsdC1pbiBraW5kLlxuICpcbiAqIEB0eXBlZGVmXG4gKiAgIHsoVWludDhBcnJheXxVaW50OENsYW1wZWRBcnJheXxVaW50MTZBcnJheXxVaW50MzJBcnJheXxJbnQ4QXJyYXl8XG4gKiAgIEludDE2QXJyYXl8SW50MzJBcnJheXxGbG9hdDMyQXJyYXl8RmxvYXQ2NEFycmF5KX0gVHlwZWRBcnJheVxuICovXG5cbi8qKlxuICogSW5wdXQgdGV4dCB0byBiZSBwYXJzZWQuXG4gKlxuICogQHR5cGVkZWYgeyhzdHJpbmd8QXJyYXlCdWZmZXJ8VHlwZWRBcnJheXxEYXRhVmlldyl9IElucHV0XG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3LCBlbXB0eSBwYXJzZXIgY29udGV4dC4gVGhpcyBpcyBub3QgZXhwb3J0ZWQgYmVjYXVzZSBhXG4gKiBuZXcgY29udGV4dCBpcyBvbmx5IGNyZWF0ZWQgYmVmb3JlIHBhcnNpbmcsIGluIHRoZSBgcGFyc2VgIGZ1bmN0aW9uLlxuICogQW55IGZ1cnRoZXIgY29udGV4dHMgYXJlIGRlcml2ZWQgZnJvbSB0aGUgY29udGV4dCB1c2luZyB7QGxpbmsgb2t9LFxuICoge0BsaW5rIGVycm9yfSwgb3Ige0BsaW5rIGZhdGFsfS5cbiAqXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtDb250ZXh0fSBBbiBlbXB0eSBwYXJzZXIgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbnRleHQoaW5wdXQpIHtcbiAgY29uc3QgbWVzc2FnZSA9ICdQYXJzZXIgaW5wdXQgbXVzdCBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSwgYW4gYXJyYXkgJ1xuICAgICsgYGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXc7IHBhcnNlciBpbnB1dCB3YXMgJHt0eXBlb2YgaW5wdXR9YFxuXG4gIGNvbnN0IHZpZXcgPSAoaW5wdXQgPT4ge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gc3RyaW5nVG9WaWV3KGlucHV0KVxuICAgIH1cbiAgICBpZiAoaXNUeXBlZEFycmF5KGlucHV0KSkge1xuICAgICAgcmV0dXJuIG5ldyBEYXRhVmlldyhpbnB1dC5idWZmZXIpXG4gICAgfVxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGFWaWV3KGlucHV0KVxuICAgIH1cbiAgICBpZiAoaW5wdXQgaW5zdGFuY2VvZiBEYXRhVmlldykge1xuICAgICAgcmV0dXJuIGlucHV0XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9KShpbnB1dClcblxuICByZXR1cm4ge1xuICAgIHZpZXcsXG4gICAgaW5kZXg6IDAsXG4gIH1cbn1cblxuLyoqXG4gKiBBIHBhcnNpbmcgZnVuY3Rpb24uIFRoaXMgaXMgc2ltcGx5IGEgZnVuY3Rpb24gdGhhdCB0YWtlcyBhIHBhcnNlclxuICogY29udGV4dCwgdXBkYXRlcyBpdCBzb21laG93IChnZW5lcmFsbHkgYnkgcmVhZGluZyBhIGNoYXJhY3RlciksIGFuZFxuICogcmV0dXJucyB0aGUgdXBkYXRlZCBjb250ZXh0LlxuICpcbiAqIEBjYWxsYmFjayBQYXJzZXJcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGJlZm9yZSB0aGUgcGFyc2VyIGlzIHJ1bi5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIHVwZGF0ZWQgY29udGV4dCBhZnRlciB0aGUgcGFyc2VyIGlzIGFwcGxpZWQgYW5kXG4gKiAgICAgdGhlIHJlc3VsdCBvZiB0aGF0IHBhcnNlciBhcHBsaWNhdGlvbi5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgYFBhcnNlcmAuIFRoaXMgZmFjdG9yeSBzaW1wbHkgdGFrZXMgYSBwYXJzZXIgZnVuY3Rpb25cbiAqIGFuZCByZXR1cm5zIHRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbjsgdGhlIHB1cnBvc2Ugb2YgdGhlIGZhY3RvcnkgaXNcbiAqIHRvIHRyYWNrIHBhcnNlcnMgdGhhdCBpdCBoYXMgY3JlYXRlZC5cbiAqXG4gKiBJZiBhc3NlcnRpb25zIGFyZSBlbmFibGVkLCB0aGlzIHdpbGwgbWVhbiB0aGF0IGFueSBwYXJzZXIgY29tYmluYXRvclxuICogd2lsbCBhc3NlcnQgdGhhdCB0aGUgcGFyc2VyIHRoYXQgaXMgcGFzc2VkIHRvIGl0IHdhcyBjcmVhdGVkIGJ5IHRoaXNcbiAqIGZhY3RvcnkgZnVuY3Rpb24uIEFueSBvdGhlciB3aWxsIGNhdXNlIGFuIGV4Y2VwdGlvbiB0byBiZSB0aHJvd24sXG4gKiBldmVuIGlmIGl0IGFjY2VwdHMgdGhlIHJpZ2h0IGtpbmQgb2YgYXJndW1lbnQgYW5kIHJldHVybnMgdGhlIHByb3BlclxuICogcmV0dXJuIHZhbHVlLiBJZiBhc3NlcnRpb25zIGFyZSBub3QgZW5hYmxlZCwgdGhpcyBjaGVjayB3aWxsIG5vdCBiZVxuICogZG9uZS5cbiAqXG4gKiBFdmVyeSBwYXJzZXIgaW4gdGhpcyBsaWJyYXJ5IGlzIGNyZWF0ZWQgd2l0aCBgbWFrZVBhcnNlcmAsIHNvIGFueSBvZlxuICogdGhvc2Ugb3IgYW55IHBhcnNlciBjb21wb3NlZCBmcm9tIHRob3NlIHdpbGwgd29yayBhdXRvbWF0aWNhbGx5LlxuICpcbiAqIEBwYXJhbSB7UGFyc2VyfSBmbiBBIHBhcnNlciBmdW5jdGlvbi5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IFRoZSBzYW1lIHBhcnNlciBmdW5jdGlvbi5cbiAqL1xuZXhwb3J0IGNvbnN0IHBhcnNlciA9IHRyYWNrKGZuID0+IGZuKVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIHN1Y2NlZWRlZC5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCBwcmlvciB0byB0aGUgcGFyc2VyIGJlaW5nIGFwcGxpZWQuXG4gKiBAcGFyYW0geyp9IFt2YWx1ZT1udWxsXSBUaGUgbmV3IHJlc3VsdCBvZiB0aGUgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBwYXJzZXJcbiAqICAgICB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgc3VjY2VlZGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb2tSZXBseShjdHgsIHZhbHVlID0gbnVsbCwgaW5kZXggPSBjdHguaW5kZXgpIHtcbiAgcmV0dXJuIFt7IC4uLmN0eCwgaW5kZXggfSwgeyBzdGF0dXM6IFN0YXR1cy5PaywgdmFsdWUgfV1cbn1cblxuLyoqXG4gKiBQcm9kdWNlcyBhIG5ldyByZXBseSBpbmRpY2F0aW5nIHRoYXQgYSBwYXJzZSBmYWlsZWQgd2l0aG91dCBjb25zdW1pbmdcbiAqIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzPVtdXSBUaGUgZXJyb3JzIGFzc29jaWF0ZWQgd2l0aCB0aGUgY29udGV4dFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIHdhcyBhcHBsaWVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFtpbmRleD1jdHguaW5kZXhdIFRoZSB1cGRhdGVkIGluZGV4IGFmdGVyIHRoZSBsYXRlc3RcbiAqICAgICBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UmVwbHl9IEEgbmV3IG9iamVjdCByZXByZXNlbnRpbmcgdGhlIGNvbnRleHQgYW5kIHJlc3VsdFxuICogICAgIGFmdGVyIHRoZSBsYXRlc3QgcGFyc2VyIGZhaWxlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWxSZXBseShjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhaWwsIGVycm9ycyB9XVxufVxuXG4vKipcbiAqIFByb2R1Y2VzIGEgbmV3IHJlcGx5IGluZGljYXRpbmcgdGhhdCBhIHBhcnNlIGZhaWxlZCB3aGlsZSBjb25zdW1pbmdcbiAqIGlucHV0LlxuICpcbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IHByaW9yIHRvIHRoZSBwYXJzZXIgYmVpbmcgYXBwbGllZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBbZXJyb3JzPVtdIFRoZSBlcnJvcnMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250ZXh0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgd2FzIGFwcGxpZWQuXG4gKiBAcGFyYW0ge251bWJlcn0gW2luZGV4PWN0eC5pbmRleF0gVGhlIHVwZGF0ZWQgaW5kZXggYWZ0ZXIgdGhlIGxhdGVzdFxuICogICAgIHBhcnNlciB3YXMgYXBwbGllZC5cbiAqIEByZXR1cm5zIHtSZXBseX0gQSBuZXcgb2JqZWN0IHJlcHJlc2VudGluZyB0aGUgY29udGV4dCBhbmQgcmVzdWx0XG4gKiAgICAgYWZ0ZXIgdGhlIGxhdGVzdCBwYXJzZXIgZmFpbGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZmF0YWxSZXBseShjdHgsIGVycm9ycyA9IFtdLCBpbmRleCA9IGN0eC5pbmRleCkge1xuICByZXR1cm4gW3sgLi4uY3R4LCBpbmRleCB9LCB7IHN0YXR1czogU3RhdHVzLkZhdGFsLCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBBcHBsaWVzIGEgcGFyc2VyIHRvIGlucHV0LiBUaGlzIGlucHV0IGNhbiBiZSBhIHN0cmluZywgYSB0eXBlZCBhcnJheSxcbiAqIGFuIGFycmF5IGJ1ZmZlciwgb3IgYSBkYXRhIHZpZXcuIFRoZSByZXR1cm4gdmFsdWUgaXMgdGhlIGZpbmFsIHBhcnNlclxuICogY29udGV4dCByZXR1cm5lZCBieSB0aGUgcGFyc2VyIGFmdGVyIGJlaW5nIHJ1bi5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHtSZXBseX0gVGhlIGZpbmFsIGNvbnRleHQgYWZ0ZXIgYWxsIHBhcnNlcnMgaGF2ZSBiZWVuXG4gKiAgICAgYXBwbGllZCBhbmQgdGhlIHJlc3VsdCBvZiB0aGUgZmluYWwgcGFyc2VyIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2UocGFyc2VyLCBpbnB1dCkge1xuICByZXR1cm4gcGFyc2VyKGNvbnRleHQoaW5wdXQpKVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0YXR1cyBvZiB0aGUgZ2l2ZW4gcmVwbHkuXG4gKlxuICogQHBhcmFtIHtSZXBseX0gcmVwbHkgVGhlIGNvbnRleHQvcmVzdWx0IHZhbHVlIHJldHVybmVkIGJ5IGBwYXJzZWAuXG4gKiBAcmV0dXJucyB7U3RhdHVzfSBUaGUgc3RhdHVzIG9mIHRoZSBnaXZlbiByZXBseS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0YXR1cyhyZXBseSkge1xuICByZXR1cm4gcmVwbHlbMV0uc3RhdHVzXG59XG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGFuIGludm9jYXRpb24gb2YgYHBhcnNlYCB3YXMgc3VjY2Vzc2Z1bC5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgY29udGV4dC9yZXN1bHQgdmFsdWUgcmV0dXJuZWQgYnkgYHBhcnNlYC5cbiAqIEByZXR1cm5zIHtib29sZWFufSBgdHJ1ZWAgaWYgdGhlIHBhcnNlciBzdWNjZWVkZWQgb3IgYGZhbHNlYCBpZiBpdFxuICogICAgIGRpZCBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQocmVwbHkpIHtcbiAgcmV0dXJuIHJlcGx5WzFdLnN0YXR1cyA9PT0gU3RhdHVzLk9rXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIHJlc3VsdCBmcm9tIHRoZSB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLiBJZiB0aGUgcGFyc2VyXG4gKiBkaWQgbm90IHN1Y2NlZWQsIHRoaXMgd2lsbCByZXR1cm4gYG51bGxgIGluc3RlYWQuXG4gKlxuICogTm90ZSB0aGF0IGBudWxsYCBpcyBhIHBvc3NpYmxlIHJlc3VsdCBmcm9tIHNvbWUgaW5kaXZpZHVhbCBwYXJzZXJzXG4gKiAoYHNraXBgLCBgbG9va0FoZWFkYCwgZXRjLikuIFRoZSBwcm9wZXIgd2F5IHRvIHRlbGwgaWYgYSBwYXJzZXJcbiAqIHN1Y2NlZWRlZCBpbiB0aGUgZmlyc3QgcGxhY2UgaXMgdG8gdXNlIGBzdWNjZWVkZWRgLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMgeyp9IFRoZSByZXN1bHRpbmcgdmFsdWUgZnJvbSB0aGUgcGFyc2UgaWYgaXQgd2FzIHN1Y2Nlc3NmdWwsXG4gKiAgICAgb3IgYG51bGxgIGlmIGl0IHdhcyBub3QuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdWNjZXNzKHJlcGx5KSB7XG4gIHJldHVybiBzdWNjZWVkZWQocmVwbHkpID8gcmVwbHlbMV0udmFsdWUgOiBudWxsXG59XG5cbi8qKlxuICogRXh0cmFjdHMgdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBzdHJpbmcgZnJvbSB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYW5cbiAqIHVuc3VjY2Vzc2Z1bCBpbnZvY2F0aW9uIG9mIGBwYXJzZWAuIElmIHRoZSBwYXJzZXIgd2FzIGFjdHVhbGx5XG4gKiBzdWNjZXNzZnVsLCB0aGlzIHdpbGwgcmV0dXJuIGBudWxsYCBpbnN0ZWFkLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHJlcGx5IFRoZSBjb250ZXh0L3Jlc3VsdCB2YWx1ZSByZXR1cm5lZCBieSBgcGFyc2VgLlxuICogQHJldHVybnMge3N0cmluZ30gQSBmb3JtYXR0ZWQgc3RyaW5nIGRldGFpbGluZyB0aGUgY2lyY3Vtc3RhbmNlcyBvZlxuICogICAgIHRoZSBwYXJzZXIgZmFpbHVyZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZhaWx1cmUocmVwbHkpIHtcbiAgcmV0dXJuIHN1Y2NlZWRlZChyZXBseSkgPyBudWxsIDogZm9ybWF0RXJyb3JzKHJlcGx5KVxufVxuXG4vKipcbiAqIEFwcGxpZXMgYSBwYXJzZXIgdG8gaW5wdXQuIFJldHVybnMgdGhlIHBhcnNlZCB2YWx1ZSBpZiB0aGUgcGFyc2VyXG4gKiBzdWNjZWVkcywgb3IgdGhyb3dzIGFuIGV4Y2VwdGlvbiB3aXRoIHRoZSBwYXJzZXIncyBlcnJvciBtZXNzYWdlIGlmXG4gKiBpdCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1BhcnNlcn0gcGFyc2VyIFRoZSBwYXJzZXIgdG8gYmUgYXBwbGllZCB0byB0aGUgaW5wdXQuIFRoaXNcbiAqICAgICBjYW4sIGFzIGFsd2F5cywgYmUgYSBjb21wb3NpdGlvbiBvZiBhbiBhcmJpdHJhcnkgbnVtYmVyIG9mXG4gKiAgICAgcGFyc2VycyBhbmQgY29tYmluYXRvcnMuXG4gKiBAcGFyYW0ge0lucHV0fSBpbnB1dCBUaGUgaW5wdXQgdGV4dC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgcmVzdWx0IGZyb20gdGhlIHBhcnNlciBhcHBsaWNhdGlvbiwgaWYgdGhlIHBhcnNlclxuICogICAgIHN1Y2NlZWRzLlxuICogQHRocm93cyB7RXJyb3J9IElmIHRoZSBwYXJzZXIgZmFpbHMuIFRoZSBlcnJvciBtZXNzYWdlIHdpbGwgYmUgYVxuICogICAgIGRldGFpbGVkIHJlY29yZCBvZiB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBydW4ocGFyc2VyLCBpbnB1dCkge1xuICBjb25zdCBbcmVwbHksIFtfLCByZXN1bHRdXSA9IGR1cChwYXJzZXIoY29udGV4dChpbnB1dCkpKVxuICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gU3RhdHVzLk9rKSB7XG4gICAgcmV0dXJuIHJlc3VsdC52YWx1ZVxuICB9XG4gIHRocm93IG5ldyBFcnJvcihmb3JtYXRFcnJvcnMocmVwbHkpKVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgY2hhckxlbmd0aCxcbiAgY29tbWFTZXBhcmF0ZSxcbiAgbmV4dENoYXJXaWR0aCxcbiAgdmlld1RvU3RyaW5nLFxufSBmcm9tICcuL3V0aWwnXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCcuL2NvcmUuanMnKS5Db250ZXh0fSBDb250ZXh0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlLmpzJykuUmVzdWx0fSBSZXN1bHQgKi9cblxuY29uc3QgdGFiID0gL1xcdC9ndVxuY29uc3QgemVyb1dpZHRoID0gLyg/OlxccHtNbn18XFxwe0NmfSkvZ3VcblxuLyoqXG4gKiBBIHN0cmluZyBkZWZpbmluZyB0aGUgdHlwZSBvZiBhbiBlcnJvci5cbiAqIEBlbnVtIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBFcnJvclR5cGUgPSB7XG4gIC8qKlxuICAgKiBFcnJvciB0eXBlIHJlcHJlc2VudGluZyBhbiBleHBlY3RlZCByZXN1bHQuIFByb2R1Y2VkIGJ5IHRoZSB2YXN0XG4gICAqIG1ham9yaXR5IG9mIHBhcnNlcnMuXG4gICAqL1xuICBFeHBlY3RlZDogJ2V4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgcmVzdWx0IHRoYXQgd2FzIG5vdCBleHBlY3RlZC4gVHlwaWNhbGx5XG4gICAqIHByb2R1Y2VkIGJ5IHBhcnNlcnMgc3VjaCBhcyBgdW5leHBlY3RlZGAgYW5kIGBub3RGb2xsb3dlZEJ5YC5cbiAgICovXG4gIFVuZXhwZWN0ZWQ6ICd1bmV4cGVjdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUeXBpY2FsbHkgcHJvZHVjZWRcbiAgICogYnkgcGFyc2VycyBzdWNoIGFzIGBmYWlsYCBhbmQgYGZhaWxGYXRhbGx5YC5cbiAgICovXG4gIEdlbmVyaWM6ICdnZW5lcmljJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGFuIGVycm9yIHdpdGhpbiBhbm90aGVyIGVycm9yLiBUaGlzIGlzXG4gICAqIGdlbmVyYWxseSB1c2VkIGZvciBhbiBlcnJvciB0aGF0IGNhdXNlZCBiYWNrdHJhY2tpbmcsIHdoZXJlIHRoZVxuICAgKiBwYXJlbnQgZXJyb3IgaXMgcmVwb3J0ZWQgYWZ0ZXIgYmFja3RyYWNraW5nLlxuICAgKi9cbiAgTmVzdGVkOiAnbmVzdGVkJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIGEgbmVzdGVkIGVycm9yIHdpdGggaXRzIG93biBzZXBhcmF0ZSBlcnJvclxuICAgKiBtZXNzYWdlLiBUaGlzIGlzIHByb2R1Y2VkIHNwZWNpZmljYWxseSBieSB0aGUgYGNvbXBvdW5kYCBwYXJzZXIuXG4gICAqL1xuICBDb21wb3VuZDogJ2NvbXBvdW5kJyxcbiAgLyoqXG4gICAqIEVycm9yIHR5cGUgcmVwcmVzZW50aW5nIHNvbWUgb3RoZXIga2luZCBvZiBlcnJvciBtZXNzYWdlIHRvIGJlXG4gICAqIGRpc3BsYXllZCBpbiBhIGN1c3RvbSBlcnJvciBmb3JtYXR0ZXIuXG4gICAqL1xuICBPdGhlcjogJ290aGVyJyxcbn1cblxuLyoqXG4gKiBBIGxpc3Qgb2YgZXJyb3JzLiBUaGlzIGNhbiBjb25zaXN0IG9mIGFueSBlcnJvciBtZXNzYWdlcyB0aGF0IGFwcGx5XG4gKiB0byBhIHBhcnRpY3VsYXIgaW5kZXggb3IgbmVzdGVkL2NvbXBvdW5kIGVycm9ycyB0aGF0IHBvaW50IGJhY2sgdG9cbiAqIHRoZSBzYW1lIGluZGV4IGJ1dCBhcHBseSB0byBhIGRpZmZlcmVudCBvbmUuXG4gKiBAdHlwZWRlZiB7KE5lc3RlZEVycm9yfENvbXBvdW5kRXJyb3J8TG9jYWxFcnJvcilbXX0gRXJyb3JMaXN0XG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgYXQgdGhlIGxvY2F0aW9uIHJlZmVycmVkIHRvIGJ5IHRoZSBjdXJyZW50XG4gKiBjb250ZXh0LiBUaGUgdHlwZSBpcyB1c2VkIHRvIGRldGVybWluZSB3aGVyZSB0aGUgbGFiZWwgc2hvdWxkIGJlXG4gKiBwb3NpdGlvbmVkIGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvY2FsRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGUgZXJyb3IuXG4gKi9cblxuLyoqXG4gKiBBbiBlcnJvciB0aGF0IGhhcHBlbnMgaW4gYSBkaWZmZXJlbnQgbG9jYXRpb24gdGhhbiB0aGUgb25lIHJlZmVycmVkXG4gKiB0byBieSB0aGUgY3VycmVudCBjb250ZXh0LiBUaGUgbW9zdCB0eXBpY2FsIHJlYXNvbiBmb3IgdGhpcyBoYXBwZW5pbmdcbiAqIGlzIGJhY2t0cmFja2luZzsgdGhlIGxvY2FsIGVycm9yIGNhbiB0cmFjayB0aGUgY3VycmVudFxuICogKHBvc3QtYmFja3RyYWNrKSBsb2NhdGlvbiB3aGlsZSB0aGUgbmVzdGVkIGVycm9yIHJldGFpbnMgaW5mb3JtdGlvblxuICogZnJvbSB0aGUgZXJyb3IgdGhhdCBjYXVzZWQgdGhlIGJhY2t0cmFja2luZyBpbiB0aGUgZmlyc3QgcGxhY2UuXG4gKlxuICogQHR5cGVkZWYge29iamVjdH0gTmVzdGVkRXJyb3JcbiAqIEBwcm9wZXJ0eSB7RXJyb3JUeXBlfSB0eXBlIFRoZSBlcnJvciB0eXBlLiBUaGlzIHdpbGwgYWx3YXlzIGJlXG4gKiAgICAgYEVycm9yVHlwZS5OZXN0ZWRgLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBBIG5lc3RlZCBlcnJvciB0aGF0IGhhcyBpdHMgb3duIGxhYmVsLiBUaGlzIGlzIHNpbXBseSBmb3IgcHJvZHVjaW5nXG4gKiBuaWNlciBlcnJvciBtZXNzYWdlczsgdGhpcyBlcnJvciBpcyB0eXBpY2FsbHkgb25seSBwcm9kdWNlZCBieSB0aGVcbiAqIGBiYWNrbGFiZWxgIHBhcnNlci5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBDb21wb3VuZEVycm9yXG4gKiBAcHJvcGVydHkge0Vycm9yVHlwZX0gdHlwZSBUaGUgZXJyb3IgdHlwZS4gVGhpcyB3aWxsIGFsd2F5cyBiZVxuICogICAgIGBFcnJvclR5cGUuQ29tcG91bmRgLlxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIFRoZSBtZXNzYWdlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGVycm9yLiBUaGlzXG4gKiAgICAgaXMgdHlwaWNhbGx5IHVzZWQgYXMgYSBzb3J0IG9mIGhlYWRlciBvdmVyIHRoZSBuZXN0ZWQgbWVzc2FnZXNcbiAqICAgICB1bmRlciB0aGlzIGNvbXBvdW5kIGVycm9yLlxuICogQHByb3BlcnR5IHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHRpbWUgdGhhdCB0aGUgb3JpZ2luYWxcbiAqICAgICBlcnJvciBvY2N1cnJlZC4gVGhpcyBjYW4gKGFuZCBwcm9iYWJseSB3aWxsKSBiZSBkaWZmZXJlbnQgZnJvbVxuICogICAgIHRoZSBjdXJyZW50IGNvbnRleHQuXG4gKiBAcHJvcGVydHkge0Vycm9yTGlzdH0gZXJyb3JzIEEgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBsb2NhdGlvbiBkZXJpdmVkIGZyb20gYGN0eGAuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGVycm9yIGxpc3QgY29udGFpbmluZyBvbmUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIG1lc3NhZ2UgZGVzY3JpYmluZyB3aGF0IHdhcyBleHBlY3RlZC5cbiAqIEByZXR1cm5zIHtbTG9jYWxFcnJvcl19IEEgbmV3IGVycm9yIG1lc3NhZ2Ugb2YgdGhlIGV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHBlY3RlZChsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkV4cGVjdGVkLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYW4gdW5leHBlY3RlZCBlcnJvciBtZXNzYWdlLiBJdCBpcyBleHBlY3RlZCB0aGF0IG9uZSBhcnJheSBvZlxuICogZXJyb3IgbWVzc2FnZXMgbWF5IGhhdmUgbXVsdGlwbGUgdW5leHBlY3RlZCBlcnJvcnMsIGJ1dCBvbmx5IHRoZVxuICogZmlyc3Qgd2lsbCBiZSBkaXNwbGF5ZWQgYnkgdGhlIGRlZmF1bHQgZm9ybWF0dGVyLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBkZXNjcmliaW5nIHdoYXQgd2FzIGZvdW5kIGJ1dCB3YXNcbiAqICAgICBub3QgZXhwZWN0ZWQuXG4gKiBAcmV0dXJucyB7W0xvY2FsRXJyb3JdfSBBIG5ldyBlcnJvciBtZXNzYWdlIG9mIHRoZSB1bmV4cGVjdGVkIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmV4cGVjdGVkKGxhYmVsKSB7XG4gIHJldHVybiBbeyB0eXBlOiBFcnJvclR5cGUuVW5leHBlY3RlZCwgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgZ2VuZXJpYyBlcnJvciBtZXNzYWdlLiBUaGVyZSBjYW4gYmUgbW9yZSB0aGFuIG9uZSBnZW5lcmljXG4gKiBlcnJvciBtZXNzYWdlIGluIGFuIGFycmF5IG9mIGVycm9yIG1lc3NhZ2VzLCBidXQgb25seSB0aGUgZmlyc3Qgd2lsbFxuICogYmUgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0IGZvcm1hdHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgVGhlIGdlbmVyaWMgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgZXJyb3IgbWVzc2FnZSBvZiB0aGUgZ2VuZXJpYyB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJpYyhsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLkdlbmVyaWMsIGxhYmVsIH1dXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhbiBvdGhlciBlcnJvci4gVGhlc2UgZXJyb3JzIGFyZSBub3QgZGlzcGxheWVkIGJ5IHRoZSBkZWZhdWx0XG4gKiBmb3JtYXR0ZXIgYXQgYWxsIGFuZCBhcmUgb25seSB1c2VmdWwgZm9yIGN1c3RvbSBmb3JtYXR0ZXJzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgb3RoZXIgZXJyb3IncyBtZXNzYWdlLlxuICogQHJldHVybnMge1tMb2NhbEVycm9yXX0gQSBuZXcgcGFyc2UgZXJyb3Igb2YgdGhlIG90aGVyIHR5cGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvdGhlcihsYWJlbCkge1xuICByZXR1cm4gW3sgdHlwZTogRXJyb3JUeXBlLk90aGVyLCBsYWJlbCB9XVxufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXN0ZWQgZXJyb3IuIFRoaXMgdGFrZXMgYW4gZXJyb3IgbGlzdCBhbmQgd3JhcHMgaXQgd2l0aFxuICogY29udGV4dCBpbmZvcm1hdGlvbi4gSWYgdGhlIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZVxuICogbmVzdGVkIGVycm9yLCB0aGF0IGVycm9yIGlzIHNpbXBseSByZXR1cm5lZDsgYSBzaW5nbGUgbmVzdGVkIGVycm9yXG4gKiB3aWxsIG5vdCBiZSBuZXN0ZWQgaW4gYW5vdGhlciBuZXN0ZWQgZXJyb3IuXG4gKlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBuZXN0ZWQgZXJyb3JcbiAqICAgICBvY2N1cnJlZC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGxpc3Qgb2YgZXJyb3JzIHRoYXQgb2NjdXJyZWQgYXQgdGhlXG4gKiAgICAgcG9zaXRpb24gcG9pbnRlZCB0byBieSB0aGUgZ2l2ZW4gY29udGV4dC5cbiAqIEByZXR1cm5zIHtbTmVzdGVkRXJyb3JdfSBBIG5ldyBuZXN0ZWQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXN0ZWQoY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IGVycm9yc1xuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLk5lc3RlZCwgY3R4LCBlcnJvcnMgfV1cbn1cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGNvbXBvdW5kIGVycm9yLiBUaGlzIHdyYXBzIGFuIGVycm9yIGxpc3QganVzdCBhcyBhXG4gKiBuZXN0ZWQgZXJyb3IgZG9lcywgZXhjZXB0IGl0IGFsc28gYXR0YWNoZXMgYSBtZXNzYWdlIHRvIGl0LiBJZiB0aGVcbiAqIHN1cHBsaWVkIGVycm9yIGxpc3QgaXMganVzdCBhIHNpbmdsZSBuZXN0ZWQgZXJyb3IsIGl0cyBpbmZvcm1hdGlvbiBpc1xuICogdXNlZCB0byBjcmVhdGUgYSBuZXcgY29tcG91bmQgZXJyb3Igd2l0aG91dCBhbnkgbmVzdGVkIGVycm9yLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBUaGUgbWVzc2FnZSBhdHRhY2hlZCB0byB0aGUgbmVzdGVkIGVycm9yLlxuICogQHBhcmFtIHtDb250ZXh0fSBjdHggVGhlIGNvbnRleHQgYXQgdGhlIHBvaW50IHdoZXJlIHRoZSBjb21wb3VuZFxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdGhhdCBvY2N1cnJlZCBhdCB0aGVcbiAqICAgICBwb3NpdGlvbiBwb2ludGVkIHRvIGJ5IHRoZSBnaXZlbiBjb250ZXh0LlxuICogQHJldHVybnMge1tDb21wb3VuZEVycm9yXX0gQSBuZXcgY29tcG91bmQgZXJyb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21wb3VuZChsYWJlbCwgY3R4LCBlcnJvcnMpIHtcbiAgcmV0dXJuIGVycm9ycy5sZW5ndGggPT09IDEgJiYgZXJyb3JzWzBdLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWRcbiAgICA/IFt7XG4gICAgICB0eXBlOiBFcnJvclR5cGUuQ29tcG91bmQsXG4gICAgICBjdHg6IGVycm9ycy5jdHgsXG4gICAgICBlcnJvcnM6IGVycm9ycy5lcnJvcnMsXG4gICAgICBsYWJlbCxcbiAgICB9XVxuICAgIDogW3sgdHlwZTogRXJyb3JUeXBlLkNvbXBvdW5kLCBjdHgsIGVycm9ycywgbGFiZWwgfV1cbn1cblxuLyoqXG4gKiBNZXJnZXMgdHdvIGFycmF5cyBvZiBlcnJvcnMuXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMxPVtdXSBUaGUgZmlyc3QgYXJyYXkgb2YgZXJyb3JzLlxuICogQHBhcmFtIHtFcnJvckxpc3R9IFtlcnJvcnMyPVtdXSBUaGUgc2Vjb25kIGFycmF5IG9mIGVycm9ycy5cbiAqIEByZXR1cm5zIHtFcnJvckxpc3R9IEEgbmV3IGFycmF5IGNvbnRhaW5pbmcgYWxsIG9mIHRoZSBlcnJvcnMgZnJvbVxuICogICAgIHRoZSBmaXJzdCB0d28gYXJyYXlzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UoZXJyb3JzMSA9IFtdLCBlcnJvcnMyID0gW10pIHtcbiAgcmV0dXJuIFsuLi5lcnJvcnMxLCAuLi5lcnJvcnMyXVxufVxuXG4vLyAjcmVnaW9uIEZvcm1hdHRpbmcgdXRpbGl0eSBmdW5jdGlvbnNcblxuLy8gI3JlZ2lvbiBUeXBlZGVmcyBmb3Igb2JqZWN0IHJldHVybiB0eXBlc1xuXG4vKipcbiAqIE9iamVjdCBjb250YWluaW5nIGluZm9ybWF0aW9uIGFib3V0IHRoZSBldmFsdWF0aW9uIG9mIGEgYnl0ZSB0byBzZWVcbiAqIGlmIGl0IGlzIChvciBzdGFydHMpIGEgbmV3bGluZS5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBOZXdsaW5lSW5mb1xuICogQHByb3BlcnR5IHtib29sZWFufSBuZXdsaW5lIEluZGljYXRlcyB3aGV0aGVyIHRoZSBzY2FubmVkIGJ5dGUgd2FzXG4gKiAgICAgZWl0aGVyIGEgbmV3bGluZSBvciB0aGUgYmVnaW5uaW5nIG9mIGEgbXVsdGktYnl0ZSBuZXdsaW5lLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IHNraXAgVGhlIG51bWJlciBvZiBieXRlcyB0aGF0IHRoZSBuZXh0IGNoYXJhY3RlclxuICogICAgIGNvbnRhaW5zLiBUaGlzIGlzIHJldHVybmVkIGFjY3VyYXRlbHkgd2hldGhlciBvciBub3QgdGhhdFxuICogICAgIGNoYXJhY3RlciBpcyBhIG5ld2xpbmUuXG4gKi9cblxuLyoqXG4gKiBPYmplY3QgY29udGFpbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgc3RhcnQgYW5kIGVuZCBpbmRleGVzIG9mIGFcbiAqIGxpbmUgd2l0aGluIGEgZGF0YSB2aWV3LCBhcyB3ZWxsIGFzIHRoZSBudW1iZXIgb2YgdGhhdCBsaW5lLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExpbmVJbmRleEluZm9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGFydCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZmlyc3QgY2hhcmFjdGVyIGluIGEgbGluZS4gVGhpcyBpcyBhbHdheXMgdGhlIGZpcnN0XG4gKiAgICAgYnl0ZSBvZiB0aGUgZGF0YSB2aWV3IGl0c2VsZiwgb3IgdGhlIGZpcnN0IGJ5dGUgYWZ0ZXIgYSBuZXdsaW5lXG4gKiAgICAgY2hhcmFjdGVyLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGVuZCBUaGUgaW5kZXggd2l0aGluIHRoZSBkYXRhIHZpZXcgb2YgdGhlIGxhc3RcbiAqICAgICBieXRlIG9mIHRoZSBsYXN0IGNoYXJhY3RlciBpbiBhIGxpbmUuIFRoaXMgaXMgZWl0aGVyIHRoZSBsYXN0XG4gKiAgICAgYnl0ZSBpbiB0aGUgZGF0YSB2aWV3IG9yIHRoZSBieXRlIGltbWVkaWF0ZWx5IHByZWNlZGluZyB0aGUgZmlyc3RcbiAqICAgICBieXRlIG9mIGEgbmV3bGluZSBjaGFyYWN0ZXIuXG4gKiBAcHJvcGVydHkge251bWJlcn0gbGluZW5vIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSBib3VuZGVkIGJ5XG4gKiAgICAgaW5kZXhlcyBgc3RhcnRgIGFuZCBgZW5kYC4gVGhpcyBudW1iZXIgaXMgMS1iYXNlZCwgYXMgaXQgaXMgdXNlZFxuICogICAgIGZvciBkaXNwbGF5IG9mIGFuIGVycm9yIHBvc2l0aW9uIGluIHRoZSBmaW5hbCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhaW5pbmcgdGhlIGFkanVzdGVkIGxpbmUgYW5kIGNvbHVtbiBpbmRleCB0aGF0IHJlc3VsdHNcbiAqIGZyb20gdGFiIGV4cGFuc2lvbi5cbiAqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBUYWJiZWRMaW5lSW5mb1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGxpbmUgVGhlIHN0cmluZyBvZiB0ZXh0IHJlcHJlc2VudGluZyBvbmUgbGluZSxcbiAqICAgICB3aXRoIHRhYiBjaGFyYWN0ZXJzIHJlcGxhY2VkIGJ5IHRoZSBhcHByb3ByaWF0ZSBudW1iZXIgb2Ygc3BhY2VzLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbEluZGV4IFRoZSBjaGFyYWN0ZXIgaW5kZXggcGFzc2VkIGludG8gdGhlXG4gKiAgICAgZnVuY3Rpb24sIGFkanVzdGVkIGJ5IHRoZSBkaWZmZXJlbmNlIGluIHdpZHRoIGJldHdlZW4gdGFicyBhbmRcbiAqICAgICB0aGUgc3BhY2VzIHVzZWQgdG8gcmVwbGFjZSB0aGVtLlxuICovXG5cbi8qKlxuICogT2JqZWN0IGNvbnRhbmluZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgYWRqdXN0ZWQgY29sdW1uIGluZGV4IGFuZCBsaW5lXG4gKiBsZW5ndGggYWZ0ZXIgYWNjb3VudGluZyBmb3IgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICpcbiAqIEB0eXBlZGVmIHtvYmplY3R9IENvbEluZGV4SW5mb1xuICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbG5vIFRoZSBhZGp1c3RlZCBjb2x1bW4gbnVtYmVyIG9mIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBwb2ludGVkIHRvIGJ5IHRoZSBgY2hhckluZGV4YCBwYXJhbWV0ZXIuIFRoaXMgaXMgYWRqdXN0ZWQgYnkgYW55XG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRoYXQgbWF5IGFwcGVhciBpbiB0aGUgbGluZSBhbmQgaXMgdHVybmVkXG4gKiAgICAgaW50byBhIDEtYmFzZWQgbnVtYmVyIGZvciBkaXNwbGF5IGluIHRoZSBlcnJvciBtZXNzYWdlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxlbmd0aCBUaGUgbGVuZ3RoIG9mIHRoZSBsaW5lLCBhZGp1c3RlZCBmb3JcbiAqICAgICB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuIFRoaXMgaXMgcmV0dXJuZWQgc29sZWx5IHRvIGJlIHBhc3NlZCBpbnRvXG4gKiAgICAgb3RoZXIgZnVuY3Rpb25zIHdobyB0aGVuIHdvbid0IGhhdmUgdG8gcmVjYWxjdWxhdGUgdGhlIHdpZHRoIG9mXG4gKiAgICAgdGhlIGxpbmUgYWNjb3VudGluZyBmb3IgdGhvc2Ugc2FtZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMuXG4gKi9cblxuLyoqXG4gICogT2JqZWN0IGNvbnRhaW5pbmcgbGluZSBhbmQgY29sdW1uIG51bWJlcnMuXG4gICpcbiAgKiBAdHlwZWRlZiB7b2JqZWN0fSBQb3NpdGlvblxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBsaW5lIFRoZSBsaW5lIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5XG4gICogICAgIHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcuXG4gICogQHByb3BlcnR5IHtudW1iZXJ9IGNvbHVtbiBUaGUgY29sdW1uIG51bWJlciBvZiB0aGUgYnl0ZSBwb2ludGVkIHRvXG4gICogICAgIGJ5IHRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcsIGFkanVzdGVkIGZvciBjaGFyYWN0ZXIgd2lkdGggYW5kXG4gICogICAgIHRhYiBzaXplLlxuICAqL1xuXG4vKipcbiAqIEEgZnVuY3Rpb24gY2FsbGVkIGJ5IGBmb3JtYXRFcnJvcnNgIHRvIGRvIHRoZSBhY3R1YWwgZm9ybWF0dGluZy4gQVxuICogZGVmYXVsdCBmb3JtYXR0ZXIgZnVuY3Rpb24gaXMgcHJvdmlkZWQgYnV0IGNhbiBiZSByZXBsYWNlZCBpZlxuICogZGVzaXJlZC5cbiAqXG4gKiBAY2FsbGJhY2sgRm9ybWF0dGVyXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgYmVpbmcgdXNlZCB0byBnZW5lcmF0ZSB0aGVcbiAqICAgICBlcnJvciBtZXNzYWdlLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gYHZpZXdgIG9mIHRoZSBieXRlIHdoZXJlIHRoZVxuICogICAgIGVycm9yIG9jY3VycmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IG1heFdpZHRoIFRoZSBtYXhpbXVtIGRpc3BsYXkgd2lkdGggb2YgdGhlIGxpbmUgd2hlcmVcbiAqICAgICB0aGUgZXJyb3Igb2NjdXJyZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmVcbiAqICAgICB0cnVuY2F0ZWQgd2l0aCBlbGxpcHNlcyBiZWZvcmUgYW5kL29yIGFmdGVyLlxuICogQHJldHVybnMge3N0cmluZ30gQSBtdWx0aS1saW5lIGZvcm1hdHRlZCBlcnJvciBtZXNzYWdlLlxuICovXG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIGNoYXJhY3RlciBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIHN1cHBsaWVkXG4gKiB2aWV3IGlzIGEgbmV3bGluZS4gQW4gb2JqZWN0IHdpdGggdHdvIHByb3BlcnRpZXMgaXMgcmV0dXJuZWQ7XG4gKiBgbmV3bGluZWAgaXMgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhhdCBjaGFyYWN0ZXIgaXMgYVxuICogbmV3bGluZTsgYHNraXBgIGlzIHRoZSB3aWR0aCBvZiB0aGUgY2hhcmFjdGVyIChhbmQgdGhlcmVmb3JlIGhvdyBtYW55XG4gKiBieXRlcyB0byBza2lwIHVudGlsIHRoZSBuZXh0IGNoYXJhY3RlciB0byBjaGVjaykuXG4gKlxuICogQWxsIFVuaWNvZGUgbmV3bGluZXMgKENSLCBMRiwgRkYsIFZULCBORUwsIExTLCBhbmQgUFMpIGFyZSBoYW5kbGVkLFxuICogYWxvbmcgd2l0aCB0aGUgbXVsdGktY2hhcmFjdGVyIG5ld2xpbmUgQ1IrTEYuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbnRvIGB2aWV3YCBpbmRpY2F0aW5nIHRoZSBieXRlIHRvXG4gKiAgICAgY2hlY2sgdG8gc2VlIGlmIGl0J3MgYSBuZXdsaW5lLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcmV0dXJucyB7TmV3bGluZUluZm99IE5ld2xpbmUgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGluZGV4ZWQgYnl0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTmV3bGluZShpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKGJ5dGUgPT09IDB4MGEgfHwgYnl0ZSA9PT0gMHgwYiB8fCBieXRlID09PSAweDBjKSB7XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoYnl0ZSA9PT0gMHgwZCkge1xuICAgIGlmIChpbmRleCA8IHZpZXcuYnl0ZUxlbmd0aCAtIDEpIHtcbiAgICAgIGNvbnN0IG5leHRCeXRlID0gdmlldy5nZXRVaW50OChpbmRleCArIDEpXG4gICAgICBpZiAoYnl0ZSA9PT0gMHgwZCAmJiBuZXh0Qnl0ZSA9PT0gMHgwYSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgbmV3bGluZTogdHJ1ZSwgc2tpcDogMSB9XG4gIH1cblxuICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAxKSB7XG4gICAgY29uc3QgbmV4dEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMSlcblxuICAgIGlmIChieXRlID09PSAweGMyICYmIG5leHRCeXRlID09PSAweDg1KSByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAyIH1cbiAgICBpZiAoaW5kZXggPCB2aWV3LmJ5dGVMZW5ndGggLSAyKSB7XG4gICAgICBjb25zdCB0aGlyZEJ5dGUgPSB2aWV3LmdldFVpbnQ4KGluZGV4ICsgMilcbiAgICAgIGlmIChieXRlID09PSAweGUyICYmIG5leHRCeXRlID09PSAweDgwXG4gICAgICAgICYmICh0aGlyZEJ5dGUgPT09IDB4YTggfHwgdGhpcmRCeXRlID09PSAweGE5KSkge1xuICAgICAgICByZXR1cm4geyBuZXdsaW5lOiB0cnVlLCBza2lwOiAzIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBuZXdsaW5lOiBmYWxzZSwgc2tpcDogbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykgfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIHN0YXJ0aW5nIGFuZCBlbmRpbmcgaW5kZXhlcyBvZiB0aGUgbGluZSBpbiB0aGUgZ2l2ZW5cbiAqIHZpZXcgdGhhdCBjb250YWlucyB0aGUgYnl0ZSBwb2ludGVkIGF0IGJ5IGBpbmRleGAuIEl0IGRvZXMgdGhpcyBieVxuICogZGV0ZXJtaW5pbmcgd2hlcmUgbmV3bGluZXMgYXJlIGFuZCB0aGVuIGZpZ3VyaW5nIG91dCB3aGljaCBvbmVzIGNvbWVcbiAqIGNsb3Nlc3QgYmVmb3JlIGFuZCBhZnRlciB0aGUgaW5kZXguIFRoZSBudW1iZXIgb2YgbmV3bGluZXMgdGhhdCBjYW1lXG4gKiBiZWZvcmUgdGhlIGluZGV4IChhbmQgdGhlcmVmb3JlIHRoZSBsaW5lIG51bWJlciBvZiB0aGUgbGluZSB3aXRoIHRoZVxuICogaW5kZXgpIGlzIGFsc28gY291bnRlZC5cbiAqXG4gKiBSZXR1cm5zIGFuIG9iamVjdCB3aXRoIHRocmVlIHByb3BlcnRpZXM6IGBzdGFydGAgaXMgdGhlIGluZGV4IG9mIHRoZVxuICogZmlyc3QgYnl0ZSBvZiB0aGUgbGluZSwgYGVuZGAgaXMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IGJ5dGUgb2YgdGhlXG4gKiBsaW5lIChub3QgY291bnRpbmcgdGhlIG5ld2xpbmUpLCBhbmQgYGxpbmVub2AgaXMgdGhlIGxpbmUgbnVtYmVyXG4gKiB3aGVyZSB0aGUgaW5kZXggYXBwZWFycy4gYGxpbmVub2AgaXMgMS1pbmRleGVkIHNpbmNlIGl0IGlzIG1lYW50IGZvclxuICogZGlzcGxheSBpbiB0aGUgZmluYWwgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBsaW5lXG4gKiAgICAgaW5kZXggaW5mb3JtYXRpb24gaXMgYmVpbmcgZGV0ZXJtaW5lZC5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSBpbnB1dCB0ZXh0LlxuICogQHJldHVybnMge0xpbmVJbmRleEluZm99IEluZm9ybWF0aW9uIGFib3V0IHRoZSBzdGFydGluZyBhbmQgZW5kaW5nXG4gKiAgICAgaW5kZXhlcyBvZiB0aGUgbGluZSBjb250YWluaW5nIHRoZSBieXRlIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KSB7XG4gIGxldCBzdGFydCA9IDBcbiAgbGV0IGxpbmVubyA9IDEgLy8gMS1iYXNlZFxuICBsZXQgaSA9IDBcblxuICB3aGlsZSAoaSA8IHZpZXcuYnl0ZUxlbmd0aCkge1xuICAgIGNvbnN0IHsgbmV3bGluZSwgc2tpcCB9ID0gaXNOZXdsaW5lKGksIHZpZXcpXG4gICAgaWYgKG5ld2xpbmUpIHtcbiAgICAgIGlmIChpICsgc2tpcCA+IGluZGV4KSB7XG4gICAgICAgIHJldHVybiB7IHN0YXJ0LCBlbmQ6IGkgLSAxLCBsaW5lbm8gfVxuICAgICAgfVxuICAgICAgbGluZW5vKytcbiAgICAgIHN0YXJ0ID0gaSArIHNraXBcbiAgICB9XG4gICAgaSArPSBza2lwXG4gIH1cbiAgcmV0dXJuIHsgc3RhcnQsIGVuZDogdmlldy5ieXRlTGVuZ3RoIC0gMSwgbGluZW5vIH1cbn1cblxuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBjaGFyYWN0ZXIgaW5kZXggKGFzIG9wcG9zZWQgdG8gYnl0ZSBpbmRleCkgd2l0aGluIGFcbiAqIHNpbmdsZSBsaW5lIG9mIHRleHQgb2YgdGhlIGNoYXJhY3RlciBwb2ludGVkIHRvIGJ5IGBpbmRleGAgd2l0aGluXG4gKiBgdmlld2AuIFRoZSBgc3RhcnRgIHBhcmFtZXRlciBzZXRzIHRoZSBmaXJzdCBieXRlIG9mIGEgXCJsaW5lXCIgd2l0aGluXG4gKiB0aGUgdmlldyBhbmQgY2FuIGJlIGNhbGN1bGF0ZWQgd2l0aCB7QGxpbmsgZ2V0TGluZUluZGV4ZXN9IGFib3ZlLlxuICpcbiAqIEluIGxpbmVzIHdpdGggb25seSBzaW5nbGUtYnl0ZSBjaGFyYWN0ZXJzLCB0aGUgY2hhcmFjdGVyIGluZGV4IHdpbGxcbiAqIGFsd2F5cyBiZSB0aGUgc2FtZSBhcyBgaW5kZXggLSBzdGFydGAuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZnVuY3Rpb25cbiAqIGlzIHRvIGFkanVzdCB3aGVuIG11bHRpLWJ5dGUgY2hhcmFjdGVycyBhcmUgcHJlc2VudC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIGluIGB2aWV3YCB3aG9zZSBjaGFyYWN0ZXJcbiAqICAgICBpbmRleCBpcyBiZWluZyBkZXRlcm1pbmVkLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIGlucHV0IHRleHQuXG4gKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgVGhlIGluZGV4IG9mIHRoZSBmaXJzdCBieXRlIG9mIHRoZSBsaW5lXG4gKiAgICAgY29udGFpbmluZyB0aGUgYnl0ZSBwb2ludGVkIHRvIGJ5IGBpbmRleGAuXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBUaGUgaW5kZXgsIHdpdGhpbiBhIHNpbmdsZSBsaW5lIG9mIHRleHQsIG9mIHRoZVxuICogICAgIGNoYXJhY3RlciB3aG9zZSBmaXJzdCBieXRlIGlzIGJlaW5nIHBvaW50ZWQgdG8gYnkgYGluZGV4YC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldENoYXJJbmRleChpbmRleCwgdmlldywgc3RhcnQpIHtcbiAgbGV0IGNoYXJJbmRleCA9IDBcbiAgbGV0IGJ5dGVJbmRleCA9IHN0YXJ0XG4gIHdoaWxlIChieXRlSW5kZXggPCBpbmRleCAmJiBieXRlSW5kZXggPCB2aWV3LmJ5dGVMZW5ndGgpIHtcbiAgICBieXRlSW5kZXggKz0gbmV4dENoYXJXaWR0aChieXRlSW5kZXgsIHZpZXcpXG4gICAgY2hhckluZGV4KytcbiAgfVxuICByZXR1cm4gY2hhckluZGV4XG59XG5cbi8qKlxuICogRXhwYW5kcyB0YWJzIGludG8gc3BhY2VzIGFuZCBjYWxjdWxhdGVzIHRoZSBjb2x1bW4gaW5kZXggb2YgdGhlXG4gKiBpbmRleGVkIGNoYXJhY3RlciBhZGp1c3RpbmcgZm9yIHRob3NlIHNwYWNlcy4gVGhlIG51bWJlciBvZiBzcGFjZXMgaW5cbiAqIGVhY2ggdGFiIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCBgdGFiU2l6ZWAuXG4gKlxuICogVGhlIHJldHVybiB2YWx1ZSBpcyBhbiBvYmplY3Qgd2l0aCB0d28gcHJvcGVydGllczogYGxpbmVgIGlzIHRoZVxuICogaW5wdXQgbGluZSB3aXRoIHRhYnMgZXhwYW5kZWQgaW50byBzcGFjZXMsIGFuZCBgY29sSW5kZXhgIGlzIHRoZVxuICogaW5kZXggb2YgdGhlIGNvbHVtbiB0aGF0IGhhcyB0aGUgY2hhcmFjdGVyIHBvaW50ZWQgYXQgYnkgdGhlXG4gKiBjaGFyYWN0ZXIgaW5kZXguXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNoYXJJbmRleCBUaGUgaW5kZXggb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0XG4gKiAgICAgd2l0aGluIHRoZSBsaW5lLlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBiZWluZyB0YWJpZmllZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSB0YWJTaXplIFRoZSBtYXhpbXVtIG51bWJlciBvZiBzcGFjZXMgdGhhdCBjYW4gcmVwbGFjZVxuICogICAgIGEgdGFiLiBOb3RlIHRoYXQgdGFicyBhcmUgdHJlYXRlZCBhcyBzdG9wczsgdGhleSB3aWxsIGJlIG9mXG4gKiAgICAgdmFyeWluZyBzaXplcyB0aGF0IHJlc3VsdHMgaW4gdGhlbSBhbHdheXMgZW5kaW5nIGF0IGEgY29sdW1uIHRoYXRcbiAqICAgICBpcyBhIG11bHRpcGxlIG9mIGB0YWJTaXplYC5cbiAqIEByZXR1cm5zIHtUYWJiZWRMaW5lSW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGxpbmUgYWZ0ZXIgcmVwbGFjaW5nXG4gKiAgICAgdGFicyB3aXRoIHNwYWNlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRhYmlmeShjaGFySW5kZXgsIGxpbmUsIHRhYlNpemUpIHtcbiAgY29uc3QgdGFiSW5kZXhlcyA9IFtdXG4gIGxldCB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIHdoaWxlICh0YWJNYXRjaCAhPT0gbnVsbCkge1xuICAgIHRhYkluZGV4ZXMucHVzaCh0YWJNYXRjaC5pbmRleClcbiAgICB0YWJNYXRjaCA9IHRhYi5leGVjKGxpbmUpXG4gIH1cblxuICAvLyByZXBsYWNlIGVhY2ggdGFiIHdpdGggdGhlIGNvcmVjdCBudW1iZXIgb2Ygc3BhY2VzLCBzaGlmdGluZyB0aGVcbiAgLy8gcmVtYWluaW5nIGluZGV4ZXMgYnkgdGhhdCBhbW91bnRcbiAgbGV0IG9mZnNldCA9IDBcbiAgbGV0IHByZUluZGV4T2Zmc2V0ID0gMFxuICBsZXQgcmVzdWx0ID0gbGluZVxuXG4gIGZvciAoY29uc3QgdGFiSW5kZXggb2YgdGFiSW5kZXhlcykge1xuICAgIGNvbnN0IGFjdHVhbEluZGV4ID0gdGFiSW5kZXggKyBvZmZzZXRcbiAgICBjb25zdCBzcGFjZUNvdW50ID0gdGFiU2l6ZSAtIGFjdHVhbEluZGV4ICUgdGFiU2l6ZVxuICAgIGlmIChhY3R1YWxJbmRleCA8IGNoYXJJbmRleCArIHByZUluZGV4T2Zmc2V0KSB7XG4gICAgICBwcmVJbmRleE9mZnNldCArPSBzcGFjZUNvdW50IC0gMVxuICAgIH1cbiAgICBvZmZzZXQgKz0gc3BhY2VDb3VudCAtIDFcbiAgICByZXN1bHQgPSByZXN1bHQuc3Vic3RyaW5nKDAsIGFjdHVhbEluZGV4KSArICcgJy5yZXBlYXQoc3BhY2VDb3VudClcbiAgICAgICsgcmVzdWx0LnN1YnN0cmluZyhhY3R1YWxJbmRleCArIDEpXG4gIH1cbiAgcmV0dXJuIHsgbGluZTogcmVzdWx0LCBjb2xJbmRleDogcHJlSW5kZXhPZmZzZXQgKyBjaGFySW5kZXggfVxufVxuXG4vKipcbiAqIENhbGN1bGF0ZXMgdGhlIGZpbmFsIGNvbHVtbiBudW1iZXIgb2YgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIHRvXG4gKiBieSB0aGUgY29sdW1uIGluZGV4LiBUaGlzIGNvbHVtbiBudW1iZXIgaXMgMS1iYXNlZCAoZm9yIGRpc3BsYXksIHRoZVxuICogc2FtZSBhcyB0aGUgbGluZSBudW1iZXIgZnJvbSBgZ2V0TGluZUluZGV4ZXNgKSBhbmQgaXMgYWRqdXN0ZWQgZm9yXG4gKiB6ZXJvLXdpZHRoIGNoYXJhY3RlcnMgc3VjaCBhcyBmb3JtYXR0aW5nIGNoYXJhY3RlcnMgYW5kIG5vbi1zcGFjaW5nXG4gKiBtYXJrcy5cbiAqXG4gKiBUaGUgcmV0dXJuIHZhbHVlIGlzIGFuIG9iamVjdCBvZiB0d28gcHJvcGV0aWVzOiBgY29sbm9gIGlzIHRoZVxuICogMS1pbmRleGVkIGNvbHVtbiBudW1iZXIsIGFuZCBgbGVuZ3RoYCBpcyB0aGUgbGVuZ3RoIG9mIHRoZSBsaW5lXG4gKiBhZGp1c3RpbmcgZm9yIHplcm8td2lkdGggY2hhcmFjdGVycy4gVGhlIGxhdHRlciBpcyBwcm92aWRlZCBzbyBpdFxuICogZG9lc24ndCBoYXZlIHRvIGJlIHJlY2FsY3VsYXRlZCBieSBgc2hvd2AuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbEluZGV4IFRoZSBpbmRleCBvZiB0aGUgY29sdW1uIHdpdGhpbiB0aGUgbGluZVxuICogICAgIGNvbnRhaW5pbmcgdGhlIGNoYXJhY3RlciBiZWluZyBwb2ludGVkIGF0LlxuICogQHBhcmFtIHtzdHJpbmd9IGxpbmUgVGhlIGxpbmUgb2YgdGV4dCBwb3RlbnRpYWxseSBjb250YWluaW5nXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzIHRvIGFjY291bnQgZm9yLlxuICogQHJldHVybnMge0NvbEluZGV4SW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIGFkanVzdGVkIGxpbmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpIHtcbiAgbGV0IGluZGV4ID0gY29sSW5kZXhcbiAgY29uc3QgbWF0Y2hlcyA9IFtdXG5cbiAgbGV0IG1hdGNoID0gemVyb1dpZHRoLmV4ZWMobGluZSlcbiAgd2hpbGUgKG1hdGNoICE9PSBudWxsKSB7XG4gICAgbWF0Y2hlcy5wdXNoKG1hdGNoLmluZGV4KVxuICAgIGlmIChtYXRjaC5pbmRleCA8IGluZGV4KSBpbmRleC0tXG4gICAgbWF0Y2ggPSB6ZXJvV2lkdGguZXhlYyhsaW5lKVxuICB9XG4gIHJldHVybiB7XG4gICAgY29sbm86IGluZGV4ICsgMSwgLy8gMS1iYXNlZFxuICAgIGxlbmd0aDogY2hhckxlbmd0aChsaW5lKSAtIG1hdGNoZXMubGVuZ3RoLFxuICB9XG59XG5cbi8qKlxuICogR2VuZXJhdGVzIGEgc3RyaW5nIGNvbnRhaW5pbmcgb25lIGxpbmUgdGhhdCBpcyB0aGUgdGV4dCBhdCBhbmQgYXJvdW5kXG4gKiB0aGUgY29sdW1uIHRvIGJlIGRpc3BsYXllZCwgYW5kIG9uZSBsaW5lIHRoYXQgaXMgYSBjYXJldCBwb2ludGluZyB0b1xuICogdGhhdCBwYXJ0aWN1bGFyIGNvbHVtbi5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGFkZHMgZWxsaXBzZXMgYXMgbmVlZGVkIHRvIHRoZSBmcm9udCBhbmQvb3IgdGhlIGJhY2sgb2ZcbiAqIHRoZSBsaW5lIGluIG9yZGVyIHRvIGdldCB0aGUgY29sdW1uIGludG8gdGhlIHZpc2libGUgYXJlYSwgYmFzZWQgb25cbiAqIHRoZSBgbWF4V2lkdGhgIG9mIHRoZSBsaW5lIHRvIGRpc3BsYXkuIFRoZSBgbGVuZ3RoYCBwYXJhbWV0ZXIgaXMgdGhlXG4gKiBgbGVuZ3RoYCByZXR1cm5lZCBieSBgZ2V0Q29sTnVtYmVyYCBhbmQgaXMgaGVyZSBqdXN0IHRvIGF2b2lkIGhhdmluZ1xuICogdG8gcmVjYWxjdWxhdGUgaXQgaW4gdGhpcyBmdW5jdGlvbiB3aGVuIGl0IGFscmVhZHkgbmVlZGVkIHRvIGJlXG4gKiBjYWxjdWxhdGVkIGluIHRoZSBvdGhlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGluZSBUaGUgbGluZSBvZiB0ZXh0IGJlaW5nIGZvcm1hdHRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBsZW5ndGggVGhlIGxlbmd0aCBvZiB0aGUgbGluZSwgYWRqdXN0ZWQgZm9yIHRhYnMgYW5kXG4gKiAgICAgemVyby13aWR0aCBjaGFyYWN0ZXJzLlxuICogQHBhcmFtIHtudW1iZXJ9IGNvbG5vIFRoZSBjb2x1bW4gbnVtYmVyIHdoZXJlIHRoZSBjYXJldCBzaG91bGQgcG9pbnQuXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4V2lkdGggVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHBvdGVudGlhbGx5IHRydW5jYXRlZCBsaW5lIG9mIHRleHQsIGZvbGxvd2VkIGJ5XG4gKiAgICAgYW5vdGhlciBsaW5lIGNvbnRhaW5pbmcgYSBjYXJldCBwb2ludGluZyBhdCB0aGUgZGVzaWduYXRlZFxuICogICAgIGNvbHVtbi5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNob3cobGluZSwgbGVuZ3RoLCBjb2xubywgbWF4V2lkdGgsIGluZGVudCA9IDApIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcblxuICAvLyBGaXJzdCBjYXNlOiB0aGUgbGluZSBpcyBzaG9ydGVyIHRoYW4gbWF4V2lkdGguIERpc3BsYXkgdGhlIGxpbmVcbiAgLy8gd2l0aCB0aGUgY2FyZXQgcG9zaXRpb25lZCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoICYmIGxlbmd0aCA8PSBtYXhXaWR0aCkge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmV9XFxuJHtzcH0keycgJy5yZXBlYXQoY29sbm8gLSAxKX1eYFxuICB9XG5cbiAgLy8gU2Vjb25kIGNhc2U6IHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIChtYXhXaWR0aCAtIDMpIGFuZCB0aGUgY2FyZXRcbiAgLy8gcG9pbnRzIHRvIGEgY2hhcmFjdGVyIGluIHRoZSBmaXJzdCAobWF4V2lkdGggLSAzKSBjaGFyYWN0ZXJzLlxuICAvLyBEaXNwbGF5IHRoZSBmaXJzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYWZ0ZXIgaXQgYW5kIHBvc2l0aW9uXG4gIC8vIHRoZSBjYXJldCBiZWxvdyBpdC5cbiAgaWYgKGNvbG5vIDw9IG1heFdpZHRoIC0gMykge1xuICAgIHJldHVybiBgJHtzcH0ke2xpbmUuc3Vic3RyaW5nKDAsIG1heFdpZHRoIC0gMyl9Li4uXFxuJHtzcH0ke1xuICAgICAgJyAnLnJlcGVhdChjb2xubyAtIDEpXG4gICAgfV5gXG4gIH1cblxuICAvLyBUaGlyZCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiAobWF4V2lkdGggLSAzKSBhbmQgdGhlIGNhcmV0XG4gIC8vIHBvaW50cyBhdCBhIGNoYXJhY3RlciB0aGF0IGlzIG5vdCBpbiB0aGUgZmlyc3QgKG1heFdpZHRoIC0gMylcbiAgLy8gY2hhcmFjdGVycyBidXQgaXMgaW4gdGhlIGxhc3QgKG1heFdpZHRoIC0gMykgY2hhcmFjdGVycy4gRGlzcGxheVxuICAvLyB0aGUgbGFzdCBwYXJ0IG9mIHRoZSBsaW5lIHdpdGggYC4uLmAgYmVmb3JlIGl0LCBjYWxjdWxhdGUgYSBuZXdcbiAgLy8gcG9zaXRpb24gZm9yIHRoZSBjYXJldCwgYW5kIHBvc2l0aW9uIGl0IGJlbG93IHRoZSBsaW5lLlxuICBpZiAoY29sbm8gPj0gbGVuZ3RoIC0gbWF4V2lkdGggKyAzKSB7XG4gICAgY29uc3Qgc3RhcnQgPSBsZW5ndGggLSBtYXhXaWR0aCArIDNcbiAgICBjb25zdCBuZXdDb2xubyA9IGNvbG5vIC0gKGxlbmd0aCAtIG1heFdpZHRoKVxuICAgIHJldHVybiBgJHtzcH0uLi4ke2xpbmUuc3Vic3RyaW5nKHN0YXJ0KX1cXG4ke3NwfSR7JyAnLnJlcGVhdChuZXdDb2xubyAtIDEpfV5gXG4gIH1cblxuICAvLyBGaW5hbCBjYXNlOiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiBtYXhXaWR0aCAtIDMgYW5kIHRoZSBjYXJldFxuICAvLyBkb2VzIG5vdCBwb2ludCB0byBhIGNoYXJhY3RlciB3aXRoaW4gZWl0aGVyIHRoZSBmaXJzdCBvciBsYXN0XG4gIC8vIChtYXhXaWR0aCAtIDMpIGNoYXJhY3RlcnMuIFNoaWZ0IHRoZSBsaW5lIHRvIG1ha2UgdGhlIGNhcmV0IHBvaW50XG4gIC8vIGF0IHRoZSBtaWRkbGUgb2YgaXQsIGFkZCBgLi4uYCB0byB0aGUgc3RhcnQgKmFuZCogZW5kLCBhbmQgcG9zaXRpb25cbiAgLy8gdGhlIGNhcmV0IGJlbG93IGl0LlxuICBjb25zdCBzdGFydCA9IGNvbG5vIC0gMSAtIE1hdGguY2VpbChtYXhXaWR0aCAvIDIpICsgM1xuICBjb25zdCBlbmQgPSBjb2xubyAtIDEgKyBNYXRoLmZsb29yKG1heFdpZHRoIC8gMikgLSAzXG4gIHJldHVybiBgJHtzcH0uLi4ke1xuICAgIGxpbmUuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpXG4gIH0uLi5cXG4ke3NwfSR7XG4gICAgJyAnLnJlcGVhdChNYXRoLmNlaWwobWF4V2lkdGggLyAyKSlcbiAgfV5gXG59XG5cbi8qKlxuICogRm9ybWF0cyBhIHNldCBvZiBuZXN0ZWQgKG9yIGNvbXBvdW5kKSBlcnJvciBtZXNzYWdlcy5cbiAqXG4gKiBAcGFyYW0geyhOZXN0ZWRFcnJvcltdfENvbXBvdW5kRXJyb3JbXSl9IG5lc3RlZHMgQW4gYXJyYXkgb2YgZWl0aGVyXG4gKiAgICAgbmVzdGVkIG9yIGNvbXBvdW5kIGVycm9ycyB0byBmb3JtYXQuXG4gKiBAcGFyYW0ge251bWJlcn0gdGFiU2l6ZSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlIHRhYlxuICogICAgIHN0b3BzIGxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXhXaWR0aCBUaGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGluZSBiZWluZ1xuICogICAgIGRpc3BsYXllZC4gSWYgdGhlIGxpbmUgaXMgbG9uZ2VyIHRoYW4gdGhpcywgaXQgd2lsbCBiZSB0cnVuY2F0ZWRcbiAqICAgICB3aXRoIGVsbGlwc2VzIGFkZGVkIGJlZm9yZSBhbmQvb3IgYWZ0ZXIgYXMgYXBwcm9wcmlhdGUuXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZW50IFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRvIGluZGVudCB0aGUgZXJyb3JcbiAqICAgICBtZXNzYWdlLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIGZvcm1hdHRlZCBuZXN0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZnVuY3Rpb24gZm9ybWF0TmVzdGVkKG5lc3RlZHMsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpIHtcbiAgY29uc3Qgc3AgPSAnICcucmVwZWF0KGluZGVudClcbiAgY29uc3QgbmVzdGVkTXNncyA9IG5lc3RlZHMubWFwKG4gPT4ge1xuICAgIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IG4uY3R4XG4gICAgY29uc3QgbGFiZWwgPSBuLmxhYmVsXG4gICAgICA/IGBcXG4ke3NwfUNvdWxkIG5vdCBwYXJzZSAke24ubGFiZWx9IGJlY2F1c2U6XFxuXFxuYFxuICAgICAgOiBgXFxuJHtzcH1UaGUgcGFyc2VyIGJhY2t0cmFja2VkIGFmdGVyOlxcblxcbmBcbiAgICByZXR1cm4gbGFiZWwgKyBmb3JtYXQobi5lcnJvcnMsIGluZGV4LCB2aWV3LCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50ICsgMilcbiAgfSlcbiAgcmV0dXJuIG5lc3RlZE1zZ3Muam9pbignJylcbn1cblxuLyoqXG4gKiBFbnN1cmVzIHRoYXQgYSBzdHJpbmcgZW5kcyB3aXRoIGEgY2VydGFpbiBudW1iZXIgb2YgbmV3bGluZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGhlIHN0cmluZyB0aGF0IGlzIHN1cHBvc2VkIHRvIGhhdmUgYSBjZXJ0YWluXG4gKiAgICAgbnVtYmVyIG9mIG5ld2xpbmVzIGF0IHRoZSBlbmQuXG4gKiBAcGFyYW0ge251bWJlcn0gY291bnQgVGhlIG51bWJlciBvZiBuZXdsaW5lcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgYnV0IHdpdGggYGNvdW50YCBuZXdsaW5lcyBhdCB0aGVcbiAqICAgICBlbmQuXG4gKi9cbmZ1bmN0aW9uIGVuc3VyZU5ld2xpbmVzKHRleHQsIGNvdW50KSB7XG4gIGxldCByZXN1bHQgPSB0ZXh0XG4gIHdoaWxlIChyZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdID09PSAnXFxuJykge1xuICAgIHJlc3VsdCA9IHJlc3VsdC5zdWJzdHJpbmcoMCwgcmVzdWx0Lmxlbmd0aCAtIDEpXG4gIH1cbiAgcmV0dXJuIHJlc3VsdCArICdcXG4nLnJlcGVhdChjb3VudClcbn1cblxuLyoqXG4gKiBUaGUgZGVmYXVsdCBmb3JtYXR0ZXIgZm9yIGVycm9yIG1lc3NhZ2VzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyBhIHN0cmluZyB0aGF0IGhhcyB0aGUgZm9sbG93aW5nIHBhcnRzOlxuICpcbiAqIDEuIEEgcG9zaXRpb24gbGluZSB0aGF0IGdpdmVzIHRoZSBsaW5lIG51bWJlciBhbmQgY29sdW1uIG51bWJlciB3aGVyZVxuICogICAgdGhlIGVycm9yIG9jY3VycmVkLlxuICogMi4gQSB2aXN1YWwgcmVwcmVzZW50YXRpb24gb2YgdGhlIGVycm9yIGxvY2F0aW9uLiBUaGlzIHBhcnQgZ2VuZXJhdGVzXG4gKiAgICB0d28gbGluZXMgaW4gdGhlIGVycm9yIG1lc3NhZ2UuIFRoZSBmaXJzdCBpcyBlaXRoZXIgdGhlIGVudGlyZVxuICogICAgaW5wdXQgbGluZSBvciwgaWYgdGhhdCdzIHRvbyBsb25nLCBhIHBvcnRpb24gb2YgdGhlIGlucHV0IGxpbmVcbiAqICAgIHN0YXJ0ZWQgYW5kL29yIGVuZGVkIHdpdGggZWxsaXBzZXMgdGhhdCBjb250YWlucyB0aGUgZXJyb3JcbiAqICAgIGxvY2F0aW9uLiBUaGUgc2Vjb25kIGlzIGEgY2FyZXQgcG9zaXRpb25lZCB1bmRlcm5lYXRoIHRoZSBsb2NhdGlvblxuICogICAgaW4gdGhlIGZpcnN0IGxpbmUgdGhhdCBzaG93cyBleGFjdGx5IHdoZXJlIHRoZSBlcnJvciBvY2N1cnJlZC5cbiAqIDMuIFRoZSBmaXJzdCB1bmV4cGVjdGVkIGVycm9yIG1lc3NhZ2UsIGlmIGFueS5cbiAqIDQuIEFsbCBvZiB0aGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZXMgKGlmIGFueSksIHNlcGFyYXRlZCBieSAnb3InIGFuZFxuICogICAgY29tbW1hcyBhcyBhcHByb3ByaWF0ZSBmb3IgdGhlIG51bWJlciBvZiBtZXNzYWdlcy5cbiAqIDUuIFRoZSBmaXJzdCBvZiB0aGUgZ2VuZXJpYyBtZXNzYWdlcywgaWYgYW55LlxuICpcbiAqIFRoZSBwb3NpdGlvbiBvZiB0aGUgZXJyb3IgaXMgaW5kaWNhdGVkIGJ5IHRoZSBgaW5kZXhgIHBhcmFtZXRlcixcbiAqIHdoaWNoIGlzIHRoZSBpbmRleCB3aXRoaW4gdGhlIGFycmF5IG9mIGJ5dGVzIGluIGB2aWV3YCB3aGVyZSB0aGVcbiAqIGVycm9yIG9jY3VycmVkLiBUaGUgY2FsY3VsYXRpb24gb2YgbGluZSBhbmQgY29sdW1uIG51bWJlciBmcm9tIHRoaXNcbiAqIGZsYXQgYXJyYXkgb2YgYnl0ZXMgdGFrZXMgdGhlIGZvbGxvd2luZyBpbnRvIGFjY291bnQ6XG4gKlxuICogKiBNdWx0aS1ieXRlIGNoYXJhY3RlcnMgKGV2ZXJ5dGhpbmcgaXMgVVRGLTggYXdhcmUsIHNvIGNoYXJhY3RlcnMgY2FuXG4gKiAgIGJlIDEsIDIsIDMsIG9yIDQgYnl0ZXMgbG9uZylcbiAqICogTXVsdGktY2hhcmFjdGVyIGFuZCBzaW5nbGUtY2hhcmFjdGVyIG11bHRpLWJ5dGUgbGluZSBlbmRpbmdzXG4gKiAqIFRhYnMsIHdoaWNoIGFyZSBleHBhbmRlZCBpbnRvIGEgbnVtYmVyIG9mIHNwYWNlcyBzZXQgYnkgdGhlXG4gKiAgIGB0YWJTaXplYCBwYXJhbWV0ZXJcbiAqICogWmVyby13aWR0aCBjaGFyYWN0ZXJzLCBzdWNoIGFzIHplcm8td2lkdGggc3BhY2VzIGFuZCBqb2luZXJzLCBSVExcbiAqICAgb3IgTFRSIGZvcm1hdHRpbmcgY2hhcmFjdGVycywgYW5kIGRpYWNyaXRpY3MgKEhlYnJldyBvciBUaGFpIHZvd2VsXG4gKiAgIG1hcmtzLCB1bWxhdXRzIG92ZXIgTGF0aW4gY2hhcmFjdGVycywgZXRjLilcbiAqXG4gKiBUaGUgb3V0cHV0IGlzIGEgc2luZ2xlIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSA1IGVsZW1lbnRzIGFib3ZlLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogVGhlIGZvbGxvd2luZyB0d28gbGluZXMgb2YgY29kZSB1c2VzIGBzdHJpbmdUb1ZpZXdgLCBhbiBpbnRlcm5hbFxuICogdXRpbGl0eSBmdW5jdGlvbiB0aGF0LCBhcyBpdHMgbmFtZSBzdWdnZXN0cywgdHVybnMgYSBzdHJpbmcgaW50byBhXG4gKiBVVEYtOCBkYXRhIHZpZXcuIEl0J3MgY2FsbGVkIGJ5IGBwYXJzZWAgaXRzZWxmLCBzbyBpbiByZWFsIHdvcmxkXG4gKiB1c2FnZSwgaXQncyBub3QgbmVjZXNzYXJ5IHRvIGtub3cuXG4gKlxuICogYGBgXG4gKiBjb25zdCB2aWV3ID0gc3RyaW5nVG9WaWV3KCdcXHRPbm9tYXRvcG9laWFcXHRcXHRcXHRcXHTguITguLPguYDguKXguLXguKLguJnguYDguKrguLXguKLguIcnKVxuICogY29uc3QgbWVzc2FnZSA9IGZvcm1hdChbZXhwZWN0ZWQoJ2EgZGlnaXQnKV0sIDI5LCB2aWV3LCA0LCA3MilcbiAqIGBgYFxuICpcbiAqIEZyb20gdGhpcyBjYWxsIHRvIGBmb3JtYXRgLCB0aGUgZm9sbG93aW5nIG11bHRpLWxpbmUgc3RyaW5nIHdpbGwgYmVcbiAqIHByb2R1Y2VkOlxuICpcbiAqIGBgYFxuICogUGFyc2UgZXJyb3IgYXQgKGxpbmUgMSwgY29sdW1uIDM3KTpcbiAqXG4gKiAgICAgT25vbWF0b3BvZWlhICAgICAgICAgICAgICAgIOC4hOC4s+C5gOC4peC4teC4ouC4meC5gOC4quC4teC4ouC4h1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXlxuICogRXhwZWN0ZWQgYSBkaWdpdFxuICogYGBgXG4gKlxuICogQHBhcmFtIHtFcnJvckxpc3R9IGVycm9ycyBUaGUgbGlzdCBvZiBlcnJvcnMgdG8gYmUgZm9ybWF0dGVkLlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBpbiB0aGUgdmlldyB3aGVyZSB0aGUgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgaW5wdXQgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGV0ZXJtaW5lIHdoZXJlXG4gKiAgICAgdGFiIHN0b3BzIGxheS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbbWF4V2lkdGg9NzJdIFRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsaW5lIGJlaW5nXG4gKiAgICAgZGlzcGxheWVkLiBJZiB0aGUgbGluZSBpcyBsb25nZXIgdGhhbiB0aGlzLCBpdCB3aWxsIGJlIHRydW5jYXRlZFxuICogICAgIHdpdGggZWxsaXBzZXMgYWRkZWQgYmVmb3JlIGFuZC9vciBhZnRlciBhcyBhcHByb3ByaWF0ZS5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbaW5kZW50PTBdIFRoZSBudW1iZXIgb2Ygc3BhY2VzIHRoZSBtZXNzYWdlIHNob3VsZCBiZVxuICogICAgIGluZGVudGVkLiBUaGlzIHNob3VsZCBiZSAwIGFuZCBpbmNyZWFzZWQgb25seSBmb3IgbmVzdGVkIGVycm9ycy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChcbiAgZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSA9IDgsIG1heFdpZHRoID0gNzIsIGluZGVudCA9IDAsXG4pIHtcbiAgY29uc3QgeyBzdGFydCwgZW5kLCBsaW5lbm8gfSA9IGdldExpbmVJbmRleGVzKGluZGV4LCB2aWV3KVxuICBjb25zdCBjaGFySW5kZXggPSBnZXRDaGFySW5kZXgoaW5kZXgsIHZpZXcsIHN0YXJ0KVxuICBjb25zdCBzcCA9ICcgJy5yZXBlYXQoaW5kZW50KVxuXG4gIGNvbnN0IHJhd0xpbmUgPSB2aWV3VG9TdHJpbmcoc3RhcnQsIGVuZCAtIHN0YXJ0ICsgMSwgdmlldylcbiAgY29uc3QgeyBjb2xJbmRleCwgbGluZSB9ID0gdGFiaWZ5KGNoYXJJbmRleCwgcmF3TGluZSwgdGFiU2l6ZSlcbiAgY29uc3QgeyBjb2xubywgbGVuZ3RoIH0gPSBnZXRDb2xOdW1iZXIoY29sSW5kZXgsIGxpbmUpXG5cbiAgY29uc3QgcG9zaXRpb24gPSBgJHtzcH1QYXJzZSBlcnJvciBhdCAobGluZSAke2xpbmVub30sIGNvbHVtbiAke2NvbG5vfSk6YFxuICBjb25zdCBkaXNwbGF5ID0gc2hvdyhsaW5lLCBsZW5ndGgsIGNvbG5vLCBtYXhXaWR0aCwgaW5kZW50KVxuICBjb25zdCBnZW5lcmljID0gZXJyb3JzLmZpbmQoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkdlbmVyaWMpXG4gIGNvbnN0IHVuZXhwZWN0ZWQgPSBlcnJvcnMuZmluZChlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuVW5leHBlY3RlZClcbiAgY29uc3QgZXhwZWN0ZWQgPSBjb21tYVNlcGFyYXRlKFxuICAgIGVycm9ycy5maWx0ZXIoZXJyb3IgPT4gZXJyb3IudHlwZSA9PT0gRXJyb3JUeXBlLkV4cGVjdGVkKVxuICAgICAgLm1hcChlcnJvciA9PiBlcnJvci5sYWJlbCksXG4gIClcblxuICBjb25zdCBuZXN0ZWQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IGVycm9yLnR5cGUgPT09IEVycm9yVHlwZS5OZXN0ZWQpXG4gIGNvbnN0IGNvbXBvdW5kID0gZXJyb3JzLmZpbHRlcihlcnJvciA9PiBlcnJvci50eXBlID09PSBFcnJvclR5cGUuQ29tcG91bmQpXG5cbiAgY29uc3QgdW5leHBNc2cgPSB1bmV4cGVjdGVkID8gYCR7c3B9VW5leHBlY3RlZCAke3VuZXhwZWN0ZWQubGFiZWx9XFxuYCA6ICcnXG4gIGNvbnN0IGV4cE1zZyA9IGV4cGVjdGVkLmxlbmd0aCA/IGAke3NwfUV4cGVjdGVkICR7ZXhwZWN0ZWR9XFxuYCA6ICcnXG4gIGNvbnN0IGdlbmVyaWNNc2cgPSBnZW5lcmljID8gYCR7c3B9JHtnZW5lcmljLmxhYmVsfVxcbmAgOiAnJ1xuXG4gIGNvbnN0IG5lc3RlZE1zZyA9IGZvcm1hdE5lc3RlZChuZXN0ZWQsIHRhYlNpemUsIG1heFdpZHRoLCBpbmRlbnQpXG4gIGNvbnN0IGNvbXBvdW5kTXNnID0gZm9ybWF0TmVzdGVkKGNvbXBvdW5kLCB0YWJTaXplLCBtYXhXaWR0aCwgaW5kZW50KVxuXG4gIGNvbnN0IHVua25vd25Nc2cgPSBlcnJvcnMubGVuZ3RoID09PSAwID8gYCR7c3B9VW5rbm93biBlcnJvcihzKVxcbmAgOiAnJ1xuICBjb25zdCBlb2ZNc2cgPSBpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGhcbiAgICA/IGAke3NwfU5vdGU6IGZhaWx1cmUgb2NjdXJyZWQgYXQgdGhlIGVuZCBvZiBpbnB1dFxcbmAgOiAnJ1xuXG4gIHJldHVybiBlbnN1cmVOZXdsaW5lcyhcbiAgICBgJHtwb3NpdGlvbn1cXG5cXG4ke2Rpc3BsYXl9XFxuJHt1bmV4cE1zZ30ke2V4cE1zZ30ke2dlbmVyaWNNc2d9JHt1bmtub3duTXNnfWBcbiAgICAgICsgYCR7ZW9mTXNnfSR7Y29tcG91bmRNc2d9JHtuZXN0ZWRNc2d9YCxcbiAgICAyLFxuICApXG59XG5cbi8vICNlbmRyZWdpb25cblxuLyoqXG4gKiBBY2NlcHRzIGEgcGFyc2VyIGNvbnRleHQgYW5kIHByb2R1Y2VzIGFuIGVycm9yIG1lc3NhZ2UgZnJvbSBpdC5cbiAqXG4gKiBBIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHByb3ZpZGVkIGJ1dCBhbiBhbHRlcm5hdGUgb25lIGNhbiBiZSBwYXNzZWRcbiAqIGluLiBUaGUgc2FtZSBnb2VzIGZvciB0YWIgc2l6ZSAodXNlZCB0byBleHBhbmQgdGFicyBpbiBwYXJzZWQgdGV4dDtcbiAqIGRlZmF1bHRzIHRvIDggaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKSBhbmQgbWF4IHdpZHRoIChmb3IgdGhlIGVycm9yXG4gKiBtZXNzYWdlIGl0c2VsZjsgZGVmYXVsdHMgdG8gNzIgaW4gdGhlIGRlZmF1bHQgZm9ybWF0dGVyKS5cbiAqXG4gKiBAcGFyYW0ge1JlcGx5fSByZXBseSBUaGUgcmVwbHkgcmV0dXJuZWQgYnkgdGhlIHBhcnNlciB3aGVuIHRoZSBlcnJvclxuICogICAgIGhhcHBlbmVkLlxuICogQHBhcmFtIHtudW1iZXJ9IFt0YWJTaXplXSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlIHRhYnNcbiAqICAgICBzdG9wLlxuICogQHBhcmFtIHtudW1iZXJ9IFttYXhXaWR0aF0gVGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxpbmUgYmVpbmdcbiAqICAgICBkaXNwbGF5ZWQuIElmIHRoZSBsaW5lIGlzIGxvbmdlciB0aGFuIHRoaXMsIGl0IHdpbGwgYmUgdHJ1bmNhdGVkXG4gKiAgICAgd2l0aCBlbGxpcHNlcyBhZGRlZCBiZWZvcmUgYW5kL29yIGFmdGVyIGFzIGFwcHJvcHJpYXRlLlxuICogQHBhcmFtIHtGb3JtYXR0ZXJ9IFtmb3JtYXR0ZXI9Zm9ybWF0XSBUaGUgZnVuY3Rpb24gdG8gd2hpY2ggdGhlXG4gKiAgICAgYWN0dWFsIGZvcm1hdHRpbmcgaXMgZGVsZWdhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3JzKHJlcGx5LCB0YWJTaXplLCBtYXhXaWR0aCwgZm9ybWF0dGVyID0gZm9ybWF0KSB7XG4gIGNvbnN0IFtjdHgsIHJlc3VsdF0gPSByZXBseVxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGZvcm1hdHRlcihyZXN1bHQuZXJyb3JzLCBpbmRleCwgdmlldywgdGFiU2l6ZSwgbWF4V2lkdGgpXG59XG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIG5leHQgYnl0ZSBvZiB0aGUgc3VwcGxpZWQgY29udGV4dC4gVGhlXG4gKiBwb3NpdGlvbiBpcyBhbiBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gIHByb3BlcnRpZXMgdGhhdCBhcmVcbiAqIHRoZSAxLWJhc2VkIGxpbmUgYW5kIGNvbHVtbiBudW1iZXJzIG9mIHRoZSBieXRlIGF0IHRoZSBjb250ZXh0J3NcbiAqIGluZGV4IHdpdGhpbiB0aGUgY29udGV4dCdzIGRhdGEgdmlldy5cbiAqXG4gKiBAcGFyYW0ge0NvbnRleHR9IGN0eCBUaGUgY29udGV4dCB3aG9zZSBjdXJyZW50IHBvc2l0aW9uIGlzIGJlaW5nXG4gKiAgICAgY2FsY3VsYXRlZC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbdGFiU2l6ZT04XSBBIG51bWJlciB3aG9zZSBtdWx0aXBsZXMgZGVmaW5lIHdoZXJlXG4gKiAgICAgdGFicyBzdG9wLiBUaGUgY3VycmVudCBwb3NpdGlvbidzIGNvbHVtbiBudW1iZXIgaXMgYWRqdXN0ZWQgYmFzZWRcbiAqICAgICBvbiB0aGlzIHBhcmFtZXRlciB3aGVuIHRhYiBjaGFyYWN0ZXJzIGFyZSBwcmVzZW50LlxuICogQHJldHVybnMge1Bvc2l0aW9ufSBBIHR3by1wcm9wZXJ0eSBvYmplY3Qgd2l0aCBgbGluZWAgYW5kIGBjb2x1bW5gXG4gKiAgICAgcHJvcGVydGllcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFBvc2l0aW9uKGN0eCwgdGFiU2l6ZSA9IDgpIHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHsgc3RhcnQsIGVuZCwgbGluZW5vIH0gPSBnZXRMaW5lSW5kZXhlcyhpbmRleCwgdmlldylcbiAgY29uc3QgY2hhckluZGV4ID0gZ2V0Q2hhckluZGV4KGluZGV4LCB2aWV3LCBzdGFydClcblxuICBjb25zdCByYXdMaW5lID0gdmlld1RvU3RyaW5nKHN0YXJ0LCBlbmQgLSBzdGFydCArIDEsIHZpZXcpXG4gIGNvbnN0IHsgY29sSW5kZXgsIGxpbmUgfSA9IHRhYmlmeShjaGFySW5kZXgsIHJhd0xpbmUsIHRhYlNpemUpXG4gIGNvbnN0IHsgY29sbm8sIF8gfSA9IGdldENvbE51bWJlcihjb2xJbmRleCwgbGluZSlcblxuICByZXR1cm4geyBsaW5lOiBsaW5lbm8sIGNvbHVtbjogY29sbm8gfVxufVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUlNcblxuZXhwb3J0IHtcbiAgYWxwaGEsXG4gIGFueSxcbiAgY2hhcixcbiAgZGlnaXQsXG4gIGVvZixcbiAgaGV4LFxuICBpY2hhcixcbiAgbGV0dGVyLFxuICBsb3dlcixcbiAgbm9uZW9mLFxuICBvY3RhbCxcbiAgb25lb2YsXG4gIHJhbmdlLFxuICBzYXRpc2Z5LFxuICB1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL2NoYXInXG5leHBvcnQge1xuICBhbHdheXMsXG4gIGZhaWwsXG4gIGZhdGFsLFxufSBmcm9tICcuL3BhcnNlcnMvbWlzYydcbmV4cG9ydCB7XG4gIG5ld2xpbmUsXG4gIHJlZ2V4LFxuICBzcGFjZSxcbiAgc3BhY2VzLFxuICBzcGFjZXMxLFxuICB1YWxwaGEsXG4gIHVsZXR0ZXIsXG4gIHVsb3dlcixcbiAgdW5ld2xpbmUsXG4gIHVzcGFjZSxcbiAgdXNwYWNlcyxcbiAgdXNwYWNlczEsXG4gIHV1cHBlcixcbn0gZnJvbSAnLi9wYXJzZXJzL3JlZ2V4J1xuZXhwb3J0IHtcbiAgYWxsLFxuICBhbnlzdHIsXG4gIGlzdHIsXG4gIHN0cixcbn0gZnJvbSAnLi9wYXJzZXJzL3N0cmluZydcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIENPTUJJTkFUT1JTXG5cbmV4cG9ydCB7XG4gIGFsdCxcbiAgZGVmLFxuICBlbXB0eSxcbiAgbm90LFxuICBvcHQsXG4gIHBlZWssXG59IGZyb20gJy4vY29tYmluYXRvcnMvYWx0ZXJuYXRpdmUnXG5leHBvcnQge1xuICBhdHRlbXB0LFxuICBiYXBwbHksXG4gIGJiZXR3ZWVuLFxuICBiYmxvY2ssXG4gIGJjaGFpbixcbiAgYmNvdW50LFxuICBibGVmdCxcbiAgYnBpcGUsXG4gIGJyaWdodCxcbiAgYnNlcSxcbiAgYnVudGlsLFxufSBmcm9tICcuL2NvbWJpbmF0b3JzL2JhY2t0cmFja2luZydcbmV4cG9ydCB7XG4gIGFwcGx5LFxuICBjaGFpbixcbiAgY29tcGFjdCxcbiAgZmlmdGgsXG4gIGZpcnN0LFxuICBmb3VydGgsXG4gIGpvaW4sXG4gIG1hcCxcbiAgbnRoLFxuICBzZWNvbmQsXG4gIHRoaXJkLFxuICB2YWx1ZSxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9jaGFpbmluZydcbmV4cG9ydCB7XG4gIGJldHdlZW4sXG4gIGJsb2NrLFxuICBjb3VudCxcbiAgZW5kYnksXG4gIGVuZGJ5MSxcbiAgbGFzc29jLFxuICBsYXNzb2MxLFxuICBsZWZ0LFxuICBtYW55LFxuICBtYW55MSxcbiAgcGlwZSxcbiAgcmFzc29jLFxuICByYXNzb2MxLFxuICByaWdodCxcbiAgc2VwYnksXG4gIHNlcGJ5MSxcbiAgc2VxLFxuICBza2lwLFxuICB1bnRpbCxcbn0gZnJvbSAnLi9jb21iaW5hdG9ycy9zZXF1ZW5jZSdcblxuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFBBUlNFUiBUT09MUyBBTkQgVVRJTElUSUVTXG5cbmV4cG9ydCB7XG4gIFN0YXR1cyxcbiAgZmFpbFJlcGx5LFxuICBmYWlsdXJlLFxuICBmYXRhbFJlcGx5LFxuICBva1JlcGx5LFxuICBwYXJzZSxcbiAgcGFyc2VyLFxuICBydW4sXG4gIHN0YXR1cyxcbiAgc3VjY2VlZGVkLFxuICBzdWNjZXNzLFxufSBmcm9tICcuL2NvcmUnXG5leHBvcnQge1xuICBFcnJvclR5cGUsXG4gIGNvbXBvdW5kLFxuICBleHBlY3RlZCxcbiAgZm9ybWF0RXJyb3JzLFxuICBnZW5lcmljLFxuICBnZXRQb3NpdGlvbixcbiAgbWVyZ2UsXG4gIG5lc3RlZCxcbiAgb3RoZXIsXG4gIHVuZXhwZWN0ZWQsXG59IGZyb20gJy4vZXJyb3InXG4iLCIvLyBDb3B5cmlnaHQgKGMpIDIwMjAgVGhvbWFzIEouIE90dGVyc29uXG4vL1xuLy8gVGhpcyBzb2Z0d2FyZSBpcyByZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4vLyBodHRwczovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuXG5pbXBvcnQgeyBleHBlY3RlZCB9IGZyb20gJy4vZXJyb3InXG5pbXBvcnQgeyBjb21tYVNlcGFyYXRlLCBxdW90ZSB9IGZyb20gJy4vdXRpbCdcblxuZXhwb3J0IGNvbnN0IHN0cmluZ3MgPSB7XG4gIGFscGhhOiAnYW4gYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIGFueTogJ2FueSBjaGFyYWN0ZXInLFxuICBhbnlzdHI6IG4gPT4gYGEgc3RyaW5nIG9mICR7bn0gY2hhcmFjdGVyc2AsXG4gIGNoYXI6IGMgPT4gcXVvdGUoYyksXG4gIGRpZ2l0OiAnYSBkaWdpdCcsXG4gIGVvZjogJ2VuZCBvZiBpbnB1dCcsXG4gIGhleDogJ2EgaGV4YWRlY2ltYWwgZGlnaXQnLFxuICBpY2hhcjogYyA9PiBxdW90ZShjKSxcbiAgaXN0cjogcyA9PiBxdW90ZShzKSxcbiAgbGV0dGVyOiAnYSBsZXR0ZXInLFxuICBsb3dlcjogJ2EgbG93ZXJjYXNlIGxldHRlcicsXG4gIG5ld2xpbmU6ICdhIG5ld2xpbmUnLFxuICBub25lb2Y6IGFycmF5ID0+ICdub25lIG9mICcgKyBjb21tYVNlcGFyYXRlKGFycmF5Lm1hcChjID0+IGAnJHtjfSdgKSksXG4gIG9jdGFsOiAnYW4gb2N0YWwgZGlnaXQnLFxuICBvbmVvZjogYXJyYXkgPT4gJ29uZSBvZiAnICsgY29tbWFTZXBhcmF0ZShhcnJheS5tYXAoYyA9PiBgJyR7Y30nYCkpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGBhIGNoYXJhY3RlciBiZXR3ZWVuICcke3N0YXJ0fScgYW5kICcke2VuZH0nYCxcbiAgcmVnZXg6IHJlID0+IGBhIHN0cmluZyBtYXRjaGluZyAke3JlfWAsXG4gIHNwYWNlOiAnYSB3aGl0ZXNwYWNlIGNoYXJhY3RlcicsXG4gIHNwYWNlczogJ3plcm8gb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICBzcGFjZXMxOiAnb25lIG9yIG1vcmUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzJyxcbiAgc3RyOiBzID0+IHF1b3RlKHMpLFxuICB1YWxwaGE6ICdhIFVuaWNvZGUgYWxwaGFudW1lcmljIGNoYXJhY3RlcicsXG4gIHVsZXR0ZXI6ICdhIFVuaWNvZGUgbGV0dGVyJyxcbiAgdWxvd2VyOiAnYSBVbmljb2RlIGxvd2VyY2FzZSBsZXR0ZXInLFxuICB1bmV3bGluZTogJ2EgVW5pY29kZSBuZXdsaW5lJyxcbiAgdXBwZXI6ICdhbiB1cHBlcmNhc2UgbGV0dGVyJyxcbiAgdXNwYWNlOiAnYSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyJyxcbiAgdXNwYWNlczogJ3plcm8gb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycycsXG4gIHVzcGFjZXMxOiAnb25lIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMnLFxuICB1dXBwZXI6ICdhIFVuaWNvZGUgdXBwZXJjYXNlIGxldHRlcicsXG59XG5cbmV4cG9ydCBjb25zdCBleHBlY3RlZHMgPSB7XG4gIGFscGhhOiBleHBlY3RlZChzdHJpbmdzLmFscGhhKSxcbiAgYW55OiBleHBlY3RlZChzdHJpbmdzLmFueSksXG4gIGFueXN0cjogbiA9PiBleHBlY3RlZChzdHJpbmdzLmFueXN0cihuKSksXG4gIGNoYXI6IGMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5jaGFyKGMpKSxcbiAgZGlnaXQ6IGV4cGVjdGVkKHN0cmluZ3MuZGlnaXQpLFxuICBlb2Y6IGV4cGVjdGVkKHN0cmluZ3MuZW9mKSxcbiAgaGV4OiBleHBlY3RlZChzdHJpbmdzLmhleCksXG4gIGljaGFyOiBjID0+IGV4cGVjdGVkKHN0cmluZ3MuaWNoYXIoYykpLFxuICBpc3RyOiBzID0+IGV4cGVjdGVkKHN0cmluZ3MuaXN0cihzKSksXG4gIGxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy5sZXR0ZXIpLFxuICBsb3dlcjogZXhwZWN0ZWQoc3RyaW5ncy5sb3dlciksXG4gIG5ld2xpbmU6IGV4cGVjdGVkKHN0cmluZ3MubmV3bGluZSksXG4gIG5vbmVvZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5ub25lb2YoYXJyYXkpKSxcbiAgb2N0YWw6IGV4cGVjdGVkKHN0cmluZ3Mub2N0YWwpLFxuICBvbmVvZjogYXJyYXkgPT4gZXhwZWN0ZWQoc3RyaW5ncy5vbmVvZihhcnJheSkpLFxuICByYW5nZTogKHN0YXJ0LCBlbmQpID0+IGV4cGVjdGVkKHN0cmluZ3MucmFuZ2Uoc3RhcnQsIGVuZCkpLFxuICByZWdleDogcmUgPT4gZXhwZWN0ZWQoc3RyaW5ncy5yZWdleChyZSkpLFxuICBzcGFjZTogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZSksXG4gIHNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy5zcGFjZXMpLFxuICBzcGFjZXMxOiBleHBlY3RlZChzdHJpbmdzLnNwYWNlczEpLFxuICBzdHI6IHMgPT4gZXhwZWN0ZWQoc3RyaW5ncy5zdHIocykpLFxuICB1YWxwaGE6IGV4cGVjdGVkKHN0cmluZ3MudWFscGhhKSxcbiAgdWxldHRlcjogZXhwZWN0ZWQoc3RyaW5ncy51bGV0dGVyKSxcbiAgdWxvd2VyOiBleHBlY3RlZChzdHJpbmdzLnVsb3dlciksXG4gIHVuZXdsaW5lOiBleHBlY3RlZChzdHJpbmdzLnVuZXdsaW5lKSxcbiAgdXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXBwZXIpLFxuICB1c3BhY2U6IGV4cGVjdGVkKHN0cmluZ3MudXNwYWNlKSxcbiAgdXNwYWNlczogZXhwZWN0ZWQoc3RyaW5ncy51c3BhY2VzKSxcbiAgdXNwYWNlczE6IGV4cGVjdGVkKHN0cmluZ3MudXNwYWNlczEpLFxuICB1dXBwZXI6IGV4cGVjdGVkKHN0cmluZ3MudXVwcGVyKSxcbn1cbiIsIi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7XG4gIGFyZ0NoYXJGb3JtYXR0ZXIsXG4gIGFyZ0ZuRm9ybWF0dGVyLFxuICBhcmdTdHJBcnJGb3JtYXR0ZXIsXG4gIGFyZ1N0ckZvcm1hdHRlcixcbiAgYXNzZXJ0Q2hhcixcbiAgYXNzZXJ0RnVuY3Rpb24sXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JBcnJheSxcbn0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgb2tSZXBseSwgcGFyc2VyLCBTdGF0dXMgfSBmcm9tICdrZXNzZWwvY29yZSdcbmltcG9ydCB7IGV4cGVjdGVkcyB9IGZyb20gJ2tlc3NlbC9tZXNzYWdlcydcbmltcG9ydCB7IGR1cCwgZmVycm9yLCBuZXh0Q2hhciB9IGZyb20gJ2tlc3NlbC91dGlsJ1xuXG5jb25zdCB7IE9rIH0gPSBTdGF0dXNcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJ2tlc3NlbC9jb3JlJykuUGFyc2VyfSBQYXJzZXIgKi9cblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciwgZmVlZHMgaXQgdG8gYSBmdW5jdGlvbiwgYW5kXG4gKiBzdWNjZWVkcyBvciBmYWlscyBiYXNlZCBvbiB0aGUgcmV0dXJuIHZhbHVlLlxuICpcbiAqIFRoZXJlIGlzbid0IGFueXRoaW5nIGhlcmUgdGhhdCBjb3VsZG4ndCBiZSB3cml0dGVuIHdpdGhcbiAqIGBTdHJpbmdQYXJzZXJgIGluc3RlYWQsIGJ1dCB3aGVuIHdvcmtpbmcgd2l0aCBzaW5nbGUgY2hhcmFjdGVycyB0aGVyZVxuICogYXJlIGNlcnRhaW4gYXNzdW1wdGlvbnMgdGhhdCBjYW4gYmUgbWFkZSAoc3VjaCBhcyB0aGUgbnVtYmVyIG9mXG4gKiBjaGFyYWN0ZXJzIHRoYXQgaGF2ZSB0byBiZSByZWFkIGZyb20gdGhlIGlucHV0IHZpZXcpIHRoYXQgYWxsb3cgaXQgdG9cbiAqIGJlIGEgbGl0dGxlIG1vcmUgZWZmaWNpZW50LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTpib29sZWFufSBmbiBBIGZ1bmN0aW9uIHRvIHdoaWNoIHRoZSBuZXh0XG4gKiAgICAgY2hhcmFjdGVyIGlzIHBhc3NlZDsgaWYgaXQgcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXIgc3VjY2VlZHNcbiAqICAgICBhbmQgaWYgaXQgcmV0dXJucyBgZmFsc2VgIHRoZSBwYXJzZXIgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2hhcmFjdGVyIGFuZCBleGVjdXRlcyBgZm5gXG4gKiAgICAgb24gaXQgd2hlbiBhcHBsaWVkIHRvIGlucHV0LlxuICovXG5jb25zdCBjaGFyUGFyc2VyID0gZm4gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSByZXR1cm4gZmFpbFJlcGx5KGN0eClcblxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgcmV0dXJuIGZuKG5leHQpID8gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpIDogZmFpbFJlcGx5KGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgZnJvbSBpbnB1dCBhbmQgc3VjY2VlZHMgaWZcbiAqIHRoYXQgY2hhcmFjdGVyIGlzIGBjYC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gYyBUaGUgY2hhcmFjdGVyIHRvIGNvbXBhcmUgdGhlIG5leHQgY2hhcmFjdGVyIGluIHRoZVxuICogICAgIGlucHV0IHRvLiBJZiBgY2AgaXMgbW9yZSB0aGFuIG9uZSBjaGFyYWN0ZXIsIHRoaXMgcGFyc2VyIHdpbGxcbiAqICAgICB0aHJvdyBhbiBlcnJvci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgd2lsbCBzdWNjZWVkIGlmIGBjYCBpcyB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBjaGFyID0gKGMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ2NoYXInLCBjLCBhcmdDaGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2NoYXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihjaCA9PiBjID09PSBjaCkoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPa1xuICAgID8gY3JlcFxuICAgIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuY2hhcihjKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgY2hhcmFjdGVyIGZyb20gaW5wdXQgYW5kIHN1Y2NlZWRzIGlmXG4gKiB0aGF0IGNoYXJhY3RlciBpcyBgY2AuIFRoaXMgZGlmZmVycyBmcm9tIGBjaGFyYCBpbiB0aGF0IHRoZVxuICogY29tcGFyaXNvbiBkb25lIGJ5IHRoaXMgcGFyc2VyIGlzIGNhc2UtaW5zZW5zaXRpdmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGMgVGhlIGNoYXJhY3RlciB0byBjb21wYXJlIHRoZSBuZXh0IGNoYXJhY3RlciBpbiB0aGVcbiAqICAgICBpbnB1dCB0by4gSWYgYGNgIGlzIG1vcmUgdGhhbiBvbmUgY2hhcmFjdGVyLCB0aGlzIHBhcnNlciB3aWxsXG4gKiAgICAgdGhyb3cgYW4gZXJyb3IuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiBgY2AgKG9yIGl0c1xuICogICAgIG90aGVyLWNhc2VkIGNvdW50ZXJwYXJ0KSBpcyB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlIGlucHV0LlxuICovXG5leHBvcnQgY29uc3QgaWNoYXIgPSAoYywgbSkgPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgYXNzZXJ0Q2hhcignaWNoYXInLCBjLCBhcmdDaGFyRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2ljaGFyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoXG4gICAgY2ggPT4gYy50b0xvd2VyQ2FzZSgpID09PSBjaC50b0xvd2VyQ2FzZSgpLFxuICApKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGNyZXBcbiAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmljaGFyKGMpKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIHNpbmdsZSBjaGFyYWN0ZXIgYW5kIHBhc3NlcyBpdCB0byB0aGUgcHJvdmlkZWRcbiAqIGZ1bmN0aW9uLiBJZiB0aGUgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoaXMgcGFyc2VyIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyIGFzIHRoZSByZXN1bHQuIElmIHRoZSBmdW5jdGlvbiByZXR1cm5zIGBmYWxzZWAsIHRoaXNcbiAqIHBhcnNlciBmYWlscyBhbmQgY29uc3VtZXMgbm8gaW5wdXQuXG4gKlxuICogVGhpcyBwYXJzZXIgY2Fubm90IGRldGVybWluZSB0aGUgY2F1c2UgZm9yIGFuIGVycm9yIHNpbmNlIGl0J3Mgbm90XG4gKiBmZWFzaWJsZSB0byBoYXZlIGl0IGFuYWx5emUgdGhlIGZ1bmN0aW9uIHRvIHNlZSB3aGF0IGl0IGV4cGVjdHMgdG9cbiAqIG1hdGNoLCBzbyBubyBlcnJvciBtZXNzYWdlIGlzIHByb3ZpZGVkIG9uIGZhaWx1cmUuIFVzZVxuICogYGxhYmVsKHNhdGlzZnkoZm4pLCBtc2cpYCBvciB0aGUgZXF1aXZhbGVudCBgc2F0aXNmeUwoZm4sIG1zZylgIHRvXG4gKiBhZGQgYW4gYXBwcm9wcmlhdGUgZXJyb3IgbWVzc2FnZS5cbiAqXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKHN0cmluZyk6Ym9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgbmV4dFxuICogICAgIGNoYXJhY3RlciBpcyBwYXNzZWQ7IGlmIGl0IHJldHVybnMgYHRydWVgLCB0aGUgcGFyc2VyIHN1Y2NlZWRzXG4gKiAgICAgYW5kIGlmIGl0IHJldHVybnMgYGZhbHNlYCB0aGUgcGFyc2VyIGZhaWxzLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgZXhlY3V0ZXMgYGZuYFxuICogICAgIG9uIGl0IHdoZW4gYXBwbGllZCB0byBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHNhdGlzZnkgPSAoZm4sIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydEZ1bmN0aW9uKCdzYXRpc2Z5JywgZm4sIGFyZ0ZuRm9ybWF0dGVyKDEsIGhhc00pKVxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NhdGlzZnknLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgaWYgKGNyZXMuc3RhdHVzID09PSBPaykgcmV0dXJuIGNyZXBcbiAgcmV0dXJuIGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgY3Jlcy5lcnJvcnMpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc2luZ2xlIGNoYXJhY3RlciBhbmQgZGV0ZXJtaW5lcyB3aGV0aGVyIGl0IGlzXG4gKiBiZXR3ZWVuIChhY2NvcmRpbmcgdG8gY29kZSBwb2ludHMpIGNoYXJhY3RlcnMgYHNgIGFuZCBgZWBcbiAqIChpbmNsdXNpdmUpLiBJZiBpdCBpcywgdGhlIHJlYWQgY2hhcmFjdGVyIGlzIHRoZSBzdWNjZXNzZnVsIHJlc3VsdCxcbiAqIGFuZCBpZiBpdCBpcyBub3QsIHRoZSBwYXJzZXIgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQuXG4gKlxuICogYHNgIGFuZCBgZWAgYXJlIGV4cGVjdGVkIHRvIGJlIHNpbmdsZSBjaGFyYWN0ZXJzLiBBbiBlcnJvciB3aWxsIGJlXG4gKiB0aHJvd24gaWYgdGhleSBhcmUgbm90LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBjaGFyYWN0ZXIgdGhhdCBkZWZpbmVzIHRoZSBzdGFydCBvZiB0aGUgcmFuZ2VcbiAqICAgICBvZiBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IGUgVGhlIGNoYXJhY3RlciB0aGF0IGRlZmluZXMgdGhlIGVuZCBvZiB0aGUgcmFuZ2Ugb2ZcbiAqICAgICBjaGFyYWN0ZXJzIHRvIG1hdGNoLiBJdCBpcyBpbmNsdWRlZCBpbiB0aGF0IHJhbmdlLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCB3aWxsIHN1Y2NlZWQgaWYgdGhlIG5leHQgaW5wdXRcbiAqICAgICBjaGFyYWN0ZXIgaXMgYmV0d2VlbiBgc3RhcnRgIGFuZCBgZW5kYCAoaW5jbHVzaXZlKS5cbiAqL1xuZXhwb3J0IGNvbnN0IHJhbmdlID0gKHMsIGUsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgcywgYXJnQ2hhckZvcm1hdHRlcigxLCB0cnVlKSlcbiAgQVNTRVJUICYmIGFzc2VydENoYXIoJ3JhbmdlJywgZSwgYXJnQ2hhckZvcm1hdHRlcigyLCB0cnVlKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdyYW5nZScsIG0sIGFyZ1N0ckZvcm1hdHRlcigzLCB0cnVlKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSBzICYmIGMgPD0gZVxuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBjcmVwXG4gICAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5yYW5nZShzLCBlKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzaW5nbGUgaW5wdXQgY2hhcmFjdGVyIGFuZCB0aGVuIHN1Y2NlZWRzIHdpdGhcbiAqIHRoYXQgY2hhcmFjdGVyLiBGYWlscyBvbmx5IGlmIHRoZXJlIGlzIG5vIGlucHV0IGxlZnQgdG8gcmVhZC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IG1hdGNoZXMgYW55IGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ2FueScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBpZiAoaW5kZXggPj0gdmlldy5ieXRlTGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuYW55KSlcbiAgfVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFyKGluZGV4LCB2aWV3KVxuICByZXR1cm4gb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgb25lIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhhdCBjaGFyYWN0ZXIgZG9lc1xuICogbm90IGV4aXN0IChpLmUuLCBpZiB0aGUgaW5kZXggaXMgYWxyZWFkeSBhdCB0aGUgZW5kIG9mIHRoZSBpbnB1dCkuXG4gKiBDb25zdW1lcyBub3RoaW5nIG9uIGVpdGhlciBzdWNjZXNzIG9yIGZhaWx1cmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBtYXRjaGVzIHRoZSBlbmQgb2YgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBlb2YgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdlb2YnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgcmV0dXJuIGluZGV4ID49IHZpZXcuYnl0ZUxlbmd0aFxuICAgID8gb2tSZXBseShjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkoY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmVvZikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlIHBhcnNlclxuICogd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBiZSBhIG1lbWJlciBmb3JcbiAqICAgICB0aGUgcGFyc2VyIHRvIHN1Y2NlZWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBvbmVcbiAqICAgICBvZiB0aGUgY2hhcmFjdGVycyBpbiBgY2hhcnNgLlxuICovXG5leHBvcnQgY29uc3Qgb25lb2YgPSAoY3MsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ29uZW9mJywgY3MsIGFyZ1N0ckFyckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdvbmVvZicsIG0sIGFyZ1N0ckZvcm1hdHRlcigyLCB0cnVlKSlcblxuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3QgeyB3aWR0aCwgbmV4dCB9ID0gbmV4dENoYXIoaW5kZXgsIHZpZXcpXG4gIGNvbnN0IGFyciA9IFsuLi5jc11cblxuICByZXR1cm4gYXJyLmluY2x1ZGVzKG5leHQpXG4gICAgPyBva1JlcGx5KGN0eCwgbmV4dCwgaW5kZXggKyB3aWR0aClcbiAgICA6IGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMub25lb2YoYXJyKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIGNvbXBhcmVzIGl0IGFnYWluc3QgZWFjaCBvZiB0aGVcbiAqIGNoYXJhY3RlcnMgaW4gYGNzYCwgd2hpY2ggaXMgZWl0aGVyIGFuIGFycmF5IG9mIGNoYXJhY3RlcnMgb3IgYVxuICogc3RyaW5nLiBJZiB0aGUgcmVhZCBjaGFyYWN0ZXIgaXMgKm5vdCogYW1vbmcgdGhvc2UgY2hhcmFjdGVycywgdGhlXG4gKiBwYXJzZXIgd2lsbCBzdWNjZWVkLlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGNzIFRoZSBjaGFyYWN0ZXJzLCBlaXRoZXIgaW4gYW4gYXJyYXkgb3IgYVxuICogICAgIHN0cmluZywgaW4gd2hpY2ggdGhlIG5leHQgaW5wdXQgY2hhcmFjdGVyIGhhcyB0byBub3QgYmUgYSBtZW1iZXJcbiAqICAgICBmb3IgdGhlIHBhcnNlciB0byBzdWNjZWVkLlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgbm90XG4gKiAgICAgb25lIG9mIHRoZSBjaGFyYWN0ZXJzIGluIGBjaGFyc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub25lb2YgPSAoY3MsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZ09yQXJyYXkoJ25vbmVvZicsIGNzLCBhcmdTdHJBcnJGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbm9uZW9mJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IHsgaW5kZXgsIHZpZXcgfSA9IGN0eFxuICBjb25zdCB7IHdpZHRoLCBuZXh0IH0gPSBuZXh0Q2hhcihpbmRleCwgdmlldylcbiAgY29uc3QgYXJyID0gWy4uLmNzXVxuXG4gIHJldHVybiBhcnIuaW5jbHVkZXMobmV4dClcbiAgICA/IGZhaWxSZXBseShjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMubm9uZW9mKGFycikpKVxuICAgIDogb2tSZXBseShjdHgsIG5leHQsIGluZGV4ICsgd2lkdGgpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGRpZ2l0LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGRpZ2l0ID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnZGlnaXQnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5kaWdpdCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgaGV4YWRlY2ltYWwgZGlnaXQuIFRoaXMgcGFyc2VyIGlzIG5vdCBjYXNlIHNlbnNpdGl2ZS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgaGV4YWRlY2ltYWwgZGlnaXQuXG4gKi9cbmV4cG9ydCBjb25zdCBoZXggPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdoZXgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgICB8fCBjID49ICdhJyAmJiBjIDw9ICdmJ1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ0YnXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2sgPyBjcmVwIDogZmFpbFJlcGx5KGNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuaGV4KSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gb2N0YWwgZGlnaXQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBvY3RhbCBkaWdpdC5cbiAqL1xuZXhwb3J0IGNvbnN0IG9jdGFsID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnb2N0YWwnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnMCcgJiYgYyA8PSAnNydcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5vY3RhbCkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgbGV0dGVyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbGV0dGVyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgZm4gPSBjID0+IGMgPj0gJ2EnICYmIGMgPD0gJ3onIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gIGNvbnN0IFtjcmVwLCBbY2N0eCwgY3Jlc11dID0gZHVwKGNoYXJQYXJzZXIoZm4pKGN0eCkpXG4gIHJldHVybiBjcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IGNyZXBcbiAgICA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmxldHRlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIGFscGhhbnVtZXJpYyBjaGFyYWN0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICBhbHBoYW51bWVyaWMgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgY29uc3QgYWxwaGEgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhbHBoYScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdhJyAmJiBjIDw9ICd6J1xuICAgIHx8IGMgPj0gJ0EnICYmIGMgPD0gJ1onXG4gICAgfHwgYyA+PSAnMCcgJiYgYyA8PSAnOSdcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5hbHBoYSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGFuIEFTQ0lJIHVwcGVyY2FzZSBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICB1cHBlcmNhc2UgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgdXBwZXIgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCd1cHBlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IGZuID0gYyA9PiBjID49ICdBJyAmJiBjIDw9ICdaJ1xuICBjb25zdCBbY3JlcCwgW2NjdHgsIGNyZXNdXSA9IGR1cChjaGFyUGFyc2VyKGZuKShjdHgpKVxuICByZXR1cm4gY3Jlcy5zdGF0dXMgPT09IE9rID8gY3JlcCA6IGZhaWxSZXBseShjY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVwcGVyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYW4gQVNDSUkgbG93ZXJjYXNlIGxldHRlci5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbG93ZXJjYXNlIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IGxvd2VyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygnbG93ZXInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBmbiA9IGMgPT4gYyA+PSAnYScgJiYgYyA8PSAneidcbiAgY29uc3QgW2NyZXAsIFtjY3R4LCBjcmVzXV0gPSBkdXAoY2hhclBhcnNlcihmbikoY3R4KSlcbiAgcmV0dXJuIGNyZXMuc3RhdHVzID09PSBPayA/IGNyZXAgOiBmYWlsUmVwbHkoY2N0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5sb3dlcikpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHsgYXNzZXJ0U3RyaW5nIH0gZnJvbSAna2Vzc2VsL2Fzc2VydCdcbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgb2tSZXBseSwgcGFyc2VyIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBnZW5lcmljIH0gZnJvbSAna2Vzc2VsL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIHdpdGggdGhlIHN1cHBsaWVkXG4gKiAgICAgZXJyb3IgbWVzc2FnZS5cbiAqL1xuZXhwb3J0IGNvbnN0IGZhaWwgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYWlsJywgbSlcbiAgcmV0dXJuIGZhaWxSZXBseShjdHgsIGdlbmVyaWMobSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgZmFpbHMgd2l0aG91dCBjb25zdW1pbmcgaW5wdXQsIHNldHRpbmcgdGhlIGdlbmVyaWNcbiAqIGVycm9yIG1lc3NhZ2UgdG8gd2hhdGV2ZXIgaXMgcGFzc2VkIGluLiBUaGlzIHNpZ25pZmllcyBhIGZhdGFsIGVycm9yLFxuICogb25lIHRoYXQgY2Fubm90IGJlIHJlY292ZXJlZCBmcm9tIHdpdGhvdXQgYmFja3RyYWNraW5nLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBtIFRoZSBtZXNzYWdlIHVzZWQgdG8gY3JlYXRlIHRoZSBnZW5lcmljIGVycm9yLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdXRvbWF0aWNhbGx5IGZhaWxzIGZhdGFsbHkgd2l0aCB0aGVcbiAqICAgICBzdXBwbGllZCBlcnJvciBtZXNzYWdlLlxuICovXG5leHBvcnQgY29uc3QgZmF0YWwgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBBU1NFUlQgJiYgYXNzZXJ0U3RyaW5nKCdmYXRhbCcsIG0pXG4gIHJldHVybiBmYXRhbFJlcGx5KGN0eCwgZ2VuZXJpYyhtKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgd2hpY2ggYWx3YXlzIHN1Y2NlZWRzIHdpdGggdGhlIHN1cHBsaWVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc2VydmVzIGFzIGEgcHJpbWl0aXZlIGZvciBib3RoIG1vbmFkcyBhbmQgYXBwbGljYXRpdmVzLiBJblxuICogSGFza2VsbCB0ZXJtcywgdGhpcyBmdW5jdGlvbiByZXByZXNlbnRzIGJvdGggYHB1cmVgIGluIHRoZVxuICogYEFwcGxpY2F0aXZlYCBjbGFzcyBhbmQgYHJldHVybmAgaW4gdGhlIGBNb25hZGAgY2xhc3MuXG4gKlxuICogSW4gb3RoZXIgd29yZHMsIGl0IGxpZnRzIGFuIGFyYml0cmFyeSB2YWx1ZSBpbnRvIGEgUGFyc2VyIGNvbnRleHQsXG4gKiB0dXJuaW5nIGl0IGludG8gYSBwYXJzZXIgdGhhdCByZXR1cm5zIHRoYXQgdmFsdWUuXG4gKlxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB3aWxsIHJlc3VsdCB3aGVuIHRoaXMgcGFyc2VyIGlzIGFwcGxpZWQuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IGFsd2F5cyBzdWNjZWVkcyB3aXRoIGB2YWx1ZWAuXG4gKi9cbmV4cG9ydCBjb25zdCBhbHdheXMgPSB4ID0+IHBhcnNlcihjdHggPT4gb2tSZXBseShjdHgsIHgpKVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnU3RyRm9ybWF0dGVyLFxuICBhcmdTdHJSZWdGb3JtYXR0ZXIsXG4gIGFzc2VydFN0cmluZyxcbiAgYXNzZXJ0U3RyaW5nT3JSZWdFeHAsXG59IGZyb20gJ2tlc3NlbC9hc3NlcnQnXG5pbXBvcnQgeyBmYWlsUmVwbHksIG9rUmVwbHksIHBhcnNlciwgU3RhdHVzIH0gZnJvbSAna2Vzc2VsL2NvcmUnXG5pbXBvcnQgeyBleHBlY3RlZHMgfSBmcm9tICdrZXNzZWwvbWVzc2FnZXMnXG5pbXBvcnQgeyBkdXAsIGZlcnJvciwgc3RyaW5nVG9WaWV3LCB2aWV3VG9TdHJpbmcgfSBmcm9tICdrZXNzZWwvdXRpbCdcblxuY29uc3QgeyBPayB9ID0gU3RhdHVzXG5cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KCdrZXNzZWwvY29yZScpLlBhcnNlcn0gUGFyc2VyICovXG5cbi8vIEFsbCBvZiB0aGUgcmVndWxhciBleHByZXNzaW9ucyB1c2VkIGluIHRoZSBkZXJpdmVkIHJlZ2V4IHBhcnNlcnMuXG4vLyBUaGVzZSBhcmUgaGVyZSB0byBjcmVhdGUgYW5kIGNvbXBpbGUgdGhlbSBvbmNlLCB1cG9uIGluaXRpYWwgbG9hZCwgdG9cbi8vIHNwZWVkIHBhcnNpbmcgbGF0ZXIuXG5cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbGV0dGVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlTGV0dGVyID0gL15cXHB7QWxwaGFiZXRpY30vdVxuLyoqIE1hdGNoZXMgZXZlcnkgVW5pY29kZSBsZXR0ZXIgb3IgbnVtYmVyIGNoYXJhY3Rlci4gKi9cbmNvbnN0IHJlQWxwaGEgPSAvXig/OlxccHtBbHBoYWJldGljfXxcXHB7Tn0pL3Vcbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgdXBwZXJjYXNlIG9yIHRpdGxlY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVwcGVyID0gL14oPzpcXHB7VXBwZXJjYXNlfXxcXHB7THR9KS91XG4vKiogTWF0Y2hlcyBldmVyeSBVbmljb2RlIGxvd2VyY2FzZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZUxvd2VyID0gL15cXHB7TG93ZXJjYXNlfS91XG4vKiogTWF0Y2hlcyBhIHNpbmdsZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVNwYWNlID0gL14oPzpcXHJcXG58W1xcclxcblxcdCBdKS9cbi8qKiBNYXRjaGVzIGEgc2luZ2xlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuICovXG5jb25zdCByZVVzcGFjZSA9IC9eKD86XFxyXFxufFxccHtXaGl0ZV9TcGFjZX0pL3Vcbi8qKiBNYXRjaGVzIHplcm8gb3IgbW9yZSBjb252ZW50aW9uYWwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLiAqL1xuY29uc3QgcmVTcGFjZXMgPSAvXltcXHJcXG5cXHQgXSovXG4vKiogTWF0Y2hlcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVVzcGFjZXMgPSAvXlxccHtXaGl0ZV9TcGFjZX0qL3Vcbi8qKiBNYXRjaGVzIG9uZSBvciBtb3JlIGNvbnZlbnRpb25hbCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuICovXG5jb25zdCByZVNwYWNlczEgPSAvXltcXHJcXG5cXHQgXSsvXG4vKiogTWF0Y2hlcyBvbmUgb3IgbW9yZSBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVycy4gKi9cbmNvbnN0IHJlVXNwYWNlczEgPSAvXlxccHtXaGl0ZV9TcGFjZX0rL3Vcbi8qKiBNYXRjaGVzIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoXFxyLCBcXG4sIG9yIFxcclxcbikuICovXG5jb25zdCByZU5ld2xpbmUgPSAvXig/OlxcclxcbnxcXHJ8XFxuKS9cbi8qKiBNYXRjaGVzIGV2ZXJ5IFVuaWNvZGUgbmV3bGluZSBjaGFyYWN0ZXIsIHBsdXMgXFxyXFxuLiAqL1xuY29uc3QgcmVVbmV3bGluZSA9IC9eKD86XFxyXFxufFtcXHJcXG5cXHUwMDg1XFx1MjAyOFxcdTIwMjldKS91XG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCB0YWtlcyBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBvYmplY3QgYW5kIG1hdGNoZXMgaXQgYXMgZmFyXG4gKiBhcyBpdCBjYW4gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24uXG4gKlxuICogSXQgaXMgYXNzdW1lZCB0aGF0IHRoZSByZWdleCBiZWdpbnMgd2l0aCBhIGBeYCAuIFRoZSBgZ2AgZmxhZyBpc1xuICogaWdub3JlZCBpbiB0aGF0IG9ubHkgdGhlIGZpcnN0IG1hdGNoIGlzIHByb2Nlc3NlZCBhbmQgcmV0dXJuZWQuIFRoaXNcbiAqIGVuc3VyZXMgdGhhdCB0aGUgbWF0Y2ggaXMgb25seSBhZ2FpbnN0IHRoZSB0ZXh0IGRpcmVjdGx5IGF0IHRoZVxuICogY3VycmVudCBwb2ludGVyIGxvY2F0aW9uLlxuICpcbiAqIEBwYXJhbSB7UmVnRXhwfSByZSBUaGUgcmVndWxhciBleHByZXNzaW9uIHVzZWQgdG8gbWF0Y2ggYWdhaW5zdCB0aGVcbiAqICAgICBpbnB1dCB0ZXh0IHN0YXJ0aW5nIGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgcmVndWxhclxuICogICAgIGV4cHJlc3Npb24gYWdhaW5zdCB0aGUgaW5wdXQgYXQgaXRzIGN1cnJlbnQgcG9zaXRpb24gYW5kIHN1Y2NlZWRzXG4gKiAgICAgaWYgYSBtYXRjaCBpcyBmb3VuZC5cbiAqL1xuY29uc3QgcmVnZXhQYXJzZXIgPSByZSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGNvbnN0IHJlc3QgPSB2aWV3VG9TdHJpbmcoaW5kZXgsIHZpZXcuYnl0ZUxlbmd0aCAtIGluZGV4LCB2aWV3KVxuXG4gIGNvbnN0IG1hdGNoID0gcmVzdC5tYXRjaChyZSlcbiAgcmV0dXJuIG1hdGNoXG4gICAgPyBva1JlcGx5KGN0eCwgbWF0Y2hbMF0sIGluZGV4ICsgc3RyaW5nVG9WaWV3KG1hdGNoWzBdKS5ieXRlTGVuZ3RoKVxuICAgIDogZmFpbFJlcGx5KGN0eClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCBhdHRlbXB0cyB0byBtYXRjaCB0aGUgc3VwcGxpZWQgcmVndWxhciBleHByZXNzaW9uIHRvXG4gKiB0aGUgaW5wdXQgdGV4dCBhdCB0aGUgY3VycmVudCBsb2NhdGlvbi4gSWYgdGhlcmUgaXMgYSBtYXRjaCwgYW55XG4gKiBtYXRjaGluZyB0ZXh0IGlzIHJldHVybmVkIGFzIGEgc3VjY2Vzc2Z1bCByZXN1bHQuIE5vIHRleHQgaXMgY29uc3VtZWRcbiAqIHVwb24gZmFpbHVyZS5cbiAqXG4gKiBBIHN0cmluZyBjYW4gYmUgcGFzc2VkIHRvIHRoaXMgcGFyc2VyLiBJZiBvbmUgaXMsIGl0IGlzIGNvbnZlcnRlZFxuICogaW50byBhIHJlZ3VsYXIgZXhwcmVzc2lvbiB3aXRob3V0IGZsYWdzLlxuICpcbiAqIElmIGEgc3RhcnQgYW5jaG9yICheKSBpcyBub3QgaW5jbHVkZWQsIG9uZSB3aWxsIGJlIGFkZGVkLiBJZiB0aGUgYGdgXG4gKiBmbGFnIGlzIGluY2x1ZGVkLCBpdCdsbCBmdW5jdGlvbmFsbHkgYmUgaWdub3JlZCBhcyBvbmx5IHRoZSBmaXJzdFxuICogbWF0Y2ggd2lsbCBiZSBjb25zaWRlcmVkIGFueXdheS4gVGhlc2UgdHdvIHJ1bGVzIGVuc3VyZSB0aGF0IHRoZVxuICogbWF0Y2ggaXMgb25seSBhdHRlbXB0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCB0ZXh0LlxuICpcbiAqIEBwYXJhbSB7KHN0cmluZ3xSZWdFeHApfSByIFRoZSByZWd1bGFyIGV4cHJlc3Npb24gdG8gbWF0Y2ggYWdhaW5zdFxuICogICAgIHRoZSBpbnB1dCB0ZXh0LiBJZiB0aGlzIGlzIGEgc3RyaW5nLCBpdCB3aWxsIGJlIGNvbnZlcnRlZCBpbnRvIGFcbiAqICAgICByZWd1bGFyIGV4cHJlc3Npb24gd2l0aCBubyBmbGFncy5cbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggdGhlIHJlZ3VsYXJcbiAqICAgICBleHByZXNzaW9uIGFnYWluc3QgdGhlIGlucHV0IGF0IGl0cyBjdXJyZW50IHBvc2l0aW9uIGFuZCBzdWNjZWVkc1xuICogICAgIGlmIGEgbWF0Y2ggaXMgZm91bmQuXG4gKi9cbmV4cG9ydCBjb25zdCByZWdleCA9IChyLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmdPclJlZ0V4cCgncmVnZXgnLCByLCBhcmdTdHJSZWdGb3JtYXR0ZXIoMSwgaGFzTSkpXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygncmVnZXgnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgLy8gRmlyc3QsIGNvbnZlcnQgdG8gYSByZWd1bGFyIGV4cHJlc3Npb24gaWYgaXQncyBhIHN0cmluZ1xuICBsZXQgcmVnZXggPSB0eXBlb2YgciA9PT0gJ3N0cmluZycgPyBuZXcgUmVnRXhwKHIpIDogclxuXG4gIC8vIE5leHQsIG1ha2Ugc3VyZSB0aGUgcmVndWxhciBleHByZXNzaW9uIHN0YXJ0cyB3aXRoIGEgXiBhbmNob3JcbiAgY29uc3QgeyBzb3VyY2UsIGZsYWdzIH0gPSByZWdleFxuICBjb25zdCByZWFuY2hvciA9IHNvdXJjZVswXSAhPT0gJ14nXG4gIGlmIChyZWFuY2hvcikge1xuICAgIGNvbnN0IG5ld1NvdXJjZSA9ICdeJyArIHNvdXJjZVxuICAgIHJlZ2V4ID0gbmV3IFJlZ0V4cChuZXdTb3VyY2UsIGZsYWdzKVxuICB9XG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVnZXgpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHJyZXBcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnJlZ2V4KHJlZ2V4KSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgbGV0dGVyLiBBIGxldHRlciBmb3IgdGhpcyBwdXJwb3NlIGlzIGFueSBjaGFyYWN0ZXIgd2l0aCB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBsZXR0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCB1bGV0dGVyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndWxldHRlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTGV0dGVyKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51bGV0dGVyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYWxwaGFudW1lcmljLiBBIGNoYXJhY3RlciBpcyBhbHBoYW51bWVyaWMgaWYgaXQgaGFzIGVpdGhlciB0aGVcbiAqIFVuaWNvZGUgYEFscGhhYmV0aWNgIHByb3BlcnR5IG9yIHRoZSBVbmljb2RlIGBOdW1iZXJgIHByb3BlcnR5LlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgYWxwaGFudW1lcmljIGNoYXJhY3Rlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVhbHBoYSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VhbHBoYScsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlQWxwaGEpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHJyZXBcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVhbHBoYSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGVpdGhlciBhbiB1cHBlcmNhc2Ugb3IgdGl0bGVjYXNlIGxldHRlci4gQSBjaGFyYWN0ZXIgaXNcbiAqIHVwcGVyY2FzZSBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFVwcGVyY2FzZWAgcHJvcGVydHkgYW5kIGlzIHRpdGxlY2FzZVxuICogaWYgaXQgaGFzIHRoZSBVbmljb2RlIGBMZXR0ZXIsIFRpdGxlY2FzZWAgcHJvcGVydHkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYW5cbiAqICAgICB1cHBlcmNhc2UgbGV0dGVyLlxuICovXG5leHBvcnQgY29uc3QgdXVwcGVyID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndXVwcGVyJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVcHBlcikoY3R4KSlcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPa1xuICAgID8gcnJlcFxuICAgIDogZmFpbFJlcGx5KHJjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMudXVwcGVyKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgd2l0aCB0aGF0IGNoYXJhY3RlciBpZlxuICogaXQgaXMgYSBsb3dlcmNhc2UgbGV0dGVyLiBBIGNoYXJhY3RlciBpcyBsb3dlcmNhc2UgaWYgaXQgaGFzIHRoZVxuICogVW5pY29kZSBgTG93ZXJjYXNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpcyBhXG4gKiAgICAgbG93ZXJjYXNlIGxldHRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHVsb3dlciA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3Vsb3dlcicsIG0sIGFyZ1N0ckZvcm1hdHRlcigpKVxuXG4gIGNvbnN0IFtycmVwLCBbcmN0eCwgcnJlc11dID0gZHVwKHJlZ2V4UGFyc2VyKHJlTG93ZXIpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHJyZXBcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVsb3dlcikpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIFdoaXRlc3BhY2UgY2hhcmFjdGVycyB0aGlzIHBhcnNlclxuICogcmVjb2duaXplcyBhcmUgc3BhY2UsIHRhYiwgYW5kIGFueSBjb252ZW50aW9uYWwgbmV3bGluZSAoYFxccmAsIGBcXG5gLFxuICogb3IgYFxcclxcbmApLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgQVNDSUkgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3NwYWNlJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVTcGFjZSkoY3R4KSlcbiAgcmV0dXJuIHJyZXMuc3RhdHVzID09PSBPayA/IHJyZXAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5zcGFjZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIHdpdGggdGhhdCBjaGFyYWN0ZXIgaWZcbiAqIGl0IGlzIGEgd2hpdGVzcGFjZSBjaGFyYWN0ZXIuIEEgY2hhcmFjdGVyIGlzIHdoaXRlc3BhY2UgZm9yIHRoZVxuICogcHVycG9zZSBvZiB0aGlzIHBhcnNlciBpZiBpdCBoYXMgdGhlIFVuaWNvZGUgYFdoaXRlX1NwYWNlYCBwcm9wZXJ0eS5cbiAqXG4gKiBUaGlzIHBhcnNlciB3aWxsIGFsc28gcmVjb2duaXplIHRoZSB0d28tY2hhcmFjdGVyIGNvbWJpbmF0aW9uIGBcXHJcXG5gXG4gKiBhcyBhIHNpbmdsZSBpbnN0YW5jZSBvZiB3aGl0ZXNwYWNlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFcbiAqICAgICBVbmljb2RlIHdoaXRlc3BhY2UgY2hhcmFjdGVyLlxuICovXG5leHBvcnQgY29uc3QgdXNwYWNlID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndXNwYWNlJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVVc3BhY2UpKGN0eCkpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHJyZXBcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnVzcGFjZSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgemVybyBvciBtb3JlIHdoaXRlc3BhY2UgY2hhcmFjdGVycyAoc3BhY2UsIGBcXHRgLFxuICogYFxccmAsIG9yIGBcXG5gKSBhdCB0aGUgY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyXG4gKiBhbHdheXMgc3VjY2VlZHM7IGV2ZW4gemVybyB3aGl0ZXNwYWNlcyBpcyBlbm91Z2ggdG8gbWFrZSBpdCBzdWNjZWVkLFxuICogdGhvdWdoIGl0IHdpbGwgbm90IG1vdmUgdGhlIGluZGV4IGluIHRoYXQgY2FzZS4gVGhpcyBwYXJzZXIgc2tpcHMgdGhlXG4gKiB3aGl0ZXNwYWNlIGFuZCBkb2VzIG5vdCBwcm9kdWRlIGEgcmVzdWx0LlxuICpcbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgYWx3YXlzIHN1Y2NlZWRzIGFuZCBza2lwcyBvdmVyIGFueVxuICogICAgIG51bWJlciBvZiBBU0NJSSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMuXG4gKi9cbmV4cG9ydCBjb25zdCBzcGFjZXMgPSAoKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgW3JjdHgsIF9dID0gcmVnZXhQYXJzZXIocmVTcGFjZXMpKGN0eClcbiAgcmV0dXJuIG9rUmVwbHkocmN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyB6ZXJvIG9yIG1vcmUgVW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXQgdGhlXG4gKiBjdXJyZW50IHBvc2l0aW9uIGluIHRoZSBpbnB1dC4gVGhpcyBwYXJzZXIgYWx3YXlzIHN1Y2NlZWRzOyBldmVuIHplcm9cbiAqIHdoaXRlc3BhY2VzIGlzIGVub3VnaCB0byBtYWtlIGl0IHN1Y2NlZWQsIHRob3VnaCBpdCB3aWxsIG5vdCBtb3ZlIHRoZVxuICogaW5kZXggaW4gdGhhdCBjYXNlLiBUaGlzIHBhcnNlciBza2lwcyB0aGUgd2hpdGVzcGFjZSBhbmQgZG9lcyBub3RcbiAqIHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBhbHdheXMgc3VjY2VlZHMgYW5kIHNraXBzIG92ZXIgYW55XG4gKiAgICAgbnVtYmVyIG9mIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzLlxuICovXG5leHBvcnQgY29uc3QgdXNwYWNlcyA9ICgpID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBbcmN0eCwgX10gPSByZWdleFBhcnNlcihyZVVzcGFjZXMpKGN0eClcbiAgcmV0dXJuIG9rUmVwbHkocmN0eCwgbnVsbClcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBvbmUgb3IgbW9yZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgKHNwYWNlLCBgXFx0YCxcbiAqIGBcXHJgLCBvciBgXFxuYCkgYXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gaW4gdGhlIGlucHV0LiBUaGlzIHBhcnNlciB3aWxsXG4gKiBvbmx5IGZhaWwgaWYgdGhlcmUgaXMgbm90IGF0IGxlYXN0IG9uZSB3aGl0ZXNwYWNlIGNoYXJhY3RlciByZWFkLiBPblxuICogc3VjY2VzcywgaXQgc2tpcHMgdGhlIHdoaXRlc3BhY2UgYW5kIGRvZXMgbm90IHByb2R1ZGUgYSByZXN1bHQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBza2lwcyBvbmUgb3IgbW9yZSBBU0NJSSB3aGl0ZXNwYWNlXG4gKiAgICAgY2hhcmFjdGVycy5cbiAqL1xuZXhwb3J0IGNvbnN0IHNwYWNlczEgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzcGFjZXMxJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JjdHgsIHJyZXNdID0gcmVnZXhQYXJzZXIocmVTcGFjZXMxKShjdHgpXG4gIHJldHVybiBycmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IG9rUmVwbHkocmN0eCwgbnVsbClcbiAgICA6IGZhaWxSZXBseShyY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnNwYWNlczEpKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzIGF0IHRoZVxuICogY3VycmVudCBwb3NpdGlvbiBpbiB0aGUgaW5wdXQuIFRoaXMgcGFyc2VyIHdpbGwgb25seSBmYWlsIGlmIHRoZXJlIGlzXG4gKiBub3QgYXQgbGVhc3Qgb25lIHdoaXRlc3BhY2UgY2hhcmFjdGVyIHJlYWQuIE9uIHN1Y2Nlc3MsIGl0IHNraXBzIHRoZVxuICogd2hpdGVzcGFjZSBhbmQgZG9lcyBub3QgcHJvZHVkZSBhIHJlc3VsdC5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHNraXBzIG9uZSBvciBtb3JlIFVuaWNvZGUgd2hpdGVzcGFjZVxuICogICAgIGNoYXJhY3RlcnMuXG4gKi9cbmV4cG9ydCBjb25zdCB1c3BhY2VzMSA9IG0gPT4gcGFyc2VyKGN0eCA9PiB7XG4gIGNvbnN0IGhhc00gPSBtICE9IG51bGxcblxuICBBU1NFUlQgJiYgaGFzTSAmJiBhc3NlcnRTdHJpbmcoJ3VzcGFjZXMxJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JjdHgsIHJyZXNdID0gcmVnZXhQYXJzZXIocmVVc3BhY2VzMSkoY3R4KVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBva1JlcGx5KHJjdHgsIG51bGwpXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51c3BhY2VzMSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBjaGFyYWN0ZXIgYW5kIHN1Y2NlZWRzIGlmIHRoZSBuZXh0IGNoYXJhY3RlciBpc1xuICogYSBuZXdsaW5lLiBJZiB0aGF0IG5ld2xpbmUgaXMgYSBjYXJyaWFnZSByZXR1cm4sIGl0IHdpbGwgYWxzbyByZWFkXG4gKiB0aGUgbmV4dCBjaGFyYWN0ZXIgYW5kIGluY2x1ZGUgaXQgaW4gdGhlIHJlc3VsdCBpZiBpdCBpcyBhIGxpbmUgZmVlZC5cbiAqIE5ld2xpbmVzIHRoaXMgcGFyc2VyIHJlY29nbml6ZXMgYXJlIGFueSBvZiB0aGUgZm9sbG93aW5nXG4gKiBjaGFyYWN0ZXJzL2NvbWJpbmF0aW9uczpcbiAqXG4gKiAqIGBMRmAgKGxpbmUgZmVlZCwgYFUrMDAwQWAgb3IgYFxcbmApXG4gKiAqIGBDUmAgKGNhcnJpYWdlIHJldHVybiwgYFUrMDAwRGAgb3IgYFxccmApXG4gKiAqIGBDUitMRmAgKGBDUmAgZm9sbG93ZWQgYnkgYExGYCwgYFxcclxcbmApXG4gKlxuICogTm8gY2hhcmFjdGVycyB3aWxsIGJlIGNvbnN1bWVkIG9uIGZhaWx1cmUsIGV2ZW4gaW4gdGhlIGNhc2Ugb2ZcbiAqIGBcXHJcXG5gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbbV0gVGhlIGV4cGVjdGVkIGVycm9yIG1lc3NhZ2UgdG8gdXNlIGlmIHRoZSBwYXJzZXJcbiAqICAgICBmYWlscy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzIGFuXG4gKiAgICAgQVNDSUkgbmV3bGluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IG5ld2xpbmUgPSBtID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCduZXdsaW5lJywgbSwgYXJnU3RyRm9ybWF0dGVyKCkpXG5cbiAgY29uc3QgW3JyZXAsIFtyY3R4LCBycmVzXV0gPSBkdXAocmVnZXhQYXJzZXIocmVOZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy5uZXdsaW5lKSlcbn0pXG5cbi8qKlxuICogQSBwYXJzZXIgdGhhdCByZWFkcyBhIGNoYXJhY3RlciBhbmQgc3VjY2VlZHMgaWYgdGhlIG5leHQgY2hhcmFjdGVyIGlzXG4gKiBhIG5ld2xpbmUuIElmIHRoYXQgbmV3bGluZSBpcyBhIGNhcnJpYWdlIHJldHVybiwgaXQgd2lsbCBhbHNvIHJlYWRcbiAqIHRoZSBuZXh0IGNoYXJhY3RlciBhbmQgaW5jbHVkZSBpdCBpbiB0aGUgcmVzdWx0IGlmIGl0IGlzIGEgbGluZSBmZWVkLlxuICogTmV3bGluZXMgaW4gVW5pY29kZSBhcmUgYW55IG9mIHRoZSBmb2xsb3dpbmcgY2hhcmFjdGVycy9jb21iaW5hdGlvbnM6XG4gKlxuICogKiBgTEZgIChsaW5lIGZlZWQsIGBVKzAwMEFgIG9yIGBcXG5gKVxuICogKiBgQ1JgIChjYXJyaWFnZSByZXR1cm4sIGBVKzAwMERgIG9yIGBcXHJgKVxuICogKiBgQ1IrTEZgIChgQ1JgIGZvbGxvd2VkIGJ5IGBMRmAsIGBcXHJcXG5gKVxuICogKiBgTkVMYCAobmV4dCBsaW5lLCBgVSswMDg1YClcbiAqICogYExTYCAobGluZSBzZXBhcmF0b3IsIGBVKzIwMjhgKVxuICogKiBgUFNgIChwYXJhZ3JhcGggc2VwYXJhdG9yLCBgVSsyMDI5YClcbiAqXG4gKiBUaGlzIGRvZXMgbm90IGluY2x1ZGUgdGhlIGNoYXJhY3RlcnMgYFxcZmAgb3IgYFxcdmAsIHdoaWNoIHdoaWxlIGJlaW5nXG4gKiB2ZXJ0aWNhbCBzZXBhcmF0b3JzLCBhcmVuJ3QgcmVhbGx5IG5ld2xpbmVzIGluIHRoZSB0cmFkaXRpb25hbCBzZW5zZS5cbiAqXG4gKiBObyBjaGFyYWN0ZXJzIHdpbGwgYmUgY29uc3VtZWQgb24gZmFpbHVyZSwgZXZlbiBpbiB0aGUgY2FzZSBvZlxuICogYFxcclxcbmAuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IFttXSBUaGUgZXhwZWN0ZWQgZXJyb3IgbWVzc2FnZSB0byB1c2UgaWYgdGhlIHBhcnNlclxuICogICAgIGZhaWxzLlxuICogQHJldHVybnMge1BhcnNlcn0gQSBwYXJzZXIgdGhhdCBzdWNjZWVkcyBpZiB0aGUgbmV4dCBjaGFyYWN0ZXIgaXMgYVxuICogICAgIFVuaWNvZGUgbmV3bGluZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHVuZXdsaW5lID0gbSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBoYXNNICYmIGFzc2VydFN0cmluZygndW5ld2xpbmUnLCBtLCBhcmdTdHJGb3JtYXR0ZXIoKSlcblxuICBjb25zdCBbcnJlcCwgW3JjdHgsIHJyZXNdXSA9IGR1cChyZWdleFBhcnNlcihyZVVuZXdsaW5lKShjdHgpKVxuICByZXR1cm4gcnJlcy5zdGF0dXMgPT09IE9rXG4gICAgPyBycmVwXG4gICAgOiBmYWlsUmVwbHkocmN0eCwgZmVycm9yKG0sIGV4cGVjdGVkcy51bmV3bGluZSkpXG59KVxuIiwiLy8gQ29weXJpZ2h0IChjKSAyMDIwIFRob21hcyBKLiBPdHRlcnNvblxuLy9cbi8vIFRoaXMgc29mdHdhcmUgaXMgcmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLlxuLy8gaHR0cHM6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9NSVRcblxuaW1wb3J0IHtcbiAgYXJnTnVtRm9ybWF0dGVyLFxuICBhcmdTdHJGb3JtYXR0ZXIsXG4gIGFzc2VydE51bWJlcixcbiAgYXNzZXJ0U3RyaW5nLFxufSBmcm9tICdrZXNzZWwvYXNzZXJ0J1xuaW1wb3J0IHsgZmFpbFJlcGx5LCBva1JlcGx5LCBwYXJzZXIsIFN0YXR1cyB9IGZyb20gJ2tlc3NlbC9jb3JlJ1xuaW1wb3J0IHsgZXhwZWN0ZWRzIH0gZnJvbSAna2Vzc2VsL21lc3NhZ2VzJ1xuaW1wb3J0IHsgY2hhckxlbmd0aCwgZHVwLCBmZXJyb3IsIG5leHRDaGFycywgdmlld1RvU3RyaW5nIH0gZnJvbSAna2Vzc2VsL3V0aWwnXG5cbmNvbnN0IHsgT2sgfSA9IFN0YXR1c1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgna2Vzc2VsL2NvcmUnKS5QYXJzZXJ9IFBhcnNlciAqL1xuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgYXR0ZW1wdHMgdG8gbWF0Y2ggYSBwYXJ0aWN1bGFyIHN0cmluZyBmcm9tIHRoZSBjdXJyZW50XG4gKiBwb3NpdGlvbiBpbiB0aGUgdGV4dC4gQSBzdHJpbmcgb2YgY2hhcmFjdGVycyBlcXVhbCBpbiBsZW5ndGggdG9cbiAqIGBsZW5ndGhgIGlzIHJlYWQgZnJvbSBpbnB1dCBhbmQgcGFzc2VkIHRvIGBmbmA7IGlmIGBmbmAgcmV0dXJuc1xuICogYHRydWVgLCB0aGVuIHRoZSBwYXJzZXIgc3VjY2VlZHMuXG4gKlxuICogVGhpcyBwYXJzZXIgYWx3YXlzIGZhaWxzIGlmIHRoZXJlIGFyZSBsZXNzIHRoYW4gYGxlbmd0aGAgY2hhcmFjdGVyc1xuICogbGVmdCBpbiB0aGUgaW5wdXQuIEl0IHdpbGwgYWx3YXlzIHBhc3MgaWYgYGxlbmd0aGAgaXMgMC5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbGVuZ3RoIFRoZSBudW1iZXIgb2YgY2hhcmFjdGVycyB0aGF0IHRoZSBwYXJzZXJcbiAqICAgICBzaG91bGQgcmVhZC5cbiAqIEBwYXJhbSB7ZnVuY3Rpb24oc3RyaW5nKTogYm9vbGVhbn0gZm4gQSBmdW5jdGlvbiB0byB3aGljaCB0aGUgcmVhZFxuICogICAgIHN0cmluZyBpcyBwYXNzZWQuIElmIHRoaXMgZnVuY3Rpb24gcmV0dXJucyBgdHJ1ZWAsIHRoZSBwYXJzZXJcbiAqICAgICBzdWNjZWVkcy5cbiAqIEByZXR1cm5zIHtQYXJzZXJ9IEEgcGFyc2VyIHRoYXQgc3VjY2VlZHMgaWYgdGhlIHJlYWQgc3RyaW5nIHBhc3Nlc1xuICogICAgIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKi9cbmNvbnN0IHN0cmluZ1BhcnNlciA9IChsZW5ndGgsIGZuKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgaWYgKGxlbmd0aCA8IDEpIHJldHVybiBva1JlcGx5KGN0eCwgJycpXG5cbiAgY29uc3QgeyBpbmRleCwgdmlldyB9ID0gY3R4XG4gIGlmIChpbmRleCA+PSB2aWV3LmJ5dGVMZW5ndGgpIHJldHVybiBmYWlsUmVwbHkoY3R4KVxuXG4gIGNvbnN0IHsgd2lkdGgsIG5leHQgfSA9IG5leHRDaGFycyhpbmRleCwgdmlldywgbGVuZ3RoKVxuICByZXR1cm4gY2hhckxlbmd0aChuZXh0KSAhPT0gbGVuZ3RoIHx8ICFmbihuZXh0KVxuICAgID8gZmFpbFJlcGx5KGN0eClcbiAgICA6IG9rUmVwbHkoY3R4LCBuZXh0LCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgc3RyaW5nIGZyb20gdGhlIGN1cnJlbnQgbG9jYXRpb24gaW4gdGhlIGlucHV0XG4gKiBhbmQgbWF0Y2hlcyBpdCBhZ2FpbnN0IGl0cyBzdXBwbGllZCBzdHJpbmcuIFRoZSBzdHJpbmcgbWF0Y2ggbXVzdCBiZVxuICogZXhhY3QgKGl0IGlzIGNhc2Utc2Vuc2l0aXZlKSwgYW5kIGFsbCBVVEYtOCBjaGFyYWN0ZXJzIGFyZSByZWNvZ25pemVkXG4gKiBwcm9wZXJseS5cbiAqXG4gKiBJZiBgc2AgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgbWF0Y2hlcyB0aGUgbmV4dCBjaGFyYWN0ZXJzIGluIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IHN0ciA9IChzLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnRTdHJpbmcoJ3N0cicsIHMsIGFyZ1N0ckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdzdHInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3NyZXAsIFtzY3R4LCBzcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKFxuICAgIGNoYXJMZW5ndGgocyksIGNoYXJzID0+IHMgPT09IGNoYXJzLFxuICApKGN0eCkpXG4gIHJldHVybiBzcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHNyZXBcbiAgICA6IGZhaWxSZXBseShzY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLnN0cihzKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgYSBzdHJpbmcgZnJvbSB0aGUgY3VycmVudCBsb2NhdGlvbiBpbiB0aGUgaW5wdXRcbiAqIGFuZCBtYXRjaGVzIGl0IGFnYWluc3QgaXRzIHN1cHBsaWVkIHN0cmluZy4gVGhpcyBtYXRjaCBpcyAqbm90KlxuICogY2FzZS1zZW5zaXRpdmUuXG4gKlxuICogSWYgYHN0cmAgaXMgZW1wdHksIHRoZSBwYXJzZXIgd2lsbCBhdXRvbWF0aWNhbGx5IHN1Y2NlZWQuIElmIGl0IGlzXG4gKiBsb25nZXIgdGhhbiB0aGUgcmVtYWluaW5nIGlucHV0LCB0aGUgcGFyc2VyIHdpbGwgYXV0b21hdGljYWxseSBmYWlsLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzIFRoZSBzdHJpbmcgdG8gY29tcGFyZSBhZ2FpbnN0IHRoZSBuZXh0IGNoYXJhY3RlcnNcbiAqICAgICBvZiB0aGUgaW5wdXQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgc3VjY2VlZCBpZiB0aGUgc3VwcGxpZWQgc3RyaW5nXG4gKiAgICAgY2FzZS1pbnNlbnNpdGl2ZWx5IG1hdGNoZXMgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGUgaW5wdXQuXG4gKi9cbmV4cG9ydCBjb25zdCBpc3RyID0gKHMsIG0pID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCBoYXNNID0gbSAhPSBudWxsXG5cbiAgQVNTRVJUICYmIGFzc2VydFN0cmluZygnaXN0cicsIHMsIGFyZ1N0ckZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdpc3RyJywgbSwgYXJnU3RyRm9ybWF0dGVyKDIsIHRydWUpKVxuXG4gIGNvbnN0IFtzcmVwLCBbc2N0eCwgc3Jlc11dID0gZHVwKHN0cmluZ1BhcnNlcihcbiAgICBjaGFyTGVuZ3RoKHMpLCBjaGFycyA9PiBzLnRvTG93ZXJDYXNlKCkgPT09IGNoYXJzLnRvTG93ZXJDYXNlKCksXG4gICkoY3R4KSlcbiAgcmV0dXJuIHNyZXMuc3RhdHVzID09PSBPa1xuICAgID8gc3JlcFxuICAgIDogZmFpbFJlcGx5KHNjdHgsIGZlcnJvcihtLCBleHBlY3RlZHMuaXN0cihzKSkpXG59KVxuXG4vKipcbiAqIEEgcGFyc2VyIHRoYXQgcmVhZHMgdGhlIHJlbWFpbmRlciBvZiB0aGUgaW5wdXQgdGV4dCBhbmQgcmVzdWx0cyBpblxuICogdGhhdCB0ZXh0LiBTdWNjZWVkcyBpZiBhbHJlYWR5IGF0IEVPRiwgcmVzdWx0aW5nIGluIGFuIGVtcHR5IHN0cmluZy5cbiAqXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHdpbGwgYWx3YXlzIHN1Y2NlZWQgYW5kIHJldHVybnMgdGhlXG4gKiAgICAgcmVtYWluZGVyIG9mIHRoZSBpbnB1dC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFsbCA9ICgpID0+IHBhcnNlcihjdHggPT4ge1xuICBjb25zdCB7IGluZGV4LCB2aWV3IH0gPSBjdHhcbiAgY29uc3Qgd2lkdGggPSB2aWV3LmJ5dGVMZW5ndGggLSBpbmRleFxuICByZXR1cm4gb2tSZXBseShjdHgsIHZpZXdUb1N0cmluZyhpbmRleCwgd2lkdGgsIHZpZXcpLCBpbmRleCArIHdpZHRoKVxufSlcblxuLyoqXG4gKiBBIHBhcnNlciB0aGF0IHJlYWRzIGEgY2VydGFpbiBudW1iZXIgb2YgY2hhcmFjdGVycywgdXNpbmcgdGhlbSAoYXMgYVxuICogc3RyaW5nKSBhcyBpdHMgcmVzdWx0LiBUaGUgcGFyc2VyIHdpbGwgZmFpbCBpZiB0aGVyZSBhcmUgbm90IHRoYXRcbiAqIG1hbnkgY2hhcmFjdGVycyBsZWZ0IHRvIHJlYWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIHRvIHJlYWQuXG4gKiBAcGFyYW0ge3N0cmluZ30gW21dIFRoZSBleHBlY3RlZCBlcnJvciBtZXNzYWdlIHRvIHVzZSBpZiB0aGUgcGFyc2VyXG4gKiAgICAgZmFpbHMuXG4gKiBAcmV0dXJucyB7UGFyc2VyfSBBIHBhcnNlciB0aGF0IHJlYWRzIHRoYXQgbWFueSBjaGFyYWN0ZXJzIGFuZCBqb2luc1xuICogICAgIHRoZW0gaW50byBhIHN0cmluZyBmb3IgaXRzIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGNvbnN0IGFueXN0ciA9IChuLCBtKSA9PiBwYXJzZXIoY3R4ID0+IHtcbiAgY29uc3QgaGFzTSA9IG0gIT0gbnVsbFxuXG4gIEFTU0VSVCAmJiBhc3NlcnROdW1iZXIoJ2FueXN0cicsIG4sIGFyZ051bUZvcm1hdHRlcigxLCBoYXNNKSlcbiAgQVNTRVJUICYmIGhhc00gJiYgYXNzZXJ0U3RyaW5nKCdhbnlzdHInLCBtLCBhcmdTdHJGb3JtYXR0ZXIoMiwgdHJ1ZSkpXG5cbiAgY29uc3QgW3NyZXAsIFtzY3R4LCBzcmVzXV0gPSBkdXAoc3RyaW5nUGFyc2VyKG4sICgpID0+IHRydWUpKGN0eCkpXG4gIHJldHVybiBzcmVzLnN0YXR1cyA9PT0gT2tcbiAgICA/IHNyZXBcbiAgICA6IGZhaWxSZXBseShzY3R4LCBmZXJyb3IobSwgZXhwZWN0ZWRzLmFueXN0cihuKSkpXG59KVxuIiwiLyogaXN0YW5idWwgaWdub3JlIGZpbGUgKi9cbi8vIENvcHlyaWdodCAoYykgMjAyMCBUaG9tYXMgSi4gT3R0ZXJzb25cbi8vXG4vLyBUaGlzIHNvZnR3YXJlIGlzIHJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbi8vIGh0dHBzOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cbmltcG9ydCB7IGZhaWxSZXBseSwgZmF0YWxSZXBseSwgcGFyc2VyIH0gZnJvbSAnLi9jb3JlJ1xuaW1wb3J0IHsgY29tcG91bmQsIGV4cGVjdGVkLCBuZXN0ZWQgfSBmcm9tICcuL2Vycm9yJ1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuQ29udGV4dH0gQ29udGV4dCAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoJy4vY29yZScpLlJlc3VsdH0gUmVzdWx0ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9jb3JlJykuUmVwbHl9IFJlcGx5ICovXG4vKiogQHR5cGVkZWYge2ltcG9ydCgnLi9lcnJvcicpLkVycm9yTGlzdH0gRXJyb3JMaXN0ICovXG5cbi8qKlxuICogVHJhbnNsYXRlcyBhIFVDUy0yIHN0cmluZyBpbnRvIGEgVWludDhBcnJheSBvZiBVVEYtOCBieXRlcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKVxuXG4vKipcbiAqIFRyYW5zbGF0ZXMgYSBVaW50OEFycmF5IG9mIFVURi04IGJ5dGVzIGludG8gYSBVQ1MtMiBzdHJpbmcuXG4gKi9cbmV4cG9ydCBjb25zdCBkZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKClcblxuLyoqXG4gKiBBbiBpdGVyYXRvciB0aGF0IGNvdmVycyBhIHJhbmdlIGZyb20gYSBzdGFydGluZyB2YWx1ZSB0byBhbiBlbmRpbmdcbiAqIHZhbHVlLCBzdGVwcGluZyBieSBhIGNlcnRhaW4gdmFsdWUgYmV0d2VlbiBlYWNoLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9MF0gVGhlIGZpcnN0IG51bWJlciBvZiB0aGUgcmFuZ2UuXG4gKiBAcGFyYW0ge251bWJlcn0gZW5kIFRoZSBsYXN0IG51bWJlciBvZiB0aGUgcmFuZ2UuIEJ5IGRlZmF1bHQgdGhpc1xuICogICAgIG51bWJlciBmb3JtcyB0aGUgdXBwZXIgYm91bmQgb2YgdGhlIHJhbmdlIHdpdGhvdXQgYmVpbmcgaW5jbHVkZWRcbiAqICAgICBpbiBpdC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RlcD0xXSBUaGUgbnVtYmVyIHRvIGluY3JlYXNlIHRoZSB5aWVsZGVkIHZhbHVlIGJ5XG4gKiAgICAgZHVyaW5nIGVhY2ggaXRlcmF0aW9uLlxuICogQHBhcmFtIHtib29sZWFufSBbaW5jbHVzaXZlPWZhbHNlXSBEZXRlcm1pbmVzIHdoZXRoZXIgYGVuZGAgc2hvdWxkIGJlXG4gKiAgICAgaW5jbHVkZWQgYXMgcGFydCBvZiB0aGUgcmFuZ2UuXG4gKiBAeWllbGRzIHtudW1iZXJ9IFRoZSB2YWx1ZXMgdGhhdCBtYWtlIHVwIHRoZSByYW5nZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICpyYW5nZShzdGFydCwgZW5kLCBzdGVwLCBpbmNsdXNpdmUpIHtcbiAgY29uc3QgcyA9IHR5cGVvZiBlbmQgPT09ICdudW1iZXInID8gc3RhcnQgOiAwXG4gIGNvbnN0IGUgPSB0eXBlb2YgZW5kID09PSAnbnVtYmVyJyA/IGVuZCA6IHN0YXJ0XG4gIGNvbnN0IHAgPSB0eXBlb2Ygc3RlcCA9PT0gJ251bWJlcicgPyBzdGVwID09PSAwID8gMSA6IE1hdGguYWJzKHN0ZXApIDogMVxuICBjb25zdCBpID0gdHlwZW9mIHN0ZXAgPT09ICdudW1iZXInXG4gICAgPyAhIWluY2x1c2l2ZSA6IHR5cGVvZiBlbmQgPT09ICdudW1iZXInXG4gICAgICA/ICEhc3RlcCA6ICEhZW5kXG5cbiAgY29uc3QgZm9yd2FyZCA9IHMgPCBlXG4gIGxldCBjdXJyZW50ID0gc1xuXG4gIGNvbnN0IGZpbmlzaGVkID0gKCkgPT4ge1xuICAgIGlmIChmb3J3YXJkKSB7XG4gICAgICByZXR1cm4gaSA/IGN1cnJlbnQgPiBlIDogY3VycmVudCA+PSBlXG4gICAgfVxuICAgIHJldHVybiBpID8gY3VycmVudCA8IGUgOiBjdXJyZW50IDw9IGVcbiAgfVxuXG4gIC8qIGVzbGludC1kaXNhYmxlIHJlcXVpcmUtYXRvbWljLXVwZGF0ZXMgKi9cbiAgd2hpbGUgKCFmaW5pc2hlZCgpKSB7XG4gICAgeWllbGQgY3VycmVudFxuICAgIGN1cnJlbnQgPSBmb3J3YXJkID8gY3VycmVudCArIHAgOiBjdXJyZW50IC0gcFxuICB9XG4gIC8qIGVzbGludC1lbmFibGUgcmVxdWlyZS1hdG9taWMtdXBkYXRlcyAqL1xufVxuXG4vKipcbiAqIEFuIGl0ZXJhdG9yIHRoYXQgcGFpcnMgdmFsdWVzIGluIGFuIGl0ZXJhYmxlIHdpdGggdGhlaXIgaW5kZXhlcyBpbiBhXG4gKiBzZXJpZXMgb2YgdHdvLWVsZW1lbnQgYXJyYXlzLiBUaGUgZmlyc3QgYXJyYXkgZWxlbWVudCBpcyB0aGUgaW5kZXg7XG4gKiB0aGUgc2Vjb25kIGlzIHRoZSB2YWx1ZSBmcm9tIHRoZSBpdGVyYWJsZS5cbiAqXG4gKiBGb3IgYXJyYXlzLCB0aGlzIGNhbiBiZSBkb25lIHdpdGggYGFycmF5LmVudHJpZXMoKWAsIHdoaWNoIHByb2R1Y2VzXG4gKiB0d28tZWxlbWVudCBhcnJheXMgaW4gdGhlIHNhbWUgZm9ybWF0LiBIb3dldmVyLCB0aGlzIGdlbmVyYXRvclxuICogZnVuY3Rpb24gd2lsbCB3b3JrIHdpdGggYW55IGtpbmQgb2Ygb2JqZWN0IGltcGxlbWVudGluZyB0aGVcbiAqIGBJdGVyYWJsZWAgaW50ZXJmYWNlLlxuICpcbiAqIEBwYXJhbSB7SXRlcmFibGV9IGl0ZXJhYmxlIEFuIGl0ZXJhYmxlIG9iamVjdCB3aG9zZSBlbGVtZW50cyB3aWxsXG4gKiAgICAgYmUgcGFpcmVkIHdpdGggdGhlaXIgaW5kZXhlcy5cbiAqIEB5aWVsZHMge1tudW1iZXIsICpdfSBUaGUgaXRlcmFibGUncyB2YWx1ZXMsIHBhaXJlZCB3aXRoIHRoZWlyXG4gKiAgICAgaW5kZXhlcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uICplbnVtZXJhdGUoaXRlcmFibGUpIHtcbiAgY29uc3QgaXRlcmF0b3IgPSBpdGVyYWJsZVtTeW1ib2wuaXRlcmF0b3JdKClcbiAgbGV0IHJlc3VsdCA9IGl0ZXJhdG9yLm5leHQoKVxuICBsZXQgaW5kZXggPSAwXG5cbiAgd2hpbGUgKCFyZXN1bHQuZG9uZSkge1xuICAgIHlpZWxkIFtpbmRleCsrLCByZXN1bHQudmFsdWVdXG4gICAgcmVzdWx0ID0gaXRlcmF0b3IubmV4dCgpXG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgcG9ydGlvbiBvZiBhIFVURi04IGRhdGEgdmlldyBhcyBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBieXRlIHRvIGJlIHRoZSBmaXJzdCBpbiB0aGVcbiAqICAgICBnZW5lcmF0ZWQgc3RyaW5nLlxuICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aCBUaGUgbnVtYmVyIG9mIGJ5dGVzIHRvIGluY2x1ZGUgaW4gdGhlXG4gKiAgICAgZ2VuZXJhdGVkIHN0cmluZy5cbiAqIEBwYXJhbSB7RGF0YVZpZXd9IHZpZXcgVGhlIGRhdGEgdmlldyBjb250YWluaW5nIHRoZSB0ZXh0IGZyb20gd2hpY2hcbiAqICAgICB0aGUgZ2VuZXJhdGVkIHN0cmluZyBpcyB0YWtlbi5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgVUNTLTIgKHJlZ3VsYXIgSmF2YVNjcmlwdCBzdHJpbmcpIHJlcHJlc2VudGF0aW9uXG4gKiAgICAgb2YgdGhlIFVURi04IGNoYXJhY3RlcnMgaW4gdGhlIGRhdGEgdmlldy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHZpZXdUb1N0cmluZyhpbmRleCwgbGVuZ3RoLCB2aWV3KSB7XG4gIGNvbnN0IGJ5dGVzID0gVWludDhBcnJheS5mcm9tKFxuICAgIHsgbGVuZ3RoIH0sXG4gICAgKF8sIGkpID0+IHZpZXcuZ2V0VWludDgoaW5kZXggKyBpKSxcbiAgKVxuICByZXR1cm4gZGVjb2Rlci5kZWNvZGUoYnl0ZXMpXG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIFVURi04IGRhdGEgdmlldyBvZiBhIFVDUy0yIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gZW5jb2RlIGludG8gYSBVVEYtOCBkYXRhIHZpZXcuXG4gKiBAcmV0dXJucyB7RGF0YVZpZXd9IEEgZGF0YSB2aWV3IG92ZXIgdGhlIFVURi04IGJ5dGVzIG9mIHRoZSBpbnB1dFxuICogICAgIHN0cmluZy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHN0cmluZ1RvVmlldyhzdHIpIHtcbiAgcmV0dXJuIG5ldyBEYXRhVmlldyhlbmNvZGVyLmVuY29kZShzdHIpLmJ1ZmZlcilcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudW1iZXIgb2YgVVRGLTggY2hhcmFjdGVycyBpbiBhIHN0cmluZy4gVGhpcyBjYW4gZGlmZmVyXG4gKiBmcm9tIHRoZSBudW1iZXIgb2YgVUNTLTIgY2hhcmFjdGVycyBpbiB0aGUgc2FtZSBzdHJpbmcsIG1lYW5pbmcgdGhpc1xuICogdmFsdWUgY2FuIGRpZmZlciBmcm9tIHRoZSBgbGVuZ3RoYCBwcm9wZXJ0eSBvZiB0aGUgc2FtZSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIG9mIHdoaWNoIHRvIGdldCB0aGUgY2hhcmFjdGVyIGxlbmd0aC5cbiAqIEByZXR1cm4ge251bWJlcn0gVGhlIG51bWJlciBvZiBVVEYtOCBjaGFyYWN0ZXJzIGluIHRoYXQgc3RyaW5nLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hhckxlbmd0aChzdHIpIHtcbiAgcmV0dXJuIFsuLi5zdHJdLmxlbmd0aFxufVxuXG4vKipcbiAqIERldGVybWluZXMgdGhlIHdpZHRoIG9mIHRoZSBjaGFyYWN0ZXIgY3VycmVudGx5IGluZGV4ZWQgaW4gdGhlIHZpZXcsXG4gKiBiYXNlZCBvbiB0aGUgdmFsdWUgb2YgaXRzIGZpcnN0IGJ5dGUuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgYnl0ZSB3aXRoaW4gdGhlIHZpZXcgdGhhdCBpc1xuICogICAgIHRoZSBmaXJzdCAoYW5kIHBlcmhhcHMgb25seSkgYnl0ZSBvZiB0aGUgbmV4dCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEByZXR1cm5zIHsoMXwyfDN8NCl9IFRoZSBudW1iZXIgb2YgYnl0ZXMgY29udGFpbmVkIGluIHRoZSBjaGFyYWN0ZXJcbiAqICAgICBzdGFydGluZyBhdCB0aGUgaW5kZXhlZCBieXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXJXaWR0aChpbmRleCwgdmlldykge1xuICBjb25zdCBieXRlID0gdmlldy5nZXRVaW50OChpbmRleClcbiAgaWYgKChieXRlICYgMHg4MCkgPj4gNyA9PT0gMCkgcmV0dXJuIDFcbiAgaWYgKChieXRlICYgMHhlMCkgPj4gNSA9PT0gMGIxMTApIHJldHVybiAyXG4gIGlmICgoYnl0ZSAmIDB4ZjApID4+IDQgPT09IDBiMTExMCkgcmV0dXJuIDNcbiAgaWYgKChieXRlICYgMHhmMCkgPj4gNCA9PT0gMGIxMTExKSByZXR1cm4gNFxuICAvLyBIb3BlZnVsbHkgc2hvdWxkbid0IGhhcHBlbiwgYnV0IGhlcmUgaW4gY2FzZSBvbmUgb2YgdGhvc2UgaGlnaFxuICAvLyBhc2NpaSBjb2RlcyBpcyB1c2VkXG4gIHJldHVybiAxXG59XG5cbi8qKlxuICogQ29udGFpbnMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVyKHMpIGluIHRoZSBkYXRhIHZpZXcuXG4gKlxuICogQHR5cGVkZWYgTmV4dENoYXJJbmZvXG4gKiBAcHJvcGVydHkge251bWJlcn0gd2lkdGggVGhlIHdpZHRoIG9mIHRoZSByZXR1cm5lZCBjaGFyYWN0ZXIocykuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbmV4dCBUaGUgbmV4dCBjaGFyYWN0ZXIocykuXG4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjaGFyYWN0ZXIgYXQgdGhlIGluZGV4ZWQgcG9zaXRpb24gd2l0aGluIHRoZSBkYXRhIHZpZXcuXG4gKiBUaGlzIGNoYXJhY3RlciBtYXkgYmUgYSAxLSwgMi0sIDMtLCBvciA0LWJ5dGUgY2hhcmFjdGVyIGRlcGVuZGluZyBvblxuICogdGhlIHZhbHVlIG9mIGl0cyBmaXJzdCBieXRlLlxuICpcbiAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggd2l0aGluIHRoZSB2aWV3IG9mIHRoZSBmaXJzdCBieXRlIG9mXG4gKiAgICAgdGhlIGRlc2lyZWQgY2hhcmFjdGVyLlxuICogQHBhcmFtIHtEYXRhVmlld30gdmlldyBUaGUgZGF0YSB2aWV3IGNvbnRhaW5pbmcgdGhlIHRleHQuXG4gKiBAcmV0dXJucyB7TmV4dENoYXJJbmZvfSBJbmZvcm1hdGlvbiBhYm91dCB0aGUgbmV4dCBjaGFyYWN0ZXIgaW4gdGhlXG4gKiAgICAgZGF0YSB2aWV3LlxuICovXG5leHBvcnQgZnVuY3Rpb24gbmV4dENoYXIoaW5kZXgsIHZpZXcpIHtcbiAgY29uc3Qgd2lkdGggPSBuZXh0Q2hhcldpZHRoKGluZGV4LCB2aWV3KVxuICByZXR1cm4geyB3aWR0aCwgbmV4dDogdmlld1RvU3RyaW5nKGluZGV4LCB3aWR0aCwgdmlldykgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5leHQgYGNvdW50YCBjaGFyYWN0ZXJzIHN0YXJ0aW5nIGF0IHRoZSBpbmRleGVkIHBvc2l0aW9uXG4gKiB3aXRoaW4gdGhlIHZpZXcuIEVhY2ggb2YgdGhlc2UgY2hhcmFjdGVycyBtYXkgYmUgMS0sIDItLCAzLSwgb3JcbiAqIDQtYnl0ZSBjaGFyYWN0ZXJzIGRlcGVuZGluZyBvbiB0aGUgdmFsdWVzIG9mIHRoZWlyIGZpcnN0IGJ5dGVzLiBJZlxuICogdGhlcmUgYXJlIG5vdCBlbm91Z2ggY2hhcmFjdGVycyBsZWZ0LCB0aG9zZSByZW1haW5pbmcgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCB3aXRoaW4gdGhlIHZpZXcgb2YgdGhlIGZpcnN0IGJ5dGUgb2ZcbiAqICAgICB0aGUgZmlyc3QgZGVzaXJlZCBjaGFyYWN0ZXIuXG4gKiBAcGFyYW0ge0RhdGFWaWV3fSB2aWV3IFRoZSBkYXRhIHZpZXcgY29udGFpbmluZyB0aGUgdGV4dC5cbiAqIEBwYXJhbSB7bnVtYmVyfSBjb3VudCBUaGUgbnVtYmVyIG9mIGNoYXJhY3RlcnMgdG8gcmV0dXJuLlxuICogQHJldHVybnMge05leHRDaGFySW5mb30gSW5mb3JtYXRpb24gYWJvdXQgdGhlIG5leHQgY2hhcmFjdGVycyBpbiB0aGVcbiAqICAgICBkYXRhIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBuZXh0Q2hhcnMoaW5kZXgsIHZpZXcsIGNvdW50KSB7XG4gIGNvbnN0IHZpZXdMZW5ndGggPSB2aWV3LmJ5dGVMZW5ndGhcbiAgbGV0IHdpZHRoID0gMFxuXG4gIGZvciAoY29uc3QgXyBvZiByYW5nZShjb3VudCkpIHtcbiAgICBjb25zdCBpID0gaW5kZXggKyB3aWR0aFxuICAgIGlmIChpID49IHZpZXdMZW5ndGgpIGJyZWFrXG4gICAgd2lkdGggKz0gbmV4dENoYXJXaWR0aChpLCB2aWV3KVxuICB9XG4gIGlmIChpbmRleCArIHdpZHRoID49IHZpZXdMZW5ndGgpIHtcbiAgICB3aWR0aCA9IHZpZXdMZW5ndGggLSBpbmRleFxuICB9XG4gIHJldHVybiB7IHdpZHRoLCBuZXh0OiB2aWV3VG9TdHJpbmcoaW5kZXgsIHdpZHRoLCB2aWV3KSB9XG59XG5cbi8qKlxuICogU3Vycm91bmRzIHRoZSBzdXBwbGllZCBzdHJpbmcgaW4gc2luZ2xlIHF1b3Rlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyIFRoZSBzdHJpbmcgdG8gc3Vycm91bmQgaW4gc2luZ2xlIHF1b3Rlcy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIHN0cmluZywgbGVkIGFuZCB0cmFpbGVkIGJ5IHNpbmdsZSBxdW90ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBxdW90ZShzdHIpIHtcbiAgcmV0dXJuIGAnJHtzdHJ9J2Bcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGFycmF5IG9mIHR3byBjb3BpZXMgb2YgdGhlIHByb3ZpZGVkIHZhbHVlLlxuICpcbiAqIFRoaXMgc29ydCBvZiBlbXVsYXRlcyAqYXMtcGF0dGVybnMqIGluIGEgbGltaXRlZCB3YXkgaW4gSmF2YVNjcmlwdC5cbiAqIEluIGxhbmd1YWdlcyBsaWtlIEhhc2tlbGwgYW5kIE1MLCB3aGVuIHBhdHRlcm4gbWF0Y2hpbmcgaXMgZG9uZSxcbiAqIHRoZXJlIGlzIGEgY29uc3RydWN0IHRvIGJlIGFibGUgdG8gcmV0YWluIGEgbGFyZ2VyIHBhcnQgb2YgdGhlXG4gKiBkZXN0cnVjdHVyZWQgcGF0dGVybiB3aGlsZSBhbHNvIGJyZWFraW5nIGl0IGRvd24gZnVydGhlci4gSW4gSGFza2VsbCxcbiAqXG4gKiBgYGBoYXNrZWxsXG4gKiAoaGVhZCA6IHRhaWwpID0gWzEsIDIsIDMsIDQsIDVdXG4gKiBgYGBcbiAqXG4gKiB3aWxsIGFzc2lnbiBgMWAgdG8gYGhlYWRgLCBhbmQgYFsyLCAzLCA0LCA1XWAgdG8gYHRhaWxgLiBUaGlzIGNhbiBiZVxuICogZG9uZSBpbiBKYXZhU2NyaXB0IGFzIHdlbGwsIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBqYXZhc2NyaXB0XG4gKiBjb25zdCBbaGVhZCwgLi4udGFpbF0gPSBbMSwgMiwgMywgNCwgNV1cbiAqIGBgYFxuICpcbiAqIEhvd2V2ZXIsIEhhc2tlbGwgY2FuIGdvIGZhcnRoZXI6IGl0IGNhbiBhbHNvIGFzc2lnbiB0aGUgZW50aXJlIGxpc3RcbiAqIGFzIGEgd2hvbGUgdG8gYW5vdGhlciB2YXJpYWJsZSB3aGlsZSBzdGlsbCBhc3NpZ25pbmcgaXRzIGVsZW1lbnRzIGFzXG4gKiBhYm92ZS4gSXQncyBkb25lIGxpa2UgdGhpczpcbiAqXG4gKiBgYGBoYXNrZWxsXG4gKiBsaXN0IEAgKGhlYWQgOiB0YWlsKSA9IFsxLCAyLCAzLCA0LCA1XVxuICogYGBgXG4gKlxuICogVGhpcyB3aWxsLCBpbiBhZGRpdGlvbiB0byB0aGUgYXNzaWdubWVudHMgYWJvdmUsIGFzc2lnbiBgWzEsIDIsIDMsIDQsXG4gKiA1XWAgdG8gYGxpc3RgLiBUaGUgYEBgIHNpZ24gaXMgcmVhZCAqYXMqLCBhbmQgdGhpcyBjb25zdHJ1Y3QgaXNcbiAqIGNhbGxlZCBhbiAqYXMtcGF0dGVybiogKHBlcmhhcHMgYmVjYXVzZSB0aGUgTUwgd2F5IG9mIGRvaW5nIGl0IHVzZXNcbiAqIHRoZSBgYXNgIGtleXdvcmQgaW5zdGVhZCBvZiB0aGUgYEBgIHN5bWJvbCkuXG4gKlxuICogVGhlcmUgaXMgbm8gZmFjaWxpdHkgdG8gZG8gdGhpcyBpbiBKYXZhU2NyaXB0LiBCdXQgdGhlcmUgYXJlIG1hbnlcbiAqIHBsYWNlcyBpbiB0aGlzIGxpYnJhcnkgd2hlcmUgYSBgUmVwbHlgIGlzIGRlc2N0dXJjdHVyZWQgaW50byBpdHNcbiAqIGBDb250ZXh0YCBhbmQgYFJlc3VsdGAgZWxlbWVudHMsIHlldCB0aGVyZSBpcyBhIG5lZWQgdG8gY29uZGl0aW9uYWxseVxuICogdXNlIHRoZSBlbnRpcmUgYFJlcGx5YCBhcyB3ZWxsIChub3JtYWxseSB0byByZXR1cm4gaXQgaWYgc29tZVxuICogY29uZGl0aW9uIGlzIG1ldCkuIFJhdGhlciB0aGFuIGNyZWF0ZSBhIG5ldyBgUmVwbHlgIGZyb20gdGhlc2UgcGFydHMsXG4gKiBgdHdpbmAgY2FuIGJlIHVzZWQgdG8gZHVwbGljYXRlIHRoZSByZWZlcmVuY2VzIHRvIHRoZSBgUmVwbHlgLiBUaGVuXG4gKiBvbmx5ICpvbmUqIG9mIHRoZSBkdXBsaWNhdGUgcmVmZXJlbmNlcyBjYW4gYmUgZGVzdHJ1Y3R1cmVkLCB3aGlsZSB0aGVcbiAqIG90aGVyIG9uZSBpcyByZXRhaW5lZCBhcyBhIHdob2xlLlxuICpcbiAqIGBgYGphdmFzY3JpcHRcbiAqIGNvbnN0IFtyZXBseSwgW2NvbnRleHQsIHJlc3VsdF1dID0gdHdpbihwYXJzZXIoY3R4KSlcbiAqIGBgYFxuICpcbiAqIEFzLXBhdHRlcm5zIGNhbiBiZSB1c2VkIG9uIHBpZWNlcyBvZiBhIHBhdHRlcm4gaW5zdGVhZCBvZiB0aGUgZW50aXJlXG4gKiBwYXR0ZXJuLCBhbmQgYHR3aW5gIGNhbm5vdCBkbyB0aGF0LiBCdXQgaXQgc2VydmVzIGZvciB3aGF0IGlzIG5lZWRlZFxuICogaW4gS2Vzc2VsLlxuICpcbiAqIEBwYXJhbSB7UmVwbHl9IHZhbHVlIEEgcmVwbHkgdGhhdCBuZWVkcyB0byBiZSBkZXN0cnVjdHVyZWQgd2hpbGVcbiAqICAgICBtYWludGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgd2hvbGUuXG4gKiBAcmV0dXJucyB7W1JlcGx5LCBSZXBseV19IEFuIGFycmF5IGNvbnRhaW5pbmcgdHdvIGNvcGllcyBvZiB0aGVcbiAqICAgICByZXBseS4gT25lIGNhbiBiZSBkZXN0cnVjdHVyZWQgd2hpbGUgdGhlIG90aGVyIGlzIHJldGFpbmVkIHdob2xlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHVwKHZhbHVlKSB7XG4gIHJldHVybiBbdmFsdWUsIHZhbHVlXVxufVxuXG4vKipcbiAqIENvbW1hLXNlcGFyYXRlcyAoYXMgbmVlZGVkKSB0aGUgc3RyaW5ncyBpbiB0aGUgcHJvdmlkZWQgYXJyYXkuIElmXG4gKiB0aGUgYXJyYXkgaXMgZW1wdHksIHRoZSByZXN1bHQgd2lsbCBiZSBhbiBlbXB0eSBzdHJpbmc7IGlmIHRoZSBhcnJheVxuICogaGFzIG9ubHkgb25lIGVsZW1lbnQsIHRoYXQgZWxlbWVudCB3aWxsIGJlIHJldHVybmVkLiBJZiB0aGUgYXJyYXkgaGFzXG4gKiB0d28gZWxlbWVudHMsIHRoZXkgd2lsbCBiZSBqb2luZWQgd2l0aCAnIG9yICcgYmV0d2VlbiB0aGVtLiBJZiB0aGVcbiAqIGFycmF5IGlzIGxvbmdlciB0aGFuIHRoYXQsIGFsbCBlbGVtZW50cyB3aWxsIGJlIGNvbW1hLXNlcGFyYXRlZCB3aXRoXG4gKiBhbiBhZGRpdGlvbmFsICdvcicgYmV0d2VlbiB0aGUgbGFzdCB0d28gZWxlbWVudHMgKE94Zm9yZCBjb21tYVxuICogc3R5bGUpLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IG1lc3NhZ2VzIFRoZSBzdHJpbmdzIHRoYXQgbmVlZCB0byBiZSBqb2luZWQgaW50b1xuICogICAgIGEgY29tbWEtc2VwYXJhdGVkIHN0cmluZy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBtZXNzYWdlcyBqb2luZWQgaW50byBhIHNpbmdsZSBzdHJpbmcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21tYVNlcGFyYXRlKG1lc3NhZ2VzKSB7XG4gIHN3aXRjaCAobWVzc2FnZXMubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gJydcbiAgICBjYXNlIDE6IHJldHVybiBtZXNzYWdlc1swXVxuICAgIGNhc2UgMjogcmV0dXJuIG1lc3NhZ2VzLmpvaW4oJyBvciAnKVxuICAgIGRlZmF1bHQ6IHtcbiAgICAgIGNvbnN0IG1zZ3MgPSBtZXNzYWdlcy5zbGljZSgpXG4gICAgICBjb25zdCBsYXN0ID0gbXNncy5wb3AoKVxuICAgICAgcmV0dXJuIGAke21zZ3Muam9pbignLCAnKX0sIG9yICR7bGFzdH1gXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQXVnbWVudHMgYSBmYWN0b3J5IGZ1bmN0aW9uIHRvIGJlIGFibGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgaXRcbiAqIGNyZWF0ZWQgYW4gYXJiaXRyYXJ5IG9iamVjdC4gVGhlIGZhY3RvcnkgZnVuY3Rpb24gaXMgYXNzaWduZWQgYW5cbiAqIGFkZGl0aW9uYWwgcHJvcGVydHkgKGJ5IGRlZmF1bHQgbmFtZWQgYGNyZWF0ZWRgLCBjYW4gYmUgY2hhbmdlZCBieVxuICogcGFzc2luZyBpbiB0aGUgYHByb3BgIGFyZ3VtZW50KSB3aGljaCBpcyBhIGZ1bmN0aW9uIHRoYXQgdGFrZXMgYW5cbiAqIG9iamVjdCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGZhY3RvcnkgY3JlYXRlZCBpdCBvciBgZmFsc2VgIGlmIGl0XG4gKiBkaWQgbm90LlxuICpcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGZuIFRoZSBmYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBhdWdtZW50ZWQgd2l0aFxuICogICAgIHRoZSBuZXcgcHJvcGVydHkuXG4gKiBAcGFyYW0ge3N0cmluZ3xzeW1ib2x9IFtwcm9wPSdjcmVhdGVkJ10gVGhlIHByb3BlcnR5IHRoYXQgd2lsbCBiZVxuICogICAgIGFkZGVkIHRvIHRoZSBmYWN0b3J5IGZ1bmN0aW9uLlxuICogQHJldHVybnMge2Z1bmN0aW9ufSBUaGUgYXVnbWVudGVkIGZhY3RvcnkgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFjayhmbiwgcHJvcCA9ICdjcmVhdGVkJykge1xuICBjb25zdCB0cmFja2VkID0gbmV3IFdlYWtTZXQoKVxuXG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGNyZWF0ZWQgPSBmbiguLi5hcmdzKVxuICAgICAgdHJhY2tlZC5hZGQoY3JlYXRlZClcbiAgICAgIHJldHVybiBjcmVhdGVkXG4gICAgfSxcbiAgICBwcm9wLFxuICAgIHsgdmFsdWU6IHRyYWNrZWQuaGFzLmJpbmQodHJhY2tlZCkgfSxcbiAgKVxufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIHRvIGl0cyBzdHJpbmcgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCcxc3QnYCwgYDE3MjlgIGJlY29tZXMgYCcxNzI5dGgnYCwgZXRjLilcbiAqXG4gKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIHRvIGNvbnZlcnQgaW50byBhbiBvcmRpbmFsLlxuICogQHJldHVybnMge3N0cmluZ30gVGhlIHNhbWUgbnVtYmVyIGluIGl0cyBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRpbmFsKG4pIHtcbiAgY29uc3Qgc3VmZml4ZXMgPSBbJ3RoJywgJ3N0JywgJ25kJywgJ3JkJ11cbiAgY29uc3QgdiA9IG4gJSAxMDBcbiAgcmV0dXJuIG4gKyAoc3VmZml4ZXNbKHYgLSAyMCkgJSAxMF0gPz8gc3VmZml4ZXNbdl0gPz8gc3VmZml4ZXNbMF0pXG59XG5cbmNvbnN0IG51bXMgPSBbXG4gICd6ZXJvJywgJ29uZScsICd0d28nLCAndGhyZWUnLCAnZm91cicsICdmaXZlJywgJ3NpeCcsICdzZXZlbicsICdlaWdodCcsXG4gICduaW5lJywgJ3RlbicsICdlbGV2ZW4nLCAndHdlbHZlJywgJ3RoaXJ0ZWVuJywgJ2ZvdXJ0ZWVuJywgJ2ZpZnRlZW4nLFxuICAnc2l4dGVlbicsICdzZXZlbnRlZW4nLCAnZWlnaHRlZW4nLCAnbmluZXRlZW4nLFxuXVxuY29uc3Qgb25lcyA9IFtcbiAgJ3plcm90aCcsICdmaXJzdCcsICdzZWNvbmQnLCAndGhpcmQnLCAnZm91cnRoJywgJ2ZpZnRoJywgJ3NpeHRoJywgJ3NldmVudGgnLFxuICAnZWlnaHRoJywgJ25pbnRoJywgJ3RlbnRoJywgJ2VsZXZlbnRoJywgJ3R3ZWxmdGgnLCAndGhpcnRlZW50aCcsXG4gICdmb3VydGVlbnRoJywgJ2ZpZnRlZW50aCcsICdzaXh0ZWVudGgnLCAnc2V2ZW50ZWVudGgnLCAnZWlnaHRlZW50aCcsXG4gICduaW5ldGVlbnRoJyxcbl1cbmNvbnN0IHRlbnMgPSBbXG4gICd0d2VudCcsICd0aGlydCcsICdmb3J0JywgJ2ZpZnQnLCAnc2l4dCcsICdzZXZlbnQnLCAnZWlnaHQnLCAnbmluZXQnLFxuXVxuY29uc3QgZ3JvdXBzID0gW1xuICAnaHVuZHJlZCcsICd0aG91c2FuZCcsICdtaWxsaW9uJywgJ2JpbGxpb24nLCAndHJpbGxpb24nLCAncXVhZHJpbGxpb24nLFxuXVxuXG4vKipcbiAqIENvbnZlcnRzIGEgbnVtYmVyIGludG8gaXRzIHdvcmQtYmFzZWQgb3JkaW5hbCBmb3JtIChpLmUuLCBgMWAgYmVjb21lc1xuICogYCdmaXJzdCdgLCBgMTcyOWAgYmVjb21lcyBgJ29uZSB0aG91c2FuZCBzZXZlbiBodW5kcmVkXG4gKiB0d2VudHktbmludGgnYCwgZXRjLikuXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciB0byBjb252ZXJ0IGludG8gYW4gb3JkaW5hbC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzYW1lIG51bWJlciBpbiBpdHMgd29yZC1iYXNlZCBvcmRpbmFsIGZvcm0uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB3b3JkaW5hbChuKSB7XG4gIGlmIChuIDwgMCB8fCBuID4gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEFyZ3VtZW50IG11c3QgYmUgYmV0d2VlbiAwIGFuZCAke051bWJlci5NQVhfU0FGRV9JTlRFR0VSfWApXG4gIH1cbiAgY29uc3QgbWFnID0gTWF0aC5mbG9vcihNYXRoLmxvZzEwKG4pKVxuXG4gIGlmIChuIDwgMjApIHJldHVybiBvbmVzW25dXG4gIGlmIChtYWcgPT09IDEpIHtcbiAgICBjb25zdCBpID0gTWF0aC5mbG9vcihuIC8gMTApIC0gMlxuICAgIHJldHVybiBuICUgMTAgPT09IDAgPyBgJHt0ZW5zW2ldfWlldGhgIDogYCR7dGVuc1tpXX15LSR7b25lc1tuICUgMTBdfWBcbiAgfVxuICBpZiAobWFnID09PSAyKSB7XG4gICAgY29uc3QgZiA9IE1hdGguZmxvb3IobiAvIDEwICoqIG1hZylcbiAgICBjb25zdCB4ID0gbiAtIGYgKiAxMCAqKiBtYWdcbiAgICByZXR1cm4gYCR7bnVtc1tmXX0gJHtncm91cHNbMF19JHt4ID09PSAwID8gJ3RoJyA6IGAgJHt3b3JkaW5hbCh4KX1gfWBcbiAgfVxuXG4gIGNvbnN0IGcgPSBtYWcgJSAzICsgMVxuICBjb25zdCBpID0gTWF0aC5mbG9vcihtYWcgLyAzKVxuICBjb25zdCBmID0gTWF0aC5mbG9vcihuIC8gMTAgKiogKG1hZyAtIGcgKyAxKSlcbiAgY29uc3QgbSA9IChmdW5jdGlvbiBtdWx0KG51bSkge1xuICAgIGlmIChudW0gPCAyMCkgcmV0dXJuIG51bXNbbnVtXVxuXG4gICAgY29uc3QgcmVtID0gbnVtICUgMTBcbiAgICBpZiAobnVtIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYCR7dGVuc1tNYXRoLmZsb29yKG51bSAvIDEwKSAtIDJdfXkke1xuICAgICAgICByZW0gPT09IDAgPyAnJyA6IGAtJHtudW1zW3JlbV19YFxuICAgICAgfWBcbiAgICB9XG5cbiAgICBjb25zdCB4ID0gbnVtIC0gTWF0aC5mbG9vcihudW0gLyAxMDApICogMTAwXG4gICAgcmV0dXJuIGAke251bXNbTWF0aC5mbG9vcihudW0gLyAxMDApXX0gJHtncm91cHNbMF19JHtcbiAgICAgIHggPT09IDAgPyAndGgnIDogYCAke211bHQoeCl9YFxuICAgIH1gXG4gIH0oZikpXG4gIGNvbnN0IHggPSBuIC0gZiAqIDEwICoqIChtYWcgLSBnICsgMSlcbiAgcmV0dXJuIGAke219ICR7Z3JvdXBzW2ldfSR7eCA9PT0gMCA/ICd0aCcgOiBgICR7d29yZGluYWwoeCl9YH1gXG59XG5cbi8qKlxuICogUmV0dXJucyBhIHJlYXNvbmFibGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIGEgdmFsdWUuIFRoaXMgd2lsbCBtb3N0XG4gKiBvZnRlbiBiZSB0aGUgb3V0cHV0IGZyb20gYEpTT04uc3RyaW5naWZ5KClgLCB0aG91Z2ggcmVwcmVzZW50YXRpb25zXG4gKiBhcmUgYWxzbyBpbmNsdWRlZCBmb3IgdHlwZXMgdGhhdCBmdW5jdGlvbiBkb2Vzbid0IHN1cHBvcnQuXG4gKlxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gdHVybiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybnMge3N0cmluZ30gQSByZWFzb25hYmxlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgdmFsdWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdHJpbmdpZnkodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHJldHVybiAndW5kZWZpbmVkJ1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHBhcnNlci5jcmVhdGVkKHZhbHVlKSA/ICdwYXJzZXInIDogJ2Z1bmN0aW9uJ1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzeW1ib2wnKSByZXR1cm4gYFN5bWJvbCgke3ZhbHVlLmRlc2NyaXB0aW9ufSlgXG4gIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YWx1ZSlcbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBhcHByb3ByaWF0ZSBpbmRlZmluaXRlIGFydGljbGUgKCdhJyBvciAnYW4nKSB0byBhIHdvcmQgYmFzZWRcbiAqIG9uIGl0cyBmaXJzdCBsZXR0ZXIuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHByZXBlbmQgYW4gYXJ0aWNsZSB0by5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IFRoZSBzdHJpbmcgd2l0aCB0aGUgcHJlcGVuZGVkIGFydGljbGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhcnRpY2xpZnkoc3RyKSB7XG4gIHJldHVybiAnYWVpb3VBRUlPVScuaW5jbHVkZXMoc3RyWzBdKSA/IGBhbiAke3N0cn1gIDogYGEgJHtzdHJ9YFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRXJyb3IgdXRpbGl0aWVzXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZnVuY3Rpb24gdXNlZCB0byBjcmVhdGUgYSBmYWlsdXJlIHJlcGx5LiBUaGUgY29uZGl0aW9uXG4gKiBkZXRlcm1pbmVzIHdoZXRoZXIgdGhlIHJlcGx5IHdpbGwgYmUgZmF0YWwgKGB0cnVlYCkgb3Igbm90IChgZmFsc2VgKS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmRpdGlvbiBTaG91bGQgYmUgYHRydWVgIGZvciBhIGZhdGFsIGZhaWx1cmUgb3JcbiAqICAgICBgZmFsc2VgIGZvciBhIG5vbi1mYXRhbCBmYWlsdXJlLlxuICogQHJldHVybnMgVGhlIHJlcGx5IGZ1bmN0aW9uIGZvciBmYXRhbCBvciBub24tZmF0YWwgZmFpbHVyZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXBseUZuKGNvbmRpdGlvbikge1xuICByZXR1cm4gY29uZGl0aW9uID8gZmF0YWxSZXBseSA6IGZhaWxSZXBseVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBlcnJvciBsaXN0IGZvciBub24tYmFja3RyYWNrZWQgZXJyb3JzIGZyb20gdW5kZXJseWluZ1xuICogcGFyc2Vycy4gVGhlICdmJyBpcyBmb3IgJ2ZsYXQnOyB0aGlzIGZ1bmN0aW9uIHByb2R1Y2VzIGEgbm9uLW5lc3RlZFxuICogZXJyb3Igd2hvc2UgbWVzc2FnZSBpcyBiYXNlZCB1cG9uIHdoZXRoZXIgYG1gIGV4aXN0cyBvciBub3QuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG0gVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIG5ldyBlcnJvci4gVGhpcyB3aWxsXG4gKiAgICAgb25seSBiZSB1c2VkIGlmIGl0J3MgYWN0dWFsbHkgcHJlc2VudC5cbiAqIEBwYXJhbSB7RXJyb3JMaXN0fSBlcnJvcnMgVGhlIGVycm9ycyBnZW5lcmF0ZWQgYnkgdGhlIHVuZGVybHlpbmdcbiAqICAgICBwYXJzZXIuXG4gKiBAcmV0dXJucyB7RXJyb3JMaXN0fSBBIG5ldyBlcnJvciBsaXN0IHRoYXQgZG9lcyBub3QgdGFrZSBiYWNrdHJhY2tpbmdcbiAqICAgICBpbnRvIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBmZXJyb3IobSwgZXJyb3JzKSB7XG4gIHJldHVybiBtID09IG51bGwgPyBlcnJvcnMgOiBleHBlY3RlZChtKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBlcnJvciBsaXN0IGZvciBiYWNrdHJhY2tlZCBlcnJvcnMgZnJvbSB1bmRlcmx5aW5nXG4gKiBwYXJzZXJzLiBUaGUgJ24nIGlzIGZvciBuZXN0ZWQ7IHRoaXMgZnVuY3Rpb24gcHJvZHVjZXMgYSBuZXN0ZWRcbiAqIGVycm9yIHRoYXQgaW5zdGVhZCBiZSBhIGNvbXBvdW5kIGVycm9yIGlmIGBtYCBleGlzdHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG0gVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIG5ldyBlcnJvci4gVGhpcyB3aWxsXG4gKiAgICAgb25seSBiZSB1c2VkIGlmIGl0J3MgYWN0dWFsbHkgcHJlc2VudC5cbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGZyb20gdGhlIHBvaW50IHdoZXJlIHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdCB0aGF0IHRha2VzIGJhY2t0cmFja2luZyBpbnRvXG4gKiAgICAgYWNjb3VudC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5lcnJvcihtLCBjdHgsIGVycm9ycykge1xuICByZXR1cm4gbSA9PSBudWxsID8gbmVzdGVkKGN0eCwgZXJyb3JzKSA6IGNvbXBvdW5kKG0sIGN0eCwgZXJyb3JzKVxufVxuXG4vKipcbiAqIEdlbmVyYXRlcyBhbiBlcnJvciBsaXN0IHRoYXQgd2lsbCBvbmx5IHJlY29yZCBiYWNrdHJhY2tpbmdcbiAqIGluZm9ybWF0aW9uIGlmIHRoZSBwcm92aWRlZCBjb25kaXRpb24gaXMgdHJ1ZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGNvbmQgSWYgYHRydWVgLCB0aGUgbmV3IGVycm9yIGxpc3Qgd2lsbCBpbmNsdWRlXG4gKiAgICAgYmFja3RyYWNraW5nIGluZm9ybWF0aW9uLlxuICogQHBhcmFtIHtzdHJpbmd9IG0gVGhlIG1lc3NhZ2UgdXNlZCB0byBjcmVhdGUgdGhlIG5ldyBlcnJvci4gVGhpcyB3aWxsXG4gKiAgICAgb25seSBiZSB1c2VkIGlmIGl0J3MgYWN0dWFsbHkgcHJlc2VudC5cbiAqIEBwYXJhbSB7Q29udGV4dH0gY3R4IFRoZSBjb250ZXh0IGZyb20gdGhlIHBvaW50IHdoZXJlIHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgZXJyb3Igb2NjdXJyZWQuXG4gKiBAcGFyYW0ge0Vycm9yTGlzdH0gZXJyb3JzIFRoZSBlcnJvcnMgZ2VuZXJhdGVkIGJ5IHRoZSB1bmRlcmx5aW5nXG4gKiAgICAgcGFyc2VyLlxuICogQHJldHVybnMge0Vycm9yTGlzdH0gQSBuZXcgZXJyb3IgbGlzdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGJlcnJvcihjb25kLCBtLCBjdHgsIGVycm9ycykge1xuICByZXR1cm4gY29uZCA/IG5lcnJvcihtLCBjdHgsIGVycm9ycykgOiBmZXJyb3IobSwgZXJyb3JzKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==